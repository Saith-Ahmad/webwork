
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function MakeDifference() {
    return (
        <div className='my-14 py-14 bg-[#F6F6F6]  max-lg:min-h-[50vh] relative'>
             <div className="custom-shape-divider-top-1747344540">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1747344583">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='container max-lg:min-h-[60vh]  md:px-16 md:py-10 p-1  flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[60%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">How you can make a difference</h2>
                    </FadeInTop>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-10 xl:gap-12 overflow-hidden'>

                <div className='group bg-[#B1A79A33] min-w-[260px] md:min-h-[380px] min-h-[230px]   w-full max-w-[280px] p-5 rounded-xl flex flex-col justify-around items-center   relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b1a89bd0] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/difference1.png'} className='relative z-[10] max-sm:mb-10' />
                        <div className='relative z-10'>
                            <p className='text-sm md:text-lg text-black text-center max-w-[170px]'>Beyond Hut is where momentum <br/> begins.</p>
                        </div>
                    </div>

                    <div className='group bg-[#5FADC633] min-w-[260px] md:min-h-[380px] min-h-[230px] w-full max-w-[280px] p-5 rounded-xl flex flex-col justify-around items-center relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#4bafcdad] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/difference3.png'} className='relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <p className='text-sm md:text-lg text-black text-center max-w-[170px]'>Where smart teams find the rhythm they’ve been chasing.</p>
                        </div>
                    </div>

                    <div className='group bg-[#ABA5E833] min-w-[260px] md:min-h-[380px] min-h-[230px] w-full max-w-[280px] p-5 rounded-xl flex flex-col justify-around items-center relative overflow-hidden max-sm:mb-5'>
                        <div className="absolute w-[170px] h-[170px] bg-[#c4bffbef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/difference2.png'} className='relative z-10 max-sm:mb-10' />
                        <div className='relative z-10'>
                            <p className='text-sm md:text-lg text-black text-center max-w-[170px]'>Scaling should feel powerful; not<br/> painful.</p>
                        </div>
                    </div>

                 
                   
                </div>

            </div>
        </div>



    )
}

export default MakeDifference