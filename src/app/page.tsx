"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    ChevronRight,
    Database,
    Zap,
    Brain,
    BarChart3,
    FileCheck,
    Users,
    BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const lifelineRef = useRef<HTMLDivElement>(null);
    const solutionsRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const isLifelineInView = useInView(lifelineRef, {
        once: true,
        amount: 0.3,
    });
    const isSolutionsInView = useInView(solutionsRef, {
        once: true,
        amount: 0.3,
    });
    const isApproachInView = useInView(approachRef, {
        once: true,
        amount: 0.3,
    });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="relative min-h-screen flex items-center pt-16 pb-16"
                style={{ opacity: heroOpacity, y: heroY }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-teal-500/90 to-transparent" />
                {/* Background image will be positioned to the right */}
                <div className="absolute right-0 top-0 h-full w-3/5 md:w-1/2">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-black/0 to-black/100 z-10" />
                    <Image
                        src="/hero.png"
                        alt="Healthcare professionals"
                        fill
                        className="object-cover invisible md:visible object-center mask-image-gradient"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-teal-500 opacity-90" />
                </div>
                <div className="container mx-auto px-4 z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Redefining Healthcare Through Wellness
                                Intelligence
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-white/90 mb-8">
                                Evidence-informed wellness powered by AI
                                innovation
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    asChild
                                >
                                    <Link href="/services">
                                        Discover RxLifeMed
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/about">Learn More</Link>
                                </Button>
                            </div>
                        </motion.div>
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
                                <span className="text-l font-medium">
                                    Scroll to explore
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Your Lifeline Section */}
            <section ref={lifelineRef} className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={
                                isLifelineInView ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-sm md:text-base font-semibold text-teal-600 tracking-widest mb-2">
                                YOUR LIFELINE
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Blending technology and wellness for a healthier
                                tomorrow
                            </h3>
                            <p className="text-slate-700 mb-6">
                                Tefline is redefining modern healthcare by
                                blending evidence-informed wellness with AI
                                intelligence, backed by a supportive community.
                                We believe optimizing healthspan is the surest
                                path to extending lifespan.
                            </p>
                            <Button
                                variant="outline"
                                className="group border-teal-500 text-teal-600 hover:bg-teal-50"
                                asChild
                            >
                                <Link
                                    href="/about"
                                    className="flex items-center"
                                >
                                    Learn More
                                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={
                                isLifelineInView ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="order-1 lg:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/placeholder.webp"
                                alt="Health Technology"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
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

            {/* Core Solutions */}
            <section ref={solutionsRef} className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isSolutionsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-sm md:text-base font-semibold text-teal-600 tracking-widest mb-2">
                            WELLNESS INTELLIGENCE™
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Our Core Solutions
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Database className="w-6 h-6" />,
                                title: "Wellness Vault",
                                color: "from-teal-500 to-teal-400",
                                textColor: "text-teal-500",
                                description:
                                    "Access our comprehensive library of evidence-informed wellness resources for optimal health outcomes.",
                                link: "/services",
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "AIR Tenet",
                                color: "from-amber-500 to-amber-400",
                                textColor: "text-amber-500",
                                description:
                                    "Personalized lifestyle medicine screens tailored to your specific wellness needs.",
                                link: "/services",
                            },
                            {
                                icon: <Brain className="w-6 h-6" />,
                                title: "Cognitive Counselor",
                                color: "from-sky-500 to-sky-400",
                                textColor: "text-sky-500",
                                description:
                                    "An AI-powered personal assistant to guide your cognitive wellness journey.",
                                link: "/services",
                            },
                            {
                                icon: <BarChart3 className="w-6 h-6" />,
                                title: "Lifestyle Digital",
                                color: "from-green-500 to-green-400",
                                textColor: "text-green-500",
                                description:
                                    "A foundational model trained on lifestyle medicine intelligence for personalized guidance.",
                                link: "/services",
                            },
                        ].map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isSolutionsInView
                                        ? { opacity: 1, y: 0 }
                                        : {}
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * (index + 1),
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <Link
                                    href={solution.link}
                                    className="block h-full"
                                >
                                    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                        <div
                                            className={`h-1.5 w-full bg-gradient-to-r ${solution.color}`}
                                        ></div>
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div
                                                className={`w-14 h-14 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <span className="text-white">
                                                    {solution.icon}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                                                {solution.title}
                                            </h4>
                                            <p className="text-slate-600 mb-4 flex-grow">
                                                {solution.description}
                                            </p>
                                            <div
                                                className={`${solution.textColor} font-medium flex items-center group-hover:translate-x-1 transition-all duration-300`}
                                            >
                                                Explore
                                                <ChevronRight className="ml-1 group-hover:ml-2 transition-all duration-300" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Preview */}
            <section ref={approachRef} className="py-20 bg-teal-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-sm md:text-base font-semibold text-teal-600 tracking-widest mb-2">
                            OUR APPROACH
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Three pillars form our foundation
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FileCheck className="w-6 h-6" />,
                                title: "Evidence-Informed",
                                description:
                                    "Wellness protocols backed by rigorous scientific evidence that evolve with new research.",
                                color: "teal",
                                gradient: "from-teal-500 to-teal-400",
                            },
                            {
                                icon: <BrainCircuit className="w-6 h-6" />,
                                title: "Agentic Intelligence",
                                description:
                                    "AI systems that actively learn and adapt to provide truly personalized guidance.",
                                color: "sky",
                                gradient: "from-sky-500 to-sky-400",
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: "Community Accountability",
                                description:
                                    "A supportive network of like-minded individuals for lasting behavioral change.",
                                color: "green",
                                gradient: "from-green-500 to-green-400",
                            },
                        ].map((approach, index) => (
                            <motion.div
                                key={approach.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isApproachInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * (index + 1),
                                }}
                                className="text-center group"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div
                                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${approach.gradient}`}
                                    ></div>
                                    <div
                                        className={`w-20 h-20 rounded-full bg-${approach.color}-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r ${approach.gradient} transition-all duration-300`}
                                    >
                                        <span
                                            className={`text-${approach.color}-500 group-hover:text-white transition-colors duration-300`}
                                        >
                                            {approach.icon}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {approach.title}
                                    </h4>
                                    <p className="text-slate-600">
                                        {approach.description}
                                    </p>

                                    <div className="h-1 w-0 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-6 group-hover:w-1/2 transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 -z-10" />
                <div className="absolute inset-0 bg-[url('/placeholder.webp')] opacity-10 mix-blend-overlay -z-10" />

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to optimize your healthspan?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Join the wellness intelligence revolution and
                            transform your approach to health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                asChild
                            >
                                <Link href="/contact">
                                    Book a Free Masterclass
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 transition-all duration-300"
                                asChild
                            >
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
