
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import FadeInRight from '@/components/framermotion/FadeInRight';
import useRouteScrollReset from '@/hooks/useRouteScrollReset';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Define the array of card data
const cardData = [
    {
        title: 'Top 2% Global <br/>Talent',
        paragraph: 'We select only the best! Every candidate goes through 3 interviews and an IQ test before joining our talent pool, ensuring top-tier expertise for your business.',
        image: '/assets/new/scroll1.png',
        style: 'bg-[#FDF2DC] text-white -rotate-[5deg]',
    },
    {
        title: 'On-Site <br/> Support',
        paragraph: 'No technical obstacles-our resources come with fully equipped workstations, office support, and high-speed internet, ensuring seamless productivity from day one.',
        image: '/assets/new/scroll5.png',
        style: 'bg-[#EFEEFD] text-black rotate-[10deg]',
    },
    {
        title: 'Performance <br/> Management',
        paragraph: 'We set clear KPIs and goal trackers for every employee.<br/>Our dedicated managers monitor their efficiency, ensuring they meet and exceed expectations.',
        image: '/assets/new/scroll4.png',
        style: 'bg-[#ECF9F8] text-gray-900 -rotate-[10deg]',
    },
    {
        title: 'Instant <br/>Replacement',
        paragraph: "No delays, no downtime!<br/>If a resource isn't the right fit or becomes unavailable, we provide an immediate replacement from our talent pool at no extra charge",
        image: '/assets/new/scroll3.png',
        style: 'bg-[#FAF9F6] text-white rotate-[10deg]',
    },
    {
        title: 'Continuous <br/>Training',
        paragraph: 'We ensure every hire is job-ready with 2 weeks of onboarding training.<br/>Plus, monthly sessions from top-tier professionals keep skills sharp and performance high.',
        image: '/assets/new/scroll2.png',
        style: 'bg-[#F1FCFF] text-white -rotate-[10deg]',
    },
];

const HybridScroll2 = ({ cards = cardData }) => {
      useRouteScrollReset();
    const horizontalSectionRef = useRef<HTMLElement | null>(null);
    const horizontalWrapperRef = useRef<HTMLDivElement | null>(null);
    const panelsRef = useRef<HTMLDivElement[]>([]);

useEffect(() => {
    if (!horizontalSectionRef.current || !horizontalWrapperRef.current || panelsRef.current.length === 0) return;

    const horizontalSection = horizontalSectionRef.current;
    const horizontalWrapper = horizontalWrapperRef.current;
    const panels = panelsRef.current;

    const tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontalSection,
            pin: true,
            scrub: 2,
            start: "center center",
            end: () => "+=" + (horizontalWrapper.offsetWidth * 1.5),
            invalidateOnRefresh: true,
        }
    });

    // ✅ Important to refresh ScrollTrigger after a slight delay
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf(panels);
    };
}, [cards]);


    return (
        <div className='container mt-16'>
            <div className='bg-white shadow-lg shadow-gray-200 max-lg:min-h-[60vh] relative md:rounded-[50px] rounded-[30px]'>
                <FadeInRight once={false} duration={0.8} distance={30} >
                    <h2 className="font-roca text-2xl md:text-4xl font-thin text-center pt-16 p-2">Why teams choose BeyondHut?</h2>
                </FadeInRight>
                <section
                    ref={horizontalSectionRef}
                    className={`overflow-x-hidden`}
                >
                    <div
                        ref={horizontalWrapperRef}
                        className={`z-[20]  min-h-[500px] py-10 flex  items-center gap-7 md:gap-20  overflow-hidden scroll-smooth relative`}
                        style={{ width: `${cards.length * 300}px` }} 
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) {
                                        panelsRef.current[index] = el;
                                    }
                                }}
                                className={` md:mt-10 mt-4 rounded-xl md:min-h-[400px] shadow-md md:min-w-[300px] md:h-[380px] min-h-[350px] w-[280px] flex flex-col items-start justify-center p-6 ${card.style}`}
                            >
                                {card.image && (
                                    <div className="relative w-64 h-48 mb-4">
                                        <Image src={card.image} alt={card.title} width={80} height={100} unoptimized />
                                    </div>
                                )}
                                {card.title && (
                                    <p
                                        className="mb-2 font-roca md:text-3xl text-2xl text-black"
                                        dangerouslySetInnerHTML={{ __html: card.title }}
                                    />
                                )}
                                {card.paragraph && (
                                    <p
                                        className="text-black text-base "
                                        dangerouslySetInnerHTML={{ __html: card.paragraph }}
                                    />
                                )}
                                {/* You can add more custom elements based on your card object */}
                            </div>
                        ))}


                        <div className="absolute inset-0 -z-[1] pointer-events-none overflow-hidden">
                            <div className="relative w-full h-full">
                                <div className="absolute  w-[250px] h-[250px] bg-[#dddbfa] rounded-full blur-3xl opacity-100 lg:bottom-[20%] lg:left-[25%] bottom-[15%] left-0"></div>
                                <div className="absolute w-[250px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-100 lg:bottom-[20%] lg:left-[15%] bottom-[13%] left-[10%]"></div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HybridScroll2;

