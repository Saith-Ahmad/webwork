import mongoose, { Schema, Document, model, Types } from 'mongoose';

interface IApplicant extends Document {
    job: Types.ObjectId;       // Reference to Job
    name: string;
    email: string;
    linkedin: string;          // LinkedIn URL
    resume: string;            // URL of the resume (Cloudinary/Firebase URL)
}

const ApplicantSchema = new Schema<IApplicant>({
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    linkedin: { type: String, required: true },
    resume: { type: String, required: true },
}, { timestamps: true });
ApplicantSchema.index({ email: 1, job: 1 }, { unique: true });

if (mongoose.models.Applicant) {
    delete mongoose.models.Applicant;
}


export default mongoose.models.Applicant || model<IApplicant>('Applicant', ApplicantSchema);
