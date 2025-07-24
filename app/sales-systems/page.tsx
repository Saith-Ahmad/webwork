
import BeyondFlow from '@/components/pages/SalesConsultency/BeyondFlow'
import CTASales from '@/components/pages/SalesConsultency/CTASales'
import SalesConsultencyHero from '@/components/pages/SalesConsultency/Hero'
import RightRole from '@/components/pages/SalesConsultency/RightRole'
import SliderLogos from '@/components/pages/SalesConsultency/SliderLogos'
import WeGoBeyond from '@/components/pages/SalesConsultency/WeGoBeyond'
import React from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Systems',
}



function SalesConsultancyAutomation() {
  return (
    <div className=''>
      <SalesConsultencyHero/> 
      <WeGoBeyond/>
      <SliderLogos/>
      <BeyondFlow/>
      <RightRole/>
      <CTASales/>
    </div>
  )
}

export default SalesConsultancyAutomation