import FadeInBottom from '@/components/framermotion/FadeInBottom'
import React from 'react'
import { Clock, Handshake, User, Share2 } from 'lucide-react'

function WhatWeDo() {
  const benefits = [
    {
      title: 'Fast',
      subtitle: 'within just a week',
      icon: <Clock className="w-20 h-20 text-[#E59373]" />,
      bg: 'bg-[#F3C8B9]',
    },
    {
      title: 'Dependable',
      subtitle: 'Best longevity. Never worry about retention again.',
      icon: <Handshake className="w-20 h-20 text-[#A48AD4]" />,
      bg: 'bg-[#D5C9F4]',
    },
    {
      title: 'Dedicated',
      subtitle: 'full-time talent through rigorous selection process',
      icon: <User className="w-20 h-20 text-[#D4B369]" />,
      bg: 'bg-[#F4E2BD]',
    },
    {
      title: 'Flexible',
      subtitle: 'Never worry about a bad hire again/ talent replacement',
      icon: <Share2 className="w-24 h-24 text-[#7DA9D9]" />,
      bg: 'bg-[#B9D9F3]',
    },
  ]

  return (
    <div className="container my-28 min-h-[50vh] flex flex-col items-center justify-center">
      <FadeInBottom>
        <h2 className="text-3xl md:text-4xl text-center font-semibold">Talent without hassle</h2>
        <p className="text-black font-medium text-lg mt-4 text-center">
          Fill any position within 8 days!
        </p>
      </FadeInBottom>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {benefits.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.bg} rounded-3xl p-6 flex flex-col justify-between h-72 
              transform transition duration-500 ease-in-out 
              hover:scale-105 hover:shadow-xl
              opacity-0 animate-fade-in-up
            `}
            style={{
              animationDelay: `${index * 300}ms`, // Adjusted delay for slower animation
              animationFillMode: 'forwards',
            }}
          >
            <div>{card.icon}</div>
            <div className="mt-auto">
              <h3 className="text-black font-semibold text-xl mb-2">{card.title}</h3>
              <p className="text-black text-sm">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDo
