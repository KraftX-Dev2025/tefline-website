"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ChevronRight, Heart } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

const LifelineSection: React.FC = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white" ref={sectionRef}>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-50 rounded-full opacity-50 blur-[100px]"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-50 rounded-full opacity-50 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInLeft}>
            <div className="inline-flex items-center bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Path to Optimal Health
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-600 leading-tight">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Your </span>
              LIFELINE{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                to Long-Term Wellness
              </span>{" "}
            </h2>
            <p className="text-slate-700 mb-8 leading-relaxed text-lg">
              Tefline is a healthtech startup that is redefining modern healthcare by blending evidence-informed
              wellness with agentic intelligence, all backed by a community which holds you accountable; optimizing
              healthspan is the surest path to extending lifespan.
            </p>
            <Link
              href="/content"
              className="inline-flex items-center text-teal-600 font-semibold group px-5 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-all duration-200 hover:scale-105"
            >
              Learn More About Our Approach
              <div className="ml-2 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-200">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute top-4 -left-4 w-full h-full bg-teal-100/80 rounded-2xl"></div>
              <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-white/70 p-3">
                <Image
                  src="/tefline-image1.webp"
                  alt="Health Technology"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-10 -right-3 bg-orange-300/70 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-white text-sm font-medium border border-teal-500">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-white" />
                    Optimizing Healthspan
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LifelineSection
