// components/hero-section.tsx
"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Heart, Sparkles } from "lucide-react"
import { useScroll, useTransform } from "framer-motion"

interface HeroSectionProps {
  ref: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({ ref }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-0 left-0 w-full h-full primary-gradient"></div>
      </motion.div>


      <div className="container mx-auto px-4 relative z-20 pt-28 pb-32">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="text-teal-600 mb-3 py-1 px-4 bg-white/90 backdrop-blur-md rounded-full text-teal-50 text-sm font-medium inline-flex items-center"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className=" text-lg">Redefining Modern Healthcare</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 mt-8 text-white tracking-tight leading-tight"
            variants={fadeIn}
          >
            <span className="relative inline-block">
              <span className="relative z-10 ">
                The Epicenter For
              </span>
            </span>
            <br />
            Lifestyle Medicine
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-10 text-white/70 leading-relaxed" variants={fadeIn}>
            Blending evidence-informed wellness with agentic intelligence to optimize your healthspan and transform your
            life
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Link
                href="/modules"
                className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center group shadow-lg shadow-amber-500/20"
              >
                Discover Wellness Intelligence™
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex absolute left-10 top-1/3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-teal-600 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Heart className="w-5 h-5 mr-2" />
          <span className=" font-bold">Evidence-Based Approach</span>
        </motion.div>

        <motion.div
          className="hidden md:flex absolute right-10 top-2/3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-teal-600 items-center "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Brain className="w-5 h-5 mr-2 " />
          <span className=" font-bold">Powered by Agentic Intelligence</span>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
