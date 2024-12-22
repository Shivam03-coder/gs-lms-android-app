import { appEnvConfigs } from "@src/configs";
import { db } from "@src/db";
import jwt from "jsonwebtoken";
import { UserType } from "@src/types/types";
import { ApiError } from "@src/helpers/server-functions";

export class AuthUtility {
  // Function to generate access and refresh tokens for a user
  public static generateTokens = (
    registeredUser: UserType
  ): { accessToken: string; refreshToken: string } => {
    const accessTokenSecret = appEnvConfigs.ACCESS_TOKEN_SECRET_KEY;
    const refreshTokenSecret = appEnvConfigs.REFRESH_TOKEN_SECRET_KEY;

    if (!accessTokenSecret || !refreshTokenSecret) {
      throw new ApiError(409, "Token signing keys are not properly configured");
    }

    const signToken = (key: string, expiresIn: string) =>
      jwt.sign(
        { _id: registeredUser.id, email: registeredUser.emailAddress },
        key,
        { expiresIn }
      );

    return {
      accessToken: signToken(accessTokenSecret, "4d"),
      refreshToken: signToken(refreshTokenSecret, "12d"),
    };
  };

  // Function to renew JWT tokens using an old refresh token
  public static RenewjwtTokens = async (oldRefreshToken: string) => {
    try {
      // Find the user associated with the old refresh token
      const authenticatedUser = await db.token.findUnique({
        where: {
          refreshToken: oldRefreshToken,
        },
        include: {
          user: true,
        },
      });

      if (!authenticatedUser) {
        throw new ApiError(409, "Please login again");
      }

      // Verify the old refresh token
      try {
        const refreshTokenSecret = appEnvConfigs.REFRESH_TOKEN_SECRET_KEY;
        if (!refreshTokenSecret) {
          throw new ApiError(500, "Refresh token secret key is missing");
        }

        jwt.verify(oldRefreshToken, refreshTokenSecret);
      } catch (err) {
        throw new ApiError(409, "Invalid refresh token, please login again");
      }

      const { user } = authenticatedUser;

      if (!user) {
        throw new ApiError(404, "User not found");
      }

      // Generate new tokens
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        AuthUtility.generateTokens(user);

      // Update the refresh token in the database
      await db.token.update({
        where: { refreshToken: oldRefreshToken },
        data: { refreshToken: newRefreshToken },
      });

      // Return the new tokens
      return { newAccessToken, newRefreshToken };
    } catch (err: any) {
      // Handle unexpected errors
      throw new ApiError(500, err.message || "Unexpected error occurred");
    }
  };
}
