"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    Menu,
    Brain,
    ChevronRight,
    X,
    Twitter,
    Linkedin,
    Instagram,
} from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Logo animation
    const logoAnimation = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    // Desktop navigation item animation
    const navItemAnimation = {
        initial: { opacity: 0, y: -10 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.1 + i * 0.05,
            },
        }),
        whileHover: {
            scale: 1.05,
            color: "#5eead4",
            transition: { duration: 0.2 },
        },
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-slate-900/90 backdrop-blur-md py-2 shadow-lg"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="whileHover"
                        variants={logoAnimation}
                    >
                        <Link href="/" className="flex items-center">
                            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg mr-2">
                                <Brain className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                                    TEFLINE
                                </span>
                                <span className="hidden sm:inline-block ml-2 text-xs text-teal-300 tracking-widest">
                                    LIFESTYLE MEDICINE
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <NavigationMenu className="animate-fadeIn">
                            <NavigationMenuList className="gap-1 bg-slate-800/30 backdrop-blur-md p-1 rounded-lg border border-white/10">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        custom={index}
                                        initial="initial"
                                        animate="animate"
                                        whileHover="whileHover"
                                        variants={navItemAnimation}
                                    >
                                        <NavigationMenuItem>
                                            <Link
                                                href={link.href}
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        "text-white hover:text-teal-200 transition-colors",
                                                        pathname ===
                                                            link.href &&
                                                            "bg-slate-700/60 text-teal-200"
                                                    )}
                                                >
                                                    {link.label}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </motion.div>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <Button
                            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
                            asChild
                        >
                            <Link href="/contact" className="flex items-center">
                                <span>Book a Masterclass</span>
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <Sheet
                            open={isMobileMenuOpen}
                            onOpenChange={setIsMobileMenuOpen}
                        >
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-slate-900 text-white border-slate-700 w-[300px] sm:w-[350px] p-0 overflow-hidden transition-transform duration-500 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 [&>button]:hidden"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center text-teal-300">
                                            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-1.5 rounded-md mr-2">
                                                <Brain className="h-5 w-5 text-white" />
                                            </div>
                                            <span className="font-bold">
                                                TEFLINE
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-slate-400 hover:text-white"
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </div>
                                    <div className="space-y-4">
                                        <AnimatePresence>
                                            {isMobileMenuOpen && (
                                                <div className="space-y-4">
                                                    {navLinks.map(
                                                        (link, index) => (
                                                            <motion.div
                                                                key={link.href}
                                                                custom={index}
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: -50,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                    transition:
                                                                        {
                                                                            duration: 0.3,
                                                                            delay:
                                                                                0.1 +
                                                                                index *
                                                                                    0.05,
                                                                        },
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                    x: -20,
                                                                    transition:
                                                                        {
                                                                            duration: 0.2,
                                                                        },
                                                                }}
                                                            >
                                                                <Link
                                                                    href={
                                                                        link.href
                                                                    }
                                                                    className={`flex items-center py-2 px-3 rounded-md transition-colors ${
                                                                        pathname ===
                                                                        link.href
                                                                            ? "bg-slate-800 text-teal-300"
                                                                            : "hover:bg-slate-800 text-slate-300 hover:text-white"
                                                                    }`}
                                                                    onClick={() =>
                                                                        setIsMobileMenuOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    <ChevronRight className="mr-2 h-4 w-4 text-teal-400" />
                                                                    {link.label}
                                                                </Link>
                                                            </motion.div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Mobile Social Links */}
                                    <motion.div
                                        className="mt-8 pt-6 border-t border-slate-700"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4,
                                        }}
                                    >
                                        <p className="text-sm text-slate-400 mb-4">
                                            Connect with us
                                        </p>
                                        <div className="flex space-x-4">
                                            <motion.a
                                                href="#"
                                                className="text-slate-400 hover:text-teal-300 transition-colors"
                                                whileHover={{
                                                    scale: 1.15,
                                                    rotate: 5,
                                                }}
                                            >
                                                <Twitter className="h-5 w-5" />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="text-slate-400 hover:text-teal-300 transition-colors"
                                                whileHover={{
                                                    scale: 1.15,
                                                    rotate: 5,
                                                }}
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="text-slate-400 hover:text-teal-300 transition-colors"
                                                whileHover={{
                                                    scale: 1.15,
                                                    rotate: 5,
                                                }}
                                            >
                                                <Instagram className="h-5 w-5" />
                                            </motion.a>
                                        </div>
                                    </motion.div>

                                    {/* Mobile CTA */}
                                    <motion.div
                                        className="mt-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6,
                                        }}
                                    >
                                        <Button
                                            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
                                            asChild
                                        >
                                            <Link
                                                href="/contact"
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                Book a Masterclass
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
