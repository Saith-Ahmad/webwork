'use client';
import FadeInBottom from '@/components/framermotion/FadeInBottom'
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HireTopTalent() {
        const pathname = usePathname();
    return (
        <div className='container my-10'>
            <FadeInBottom once={false} distance={60} duration={0.7}>
            <div className='bg-[#78D0EA] flex flex-col md:flex-row justify-around items-center rounded-2xl p-8'>
                <div className="w-[300px] h-[200px]  relative">
                    <Image src="/assets/handshow.png" alt="handshow" fill className="object-contain" />
                </div>

                <div className='flex flex-col justify-center '>
                    <h3 className='text-black text-2xl font-bold text-center md:text-start'>Ready to Hire Top Talent?</h3>
                    <p className='text-base max-w-[450px] text-center md:text-start'>Tell us your needs, and we'll match you with the perfect candidate.</p>
                    <Link href={pathname=='/job-seekers' ? "/application-form" : "/get-started"} className='self-center md:self-start'>
                        <Button className='self-center md:self-start w-[200px] mt-3 bg-white border-[1.4px] border-black px-3 py-1 rounded-lg text-black hover:bg-black hover:text-white' size={'lg'}>Get Started</Button>
                    </Link>
                </div>
            </div>
            </FadeInBottom>
        </div>
    )
}

export default HireTopTalent