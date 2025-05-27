"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { faqs } from "@/lib/constants/contact";
import { faqs } from "@/lib/constants/contact"

// Accordion component for FAQs
const Accordion = ({
    faq,
    index,
}: {
    faq: { question: string; answer: string };
    index: number;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md border border-teal-100 overflow-hidden"
        >
            <motion.div
                className={`p-5 cursor-pointer flex justify-between items-center hover:bg-teal-50/50 transition-colors duration-200 ${isOpen ? "bg-teal-50/80" : ""
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-teal-700 flex items-start">
                    <span className=" bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                    </span>
                    <span className="text-teal-600">
                        {faq.question}
                    </span>
                </h3>
                <div
                    className={`text-teal-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                >
                    <ChevronDown />
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-0 border-t border-teal-100">
                            <p className="text-slate-600 pl-9">{faq.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQSection() {
    return (
        <section className="py-8 bg-gradient-to-b from-teal-50/50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="badge-teal">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        <span>Common Questions</span>
                    </div>
                    <h2 className="text-3xl font-bold text-primary-gradient mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Find answers to common questions about contacting
                        and working with Tefline.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* FAQ Accordion Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                        {faqs.map((faq, idx) => (
                            <Accordion key={idx} faq={faq} index={idx} />
                        ))}
                    </div>

                    <div className="p-8 primary-gradient rounded-2xl shadow-xl text-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-teal-100 mb-6 max-w-lg mx-auto text-white">
                                Our team is ready to help you with any
                                questions you might have about our services
                                or how we can support your wellness journey.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    className="bg-white text-teal-600 hover:bg-white/90 shadow-lg px-6 py-6"
                                    size="lg"
                                    asChild
                                >
                                    <a
                                        href="#contact-form"
                                        className="flex items-center"
                                    >
                                        <Mail className="mr-2 h-5 w-5" />
                                        Get in Touch
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}