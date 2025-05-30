"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    ArrowRight,
    Target,
    Sparkles,
    Compass,
    CheckCircle,
    ChevronRight
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { phaseContext, timelineImpact } from "@/lib/constants/programs";

export default function VisionMissionPage() {
    // State for client-side particles
    const [isClient, setIsClient] = useState(false);
    const [particles, setParticles] = useState<Array<{
        id: number;
        width: number;
        height: number;
        top: number;
        left: number;
        duration: number;
        delay: number;
    }>>([]);

    // Initialize particles on client side only
    useEffect(() => {
        setIsClient(true);
        const newParticles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

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
        rest: { scale: 1, y: 0 },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
            },
        },
    };

    // Refs for timeline sections
    const timelineRef = useRef(null);
    const isTimelineInView = useInView(timelineRef, {
        once: false,
        amount: 0.2,
    });

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section
                ref={ref}
                className="relative flex items-center justify-center overflow-hidden"
            >
                {/* Background Gradients */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Main teal gradient - Updated to match teal-400 to teal-600 */}
                    <div className="absolute top-0 left-0 w-full h-full primary-gradient"></div>

                    {/* Blurred gradient circles - Updated colors */}
                    <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-sky-500/20 blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/20 blur-[100px] opacity-60"></div>
                    <div className="absolute top-1/3 left-0 w-[25rem] h-[25rem] rounded-full bg-amber-400/10 blur-[80px] opacity-70"></div>
                </motion.div>

                {/* Wave pattern overlay */}
                <div className="absolute bottom-[0] left-0 w-full z-10">
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
                <div className="container mx-auto px-4 relative z-20 pt-28 pb-12">
                    <motion.div
                        className="flex flex-col items-center text-center max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeIn}
                            className="inline-flex items-center bg-white text-teal-600 px-4 py-1 rounded-full text-lg font-medium mb-4 border border-teal-600/50"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            <span className="text-lg">Our Purpose</span>
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                            variants={fadeIn}
                        >
                            Vision Mission
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-white"
                            variants={fadeIn}
                        >
                            Discover our purpose, values, and the driving force
                            behind Tefline's approach to lifestyle medicine
                        </motion.p>

                        <motion.div
                            variants={fadeIn}
                            className="mt-4 flex space-x-4"
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
                                    href="/content"
                                    className="group px-5 py-3 rounded-lg backdrop-blur-sm bg-amber-500 border border-white/20 hover:bg-white/20 transition-colors duration-300 inline-flex items-center text-white font-medium"
                                >
                                    Learn About Us
                                    <div className="ml-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-100 rounded-full opacity-50 blur-[80px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="flex justify-center mb-8 lg:mb-0"
                        >
                            <div className="relative w-full max-w-md">
                                {/* Image decoration */}
                                <div className="absolute top-8 -left-6 md:-left-8 w-full h-full bg-orange-100 rounded-2xl"></div>
                                <div className="absolute top-4 -left-3 md:-left-4 w-full h-full bg-teal-200 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                                    <Image
                                        src="/tefline-image4.webp"
                                        alt="Vision illustration"
                                        className="w-full h-auto object-cover rounded-xl"
                                        width={400}
                                        height={400}
                                    />
                                    {/* Floating badge */}
                                    <div className="absolute bottom-10 -right-4 md:-right-6 bg-white/90 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-teal-800 text-sm font-medium border border-teal-100 flex items-center space-x-2">
                                        <Target className="w-4 h-4 text-orange-500" />
                                        <span>Defining the Future</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                        >
                            <div className="badge-teal">
                                <Target className="w-4 h-4 mr-2" />
                                Our Vision
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-primary-gradient leading-tight">
                                VISION TEFLINE
                            </h2>
                            <motion.div
                                whileHover="hover"
                                initial="rest"
                                variants={cardHover}
                                className="p-6 md:p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-teal-100 transform rotate-1 hover:rotate-0 relative overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/30 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/20 rounded-full -mb-12 -ml-12 blur-xl"></div>

                                <p className="text-lg sm:text-xl md:text-2xl text-teal-900 leading-relaxed relative z-10 font-medium">
                                    To become a{" "}
                                    <span className="text-orange-600 font-semibold">
                                        force multiplier
                                    </span>{" "}
                                    in modern healthcare by setting a definitive
                                    wellness benchmark through
                                    <span className="text-teal-600 font-semibold">
                                        {" "}
                                        evidence-informed lifestyle
                                        interventions
                                    </span>{" "}
                                    driven by agentic intelligence.
                                </p>
                            </motion.div>
                            <div className="mt-6 md:mt-8">
                                <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start">
                                        <div className="bg-orange-100 p-2 rounded-full mr-3 md:mr-4 mt-1">
                                            <Sparkles className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-teal-600">
                                                Our Vision in Action
                                            </h3>
                                            <p className="text-slate-600 text-sm md:text-base">
                                                At Tefline, our vision guides
                                                every innovation, protocol, and
                                                interaction. We're committed to
                                                not just improving healthcare,
                                                but fundamentally transforming
                                                how people think about and
                                                engage with their own wellness
                                                journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-[100px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="order-2 lg:order-1"
                        >
                            <div className="badge-teal">
                                <Compass className="w-4 h-4 mr-2" />
                                Our Mission
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-primary-gradient leading-tight">
                                MISSION STATEMENT
                            </h2>
                            <motion.div
                                whileHover="hover"
                                initial="rest"
                                variants={cardHover}
                                className="p-6 md:p-8 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-orange-100 relative overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200/20 rounded-full -mb-12 -ml-12 blur-xl"></div>

                                <p className="mb-4 md:mb-6 text-slate-700 leading-relaxed relative z-10 text-sm md:text-base">
                                    To{" "}
                                    <span className="text-orange-600 font-semibold">
                                        transform lives
                                    </span>{" "}
                                    by leveraging adaptive models trained in
                                    wellness wisdom while pioneering the agentic
                                    path to empowered living. Beyond striving to
                                    stave off the onset and advance of illness,
                                    we commit to{" "}
                                    <span className="text-teal-600 font-semibold">
                                        elevating vitality
                                    </span>
                                    , thereby markedly extending healthspan and
                                    lifespan.
                                </p>
                                <p className="text-slate-700 leading-relaxed relative z-10 text-sm md:text-base">
                                    We adapt the best available hard
                                    evidence—that is curated through power laws
                                    for optimal effect size—into actionable,
                                    healthy behaviors. Through weekly check-ins
                                    grounded in sustained action, reinforced by
                                    accountability partners, we inspire lasting
                                    change for heightened health outcomes.
                                </p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
                        >
                            <div className="relative w-full max-w-md">
                                {/* Image decoration */}
                                <div className="absolute top-8 -right-6 md:-right-8 w-full h-full bg-cyan-100 rounded-2xl"></div>
                                <div className="absolute top-4 -right-3 md:-right-4 w-full h-full bg-orange-100 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                                    <Image
                                        src="/tefline-image5.webp"
                                        alt="Mission illustration"
                                        className="w-full h-auto object-cover rounded-xl"
                                        width={400}
                                        height={400}
                                    />
                                    {/* Floating badge */}
                                    <div className="absolute top-10 -left-4 md:-left-6 bg-white/90 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-teal-800 text-sm font-medium border border-teal-100 flex items-center space-x-2">
                                        <Compass className="w-4 h-4 text-cyan-500" />
                                        <span>Transforming Lives</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Timeline Section */}
            <section
                ref={timelineRef}
                className="py-8 md:py-8 px-4 bg-white relative overflow-hidden"
            >
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-100 rounded-full opacity-30 blur-[80px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <div className="badge-teal">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Our Journey
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-primary-gradient leading-tight">
                            JOURNEY TO{" "}
                            <span className="text-cyan-600">IMPACT</span>
                        </h2>
                        <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto">
                            A transformative roadmap guiding our vision from
                            ideation to execution
                        </p>
                    </motion.div>

                    {/* Vertical Timeline - Desktop */}
                    <div className="relative hidden md:block">
                        {/* Timeline center line */}
                        <motion.div
                            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-orange-400 rounded-full transform -translate-x-1/2"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: isTimelineInView ? "100%" : 0,
                                opacity: isTimelineInView ? 1 : 0,
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        {/* Timeline steps */}
                        {phaseContext.map((item) => (
                            <div
                                key={item.id}
                                className={`relative flex items-center mb-16 ${item.position === "left"
                                    ? "flex-row-reverse"
                                    : ""
                                    }`}
                            >
                                {/* Connector line */}
                                <motion.div
                                    className={`absolute h-0.5 bg-gradient-to-r from-transparent ${item.position === "left"
                                        ? "to-teal-400 right-1/2 mr-4"
                                        : "to-teal-400 left-1/2 ml-4"
                                        } top-10 w-12`}
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{
                                        width: isTimelineInView ? "3rem" : 0,
                                        opacity: isTimelineInView ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: item.delay + 0.5,
                                    }}
                                />

                                {/* Center icon */}
                                <motion.div
                                    className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: isTimelineInView ? 1 : 0,
                                        opacity: isTimelineInView ? 1 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        delay: item.delay,
                                    }}
                                >
                                    <div className="w-16 h-16 rounded-full text-white bg-teal-400 flex items-center justify-center shadow-lg">
                                        <item.icon size={30} />
                                    </div>
                                </motion.div>

                                {/* Content card */}
                                <motion.div
                                    className={`w-5/12 ${item.position === "left"
                                        ? "mr-auto pr-12"
                                        : "ml-auto pl-12"
                                        }`}
                                    initial={{
                                        opacity: 0,
                                        x: item.position === "left" ? -30 : 30,
                                    }}
                                    animate={{
                                        opacity: isTimelineInView ? 1 : 0,
                                        x: isTimelineInView
                                            ? 0
                                            : item.position === "left"
                                                ? -30
                                                : 30,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: item.delay,
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                        className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border ${item.id === 1
                                            ? "border-teal-200"
                                            : item.id === 2
                                                ? "border-cyan-200"
                                                : item.id === 3
                                                    ? "border-teal-200"
                                                    : "border-orange-200"
                                            }`}
                                    >
                                        <span className="text-sm font-semibold text-gray-500">
                                            {item.phase}
                                        </span>
                                        <h3
                                            className={`text-xl font-bold mb-2 ${item.id === 1
                                                ? "text-teal-600"
                                                : item.id === 2
                                                    ? "text-amber-500"
                                                    : item.id === 3
                                                        ? "text-teal-600"
                                                        : "text-amber-500"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Vertical Timeline - Mobile */}
                    <div className="md:hidden">
                        <motion.div
                            className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-orange-400 rounded-full"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: isTimelineInView ? "100%" : 0,
                                opacity: isTimelineInView ? 1 : 0,
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                                height: "100%",
                                top: "10%",
                                bottom: "auto",
                            }}
                        />

                        {/* Mobile Timeline Steps */}
                        {phaseContext.map((item) => (
                            <div key={item.id} className="relative pl-12 mb-12">
                                {/* Icon circle */}
                                <motion.div
                                    className="absolute left-0 z-10"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: isTimelineInView ? 1 : 0,
                                        opacity: isTimelineInView ? 1 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        delay: item.delay,
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-teal-400 text-white flex items-center justify-center shadow-md transform -translate-x-4">
                                        <item.icon size={30} />
                                    </div>
                                </motion.div>

                                {/* Connector line */}
                                <motion.div
                                    className="absolute left-0 top-4 h-0.5 w-8 bg-gradient-to-r from-teal-400 to-transparent"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{
                                        width: isTimelineInView ? "2rem" : 0,
                                        opacity: isTimelineInView ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: item.delay + 0.3,
                                    }}
                                />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: isTimelineInView ? 1 : 0,
                                        x: isTimelineInView ? 0 : 20,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: item.delay,
                                    }}
                                    className={`bg-white p-5 rounded-xl shadow-md border ${item.id === 1
                                        ? "border-teal-200"
                                        : item.id === 2
                                            ? "border-cyan-200"
                                            : item.id === 3
                                                ? "border-teal-200"
                                                : "border-orange-200"
                                        }`}
                                >
                                    <span className="text-xs font-semibold text-gray-500">
                                        {item.phase}
                                    </span>
                                    <h3
                                        className={`text-lg font-bold mb-2 ${item.id === 1
                                            ? "text-teal-700"
                                            : item.id === 2
                                                ? "text-cyan-700"
                                                : item.id === 3
                                                    ? "text-teal-700"
                                                    : "text-orange-700"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline Impact Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
                    >
                        {timelineImpact.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 10 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div
                                    className={`h-2 w-full bg-gradient-to-r ${item.color}`}
                                />
                                <div className="p-5 md:p-6">
                                    <div className="flex items-start mb-4">
                                        <div
                                            className={`bg-gradient-to-r ${item.color} p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <span className="font-bold text-white text-sm md:text-base">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <div>
                                            <h3
                                                className={`font-bold text-lg md:text-xl ${item.textColor}`}
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-slate-600">
                                                {item.period}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 md:space-y-3 pl-2 md:pl-4">
                                        {item.bullets.map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="text-slate-700 text-sm md:text-base flex items-start"
                                            >
                                                <CheckCircle
                                                    className={`w-4 md:w-5 h-4 md:h-5 ${item.iconColor} mr-2 mt-0.5 flex-shrink-0`}
                                                />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0 primary-gradient z-0"></div>

                {/* Animated particles - Only render on client side */}
                {isClient && (
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full">
                            {particles.map((particle) => (
                                <motion.div
                                    key={particle.id}
                                    className="absolute rounded-full bg-white/10"
                                    style={{
                                        width: particle.width + "px",
                                        height: particle.height + "px",
                                        top: particle.top + "%",
                                        left: particle.left + "%",
                                    }}
                                    animate={{
                                        y: [0, -100],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: particle.duration,
                                        repeat: Infinity,
                                        delay: particle.delay,
                                        ease: "linear",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="mx-auto relative z-10 py-8 rounded-2xl  w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <div className="badge-teal">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Join Our Vision
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            READY TO TRANSFORM YOUR APPROACH TO WELLNESS?
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-base md:text-lg text-center space-y-6 mb-8 md:mb-10"
                    >
                        <p>
                            Be part of the lifestyle medicine revolution.
                            Discover how Tefline's vision and mission can help
                            you achieve optimal health and wellness.
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
                                Contact Us Today
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}