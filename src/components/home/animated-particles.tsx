// components/animated-particles.tsx
"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import type { Particle } from "@/types/types"

interface AnimatedParticlesProps {
  count?: number
}

const AnimatedParticles: React.FC<AnimatedParticlesProps> = ({ count = 20 }) => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: count }, () => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {particles.map((particle, i) => (
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
  )
}

export default AnimatedParticles
