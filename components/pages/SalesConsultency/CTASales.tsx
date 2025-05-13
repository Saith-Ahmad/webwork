
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CTASales() {
    return (
        <div className='container my-12'>
            <div className='bg-white shadow-lg relative shadow-gray-200 max-lg:min-h-[60vh] min-h-[400px] p-5  flex flex-col justify-center items-center md:rounded-[50px] rounded-[30px] overflow-hidden'>


                <div className='flex flex-col md:flex-row justify-center items-center w-full relative z-[20]'>
                    <div className='w-full md:max-w-[70%] mt-14 mb-10'>
                            <h2 className="fade-in-up font-roca text-2xl max-md:text-center md:text-4xl font-thin text-start md:max-w-[900px]">Growth starts with the right partner.</h2>
                   
                        <p className='mt-1 text-start max-md:text-center  text-xl text-[#516371]'>One call can change the way your team sells, forever.</p>
                    </div>

                    <img src="/assets/new/arrow.png" alt="" className='absolute  top-36 hidden md:flex'/>
                    <img src="/assets/new/arrow.png" alt="" className='absolute w-[100px] rotate-[60deg] right-[210px] top-[200px] flex md:hidden'/>


                    <div className='flex flex-col justify-center items-center'>
                    <Link href={'/get-started'}>
                        <Button size={'lg'} className="hover:scale-105 rounded-full  transition-transform duration-300 ease-in-out transform shadow-md p-6 px-12">
                            Get Started
                        </Button>
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

export default CTASales