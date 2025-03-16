import FadeInBottom from '@/components/framermotion/FadeInBottom';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function WhoWeAre() {
    return (
        <div className='container mt-14'>
            <FadeInBottom once={false}>
                <h2 className='md:text-4xl text-3xl text-center font-semibold mb-8'>
                 Who We Help You Hire?
                </h2>
            </FadeInBottom>

            {/* Responsive Grid Layout */}
            <div className="grid gap-6 p-6 grid-cols-1 md:grid-cols-12">



                {/* Row 1 - Left (7/12) and Right (5/12) */}
                <div className="md:col-span-6 bg-[#D2CCFA] rounded-md flex flex-col justify-between items-center transform-3d">
                    <div className='self-start p-7'>
                        <div className='max-w-[400px] min-h-[280px] md:min-h-[170px]'>
                            <h4 className='text-2xl font-semibold'>Sales Experts (BDRs, BDMs)</h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Drive revenue with top-tier business development professionals.</p>
                        </div>
                    </div>
                    <Image src={'/assets/toillustration1.png'} alt='Elite Talent' className='-mt-24' width={250} height={300} unoptimized />
                </div>
                <div className="md:col-span-6 p-4 bg-[#F3C9B6] rounded-md flex flex-col justify-between items-center transform-3d">
                    <div className='self-start p-7'>
                        <div className='max-w-[400px] '>
                            <h4 className='text-2xl font-semibold'>Executive Assistants & PAs </h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Stay organized with dedicated support.</p>
                        </div>
                    </div>
                    <Image src={'/assets/toillustration3.png'} alt='Elite Talent' width={400} height={400} unoptimized />
                </div>



                {/* Row 2 - Three equal columns (4/12 each) */}
                <div className="md:col-span-4 p-7 bg-[#F8E1BE] rounded-md flex flex-col-reverse justify-between items-center transform-3d">
                    <div className='self-start '>
                        <div className='max-w-[400px] '>
                            <h4 className='text-2xl font-semibold'>Marketers & Content Strategist</h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Stay organized with dedicated support.</p>
                        </div>
                    </div>
                    <Image src={'/assets/toillustration4.png'} alt='Elite Talent'  width={300} height={300} unoptimized />
                </div>


                <div className="md:col-span-4 p-4 bg-[#ADD0F3] rounded-md flex flex-col justify-between items-center transform-3d">
                    <div className=' p-7'>
                        <div className='max-w-[400px] min-h-[200px]'>
                            <h4 className='text-2xl font-semibold text-center'>Graphic Designer <br /> & <br /> Video Editors</h4>
                            <p className='text-lg text-[#1B1B1BD9] text-center'>High-quality content creation for your brand.</p>
                        </div>
                    </div>
                    <Image src={'/assets/toillustration5.png'} alt='Elite Talent' className='-mt-12' width={250} height={250} unoptimized />
                </div>


                <div className="md:col-span-4 p-7 bg-[#D2CCFA] rounded-md flex flex-col-reverse justify-between items-center transform-3d">
                    <div className='self-start '>
                        <div className='max-w-[400px] mt-3'>
                            <h4 className='text-2xl font-semibold'>Business & Data Analysts</h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Actionable insights to fuel business decisions.</p>
                        </div>
                    </div>
                    <Image src={'/assets/toillustration7.png'} alt='Elite Talent' width={300} height={300} unoptimized />
                </div>


            </div>
        </div>
    )
}

export default WhoWeAre;
