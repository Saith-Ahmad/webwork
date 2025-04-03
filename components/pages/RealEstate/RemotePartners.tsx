import Image from "next/image";
import Link from "next/link";
import React from "react";

const RemotePartners = () => {
    return (
        <section className="py-16 container  text-center">
            {/* Small Heading */}
            <p className="text-sm uppercase text-gray-900 tracking-wide">
                Why Beyond Hut
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Our Remote Staffing Partner
            </h2>

            {/* Button */}
            <div className="mt-6">
                <Link href={'/get-started'}>
                    <button className="px-6 py-3 bg-white text-black font-medium border-none rounded-full shadow-sm hover:bg-gray-100 transition">
                        Book a demo
                    </button>
                </Link>

            </div>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: "/assets/partner1.svg", title: "Flexible hiring" },
                    { icon: "/assets/partner2.svg", title: "Zero downtime" },
                    { icon: "/assets/partner3.svg", title: "KPI supervision" },
                    { icon: "/assets/partner4.svg", title: "Fully managed service" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="p-10 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition hover:shadow-lg"
                    >
                        <div className="w-16 h-16 bg-[#00AEEF] rounded-lg flex items-center justify-center">
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                        </div>
                        <p className="mt-4 text-lg font-medium text-gray-900">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RemotePartners;
