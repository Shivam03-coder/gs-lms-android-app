import { SERVER_URI } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the base query with prepareHeaders to conditionally add Authorization
const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URI,
  credentials: "include",
  prepareHeaders: async (headers) => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    if (refreshToken) {
      headers.set("refresh-token", refreshToken);
    }
    return headers;
  },
});

export const ApiServices = createApi({
  reducerPath: "apiservices",
  baseQuery,
  tagTypes: ["user"],
  endpoints: (build) => ({}),
});

export default ApiServices;
