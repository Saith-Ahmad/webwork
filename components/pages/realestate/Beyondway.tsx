import FadeInLeft from '@/components/framermotion/FadeInLeft'
import React from 'react'

function Beyondway() {
    return (
        <div className='my-14 max-lg:min-h-[50vh] relative'>
        <div  className='container'>
            

            <div className=' md:px-16 md:py-10 p-5  max-lg:min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInLeft once={false} duration={0.7} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center md:max-w-[900px]">We Do It / THE BEYOND WAY</h2>
                    </FadeInLeft>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>So you can focus on what matters.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-stretch w-full gap-4 '>

                    <div className='group shadow-md bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl font-bold mt-6 mb-20'>1</h3>
                            <h3 className='font-roca text-3xl'>Top‑Tier Estate‑Agent Talent</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Hand‑picked UK‑property specialists, vetted and trained according to UK standards, tested in operations.</p>
                        </div>

                    </div>

                    <div className='group shadow-md bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>2</h3>
                            <h3 className='font-roca text-3xl'>Onboarding <br/> & <br/> Integration</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Plug‑and‑play setup in your CRMs, listing platforms, calendars, etc.</p>
                        </div>

                    </div>

                    <div className='group shadow-md bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>3</h3>
                            <h3 className='font-roca text-3xl'>Performance & Retention Monitoring</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Daily KPI tracking, quality audits, and check-ins to keep output high and turnover low while retaining.</p>
                        </div>

                    </div>

                      <div className='group shadow-md bg-[#FFFFFF] min-h-[400px] w-full lg:max-w-[300px]  p-5 rounded-2xl transform-3d relative overflow-hidden cursor-pointer'>

                        <img
                            src='/assets/new/framebg.png'
                            alt='bg'
                            className='absolute inset-0 -z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        />

                        <div className='z-[10] p-1 flex-col'>
                            <h3 className='font-roca text-4xl mt-6 mb-20'>4</h3>
                            <h3 className='font-roca text-3xl'>Lower Costs, Higher<br/> Output</h3>
                            <hr className="border-t-[3px] border-dashed border-black my-4" />
                            <p>Our clients benefit from up to 70 % less costs, while automation boosts productivity.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</div>


    )
}

export default Beyondway