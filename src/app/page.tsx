"use client"

import HeroSection from "@/components/home/hero-section"
import LifelineSection from "@/components/home/lifeline-section"
import LifestyleMedicineSection from "@/components/home/lifestyle-medicine-section"
import FeaturesSection from "@/components/home/features-section"
import NewsletterSection from "@/components/home/newsletter-section"
import { useRef } from "react"
import { successMetrics } from "@/lib/constants/services"
import WellnessIntelligenceSection from "@/components/home/wellness-intelligence-section"

export default function Home() {
  const heroRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>

  return (
    <div className="overflow-hidden">
      <HeroSection ref={heroRef} />
      <LifelineSection /> 
      <LifestyleMedicineSection />
      <FeaturesSection successMetrics={successMetrics} />
      <WellnessIntelligenceSection />
      <NewsletterSection />
    </div>
  )
}