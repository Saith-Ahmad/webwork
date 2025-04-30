
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function TalentWithoutHussle() {
    return (
        <div className='container mt-12'>
            <div className='bg-white shadow-lg shadow-gray-200 min-h-[100vh] rounded-3xl p-5  flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[60%] mt-14 mb-10'>
                    <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">Talent Without Hassle</h2>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Beyond Hut helps businesses scale with cost-effective top-tier talent  vetted, trained and ready to plug into your team.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <div className='bg-[#F6F4EC4D] hover:bg-[#f7f1d74d] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-lg flex flex-col justify-around'>
                        <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle1.png'}/>
                        <div>
                        <h3 className='font-semibold text-2xl'>Fast</h3>
                        <p>within just a week</p>
                        </div>
                    </div>

                    <div className='bg-[#CDF3FF4D] hover:bg-[#b7eeff4d] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-lg flex flex-col justify-around'>
                    <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle2.png'}/>
                        <div>
                        <h3 className='font-semibold text-2xl'>Dependable</h3>
                        <p>Best longevity. Never worry about retention again.</p>
                        </div>
                    </div>

                    <div className='bg-[#ECF9F84D] hover:bg-[#ccf9f54d] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-lg flex flex-col justify-around'>
                    <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle3.png'}/>
                        <div>
                        <h3 className='font-semibold text-2xl'>Dedicated</h3>
                        <p>full-time talent through rigorous selection process</p>
                        </div>
                    </div>

                    <div className='bg-[#ECF9F84D] hover:bg-[#cbfbf74d] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-lg flex flex-col justify-around'>
                    <Image width={130} height={100} alt='no hussle' src={'/assets/new/hussle4.png'}/>
                       <div>
                       <h3 className='font-semibold text-2xl'>Flexible</h3>
                       <p>Never worry about a bad hire again/ talent replacement</p>
                       </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default TalentWithoutHussle