'use client';

import { usePathname } from 'next/navigation';
import { footerLinks1, footerLinks2 } from '@/lib/constants/constants';
import { ArrowRight, Check, Facebook, Instagram, Linkedin, Loader } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import FadeInLeft from '../framermotion/FadeInLeft';
import FadeInBottom from '../framermotion/FadeInBottom';
import FadeInTop from '../framermotion/FadeInTop';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [send, setIsSend] = useState(false);
    const pathname = usePathname();
    if (pathname === '/get-started' || pathname === '/application-form' ||  pathname.startsWith('/admin-dashboard')) {
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
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-8">
                    {/* First Column - Email Input */}
                    <div className='col-span-1 md:col-span-6 md:pt-10 flex flex-col max-w-[400px] md:p-5 gap-2 justify-start'>
                        <FadeInBottom once={false} distance={70} duration={1}>
                            <div className="md:w-[120px] md:h-[80px] w-[90px] h-[60px] relative">
                                <Image src="/assets/logo.png" alt="Logo" fill className="object-contain" />
                            </div>
                        </FadeInBottom>

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
                        {send && <div className='flex ms-3 gap-3 justify-start items-center'><Check className='w-8 h-8 text-green-800' strokeWidth={5} /><p className='text-white font-semibold'>Thanks for Subscribing</p></div>}
                        {/* social icons */}
                        <div className='flex justify-start items-center gap-2 mt-3'>
                            <a href='https://www.facebook.com/share/1GnpWaB48q/' target='_blank'><div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Facebook strokeWidth={1} fill='white' color='white' width={20}/></div></a>
                            <a href="https://www.instagram.com/beyondhut?igsh=ZDgzOGJjdWMwdTQx" target='_blank'><div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Instagram fill='white' stroke='#00B7EB'  width={21}/></div></a>
                            <a href="https://www.linkedin.com/company/beyondhut/" target='_blank'><div className='bg-[#00B7EB] p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center hover:scale-105 transition-transform duration-200'><Linkedin fill='white' strokeWidth={1} color='white' width={20}/></div></a>
                        </div>

                    </div>

                    {/* Second Column - Links */}
                    <div className='col-span-1 md:col-span-2'>
                        <h3 className="text-lg font-semibold mb-4 text-white">Our Target Industry</h3>
                        <ul className="space-y-2">
                            {
                                footerLinks1.map((link, i) => (
                                    <li key={i}><a className="">{link.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Third Column - Links */}
                    <div className='col-span-1 md:col-span-2'>
                        <h3 className="text-lg font-semibold mb-4 text-white">Target Organizations</h3>
                        <ul className="space-y-2">
                            {
                                footerLinks2.map((link, i) => (
                                    <li key={i}><a className="">{link.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Bottom Row - Copyright */}
                <div className="text-center border-t border-gray-700 pt-4 flex md:flex-row flex-col space-y-3 justify-between">

                    <FadeInLeft distance={20} duration={1} once={false}>

                        <p className='text-white'>© 2025 Beyond Hut. Copyright and rights reserved</p>
                    </FadeInLeft>

                    <FadeInTop duration={1} once={false}>
                        <ul className='flex flex-row justify-center items-center gap-10 text-white'>
                            <li className='hover:text-white'>Terms and Condtions</li>
                            <li className='hover:text-white'>Privacy Policy</li>
                        </ul>
                    </FadeInTop>
                </div>
            </div>
        </footer>
    );
};

export default Footer;