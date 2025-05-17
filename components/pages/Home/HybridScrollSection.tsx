// 'use client';

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import Image from 'next/image';
// import FadeInRight from '@/components/framermotion/FadeInRight';

//  const cardData = [
//     {
//         title: 'Top 2% Global <br/>Talent',
//         paragraph: 'We select only the best! Every candidate goes through 3 interviews and an IQ test before joining our talent pool, ensuring top-tier expertise for your business.',
//         image: '/assets/new/scroll1.png',
//         style: 'bg-[#FDF2DC] text-white -rotate-[5deg]',
//     },
//     {
//         title: 'On-Site <br/> Support',
//         paragraph: 'No technical obstacles-our resources come with fully equipped workstations, office support, and high-speed internet, ensuring seamless productivity from day one.',
//         image: '/assets/new/scroll5.png',
//         style: 'bg-[#EFEEFD] text-black rotate-[10deg]',
//     },
//     {
//         title: 'Performance <br/> Management',
//         paragraph: 'We set clear KPIs and goal trackers for every employee.<br/>Our dedicated managers monitor their efficiency, ensuring they meet and exceed expectations.',
//         image: '/assets/new/scroll4.png',
//         style: 'bg-[#ECF9F8] text-gray-900 -rotate-[10deg]',
//     },
//     {
//         title: 'Instant <br/>Replacement',
//         paragraph: "No delays, no downtime!<br/>If a resource isn't the right fit or becomes unavailable, we provide an immediate replacement from our talent pool at no extra charge",
//         image: '/assets/new/scroll3.png',
//         style: 'bg-[#FAF9F6] text-white rotate-[10deg]',
//     },
//     {
//         title: 'Continuous <br/>Training',
//         paragraph: 'We ensure every hire is job-ready with 2 weeks of onboarding training.<br/>Plus, monthly sessions from top-tier professionals keep skills sharp and performance high.',
//         image: '/assets/new/scroll2.png',
//         style: 'bg-[#F1FCFF] text-white -rotate-[10deg]',
//     },
// ];





// gsap.registerPlugin(ScrollTrigger);

// type Card = {
//   title: string;
//   paragraph: string;
//   image?: string;
//   style?: string;
// };

// type Props = {
//   cards?: Card[];
// };

// const HybridScrollSection: React.FC<Props> = ({ cards = cardData }) => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const panelsRef = useRef<HTMLDivElement[]>([]);

//   useGSAP(() => {
//     const section = sectionRef.current;
//     const wrapper = wrapperRef.current;
//     const panels = panelsRef.current;

//     if (!section || !wrapper || panels.length === 0) return;

  
//     const tween = gsap.to(panels, {
//       xPercent: -100 * (panels.length - 1),
//       ease: 'none',
//       scrollTrigger: {
//         trigger: section,
//         pin: true,
//         scrub: 1,
//         start: 'center center',
//         end: () => `+=${wrapper.scrollWidth * 1.5}`,
//         invalidateOnRefresh: true,
//         refreshPriority: 1,
//       },
//     });

//     return () => {
//       tween?.kill();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, { scope: sectionRef });

//   return (
//     <div className="bg-[#F6F6F6] my-16 relative py-14 overflow-hidden">
//       {/* Top Shape */}
//       <div className="custom-shape-divider-top-1747344540">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" />
//         </svg>
//       </div>

//       {/* Bottom Shape */}
//       <div className="custom-shape-divider-bottom-1747344583">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" />
//         </svg>
//       </div>

//       <div className="container max-lg:min-h-[60vh] relative md:rounded-[50px] rounded-[30px] overflow-hidden">
//         <FadeInRight once={false} duration={0.8} distance={30}>
//           <h2 className="mx-auto font-roca text-2xl md:text-4xl font-thin text-center pt-16 p-2">
//             Why teams choose BeyondHut?
//           </h2>
//         </FadeInRight>

//         <section ref={sectionRef} className="overflow-hidden relative">
//           <div
//             ref={wrapperRef}
//             className="flex gap-7 md:gap-20 py-10 min-h-[520px] items-center"
//             style={{ width: `${cards.length * 320}px` }}
//           >
//             <div className="h-[500px] bg-[#F6F6F6] w-[150px] absolute -left-24 z-[10] blur-xl max-md:hidden" />
//             <div className="h-[500px] bg-[#F6F6F6] w-[150px] absolute -right-24 z-[10] blur-2xl max-md:hidden" />

