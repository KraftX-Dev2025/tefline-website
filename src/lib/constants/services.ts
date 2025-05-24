export interface Service {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
    buttonText: string;
}

export const individualServices: Service[] = [
    {
        title: "Personalized Wellness Assessment",
        description:
            "Our comprehensive assessment analyzes your current lifestyle, health metrics, and wellness goals to create a personalized baseline. Using our proprietary algorithms, we identify your biological age and key areas for optimization.",
        features: [
            "Multi-factor health evaluation",
            "Biological age calculation",
            "Personalized improvement roadmap",
            "Priority intervention areas",
        ],
        imageUrl: "/tefline-image6.webp",
        buttonText: "Learn More",
    },
    {
        title: "AI-Guided Wellness Coaching",
        description:
            "Experience the power of Wellness Intelligence™ with our AI-driven coaching platform. Receive daily guidance, personalized interventions, and adaptive recommendations that evolve as you progress on your wellness journey.",
        features: [
            "Personalized daily recommendations",
            "Behavioral pattern recognition",
            "Adaptive intervention strategies",
            "Progress tracking and visualization",
        ],
        imageUrl: "/tefline-image7.webp",
        buttonText: "Explore Coaching",
    },
    {
        title: "Social Accountability Network",
        description:
            "Join our community of like-minded individuals committed to optimizing their health. Our patent-pending Lifestyle Social platform connects you with accountability partners who share similar goals and challenges.",
        features: [
            "AI-matched accountability partners",
            "Group challenges and celebrations",
            "Secure health data sharing options",
            "Community wellness events",
        ],
        imageUrl: "/tefline-image8.webp",
        buttonText: "Join the Community",
    },
];

export interface EnterpriseSolution {
    title: string;
    description: string;
    icon: string;
    buttonText: string;
}

export const enterpriseSolutions: EnterpriseSolution[] = [
    {
        title: "Corporate Wellness Programs",
        description:
            "Comprehensive wellness initiatives to improve employee health, reduce healthcare costs, and boost productivity.",
        icon: "building",
        buttonText: "Request Information",
    },
    {
        title: "Healthcare Provider Integration",
        description:
            "Tools and protocols enabling healthcare providers to incorporate lifestyle medicine into their clinical practice.",
        icon: "medical",
        buttonText: "Provider Solutions",
    },
    {
        title: "Wellness Intelligence™ API",
        description:
            "Integrate our powerful wellness algorithms and AI capabilities into your own applications and platforms.",
        icon: "code",
        buttonText: "API Documentation",
    },
    {
        title: "Corporate Training & Certification",
        description:
            "Train your team in lifestyle medicine principles with certification programs for HR and healthcare staff.",
        icon: "certificate",
        buttonText: "Training Options",
    },
];

export const successMetrics = [
    {
        stat: "87%",
        description: "of users report improved energy levels within 60 days",
    },
    {
        stat: "92%",
        description:
            "retention rate among corporate wellness program participants",
    },
    {
        stat: "3.2 years",
        description: "average biological age reduction after 12 months",
    },
    {
        stat: "72%",
        description: "reduction in lifestyle-related health complaints",
    },
];
