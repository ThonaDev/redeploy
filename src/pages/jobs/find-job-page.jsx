import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import SingleJobCard from '../../components/card/jobs/single-job-card';
import { useGetAllJobsQuery, useGetPaginatedJobsQuery, useGetLatestJobsQuery } from '../../features/job/jobSlice';

// Reusable Dropdown component for filters (NO CHANGES)
const Dropdown = ({ label, options, onSelect, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(label);
    const dropdownRef = useRef(null);

    // Reset selected label when options change (e.g., when API data loads)
    useEffect(() => {
        if (!options.includes(selected) && selected !== label) {
            setSelected(label);
        }
        if (options.length > 1 && selected === label) {
            setSelected(label);
        }
    }, [label, options, selected]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option === label ? '' : option);
        setIsOpen(false);
    };

    return (
        <div className={`relative w-full ${className}`} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between p-3 rounded-[10px] bg-white border border-gray-300 w-full text-sm text-[#1A5276] font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A5276]"
            >
                <span className="truncate">{selected}</span>
                <HiOutlineChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto animate-fadeIn">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="p-3 hover:bg-gray-100 cursor-pointer text-[#1A5276]"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Main App component with RTK Query fetching and filtering
const FindJobPage = () => {
    // Data states
    const [jobs, setJobs] = useState([]);
    const [latestJobs, setLatestJobs] = useState([]);
    const [allJobContent, setAllJobContent] = useState([]); // Store all jobs for filtering
    
    // UI/Loading states
    const [currentPage, setCurrentPage] = useState(0); 
    const [totalPages, setTotalPages] = useState(0);
    
    // Dropdown options states
    const [categories, setCategories] = useState(['All Categories']);
    const [experiences, setExperiences] = useState(['All Experiences']);
    const [locations, setLocations] = useState(['All Locations']);
    const [salaries, setSalaries] = useState(['All Prices']);
    const [workingTimes, setWorkingTimes] = useState(['All Working Hours']);

    // FILTER SELECTION STATES
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedSalary, setSelectedSalary] = useState('');
    const [selectedWorkingTime, setSelectedWorkingTime] = useState('');

    // RTK Query hooks for fetching data
    const { data: allJobsData, isLoading: allJobsLoading, error: allJobsError } = useGetAllJobsQuery();
    const { data: paginatedJobsData, isLoading: paginatedJobsLoading, error: paginatedJobsError } = useGetPaginatedJobsQuery({ pageNumber: currentPage, pageSize: 6 });
    const { data: latestJobsData, isLoading: latestJobsLoading, error: latestJobsError } = useGetLatestJobsQuery();

    useEffect(() => {
        if (allJobsError || paginatedJobsError || latestJobsError) {
            console.error("Failed to fetch jobs:", allJobsError || paginatedJobsError || latestJobsError);
        }

        if (allJobsData) {
            const allContent = allJobsData.data.content || [];
            setAllJobContent(allContent);

            // Extract and set unique values for all dropdowns
            // --- Categories (from jobTitle) ---
            const allCategories = allContent.map(job => job.jobTitle).filter(Boolean);
            const uniqueCategories = [...new Set(allCategories)].sort();
            setCategories(['All Categories', ...uniqueCategories]);

            // --- Experiences (from requirementExperience, formatted) ---
            const allExperiences = allContent.map(job => job.requirementExperience).filter(num => typeof num === 'number' && num >= 0);
            const uniqueExperiences = [...new Set(allExperiences)]
                .sort((a, b) => a - b)
                .map(exp => (exp === 0 ? 'No experience' : `${exp} year${exp > 1 ? 's' : ''} experiences`));
            setExperiences(['All Experiences', ...uniqueExperiences]);

            // --- Locations (from location) ---
            const allLocations = allContent.map(job => job.location).filter(Boolean);
            const uniqueLocations = [...new Set(allLocations)].sort();
            setLocations(['All Locations', ...uniqueLocations]);

            // --- Project Price / Salary (from salary, sorted and formatted with $) ---
            const allSalaries = allContent.map(job => job.salary).filter(num => typeof num === 'number' && num > 0);
            const uniqueSalaries = [...new Set(allSalaries)]
                .sort((a, b) => a - b) 
                .map(salary => `${salary.toFixed(0)}$`); 
            setSalaries(['All Prices', ...uniqueSalaries]);
            
            // --- Working Hours (from workingTime) ---
            const allWorkingTimes = allContent.map(job => job.workingTime).filter(Boolean);
            const uniqueWorkingTimes = [...new Set(allWorkingTimes)].sort();
            setWorkingTimes(['All Working Hours', ...uniqueWorkingTimes]);
        }

        if (paginatedJobsData) {
            setJobs(paginatedJobsData.data.content || []);
            setTotalPages(paginatedJobsData.data.totalPages || 0);
        }

        if (latestJobsData) {
            setLatestJobs(latestJobsData.data.content || []);
        }
    }, [allJobsData, paginatedJobsData, latestJobsData, allJobsError, paginatedJobsError, latestJobsError]);

    // FILTERING LOGIC
    const filteredJobs = allJobContent.filter(job => {
        const matchesCategory = !selectedCategory || job.jobTitle === selectedCategory;
        const matchesExperience = !selectedExperience || 
            (selectedExperience === 'No experience' && job.requirementExperience === 0) ||
            (selectedExperience.includes('years') && job.requirementExperience === parseInt(selectedExperience));
        const matchesLocation = !selectedLocation || job.location === selectedLocation;
        const matchesSalary = !selectedSalary || job.salary === parseInt(selectedSalary);
        const matchesWorkingTime = !selectedWorkingTime || job.workingTime === selectedWorkingTime;

        return matchesCategory && matchesExperience && matchesLocation && matchesSalary && matchesWorkingTime;
    });

    // Page handling for the initial random view
    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(0, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(0, endPage - maxPagesToShow + 1);
        }

        if (startPage > 0) {
            pageNumbers.push(0);
            if (startPage > 1) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages - 1) {
            if (endPage < totalPages - 2) {
                pageNumbers.push('...');
            }
            pageNumbers.push(totalPages - 1);
        }

        return pageNumbers;
    };

    if (allJobsLoading || paginatedJobsLoading || latestJobsLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <p className="text-[#1A5276]">Loading jobs...</p>
            </div>
        );
    }

    // Determine which list to show: filteredJobs if any filter is selected, or the paginated 'jobs'
    const isFiltered = selectedCategory || selectedExperience || selectedLocation || selectedSalary || selectedWorkingTime;
    const jobsToDisplay = isFiltered ? filteredJobs : jobs;

    return (
        <div className="min-h-screen font-sans mx-[105px] mt-12">
            <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-3xl sm:text-3xl md:text-[32px] font-semibold text-[#1A5276]">Find your dream jobs</h1>
            </header>
            <section className="flex flex-col items-center gap-4 mb-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
                    <div className="flex flex-col">
                        <label className="text-[#1A5276] font-medium text-lg mb-2">Categories</label>
                        <Dropdown label="All Categories" options={categories} onSelect={setSelectedCategory} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#1A5276] font-medium text-lg mb-2">Experiences</label>
                        <Dropdown label="All Experiences" options={experiences} onSelect={setSelectedExperience} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#1A5276] font-medium text-lg mb-2">Locations</label>
                        <Dropdown label="All Locations" options={locations} onSelect={setSelectedLocation} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#1A5276] font-medium text-lg mb-2">Project Price</label>
                        <Dropdown label="All Prices" options={salaries} onSelect={setSelectedSalary} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#1A5276] font-medium text-lg mb-2">Working Hour</label>
                        <Dropdown label="All Working Hours" options={workingTimes} onSelect={setSelectedWorkingTime} />
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {jobsToDisplay.length > 0 ? (
                        jobsToDisplay.map((job) => (
                            <SingleJobCard
                                key={job.uuid}
                                jobUuid={job.uuid}
                                jobTitle={job.jobTitle}
                                postDate={job.createdDate}
                                location={job.location}
                                salary={job.salary}
                                Photos={job.jobPhotos}
                            />
                        ))
                    ) : (
                        <p className="text-center text-[#1A5276] col-span-full text-xl py-10">
                            No jobs found matching your current filter criteria.
                        </p>
                    )}
                </div>
            </section>
            {!isFiltered && totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-8 mb-12">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 0}
                        className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                            currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#1A5276] hover:bg-gray-200'
                        }`}
                    >
                        Previous
                    </button>
                    {renderPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && handlePageChange(page)}
                            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                                page === '...'
                                    ? 'text-[#1A5276] cursor-default'
                                    : currentPage === page
                                    ? 'bg-[#1A5276] text-white'
                                    : 'text-[#1A5276] hover:bg-gray-200'
                            }`}
                        >
                            {page === '...' ? page : page + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages - 1}
                        className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                            currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#1A5276] hover:bg-gray-200'
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
            <section className="max-w-7xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-3xl md:text-[32px] font-semibold text-[#1A5276] text-center mb-8">Latest Jobs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                    {latestJobs.length > 0 ? (
                        latestJobs.map((job) => (
                            <SingleJobCard
                                key={job.uuid}
                                jobUuid={job.uuid}
                                jobTitle={job.jobTitle}
                                postDate={job.createdDate}
                                location={job.location}
                                salary={job.salary}
                                Photos={job.jobPhotos}
                            />
                        ))
                    ) : (
                        <p className="text-center text-[#1A5276] col-span-full">No latest jobs found.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default FindJobPage;