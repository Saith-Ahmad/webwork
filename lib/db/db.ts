import mongoose from 'mongoose';
import Company from '@/models/Company';  // Make sure to import the Company schema here
import Job from '@/models/Job';

let isConnected = false; // Track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    const NEXT_PUBLIC_MONGODB_URL = process.env.NEXT_PUBLIC_MONGODB_URL;
    if (!NEXT_PUBLIC_MONGODB_URL) {
        console.error("MONGODB_URL is not defined in environment variables.");
        return;
    }

    if (isConnected) {
        console.log("Already connected to MongoDB.");
        return;
    }

    try {
        await mongoose.connect(NEXT_PUBLIC_MONGODB_URL);
        isConnected = true;
        console.log("✅ Successfully connected to MongoDB.");

        // Register schemas if not registered
        if (!mongoose.models.Company) {
            mongoose.model('Company', Company.schema);
        }
        if (!mongoose.models.Job) {
            mongoose.model('Job', Job.schema);
        }

    } catch (error) {
        console.error(" MongoDB connection error:", error);
        process.exit(1);
    }
};
