
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function TalentMovesFast() {
    return (
        <div className='container mt-10'>
            <div className='bg-white max-lg:min-h-[60vh] pb-12  md:px-12 md:py-10 md:p-8 p-1  flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">Built for Talent That Moves Fast</h2>
                    </FadeInTop>
                    <p className='tracking-tight mt-1 text-center  text-lg text-[#516371]'>Super fast access to countless opportunities</p>
                </div>


                <div className='flex flex-row justify-around items-center w-full'>
                    <div className='flex flex-col justify-start items-start '>
                        <h4 className='text-2xl font-roca'>Apply</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[150px]'>Apply in under 5 minutes</p>
                    </div>
                    <img src='/assets/new/tmf1.png' alt='talent acquisition' className='w-[170px] md:w-[400px] fade-in-down' />
                </div>
                <img src='/assets/new/connector.svg' alt='connector' className='w-[70%]' />

                <div className='flex flex-row-reverse justify-around items-center w-full'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-2xl font-roca'>Track</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[150px]'>Track every application</p>
                    </div>
                    <img src='/assets/new/tmf2.png' alt='talent acquisition' className='w-[170px] md:w-[400px] fade-in-up' />
                </div>
                <img src='/assets/new/connector2.svg' alt='connector' className='w-[70%]'/>


                <div className='flex flex-row md:justify-around justify-center items-center w-full'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='md:text-2xl text-lg font-roca'>Prepare</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[150px]'>Get interview ready resources</p>
                    </div>
                    <img src='/assets/new/tmf3.png' alt='talent acquisition' className='w-[170px] md:w-[400px] fade-in-down' />
                </div>
                <img src='/assets/new/connector.svg' alt='connector' className='w-[70%]' />

                <div className='flex flex-row-reverse justify-around items-center w-full'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-2xl font-roca'>Feedback</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[150px]'>Get feedback, not silence</p>
                    </div>
                    <img src='/assets/new/tmf4.png' alt='talent acquisition' className='w-[170px] md:w-[400px] fade-in-up' />
                </div>
                <img src='/assets/new/connector2.svg' alt='connector' className='w-[70%]' />


                <div className='flex flex-row justify-around items-center w-full'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-2xl font-roca'>Connect</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[150px]'>Connect with companies who are ready to move</p>
                    </div>
                    <img src='/assets/new/tmf5.png' alt='talent acquisition' className='w-[170px] md:w-[400px] fade-in-down' />
                </div>
            </div>
        </div>



    )
}

export default TalentMovesFast