
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function WeGoBeyond() {
    return (
        <div className='container mt-10'>
            <div className='bg-white max-lg:min-h-[60vh]   md:py-20 p-8 md:px-12  flex flex-col justify-center items-center relative overflow-hidden border-[1px] border-solid border-[#c9c9c9a3] md:rounded-[50px] rounded-[30px]'>
                <div className=''>

                    <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>


                        <div className='max-w-[350px] lg:min-w-[310px]'>
                            <FadeInTop once={false} duration={0.6} distance={30}>
                                <h2 className="font-roca text-2xl md:text-3xl font-thin text-start">We Don’t Just Advise.<br/> We Go Beyond.</h2>
                            </FadeInTop>
                            <h3 className='tracking-tight text-lg md:text-xl font-medium leading-tight text-start mt-4'>
                                Most consultants hand you a strategy and disappear.
                            </h3>
                            <p className='text-base md:text-lg text-start mt-4'>We streamline sales processes, boost conversions using expert strategies and make sure the work actually gets done.</p>
                        </div>






                        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-3'>

                            <div className='group cursor-pointer flex-grow-1 bg-[#F6F4EC] md:min-h-[250px] min-h-[170px] p-3 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                                <div className="absolute w-[170px] h-[170px] bg-[#f3de8c] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                                <Image width={60} height={60} alt='no hussle' src={'/assets/new/beyond1.png'} className='relative z-10' />
                                <div className='relative z-10'>
                                    <h3 className='font-semibold text-xl'>Built by Operators</h3>
                                    <p className='text-sm '>Every consultant we deploy has run sales at high-growth startups. Strategy is just the start; execution is where we get to work.</p>
                                </div>
                            </div>


                            <div className='group cursor-pointer flex-grow-1 bg-[#F1F0FE] md:min-h-[250px] min-h-[170px] p-3 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                                <div className="absolute w-[170px] h-[170px] bg-[#b2acf4ef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                                <Image width={60} height={60} alt='no hussle' src={'/assets/new/beyond2.png'} className='relative z-10' />
                                <div className='relative z-10'>
                                    <h3 className='font-semibold text-xl'>Fully Embedded</h3>
                                    <p className='text-sm'>We integrate. Think of us as an extension of your team, accountable, proactive, and focused on results.</p>
                                </div>
                            </div>

                             <div className='group cursor-pointer flex-grow-1 bg-[#EBFAFF] md:min-h-[250px] min-h-[170px] p-3 rounded-xl flex flex-col justify-around relative overflow-hidden'>
                                <div className="absolute w-[170px] h-[170px] bg-[#57aca4cf] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                                <Image width={60} height={60} alt='no hussle' src={'/assets/new/beyond3.png'} className='relative z-10' />
                                <div className='relative z-10'>
                                    <h3 className='font-semibold text-xl'>Zero Fluff</h3>
                                    <p className='text-sm'>No cookie-cutter solutions. You get hand picked experts matched to your exact need, stage and target market.</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>



    )
}

export default WeGoBeyond