"use client"

import { useEffect, useRef } from "react"
import { BookOpen } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              About Us
            </p>
          </div>
          <ScrollBlurText
            text="Our Story"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Surpassing our client&apos;s expectations since 2014
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto">
          <div className="reveal opacity-0 animation-delay-400 space-y-6 text-muted-foreground leading-relaxed text-center">
            <p className="text-lg">
              Maganti Group, LLC is a best in class technology consulting service provider 
              serving clients with end-to-end talent solutions. We provide innovative solutions to 
              our clients with our quality standards and transparent business model. Our 
              headquarter is based in Connecticut, USA with major technology hubs established 
              in India. We deliver custom and platform-based solutions to large and midsized 
              companies in the financial, healthcare, banking, retail, telecom and other 
              industries.
            </p>
            <p className="text-foreground font-medium text-lg">
              We believe that putting our Values into practice creates 
              long-term benefits for shareholders, customers, employees, 
              suppliers, and the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
