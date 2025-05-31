"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Menu,
    ChevronRight,
    X,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { productLink } from "@/lib/constants/contact";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Track which nav item is being hovered
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    // Debounced scroll handler
    const handleScroll = useCallback(() => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // Main navigation links
    const navLinks = [
        { name: "Crest", href: "/" },
        { name: "Modules", href: "/modules" },
        { name: "Capitalize", href: "/capitalize" },
        { name: "Connect", href: "/connect" },
    ];

    // Logo animation
    const logoVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    // Individual nav item animation (entry animation only)
    const navItemVariants = {
        initial: { opacity: 0, y: -10 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.1 + i * 0.05 },
        }),
    };

    // Button animation
    const buttonVariants = {
        initial: { opacity: 0, y: -10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
        },
        hover: {
            y: -2,
            boxShadow: "0 8px 16px rgba(147, 93, 253, 0.2)",
            transition: { duration: 0.2 },
        },
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/85 backdrop-blur-md py-3 shadow-sm border-b border-gray-200"
                : "bg-white/100 py-4"
                }`}
        >
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={logoVariants}
                    >
                        <Link
                            href="/"
                            className="flex items-center"
                            aria-label="Tefline - Homepage"
                        >
                            <div className="mr-3">
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src="/favicon.png"
                                        alt="Tefline Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-full shadow-sm"
                                    />
                                </motion.div>
                            </div>
                            <motion.span className="text-2xl font-bold transition-colors duration-300 bg-gradient-to-r from-teal-500 to-violet-500 text-transparent bg-clip-text">
                                RX Medlife
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <NavigationMenu className="animate-fadeIn">
                            <NavigationMenuList
                                className={`gap-8 p-1 rounded-lg transition-all duration-300 ${!isScrolled
                                    ? "bg-white/10 backdrop-blur-md"
                                    : "bg-transparent"
                                    }`}
                            >
                                {navLinks.map((link, index) => (
                                    <NavigationMenuItem key={link.href}>
                                        <motion.div
                                            custom={index}
                                            initial="initial"
                                            animate="animate"
                                            variants={navItemVariants}
                                            onMouseEnter={() =>
                                                setHoveredItem(link.href)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredItem(null)
                                            }
                                        >
                                            <Link
                                                href={link.href}
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink
                                                    className={cn(
                                                        "text-base font-medium px-3 py-2 rounded-md transition-colors duration-200 relative",
                                                        pathname === link.href
                                                            ? "font-semibold"
                                                            : "",
                                                        "text-gray-900 hover:text-violet-500"
                                                    )}
                                                >
                                                    {link.name}
                                                    {pathname === link.href && (
                                                        <motion.span
                                                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-teal-500 to-violet-500 rounded-full"
                                                            layoutId="activeNavIndicator"
                                                        />
                                                    )}
                                                    {/* Individual hover underline - only appears when this specific item is hovered */}
                                                    <motion.span
                                                        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-violet-500 rounded-full"
                                                        initial={{
                                                            width: 0,
                                                            x: "-50%",
                                                        }}
                                                        animate={{
                                                            width:
                                                                hoveredItem ===
                                                                    link.href
                                                                    ? "100%"
                                                                    : "0%",
                                                            x: "-50%",
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                    />
                                                </NavigationMenuLink>
                                            </Link>
                                        </motion.div>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Get Started Button */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={buttonVariants}
                        className="hidden lg:block"
                    >
                        <Button
                            className="bg-gradient-to-r from-teal-500 to-violet-500 text-white hover:shadow-lg transition-all duration-300"
                            asChild
                        >
                            <Link
                                href={productLink}
                                className="flex items-center"
                            >
                                <span>Get Started</span>
                                <motion.div
                                    animate={{ x: 0 }}
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </motion.div>
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
                                    className="text-gray-900 hover:bg-gray-100"
                                    aria-label="Open navigation menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-white text-gray-900 border-gray-300 w-[300px] sm:w-[350px] p-0 overflow-hidden [&>button]:hidden"
                            >
                                {/* Visually hidden title for accessibility */}
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center text-violet-500">
                                            <div className="p-1.5 rounded-md mr-2">
                                                <Image
                                                    src="/favicon.png"
                                                    alt="Tefline Logo"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <span className="font-bold">
                                                TEFLINE
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                            aria-label="Close navigation menu"
                                        >
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </div>
                                    <div className="space-y-4">
                                        <AnimatePresence>
                                            {isMobileMenuOpen && (
                                                <div className="space-y-3">
                                                    {navLinks.map(
                                                        (link, index) => (
                                                            <motion.div
                                                                key={link.href}
                                                                initial={{
                                                                    opacity: 0,
                                                                    x: -20,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    x: 0,
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                    x: -10,
                                                                }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay:
                                                                        0.1 +
                                                                        index *
                                                                        0.05,
                                                                }}
                                                            >
                                                                <Link
                                                                    href={
                                                                        link.href
                                                                    }
                                                                    className={`flex items-center py-3 px-4 rounded-md transition-colors ${pathname ===
                                                                        link.href
                                                                        ? "bg-purple-50 text-violet-500 font-semibold"
                                                                        : "hover:bg-gray-50 text-gray-700 hover:text-violet-500"
                                                                        }`}
                                                                    onClick={() =>
                                                                        setIsMobileMenuOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                                                                    {link.name}
                                                                </Link>
                                                            </motion.div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Social Media Links */}
                                    <motion.div
                                        className="mt-8 pt-6 border-t border-gray-200"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4,
                                        }}
                                    >
                                        <p className="text-sm text-gray-700 mb-4">
                                            Connect with us
                                        </p>
                                        <div className="flex space-x-4">
                                            {[
                                                Facebook,
                                                Twitter,
                                                Linkedin,
                                                Instagram,
                                            ].map((Icon, index) => (
                                                <motion.a
                                                    key={index}
                                                    href="#"
                                                    className="text-violet-500 hover:text-violet-700 transition-colors p-2 rounded-full hover:bg-purple-50"
                                                    aria-label={`Connect with us on ${Icon.name}`}
                                                    whileHover={{
                                                        scale: 1.15,
                                                    }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Mobile Get Started Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5,
                                        }}
                                        className="mt-6"
                                    >
                                        <Button
                                            className="w-full bg-gradient-to-r from-teal-500 to-violet-500 text-white"
                                            asChild
                                        >
                                            <Link href="https://tefline-product.vercel.app/register">
                                                <span>Get Started</span>
                                                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
