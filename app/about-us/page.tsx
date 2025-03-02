import Hero from '@/components/pages/AboutUs/Hero'
import VisionMision from '@/components/pages/AboutUs/VisionMision'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import React from 'react'

function AboutUs() {
  return (
    <div className='overflow-hidden'>
    <Hero/>
    <VisionMision/>
    <HireTopTalent/>
    </div>
  )
}

export default AboutUs