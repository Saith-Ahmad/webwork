import BlogsSection from '@/components/pages/Home/BlogsSections'
import CutFire from '@/components/pages/Home/CutFire'
import FullServices from '@/components/pages/Home/FullServices'
import GrowthPuzzle from '@/components/pages/Home/GrowthPuzzle'
import HomeHero from '@/components/pages/Home/Hero'
import HybridScrollSection from '@/components/pages/Home/HybridScrollSection'
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
      <HybridScrollSection/>
      <GrowthPuzzle/>
      <FullServices/>
      <WhyChoose/>
      <BlogsSection/>
      <StartWithUs/>
    </div>
  )
}

export default Home