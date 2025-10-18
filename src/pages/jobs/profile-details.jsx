import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <h1 className="text-3xl font-bold text-[#1A5276]">Profile Page</h1>
      <p>This is your profile page, accessible only to authenticated users.</p>
      {/* Add your profile content here */}
    </div>
  );
}