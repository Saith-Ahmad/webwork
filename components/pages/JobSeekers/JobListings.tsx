import React from 'react'
import JobListingCard from './JobListingCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function JobListings() {
    return (
        <div className='container my-14'>
            <div className='flex justify-between items-center my-10'>
                <h2 className='md:text-4xl text-3xl font-bold '>Our Features Jobs</h2>
                <Button className='rounded-full bg-[#79D0EA]'>View All <ArrowRight /> </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='col-span-1'>
                        <JobListingCard isFirst={index === 0}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobListings