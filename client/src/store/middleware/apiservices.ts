import { SERVER_URI } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URI,
  credentials: "include",
});

export const ApiServices = createApi({
  reducerPath: "apiservices",
  baseQuery,
  tagTypes: ["user"],
  endpoints: (build) => ({}),
});
