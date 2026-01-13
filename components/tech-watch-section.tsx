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
    Box,
    Newspaper, // Added Newspaper icon for articles
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
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        Une machine virtuelle est un ordinateur “virtuel” qui fonctionne exactement comme un vrai ordinateur, mais sans matériel physique séparé.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Elle a son processeur, sa mémoire, son disque dur et son système d’exploitation (Windows, Linux, etc.)</li>
                        <li>Elle peut faire tourner des logiciels et stocker des fichiers comme un ordinateur normal</li>
                    </ul>
                    <p>
                        Tout est géré par l’hyperviseur, qui partage les ressources de l’ordinateur physique.
                    </p>
                </div>
            ),
        },
        {
            title: "Hyperviseur",
            icon: Server,
            content: (
                <>
                    <p className="mb-4">
                        Un hyperviseur est un logiciel qui permet de créer et gérer des machines virtuelles, c’est-à-dire des ordinateurs “virtuels” qui fonctionnent sur un seul ordinateur physique.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-primary mb-2">Les hyperviseurs de type 1</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                Ils s’installent directement sur le matériel (bare-metal) et sont très performants.
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                                {["VMware ESXi", "Hyper-V", "KVM", "Xen", "Proxmox", "bhyve"].map((item) => (
                                    <li key={item} className="text-sm flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-primary mb-2">Les hyperviseurs de type 2</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                Ils s’installent sur un système d’exploitation existant (hosted) et sont plus faciles à utiliser.
                            </p>
                            <ul className="space-y-1">
                                {[
                                    { name: "VirtualBox", os: "Windows, Linux, macOS" },
                                    { name: "VMware Workstation", os: "Windows, Linux" },
                                    { name: "Parallels Desktop", os: "macOS" },
                                ].map((item) => (
                                    <li key={item.name} className="text-sm flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        <span>
                                            <span className="font-medium text-foreground">{item.name}</span>
                                            <span className="text-muted-foreground"> → {item.os}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
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
            title: "La virtualisation dans le cloud",
            icon: TrendingUp,
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        La virtualisation dans le cloud permet de créer des machines virtuelles hébergées dans des datacenters, sans avoir besoin de serveurs physiques dans l’entreprise. Plusieurs machines virtuelles peuvent fonctionner sur un même serveur grâce à un hyperviseur de type 1, installé directement sur le matériel.
                    </p>
                    <div>
                        <p className="font-semibold mb-2 text-foreground">Des solutions de virtualisation cloud très utilisées aujourd’hui sont :</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong className="text-foreground">Microsoft Azure</strong></li>
                            <li><strong className="text-foreground">VMware Cloud</strong></li>
                        </ul>
                    </div>
                    <p>
                        Ces plateformes utilisent des hyperviseurs de type 1 afin de garantir de bonnes performances, une meilleure sécurité et une haute disponibilité. Les entreprises peuvent ainsi déployer rapidement des serveurs ou des applications, sans investissement matériel.
                    </p>
                    <p className="font-medium text-foreground">
                        Aujourd’hui, la virtualisation dans le cloud est une technologie essentielle pour les infrastructures informatiques modernes.
                    </p>
                </div>
            ),
        },
        {
            title: "La Conteneurisation",
            icon: Box,
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        La conteneurisation permet de faire tourner des applications dans des conteneurs, plus légers et rapides qu’une machine virtuelle.
                        Contrairement à une VM, un conteneur partage l’OS de l’ordinateur et contient seulement l’application et ses dépendances, ce qui permet un démarrage rapide et une faible consommation de ressources.
                    </p>

                    <div>
                        <h4 className="font-semibold text-primary mb-2">Logiciels principaux</h4>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li><strong className="text-foreground">Docker</strong> (le plus utilisé)</li>
                            <li><strong className="text-foreground">Podman</strong></li>
                            <li><strong className="text-foreground">Kubernetes</strong> (pour gérer plusieurs conteneurs)</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-primary mb-2">Avantages</h4>
                        <ul className="space-y-2">
                            {[
                                { id: "1️⃣", text: "Pas de conflits : chaque application est isolée." },
                                { id: "2️⃣", text: "Facile à déplacer : le même conteneur fonctionne sur n’importe quel ordinateur." },
                                { id: "3️⃣", text: "Propre et rapide : supprimer un conteneur supprime tout, le système reste propre." },
                            ].map((item) => (
                                <li key={item.id} className="flex items-start gap-2">
                                    <span className="text-lg shrink-0">{item.id}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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

    const articles = [
        {
            title: "Article : Docker vs VM",
            type: "Comparatif",
            date: "28/02/2025",
            icon: Box,
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                        <Box className="w-5 h-5" />
                        <span>Isolation et Performance</span>
                    </div>
                    <p className="text-sm">
                        Cet article explique que <strong>Docker</strong> et les <strong>machines virtuelles</strong> permettent toutes deux d’isoler des applications, mais Docker est plus léger et rapide, idéal pour le cloud et les microservices, tandis que les VM offrent une isolation complète et sont adaptées aux applications anciennes ou sensibles en sécurité.
                    </p>
                    <p className="text-xs border-l-4 border-primary pl-3 italic text-muted-foreground/80">
                        "Docker vs Virtual Machines : comparaison" - IONOS
                    </p>
                    <a
                        href="https://www.ionos.fr/digitalguide/serveur/know-how/docker-vs-virtual-machines/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-1"
                    >
                        Lire l'article complet →
                    </a>
                </div>
            ),
        },
        {
            title: "Actualité : Faille VMware",
            type: "Sécurité",
            date: "28/03/2025",
            icon: AlertTriangle,
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-2 text-destructive font-semibold">
                        <AlertTriangle className="w-5 h-5" />
                        <span>Faille critique corrigée</span>
                    </div>
                    <p className="text-sm">
                        Une faille de sécurité importante a été découverte et corrigée dans <strong>VMware Tools pour Windows</strong>.
                        Cette vulnérabilité pourrait permettre à un attaquant de contourner l’authentification et d’accéder à des données sensibles.
                    </p>
                    <p className="text-xs border-l-4 border-primary pl-3 italic text-muted-foreground/80">
                        "Une faille importante corrigée dans VMware Tools pour Windows" - Le Monde Informatique
                    </p>
                    <a
                        href="https://www.lemondeinformatique.fr/actualites/lire-une-faille-importante-corrigee-dans-vmware-tools-pour-windows-96467.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-1"
                    >
                        Lire l'article complet →
                    </a>
                </div>
            ),
        },
    ]

    return (
        <section id="veilles" className="min-h-screen py-20 px-8 bg-muted/30" ref={ref}>
            <div className="max-w-7xl mx-auto">
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

                {/* Featured Image Section */}
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

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Core Concepts */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
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

                    {/* Right Column: News/Articles */}
                    <div className={`lg:col-span-1 space-y-6 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} transition-all duration-1000 delay-500`}>
                        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Newspaper className="w-6 h-6 text-primary" />
                                Actualités Récentes
                            </h3>
                            <div className="space-y-6">
                                {articles.map((article, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{article.type}</span>
                                            <span>{article.date}</span>
                                        </div>
                                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h4>
                                        <div className="text-sm text-muted-foreground">
                                            {article.content}
                                        </div>
                                        {index < articles.length - 1 && <div className="h-px bg-border my-6" />}
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
