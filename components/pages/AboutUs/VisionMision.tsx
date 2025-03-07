import FadeInBottom from '@/components/framermotion/FadeInBottom'
import Image from 'next/image'
import React from 'react'

function VisionMision() {
    return (
        <div className='container my-28 min-h-[75vh] md:min-h-[50vh] items-center flex flex-col justify-center'>
            <p className='text-lg text-center'>WHY WORK WITH US?</p>
            <FadeInBottom once={false}>
                <h2 className='md:text-4xl text-3xl text-center font-semibold'>Elevate Your Career with Top Global Companies</h2>
            </FadeInBottom>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-[#F8E1BE] relative z-10 p-6 md:p-8 lg:p-10 w-full  mx-auto rounded-md cursor-pointer transform-scale-shadow'>
                    <div className='flex-grow'>
                        <h4 className='text-xl md:text-2xl font-semibold'>🚀 Our Mission</h4>
                        <p className='text-sm md:text-base max-w-full'>
                            Revolutionizing remote hiring by making elite global talent accessible, affordable, and highly productive.
                        </p>
                    </div>
                </div>

                <div className='bg-[#FAC2C1] relative z-10 p-6 md:p-8 lg:p-10 w-full  mx-auto rounded-md cursor-pointer transform-scale-shadow'>
                    <div className='flex-grow'>
                        <h4 className='text-xl md:text-2xl font-semibold'>🌍 Our Vision</h4>
                        <p className='text-sm md:text-base max-w-full'>
                            To connect businesses with top-tier professionals through a streamlined, managed process—ensuring sustainable success for both companies and talent.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionMision
