import { Check, CircleMinus, X } from 'lucide-react'
import React from 'react'

function FullServices() {
  return (
    <div className='bg-[#F6F6F6] py-10 my-10'>
        <div className='container'>
            <div className='flex flex-col justify-center items-center gap-2'>

                <h2 className="font-roca text-2xl md:text-4xl font-thin text-center">Full service.</h2>
                <p className='mt-1 text-center  text-lg text-[#516371]'> We beat the alternatives across the board.</p>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
                    <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-8 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Recruiters</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2'>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Dedicated</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Fast</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Flexible</li></div>
                            <div className=' flex justify-start items-center gap-3 '><CircleMinus size={15} strokeWidth={3} className='text-[#FFDD87]'/><li >Elite</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Fully Supported</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Dependable</li></div>
                        </ul>
                    </div>


                    <div className='bg-[#65CEEC1A] min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-8 border-[#65CEEC]'>
                        <img src="/assets/new/logo.svg" alt="Logo" className="w-[120px]"/>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2'>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Dedicated</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Fast</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Flexible</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Elite</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Fully Supported</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Dependable</li></div>
                        </ul>
                    </div>




                    <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-8 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Staffing Firms</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2'>
                            <div className=' flex justify-start items-center gap-3 '><CircleMinus size={15} strokeWidth={3} className='text-[#FFDD87]'/><li >Dedicated</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Fast</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Flexible</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Elite</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Fully Supported</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Dependable</li></div>
                        </ul>
                    </div>




                    <div className='bg-white min-h-[250px] flex flex-col min-w-[250px] p-5 rounded-xl border-8 border-[#C6C6C6]'>
                        <h4 className='text-xl font-roca mb-4'>Recruitment Platform</h4>
                        <ul className='text-[#616161] flex flex-col justify-start items-start gap-2'>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Dedicated</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Fast</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Flexible</li></div>
                            <div className=' flex justify-start items-center gap-3 '><X size={15} strokeWidth={3} className='text-[#FF5757]'/><li >Elite</li></div>
                            <div className=' flex justify-start items-center gap-3 '><Check size={15} strokeWidth={3} className='text-[#80E45B]'/><li >Fully Supported</li></div>
                            <div className=' flex justify-start items-center gap-3 '><CircleMinus size={15} strokeWidth={3} className='text-[#FFDD87]'/><li >Dependable</li></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullServices