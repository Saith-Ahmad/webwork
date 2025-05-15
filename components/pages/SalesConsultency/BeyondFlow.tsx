
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function BeyondFlow() {
    return (
        <div className='container mt-10'>
            <div className='bg-white max-lg:min-h-[60vh]  md:px-12 md:py-10 md:p-8 p-1 pb-10  flex flex-col justify-center items-center relative overflow-hidden '>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">Built for Talent That Moves Fast</h2>
                    </FadeInTop>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Super fast access to countless opportunities</p>
                </div>


                <div className='flex flex-row justify-around items-center w-full'>
                    <div className='flex flex-col justify-start items-start px-2'>
                        <h4 className='text-xl md:text-2xl font-roca'>Strategy <span className='hidden'>that Scales</span></h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>Optimized custom roadmap for growth</p>
                    </div>
                    <img src='/assets/new/beyondflow1.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector.svg' alt='connector' className='w-[70%]' />

                <div className='flex flex-row-reverse justify-around items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'>Automation</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>Proven Lean systems that eliminate repetitive tasks</p>
                    </div>
                    <img src='/assets/new/beyondflow2.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector2.svg' alt='connector' className='w-[70%]'/>


                <div className='flex flex-row md:justify-around justify-center items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'>Execution</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>Our trained team delivers outreach, manages tools, and keeps your pipeline moving</p>
                    </div>
                    <img src='/assets/new/beyondflow3.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector.svg' alt='connector' className='w-[70%]' />

                <div className='flex flex-row-reverse justify-around items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'>Optimization</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>We track what’s working, refine what isn’t, and scale what converts</p>
                    </div>
                    <img src='/assets/new/beyondflow4.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>


               
            </div>
        </div>



    )
}

export default BeyondFlow