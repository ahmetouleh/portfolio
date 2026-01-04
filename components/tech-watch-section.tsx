
"use client"

import { useInView } from "@/hooks/use-in-view"
import { AnimatedTitle } from "@/components/animated-title"
import {
    Search,
    Brain,
    Cpu,
    Server,
    CheckCircle,
    AlertTriangle,
    Lock,
    TrendingUp,
    History,
    MessageSquare,
    Sparkles, // Added Sparkles for the badge
} from "lucide-react"
import Image from "next/image" // Imported Image

export function TechWatchSection() {
    const { ref, isInView } = useInView({ threshold: 0.1 })

    const sections = [
        {
            title: "Introduction",
            icon: Search,
            content: (
                <p>
                    La virtualisation est une technologie incontournable en informatique. Elle permet aux entreprises d’optimiser
                    l’utilisation de leurs serveurs, de réduire les coûts et de simplifier la gestion des systèmes informatiques.
                </p>
            ),
        },
        {
            title: "Définition simple",
            icon: Brain,
            content: (
                <>
                    <p>
                        La virtualisation consiste à faire fonctionner plusieurs ordinateurs virtuels sur un seul ordinateur physique
                        (serveur). Chaque ordinateur virtuel est appelé une machine virtuelle (VM).
                    </p>
                </>
            ),
        },
        {
            title: "Machine virtuelle (VM)",
            icon: Cpu,
            content: (
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Un ordinateur virtuel, mais qui fonctionne comme un vrai ordinateur.</li>
                    <li>Équipée de son système d’exploitation (Windows, Linux…).</li>
                </ul>
            ),
        },
        {
            title: "Hyperviseur",
            icon: Server,
            content: (
                <>
                    <p className="mb-2">
                        L’hyperviseur est le logiciel qui rend la virtualisation possible. Il permet de :
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Créer et gérer les machines virtuelles.</li>
                        <li>Allouer la mémoire (RAM) et le processeur (CPU) à chaque VM.</li>
                    </ul>
                    <p className="mt-2 italic">Sans hyperviseur, il n’y a pas de virtualisation.</p>
                    <h4 className="font-semibold mt-4 mb-2 text-primary">Exemples d’hyperviseurs :</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li><span className="font-medium text-foreground">VMware ESXi</span> : très répandu en entreprise.</li>
                        <li><span className="font-medium text-foreground">Proxmox VE</span> : gratuit, souvent utilisé dans le cadre des BTS.</li>
                        <li><span className="font-medium text-foreground">Hyper-V</span> : solution proposée par Microsoft.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Avantages",
            icon: CheckCircle,
            content: (
                <ul className="space-y-2">
                    {[
                        "Réduction du nombre de serveurs physiques.",
                        "Diminution des coûts.",
                        "Sauvegardes simplifiées.",
                        "Meilleure organisation des systèmes.",
                        "Isolation entre les environnements pour plus de sécurité.",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Inconvénients",
            icon: AlertTriangle,
            content: (
                <ul className="space-y-2">
                    {[
                        "Dépendance au serveur physique.",
                        "Consommation de ressources (RAM, CPU).",
                        "Nécessite des compétences techniques.",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Sécurité",
            icon: Lock,
            content: (
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Chaque VM est isolée des autres.</li>
                    <li>Sauvegardes régulières.</li>
                    <li>Mise à jour de l’hyperviseur.</li>
                    <li>Gestion stricte des droits utilisateurs.</li>
                </ul>
            ),
        },
        {
            title: "Tendances actuelles",
            icon: TrendingUp,
            content: (
                <ul className="space-y-2 text-muted-foreground">
                    <li>
                        <strong className="text-foreground">Virtualisation dans le cloud :</strong> VMware Cloud, Microsoft Azure
                    </li>
                    <li>
                        <strong className="text-foreground">Sauvegardes automatisées :</strong> Veeam Backup, Duplicati
                    </li>
                    <li>
                        <strong className="text-foreground">Haute disponibilité (Load Balancing) :</strong> HAProxy, Nginx
                        <p className="text-sm mt-1 ml-4 opacity-80">
                            Le load balancing sert à partager automatiquement le travail entre plusieurs machines virtuelles ou serveurs pour éviter qu’un seul serveur soit surchargé.
                        </p>
                    </li>
                    <li>
                        <strong className="text-foreground">PCA / PRA :</strong> Continuité et reprise d’activité (Zerto, Azure Site Recovery)
                    </li>
                </ul>
            ),
        },
        {
            title: "Historique rapide",
            icon: History,
            content: (
                <ul className="space-y-2 text-muted-foreground">
                    <li><span className="font-semibold text-primary">Années 60-70 :</span> Mainframes → plusieurs utilisateurs sur un gros ordinateur.</li>
                    <li><span className="font-semibold text-primary">Années 90 :</span> Serveurs x86 → VMware permet de créer des VM sur serveur physique.</li>
                    <li><span className="font-semibold text-primary">Années 2000 :</span> Optimisation en entreprise, sauvegardes et tests.</li>
                    <li><span className="font-semibold text-primary">Aujourd’hui :</span> Cloud → VM accessibles partout, haute disponibilité.</li>
                </ul>
            ),
        },
        {
            title: "Conclusion",
            icon: MessageSquare,
            content: (
                <p className="text-muted-foreground">
                    La virtualisation est aujourd’hui indispensable pour les administrateurs systèmes et réseaux.
                    Elle permet de créer une infrastructure plus simple, flexible et économique, tout en assurant sécurité et continuité des services.
                </p>
            ),
        },
    ]

    return (
        <section id="veilles" className="min-h-screen py-20 px-8 bg-muted/30" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <AnimatedTitle
                    className={`text-5xl font-bold mb-4 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Veilles Technologiques
                </AnimatedTitle>
                <p
                    className={`text-xl text-primary mb-12 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Sujet : La Virtualisation
                </p>

                {/* Featured Image Section with "Personal Touch" */}
                <div
                    className={`relative w-full h-[250px] rounded-2xl overflow-hidden mb-16 shadow-2xl bg-black/40 transition-all duration-1000 delay-300 group ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    <Image
                        src="/virtualisation.png"
                        alt="Virtualisation"
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            L'avenir de l'infrastructure
                        </h3>
                        <p className="text-gray-200 max-w-2xl drop-shadow-md">
                            Explorer comment la virtualisation transforme nos serveurs physiques en ressources flexibles et illimitées.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section, index) => {
                        const Icon = section.icon
                        return (
                            <div
                                key={section.title}
                                className={`bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-500 hover:shadow-lg ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">{section.title}</h3>
                                </div>
                                <div className="text-muted-foreground leading-relaxed">
                                    {section.content}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
