'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';
import { ArrowBigLeft, Loader } from 'lucide-react';
import { Job } from '@/lib/constants/types';
import axios from 'axios';

// Replace with your Apps Script Web App URL
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxpeCX4HdQNkO_XkzvGyedLPOarfS-CJ5ocWugDSF9yvIXu2HsaEIhWfPhgb_VnW5k7LA/exec';

// Define types for the API response
interface ApiResponse {
    success: boolean;
    fileUrl?: string;
    message?: string;
}

export default function JobApplyPage() {
    const { id } = useParams();
    const router = useRouter();

    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedin: '',
        resumeUrl: '',
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Fetch job details
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data.data);
            } catch (err) {
                console.error('Error fetching job details:', err);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchJob();
    }, [id]);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'resume') {
            const file = e.target.files?.[0] || null;
            setResumeFile(file);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    // Upload PDF to Google Drive
    const uploadResumeToDrive = async (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async () => {
                const base64Data = (reader.result as string).split(',')[1];
                try {
                    const response = await axios.post<ApiResponse>(WEB_APP_URL, base64Data, {
                        headers: {
                            'Content-Type': 'text/plain',
                        },
                    });
                    if (response.data.success && response.data.fileUrl) {
                        resolve(response.data.fileUrl);
                    } else {
                        reject('Failed to upload resume to Drive.');
                    }
                } catch (error) {
                    console.error('Error uploading resume:', error);
                    reject('Error uploading resume to Drive.');
                }
            };
            reader.readAsDataURL(file);
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            let resumeUrl = '';
            if (resumeFile) {
                // Upload to Drive and get URL
                resumeUrl = await uploadResumeToDrive(resumeFile);
            }

            // Make POST request to /api/applicants
            const response = await fetch('/api/applicants', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, resume: resumeUrl, job: id }),
            });


            if (response.ok) {
                toast.success('Application Submitted Successfully');
                setFormData({ name: '', email: '', linkedin: '', resumeUrl: '' });
                setResumeFile(null);
                router.push('/');
            } else {
                const errorData = await response.json();
                toast.error(`❌ Failed to submit application: ${errorData.message || 'Unknown error'}`);
            }
        } catch (err) {
            toast.error(`❌ Failed to submit application: ${err}`);
        } finally {
            setSubmitting(false);
        }
    };


    if (loading) {
        return (
            <div className="grid grid-cols-1 container">
                <Skeleton className="w-full h-[300px] mb-2 bg-black" />
                <Skeleton className="w-full h-[100px] mb-2 bg-black" />
                <Skeleton className="w-full h-[20px] mb-2 bg-black" />
            </div>
        );
    }

    if (!job) {
        return (
            <div className="bg-gray-900 h-[100px] flex justify-center items-center">
                <h2 className="container text-3xl font-bold text-center text-white">Job not found.</h2>
            </div>
        );
    }

    return (
        <div className="container p-6  rounded-md my-10">
           

          <div className='flex justify-center items-center '>
          <div className='max-w-screen-lg p-5 shadow-2xl  rounded-2xl'>
          <Link href="/job-listings">
                <Button className="flex bg-gray-900 mb-4">
                    <ArrowBigLeft />
                    Back to All Job Listings
                </Button>
            </Link>
           <div className='pointer-events-none flex justify-center items-center bg-gray-900 text-white px-3 py-2 rounded-lg my-5 shadow-xl'>
                <img
                    src={typeof job.company === "string" ? "/default-logo.png" : job.company.image ?? "/default-logo.png"}
                    alt="Company Logo"
                    className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-200"
                />
                <div className='flex flex-col'>

                    <p>{typeof job.company !== "string" && job.company.name}</p>
                    <h2 className="text-2xl font-semibold -mt-1">{job.title}</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl ">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md shadow-md bg-transparent p-3"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md shadow-md bg-transparent p-3"
                />
                <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedin}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md shadow-md bg-transparent p-3 bg-gray-100"
                />
                <div>
                    <label className='ms-2'>Upload your resume</label>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md shadow-md bg-transparent p-3 mt-2 bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-1  bg-transparent text-gray-900 font-semibold flex border-2 border-gray-900 hover:text-white hover:bg-gray-900 justify-center gap-2 items-center ${submitting ? 'bg-gray-500' : 'bg-gray-900'} text-lg rounded-md `}
                >
                    {submitting ? <><Loader className='animate-spin' />Submitting...</> : 'Submit Application'}
                </button>
            </form>
           </div>
          </div>
        </div>
    );
}
