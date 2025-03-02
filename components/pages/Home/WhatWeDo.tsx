import FadeInBottom from '@/components/framermotion/FadeInBottom'
import Image from 'next/image'
import React from 'react'

function WhatWeDo() {
    return (
        <div className='container mt-28 min-h-[75vh] items-center flex-col justify-center'>
            <FadeInBottom once={false}>

                <h2 className='md:text-4xl text-3xl text-center font-semibold'>What do we do?</h2>
            </FadeInBottom>

            <div className='mt-10 flex flex-col md:flex-row justify-between gap-5 items-center '>
                <div className='bg-[#F8E1BE] relative z-10 p-10 lg:min-w-[550px] md:min-w-[450] rounded-md cursor-pointer transform-scale-shadow'>
                    <div className='max-w-[450px]'>
                        <h4 className='text-2xl font-semibold '>Talent Outsourcing</h4>
                        <p className='text-base max-w-[350px]'>Access top remote professionals tailored to your business needs.</p>
                        <p className='text-sm text-gray-900 mt-2 '>Learn More</p>
                        <Image src={'/assets/globe.png'} className='-z-10 absolute bottom-0 right-0' alt='globe' width={150} height={150} />
                    </div>
                </div>

                <div className='bg-[#FAC2C1] relative z-10 p-10 lg:min-w-[550px] md:min-w-[450] rounded-md  transform-scale-shadow cursor-pointer'>
                    <div className='max-w-[450px]'>
                        <h4 className='text-2xl font-semibold'>Sales Consultancy & Automation</h4>
                        <p className='text-base max-w-[350px]'>Optimize sales workflows and boost efficiency with smart automation.</p>
                        <p className='text-sm text-gray-900 mt-2 '>Learn More</p>
                        <Image src={'/assets/paraicons.png'} className='-z-10 absolute bottom-0 right-0' alt='icons' width={150} height={150} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhatWeDo