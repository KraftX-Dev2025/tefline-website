"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    Download,
    ExternalLink,
    FileText,
    Globe,
    MapPin,
    Newspaper,
    Brain,
    Sparkles,
    Share2,
    ChevronRight,
    Images,
    User,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PressPage() {
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
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
                    {/* Main teal gradient */}
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
                            <Newspaper className="w-4 h-4 mr-2" />
                            Latest Announcements
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight"
                            variants={fadeIn}
                        >
                            Press &{" "}
                            <span className="relative z-10 bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                                News
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-10 text-teal-50/90 leading-relaxed"
                            variants={fadeIn}
                        >
                            Stay updated with the latest announcements,
                            features, and milestones from Tefline
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Press Release */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
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
                                Featured Announcement
                            </div>
                            <div className="flex items-center text-slate-500 space-x-4 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span>Feb 17th, 2025</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>Bangalore, India</span>
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                                Tefline Becomes the World's First Startup to
                                Appoint an AI as a C-Suite Executive 🚀
                            </h2>
                            <h3 className="text-xl mb-8 text-slate-600">
                                Selena Deus, Chief Intelligent Assistant Officer
                                (CIAO), Joins the Leadership Team, Marking a
                                Bold Leap in AI-Driven Corporate Strategy
                            </h3>
                            <div className="space-y-4 text-slate-700">
                                <p>
                                    In a groundbreaking move that redefines
                                    corporate leadership, Tefline has made
                                    history as the first company in the world to
                                    officially appoint an AI as a Chief Officer.
                                </p>
                                <p>
                                    Meet Selena Deus, Tefline's Chief
                                    Intelligent Assistant Officer (CIAO)—an
                                    AI-powered executive intelligence agent
                                    engineered to drive strategic foresight,
                                    capital efficiency, and data-augmented
                                    decision-making. While AI has long been used
                                    for automation, analytics, and predictive
                                    modeling, Tefline is the first to embed an
                                    AI entity directly into the C-suite, giving
                                    it formal leadership responsibilities
                                    alongside human executives.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button className="bg-teal-600 hover:bg-teal-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    Read Full Press Release
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-teal-200 text-teal-600 hover:bg-teal-50 transition-all duration-300"
                                >
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-lg">
                                {/* Image decoration */}
                                <div className="absolute top-8 -right-8 w-full h-full bg-amber-100 rounded-2xl"></div>
                                <div className="absolute top-4 -right-4 w-full h-full bg-teal-200 rounded-2xl"></div>
                                {/* Main image with glass effect */}
                                <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                                    <Image
                                        src="/placeholder.webp"
                                        alt="AI C-Suite Executive"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover rounded-xl"
                                    />
                                    {/* Floating badge */}
                                    <div className="absolute top-10 -left-6 bg-white/90 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-teal-600 text-sm font-medium border border-teal-100">
                                        <div className="flex items-center">
                                            <Brain className="w-4 h-4 mr-2 text-amber-500" />
                                            AI Leadership
                                        </div>
                                    </div>
                                    {/* Bottom caption */}
                                    <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-sm text-white p-3 rounded-lg text-sm">
                                        Selena Deus: The world's first AI
                                        C-Suite executive plays an active role
                                        in high-level business strategy
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Press Release Key Points */}
            <section className="py-16 bg-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/dots.png')] bg-repeat opacity-5"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">
                            Paradigm Shift in Leadership
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            AI as a Decision-Maker, Not Just a Tool
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI-Enhanced Market Foresight",
                                icon: <Globe className="w-6 h-6 text-white" />,
                                description:
                                    "Predicting trends, analyzing industry shifts, and providing strategic guidance based on comprehensive data analysis.",
                                color: "from-teal-500 to-teal-400",
                                delay: 0.1,
                            },
                            {
                                title: "Optimized Capital Deployment",
                                icon: (
                                    <FileText className="w-6 h-6 text-white" />
                                ),
                                description:
                                    "Ensuring investor funds are allocated with precision, minimizing burn rate inefficiencies through data-driven insights.",
                                color: "from-amber-500 to-amber-400",
                                delay: 0.2,
                            },
                            {
                                title: "Investor-Grade AI Modeling",
                                icon: (
                                    <ExternalLink className="w-6 h-6 text-white" />
                                ),
                                description:
                                    "Forecasting traction milestones and de-risking funding strategies with predictive intelligence.",
                                color: "from-cyan-500 to-cyan-400",
                                delay: 0.3,
                            },
                            {
                                title: "Behavioral Intelligence Engine",
                                icon: <Brain className="w-6 h-6 text-white" />,
                                description:
                                    "Powering Tefline's Cognitive Counselor™, optimizing user engagement and wellness interventions in real-time.",
                                color: "from-blue-500 to-blue-400",
                                delay: 0.4,
                            },
                            {
                                title: "Boardroom AI Assistant",
                                icon: <User className="w-6 h-6 text-white" />,
                                description:
                                    "Supporting executive leadership with real-time insights, reducing bias, and accelerating strategic decision-making.",
                                color: "from-green-500 to-green-400",
                                delay: 0.5,
                            },
                            {
                                title: "The Future of AI in the C-Suite",
                                icon: (
                                    <Sparkles className="w-6 h-6 text-white" />
                                ),
                                description:
                                    "Tefline's bold move positions it as a category-defining startup in the evolution of corporate governance itself.",
                                color: "from-purple-500 to-purple-400",
                                delay: 0.6,
                            },
                        ].map((point) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: point.delay,
                                }}
                                className="h-full"
                            >
                                <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 bg-white border-0">
                                    <CardContent className="p-6 h-full flex flex-col">
                                        <div
                                            className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${point.color} shadow-md mb-4`}
                                        >
                                            {point.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 text-slate-800">
                                            {point.title}
                                        </h3>
                                        <p className="text-slate-600 flex-grow">
                                            {point.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-lg font-medium text-teal-700 mb-6 max-w-3xl mx-auto">
                            "We believe AI isn't just a tool—it's a co-pilot in
                            the boardroom. Selena Deus embodies the future of
                            executive intelligence, where machine-driven
                            foresight augments human leadership."
                        </p>
                        <p className="text-sm text-slate-600">
                            <strong>Subra Maniun</strong>, Cofounder & Chief AI
                            Officer (CAIO) of Tefline
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            Recent Updates
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            Latest News
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                date: "Jan 15, 2025",
                                title: "Tefline Completes Pre-Seed Funding Round",
                                description:
                                    "Tefline announces the successful closure of its pre-seed funding round, securing investment to accelerate the development of its Wellness Intelligence™ platform.",
                                image: "/placeholder.webp",
                                delay: 0.1,
                            },
                            {
                                date: "Dec 5, 2024",
                                title: "Strategic Partnership with University of South Carolina Announced",
                                description:
                                    "Tefline partners with the University of South Carolina, a pioneer in lifestyle medicine curricula, to enhance its evidence-informed wellness protocols and educational offerings.",
                                image: "/placeholder.webp",
                                delay: 0.2,
                            },
                            {
                                date: "Nov 10, 2024",
                                title: "Tefline Launches Fellowship in Lifestyle Medicine",
                                description:
                                    "In collaboration with NextGenU, Tefline introduces a comprehensive wellness licensing program endorsed by the World Health Organization.",
                                image: "/placeholder.webp",
                                delay: 0.3,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: item.delay,
                                }}
                            >
                                <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            width={400}
                                            height={300}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-teal-700 text-sm font-medium py-1 px-3 rounded-full">
                                            {item.date}
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-teal-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex justify-end">
                                            <Link
                                                href="#"
                                                className="inline-flex items-center text-teal-600 text-sm font-medium group/link"
                                            >
                                                Read More
                                                <ChevronRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Resources */}
            <section className="py-24 px-4 bg-gradient-to-b from-teal-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Download className="w-4 h-4 mr-2" />
                            For Media
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            Media Resources
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Download official assets and information for press
                            coverage
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                title: "Brand Assets",
                                icon: (
                                    <Images className="w-6 h-6 text-teal-500" />
                                ),
                                description:
                                    "Official logos, color palette, and typography guidelines for publications",
                                action: "Download Pack",
                                index: 0,
                            },
                            {
                                title: "Leadership Bios",
                                icon: (
                                    <User className="w-6 h-6 text-amber-500" />
                                ),
                                description:
                                    "Detailed biographies and headshots of Tefline's leadership team",
                                action: "Download Bios",
                                index: 1,
                            },
                            {
                                title: "Press Releases",
                                icon: (
                                    <FileText className="w-6 h-6 text-cyan-500" />
                                ),
                                description:
                                    "Archive of all official press releases in PDF format",
                                action: "Browse Archive",
                                index: 2,
                            },
                            {
                                title: "Product Visuals",
                                icon: (
                                    <Images className="w-6 h-6 text-purple-500" />
                                ),
                                description:
                                    "High-resolution screenshots and product visualizations",
                                action: "Browse Gallery",
                                index: 3,
                            },
                        ].map((resource) => (
                            <motion.div
                                key={resource.title}
                                custom={resource.index}
                                variants={cardVariants}
                            >
                                <Card className="bg-white h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                            {resource.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-slate-800">
                                            {resource.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-6 flex-grow">
                                            {resource.description}
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="mt-auto border-teal-200 text-teal-600 hover:bg-teal-50 transition-colors"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            {resource.action}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Media Contact */}
            <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Media Contact
                                </h2>
                                <p className="mb-6">
                                    For press inquiries, interviews, and media
                                    features please contact:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <User className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">
                                                Subra Maniun
                                            </p>
                                            <p className="text-teal-200">
                                                Founder, CEO & Chief AI Officer
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <a
                                            href="http://tefline.org"
                                            className="underline hover:text-teal-200 transition-colors"
                                        >
                                            tefline.org
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
                                        <p>
                                            <span className="opacity-80">
                                                Response time:
                                            </span>{" "}
                                            Within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
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
                                        className="inline-flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                                    >
                                        Contact Press Team
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </motion.div>
                                <p className="mt-4 text-sm text-teal-200">
                                    We're always happy to provide information
                                    and resources for your coverage
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Subscribe to Press Updates */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            Stay Updated
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                            Subscribe to receive press releases and company
                            announcements directly in your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-6 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none w-full sm:w-auto"
                            />
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3">
                                Subscribe to Updates
                            </Button>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                            We respect your privacy and will never share your
                            information
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
