'use client';
import React from 'react';
import { Job } from '@/lib/constants/types';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';

interface JobsListProps {
    jobs: Job[];
    loading: boolean;
    onDeleteJob: (id: string) => void;
    onUpdateClick: (job: Job) => void;
}

const JobsList: React.FC<JobsListProps> = ({ jobs, loading, onDeleteJob, onUpdateClick }) => {
    const router = useRouter();
    if (loading) {
        return (
            <div className="grid grid-cols-1 gap-2 md-grid-cols-2 lg:grid-cols-3 ">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-4 rounded-lg">
                        <Skeleton className="w-full h-32 mb-2 bg-[#161c28ad]" />
                        <Skeleton className="h-6 w-[70%] mb-2 bg-[#161c28ad]" />
                        <Skeleton className="h-3 w-[50%] bg-[#161c28ad]" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jobs.length >= 1 ?
                <>
                    {jobs.map((job) => (
                        <div
                            key={job._id}
                            className="bg-gray-800 h-full flex flex-col justify-between items-start text-white rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-[1.005]"
                        >
                            {/* Company Info */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={typeof job.company === 'string' ? '' : job.company?.image}
                                    alt={job?.domain}
                                    className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-700"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">{typeof job.company === 'string' ? '' : job.company?.name}</h3>
                                    <p className="text-sm text-gray-400">Posted on: {job?.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A'}
                                    </p>
                                </div>
                            </div>

                            {/* Job Details */}
                            <h2 className="text-xl font-semibold mb-2">{job.title.length > 50 ? `${job.title.slice(0, 50)}...` : job.title}</h2>
                            <p className="text-gray-300 mb-4 text-sm whitespace-pre-line">{(job.description.length) < 100 ? job.description : `${job.description.slice(0, 100)}...`}</p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <span className="text-sm text-gray-400">Domain:</span>
                                    <p>{job.domain}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-400">Salary:</span>
                                    <p>{job.salary}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-400">Job Type:</span>
                                    <p className='capitalize'>{job.jobType}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-2 mt-auto self-end ">
                                <Button
                                    onClick={() => job._id && router.push(`/admin-dashboard/jobs/${job._id}`)}
                                    className="px-2 py-2  transition bg-gray-200 text-black hover:bg-gray-300"
                                >
                                Applicants
                                </Button>
                                <Button
                                    onClick={() => onUpdateClick(job)}
                                    className="px-4 py-2  transition"
                                >
                                    Edit
                                </Button>

                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <Button variant="destructive">
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Extreme Caution! ⚠️</AlertDialogTitle>
                                            <AlertDialogDescription className='text-base '>
                                                This action cannot be undone. This will permanently delete all applications attached to this job.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => job._id && onDeleteJob(job._id)} className='bg-red-600 hover:bg-red-700'>Yes Delete</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>


                            </div>
                        </div>
                    ))}

                </> :
                <h2>No Jobs Found</h2>
            }

        </div>
    );
};

export default JobsList;
