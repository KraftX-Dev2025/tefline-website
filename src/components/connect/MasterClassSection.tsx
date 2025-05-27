"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Zap, CheckCircle, Calendar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { masterclassFeatures } from "@/lib/constants/contact";

export default function MasterclassSection() {
    const formRef = useRef<HTMLDivElement>(null);

    const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

    const contactCardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
    };

    return (
        <motion.div
            ref={formRef}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={contactCardVariants}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col"
        >
            <div
                id="masterclass"
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 shadow-xl relative overflow-hidden mb-6"
            >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-200/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-200/30 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                <div className="relative">
                    <div className="badge-teal">
                        <Zap className="w-4 h-4 mr-2" />
                        Free for Organizations
                    </div>

                    <h3 className="text-2xl font-bold text-teal-600 mb-4 relative">
                        Schedule a Wellness Intelligence™
                        Masterclass
                    </h3>

                    <p className="text-slate-700 mb-6 relative">
                        Transform your organization's approach
                        to health and wellness with our
                        expert-led sessions powered by AI
                        intelligence.
                    </p>

                    <ul className="space-y-3 mb-6 relative">
                        {masterclassFeatures.map((point, idx) => (
                            <li
                                key={idx}
                                className="flex items-start bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-teal-100/50 shadow-sm"
                            >
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5 mr-3" />
                                <span className="text-teal-600">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                    >
                        <Button
                            className="w-full primary-gradient hover:to-teal-700 text-white py-6 rounded-xl shadow-lg shadow-teal-200/40"
                            asChild
                        >
                            <Link
                                href="/connect"
                                className="flex items-center justify-center"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Book a Masterclass
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}