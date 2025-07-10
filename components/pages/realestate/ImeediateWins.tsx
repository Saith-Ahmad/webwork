
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function ImmediateWins() {
    return (
        <div className='my-14 py-6 max-lg:min-h-[50vh] relative'>
            
        <div className='container'>
           
            <div className='max-lg:min-h-[50vh]  md:px-12 md:py-10 md:p-8 p-1  flex flex-col justify-center items-center relative overflow-hidden '>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">Immediate Wins for You</h2>
                    </FadeInTop>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Beyond Tools. Beyond tactics.</p>
                </div>

                <div className='flex gap-4 flex-col md:flex-row justify-center items-stretch overflow-hidden'>

                    <div className='group col-span-1 min-h-[300px]  bg-[#B1A79A33]  w-full p-5 rounded-xl flex flex-col pb-8 justify-between   relative overflow-hidden max-sm:mb-4'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b1a89bd0] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#B1A79A] md:mb-[100px] mb-[50px]'>1</h2>
                        <div className='relative z-10 '>
                            <h3 className='font-semibold text-xl'>Savings</h3>
                            <p className='text-sm md:text-base'>Cut staffing costs by up to 70 %</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#CDF3FF66]   w-full p-5 rounded-xl flex flex-col pb-8 justify-between relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#4bafcdad] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#5FADC6] md:mb-[100px] mb-[50px]'>2</h2>
                        <div className='relative z-10 '>
                            <h3 className='font-semibold text-xl'>Speed</h3>
                            <p className='text-sm md:text-base'>Slash hiring timelines by 80 %</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#c5f8f44d]  w-full p-5 rounded-xl flex flex-col pb-8  justify-between relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#57aca4cf] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#58AAA4] md:mb-[100px] mb-[50px]'>3</h2>
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-xl'>Focus</h3>
                            <p className='text-sm md:text-base'>Free senior agents from admin & compliance</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#EFEEFDE5] w-full p-5 pb-8 rounded-xl flex flex-col relative justify-between overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#c4bffbef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#ABA5E8] md:mb-[100px] mb-[50px]'>4</h2>
                        <div className='relative z-10 '>
                            <h3 className='font-semibold text-xl'>Flexibility</h3>
                            <p className='text-sm md:text-base'>Scale teams up or down in days, not months</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>

        </div>


    )
}

export default ImmediateWins