import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="bg-[#161C28] py-12 rounded-t-3xl rounded-b-3xl my-20 relative min-h-[95vh] flex flex-col items-center justify-center">
            {/* Top and Bottom Curves */}
            <div className='absolute md:-top-4 -top-1 right-0 w-[100vw]'>
                <img src="/assets/upper_curve.svg" alt="curve" className='w-[100vw]' />
            </div>
            <div className='absolute md:-bottom-4 -bottom-1 right-0 w-[100vw]'>
                <img src="/assets/bottom_curve.svg" alt="curve" className='w-[100vw]' />
            </div>

            <div className="container px-4">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">Why Hire with Us?</h2>

                {/* Cards Grid - Combined */}
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    {/* Card 1 */}
                    <div className='bg-[#FDFAF1] p-4 flex justify-center flex-col items-center rounded-lg min-w-[250px] max-w-[350px] transform-scale-shadow h-[240px]'>
                        <Image src={'/assets/chooseicon1.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center mt-3'>
                            Pre-vetted global talent with Rigorous selection process
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className='bg-[#FDFAF1] p-4 flex justify-center flex-col items-center rounded-lg min-w-[250px] max-w-[350px] transform-scale-shadow h-[240px]'>
                        <Image src={'/assets/chooseicon2.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center mt-3'>
                            Fast & efficient end to end hiring process
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className='bg-[#FDFAF1] p-4 flex justify-center flex-col items-center rounded-lg min-w-[250px] max-w-[350px] transform-scale-shadow h-[240px]'>
                        <Image src={'/assets/chooseicon3.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center mt-3'>
                            Performance tracking & support with dedicated project managers
                        </p>
                    </div>
                  
                </div>



                <div className='flex flex-wrap justify-center items-center gap-5 mt-7'>
                    {/* Card 4 */}
                    <div className='bg-[#FDFAF1] p-4 flex justify-center flex-col items-center rounded-lg min-w-[250px] max-w-[350px] transform-scale-shadow h-[240px]'>
                        <Image src={'/assets/chooseicon4.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center mt-3'>
                            Hassle-free talent replacement from trained talent pool
                        </p>
                    </div>
                    {/* Card 5 */}
                    <div className='bg-[#FDFAF1] p-4 flex justify-center flex-col items-center rounded-lg min-w-[250px] max-w-[350px] transform-scale-shadow h-[240px]'>
                        <Image src={'/assets/chooseicon5.png'} alt='icon' width={150} height={150} />
                        <p className='text-black text-base font-semibold text-center mt-3'>
                            Scalable hiring solutions with regular trainings
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
