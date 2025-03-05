import { NextResponse } from 'next/server';
import Applicant from '@/models/Applicant';
import Job from '@/models/Job';
import { connectToDB } from '@/lib/db/db';

// 🟢 GET one applicant by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();

    const { id } = params;

    try {
        const applicant = await Applicant.findById(id).populate('job');
        if (!applicant) {
            return NextResponse.json({
                success: false,
                message: 'Applicant not found',
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: applicant,
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching applicant:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch applicant',
        }, { status: 500 });
    }
}

// 🟢 DELETE an applicant by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();

    const { id } = params;

    try {
        const deletedApplicant = await Applicant.findByIdAndDelete(id);
        if (!deletedApplicant) {
            return NextResponse.json({
                success: false,
                message: 'Applicant not found',
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: 'Applicant deleted successfully',
        }, { status: 200 });
    } catch (error) {
        console.error('Error deleting applicant:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to delete applicant',
        }, { status: 500 });
    }
}

// 🟢 UPDATE an applicant by ID
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();

    const { id } = params;

    try {
        const body = await req.json();
        const { job, name, email, linkedin, resume } = body;

        // Validate required fields
        if (!job && !name && !email && !linkedin && !resume) {
            return NextResponse.json({
                success: false,
                message: 'At least one field is required for update',
            }, { status: 400 });
        }

        // Check if the job ID is valid if it's provided
        if (job) {
            const existingJob = await Job.findById(job);
            if (!existingJob) {
                return NextResponse.json({
                    success: false,
                    message: 'Invalid job ID',
                }, { status: 404 });
            }
        }

        const updatedApplicant = await Applicant.findByIdAndUpdate(
            id,
            { job, name, email, linkedin, resume },
            { new: true, runValidators: true }
        );

        if (!updatedApplicant) {
            return NextResponse.json({
                success: false,
                message: 'Applicant not found',
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: updatedApplicant,
        }, { status: 200 });
    } catch (error) {
        console.error('Error updating applicant:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to update applicant',
        }, { status: 500 });
    }
}
