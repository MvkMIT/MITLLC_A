import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { IndustriesSection } from "@/components/industries-section"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <IndustriesSection />
      <MissionSection />
      <ScienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
