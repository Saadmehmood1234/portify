"use client";

import { motion } from 'framer-motion';
import useScrollProgress from '@/hooks/useScrollProgress';
import React, { ReactNode } from 'react';
import Footer from '@/components/Footer';
interface TemplateProps {
    children: ReactNode; // Type for children prop
}

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 }
};

const Template: React.FC<TemplateProps> = ({ children }) => {
    const completion = useScrollProgress();

    return (
        <div>
            <>
                <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
                >
                    {children}
                </motion.main>
                <Footer/>
                <span
                    style={{ transform: `translateY(${completion - 100}%)` }}
                    className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
                ></span>
                {/* <div className="h-[350px]"></div> */}
            </>
        </div>
    );
};

export default Template;
