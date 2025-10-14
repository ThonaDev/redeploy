import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Fetch all jobs for filter options (large page size to get all data)
    getAllJobs: build.query({
      query: () => ({
        url: "/jobs?pageNumber=0&pageSize=1000",
        method: "GET",
      }),
    }),
    // Fetch paginated jobs for main display
    getPaginatedJobs: build.query({
      query: ({ pageNumber = 0, pageSize = 6 }) => ({
        url: `/jobs?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=RANDOM`,
        method: "GET",
      }),
    }),
    // Fetch latest 3 jobs
    getLatestJobs: build.query({
      query: () => ({
        url: "/jobs?pageNumber=0&pageSize=3&sortBy=createdDate&sortDirection=desc",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, useGetPaginatedJobsQuery, useGetLatestJobsQuery } = jobApi;