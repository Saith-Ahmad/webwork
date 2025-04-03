import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RealEstateHero() {
    return (
        <div className='pb-20 md:pb-0 relative min-h-[100vh] bg-[#78D0EA]  overflow-hidden flex  items-center justify-between pt-10 md:pt-0'>
            <div className='container flex flex-col space-y-10 md:flex-row justify-between items-start'>
                <div className='md:p-10 p-3 flex flex-col gap-2'>
                    <FadeInLeft once={false} duration={0.5} distance={60}>
                        <h1 className='text-4xl md:text-5xl font-bold text-white max-w-[550px]'>Transform Your Real Estate Team with Remote Staffing</h1>
                    </FadeInLeft>
                    <div className='max-w-[500px] mt-3 '>
                    
                        <FadeInBottom once={false} duration={1} distance={40}>
                            <Image alt='Remote Talent Aquisition' src={'/assets/line.svg'} width={400} height={10} />
                        </FadeInBottom>
                    </div>
                    <p className='text-white font-medium text-lg mt-4'>Create Your Ideal Team for a Smaller Price</p>

                    <Link href={'/get-started'}>
                        <Button size={'lg'} className='self-start mt-4 bg-white text-black rounded-full hover:bg-black hover:text-white'>Hire My Remote Staff</Button>
                    </Link>
                </div>

                <div className='md:max-w-[40%] relative'>
                <div className='absolute md:w-[580px] md:h-[580px] z-0 rounded-2xl  md:-top-20 md:-left-20 md:rotate-[25deg] rotate-[15deg] w-[480px] h-[580px] top-2  sm:top-0 sm:left-20  inset-0 bg-[#9BE4FA]'></div>
                    <FadeInRight once={false} duration={0.6} distance={70}>
                        <Image alt='Remote Talent Aquisition' src={'/assets/rehero.png'} width={700} height={500} className='relative z-10'/>
                    </FadeInRight>
                </div>


                <div className='w-[100vw] absolute md:-bottom-10 -bottom-[5px] right-0'>
                    <img src='/assets/shape_hero.svg' className=' w-[100vw]' />
                </div>
            </div>
        </div>
    )
}

export default RealEstateHero