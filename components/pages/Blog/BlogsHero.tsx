
import Image from 'next/image'
import React from 'react'

function BlogHero() {
    return (
        <div className='container '>
            <div className='bg-white shadow-lg shadow-gray-200 max-lg:min-h-[60vh] flex flex-col md:flex-row justify-center items-center relative overflow-hidden md:rounded-[50px] rounded-[30px] md:p-20 p-5'>

                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full">
                        <div className="absolute  w-[300px] h-[350px] bg-[#dddbfa]   rounded-full blur-3xl opacity-50 lg:bottom-[20%] lg:left-[35%] bottom-[15%] left-0"></div>
                        <div className="absolute w-[300px] h-[350px] bg-[#f8e9ca] rounded-full blur-3xl opacity-50 lg:bottom-[20%] lg:left-[25%] bottom-[13%] left-[10%]"></div>

                    </div>
                </div>

                <div className='w-full mt-10 md:p-4 p-2 flex flex-col justify-center items-center relative z-[10] md:mb-10'>
                    <h1 className="fade-in-up text-center md:text-start font-roca text-3xl md:text-4xl lg:text-[40px] md:max-w-[600px] font-thin">
                        Stay Updated With Stories That Matter
                    </h1>

                    <p className='mt-3 text-start  text-lg text-[#516371] max-w-[600px]'>From in-depth tutorials to quick reads, our blog covers the topics you care about. Explore, learn, and grow with every post updated regularly just for you.
                    </p>
                </div>

                <div className='relative z-[15] mt-5 md:mt-0'>
                    <Image src={'/assets/new/blog.png'} alt='go beyond' width={500} height={500} />
                </div>

            </div>
        </div>



    )
}

export default BlogHero