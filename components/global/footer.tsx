'use client';

import { usePathname } from 'next/navigation';
import { footerLinks1, footerLinks2 } from '@/lib/constants/constants';
import { ArrowRight, Check, Facebook, Instagram, Linkedin, Loader, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import FadeInLeft from '../framermotion/FadeInLeft';
import FadeInBottom from '../framermotion/FadeInBottom';
import FadeInTop from '../framermotion/FadeInTop';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [send, setIsSend] = useState(false);
    const pathname = usePathname();
    if (pathname === '/get-started' || pathname === '/application-form' || pathname.startsWith('/admin-dashboard')) {
        return null;  // Don't render anything
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyF2fK_kQ8cOMZwmgnWQZBBMsVDcD7JY1UiWFBdbaajUesrj4gQH87ah7aZuUcYGfg8/exec", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response) {
                console.log("Subscribe");
                setEmail('');          // Clear the input field
                setIsSend(true);       // Show success message

                // Hide success message and redirect after 3 seconds
                setTimeout(() => {
                    setIsSend(false);
                    window.location.href = '/';  // Redirect to home page
                }, 3000);
            } else {
                console.log("Failed to send email");
            }
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-[#161C28] text-[#A6A6A6] p-8 pt-20 mt-10">
            <div className="container mx-auto">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-8 pt-10">
                    {/* First Column - Email Input */}
                    <div className='col-span-1 md:col-span-4 flex flex-col max-w-[500px] gap-2 justify-start'>
                        <FadeInBottom once={false} distance={70} duration={1}>
                            <div className="md:w-[200px] md:h-[90px] w-[180px] h-[80px] relative">
                                <Image src="/assets/new/logolight.svg" alt="Logo" fill className="object-contain" />
                            </div>
                        </FadeInBottom>


                        <div className='py-3 flex flex-col md:flex-row justify-start md:items-center gap-2 '>
                            <div className='flex justify-start items-center gap-1'>
                                <div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Phone strokeWidth={1} fill='white' color='white' width={20} /></div>
                                <p className='text-white font-light text-sm'>+44 7929 374500</p>
                            </div>
                           <div className='flex justify-start items-center gap-1'>
                             <div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Mail strokeWidth={2} color='white' width={20} /></div>
                            <p className='text-white font-light text-sm'>info@beyondhut.com</p>
                           </div>
                        </div>

                        <p className='max-w-[350px] text-lg'>Subscribe to our newsletter to stay updated with latest updates!!</p>

                        <form onSubmit={handleSubmit} className="border border-gray-100 rounded-full p-2 flex items-center max-w-md">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="outline-none bg-transparent flex-grow px-4 w-full"
                            />
                            <button
                                type="submit"
                                className="p-2 text-white transition-colors bg-[#00B7EB] hover:bg-[#2aa4c6] rounded-full"
                            >
                                {loading ? <Loader /> : <ArrowRight className="h-7 w-7" />}

                            </button>
                        </form>
                        {send && <div className='flex ms-3 gap-3 justify-start items-center'><Check className='w-8 h-8 text-green-800' strokeWidth={5} /><p className='text-[] font-semibold'>Thanks for Subscribing</p></div>}
                        {/* social icons */}
                        <div className='flex justify-start items-center gap-2 mt-3'>
                            <a href='https://www.facebook.com/share/1GnpWaB48q/' target='_blank'><div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Facebook strokeWidth={1} fill='white' color='white' width={20} /></div></a>
                            <a href="https://www.instagram.com/beyondhut?igsh=ZDgzOGJjdWMwdTQx" target='_blank'><div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Instagram fill='white' stroke='#00B7EB' width={21} /></div></a>
                            <a href="https://www.linkedin.com/company/beyondhut/" target='_blank'><div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Linkedin fill='white' strokeWidth={1} color='white' width={20} /></div></a>
                        </div>

                    </div>

                    {/* Second Column - Links */}
                    <div className='col-span-1 md:col-span-2 self-start'>
                        <h3 className="text-lg font-semibold mb-4 text-white font-roca">Our Target Industry</h3>
                        <ul className="space-y-3">
                            {
                                footerLinks1.map((link, i) => (
                                    <li key={i} className='hover:text-gray-300 text-base'>
                                        {link.link ? (
                                            <Link href={link.link} className="hover:cursor-pointer">{link.name}</Link>
                                        ) : (
                                            <span className="hover:cursor-pointer">{link.name}</span>
                                        )}
                                    </li>
                                ))

                            }
                        </ul>
                    </div>

                    {/* Third Column - Links */}
                    <div className='col-span-1 md:col-span-2 self-start'>
                        <h3 className="text-lg font-semibold mb-4 text-white font-roca">Target Organizations</h3>
                        <ul className="space-y-3">
                            {
                                footerLinks2.map((link, i) => (
                                    <li key={i}><a className="hover:cursor-pointer hover:text-gray-300">{link.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Bottom Row - Copyright */}
                <div className="text-center border-t border-gray-700 pt-4 flex md:flex-row flex-col space-y-3 justify-between">

                    <FadeInLeft distance={20} duration={1} once={false}>

                        <p className='text-white font-rocathin'>© 2025 Beyond Hut. Copyright and rights reserved</p>
                    </FadeInLeft>

                    <FadeInTop duration={1} once={false}>
                        <ul className='flex flex-row justify-center items-center gap-10 text-white'>
                            <li className='hover:text-white text-sm md:text-base'>Terms and Condtions</li>
                            <li className='hover:text-white text-sm md:text-base'>Privacy Policy</li>
                        </ul >
                    </FadeInTop>
                </div>
            </div>
        </footer>
    );
};

export default Footer;