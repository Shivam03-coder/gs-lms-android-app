import { ApiServices } from "../middleware/apiservices";
import { UserInfo } from "../types/api";
const headers = {
  "content-type": "application/json",
};

const ProtectedEndpoints = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    UserInfo: build.query<UserInfo, void>({
      query: () => ({
        url: "/auth/user",
        headers,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserInfoQuery } = ProtectedEndpoints;
