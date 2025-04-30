import FadeInBottom from '@/components/framermotion/FadeInBottom';
import Image from 'next/image'
import React from 'react'

function WhyChoose() {
    return (
        <div className='container mt-12'>


            <div className="bg-white shadow-lg shadow-gray-200 min-h-[100vh] rounded-3xl p-5 flex flex-col gap-5">
                <FadeInBottom once={false} duration={0.5} distance={30} >

                    <h2 className="font-roca capitalize text-2xl md:text-4xl font-thin text-center mt-6">We find elite talent for every department.</h2>
                </FadeInBottom>
                <p className='mt-1 text-center  text-lg text-[#516371]'>If you need a role filled, we get it done: <span className='font-bold'>FAST</span>.</p>

                {/* Responsive Grid Layout */}
                <div className="grid gap-6 md:p-6 p-1 grid-cols-1 md:grid-cols-12">
                    {/* Row 1 - Left (7/12) and Right (5/12) */}

                    <div className="md:col-span-6 bg-[#EFEEFD99] rounded-md flex flex-col justify-between items-center max-h-[470px] transform-3d">
                        <div className='self-start p-8'>
                            <h4 className='text-2xl font-semibold font-roca'>Sales Experts (BDRs, BDMs)</h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Drive revenue with top-tier business development professionals.</p>
                        </div>
                        <Image src={'/assets/new/talent5.png'} alt='Elite Talent' width={250} height={350} unoptimized />
                    </div>

                    <div className="md:col-span-6 bg-[#FDF2DC99] p-8 rounded-md flex flex-col-reverse justify-around items-center gap-4 max-h-[470px] transform-3d">
                        <div className='text-center self-start'>
                            <h4 className='text-2xl font-semibold font-roca'>Executive Assistants & PAs </h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Stay organized with dedicated support.</p>
                        </div>
                        <Image src={'/assets/new/talent4.png'} alt='Vetting Process' width={250} height={350} unoptimized />
                    </div>

                    {/* Row 2 - Three equal columns (4/12 each) */}
                    <div className="md:col-span-4 bg-[#ECF9F899] p-8 rounded-md flex flex-col-reverse justify-between items-start gap-4 transform-3d">
                    <div className='text-center'>
                            <h4 className='text-2xl font-semibold font-roca text-start'>Marketers & Content Strategist</h4>
                            <p className='text-lg text-[#1B1B1BD9] text-start'>Stay organized with dedicated support.</p>
                        </div>
                        <Image src={'/assets/new/talent3.png'} alt='Support' width={300} height={300} unoptimized />
                    </div>

                    <div className="md:col-span-4 bg-[#FAF9F699] p-8 rounded-md flex flex-col justify-between items-center gap-4 transform-3d">
                        <div>
                            <h4 className='text-2xl font-semibold text-center font-roca'>Graphic Designer <br/> & <br/> Video Editors</h4>
                            <p className='text-lg text-center text-[#1B1B1BD9]'>High-quality content creation for your brand.</p>
                        </div>
                        <Image src={'/assets/new/talent2.png'} alt='Management' width={300} height={300} unoptimized />
                    </div>

                    <div className="md:col-span-4 bg-[#F1FCFF99] p-8 rounded-md flex flex-col-reverse justify-between items-center gap-4 transform-3d">
                        <div>
                            <h4 className='text-2xl font-semibold text-start font-roca'>Business & Data Analysts</h4>
                            <p className='text-lg text-start text-[#1B1B1BD9]'>Actionable insights to fuel business decisions.</p>
                        </div>
                        <Image src={'/assets/new/talent1.png'} alt='KPI' width={300} height={300} unoptimized />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhyChoose;
