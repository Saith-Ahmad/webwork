'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeInBottom from '@/components/framermotion/FadeInBottom'
import React, { useEffect } from 'react'

function CutFire() {
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
        <div className='my-10 bg-white'>
            <div className='container    max-lg:min-h-[40vh] flex flex-col justify-center items-center relative overflow-hidden'>
                {/* Heading */}
                <div className='w-full md:max-w-[60%] mt-4 p-5'>
                    <FadeInBottom once={false} duration={0.7} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">Cut Hire Time By 70%</h2>
                    </FadeInBottom>
                    <p className='mt-1 text-center text-lg text-[#516371]'>Go beyond with us.</p>
                </div>

                {/* Animated Image */}
                <motion.div
                    ref={ref}
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    className='md:p-5 mb-10 p-1 w-full'
                >
                    <img src="/assets/new/itemcutprive.svg" alt="cutprice" className='w-full' />
                </motion.div>
            </div>
        </div>
    )
}

export default CutFire
