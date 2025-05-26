"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CTASection() {
    const ctaRef = useRef<HTMLDivElement>(null);

    const isCtaInView = useInView(ctaRef, {
        once: true,
        amount: 0.3
    });

    return (
        <section
            ref={ctaRef}
            className="py-20 bg-gradient-to-b from-white to-teal-50 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 max-w-5xl"
            >
                <div className="primary-gradient rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative px-8 py-16 md:px-16">
                        {/* Background wave pattern */}
                        <div className="absolute inset-0 overflow-hidden opacity-10">
                            <svg
                                viewBox="0 0 1200 600"
                                className="absolute w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M 0 50 Q 300 100 600 25 Q 900 -50 1200 75 L 1200 600 L 0 600 Z"
                                    fill="white"
                                />
                                <path
                                    d="M 0 100 Q 300 50 600 125 Q 900 200 1200 100 L 1200 600 L 0 600 Z"
                                    fill="white"
                                    opacity="0.5"
                                />
                                <path
                                    d="M 0 150 Q 300 200 600 125 Q 900 50 1200 150 L 1200 600 L 0 600 Z"
                                    fill="white"
                                    opacity="0.3"
                                />
                            </svg>
                        </div>

                        <div className="relative z-10 text-center text-white">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={
                                    isCtaInView ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{ duration: 0.5 }}
                            >
                                <div className="badge-teal">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Limited Opportunity
                                </div>
                            </motion.div>

                            <motion.h2
                                initial={{ y: -20, opacity: 0 }}
                                animate={
                                    isCtaInView ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-3xl md:text-5xl font-bold mb-6"
                            >
                                RIDE THE WAVE
                            </motion.h2>

                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={
                                    isCtaInView ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-xl mb-8 max-w-3xl mx-auto"
                            >
                                Wellness Intelligence is a trillion-dollar
                                wave! The best time to invest in a
                                category-defining startup is before the
                                world realizes it's a category.
                            </motion.p>

                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={
                                    isCtaInView ? { y: 0, opacity: 1 } : {}
                                }
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl mb-8 max-w-3xl mx-auto"
                            >
                                <p className="text-xl font-semibold mb-0">
                                    Secure your early stake in the future of
                                    AI-driven wellness—before the rest of
                                    the world catches up.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                                className="flex justify-center"
                            >
                                <Link
                                    href="/connect"
                                    className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group shadow-lg shadow-amber-500/20"
                                >
                                    Connect With Our Investment Team
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}