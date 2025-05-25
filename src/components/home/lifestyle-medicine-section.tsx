"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, Sparkles, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

const LifestyleMedicineSection: React.FC = () => {
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
    <section className="py-24 px-4 relative overflow-hidden primary-gradient" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full opacity-30 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full opacity-40 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute top-4 -right-4 w-full h-full bg-teal-400/20 rounded-2xl"></div>
              <div className="relative w-full h-auto rounded-2xl backdrop-blur-sm bg-teal-600/30 shadow-xl border border-teal-500 p-3">
                <Image
                  src="/tefline-image2.webp"
                  alt="Lifestyle Medicine"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute top-10 -left-6 bg-orange-300/70 backdrop-blur-xl shadow-lg py-2 px-4 rounded-lg text-white text-sm font-medium border border-teal-500">
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-white" />
                    12 Monthly Modules
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            animate={isInView ? "visible" : "hidden"}
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center bg-teal-50/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Comprehensive Wellness Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              <span>LIFESTYLE MEDICINE</span> Through AI-Driven Intelligence
            </h2>
            <p className="text-teal-100 mb-8 leading-relaxed text-lg text-white">
              Tefline's flagship initiative, RxLifeMed, is your lifelong companion offering curated content spanning
              twelve evolving monthly modules in lifestyle medicine. We host digital wellness deep dives, weekly
              check-ins and everything in between, incl. The Doctor is IN.
            </p>
            <p className="text-teal-100 mb-8 leading-relaxed text-lg text-white">
              Particularly potent is patent-pending Lifestyle Social, a tribe outreach platform that acts as a
              springboard for social connections.
            </p>
            <Link
              href="/modules"
              className="text-white inline-flex items-center text-black font-semibold group px-5 py-2 rounded-lg border border-teal-500 hover:bg-teal-600/50 transition-all duration-200 hover:scale-105"
            >
              Learn More About RxLifeMed
              <div className="ml-2 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-200">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LifestyleMedicineSection
