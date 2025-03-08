'use client'

import React, { useEffect, useState } from 'react'
import JobListingCard from './JobListingCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Job } from '@/lib/constants/types'
import { Skeleton } from '@/components/ui/skeleton'

function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true) // Loading state
  const router = useRouter()

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs')
        if (!res.ok) throw new Error('Failed to fetch jobs')
        const data = await res.json()
        if (data.data.length === 0) {
          setJobs([]) // No jobs found
        } else {
          setJobs(data.data.slice(0, 6)) // Limit to 6 jobs max
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false) // End loading
      }
    }

    fetchJobs()
  }, [])

  // Show skeleton loader while loading
  if (loading) {
    return (
      <div className='container my-14'>
        <div className='flex flex-col md:flex-row gap-2 justify-between items-center my-10'>
          <Skeleton  />
          <Skeleton  />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='col-span-1'>
              <Skeleton  /> {/* Skeleton for card */}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Do not render if no jobs
  if (jobs.length === 0) return null

  // Render actual jobs if available
  return (
    <div className='container my-14'>
      <div className='flex flex-col md:flex-row gap-2 justify-between items-center my-10'>
        <h2 className='md:text-4xl text-xl font-bold '>Our Featured Jobs</h2>
        <Button onClick={() => router.push('/job-listings')} className='rounded-full bg-[#79D0EA]'>
          View All <ArrowRight />
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {jobs.map((job, index) => (
          <div key={job._id} className='col-span-1'>
            <JobListingCard job={job} isFirst={index === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListings
