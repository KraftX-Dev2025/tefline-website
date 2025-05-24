"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { AnimationVariants } from "@/types/types"

const CallToActionSection = () => {
  const fadeIn: AnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white text-teal-700">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] rounded-full bg-teal-500/5 blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/5 blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-[25rem] h-[25rem] rounded-full bg-amber-400/5 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-teal-700 leading-tight">
            Ready to transform your approach to wellness?
          </h2>
          <p className="text-xl text-slate-700 mb-10 leading-relaxed">
            Join the revolution in lifestyle medicine and discover how Tefline can help you optimize your healthspan for
            a longer, more vibrant life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-amber-500/20 w-full sm:w-auto"
              >
                Book a Free Masterclass
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection;
