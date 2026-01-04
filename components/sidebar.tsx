"use client"

import { Github, Linkedin, Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-sidebar/95 backdrop-blur-md border-r border-sidebar-border flex flex-col items-center py-8 px-6 z-50 transition-all duration-300 shadow-2xl shadow-primary/5">
      <div className="mb-2 flex flex-col items-center z-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 transition-all duration-500 hover:scale-105 animate-profile-pulse mb-4 group cursor-pointer">
          <Image src="/AHMET.jpg" alt="BICER Ahmet" fill className="object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110" priority />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <h1 className="text-sidebar-foreground font-bold text-lg text-center mb-3 tracking-wide">
          BICER <span className="text-primary font-extrabold">Ahmet</span>
        </h1>

        <button
          onClick={toggleMenu}
          className="relative group p-2.5 rounded-full bg-sidebar-accent/50 hover:bg-primary/20 text-sidebar-foreground transition-all duration-300 hover:scale-110 active:scale-95 ring-1 ring-primary/20 hover:ring-primary/60"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={cn(
                "absolute inset-0 transition-all duration-500 transform",
                isMenuOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
              )}
            />
            <X
              size={24}
              className={cn(
                "absolute inset-0 transition-all duration-500 transform text-primary",
                isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
              )}
            />
          </div>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        </button>
      </div>

      <nav className={cn(
        "flex-1 w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        isMenuOpen ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
      )}>
        <ul className="space-y-1.5 pt-6 pb-2">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                "transform transition-all duration-500",
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              )}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "group relative w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm overflow-hidden",
                  activeSection === item.id
                    ? "text-primary font-bold bg-sidebar-accent shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                    : "text-sidebar-foreground/70 hover:text-white hover:bg-sidebar-accent/40"
                )}
              >
                <div className={cn(
                  "absolute left-0 top-0 bottom-0 w-1 bg-primary transition-all duration-300",
                  activeSection === item.id ? "h-full opacity-100" : "h-0 opacity-0 group-hover:h-2/3 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100"
                )} />

                <span className="relative z-10 flex items-center justify-between">
                  {item.label}
                  <ChevronRight
                    size={14}
                    className={cn(
                      "transition-all duration-300 transform",
                      activeSection === item.id ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    )}
                  />
                </span>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={cn(
        "flex gap-5 mt-auto transition-all duration-700 delay-300",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <Link
          href="https://www.linkedin.com/in/ahmet-bicer-95146223a/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 text-sidebar-foreground/60 hover:text-primary transition-all duration-300"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          <Linkedin className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </Link>
        <Link
          href="https://github.com/ahmetouleh"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 text-sidebar-foreground/60 hover:text-primary transition-all duration-300"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          <Github className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        </Link>
      </div>
    </aside>
  )
}
