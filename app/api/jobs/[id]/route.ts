import { NextResponse } from 'next/server';
import Job from '@/models/Job';
import { connectToDB } from '@/lib/db/db';
import mongoose from 'mongoose';

// 🟢 GET job by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();
    try {
        const job = await Job.findById(params.id).populate('company');
        if (!job) {
            return NextResponse.json({
                success: false,
                message: 'Job not found',
            }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            data: job,
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching job:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch job',
        }, { status: 500 });
    }
}


// 🟢 DELETE job by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();

    try {
        const deletedJob = await Job.findByIdAndDelete(params.id);
        if (!deletedJob) {
            return NextResponse.json({
                success: false,
                message: 'Job not found',
            }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            message: 'Job deleted successfully',
        }, { status: 200 });
    } catch (error) {
        console.error('Error deleting job:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to delete job',
        }, { status: 500 });
    }
}




export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();
    const { id } = params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ success: false, message: 'Invalid Job ID' }, { status: 400 });
        }

    try {
        const body = await req.json();
        const { title, domain, salary, description, jobType } = body;

        // Validate required fields
        if (!title && !domain && !salary && !description && !jobType) {
            return NextResponse.json({
                success: false,
                message: 'No Fields to Update', 
            }, { status: 400 });
        }

        const updatedJob = await Job.findByIdAndUpdate(
            params.id,
            { title, domain, salary, description, jobType },
            { new: true }
        );

        if (!updatedJob) {
            return NextResponse.json({
                success: false,
                message: 'Job not found',
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: updatedJob,
        }, { status: 200 });
    } catch (error) {
        console.error('Error updating job:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to update job',
        }, { status: 500 });
    }
}
