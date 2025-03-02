import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="bg-[#161C28] py-12 rounded-t-3xl rounded-b-3xl  my-20 relative min-h-[100vh]">


            <div className='absolute md:-top-4 -top-1 right-0 w-[100vw]'>
                <img src="/assets/upper_curve.svg" alt="curve" className='w-[100vw]' />
            </div>
            <div className='absolute md:-bottom-4 -bottom-1 right-0 w-[100vw]'>
                <img src="/assets/bottom_curve.svg" alt="curve" className='w-[100vw]' />
            </div>


            <div className="container">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">Why Choose Us?</h2>

                {/* Cards Grid */}
                <div className='flex flex-wrap flex-row justify-center items-center gap-5'>
                    <div className='bg-[#FDFAF1] p-3 flex justify-center flex-col items-center rounded-lg min-w-[250px] transform-scale-shadow'>
                        <Image src={'/assets/chooseicon1.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center'>Pre-vetted global talent</p>
                    </div>
                    <div className='bg-[#FDFAF1] p-3 flex justify-center flex-col items-center rounded-lg min-w-[250px] transform-scale-shadow'>
                        <Image src={'/assets/chooseicon2.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center'>Fast & efficient hiring process</p>
                    </div>
                    <div className='bg-[#FDFAF1] p-3 flex justify-center flex-col items-center rounded-lg min-w-[250px] transform-scale-shadow'>
                        <Image src={'/assets/chooseicon3.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center'>Performance tracking & support</p>
                    </div>
                </div>

                <div className='flex flex-wrap flex-row justify-center items-center gap-5 mt-5'>
                    <div className='bg-[#FDFAF1] p-3 flex justify-center flex-col items-center rounded-lg min-w-[250px] transform-scale-shadow'>
                        <Image src={'/assets/chooseicon4.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center'>Hassle-free talent replacement</p>
                    </div>
                    <div className='bg-[#FDFAF1] p-3 flex justify-center flex-col items-center rounded-lg min-w-[250px] transform-scale-shadow'>
                        <Image src={'/assets/chooseicon5.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center'>Scalable hiring solutions</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WhyChooseUs;