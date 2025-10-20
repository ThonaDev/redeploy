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
    // Apply for a job
    applyForJob: build.mutation({
      query: ({ userUuid, jobUuid, cvUuid, coverLetterUrl = null }) => ({
        url: "/applications",
        method: "POST",
        body: { userUuid, jobUuid, cvUuid, coverLetterUrl },
      }),
      invalidatesTags: ["User"], // Optional: Invalidate user data if application history is tied to user
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetPaginatedJobsQuery,
  useGetLatestJobsQuery,
  useGetJobByIdQuery,
  useApplyForJobMutation,
} = jobApi;