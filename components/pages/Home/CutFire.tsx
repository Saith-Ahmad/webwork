
import Image from 'next/image'
import React from 'react'

function CutFire() {
    return (
        <div className='container mt-12'>
            <div className='bg-white shadow-lg shadow-gray-200 md:min-h-[90vh] rounded-3xl   flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='w-full md:max-w-[60%] mt-14 mb-10 p-5'>
                    <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">Cut Hire Time By Half</h2>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Go beyond with us.</p>
                </div>

                <div className='md:p-5 mb-10 p-1'>
                    <img src="/assets/new/cutprice.svg" alt="cutprice" className='w-full'/>
                </div>
            </div>
        </div>



    )
}

export default CutFire