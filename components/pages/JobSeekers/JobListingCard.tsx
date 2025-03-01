import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const JobListingCard = ({ isFirst }:{isFirst:boolean}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-sm overflow-hidden flex flex-col p-5 gap-4">

        <div className='flex gap-3 justify-start items-center mb-4 text-base'>
            <span className='px-3 py-1 border-[1px]  rounded-full border-[#111111] text-[#454545]'>Full Time</span>
            <span className='px-3 py-1 border-[1px] rounded-full border-[#111111] text-[#454545]'>Glendale, CA</span>
        </div>


        <div className='flex gap-2 justify-start items-center '>
            <div className='rounded-full p-1 border-[2px] border-black'>
                <Image src={'/assets/spotify.png'} alt='logo' width={25} height={25}/>
            </div>
            <h3 className='text-2xl font-bold'>Product Manager</h3>
        </div>


        <div className='flex gap-2 justify-start items-center my-2'>
            <p>Marketing | $2,000 - 5,000  / Monthly</p>
        </div>

        <Button className={`w-full rounded-full  ${isFirst ? 'bg-[#79D0EA]' : "bg-transparent border-[1px] text-black border-black hover:bg-black hover:text-white"}`}>Apply Now</Button>
     
    </div>
  );
};

export default JobListingCard;