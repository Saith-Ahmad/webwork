import { NextResponse } from 'next/server';
import Company from '@/models/Company';
import { connectToDB } from '@/lib/db/db';

// GET all companies
export async function GET() {
    await connectToDB();

    try {
        const companies = await Company.find();
        return NextResponse.json({
            success: true,
            data: companies,
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching companies:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch companies',
        }, { status: 500 });
    }
}

// POST a new company
export async function POST(req: Request) {
    await connectToDB();

    try {
        const body = await req.json();
        const { name, image, description } = body;

        // Validate required fields
        if (!name || !image || !description) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required',
            }, { status: 400 });
        }

        const newCompany = await Company.create({
            name,
            image,
            description,
        });

        return NextResponse.json({
            success: true,
            data: newCompany,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating company:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create company',
        }, { status: 500 });
    }
}
