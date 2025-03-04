import Image from 'next/image'
import React from 'react'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInBottom from '@/components/framermotion/FadeInBottom'
import Link from 'next/link'
import Form from './Form'

function ApplicationForm() {
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row'>
        {/* 1st col */}
        <div className='flex flex-col gap-2  bg-[#78D0EA] md:w-[50%] p-10 justify-center items-center md:min-h-[100vh]'>
          <Link href={'/'} className='self-start'>
            <img src='/assets/logowhite.png' alt='logo' className='self-start' width={70}/>
          </Link>
          <FadeInLeft duration={0.8} distance={60} once={false}>
              <Image src={'/assets/joobseekerhero.png'} alt='get started' width={350} height={400}/>
          </FadeInLeft>

          <FadeInBottom duration={0.8} distance={60} once={false}>
          <h1 className='text-center text-white md:text-4xl text-3xl font-bold mt-4'>
          Find Your Dream Job with Top Global Companies
          </h1>
          </FadeInBottom>
          <hr className='w-full  bg-white h-1 mt-3'/>
          <p className='text-white text-center p-4 md:p-8 text-base md:text-lg font-semibold '>Remote & On-Site Jobs with High-Growth Startups & Enterprises</p>
        </div>

        <div className='md:w-[50%] h-full flex flex-col justify-center items-center p-10 md:min-h-[100vh]'>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm