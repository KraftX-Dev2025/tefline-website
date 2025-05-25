"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";
import { contactOptions } from "@/lib/constants/contact";

export default function ContactOptionsSection() {
    const contactInfoRef = useRef<HTMLDivElement>(null);

    const isContactInfoInView = useInView(contactInfoRef, {
        once: true,
        amount: 0.3,
    });

    return (
        <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4">
                <div ref={contactInfoRef} className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isContactInfoInView ? { opacity: 1, y: 0 } : {}
                        }
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center bg-teal-100 text-teal-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-primary-gradient">Get in Touch</span>
                        </div>
                        <h2 className="text-3xl font-bold text-teal-600 mb-3">
                            Contact Options
                        </h2>
                        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                            Choose how you'd like to connect with us. We're
                            here to answer your questions and help you begin
                            your wellness journey.
                        </p>
                    </motion.div>

                    {/* Contact Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactOptions.map((option, index) => {
                            const IconComponent = option.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isContactInfoInView
                                            ? { opacity: 1, y: 0 }
                                            : {}
                                    }
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${option.color}`}></div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center ${option.shadow} mr-4`}
                                            >
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">
                                                    {option.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm">
                                                    {option.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pl-16">
                                            <p className="text-teal-600 font-semibold">
                                                {option.info}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}