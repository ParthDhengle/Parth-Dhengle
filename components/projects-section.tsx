"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  details: string
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 3,
      title: "Streamlit Data Visualizer",
      description: "Upload, clean, analyze, and generate AI insights from data",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Streamlit", "pandas", "scikit-learn"],
      github: "https://github.com/ParthDhengle/Insight-Lab",
      demo: "https://insightlab.streamlit.app/",
      details:
        "A powerful data visualization tool built with Streamlit that allows users to upload datasets, perform automated cleaning operations, and generate insightful visualizations. The application also includes AI-powered analysis to identify patterns and provide recommendations based on the data.",
    },
    {
      id: 1,
      title: "Drug Inventory & Supply Chain Tracking System",
      description: "Real-time tracking & dashboard for pharmaceutical supply chains",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "React", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      details:
        "(In Devlopment) A comprehensive system for tracking pharmaceutical inventory and supply chain management. Features include real-time tracking, predictive analytics for stock management, and a responsive dashboard for monitoring key metrics. The system helps reduce waste, prevent stockouts, and ensure compliance with regulatory requirements.",
    },
    {
      id: 2,
      title: "Smart Productivity Assistant",
      description: "AI-based daily planner based on mood, health, and context",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "React", "Node.js"],
      github: "https://github.com",
      details:
        "(In Development) An intelligent productivity assistant that adapts to your daily needs. The system uses AI to analyze your mood, health data, and contextual information to create optimized daily schedules. Features include smart task prioritization, adaptive scheduling based on energy levels, and personalized productivity insights.",
    },
    
  ]

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
    <section id="projects" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-dots"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Click on a project to learn more.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-background/80 border border-primary/10 hover:border-primary/30">
                <div className="relative h-48 w-full overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedProject(project)}
                        className="relative overflow-hidden group"
                      >
                        <span className="relative z-10">View Details</span>
                        <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      <div className="relative h-60 w-full my-4 rounded-md overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="my-4">{project.details}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
