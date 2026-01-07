"use client"

import { useInView } from "@/hooks/use-in-view"

import { AnimatedTitle } from "@/components/animated-title"

const projects = [
  {
    title: "Projet Interface Type Netflix",
    description: "Reproduction d'une interface de streaming moderne avec carrousel, affichage responsive et fiches médias détaillées.",
    tags: ["HTML", "CSS", "JS"],
    image: "/netflix.jpg",
    imageFit: "contain",
  },
  {
    title: "Maquette réseau sur Packet Tracer",
    description: "Création d'une infrastructure réseau complète : VLAN, routage, DHCP, serveurs et clients.",
    tags: ["Cisco Packet Tracer", "Réseau", "VLAN"],
    image: "/packetracer.jpg",
    imageFit: "contain",
  },
  {
    title: "Mise en œuvre de SSL",
    description: "Sécurisation des échanges web avec certificat auto-signé et activation HTTPS sur Apache.",
    tags: ["SSL", "Apache", "Wireshark", "Sécurité"],
    image: "/ssl.jpg",
    imageFit: "contain",
  },
  {
    title: "Installation Serveur Web Apache",
    description: "Hébergement d'un site PHP/MySQL sur Apache2 (Debian) avec Virtual Host et phpMyAdmin.",
    tags: ["Apache", "Debian", "PHP", "MySQL"],
    image: "/apache.png",
    imageFit: "contain",
  },
  {
    title: "Déploiement Active Directory et DNS",
    description: "Mise en place d'un domaine Active Directory et gestion centralisée des utilisateurs.",
    tags: ["Active Directory", "DNS", "Windows Server"],
    image: "/activedirectory.png",
    imageFit: "contain",
  },
  {
    title: "Reformatage de PC sous Linux",
    description: "Réinstallation complète d'un poste Linux : partitionnement, configuration réseau et utilitaires.",
    tags: ["Linux", "Système", "Administration"],
    image: "/linux.jpg",
    imageFit: "contain",
  },
  {
    title: "Certification Root-Me validée",
    description: "Pratique sur des challenges de sécurité informatique (pentest, failles web, systèmes).",
    tags: ["Root-Me", "Pentest", "Web", "Système"],
    image: "/rootme.jpg",
    imageFit: "contain",
  },
  {
    title: "Certification MOOC de la CNIL validée",
    description: "Compréhension du RGPD, des droits des personnes et des obligations des organisations.",
    tags: ["CNIL", "RGPD", "Droit", "Conformité"],
    image: "/cnil.jpg",
    imageFit: "contain",
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projets" className="min-h-screen py-20 px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <AnimatedTitle
          className={`text-5xl font-bold mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Mes projets
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`w-full h-full bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 ${project.imageFit === 'contain' ? 'bg-contain' : 'bg-cover'}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
