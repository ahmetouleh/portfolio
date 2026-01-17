"use client"

import { useInView } from "@/hooks/use-in-view"
import { AnimatedTitle } from "@/components/animated-title"

export function Epreuve6Section() {
    const { ref, isInView } = useInView({ threshold: 0.2 })

    return (
        <section id="epreuve-6" className="min-h-screen py-20 px-8 flex items-center" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <AnimatedTitle
                    className={`text-5xl font-bold mb-12 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    Épreuve 6
                </AnimatedTitle>

                <div className={`space-y-8 text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Épreuve E6 – Projet informatique</h3>
                        <p className="mb-6">
                            L’épreuve E6 du BTS SIO vise à évaluer la capacité de l’étudiant à conduire un projet informatique dans un contexte professionnel. Ce projet, réalisé au cours de la formation et le plus souvent en groupe, s’appuie sur une problématique concrète rencontrée en entreprise ou en environnement pédagogique.
                        </p>
                        <p>
                            L’objectif de cette épreuve est de vérifier la capacité de l’étudiant à analyser un besoin, à concevoir une solution technique adaptée, à mettre en œuvre cette solution, puis à justifier les choix techniques réalisés. Une attention particulière est portée à l’organisation du projet, à la démarche suivie et à la compréhension globale de la solution mise en place.
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="mb-6">
                            Dans le cadre de l’option SISR, le projet concerne principalement des domaines tels que l’administration des systèmes, la gestion des réseaux, la sécurisation des infrastructures, la virtualisation ou encore la mise à disposition de services informatiques. Lors de l’épreuve orale, l’étudiant doit présenter le projet, détailler son rôle personnel, les technologies et outils utilisés, les contraintes et difficultés rencontrées, ainsi que les résultats obtenus.
                        </p>
                        <p>
                            Cette section du portfolio sera complétée une fois le projet E6 finalisé, afin de présenter de manière détaillée les travaux réalisés et les compétences professionnelles acquises.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
