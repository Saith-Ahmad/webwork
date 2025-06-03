import React from 'react';

function SliderLogos() {
  const logos = [
    '/assets/tool/tool1.png',
    '/assets/tool/tool2.png',
    '/assets/tool/tool3.png',
    '/assets/tool/tool4.png',
    '/assets/tool/tool5.png',
    '/assets/tool/tool6.png',
    '/assets/tool/tool7.png',
    '/assets/tool/tool8.png',
    '/assets/tool/tool9.png',
    '/assets/tool/tool10.png',
    '/assets/tool/tool11.png',
    '/assets/tool/tool12.png',
    '/assets/tool/tool13.png',
  ];

  return (
    <div className='mb-40'>
        <div className='container mt-20'>
            <h2 className='font-roca text-2xl md:text-4xl font-thin text-center'>Tools we Use</h2>
            <p className='mt-3 text-center  text-lg text-[#516371] '>Powerful platforms that help us deliver real results.</p>
        </div>
    <div className="marquee-container my-20">
      <div className="marquee-track md:gap-8 gap-1">
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} className="h-[40px] md:h-[80px] mx-4" alt={`tool-${i}`} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default SliderLogos;
