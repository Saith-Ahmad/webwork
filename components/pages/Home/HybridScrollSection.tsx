'use client';

import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    title: 'Top 2% Global <br/>Talent',
    paragraph:
      'We select only the best! Every candidate goes through 3 interviews and an IQ test before joining our talent pool, ensuring top-tier expertise for your business.',
    image: '/assets/new/scroll1.png',
    style: 'bg-[#FDF2DC] text-black',
  },
  {
    title: 'On-Site <br/> Support',
    paragraph:
      'No technical obstacles—our resources come with fully equipped workstations, office support, and high-speed internet, ensuring seamless productivity from day one.',
    image: '/assets/new/scroll5.png',
    style: 'bg-[#EFEEFD] text-black',
  },
  {
    title: 'Performance <br/> Management',
    paragraph:
      'We set clear KPIs and goal trackers for every employee.<br/>Our dedicated managers monitor their efficiency, ensuring they meet and exceed expectations.',
    image: '/assets/new/scroll4.png',
    style: 'bg-[#ECF9F8] text-gray-900',
  },
  {
    title: 'Instant <br/>Replacement',
    paragraph:
      "No delays, no downtime!<br/>If a resource isn't the right fit or becomes unavailable, we provide an immediate replacement from our talent pool at no extra charge",
    image: '/assets/new/scroll3.png',
    style: 'bg-[#FAF9F6] text-black',
  },
  {
    title: 'Continuous <br/>Training',
    paragraph:
      'We ensure every hire is job-ready with 2 weeks of onboarding training.<br/>Plus, monthly sessions from top-tier professionals keep skills sharp and performance high.',
    image: '/assets/new/scroll2.png',
    style: 'bg-[#F1FCFF] text-black',
  },
];

const HybridScrollSection = () => {
  return (
    <div className="relative py-14 bg-[#F6F6F6] overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-thin text-center mb-10 px-4 font-roca">
        Why teams choose BeyondHut?
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 hide-scrollbar">
        <div className="flex gap-8 w-max">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`snap-start shrink-0 w-[280px] md:w-[350px] min-h-[400px] p-6 rounded-2xl shadow-md flex flex-col items-start justify-center ${card.style}`}
            >
              {card.image && (
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={card.image}
                    alt="Card image"
                    width={80}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              )}
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <p
                className="text-base"
                dangerouslySetInnerHTML={{ __html: card.paragraph }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HybridScrollSection;
