"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    TrendingUp,
    BarChart3,
    Globe,
    LineChart,
    Zap,
    Brain,
    PiggyBank,
    ArrowUpRight,
    CheckCircle,
    Sparkles,
    Target,
    Rocket,
    Layers,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function InvestPage() {
    // Refs for scroll animations
    const heroRef = useRef<HTMLDivElement>(null);
    const opportunityRef = useRef<HTMLDivElement>(null);
    const whyInvestRef = useRef<HTMLDivElement>(null);
    const fundingRef = useRef<HTMLDivElement>(null);
    const aiLeadershipRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Check if sections are in view
    const isOpportunityInView = useInView(opportunityRef, {
        once: true,
        amount: 0.3,
    });
    const isWhyInvestInView = useInView(whyInvestRef, {
        once: true,
        amount: 0.3,
    });
    const isFundingInView = useInView(fundingRef, { once: true, amount: 0.3 });
    const isAiLeadershipInView = useInView(aiLeadershipRef, {
        once: true,
        amount: 0.3,
    });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

    // Parallax effect for hero section
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
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

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="relative min-h-[70vh] flex items-center pt-16 pb-16"
                style={{ opacity: heroOpacity, y: heroY }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600/80" />

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
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-teal-50 text-sm font-medium mb-4">
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
                                    <Link href="/contact?investor=true">
                                        Connect With Our Investment Team
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 transition-all duration-300"
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
                            <div className="relative h-96 w-full p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
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
                                <div className="absolute top-6 left-6 text-white">
                                    <h3 className="font-semibold text-lg">
                                        Growth Potential
                                    </h3>
                                    <p className="text-white/70 text-sm">
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
                                        <span className="text-amber-300">
                                            +85%
                                        </span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </motion.section>

            {/* Opportunity Section */}
            <section
                id="opportunity"
                ref={opportunityRef}
                className="py-24 bg-white"
            >
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate={isOpportunityInView ? "visible" : "hidden"}
                            variants={fadeInLeft}
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                                <Target className="w-4 h-4 mr-2" />
                                Strategic Positioning
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                FORWARD-LOOKING POSITIONING
                            </h2>
                            <div className="space-y-4 text-slate-700">
                                <p>
                                    At Tefline, we are at the inflection point
                                    of the digital wellness revolution. Having
                                    successfully closed our pre-seed round, we
                                    are now deploying capital to drive
                                    product-market fit and revenue traction.
                                </p>
                                <p>
                                    With a powerful blend of AI, behavioral
                                    science and lifestyle medicine, we are
                                    poised to dominate the growing demand for
                                    preventive, data-driven health solutions.
                                    The next 6-12 months will be a watershed
                                    moment for Tefline, as we transition from
                                    early traction to scalable growth.
                                </p>
                                <p className="font-medium text-teal-700">
                                    We are seeking strategic investors who
                                    recognize that momentum is everything—those
                                    who want to be ahead of the curve before our
                                    hockey stick revenue takes off.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="bg-teal-50 py-2 px-4 rounded-full text-sm font-medium text-teal-600 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Pre-seed funded
                                </div>
                                <div className="bg-amber-50 py-2 px-4 rounded-full text-sm font-medium text-amber-600 flex items-center">
                                    <Rocket className="w-4 h-4 mr-2" />
                                    Primed for growth
                                </div>
                                <div className="bg-sky-50 py-2 px-4 rounded-full text-sm font-medium text-sky-600 flex items-center">
                                    <Brain className="w-4 h-4 mr-2" />
                                    AI-driven approach
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate={isOpportunityInView ? "visible" : "hidden"}
                            variants={fadeInRight}
                            className="relative"
                        >
                            <div className="absolute -top-6 -left-6 w-full h-full bg-teal-100 rounded-xl" />
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-100 rounded-xl opacity-70" />
                            <div className="relative">
                                <Image
                                    src="/placeholder.webp"
                                    alt="Investment opportunity"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                                />
                                <motion.div
                                    className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-4 border-t border-teal-100"
                                    initial={{ y: 100 }}
                                    animate={
                                        isOpportunityInView ? { y: 0 } : {}
                                    }
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <h3 className="font-semibold text-teal-700 flex items-center">
                                        <TrendingUp className="w-4 h-4 mr-2" />
                                        Market Timing
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        The wellness technology market is
                                        projected to reach $1.3 trillion by
                                        2030, with AI-enhanced solutions showing
                                        the highest growth rate.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Why Invest Section */}
            <section
                ref={whyInvestRef}
                className="py-24 bg-teal-50 relative overflow-hidden"
            >
                {/* Blurred gradient background */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-[100px]"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-100 rounded-full opacity-40 blur-[80px]"></div>

                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        animate={isWhyInvestInView ? "visible" : "hidden"}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Compelling Advantages
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            WHY INVEST NOW?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Five key reasons why Tefline represents a unique
                            investment opportunity in the rapidly evolving
                            wellness intelligence market
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isWhyInvestInView ? "visible" : "hidden"}
                        variants={staggerCards}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    >
                        {[
                            {
                                title: "Early Mover Advantage",
                                icon: <Globe className="w-6 h-6 text-white" />,
                                description:
                                    "Leading the Wellness Intelligence™ revolution before it becomes a crowded marketplace. Tefline has staked an early claim in this emerging space with proprietary technology.",
                                color: "from-teal-600 to-teal-400",
                                textColor: "text-teal-600",
                            },
                            {
                                title: "Subscription Model",
                                icon: (
                                    <LineChart className="w-6 h-6 text-white" />
                                ),
                                description:
                                    "Our subscription-based approach ensures recurring revenue with high lifetime value. By focusing on retention and expanding services, we create long-term sustainable growth.",
                                color: "from-amber-600 to-amber-400",
                                textColor: "text-amber-600",
                            },
                            {
                                title: "Behavioral Health Market",
                                icon: <Brain className="w-6 h-6 text-white" />,
                                description:
                                    "The behavioral health market is experiencing exponential growth as digital well-being becomes a priority for consumers, employers, and healthcare providers alike.",
                                color: "from-sky-600 to-sky-400",
                                textColor: "text-sky-600",
                            },
                            {
                                title: "AI-Driven Approach",
                                icon: <Zap className="w-6 h-6 text-white" />,
                                description:
                                    "Our AI-powered decision-making framework ensures capital is deployed with maximum impact while safeguarding investor interests through predictive modeling.",
                                color: "from-green-600 to-green-400",
                                textColor: "text-green-600",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.2 },
                                }}
                                className="relative group"
                            >
                                <Card className="h-full overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.color}"></div>
                                    <CardContent className="p-6">
                                        <div className="mb-4 w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-r ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <h3
                                            className={`text-xl font-semibold mb-3 ${item.textColor}`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isWhyInvestInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white p-8 rounded-xl shadow-md border border-slate-100"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-teal-600 flex items-center">
                                    <Globe className="w-5 h-5 mr-2" />
                                    Global Entry in Enterprise AI Agenting
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Tefline is pioneering the application of AI
                                    agents in lifestyle medicine, creating a new
                                    category of "agentic wellness" that extends
                                    beyond traditional health apps and
                                    platforms.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "First-mover advantage in AI agenting",
                                        "Category-defining approach",
                                        "Patent-pending technology",
                                    ].map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                            </div>
                                            <span className="ml-2 text-slate-700">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-amber-600 flex items-center">
                                    <PiggyBank className="w-5 h-5 mr-2" />
                                    Pre-seed Funded and Poised for SaaS Scale
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    With successful pre-seed funding already
                                    secured, we've validated our concept and
                                    built the foundation for rapid scaling with
                                    attractive unit economics and margins.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "High-margin SaaS business model",
                                        "Validated market fit",
                                        "Strong retention metrics",
                                    ].map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                            </div>
                                            <span className="ml-2 text-slate-700">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Funding Roadmap Section */}
            <section ref={fundingRef} className="py-24 bg-white">
                <Container>
                    <motion.div
                        initial="hidden"
                        animate={isFundingInView ? "visible" : "hidden"}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Layers className="w-4 h-4 mr-2" />
                            Growth Strategy
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            FUNDING ROADMAP
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our strategic approach to capital raising ensures
                            efficient growth and value creation
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical timeline line */}
                        <div className="absolute h-full w-1 bg-gradient-to-b from-teal-300 via-teal-400 to-teal-500 left-0 sm:left-1/2 transform sm:-translate-x-1/2 z-0 top-0"></div>

                        {/* Timeline entries */}
                        {[
                            {
                                title: "Pre-Seed Round",
                                time: "Q3 2024",
                                status: "COMPLETED",
                                statusClass: "bg-green-100 text-green-600",
                                icon: (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                ),
                                description:
                                    "Successfully closed initial funding to validate concept, build MVP, and establish early traction.",
                                position: "right",
                                delay: 0.1,
                            },
                            {
                                title: "Seed Round",
                                time: "Q1-Q2 2025",
                                status: "CURRENT OPPORTUNITY",
                                statusClass: "bg-amber-100 text-amber-600",
                                icon: (
                                    <Target className="w-5 h-5 text-amber-500" />
                                ),
                                amount: "₹10 Cr (~$1.1M)",
                                description:
                                    "Fueling our next growth phase and positioning for a strong Series A raise in 2026.",
                                position: "left",
                                delay: 0.4,
                            },
                            {
                                title: "Series A",
                                time: "2026",
                                status: "PLANNED",
                                statusClass: "bg-slate-100 text-slate-600",
                                icon: (
                                    <Rocket className="w-5 h-5 text-slate-500" />
                                ),
                                description:
                                    "With proven traction, we'll seek a significant Series A round to expand globally.",
                                position: "right",
                                delay: 0.7,
                            },
                        ].map((stage, index) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    isFundingInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: stage.delay,
                                }}
                                className={`relative z-10 mb-12 flex ${
                                    stage.position === "left"
                                        ? "flex-row-reverse sm:flex-row"
                                        : "flex-row-reverse"
                                }`}
                            >
                                {/* Timeline point */}
                                <div className="absolute sm:static flex items-center justify-center left-0 sm:left-auto transform sm:transform-none -translate-x-[12px] sm:translate-x-0">
                                    <div
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border-4 border-white ${
                                            index === 1
                                                ? "bg-amber-500"
                                                : "bg-teal-500"
                                        } shadow-md`}
                                    >
                                        {index === 1 && (
                                            <span className="text-white text-xs font-bold">
                                                $
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`ml-8 sm:ml-0 ${
                                        stage.position === "left"
                                            ? "sm:mr-12 text-left"
                                            : "sm:ml-12 text-left"
                                    } sm:w-[calc(50%-24px)]`}
                                >
                                    <div
                                        className={`bg-white p-5 rounded-xl shadow-md border ${
                                            index === 1
                                                ? "border-amber-200"
                                                : "border-teal-100"
                                        } relative`}
                                    >
                                        {/* Arrow */}
                                        <div
                                            className={`absolute hidden sm:block h-4 w-4 bg-white border-t border-l ${
                                                stage.position === "left"
                                                    ? "right-0 transform translate-x-2 rotate-45 border-r-0 border-b-0 border-teal-100"
                                                    : "left-0 transform -translate-x-2 rotate-225 border-r-0 border-b-0 border-teal-100"
                                            } top-6`}
                                        ></div>

                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-slate-900">
                                                    {stage.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm">
                                                    {stage.time}
                                                </p>
                                            </div>
                                            <div
                                                className={`${stage.statusClass} py-1 px-3 rounded-full text-xs font-semibold`}
                                            >
                                                {stage.status}
                                            </div>
                                        </div>

                                        {stage.amount && (
                                            <div className="mb-3">
                                                <span className="text-2xl font-bold text-amber-600">
                                                    {stage.amount}
                                                </span>
                                            </div>
                                        )}

                                        <p className="text-slate-600">
                                            {stage.description}
                                        </p>

                                        {index === 1 && (
                                            <div className="mt-4">
                                                <Button
                                                    className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white group"
                                                    asChild
                                                >
                                                    <Link
                                                        href="/contact?investor=true"
                                                        className="flex items-center"
                                                    >
                                                        Request Investor Deck
                                                        <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* AI Leadership Section */}
            <section
                ref={aiLeadershipRef}
                className="py-24 bg-gradient-to-r from-teal-900 to-teal-700 text-white relative overflow-hidden"
            >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/placeholder.webp')] opacity-10 mix-blend-overlay"></div>

                {/* Circuit board pattern */}
                <div className="absolute inset-0">
                    <svg
                        className="absolute w-full h-full opacity-5"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <pattern
                            id="circuitPattern"
                            patternUnits="userSpaceOnUse"
                            width="100"
                            height="100"
                            patternTransform="scale(2) rotate(0)"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                d="M20,20 L80,20 M20,20 L20,80 M80,20 L80,80 M20,80 L80,80 M40,20 L40,40 M40,40 L60,40 M60,40 L60,20 M40,60 L20,60 M60,60 L80,60 M40,60 L40,80 M60,60 L60,80"
                            />
                            <circle cx="20" cy="20" r="3" fill="currentColor" />
                            <circle cx="80" cy="20" r="3" fill="currentColor" />
                            <circle cx="20" cy="80" r="3" fill="currentColor" />
                            <circle cx="80" cy="80" r="3" fill="currentColor" />
                            <circle cx="40" cy="40" r="3" fill="currentColor" />
                            <circle cx="60" cy="40" r="3" fill="currentColor" />
                            <circle cx="40" cy="60" r="3" fill="currentColor" />
                            <circle cx="60" cy="60" r="3" fill="currentColor" />
                        </pattern>
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#circuitPattern)"
                        />
                    </svg>
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        animate={isAiLeadershipInView ? "visible" : "hidden"}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-teal-50 text-sm font-medium mb-4">
                            <Brain className="w-4 h-4 mr-2" />
                            Innovative Leadership
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            AI-ENHANCED LEADERSHIP
                        </h2>
                        <p className="text-lg text-teal-50/90 max-w-3xl mx-auto">
                            Intelligent capital deployment fueling high-growth
                            startups
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate={
                                isAiLeadershipInView ? "visible" : "hidden"
                            }
                            variants={fadeInLeft}
                        >
                            <h3 className="text-2xl font-semibold mb-6">
                                Smarter Scaling, Optimized Capital
                            </h3>
                            <p className="mb-6 text-teal-50/90">
                                To drive precision in our scaling strategy, we
                                have embedded an AI-powered
                                decision-augmentation framework that
                                continuously refines market positioning,
                                financial planning, and strategic growth.
                            </p>
                            <p className="mb-6 text-teal-50/90">
                                By leveraging real-time data, it ensures capital
                                is deployed with maximum impact while
                                safeguarding investor interests through
                                predictive modeling of traction milestones and
                                potential risks.
                            </p>
                            <p className="mb-6 text-teal-50/90">
                                AI-driven insights reduce burn rate
                                inefficiencies, accelerating our path to
                                profitability with smarter, faster scaling.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">
                                {[
                                    "Market foresight",
                                    "Optimized deployment",
                                    "Investor-grade modeling",
                                    "Reduced bias",
                                ].map((advantage, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
                                    >
                                        {advantage}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate={
                                isAiLeadershipInView ? "visible" : "hidden"
                            }
                            variants={fadeInRight}
                        >
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-purple-300/30 mr-4">
                                        <Brain className="w-6 h-6 text-purple-200" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Selena Deus
                                        </h3>
                                        <p className="text-teal-50/70 text-sm">
                                            Chief Intelligent Assistant Officer
                                            (CIAO)
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2 text-amber-200">
                                        World's First AI C-Suite Executive
                                    </h4>
                                    <p className="text-teal-50/90">
                                        Tefline has made history as the first
                                        company to appoint an AI as a Chief
                                        Officer. Selena Deus drives strategic
                                        foresight and capital efficiency,
                                        ensuring every investment decision is
                                        guided by data-driven intelligence.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {
                                            title: "AI-Enhanced Market Foresight",
                                            desc: "Predicting trends and providing strategic guidance",
                                        },
                                        {
                                            title: "Optimized Capital Deployment",
                                            desc: "Minimizing burn rate inefficiencies",
                                        },
                                        {
                                            title: "Investor-Grade AI Modeling",
                                            desc: "Forecasting traction milestones and de-risking strategies",
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="flex">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                                            </div>
                                            <div className="ml-3">
                                                <h5 className="font-medium text-amber-100">
                                                    {item.title}
                                                </h5>
                                                <p className="text-sm text-teal-50/70">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <Button
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10 transition-colors"
                                        asChild
                                    >
                                        <Link
                                            href="/press"
                                            className="flex items-center"
                                        >
                                            Read Our Press Release
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
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
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
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
                                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
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
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={
                                        isCtaInView ? { y: 0, opacity: 1 } : {}
                                    }
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                                        asChild
                                    >
                                        <Link
                                            href="/contact?investor=true"
                                            className="px-8"
                                        >
                                            Connect With Our Investment Team
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
