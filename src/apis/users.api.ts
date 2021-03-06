import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/User";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/users",
  }),
  endpoints: (build) => ({
    getUser: build.query<User, undefined>({
      query: () => ({
        url: "/user",
        method: "GET",
        withCredentials: true,
      }),
    }),
  }),
});

export const { useGetUserQuery } = usersApi;
