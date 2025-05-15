import Image from 'next/image'
import React from 'react'

function MissionVission() {
    return (
        <div className=' bg-[#F6F6F6] relative'>
        <div className='my-14 py-14  max-lg:min-h-[50vh]  container'>

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

            <div className=' max-lg:min-h-[60vh] flex flex-col md:flex-row justify-center items-center relative overflow-hidden  md:p-20 p-5'>

                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full">
                        <div className="absolute  w-[350px] h-[250px] bg-[#dddbfa]   rounded-full blur-3xl opacity-50 lg:bottom-[20%] lg:left-[35%] bottom-[15%] left-0"></div>
                        <div className="absolute w-[350px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-50 lg:bottom-[20%] lg:left-[25%] bottom-[13%] left-[10%]"></div>

                    </div>
                </div>

                <div className='w-full mt-10 md:p-4 p-2 relative z-[10] md:mb-10'>
                    <h2 className="fade-in-up font-roca text-3xl md:text-4xl lg:text-[40px] md:max-w-[600px] text-start font-thin">
                        Our Mission
                    </h2>

                    <h5 className='mt-3 text-start font-roca text-xl text-black max-w-[600px]'>To help growing teams win with the best talent and smarter systems. <br /><br/> Founder Fahad says this:<br />“Hiring shouldn’t be hard.”
                    </h5>
                    <p className='mt-3 text-start  text-lg text-[#516371] max-w-[600px]'>Providing companies and the best talent the opportunities they need to grow.
                    </p>
                </div>

                <div className='relative z-[15] mt-5 md:mt-0'>
                    <Image src={'/assets/new/aboutMission.png'} alt='go beyond' width={500} height={500} />
                </div>

            </div>
        </div>
        </div>

    )
}

export default MissionVission