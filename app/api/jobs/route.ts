import { NextApiRequest, NextApiResponse } from 'next';
import Job from '@/models/Job';
import { connectToDB } from '@/lib/db/db';
import { NextResponse } from 'next/server';

export async function GET() {
    await connectToDB();
    try {
        const jobs = await Job.find().populate('company');
        return NextResponse.json({
            success: true,
            data: jobs,
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch jobs',
        }, { status: 500 });
    }
}





export async function POST(req: Request) {
    await connectToDB();

    try {
        const body = await req.json();
        const { company, title, domain, salary, description, jobType } = body;

        // Validate required fields
        if (!company || !title || !domain || !salary || !description || !jobType) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            }, { status: 400 });
        }

        const newJob = await Job.create({
            company,
            title,
            domain,
            salary,
            description,
            jobType,
        });

        return NextResponse.json({
            success: true,
            data: newJob,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create job',
        }, { status: 500 });
    }
}
