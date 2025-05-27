"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Send, CheckCircle, Sparkles, Heart, Shield, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="primary-gradient rounded-2xl p-8 border border-violet-500/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mx-auto max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="badge-teal"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Stay Updated
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">Join Our Newsletter</h3>
            <p className="text-white mb-6">
              Subscribe to receive updates on wellness intelligence, exclusive insights, and special offers directly to
              your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-gray-300 pr-12 focus:border-violet-500 focus:ring-violet-500/20 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 btn-primary">
                <Send className="w-4 h-4" />
              </Button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-violet-500 text-sm mt-2 flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Thank you for subscribing!
              </motion.p>
            )}
          </div>

          <div className="space-y-5 mx-auto max-w-md w-full">
            <motion.div
              className="flex items-center gap-4 bg-white backdrop-blur-sm p-4 rounded-lg border border-gray-300 hover-lift"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-teal-500 to-violet-500 text-white p-3 rounded-full">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-teal-600">Free Wellness Masterclass</h4>
                <p className="text-sm text-gray-700">Discover evidence-based strategies for optimal health</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-white backdrop-blur-sm p-4 rounded-lg border border-gray-300 hover-lift"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-teal-500 to-violet-500 text-white p-3 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-teal-600">Personalized Consultation</h4>
                <p className="text-sm text-gray-700">One-on-one guidance for your wellness journey</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 bg-white backdrop-blur-sm p-4 rounded-lg border border-gray-300 hover-lift"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-teal-500 to-violet-500 text-white p-3 rounded-full">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-teal-600">Community Access</h4>
                <p className="text-sm text-gray-700">Join a supportive network of like-minded individuals</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default NewsletterSection
