import mongoose, { Schema, Document, model } from 'mongoose';
import Job from './Job';
import Applicant from './Applicant';

interface ICompany extends Document {
    name: string;
    image: string;  // URL of the company logo (Cloudinary/Firebase URL)
    description: string;
}

const CompanySchema = new Schema<ICompany>({
    name: { type: String, required: true, trim: true , unique:true},
    image: { type: String, required: true },
    description: { type: String, required: true, trim: true },
}, { timestamps: true });

// if (mongoose.models.Company) {
//     delete mongoose.models.Company;
// }

CompanySchema.pre('findOneAndDelete', async function (next) {
    const companyId = this.getQuery()['_id'];
    try {
        // Find all jobs associated with this company
        const jobs = await Job.find({ company: companyId });
        // Extract job IDs
        const jobIds = jobs.map((job) => job._id);
        // Delete all applicants linked to these jobs
        await Applicant.deleteMany({ job: { $in: jobIds } });
        // Delete all jobs linked to this company
        await Job.deleteMany({ company: companyId });

        next();
    } catch (error: any) {
        next(error);
    }
});

CompanySchema.index({ name: 1 }, { unique: true });  

export default mongoose.models.Company || model<ICompany>('Company', CompanySchema);
