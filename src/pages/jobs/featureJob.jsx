import React from "react";
import { useGetLatestJobsQuery } from "../../features/job/jobSlice";
import SingleJobCard from "../../components/card/jobs/single-job-card";
import { NavLink } from "react-router";

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in FeatureJob:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-4 text-red-600">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function FeatureJob() {
  // Fetch the latest jobs with logging to debug structure
  const { data, isLoading, isError, error } = useGetLatestJobsQuery();

  // Debug the data structure
  console.log("API Response:", data);

  // Adjust based on API response (jobs are in data.content)
  const latestJobs = data?.data?.content || []; // Safely access content array, default to empty array

  if (isLoading)
    return <div className="text-center py-4">Loading featured jobs...</div>;
  if (isError)
    return (
      <div className="text-center py-4 text-red-600">
        Error loading featured jobs.{" "}
        {error?.data?.message || "Please try again later."}
      </div>
    );

  return (
    <ErrorBoundary>
      <section className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-[32px] font-semibold text-[#1A5276] mb-2">
            Featured Jobs
          </h2>
          <p className="text-lg text-[#1A5276]">Freshly released job applications</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestJobs.length > 0 ? (
            latestJobs.map((job) => (
              <SingleJobCard
                key={job.uuid}
                jobUuid={job.uuid}
                jobTitle={job.jobTitle}
                postDate={job.createdDate}
                location={job.location}
                salary={job.salary}
                Photos={job.jobPhotos || []} // Added default empty array to prevent errors
              />
            ))
          ) : (
            <p className="text-center text-[#1A5276] col-span-full">
              No featured jobs available.
            </p>
          )}
        </div>
        <div className="text-center mt-12">
          <NavLink
            to="/jobs"
            className="inline-block bg-[#1A5276] text-white px-6 py-3 sm:px-8 sm:py-4 font-poppins rounded-full font-medium hover:bg-blue-50 border border-transparent hover:border-[#1A5276] hover:text-[#1A5276] transition"
          >
            Find More Jobs →
          </NavLink>
        </div>
      </section>
    </ErrorBoundary>
  );
}