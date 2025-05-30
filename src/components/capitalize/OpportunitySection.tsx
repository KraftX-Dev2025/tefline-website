"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { opportunitiesOptions, opportunitiesPara } from "@/lib/constants/services";
import { title } from "process";

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
            className="py-8 bg-white"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate={isOpportunityInView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                    >
                        <div className="badge-teal">
                            <Target className="w-4 h-4 mr-2" />
                            <span>Strategic Positioning</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-gradient">
                            FORWARD-LOOKING POSITIONING
                        </h2>
                        <div className="space-y-4 text-slate-700">
                            {opportunitiesPara.map((para, index) => (
                                <p key={`para-${index}`}>
                                    {para.para}
                                </p>
                            ))}
                            <p className="font-medium text-teal-700">
                                We are seeking strategic investors who recognize
                                that momentum is everything—those who want to be
                                ahead of the curve before our hockey stick
                                revenue takes off.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {opportunitiesOptions.map((opportunity, index) => (
                                <div
                                    key={`opportunity-${index}-${opportunity.title}`}
                                    
                                    className="bg-teal-50 py-2 px-4 rounded-full text-sm font-medium text-teal-600 flex items-center hover:scale-105 cursor-pointer"
                                >
                                    <opportunity.icon className="w-4 h-4 mr-2" />
                                    {opportunity.title}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isOpportunityInView ? "visible" : "hidden"}
                        variants={fadeInRight}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-full h-full bg-teal-100 rounded-xl blur-lg" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-100 rounded-xl opacity-70 blur-lg" />

                        <div className="relative w-full">
                            <Image
                                src="/tefline-image9.webp"
                                alt="Investment opportunity"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-t-xl shadow-lg"
                            />
                        </div>
                        <motion.div
                            className="relative w-full bottom-0 rounded-b-xl inset-x-0 bg-white/90 backdrop-blur-sm p-4 border-t border-teal-100"
                            initial={{ y: 100 }}
                            animate={isOpportunityInView ? { y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="font-semibold text-teal-600 flex text-sm sm:text-base items-center">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Market Timing
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm">
                                The wellness technology market is projected to
                                reach $1.3 trillion by 2030, with AI-enhanced
                                solutions showing the highest growth rate.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}