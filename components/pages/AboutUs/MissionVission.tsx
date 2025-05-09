import Image from 'next/image'
import React from 'react'

function MissionVission() {
    return (
        <div className='container mt-10'>
            <div className='bg-white shadow-lg shadow-gray-200 max-lg:min-h-[60vh] flex flex-col md:flex-row justify-center items-center relative overflow-hidden md:rounded-[50px] rounded-[30px] md:p-20 p-5'>

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

    )
}

export default MissionVission