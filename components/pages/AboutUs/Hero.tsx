import FadeInBottom from '@/components/framermotion/FadeInBottom'
import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
    return (
        <div className='min-h-[90vh] bg-[#78D0EA] flex  items-center justify-between pt-10 md:pt-0 '>
            <div className='container flex flex-col justify-center items-center gap-4 max-w-screen-lg'>
                <Button className='bg-[#FFF8F2] text-black border-[1px] border-black'>About Beyond Hut</Button>

                <FadeInBottom duration={1} distance={70} once={false}>
                    <h1 className='text-4xl md:text-5xl font-bold text-white text-center'>Your One-Stop Solution for Remote Talent & Sales Automation</h1>
                </FadeInBottom>

                <p className='text-white font-medium text-lg mt-4 text-center'>At Beyond Hut, we believe in breaking hiring barriers. Our mission is simple: connect businesses with world-class talent effortlessly. We help companies scale faster with pre-vetted professionals, seamless hiring, and smart automation.</p>
            </div>
        </div>
    )
}

export default Hero