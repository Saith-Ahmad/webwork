'use client'
import Challenges from '@/components/pages/RealEstate/Challenges'
import RealEstateHero from '@/components/pages/RealEstate/Hero'
import RemotePartners from '@/components/pages/RealEstate/RemotePartners'
import TimelineRealEstate from '@/components/pages/RealEstate/TimeLineRealEstate'
import WhyRemoteStaffing from '@/components/pages/RealEstate/WhyRemoteStaffing'
import HireTopTalent from '@/components/pages/TalentOutsourcing/HireTopTalent'
import React from 'react'

function RealEstate() {
  return (
    <div>
        <RealEstateHero/>
        <WhyRemoteStaffing/>
        <Challenges/>
        <RemotePartners/>
        <TimelineRealEstate/>
        <HireTopTalent heading={"Ready to Hire Top Talent?"} para={"Tell us your needs, and we'll match you with the perfect candidate."} btnText={"Get Started"}/>
    </div>
  )
}

export default RealEstate