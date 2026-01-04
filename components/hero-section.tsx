"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

function RotatingTypewriter({ texts, delay = 0 }: { texts: string[]; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    const currentText = texts[currentTextIndex]

    if (!isDeleting && displayedText === currentText) {
      // Wait before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayedText === "") {
      // Move to next text
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1))
        } else {
          setDisplayedText((prev) => currentText.slice(0, prev.length + 1))
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayedText, currentTextIndex, isDeleting, texts, started])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function MatrixRain() {
  const columns = 20
  const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 text-primary font-mono text-sm animate-matrix-rain"
          style={{
            left: `${(i / columns) * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j} className="opacity-70">
              {characters[Math.floor(Math.random() * characters.length)]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function CodeBackground() {
  const codeSnippets = [
    "const portfolio = () => {",
    "  return <Developer />",
    "}",
    "function createArt() {",
    "  code.compile()",
    "}",
    "while(learning) {",
    "  skills++;",
    "}",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs text-primary whitespace-nowrap animate-fade-in-up"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: "2s",
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToNext = () => {
    const element = document.getElementById("a-propos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center relative px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <MatrixRain />
      <CodeBackground />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div
        className={`relative z-10 text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p
          className="text-primary text-lg mb-4 animate-fade-in-up font-mono tracking-wider animate-pulse-glow"
          style={{ animationDelay: "200ms" }}
        >
          {">"} Bonjour_
        </p>

        <h2
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <span className="text-foreground">Je suis </span>
          <span className="text-primary inline-block animate-pulse-glow font-mono">
            <RotatingTypewriter texts={["BICER Ahmet", "étudiant"]} delay={1000} />
          </span>
        </h2>

        <p
          className="text-xl text-muted-foreground mb-12 animate-fade-in-up font-light tracking-wide"
          style={{ animationDelay: "600ms" }}
        >
          <span className="text-primary/60 font-mono">{"<"}</span>
          Basé aux alentours de Saint-Etienne
          <span className="text-primary/60 font-mono">{" />"}</span>
        </p>

        <Button
          onClick={scrollToContact}
          size="lg"
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105 animate-fade-in-up bg-transparent backdrop-blur-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] font-mono tracking-wider"
          style={{ animationDelay: "800ms" }}
        >
          {">"} Contactez_moi
        </Button>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer hover:scale-110 transition-transform group"
        aria-label="Scroll to next section"
      >
        <div className="relative">
          <ChevronDown className="w-8 h-8 group-hover:animate-pulse-glow" />
          <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-primary/50 transition-all" />
        </div>
      </button>
    </section>
  )
}
