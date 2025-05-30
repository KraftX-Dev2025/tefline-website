"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
    TrendingUp, 
    BarChart3, 
    LineChart, 
    PieChart, 
    Activity,
    BarChart,
    Zap
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { BACKGROUND_ELEMENTS, CHART_DATA } from "@/lib/constants/services";

// Icon component selector
const IconComponent = ({ iconName, className }: { iconName: string; className: string }) => {
    const iconMap = {
        TrendingUp: TrendingUp,
        BarChart3: BarChart3,
        LineChart: LineChart,
        PieChart: PieChart,
        Activity: Activity,
        BarChart: BarChart,
        Zap: Zap,
    };
    const Icon = iconMap[iconName as keyof typeof iconMap] || TrendingUp;
    return <Icon className={className} />;
};

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    // Ensure client-side rendering for animations
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Parallax effect for hero section
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    if (!isClient) {
        // Server-side render with minimal content to avoid hydration mismatch
        return (
            <section className="relative min-h-[70vh] flex items-center pt-16 pb-16">
                <div className="absolute top-0 left-0 w-full h-full primary-gradient" />
                <Container className="z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <div className="badge-teal mt-10">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Growth Opportunity
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                INVESTMENT EDGE
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-white/90 mb-8">
                                Join us at the inflection point of the digital
                                wellness revolution, poised to dominate the
                                growing demand for preventive, data-driven
                                health solutions.
                            </p>
                        </div>
                        <div className="block">
                            <div className="relative h-96 w-full p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                                <div className="absolute top-6 left-6 text-primary">
                                    <h3 className="font-semibold text-lg">
                                        Growth Potential
                                    </h3>
                                    <p className="text-primary text-sm">
                                        Wellness Intelligence Market
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section
            ref={heroRef}
            className="relative min-h-[70vh] flex items-center pt-16 pb-16"
        >
            <div className="absolute top-0 left-0 w-full h-full primary-gradient" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Charts and graphs pattern with fixed positions */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {BACKGROUND_ELEMENTS.map((element) => (
                        <motion.div
                            key={element.id}
                            className="absolute"
                            style={{
                                top: `${element.top}%`,
                                left: `${element.left}%`,
                                opacity: 0.3,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.3, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: element.id * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <IconComponent
                                iconName={element.icon}
                                className="text-white/20 w-12 h-12 md:w-16 md:h-16"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Dot pattern background */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>
            </div>

            <Container className="z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="badge-teal mt-10"
                        >
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Growth Opportunity
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        >
                            INVESTMENT EDGE
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl font-light text-white/90 mb-8"
                        >
                            Join us at the inflection point of the digital
                            wellness revolution, poised to dominate the
                            growing demand for preventive, data-driven
                            health solutions.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                            >
                                <Link
                                    href="/connect"
                                    className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group shadow-lg shadow-amber-500/20"
                                >
                                    <span>Connect</span>
                                    <Zap className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                            >
                                <Link
                                    href="/learn-more"
                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group"
                                >
                                    <span>Learn More</span>
                                    <Activity className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="block"
                    >
                        <div className="relative h-96 w-full p-6 bg-white/80 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                            {/* Investment growth chart */}
                            <div className="absolute inset-6 flex items-end">
                                <div className="relative w-full h-3/4">
                                    {/* Animated bars */}
                                    {CHART_DATA.map((height, i) => (
                                        <motion.div
                                            key={`bar-${i}`}
                                            className="absolute bottom-0 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t-md"
                                            style={{
                                                left: `${i * 14}%`,
                                                width: '10%',
                                                height: "0%",
                                            }}
                                            animate={{
                                                height: `${height * 100}%`,
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.8 + i * 0.1,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}

                                    {/* Growth trend line using CSS instead of SVG */}
                                    <div className="absolute bottom-0 left-0 w-full h-full">
                                        {CHART_DATA.map((height, i) => (
                                            <motion.div
                                                key={`point-${i}`}
                                                className="absolute w-3 h-3 bg-white rounded-full border-2 border-teal-500"
                                                style={{
                                                    left: `${i * 14 + 5}%`,
                                                    bottom: `${height * 100}%`,
                                                    transform: 'translate(-50%, 50%)',
                                                }}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 1.5 + i * 0.1,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Chart labels */}
                            <div className="absolute top-6 left-6 text-primary">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="font-semibold text-lg flex items-center"
                                >
                                    <BarChart3 className="w-5 h-5 mr-2" />
                                    Growth Potential
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-primary/70 text-sm"
                                >
                                    Wellness Intelligence Market
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.8 }}
                                className="absolute bottom-6 right-6 text-right"
                            >
                                <div className="text-4xl font-bold text-primary flex items-center">
                                    <TrendingUp className="w-8 h-8 mr-2 text-primary" />
                                    <span>+85%</span>
                                </div>
                                <p className="text-sm text-primary/70 font-bold mt-1">Annual Growth</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}