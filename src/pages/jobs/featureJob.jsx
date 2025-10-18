import React from "react";
import { useGetLatestJobsQuery } from "../../features/job/jobSlice";
import SingleJobCard from "../../components/card/jobs/single-job-card";
import { NavLink } from "react-router";

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in FeatureJob:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-10 text-red-600 text-lg font-medium">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function FeatureJob() {
  const { data, isLoading, isError, error } = useGetLatestJobsQuery();

  console.log("API Response:", data);

  // Ensure safe access to job list
  const latestJobs = data?.data?.content || [];

  // --- Loading State ---
  if (isLoading)
    return (
      <div className="text-center py-10 text-[#1A5276] font-medium text-lg">
        Loading featured jobs...
      </div>
    );

  // --- Error State ---
  if (isError)
    return (
      <div className="text-center py-10 text-red-600 text-lg font-medium">
        Error loading featured jobs.{" "}
        {error?.data?.message || "Please try again later."}
      </div>
    );

  // --- Main Section ---
  return (
    <ErrorBoundary>
      <section className="max-w-7xl mx-auto mb-16 px-4 font-poppins">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[32px] font-semibold text-[#1A5276] mb-2">
            Featured Jobs
          </h2>
          <p className="text-lg text-[#1A5276]">
            Freshly released job applications
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center cursor-pointer">
          {latestJobs.length > 0 ? (
            latestJobs.map((job) => (
              <SingleJobCard
                key={job.uuid}
                jobUuid={job.uuid}
                jobTitle={job.jobTitle}
                postDate={job.createdDate}
                location={job.location}
                salary={job.salary}
                Photos={job.jobPhotos || []}
              />
            ))
          ) : (
            <p className="text-center text-[#1A5276] col-span-full text-lg font-medium">
              No featured jobs available.
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <NavLink
            to="/jobs"
            className="inline-block bg-[#1A5276] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-blue-50 border border-transparent hover:border-[#1A5276] hover:text-[#1A5276] transition duration-300"
          >
            Find More Jobs →
          </NavLink>
        </div>
      </section>
    </ErrorBoundary>
  );
}
