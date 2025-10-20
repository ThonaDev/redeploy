import React, { useState } from "react";
import { useGetUserQuery, useGetLatestUserCVQuery } from "../../features/api/apiSlice";
import { useApplyForJobMutation } from "../../features/job/jobSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ApplyJob = ({ jobUuid, onClose }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch user data to get user UUID
  const { data: userData, isLoading: userLoading, error: userError } = useGetUserQuery();
  console.log("userData:", userData);

  // Fetch the latest CV
  const { data: latestCV, isLoading: cvLoading, error: cvError } = useGetLatestUserCVQuery(userData?.uuid, {
    skip: !userData?.uuid,
  });
  console.log("latestCV:", latestCV);
  console.log("cvError:", cvError);

  // Apply for job mutation
  const [applyForJob, { isLoading: applyLoading }] = useApplyForJobMutation();

  const handleViewCV = () => {
    if (latestCV && latestCV.fileUrl) {
      console.log("Attempting to open CV:", latestCV.fileUrl);
      if (!latestCV.fileUrl.toLowerCase().endsWith(".pdf")) {
        toast.error("Invalid CV file format. Please upload a valid PDF.", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }
      window.open(latestCV.fileUrl, "_blank");
    } else {
      toast.error("No CV found. Please upload a CV in your profile first.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleConfirm = async () => {
    if (!userData?.uuid) {
      setError("⚠️ User data not available. Please log in again.");
      toast.error("User data not available. Redirecting to login...", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/login"), 3000);
      return;
    }

    if (!latestCV) {
      setError("⚠️ No CV available. Please upload a CV in your profile first.");
      console.log("No CV data returned from useGetLatestUserCVQuery");
      toast.error("No CV available. Please upload a CV in your profile first.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (!latestCV.uuid) {
      setError("⚠️ CV data is invalid (missing ID). Please upload a new CV in your profile.");
      console.log("latestCV exists but missing uuid:", latestCV);
      toast.error("CV data is invalid (missing ID). Please upload a new CV.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      console.log("Applying for job UUID:", jobUuid, "with CV UUID:", latestCV.uuid, "user UUID:", userData.uuid);
      const result = await applyForJob({
        userUuid: userData.uuid,
        jobUuid,
        cvUuid: latestCV.uuid,
        coverLetterUrl: null,
      }).unwrap();
      console.log("Application success result:", result);
      toast.success("Job application submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      onClose();
    } catch (error) {
      console.error("Apply error:", error);
      if (error.status === 401) {
        toast.error("Unauthorized. Please log in again.", {
          position: "top-center",
          autoClose: 3000,
        });
        setTimeout(() => navigate("/login"), 3000);
      } else if (error.status === 400) {
        toast.error(error?.data?.message || "Invalid request. Please check your CV and try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error(error?.data?.message || "Failed to apply for job. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };

  const handleCancel = () => {
    onClose();
  };

  if (userLoading || cvLoading || applyLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white rounded-xl shadow-lg w-96 p-8 text-center max-w-full">
          <p className="text-[#1A5276] text-base">Loading...</p>
        </div>
      </div>
    );
  }

  if (userError || cvError) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white rounded-xl shadow-lg w-96 p-8 text-center max-w-full">
          <p className="text-red-600 text-base">
            Error: {userError?.data?.message || cvError?.data?.message || "Failed to load data."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-96 p-8 text-center max-w-full">
        <h2 className="text-xl font-semibold mb-4 text-[#1A5276]">APPLYING JOB</h2>
        <p className="text-[#1A5276] mb-6 text-base">Do you want to apply this job?</p>

        <div className="mb-6">
          <label className="block text-base font-medium text-[#1A5276] mb-2">
            Review your CV
          </label>
          <button
            type="button"
            onClick={handleViewCV}
            className="flex items-center justify-center w-full px-6 py-3 bg-[#1A5276] text-white font-medium text-base rounded-lg shadow-md hover:bg-[#149AC5] focus:outline-none focus:ring-2 focus:ring-[#149AC5] transition duration-150 ease-in-out"
          >
            <FiEye className="w-6 h-6 mr-2" />
            View current CV
          </button>
          <p className="mt-3 text-sm text-[#1A5276]">
            If you want to upload new, please upload in your profile details
          </p>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleConfirm}
            className="px-6 py-3 rounded-full bg-[#1A5276] text-white text-base hover:bg-[#149AC5] transition"
            disabled={applyLoading}
          >
            OK
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-3 rounded-full border hover:border-[#149AC5] border-gray-400 text-[#1A5276] text-base hover:text-[#149AC5] transition"
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ApplyJob;