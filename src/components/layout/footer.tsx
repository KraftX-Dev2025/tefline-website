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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

    return (
        <footer className="bg-teal-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4 text-teal-200">
                            TEFLINE
                        </h3>
                        <p className="text-sm text-teal-50/80">
                            Redefining modern healthcare by blending
                            evidence-informed wellness with agentic
                            intelligence, all backed by a community which holds
                            you accountable.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-teal-50/80">
                            <MapPin className="w-4 h-4 text-teal-300" />
                            <span>
                                Embassy Golf Links Business Park, Cinnabar
                                Hills, Bangalore - 560071
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-teal-50/80">
                            <Mail className="w-4 h-4 text-teal-300" />
                            <span>team@tefline.org</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-teal-50/80">
                            <Phone className="w-4 h-4 text-teal-300" />
                            <span>+91 98451 71490</span>
                        </div>
                        <div className="flex space-x-4 pt-2">
                            {[Facebook, Twitter, Linkedin, Instagram].map(
                                (Icon, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        whileHover={{ y: -3 }}
                                        className="text-teal-300 hover:text-white transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4 text-teal-200">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Team", href: "/team" },
                                { name: "Invest", href: "/invest" },
                                { name: "Contact", href: "/contact" },
                                { name: "Wellness Vault", href: "#" },
                                { name: "AIR Tenet", href: "#" },
                                { name: "Cognitive Counselor", href: "#" },
                                { name: "Lifestyle Digital", href: "#" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-teal-50/80 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center"
                                >
                                    <span className="inline-block w-1 h-1 bg-teal-300 rounded-full mr-2"></span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4 text-teal-200">
                            Join Our Newsletter
                        </h3>
                        <p className="text-sm text-teal-50/80 mb-4">
                            Subscribe to receive updates on wellness
                            intelligence and exclusive insights.
                        </p>
                        <form onSubmit={handleSubscribe} className="relative">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-teal-800/50 border-teal-700 text-white placeholder:text-teal-400/60 pr-12"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                size="sm"
                                variant="ghost"
                                className="absolute right-1 top-1/2 -translate-y-1/2 text-teal-300 hover:text-white hover:bg-transparent"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                        {subscribed && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-teal-300 mt-2"
                            >
                                Thank you for subscribing!
                            </motion.p>
                        )}
                        <div className="pt-4">
                            <h4 className="text-teal-200 font-semibold text-sm mb-2">
                                Get Our Free Masterclass
                            </h4>
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                                asChild
                            >
                                <Link href="/contact">Book Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-teal-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xs text-teal-50/60 mb-4 md:mb-0">
                            © 2025 Tefline. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                "Privacy Policy",
                                "Terms of Service",
                                "Cookie Policy",
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="text-xs text-teal-50/60 hover:text-white transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
