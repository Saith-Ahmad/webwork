'use client'
import { motion, Variants } from 'framer-motion';
import { Scale } from 'lucide-react';
import { ReactNode } from 'react';

interface FadeInBottomProps {
    children: ReactNode;
    duration?: number;
    once?: boolean;
    distance?: number;
}

const FadeInBottom: React.FC<FadeInBottomProps> = ({
    children,
    duration = 0.6,
    once = true,
    distance = 50,
}) => {
    const variants: Variants = {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            transition={{ duration, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInBottom;
