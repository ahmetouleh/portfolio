"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

import { AnimatedTitle } from "@/components/animated-title"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const projects = [
  {
    title: "Projet Interface Type Netflix",
    description: "Reproduction d'une interface de streaming moderne avec carrousel, affichage responsive et fiches médias détaillées.",
    tags: ["HTML", "CSS", "JS"],
    image: "/netflix.jpg",
    modalImage: "/netflix.PNG",
    imageFit: "contain",
  },
  {
    title: "Packet Tracer Configuration VLAN",
    description: "Un travail pratique dédié à la configuration et à la segmentation des réseaux via les VLANs sur Cisco Packet Tracer.",
    tags: ["Cisco Packet Tracer", "Réseau", "VLAN"],
    image: "/packetracer.jpg",
    modalImage: "/packetracer.jpg",
    imageFit: "contain",
    document: "/packetracerVLAN.docx",
    documentLabel: "Voir le TP VLAN",
  },
  {
    title: "Mise en œuvre de SSL",
    description: "Sécurisation des échanges web avec certificat auto-signé et activation HTTPS sur Apache.",
    tags: ["SSL", "Apache", "Wireshark", "Sécurité"],
    image: "/ssl.jpg",
    modalImage: "/sslApache.PNG",
    imageFit: "contain",
    document: "/sslApache.PNG",
    documentLabel: "Voir le fichier SSL",
  },
  {
    title: "Installation Serveur Web Apache",
    description: "Hébergement d'un site PHP/MySQL sur Apache2 (Debian) avec Virtual Host et phpMyAdmin.",
    tags: ["Apache", "Debian", "PHP", "MySQL"],
    image: "/apache.png",
    modalImage: "/apache.png",
    imageFit: "contain",
    document: "/tpapache2.pdf",
    documentLabel: "Voir le TP Apache",
  },
  {
    title: "Administration Windows Server : AD DS, DNS, DHCP & GPO",
    description: "Administration complète d'un environnement Windows Server : Active Directory, stratégies de groupe (GPO) et services réseaux (DNS/DHCP).",
    tags: ["Active Directory", "DNS", "DHCP", "GPO", "Windows Server"],
    image: "/activedirectory.png",
    modalImage: "/dnsActiveDirectory.PNG",
    imageFit: "contain",
    document: "/windowserverAD.pdf",
    documentLabel: "Voir le rapport AD",
  },
  {
    title: "Mise en place d'un serveur GLPI",
    description: "Déploiement et configuration de GLPI pour la gestion de parc informatique et le suivi des incidents (Helpdesk).",
    tags: ["GLPI", "Apache", "MariaDB", "ITIL"],
    image: "/GLPI.webp",
    modalImage: "/GLPI.webp",
    imageFit: "contain",
    document: "/tpglpi.pdf",
    documentLabel: "Voir le rapport GLPI",
  },
  {
    title: "Serveur LAMP",
    description: "Installation et configuration d'une pile LAMP (Linux, Apache, MySQL, PHP) pour l'hébergement web performant.",
    tags: ["Linux", "Apache", "MySQL", "PHP"],
    image: "/lamp.jpg",
    modalImage: "/lamp.jpg",
    imageFit: "contain",
    document: "/tpserveurlamp.pdf",
    documentLabel: "Voir le TP LAMP",
  },
  {
    title: "Routage OSPF & Protocole HSRP",
    description: "Mise en œuvre de protocoles de routage dynamique (OSPF) et de redondance de passerelle (HSRP) pour assurer la haute disponibilité du réseau.",
    tags: ["Cisco", "OSPF", "HSRP", "Routage", "Haute Disponibilité"],
    image: "/ospf.png",
    modalImage: "/ospf.png",
    imageFit: "contain",
    document: "/tproutage.pdf",
    documentLabel: "Voir le TP Routage",
  },
  {
    title: "Sécurisation et Analyse Réseau",
    description: "Mise en œuvre de solutions de sécurité : pare-feu (Iptables), protection brute-force (Fail2ban), SSL et analyse de paquets (Wireshark).",
    tags: ["Sécurité", "Wireshark", "Iptables", "Fail2ban", "SSL"],
    image: "/wireshark.webp",
    modalImage: "/wireshark.webp",
    imageFit: "contain",
    document: "/tpwireshark.pdf",
    documentLabel: "Voir le TP Wireshark",
  },
  {
    title: "Installation de Linux sur pc",
    description: "Réinstallation complète d'un poste Linux : partitionnement, configuration réseau et utilitaires.",
    tags: ["Linux", "Système", "Administration"],
    image: "/linux.jpg",
    modalImage: "/linuxe.png",
    imageFit: "contain",
    document: "/installationLinux.pdf",
    documentLabel: "Voir le rapport d'installation"
  },
]

