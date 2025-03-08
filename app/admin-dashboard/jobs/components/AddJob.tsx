'use client';
import React, { useState, useEffect } from 'react';
import { Company, Job } from '@/lib/constants/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AddJobProps {
    onAddJob: (job: Omit<Job, '_id'>) => void;
}

const AddJob: React.FC<AddJobProps> = ({ onAddJob }) => {
    const [job, setJob] = useState<Omit<Job, '_id'>>({
        title: '',
        domain: '',
        salary: '',
        description: '',
        jobType: 'full-time',
        company: '',  // ✅ Now allowed because `company` can be a string (ID)
    });


    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch companies to display in the dropdown
    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/companies');
                if (!res.ok) throw new Error('Failed to fetch companies');
                const data = await res.json();
                setCompanies(data.data || []);
            } catch (err) {
                console.error(err);
                setError('Failed to load companies');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!job.company) {
            setError('Please select a company');
            return;
        }
        setError('');
        onAddJob(job);
        setJob({ title: '', domain: '', salary: '', description: '', jobType: 'full-time', company: '' });
    };

    return (
        <div className="w-full mx-auto p-6 rounded-lg shadow-lg mb-6 shadow-[#00000092] my-12">
            <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-500">{error}</p>}
                <Input
                    placeholder="Job Title (MERN Stack Developer)"
                    value={job.title}
                    onChange={(e) => setJob({ ...job, title: e.target.value })}
                    className='shadow-md shadow-gray-300'
                    required
                />
                <Select
                    onValueChange={(value) => setJob({ ...job, domain: value })}>
                    <SelectTrigger className="border-2 border-gray-300 rounded-lg py-6 px-3 bg-transparent outline-none w-full text-left shadow-lg shadow-gray-300">
                        <SelectValue placeholder="Domain (Web Development | Mobile App Development)" />
                    </SelectTrigger>
                    <SelectContent className='bg-[#fdfcf3]'>
                        <SelectItem value="all" className='py-3'>All</SelectItem>
                        <SelectItem value="artificial intelligence" className='py-3'>Artificial Intelligence</SelectItem>
                        <SelectItem value="development" className='py-3'>Development</SelectItem>
                        <SelectItem value="design" className='py-3'>Design</SelectItem>
                        <SelectItem value="software" className='py-3'>Software</SelectItem>
                        <SelectItem value="machine learning" className='py-3'>Machine Learning</SelectItem>
                        <SelectItem value="data analyst" className='py-3'>Data Analyst</SelectItem>
                        <SelectItem value="sales" className='py-3'>Sales</SelectItem>
                        <SelectItem value="marketing" className='py-3'>Marketing</SelectItem>
                        <SelectItem value="others" className='py-3'>Others</SelectItem>
                    </SelectContent>
                </Select>

                <Input
                    placeholder="Salary Range (100K$-120K$)"
                    value={job.salary}
                    onChange={(e) => setJob({ ...job, salary: e.target.value })}
                    required
                    className='shadow-md shadow-gray-300'
                />
                <Textarea
                    placeholder="Job Description & Requirments"
                    value={job.description}
                    onChange={(e) => setJob({ ...job, description: e.target.value })}
                    rows={5}
                    required
                    className='shadow-md shadow-gray-300'
                />
                <select
                    value={job.jobType}
                    onChange={(e) => setJob({ ...job, jobType: e.target.value as Job['jobType'] })}
                    className="w-full px-4 py-2 rounded-md border shadow-md shadow-gray-300 bg-[#FDFCF3]"

                    required
                >
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="remote">Remote</option>
                </select>
                {loading ? (
                    <input type="text" placeholder='Loading Companies.....' className='bg-[#FDFCF3] w-full px-4 py-2 rounded-md border shadow-md shadow-gray-300' />
                ) : (
                    <select
                        value={typeof job.company === 'string' ? job.company : job.company?._id || ''}
                        onChange={(e) => setJob({ ...job, company: e.target.value })}
                        className="w-full px-4 py-2 rounded-md border shadow-md shadow-gray-300 bg-[#FDFCF3]"
                        required
                    >

                        <option value="">Select Company</option>
                        {companies.map((company) => (
                            <option key={company._id} value={company._id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                )}
                <button
                    type="submit"
                    className="w-full bg-gray-800 py-2 rounded-md text-white disabled:bg-gray-400 hover:bg-gray-900"
                >
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;
