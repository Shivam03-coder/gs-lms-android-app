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
          imageUrl: true,
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
      res.json(new ApiResponse(200, "Signup Successful", RegisteredUser));
    }
  );

  // SIGNIN
  public static UserSignin = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { emailAddress, password: plainPassword } = req.body;

      const registeredUser = await db.user.findUnique({
        where: { emailAddress },
        select: {
          id: true,
          name: true,
          emailAddress: true,
          password: true,
          imageUrl: true,
          role: true,
        },
      });

      if (!registeredUser) {
        throw new ApiError(400, "User does not exist");
      }

      const isPasswordCorrect = await verifyPassword(
        plainPassword,
        registeredUser.password
      );

      if (!isPasswordCorrect) {
        throw new ApiError(400, "Password is incorrect");
      }

      const { accessToken, refreshToken } = AuthUtility.generateTokens(
        registeredUser!
      );

      // Save refresh token in the database
      // await db.token.create({
      //   data:{
      //       userId: registeredUser.id,
      //       refreshToken,
      //   }
      // });

      const refinedUser = {
        name: registeredUser.name,
        emailAddress: registeredUser.emailAddress,
        imageUrl: registeredUser.imageUrl,
      };

      res.status(200).json(
        new ApiResponse(200, "Login successful", {
          accessToken,
          refreshToken,
          user: refinedUser,
        })
      );
    }
  );

  // USER PROFILE
  public static GetUserProfile = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      res.send(new ApiResponse(200, "Success", req.user));
    }
  );

  // VERIFY OTP

  public static VerifyOtp = AsyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { otp } = req.body;
    }
  );
}
