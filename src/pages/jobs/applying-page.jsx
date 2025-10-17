import React, { useState } from "react";

const ApplyJob = () => {
  const [isOpen, setIsOpen] = useState(true); // show modal initially
  const [cvFile, setCvFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
    setError(""); // clear error when file is chosen
  };

  const handleConfirm = () => {
    if (!cvFile) {
      setError("⚠️ Please upload your CV before applying.");
      return;
    }

    // Proceed with applying (you can call API here)
    console.log("Applying with:", cvFile.name);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-80 p-6 text-center">
        <h2 className="text-lg font-semibold mb-3 text-[#1A5276]">APPLYING JOB</h2>
        <p className="text-[#1A5276] mb-4">Do you want to apply this job?</p>

        {/* Upload CV Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#1A5276] mb-1">
            Upload your CV
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer 
                       file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 
                       file:text-sm file:font-semibold file:bg-blue-50 file:text-[#1A5276]
                       hover:file:bg-blue-100"
          />
          {cvFile && (
            <p className="mt-2 text-xs text-green-600">Selected: {cvFile.name}</p>
          )}
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleConfirm}
            className="px-6 py-2 rounded-full bg-[#1A5276] text-white hover:bg-[#149AC5] transition"
          >
            OK
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2 rounded-full border hover:border-[#149AC5] border-gray-400 text-[#1A5276] hover:text-[#149AC5] transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
