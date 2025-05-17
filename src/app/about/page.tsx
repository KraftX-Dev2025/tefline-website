"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    CheckCircle,
    Sparkles,
    FileCheck,
    ChevronRight,
    Users,
    Brain,
    Shield,
    Network,
    Zap,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { teamMembers } from "@/lib/constants/team";

export default function AboutPage() {
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
                    {/* Main teal gradient - Updated to match teal-400 to teal-600 */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 via-teal-700/80 to-teal-600"></div>

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
                            Our Mission
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                            variants={fadeIn}
                        >
                            About{" "}
                            <span className="relative z-10 bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                                Tefline
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-10 text-teal-50/90 leading-relaxed"
                            variants={fadeIn}
                        >
                            Transforming healthcare through evidence-informed
                            wellness and agentic intelligence
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                {/* Blurred gradient background - Updated colors */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-50 rounded-full opacity-50 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-50 rounded-full opacity-50 blur-[80px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="flex justify-center px-4 py-4"
                        >
                            <div className="relative w-full max-w-xl">
                                {/* Image decoration - Updated colors */}
                                <div className="absolute top-4 -left-4 w-full h-full bg-teal-200 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                                    <Image
                                        src="/tefline-image3.png"
                                        alt="Founders meeting"
                                        className="w-full h-auto object-cover rounded-xl"
                                        width={800}
                                        height={800}
                                    />
                                    {/* Floating badge - Updated colors */}
                                    <div className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-teal-600 text-sm font-medium border border-teal-100">
                                        <div className="flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                                            Founded in 2023
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
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                                <FileCheck className="w-4 h-4 mr-2" />
                                Our Beginning
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 leading-tight">
                                OUR STORY
                            </h2>
                            <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                                Tefline was founded in 2023 by a team of
                                visionaries who recognized a fundamental gap in
                                modern healthcare. While tremendous resources
                                were being directed toward managing illness, the
                                vast potential of proactive wellness remained
                                largely untapped.
                            </p>
                            <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                                Our founders, with backgrounds spanning AI
                                technology, behavioral science, and lifestyle
                                medicine, came together with a shared mission:
                                to create an intelligent ecosystem that could
                                transform how people approach their health and
                                well-being.
                            </p>
                            <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                                The name 'Tefline' represents our core
                                philosophy—serving as a lifeline through
                                technology-enhanced frameworks for lifestyle
                                improvement. We believe that by optimizing
                                healthspan through evidence-informed
                                interventions, we can help people not just live
                                longer, but live better.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                                className="inline-block"
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Biological Capital Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-700/70 to-teal-700 opacity-80 z-0"></div>

                {/* Content */}
                <div className="max-w-5xl mx-auto relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-teal-50 px-4 py-1 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Investment in Health
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            BIOLOGICAL CAPITAL
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-lg space-y-6 mb-10"
                    >
                        <p>
                            The lion's share of all healthcare spending is
                            directed toward managing illness, perpetuating the
                            misconception that health is simply the absence of
                            disease. In reality, true wellness extends far
                            beyond the point where sickness ends.
                        </p>
                        <p>
                            Studies repeatedly show that illness occupies only a
                            modest slice of the overall health continuum—yet a
                            disproportionately large bulk of bandwidth and
                            resources are poured into it. By contrast, the vast
                            expanse of wellness remains largely unaddressed.
                        </p>
                        <p className="font-semibold text-xl">
                            Tefline is here to fix that. Build your biological
                            capital like your life depends on it—it truly does.
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
                            href="/services"
                            className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group shadow-lg shadow-amber-500/20"
                        >
                            Discover Our Programs
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Partners & Credentials Section */}
            <section className="py-24 px-4 bg-teal-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Validation & Excellence
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600 leading-tight">
                            TRUSTED PARTNERSHIPS
                        </h2>
                        <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                            We've partnered with leading institutions in
                            healthcare and wellness to ensure the highest
                            standards of excellence in our programs and
                            protocols.
                        </p>
                    </motion.div>

                    {/* Partner Logos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {[1, 2, 3, 4].map((index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                }}
                                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32"
                            >
                                <div className="bg-gray-200 rounded w-full h-16 flex items-center justify-center text-gray-400">
                                    Partner Logo
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-tl from-teal-400 via-teal-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-6">
                            INFORMED AUTHORITY
                        </h3>
                        <p className="text-lg mb-6 leading-relaxed">
                            The seasoned clinical leadership, the strategic
                            partnerships with academic strongholds, the powerful
                            AI lifestyle agenting—they all converge to deliver
                            what healthcare so desperately needs: proactive
                            wellness frameworks that are empathetic, accessible
                            and intelligently adaptive.
                        </p>
                        <Link
                            href="/team"
                            className="inline-flex items-center bg-white/40 backdrop-blur-sm hover:bg-teal-700/90 hover:border-white/60 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                        >
                            Meet Our Advisory Team
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
