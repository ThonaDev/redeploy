import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query({
      query: () => ({
        url: "/jobs?pageNumber=0&pageSize=20",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetJobsQuery } = jobApi;
