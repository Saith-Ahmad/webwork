
import HomeHero from '@/components/pages/Home/Hero'
import Testimonials from '@/components/pages/Home/Testimonials'
import WhatWeDo from '@/components/pages/Home/WhatWeDo'
import WhyChoose from '@/components/pages/Home/WhyChoose'
import React from 'react'

function Home() {
  return (
    <div className='mb-20'>
      <HomeHero/>
      <WhatWeDo/>
      <WhyChoose/>
      <Testimonials/>
    </div>
  )
}

export default Home