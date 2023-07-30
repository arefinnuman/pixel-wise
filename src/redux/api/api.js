import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5555/api/v1/" }),

  endpoints: (builder) => ({
    getCatagoriesName: builder.query({
      query: () => "/products/categories/",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCatagoriesNameQuery } = apiSlice;
