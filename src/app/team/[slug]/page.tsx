"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/constants/team";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function TeamMemberPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const [activeTab, setActiveTab] = useState<
        "bio" | "achievements" | "vision"
    >("bio");

    // Find the team member with the matching slug
    const teamMember = teamMembers.find((member) => member.slug === slug);

    // If no team member is found, show 404
    if (!teamMember) {
        notFound();
    }

    // Generate theme-specific classes
    const getThemeClasses = () => {
        const baseColor = teamMember.theme.from.split("-")[1]; // Extract "blue" from "from-blue-600"
        return {
            gradientBg: `bg-gradient-to-b ${teamMember.theme.from} ${teamMember.theme.to}`,
            accentBg: `${teamMember.theme.accentBg}`,
            text: teamMember.theme.textColor,
            border: `border-${baseColor}-300`,
            tabHighlight: `bg-${baseColor}-500`,
        };
    };

    const themeClasses = getThemeClasses();

    // Function to get team member gradient by slug
    const getTeamMemberGradient = (memberSlug: string) => {
        const member = teamMembers.find((m) => m.slug === memberSlug);
        if (!member) return "bg-gray-100 hover:bg-gray-200";
        return `bg-gradient-to-br ${member.theme.from} ${member.theme.to} text-white`;
    };

    return (
        <div className="container mx-auto py-24 px-4">
            {/* Back button */}
            <Link
                href="/team"
                className={`text-teal-600 hover:underline mb-6 inline-flex items-center group`}
            >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Team
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Section - Left Column */}
                <motion.div
                    className="md:col-span-1"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                    }}
                >
                    <div
                        className={`${themeClasses.gradientBg} text-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl`}
                    >
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-48 h-48 rounded-full mb-6 border-4 border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105`}
                            >
                                <Image
                                    src="/placeholder.webp"
                                    alt={teamMember.name}
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={400}
                                />
                            </div>

                            <h1 className="text-3xl font-bold text-center mb-1">
                                {teamMember.name}
                            </h1>

                            <p className="text-xl text-center text-white">
                                {teamMember.role}
                            </p>
                            <p className="text-center text-white/90">
                                {teamMember.secondaryRole}
                            </p>

                            {/* Quick Stats */}
                            <div className="mt-8 w-full grid grid-cols-2 gap-3">
                                {getQuickStats(teamMember.slug).map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/15 transition-colors duration-200"
                                    >
                                        <p className="text-lg font-bold text-white">
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-white/80">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Contact buttons */}
                            <div className="mt-8 space-y-3 w-full">
                                {teamMember.contactButtons.map((button) => (
                                    <motion.div
                                        key={button.label}
                                        whileHover={{ y: -3 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <Link
                                            href={button.href}
                                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                        >
                                            <span className="flex items-center">
                                                <button.icon className="h-5 w-5 mr-2" />
                                                {button.label}
                                            </span>
                                            <ExternalLink className="h-4 w-4" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Biography Section - Right Column */}
                <div className="md:col-span-2">
                    {/* Navigation Tabs */}
                    <div className="flex border-b mb-6">
                        {["bio", "achievements", "vision"].map((tab) => (
                            <button
                                key={tab}
                                className={`relative pb-2 px-4 font-medium text-gray-700 ${
                                    activeTab === tab
                                        ? "text-teal-600 font-semibold"
                                        : ""
                                } hover:text-teal-500 transition-colors`}
                                onClick={() =>
                                    setActiveTab(
                                        tab as "bio" | "achievements" | "vision"
                                    )
                                }
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${themeClasses.tabHighlight}`}
                                        initial={false}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="pr-2">
                        {/* Bio Tab */}
                        {activeTab === "bio" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                    Biography
                                </h2>

                                {teamMember.fullBio.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {/* Conditional note (for Dr. Kulkarni) */}
                                {teamMember.note && (
                                    <p className="mt-8 text-sm italic text-gray-600 border-l-4 border-gray-300 pl-4 py-1">
                                        {teamMember.note}
                                    </p>
                                )}
                            </motion.div>
                        )}

                        {/* Achievements Tab */}
                        {activeTab === "achievements" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                    Key Achievements
                                </h2>

                                <div className="space-y-4">
                                    {getAchievements(teamMember.slug).map(
                                        (achievement, index) => (
                                            <motion.div
                                                key={index}
                                                className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                                                whileHover={{
                                                    y: -3,
                                                    boxShadow:
                                                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                <div className="flex items-start">
                                                    <div
                                                        className={`p-2 rounded-full ${themeClasses.accentBg} text-white mr-4`}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <circle
                                                                cx="12"
                                                                cy="8"
                                                                r="7"
                                                            ></circle>
                                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800">
                                                            {achievement.title}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm mt-1">
                                                            {
                                                                achievement.description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Vision Tab */}
                        {activeTab === "vision" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                    Vision & Philosophy
                                </h2>

                                <motion.div
                                    className="p-6 rounded-lg border border-gray-200 mb-8 hover:border-gray-300 transition-colors"
                                    whileHover={{
                                        y: -3,
                                        boxShadow:
                                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                        Core Philosophy
                                    </h3>
                                    <p className="text-gray-700 italic">
                                        "{getVisionQuote(teamMember.slug)}"
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    {getVisionPoints(teamMember.slug).map(
                                        (point, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex"
                                                whileHover={{ x: 3 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                }}
                                            >
                                                <div
                                                    className={`mt-1.5 mr-4 h-2 w-2 rounded-full ${themeClasses.accentBg} flex-shrink-0`}
                                                ></div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">
                                                        {point.title}
                                                    </h3>
                                                    <p className="text-gray-600 mt-1">
                                                        {point.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Skills/Expertise Tags */}
                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-4 text-gray-800">
                            Areas of Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {generateExpertiseTags(teamMember.slug).map(
                                (tag) => (
                                    <motion.span
                                        key={tag}
                                        className={`px-3 py-1 rounded-full text-sm ${getTagColor(
                                            teamMember.theme
                                        )} border border-gray-200`}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow:
                                                "0 2px 4px rgba(0,0,0,0.1)",
                                        }}
                                    >
                                        {tag}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Related Team Members */}
                    <div className="mt-12 pt-6 border-t border-gray-300">
                        <h3 className="text-lg font-medium mb-4 text-gray-800">
                            Related Team Members
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {teamMembers
                                .filter(
                                    (member) => member.slug !== teamMember.slug
                                )
                                .slice(0, 3)
                                .map((member) => (
                                    <motion.div
                                        key={member.slug}
                                        whileHover={{ y: -5 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <Link
                                            href={`/team/${member.slug}`}
                                            className="block h-full"
                                        >
                                            <div
                                                className={`flex items-center p-3 rounded-lg transition-all duration-300 bg-gray-100 hover:${getTeamMemberGradient(
                                                    member.slug
                                                )} group h-full`}
                                            >
                                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 border border-gray-200 group-hover:border-white/20">
                                                    <Image
                                                        src="/placeholder.webp"
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                        width={400}
                                                        height={400}
                                                    />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="font-medium text-sm truncate text-gray-800 group-hover:text-white">
                                                        {member.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500 truncate group-hover:text-white/80">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper function to generate expertise tags based on team member
function generateExpertiseTags(slug: string): string[] {
    switch (slug) {
        case "subra":
            return [
                "AI Strategy",
                "Technology Vision",
                "Brand Positioning",
                "Category Creation",
                "Leadership",
                "Behavioral Science",
            ];
        case "madhu":
            return [
                "Workforce Wellness",
                "Talent Ecosystems",
                "HR Innovation",
                "Business Development",
                "Strategic Leadership",
                "Digital Workforce",
            ];
        case "selena":
            return [
                "AI Decision Making",
                "Market Forecasting",
                "Risk Analysis",
                "Behavioral Intelligence",
                "Strategic Optimization",
                "Adaptive Models",
            ];
        case "kulkarni":
            return [
                "Lifestyle Medicine",
                "Preventive Healthcare",
                "Clinical Excellence",
                "Medical Research",
                "Wellness Protocols",
                "Evidence-Based Wellness",
            ];
        default:
            return [];
    }
}

// Helper function to get tag color based on theme
function getTagColor(theme: {
    from: string;
    via: string;
    to: string;
    textColor: string;
    lightBg: string;
    glowClass: string;
    accentBg?: string;
}): string {
    // Extract color family from theme
    const colorFamily = theme.from.split("-")[1]; // e.g., "blue" from "from-blue-600"

    // For Tailwind to properly detect these classes in production, we need to use the full classes
    switch (colorFamily) {
        case "blue":
            return "bg-blue-100 text-blue-800";
        case "teal":
            return "bg-teal-100 text-teal-800";
        case "indigo":
            return "bg-indigo-100 text-indigo-800";
        case "purple":
            return "bg-purple-100 text-purple-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
}

// Helper function to get quick stats
function getQuickStats(slug: string): Array<{ label: string; value: string }> {
    switch (slug) {
        case "subra":
            return [
                { label: "Experience", value: "15+ Yrs" },
                { label: "Ventures", value: "4x Founder" },
                { label: "Leadership", value: "CEO & CAIO" },
                { label: "Recognition", value: "Global" },
            ];
        case "madhu":
            return [
                { label: "Experience", value: "12+ Yrs" },
                { label: "Expertise", value: "HR Tech" },
                { label: "Leadership", value: "CTO & CTO" },
                { label: "Network", value: "Fortune 500" },
            ];
        case "selena":
            return [
                { label: "AI Models", value: "15+" },
                { label: "Data Points", value: "10M+" },
                { label: "Accuracy", value: "98.5%" },
                { label: "Decisions", value: "24/7" },
            ];
        case "kulkarni":
            return [
                { label: "Experience", value: "20+ Yrs" },
                { label: "Research", value: "30+ Papers" },
                { label: "Specialty", value: "Critical Care" },
                { label: "Advisory", value: "Medical Council" },
            ];
        default:
            return [];
    }
}

// Helper function to get achievements
function getAchievements(
    slug: string
): Array<{ title: string; description: string }> {
    switch (slug) {
        case "subra":
            return [
                {
                    title: "Published Author",
                    description:
                        'Book "Perception Deception" reached over half a million readers worldwide',
                },
                {
                    title: "Industry Recognition",
                    description:
                        "Featured in The Atlanta Journal-Constitution and Business World Magazine",
                },
                {
                    title: "Isometric Record Holder",
                    description:
                        "Set 15-minute planking record at WeWork India and Cult Fit",
                },
                {
                    title: "Serial Entrepreneur",
                    description:
                        "Successfully built and led 4 ventures across technology and wellness sectors",
                },
            ];
        case "madhu":
            return [
                {
                    title: "Policy Contributor",
                    description:
                        "Contributed to policy deliberations at EFI, GOI, and CII in India",
                },
                {
                    title: "Global Recognition",
                    description:
                        "Presented at the ILO at the United Nations in Geneva",
                },
                {
                    title: "Business Development Leader",
                    description:
                        "Led company to multimillion-dollar exit through strategic scaling",
                },
                {
                    title: "Thought Leadership",
                    description:
                        "Recognized thought leader in human capital and compliance across Asia-Pacific",
                },
            ];
        case "selena":
            return [
                {
                    title: "Historic Appointment",
                    description:
                        "First AI to be formally appointed to a C-suite position globally",
                },
                {
                    title: "Predictive Accuracy",
                    description:
                        "Maintains 98.5% accuracy in market forecast and trend analysis",
                },
                {
                    title: "Investment Optimization",
                    description:
                        "Increased capital efficiency by 32% through AI-driven allocation strategies",
                },
                {
                    title: "Behavioral Intelligence",
                    description:
                        "Pioneered personalized wellness interventions based on behavioral patterns",
                },
            ];
        case "kulkarni":
            return [
                {
                    title: "International Medical Practice",
                    description:
                        "Built successful medical practices across three continents",
                },
                {
                    title: "Published Researcher",
                    description:
                        "Research published in prestigious medical journals on preventive cardiology",
                },
                {
                    title: "Royal College Fellow",
                    description:
                        "Fellow of the Royal College of Physicians in the UK",
                },
                {
                    title: "Evidence Framework Pioneer",
                    description:
                        "Developed quantifiable biological aging and health optimization metrics",
                },
            ];
        default:
            return [];
    }
}

// Helper function to get vision quote
function getVisionQuote(slug: string): string {
    switch (slug) {
        case "subra":
            return "The future of wellness lies not in measuring habits, but in engineering them through intelligent intervention at the intersection of behavioral science and AI.";
        case "madhu":
            return "Workforce wellness isn't merely a benefit—it's a strategic advantage that drives innovation, retention, and organizational resilience in the digital age.";
        case "selena":
            return "Intelligent decisions are not born from intuition, but from the synthesis of data, pattern recognition, and predictive modeling—all delivered without human bias.";
        case "kulkarni":
            return "The future of healthcare lies not in reactive treatment but in proactive wellness—where lifestyle interventions become the most powerful prescription.";
        default:
            return "";
    }
}

// Helper function to get vision points
function getVisionPoints(
    slug: string
): Array<{ title: string; description: string }> {
    switch (slug) {
        case "subra":
            return [
                {
                    title: "First Principles Thinking",
                    description:
                        "Challenge convention, anticipate the next frontier, and build with a vision that outlasts trends.",
                },
                {
                    title: "AI-Human Partnership",
                    description:
                        "AI isn't just a tool—it's a co-pilot that augments human decision-making at scale.",
                },
                {
                    title: "Behavioral-First Approach",
                    description:
                        "Sustainable wellness comes from rewiring human cognition, not just tracking metrics.",
                },
            ];
        case "madhu":
            return [
                {
                    title: "Hybrid Workforce Model",
                    description:
                        "The future of work requires seamless integration of human expertise and AI-driven intelligence.",
                },
                {
                    title: "Wellness as Strategy",
                    description:
                        "Employee well-being directly impacts innovation, retention, and organizational resilience.",
                },
                {
                    title: "B2B Wellness Integration",
                    description:
                        "Making lifestyle medicine accessible to diverse workforce populations through corporate partnerships.",
                },
            ];
        case "selena":
            return [
                {
                    title: "Decision Augmentation",
                    description:
                        "AI should enhance human decision-making, not replace it, by removing bias and providing data-driven insights.",
                },
                {
                    title: "Precision Capital Deployment",
                    description:
                        "Every investment should be guided by predictive modeling to maximize impact and minimize waste.",
                },
                {
                    title: "Autonomous Learning",
                    description:
                        "Continuous self-improvement through pattern recognition and adaptive modeling.",
                },
            ];
        case "kulkarni":
            return [
                {
                    title: "Evidence-Based Wellness",
                    description:
                        "All wellness protocols must meet the highest standards of medical validity through rigorous evidence review.",
                },
                {
                    title: "Preventive Focus",
                    description:
                        "Shifting resources from disease management to proactive wellness and prevention.",
                },
                {
                    title: "Global Health Perspective",
                    description:
                        "Bringing together diverse medical traditions with clinical rigor for comprehensive wellness approaches.",
                },
            ];
        default:
            return [];
    }
}
