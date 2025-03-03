import FadeInBottom from '@/components/framermotion/FadeInBottom'
import Image from 'next/image'
import React from 'react'

function WhatWeDo() {
    return (
        <div className='container my-28 min-h-[50vh] items-center flex flex-col justify-center'>
            <FadeInBottom once={false}>

                <h2 className='md:text-4xl text-3xl text-center font-semibold'>What do we do?</h2>
            </FadeInBottom>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-[#F8E1BE] relative z-10 p-6 md:p-8 lg:p-10 w-full  mx-auto rounded-md cursor-pointer transform-scale-shadow'>
                    <div className='max-w-full'>
                        <h4 className='text-xl md:text-2xl font-semibold'>Talent Outsourcing</h4>
                        <p className='text-sm md:text-base max-w-full'>Access top remote professionals tailored to your business needs.</p>
                        <p className='text-sm text-gray-900 mt-2'>Learn More</p>
                        <Image src={'/assets/globe.png'} className='-z-10 absolute bottom-0 right-0' alt='globe' width={150} height={150} />
                    </div>
                </div>

                <div className='bg-[#FAC2C1] relative z-10 p-6 md:p-8 lg:p-10 w-full  mx-auto rounded-md cursor-pointer transform-scale-shadow'>
                    <div className='max-w-full'>
                        <h4 className='text-xl md:text-2xl font-semibold'>Sales Consultancy & Automation</h4>
                        <p className='text-sm md:text-base max-w-full'>Optimize sales workflows and boost efficiency with smart automation.</p>
                        <p className='text-sm text-gray-900 mt-2'>Learn More</p>
                        <Image src={'/assets/paraicons.png'} className='-z-10 absolute bottom-0 right-0' alt='icons' width={150} height={150} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhatWeDo