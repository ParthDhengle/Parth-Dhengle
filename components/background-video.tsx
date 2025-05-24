"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface BackgroundVideoProps {
  lightSrc: string
  darkSrc: string
  opacity?: number
}

export default function BackgroundVideo({ lightSrc, darkSrc, opacity = 0.1 }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = theme === "dark" ? darkSrc : lightSrc
      videoRef.current.load()
      videoRef.current.play().catch((e) => {
        console.log("Video autoplay was prevented:", e)
      })
    }
  }, [theme, lightSrc, darkSrc])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover" style={{ opacity }}>
        <source src={theme === "dark" ? darkSrc : lightSrc} type="video/mp4" />
      </video>
    </div>
  )
}
