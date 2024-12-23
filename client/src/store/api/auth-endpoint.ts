import { ApiServices } from "../middleware/apiservices";
import {
  ApiRes,
  EmailVerifyInfo,
  LoginResponse,
  UserCredentials,
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

    LoginUser: build.mutation<LoginResponse, UserCredentials>({
      query: (UserCred) => ({
        url: "/auth/signin",
        method: "POST",
        headers,
        body: UserCred,
      }),
    }),
  }),
});

export const {
  useSignupuserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
} = AuthEndpoints;
