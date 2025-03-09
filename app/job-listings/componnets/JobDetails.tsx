import { Button } from "@/components/ui/button";
import { Job } from "@/lib/constants/types";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

type JobDetailsProps = {
    job: Job | null;
};

export default function JobDetails({ job }: JobDetailsProps) {
    if (!job) return <div className="p-4">Select a job to see details</div>;

    // Format the posted date
    const postedDate = job.createdAt ? formatDistanceToNow(new Date(job.createdAt), { addSuffix: true }).replace("about ", "") : "Date not available";

    return (
        <div className="p-6 mt-10 md:mt-0 bg-[#fefdf7] rounded-lg border-2 border-gray-100 shadow-xl shadow-gray-300 max-h-[100vh] overflow-y-scroll">
            {/* Company Logo and Job Title */}
            <div className="flex items-center mb-4">
                <img
                    src={typeof job.company === "string" ? "/default-logo.png" : job.company.image ?? "/default-logo.png"}
                    alt="Company Logo"
                    className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-200"
                />
                <div>
                    <h2 className="text-2xl font-bold">{job.title}</h2>
                    <div className="flex flex-col gap-0">
                        <p className="text-md text-[#78D0EA] font-bold">At {typeof job.company !== "string" && job.company.name}</p>
                        <p className="text-gray-500 text-sm -mt-1">{postedDate}</p>
                    </div>
                </div>
            </div>

            {/* Domain and Job Type */}
            <div className="mb-6 flex gap-2">
                <p className="text-sm  bg-gray-100 px-4 py-1 rounded-lg text-gray-700 font-semibold capitalize">
                    {job.domain}
                </p>
                <p className="text-sm  bg-gray-100 px-4 py-1 rounded-lg text-gray-700 font-semibold capitalize">
                    {job.jobType}
                </p>
            </div>
            <div className="flex -mt-2">
                <p className="ms-2 bg-gray-700 shadow-sm hover:bg-gray-800 text-white px-3 py-[1px] rounded-sm">
                    Salary {job.salary}
                </p>
            </div>



            {/* About the Company */}
            {typeof job.company !== "string" && job.company.description && (
                <div className="mb-6">
                    <Button className="mt-7 mb-2 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-transparent">About The Company</Button>
                    <p className="text-gray-700 whitespace-pre-line">{job.company.description}</p>
                </div>
            )}

            {/* Job Description */}
            <div className="mb-6">
                <Button className="mt-7 mb-2 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-transparent">Job Description</Button>
                <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
            </div>

            {/* Apply Now Button */}
            <Link href={`/job-listings/${job._id}`}>
                <Button className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Apply Now
                </Button>
            </Link>
        </div>
    );
}
