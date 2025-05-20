"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    AnimatePresence,
} from "framer-motion";
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
    Sparkles,
    MessageSquare,
    ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

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
                <h3 className="text-lg font-semibold text-teal-700 flex items-center">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                    </span>
                    {faq.question}
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

    // Check if sections are in view
    const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
    const isContactInfoInView = useInView(contactInfoRef, {
        once: true,
        amount: 0.3,
    });
    const isMapInView = useInView(mapRef, { once: true, amount: 0.3 });

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

    // Quick contact options data
    const contactOptions = [
        {
            icon: <Phone className="w-5 h-5 text-white" />,
            title: "Call Us",
            description: "Speak directly with our team",
            info: "+91 98451 71490",
            color: "from-teal-600 to-teal-500",
            shadow: "shadow-teal-500/20",
        },
        {
            icon: <Mail className="w-5 h-5 text-white" />,
            title: "Email Us",
            description: "Send us an email anytime",
            info: "team@tefline.org",
            color: "from-cyan-600 to-cyan-500",
            shadow: "shadow-cyan-500/20",
        },
        {
            icon: <MapPin className="w-5 h-5 text-white" />,
            title: "Visit Us",
            description: "Come see us in person",
            info: "Embassy Golf Links, Bangalore",
            color: "from-amber-600 to-amber-500",
            shadow: "shadow-amber-500/20",
        },
    ];

    // Inquiry types data
    const inquiryTypes = [
        {
            id: "general",
            label: "General Inquiry",
            icon: <MessageSquare className="w-4 h-4" />,
            description: "Ask us anything about our services and solutions",
        },
        {
            id: "demo",
            label: "Book a Demo",
            icon: <Calendar className="w-4 h-4" />,
            description: "Schedule a live demonstration of our platform",
        },
        {
            id: "corporate",
            label: "Corporate Wellness",
            icon: <Building className="w-4 h-4" />,
            description: "Learn about our enterprise wellness programs",
        },
        {
            id: "partnership",
            label: "Partnership Opportunities",
            icon: <Users className="w-4 h-4" />,
            description: "Explore collaboration and partnership options",
        },
    ];

    return (
        <main className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
            >
                {/* Background Gradients */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    {/* Main gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 via-teal-700/80 to-teal-600 "></div>

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
                            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                            variants={fadeInUp}
                        >
                            Have questions about our wellness intelligence
                            solutions? Get in touch with our team and discover
                            how we can support your journey to optimal health.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Button
                                className="bg-white text-teal-700 hover:bg-white/90 shadow-lg px-6 py-6"
                                size="lg"
                                asChild
                            >
                                <a href="#contact-form">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Send a Message
                                </a>
                            </Button>
                            <Button
                                className="bg-teal-600 text-white hover:bg-teal-700 shadow-lg px-6 py-6 border border-white/20"
                                size="lg"
                                variant="outline"
                                asChild
                            >
                                <a href="#masterclass">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Book a Masterclass
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact Options */}
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
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                <Phone className="w-4 h-4 mr-2" />
                                Get in Touch
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
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
                            {contactOptions.map((option, index) => (
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
                                    <div
                                        className="h-2 w-full bg-gradient-to-r
                                    {option.color}"
                                    ></div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center ${option.shadow} mr-4`}
                                            >
                                                {option.icon}
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
                            ))}
                        </div>
                    </div>

                    {/* Contact Form & Details Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                        {/* Contact Form */}
                        <motion.div
                            ref={formRef}
                            id="contact-form"
                            initial="hidden"
                            animate={isFormInView ? "visible" : "hidden"}
                            variants={contactCardVariants}
                            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative"
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                            <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-8 px-8 text-white relative">
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
                                            {inquiryTypes.map((inquiry) => (
                                                <motion.div
                                                    key={inquiry.id}
                                                    whileHover={{ y: -3 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`cursor-pointer rounded-xl shadow-sm p-4 flex flex-col transition-all duration-200 ${selectedInquiry ===
                                                            inquiry.id
                                                            ? "bg-teal-50 border-2 border-teal-400 shadow-teal-100"
                                                            : "border border-slate-200 hover:border-teal-200 bg-white"
                                                        }`}
                                                    onClick={() =>
                                                        setSelectedInquiry(
                                                            inquiry.id
                                                        )
                                                    }
                                                >
                                                    <div
                                                        className={`w-10 h-10 rounded-lg ${selectedInquiry ===
                                                                inquiry.id
                                                                ? "bg-teal-400 text-white"
                                                                : "bg-slate-100 text-slate-500"
                                                            } flex items-center justify-center mb-2`}
                                                    >
                                                        {inquiry.icon}
                                                    </div>
                                                    <span
                                                        className={`${selectedInquiry ===
                                                                inquiry.id
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
                                            ))}
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
                                            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-6 rounded-xl flex items-center justify-center group shadow-lg shadow-teal-200/40"
                                        >
                                            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </form>
                            )}
                        </motion.div>

                        {/* Get Involved Section */}
                        <motion.div
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
                                    <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-teal-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-teal-100 shadow-sm">
                                        <Zap className="w-4 h-4 mr-2 text-amber-500" />
                                        Free for Organizations
                                    </div>

                                    <h3 className="text-2xl font-bold text-teal-800 mb-4 relative">
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
                                        {[
                                            "Evidence-based wellness principles",
                                            "AI-powered health optimization",
                                            "Actionable wellness strategies",
                                            "Q&A with wellness experts",
                                        ].map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-teal-100/50 shadow-sm"
                                            >
                                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5 mr-3" />
                                                <span className="text-slate-700">
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
                                            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-6 rounded-xl shadow-lg shadow-teal-200/40"
                                            asChild
                                        >
                                            <Link
                                                href="/contact?service=masterclass"
                                                className="flex items-center justify-center"
                                            >
                                                <Calendar className="w-5 h-5 mr-2" />
                                                Book a Masterclass
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Map & Location */}
                            <div ref={mapRef} className="flex-grow">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isMapInView ? { opacity: 1, y: 0 } : {}
                                    }
                                    transition={{ duration: 0.5 }}
                                    className="mb-4"
                                >
                                    <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        Our Location
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">
                                        Find Us
                                    </h2>
                                </motion.div>

                                <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border border-slate-200 overflow-hidden relative shadow-xl h-full">
                                    <div className="aspect-video rounded-lg bg-slate-200 relative overflow-hidden">
                                        {/* Map Placeholder - In a real implementation, this would be replaced with a Google Maps integration */}
                                        <Image
                                            src="/tefline-image1.png"
                                            alt="Map location"
                                            width={800}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Map Overlay with Address */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                                            <div className="flex items-start text-white max-w-lg">
                                                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="font-medium">
                                                        Embassy Golf Links
                                                        Business Park
                                                    </h3>
                                                    <p className="text-sm text-white/80">
                                                        Cinnabar Hills,
                                                        Bangalore - 560071,
                                                        India
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Transportation Options */}
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {[
                                            {
                                                title: "By Car",
                                                directions:
                                                    "15 minutes from MG Road, parking available on-site.",
                                                icon: "🚗",
                                            },
                                            {
                                                title: "Public Transit",
                                                directions:
                                                    "Bus routes 500E, 335E stop at Embassy Golf Links main entrance.",
                                                icon: "🚌",
                                            },
                                            {
                                                title: "From Airport",
                                                directions:
                                                    "30-minute drive from Kempegowda International Airport.",
                                                icon: "✈️",
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
                                                className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center"
                                            >
                                                <span className="text-xl mr-3">
                                                    {option.icon}
                                                </span>
                                                <div>
                                                    <h4 className="font-medium text-slate-700 text-sm">
                                                        {option.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500">
                                                        {option.directions}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gradient-to-b from-teal-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Common Questions
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">
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
                            {[
                                {
                                    question:
                                        "What happens after I submit a contact form?",
                                    answer: "Once you submit the form, our team will review your message and respond within 1-2 business days. For urgent inquiries, we recommend calling us directly at the number provided above.",
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
                                {
                                    question:
                                        "Do you offer remote wellness sessions?",
                                    answer: "Yes, we offer virtual wellness sessions and consultations for individuals and organizations not located in Bangalore. Our digital platform makes it easy to access our expertise from anywhere in the world.",
                                },
                                {
                                    question:
                                        "What makes Tefline different from other wellness companies?",
                                    answer: "Tefline stands out through our unique combination of evidence-informed wellness protocols, AI-powered personalization, and community accountability. We blend cutting-edge technology with proven wellness principles to deliver measurable health improvements.",
                                },
                            ].map((faq, idx) => (
                                <Accordion key={idx} faq={faq} index={idx} />
                            ))}
                        </div>

                        <div className="p-8 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl text-center relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Still have questions?
                                </h3>
                                <p className="text-teal-100 mb-6 max-w-lg mx-auto">
                                    Our team is ready to help you with any
                                    questions you might have about our services
                                    or how we can support your wellness journey.
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        className="bg-white text-teal-700 hover:bg-white/90 shadow-lg px-6 py-6"
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
        </main>
    );
}
