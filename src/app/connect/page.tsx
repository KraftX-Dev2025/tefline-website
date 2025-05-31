"use client";

import ContactHeroSection from "@/components/connect/ContactHeroSection";
import FAQSection from "@/components/connect/FAQSection";
import ContactFormSection from "@/components/connect/FormSection";
import LocationMapSection from "@/components/connect/LocationSection";
import MasterclassSection from "@/components/connect/MasterClassSection";
import ContactOptionsSection from "@/components/connect/OptionsSection";

export default function ContactPage() {
    return (
        <main className="overflow-hidden bg-white">
            <ContactHeroSection />

            {/* Contact Form & Details Section - Fixed Layout */}
            <section className="py-8 relative">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* New responsive grid layout */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                        {/* Contact Form - Takes more space on larger screens */}
                        <div className="xl:col-span-7">
                            <ContactFormSection />
                        </div>

                        {/* Sidebar Content - Better organized */}
                        <div className="xl:col-span-5 space-y-8">
                            {/* Location Section */}
                            <div className="w-full">
                                <LocationMapSection />
                            </div>

                            {/* Masterclass Section */}
                            <div className="w-full">
                                <MasterclassSection />
                            </div>
                        </div>
                    </div>

                    {/* Alternative layout for medium screens */}
                    <style jsx>{`
                        @media (min-width: 768px) and (max-width: 1279px) {
                            .grid {
                                grid-template-columns: 1fr 1fr;
                            }
                            .xl\\:col-span-7 {
                                grid-column: span 2;
                            }
                            .xl\\:col-span-5 {
                                grid-column: span 2;
                            }
                            .xl\\:col-span-5 > div {
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                gap: 2rem;
                                align-items: start;
                            }
                        }
                    `}</style>
                </div>
            </section>
            <ContactOptionsSection />

            <FAQSection />
        </main>
    );
}