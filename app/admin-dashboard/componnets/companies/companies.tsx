'use client';
import React from 'react';
import Image from 'next/image';
import { Company } from '@/lib/constants/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

type Props = {
    companies: Company[];
    loading: boolean;
    onDeleteCompany: (companyId: string) => void;
    onUpdateClick: (company: Company) => void;
};


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const Companies: React.FC<Props> = ({ companies, loading, onDeleteCompany, onUpdateClick }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 gap-2 md-grid-cols-2 lg:grid-cols-3 ">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-4 rounded-lg">
                        <Skeleton className="w-full h-32 mb-2 bg-[#161c28ad]" />
                        <Skeleton className="h-6 w-[70%] mb-2 bg-[#161c28ad]" />
                        <Skeleton className="h-3 w-[50%] bg-[#161c28ad]" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            
            {companies.length >= 1 ?
                <>
                    {companies.map((company, index) => (
                        <div key={index} className="bg-[#161C28] gap-2 flex flex-col justify-between h-full items-start p-3 rounded-lg shadow-xl shadow-[#0603035d] text-white">
                            <Image src={company?.image} alt="logo" width={50} height={50} className="rounded-full w-[50px] h-[50px] shadow-white shadow-sm" />
                            <div className="mt-2">
                                <h3 className="text-xl font-semibold">{company.name}</h3>
                                <p className="text-sm whitespace-pre-line">{(company.description.length) < 200 ? company.description : `${company.description.slice(0, 200)}...`}</p>
                            </div>
                            <div className="flex gap-2  mt-auto">

                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <Button variant="destructive">
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Extreme Caution! ⚠️</AlertDialogTitle>
                                            <AlertDialogDescription className='text-base '>
                                                This action cannot be undone. This will permanently delete all jobs attached to this company along with
                                                all their applicants.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => company._id && onDeleteCompany(company._id)} className='bg-red-600 hover:bg-red-700'>Yes Delete</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>

                                <Button onClick={() => onUpdateClick(company)}>Edit</Button>
                            </div>
                        </div>
                    ))}
                </>
                :
                <h2 className='font-semibold '>
                    No Companies Found
                </h2>


            }

        </div>
    );
};


export default Companies;
