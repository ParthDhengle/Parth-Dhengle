"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, FileCode, Github, Laptop, Cpu,Users,Server } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const iconMap = {
  code: Code,
  cpu: Cpu,
  database: Database,
  layout: FileCode,
  tools: Github,
  users: Users,
  server: Server
}
type Skill={
  title:string
  icon: keyof typeof iconMap
  content:string[]
}

type SkillsSectionProps={
  skills:Skill[]
}

export default function SkillsSection({skills}:SkillsSectionProps) {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-70"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with and am proficient in.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon]
            return(
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
              
                <Card className="h-full backdrop-blur-sm bg-background/80 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-3 p-2 rounded-md bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.content.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
