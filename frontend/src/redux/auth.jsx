import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_BACKEND_URL;
const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth`,
  }),
  tagTypes: ["referesh"],
  endpoints: function (builder) {
    return {
      postAuthData: builder.mutation({
        query: ({ username, password }) => ({
          url: "/create",
          method: "POST",
          body: {
            username: username,
            password: password,
          },
        }),
      }),
      postLoginData: builder.mutation({
        query: ({ username, password }) => ({
          url: "/login",
          method: "POST",
          body: { username: username, password: password },
        }),
        invalidatesTags: ["favourite"],
      }),
      logout: builder.mutation({
        query: () => ({
          url: "/logout",
          method: "POST",
        }),
      }),
    };
  },
});
export const {
  usePostAuthDataMutation,
  usePostLoginDataMutation,
  useLogoutMutation,
} = authApi;
export default authApi;
