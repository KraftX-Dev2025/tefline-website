"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
    const [isMounted, setIsMounted] = useState(false);

    // Ensure that animations only run after component has mounted (client-side)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative pt-16">
            {/* Header section */}
            <div className="pt-10 pb-8 bg-gradient-to-b from-teal-600 to-teal-700">
                <div className="container mx-auto px-4">
                    {isMounted && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-lg mx-auto"
                        >
                            <h1 className="text-3xl font-bold text-white mb-3">
                                Welcome Back
                            </h1>
                            <p className="text-teal-100">
                                Sign in to continue your wellness journey with
                                Tefline
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Main content */}
            <div className="flex-grow bg-gradient-to-b from-teal-50 via-white to-teal-50 relative">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-teal-300/10 blur-[100px]" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sky-300/10 blur-[100px]" />
                </div>

                {/* Form section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-md mx-auto -mt-16">
                        {/* Card container */}
                        {isMounted && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl shadow-xl relative z-10 overflow-hidden"
                            >
                                {/* Top accent */}
                                <div className="h-2 bg-gradient-to-r from-teal-400 to-teal-600" />

                                {/* Login form header */}
                                <div className="flex items-center justify-center p-6 border-b border-slate-100">
                                    <div className="bg-teal-50 p-2 rounded-lg mr-3">
                                        <BrainCircuit className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-slate-800">
                                            Tefline Account
                                        </h2>
                                        <p className="text-xs text-slate-500">
                                            The Epicenter For Lifestyle Medicine
                                        </p>
                                    </div>
                                </div>

                                {/* Login badges */}
                                <div className="px-6 pt-6 pb-3">
                                    <div className="flex flex-wrap gap-2 mb-3 justify-center">
                                        {[
                                            { text: "Secure Authentication" },
                                            { text: "Wellness Intelligence" },
                                            { text: "Personalized Dashboard" },
                                        ].map((badge, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: 0.2 + i * 0.1,
                                                }}
                                                className="bg-teal-50 border border-teal-100 py-1 px-2 rounded-full text-xs text-teal-600 flex items-center"
                                            >
                                                <Sparkles className="h-3 w-3 mr-1" />
                                                <span>{badge.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Form component */}
                                <div className="px-6 pb-8">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <LoginForm />
                                    </Suspense>
                                </div>
                            </motion.div>
                        )}

                        {/* Support section */}
                        {isMounted && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-center mt-6 text-sm text-slate-600"
                            >
                                Need help? Contact{" "}
                                <a
                                    href="mailto:support@tefline.org"
                                    className="text-teal-600 hover:underline"
                                >
                                    support@tefline.org
                                </a>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
