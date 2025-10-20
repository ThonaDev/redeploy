import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetAllJobsQuery } from "../../features/job/jobSlice";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { data: allJobsData, isLoading: allJobsLoading } = useGetAllJobsQuery();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Find Jobs", path: "/jobs" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() && allJobsData && !allJobsLoading) {
      const jobs = allJobsData.data.content || [];
      const lowerQuery = searchQuery.trim().toLowerCase();
      const uniqueSuggestions = new Set();

      jobs.forEach(job => {
        if (job.jobTitle?.toLowerCase().includes(lowerQuery)) {
          uniqueSuggestions.add(job.jobTitle);
        }
        if (job.location?.toLowerCase().includes(lowerQuery)) {
          uniqueSuggestions.add(job.location);
        }
        if (job.workingTime?.toLowerCase().includes(lowerQuery)) {
          uniqueSuggestions.add(job.workingTime);
        }
        if (job.requirementExperience === 0 && 'no experience'.includes(lowerQuery)) {
          uniqueSuggestions.add('No experience');
        }
        if (typeof job.requirementExperience === 'number' && `${job.requirementExperience} year`.includes(lowerQuery)) {
          uniqueSuggestions.add(`${job.requirementExperience} year${job.requirementExperience > 1 ? 's' : ''} experiences`);
        }
        if (typeof job.salary === 'number' && `${job.salary}`.includes(lowerQuery)) {
          uniqueSuggestions.add(`${job.salary.toFixed(0)}$`);
        }
      });

      const suggestionArray = [...uniqueSuggestions].slice(0, 5); // Limit to 5 suggestions
      setSuggestions(suggestionArray);
      setShowSuggestions(suggestionArray.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, allJobsData, allJobsLoading]);

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      navigate(`/jobs?query=${encodeURIComponent(query)}`);
      setSearchQuery("");
      setShowSuggestions(false);
      setOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  return (
    <nav className="bg-white p-4 rounded-[20px] mx-auto px-12 max-w-7xl flex items-center justify-between sticky top-3 z-50">
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="src/assets/Logo.jpg"
            alt="JOBCOLLAP Logo"
            className="h-10 md:h-12 mr-4 object-contain"
          />
        </NavLink>
      </div>

      <div className="hidden lg:flex space-x-8 text-[#1A5276] font-medium">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-semibold hover:text-[#FF7A00] transition-colors"
                : "text-[#1A5276] hover:text-[#FF7A00] transition-colors"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <div className="relative" ref={searchRef}>
          <div className="flex items-center bg-[#f0f3f7] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
            <FiSearch className="text-[#1A5276] mr-2" size={20} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-32 lg:w-48"
            />
          </div>
          {showSuggestions && (
            <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-3 hover:bg-gray-100 cursor-pointer text-[#1A5276]"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <NavLink
            to="/register"
            className="h-10 flex items-center justify-center text-[#1A5276] font-semibold px-4 rounded-full border hover:bg-blue-50 border-[#1A5276] hover:text-[#1A5276] transition-colors"
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className="h-10 flex items-center justify-center bg-[#1A5276] text-white font-semibold px-6 rounded-full border border-transparent hover:bg-blue-50 hover:border-[#1A5276] hover:text-[#1A5276] transition-colors"
          >
            Login
          </NavLink>
        </div>
      </div>

      <button
        className="lg:hidden text-[#1A5276]"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <div
        className={`absolute top-full mt-0 left-0 bg-white rounded-xl flex flex-col space-y-4 py-6 px-6 lg:hidden z-50 w-full ${
          open ? "opacity-100" : "opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-2 text-[#1A5276] font-medium items-start w-full">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "w-full py-1 px-2 rounded text-green-500 hover:text-[#FF7A00] transition-colors"
                  : "w-full py-1 px-2 rounded text-[#1A5276] hover:text-[#FF7A00] transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="relative" ref={searchRef}>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FiSearch className="text-[#1A5276] mr-2" size={20} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none text-[#1A5276] placeholder-[#1A5276] w-32 lg:w-48"
            />
          </div>
          {showSuggestions && (
            <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-3 hover:bg-gray-100 cursor-pointer text-[#1A5276]"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 justify-center">
          <NavLink
            to="/register"
            className="h-10 flex items-center justify-center text-[#1A5276] font-semibold px-4 rounded-full border border-[#1A5276] hover:bg-blue-50 transition-colors"
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className="h-10 flex items-center justify-center bg-[#1A5276] text-white font-semibold px-6 rounded-full hover:bg-blue-50 border hover:border-[#1A5276] hover:text-[#1A5276] transition-colors"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;