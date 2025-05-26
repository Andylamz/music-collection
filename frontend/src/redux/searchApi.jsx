import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  endpoints: function (builder) {
    return {
      getSearchList: builder.query({
        query: (songName) => ({
          url: "/tracks",
          params: {
            client_id: apiKey,
            format: "jsonpretty",
            limit: 20,
            namesearch: songName,
            order: "popularity_total",
          },
        }),
      }),
    };
  },
});

export const { useGetSearchListQuery } = searchApi;
export default searchApi;
