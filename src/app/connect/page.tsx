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
            <ContactOptionsSection />

            {/* Contact Form & Details Section */}
            <section className="pb-16 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                        <ContactFormSection />
                        <div className="lg:col-span-2 flex flex-col">
                            <MasterclassSection />
                            <LocationMapSection />
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />
        </main>
    );
}