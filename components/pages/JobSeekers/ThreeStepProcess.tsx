import FadeInLeft from '@/components/framermotion/FadeInLeft'
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ThreeStepProcess() {
    return (
        <div className='my-14 py-14 bg-[#F6F6F6]  max-lg:min-h-[50vh] relative'>
        <div  className='container'>
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

            <div className=' md:px-16 md:py-10 p-5  max-lg:min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInLeft once={false} duration={0.7} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center md:max-w-[900px]">Our 3-Step Process</h2>
                    </FadeInLeft>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Simple and easy</p>
                </div>

                <div className='flex flex-col md:flex-row justify-around w-full items-center gap-4 '>

                    <div className='group bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl font-bold mt-6 mb-20'>1</h3>
                            <h3 className='font-roca text-3xl'>Apply once</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Tell us about your experience, skills, and preferences. No endless forms.</p>
                        </div>

                    </div>

                    <div className='group bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>2</h3>
                            <h3 className='font-roca text-3xl'>Get matched</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>We’ll connect you with vetted roles that align with your goals, no spam, no guesswork.</p>
                        </div>

                    </div>

                    <div className='group bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>3</h3>
                            <h3 className='font-roca text-3xl'>Start strong</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>We guide you through onboarding, check in on your progress, and help you keep growing.</p>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <Link href={'/get-started'}>
                            <Button size={'lg'} className="bg-primarylight hover:scale-105 rounded-full transition-transform duration-300 ease-in-out transform shadow-md">
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
</div>


    )
}

export default ThreeStepProcess