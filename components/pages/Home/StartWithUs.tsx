
import { Button } from '@/components/ui/button'
import {  MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function StartWithUs() {
    return (
        <div className='container my-12'>
            <div className='bg-white shadow-lg relative shadow-gray-200 max-lg:min-h-[60vh] min-h-[450px] p-5  flex flex-col justify-center items-center md:rounded-[50px] rounded-[30px] overflow-hidden'>


                <div className='flex flex-col justify-center items-center w-full relative z-[20]'>
                    <div className='w-full mt-14 mb-10 flex flex-col gap-3'>
                            <h2 className="fade-in-up font-roca text-2xl text-center md:text-[40px] font-thin mb-3">Growth starts with the right Partner</h2>
                   
                        <p className='mt-1 text-center  text-xl text-[#516371]'>Let’s change the way your team performs, Forever</p>
                    </div>


                    <div className='flex flex-row gap-3 justify-center items-center'>
                    <Link href={'/get-started'}>
                        <Button size={'lg'} className="bg-primarylight hover:scale-105 rounded-full text-lg  transition-transform duration-300 ease-in-out transform shadow-md p-6 px-12">
                            Get Started
                        </Button>
                    </Link>
                    <Link href={'/get-started'}>
                        <div className="flex font-semibold gap-1 flex-row justify-center text-lg items-center mt-3 hover:scale-105 transition-transform duration-300 ease-in-out transform mb-2">
                       Book A Call
                            <MoveRightIcon/>
                        </div>
                    </Link>
                    </div>
                </div>


                {/* Top Glow Group */}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full animate-glow-top">
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#a78bfada] rounded-full blur-3xl opacity-[25%] -bottom-28 left-0" />
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7dd4fcce] rounded-full blur-3xl opacity-[25%] -bottom-28 left-20" />
                    </div>
                </div>

                {/* Bottom Glow Group */}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full animate-glow-bottom">
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#a78bface] rounded-full blur-3xl opacity-[25%] -top-24 right-0" />
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7dd4fcd9] rounded-full blur-3xl opacity-[25%] -top-24 right-20" />
                    </div>
                </div>

            </div>
        </div>



    )
}

export default StartWithUs