"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);

    // Parallax effect for hero section
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <motion.section
            ref={heroRef}
            className="relative min-h-[70vh] flex items-center pt-16 pb-16"
            style={{ opacity: heroOpacity, y: heroY }}
        >
            <div className="absolute top-0 left-0 w-full h-full primary-gradient" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Charts and graphs pattern */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                opacity: 0.3,
                            }}
                        >
                            {Math.random() > 0.5 ? (
                                <TrendingUp className="text-white/20 w-16 h-16" />
                            ) : (
                                <BarChart3 className="text-white/20 w-16 h-16" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Moving dots pattern */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="investPattern"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="20" cy="20" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#investPattern)"
                    />
                </svg>
            </div>

            <Container className="z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white"
                    >
                        <div className="badge-teal">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Growth Opportunity
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            INVESTMENT EDGE
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/90 mb-8">
                            Join us at the inflection point of the digital
                            wellness revolution, poised to dominate the
                            growing demand for preventive, data-driven
                            health solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                asChild
                            >
                                <Link href="/connect">
                                    Connect With Our Investment Team
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                asChild
                            >
                                <Link href="#opportunity">Learn More</Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:block"
                    >
                        <div className="relative h-96 w-full p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                            {/* Investment growth chart */}
                            <div className="absolute inset-0 flex items-end p-6">
                                <div className="relative w-full h-3/4">
                                    {/* Bars */}
                                    {[
                                        0.3, 0.45, 0.6, 0.5, 0.7, 0.65,
                                        0.85,
                                    ].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute bottom-0 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t-md w-[12%]"
                                            style={{
                                                left: `${i * 15}%`,
                                                height: "0%",
                                            }}
                                            animate={{
                                                height: `${height * 100}%`,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5 + i * 0.1,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}

                                    {/* Growth line */}
                                    <svg className="absolute bottom-0 left-0 w-full h-full">
                                        <motion.path
                                            d={`M0,${100} L0,70 L15%,55 L30%,40 L45%,50 L60%,30 L75%,35 L90%,15`}
                                            stroke="white"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeDasharray="1000"
                                            strokeDashoffset="1000"
                                            animate={{
                                                strokeDashoffset: 0,
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: 0.7,
                                            }}
                                        />
                                        <motion.circle
                                            cx="90%"
                                            cy="15%"
                                            r="6"
                                            fill="#fff"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 2.7,
                                            }}
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Chart labels */}
                            <div className="absolute top-6 left-6 text-primary">
                                <h3 className="font-semibold text-lg">
                                    Growth Potential
                                </h3>
                                <p className="text-primary text-sm">
                                    Wellness Intelligence Market
                                </p>
                            </div>

                            <div className="absolute bottom-6 right-6 text-white text-4xl font-bold">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 2.7,
                                    }}
                                >
                                    <span className="text-primary">
                                        +85%
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    );
}