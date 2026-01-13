"use client"

import { useInView } from "@/hooks/use-in-view"
import { Briefcase, Calendar, MapPin, ExternalLink, Wrench, Code, Shield, HardDrive, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimatedTitle } from "@/components/animated-title"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

const stages = [
  {
    id: 1,
    period: "12 mai - 27 juin 2025",
    duration: "7 semaines",
    company: "Au Pic Informatique",
    location: "Saint-Romain-Le-Puy, 42160",
    description: "Stage en informatique",
    presentation: "Au Pic Informatique est une entreprise locale spécialisée dans la réparation de matériel informatique et mobile située à Saint-Romain-Le-Puy, 42160. Le fondateur est Francesco Giudice. En activité depuis 2009.",
    tasks: [
      {
        category: "Réparation matérielle",
        icon: Wrench,
        items: [
          "Réparation de smartphones, tablettes, ordinateurs fixes et portables",
          "Remplacement de composants : batteries, connecteurs, caméras et écrans",
          "Remplacement de disques durs HDD par des SSD apportés par les clients",
        ],
      },
      {
        category: "Installation et configuration",
        icon: HardDrive,
        items: [
          "Installation de Windows 10/11 via clés USB bootables",
          "Mise en place des licences Windows",
          "Utilisation de Ninite pour installer rapidement les applications essentielles",
        ],
      },
      {
        category: "Maintenance et optimisation",
        icon: Shield,
        items: [
          "Suppression de virus et sécurisation de systèmes",
          "Nettoyage et optimisation des caches et fichiers temporaires",
          "Suppression des fichiers résiduels",
          "Récupération de données sur disques durs",
        ],
      },
      {
        category: "Numérisation",
        icon: ExternalLink,
        items: ["Numérisation de cassettes VHS/Hi8"],
      },
      {
        category: "Développement web",
        icon: Code,
        items: [
          "Création de formulaire d'inscription pour les clients en HTML, CSS, JavaScript",
          "Installation et configuration de Tawk.to (logiciel de chat en direct) sur le site web de l'entreprise",
        ],
      },
    ],
  },
  {
    id: 2,
    period: "10 novembre - 19 décembre 2025",
    duration: "6 semaines",
    company: "S3 LOCATION / KS PNEUS 42",
    location: "Sury-le-Comtal, 42450",
    description: "Stage en informatique",
    presentation: "S3 LOCATION / KS PNEUS 42 est un garage automobile spécialisé dans la pneumatique. Le fondateur est KHALLAD Sayfdin. L'entreprise est basée à Sury-le-Comtal.",
    tasks: [
      {
        category: "Missions principales",
        icon: Shield,
        items: [
          "Observer et donner des conseils pour la mise en place du site internet de l’entreprise.",
          "Comprendre la gestion des stocks via des outils connectés.",
          "Réaliser une étude de marché pour analyser la concurrence et proposer des recommandations.",
          "Suivre l’organisation et l’utilisation des outils pour gérer les produits et les stocks.",
        ],
      },
      {
        category: "Outils et technologies",
        icon: HardDrive,
        items: [
          "PrestaShop : pour créer et gérer le futur site internet et le catalogue de pneus.",
          "Odoo (ERP) : pour centraliser les informations, suivre les commandes et mettre automatiquement à jour le stock.",
          "Google Sheets : pour organiser les données et créer des tableaux de suivi.",
        ],
      },
      {
        category: "Apprentissage et compétences",
        icon: Code,
        items: [
          "Comprendre le fonctionnement d’un site e-commerce et son catalogue de produits.",
          "Découvrir l’importance d’un ERP comme Odoo pour gérer le stock et éviter de vendre des produits indisponibles.",
          "Développer des compétences en organisation et suivi des informations avec Google Sheets.",
          "Réaliser une étude de marché et observer la concurrence pour donner des conseils.",
        ],
      },
    ],
  },
]

