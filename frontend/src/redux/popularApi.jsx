import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const popularApi = createApi({
  reducerPath: "popularApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  endpoints: function (builder) {
    return {
      getPopularList: builder.query({
        query: () => ({
          url: "tracks/",
          params: {
            client_id: apiKey,
            format: "jsonpretty",
            order: "popularity_month",
            limit: 20,
          },
        }),
      }),
    };
  },
});

export const { useGetPopularListQuery } = popularApi;
export default popularApi;
