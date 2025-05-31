import { Target, Sparkles, CheckCircle, ArrowUpRight, Rocket } from "lucide-react";

export interface Module {
    month: string;
    title: string;
    description: string;
}

export const monthlyModules: Module[] = [
    {
        month: "January",
        title: "Stability Foundation",
        description:
            "Build a solid foundation for your wellness journey with core stability principles.",
    },
    {
        month: "February",
        title: "Strength Conditioning",
        description:
            "Develop functional strength that supports your daily activities and long-term health.",
    },
    {
        month: "March",
        title: "Movement Nutrition",
        description:
            "Learn how to fuel your body optimally for various types of movement and activity.",
    },
    {
        month: "April",
        title: "Athletic Vitality",
        description:
            "Enhance your athletic performance through targeted interventions and strategies.",
    },
    {
        month: "May",
        title: "Culinary Medicine",
        description:
            "Discover the healing power of food and how to prepare meals that nourish and heal.",
    },
    {
        month: "June",
        title: "Social Health",
        description:
            "Understand the crucial role of social connections in maintaining optimal health.",
    },
    {
        month: "July",
        title: "Resilience Quotient",
        description:
            "Build mental and emotional resilience to navigate life's challenges.",
    },
    {
        month: "August",
        title: "Restorative Resurgence",
        description:
            "Explore recovery techniques that maximize your body's natural healing ability.",
    },
    {
        month: "September",
        title: "Behavioral Science",
        description:
            "Apply behavioral psychology to create lasting healthy habits and routines.",
    },
    {
        month: "October",
        title: "Aesthetic Wellness",
        description:
            "Balance inner health with outer vitality for comprehensive well-being.",
    },
    {
        month: "November",
        title: "Emotional Intelligence",
        description:
            "Develop emotional awareness and regulation for better health outcomes.",
    },
    {
        month: "December",
        title: "Longevity Blueprint",
        description:
            "Integrate all modules into a personalized roadmap for extended healthspan.",
    },
];

export interface ProgramFeature {
    title: string;
    description: string;
    imageUrl: string;
}

export const programFeatures: ProgramFeature[] = [
    {
        title: "RxLifeMed: Your Wellness Companion",
        description:
            "Tefline's flagship initiative, RxLifeMed, is your lifelong companion offering curated content spanning twelve evolving monthly modules in lifestyle medicine.",
        imageUrl: "/placeholder.webp",
    },
    {
        title: "Wellness Vault: Digital Goldmine",
        description:
            "Access our comprehensive library of evidence-informed wellness resources, curated for optimal health outcomes.",
        imageUrl: "/placeholder.webp",
    },
    {
        title: "Lifestyle Social: Community Connection",
        description:
            "Our patent-pending Lifestyle Social is a tribe outreach platform that acts as a springboard for meaningful social connections.",
        imageUrl: "/placeholder.webp",
    },
    {
        title: "Cognitive Counselor: Perception Assistant",
        description:
            "The Cognitive Counselor is your online personal 'perception deception' assistant, helping you identify and overcome cognitive biases.",
        imageUrl: "/placeholder.webp",
    },
];


export const phaseContext = [
    {
        id: 1,
        phase: "Phase 1",
        title: "Awareness",
        description: "Raising consciousness about the importance of lifestyle medicine and preventative wellness approaches.",
        icon: Target,
        iconBg: "bg-gradient-to-r from-teal-500 to-teal-400",
        position: "right",
        delay: 0.2,
    },
    {
        id: 2,
        phase: "Phase 2",
        title: "Education",
        description: "Providing evidence-informed knowledge and tools to empower individuals in their wellness journey.",
        icon: Sparkles,
        iconBg: "bg-gradient-to-r from-cyan-500 to-cyan-400",
        position: "left",
        delay: 0.4,
    },
    {
        id: 3,
        phase: "Phase 3",
        title: "Integration",
        description: "Seamlessly incorporating lifestyle changes into daily routines with technological support.",
        icon: CheckCircle,
        iconBg: "bg-gradient-to-r from-cyan-500 to-teal-400",
        position: "right",
        delay: 0.6,
    },
    {
        id: 4,
        phase: "Phase 4",
        title: "Transformation",
        description: "Achieving measurable improvements in biological age, energy levels, and overall wellness.",
        icon: ArrowUpRight,
        iconBg: "bg-gradient-to-r from-orange-500 to-orange-400",
        position: "left",
        delay: 0.8,
    },
]

export const timelineImpact = [
    {
        title: "Immediate Impact",
        period: "First 90 days",
        color: "from-teal-500 to-teal-400",
        textColor: "text-teal-600",
        bullets: [
            "Comprehensive wellness assessment and personalized planning",
            "AI-guided daily interventions and habit formation",
        ],
        iconColor: "text-teal-500",
    },
    {
        title: "Medium-Term Growth",
        period: "6-12 months",
        color: "from-cyan-500 to-cyan-400",
        textColor: "text-teal-600",
        bullets: [
            "Measurable biological age reduction and energy improvement",
            "Community integration and social accountability",
        ],
        iconColor: "text-cyan-500",
    },
    {
        title: "Long-Term Vision",
        period: "1-3 years",
        color: "from-cyan-500 to-cyan-400",
        textColor: "text-teal-600",
        bullets: [
            "Complete lifestyle transformation and wellness optimization",
            "Becoming an advocate and mentor within the community",
        ],
        iconColor: "text-teal-500",
    },
];

export const timelinEntries = [
    {
        title: "Pre-Seed Round",
        time: "Q3 2024",
        status: "COMPLETED",
        statusClass: "bg-green-100 text-green-600",
        icon: CheckCircle,
        description:
            "Successfully closed initial funding to validate concept, build MVP, and establish early traction.",
        position: "right",
        delay: 0.1,
    },
    {
        title: "Seed Round",
        time: "Q1-Q2 2025",
        status: "CURRENT OPPORTUNITY",
        statusClass: "bg-amber-100",
        icon: Target,
        amount: "₹10 Cr (~$1.1M)",
        description:
            "Fueling our next growth phase and positioning for a strong Series A raise in 2026.",
        position: "left",
        delay: 0.4,
    },
    {
        title: "Series A",
        time: "2026",
        status: "PLANNED",
        statusClass: "bg-slate-100 text-slate-600",
        icon: Rocket,
        description:
            "With proven traction, we'll seek a significant Series A round to expand globally.",
        position: "right",
        delay: 0.7,
    },
]