import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FormationsSection } from "@/components/formations-section"
import { ProjectsSection } from "@/components/projects-section"
import { StagesSection } from "@/components/stages-section"
import { ContactSection } from "@/components/contact-section"
import { LoadingScreen } from "@/components/loading-screen"
import { TechWatchSection } from "@/components/tech-watch-section"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 md:ml-52 pt-24 md:pt-0">
          <HeroSection />
          <AboutSection />
          <TechWatchSection />
          <FormationsSection />
          <ProjectsSection />
          <StagesSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
