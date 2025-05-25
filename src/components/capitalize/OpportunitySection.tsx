"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, CheckCircle, Rocket, Brain } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function OpportunitySection() {
    const opportunityRef = useRef<HTMLDivElement>(null);

    const isOpportunityInView = useInView(opportunityRef, {
        once: true,
        amount: 0.3,
    });

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
                                src="/tefline-image9.webp"
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
    );
}