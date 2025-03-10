import React from 'react';
import Image from 'next/image';
import FadeInBottom from '@/components/framermotion/FadeInBottom';

const steps = [
    {
        id: 1,
        leftContent: '/assets/timeline1.png',
        rightContent: 'bg-[#D2CCFA]',
        heading: 'Screening & Testing',
        para: 'Two interview rounds + IQ test to ensure top-tier talent.',
    },
    {
        id: 2,
        leftContent: 'bg-[#F8E1BE]',
        rightContent: '/assets/timeline2.png',
        heading: 'Seamless Onboarding',
        para: 'Dedicated office support to get started immediately.',
    },
    {
        id: 3,
        leftContent: '/assets/timeline3.png',
        rightContent: 'bg-[#ADD0F3]',
        heading: 'Performance Management',
        para: 'Track efficiency, KPIs, and ongoing performance.',
    },
    {
        id: 4,
        leftContent: 'bg-[#FAC2C1]',
        rightContent: '/assets/timeline4.png',
        heading: 'Talent Replacement Guarantee',
        para: 'Quick replacement for continuity if needed.',
    },
];

function Timeline() {
    return (
        <div className='relative'>
            <div className="absolute -right-40 -top-20 pointer-events-none w-[300px] h-[300px]  md:h-[500px]  md:w-[500px] rounded-full bg-pink-300 blur-3xl opacity-30"></div>
            <div className='container mx-auto p-4'>

                <h2 className='text-black text-3xl md:text-4xl text-center my-10 mb-14 font-semibold'>How It Works</h2>
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            } justify-center md:gap-32 gap-2 items-center relative`}
                    >
                        {/* Left Side */}
                        {index % 2 === 0 ? (
                            <FadeInBottom duration={1} distance={70}>
                                <div className={`md:w-[350px] w-[300px] h-[300px] ${step.rightContent} rounded-lg flex items-center justify-center`}>
                                    <Image
                                        src={step.leftContent}
                                        alt={`Step ${step.id}`}
                                        width={300}
                                        height={300}
                                        className='object-cover rounded-lg max-w-[250px] md:max-w-[300px]'
                                    />
                                </div>
                            </FadeInBottom>
                        ) : (
                            <FadeInBottom duration={1} distance={70}>

                                <div className={`md:w-[350px] w-[300px] h-[300px] ${step.leftContent} rounded-lg flex items-center justify-center`}>
                                    <Image
                                        src={step.rightContent}
                                        alt={`Step ${step.id}`}
                                        width={300}
                                        height={300}
                                        className='object-cover rounded-lg max-w-[250px] md:max-w-[300px]'
                                    />
                                </div>
                            </FadeInBottom>

                        )}

                        {/* Right Side */}
                        <div className='md:w-[300px] md:h-[300px] w-[300px] h-[150px] flex flex-col items-start justify-center p-4 rounded-lg '>
                            <h3 className='text-xl font-bold mb-2'>{step.heading}</h3>
                            <p className='text-gray-600'>{step.para}</p>
                        </div>

                        {/* Timeline */}
                        <div className='absolute w-[2px] h-full bg-black md:left-[50%] left-4 flex justify-center items-start'>
                            <div className='w-[40px] h-[40px] bg-white rounded-md  flex items-center justify-center -mt-10'>
                                <p className='text-2xl p-4 font-bold'>{step.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;



