'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Trash2 } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';

interface Applicant {
    _id: string;
    name: string;
    email: string;
    linkedin: string;
    resume: string;
}

function JobId() {
    const { id } = useParams();
    const router = useRouter();
    const [applicants, setApplicants] = useState<Applicant[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (id) fetchApplicants();
    }, [id, page, search]);

    const fetchApplicants = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/applicants?jobId=${id}&search=${search}&page=${page}&limit=30`);
            const result = await response.json();
            if (result.success) {
                setApplicants(result.data);
                setTotalPages(result.pagination.totalPages);
            } else {
                setError('Failed to fetch applicants.');
            }
        } catch (error) {
            setError('Error fetching applicants.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (applicantId: string) => {
        try {
            const response = await fetch(`/api/applicants/${applicantId}`, { method: 'DELETE' });
            const result = await response.json();
            if (result.success) {
                setApplicants(prev => prev.filter(applicant => applicant._id !== applicantId));
                toast.success("Applicant deleted successfully");
            } else {
                toast.error("Failed to delete applicant");
            }
        } catch (error) {
            toast.error("Failed to delete applicant");
        }
    };

    return (
        <div className="container mx-auto my-8 px-4">
            <p className="text-lg font-semibold text-gray-900 mb-4">Applicants for Job ID: <br className='md:hidden'/> {id}</p>

            <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 rounded bg-[#1c253b] text-white w-full p-4"
            />

            {loading ? (
                <Skeleton className="h-24 bg-[#161c28ad]" />
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : applicants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applicants.map((applicant) => (
                        <div
                            key={applicant._id}
                            className="bg-[#1c253b] text-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-lg font-semibold mb-2">{applicant.name}</h2>
                                <p className="text-sm mb-1">
                                    <span className="font-semibold">Email:</span> {applicant.email}
                                </p>
                                <p className="text-sm mb-1 break-all">
                                    <span className="font-semibold">LinkedIn:</span>{" "}
                                    <a
                                        href={applicant.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline"
                                    >
                                        View Profile
                                    </a>
                                </p>
                                <p className="text-sm mb-1 break-all">
                                    <span className="font-semibold">Resume:</span>{" "}
                                    <a
                                        href={applicant.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline"
                                    >
                                        Download
                                    </a>
                                </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700">
                                            <Trash2 size={18} />
                                        </button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => handleDelete(applicant._id)}
                                                className="bg-red-600 hover:bg-red-700"
                                            >
                                                Delete
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-gray-400">No applicants found.</div>
            )}
        </div>

    );
}

export default JobId;
