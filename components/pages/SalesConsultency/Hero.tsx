'use client'
import { Button } from '@/components/ui/button'
import { ListFilterPlus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import LeadGeneration from './LeadGeneration'
import ColdEmailing from './ColdEmailing'
import CRMs from './CRMs'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInRight from '@/components/framermotion/FadeInRight'
import Link from 'next/link'


function SalesConsultencyHero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState<'LeadGeneration' | 'Email' | 'CRM'>('LeadGeneration');
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);

        // Auto-close the menu after 4 seconds
        if (!isMenuOpen) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 4000);
        }
    };

    const handleOptionClick = () => {
        setIsMenuOpen(false);
    };


    return (
        <div>
            <div className='relative min-h-[100vh] md:min-h-[120vh] bg-[#78D0EA] flex -z-[10] overflow-hidden  items-center justify-between py-16 md:pt-0'>
                <div className='flex flex-col space-y-10 items-center justify-center container'>
                    {/* Rirst Row */}
                    <div className=' flex flex-col md:flex-row justify-between items-center'>

                        <div className='w-[100vw] absolute md:-bottom-10 -bottom-[5px] right-0'>
                            <img src='/assets/shape_hero.svg' className=' w-[100vw]' />
                        </div>


                        <div className='md:p-10 p-3 flex flex-col gap-2'>
                            <FadeInLeft duration={0.6} once={false} distance={40}>
                            <h1 className='text-4xl md:text-5xl font-bold text-white max-w-[450px]'>Optimize Sales, Automate Growth</h1>
                            </FadeInLeft>
                            <div className='max-w-[500px]'>
                                <FadeInBottom once={false} duration={0.8}>
                                <Image alt='Remote Talent Aquisition' src={'/assets/line.svg'} width={400} height={10} />
                                </FadeInBottom>
                            </div>
                            <p className='text-white font-medium text-lg mt-4'>We help businesses streamline sales, automate outreach, and boost conversions with expert strategies & cutting-edge tools.</p>

                            <Link href={'/get-started'}>
                            <Button className='self-start mt-4 bg-white text-black rounded-full hover:bg-black hover:text-white' size={'lg'}>Boost Your Sales with Automation</Button>
                            </Link>
                        </div>

                        <div className='md:max-w-[40%] mt-10 md:mt-0 relative'>
                        <div className='absolute md:w-[550px] md:h-[550px] z-[-4] rounded-2xl  md:-top-20 md:-left-10 md:rotate-[25deg] rotate-[55deg] w-[450px] h-[450px] top-24  sm:top-0 sm:left-20  inset-0 bg-[#9BE4FA]'></div>
                            <FadeInRight duration={0.7} distance={60} once={false}>
                            <Image alt='Remote Talent Aquisition' src={'/assets/sc_hero.png'} width={800} height={600} />
                            </FadeInRight>
                        </div>


                    </div>

                    {/* 2nd row */}
                    <div className='bg-white  md:grid-cols-4 my-16 mb-28 p-3 px-6 rounded-lg hidden md:grid'>
                        <div className='col-span-1 flex flex-row justify-start items-center'>
                            <h4 className='text-black md:text-2xl text-xl font-bold'>Key Services</h4>
                            <div className='w-[1px] h-[30px]  bg-gray-500 ms-5'></div>
                        </div>
                        <div className='col-span-1'>
                            <Button className={`rounded-md text-black  hover:bg-gray-300 ${showContent=='LeadGeneration' ? "bg-[#78D0EA33]" : 'bg-transparent border-[1px] border-black'}`} onClick={()=>setShowContent('LeadGeneration')}>Content and Lead Generation</Button>
                        </div>

                        <div className='col-span-1'>
                            <Button className={`rounded-md text-black  hover:bg-gray-300 ${showContent=='Email' ? "bg-[#78D0EA33]" : 'bg-transparent border-[1px] border-black'}`} onClick={()=>setShowContent('Email')}>Cold Emailing Infrastructure</Button>
                        </div>

                        <div className='col-span-1'>
                            <Button className={`rounded-md text-black  hover:bg-gray-300 ${showContent=='CRM' ? "bg-[#78D0EA33]" : 'bg-transparent border-[1px] border-black'}`} onClick={()=>setShowContent('CRM')}> CRMs, Automations & Integration</Button>
                        </div>
                    </div>

                    <div className='bg-white flex flex-col rounded-lg my-16 mb-28 p-4 relative md:hidden'>
                        {/* Filter Bar */}
                        <div
                            className='flex flex-row justify-between items-center gap-10 cursor-pointer'
                            onClick={handleMenuToggle}
                        >
                            <h4 className='text-black text-xl font-bold'>Key Services</h4>
                            <ListFilterPlus color='black' strokeWidth={2} />
                        </div>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className='mt-4 space-y-2 absolute bg-white p-4 rounded-lg shadow-lg bottom-[60px] -left-10 w-[300px]'>
                                <div
                                    className={`rounded-md text-black  hover:bg-gray-300 p-2 ${showContent=='LeadGeneration' ? "bg-[#78D0EA33]" : 'bg-transparent border-[1px] border-black'}`}
                                    onClick={()=>{setShowContent('LeadGeneration'); handleOptionClick()}}
                                >
                                    Content and Lead Generation
                                </div>
                                <div
                                    className={`rounded-md text-black  hover:bg-gray-300 p-2 ${showContent=='Email' ? "bg-[#78D0EA33]" : 'bg-transparent border-[1px] border-black'}`}
                                    onClick={()=>{setShowContent('Email'); handleOptionClick()}}
                                >
                                    Cold Emailing Infrastructure
                                </div>
                                <div
                                    className={`rounded-md text-black  hover:bg-gray-300 p-2 ${showContent=='CRM' ? "bg-[#78D0EA33]" : 'bg-transparent border-[1px] border-black'}`}
                                    onClick={()=>{setShowContent('CRM'); handleOptionClick()}}
                                >
                                    CRMs, Automations & Integration
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='container my-10'>
                {showContent=='LeadGeneration' && <LeadGeneration/>}
                {showContent=='Email' && <ColdEmailing/>}
                {showContent=='CRM' && <CRMs/>}
            </div>
        </div>
    )
}

export default SalesConsultencyHero