'use client'
import StartWithUs from '@/components/pages/Home/StartWithUs'
import CTAJobSeekers from '@/components/pages/JobSeekers/CtaJobSeekers'
import JobSeekersHero from '@/components/pages/JobSeekers/JSHero'
import MoreThanResume from '@/components/pages/JobSeekers/MoreThanResume'
import TalentMovesFast from '@/components/pages/JobSeekers/TalentMovesFast'
import ThreeStepProcess from '@/components/pages/JobSeekers/ThreeStepProcess'
import FindRightPeople from '@/components/pages/JobSeekers/WorkWithUs'
import React from 'react'

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