
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function MeetTheTeam() {
    return (
        <div className='my-14 py-14 bg-[#F6F6F6]  max-lg:min-h-[50vh] relative'>
            
        <div className='container'>
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

            <div className='max-lg:min-h-[50vh] md:px-16 md:py-10 md:p-8 p-2  flex flex-col justify-center items-center relative overflow-hidden '>

                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full">
                        <div className="absolute w-[350px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-50 lg:bottom-[20%] lg:left-[25%] bottom-[13%] left-[10%]"></div>
                        <div className="absolute  w-[350px] h-[250px] bg-[#dddbfa]   rounded-full blur-3xl opacity-50 lg:bottom-[20%] lg:left-[35%] bottom-[15%] left-0"></div>

                    </div>
                </div>

                <div className='w-full md:max-w-[60%] md:mt-4 mb-4 relative z-[10]'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">Meet the Team</h2>
                    </FadeInTop>
                    <h5 className='mt-3 text-center font-rocathin text-xl md:text-2xl mb-8 text-black max-w-[600px]'>
                        We're worldwide <br />
                        We span 4 continents and recruit from 72 countries all over the world

                    </h5>
                </div>

                <div className='w-full z-10' >
                    <Image src={'/assets/new/map.png'} alt='map' width={1400} height={450}  />
                </div>



            </div>
        </div>


        </div>

    )
}

export default MeetTheTeam