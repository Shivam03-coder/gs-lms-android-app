import { EndpointDefinitions } from "@reduxjs/toolkit/query";
import { ApiServices } from "../middleware/apiservices";

const headers = {
  "content-type": "application/json",
};

const AuthEndpoints = ApiServices.injectEndpoints<EndpointDefinitions>({
  endpoints: (build) => ({
    Signupuser: build.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        headers,
        body: userInfo,
      }),
    }),
  }),
});
