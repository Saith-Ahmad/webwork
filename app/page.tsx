'use client'
import CutFire from '@/components/pages/Home/CutFire'
import GrowthPuzzle from '@/components/pages/Home/GrowthPuzzle'
import HomeHero from '@/components/pages/Home/Hero'
import SnapScroll from '@/components/pages/Home/HybridScroll2'
import StartWithUs from '@/components/pages/Home/StartWithUs'
import TalentWithoutHussle from '@/components/pages/Home/TalentWithoutHussle'
import WhatWeDo from '@/components/pages/Home/WhatWeDo'
import WhyChoose from '@/components/pages/Home/WhyChoose'
import React from 'react'


function Home() {
  return (
    <div className='overflow-hidden'>
      <HomeHero/>
      <TalentWithoutHussle/>
      <CutFire/>
      <WhatWeDo/>
      <div className='overflow-hidden'><SnapScroll/></div>
      <GrowthPuzzle/>
      <WhyChoose/>
      <StartWithUs/>
    </div>
  )
}

export default Home