import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TalentOutsourcingHero() {
    return (
        <div className='relative min-h-[100vh] bg-[#78D0EA] flex  items-center justify-between pt-10 md:pt-0'>
            <div className='container space-y-10 flex flex-col md:flex-row justify-between items-center'>


                <div className='md:p-10 p-3 flex flex-col gap-2'>
                    <FadeInLeft duration={1} distance={70} once={false}>
                        <h1 className='text-4xl md:text-5xl font-bold text-white max-w-[450px]'>Hire Top Talent, Build Your Dream Team</h1>
                    </FadeInLeft>
                    <div className='max-w-[500px]'>
                        <FadeInBottom once={false} duration={0.9}>
                            <Image alt='Remote Talent Aquisition' src={'/assets/line.svg'} width={400} height={10} />
                        </FadeInBottom>
                    </div>
                    <p className='text-white font-medium text-lg mt-4'>We connect you with world-class professionals in sales, design, tech, and operations – all rigorously vetted and ready to drive results</p>

                    <FadeInBottom once={false} duration={0.5}>
                        <Link href={'/get-started'}>
                            <Button className='self-start mt-4 bg-white text-black rounded-full hover:bg-black hover:text-white' size={'lg'}>Hire Top Talent Now</Button>
                        </Link>
                    </FadeInBottom>
                </div>

                <div className='md:max-w-[40%]'>
                    <FadeInRight once={false} duration={1}>
                        <Image alt='Remote Talent Aquisition' src={'/assets/talentoutsourcehero.png'} width={800} height={600} />
                    </FadeInRight>
                </div>


                <div className='w-[100vw] absolute md:-bottom-10 -bottom-[5px] right-0'>
                    <img src='/assets/shape_hero.svg' className=' w-[100vw]' />
                </div>
            </div>
        </div>
    )
}

export default TalentOutsourcingHero