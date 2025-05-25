"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { successMetrics, testimonial } from "@/lib/constants/services";

export default function ResultsSection() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const resultsRef = useRef<HTMLDivElement>(null);

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

    const isResultsInView = useInView(resultsRef, {
        once: true,
        amount: isClient && isMobile ? 0.1 : 0.3
    });

    const shouldReduceAnimations = !isClient || isMobile || reduceMotion;

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
            ref={resultsRef}
            className="py-20 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden"
        >
            {/* Conditional animated background */}
            {isClient && !isMobile && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-teal-500/10"
                                style={{
                                    width: Math.random() * 12 + 4 + "px",
                                    height: Math.random() * 12 + 4 + "px",
                                    top: Math.random() * 100 + "%",
                                    left: Math.random() * 100 + "%",
                                }}
                                animate={{
                                    y: [0, -100],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            <Container className="relative z-10">
                <motion.div
                    initial="hidden"
                    animate={isResultsInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Proven Impact
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        OUR RESULTS
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Measurable outcomes that demonstrate the power of
                        our evidence-informed approach
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {successMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={shouldReduceAnimations ? {} : { opacity: 0, y: 20, scale: 0.95 }}
                            animate={
                                isResultsInView && !shouldReduceAnimations
                                    ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 12,
                                            delay: 0.1 * index,
                                        },
                                    }
                                    : isResultsInView ? { opacity: 1 } : {}
                            }
                            whileHover={shouldReduceAnimations ? {} : {
                                y: -5,
                                boxShadow:
                                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                            }}
                            className="bg-white rounded-lg p-8 shadow-md border border-teal-100 group relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <motion.h3
                                    className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent"
                                    initial={shouldReduceAnimations ? {} : { y: 20, opacity: 0 }}
                                    animate={
                                        isResultsInView && !shouldReduceAnimations
                                            ? { y: 0, opacity: 1 }
                                            : isResultsInView ? { opacity: 1 } : {}
                                    }
                                    transition={shouldReduceAnimations ? {} : {
                                        delay: 0.2 + index * 0.1,
                                        duration: 0.5,
                                    }}
                                >
                                    {metric.stat}
                                </motion.h3>
                                <motion.p
                                    className="text-slate-700"
                                    initial={shouldReduceAnimations ? {} : { y: 20, opacity: 0 }}
                                    animate={
                                        isResultsInView && !shouldReduceAnimations
                                            ? { y: 0, opacity: 1 }
                                            : isResultsInView ? { opacity: 1 } : {}
                                    }
                                    transition={shouldReduceAnimations ? {} : {
                                        delay: 0.3 + index * 0.1,
                                        duration: 0.5,
                                    }}
                                >
                                    {metric.description}
                                </motion.p>

                                {/* Animated underline */}
                                <motion.div
                                    className="h-1 mt-4 bg-gradient-to-r from-teal-400 to-teal-200 rounded-full"
                                    initial={shouldReduceAnimations ? { width: "100%" } : { width: 0 }}
                                    animate={
                                        isResultsInView && !shouldReduceAnimations
                                            ? { width: "100%" }
                                            : {}
                                    }
                                    transition={shouldReduceAnimations ? {} : {
                                        delay: 0.5 + index * 0.2,
                                        duration: 0.8,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={shouldReduceAnimations ? {} : { opacity: 0, y: 20 }}
                    animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
                    transition={shouldReduceAnimations ? {} : { duration: 0.7, delay: 0.6 }}
                    className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 rounded-lg border border-amber-200 shadow-md"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-amber-200 flex items-center justify-center">
                                <span className="text-amber-700 text-lg font-bold">
                                    {testimonial.avatar}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-amber-100/20" />
                            </div>
                        </div>
                        <div>
                            <blockquote className="text-slate-700 text-lg italic relative">
                                <span className="text-amber-400 text-4xl absolute -top-3 -left-4 opacity-30">
                                    "
                                </span>
                                "{testimonial.quote}"
                                <span className="text-amber-400 text-4xl absolute -bottom-5 -right-4 opacity-30">
                                    "
                                </span>
                            </blockquote>
                            <div className="mt-3">
                                <p className="font-semibold text-slate-800">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-slate-600">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}