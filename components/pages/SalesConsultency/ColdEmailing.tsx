'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

function ColdEmailing() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
            {[
                { src: '/assets/coldemail1.png', bg: '#D2CCFA', footerBg: '#BAB2F1', text: 'Targeted email copywriting for the right audience.' },
                { src: '/assets/coldemail2.png', bg: '#F3C9B6', footerBg: '#EFB79E', text: 'Complete cold email infrastructure setup.' },
                { src: '/assets/coldemail3.png', bg: '#F8E1BE', footerBg: '#EAC996', text: 'Dedicated IPs & premium domains for high deliverability.' },
                { src: '/assets/coldemail4.png', bg: '#ADD0F3', footerBg: '#8CB2D9', text: 'Leverage partnerships for warm introductions.' },
            ].map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`rounded-lg col-span-1 flex flex-col justify-between items-center`} 
                    style={{ backgroundColor: item.bg }}
                >
                    <div className='p-4 flex justify-center items-center'>
                        <Image src={item.src} alt='Cold Emailing' width={250} height={130} unoptimized />
                    </div>
                    <div className="px-4 py-3 rounded-b-lg w-full text-center text-white" style={{ backgroundColor: item.footerBg }}>
                        <p className='text-base'>{item.text}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ColdEmailing;
