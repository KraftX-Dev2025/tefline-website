export interface TeamMember {
    name: string;
    slug: string;
    role: string;
    secondaryRole: string;
    shortBio: string;
    theme: {
        from: string;
        via: string;
        to: string;
        textColor: string;
        lightBg: string;
        glowClass: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        name: "Subra Maniun",
        slug: "subra",
        role: "Principal Founder & CEO",
        secondaryRole: "Chief AI Officer",
        shortBio:
            "A visionary technologist, AI strategist, and category creator who built a career of identifying white spaces.",
        theme: {
            from: "from-teal-500",
            via: "via-teal-400",
            to: "to-cyan-500",
            textColor: "text-teal-400",
            lightBg: "teal-50",
            glowClass: "hover:shadow-teal-500/20",
        },
    },
    {
        name: "Madhu Damodaran",
        slug: "madhu",
        role: "Strategic Founder & CTO",
        secondaryRole: "Chief Talent Officer",
        shortBio:
            "Pioneering the integration of human potential, digital intelligence, and workforce well-being.",
        theme: {
            from: "from-blue-500",
            via: "via-blue-400",
            to: "to-indigo-500",
            textColor: "text-blue-400",
            lightBg: "blue-50",
            glowClass: "hover:shadow-blue-500/20",
        },
    },
    {
        name: "Selena Deus",
        slug: "selena",
        role: "Chief Intelligent Assistant Officer",
        secondaryRole: "CIAO",
        shortBio:
            "Tefline's AI-powered C-suite agent ensuring precision in decision-making and market foresight.",
        theme: {
            from: "from-purple-500",
            via: "via-fuchsia-500",
            to: "to-violet-500",
            textColor: "text-purple-400",
            lightBg: "purple-50",
            glowClass: "hover:shadow-purple-500/20",
        },
    },
    {
        name: "Dr. Kulkarni Adarsh",
        slug: "kulkarni",
        role: "Chairman, Advisory Board",
        secondaryRole: "Medical Advisory Council",
        shortBio:
            "A distinguished UK-trained physician and a prominent critical care consultant.",
        theme: {
            from: "from-orange-500",
            via: "via-orange-400",
            to: "to-amber-500",
            textColor: "text-orange-400",
            lightBg: "orange-50",
            glowClass: "hover:shadow-orange-500/20",
        },
    },
];
