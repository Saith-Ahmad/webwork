import Image from 'next/image'
import React from 'react'

function WeGotHere() {
  return (
     <div className='container mt-10'>
                <div className='bg-white shadow-lg shadow-gray-200 max-lg:min-h-[40vh] flex flex-col justify-center items-center relative overflow-hidden md:rounded-[50px] rounded-[30px] pb-10'>
    
                    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                        <div className="relative w-full h-full">
                            <div className="absolute  w-[350px] h-[250px] bg-[#dddbfa]   rounded-full blur-3xl opacity-70 lg:bottom-[20%] lg:left-[35%] bottom-[15%] left-0"></div>
                            <div className="absolute w-[350px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-70 lg:bottom-[20%] lg:left-[25%] bottom-[13%] left-[10%]"></div>
    
                        </div>
                    </div>
    
                    <div className='w-full mt-10 md:p-4 p-2 relative z-[10] mb-3 flex flex-col items-center justify-center'>
                        <h2 className="fade-in-up font-roca text-3xl md:text-4xl lg:text-[40px] md:max-w-[600px] text-center font-thin">
                        How We Got Here
                        </h2>
                        <p className='mt-3 text-center  text-lg text-[#516371] max-w-[600px]'>We started Beyond Hut to solve a problem and make a difference:
                        </p>
                    </div>
    
                   <div className='flex flex-col md:flex-row justify-between items-center gap-20 z-[10] relative'>
                   <img src="/assets/new/arrow.png" alt="" className='absolute bottom-0 left-[20%] -rotate-[25deg] hidden md:flex max-w-[400px] p-2'/>
                   
                    <img src={'/assets/new/wegotherecard.png'} alt='how we got here' className='w-[300px] md:w-[400px]'/>
                    <div className='max-w-[410px] p-5 relative'>
                    <img src="/assets/new/arrow.png" alt="" className='absolute -top-[50%] -left-[10%] rotate-[70deg] flex md:hidden max-w-[230px] p-2'/>
                        <h4 className='text-black text-2xl font-bold'>So we built a better way.</h4>
                        <p className='text-lg mt-2'>A faster, simpler way to scale with talented people and proven systems. Now, we work with businesses around the world, helping them grow with less guesswork and more confidence.</p>
                    </div>
                   </div>
    
                </div>
            </div>
  )
}

export default WeGotHere