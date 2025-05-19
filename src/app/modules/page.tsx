"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    Brain,
    CheckCircle,
    ChevronRight,
    ArrowRight,
    Code,
    Award,
    Building,
    HeartPulse,
    Sparkles,
    TrendingUp,
    Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
    individualServices,
    enterpriseSolutions,
    successMetrics,
} from "@/lib/constants/services";

export default function ServicesPage() {
    const individualRef = useRef<HTMLDivElement>(null);
    const enterpriseRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

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

    // Check if sections are in view
    const isIndividualInView = useInView(individualRef, {
        once: true,
        amount: 0.3,
    });
    const isEnterpriseInView = useInView(enterpriseRef, {
        once: true,
        amount: 0.3,
    });
    const isResultsInView = useInView(resultsRef, { once: true, amount: 0.3 });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerCards = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    // Enterprise solution icons map
    const solutionIcons = {
        building: <Building className="h-6 w-6 text-white" />,
        medical: <HeartPulse className="h-6 w-6 text-white" />,
        code: <Code className="h-6 w-6 text-white" />,
        certificate: <Award className="h-6 w-6 text-white" />,
    };

    // Helper function to safely get icon by key
    const getSolutionIcon = (iconKey: string) => {
        return (
            solutionIcons[iconKey as keyof typeof solutionIcons] || (
                <Building className="h-6 w-6 text-white" />
            )
        );
    };

    return (
        <main className="overflow-hidden">
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
                            Transformative Wellness Solutions
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                            variants={fadeIn}
                        >
                            Our{" "}
                            <span className="relative z-10 bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                                Services
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl mb-10 text-teal-50/90 leading-relaxed"
                            variants={fadeIn}
                        >
                            Comprehensive wellness solutions designed to
                            optimize your healthspan and transform your approach
                            to well-being.
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
                                <Button
                                    size="lg"
                                    className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                                    className="border-white text-white hover:bg-white/10 transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Book a Consultation
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Individual Services Section */}
            <section
                id="individual-services"
                ref={individualRef}
                className="py-24 bg-white relative overflow-hidden"
            >
                {/* Background decorative elements */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-50 rounded-full opacity-50 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-50 rounded-full opacity-50 blur-[80px]"></div>

                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        animate={isIndividualInView ? "visible" : "hidden"}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Brain className="w-4 h-4 mr-2" />
                            Personalized Care
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            INDIVIDUAL SERVICES
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Tailored solutions designed to optimize your
                            personal wellness journey through evidence-informed
                            protocols and intelligent guidance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isIndividualInView ? "visible" : "hidden"}
                        variants={staggerCards}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {individualServices.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow:
                                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    transition: { duration: 0.2 },
                                }}
                                className="group"
                            >
                                <Card className="h-full overflow-hidden border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-72 w-full overflow-hidden rounded-xl">
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <p className="text-slate-600 mb-6">
                                            {service.description}
                                        </p>
                                        <h4 className="font-semibold text-teal-600 mb-3 flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2 mb-4">
                                            {service.features.map(
                                                (feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="flex items-start"
                                                        initial={{
                                                            opacity: 0,
                                                            x: -10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                0.5 + idx * 0.1,
                                                        }}
                                                    >
                                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                                                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                                        </div>
                                                        <span className="ml-2 text-slate-700">
                                                            {feature}
                                                        </span>
                                                    </motion.li>
                                                )
                                            )}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                                        <Button
                                            className="w-full bg-teal-600 hover:bg-teal-700 text-white group"
                                            asChild
                                        >
                                            <Link
                                                href="/contact"
                                                className="flex items-center justify-center"
                                            >
                                                {service.buttonText}
                                                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* Results Section */}
            <section
                ref={resultsRef}
                className="py-20 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden"
            >
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {Array.from({ length: 30 }).map((_, i) => (
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
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={
                                    isResultsInView
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
                                        : {}
                                }
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                                }}
                                className="bg-white rounded-lg p-8 shadow-md border border-teal-100 group relative overflow-hidden"
                            >
                                {/* Background color pulse animation */}
                                <motion.div
                                    className="absolute inset-0 bg-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />

                                <div className="relative z-10">
                                    <motion.h3
                                        className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={
                                            isResultsInView
                                                ? { y: 0, opacity: 1 }
                                                : {}
                                        }
                                        transition={{
                                            delay: 0.2 + index * 0.1,
                                            duration: 0.5,
                                        }}
                                    >
                                        {metric.stat}
                                    </motion.h3>
                                    <motion.p
                                        className="text-slate-700"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={
                                            isResultsInView
                                                ? { y: 0, opacity: 1 }
                                                : {}
                                        }
                                        transition={{
                                            delay: 0.3 + index * 0.1,
                                            duration: 0.5,
                                        }}
                                    >
                                        {metric.description}
                                    </motion.p>

                                    {/* Animated underline */}
                                    <motion.div
                                        className="h-1 mt-4 bg-gradient-to-r from-teal-400 to-teal-200 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={
                                            isResultsInView
                                                ? { width: "100%" }
                                                : { width: 0 }
                                        }
                                        transition={{
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 rounded-lg border border-amber-200 shadow-md"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-amber-200 flex items-center justify-center">
                                    <span className="text-amber-700 text-lg font-bold">
                                        HR
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-amber-100/20" />
                                </div>
                            </div>
                            <div>
                                <blockquote className="text-slate-700 text-lg italic relative">
                                    <span className="text-amber-400 text-4xl absolute -top-3 -left-4 opacity-30">
                                        "
                                    </span>
                                    "Implementing Tefline's wellness program has
                                    transformed our organization. Employee
                                    engagement is up, sick days are down, and
                                    we're seeing real improvements in overall
                                    wellbeing."
                                    <span className="text-amber-400 text-4xl absolute -bottom-5 -right-4 opacity-30">
                                        "
                                    </span>
                                </blockquote>
                                <div className="mt-3">
                                    <p className="font-semibold text-slate-800">
                                        HR Director
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        Fortune 500 Company
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Enterprise Solutions Section */}
            <section
                ref={enterpriseRef}
                className="py-24 bg-teal-50 relative overflow-hidden"
            >
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-100 rounded-full opacity-40 blur-[80px]"></div>

                {/* Grid pattern background */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                            />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        animate={isEnterpriseInView ? "visible" : "hidden"}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Building className="w-4 h-4 mr-2" />
                            Organizational Wellness
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            ENTERPRISE SOLUTIONS
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Empower your organization with evidence-informed
                            wellness programs designed to improve outcomes and
                            enhance performance
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {enterpriseSolutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isEnterpriseInView
                                        ? { opacity: 1, y: 0 }
                                        : {}
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * (index + 1),
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                                }}
                                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-start p-6">
                                    <div className="flex-shrink-0 mr-5">
                                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {getSolutionIcon(solution.icon)}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                                            {solution.title}
                                        </h3>
                                        <p className="text-slate-600 mb-4">
                                            {solution.description}
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="border-teal-200 text-teal-600 hover:bg-teal-50 group"
                                            asChild
                                        >
                                            <Link
                                                href="/contact"
                                                className="flex items-center"
                                            >
                                                {solution.buttonText}
                                                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Bottom pulse line */}
                                <motion.div
                                    className="h-1 w-0 bottom-0 bg-gradient-to-r from-teal-400 to-teal-200"
                                    animate={
                                        isEnterpriseInView
                                            ? {
                                                width: ["0%", "100%", "0%"],
                                                x: ["0%", "0%", "100%"],
                                            }
                                            : {}
                                    }
                                    transition={{
                                        duration: 3,
                                        delay: 0.5 + index * 0.3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Custom enterprise section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isEnterpriseInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="mt-16 rounded-xl overflow-hidden shadow-xl"
                    >
                        <div className="bg-gradient-to-tl from-teal-400 via-teal-600 to-teal-600 to-teal-600 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                <div className="p-8 md:p-12 relative">
                                    {/* Abstract shapes background */}
                                    <div className="absolute inset-0 opacity-10">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                        >
                                            <circle
                                                cx="20"
                                                cy="20"
                                                r="10"
                                                fill="white"
                                            />
                                            <circle
                                                cx="70"
                                                cy="70"
                                                r="15"
                                                fill="white"
                                            />
                                            <circle
                                                cx="80"
                                                cy="10"
                                                r="5"
                                                fill="white"
                                            />
                                            <circle
                                                cx="10"
                                                cy="80"
                                                r="8"
                                                fill="white"
                                            />
                                            <polygon
                                                points="50,0 100,50 50,100 0,50"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                        </svg>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-teal-50 text-sm font-medium mb-4">
                                            <Target className="w-4 h-4 mr-2" />
                                            Custom Solutions
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">
                                            Custom Enterprise Integration
                                        </h3>
                                        <p className="mb-6 text-teal-50/90">
                                            Need a tailored solution for your
                                            specific organizational challenges?
                                            We specialize in designing custom
                                            wellness programs that integrate
                                            seamlessly with your existing
                                            systems and culture.
                                        </p>
                                        <div className="space-y-3 mb-6">
                                            {[
                                                "Integration with existing HR systems",
                                                "Custom analytics dashboards",
                                                "Tailored wellness protocols",
                                            ].map((point, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start"
                                                >
                                                    <CheckCircle className="w-5 h-5 text-teal-300 mr-2 flex-shrink-0 mt-0.5" />
                                                    <span className="text-teal-50">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button
                                            className="bg-white text-teal-700 hover:bg-white/90 shadow"
                                            asChild
                                        >
                                            <Link href="/contact">
                                                Schedule a Consultation
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <Image
                                        src="/tefline-image9.png"
                                        alt="Enterprise wellness"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-teal-900/50 via-teal-700/30 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Sparkles className="w-5 h-5 text-amber-300" />
                                            <span className="text-white font-medium">
                                                Enterprise Excellence
                                            </span>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                                            <p className="text-white/90 text-sm">
                                                Join over 75+ enterprise clients
                                                who have transformed their
                                                organizational wellness
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-600 to-teal-500 -z-10" />

                {/* Animated wave pattern background */}
                <div className="absolute inset-0 -z-5">
                    <svg
                        viewBox="0 0 1200 600"
                        className="absolute w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M 0 300 Q 300 200 600 300 Q 900 400 1200 300 L 1200 600 L 0 600 Z"
                            fill="white"
                            opacity="0.05"
                            animate={{
                                d: [
                                    "M 0 300 Q 300 200 600 300 Q 900 400 1200 300 L 1200 600 L 0 600 Z",
                                    "M 0 300 Q 300 400 600 300 Q 900 200 1200 300 L 1200 600 L 0 600 Z",
                                    "M 0 300 Q 300 200 600 300 Q 900 400 1200 300 L 1200 600 L 0 600 Z",
                                ],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        />
                        <motion.path
                            d="M 0 350 Q 300 250 600 350 Q 900 450 1200 350 L 1200 600 L 0 600 Z"
                            fill="white"
                            opacity="0.07"
                            animate={{
                                d: [
                                    "M 0 350 Q 300 250 600 350 Q 900 450 1200 350 L 1200 600 L 0 600 Z",
                                    "M 0 350 Q 300 450 600 350 Q 900 250 1200 350 L 1200 600 L 0 600 Z",
                                    "M 0 350 Q 300 250 600 350 Q 900 450 1200 350 L 1200 600 L 0 600 Z",
                                ],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        />
                    </svg>
                </div>

                <div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] opacity-10 mix-blend-overlay -z-5" />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100,
                        }}
                        className="max-w-3xl mx-auto text-center text-white bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 shadow-xl"
                    >
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Transform Your Approach
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to transform your approach to wellness?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Contact our team to discuss how Tefline can support
                            your wellness journey and help you achieve optimal
                            health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                asChild
                            >
                                <Link href="/contact">Book a Consultation</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 transition-all duration-300"
                                asChild
                            >
                                <Link href="/contact?service=masterclass">
                                    Request a Free Masterclass
                                </Link>
                            </Button>
                        </div>

                        {/* Animated glow effect */}
                        <motion.div
                            className="absolute inset-0 -z-10 bg-teal-400/20 rounded-2xl blur-xl"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [0.8, 0.9, 0.8],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    </motion.div>
                </Container>
            </section>
        </main>
    );
}
