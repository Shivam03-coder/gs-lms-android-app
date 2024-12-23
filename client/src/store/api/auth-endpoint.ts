import { ApiServices } from "../middleware/apiservices";
import { UserSignUpInfo, UserSignupResData } from "../types/api";

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
  }),
});

export const { useSignupuserMutation } = AuthEndpoints;
