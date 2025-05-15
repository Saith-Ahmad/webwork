
'use client'
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import Link from 'next/link'

function WhatWeDo() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 1.5, ease: 'easeOut' },
            })
        }
    }, [inView, controls])

    return (
        <div className='md:mt-10 bg-white container'>
            <div className='    max-lg:min-h-[40vh] flex flex-col justify-center items-center relative overflow-hidden p-1'>
                <div className='w-full md:max-w-[60%] mt-5 p-5'>
                    <FadeInLeft once={false} duration={0.7} distance={30}>
                        <h2 className="font-roca capitalize text-2xl md:text-4xl font-thin text-center">How our process works</h2>
                    </FadeInLeft>
                </div>

              <div className='relative p-5 px-10'>
                    <img src="/assets/new/linebg.png" alt="" className='md:w-[90%]'/>



                    
                <div className='group'>
                    <img src='/assets/new/process1.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] absolute bottom-[10%] md:bottom-0 md:left-[40px] left-[30px] transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0'/>
                    <img src='/assets/new/processbg1.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] absolute bottom-[10%] md:bottom-0 md:left-[40px] left-[30px] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100'/>
                </div>

                <div className='group'>
                    <img src='/assets/new/process2.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] absolute md:top-10 md:left-[30%] top-[20%] left-[30%] transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0'/>
                    <img src='/assets/new/processbg2.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] absolute md:top-10 md:left-[30%] top-[20%] left-[30%] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100'/>
                </div>

                <div className='group'>
                    <img src='/assets/new/process3.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0 absolute md:bottom-0 right-[25%] bottom-[10%]'/>
                    <img src='/assets/new/processbg3.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 absolute md:bottom-0 right-[25%] bottom-[10%]'/>
                </div>

                <div className='group'>
                    <img src='/assets/new/process4.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0 absolute top-[20%] right-[10px]'/>
                    <img src='/assets/new/processbg4.png' alt='process' className='max-w-[70px] md:max-w-[100px] lg:max-w-[200px] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 absolute top-[20%] right-[10px]'/>
                </div>

              </div>


                <div className='flex flex-col justify-center items-center my-4'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <Link href={'/get-started'}>
                        <Button size={'lg'} className="hover:scale-105 rounded-full mb-[20px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Hire Talent <MoveRightIcon/>
                        </Button>
                        </Link>

                        <a href={'https://calendly.com/fahad-aslam4500'}>
                        <Button size={'lg'} variant={'outline'} className="hover:scale-105 border-2 border-solid border-[#00B7EB] text-[#00B7EB] hover:text-[#00B7EB] hover:bg-[#e3f9ff] rounded-full mb-[20px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Questions? <MoveRightIcon/>
                        </Button>
                        </a>
                  </div>
                </div>
            </div>
        </div>



    )
}

export default WhatWeDo