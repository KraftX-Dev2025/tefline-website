"use client";

import HeroSection from "@/components/capitalize/HeroSection";
import OpportunitySection from "@/components/capitalize/OpportunitySection";
import WhyInvestSection from "@/components/capitalize/WhyInvestSection";
import FundingRoadmapSection from "@/components/capitalize/FundingSection";
import CTASection from "@/components/capitalize/CTASection";
import AILeadershipSection from "@/components/capitalize/AiLeadershipSection";

export default function InvestPage() {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <OpportunitySection />
            <WhyInvestSection />
            <FundingRoadmapSection />
            <AILeadershipSection />
            <CTASection />
        </main>
    );
}