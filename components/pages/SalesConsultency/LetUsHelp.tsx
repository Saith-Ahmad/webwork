import FadeInTop from '@/components/framermotion/FadeInTop';
import Image from 'next/image';
import React from 'react';

const LetUsHelp = () => {
    return (
        <div className="bg-[#161C28] py-12 rounded-t-3xl rounded-b-3xl  my-20 relative min-h-[100vh] flex justify-center items-center">


            <div className='absolute md:-top-4 -top-1 right-0 w-[100vw]'>
                <img src="/assets/upper_curve.svg" alt="curve" className='w-[100vw]' />
            </div>
            <div className='absolute md:-bottom-4 -bottom-1 right-0 w-[100vw]'>
                <img src="/assets/bottom_curve.svg" alt="curve" className='w-[100vw]' />
            </div>


            <div className="container ">
                {/* Heading */}
                <FadeInTop duration={0.7} distance={60} once={false}>
                    
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">Let us Help you Sell,  so you can Excel!</h2>
                </FadeInTop>

                {/* Cards Grid */}
              <div className='flex flex-row flex-wrap gap-3 justify-center items-center mt-5'>
              
              
              
                                  <div className='bg-[#F3C9B6] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between transform-3d'>
                                      <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                                          <Image src='/assets/polygon1.png' alt='polygon' width={300} height={300} />
                                          <Image src='/assets/sc_icon1.png' alt='polygon' className='absolute' width={200} height={200} unoptimized/>
                                      </div>
                                      <h5 className='text-black text-base font-medium'>CRM & process optimization & sales automation expertise</h5>
                                  </div>
              
              
                                  <div className='bg-[#F8E1BE] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between transform-3d'>
                                      <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                                          <Image src='/assets/polygon2.png' alt='polygon' width={280} height={280} />
                                          <Image src='/assets/sc_icon2.png' alt='polygon' className='absolute' width={200} height={200} unoptimized/>
                                      </div>
                                      <h5 className='text-black text-base font-medium'>Scalable solutions for startups & enterprises</h5>
                                  </div>
              
              
                                  <div className='bg-[#D2CCFA] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between transform-3d'>
                                      <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                                          <Image src='/assets/polygon3.png' alt='polygon' width={300} height={300} />
                                          <Image src='/assets/sc_icon3.png' alt='polygon' className='absolute' width={200} height={200} unoptimized/>
                                      </div>
                                      <h5 className='text-black text-base font-medium'>Get the right message across the right people</h5>
                                  </div>
              
                              </div>

            </div>
        </div>
    );
};

export default LetUsHelp;