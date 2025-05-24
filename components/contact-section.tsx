"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Calendar, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const result = await emailjs.send(
      "service_n124335",        // replace with your EmailJS Service ID
      "template_v7p1tas",       // replace with your EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "KmkUVerDktYtk7nIR"         // replace with your EmailJS Public Key
    )

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I’ll get back to you soon.",
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  } catch (error) {
    console.error("EmailJS Error:", error)
    toast({
      title: "Something went wrong",
      description: "Failed to send your message. Please try again later.",
      variant: "destructive",
    })
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots"></div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
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
        className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
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

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="backdrop-blur-sm bg-background/80 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="flex items-center p-6">
                    <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">parthdhengle12@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="backdrop-blur-sm bg-background/80 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="flex items-center p-6">
                    <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Schedule a Meeting</h4>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <a href="https://calendly.com/parthdhengle12" target="_blank" rel="noopener noreferrer">
                          Book on Calendly
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="flex space-x-4 mt-8">
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Button variant="outline" size="icon" asChild className="bg-background/80 backdrop-blur-sm">
                    <a href="https://github.com/ParthDhengle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Button variant="outline" size="icon" asChild className="bg-background/80 backdrop-blur-sm">
                    <a href="https://www.linkedin.com/in/parth-dhengle/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Button variant="outline" size="icon" asChild className="bg-background/80 backdrop-blur-sm">
                    <a href="https://x.com/Parth_dhengle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <Card className="backdrop-blur-sm bg-background/80 border border-primary/10 p-6">
              <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 backdrop-blur-sm focus:bg-background/80 transition-colors"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-background/50 backdrop-blur-sm focus:bg-background/80 transition-colors"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-background/50 backdrop-blur-sm focus:bg-background/80 transition-colors"
                    suppressHydrationWarning
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full relative overflow-hidden group"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>

              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
