"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ServicesCTASection() {
    const [isClient, setIsClient] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const ctaRef = useRef<HTMLDivElement>(null);

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

    const isCtaInView = useInView(ctaRef, {
        once: true,
        amount: isClient && isMobile ? 0.1 : 0.3
    });

    const shouldReduceAnimations = !isClient || isMobile || reduceMotion;

    return (
        <section ref={ctaRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 primary-gradient -z-10" />

            {/* Conditional animated wave pattern */}
            {isClient && !isMobile && (
                <div className="absolute inset-0 -z-5">
                    <svg
                        viewBox="0 0 1200 600"
                        className="absolute w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M 0 300 Q 300 200 600 300 Q 900 400 1200 300 L 1200 600 L 0 600 Z"
                            fill="white"
                            opacity="0.05"
                            animate={{
                                d: [
                                    "M 0 300 Q 300 200 600 300 Q 900 400 1200 300 L 1200 600 L 0 600 Z",
                                    "M 0 300 Q 300 400 600 300 Q 900 200 1200 300 L 1200 600 L 0 600 Z",
                                    "M 0 300 Q 300 200 600 300 Q 900 400 1200 300 L 1200 600 L 0 600 Z",
                                ],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        />
                        <motion.path
                            d="M 0 350 Q 300 250 600 350 Q 900 450 1200 350 L 1200 600 L 0 600 Z"
                            fill="white"
                            opacity="0.07"
                            animate={{
                                d: [
                                    "M 0 350 Q 300 250 600 350 Q 900 450 1200 350 L 1200 600 L 0 600 Z",
                                    "M 0 350 Q 300 450 600 350 Q 900 250 1200 350 L 1200 600 L 0 600 Z",
                                    "M 0 350 Q 300 250 600 350 Q 900 450 1200 350 L 1200 600 L 0 600 Z",
                                ],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        />
                    </svg>
                </div>
            )}

            <Container className="relative z-10">
                <motion.div
                    initial={shouldReduceAnimations ? {} : { opacity: 0, scale: 0.95 }}
                    animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
                    transition={shouldReduceAnimations ? {} : {
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                    }}
                    className="max-w-3xl mx-auto text-center text-white bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 shadow-xl relative"
                >
                    <div className="badge-teal">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Transform Your Approach
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to transform your approach to wellness?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Contact our team to discuss how Tefline can support
                        your wellness journey and help you achieve optimal
                        health.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-teal-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                            asChild
                        >
                            <Link href="/connect">Book a Consultation</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-teal-600 hover:bg-white/70 transition-all duration-300"
                            asChild
                        >
                            <Link href="/connect">
                                Request a Free Masterclass
                            </Link>
                        </Button>
                    </div>

                    {/* Conditional glow effect */}
                    {isClient && !isMobile && (
                        <motion.div
                            className="absolute inset-0 -z-10 bg-teal-400/20 rounded-2xl blur-xl"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [0.8, 0.9, 0.8],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    )}
                </motion.div>
            </Container>
        </section>
    );
}