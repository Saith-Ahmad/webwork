import { Job } from "@/lib/constants/types";
import { formatDistanceToNow } from "date-fns";
import { CircleCheckBig } from "lucide-react";

type SidebarProps = {
    jobs: Job[];
    selectedJobId: string | null;
    onSelectJob: (id: string) => void;
};

export default function Sidebar({ jobs, selectedJobId, onSelectJob }: SidebarProps) {
    return (
        <div className="flex flex-col md:p-5 p-2 gap-3 h-full border-2 border-gray-300 rounded-md shadow-xl shadow-gray-500 bg-transparent max-h-[100vh] overflow-y-scroll">
            {jobs.map((job) => (
                <div
                    key={job._id}
                    onClick={() => job?._id && onSelectJob(job._id)}
                    className={`flex items-center  p-5 cursor-pointer mb-2 rounded-lg transition-colors shadow-md shadow-gray-400 ${
                        selectedJobId === job._id ? 'bg-[#fefefb] shadow-lg shadow-gray-700' : 'bg-[#fefdf7]'
                    }`}
                >
                    {/* Company Logo */}
                    <div className="relative self-start">
                    <img
                        src={typeof job.company === 'object' ? job.company?.image ?? '/default-logo.png' : '/default-logo.png'}
                        alt="Company Logo"
                        className="w-12 h-12 p-[2px] border-[1px] border-gray-300 rounded-md object-cover mr-3 self-start"
                    />
                    <CircleCheckBig className="bg-primary text-white rounded-full h-[15px] w-[15px] absolute bottom-[0px] right-2"/>
                    </div>

                    <div className="flex-1">
                        {/* Featured Badge */}
                        <span className="text-xs bg-cyan-50 flex justify-start text-center px-1 text-cyan-600 font-semibold mb-1 w-[60px] rounded-sm">Featured</span>

                        {/* Job Title */}
                        <h4 className="font-bold text-base text-gray-900">
                            {job.title.length > 50 ? `${job.title.slice(0, 50)}...` : job.title}
                        </h4>

                        {/* Company Name and Date */}
                        <div className="flex text-xs text-gray-600">
                            <span className="mr-2 text-primary font-medium">{typeof job.company === 'object' ? job.company?.name : 'Unknown'}</span>
                            <span>•</span>
                            <span className="ml-2">
                                {job.createdAt
                                    ? `${formatDistanceToNow(new Date(job.createdAt))} `
                                    : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
