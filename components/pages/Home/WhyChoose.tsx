import FadeInBottom from '@/components/framermotion/FadeInBottom';
import Image from 'next/image'
import React from 'react'

function WhyChoose() {
    return (
        <div className="container mt-32 flex flex-col gap-5">
            <FadeInBottom once={false} duration={0.5} distance={30} >

                <h2 className='md:text-4xl text-3xl text-center font-semibold'>Why Choose Beyond Hut?</h2>
            </FadeInBottom>

            {/* Responsive Grid Layout */}
            <div className="grid gap-6 p-6 grid-cols-1 md:grid-cols-12">
                {/* Row 1 - Left (7/12) and Right (5/12) */}

                    <div className="md:col-span-7 bg-[#D2CCFA] p-8 rounded-md flex flex-col justify-between items-center max-h-[470px] transform-3d">
                        <div className='self-start'>
                            <h4 className='text-2xl font-semibold'>Elite Talent, Unmatched Value</h4>
                            <p className='text-lg text-[#1B1B1BD9]'>Gain access to the top 2% of global talent while saving up to 90% on hiring costs.</p>
                        </div>
                        <Image src={'/assets/homeillustration1.png'} alt='Elite Talent' width={250} height={350} unoptimized />
                    </div>

                <div className="md:col-span-5 bg-[#F3C9B6] p-8 rounded-md flex flex-col-reverse justify-center items-center gap-4 max-h-[470px] transform-3d">
                    <div className='text-center'>
                        <h4 className='text-2xl font-semibold'>Rigorous Vetting Process</h4>
                        <p className='text-lg text-[#1B1B1BD9]'>Every candidate undergoes IQ tests, multiple interview rounds, and strict quality checks.</p>
                    </div>
                    <Image src={'/assets/homeillustration2.png'} alt='Vetting Process' width={250} height={350} unoptimized />
                </div>

                {/* Row 2 - Three equal columns (4/12 each) */}
                <div className="md:col-span-4 bg-[#F8E1BE] p-8 rounded-md flex flex-col justify-between items-center gap-4 transform-3d">
                    <h4 className='text-2xl font-semibold text-center'>On-Site Support</h4>
                    <p className='text-lg text-center text-[#1B1B1BD9]'>We guarantee stable power, reliable internet, and seamless work continuity.</p>
                    <Image src={'/assets/homeillustration3.png'} alt='Support' width={300} height={300} unoptimized />
                </div>

                <div className="md:col-span-4 bg-[#ADD0F3] p-8 rounded-md flex flex-col-reverse justify-between items-center gap-4 transform-3d">
                    <div>
                        <h4 className='text-2xl font-semibold text-center'>Project Management</h4>
                        <p className='text-lg text-center text-[#1B1B1BD9]'>Our managers ensure efficiency, timely delivery, and smooth execution.</p>
                    </div>
                    <Image src={'/assets/homeillustration4.png'} alt='Management' width={300} height={300} unoptimized />
                </div>

                <div className="md:col-span-4 bg-[#D2CCFA] p-8 rounded-md flex flex-col justify-between items-center gap-4 transform-3d">
                    <div>
                        <h4 className='text-2xl font-semibold text-center'>KPI Alignment</h4>
                        <p className='text-lg text-center text-[#1B1B1BD9]'>We define clear job roles and KPIs to drive success.</p>
                    </div>
                    <Image src={'/assets/homeillustration5.png'} alt='KPI' width={300} height={300} unoptimized />
                </div>

                {/* Row 3 - Left (5/12) and Right (7/12) */}
                <div className="md:col-span-7 bg-[#F3C9B6] p-8 rounded-md flex flex-col justify-between items-center gap-4 max-h-[470px] transform-3d">
                    <div className='self-start'>

                        <h4 className='text-2xl font-semibold'>Instant Talent Replacement</h4>
                        <p className='text-lg text-[#1B1B1BD9]'>If a team member is unavailable, we provide a trained replacement immediately.</p>
                    </div>
                    <Image src={'/assets/homeillustration6.png'} alt='Replacement' width={350} height={350} unoptimized />
                </div>
                <div className="md:col-span-5 bg-[#ADD0F3] p-8 rounded-md flex flex-col-reverse justify-between items-center gap-4 max-h-[470px] transform-3d">
                    <div>
                        <h4 className='text-2xl font-semibold text-center'>Continuous Training for Up-to-Date Expertise</h4>
                        <p className='text-lg text-center text-[#1B1B1BD9]'>Our professionals receive regular training to stay ahead of trends.</p>
                    </div>
                    <Image src={'/assets/homeillustration7.png'} alt='Training' width={200} height={250} unoptimized />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose;
