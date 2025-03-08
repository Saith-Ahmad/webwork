'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Job } from '@/lib/constants/types'

const JobListingCard = ({ job, isFirst }: { job: Job; isFirst: boolean }) => {
  const router = useRouter()

  // Function to truncate title to 50 characters max
  const truncateTitle = (title: string, maxLength: number = 50) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title
  }

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-5 gap-4 h-[350px]"> {/* Fixed height */}
      <div className='flex gap-3 justify-start items-center mb-4 text-base'>
        <span className='px-3 py-1 border-[1px] rounded-full border-[#111111] text-[#454545] capitalize'>
          {job.domain}
        </span>
        <span className='px-3 py-1 border-[1px] rounded-full border-[#111111] text-[#454545] capitalize'>
          {typeof job.company !== 'string' && job.company.name}
        </span>
      </div>

      <div className='flex gap-2 justify-start items-start'>
        <div className='rounded-full p-1 border-[2px] border-black max-w-[50px]'>
          <Image
            src={typeof job.company !== 'string' && job.company?.image ? job.company.image : '/assets/default-logo.png'}
            alt='logo'
            width={55}
            height={55}
            unoptimized
            className='rounded-full'
          />
        </div>
        <h3 className='text-xl font-bold capitalize'>
          {truncateTitle(job.title)} {/* Truncated title */}
        </h3>
      </div>

      <div className='flex gap-2 justify-start items-center my-2 mt-auto'>
        <p className='capitalize'>{job.jobType} {"  |  "} {job.salary}</p>
      </div>

      <div className='mt-auto'> {/* Push button to the bottom */}
        <Button
          className={`w-full rounded-full ${isFirst ? 'bg-[#79D0EA]' : 'bg-transparent border-[1px] text-black border-black hover:bg-black hover:text-white'}`}
          onClick={() => router.push(`/job-listings/${job._id}`)}
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default JobListingCard
