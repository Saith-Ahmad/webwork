import WorkWithUs from '@/components/pages/JobSeekers/WorkWithUs'
import BeyondFlow from '@/components/pages/SalesConsultency/BeyondFlow'
import CTASales from '@/components/pages/SalesConsultency/CTASales'
import SalesConsultencyHero from '@/components/pages/SalesConsultency/Hero'
import RightRole from '@/components/pages/SalesConsultency/RightRole'
import WeGoBeyond from '@/components/pages/SalesConsultency/WeGoBeyond'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import React from 'react'

function SalesConsultancyAutomation() {
  return (
    <div className=''>
      <SalesConsultencyHero/> 
      {/* <WeGoBeyond/> */}
      <BeyondFlow/>
      <RightRole/>
      <CTASales/>
    </div>
  )
}

export default SalesConsultancyAutomation