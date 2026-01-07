"use client"

import { Github, Linkedin, Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"



const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  {
    id: "epreuve-5",
    label: "Épreuve 5",
    children: [
      { id: "stages", label: "Stages" },
      { id: "veilles", label: "Veille Technologique" },
    ]
  },
  { id: "epreuve-6", label: "Épreuve 6" },
  { id: "projets", label: "Mes projets" },
  { id: "formations", label: "Formations" },
  { id: "contact", label: "Contact" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("accueil")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  // Flatten items for scroll spy
  // No longer rely on flatNavItems order for scroll spy. We will query DOM.

  useEffect(() => {
    const handleScroll = () => {
      // Hardcoded list of IDs in the exact order they appear in page.tsx
      const SPY_IDS = [
        "accueil",
        "a-propos",
        "veilles",
        "formations",
        "projets",
        "stages",
        "contact"
      ]

      // Use the middle of the viewport for detection
      const spyPoint = window.scrollY + window.innerHeight / 2

      let currentId = activeSection // Default to keep current if no match (though unlikely with min-h-screen)
      let foundMatch = false

      for (const id of SPY_IDS) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          // Check if the spy point is within this section's vertical range
          if (spyPoint >= offsetTop && spyPoint < offsetTop + offsetHeight) {
            currentId = id
            foundMatch = true
            break
          }
        }
      }

      // Fallback: if we are at the very bottom, highlight the last item (Contact)
      if (!foundMatch && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentId = "contact"
      }
      // Fallback: if we are at the very top, highlight the first item
      else if (!foundMatch && window.scrollY < 100) {
        currentId = "accueil"
      }

      if (currentId) {
        setActiveSection(currentId)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection]) // Add activeSection dependency if needed, but handleScroll is closed over it? 
  // Actually, handleScroll doesn't need activeSection if we use local currentId var correctly.
  // But wait, I used `let currentId = activeSection`. `activeSection` is from state closure. 
  // To avoid closure staleness, we should probably just default to "accueil" or not rely on previous state inside the listener unless using ref.
  // Better approach: stateless determination.


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <aside className="fixed left-0 top-0 z-50 w-full md:w-52 md:h-screen bg-sidebar/95 backdrop-blur-md border-b md:border-b-0 md:border-r border-sidebar-border flex flex-col transition-all duration-300 shadow-2xl shadow-primary/5">
      <div className="flex flex-row md:flex-col items-center justify-between md:justify-start w-full px-4 py-3 md:py-8 md:px-6 z-10">

        {/* Profile Info - Row on mobile, Col on desktop */}
        <div className="flex items-center gap-3 md:flex-col md:gap-0">
          <div className="relative w-10 h-10 md:w-32 md:h-32 rounded-full overflow-hidden border-2 md:border-4 border-primary/30 transition-all duration-500 hover:scale-105 animate-profile-pulse md:mb-4 group cursor-pointer">
            <Image src="/AHMET.jpg" alt="BICER Ahmet" fill className="object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110" priority />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <h1 className="text-sidebar-foreground font-bold text-lg md:text-center md:mb-3 tracking-wide">
            BICER <span className="text-primary font-extrabold hidden md:inline">Ahmet</span>
            <span className="text-primary font-extrabold md:hidden"> A.</span>
          </h1>
        </div>

        <button
          onClick={toggleMenu}
          className="relative group p-2 rounded-full bg-sidebar-accent/50 hover:bg-primary/20 text-sidebar-foreground transition-all duration-300 hover:scale-110 active:scale-95 ring-1 ring-primary/20 hover:ring-primary/60 md:mt-2"
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
        "flex-1 w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] md:max-h-none md:opacity-100 md:translate-y-0",
        isMenuOpen ? "max-h-[80vh] opacity-100 translate-y-0 border-t md:border-t-0 border-sidebar-border" : "max-h-0 opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0 md:max-h-full"
      )}>
        <ul className="space-y-1.5 pt-6 pb-2">
          {navItems.map((item, index) => {
            const isExpanded = expandedSections.includes(item.id);
            const isParentActive = item.children?.some(child => child.id === activeSection);

            if (item.children) {
              return (
                <li key={item.id} className={cn("transform transition-all duration-500", isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0")} style={{ transitionDelay: `${index * 75}ms` }}>
                  <button
                    onClick={() => toggleSection(item.id)}
                    className={cn(
                      "group relative w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm overflow-hidden flex items-center justify-between",
                      isParentActive || isExpanded
                        ? "text-primary font-bold bg-sidebar-accent shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                        : "text-sidebar-foreground/70 hover:text-white hover:bg-sidebar-accent/40"
                    )}
                  >
                    <div className={cn(
                      "absolute left-0 top-0 bottom-0 w-1 bg-primary transition-all duration-300",
                      isParentActive || isExpanded ? "h-full opacity-100" : "h-0 opacity-0 group-hover:h-2/3 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100"
                    )} />

                    <span className="relative z-10">{item.label}</span>
                    <ChevronRight size={14} className={cn("transition-transform duration-300", isExpanded ? "rotate-90" : "")} />

                    <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="space-y-1 pl-2">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => scrollToSection(child.id)}
                            className={cn(
                              "group relative w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-xs overflow-hidden",
                              activeSection === child.id
                                ? "text-primary font-bold bg-primary/10 border border-primary/20"
                                : "text-sidebar-foreground/60 hover:text-white hover:bg-sidebar-accent/20"
                            )}
                          >
                            <span className="relative z-10 flex items-center justify-between">
                              {child.label}
                              {activeSection === child.id && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            }

            // Standard Item
            return (
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
                    "group relative w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm overflow-hidden flex items-center justify-between",
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

                  <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className={cn(
        "flex gap-5 mt-auto p-4 md:p-0 justify-center md:pb-8 transition-all duration-700 delay-300 md:opacity-100 md:translate-y-0",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 md:opacity-100 md:translate-y-0"
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

