// src/lib/constants/team.ts
import {
    LucideIcon,
    Linkedin,
    Mail,
    FlaskConical,
    Globe,
    Brain,
    BarChart,
    Briefcase,
    TrendingUp,
    Lightbulb,
} from "lucide-react";

export interface TeamMember {
    name: string;
    slug: string;
    role: string;
    secondaryRole: string;
    image?: string;
    shortBio: string;
    fullBio: string[];
    theme: {
        from: string;
        via: string;
        to: string;
        textColor: string;
        lightBg: string;
        glowClass: string;
        hoverGradient: string;
        accentBg?: string; // For compatibility with existing code
    };
    contactButtons: Array<{
        label: string;
        href: string;
        icon: LucideIcon;
    }>;
    note?: string; // For Dr. Kulkarni's note
}

export const teamMembers: TeamMember[] = [
    {
        name: "Subra Maniun",
        slug: "subra",
        role: "Principal Founder & CEO",
        secondaryRole: "Chief AI Officer",
        image: "/subramanium.webp",
        shortBio:
            "A visionary technologist, AI strategist, and category creator who built a career of identifying white spaces.",
        fullBio: [
            "Subra Maniun is a visionary technologist, AI strategist, and category creator who built a career of identifying white spaces, shaping market perception, and pioneering industries before they exist. His leadership is surgical—cutting through market noise, uncovering high-impact opportunities, and architecting blue-ocean strategies that redefine industries. In a world of incremental innovation, Subra is designing category-defining moves.",
            "A computer scientist from IIT Kanpur, often likened to the Stanford of the Subcontinent, Subra spent close to a decade in senior executive roles across the US, before returning to forge new frontiers in AI-driven wellness intelligence. His early influence in enterprise solutions was spotlighted by The Atlanta Journal-Constitution, while his next venture—a disruptive force in experiential engagement—caught the attention of Business World Magazine.",
            "A published author and 4x founder, Subra has built global brand authority, mastering digital positioning long before it became an industry obsession. His ability to dominate search rankings worldwide, command high-value networks, and craft compelling brand narratives has made him a force in business and technology circles.",
            "His stewardship under the luminaries at the American College of Lifestyle Medicine proved pivotal in shaping his behavioral-first approach to longevity and human performance. As the Chief AI Officer, he is spearheading the evolution of AI agenting in lifestyle medicine, ensuring that AI isn't just a tool, but a co-pilot in optimizing human well-being.",
            "A happiness hacker, mindful minimalist, and devout biomechanist, he doesn't just theorize optimization—he lives it. He holds an isometric record at WeWork India and Cult Fit, planking for a breathtaking fifteen minutes, a testament to his uncompromising pursuit of peak performance.",
            "Now, with Tefline, he's engineering the next evolution of AI—one that doesn't just assist but augments human decision-making at scale. His leadership philosophy is built on first principles: challenge convention, anticipate the next frontier, and build with a vision that outlasts trends.",
        ],
        theme: {
            from: "from-teal-500/80",
            via: "via-teal-400/80",
            to: "to-cyan-500",
            textColor: "text-white",
            lightBg: "teal-50",
            glowClass: "hover:shadow-teal-500/20",
            accentBg: "bg-teal-500",
            hoverGradient:
                "hover:from-teal-500/30 hover:via-teal-400/30 hover:to-cyan-500/20",
        },
        contactButtons: [
            {
                label: "Contact",
                href: "/contact?team=subra",
                icon: Mail,
            },
            {
                label: "LinkedIn Profile",
                href: "https://linkedin.com/in/subra",
                icon: Linkedin,
            },
            { label: "Visit Website", href: "https://tefline.org", icon: Globe },
        ],
    },
    {
        name: "Madhu Damodaran",
        slug: "madhu",
        role: "Strategic Founder & CTO",
        secondaryRole: "Chief Talent Officer",
        image: "/pramod-joshi.webp",
        shortBio:
            "Pioneering the integration of human potential, digital intelligence, and workforce well-being.",
        fullBio: [
            "Madhu Damodaran, in a reimagined role that extends far beyond traditional HR oversight, is pioneering the integration of human potential, digital intelligence, and workforce well-being. He is the architect of talent ecosystems, seamlessly blending corporate workforce engagement, subscriber experience, and AI-driven talent intelligence.",
            "In his client-facing capacity, he collaborates directly with Chief HR Officers (CHROs) and corporate leadership, helping enterprises embed wellness intelligence into their organizational DNA. By aligning lifestyle medicine with workforce strategy, he ensures companies cultivate not just employees—but high-performance, resilient talent.",
            "At Tefline, Madhu is redefining the role of the Chief Talent Officer, shifting its focus outward—partnering with HR leaders of Fortune 500s, corporate hospitals, mid-sized businesses, growth-stage startups, and other healthcare ecosystem partners. His mission is to integrate AI-powered lifestyle medicine at scale, positioning Tefline as the preferred B2B wellness intelligence provider.",
            "Internally, he oversees Tefline's hybrid workforce, where human expertise and AI-driven intelligence work in harmony. From managing the subscriber experience to optimizing the digital-human workforce balance, Madhu ensures that talent—whether corporate, community-based, or AI-enhanced—thrives in the age of intelligent well-being.",
            "A seasoned business development leader, Madhu has played a pivotal role in scaling corporate HR practices across India and the Asia-Pacific, earning recognition as a thought leader in human capital and compliance. Having spearheaded business expansion at a rapidly growing company that achieved a multimillion-dollar exit, he brings an invaluable mix of strategic foresight and executional prowess.",
        ],
        theme: {
            from: "from-blue-500/80",
            via: "via-blue-400/80",
            to: "to-indigo-500",
            textColor: "text-white",
            lightBg: "blue-50",
            glowClass: "hover:shadow-blue-500/20",
            accentBg: "bg-blue-500",
            hoverGradient:
                "hover:from-blue-500/30 hover:via-blue-400/30 hover:to-indigo-500/20",
        },
        contactButtons: [
            {
                label: "Contact",
                href: "/contact?team=madhu",
                icon: Mail,
            },
            {
                label: "LinkedIn Profile",
                href: "https://linkedin.com/in/madhu",
                icon: Linkedin,
            },
        ],
    },
    {
        name: "Anil Jangid",
        slug: "anil",
        role: "Chief Product Officer",
        secondaryRole: "Product Strategy",
        image: "/anil-jangid.webp",

        shortBio:
            "An IIM Ahmedabad graduate blending intellect, intensity and intent to drive product strategy and paradigm shifts.",
        fullBio: [
            "Chief Product Officer with an IIM Ahmedabad pedigree, Anil Jangid is a rare blend of intellect, intensity, and intent. The go-to figure for peer governance and discipline, year after year, he stepped naturally into roles that demanded both authority and empathy—displaying early signs of the leadership gene that would later define his professional arc. His academic journey touched its pinnacle at IIM Ahmedabad, revered as the Harvard of the Heartland—a hallowed ground where ambition takes flight and merit finds its meaning, a testament to a drive that turns the improbable into inevitable. His single-digit body fat percent goal—met with the same precision—reveals a mind hardwired for high-performance living and a spirit that treats every limit as an open invitation.",
            "In the world of startups, Anil's career has been sculpted by early-stage audacity. He's held pivotal product roles across retail tech, crypto, fintech, and recruitment, deftly navigating the spectrum from nimble ventures to corporate behemoths like Amazon. Most recently, as Head of Product at Tap Invest, he led from the front—steering strategy, catalyzing growth, and distilling complexity into clarity. At Tefline, he takes the helm as Chief Product Officer in a strategic capacity—charting product strategy, crafting vision aligned with business goals, mentoring teams, and establishing systems that scale.",
            "He helps shape and refine our product roadmap, drive meaningful collaboration across engineering, design and marketing, and define metrics that go beyond vanity—tracking real momentum toward product-market fit. He also supports the founder's narrative to investors, with product strategy serving as a key due-diligence pillar in Tefline's growth journey. With a builder's eye and a strategist's instinct, he's here to engineer not just product-market fit—but paradigm shifts.",
            "Beyond the boardroom, Anil blends lyrical thinking with meditative discipline. He is both a connoisseur of introspection and an architect of inner rigour, bringing to Tefline a cultivated ethos of self-mastery—measured, mindful, and magnificently alive. His curiosity runs deep, often probing the nuanced terrain between what's possible and what's prudent—especially in the evolving dance between AI and humanity. With effortless allure backed by fitness model charisma and main character energy balanced by steely resolve, Anil isn't just a leader within Tefline—he's a lighthouse for the future of purposeful leadership.",
        ],
        theme: {
            from: "from-purple-500/80",
            via: "via-fuchsia-500/80",
            to: "to-violet-500",
            textColor: "text-white",
            lightBg: "purple-50",
            glowClass: "hover:shadow-purple-500/20",
            accentBg: "bg-purple-500",
            hoverGradient:
                "hover:from-purple-500/30 hover:via-fuchsia-500/30 hover:to-violet-500/20",
        },
        contactButtons: [
            {
                label: "Product Strategy",
                href: "/product-vision",
                icon: Lightbulb,
            },
            {
                label: "Background",
                href: "/anil-background",
                icon: Briefcase,
            },
        ],
    },
    {
        name: "Dr. Kulkarni Adarsh",
        slug: "kulkarni",
        role: "Chairman, Advisory Board",
        secondaryRole: "Medical Advisory Council",
        image: "/adarsh-kulkarni.webp",

        shortBio:
            "A distinguished UK-trained physician and a prominent critical care consultant.",
        fullBio: [
            "Dr. Kulkarni Adarsh is a distinguished UK-trained physician and a prominent critical care consultant at the Manipal Hospitals, the flagship hub of India's largest healthcare network.",
            "After building a flourishing practice in London, Dr. Kulkarni returned to India, receiving recognition for his gravitas and catalytic contributions to health and wellness science.",
            "At Tefline, Dr. Kulkarni provides tactical guidance and clinical oversight as Chairman of the Medical Advisory Council, upholding the highest standards of excellence. His role is exclusively consultative, maintaining complete alignment with his professional commitments at the Manipal Hospitals.",
            "With over two decades of clinical experience spanning three continents, Dr. Kulkarni brings a global perspective to lifestyle medicine interventions. His research in preventive cardiology and metabolic health has been published in prestigious medical journals, establishing him as a thought leader in evidence-based wellness protocols.",
            "As a Fellow of the Royal College of Physicians and a certified lifestyle medicine practitioner, he bridges the gap between traditional medical practice and innovative wellness approaches. Dr. Kulkarni's expertise ensures that Tefline's wellness intelligence remains firmly rooted in clinical rigor while pushing the boundaries of what's possible in preventive healthcare.",
            "Under his guidance, the Medical Advisory Council conducts regular evidence reviews, ensuring that all wellness protocols meet the highest standards of medical validity.",
        ],
        theme: {
            from: "from-orange-500/80",
            via: "via-orange-400/80",
            to: "to-amber-500",
            textColor: "text-white",
            lightBg: "orange-50",
            glowClass: "hover:shadow-orange-500/20",
            accentBg: "bg-orange-500",
            hoverGradient:
                "hover:from-orange-500/30 hover:via-orange-400/30 hover:to-amber-500/20",
        },
        contactButtons: [
            {
                label: "Medical Research",
                href: "/medical-research",
                icon: FlaskConical,
            },
            {
                label: "Reach Out",
                href: "/contact?team=kulkarni",
                icon: Mail,
            },
        ],
        note: "Dr. Kulkarni serves in a strictly advisory capacity and is not formally employed as an officer, director or other member in Tefline's organizational structure.",
    },
];
