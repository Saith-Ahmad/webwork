import mongoose, { Schema, Document, model, Types } from 'mongoose';
import Applicant from './Applicant';

interface IJob extends Document {
    company: Types.ObjectId;  // Reference to Company
    title: string;
    domain: string;
    salary: string;  // Could use number if you want, but string allows more flexibility (e.g., "$50k-$60k")
    description: string;
    jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
}

const JobSchema = new Schema<IJob>({
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    title: { type: String, required: true, trim: true },
    domain: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
    jobType: { 
        type: String, 
        enum: ['full-time', 'part-time', 'contract', 'internship','remote'], 
        required: true 
    },
}, { timestamps: true });


if (mongoose.models.Job) {
    delete mongoose.models.Job;
}

// 🟢 Cascade delete applicants when a job is deleted
JobSchema.pre('findOneAndDelete', async function (next) {
    const jobId = this.getQuery()['_id'];
    try {
        await Applicant.deleteMany({ job: jobId });  // Delete all applicants linked to this job ID
        next();
    } catch (error:any) {
        next(error);
    }
});


export default mongoose.models.Job || model<IJob>('Job', JobSchema);
