"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    CheckCircle,
    Target,
    Compass,
    ChevronRight,
    Zap,
    Sparkles,
    Brain,
    Users,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function VisionMissionPage() {
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

    const cardHover = {
        rest: { scale: 1, y: 0, rotate: 1 },
        hover: {
            scale: 1.03,
            y: -5,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
            },
        },
    };

    const timelineItemAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section
                ref={ref}
                className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
            >
                {/* Background Gradients */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Main gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-800"></div>

                    {/* Blurred gradient circles */}
                    <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-[#0ea5e9]/20 blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#06b6d4]/20 blur-[100px] opacity-60"></div>
                    <div className="absolute top-1/3 left-0 w-[25rem] h-[25rem] rounded-full bg-[#f97316]/10 blur-[80px] opacity-70"></div>
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
                            className="mb-3 py-1 px-4 bg-slate-800/50 backdrop-blur-md rounded-full text-cyan-300 text-sm font-medium inline-flex items-center"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Our Purpose
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                            variants={fadeIn}
                        >
                            Our Vision & Mission
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-10 text-slate-300 leading-relaxed"
                            variants={fadeIn}
                        >
                            Discover our purpose, values, and the driving force
                            behind Tefline's approach to lifestyle medicine
                        </motion.p>
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Link
                                href="/team"
                                className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
                            >
                                Meet Our Team
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-100 rounded-full opacity-50 blur-[80px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                                <Target className="w-4 h-4 mr-2" />
                                Our North Star
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800 leading-tight">
                                VISION TEFLINE
                            </h2>
                            <motion.div
                                initial="rest"
                                whileHover="hover"
                                variants={cardHover}
                                className="p-8 bg-teal-50 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform"
                            >
                                <p className="text-xl">
                                    To become a force multiplier in modern
                                    healthcare by setting a definitive wellness
                                    benchmark through evidence-informed
                                    lifestyle interventions driven by agentic
                                    intelligence.
                                </p>
                            </motion.div>
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
                                <div className="absolute top-8 -left-8 w-full h-full bg-orange-100 rounded-2xl"></div>
                                <div className="absolute top-4 -left-4 w-full h-full bg-teal-200 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                                    <Image
                                        src="/placeholder.webp"
                                        alt="Vision illustration"
                                        className="w-full h-auto object-cover rounded-xl"
                                        width={400}
                                        height={400}
                                    />
                                    {/* Floating badge */}
                                    <div className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-teal-800 text-sm font-medium border border-teal-100">
                                        <div className="flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
                                            Setting the wellness benchmark
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="px-4 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-[100px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Compass className="w-4 h-4 mr-2" />
                            Our Purpose
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-800 leading-tight">
                            MISSION STATEMENT
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="mb-4">
                                To transform lives by leveraging adaptive models
                                trained in wellness wisdom while pioneering the
                                agentic path to empowered living. Beyond
                                striving to stave off the onset and advance of
                                illness, we commit to elevating vitality,
                                thereby markedly extending healthspan and
                                lifespan.
                            </p>
                            <p>
                                We adapt the best available hard evidence—that
                                is curated through power laws for optimal effect
                                size—into actionable, healthy behaviors. Through
                                weekly check-ins grounded in sustained action,
                                reinforced by accountability partners, we
                                inspire lasting change for heightened health
                                outcomes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Approach Section - Timeline */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full opacity-30 blur-[120px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Zap className="w-4 h-4 mr-2" />
                            How We Work
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800 leading-tight">
                            OUR APPROACH
                        </h2>
                        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                            Evidence-informed wellness powered by agentic
                            intelligence
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 z-0"></div>

                        {/* Timeline Items */}
                        {[
                            {
                                title: "Evidence-Informed Foundation",
                                description:
                                    "We adapt the best available hard evidence—that is curated through power laws for optimal effect size—into actionable, healthy behaviors.",
                                imageRight: false,
                                icon: (
                                    <CheckCircle className="w-6 h-6 text-white" />
                                ),
                            },
                            {
                                title: "Agentic Intelligence",
                                description:
                                    "Our AI-powered tools don't just track your progress; they think alongside you, providing personalized guidance that evolves as you do.",
                                imageRight: true,
                                icon: <Brain className="w-6 h-6 text-white" />,
                            },
                            {
                                title: "Community Accountability",
                                description:
                                    "Through weekly check-ins grounded in sustained action, reinforced by accountability partners, we inspire lasting change for heightened health outcomes.",
                                imageRight: false,
                                icon: <Users className="w-6 h-6 text-white" />,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="mb-24 last:mb-0 relative z-10"
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={timelineItemAnimation}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    {/* Image - swapped based on imageRight property */}
                                    <div
                                        className={`${
                                            item.imageRight
                                                ? "md:order-2"
                                                : "md:order-1"
                                        }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                            className="rounded-xl overflow-hidden shadow-lg"
                                        >
                                            <Image
                                                src="/placeholder.webp"
                                                alt={item.title}
                                                className="w-full h-auto"
                                                width={400}
                                                height={400}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`${
                                            item.imageRight
                                                ? "md:order-1"
                                                : "md:order-2"
                                        }`}
                                    >
                                        <h3 className="text-2xl font-bold mb-4 text-teal-800">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-slate-700 mb-6">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center">
                                            <div className="bg-teal-600 rounded-full p-2 mr-3">
                                                {item.icon}
                                            </div>
                                            <span className="text-teal-800 font-medium">
                                                Step {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-8 h-8 bg-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
