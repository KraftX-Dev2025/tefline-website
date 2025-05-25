"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Brain, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { individualServices } from "@/lib/constants/services";

export default function IndividualServicesSection() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const individualRef = useRef<HTMLDivElement>(null);

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

    const isIndividualInView = useInView(individualRef, {
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

    const staggerCards = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: shouldReduceAnimations
                ? { duration: 0.3 }
                : {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: shouldReduceAnimations ? 0 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: shouldReduceAnimations ? 0.3 : 0.5 },
        },
    };

    return (
        <section
            id="individual-services"
            ref={individualRef}
            className="py-24 bg-white relative overflow-hidden"
        >
            {/* Conditional background elements */}
            {isClient && !isMobile && (
                <>
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-50 rounded-full opacity-50 blur-[100px]"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-50 rounded-full opacity-50 blur-[80px]"></div>
                </>
            )}

            <Container className="relative z-10">
                <motion.div
                    initial="hidden"
                    animate={isIndividualInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        <Brain className="w-4 h-4 mr-2" />
                        Personalized Care
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        INDIVIDUAL SERVICES
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Tailored solutions designed to optimize your
                        personal wellness journey through evidence-informed
                        protocols and intelligent guidance.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isIndividualInView ? "visible" : "hidden"}
                    variants={staggerCards}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {individualServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            whileHover={shouldReduceAnimations ? {} : {
                                y: -8,
                                boxShadow:
                                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                transition: { duration: 0.2 },
                            }}
                            className="group"
                        >
                            <Card className="h-full overflow-hidden border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative h-72 w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        fill
                                        className={`object-cover transition-transform duration-700 ${!shouldReduceAnimations ? 'group-hover:scale-110' : ''}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <p className="text-slate-600 mb-6">
                                        {service.description}
                                    </p>
                                    <h4 className="font-semibold text-teal-600 mb-3 flex items-center">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Key Features
                                    </h4>
                                    <ul className="space-y-2 mb-4">
                                        {service.features.map(
                                            (feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-start"
                                                    initial={shouldReduceAnimations ? {} : {
                                                        opacity: 0,
                                                        x: -10,
                                                    }}
                                                    animate={shouldReduceAnimations ? {} : {
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={shouldReduceAnimations ? {} : {
                                                        delay: 0.5 + idx * 0.1,
                                                    }}
                                                >
                                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                                                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                                    </div>
                                                    <span className="ml-2 text-slate-700">
                                                        {feature}
                                                    </span>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>
                                </CardContent>
                                <CardFooter className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                                    <Button
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white group"
                                        asChild
                                    >
                                        <Link
                                            href="/contact"
                                            className="flex items-center justify-center"
                                        >
                                            {service.buttonText}
                                            <ChevronRight className={`ml-1 w-4 h-4 transition-transform ${!shouldReduceAnimations ? 'group-hover:translate-x-1' : ''}`} />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}