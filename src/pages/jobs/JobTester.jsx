// JobTester.jsx
import { useGetJobsQuery } from "../../features/job/jobSlice"; // adjust path if needed


export default function JobTester() {
  const { data, error, isLoading } = useGetJobsQuery();

  if (isLoading) {
    console.log("⏳ Loading jobs...");
    return <p>Loading...</p>;
  }

  if (error) {
    console.error("❌ Error fetching jobs:", error);
    return <p>Error fetching jobs. Check console.</p>;
  }

  if (data) {
    console.log("✅ Full API response:", data);
    console.log("📌 Jobs array:", data.data.content);
  }

  return (
    <div>
      <h2>Check console for API response ✅</h2>
      {data?.data?.content?.map((job) => (
        <div key={job.uuid}>
          <strong>{job.jobTitle}</strong> — {job.location}
        </div>
      ))}
    </div>
  );
}

