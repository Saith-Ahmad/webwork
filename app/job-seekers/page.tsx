
import CTAJobSeekers from '@/components/pages/JobSeekers/CtaJobSeekers'
import JobSeekersHero from '@/components/pages/JobSeekers/JSHero'
import MoreThanResume from '@/components/pages/JobSeekers/MoreThanResume'
import TalentMovesFast from '@/components/pages/JobSeekers/TalentMovesFast'
import ThreeStepProcess from '@/components/pages/JobSeekers/ThreeStepProcess'
import FindRightPeople from '@/components/pages/JobSeekers/WorkWithUs'
import React from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Seekers',
}



function JobSeekers() {
  return (
    <div className=''>
      <JobSeekersHero/>
      <FindRightPeople/>
      <MoreThanResume/>
      <TalentMovesFast/>
      <ThreeStepProcess/>
      <CTAJobSeekers/>
      {/* <JobListings/> */}
    </div>
  )
}

export default JobSeekers