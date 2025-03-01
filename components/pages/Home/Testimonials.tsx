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
                    <h4 className='text-white text-center md:text-3xl text-2xl mt-2  font-semibold'>Real Stories, Real Impact: Hear from Our Satisfied Clients</h4>
                </div>
                <div className='flex flex-col md:flex-row gap-3 mt-8'>
                    {/* testimonial */}
                    <div className="max-w-sm  overflow-hidden shadow-lg p-6 bg-white rounded-2xl">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </p>


                        <div className="flex items-center mb-4 gap-2 mt-2">
                            <img src="/assets/user_profile.svg" alt="user" className='w-12 h-12' />
                            <div className='flex flex-col gap-0'>
                                <p className="font-bold text-xl -mb-1">Mixin Will</p>
                                <p className="font-normal text-base ">Product Manager</p>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-sm  overflow-hidden shadow-lg p-6 bg-white rounded-2xl">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </p>


                        <div className="flex items-center mb-4 gap-2 mt-2">
                            <img src="/assets/user_profile.svg" alt="user" className='w-12 h-12' />
                            <div className='flex flex-col gap-0'>
                                <p className="font-bold text-xl -mb-1">Mixin Will</p>
                                <p className="font-normal text-base ">Product Manager</p>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-sm  overflow-hidden shadow-lg p-6 bg-white rounded-2xl">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </p>


                        <div className="flex items-center mb-4 gap-2 mt-2">
                            <img src="/assets/user_profile.svg" alt="user" className='w-12 h-12' />
                            <div className='flex flex-col gap-0'>
                                <p className="font-bold text-xl -mb-1">Mixin Will</p>
                                <p className="font-normal text-base ">Product Manager</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials