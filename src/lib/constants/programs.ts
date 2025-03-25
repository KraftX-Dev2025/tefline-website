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
