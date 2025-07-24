import BlogsSection from '@/components/pages/Home/BlogsSections'
import Beyondway from '@/components/pages/realestate/Beyondway'
import CTARealEstate from '@/components/pages/realestate/CtaRealEstate'
import ImmediateWins from '@/components/pages/realestate/ImeediateWins'
import LounchPath from '@/components/pages/realestate/LounchPath'
import PressureEveryAgentFeel from '@/components/pages/realestate/PressureAgentFeel'
import RealEstateHero from '@/components/pages/realestate/RealEstateHero'
import TalentReplacement from '@/components/pages/realestate/TalentReplacement'
import React from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate',
}



function page() {
  return (
    <div>
      <RealEstateHero/>
      <PressureEveryAgentFeel/>
      <Beyondway/>
      <TalentReplacement/>
      <ImmediateWins/>
      <LounchPath/>
      <BlogsSection/>
      <CTARealEstate/>
    </div>
  )
}

export default page