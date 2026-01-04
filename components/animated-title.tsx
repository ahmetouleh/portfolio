"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedTitleProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedTitle({ children, className = "" }: AnimatedTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    // Create twinkling stars
    const createStar = () => {
      const star = document.createElement("div")
      star.className = "absolute pointer-events-none"

      // Random position around the title
      const rect = title.getBoundingClientRect()
      const x = Math.random() * rect.width
      const y = Math.random() * rect.height

      star.style.left = `${x}px`
      star.style.top = `${y}px`
      star.style.width = "2px"
      star.style.height = "2px"

      // Random color between purple shades
      const colors = ["#a855f7", "#c084fc", "#e9d5ff", "#ffffff"]
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      star.style.borderRadius = "50%"
      star.style.boxShadow = `0 0 ${Math.random() * 4 + 2}px currentColor`

      // Random animation duration
      const duration = Math.random() * 2 + 1
      star.style.animation = `twinkle ${duration}s ease-in-out infinite`
      star.style.animationDelay = `${Math.random() * 2}s`

      title.appendChild(star)

      // Remove after animation completes multiple cycles
      setTimeout(() => {
        star.remove()
      }, duration * 3000)
    }

    for (let i = 0; i < 150; i++) {
      setTimeout(() => createStar(), i * 50)
    }

    const interval = setInterval(() => {
      createStar()
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <h2 ref={titleRef} className={`relative ${className}`}>
      {children}
    </h2>
  )
}