const certifications = [
  {
    title: "Certification Root-Me validée",
    description: "Pratique sur des challenges de sécurité informatique (pentest, failles web, systèmes).",
    tags: ["Root-Me", "Pentest", "Web", "Système"],
    image: "/rootme.jpg",
    modalImage: "/rootme2.PNG",
    imageFit: "contain",
  },
  {
    title: "Certification MOOC de la CNIL validée",
    description: "Compréhension du RGPD, des droits des personnes et des obligations des organisations.",
    tags: ["CNIL", "RGPD", "Droit", "Conformité"],
    image: "/cnil.jpg",
    modalImage: "/cnil.jpg",
    imageFit: "contain",
    documents: [
      { name: "Module 1", url: "/module1.pdf" },
      { name: "Module 3", url: "/module3.pdf" },
      { name: "Module 4", url: "/module4.pdf" },
      { name: "Module 5", url: "/MODULE5.pdf" },
    ]
  },
  {
    title: "Certification SecNumAcadémie validée",
    description: "Formation de l'ANSSI sur la cybersécurité : authentification, sécurité sur Internet et poste de travail.",
    tags: ["ANSSI", "SecNum", "Cybersécurité", "Certification"],
    image: "/secnum1.png",
    modalImage: "/secnum1.png",
    imageSize: "85%",
    imageFit: "contain",
    document: "/secnumacademy.pdf",
    documentLabel: "Voir la certification SecNum"
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projets" className="min-h-screen py-20 px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <AnimatedTitle
          className={`text-5xl font-bold mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Mes projets
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-secondary/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`transition-transform duration-700 group-hover:scale-110 ${project.imageFit === "contain"
                    ? "object-contain w-full h-full p-2"
                    : "object-cover w-full h-full"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 pointer-events-none" />
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

        {/* SECTION CERTIFICATIONS */}
        <AnimatedTitle
          className={`text-4xl font-bold mb-12 text-center transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Mes Certifications
        </AnimatedTitle>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Background decoration for the section */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent blur-3xl -z-10" />

          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              onClick={() => setSelectedProject(cert)}
              className={`relative group bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(projects.length * 100) + (index * 150)}ms` }}
            >
              {/* Corner Ribbon/Badge */}
              <div className="absolute top-0 right-0 z-20 overflow-hidden w-24 h-24">
                <div className="absolute top-[18px] right-[-28px] rotate-45 bg-yellow-500 text-black font-bold text-[10px] py-1 w-32 text-center shadow-lg">
                  CERTIFIÉ
                </div>
              </div>

              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6 group-hover:from-gray-800 group-hover:to-gray-900 transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('/projects/grid-pattern.svg')] opacity-20" />

                {/* Gold Glow behind image */}
                <div className="absolute inset-0 bg-yellow-500/10 blur-xl rounded-full scale-75 group-hover:scale-100 group-hover:bg-yellow-500/20 transition-all duration-700" />

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="relative z-10 object-contain w-full h-full transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                  style={cert.imageSize ? { width: cert.imageSize, height: "auto" } : undefined}
                />
              </div>

              <div className="p-6 relative">
                {/* Gold divider line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                <h3 className="text-lg font-bold mb-3 text-yellow-500/90 tracking-wide uppercase text-xs flex items-center gap-2">
                  <span className="text-lg">🏢</span> {cert.tags[0]}
                </h3>

                <h4 className="text-xl font-bold mb-3 text-white leading-tight">
                  {cert.title.replace("Certification ", "").replace(" validée", "")}
                </h4>

                <p className="text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-yellow-500/5 text-yellow-500/80 text-xs font-medium rounded-md border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-yellow-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  Voir le certificat <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="w-screen h-screen max-w-none m-0 p-0 border-none bg-black flex flex-col items-center justify-center z-[100] overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title}
          </DialogTitle>

          {selectedProject && (
            <ProjectModalContent project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}

        </DialogContent>
      </Dialog>
    </section>
  )
}

function ProjectModalContent({ project, onClose }: { project: any, onClose: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  if (!project) return null

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top } = currentTarget.getBoundingClientRect()

    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    setMousePos({ x, y })
  }

  const hasDocuments = project.documents && project.documents.length > 0
  const mainLink = project.document || project.modalImage || project.image
  const mainLabel = project.documentLabel || "Ouvrir le projet"

  return (
    <div
      className="relative w-full h-full flex items-center justify-center p-4"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
    >
      {/* Dynamic Background with Spotlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blurred Image Background */}
        <div
          className="absolute inset-0 opacity-20 scale-110 blur-3xl transition-transform duration-700"
          style={{
            backgroundImage: `url(${project.modalImage || project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`
          }}
        />

        {/* Spotlight Effect */}
        <div
          className="absolute inset-0 opacity-60 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x * 100}% ${50 + mousePos.y * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
          }}
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/projects/grid-pattern.svg')] opacity-10" />
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-all duration-300 z-50 p-2 rounded-full hover:bg-white/10 hover:rotate-90"
      >
        <X className="w-10 h-10" />
        <span className="sr-only">Fermer</span>
      </button>

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">

        {/* 3D Tilted Image Container */}
        {/* Reuse the image as a background accent/hero if we have documents, otherwise show it prominently */}
        {!hasDocuments && (
          <div
            className="relative group transition-transform duration-200 ease-out mb-8"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg) scale3d(1.02, 1.02, 1.02)`
            }}
          >
            {/* Floating Glow Behind */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-purple-600/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: 'translateZ(-50px)' }}
            />

            <img
              src={project.modalImage || project.image}
              alt={project.title}
              className="relative w-auto h-auto max-h-[50vh] object-contain rounded-lg shadow-2xl border border-white/10"
              style={{ transform: 'translateZ(20px)' }}
            />

            {/* Reflection/Sheen Effect */}
            <div
              className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              style={{ mixBlendMode: 'overlay' }}
            />
          </div>
        )}

        {/* Content Details */}
        <div className={`text-center animate-in slide-in-from-bottom-10 fade-in duration-700 delay-100 ${hasDocuments ? "mt-4" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            {project.title}
          </h2>

          <div className="flex justify-center gap-3 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            {project.description}
          </p>

          {/* DOCUMENTS GALLERY for CNIL */}
          {hasDocuments ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              {project.documents.map((doc: any, i: number) => (
                <button
                  key={doc.name}
                  onClick={() => window.open(doc.url, "_blank")}
                  className="group flex flex-col items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-colors">
                    <span className="text-2xl">📜</span>
                  </div>
                  <span className="text-white/90 font-medium text-sm group-hover:text-white transition-colors">{doc.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={() => window.open(mainLink, '_blank')}
              className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative font-medium tracking-wide">{mainLabel}</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
// Helper icon component if needed, or import from lucide-react
function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
  )
}