const techIcons = [
  { src: "/prestashop.webp", alt: "PrestaShop", className: "top-10 left-[5%] w-32 h-32", delay: "0s" },
  { src: "/googlesheets.png", alt: "Google Sheets", className: "top-20 right-[10%] w-28 h-28", delay: "1.5s" },
  { src: "/odoo.jpg", alt: "Odoo", className: "top-[40%] right-[5%] w-40 h-40", delay: "2s" },
  { src: "/ssd.jpg", alt: "SSD", className: "bottom-20 left-[10%] w-36 h-36", delay: "4s" },
  { src: "/tawkto.png", alt: "Tawk.to", className: "bottom-40 right-[15%] w-24 h-24", delay: "1s" },
  { src: "/ninite.jpg", alt: "Ninite", className: "top-[45%] left-[5%] w-28 h-28", delay: "3s" },
]

export function StagesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  return (
    <section id="stages" className="relative min-h-screen py-20 px-8 overflow-hidden" ref={ref}>
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.className} opacity-15 animate-slow-float`}
            style={{ animationDelay: icon.delay }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-primary/20 bg-white">
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedTitle
          className={`text-5xl font-bold mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Stages
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {stage.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{stage.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{stage.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{stage.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{stage.description}</p>

                <div className="space-y-3">
                  <Dialog open={openDialog === stage.id} onOpenChange={(open) => setOpenDialog(open ? stage.id : null)}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{stage.company}</DialogTitle>
                        <DialogDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {stage.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {stage.location}
                          </span>
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-6 space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-primary">Présentation de l'entreprise</h4>
                          <p className="text-muted-foreground leading-relaxed">{stage.presentation}</p>
                        </div>

                        {stage.tasks.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-primary">
                              {stage.id === 2 ? "Missions effectuées" : "Tâches effectuées pendant le stage"}
                            </h4>
                            {stage.id === 2 ? (
                              <div className="space-y-4">
                                {stage.tasks.map((taskGroup, taskIndex) => {
                                  const Icon = taskGroup.icon
                                  return (
                                    <div key={taskIndex} className="bg-card border border-border rounded-lg p-4">
                                      <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                          <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h5 className="font-semibold">{taskGroup.category}</h5>
                                      </div>
                                      <ul className="space-y-2 ml-12">
                                        {taskGroup.items.map((item, itemIndex) => (
                                          <li
                                            key={itemIndex}
                                            className="text-muted-foreground text-sm flex items-start gap-2"
                                          >
                                            <span className="text-primary mt-1.5">•</span>
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                })}
                              </div>
                            ) : (
                              <div className="space-y-6">
                                {stage.tasks.map((taskGroup, taskIndex) => {
                                  const Icon = taskGroup.icon
                                  return (
                                    <div key={taskIndex} className="bg-card border border-border rounded-lg p-4">
                                      <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                          <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h5 className="font-semibold">{taskGroup.category}</h5>
                                      </div>
                                      <ul className="space-y-2 ml-12">
                                        {taskGroup.items.map((item, itemIndex) => (
                                          <li
                                            key={itemIndex}
                                            className="text-muted-foreground text-sm flex items-start gap-2"
                                          >
                                            <span className="text-primary mt-1.5">•</span>
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = stage.id === 1 ? "/ATTEST1.pdf" : "/ATTEST2.jpg"
                      link.download = stage.id === 1 ? "Attestation_Stage_Au_Pic_Informatique.pdf" : "Attestation_Stage_KS_Pneus.jpg"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                    variant="outline"
                    className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/50 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger l'attestation de stage
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Bouton de téléchargement du Tableau de synthèse */}
        <div
          className={`mt-20 flex flex-col items-center gap-8 transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex flex-col md:flex-row gap-12">
            {/* Synthesis Table Download */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-1 font-medium">Télécharger mon tableau de synthèse complet</p>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              </div>
              <Button
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/TableauSynthese.pdf"
                  link.download = "TableauSynthese.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/5 hover:shadow-primary/20 px-8 py-6 text-lg font-semibold group relative overflow-hidden w-full md:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Télécharger mon tableau de synthèse
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

