
import React from 'react'

function GrowthPuzzle() {
    return (
        <div className='container mt-12'>
            <div className='bg-white shadow-lg shadow-gray-200 min-h-[100vh] rounded-3xl p-5  flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[70%] mt-14 mb-10'>
                    <h2 className="font-roca text-2xl md:text-4xl font-thin text-center md:max-w-[900px]">We solve the growth puzzle </h2>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>So you can focus on what matters.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-around w-full items-center gap-4'>
                    <div className='bg-[#F8F8F8] min-h-[300px] w-full lg:max-w-[300px] 2xl:max-w-[350px] p-5 rounded-lg'>
                        <h3 className='font-roca text-3xl mb-10'>1</h3>
                        <h3 className='font-roca text-2xl'>Talent hiring <br /> handled</h3>
                        <hr className="border-t-[3px] border-dashed border-black my-4" />
                        <p>End-to-end recruitment,<br /> without the hassle.</p>
                    </div>

                    <div className='bg-[#F8F8F8] min-h-[300px] w-full lg:max-w-[300px] 2xl:max-w-[350px] p-5 rounded-lg'>
                        <h3 className='font-roca text-3xl mb-10'>2</h3>
                        <h3 className='font-roca text-2xl'>Sales processes<br /> automated</h3>
                        <hr className="border-t-[3px] border-dashed border-black my-4" />
                        <p>Let automation drive your <br/> revenue growth.</p>
                    </div>

                    <div className='bg-[#F8F8F8] min-h-[300px] w-full lg:max-w-[300px] 2xl:max-w-[350px] p-5 rounded-lg'>
                        <h3 className='font-roca text-3xl mb-10'>3</h3>
                        <h3 className='font-roca text-2xl'>Scale your team <br/> without overhead</h3>
                        <hr className="border-t-[3px] border-dashed border-black my-4" />
                        <p>Grow fast without adding <br/> complexity or cost.</p>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default GrowthPuzzle