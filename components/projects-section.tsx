"use client"
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, ExternalLink } from "lucide-react"
interface Project {
  name: string
  tagline: string
  description: string
  image: string
  tech: string[]
  status: string
  github?: string
  live_link?: string
}
type ProjectsSectionProps={
  projects:Project[]
}
export default function ProjectsSection({
  projects
}:ProjectsSectionProps) {
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
    <TooltipProvider>
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
            {projects.map((project,index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-background/80 border border-primary/10 hover:border-primary/30">
                  <div className="relative h-[240px] w-full overflow-hidden group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tag, index) => (
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
                          className="relative overflow-hidden group"
                        >
                          <span className="relative z-10">View Details</span>
                          <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        </Button>
                      </DialogTrigger>
                        <DialogContent
                          className="
                            max-w-[95vw]
                            w-full
                            sm:max-w-[900px]
                            md:max-w-[1000px]
                            lg:max-w-[1100px]
                            max-h-[90vh]
                            overflow-y-auto
                          "
                        >
                        <DialogHeader>
                          <DialogTitle>{project.name}</DialogTitle>
                          <DialogDescription>{project.tagline}</DialogDescription>
                        </DialogHeader>
                        <div className="relative h-[240px] w-full my-4 rounded-md overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="my-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tag, index) => (
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
                          {project.live_link ? (
                            <Button size="sm" asChild>
                              <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          ) : project.status === "In Development" ? (
                            <Button size="sm" disabled>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Button>
                          ) : null}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="flex gap-2">
                      {project.github && (
                        <Tooltip>
                          <TooltipTrigger asChild>
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
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {project.live_link ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" asChild>
                              <a href={project.live_link} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : project.status === "In Development" ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" disabled>
                              <ExternalLink className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>under development!!!</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : null}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  )
}