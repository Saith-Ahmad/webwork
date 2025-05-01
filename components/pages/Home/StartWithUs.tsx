
import FadeInTop from '@/components/framermotion/FadeInTop'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function StartWithUs() {
    return (
        <div className='container my-12'>
            <div className='bg-white shadow-lg relative shadow-gray-200 min-h-[60vh] md:min-h-[68vh] p-5  flex flex-col justify-center items-center md:rounded-[50px] rounded-[30px] overflow-hidden'>


                <div className='flex flex-col justify-center items-center w-full relative z-[20]'>
                    <div className='w-full md:max-w-[70%] mt-14 mb-10'>
                            <h2 className="fade-in-up font-roca text-2xl md:text-4xl font-thin text-center md:max-w-[900px]">Start with Us </h2>
                   
                        <p className='mt-1 text-center  text-lg text-[#516371]'>To build the team you need Hassle free</p>
                    </div>

                    <Link href={'/get-started'}>
                        <Button size={'lg'} className="hover:scale-105 rounded-full mb-[50px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Book a Discovery Call
                        </Button>
                    </Link>
                </div>


                {/* Top Glow Group */}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full animate-glow-top">
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#a78bfada] rounded-full blur-3xl opacity-50 bottom-0 left-0" />
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7dd4fcce] rounded-full blur-3xl opacity-50 bottom-10 left-20" />
                    </div>
                </div>

                {/* Bottom Glow Group */}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full animate-glow-bottom">
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#a78bface] rounded-full blur-3xl opacity-50 top-0 right-0" />
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7dd4fcd9] rounded-full blur-3xl opacity-50 top-10 right-20" />
                    </div>
                </div>

            </div>
        </div>



    )
}

export default StartWithUs