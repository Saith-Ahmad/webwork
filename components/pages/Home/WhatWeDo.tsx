
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WhatWeDo() {
    return (
        <div className='container mt-12'>
            <div className='bg-white shadow-lg shadow-gray-200 md:min-h-[90vh] rounded-3xl flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[60%] mt-14 mb-10 p-5'>
                    <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">How our process works</h2>
                </div>

                <div className='md:p-5 mb-10 p-1'>
                    <img src="/assets/new/process.svg" alt="cutprice" className='w-full'/>
                </div>

                <div className='flex flex-col justify-center items-center'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                        <Button size={'lg'} className="hover:scale-105 rounded-full mb-[50px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Hire Talent <MoveRightIcon/>
                        </Button>

                        <Button size={'lg'} variant={'outline'} className="hover:scale-105 border-2 border-solid border-[#00B7EB] text-[#00B7EB] hover:text-[#00B7EB] hover:bg-[#e3f9ff] rounded-full mb-[50px] transition-transform duration-300 ease-in-out transform shadow-md">
                            Questions? <MoveRightIcon/>
                        </Button>
                  </div>
                </div>
            </div>
        </div>



    )
}

export default WhatWeDo