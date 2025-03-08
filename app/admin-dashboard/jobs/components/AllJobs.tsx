
'use client';
import React, { useState, useEffect } from 'react';
import JobsList from './JobList';
import AddJob from './AddJob';
import { Job } from '@/lib/constants/types';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import EditJobModal from './EditJobModal';

function AllJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    // Debouncing effect for search
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchJobs(currentPage, 6, searchQuery);
        }, 500);
        return () => clearTimeout(timer);
    }, [currentPage, searchQuery]);

    // Fetch jobs with pagination and search
    const fetchJobs = async (page = 1, limit = 6, search = '') => {
        setLoading(true);
        try {
            const response = await fetch(`/api/jobs?page=${page}&limit=${limit}&search=${search}`);
            const result = await response.json();
            setJobs(result.data);
            setTotalPages(result.totalPages);
            setCurrentPage(result.currentPage);
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleAddJob = async (newJob: Omit<Job, 'id'>) => {
        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newJob),
            });
            if (response.ok) {
                toast.success('New job added successfully');
                fetchJobs();
            } else {
                toast.error('Failed to add new job');
            }
        } catch (error) {
            console.error('Error adding job:', error);
        }
    };

    const handleDeleteJob = async (jobId: string) => {
        try {
            const response = await fetch(`/api/jobs/${jobId}`, { method: 'DELETE' });
            if (response.ok) {
                toast.success('Job deleted successfully');
                fetchJobs();
            } else {
                toast.error('Failed to delete job');
            }
        } catch (error) {
            toast.error('Error occurred while deleting');
        }
    };

    const handleUpdateClick = (job: Job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleUpdateJob = async (updatedJob: Job) => {
        try {
            const response = await fetch(`/api/jobs/${updatedJob._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedJob),
            });
            if (response.ok) {
                toast.success('Job updated successfully');
                setIsModalOpen(false);
                setSelectedJob(null);
                fetchJobs();
            } else {
                toast.error('Failed to update job.');
            }
        } catch (error) {
            console.error('Error updating job:', error);
        }
    };

    const renderPagination = () => (
        <div className="flex justify-center gap-2 my-4">
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-800 text-white disabled:bg-gray-400"
            >
                Previous
            </button>
            <span className="px-4 py-1 bg-gray-200 rounded">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-800 text-white disabled:bg-gray-400"
            >
                Next
            </button>
        </div>
    );

    return (
        <div className="md:p-6 flex flex-col gap-4">
            <Input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={handleSearch}
                className="mb-4 py-7 px-4 rounded-lg shadow-md"
            />

            <div className="min-h-[90vh]">
                <JobsList
                    jobs={jobs}
                    loading={loading}
                    onDeleteJob={handleDeleteJob}
                    onUpdateClick={handleUpdateClick}
                />
                {!loading && jobs.length > 0 &&
                    <>
                        {renderPagination()}
                    </>
                }
            </div>

            <AddJob onAddJob={handleAddJob} />

            {selectedJob && (
                <EditJobModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleUpdateJob}
                    job={selectedJob}
                />
            )}
        </div>
    );
}

export default AllJobs;
