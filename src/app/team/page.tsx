"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    Users,
    ChevronRight,
    FileCheck,
    BriefcaseBusiness,
    Heart,
    LightbulbIcon,
    Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/constants/team";

export default function TeamPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const teamGridRef = useRef<HTMLDivElement>(null);
    const cultureRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const isTeamGridInView = useInView(teamGridRef, {
        once: true,
        amount: 0.2,
    });
    const isCultureInView = useInView(cultureRef, {
        once: true,
        amount: 0.3,
    });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="relative min-h-[60vh] flex items-center pt-16 pb-16"
                style={{ opacity: heroOpacity, y: heroY }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600/80" />
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
                <div className="container mx-auto px-4 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-center text-white"
                    >
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full text-teal-50 text-sm font-medium px-4 py-1 mb-5">
                            <Users className="w-4 h-4 mr-2" />
                            Our Leadership
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Meet The Visionaries
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            The innovative minds behind Tefline's mission to
                            redefine healthcare through wellness intelligence
                        </p>
                    </motion.div>
                </div>
            </motion.section>
            {/* Team Grid */}
            <section
                ref={teamGridRef}
                className="py-20 bg-teal-50 relative overflow-hidden"
            >
                {/* Blurred background elements */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl transform translate-x-1/2"></div>
                <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isTeamGridInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * (index + 1),
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.2 },
                                }}
                                className="team-profile-card"
                            >
                                <Link href={`/team/${member.slug}`}>
                                    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                        <div
                                            className={`h-1.5 w-full bg-gradient-to-r ${
                                                member.theme.from
                                            } ${
                                                member.theme.via
                                                    ? member.theme.via
                                                    : ""
                                            } ${member.theme.to}`}
                                        ></div>
                                        <CardContent className="p-0">
                                            <div className="relative w-full h-64 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70 z-10"></div>
                                                <Image
                                                    src={`/team/${member.slug}.jpg`}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                                    <h3 className="text-white font-bold text-xl">
                                                        {member.name}
                                                    </h3>
                                                    <p
                                                        className={`${member.theme.textColor} text-sm font-medium`}
                                                    >
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <p className="text-sm text-slate-600 mb-4">
                                                    {member.shortBio}
                                                </p>
                                                <div
                                                    className={`${member.theme.textColor} font-medium flex items-center text-sm group-hover:translate-x-1 transition-all duration-300`}
                                                >
                                                    View Full Profile
                                                    <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Introduction */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                <FileCheck className="w-4 h-4 mr-2" />
                                Team Philosophy
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Pioneering Human-AI Collaboration
                            </h2>
                            <p className="text-slate-700 mb-6">
                                At Tefline, we've assembled a unique blend of
                                visionary technologists, healthcare experts, and
                                AI pioneers united by a shared mission: to
                                transform healthcare through cutting-edge
                                wellness intelligence.
                            </p>
                            <p className="text-slate-700 mb-6">
                                Our team represents a new paradigm in
                                leadership, where human expertise and artificial
                                intelligence work in harmony to create solutions
                                that were previously unimaginable. This synergy
                                allows us to make smarter decisions and deliver
                                unprecedented value to our clients.
                            </p>
                            <p className="text-slate-700 mb-6">
                                We believe that by bringing together diverse
                                perspectives and revolutionary technology, we
                                can address the most pressing challenges in
                                healthcare and wellness.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -left-4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="bg-teal-50 p-6 rounded-xl shadow-sm"
                                >
                                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                                        <BriefcaseBusiness className="w-7 h-7 text-teal-600" />
                                    </div>
                                    <h3 className="font-semibold text-teal-800 mb-2">
                                        Excellence Driven
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        We pursue excellence in every aspect of
                                        our work, from research to
                                        implementation.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="bg-teal-50 p-6 rounded-xl shadow-sm mt-10"
                                >
                                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                                        <Heart className="w-7 h-7 text-teal-600" />
                                    </div>
                                    <h3 className="font-semibold text-teal-800 mb-2">
                                        Compassionate Care
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        We lead with empathy, ensuring our
                                        innovations serve real human needs.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="bg-teal-50 p-6 rounded-xl shadow-sm"
                                >
                                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                                        <Brain className="w-7 h-7 text-teal-600" />
                                    </div>
                                    <h3 className="font-semibold text-teal-800 mb-2">
                                        Intelligent Innovation
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        We harness AI to create adaptive
                                        solutions that evolve with user needs.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="bg-teal-50 p-6 rounded-xl shadow-sm mt-10"
                                >
                                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                                        <LightbulbIcon className="w-7 h-7 text-teal-600" />
                                    </div>
                                    <h3 className="font-semibold text-teal-800 mb-2">
                                        Visionary Leadership
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        We anticipate future needs and pioneer
                                        new approaches to wellness.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Culture Section */}
            <section ref={cultureRef} className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isCultureInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-10 text-white">
                                <h2 className="text-3xl font-bold mb-6">
                                    Our Approach
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Human-AI Collaboration
                                        </h3>
                                        <p className="text-white/80">
                                            At Tefline, we pioneer a unique
                                            leadership approach where human
                                            expertise and AI intelligence work
                                            in harmony, allowing us to make
                                            smarter decisions and deliver
                                            unprecedented value.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Core Values
                                        </h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="bg-white/20 p-1 rounded-full mr-2 mt-0.5">
                                                    <ChevronRight className="w-3 h-3" />
                                                </span>
                                                <span>
                                                    Evidence-Informed Excellence
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-white/20 p-1 rounded-full mr-2 mt-0.5">
                                                    <ChevronRight className="w-3 h-3" />
                                                </span>
                                                <span>
                                                    Intelligent Wellness
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-white/20 p-1 rounded-full mr-2 mt-0.5">
                                                    <ChevronRight className="w-3 h-3" />
                                                </span>
                                                <span>
                                                    Community Empowerment
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-white/20 p-1 rounded-full mr-2 mt-0.5">
                                                    <ChevronRight className="w-3 h-3" />
                                                </span>
                                                <span>
                                                    Visionary Innovation
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-80 md:h-auto">
                                <Image
                                    src="/placeholder.webp"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-transparent md:bg-gradient-to-l"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 -z-10" />
                <div className="absolute inset-0 bg-[url('/placeholder.webp')] opacity-10 mix-blend-overlay -z-10" />

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Join Our Mission
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            We're looking for passionate individuals who share
                            our vision of transforming healthcare through
                            innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                asChild
                            >
                                <Link href="/contact?careers=true">
                                    Join Our Team
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 transition-all duration-300"
                                asChild
                            >
                                <Link href="/contact?partner=true">
                                    Partner With Us
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
