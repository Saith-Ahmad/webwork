import FadeInBottom from '@/components/framermotion/FadeInBottom'
import Image from 'next/image'
import React from 'react'

function VisionMision() {
    return (
        <div className='container mt-28 min-h-[75vh] items-center flex-col justify-center'>
            <p className='text-lg text-center'>WHY WORK WITH US?</p>
            <FadeInBottom once={false}>
                <h2 className='md:text-4xl text-3xl text-center font-semibold'>Elevate Your Career with Top Global Companies</h2>
            </FadeInBottom>

            <div className='mt-10 flex flex-col md:flex-row justify-center gap-5 items-center '>
                <div className='bg-[#F8E1BE] relative z-10 p-10 lg:min-w-[550px] md:min-w-[450] rounded-md cursor-pointer transform-scale-shadow'>
                    <div className='max-w-[500px] min-h-[130px]'>
                        <h4 className='text-2xl font-semibold '>🚀 Our Mission</h4>
                        <p className='text-base max-w-[350px]'>Revolutionizing remote hiring by making elite global talent accessible, affordable, and highly productive.</p>
                    </div>
                </div>

                <div className='bg-[#FAC2C1] relative z-10 p-10 lg:min-w-[550px] md:min-w-[450] rounded-md  transform-scale-shadow cursor-pointer'>
                    <div className='max-w-[500px] min-h-[130px]'>
                        <h4 className='text-2xl font-semibold'>🌍 Our Vision</h4>
                        <p className='text-base max-w-[350px]'>To connect businesses with top-tier professionals through a streamlined, managed process—ensuring sustainable success for both companies and talent.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VisionMision