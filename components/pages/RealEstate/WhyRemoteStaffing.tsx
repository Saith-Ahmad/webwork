// 'use client'
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// function WhyRemoteStaffing() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   const benefits = [
//     {
//       title: "Trained Talent",
//       description: "UK property law, CRMs, and more.",
//       icon: "🔍",
//     },
//     {
//       title: "Faster Hiring",
//       description: "Go from role request to onboarding in days.",
//       icon: "⚡",
//     },
//     {
//       title: "Up to 70% Cost Savings",
//       description: "Hire quality talent at a fraction of UK rates.",
//       icon: "💰",
//     },
//     {
//       title: "Managed Infrastructure",
//       description: "We take care of setup, connectivity, and tech.",
//       icon: "🔧",
//     },
//   ];

//   return (
//     <div className="container py-10">
//       <h2 className='text-black text-3xl md:text-4xl text-center md:my-20 mt-10 mb-14 font-semibold'>Why Remote Staffing Works For Real Estate</h2>


//         <div className="flex justify-center items-center gap-7">
//             <div className=" bg-[#F3C9B6] p-5 flex flex-col rounded-md min-w-[350px]">
//                 <div className="flex flex-col">
//                     <h5 className="font-semibold text-xl">Pre-Trained Talent</h5>
//                     <p>Trained in UK property law, CRMs, and lettings.</p>
//                 </div>
//                 <Image src='/assets/rs_1.png' alt="remote talent" width={200} height={200} className="my-2 self-center"/>
//             </div>

//             <div className=" bg-[#D2CCFA] p-5 flex flex-col-reverse rounded-md max-w-[350px]">
//                 <div className="flex flex-col">
//                     <h5 className="font-semibold text-xl">Faster Hiring</h5>
//                     <p>Go from role request to onboarding in days.</p>
//                 </div>
//                 <Image src='/assets/rs_2.png' alt="remote talent" width={200} height={200} className="my-2 self-center"/>
//             </div>

//             <div className=" bg-[#F8E1BE] p-5 flex flex-col-reverse rounded-md max-w-[350px]">
//                 <div className="flex flex-col">
//                     <h5 className="font-semibold text-xl">Up to 70% Cost Savings</h5>
//                     <p>Hire quality talent at a fraction of UK rates.</p>
//                 </div>
//                 <Image src='/assets/rs_4.png' alt="remote talent" width={200} height={200} className="my-2 self-center"/>
//             </div>

//             <div className=" bg-[#ADD0F3] p-5 flex flex-col rounded-md max-w-[350px]">
//                 <div className="flex flex-col">
//                     <h5 className="font-semibold text-xl">Managed Infrastructure</h5>
//                     <p>We take care of setup, connectivity, and tech.</p>
//                 </div>
//                 <Image src='/assets/rs_3.png' alt="remote talent" width={200} height={200} className="my-2 self-center"/>
//             </div>
//         </div>
//       {/* <Slider {...settings}>
//         {benefits.map((benefit, index) => (
//           <div key={index} className="p-4">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//               <div className="text-4xl">{benefit.icon}</div>
//               <h3 className="text-xl font-semibold mt-4">{benefit.title}</h3>
//               <p className="text-gray-600 mt-2">{benefit.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider> */}
//     </div>
//   );
// }

// export default WhyRemoteStaffing;








'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function WhyRemoteStaffing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "50px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  const benefits = [
    {
      title: "Pre-Trained Talent",
      description: "Trained in UK property law, CRMs, and lettings.",
      image: "/assets/rs_1.png",
      bgColor: "bg-[#F3C9B6]",
      flexStyle: "flex-col", // Normal Layout
    },
    {
      title: "Faster Hiring",
      description: "Go from role request to onboarding in days.",
      image: "/assets/rs_2.png",
      bgColor: "bg-[#D2CCFA]",
      flexStyle: "flex-col-reverse", // Image Below Text
    },
    {
      title: "Up to 70% Cost Savings",
      description: "Hire quality talent at a fraction of UK rates.",
      image: "/assets/rs_4.png",
      bgColor: "bg-[#F8E1BE]",
      flexStyle: "flex-col-reverse", // Image Below Text
    },
    {
      title: "Managed Infrastructure",
      description: "We take care of setup, connectivity, and tech.",
      image: "/assets/rs_3.png",
      bgColor: "bg-[#ADD0F3]",
      flexStyle: "flex-col", // Normal Layout
    },
  ];

  return (
    <div className="container py-10 overflow-hidden">
      <h2 className="text-black text-3xl md:text-4xl text-center md:my-20 mt-10 mb-14 font-semibold">
        Why Remote Staffing Works For Real Estate
      </h2>

      <Slider {...settings}>
        {benefits.map((benefit, index) => (
          <div key={index} className="p-4">
            <div className={`${benefit.bgColor} p-5 flex justify-center ${benefit.flexStyle} rounded-md max-w-[350px] mx-auto min-h-[350px]`}>
              <div className="flex flex-col ">
                <h5 className="font-semibold text-xl">{benefit.title}</h5>
                <p>{benefit.description}</p>
              </div>
              <Image
                src={benefit.image}
                alt="remote talent"
                width={200}
                height={200}
                className="my-2 self-center"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default WhyRemoteStaffing;
