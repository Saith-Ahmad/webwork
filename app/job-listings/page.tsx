


// 'use client';
// import React, { useState, useEffect } from 'react';
// import SearchAndFilter from './componnets/SearchAndFilter';
// import Sidebar from './componnets/Sidebar';
// import JobDetails from './componnets/JobDetails';
// import { Job } from '@/lib/constants/types';
// import { Skeleton } from '@/components/ui/skeleton';

// export default function JobsPage() {
//     const [jobs, setJobs] = useState<Job[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filters, setFilters] = useState({ date: '', type: '', domain: '' });
//     const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
//     const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);

//     // Fetch jobs based on search, filter, and page
//     useEffect(() => {
//         fetchJobs();
//     }, [searchQuery, filters, currentPage]);

//     // Automatically select the first job when jobs are loaded
//     useEffect(() => {
//         if (jobs.length > 0 && !selectedJobId) {
//             setSelectedJobId(jobs[0]?._id || null);  // Ensure type compatibility
//             setSelectedJob(jobs[0] || null);
//         }
//     }, [jobs, selectedJobId]);

//     // Fetch jobs from API
//     const fetchJobs = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch(
//                 `/api/jobs?search=${searchQuery}&date=${filters.date}&type=${filters.type}&domain=${filters.domain}&page=${currentPage}&limit=30`
//             );
//             const result = await response.json();

//             if (result.success) {
//                 setJobs(result.data);
//                 setTotalPages(result.totalPages);  // Set total pages from API response
//             }
//         } catch (error) {
//             console.error('Error fetching jobs:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Handle job selection
//     const handleSelectJob = (id: string) => {
//         const job = jobs.find((job) => job._id === id) || null;
//         setSelectedJobId(id);
//         setSelectedJob(job);
//     };

//     // Handle pagination
//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage((prev) => prev - 1);
//         }
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage((prev) => prev + 1);
//         }
//     };

//     return (
//         <>
//             <SearchAndFilter
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//                 filters={filters}
//                 setFilters={setFilters}
//             />
//             <div className="container my-8">
//                 {loading ? (
//                     <div className="grid grid-cols-1 container">
//                         {Array.from({ length: 5 }).map((_, index) => (
//                             <div key={index} className="p-4 rounded-lg">
//                                 <Skeleton className="w-full h-32 mb-2 bg-[#161c28ad]" />
//                                 <Skeleton className="h-6 w-[70%] mb-2 bg-[#161c28ad]" />
//                                 <Skeleton className="h-3 w-[50%] bg-[#161c28ad]" />
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <>
//                         {jobs.length >= 1 ? (
//                             <div className="grid grid-cols-1 gap-2 md:grid-cols-11 p-3 min-h-[100vh]">
//                                 <div className="col-span-4 h-full">
//                                     <Sidebar jobs={jobs} selectedJobId={selectedJobId} onSelectJob={handleSelectJob} />
//                                 </div>
//                                 <div className="col-span-7">
//                                     <JobDetails job={selectedJob} />
//                                 </div>
//                             </div>
//                         ) : (
//                             <h2 className="font-semibold text-center text-2xl">No Jobs Available</h2>
//                         )}

//                         {/* Pagination Controls */}
//                         {jobs.length > 0 &&
//                             <div className="flex justify-center items-center my-4 gap-4">
//                                 <button
//                                     onClick={handlePreviousPage}
//                                     disabled={currentPage === 1}
//                                     className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
//                                 >
//                                     Previous
//                                 </button>
//                                 <span className="text-gray-900">
//                                     Page {currentPage} of {totalPages}
//                                 </span>
//                                 <button
//                                     onClick={handleNextPage}
//                                     disabled={currentPage === totalPages}
//                                     className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
//                                 >
//                                     Next
//                                 </button>
//                             </div>
//                         }
//                     </>
//                 )}
//             </div>
//         </>
//     );
// }



'use client';
import React, { useState, useEffect } from 'react';
import SearchAndFilter from './componnets/SearchAndFilter';
import Sidebar from './componnets/Sidebar';
import JobDetails from './componnets/JobDetails';
import { Job } from '@/lib/constants/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ date: '', type: '', domain: '' });
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [noJobs, setNoJobs] = useState(false);  // New state for no jobs message

    // Fetch jobs based on search, filter, and page
    useEffect(() => {
        fetchJobs();
    }, [searchQuery, filters, currentPage]);

    // Automatically select the first job when jobs are loaded
    useEffect(() => {
        if (jobs.length > 0 && !selectedJobId) {
            setSelectedJobId(jobs[0]?._id || null);
            setSelectedJob(jobs[0] || null);
        }
    }, [jobs, selectedJobId]);

    // Fetch jobs from API
    const fetchJobs = async () => {
        setLoading(true);
        setNoJobs(false);  // Reset noJobs state during loading

        try {
            const response = await fetch(
                `/api/jobs?search=${searchQuery}&date=${filters.date}&type=${filters.type}&domain=${filters.domain}&page=${currentPage}&limit=30`
            );
            const result = await response.json();

            if (result.success) {
                setJobs(result.data);
                setTotalPages(result.totalPages);
                
                if (result.data.length === 0) {
                    // Delay showing "No Jobs Available" for 2 seconds
                    setTimeout(() => {
                        setNoJobs(true);
                    }, 2000);
                }
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle job selection
    const handleSelectJob = (id: string) => {
        const job = jobs.find((job) => job._id === id) || null;
        setSelectedJobId(id);
        setSelectedJob(job);
    };

    // Handle pagination
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <div>
            <SearchAndFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setFilters={setFilters}
            />
            <div className="container my-8">
                {loading ? (
                    <div className="grid grid-cols-1 container">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="p-4 rounded-lg">
                                <Skeleton className="w-full h-32 mb-2 bg-[#161c28ad]" />
                                <Skeleton className="h-6 w-[70%] mb-2 bg-[#161c28ad]" />
                                <Skeleton className="h-3 w-[50%] bg-[#161c28ad]" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {jobs.length >= 1 ? (
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-11 p-3 min-h-[100vh]">
                                <div className="col-span-4 h-full">
                                    <Sidebar jobs={jobs} selectedJobId={selectedJobId} onSelectJob={handleSelectJob} />
                                </div>
                                <div className="col-span-7">
                                    <JobDetails job={selectedJob} />
                                </div>
                            </div>
                        ) : (
                            noJobs && (
                                <h2 className="font-semibold text-center text-2xl">No Jobs Available</h2>
                            )
                        )}

                        {/* Pagination Controls */}
                        {jobs.length > 0 && (
                            <div className="flex justify-center items-center my-4 gap-4">
                                <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <span className="text-gray-900">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
