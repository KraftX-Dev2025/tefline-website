"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    BarChart,
    Brain,
    Globe,
    Sparkles,
    Heart,
    Zap,
    ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
    // For parallax effects
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section
                ref={ref}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Background Gradients */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Main teal gradient - aligned with other pages */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 via-teal-700/80 to-teal-600"></div>

                    {/* Blurred gradient circles */}
                    <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-sky-500/20 blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/20 blur-[100px] opacity-60"></div>
                    <div className="absolute top-1/3 left-0 w-[25rem] h-[25rem] rounded-full bg-amber-400/10 blur-[80px] opacity-70"></div>
                </motion.div>

                {/* Wave pattern overlay */}
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-20 text-white"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            fill="currentColor"
                            opacity=".2"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            fill="currentColor"
                            opacity=".3"
                        />
                    </svg>
                </div>

                {/* Scrolling indicator */}
                <motion.div
                    className="absolute bottom-30 left-1/2 transform -translate-x-1/2"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    <div className="flex flex-col items-center text-white/70">
                        <ChevronRight className="w-6 h-6 transform rotate-90" />
                        <span className="text-xs font-medium">
                            Scroll to explore
                        </span>
                    </div>
                </motion.div>

                {/* Content container */}
                <div className="container mx-auto px-4 relative z-20 pt-28 pb-32">
                    <motion.div
                        className="flex flex-col items-center text-center max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeIn}
                            className="mb-3 py-1 px-4 bg-white/10 backdrop-blur-md rounded-full text-teal-50 text-sm font-medium inline-flex items-center"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Redefining Modern Healthcare
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                            variants={fadeIn}
                        >
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-l from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                                    The Epicenter For
                                </span>
                            </span>
                            <br></br>
                            Lifestyle Medicine
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-10 text-teal-50/90 leading-relaxed"
                            variants={fadeIn}
                        >
                            Blending evidence-informed wellness with agentic
                            intelligence to optimize your healthspan and
                            transform your life
                        </motion.p>
                        <motion.div
                            variants={fadeIn}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                            >
                                <Link
                                    href="/services"
                                    className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group shadow-lg shadow-amber-500/20"
                                >
                                    Discover Wellness Intelligence™
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Floating badges */}
                    <motion.div
                        className="hidden md:flex absolute left-10 top-1/3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-teal-50 items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Heart className="w-5 h-5 mr-2 text-amber-400" />
                        <span>Evidence-Based Approach</span>
                    </motion.div>

                    <motion.div
                        className="hidden md:flex absolute right-10 top-2/3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-teal-50 items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                    >
                        <Brain className="w-5 h-5 mr-2 text-amber-400" />
                        <span>Powered by Agentic Intelligence</span>
                    </motion.div>
                </div>
            </section>

            {/* Your Lifeline Section */}
            <section className="py-24 px-4 relative overflow-hidden bg-white">
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-50 rounded-full opacity-50 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-50 rounded-full opacity-50 blur-[80px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Your Path to Optimal Health
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 leading-tight">
                                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                                    Your{" "}
                                </span>
                                LIFELINE{" "}
                                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                                    to Long-Term Wellness
                                </span>{" "}
                            </h2>
                            <p className="text-slate-700 mb-8 leading-relaxed text-lg">
                                Tefline is a healthtech startup that is
                                redefining modern healthcare by blending
                                evidence-informed wellness with agentic
                                intelligence, all backed by a community which
                                holds you accountable; optimizing healthspan is
                                the surest path to extending lifespan.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center text-teal-600 font-semibold group px-5 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-all duration-200 hover:scale-105"
                            >
                                Learn More About Our Approach
                                <div className="ml-2 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-200">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-md">
                                {/* Image decoration */}
                                <div className="absolute top-4 -left-4 w-full h-full bg-teal-100/80 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                                    <Image
                                        src="/tefline-image1.png"
                                        alt="Health Technology"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover rounded-xl"
                                    />
                                    {/* Floating badge */}
                                    <div className="absolute bottom-10 -right-3 bg-orange-300/70 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-white text-sm font-medium border border-teal-500">
                                        <div className="flex items-center">
                                            <Heart className="w-4 h-4 mr-2 text-white" />
                                            Optimizing Healthspan
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lifestyle Medicine Section */}
            <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-teal-600 to-teal-700">
                {/* Blurred gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full opacity-30 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full opacity-40 blur-[100px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="flex justify-center order-2 lg:order-1"
                        >
                            <div className="relative w-full max-w-md">
                                {/* Image decoration */}
                                <div className="absolute top-4 -right-4 w-full h-full bg-teal-400/20 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-teal-600/30 shadow-xl border border-teal-500 p-3">
                                    <Image
                                        src="/tefline-image2.png"
                                        alt="Lifestyle Medicine"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover rounded-xl"
                                    />
                                    {/* Floating badge */}
                                    <div className="absolute top-10 -left-6 bg-orange-300/70 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-white text-sm font-medium border border-teal-500">
                                        <div className="flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-white" />
                                            12 Monthly Modules
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center bg-teal-50/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                                <Zap className="w-4 h-4 mr-2" />
                                Comprehensive Wellness Approach
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                                <span className="bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                                    LIFESTYLE MEDICINE
                                </span>{" "}
                                Through AI-Driven Intelligence
                            </h2>
                            <p className="text-teal-100 mb-8 leading-relaxed text-lg">
                                Tefline's flagship initiative, RxLifeMed, is
                                your lifelong companion offering curated content
                                spanning twelve evolving monthly modules in
                                lifestyle medicine. We host digital wellness
                                deep dives, weekly check-ins and everything in
                                between, incl. The Doctor is IN.
                            </p>
                            <p className="text-teal-100 mb-8 leading-relaxed text-lg">
                                Particularly potent is patent-pending Lifestyle
                                Social, a tribe outreach platform that acts as a
                                springboard for social connections.
                            </p>
                            <Link
                                href="/services"
                                className="inline-flex items-center text-white font-semibold group px-5 py-2 rounded-lg border border-teal-500 hover:bg-teal-600/50 transition-all duration-200 hover:scale-105"
                            >
                                Learn More About RxLifeMed
                                <div className="ml-2 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-200">
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features counter section */}
            <section className="py-16 bg-teal-50 text-teal-700 relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-teal-500/10"
                                style={{
                                    width: Math.random() * 8 + 4 + "px",
                                    height: Math.random() * 8 + 4 + "px",
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

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                                87%
                            </h3>
                            <p className="text-slate-700">
                                of users report improved energy levels within 60
                                days
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                                92%
                            </h3>
                            <p className="text-slate-700">
                                retention rate among corporate wellness program
                                participants
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                                3.2
                            </h3>
                            <p className="text-slate-700">
                                years average biological age reduction after 12
                                months
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                                72%
                            </h3>
                            <p className="text-slate-700">
                                reduction in lifestyle-related health complaints
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Wellness Intelligence Section - Dynamic Dashboard */}
            <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-teal-50 to-teal-700 text-white">
                {/* Subtle particle background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/dots.png')] bg-repeat opacity-10"></div>
                </div>

                {/* Glowing orbs background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-[100px]"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-teal-400/20 blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/4 w-56 h-56 rounded-full bg-teal-500/20 blur-[100px]"></div>
                </div>

                {/* Flowing background curves */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <svg
                        className="absolute w-full min-w-[1000px] h-full opacity-30"
                        viewBox="0 0 1440 600"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M-100,250 C100,50 400,450 700,200 C900,50 1200,350 1600,150"
                            stroke="url(#dark-wave1)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="transparent"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.8 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        />
                        <motion.path
                            d="M-100,300 C200,450 450,150 750,300 C1000,450 1300,150 1600,300"
                            stroke="url(#dark-wave2)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="transparent"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.8 }}
                            transition={{ duration: 2, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                        <motion.path
                            d="M-100,350 C150,250 400,550 700,350 C900,250 1200,550 1600,350"
                            stroke="url(#dark-wave3)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="transparent"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.8 }}
                            transition={{ duration: 2, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                        <defs>
                            <linearGradient
                                id="dark-wave1"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="rgba(20, 184, 166, 0.4)"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="rgba(45, 212, 191, 0)"
                                />
                            </linearGradient>
                            <linearGradient
                                id="dark-wave2"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="rgba(13, 148, 136, 0.4)"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="rgba(15, 118, 110, 0)"
                                />
                            </linearGradient>
                            <linearGradient
                                id="dark-wave3"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="rgba(6, 182, 212, 0.4)"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="rgba(8, 145, 178, 0)"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center bg-teal-600/50 backdrop-blur-lg text-white px-5 py-2 rounded-full text-sm font-medium mb-8 border border-teal-500/50">
                            <Brain className="w-4 h-4 mr-2" />
                            Powered by Intelligence
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-600 bg-clip-text">
                            WELLNESS INTELLIGENCE™
                        </h2>
                    </motion.div>

                    {/* Flowing Dashboard Layout */}
                    <div className="relative">
                        {/* Main hub - center */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="relative z-10 mx-auto mb-20 max-w-lg"
                        >
                            <div className="bg-teal-600/50 backdrop-blur-md border border-teal-500/70 rounded-2xl p-6 shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:shadow-[0_0_40px_rgba(20,184,166,0.25)] transition-all duration-500 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-400"></div>
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-full bg-teal-600/50 mr-4 glow-pulse-teal">
                                        <div className="p-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400">
                                            <Brain className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">
                                            Wellness Intelligence™ Hub
                                        </h2>
                                        <p className="text-sm text-teal-200">
                                            Your command center for holistic
                                            health
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-teal-600/40 rounded-lg p-4 text-center border border-teal-500/50">
                                        <div className="text-xl font-bold text-teal-200">
                                            87%
                                        </div>
                                        <div className="text-xs text-teal-300">
                                            User Energy Improvement
                                        </div>
                                    </div>
                                    <div className="bg-teal-600/40 rounded-lg p-4 text-center border border-teal-500/50">
                                        <div className="text-xl font-bold text-cyan-200">
                                            3.2 yrs
                                        </div>
                                        <div className="text-xs text-teal-300">
                                            Biological Age Reduction
                                        </div>
                                    </div>
                                </div>

                                <div className="relative h-16 w-full rounded-lg overflow-hidden mb-6 border border-teal-500/50">
                                    <div className="absolute inset-0 bg-teal-600/40 rounded-lg"></div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "75%" }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.3,
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute top-0 left-0 h-full rounded-lg bg-gradient-to-r from-teal-500/70 to-teal-400/70"
                                    ></motion.div>
                                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                                        Wellness Score: 75%
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-500/20 text-white text-sm font-medium hover:bg-teal-500/30 transition-all duration-200 border border-teal-500/30 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-105"
                                    >
                                        Explore Intelligence Hub
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Four connected modules with fixed equal height */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
                            {[
                                {
                                    title: "Wellness Vault",
                                    description:
                                        "Evidence-informed wellness resources library",
                                    icon: (
                                        <Globe className="h-5 w-5 text-white" />
                                    ),
                                    color: "from-teal-500 to-teal-400",
                                    glowColor: "glow-teal",
                                    delay: 0.3,
                                    lightColor: "bg-teal-500/10",
                                    textColor: "text-teal-300",
                                    stats: ["1,200+", "Resources"],
                                    link: "/services",
                                },
                                {
                                    title: "AIR Tenet",
                                    description:
                                        "Curated lifestyle medicine insights",
                                    icon: (
                                        <Zap className="h-5 w-5 text-white" />
                                    ),
                                    color: "from-amber-500 to-amber-400",
                                    glowColor: "glow-amber",
                                    delay: 0.5,
                                    lightColor: "bg-amber-500/10",
                                    textColor: "text-amber-300",
                                    stats: ["Daily", "Updates"],
                                    link: "/services",
                                },
                                {
                                    title: "Cognitive Counselor",
                                    description:
                                        "Your personal perception assistant",
                                    icon: (
                                        <Brain className="h-5 w-5 text-white" />
                                    ),
                                    color: "from-cyan-500 to-cyan-400",
                                    glowColor: "glow-cyan",
                                    delay: 0.7,
                                    lightColor: "bg-cyan-500/10",
                                    textColor: "text-cyan-200",
                                    stats: ["24/7", "Support"],
                                    link: "/services",
                                },
                                {
                                    title: "Lifestyle Digital",
                                    description:
                                        "Lifestyle medicine intelligence engine",
                                    icon: (
                                        <BarChart className="h-5 w-5 text-white" />
                                    ),
                                    color: "from-sky-500 to-sky-400",
                                    glowColor: "glow-sky",
                                    delay: 0.9,
                                    lightColor: "bg-sky-500/10",
                                    textColor: "text-sky-200",
                                    stats: ["10M+", "Data Points"],
                                    link: "/services",
                                },
                            ].map((module) => (
                                <motion.div
                                    key={module.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: module.delay / 2,
                                    }}
                                    viewport={{ once: true }}
                                    className="group h-full"
                                >
                                    <Link
                                        href={module.link}
                                        className="block h-full transform transition-all duration-200 hover:-translate-y-2"
                                    >
                                        <div
                                            className={`h-full flex flex-col bg-teal-50/10 backdrop-blur-md border border-teal-500/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 ${module.glowColor}`}
                                        >
                                            <div
                                                className={`h-1.5 w-full bg-gradient-to-r ${module.color}`}
                                            ></div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center mb-4">
                                                    <div
                                                        className={`p-2 rounded-full bg-gradient-to-r ${module.color} mr-3 transform transition-transform duration-200 group-hover:scale-110`}
                                                    >
                                                        {module.icon}
                                                    </div>
                                                    <h3
                                                        className={`font-bold text-white`}
                                                    >
                                                        {module.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-teal-200 mb-4">
                                                    {module.description}
                                                </p>
                                                <div className="flex justify-between items-center mt-auto">
                                                    <div
                                                        className={`${module.lightColor} rounded-lg px-3 py-2 text-center border border-teal-500/30`}
                                                    >
                                                        <div
                                                            className={`text-sm font-bold ${module.textColor}`}
                                                        >
                                                            {module.stats[0]}
                                                        </div>
                                                        <div className="text-xs text-teal-300">
                                                            {module.stats[1]}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <span
                                                            className={`${module.textColor} font-medium`}
                                                        >
                                                            Explore
                                                        </span>
                                                        <ArrowRight
                                                            className={`ml-1 h-4 w-4 ${module.textColor} transform transition-transform duration-200 group-hover:translate-x-1`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Curved connecting lines - SVG overlay */}
                        <svg
                            className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 -z-10"
                            viewBox="0 0 1200 600"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            {/* Center to top-left */}
                            <motion.path
                                d="M600,180 C500,180 350,180 200,250"
                                stroke="url(#line-teal-dark)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.8 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={{ once: true }}
                            />

                            {/* Center to top-right */}
                            <motion.path
                                d="M600,180 C700,180 850,180 1000,250"
                                stroke="url(#line-amber-dark)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.8 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                viewport={{ once: true }}
                            />

                            {/* Center to bottom-left */}
                            <motion.path
                                d="M600,180 C500,180 350,300 200,350"
                                stroke="url(#line-cyan-dark)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.8 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                viewport={{ once: true }}
                            />

                            {/* Center to bottom-right */}
                            <motion.path
                                d="M600,180 C700,180 850,300 1000,350"
                                stroke="url(#line-sky-dark)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.8 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                                viewport={{ once: true }}
                            />

                            <defs>
                                <linearGradient
                                    id="line-teal-dark"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(20, 184, 166, 0.8)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(45, 212, 191, 0.1)"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="line-amber-dark"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(245, 158, 11, 0.8)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(251, 191, 36, 0.1)"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="line-cyan-dark"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(6, 182, 212, 0.8)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(103, 232, 249, 0.1)"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="line-sky-dark"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="rgba(14, 165, 233, 0.8)"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="rgba(56, 189, 248, 0.1)"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Pulse animations on the lines */}
                        <svg
                            className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 -z-10"
                            viewBox="0 0 1200 600"
                            preserveAspectRatio="none"
                        >
                            <motion.circle
                                cx="600"
                                cy="180"
                                r="4"
                                fill="#5eead4"
                                animate={{
                                    cx: [600, 200],
                                    cy: [180, 250],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            />

                            <motion.circle
                                cx="600"
                                cy="180"
                                r="4"
                                fill="#fbbf24"
                                animate={{
                                    cx: [600, 1000],
                                    cy: [180, 250],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    delay: 1,
                                }}
                            />

                            <motion.circle
                                cx="600"
                                cy="180"
                                r="4"
                                fill="#67e8f9"
                                animate={{
                                    cx: [600, 200],
                                    cy: [180, 350],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    delay: 2,
                                }}
                            />

                            <motion.circle
                                cx="600"
                                cy="180"
                                r="4"
                                fill="#38bdf8"
                                animate={{
                                    cx: [600, 1000],
                                    cy: [180, 350],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    delay: 3,
                                }}
                            />
                        </svg>
                    </div>
                </div>

                {/* Custom CSS for glow effects */}
                <style jsx>{`
                    .glow-teal {
                        box-shadow: 0 0 15px 0 rgba(20, 184, 166, 0.3);
                    }
                    .glow-amber {
                        box-shadow: 0 0 15px 0 rgba(245, 158, 11, 0.3);
                    }
                    .glow-cyan {
                        box-shadow: 0 0 15px 0 rgba(6, 182, 212, 0.3);
                    }
                    .glow-sky {
                        box-shadow: 0 0 15px 0 rgba(14, 165, 233, 0.3);
                    }
                    .glow-pulse-teal {
                        animation: pulse-teal 2.5s infinite;
                    }
                    @keyframes pulse-teal {
                        0% {
                            box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4);
                        }
                        70% {
                            box-shadow: 0 0 0 10px rgba(20, 184, 166, 0);
                        }
                        100% {
                            box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
                        }
                    }
                `}</style>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-4 relative overflow-hidden bg-white text-teal-700">
                {/* Blurred gradient background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] rounded-full bg-teal-500/5 blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/5 blur-[100px]"></div>
                    <div className="absolute top-1/3 right-0 w-[25rem] h-[25rem] rounded-full bg-amber-400/5 blur-[80px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-teal-700 leading-tight">
                            Ready to transform your approach to wellness?
                        </h2>
                        <p className="text-xl text-slate-700 mb-10 leading-relaxed">
                            Join the revolution in lifestyle medicine and
                            discover how Tefline can help you optimize your
                            healthspan for a longer, more vibrant life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                            >
                                <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-amber-500/20 w-full sm:w-auto"
                                >
                                    Book a Free Masterclass
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
