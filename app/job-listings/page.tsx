'use client';
import React, { useState, useEffect } from 'react';
import SearchAndFilter from './componnets/SearchAndFilter';
import Sidebar from './componnets/Sidebar';
import JobDetails from './componnets/JobDetails';
import { Job } from '@/lib/constants/types';

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ date: '', type: '', domain: '' });
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    useEffect(() => {
        fetchJobs();
    }, [searchQuery, filters]);

    const fetchJobs = async () => {
        try {
            const response = await fetch(
                `/api/jobs?search=${searchQuery}&date=${filters.date}&type=${filters.type}&domain=${filters.domain}`
            );
            const result = await response.json();
            setJobs(result.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleSelectJob = (id: string) => {
        const job = jobs.find((job) => job._id === id) || null;
        setSelectedJobId(id);
        setSelectedJob(job);
    };

    return (
        <>
          <SearchAndFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setFilters={setFilters}
            />
        <div className='container my-8'>
            <div className="grid  grid-cols-1 gap-2 md:grid-cols-11  p-3 min-h-[100vh]">
                <div className='col-span-4 h-full'>
                    <Sidebar jobs={jobs} selectedJobId={selectedJobId} onSelectJob={handleSelectJob} />
                </div>
                <div className="col-span-7">
                    <JobDetails job={selectedJob} />
                </div>
            </div>
        </div>
        </>
    );
}
