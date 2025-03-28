"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Calendar,
    Send,
    CheckCircle,
    Building,
    Users,
    Zap,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
    // Form state
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

    // For parallax effects
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Refs for scroll animations
    const formRef = useRef<HTMLDivElement>(null);
    const contactInfoRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const officeRef = useRef<HTMLDivElement>(null);

    // Check if sections are in view
    const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
    const isContactInfoInView = useInView(contactInfoRef, {
        once: true,
        amount: 0.3,
    });
    const isMapInView = useInView(mapRef, { once: true, amount: 0.3 });
    const isOfficeInView = useInView(officeRef, { once: true, amount: 0.3 });

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

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
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
        <main className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden"
            >
                {/* Background Gradients */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Main gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500 to-teal-600"></div>

                    {/* Blurred gradient circles */}
                    <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-sky-500/20 blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/20 blur-[100px] opacity-60"></div>
                </motion.div>

                {/* Abstract connection dots and lines in background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-white"
                                style={{
                                    top: Math.random() * 100 + "%",
                                    left: Math.random() * 100 + "%",
                                    opacity: 0.3,
                                }}
                                animate={{
                                    opacity: [0.2, 0.5, 0.2],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                        ))}
                    </div>

                    {/* SVG connection lines */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.15">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <motion.line
                                    key={i}
                                    x1={Math.random() * 100 + "%"}
                                    y1={Math.random() * 100 + "%"}
                                    x2={Math.random() * 100 + "%"}
                                    y2={Math.random() * 100 + "%"}
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeDasharray="5,5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: Math.random() * 5 + 5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "linear",
                                    }}
                                />
                            ))}
                        </g>
                    </svg>
                </div>

                {/* Wave pattern overlay */}
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-20 text-white"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            fill="currentColor"
                            opacity=".2"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            fill="currentColor"
                            opacity=".3"
                        />
                    </svg>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="mb-3 py-1 px-4 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium inline-flex items-center"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Reach Out To Us
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
                            variants={fadeInUp}
                        >
                            Connect With Tefline
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-white/90 leading-relaxed"
                            variants={fadeInUp}
                        >
                            Have questions about our wellness intelligence
                            solutions? Get in touch with our team and discover
                            how we can support your journey to optimal health.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 bg-white relative">
                <div className="container mx-auto px-4">
                    {/* Quick Contact Options */}
                    <div ref={contactInfoRef} className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isContactInfoInView ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                <Phone className="w-4 h-4 mr-2" />
                                Get in Touch
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                Contact Options
                            </h2>
                            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                                Choose how you'd like to connect with us. We're
                                here to answer your questions and help you begin
                                your wellness journey.
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact Form & Details Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                        {/* Contact Form */}
                        <motion.div
                            ref={formRef}
                            initial="hidden"
                            animate={isFormInView ? "visible" : "hidden"}
                            variants={contactCardVariants}
                            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-8 px-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">
                                    Send Us a Message
                                </h3>
                                <p className="opacity-90">
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
                                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                                        Message Sent Successfully
                                    </h4>
                                    <p className="text-slate-600 text-center max-w-md mb-4">
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
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            What can we help you with?
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {[
                                                {
                                                    id: "general",
                                                    label: "General Inquiry",
                                                    icon: (
                                                        <Mail className="w-4 h-4" />
                                                    ),
                                                },
                                                {
                                                    id: "demo",
                                                    label: "Book a Demo",
                                                    icon: (
                                                        <Calendar className="w-4 h-4" />
                                                    ),
                                                },
                                                {
                                                    id: "corporate",
                                                    label: "Corporate Wellness",
                                                    icon: (
                                                        <Building className="w-4 h-4" />
                                                    ),
                                                },
                                                {
                                                    id: "partnership",
                                                    label: "Partnership Opportunities",
                                                    icon: (
                                                        <Users className="w-4 h-4" />
                                                    ),
                                                },
                                            ].map((inquiry) => (
                                                <div
                                                    key={inquiry.id}
                                                    className={`cursor-pointer rounded-lg border p-3 flex items-center transition-all duration-200 ${
                                                        selectedInquiry ===
                                                        inquiry.id
                                                            ? "bg-teal-50 border-teal-300"
                                                            : "border-slate-200 hover:border-teal-200"
                                                    }`}
                                                    onClick={() =>
                                                        setSelectedInquiry(
                                                            inquiry.id
                                                        )
                                                    }
                                                >
                                                    <div
                                                        className={`w-8 h-8 rounded-full ${
                                                            selectedInquiry ===
                                                            inquiry.id
                                                                ? "bg-teal-100 text-teal-600"
                                                                : "bg-slate-100 text-slate-500"
                                                        } flex items-center justify-center mr-3`}
                                                    >
                                                        {inquiry.icon}
                                                    </div>
                                                    <span
                                                        className={`${
                                                            selectedInquiry ===
                                                            inquiry.id
                                                                ? "text-teal-700 font-medium"
                                                                : "text-slate-700"
                                                        }`}
                                                    >
                                                        {inquiry.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block text-sm font-medium text-slate-700 mb-1"
                                            >
                                                First Name
                                            </label>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                value={formState.firstName}
                                                onChange={handleInputChange}
                                                className="w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block text-sm font-medium text-slate-700 mb-1"
                                            >
                                                Last Name
                                            </label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                value={formState.lastName}
                                                onChange={handleInputChange}
                                                className="w-full"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-slate-700 mb-1"
                                        >
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            className="w-full"
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-slate-700 mb-1"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-base"
                                            required
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center group"
                                    >
                                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Get Involved Section */}
                        <motion.div
                            initial="hidden"
                            animate={isFormInView ? "visible" : "hidden"}
                            variants={contactCardVariants}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2 space-y-6 flex flex-col justify-between"
                        >
                            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Schedule a Free Masterclass
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    We offer free Wellness Intelligence™
                                    masterclasses for corporates and
                                    communities. Transform your organization's
                                    approach to health and wellness.
                                </p>
                                <ul className="space-y-2 mb-4">
                                    {[
                                        "Evidence-based wellness principles",
                                        "AI-powered health optimization",
                                        "Actionable wellness strategies",
                                        "Q&A with wellness experts",
                                    ].map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start"
                                        >
                                            <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5 mr-2" />
                                            <span className="text-slate-700">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                                    asChild
                                >
                                    <Link
                                        href="/contact?service=masterclass"
                                        className="flex items-center justify-center"
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Book a Masterclass
                                    </Link>
                                </Button>
                            </div>

                            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-white shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 bg-white/10 rounded-full mr-3">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Investor Relations
                                    </h3>
                                </div>
                                <p className="mb-4 text-white/90">
                                    Interested in joining us on our mission to
                                    transform healthcare? Connect with our
                                    investment team.
                                </p>
                                <Button
                                    variant="outline"
                                    className="w-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                                    asChild
                                >
                                    <Link
                                        href="/invest"
                                        className="flex items-center justify-center"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Learn About Investing
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Map & Location */}
                    <div ref={mapRef} className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-8"
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                Our Location
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                Find Us
                            </h2>
                            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                                Visit our headquarters in Bangalore's tech hub,
                                where we're reimagining the future of wellness.
                            </p>
                        </motion.div>

                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 overflow-hidden relative">
                            <div className="aspect-video rounded-lg bg-gray-200 relative overflow-hidden">
                                {/* Map Placeholder - In a real implementation, this would be replaced with a Google Maps integration */}
                                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                    <p className="text-slate-500 text-center px-4">
                                        Interactive map would be integrated here
                                    </p>
                                </div>

                                {/* Map Overlay with Address */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                                    <div className="flex items-start text-white max-w-lg">
                                        <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">
                                                Embassy Golf Links Business Park
                                            </h3>
                                            <p className="text-sm text-white/80">
                                                Cinnabar Hills, Bangalore -
                                                560071, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Transportation Options */}
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "By Car",
                                        directions:
                                            "15 minutes from MG Road, parking available on-site. Valet service available.",
                                    },
                                    {
                                        title: "Public Transit",
                                        directions:
                                            "Bus routes 500E, 335E stop at Embassy Golf Links main entrance.",
                                    },
                                    {
                                        title: "From Airport",
                                        directions:
                                            "30-minute drive from Kempegowda International Airport via airport expressway.",
                                    },
                                ].map((option, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={
                                            isMapInView
                                                ? { opacity: 1, y: 0 }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.2 + idx * 0.1,
                                        }}
                                        className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm"
                                    >
                                        <h4 className="font-medium text-teal-700 mb-1">
                                            {option.title}
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            {option.directions}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-teal-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Find answers to common questions about contacting
                            and working with Tefline.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {[
                                {
                                    question:
                                        "What happens after I submit a contact form?",
                                    answer: "Once you submit the form, our team will review your message and respond within 1-2 business days. For urgent inquiries, we recommend calling us directly.",
                                },
                                {
                                    question:
                                        "How do I book a wellness masterclass for my organization?",
                                    answer: "You can book a masterclass by selecting the 'Book a Masterclass' option in our contact form or by emailing us directly at team@tefline.org with details about your organization and preferred dates.",
                                },
                                {
                                    question:
                                        "Are there any costs associated with the initial consultation?",
                                    answer: "No, initial consultations are completely free. We believe in demonstrating our value before any commitment, allowing you to understand how our approach can benefit you or your organization.",
                                },
                                {
                                    question:
                                        "Can I visit your office without an appointment?",
                                    answer: "We recommend scheduling an appointment to ensure our team can properly welcome you and address your specific needs. However, if you're in the area, feel free to stop by, and we'll do our best to accommodate you.",
                                },
                            ].map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: idx * 0.1,
                                    }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-teal-100"
                                >
                                    <h3 className="text-lg font-semibold text-teal-700 mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-600">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-slate-700 mb-4">
                                Don't see your question here?
                            </p>
                            <Button
                                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                                asChild
                            >
                                <a
                                    href="#contact-form"
                                    className="flex items-center justify-center"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Ask Us Directly
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
