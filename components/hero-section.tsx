"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Linkedin } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import Link from "next/link"

// Public asset (served by URL — Next.js does not bundle .mp4 imports like images)
const heroVideo = "/MG_LLC.mp4"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight

      // Calculate progress (0 to 1) based on scroll within the hero section
      const progress = Math.min(scrollY / (sectionHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = 1 - scrollProgress * 0.05 // Reduces from 1 to 0.95
  const borderRadius = scrollProgress * 24 // Increases from 0 to 24px

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Full-width background video with zoom effect */}
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
          {/* <source src="/Technology_Looped_Background.mp4" type="video/mp4" /> */}
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content overlay - text on the left */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <div className="max-w-2xl">
          {/* Text content */}
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

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-8 reveal opacity-0 animation-delay-500">
            <span className="text-sm text-background/70">Follow us:</span>
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/Maganti-Group-LLC-1720121608231717/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <Facebook className="w-5 h-5 text-background" />
              </Link>
              <Link
                href="https://linkedin.com/in/maganti-group-llc-we-serve-you-grow-96ba561a2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating card - bottom left */}
      </div>
    </section>
  )
}
