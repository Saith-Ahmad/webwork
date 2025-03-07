import WorkWithUs from '@/components/pages/JobSeekers/WorkWithUs'
import SalesConsultencyHero from '@/components/pages/SalesConsultency/Hero'
import LetUsHelp from '@/components/pages/SalesConsultency/LetUsHelp'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import React from 'react'

function SalesConsultancyAutomation() {
  return (
    <div className='overflow-hidden'>
      <SalesConsultencyHero/>
      <LetUsHelp/>
      <HireTopTalent heading={"Ready to Scale Your Sales?"} para={"Optimize outreach, automate processes, and generate high-quality leads effortlessly."} btnText={"Get Started"}/>
    </div>
  )
}

export default SalesConsultancyAutomation