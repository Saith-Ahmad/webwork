import JobListings from '@/components/pages/JobSeekers/JobListings'
import JobSeekersHero from '@/components/pages/JobSeekers/JSHero'
import WorkWithUs from '@/components/pages/JobSeekers/WorkWithUs'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import React from 'react'

function JobSeekers() {
  return (
    <div className='overflow-hidden'>
      <JobSeekersHero/>
      <WorkWithUs/>
      <JobListings/>
      <HireTopTalent/>
    </div>
  )
}

export default JobSeekers