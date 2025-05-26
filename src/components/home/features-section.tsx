// components/features-section.tsx
"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import type { SuccessMetric } from "@/types/types"

interface FeaturesSectionProps {
  successMetrics: SuccessMetric[]
}

interface BackgroundParticle {
  width: number
  height: number
  top: number
  left: number
  duration: number
  delay: number
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ successMetrics }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })
  const [particles, setParticles] = useState<BackgroundParticle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }))
    setParticles(newParticles)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 bg-teal-50 text-teal-700 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {isClient && particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-teal-500/10"
              style={{
                width: particle.width + "px",
                height: particle.height + "px",
                top: particle.top + "%",
                left: particle.left + "%",
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                {metric.stat}
              </h3>
              <p className="text-slate-700">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection