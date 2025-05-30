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

export const testimonial = {
    quote: "Implementing Tefline's wellness program has transformed our organization. Employee engagement is up, sick days are down, and we're seeing real improvements in overall wellbeing.",
    author: "HR Director",
    company: "Fortune 500 Company",
    avatar: "HR"
};



// Pre-defined positions to avoid hydration mismatch
export const BACKGROUND_ELEMENTS = [
    { id: 1, top: 15, left: 10, icon: 'TrendingUp' },
    { id: 2, top: 25, left: 85, icon: 'BarChart3' },
    { id: 3, top: 45, left: 20, icon: 'LineChart' },
    { id: 4, top: 35, left: 75, icon: 'PieChart' },
    { id: 5, top: 65, left: 15, icon: 'Activity' },
    { id: 6, top: 55, left: 80, icon: 'BarChart' },
    { id: 7, top: 75, left: 25, icon: 'TrendingUp' },
    { id: 8, top: 85, left: 70, icon: 'Zap' },
    { id: 9, top: 20, left: 60, icon: 'BarChart3' },
    { id: 10, top: 40, left: 45, icon: 'LineChart' },
    { id: 11, top: 60, left: 50, icon: 'PieChart' },
    { id: 12, top: 80, left: 40, icon: 'Activity' },
];

// Chart data for consistent rendering
export const CHART_DATA = [0.3, 0.45, 0.6, 0.5, 0.7, 0.65, 0.85];