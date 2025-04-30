// 'use client';
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import FadeInBottom from '@/components/framermotion/FadeInBottom';
// import FadeInRight from '@/components/framermotion/FadeInRight';

// // Register ScrollTrigger plugin
// if (typeof window !== 'undefined') {
//     gsap.registerPlugin(ScrollTrigger);
// }

// // Define the array of card data
// const cardData = [
//     {
//         title: 'Top 2% Global <br/>Talent',
//         paragraph: 'We select only the best! Every candidate goes through 3 interviews and an IQ test before joining our talent pool, ensuring top-tier expertise for your business.',
//         image: '/assets/new/scroll1.png',
//         style: 'bg-[#FDF2DC] text-white -rotate-[5deg]',
//     },
//     {
//         title: 'On-Site <br/> Support',
//         paragraph: 'No technical obstacles-our resources come with fully equipped workstations, office support, and high-speed internet, ensuring seamless productivity from day one.',
//         image: '/assets/new/scroll2.png',
//         style: 'bg-[#EFEEFD] text-black rotate-[10deg]',
//     },
//     {
//         title: 'Performance <br/> Management',
//         paragraph: 'We set clear KPIs and goal trackers for every employee.<br/>Our dedicated managers monitor their efficiency, ensuring they meet and exceed expectations.',
//         image: '/assets/new/scroll3.png',
//         style: 'bg-[#ECF9F8] text-gray-900 -rotate-[10deg]',
//     },
//     {
//         title: 'Instant <br/>Replacement',
//         paragraph: "No delays, no downtime!<br/>If a resource isn't the right fit or becomes unavailable, we provide an immediate replacement from our talent pool at no extra charge",
//         image: '/assets/new/scroll4.png',
//         style: 'bg-[#FAF9F6] text-white rotate-[10deg]',
//     },
//     {
//         title: 'Continuous <br/>Training',
//         paragraph: 'We ensure every hire is job-ready with 2 weeks of onboarding training.<br/>Plus, monthly sessions from top-tier professionals keep skills sharp and performance high.',
//         image: '/assets/new/scroll5.png',
//         style: 'bg-[#F1FCFF] text-white -rotate-[10deg]',
//     },
// ];

// const HybridScrollSection = ({ cards = cardData }) => {
//     const horizontalSectionRef = useRef<HTMLElement | null>(null);
//     const horizontalWrapperRef = useRef<HTMLDivElement | null>(null);
//     const panelsRef = useRef<HTMLDivElement[]>([]);

//     useEffect(() => {
//         if (typeof window !== 'undefined' && horizontalSectionRef.current && horizontalWrapperRef.current && panelsRef.current.length > 0) {
//             const horizontalSection = horizontalSectionRef.current;
//             const horizontalWrapper = horizontalWrapperRef.current;
//             const panels = panelsRef.current;

//             gsap.to(panels, {
//                 xPercent: -100 * (panels.length - 1),
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: horizontalSection,
//                     pin: true,
//                     scrub: 1,
//                     start: "top top",
//                     end: () => {
//                         return horizontalWrapper ? "+=" + (horizontalWrapper.offsetWidth * 1.5) : "+=1000";
//                     },
//                     invalidateOnRefresh: true,
//                 }
//             });

//             return () => {
//                 ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//             };
//         }
//     }, [cards]); // Re-run effect if the cards array changes

//     return (
//         <div className='container mt-12 '>
//             <div className='bg-white shadow-lg shadow-gray-200 md:min-h-[100vh] rounded-3xl p-5'>
//                 <FadeInRight once={false} duration={0.8} distance={30} >
//                     <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mt-6">Why teams choose BeyondHut?</h2>
//                 </FadeInRight>
//                 <section
//                     ref={horizontalSectionRef}
//                     className={`overflow-hidden mt-11 pt-10`}
//                 >
//                     <div ref={horizontalWrapperRef} className="z-[20] md:min-h-[80vh] min-h-[50vh]  flex md:gap-20 gap-2 overflow-hidden relative">
//                         {cards.map((card, index) => (
//                             <div
//                                 key={index}
//                                 ref={(el) => {
//                                     if (el) {
//                                         panelsRef.current[index] = el;
//                                     }
//                                 }}
//                                 className={`mt-10 min-w-[300px] h-[350px] flex flex-col items-start justify-center p-5 ${card.style}`}
//                             >
//                                 {card.image && (
//                                     <div className="relative w-64 h-48 mb-4">
//                                         <Image src={card.image} alt={card.title} width={80} height={100} unoptimized />
//                                     </div>
//                                 )}
//                                 {card.title && (
//                                     <p
//                                         className="mb-2 font-roca text-2xl text-black"
//                                         dangerouslySetInnerHTML={{ __html: card.title }}
//                                     />
//                                 )}
//                                 {card.paragraph && (
//                                     <p
//                                         className="text-black"
//                                         dangerouslySetInnerHTML={{ __html: card.paragraph }}
//                                     />
//                                 )}
//                                 {/* You can add more custom elements based on your card object */}
//                             </div>
//                         ))}


