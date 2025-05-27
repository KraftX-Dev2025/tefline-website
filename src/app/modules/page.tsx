"use client";

import EnterpriseSolutionsSection from "@/components/modules/EnterpriseSolutions";
import IndividualServicesSection from "@/components/modules/IndividualServicesSection";
import MonthlyModulesSection from "@/components/modules/MonthlyModules";
import ResultsSection from "@/components/modules/ResultSection";
import ServicesCTASection from "@/components/modules/ServicesCTASection";
import ServicesHeroSection from "@/components/modules/ServicesHeroSection";



export default function ServicesPage() {
    return (
        <main className="overflow-hidden">
            <ServicesHeroSection />
            <MonthlyModulesSection />
            <IndividualServicesSection />
            {/* <ResultsSection /> */}
            <EnterpriseSolutionsSection />
            <ServicesCTASection />
        </main>
    );
}