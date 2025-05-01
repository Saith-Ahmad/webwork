
import FadeInTop from '@/components/framermotion/FadeInTop'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function TalentWithoutHussle() {
    return (
        <div className='container mt-10'>
            <div className='bg-white  md:px-16 md:py-10 p-8  flex flex-col justify-center items-center relative overflow-hidden border-[1px] border-solid border-[#c9c9c9a3] md:rounded-[50px] rounded-[30px]'>
                <div className='w-full md:max-w-[60%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">Talent Without Hassle</h2>
                    </FadeInTop>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Beyond Hut helps businesses scale with cost-effective top-tier talent  vetted, trained and ready to plug into your team.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-hidden'>


                    <div className='group bg-[#F6F4EC4D] md:min-h-[380px] min-h-[230px]  w-full lg:max-w-[300px] p-5 rounded-xl flex flex-col justify-around   relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b1a89bd0] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle1.png'} className='relative z-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Fast</h3>
                            <p className='text-sm md:text-base'>Within just a week</p>
                        </div>
                    </div>


                    <div className='group bg-[#CDF3FF4D] md:min-h-[380px] min-h-[230px] w-full lg:max-w-[300px] p-5 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#4bafcdad] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle2.png'} className='relative z-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Dependable</h3>
                            <p className='text-sm md:text-base'>Best longevity. Never worry about retention again</p>
                        </div>
                    </div>



                    <div className='group bg-[#c5f8f44d] md:min-h-[380px] min-h-[230px] w-full lg:max-w-[300px] p-5 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#57aca4cf] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle3.png'} className='relative z-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Dedicated</h3>
                            <p className='text-sm md:text-base'>Full-time talent through rigorous selection process</p>
                        </div>
                    </div>


                    <div className='group bg-[#f4f3ffdd] md:min-h-[380px] min-h-[230px] w-full lg:max-w-[300px] p-5 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b2acf4ef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle4.png'} className='relative z-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Flexible</h3>
                            <p className='text-sm md:text-base'>Never worry about a bad hire again/ talent replacement</p>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>



    )
}

export default TalentWithoutHussle