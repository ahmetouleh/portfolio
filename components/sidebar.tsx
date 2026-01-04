"use client"

import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "veilles", label: "Veilles Technologiques" },
  { id: "formations", label: "Formations" },
  { id: "projets", label: "Mes projets" },
  { id: "stages", label: "Stages" },
  { id: "contact", label: "Contact" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("accueil")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-8 px-6 z-50">
      <div className="mb-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 transition-all duration-500 hover:scale-105 animate-profile-pulse">
          <Image src="/AHMET.jpg" alt="BICER Ahmet" fill className="object-cover" priority />
        </div>
      </div>

      <h1 className="text-sidebar-foreground font-semibold text-lg text-center mb-12">BICER Ahmet</h1>

      <nav className="flex-1 w-full">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={item.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in-up">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm ${
                  activeSection === item.id
                    ? "text-primary font-medium bg-sidebar-accent"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4 mt-8">
        <Link
          href="https://www.linkedin.com/in/ahmet-bicer-95146223a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sidebar-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/ahmetouleh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sidebar-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <Github className="w-5 h-5" />
        </Link>
      </div>
    </aside>
  )
}
