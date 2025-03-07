import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TalentOutsourcingHero() {
    return (
        <div className='min-h-[100vh] pb-20 md:pb-0 relative md:min-h-[100vh] bg-[#78D0EA] flex items-center justify-between pt-10 md:pt-0'>
            <div className='container flex flex-col md:flex-row justify-between items-center'>
                {/* Left Side Content */}
                <div className='md:p-10 p-3 flex flex-col gap-2 md:w-[50%]'>
                    <FadeInLeft duration={1} distance={70} once={false}>
                        <h1 className='text-4xl md:text-5xl font-bold text-white leading-[1.5] md:max-w-[450px]'>
                            Hire Top Talent, Build Your Dream Team <span className='bg-white text-[#79CFEA] rounded-lg px-2 inline-block'>from $799/m</span>
                        </h1>


                    </FadeInLeft>

                    <FadeInBottom duration={1} distance={40}>
                        <div className='max-w-[500px] mt-3'>
                            <Image alt='Remote Talent Acquisition' src={'/assets/line.svg'} width={400} height={10} />
                        </div>
                    </FadeInBottom>

                    <p className='text-white font-medium text-lg mt-4 max-w-[500px]'>
                        We connect you with world-class professionals in sales, design, tech, and operations – all rigorously vetted and ready to drive results.
                    </p>

                    <Link href='/get-started'>
                        <Button size={'lg'} className='self-start mt-4 bg-white text-black rounded-full hover:bg-black hover:text-white'>
                            Hire Top Talent Now
                        </Button>
                    </Link>
                </div>

                {/* Right Side Illustration */}
                <div className='md:max-w-[40%]'>
                    <FadeInRight once={false} duration={1}>
                        <Image alt='Remote Talent Acquisition' src={'/assets/talentoutsourcehero.png'} width={800} height={600} className='w-full h-auto' />
                    </FadeInRight>
                </div>
            </div>

            {/* Background Shape */}
            <div className='w-[100vw] absolute md:-bottom-10 -bottom-[5px] right-0'>
                <img src='/assets/shape_hero.svg' className='w-[100vw]' />
            </div>
        </div>
    )
}

export default TalentOutsourcingHero