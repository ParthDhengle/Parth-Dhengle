"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a dedicated AI & Data Science student with a passion for creating innovative solutions to real-world
              problems. My journey in technology is driven by curiosity and a desire to build systems that enhance human
              productivity and creativity.
            </p>
            <p className="text-muted-foreground mb-4">
              Currently pursuing my B.E. in Artificial Intelligence & Data Science, I'm constantly expanding my
              knowledge through hands-on projects, hackathons, and collaborative work.
            </p>
            <Button className="mt-4 group relative overflow-hidden" variant="outline">
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" /> Download Resume
              </span>
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">My Interests</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <span>Participating in hackathons and coding competitions</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <span>Designing intuitive software solutions</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <span>Building personal productivity tools</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <span>Developing intelligent assistant systems</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <span>Exploring the intersection of AI and human creativity</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                <span>Learning new technologies and frameworks</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
