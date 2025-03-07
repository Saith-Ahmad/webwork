import { NextApiRequest, NextApiResponse } from 'next';
import Job from '@/models/Job';
import { connectToDB } from '@/lib/db/db';
import { NextResponse } from 'next/server';

function parseDateFilter(date: string) {
    switch (date) {
        case '24h':
            return 24 * 60 * 60 * 1000; // Last 24 hours
        case '7d':
            return 7 * 24 * 60 * 60 * 1000; // Last 7 days
        default:
            return 0;
    }
}

export async function GET(req: Request) {
    

    await connectToDB();
    const { search = '', date = '', type = '', domain = '', page = '1', limit = '6' } = Object.fromEntries(new URL(req.url).searchParams);
    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(limit, 10) || 6;

    try {
        // Build search filters
        const searchFilter = search
            ? {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { domain: { $regex: search, $options: 'i' } },
                ],
            }
            : {};

        // Build additional filters
        const additionalFilters = {
            ...(type ? { jobType: { $regex: type, $options: 'i' } } : {}),
            ...(domain ? { domain: { $regex: domain, $options: 'i' } } : {}),
            ...(date
                ? {
                    createdAt: {
                        $gte: new Date(Date.now() - parseDateFilter(date)),
                    },
                }
                : {}),
        };

        // Combine filters
        const filters = { ...searchFilter, ...additionalFilters };

        // Get total count for pagination
        const totalJobs = await Job.countDocuments(filters);

        // Fetch jobs with pagination and filters
        const jobs = await Job.find(filters)
            .populate('company')
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize);

        return NextResponse.json(
            {
                success: true,
                data: jobs,
                currentPage: pageNumber,
                totalPages: Math.ceil(totalJobs / pageSize),
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch jobs',
            },
            { status: 500 }
        );
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
