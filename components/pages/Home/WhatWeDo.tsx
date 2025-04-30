
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
        <div className='container mt-12'>
            <div className='bg-white shadow-lg shadow-gray-200 md:min-h-[90vh] rounded-3xl flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[60%] mt-14 mb-10 p-5'>
                    <FadeInLeft once={false} duration={0.7} distance={30}>
                        <h2 className="font-roca capitalize text-2xl md:text-4xl font-thin text-center">How our process works</h2>
                    </FadeInLeft>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ x: 100, opacity: 0 }}
                    animate={controls}
                    className='md:p-5 mb-10 p-1 w-full'
                >
                    <img src="/assets/new/process.svg" alt="cutprice" className='w-full' />
                </motion.div>


                <div className='flex flex-col justify-center items-center'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <Link href={'/get-started'}>
                        <Button size={'lg'} className="hover:scale-105 rounded-full mb-[50px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Hire Talent <MoveRightIcon/>
                        </Button>
                        </Link>

                        <a href={'https://calendly.com/fahad-aslam4500'}>
                        <Button size={'lg'} variant={'outline'} className="hover:scale-105 border-2 border-solid border-[#00B7EB] text-[#00B7EB] hover:text-[#00B7EB] hover:bg-[#e3f9ff] rounded-full mb-[50px] transition-transform duration-300 ease-in-out transform shadow-md">
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