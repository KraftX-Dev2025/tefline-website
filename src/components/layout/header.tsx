"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Menu,
    BrainCircuit,
    ChevronRight,
    LogOut,
    User,
    Brain,
    X,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

export function Header() {
    const { data: session } = useSession();

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

    // Navigation links
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Vision", href: "/vision-mission" },
        { name: "Team", href: "/team" },
        { name: "Services", href: "/services" },
        { name: "Press", href: "/press" },
        { name: "Invest", href: "/invest" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-teal-900/85 backdrop-blur-md py-2 shadow-lg"
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
                            <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-2 rounded-lg mr-2">
                                <BrainCircuit className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span
                                    className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 bg-teal-50`}
                                >
                                    TEFLINE
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <NavigationMenu className="animate-fadeIn">
                            <NavigationMenuList
                                className={`gap-1  backdrop-blur-md p-1 rounded-lg border border-teal-700/20 transition-all duration-300 ${
                                    !isScrolled
                                        ? "bg-teal-800/40"
                                        : "bg-teal-100/40"
                                }`}
                            >
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
                                                            "bg-teal-700/50 text-teal-200"
                                                    )}
                                                >
                                                    {link.name}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </motion.div>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Auth Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hidden md:block"
                    >
                        {session ? (
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-white/30 text-white hover:bg-white/10"
                                    onClick={() =>
                                        signOut({ callbackUrl: "/" })
                                    }
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Logout
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-white/30 text-white hover:bg-white/10"
                                    asChild
                                >
                                    <Link href="/profile">
                                        <User className="mr-2 h-4 w-4" />
                                        {session.user?.name?.split(" ")[0] ||
                                            "User"}
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <Button
                                className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white shadow-md shadow-teal-900/20"
                                asChild
                            >
                                <Link
                                    href="/login"
                                    className="flex items-center"
                                >
                                    <span>Login</span>
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
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
                                    className="text-white hover:bg-teal-800/50"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-teal-900 text-white border-teal-800 w-[300px] sm:w-[350px] p-0 overflow-hidden transition-transform duration-500 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 [&>button]:hidden"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center text-teal-200">
                                            <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-1.5 rounded-md mr-2">
                                                <Brain className="h-5 w-5 text-white" />
                                            </div>
                                            <span className="font-bold">
                                                TEFLINE
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-teal-300 hover:text-white hover:bg-teal-800/70"
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
                                                                            ? "bg-teal-800 text-teal-200"
                                                                            : "hover:bg-teal-800/70 text-teal-200 hover:text-white"
                                                                    }`}
                                                                    onClick={() =>
                                                                        setIsMobileMenuOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    <ChevronRight className="mr-2 h-4 w-4 text-teal-300" />
                                                                    {link.name}
                                                                </Link>
                                                            </motion.div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Mobile Contact Info */}
                                    <motion.div
                                        className="mt-8 pt-6 border-t border-teal-800"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4,
                                        }}
                                    >
                                        <p className="text-sm text-teal-300 mb-4">
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
                                                    className="text-teal-300 hover:text-white transition-colors"
                                                    whileHover={{
                                                        scale: 1.15,
                                                        rotate: 5,
                                                    }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Auth Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="hidden md:block"
                                    >
                                        {session ? (
                                            <div className="flex items-center gap-2">
                                                <div className="text-sm text-white mr-2">
                                                    Hi,{" "}
                                                    {session.user?.name?.split(
                                                        " "
                                                    )[0] || "User"}
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-white/30 text-white hover:bg-white/10"
                                                    onClick={() =>
                                                        signOut({
                                                            callbackUrl: "/",
                                                        })
                                                    }
                                                >
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    Logout
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-white/30 text-white hover:bg-white/10"
                                                    asChild
                                                >
                                                    <Link href="/profile">
                                                        <User className="mr-2 h-4 w-4" />
                                                        Dashboard
                                                    </Link>
                                                </Button>
                                            </div>
                                        ) : (
                                            <Button
                                                className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white shadow-md shadow-teal-900/20"
                                                asChild
                                            >
                                                <Link
                                                    href="/login"
                                                    className="flex items-center"
                                                >
                                                    <span>Login</span>
                                                    <ChevronRight className="ml-1 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
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
