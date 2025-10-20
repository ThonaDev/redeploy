import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useGetUserQuery } from "../../../features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleJobCard = ({
  jobTitle,
  postDate,
  location,
  salary,
  Photos,
  jobUuid,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const photoUrl =
    Photos && Photos.length > 0
      ? Photos[0].url
      : "https://via.placeholder.com/400x200";

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    console.log(
      `Job ${jobTitle} (UUID: ${jobUuid}) bookmark status toggled to: ${!isBookmarked}`
    );
  };

  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess } = useGetUserQuery(undefined, {
    skip: !accessToken || !isAuthenticated,
  });

  const isLoggedIn = isAuthenticated && accessToken && isSuccess && !isError;
  const navigate = useNavigate();

  return (
    <NavLink
      to={`/job-details/${jobUuid}`} // Fixed the to prop
      className="bg-white rounded-[10px] w-full max-w-xs sm:max-w-md overflow-hidden
                 transition-all duration-300 ease-in-out 
                 outline-gray-200 hover:ring-1 hover:ring-[#1A5276]/50 hover:ring-offset-2"
    >
      <div className="relative">
        <img
          src={photoUrl}
          alt="Job listing visual"
          className="w-full h-48 object-cover p-4 rounded-[20px]"
        />
        <button
          aria-label="Bookmark job"
          className="absolute top-5 right-5 bg-white rounded-full p-2 shadow-md"
          onClick={handleBookmarkClick}
        >
          {isBookmarked ? (
            <FaBookmark color="#FF7A00" size={24} />
          ) : (
            <FaRegBookmark color="#FF7A00" size={24} />
          )}
        </button>
      </div>
      <div className="px-4">
        <h2 className="text-xl md:text-xl text-left font-bold text-[#1A5276] mb-2">
          {jobTitle}
        </h2>
        <div className="text-sm text-[#1A5276] mb-2">
          <span className="mr-4">
            Posted: {new Date(postDate).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <FiMapPin size={16} className="mr-1" />
            {location}
          </span>
        </div>
        <hr className="border-t border-gray-200 mb-2" />
        <div className="flex items-center justify-between pb-4 pt-2">
          <span className="text-xl font-semibold text-[#1A5276]">
            {salary}$
          </span>
          <NavLink
            to={isLoggedIn ? "/apply" : "/login"}
            onClick={(e) => {
              if (!isLoggedIn) {
                e.preventDefault(); // stop navigation
                toast.error("Please login to apply for a job!", {
                  position: "top-center",
                  autoClose: 3000,
                  onClose: () => {
                    navigate("/login");
                  },
                });
              }
            }}
            className="bg-[#1A5276] text-white border border-[#1A5276] px-4 py-2 rounded-[50px] hover:bg-white hover:text-[#1A5276] transition-colors duration-200 text-sm cursor-pointer"
          >
            Apply
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </NavLink>
  );
};

export default SingleJobCard;