//                         <div className="absolute inset-0 -z-[1] pointer-events-none overflow-hidden">
//                             <div className="relative w-full h-full glow-animation">
//                                 {/* Purple Glow */}
//                                 <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#A78BFA] rounded-full blur-3xl opacity-50 bottom-0 left-0"></div>

//                                 {/* Sky Blue Glow */}
//                                 <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7DD3FC] rounded-full blur-3xl opacity-50 bottom-20 left-30"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default HybridScrollSection;






'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import FadeInBottom from '@/components/framermotion/FadeInBottom';
import FadeInRight from '@/components/framermotion/FadeInRight';

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
        image: '/assets/new/scroll2.png',
        style: 'bg-[#EFEEFD] text-black rotate-[10deg]',
    },
    {
        title: 'Performance <br/> Management',
        paragraph: 'We set clear KPIs and goal trackers for every employee.<br/>Our dedicated managers monitor their efficiency, ensuring they meet and exceed expectations.',
        image: '/assets/new/scroll3.png',
        style: 'bg-[#ECF9F8] text-gray-900 -rotate-[10deg]',
    },
    {
        title: 'Instant <br/>Replacement',
        paragraph: "No delays, no downtime!<br/>If a resource isn't the right fit or becomes unavailable, we provide an immediate replacement from our talent pool at no extra charge",
        image: '/assets/new/scroll4.png',
        style: 'bg-[#FAF9F6] text-white rotate-[10deg]',
    },
    {
        title: 'Continuous <br/>Training',
        paragraph: 'We ensure every hire is job-ready with 2 weeks of onboarding training.<br/>Plus, monthly sessions from top-tier professionals keep skills sharp and performance high.',
        image: '/assets/new/scroll5.png',
        style: 'bg-[#F1FCFF] text-white -rotate-[10deg]',
    },
];

const HybridScrollSection = ({ cards = cardData }) => {
    const horizontalSectionRef = useRef<HTMLElement | null>(null);
    const horizontalWrapperRef = useRef<HTMLDivElement | null>(null);
    const panelsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && horizontalSectionRef.current && horizontalWrapperRef.current && panelsRef.current.length > 0) {
            const horizontalSection = horizontalSectionRef.current;
            const horizontalWrapper = horizontalWrapperRef.current;
            const panels = panelsRef.current;

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalSection,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => {
                        return horizontalWrapper ? "+=" + (horizontalWrapper.offsetWidth * 1.5) : "+=1000";
                    },
                    invalidateOnRefresh: true,
                }
            });

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [cards]); // Re-run effect if the cards array changes

    return (
        <div className='container mt-12 '>
            <div className='bg-white shadow-lg shadow-gray-200 md:min-h-[100vh] rounded-3xl p-5'>
                <FadeInRight once={false} duration={0.8} distance={30} >
                    <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mt-6">Why teams choose BeyondHut?</h2>
                </FadeInRight>
                <section
                    ref={horizontalSectionRef}
                    className={`overflow-hidden mt-11 pt-10`}
                >
                    <div
                        ref={horizontalWrapperRef}
                        className={`z-[20] md:min-h-[80vh] min-h-[50vh] flex gap-20 overflow-hidden scroll-smooth relative`} // Changed overflow-hidden to overflow-x-scroll
                        style={{ width: `calc(${cards.length} * 300px + (${cards.length} - 1) * 20px)` }} // Explicitly set the width of the wrapper
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) {
                                        panelsRef.current[index] = el;
                                    }
                                }}
                                className={`mt-10 min-w-[300px] h-[350px] flex flex-col items-start justify-center p-5 ${card.style}`}
                            >
                                {card.image && (
                                    <div className="relative w-64 h-48 mb-4">
                                        <Image src={card.image} alt={card.title} width={80} height={100} unoptimized />
                                    </div>
                                )}
                                {card.title && (
                                    <p
                                        className="mb-2 font-roca text-2xl text-black"
                                        dangerouslySetInnerHTML={{ __html: card.title }}
                                    />
                                )}
                                {card.paragraph && (
                                    <p
                                        className="text-black"
                                        dangerouslySetInnerHTML={{ __html: card.paragraph }}
                                    />
                                )}
                                {/* You can add more custom elements based on your card object */}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HybridScrollSection;