import Hero from '@/components/pages/AboutUs/Hero'
import VisionMision from '@/components/pages/AboutUs/VisionMision'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import React from 'react'

function AboutUs() {
  return (
    <div className='overflow-hidden'>
    <Hero/>
    <VisionMision/>
    <HireTopTalent heading={"Ready to Scale Your Sales?"} para={"Tell us your needs, and we'll match you with the perfect candidate."} btnText={"Get Started"}/>
    </div>
  )
}

export default AboutUs