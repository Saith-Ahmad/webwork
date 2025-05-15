import FadeInBottom from '@/components/framermotion/FadeInBottom';
import Image from 'next/image'
import React from 'react'

function WhyChoose() {
    return (
        <div className=''>
        <div className='mt-12 my-14 py-14 bg-[#F6F6F6]  max-lg:min-h-[50vh] relative'>

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


            <div className="container md:px-16 md:py-10 p-5 max-lg:min-h-[60vh] flex flex-col gap-5 ">
                <FadeInBottom once={false} duration={0.5} distance={30} >

                    <h2 className="font-roca capitalize text-2xl md:text-4xl font-thin text-center mt-6">We find elite talent for every department.</h2>
                </FadeInBottom>
                <p className='mt-1 text-center  text-lg text-[#516371]'>If you need a role filled, we get it done: <span className='font-bold'>FAST</span>.</p>

                {/* Responsive Grid Layout */}
                <div className="grid gap-6 md:p-6 p-1 grid-cols-1 md:grid-cols-12">
                    {/* Row 1 - Left (7/12) and Right (5/12) */}

                    <div className="md:col-span-6 bg-[#EFEEFD99] rounded-2xl flex flex-col justify-between items-center max-h-[470px] transform-3d">
                        <div className='self-start p-8'>
                            <h4 className='text-2xl font-semibold font-roca'>Sales Experts (BDRs, BDMs)</h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Drive revenue with top-tier business development professionals.</p>
                        </div>
                        <Image src={'/assets/new/talent5.png'} alt='Elite Talent' width={250} height={350} unoptimized />
                    </div>

                    <div className="md:col-span-6 bg-[#FDF2DC99] p-8 rounded-2xl flex flex-col-reverse justify-around items-center gap-4 max-h-[470px] transform-3d">
                        <div className='text-center self-start'>
                            <h4 className='text-2xl font-semibold font-roca'>Executive Assistants & PAs </h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Stay organized with dedicated support.</p>
                        </div>
                        <Image src={'/assets/new/talent4.png'} alt='Vetting Process' width={250} height={350} unoptimized />
                    </div>

                    {/* Row 2 - Three equal columns (4/12 each) */}
                    <div className="md:col-span-4 bg-[#ECF9F899] p-8 rounded-2xl flex flex-col-reverse justify-between items-start gap-4 transform-3d">
                    <div className='text-center'>
                            <h4 className='text-2xl font-semibold font-roca text-start'>Marketers & Content Strategist</h4>
                            <p className='text-lg text-[#1B1B1BD9] text-start'>Stay organized with dedicated support.</p>
                        </div>
                        <Image src={'/assets/new/talent3.png'} alt='Support' width={300} height={300} unoptimized />
                    </div>

                    <div className="md:col-span-4 bg-[#FAF9F699] p-8 rounded-2xl flex flex-col justify-between items-center gap-4 transform-3d">
                        <div>
                            <h4 className='text-2xl font-semibold text-center font-roca'>Graphic Designer <br/> & <br/> Video Editors</h4>
                            <p className='text-lg text-center text-[#1B1B1BD9]'>High-quality content creation for your brand.</p>
                        </div>
                        <Image src={'/assets/new/talent2.png'} alt='Management' width={300} height={300} unoptimized />
                    </div>

                    <div className="md:col-span-4 bg-[#F1FCFF99] p-8 rounded-2xl flex flex-col-reverse justify-between items-center gap-4 transform-3d">
                        <div>
                            <h4 className='text-2xl font-semibold text-start font-roca'>Business & Data Analysts</h4>
                            <p className='text-lg text-start text-[#1B1B1BD9]'>Actionable insights to fuel business decisions.</p>
                        </div>
                        <Image src={'/assets/new/talent1.png'} alt='KPI' width={300} height={300} unoptimized />
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default WhyChoose;
