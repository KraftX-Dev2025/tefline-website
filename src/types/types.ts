import type React from "react"
// types/types.ts
import type { SVGProps } from "react"

export interface Particle {
  width: number
  height: number
  top: number
  left: number
  duration: number
  delay: number
}

export interface SuccessMetric {
  stat: string
  description: string
}

export interface TeamMember {
  slug: string
  name: string
  role: string
  secondaryRole: string
  image?: string
  shortBio: string
  fullBio: string[]
  note?: string
  theme: {
    from: string
    via: string
    to: string
    textColor: string
    lightBg: string
    glowClass: string
    accentBg?: string
  }
  contactButtons: {
    label: string
    href: string
    icon: React.ComponentType<SVGProps<SVGSVGElement>>
  }[]
}

export interface Service {
  title: string
  imageUrl: string
  description: string
  features: string[]
  buttonText: string
}

export interface EnterpriseSolution {
  title: string
  description: string
  icon: string
  buttonText: string
}

export interface WellnessModule {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  glowColor: string
  delay: number
  lightColor: string
  textColor: string
  stats: [string, string]
  link: string
}

export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    transition: {
      duration: number
      ease?: string
      staggerChildren?: number
      delayChildren?: number
    }
  }
}
