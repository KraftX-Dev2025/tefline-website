"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Send,
    ChevronRight,
    ExternalLink,
    Globe,
    Shield,
    Sparkles,
    Heart,
    CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
    };

    const iconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        hover: {
            y: -5,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
    };

    // Additional nav links that were moved from header to footer
    const additionalNavLinks = [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Vision & Mission", href: "/vision-mission" },
        { name: "Programs", href: "/programs" },
        { name: "Press", href: "/press" },
    ];

    // Footer main sections
    const footerSections = [
        {
            title: "Company",
            links: [
                { name: "Home", href: "/" },
                { name: "Modules", href: "/modules" },
                { name: "Invest", href: "/invest" },
                { name: "Connect", href: "/contact" },
                ...additionalNavLinks,
            ],
        },
        {
            title: "Features",
            links: [
                { name: "Wellness Vault", href: "#" },
                { name: "Agentic Intelligence", href: "#" },
                { name: "Cognitive Counselor", href: "#" },
                { name: "Lifestyle Digital", href: "#" },
                { name: "Social Accountability", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", href: "#" },
                { name: "Documentation", href: "#" },
                { name: "FAQs", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
            ],
        },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Company Info - 2 columns on lg */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        variants={itemVariants}
                    >
                        <div>
                            <p className="text-gray-700 mb-6 font-bold">
                                Redefining modern healthcare by blending
                                evidence-informed wellness with agentic
                                intelligence, all backed by a community which
                                holds you accountable.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center text-gray-700 transition-colors hover:text-violet-500">
                                <MapPin className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                                <span>
                                    Embassy Golf Links Business Park, Cinnabar
                                    Hills, Bangalore - 560071
                                </span>
                            </div>
                            <div className="flex items-center text-gray-700 transition-colors hover:text-violet-500">
                                <Mail className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                                <span>team@tefline.org</span>
                            </div>
                            <div className="flex items-center text-gray-700 transition-colors hover:text-violet-500">
                                <Phone className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                                <span>+91 1234567891</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Instagram, href: "#" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:text-violet-500 hover:border-violet-500 transition-colors"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Sections - 3 columns on lg */}
                    {footerSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            className="space-y-4"
                            variants={itemVariants}
                            custom={sectionIndex}
                        >
                            <h3 className="text-gray-900 font-bold text-lg relative inline-block">
                                {section.title}
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-violet-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + sectionIndex * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                />
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        whileHover={{ x: 3 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-gray-700 hover:text-violet-500 transition-colors duration-200 flex items-center"
                                        >
                                            <ChevronRight className="w-3.5 h-3.5 mr-2 text-teal-500" />
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Newsletter Section */}
                <motion.div
                    className="mt-16 bg-gradient-to-r from-teal-500/10 to-violet-500/10 rounded-2xl p-8 border border-violet-500/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-violet-500 mb-4 border border-violet-500/20 shadow-sm"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Stay Updated
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Join Our Newsletter
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Subscribe to receive updates on wellness
                                intelligence, exclusive insights, and special
                                offers directly to your inbox.
                            </p>
                            <form
                                onSubmit={handleSubscribe}
                                className="relative max-w-md"
                            >
                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-white border-gray-300 pr-12 focus:border-violet-500 focus:ring-violet-500/20 rounded-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 btn-primary"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                            {subscribed && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-violet-500 text-sm mt-2 flex items-center"
                                >
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Thank you for subscribing!
                                </motion.p>
                            )}
                        </div>

                        <div className="space-y-5">
                            <motion.div
                                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-300 hover-lift"
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gradient-to-r from-teal-500 to-violet-500 text-white p-3 rounded-full">
                                    <Heart className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Free Wellness Masterclass
                                    </h4>
                                    <p className="text-sm text-gray-700">
                                        Discover evidence-based strategies for
                                        optimal health
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-300 hover-lift"
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gradient-to-r from-teal-500 to-violet-500 text-white p-3 rounded-full">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Personalized Consultation
                                    </h4>
                                    <p className="text-sm text-gray-700">
                                        One-on-one guidance for your wellness
                                        journey
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-300 hover-lift"
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gradient-to-r from-teal-500 to-violet-500 text-white p-3 rounded-full">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Community Access
                                    </h4>
                                    <p className="text-sm text-gray-700">
                                        Join a supportive network of like-minded
                                        individuals
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <Separator className="my-8 bg-gray-200" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 flex items-center">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Tefline. All rights
                            reserved.
                        </p>
                        <span className="gradient-dot mx-3"></span>
                        <p className="text-sm text-gray-400">
                            Made with <span className="text-red-500">❤</span> in
                            Bangalore
                        </p>
                    </div>
                    <div className="flex space-x-6 md:space-x-8">
                        {[
                            "Privacy Policy",
                            "Terms of Service",
                            "Cookie Policy",
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="text-sm text-gray-400 hover:text-violet-500 transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
