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
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Generate WhatsApp message template
    const generateWhatsAppMessage = () => {
        const selectedInquiryData = inquiryTypes.find(inquiry => inquiry.id === selectedInquiry);
        const inquiryLabel = selectedInquiryData ? selectedInquiryData.label : "General Inquiry";
        let message = `*New Tefline Contact Form Submission*\n\n`;
        message += `*Contact Details:*\n`;
        message += `Name: ${formState.firstName} ${formState.lastName}\n`;
        message += `Email: ${formState.email}\n`;
        message += `Inquiry Type: ${inquiryLabel}\n\n`;
        message += `*Message:*\n`;
        message += `${formState.message}\n\n`;
        message += `*Submitted via:* Tefline Contact Form\n`;
        message += `*Date:* ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;
        return encodeURIComponent(message);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Validate required fields
        if (!formState.firstName || !formState.lastName || !formState.email || !formState.message || !selectedInquiry) {
            alert("Please fill in all required fields and select an inquiry type.");
            setIsSubmitting(false);
            return;
        }
        setTimeout(() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "form_submit", {
                    event_category: "engagement",
                    event_label: "contact_form",
                });
            }
            // Generate WhatsApp URL with the message
            const whatsappUrl = `https://wa.me/9822296812?text=${generateWhatsAppMessage()}`;
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            // Mark as submitted for UI feedback
            setFormSubmitted(true);
            setIsSubmitting(false);
            // Reset form after 5 seconds
            setTimeout(() => {
                setFormSubmitted(false);
                setFormState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
                setSelectedInquiry(null);
            }, 5000);
        }, 1500);
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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.6
            },
        },
    };

    return (
        <motion.div
            ref={formRef}
            id="contact-form"
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={contactCardVariants}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative h-fit"
        >
            {/* Decorative gradient border */}
            <div className="absolute top-0 left-0 w-full h-1 primary-gradient"></div>

            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="primary-gradient py-6 px-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                <div className="relative">
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        Send Us a Message
                    </h3>
                    <p className="opacity-90 text-sm">
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>
            </div>

            {formSubmitted ? (
                <motion.div
                    className="p-8 flex flex-col items-center justify-center min-h-[500px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-200"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    >
                        <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h4
                        className="text-3xl font-bold text-gray-900 mb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Message Sent Successfully!
                    </motion.h4>

                    <motion.p
                        className="text-gray-600 text-center max-w-md mb-8 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Thank you for reaching out! We've opened WhatsApp for you to send your message directly to our team.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button
                            variant="outline"
                            className="border-2 border-teal-200 text-teal-600 hover:bg-teal-50 px-8 py-3"
                            onClick={() => setFormSubmitted(false)}
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Inquiry Type Selector */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4">
                            What can we help you with? *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {inquiryTypes.map((inquiry) => {
                                const IconComponent = inquiry.icon;
                                return (
                                    <motion.div
                                        key={inquiry.id}
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border-2 ${selectedInquiry === inquiry.id
                                            ? "bg-gradient-to-br from-teal-50 to-teal-100/50 border-teal-300 shadow-md shadow-teal-100"
                                            : "border-gray-200 hover:border-teal-200 bg-white hover:bg-gray-50"
                                            }`}
                                        onClick={() => setSelectedInquiry(inquiry.id)}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedInquiry === inquiry.id
                                                ? "bg-teal-500 text-white"
                                                : "bg-gray-100 text-gray-500"
                                                }`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <span className={`font-medium text-xs sm:text-sm ${selectedInquiry === inquiry.id
                                                ? "text-teal-700"
                                                : "text-gray-700"
                                                }`}>
                                                {inquiry.label}
                                            </span>
                                        </div>
                                        <p className="hidden sm:flex text-xs text-gray-500 ml-11">
                                            {inquiry.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <p className={`text-xs mt-2 text-red-500/70 ${!selectedInquiry ? "block" : "hidden"} `}>Please select an inquiry type</p>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name *
                            </label>
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formState.firstName}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg h-12"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name *
                            </label>
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formState.lastName}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg h-12"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg h-12"
                            placeholder="john.doe@example.com"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formState.message}
                            onChange={handleInputChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base resize-none"
                            placeholder="Tell us how we can help you..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-4 flex justify-center items-center"
                    >
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-[10rem] primary-gradient hover:shadow-lg px-2 text-white font-semibold py-4 rounded-xl flex items-center justify-center group shadow-md shadow-teal-200/40 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                <div className="flex justify-center items-center gap-4 text-lg">
                                    Send
                                    <Send className="w-9 h-9 group-hover:translate-x-1 transition-transform" />
                                </div>
                            )}
                        </Button>
                    </motion.div>
                </form>
            )}
        </motion.div>
    );
}