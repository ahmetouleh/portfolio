"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Code2,
  Lightbulb,
  Rocket,
  ChevronDown,
  Shield,
  Server,
  Monitor,
  Network,
  Database,
  Terminal,
  Globe,
  FileCode,
  Settings,
  HardDrive,
} from "lucide-react"
import { AnimatedTitle } from "@/components/animated-title"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Shield,
    title: "Réseau et Cybersécurité",
    description: "Passionné par les réseaux et la cybersécurité, ce sont mes domaines de prédilection dans lesquels je m'investis pleinement",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Toujours à la recherche de solutions créatives et innovantes",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Orienté résultats avec un focus sur la qualité et l'efficacité",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="a-propos" className="min-h-screen flex items-center py-20 px-8" ref={ref}>
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedTitle
          className={`text-5xl font-bold mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          À propos
        </AnimatedTitle>

        <div
          className={`prose prose-invert max-w-none mb-16 transition-all duration-1000 delay-200 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative">
            <div
              className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-none" : "max-h-[400px]"
                }`}
            >
              <p className="text-xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 group-hover:[text-shadow:0_0_8px_rgba(139,92,246,0.4)]">
                Étudiant en BTS Services Informatiques aux Organisations (SIO), option SISR, je suis passionné par l’informatique et les nouvelles technologies. Cet intérêt se reflète aussi bien dans mes études que dans mon temps libre, où je cherche constamment à développer mes compétences.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6 group-hover:text-foreground transition-colors duration-300 group-hover:[text-shadow:0_0_8px_rgba(139,92,246,0.4)]">
                Je m’intéresse particulièrement aux domaines des réseaux et de la cybersécurité, qui représentent pour moi des enjeux majeurs du numérique actuel. Curieux et motivé, j’aime comprendre le fonctionnement des systèmes et relever les défis liés à la sécurisation des infrastructures informatiques.
              </p>
            </div>

            {/* Gradient de fondu pour masquer le texte */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
            )}

            {/* Contenu supplémentaire */}
            <div
              className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-xl text-muted-foreground leading-relaxed mt-6 group-hover:text-foreground transition-colors duration-300 group-hover:[text-shadow:0_0_8px_rgba(139,92,246,0.4)]">
                En parallèle, je pratique le sport, qui m’apporte rigueur et équilibre, et je m’intéresse aux jeux vidéo, notamment pour leur aspect technique et leur architecture.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6 group-hover:text-foreground transition-colors duration-300 group-hover:[text-shadow:0_0_8px_rgba(139,92,246,0.4)]">
                À l’issue de mon BTS, je souhaite poursuivre mes études en licence professionnelle, mention Administration et Sécurité des Systèmes et des Réseaux, à l’Université Claude Bernard Lyon 1, afin de renforcer mes compétences et me préparer à une carrière dans l’informatique.
              </p>
            </div>
          </div>

          {/* Bouton En savoir plus / Voir moins */}
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 group/btn"
            >
              <span className="mr-2">{isExpanded ? "Voir moins" : "En savoir plus"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                  }`}
              />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`relative bg-card border border-border rounded-xl p-6 overflow-hidden group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Lueur animée qui tourne autour des bords */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none overflow-hidden"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 0.3) 10%, transparent 20%, transparent 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl animate-rotate-glow"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 0.5) 15%, transparent 30%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Compétences */}
        <div className="mt-20">
          <AnimatedTitle
            className={`text-4xl font-bold mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Compétences
          </AnimatedTitle>

          <div className="space-y-10">
            {/* Systèmes d'exploitation */}
            <div
              className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Systèmes d'exploitation</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Linux (Debian)</span>
                </div>
                <div className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group">
                  <Server className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Windows Server</span>
                </div>
              </div>
            </div>

            {/* Virtualisation */}
            <div
              className={`transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Virtualisation et gestion des systèmes</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group">
                  <Settings className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">VMware</span>
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div
              className={`transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Administration et services réseaux</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Cisco Packet Tracer", "GLPI", "PowerShell", "Active Directory", "NGINX", "Wireshark"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <Network className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Langages et développement web */}
            <div
              className={`transition-all duration-1000 delay-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCode className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Langages et développement web</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "Python"].map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bases de données */}
            <div
              className={`transition-all duration-1000 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Bases de données</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["SQL", "MariaDB", "phpMyAdmin"].map((db) => (
                  <div
                    key={db}
                    className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{db}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils et utilitaires */}
            <div
              className={`transition-all duration-1000 delay-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Outils et utilitaires</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Pack Office", "Cleaner", "Rufus", "Ventoy"].map((tool) => (
                  <div
                    key={tool}
                    className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Settings className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
