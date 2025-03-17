import React from 'react';
import Image from 'next/image';
import FadeInBottom from '@/components/framermotion/FadeInBottom';

const steps = [
    {
        id: 1,
        leftContent: '/assets/JStimeline1.png',
        rightContent: 'bg-[#D2CCFA]',
        heading: "Tell Us Your Career Goals",
        para: `Share your skills, experience, and career aspirations. Whether you're looking for remote work, full-time roles.`,
        line: "Or freelance opportunities, we help you find the best fit."
    },

    {
        id: 2,
        leftContent: 'bg-[#F8E1BE]',
        rightContent: '/assets/JStimeline2.png',
        heading: "Get Matched with Top Opportunities",
        para: "We connect you with leading companies seeking top talent. Our expert team carefully matches your profile.",
        line: "With roles that align with your expertise and ambitions."
    },

    {
        id: 3,
        leftContent: '/assets/JStimeline3.png',
        rightContent: 'bg-[#ADD0F3]',
        heading: "Interview & Land the Right Job",
        para: "Prepare with confidence as we guide you through the interview process. Get feedback, negotiate offers,",
        line: "And secure a role that values your skills and potential."
    },

    {
        id: 4,
        leftContent: 'bg-[#FAC2C1]',
        rightContent: '/assets/JStimeline4.png',
        heading: "Grow & Succeed in Your New Role",
        para: "Once hired, integrate seamlessly into your new job.",
        line: "Enjoy ongoing career support, skill development opportunities, and a network to help you thrive."
    }
]


function Timeline_Job_Seekers() {
    return (
        <div className='relative'>
            <div className="absolute -right-40 -top-20 pointer-events-none w-[300px] h-[300px]  md:h-[500px]  md:w-[500px] rounded-full bg-pink-200 blur-3xl opacity-40"></div>
            <div className='container mx-auto p-4'>

                <h2 className='text-black text-3xl md:text-4xl text-center md:my-20 mt-10 mb-14 font-semibold'>How It Works</h2>
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

export default Timeline_Job_Seekers;



