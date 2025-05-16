'use client'
import WhyChooseUs from '@/components/pages/TalentOutsourcing/ChooseUs'
import TalentOutsourcingHero from '@/components/pages/TalentOutsourcing/Hero'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import Timeline from '@/components/pages/TalentOutsourcing/Timeline'
import WhoWeAre from '@/components/pages/TalentOutsourcing/WhoWeAre'
import React from 'react'

function Talent_Outsoursing() {
  return (
    <div className='overflow-hidden'>
      <TalentOutsourcingHero/>
      <WhoWeAre/>
      <WhyChooseUs/>
      <Timeline/>
      <HireTopTalent heading={"Ready to Hire Top Talent?"} para={"Tell us your needs, and we'll match you with the perfect candidate."} btnText={"Get Started"}/>
    </div>
  )
}

export default Talent_Outsoursing