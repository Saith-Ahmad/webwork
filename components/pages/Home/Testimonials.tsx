import FadeInBottom from '@/components/framermotion/FadeInBottom'
import React from 'react'

function Testimonials() {
    return (
        <div className='bg-[#78D0EA] min-h-[100vh] py-20 mt-10 relative flex justify-center items-center'>
            <div className='absolute md:-top-4 -top-1 right-0 w-[100vw]'>
                <img src="/assets/upper_curve.svg" alt="curve" className='w-[100vw]' />
            </div>
            <div className='absolute md:-bottom-4 -bottom-1 right-0 w-[100vw]'>
                <img src="/assets/bottom_curve.svg" alt="curve" className='w-[100vw]' />
            </div>

            <div className='container flex flex-col justify-center items-center'>
                <div className='w-full mt-10'>
                    <h5 className='text-center text-white text-lg font-semibold'>TESTIMONIALS</h5>
                    <FadeInBottom once={false} duration={0.5} distance={30}>
                    <h4 className='text-white text-center md:text-3xl text-2xl mt-2  font-semibold'>Real Stories, Real Impact: Hear from Our Satisfied Clients</h4>
                    </FadeInBottom>
                </div>
                <div className='flex flex-col md:flex-row gap-3 mt-8'>
                    {/* testimonial */}

                    <div className="max-w-sm  overflow-hidden shadow-lg p-6 bg-white rounded-2xl transform-scale-shadow cursor-pointer">
                        <div className="flex items-center mb-4">

                            <div>
                                <div className="flex gap-[1px]">
                                    {[...Array(4)].map((_, i) => (
                                        <img src='/assets/star.svg' className='w-[20px]' key={i}/>
                                    ))}
                                    <img src='/assets/star1.svg' className='w-[20px]' />
                                </div>
                            </div>
                        </div>
                        <p className="text-[#2F2A2A] text-base">
                        Beyond Hut made hiring effortless. We quickly onboarded skilled professionals who seamlessly integrated into our team, boosting productivity from day one!
                        </p>


                        <div className="flex items-center mb-4 gap-2 mt-2">
                            <img src="/assets/user_profile.svg" alt="user" className='w-12 h-12' />
                            <div className='flex flex-col gap-0'>
                                <p className="font-bold text-xl -mb-1">Michael R</p>
                                <p className="font-normal text-base ">CEO</p>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-sm  overflow-hidden shadow-lg p-6 bg-white rounded-2xl transform-scale-shadow cursor-pointer">
                        <div className="flex items-center mb-4">

                            <div>
                                <div className="flex gap-[1px]">
                                    {[...Array(5)].map((_, i) => (
                                        <img src='/assets/star.svg' className='w-[20px]' key={i}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-[#2F2A2A] text-base">
                        We scaled our operations without breaking the bank. The talent we hired through Beyond Hut exceeded our expectations in both skill and efficiency.
                        </p>


                        <div className="flex items-center mb-4 gap-2 mt-2">
                            <img src="/assets/user_profile.svg" alt="user" className='w-12 h-12' />
                            <div className='flex flex-col gap-0'>
                                <p className="font-bold text-xl -mb-1">Sarah L</p>
                                <p className="font-normal text-base ">Head of Operations</p>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-sm  overflow-hidden shadow-lg p-6 bg-white rounded-2xl transform-scale-shadow cursor-pointer">
                        <div className="flex items-center mb-4">

                            <div>
                                <div className="flex gap-[1px]">
                                    {[...Array(4)].map((_, i) => (
                                        <img src='/assets/star.svg' className='w-[20px]' key={i}/>
                                    ))}
                                    <img src='/assets/star1.svg' className='w-[20px]' />
                                </div>
                            </div>
                        </div>
                        <p className="text-[#2F2A2A] text-base">
                        Beyond Hut’s hiring process is smooth, fast, and reliable. The automation tools they provide have streamlined our workflow like never before!
                        </p>


                        <div className="flex items-center mb-4 gap-2 mt-2">
                            <img src="/assets/user_profile.svg" alt="user" className='w-12 h-12' />
                            <div className='flex flex-col gap-0'>
                                <p className="font-bold text-xl -mb-1">David P</p>
                                <p className="font-normal text-base ">Co-Founder</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials