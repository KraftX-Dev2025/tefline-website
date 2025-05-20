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
    ChevronRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
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
    // const additionalNavLinks = [
    //     { name: "About", href: "/about" },
    //     { name: "Team", href: "/team" },
    //     { name: "Vision & Mission", href: "/vision-mission" },
    //     { name: "Programs", href: "/programs" },
    //     { name: "Press", href: "/press" },
    // ];

    // Footer main sections
    const footerSections = [
        {
            title: "Company",
            links: [
                { name: "Crest", href: "/" },
                { name: "Capitalize", href: "/capitalize" },
                { name: "Connect", href: "/connect" },
                { name: "Content", href: "/content" },
                { name: "Cohort", href: "/cohort" },
                { name: "Context", href: "/context" },
                { name: "Press", href: "/press" },
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
