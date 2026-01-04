"use client"

import { useInView } from "@/hooks/use-in-view"
import { Download, GraduationCap, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedTitle } from "@/components/animated-title"

const formations = [
  {
    period: "2024-2026",
    status: "En cours",
    title: "BTS SERVICES INFORMATIQUES AUX ORGANISATIONS",
    option: "Option SISR",
    location: "Lycée Georges Brassens",
    city: "Rive-de-Gier",
    isCurrent: true,
  },
  {
    period: "2021-2022",
    status: "Terminé",
    title: "PREMIÈRE ANNÉE DE LICENCE MISPIC",
    option: "Mathématiques, Informatiques, Sciences Pour l'Ingénieur, Chimie",
    location: "Université Jean-Monnet",
    city: "Faculté des Sciences et Techniques de Saint-Étienne",
    isCurrent: false,
  },
  {
    period: "2021",
    status: "Terminé",
    title: "BAC GÉNÉRAL",
    option: "Mathématiques et Physique-Chimie",
    location: "Lycée L'Astrée",
    city: "Boën-sur-Lignon",
    isCurrent: false,
  },
]

export function FormationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const handleDownloadCV = () => {
    // Créer un lien de téléchargement
    const link = document.createElement("a")
    link.href = "/CV_AHMET_BICER.pdf"
    link.download = "CV_AHMET_BICER.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="formations" className="min-h-screen py-20 px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <AnimatedTitle
          className={`text-5xl font-bold mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Formations
        </AnimatedTitle>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale de la timeline avec effet de brillance */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/30 hidden md:block">
            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
          </div>

          {/* Formations */}
          <div className="space-y-12">
            {formations.map((formation, index) => (
              <div
                key={index}
                className={`relative flex gap-8 transition-all duration-1000 ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Point sur la timeline */}
                <div className="relative z-10 flex-shrink-0 hidden md:block">
                  <div
                    className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 group ${
                      formation.isCurrent
                        ? "bg-primary shadow-lg shadow-primary/50 scale-110 animate-pulse-glow"
                        : "bg-primary/20 hover:bg-primary/40 hover:scale-105"
                    }`}
                  >
                    <GraduationCap
                      className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${
                        formation.isCurrent ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  {/* Glow autour du point pour la formation en cours */}
                  {formation.isCurrent && (
                    <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full -z-10 animate-pulse" />
                  )}
                </div>

                {/* Contenu de la formation */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden">
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-lg font-semibold text-primary">{formation.period}</span>
                        </div>
                        {formation.isCurrent && (
                          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30 animate-pulse">
                            {formation.status}
                          </span>
                        )}
                      </div>
                      {!formation.isCurrent && (
                        <span className="text-sm text-muted-foreground">{formation.status}</span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {formation.title}
                    </h3>

                    {formation.option && (
                      <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                        {formation.option}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">
                        {formation.location} - {formation.city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton de téléchargement du CV */}
        <div
          className={`mt-20 flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-2">
            <p className="text-muted-foreground text-sm mb-1">Téléchargez mon CV complet</p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
          <Button
            onClick={handleDownloadCV}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40 px-8 py-6 text-lg font-semibold group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Télécharger mon CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </div>
      </div>
    </section>
  )
}

