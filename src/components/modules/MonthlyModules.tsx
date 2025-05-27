"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
    Calendar,
    CheckCircle,
    Star,
    ArrowRight,
    Sparkles,
    Heart,
    Zap,
    Shield,
    Dumbbell,
    Apple,
    Users,
    Brain,
    Leaf,
    Target,
    Palette,
    Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { monthlyModules } from "@/lib/constants/programs";



export default function MonthlyModulesSection() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const modulesRef = useRef<HTMLDivElement>(null);

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

    const isModulesInView = useInView(modulesRef, {
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

    // Module icons map - each month gets a unique icon
    const moduleIcons = {
        "January": <Shield className="h-6 w-6 text-white" />,
        "February": <Dumbbell className="h-6 w-6 text-white" />,
        "March": <Apple className="h-6 w-6 text-white" />,
        "April": <Zap className="h-6 w-6 text-white" />,
        "May": <Heart className="h-6 w-6 text-white" />,
        "June": <Users className="h-6 w-6 text-white" />,
        "July": <Brain className="h-6 w-6 text-white" />,
        "August": <Leaf className="h-6 w-6 text-white" />,
        "September": <Target className="h-6 w-6 text-white" />,
        "October": <Palette className="h-6 w-6 text-white" />,
        "November": <Heart className="h-6 w-6 text-white" />,
        "December": <Clock className="h-6 w-6 text-white" />,
    };

    // Helper function to safely get icon by month
    const getModuleIcon = (month: string) => {
        return (
            moduleIcons[month as keyof typeof moduleIcons] || (
                <Calendar className="h-6 w-6 text-white" />
            )
        );
    };

    // Get month number for display
    const getMonthNumber = (month: string) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return (months.indexOf(month) + 1).toString().padStart(2, '0');
    };

    return (
        <section
            ref={modulesRef}
            className="py-10 relative overflow-hidden"
        >
            {/* Conditional background elements */}
            {isClient && !isMobile && (
                <>
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-[100px]"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-[80px]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-[120px]"></div>
                    <div className="absolute inset-0 opacity-[0.02]">
                        <svg width="100%" height="100%">
                            <pattern
                                id="modules-grid"
                                width="60"
                                height="60"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 60 0 L 0 0 0 60"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#modules-grid)" />
                        </svg>
                    </div>
                </>
            )}

            <Container className="relative z-10">
                <motion.div
                    initial="hidden"
                    animate={isModulesInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="badge-teal">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>12-Month Wellness Curriculum</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-gradient">
                        MONTHLY WELLNESS MODULES
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Transform your health through our comprehensive year-long program.
                        Each month focuses on a specific pillar of wellness, building upon
                        previous modules to create lasting change.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {monthlyModules.map((module, index) => (
                        <motion.div
                            key={module.month}
                            initial={shouldReduceAnimations ? {} : { opacity: 0, y: 30 }}
                            animate={
                                isModulesInView && !shouldReduceAnimations
                                    ? { opacity: 1, y: 0 }
                                    : isModulesInView ? { opacity: 1 } : {}
                            }
                            transition={shouldReduceAnimations ? {} : {
                                duration: 0.5,
                                delay: 0.05 * (index + 1),
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={shouldReduceAnimations ? {} : {
                                y: -8,
                                boxShadow:
                                    "0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -8px rgba(0, 0, 0, 0.08)",
                            }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 group relative"
                        >
                            {/* Month number badge */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                                {getMonthNumber(module.month)}
                            </div>

                            <div className="p-6">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg transition-transform duration-300 ${!shouldReduceAnimations ? 'group-hover:scale-110 group-hover:rotate-3' : ''}`}>
                                            {getModuleIcon(module.month)}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-blue-600 mb-1">
                                            {module.month}
                                        </div>
                                        <h3 className={`text-lg font-bold text-teal-600 mb-2 transition-colors duration-300 ${!shouldReduceAnimations ? 'group-hover:text-blue-600' : ''}`}>
                                            {module.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {module.description}
                                </p>

                                <div className="flex items-center justify-end">
                                    <div className="flex items-center text-xs text-teal-600">
                                        {/* <Star className="w-3 h-3 mr-1 text-amber-400 fill-current" /> */}
                                        <Link href="/modules">Explore</Link>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-teal-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                                        asChild
                                    >
                                        <Link href="/modules" className="flex items-center">
                                            <ArrowRight className={`w-4 h-4 transition-transform ${!shouldReduceAnimations ? 'group-hover:translate-x-1' : ''}`} />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Bottom gradient line - only for desktop */}
                            {isClient && !isMobile && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
                                    animate={
                                        isModulesInView
                                            ? {
                                                width: ["0%", "100%", "0%"],
                                                x: ["0%", "0%", "100%"],
                                            }
                                            : {}
                                    }
                                    transition={{
                                        duration: 2.5,
                                        delay: 0.3 + index * 0.1,
                                        repeat: Infinity,
                                        repeatDelay: 4,
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>



            </Container>
        </section>
    );
}