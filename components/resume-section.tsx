"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItem {
  id: number
  title: string
  organization: string
  period: string
  description: string
  type: "education" | "experience" | "achievement"
}

export default function ResumeSection() {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "B.E. in Artificial Intelligence & Data Science",
      organization: "AISSMS IOIT, Pune",
      period: "2023 - 2027",
      description:
        "Studying core AI concepts, machine learning algorithms, data analysis techniques, and software development.",
      type: "education",
    },
    {
      id: 2,
      title: "Data Science Course",
      organization: "AI Adventure",
      period: "2024-2025",
      description:
        "Completed a comprehensive course on python and data science, covering data analysis, machine learning, and AI applications.",
      type: "education",
    },
    {
      id: 3,
      title: "Coding Competition Winner",
      organization: "Institute level Coding Competition",
      period: "2025",
      description: "First place in the coding competition at Tesseract Keystone, showcasing problem-solving and coding skills.",
      type: "achievement",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-5 w-5" />
      case "experience":
        return <Briefcase className="h-5 w-5" />
      case "achievement":
        return <Award className="h-5 w-5" />
      default:
        return <Briefcase className="h-5 w-5" />
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-500/10 text-blue-500"
      case "experience":
        return "bg-green-500/10 text-green-500"
      case "achievement":
        return "bg-amber-500/10 text-amber-500"
      default:
        return "bg-primary/10 text-primary"
    }
  }

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-70"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Resume & Experience</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">My academic and professional journey so far.</p>
          <a href="/resume.pdf" download>
          <Button className="mt-6 group relative overflow-hidden" variant="outline">
            <span className="relative z-10 flex items-center">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" /> Download Full Resume
            </span>
            <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
          </a>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8 md:flex items-center"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-1"}`}>
                <Card className="backdrop-blur-sm bg-background/80 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                    <div className={`mr-4 rounded-full p-2 ${getColor(item.type)}`}>{getIcon(item.type)}</div>
                    <div className="space-y-1">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>
                        {item.organization} | {item.period}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-[50%] transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
