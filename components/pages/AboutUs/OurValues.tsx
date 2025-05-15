
import FadeInTop from '@/components/framermotion/FadeInTop'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function OurValues() {
    return (
        <div className='container mt-10'>
            <div className=' max-lg:min-h-[60vh]  md:px-16 md:py-10 md:p-8 p-1  flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[60%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">Our Values</h2>
                    </FadeInTop>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-10 gap-4 xl:gap-12 overflow-hidden'>


                    


                    <div className='group bg-[#5FADC633] md:min-h-[380px] min-h-[230px] max-w-[280px] p-5 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#4bafcdad] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/values1.png'} className='relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Real Results</h3>
                            <p className='text-sm md:text-base'>We care about outcomes, not slide decks</p>
                        </div>
                    </div>

                    <div className='group bg-[#ABA5E833] md:min-h-[380px] min-h-[230px] w-full max-w-[280px] p-5 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#c4bffbef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/values2.png'} className='relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Excellence</h3>
                            <p className='text-sm md:text-base'>Delivering superior quality in every project</p>
                        </div>
                    </div>

                    <div className='group bg-[#B1A79A33] md:min-h-[380px] min-h-[230px]  w-full max-w-[280px] p-5 rounded-xl flex flex-col justify-around   relative overflow-hidden max-sm:mb-4'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b1a89bd0] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/values3.png'} className='relative z-[10] max-sm:mb-10'/>
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-2xl'>Progress</h3>
                            <p className='text-sm md:text-base'>Truly making impact</p>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>



    )
}

export default OurValues