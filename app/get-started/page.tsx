import Image from 'next/image'
import React from 'react'
import ContactForm from './GetStartedForm'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInBottom from '@/components/framermotion/FadeInBottom'

function GetStarted() {
  return (
    <div className='container'>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        {/* 1st col */}
        <div className='flex flex-col gap-2  p-10 justify-center items-center md:min-h-[100vh] relative'>
          <div className="absolute inset-0 -z-[1] pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute  w-[250px] h-[250px] bg-[#dddbfa] rounded-full blur-3xl opacity-70 lg:bottom-[20%] lg:left-[25%] bottom-[15%] left-0"></div>
              <div className="absolute w-[250px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-70 lg:bottom-[20%] lg:left-[15%] bottom-[13%] left-[10%]"></div>

            </div>
          </div>

          <FadeInLeft duration={0.8} distance={60} once={false}>
            <Image src={'/assets/new/getstarted.png'} alt='get started' width={450} height={400} />
          </FadeInLeft>

          <FadeInBottom duration={0.8} distance={60} once={false}>
            <h1 className='text-center text-black font-roca md:text-4xl text-3xl font-bold mt-4'>
              Hire Top Talent,<br /> Build Your Dream Team
            </h1>
          </FadeInBottom>
          <p className='text-[#516371] text-center p-4 md:p-8 text-base md:text-lg font-normal max-w-[500px] '>We connect you with world-class professionals in sales, design, tech, and operations – all rigorously vetted and ready to drive results</p>
        </div>

        <hr className='min-h-[500px] w-[4px] bg-primary hidden md:flex'/>
        <hr className='min-w-[250px] h-[2px] bg-primary flex md:hidden'/>


        <div className=' md:max-w-[50%] h-full flex flex-col justify-center items-center p-10 md:min-h-[100vh]'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default GetStarted