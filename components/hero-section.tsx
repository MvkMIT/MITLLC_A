"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"

// Background video lives in /public and is referenced by URL.
// (Next.js bundles imported images, but .mp4 files must be served as static assets.)
const heroVideo = "/MG_LLC2.mp4"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  // 0 = top of page, 1 = scrolled past the hero. Drives the background zoom/round-corner effect.
  const [scrollProgress, setScrollProgress] = useState(0)

  // Reveal-on-scroll: fade elements marked `.reveal` into view once they enter the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Track scroll position within the hero to animate the background video.
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight

      // Map scroll distance to a 0–1 range; reaches 1 at half the section's height.
      const progress = Math.min(scrollY / (sectionHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    // `passive` lets the browser scroll without waiting on this handler.
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Sync state on mount in case the page loads already scrolled.

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Derived transforms applied to the background video as the user scrolls.
  const scale = 1 - scrollProgress * 0.05 // Zooms out slightly: 1 → 0.95
  const borderRadius = scrollProgress * 24 // Rounds the corners: 0 → 24px

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Full-bleed background video; scale + border-radius are driven by scroll progress */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-100"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Foreground content, left-aligned over the video */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow + animated headline + supporting copy */}
          <p className="reveal opacity-0 text-xs sm:text-sm uppercase tracking-[0.2em] text-background font-medium mb-4 sm:mb-6">
            Welcome to Maganti Group
          </p>
          <h1 className="font-serif text-[20px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-[1.2] text-background mb-6 sm:mb-8">
            <span className="block whitespace-nowrap text-[26px] sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl"><AnimatedText text="Hire the Right IT Talent" delay={0.2} /></span>
            <span className="text-accent block whitespace-nowrap">
              <AnimatedText text="for Future-Ready Organizations" delay={0.6} />
            </span>
          </h1>
          <p className="reveal opacity-0 animation-delay-400 text-xs sm:text-sm md:text-base lg:text-lg text-background/90 leading-relaxed mb-6 sm:mb-8 md:mb-10">
            Maganti Group LLC helps businesses find skilled IT professionals for contract, full-time, and project-based roles. We support hiring needs with a reliable talent network, structured screening process, and a practical approach to matching the right people with the right opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base group w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base border-background/30 hover:bg-background/10 text-background bg-transparent backdrop-blur-sm w-full sm:w-auto"
              onClick={() => {
                const aboutSection = document.getElementById('about')
                aboutSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
