
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function MeetTheTeam() {
    return (
        <div className='container mt-10'>
            <div className='bg-white max-lg:min-h-[50vh] md:px-16 md:py-10 md:p-8 p-2  flex flex-col justify-center items-center relative overflow-hidden shadow-lg shadow-gray-200 md:rounded-[50px] rounded-[30px]'>

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



    )
}

export default MeetTheTeam