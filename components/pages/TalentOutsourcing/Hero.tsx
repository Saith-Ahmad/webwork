import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TalentOutsourcingHero() {
    return (
        <div className='relative min-h-screen bg-[#78D0EA] flex items-center overflow-hidden'>
            <div className='container grid md:grid-cols-2 items-center gap-10 px-6 md:px-12'>

                {/* Left Side Content */}
                <div className='relative flex flex-col gap-5'>
                    <FadeInLeft duration={1} distance={70} once={false}>
                        <div className='relative inline-block'>
                            <h1 className='text-[clamp(2rem,5vw,3.5rem)] font-bold text-white max-w-[600px] leading-tight'>
                                Hire Top Talent, <br /> Build Your Dream Team
                            </h1>

                            {/* Larger Yellow Vector in the Top-Right */}
                            <div className='absolute top-[-40px] right-[-30px] md:top-[-50px] md:right-[-60px] w-[30vw] max-w-[140px] md:max-w-[180px] lg:max-w-[220px]'>
                                <Image 
                                    src='/assets/Group%2048095464.svg' 
                                    alt='Yellow Decorative Vector' 
                                    width={220} 
                                    height={220} 
                                    className='w-full'
                                />
                            </div>
                        </div>
                    </FadeInLeft>
                    
                    {/* Underline SVG */}
                    <div className='w-[90%] max-w-[400px]'>
                        <FadeInBottom once={false} duration={0.9}>
                            <Image 
                                alt='Underline Decoration' 
                                src='/assets/line.svg' 
                                width={400} 
                                height={10} 
                                className='w-full' 
                            />
                        </FadeInBottom>
                    </div>

                    <p className='text-white text-lg leading-relaxed max-w-[500px]'>
                        We connect you with world-class professionals in sales, design, tech, and operations – all rigorously vetted and ready to drive results.
                    </p>

                    <FadeInBottom once={false} duration={0.5}>
                        <Link href='/get-started'>
                            <Button className='self-start mt-3 bg-white text-black rounded-full hover:bg-black hover:text-white' size='lg'>
                                Hire Top Talent Now
                            </Button>
                        </Link>
                    </FadeInBottom>
                </div>

                {/* Right Side Illustration */}
                <div className='w-full max-w-lg mx-auto relative'>
                    <FadeInRight once={false} duration={1}>
                        <Image 
                            alt='Remote Talent Acquisition' 
                            src='/assets/talentoutsourcehero.png' 
                            width={800} 
                            height={600} 
                            className='w-full h-auto'
                        />
                    </FadeInRight>
                </div>
            </div>

            {/* Background Shape */}
            <div className='absolute inset-x-0 bottom-0 w-full'>
                <img src='/assets/shape_hero.svg' className='w-full object-cover' />
            </div>
        </div>
    )
}

export default TalentOutsourcingHero
