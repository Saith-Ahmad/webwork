import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHero() {
    return (
        <div className='min-h-[100vh] pb-20 md:pb-0 relative md:min-h-[100vh] bg-[#78D0EA] flex items-center justify-between pt-10 md:pt-0 overflow-hidden'>

            {/* Content Section */}
            <div className='container flex flex-col md:flex-row justify-between items-center'>

                {/* Left Section */}
                <div className='md:p-10 p-3 flex flex-col gap-2 md:w-[50%] relative z-10'>
                    <FadeInLeft duration={1} distance={70} once={false}>
                        <h1 className='text-4xl md:text-5xl font-bold text-white md:max-w-[600px]'>
                        Build Your Dream Team With The Best Talent And Management Hassle Free
                        </h1>
                    </FadeInLeft>

                    <FadeInBottom duration={1} distance={40}>
                        <div className='max-w-[500px] mt-3'>
                            <Image alt='Remote Talent Aquisition' src={'/assets/line.svg'} width={400} height={10} />
                        </div>
                    </FadeInBottom>

                    <p className='text-white font-medium text-lg mt-4'>
                    Beyond Hut helps businesses scale with cost-effective top-tier (elite)  talent  – vetted, trained and ready to plug into your team.
                    </p>

                    {/* Ensure button is clickable */}
                    <div className='relative z-20'>
                        <Link href={'/get-started'}>
                            <Button size={'lg'} className='self-start mt-4 bg-white text-black rounded-full hover:bg-black hover:text-white'>
                                Hire Talent
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className='md:max-w-[40%] relative z-10'>
                    <div className='absolute md:w-[550px] pointer-events-none md:h-[550px] z-0 rounded-2xl md:-top-28 md:-left-10 md:rotate-[25deg] rotate-[55deg] w-[450px] h-[450px] top-24 sm:top-0 sm:left-20 inset-0 bg-[#9BE4FA]'></div>

                    <FadeInRight once={false} duration={1}>
                        <Image alt='Remote Talent Aquisition' src={'/assets/home_hero.png'} width={800} height={600} className='relative z-10' />
                    </FadeInRight>
                </div>

                {/* Bottom Shape */}
                <div className='w-[100vw] absolute md:-bottom-10 -bottom-[7px] right-0 z-[20]'>
                    <img src='/assets/shape_hero.svg' className='w-[100vw]' />
                </div>

            </div>
        </div>



    )
}

export default HomeHero