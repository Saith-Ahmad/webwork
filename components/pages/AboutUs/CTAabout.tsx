
import { Button } from '@/components/ui/button'
import {  MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CTAabout() {
    return (
        <div className='container my-12'>
            <div className='bg-white shadow-lg relative shadow-gray-200 max-lg:min-h-[60vh] min-h-[450px] p-5  flex md:flex-row flex-col space-y-10 justify-center items-center md:rounded-[50px] rounded-[30px] overflow-hidden'>


                <div className='flex flex-col justify-center items-start w-full relative z-[20] md:max-w-[50%]'>
                    <div className='w-full mt-14 mb-10 flex flex-col gap-3'>
                            <h2 className="fade-in-up font-roca text-2xl text-start md:text-[40px] font-thin mb-3">Ready to Scale Smarter?</h2>
                   
                        <p className='mt-1 text-start  text-xl text-[#516371] max-w-[520px]'>Partner with BeyondHut to build winning teams, streamline growth, and unlock your full potential—wherever you are in the world.</p>
                    </div>


                    <div className='flex flex-row gap-3 justify-center items-center md:max-w-[50%] '>
                    <Link href={'/get-started'}>
                        <Button size={'lg'} className="bg-primarylight hover:scale-105 rounded-full text-lg  transition-transform duration-300 ease-in-out transform shadow-md p-6 px-12">
                            Join Our Talent Network
                        </Button>
                    </Link>
                    
                    </div>
                </div>
                <div className='relative z-[20] max-md:mt-3'>
                    <Image src={'/assets/new/getstarted.png'} alt='get started' width={450} height={400} />
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

export default CTAabout