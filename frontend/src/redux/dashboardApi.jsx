import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE.BASE.BACKEND.URL;

const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/favourite`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["referesh"],
  endpoints: function (builder) {
    return {
      getFavouriteList: builder.mutation({
        query: () => "/",
        method: "GET",
        providesTags: ["favourite"],
      }),
      addFavourite: builder.mutation({
        query: ({ trackId, title, name, image }) => ({
          url: "/",
          method: "POST",
          body: { trackId, title, name, image },
        }),
        invalidatesTags: ["favourite"],
      }),
      removeFavourite: builder.mutation({
        query: (trackId) => ({
          url: "/",
          method: "DELETE",
          body: { trackId },
        }),
        invalidatesTags: ["favourite"],
      }),
    };
  },
});
export const {
  useGetFavouriteListMutation,
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} = dashboardApi;
export default dashboardApi;
