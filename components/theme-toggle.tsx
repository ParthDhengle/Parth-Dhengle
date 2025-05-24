"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative overflow-hidden rounded-full" aria-label="Toggle theme">
        <div className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden rounded-full"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <div className="relative z-10">
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </div>
      <motion.div
        className="absolute inset-0 bg-primary/10 rounded-full"
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.5, type: "spring" }}
      />
    </Button>
  )
}
