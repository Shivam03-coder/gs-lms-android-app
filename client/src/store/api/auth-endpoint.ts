import { ApiServices } from "../middleware/apiservices";
import {
  ApiRes,
  EmailVerifyInfo,
  UserSignUpInfo,
  UserSignupResData,
} from "../types/api";

const headers = {
  "content-type": "application/json",
};

const AuthEndpoints = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    Signupuser: build.mutation<UserSignupResData, UserSignUpInfo>({
      query: (userInfo) => ({
        url: "/auth/signup",
        headers,
        method: "POST",
        body: userInfo,
      }),
    }),

    VerifyUser: build.mutation<ApiRes, EmailVerifyInfo>({
      query: (otp) => ({
        url: "/auth/verify-user",
        method: "POST",
        headers,
        body: otp,
      }),
    }),
  }),
});

export const { useSignupuserMutation ,useVerifyUserMutation } = AuthEndpoints;
