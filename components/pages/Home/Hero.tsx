import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHero() {
    return (
        <div className='container '>
            <div className='bg-white shadow-lg shadow-gray-200 md:min-h-[100vh] rounded-3xl  flex flex-col justify-center items-center relative overflow-hidden'>

                {/* Glow*/}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full glow-animation">
                        {/* Purple Glow */}
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#A78BFA] rounded-full blur-3xl opacity-50 bottom-0 left-0"></div>

                        {/* Sky Blue Glow */}
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7DD3FC] rounded-full blur-3xl opacity-50 bottom-20 left-30"></div>
                    </div>
                </div>



                <div className='w-full md:max-w-[70%] mt-14 md:p-5 p-3'>
                    <h1 className="font-roca text-3xl md:text-4xl lg:text-[40px] font-thin text-center md:max-w-[900px]">Build Your Dream Team With The <br className='hidden lg:flex' /> Best Talent And Management <br className='hidden lg:flex' /> Hassle Free</h1>
                    <p className='mt-7 text-center  text-lg text-[#516371]'>Beyond Hut helps businesses scale with cost-effective top-tier talent  vetted, trained and ready to plug into your team.</p>
                </div>

                {/* semicircle */}
                <div className='mt-16 md:min-h-[350px] flex justify-center items-end w-full md:py-20 py-5'>
                    <img src='/assets/new/eclipse.png' className='w-[100%] md:w-[80%] absolute bottom-0 transform translate-y-[10px] z-[2]' />

                    <div className='relative flex flex-col justify-between items-center z-[10]'>
                        <Button size={'lg'} className="hover:scale-105 rounded-full mb-[50px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Hire Talent
                        </Button>
                        <p className='text-center text-sm md:text-base text-[#A7ABB6] mb-2'>Trusted Partners</p>
                        {/* logos */}
                        <div className='grid grid-cols-3 md:grid-cols-6'>
                            <img src={'/assets/new/hero_logo1.png'} alt='trusted companies' className='w-[60px] md:w-[90px]'/>
                            <img src={'/assets/new/hero_logo2.png'} alt='trusted companies' className='w-[60px] md:w-[90px]' />
                            <img src={'/assets/new/hero_logo3.png'} alt='trusted companies' className='w-[60px] md:w-[90px]' />
                            <img src={'/assets/new/hero_logo4.png'} alt='trusted companies' className='w-[60px] md:w-[90px]' />
                            <img src={'/assets/new/hero_logo5.png'} alt='trusted companies' className='w-[60px] md:w-[90px]' />
                            <img src={'/assets/new/hero_logo6.png'} alt='trusted companies' className='w-[60px] md:w-[90px]' />
                        </div>
                    </div>
                </div>


            </div>
        </div>



    )
}

export default HomeHero