//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 ref={el => {
//                   if (el) panelsRef.current[index] = el;
//                 }}
//                 className={`rounded-xl shadow-md p-6 flex flex-col items-start justify-center md:min-w-[300px] w-[280px] min-h-[350px] xl:min-w-[350px] xl:min-h-[450px] md:min-h-[400px] ${card.style}`}
//               >
//                 {card.image && (
//                   <div className="relative w-64 h-48 mb-4">
//                     <Image src={card.image} alt={card.title} width={80} height={100} unoptimized />
//                   </div>
//                 )}
//                 <p className="mb-2 font-roca md:text-3xl text-2xl text-black" dangerouslySetInnerHTML={{ __html: card.title }} />
//                 <p className="text-black text-base" dangerouslySetInnerHTML={{ __html: card.paragraph }} />
//               </div>
//             ))}

//             <div className="absolute inset-0 -z-[1] pointer-events-none overflow-hidden">
//               <div className="relative w-full h-full">
//                 <div className="absolute w-[250px] h-[250px] bg-[#dddbfa] rounded-full blur-3xl opacity-100 lg:bottom-[20%] lg:left-[25%] bottom-[15%] left-0" />
//                 <div className="absolute w-[250px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-100 lg:bottom-[20%] lg:left-[15%] bottom-[13%] left-[10%]" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HybridScrollSection;










'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import FadeInRight from '@/components/framermotion/FadeInRight';

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

gsap.registerPlugin(ScrollTrigger);

type Card = {
  title: string;
  paragraph: string;
  image?: string;
  style?: string;
};

type Props = {
  cards?: Card[];
};

const HybridScrollSection: React.FC<Props> = ({ cards = cardData }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const pathname = usePathname(); // track current route
  const [key, setKey] = useState(0);

  // Force remount on route change
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [pathname]);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const panels = panelsRef.current;

    if (!section || !wrapper || panels.length === 0) return;

    ScrollTrigger.killAll(); // ensure all previous triggers are removed
    gsap.killTweensOf(panels);

    const tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: 'center center',
        end: () => `+=${wrapper.scrollWidth * 1.5}`,
        invalidateOnRefresh: true,
      },
    });

    // Safety timeout in case re-triggering fails
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      tween?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(timeoutId);
    };
  }, [key]);

  return (
    <div key={key} className="bg-[#F6F6F6] my-16 relative py-14 overflow-hidden">
      {/* Top Shape */}
      <div className="custom-shape-divider-top-1747344540">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" />
        </svg>
      </div>

      {/* Bottom Shape */}
      <div className="custom-shape-divider-bottom-1747344583">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" />
        </svg>
      </div>

      <div className="container max-lg:min-h-[60vh] relative md:rounded-[50px] rounded-[30px] overflow-hidden">
        <FadeInRight once={false} duration={0.8} distance={30}>
          <h2 className="mx-auto font-roca text-2xl md:text-4xl font-thin text-center pt-16 p-2">
            Why teams choose BeyondHut?
          </h2>
        </FadeInRight>

        <section ref={sectionRef} className="overflow-hidden relative">
          <div
            ref={wrapperRef}
            className="flex gap-7 md:gap-20 py-10 min-h-[520px] items-center"
            style={{ width: `${cards.length * 320}px` }}
          >
            <div className="h-[500px] bg-[#F6F6F6] w-[150px] absolute -left-24 z-[10] blur-xl max-md:hidden" />
            <div className="h-[500px] bg-[#F6F6F6] w-[150px] absolute -right-24 z-[10] blur-2xl max-md:hidden" />

            {cards.map((card, index) => (
              <div
                key={index}
                ref={el => {
                  if (el) panelsRef.current[index] = el;
                }}
                className={`rounded-xl shadow-md p-6 flex flex-col items-start justify-center md:min-w-[300px] w-[280px] min-h-[350px] xl:min-w-[350px] xl:min-h-[450px] md:min-h-[400px] ${card.style}`}
              >
                {card.image && (
                  <div className="relative w-64 h-48 mb-4">
                    <Image src={card.image} alt={card.title} width={80} height={100} unoptimized />
                  </div>
                )}
                <p className="mb-2 font-roca md:text-3xl text-2xl text-black" dangerouslySetInnerHTML={{ __html: card.title }} />
                <p className="text-black text-base" dangerouslySetInnerHTML={{ __html: card.paragraph }} />
              </div>
            ))}

            {/* Background gradients */}
            <div className="absolute inset-0 -z-[1] pointer-events-none overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-[250px] h-[250px] bg-[#dddbfa] rounded-full blur-3xl opacity-100 lg:bottom-[20%] lg:left-[25%] bottom-[15%] left-0" />
                <div className="absolute w-[250px] h-[250px] bg-[#f8e9ca] rounded-full blur-3xl opacity-100 lg:bottom-[20%] lg:left-[15%] bottom-[13%] left-[10%]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HybridScrollSection;
