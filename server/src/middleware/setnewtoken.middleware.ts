import { NextFunction, Request, Response } from "express";
import { ApiError, AsyncHandler } from "@src/helpers/server-functions";
import { isTokenExpired, options } from "@src/helpers/shared-variables";
import { AuthUtility } from "@src/utils/auth-utils";

export const GetnewToken = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Retrieve the tokens from the headers (not from cookies for React Native)
      const accessToken = req.headers["authorization"]?.split(" ")[1];
      const refreshToken = req.headers["refresh-token"];

      if (!accessToken && !refreshToken) {
        throw new ApiError(401, "Unauthorized - Tokens not provided");
      }

      if (accessToken && !isTokenExpired(accessToken)) {
        req.headers["authorization"] = `Bearer ${accessToken}`;
      } else if (refreshToken) {
        const { newAccessToken, newRefreshToken } =
          await AuthUtility.RenewjwtTokens(refreshToken as string);

        // Update the headers and send the new tokens in the response
        req.headers["authorization"] = `Bearer ${newAccessToken}`;
        res
          .cookie("accessToken", newAccessToken, options)
          .cookie("refreshToken", newRefreshToken, options);

        // Store the new tokens in the response headers for React Native (manual handling of tokens)
        res.setHeader("accessToken", newAccessToken);
        res.setHeader("refreshToken", newRefreshToken);
      } else {
        // If no valid token or refresh token is found, reject the request
        throw new ApiError(401, "Unauthorized - Invalid or expired tokens");
      }

      // Continue to the next middleware/handler
      next();
    } catch (error) {
      console.error("Error in GetnewToken middleware:", error); // Log the error for debugging
      next(error);
    }
  }
);
