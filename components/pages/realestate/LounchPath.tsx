
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function LounchPath() {
    return (
        <div className='bg-[#F6F6F6] py-16 relative'>
        <div className=' mt-10  container'>
            <div className='    max-lg:min-h-[60vh]  md:px-12 md:py-10 md:p-8 p-1 pb-10  flex flex-col justify-center items-center  overflow-hidden '>

                <div className="custom-shape-divider-top-1747344540">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="custom-shape-divider-bottom-1747344583">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                    </svg>
                </div>


                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">BeyondFlow:  5‑Step Launch Path</h2>
                    </FadeInTop>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Super fast access to countless opportunities<br className='hidden lg:flex' /> sustainable organic growth.</p>
                </div>


                <div className='flex flex-row justify-around items-center w-full'>
                    <div className='flex flex-col justify-start items-start px-2'>
                        <h4 className='text-xl md:text-2xl font-roca'> Discovery Call</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>We diagnose: We unpack your listings load, compliance gaps, and growth targets.</p>
                    </div>
                    <img src='/assets/new/realestate/re_1.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector.svg' alt='connector' className='w-[70%]' />

                <div className='flex flex-row-reverse justify-around items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'>Talent Shortlist</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>You receive 2–3 pre‑vetted handpicked specialists matched to your tools, hours, and portfolio size.</p>
                    </div>
                    <img src='/assets/new/realestate/re_2.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector2.svg' alt='connector' className='w-[70%]' />


                <div className='flex flex-row md:justify-around justify-center items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'>Interview & Select</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>Meet the candidates, pick your fit, and lock in start dates: usually all within a week.</p>
                    </div>
                    <img src='/assets/new/realestate/re_3.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector.svg' alt='connector' className='w-[70%]' />

                <div className='flex flex-row-reverse justify-around items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'> Launch & Integrate</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>We handle contracts, tech setup, and a UK‑focused onboarding sprint so your hire is productive on day one.</p>
                    </div>
                    <img src='/assets/new/realestate/re_4.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>
                <img src='/assets/new/connector2.svg' alt='connector' className='w-[70%]' />


                <div className='flex flex-row md:justify-around justify-center items-center w-full gap-1 px-2'>
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-xl md:text-2xl font-roca'>Ongoing Management</h4>
                        <p className='text-sm md:text-lg md:max-w-[300px] max-w-[170px]'>KPIs and performance tracked, instant replacement if needed, so you stay focused on deals, not HR.</p>
                    </div>
                    <img src='/assets/new/realestate/re_5.png' alt='talent acquisition' className='w-[160px] md:w-[400px]' />
                </div>


            </div>
        </div>
</div>


    )
}

export default LounchPath