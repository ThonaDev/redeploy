import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Fetch all jobs for filter options
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
    // Fetch job by UUID
    getJobById: build.query({
      query: (jobUuid) => ({
        url: `/jobs/get?job=${jobUuid}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetPaginatedJobsQuery,
  useGetLatestJobsQuery,
  useGetJobByIdQuery, // Export the new hook
} = jobApi;