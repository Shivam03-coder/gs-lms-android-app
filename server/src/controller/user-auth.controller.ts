import { Request, Response } from "express";
import {
  hashPassword,
  isEmailValid,
  isWeakpassword,
  options,
  verifyPassword,
} from "@src/helpers/shared-variables";
import {
  ApiError,
  ApiResponse,
  AsyncHandler,
} from "@src/helpers/server-functions";
import { db } from "@src/db";
import { AuthUtility } from "@src/utils/auth-utils";
import { ServerUtility } from "@src/utils/server-utils";
import { userInfo } from "os";

export class UserAuthController {
  // SIGNUP
  public static UserSignup = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { name, emailAddress, password: plainPassword } = req.body;

      // Validate required fields
      if (!name || !emailAddress || !plainPassword) {
        throw new ApiError(400, "Fields cannot be empty");
      }

      // Validate email format
      if (!isEmailValid(emailAddress)) {
        throw new ApiError(400, "Email is not valid");
      }

      // Validate password strength
      if (!isWeakpassword(plainPassword)) {
        throw new ApiError(400, "Password is weak");
      }

      // Check if email already exists
      const isEmailAlreadyExist = await db.user.findUnique({
        where: {
          emailAddress,
        },
        select: {
          id: true,
        },
      });

      if (isEmailAlreadyExist) {
        throw new ApiError(400, "Email already exists");
      }

      // Hash the password
      const hashedPassword = await hashPassword(plainPassword);

      // Create new user in the database
      const RegisteredUser = await db.user.create({
        data: {
          name,
          emailAddress,
          password: hashedPassword,
        },
        select: {
          name: true,
          emailAddress: true,
          id: true,
        },
      });

      // send OTP

      if (RegisteredUser && RegisteredUser.emailAddress) {
        const user = new ServerUtility(
          RegisteredUser.emailAddress,
          RegisteredUser.id
        );
        await user.SendEmail();
      } else {
        console.error("Email address is missing!");
      }

      // Respond with success
      res
        .status(200)
        .json(new ApiResponse(200, "Signup Successful", RegisteredUser));
    }
  );

  // SIGNIN

  public static UserSignin = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { emailAddress, password } = req.body;

      const registeredUser = await db.user.findUnique({
        where: { emailAddress },
      });

      if (!registeredUser) {
        throw new ApiError(404, "USER DOESNOT EXISTS");
      }

      const isPasswordCorrect = await verifyPassword(
        password,
        registeredUser.password
      );

      if (!isPasswordCorrect) {
        throw new ApiError(400, "Password is incorrect");
      }

      const { accessToken, refreshToken } = AuthUtility.generateTokens(
        registeredUser!
      );

      if (!accessToken || !refreshToken) {
        throw new ApiError(400, "TOKEN NOT FOUND");
      }

      const expiresAt = new Date(Date.now() + 12 * 24 * 60 * 60 * 1000);

      try {
        await db.token.upsert({
          where: {
            id: registeredUser.id,
          },
          update: {
            refreshToken,
          },
          create: {
            refreshToken,
            expiresAt,
            userId: registeredUser.id,
          },
        });
        console.log("Token saved in DB succesfully");
      } catch (error) {
        console.log(error);
      }

      res.status(200).json(
        new ApiResponse(200, "Login successful", {
          accessToken,
          refreshToken,
        })
      );
    }
  );

  // VERIFY OTP

  public static VerifyOtp = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { otp, email } = req.body;

      // Find the user by email address
      const user = await db.user.findUnique({
        where: { emailAddress: email },
      });

      if (!user) {
        throw new ApiError(404, "USER NOT FOUND");
      }

      // Find the OTP related to this user (ensure OTP exists and has not expired)
      const userRelatedOtp = await db.otp.findUnique({
        where: { userId: user.id },
      });

      if (!userRelatedOtp) {
        throw new ApiError(404, "OTP NOT FOUND");
      }

      const currentTime = new Date();

      // Validate OTP expiration and correctness in a single block
      if (currentTime > userRelatedOtp.expireAt) {
        throw new ApiError(400, "OTP EXPIRED");
      }

      if (otp !== userRelatedOtp.otp) {
        throw new ApiError(400, "INVALID OTP");
      }

      // OTP is valid and not expired, proceed with successful response
      res.status(200).json(new ApiResponse(200, "OTP VERIFIED SUCCESSFULLY"));
    }
  );

  // USER PROFILE

  public static GetUserProfile = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      res.send(new ApiResponse(200, "Success", req.user));
    }
  );
}
