import FadeInLeft from '@/components/framermotion/FadeInLeft';
import Image from 'next/image';
import React from 'react';

const Challenges = () => {
    return (
        <div className="bg-[#161C28] py-12 rounded-t-3xl rounded-b-3xl my-20 relative min-h-[120vh] flex justify-center items-center">

            {/* Curves */}
            <div className='absolute md:-top-4 -top-1 right-0 w-[100vw]'>
                <img src="/assets/upper_curve.svg" alt="curve" className='w-[100vw]' />
            </div>
            <div className='absolute md:-bottom-4 -bottom-1 right-0 w-[100vw]'>
                <img src="/assets/bottom_curve.svg" alt="curve" className='w-[100vw]' />
            </div>

            <div className="container flex flex-col md:flex-row items-center gap-10">
                {/* Left div - Heading & List */}
                <div className="md:w-[60%] text-white">
                    <FadeInLeft duration={0.7} distance={60} once={false}>
                        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-8">
                            Challenges
                        </h2>
                    </FadeInLeft>
                    <ul className="space-y-4">
                        {[
                            "The pressure of market uncertainty and employee turnover",
                            "Skilled Specialists Who Are Hard to Find",
                            "Administrative and Compliance Burdens Weigh Heavy",
                            "Salary Increases and Rising Overheads for Operations",
                            "Clients Want Personalization and a Quick Response",
                            "The team lacks adequate support in using modern technology and CRM"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <img src="/assets/liststyle.svg" alt="list-style" className='md:mt-5 mt-2' width={14} height={14}/>
                                <span className="text-lg md:mt-3 mt-0">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right div - Image */}
                <div className="md:w-[40%] flex justify-center">
                    <Image 
                        src="/assets/challenges.png" 
                        alt="Challenges Image" 
                        width={500} 
                        height={500} 
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Challenges;
