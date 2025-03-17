import React from 'react';
import Image from 'next/image';
import FadeInBottom from '@/components/framermotion/FadeInBottom';

const steps = [
    {
        id: 1,
        leftContent: '/assets/timeline1.png',
        rightContent: 'bg-[#D2CCFA]',
        heading: "Share your talent goals and requirements",
        para: "Share your talent goals and requirements, Whether you're looking for ",
        line: "Top-tier remote professionals or specialized expertise."
    },
    {
        id: 2,
        leftContent: 'bg-[#F8E1BE]',
        rightContent: '/assets/timeline2.png',
        heading: "We Hunt & Vet the Best Talent",
        para: "Our recruitment specialists source top talent, conduct in-depth screening, and rigorously assess candidates.",
        line: "Ensuring only the top 2% match your needs."

    },
    {
        id: 3,
        leftContent: '/assets/timeline3.png',
        rightContent: 'bg-[#ADD0F3]',
        heading: "Hire & Manage with Ease",
        para: "Once you select the best fit, we handle onboarding, contracts, payroll, and day-to-day management.",
        line: "So you don’t have to."
    },
    {
        id: 4,
        leftContent: 'bg-[#FAC2C1]',
        rightContent: '/assets/timeline4.png',
        heading: "Save Time & Scale Faster",
        para: "With the right talent in place, you save up to 90% in hiring costs, reduce operational headaches, and",
        line: "Focus on scaling your business effortlessly."
    }
];

function Timeline() {
    return (
        <div className='relative'>
            <div className="absolute -right-40 -top-20 pointer-events-none w-[300px] h-[300px]  md:h-[500px]  md:w-[500px] rounded-full bg-pink-200 blur-3xl opacity-40"></div>
            <div className='container mx-auto p-4'>

                <h2 className='text-black text-3xl md:text-4xl text-center md:my-20 mt-10 mb-14 font-semibold'>Our Seamless Talent Outsourcing Journey</h2>
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            } justify-center md:gap-32 gap-2 items-center relative`}
                    >
                        {/* Left Side */}
                        {index % 2 === 0 ? (
                            <FadeInBottom duration={1} distance={70}>
                                <div className={`md:w-[350px] w-[280px] h-[240px] ${step.rightContent} rounded-lg flex items-center justify-center`}>
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

                                <div className={`md:w-[350px] w-[280px] h-[240px] ${step.leftContent} rounded-lg flex items-center justify-center`}>
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
                        <div className='md:w-[300px] md:h-[300px] w-[300px] h-[250px] flex flex-col items-start justify-center p-4 rounded-lg '>
                            <h3 className='text-xl font-bold mb-2'>{step.heading}</h3>
                            <p className='text-gray-600'>{step.para}</p>
                            <p className="font-bold text-base mt-2">{step.line}</p>
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
