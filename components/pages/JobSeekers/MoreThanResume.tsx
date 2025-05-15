
import FadeInTop from '@/components/framermotion/FadeInTop'
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MoreThanResume() {
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


            <div className='container max-lg:min-h-[60vh]  md:px-12 md:py-10 md:p-8 p-1  flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">You’re More Than a Resume.</h2>
                    </FadeInTop>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Other platforms automate you into a stack.<br />
                        We start by understanding you</p>
                </div>


                <div className='flex flex-col p-5 gap-7'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                        <div className=' ccol-span-1 bg-[#EBFAFF] min-h-[210px] rounded-2xl md:max-w-[320px] min-w-[280px] flex flex-col justify-between items-start p-4'>
                            <div className='bg-[#FFE2B7] px-3 py-1 rounded-full'>First</div>
                            <h4 className='text-2xl font-roca'>How you <br /> work</h4>
                        </div>
                        <div className='col-span-1 bg-[#EBFAFF] min-h-[210px] rounded-2xl md:max-w-[300px] min-w-[280px] flex flex-col justify-between items-start p-4'>
                            <div className='bg-[#C9E5FF] px-3 py-1 rounded-full'>Second</div>
                            <h4 className='text-2xl font-roca'>What you’re<br /> great at</h4>
                        </div>
                        <div className='col-span-1 bg-[#EBFAFF] min-h-[210px] rounded-2xl md:max-w-[300px] min-w-[280px] flex flex-col justify-between items-start p-4'>
                            <div className='bg-[#B5F1D8] px-3 py-1 rounded-full'>Third</div>
                            <h4 className='text-2xl font-roca'>The environment<br />  where you thrive</h4>
                        </div>
                    </div>

                    <div className='w-full bg-[#F1F0FE] p-4 flex flex-col md:flex-row gap-4 justify-between items-center rounded-2xl'>
                        <h4 className='text-2xl font-roca max-md:self-start'>
                            Always <br className='hidden md:flex'/> expanding
                        </h4>
                        <p className='text-base'>10 people. 100 people. 1,000. <br />
                            We’re here to help you grow to any size.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center p-5'>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
                            <Link href={'/get-started'}>
                                <Button size={'lg'} className="bg-black hover:bg-gray-800 hover:scale-105 rounded-full transition-transform duration-300 ease-in-out transform shadow-md">
                                    Hire Talent <MoveRightIcon />
                                </Button>
                            </Link>

                            <a href={'https://calendly.com/fahad-aslam4500'}>
                                <Button size={'lg'} variant={'outline'} className="hover:scale-105 border-2 border-solid border-black text-black hover:text-white hover:bg-gray-800 rounded-full transition-transform duration-300 ease-in-out transform shadow-md">
                                    Questions? <MoveRightIcon />
                                </Button>
                            </a>

                        </div>
                        <p className='mt-2 text-[12px] max-sm:text-center'>No Commitment Required · Cancel Anytime · Zero Risk</p>
                    </div>
                </div>


            </div>
        </div>



    )
}

export default MoreThanResume