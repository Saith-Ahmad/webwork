import FadeInLeft from '@/components/framermotion/FadeInLeft'
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function GrowthPuzzle() {
    return (
        <div className='container mt-16'>
            <div className='md:px-16 md:py-10 p-5 bg-white max-lg:min-h-[60vh] border-[1px] border-solid border-[#c9c9c9a3] md:rounded-[50px] rounded-[30px] flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInLeft once={false} duration={0.7} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center md:max-w-[900px]">We solve the growth puzzle </h2>
                    </FadeInLeft>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>So you can focus on what matters.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-around w-full items-center gap-4 '>

                    <div className='group bg-[#F8F8F8] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl font-bold mt-6 mb-20'>1</h3>
                            <h3 className='font-roca text-3xl'>Talent hiring <br /> handled</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>End-to-end recruitment,<br /> without the hassle.</p>
                        </div>

                    </div>

                    <div className='group bg-[#F8F8F8] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>2</h3>
                            <h3 className='font-roca text-3xl'>Sales processes <br /> automated</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Let automation drive your<br /> revenue growth.</p>
                        </div>

                    </div>

                    <div className='group bg-[#F8F8F8] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>3</h3>
                            <h3 className='font-roca text-3xl'>Scale your team <br /> without overhead</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Grow fast without adding<br /> complexity or cost.</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <Link href={'/get-started'}>
                            <Button size={'lg'} className="hover:scale-105 rounded-full transition-transform duration-300 ease-in-out transform shadow-md">
                                Hire Talent <MoveRightIcon />
                            </Button>
                        </Link>

                        <a href={'https://calendly.com/fahad-aslam4500'}>
                            <Button size={'lg'} variant={'outline'} className="hover:scale-105 border-2 border-solid border-[#00B7EB] text-[#00B7EB] hover:text-[#00B7EB] hover:bg-[#e3f9ff] rounded-full transition-transform duration-300 ease-in-out transform shadow-md">
                                Questions? <MoveRightIcon />
                            </Button>
                        </a>

                    </div>
                        <p className='mt-2 text-[12px]'>No Commitment Required · Cancel Anytime · Zero Risk</p>
                </div>

            </div>
        </div>



    )
}

export default GrowthPuzzle