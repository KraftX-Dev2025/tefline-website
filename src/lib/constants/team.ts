export interface TeamMember {
    name: string;
    slug: string;
    role: string;
    secondaryRole: string;
    shortBio: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Subra Maniun",
        slug: "subra",
        role: "Principal Founder & CEO",
        secondaryRole: "Chief AI Officer",
        shortBio:
            "A visionary technologist, AI strategist, and category creator who built a career of identifying white spaces.",
    },
    {
        name: "Madhu Damodaran",
        slug: "madhu",
        role: "Strategic Founder & CTO",
        secondaryRole: "Chief Talent Officer",
        shortBio:
            "Pioneering the integration of human potential, digital intelligence, and workforce well-being.",
    },
    {
        name: "Selena Deus",
        slug: "selena",
        role: "Chief Intelligent Assistant Officer",
        secondaryRole: "CIAO",
        shortBio:
            "Tefline's AI-powered C-suite agent ensuring precision in decision-making and market foresight.",
    },
    {
        name: "Dr. Kulkarni Adarsh",
        slug: "kulkarni",
        role: "Chairman, Advisory Board",
        secondaryRole: "Medical Advisory Council",
        shortBio:
            "A distinguished UK-trained physician and a prominent critical care consultant.",
    },
];
