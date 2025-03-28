"use client";

import Link from "next/link";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { JSX, SVGProps, useRef, useState } from "react";
import { teamMembers } from "@/lib/constants/team";
import {
    Users,
    Brain,
    ChevronRight,
    Sparkles,
    Shield,
    Network,
    Zap,
    ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    // For parallax effects
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const valueCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    const teamCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
        hover: {
            y: -10,
            boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3)",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    const [activeCard, setActiveCard] = useState(NaN);

    return (
        <div className="min-h-screen overflow-hidden bg-white">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative py-32 flex items-center justify-center overflow-hidden"
            >
                {/* Background Gradients */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Main gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500 to-teal-600"></div>

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

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeIn}
                            className="mb-3 py-1 px-4 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium inline-flex items-center"
                        >
                            <Users className="w-4 h-4 mr-2" />
                            Our Leadership
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
                            variants={fadeIn}
                        >
                            TEAM{" "}
                            <span className="bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                                TEFLINE
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-white/90 leading-relaxed"
                            variants={fadeIn}
                        >
                            Meet the visionaries behind Tefline's mission to
                            redefine healthcare through lifestyle medicine and
                            AI intelligence.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Floating DNA-like particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white/30"
                            style={{
                                width: Math.random() * 8 + 4 + "px",
                                height: Math.random() * 8 + 4 + "px",
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                            }}
                            animate={{
                                y: [0, -100],
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: Math.random() * 8 + 8,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Team Members Grid Section */}
            <section className="py-16 md:py-24 px-4 relative bg-teal-50">
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-200/30 rounded-full opacity-40 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-300/30 rounded-full opacity-40 blur-[80px]"></div>

                <div className="container mx-auto relative z-10 mb-16">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.slug}
                                custom={index}
                                variants={teamCardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, margin: "-50px" }}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(NaN)}
                                className="relative"
                            >
                                <Link href={`/team/${member.slug}`}>
                                    <div className="relative bg-white backdrop-blur-md rounded-xl overflow-hidden border border-slate-400 group h-full transition-all duration-300 shadow-sm">
                                        {/* Animated gradient border */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-tr ${member.theme.from} ${member.theme.via} ${member.theme.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                        ></div>
                                        <div className="absolute inset-0.5 bg-white rounded-[0.65rem]"></div>

                                        {/* Pulse effect when hovered */}
                                        <AnimatePresence>
                                            {activeCard === index && (
                                                <motion.div
                                                    className={`absolute inset-0 bg-${member.theme.from}/10 z-0 rounded-xl`}
                                                    initial={{
                                                        opacity: 0.2,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    exit={{
                                                        opacity: 0.2,
                                                        scale: 1.2,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                />
                                            )}
                                        </AnimatePresence>

                                        <div
                                            className={`h-full relative z-10 p-6 bg-teal-400/20 hover:bg-gradient-to-t ${member.theme.hoverGradient} transition-all duration-300`}
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="mb-4 relative">
                                                    <div
                                                        className={`w-32 h-32 rounded-full overflow-hidden bg-gradient-to-tr ${member.theme.from} ${member.theme.via} ${member.theme.to} p-0.5`}
                                                    >
                                                        <div className="w-full h-full rounded-full overflow-hidden">
                                                            <Image
                                                                src="/placeholder.webp"
                                                                alt={
                                                                    member.name
                                                                }
                                                                className="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 transition-all duration-500"
                                                                width={400}
                                                                height={400}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Tech-inspired circular elements */}
                                                    <motion.div
                                                        className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-tr ${member.theme.from} ${member.theme.to} p-0.5 z-0`}
                                                        animate={{
                                                            rotate:
                                                                activeCard ===
                                                                index
                                                                    ? 360
                                                                    : 0,
                                                        }}
                                                        transition={{
                                                            duration: 10,
                                                            repeat: Infinity,
                                                            ease: "linear",
                                                        }}
                                                    >
                                                        <div className="w-full h-full rounded-full bg-white"></div>
                                                    </motion.div>
                                                    <div
                                                        className={`absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-tr ${member.theme.from} ${member.theme.to} p-0.5 z-0`}
                                                    >
                                                        <div className="w-full h-full rounded-full bg-white"></div>
                                                    </div>
                                                </div>

                                                <h3
                                                    className={`text-xl font-bold text-slate-900 group-hover:${member.theme.textColor} transition-colors`}
                                                >
                                                    {member.name}
                                                </h3>
                                                <p
                                                    className={`text-sm mt-1 font-medium ${member.theme.textColor}`}
                                                >
                                                    {member.role}
                                                </p>
                                                <p className="text-slate-500 text-xs mb-4 italic">
                                                    {member.secondaryRole}
                                                </p>
                                                <p className="text-slate-600 text-sm text-center mb-6">
                                                    {member.shortBio}
                                                </p>

                                                <div
                                                    className={`flex items-center ${member.theme.textColor} text-sm group-hover:brightness-110 transition-colors`}
                                                >
                                                    <span className="mr-1">
                                                        Read Full Bio
                                                    </span>
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Connector lines between cards */}
                                {index < teamMembers.length - 1 &&
                                    index !== 1 && (
                                        <motion.div
                                            className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-transparent z-0"
                                            initial={{ scaleX: 0, opacity: 0 }}
                                            whileInView={{
                                                scaleX: 1,
                                                opacity: 0.5,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.5 + index * 0.2,
                                                duration: 0.8,
                                            }}
                                        />
                                    )}

                                {/* Vertical connector for mobile */}
                                {(index === 0 || index === 2) && (
                                    <motion.div
                                        className="block lg:hidden absolute -bottom-4 left-1/2 h-8 w-0.5 bg-gradient-to-b from-teal-400 to-transparent z-0"
                                        initial={{ scaleY: 0, opacity: 0 }}
                                        whileInView={{
                                            scaleY: 1,
                                            opacity: 0.5,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.5 + index * 0.2,
                                            duration: 0.8,
                                        }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Dynamics Section */}
            <section className="py-24 px-4 relative overflow-hidden bg-white">
                {/* Blurred gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full opacity-30 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/50 rounded-full opacity-40 blur-[100px]"></div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Network className="w-4 h-4 mr-2" />
                            Collaborative Excellence
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-teal-600">
                            Team Dynamics
                        </h2>
                        <p className="text-slate-700 max-w-2xl mx-auto">
                            How we work together to create transformative
                            wellness solutions
                        </p>
                    </motion.div>

                    <div className="bg-teal-50 rounded-2xl border border-teal-100 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 mr-3">
                                        <Brain className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900">
                                        Human-AI Collaboration
                                    </h3>
                                </div>
                                <p className="text-slate-700 leading-relaxed">
                                    At Tefline, we pioneer a unique approach to
                                    leadership where human expertise and AI
                                    intelligence work in perfect harmony. Our
                                    collaborative model leverages the strategic
                                    vision of our human leaders with the
                                    data-driven insights of our AI executive.
                                </p>

                                {/* Animated graphic showing human-AI collaboration */}
                                <div className="mt-8 relative h-32 bg-white rounded-lg overflow-hidden border border-teal-100 shadow-sm">
                                    <div className="absolute inset-0 flex items-center justify-around">
                                        {/* Human representation */}
                                        <motion.div
                                            className="flex flex-col items-center"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 flex items-center justify-center">
                                                <Users className="h-6 w-6 text-white" />
                                            </div>
                                            <span className="text-xs text-teal-600 mt-2">
                                                Human Leaders
                                            </span>
                                        </motion.div>

                                        {/* Connection lines */}
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-teal-400/30"
                                            animate={{
                                                opacity: [0.3, 0.8, 0.3],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />

                                        {/* Data pulses */}
                                        <motion.div
                                            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400"
                                            animate={{
                                                x: [-20, 20],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />

                                        <motion.div
                                            className="absolute top-1/2 left-2/3 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400"
                                            animate={{
                                                x: [20, -20],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: 0.7,
                                            }}
                                        />

                                        {/* AI representation */}
                                        <motion.div
                                            className="flex flex-col items-center"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 2,
                                            }}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center">
                                                <Brain className="h-6 w-6 text-white" />
                                            </div>
                                            <span className="text-xs text-teal-600 mt-2">
                                                AI Intelligence
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 mr-3">
                                        <Shield className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900">
                                        Our Core Values
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                    {[
                                        {
                                            title: "Evidence-Informed Excellence",
                                            description:
                                                "We ground our approach in scientific rigor and validated methodologies",
                                            icon: (
                                                <FileCheck className="w-5 h-5 text-white" />
                                            ),
                                            color: "from-teal-500 to-teal-400",
                                            delay: 0,
                                        },
                                        {
                                            title: "Intelligent Wellness",
                                            description:
                                                "We leverage AI to personalize and optimize health journeys",
                                            icon: (
                                                <Zap className="w-5 h-5 text-white" />
                                            ),
                                            color: "from-teal-400 to-cyan-500",
                                            delay: 0.1,
                                        },
                                        {
                                            title: "Community Empowerment",
                                            description:
                                                "We believe in the power of social connection to drive lasting change",
                                            icon: (
                                                <Users className="w-5 h-5 text-white" />
                                            ),
                                            color: "from-teal-500 to-teal-400",
                                            delay: 0.2,
                                        },
                                        {
                                            title: "Visionary Innovation",
                                            description:
                                                "We anticipate the future of healthcare rather than simply react to it",
                                            icon: (
                                                <Sparkles className="w-5 h-5 text-white" />
                                            ),
                                            color: "from-teal-400 to-cyan-500",
                                            delay: 0.3,
                                        },
                                    ].map((value, i) => (
                                        <motion.div
                                            key={value.title}
                                            custom={i}
                                            variants={valueCardVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{
                                                once: true,
                                                margin: "-50px",
                                            }}
                                            className="bg-white border border-teal-100 rounded-lg p-4 hover:bg-teal-50/50 transition-colors duration-300 shadow-sm"
                                        >
                                            <div className="flex items-start">
                                                <div
                                                    className={`p-2 rounded-full bg-gradient-to-r ${value.color} mr-3 flex-shrink-0`}
                                                >
                                                    {value.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                                                        {value.title}
                                                    </h4>
                                                    <p className="text-slate-600 text-xs">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Team CTA Section */}
            <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600">
                <div className="absolute inset-0 bg-[url('/placeholder.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-teal-600/40"></div>

                <motion.div
                    className="container mx-auto relative z-10 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Join Our Vision for Modern Healthcare
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Connect with our team and discover how Tefline is
                            transforming the future of wellness through
                            innovative technology and evidence-based approaches.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Link
                                href="/contact"
                                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group shadow-lg hover:bg-white/90"
                            >
                                Get In Touch
                                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Link
                                href="/about"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
                            >
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

// These components don't exist in the codebase, creating them here as placeholders
function FileCheck(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="m9 15 2 2 4-4" />
        </svg>
    );
}
