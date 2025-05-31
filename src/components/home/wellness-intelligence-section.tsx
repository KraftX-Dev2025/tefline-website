"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { wellnessModules } from "@/lib/constants/home";
import { successMetrics } from "@/lib/constants/services";
import { Brain, Globe, Zap, ArrowRight } from "lucide-react";

const WellnessIntelligenceSection = () => {
  return (
    <section className="py-8 px-4 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-teal-400/20 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/4 w-56 h-56 rounded-full bg-teal-500/20 blur-[100px]"></div>
      </div>

      {/* Flowing background curves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="absolute w-full min-w-[1000px] h-full opacity-30"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M-100,250 C100,50 400,450 700,200 C900,50 1200,350 1600,150"
            stroke="url(#dark-wave1)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient
              id="dark-wave1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="rgba(20, 184, 166, 0.4)"
              />
              <stop
                offset="100%"
                stopColor="rgba(45, 212, 191, 0)"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          <div className="badge-teal">
            <Brain className="w-4 h-4 mr-2" />
            Powered by Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-gradient bg-clip-text">
            WELLNESS INTELLIGENCE™
          </h2>
        </motion.div>

        {/* Dashboard Layout */}
        <div className="relative">
          {/* Main hub - center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto mb-20 max-w-lg"
          >
            <div className="primary-gradient backdrop-blur-md border border-teal-500/70 rounded-2xl p-6 shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:shadow-[0_0_40px_rgba(20,184,166,0.25)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-400"></div>
              <div className="flex items-center mb-6">
                <div className="p-1 rounded-full bg-white mr-4 glow-pulse-teal">
                  <div className="p-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Wellness Intelligence™ Hub
                  </h2>
                  <p className="text-sm text-teal-200">
                    Your command center for holistic health
                  </p>
                </div>
              </div>

              {/* <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center border border-teal-500/50">
                  <div className="text-xl font-bold text-teal-600">87%</div>
                  <div className="text-xs text-teal-600">User Energy Improvement</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-teal-500/50">
                  <div className="text-xl font-bold text-teal-600">3.2 yrs</div>
                  <div className="text-xs text-teal-600">Biological Age Reduction</div>
                </div>
              </div> */}

              <div className="relative h-16 w-full rounded-lg overflow-hidden mb-6 border-2 border-white">
                <div className="absolute inset-0 bg-white rounded-lg"></div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full rounded-lg bg-teal-400"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-md font-semibold text-white">
                  Wellness Score: 80%
                </div>
              </div>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {successMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-4 text-center border border-teal-500/50"
                  >
                    <div className="text-xl font-bold text-teal-600">
                      {metric.stat}
                    </div>
                    <div className="text-xs text-teal-600">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-amber-500 text-white text-sm font-medium transition-all duration-200 border border-teal-500/30 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-105  hover:text-amber-500 hover:bg-white group"
                >
                  Explore Intelligence Hub
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Four connected modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
            {wellnessModules.map((module) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: module.delay / 2,
                }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Link
                  href={module.link}
                  className="block h-full transform transition-all duration-200 hover:-translate-y-2"
                >
                  <div
                    className={`h-full flex flex-col bg-teal-50/10 backdrop-blur-md border border-teal-500/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 ${module.glowColor}`}
                  >
                    <div
                      className={`h-1.5 w-full bg-gradient-to-r ${module.color}`}
                    ></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-4">
                        <div
                          className={`p-2 rounded-full bg-gradient-to-r ${module.color} mr-3 transform transition-transform duration-200 group-hover:scale-110`}
                        >
                          {module.icon === "Brain" ? (
                            <Brain className="h-6 w-6 text-white" />
                          ) : module.icon ===
                            "Globe" ? (
                            <Globe className="h-6 w-6 text-white" />
                          ) : module.icon ===
                            "Zap" ? (
                            <Zap className="h-6 w-6 text-white" />
                          ) : null}
                        </div>
                        <h3 className="font-bold">
                          {module.title}
                        </h3>
                      </div>
                      <p className="text-sm mb-4">
                        {module.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <div
                          className={`${module.lightColor} rounded-lg px-3 py-2 text-center border`}
                        >
                          <div
                            className={`text-sm font-bold ${module.textColor}`}
                          >
                            {module.stats[0]}
                          </div>
                          {module.stats[1]}
                        </div>
                        <div className="flex items-center text-sm">
                          <span className=" font-medium">
                            Explore
                          </span>
                          <ArrowRight
                            className={`ml-1 h-4 w-4 ${module.textColor} transform transition-transform duration-200 group-hover:translate-x-1`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
                .glow-pulse-teal {
                    animation: pulse-teal 2.5s infinite;
                }
                @keyframes pulse-teal {
                    0% {
                        box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(20, 184, 166, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);
                    }
                }
            `}</style>
    </section>
  );
};

export default WellnessIntelligenceSection;
