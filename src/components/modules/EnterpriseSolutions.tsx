"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Building, CheckCircle, Target, ArrowRight, Sparkles, Code, Award, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { enterpriseSolutions } from "@/lib/constants/services";

export default function EnterpriseSolutionsSection() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const enterpriseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const checkMotionPreference = () => {
            setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        };

        checkMobile();
        checkMotionPreference();

        window.addEventListener('resize', checkMobile);
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        motionQuery.addEventListener('change', checkMotionPreference);

        return () => {
            window.removeEventListener('resize', checkMobile);
            motionQuery.removeEventListener('change', checkMotionPreference);
        };
    }, []);

    const isEnterpriseInView = useInView(enterpriseRef, {
        once: true,
        amount: isClient && isMobile ? 0.1 : 0.3,
    });

    const shouldReduceAnimations = !isClient || isMobile || reduceMotion;

    const fadeIn = {
        hidden: { opacity: 0, y: shouldReduceAnimations ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: shouldReduceAnimations ? 0.3 : 0.6 },
        },
    };

    // Enterprise solution icons map
    const solutionIcons = {
        building: <Building className="h-6 w-6 text-white" />,
        medical: <HeartPulse className="h-6 w-6 text-white" />,
        code: <Code className="h-6 w-6 text-white" />,
        certificate: <Award className="h-6 w-6 text-white" />,
    };

    // Helper function to safely get icon by key
    const getSolutionIcon = (iconKey: string) => {
        return (
            solutionIcons[iconKey as keyof typeof solutionIcons] || (
                <Building className="h-6 w-6 text-white" />
            )
        );
    };

    return (
        <section
            ref={enterpriseRef}
            className="py-24 bg-teal-50 relative overflow-hidden"
        >
            {/* Conditional background elements */}
            {isClient && !isMobile && (
                <>
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-[100px]"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-100 rounded-full opacity-40 blur-[80px]"></div>
                    <div className="absolute inset-0 opacity-[0.03]">
                        <svg width="100%" height="100%">
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </>
            )}

            <Container className="relative z-10">
                <motion.div
                    initial="hidden"
                    animate={isEnterpriseInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        <Building className="w-4 h-4 mr-2" />
                        Organizational Wellness
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        ENTERPRISE SOLUTIONS
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Empower your organization with evidence-informed
                        wellness programs designed to improve outcomes and
                        enhance performance
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {enterpriseSolutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={shouldReduceAnimations ? {} : { opacity: 0, y: 30 }}
                            animate={
                                isEnterpriseInView && !shouldReduceAnimations
                                    ? { opacity: 1, y: 0 }
                                    : isEnterpriseInView ? { opacity: 1 } : {}
                            }
                            transition={shouldReduceAnimations ? {} : {
                                duration: 0.5,
                                delay: 0.1 * (index + 1),
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={shouldReduceAnimations ? {} : {
                                y: -5,
                                boxShadow:
                                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                            }}
                            className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-start p-6">
                                <div className="flex-shrink-0 mr-5">
                                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center shadow-md transition-transform duration-300 ${!shouldReduceAnimations ? 'group-hover:scale-110' : ''}`}>
                                        {getSolutionIcon(solution.icon)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`text-xl font-semibold mb-2 text-slate-800 transition-colors duration-300 ${!shouldReduceAnimations ? 'group-hover:text-teal-600' : ''}`}>
                                        {solution.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4">
                                        {solution.description}
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="border-teal-200 text-teal-600 hover:bg-teal-50 group"
                                        asChild
                                    >
                                        <Link
                                            href="/connect"
                                            className="flex items-center"
                                        >
                                            {solution.buttonText}
                                            <ArrowRight className={`ml-1 w-4 h-4 transition-transform ${!shouldReduceAnimations ? 'group-hover:translate-x-1' : ''}`} />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Bottom pulse line - only for desktop */}
                            {isClient && !isMobile && (
                                <motion.div
                                    className="h-1 w-0 bottom-0 bg-gradient-to-r from-teal-400 to-teal-200"
                                    animate={
                                        isEnterpriseInView
                                            ? {
                                                width: ["0%", "100%", "0%"],
                                                x: ["0%", "0%", "100%"],
                                            }
                                            : {}
                                    }
                                    transition={{
                                        duration: 3,
                                        delay: 0.5 + index * 0.3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Custom enterprise section */}
                <motion.div
                    initial={shouldReduceAnimations ? {} : { opacity: 0, y: 40 }}
                    animate={isEnterpriseInView ? { opacity: 1, y: 0 } : {}}
                    transition={shouldReduceAnimations ? {} : { duration: 0.7, delay: 0.8 }}
                    className="mt-16 rounded-xl overflow-hidden shadow-xl"
                >
                    <div className="bg-gradient-to-tl from-teal-400 via-teal-600 to-teal-600 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <div className="p-8 md:p-12 relative">
                                {/* Conditional abstract shapes */}
                                {isClient && !isMobile && (
                                    <div className="absolute inset-0 opacity-10">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                        >
                                            <circle
                                                cx="20"
                                                cy="20"
                                                r="10"
                                                fill="white"
                                            />
                                            <circle
                                                cx="70"
                                                cy="70"
                                                r="15"
                                                fill="white"
                                            />
                                            <circle
                                                cx="80"
                                                cy="10"
                                                r="5"
                                                fill="white"
                                            />
                                            <circle
                                                cx="10"
                                                cy="80"
                                                r="8"
                                                fill="white"
                                            />
                                            <polygon
                                                points="50,0 100,50 50,100 0,50"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                        </svg>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-teal-50 text-sm font-medium mb-4">
                                        <Target className="w-4 h-4 mr-2" />
                                        Custom Solutions
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Custom Enterprise Integration
                                    </h3>
                                    <p className="mb-6 text-teal-50/90">
                                        Need a tailored solution for your
                                        specific organizational challenges?
                                        We specialize in designing custom
                                        wellness programs that integrate
                                        seamlessly with your existing
                                        systems and culture.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        {[
                                            "Integration with existing HR systems",
                                            "Custom analytics dashboards",
                                            "Tailored wellness protocols",
                                        ].map((point, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start"
                                            >
                                                <CheckCircle className="w-5 h-5 text-teal-300 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-teal-50">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        className="bg-white text-teal-600 hover:bg-white/90 shadow"
                                        asChild
                                    >
                                        <Link href="/connect">
                                            Schedule a Consultation
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <Image
                                    src="/tefline-image9.webp"
                                    alt="Enterprise wellness"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-teal-900/50 via-teal-700/30 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Sparkles className="w-5 h-5 text-amber-300" />
                                        <span className="text-white font-medium">
                                            Enterprise Excellence
                                        </span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                                        <p className="text-white/90 text-sm">
                                            Join over 75+ enterprise clients
                                            who have transformed their
                                            organizational wellness
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}