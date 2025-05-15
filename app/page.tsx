
import CutFire from '@/components/pages/Home/CutFire'
import GrowthPuzzle from '@/components/pages/Home/GrowthPuzzle'
import HomeHero from '@/components/pages/Home/Hero'
import HybridScrollSection from '@/components/pages/Home/HorizontalScrollCards'
import HybridScroll2 from '@/components/pages/Home/HybridScroll2'
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
      <div className='overflow-hidden'> <HybridScrollSection/> </div>
      {/* <div className='overflow-hidden'><HybridScroll2/></div> */}
      <GrowthPuzzle/>
      <WhyChoose/>
      <StartWithUs/>
    </div>
  )
}

export default Home