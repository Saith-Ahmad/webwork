import AboutHero from '@/components/pages/AboutUs/Hero'
import MakeDifference from '@/components/pages/AboutUs/MakeDifference'
import MeetTheTeam from '@/components/pages/AboutUs/MeetTheTeam'
import MissionVission from '@/components/pages/AboutUs/MissionVission'
import OurValues from '@/components/pages/AboutUs/OurValues'
import WeGotHere from '@/components/pages/AboutUs/WeGotHere'
import StartWithUs from '@/components/pages/Home/StartWithUs'
import React from 'react'

function AboutUs() {
  return (
    <>
      <AboutHero/>
      <MissionVission/>
      <MeetTheTeam/>
      <OurValues/>
      <MakeDifference/>
      <WeGotHere/>
      <StartWithUs/>
    </>
  )
}

export default AboutUs