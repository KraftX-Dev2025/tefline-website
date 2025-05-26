"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function AILeadershipSection() {
    const aiLeadershipRef = useRef<HTMLDivElement>(null);

    const isAiLeadershipInView = useInView(aiLeadershipRef, {
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

    return (
        <section
            ref={aiLeadershipRef}
            className="py-8 primary-gradient text-white relative overflow-hidden"
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
                    <div className="badge-teal">
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
                                    className="border-white/20 text-teal-600 hover:bg-teal-400 hover:text-white transition-colors"
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
    );
}