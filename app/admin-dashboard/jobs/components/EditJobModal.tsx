import React, { useState, useEffect } from 'react';
import { Job } from '@/lib/constants/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EditJobModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (job: Job) => void;
    job: Job;
}

const EditJobModal: React.FC<EditJobModalProps> = ({ isOpen, onClose, onSave, job }) => {
    const [updatedJob, setUpdatedJob] = useState<Job>(job);

    // Update the state when the prop `job` changes
    useEffect(() => {
        if (job) {
            setUpdatedJob(job);
        }
    }, [job]);

    const handleSave = () => {
        onSave(updatedJob);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-[#FDFCF3] p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Edit Job</h2>
                <form className="space-y-4">
                    <Input
                        placeholder="Job Title (MERN Stack Developer)"
                        value={updatedJob.title}
                        onChange={(e) => setUpdatedJob({ ...updatedJob, title: e.target.value })}
                        className="shadow-md shadow-gray-300"
                        required
                    />
                    <Select
                        onValueChange={(value) => setUpdatedJob({ ...job, domain: value })}>
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
                        value={updatedJob.salary}
                        onChange={(e) => setUpdatedJob({ ...updatedJob, salary: e.target.value })}
                        className="shadow-md shadow-gray-300"
                        required
                    />
                    <Textarea
                        placeholder="Job Description & Requirements"
                        value={updatedJob.description}
                        onChange={(e) => setUpdatedJob({ ...updatedJob, description: e.target.value })}
                        rows={5}
                        className="shadow-md shadow-gray-300"
                        required
                    />
                    <select
                        value={updatedJob.jobType}
                        onChange={(e) => setUpdatedJob({ ...updatedJob, jobType: e.target.value as Job['jobType'] })}
                        className="w-full px-4 py-2 rounded-md border shadow-md shadow-gray-300 bg-[#FDFCF3]"
                        required
                    >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                    </select>

                    {/* Show company as readonly */}
                    <Input
                        value={typeof job.company === 'string' ? job.company : job.company?.name || ''}
                        className="w-full px-4 py-2 rounded-md border shadow-md shadow-gray-300 bg-[#FDFCF3] cursor-not-allowed"
                        readOnly
                    />

                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-[#03A9D9] text-white py-2 px-4 rounded-md "
                        >
                            Save
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditJobModal;
