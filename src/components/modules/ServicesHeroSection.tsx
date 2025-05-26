"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesHeroSection() {
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
            className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
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
                        className="text-teal-600 mb-3 py-1 px-4 bg-white/90 backdrop-blur-md rounded-full text-teal-50 text-sm font-medium inline-flex items-center"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className=" text-lg">Transformative Wellness Solutions
                        </span>
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                        variants={fadeIn}
                    >
                        Our{" "}
                        <span className="relative z-10">
                            Services
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl mb-10 text-teal-50/90 leading-relaxed text-white"
                        variants={fadeIn}
                    >
                        Comprehensive wellness solutions designed to
                        optimize your healthspan and transform your approach
                        to well-being.
                    </motion.p>

                    <motion.div
                        variants={fadeIn}
                        className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <motion.div
                            whileHover={shouldReduceAnimations ? {} : { scale: 1.05, y: -3 }}
                            transition={shouldReduceAnimations ? {} : {
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Button
                                size="lg"
                                className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                                asChild
                            >
                                <Link href="#individual-services">
                                    Explore Services
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-primary hover:bg-white/80 transition-all duration-300"
                                asChild
                            >
                                <Link href="/connect">
                                    Book a Consultation
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}