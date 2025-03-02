'use client'
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInRightProps {
    children: ReactNode;
    duration?: number;         // Optional: Controls animation duration
    once?: boolean;            // Optional: Controls if animation runs once or every time
    distance?: number;         // Optional: Controls the horizontal displacement
}

const FadeInRight: React.FC<FadeInRightProps> = ({
    children,
    duration = 0.6,
    once = true,
    distance = 50,
}) => {
    // Animation variants
    const variants: Variants = {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
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

export default FadeInRight;
