
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function FindRightPeople() { 
    return (
        <div className='container mt-10'>
            <div className='bg-white max-lg:min-h-[60vh]  md:px-12 md:py-10 md:p-8 p-1  flex flex-col justify-center items-center relative overflow-hidden shadow-lg shadow-gray-200 md:rounded-[50px] rounded-[30px]'>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">We Make Finding the Right Role Simple</h2>
                    </FadeInTop>
                    <p className=' mt-1 text-center  text-lg text-[#516371]'>Our Founder believes that looking for your next opportunity shouldn't feel like a full-time job.
                        That's why we designed a process that's efficient, personal, and built to work for YOU.</p>
                </div>

                <div className='flex gap-4 flex-col md:flex-row justify-center items-stretch overflow-hidden'>

                     <div className='group col-span-1 bg-[#F6F4EC]   w-full p-5 rounded-xl flex flex-col relative overflow-hidden in-view'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b1a89bd0] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={80} height={70} alt='no hussle' src={'/assets/new/rightpeople1.png'} className='mb-[50px] md:mb-[100px] relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Fast Apply</h3>
                            <p className='text-sm md:text-base'>One simple form. That's it. No fluff.</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#CDF3FF66]   w-full p-5 rounded-xl flex flex-col relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#4bafcdad] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={80} height={70} alt='no hussle' src={'/assets/new/rightpeople2.png'} className='mb-[50px] md:mb-[100px] relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Smart Matching</h3>
                            <p className='text-sm md:text-base'>We only send you roles that fit your skills, schedule, and goals.</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#c5f8f44d]  w-full p-5 rounded-xl flex flex-col relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#57aca4cf] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={80} height={70} alt='no hussle' src={'/assets/new/rightpeople3.png'} className='mb-[50px] md:mb-[100px] relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Guided Onboarding</h3>
                            <p className='text-sm md:text-base'>We don’t ghost you after you’re hired: we help you hit the ground running.</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#EFEEFDE5] w-full p-5 rounded-xl flex flex-col relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#c4bffbef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={80} height={70} alt='no hussle' src={'/assets/new/rightpeople4.png'} className='mb-[50px] md:mb-[100px] relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Performance-Driven Clients</h3>
                            <p className='text-sm md:text-base'>You’ll work with teams that are serious, supportive, and ready to grow with you.</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>



    )
}

export default FindRightPeople