import FadeInBottom from '@/components/framermotion/FadeInBottom'
import Image from 'next/image'
import React from 'react'

function WhatWeDo() {
    return (
        <div className="container my-28 min-h-[50vh] flex flex-col items-center justify-center">
            <FadeInBottom>
                <h2 className="text-3xl md:text-4xl text-center font-semibold">What do we do?</h2>
            </FadeInBottom>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Talent Outsourcing */}
                <div className="bg-[#F8E1BE] relative z-10   w-full rounded-md cursor-pointer transform-scale-shadow overflow-hidden">
                    <div className="flex items-center justify-between gap-0">
                        {/* Left Column - Text */}
                        <div className="max-w-md relative z-10 p-6">
                            <h4 className="text-xl md:text-2xl font-semibold">Talent Outsourcing</h4>
                            <p className="text-sm md:text-base">
                                Access top remote professionals <br /> tailored to your business needs.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <Image 
                            src="/assets/globe.png" 
                            className="w-[120px] md:w-[150px] z-0 opacity-100"
                            alt="globe" 
                            width={150} 
                            height={150} 
                        />
                    </div>
                </div>

                {/* Sales Consultancy & Automation */}
                <div className="bg-[#FAC2C1] relative z-10  w-full rounded-md cursor-pointer transform-scale-shadow overflow-hidden">
                    <div className="flex items-center justify-between gap-10">
                        {/* Left Column - Text */}
                        <div className="max-w-md relative z-10 p-6">
                            <h4 className="text-xl md:text-2xl font-semibold">Sales Consultancy & Automation</h4>
                            <p className="text-sm md:text-base">
                                Optimize sales workflows and boost efficiency  with smart automation.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <Image 
                            src="/assets/paraicons.png" 
                            className="w-[120px] md:w-[150px] z-10 opacity-100"
                            alt="icons" 
                            width={150} 
                            height={150} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
