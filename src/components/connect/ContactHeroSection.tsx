"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHeroSection() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const ref = useRef(null);

    // Initialize client-side state
    useEffect(() => {
        setIsClient(true);

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const checkMotionPreference = () => {
            setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        };

        checkMobile();
        checkMotionPreference();

        window.addEventListener('resize', checkMobile);
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        motionQuery.addEventListener('change', checkMotionPreference);

        return () => {
            window.removeEventListener('resize', checkMobile);
            motionQuery.removeEventListener('change', checkMotionPreference);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const shouldReduceAnimations = !isClient || isMobile || reduceMotion;

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: shouldReduceAnimations
                ? { duration: 0.3 }
                : {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0, y: shouldReduceAnimations ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: shouldReduceAnimations ? 0.3 : 0.6 },
        },
    };

    return (
        <section
            ref={ref}
            className="relative flex items-center justify-center overflow-hidden"
        >
            {/* Background Gradients */}
            <motion.div
                className="absolute inset-0 z-0"
                style={shouldReduceAnimations ? {} : { y: backgroundY }}
            >
                {/* Main teal gradient */}
                <div className="absolute top-0 left-0 w-full h-full primary-gradient"></div>

                {/* Conditional background elements */}
                {isClient && !isMobile && (
                    <>
                        <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-sky-500/20 blur-[120px] opacity-60"></div>
                        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/20 blur-[100px] opacity-60"></div>
                        <div className="absolute top-1/3 left-0 w-[25rem] h-[25rem] rounded-full bg-amber-400/10 blur-[80px] opacity-70"></div>
                    </>
                )}
            </motion.div>

            {/* Content container */}
            <div className="container mx-auto px-4 relative z-20 pt-28 pb-12">
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        variants={fadeIn}
                        className="badge-teal"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-base">
                            Get in touch
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                        variants={fadeIn}
                    >
                        Contact{" "}
                        <span className="relative z-10">
                            Us
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl mb-10 text-teal-50/90 leading-relaxed"
                        variants={fadeIn}
                    >
                        Choose how you'd like to connect with us. We're
                        here to answer your questions and help you begin
                        your wellness journey.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}