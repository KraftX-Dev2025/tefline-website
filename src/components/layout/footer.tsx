"use client";

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Brain,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    AlertCircle,
    Globe,
    Shield,
} from "lucide-react";

export function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() !== "") {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const footerAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const cardAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    const linkAnimation = {
        hidden: { opacity: 0, x: -10 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
        hover: {
            x: 5,
            color: "#5eead4",
            transition: { duration: 0.2 },
        },
    };

    const socialAnimation = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 },
        },
    };

    return (
        <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-20 pb-8 overflow-hidden">
            <motion.div
                className="container mx-auto px-4"
                variants={footerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Footer Top with Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Company Info */}
                    <motion.div variants={cardAnimation}>
                        <Card className="bg-slate-800/50 border-slate-700 text-white h-full">
                            <CardHeader className="pb-2">
                                <div className="flex items-center mb-2">
                                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg mr-3">
                                        <Brain className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-teal-200">
                                        TEFLINE
                                    </CardTitle>
                                </div>
                                <CardDescription className="text-slate-300">
                                    The Epicenter For Lifestyle Medicine
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-300 mb-6">
                                    Redefining modern healthcare with
                                    evidence-informed wellness and agentic
                                    intelligence to optimize your healthspan.
                                </p>
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-slate-300">
                                            Embassy Golf Links Business Park,
                                            Cinnabar Hills, Bangalore - 560071
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                                        <a
                                            href="mailto:team@tefline.org"
                                            className="text-sm text-slate-300 hover:text-teal-300 transition-colors"
                                        >
                                            team@tefline.org
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                                        <p className="text-sm text-slate-300">
                                            +91 98451 71490
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={cardAnimation}>
                        <Card className="bg-slate-800/50 border-slate-700 text-white h-full">
                            <CardHeader>
                                <CardTitle className="text-xl text-teal-200">
                                    Quick Links
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-2">
                                    {navLinks.slice(0, 8).map((link) => (
                                        <motion.div
                                            key={link.href}
                                            variants={linkAnimation}
                                            whileHover="hover"
                                        >
                                            <Link
                                                href={link.href}
                                                className="flex items-center text-slate-300 hover:text-teal-300 py-1.5 transition-colors"
                                            >
                                                <ArrowRight className="h-3.5 w-3.5 mr-2 text-teal-500" />
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={cardAnimation}>
                        <Card className="bg-slate-800/50 border-slate-700 text-white h-full">
                            <CardHeader>
                                <CardTitle className="text-xl text-teal-200">
                                    Subscribe to Our Newsletter
                                </CardTitle>
                                <CardDescription className="text-slate-300">
                                    Stay updated with the latest in lifestyle
                                    medicine
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubscribe}
                                    className="space-y-4"
                                >
                                    <div className="flex space-x-2">
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-teal-400"
                                            value={email}
                                            onChange={(e: {
                                                target: {
                                                    value: SetStateAction<string>;
                                                };
                                            }) => setEmail(e.target.value)}
                                            required
                                        />
                                        <Button
                                            type="submit"
                                            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
                                        >
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    {subscribed && (
                                        <motion.div
                                            className="flex items-center text-teal-300 text-sm"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <AlertCircle className="h-4 w-4 mr-2" />
                                            Thank you for subscribing!
                                        </motion.div>
                                    )}

                                    <div className="pt-4">
                                        <h4 className="text-sm font-medium text-teal-300 mb-3">
                                            Connect With Us
                                        </h4>
                                        <div className="flex space-x-4">
                                            <motion.a
                                                href="#"
                                                className="bg-slate-700 hover:bg-teal-600 p-2 rounded-full text-white transition-colors"
                                                whileHover={
                                                    socialAnimation.hover
                                                }
                                            >
                                                <Twitter className="h-4 w-4" />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="bg-slate-700 hover:bg-teal-600 p-2 rounded-full text-white transition-colors"
                                                whileHover={
                                                    socialAnimation.hover
                                                }
                                            >
                                                <Linkedin className="h-4 w-4" />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="bg-slate-700 hover:bg-teal-600 p-2 rounded-full text-white transition-colors"
                                                whileHover={
                                                    socialAnimation.hover
                                                }
                                            >
                                                <Instagram className="h-4 w-4" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Features */}
                <motion.div
                    variants={cardAnimation}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 text-center"
                >
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-r from-teal-600 to-teal-400 p-3 rounded-full">
                                <Brain className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-2">
                            Wellness Intelligence™
                        </h3>
                        <p className="text-sm text-slate-400">
                            Powered by advanced AI to optimize your health
                            journey
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-r from-teal-600 to-teal-400 p-3 rounded-full">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-2">
                            Evidence-Informed
                        </h3>
                        <p className="text-sm text-slate-400">
                            Protocols backed by rigorous scientific research
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-r from-teal-600 to-teal-400 p-3 rounded-full">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-teal-200 mb-2">
                            Global Community
                        </h3>
                        <p className="text-sm text-slate-400">
                            Join thousands improving their health worldwide
                        </p>
                    </div>
                </motion.div>

                <Separator className="bg-slate-800 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Tefline. All rights
                        reserved.
                    </p>

                    <div className="flex mt-4 md:mt-0 space-x-6">
                        <Link
                            href="/privacy"
                            className="hover:text-teal-300 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-teal-300 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/cookies"
                            className="hover:text-teal-300 transition-colors"
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
