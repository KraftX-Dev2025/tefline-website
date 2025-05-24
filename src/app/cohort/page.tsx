"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
} from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    // For parallax effects
    const pageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: pageRef,
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
            boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.4)",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <div
            ref={pageRef}
            className="min-h-screen primary-gradient overflow-hidden"
        >
            {/* Integrated Hero & Team Section */}
            <section className="relative pt-32 pb-24 px-4">
                {/* Background Elements */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Blurred gradient circles */}
                    <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-cyan-500/20 blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-300/20 blur-[100px] opacity-60"></div>
                    <div className="absolute top-1/3 left-0 w-[25rem] h-[25rem] rounded-full bg-orange-400/10 blur-[80px] opacity-70"></div>
                </motion.div>

                {/* Floating DNA-like particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-cyan-300/30"
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

                <div className="container mx-auto relative z-20">
                    {/* Hero Content */}
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeIn}
                            className="mb-3 py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-teal-100 text-sm font-medium inline-flex items-center shadow-lg"
                        >
                            <Users className="w-4 h-4 mr-2" />
                            Our Leadership
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
                            variants={fadeIn}
                        >
                            TEAM TEFLINE

                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-teal-50 leading-relaxed text-white"
                            variants={fadeIn}
                        >
                            Meet the visionaries behind Tefline's mission to
                            redefine healthcare through lifestyle medicine and
                            AI intelligence.
                        </motion.p>
                    </motion.div>

                    {/* Team Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
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
                                className="h-full"
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <Link
                                    href={`/cohort/${member.slug}`}
                                    className="block h-full"
                                >
                                    <div className="relative group h-full bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-white/20 hover:border-white/30">
                                        {/* Shimmering background effect */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-tr ${member.theme.from} ${member.theme.to} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        ></div>

                                        {/* Card content */}
                                        <div className="relative z-10 p-6 flex flex-col h-full">
                                            {/* Profile Image */}
                                            <div className="flex justify-center mb-5">
                                                <div className="relative">
                                                    <div
                                                        className={`w-32 h-32 rounded-full overflow-hidden bg-gradient-to-tr ${member.theme.from} ${member.theme.to} p-0.5 shadow-lg`}
                                                    >
                                                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                                                            <Image
                                                                src={
                                                                    member.image ??
                                                                    "/subramanium.webp"
                                                                }
                                                                alt={
                                                                    member.name
                                                                }
                                                                className="w-full h-full object-cover filter group-hover:saturate-100 transition-all duration-500"
                                                                width={400}
                                                                height={400}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Decorative elements */}
                                                    {activeCard === index && (
                                                        <>
                                                            <motion.div
                                                                className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-tr ${member.theme.from} ${member.theme.to} shadow-md`}
                                                                animate={{
                                                                    rotate: 360,
                                                                }}
                                                                transition={{
                                                                    duration: 10,
                                                                    repeat: Infinity,
                                                                    ease: "linear",
                                                                }}
                                                            />
                                                            <motion.div
                                                                className={`absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-tr ${member.theme.from} ${member.theme.to} shadow-md`}
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Member Details */}
                                            <div className="text-center mb-4">
                                                <h3 className="text-xl font-bold text-primary group-hover:text-teal-200 transition-colors">
                                                    {member.name}
                                                </h3>
                                                <p
                                                    className={`text-sm font-medium mt-1 text-primary`}
                                                >
                                                    {member.role}
                                                </p>
                                                <p className="text-primary/80 text-xs mb-4 italic">
                                                    {member.secondaryRole}
                                                </p>
                                            </div>

                                            {/* Member Bio */}
                                            <p className="text-primary/90 text-sm text-center mb-6 flex-grow">
                                                {member.shortBio}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="mt-auto text-center">
                                                <span
                                                    className={`inline-flex items-center text-teal-800 text-sm transition-colors`}
                                                >
                                                    Read Full Bio
                                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Connector lines between cards */}
                                        {index < teamMembers.length - 1 &&
                                            index !== 1 && (
                                                <motion.div
                                                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-teal-400/70 to-transparent z-0"
                                                    initial={{
                                                        scaleX: 0,
                                                        opacity: 0,
                                                    }}
                                                    whileInView={{
                                                        scaleX: 1,
                                                        opacity: 0.6,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay:
                                                            0.5 + index * 0.2,
                                                        duration: 0.8,
                                                    }}
                                                />
                                            )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Dynamics Section */}
            <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
                {/* Blurred gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-[100px]"></div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center bg-teal-800/70 text-teal-100 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Network className="w-4 h-4 mr-2" />
                            Collaborative Excellence
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-teal-900">
                            Team Dynamics
                        </h2>
                        <p className="text-slate-700 max-w-2xl mx-auto">
                            How we work together to create transformative
                            wellness solutions
                        </p>
                    </motion.div>

                    <div className="bg-teal-800/50 backdrop-blur-md rounded-2xl border border-teal-700/40 overflow-hidden shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 mr-3">
                                        <Brain className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        Human-AI Collaboration
                                    </h3>
                                </div>
                                <p className="text-teal-50 leading-relaxed">
                                    At Tefline, we pioneer a unique approach to
                                    leadership where human expertise and AI
                                    intelligence work in perfect harmony. Our
                                    collaborative model leverages the strategic
                                    vision of our human leaders with the
                                    data-driven insights of our AI executive.
                                </p>

                                {/* Animated graphic showing human-AI collaboration */}
                                <div className="mt-8 relative h-32 bg-teal-900/50 rounded-lg overflow-hidden">
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
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 flex items-center justify-center">
                                                <Users className="h-6 w-6 text-white" />
                                            </div>
                                            <span className="text-xs text-cyan-300 mt-2">
                                                Human Leaders
                                            </span>
                                        </motion.div>

                                        {/* Connection lines */}
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-cyan-400/30"
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
                                            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400"
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
                                            <span className="text-xs text-teal-300 mt-2">
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
                                    <h3 className="text-xl font-semibold text-white">
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
                                                <FileCheck className="w-5 h-5 text-cyan-100" />
                                            ),
                                            color: "from-cyan-500 to-teal-400",
                                            delay: 0,
                                        },
                                        {
                                            title: "Intelligent Wellness",
                                            description:
                                                "We leverage AI to personalize and optimize health journeys",
                                            icon: (
                                                <Zap className="w-5 h-5 text-teal-100" />
                                            ),
                                            color: "from-teal-400 to-cyan-500",
                                            delay: 0.1,
                                        },
                                        {
                                            title: "Community Empowerment",
                                            description:
                                                "We believe in the power of social connection to drive lasting change",
                                            icon: (
                                                <Users className="w-5 h-5 text-cyan-100" />
                                            ),
                                            color: "from-cyan-500 to-teal-400",
                                            delay: 0.2,
                                        },
                                        {
                                            title: "Visionary Innovation",
                                            description:
                                                "We anticipate the future of healthcare rather than simply react to it",
                                            icon: (
                                                <Sparkles className="w-5 h-5 text-teal-100" />
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
                                            className="bg-teal-700/50 border border-teal-600/30 rounded-lg p-4 hover:bg-teal-700/70 transition-colors duration-300 shadow-md"
                                        >
                                            <div className="flex items-start">
                                                <div
                                                    className={`p-2 rounded-full bg-gradient-to-r ${value.color} mr-3 flex-shrink-0`}
                                                >
                                                    {value.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white text-sm mb-1">
                                                        {value.title}
                                                    </h4>
                                                    <p className="text-teal-100/80 text-xs">
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
