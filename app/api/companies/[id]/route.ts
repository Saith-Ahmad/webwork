import { NextResponse } from 'next/server';
import Company from '@/models/Company';
import { connectToDB } from '@/lib/db/db';
import mongoose from 'mongoose';

// 🟢 GET Single Company by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();
    const { id } = params;
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: 'Invalid company ID' }, { status: 400 });
    }
    try {
        const company = await Company.findById(id);
        if (!company) {
            return NextResponse.json({ success: false, message: 'Company not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: company }, { status: 200 });
    } catch (error) {
        console.error('Error fetching company:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch company' }, { status: 500 });
    }
}

// 🟢 DELETE Single Company by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: 'Invalid company ID' }, { status: 400 });
    }

    try {
        const deletedCompany = await Company.findByIdAndDelete(id);
        if (!deletedCompany) {
            return NextResponse.json({ success: false, message: 'Company not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Company deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting company:', error);
        return NextResponse.json({ success: false, message: 'Failed to delete company' }, { status: 500 });
    }
}

// 🟢 UPDATE Single Company by ID
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    await connectToDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: 'Invalid company ID' }, { status: 400 });
    }

    try {
        const body = await req.json();
        const { name, image, description } = body;

        // Validate fields (optional)
        if (!name && !image && !description) {
            return NextResponse.json({ success: false, message: 'No fields to update' }, { status: 400 });
        }

        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            { name, image, description },
            { new: true }  // Return updated document
        );

        if (!updatedCompany) {
            return NextResponse.json({ success: false, message: 'Company not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedCompany }, { status: 200 });
    } catch (error) {
        console.error('Error updating company:', error);
        return NextResponse.json({ success: false, message: 'Failed to update company' }, { status: 500 });
    }
}
 