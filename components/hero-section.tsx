"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    } else {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden hero-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-70"></div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-2xl font-medium text-primary">Hi, I'm Parth</h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            AI & Data Science Enthusiast | Full Stack Learner | Creative Problem Solver
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm an AI & Data Science student passionate about building real-world projects, productivity tech, and smart
            systems that make a difference.
          </p>
          <div className="flex space-x-4">
            <Button onClick={() => scrollToAbout()} className="relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/Profile_pic.jpg?height=320&width=320"
                alt="Parth's profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-xl opacity-50 animate-pulse-slow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Scroll down">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}
