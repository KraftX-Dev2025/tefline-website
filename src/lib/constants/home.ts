import { Brain, Globe, Zap } from "lucide-react"
import type { WellnessModule } from "@/types/types"

export const wellnessModules: WellnessModule[] = [
  {
    title: "Wellness Vault",
    description: "Evidence-informed wellness resources library",
    icon: Globe,  // This is now correctly typed as LucideIcon
    color: "from-teal-500 to-teal-400",
    glowColor: "text-teal-500",
    delay: 0.3,
    lightColor: "bg-teal-500/20",
    textColor: "text-teal-500",
    stats: ["1,200+", "Resources"],
    link: "/modules",
  },
  {
    title: "AIR Tenet",
    description: "Curated lifestyle medicine insights",
    icon: Zap,
    color: "from-amber-500 to-amber-400",
    glowColor: "text-amber-500",
    delay: 0.5,
    lightColor: "bg-amber-500/10",
    textColor: "text-amber-300",
    stats: ["Daily", "Updates"],
    link: "/modules",
  },
  {
    title: "Cognitive Counselor",
    description: "Your personal perception assistant",
    icon: Brain,
    color: "from-cyan-500 to-cyan-400",
    glowColor: "text-teal-500",
    delay: 0.7,
    lightColor: "bg-cyan-500/10",
    textColor: "text-cyan-200",
    stats: ["24/7", "Support"],
    link: "/modules",
  },
  {
    title: "Lifestyle Digital",
    description: "Lifestyle medicine intelligence engine",
    icon: Brain,
    color: "from-amber-500 to-amber-400",
    glowColor: "text-amber-500",
    delay: 0.5,
    lightColor: "bg-amber-500/10",
    textColor: "text-amber-300",
    stats: ["Daily", "Updates"],
    link: "/modules",
  },
]