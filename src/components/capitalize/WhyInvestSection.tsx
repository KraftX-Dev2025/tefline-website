"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Globe, LineChart, Brain, Zap, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function WhyInvestSection() {
    const whyInvestRef = useRef<HTMLDivElement>(null);

    const isWhyInvestInView = useInView(whyInvestRef, {
        once: true,
        amount: 0.3,
    });

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

    return (
        <section
            ref={whyInvestRef}
            className="py-8 bg-teal-50 relative overflow-hidden"
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
                    <div className="inline-flex items-center bg-amber-100 text-teal-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-primary-gradient">
                            Compelling Advantages
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">
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
                            color: "primary-gradient",
                        },
                        {
                            title: "Subscription Model",
                            icon: (
                                <LineChart className="w-6 h-6 text-white" />
                            ),
                            description:
                                "Our subscription-based approach ensures recurring revenue with high lifetime value. By focusing on retention and expanding services, we create long-term sustainable growth.",
                            color: "primary-gradient",
                        },
                        {
                            title: "Behavioral Health Market",
                            icon: <Brain className="w-6 h-6 text-white" />,
                            description:
                                "The behavioral health market is experiencing exponential growth as digital well-being becomes a priority for consumers, employers, and healthcare providers alike.",
                            color: "primary-gradient",
                        },
                        {
                            title: "AI-Driven Approach",
                            icon: <Zap className="w-6 h-6 text-white" />,
                            description:
                                "Our AI-powered decision-making framework ensures capital is deployed with maximum impact while safeguarding investor interests through predictive modeling.",
                            color: "primary-gradient",
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
                                <CardContent className="p-6">
                                    <div className={`mb-4 w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-r ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3
                                        className={`text-xl font-semibold mb-3 text-primary`}
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
                            <h3 className="text-xl font-semibold mb-4 text-amber-600 flex items-center text-teal-600">
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
    );
}