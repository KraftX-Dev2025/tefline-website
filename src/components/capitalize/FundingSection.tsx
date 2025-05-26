"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Layers, CheckCircle, Target, Rocket, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function FundingRoadmapSection() {
    const fundingRef = useRef<HTMLDivElement>(null);

    const isFundingInView = useInView(fundingRef, {
        once: true,
        amount: 0.3
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section ref={fundingRef} className="py-8 bg-white">
            <Container>
                <motion.div
                    initial="hidden"
                    animate={isFundingInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="badge-teal">
                        <Layers className="w-4 h-4 mr-2" />

                        Growth Strategy
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-gradient">
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
                            className={`relative z-10 mb-12 flex ${stage.position === "left"
                                ? "flex-row-reverse sm:flex-row"
                                : "flex-row-reverse"
                                }`}
                        >
                            {/* Timeline point */}
                            <div className="absolute sm:static flex items-center justify-center left-0 sm:left-auto transform sm:transform-none -translate-x-[12px] sm:translate-x-0">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border-4 border-white ${index === 1
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
                                className={`ml-8 sm:ml-0 ${stage.position === "left"
                                    ? "sm:mr-12 text-left"
                                    : "sm:ml-12 text-left"
                                    } sm:w-[calc(50%-24px)]`}
                            >
                                <div
                                    className={`bg-white p-5 rounded-xl shadow-md border ${index === 1
                                        ? "border-amber-200"
                                        : "border-teal-100"
                                        } relative`}
                                >
                                    {/* Arrow */}
                                    <div
                                        className={`absolute hidden sm:block h-4 w-4 bg-white border-t border-l ${stage.position === "left"
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
                                                    href="/connect"
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
    );
}