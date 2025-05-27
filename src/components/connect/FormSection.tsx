"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { inquiryTypes } from "@/lib/constants/contact";

export default function ContactFormSection() {
    const formRef = useRef<HTMLDivElement>(null);

    const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

    // Form state
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log("Form submitted:", formState);
        setFormSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setFormSubmitted(false);
            setFormState({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });
            setSelectedInquiry(null);
        }, 3000);
    };

    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const contactCardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div
            ref={formRef}
            id="contact-form"
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={contactCardVariants}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 primary-gradient"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

            <div className="primary-gradient py-8 px-8 text-white relative">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-teal-300" />
                    Send Us a Message
                </h3>
                <p className="opacity-90 pl-9">
                    Fill out the form below and our team will
                    get back to you shortly.
                </p>
            </div>

            {formSubmitted ? (
                <motion.div
                    className="p-8 flex flex-col items-center justify-center min-h-[400px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
                        <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-slate-900 mb-3">
                        Message Sent Successfully!
                    </h4>
                    <p className="text-slate-600 text-center max-w-md mb-6">
                        Thank you for reaching out! Our team
                        will review your message and get back to
                        you as soon as possible.
                    </p>
                    <Button
                        variant="outline"
                        className="border-teal-200 text-teal-600 hover:bg-teal-50"
                        onClick={() => setFormSubmitted(false)}
                    >
                        Send Another Message
                    </Button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="p-8">
                    {/* Inquiry Type Selector */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-teal-700 mb-3">
                            What can we help you with?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {inquiryTypes.map((inquiry) => {
                                const IconComponent = inquiry.icon;
                                return (
                                    <motion.div
                                        key={inquiry.id}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`cursor-pointer rounded-xl shadow-sm p-4 flex flex-col transition-all duration-200 ${selectedInquiry === inquiry.id
                                            ? "bg-teal-50 border-2 border-teal-400 shadow-teal-100"
                                            : "border border-slate-200 hover:border-teal-200 bg-white"
                                            }`}
                                        onClick={() =>
                                            setSelectedInquiry(inquiry.id)
                                        }
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-lg ${selectedInquiry === inquiry.id
                                                ? "bg-teal-400 text-white"
                                                : "bg-slate-100 text-slate-500"
                                                } flex items-center justify-center mb-2`}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <span
                                            className={`${selectedInquiry === inquiry.id
                                                ? "text-teal-700 font-medium"
                                                : "text-slate-700"
                                                } text-sm`}
                                        >
                                            {inquiry.label}
                                        </span>
                                        <span className="text-xs text-slate-500 mt-1">
                                            {inquiry.description}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-slate-700"
                            >
                                First Name
                            </label>
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formState.firstName}
                                onChange={handleInputChange}
                                className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-slate-700"
                            >
                                Last Name
                            </label>
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formState.lastName}
                                onChange={handleInputChange}
                                className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6 space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Email Address
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                            placeholder="john.doe@example.com"
                            required
                        />
                    </div>

                    <div className="mb-8 space-y-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-slate-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formState.message}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-200 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-base"
                            placeholder="Tell us how we can help you..."
                            required
                        ></textarea>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <Button
                            type="submit"
                            className=" primary-gradient hover:to-teal-700 text-white font-medium py-6 rounded-xl flex items-center justify-center group shadow-lg shadow-teal-200/40"
                        >
                            Send Message
                            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </form>
            )}
        </motion.div>
    );
}