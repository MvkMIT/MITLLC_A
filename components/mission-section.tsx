"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

export function MissionSection() {
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
    <section ref={sectionRef} id="mission" className="py-24 lg:py-32 px-6">
      <div className="relative max-w-7xl mx-auto rounded-[48px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/TECH_SOFTWARES.png" alt="Technology background" className="w-full h-full object-cover" />

          {/* Black shade on left side for text readability */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-foreground via-foreground/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative px-8 lg:px-16 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div>
              <p className="reveal opacity-0 text-xs uppercase tracking-[0.3em] text-background/60 font-medium mb-4">
                About Us
              </p>
              <ScrollBlurText
                text="Transforming Businesses Through Technology"
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background text-balance mb-6"
              />
              {/* Red accent line */}
              <div className="reveal opacity-0 animation-delay-200 w-12 h-0.5 bg-red-500 mb-8" />

              <div className="reveal opacity-0 animation-delay-300 space-y-6 text-background/80 leading-relaxed">
                <p>
                  Maganti Group, LLC is a premier technology consulting service provider, specialized in talent acquisition
                  and staff augmentation services to businesses across the globe. With presence in Connecticut, USA and India,
                  we deliver excellence that drives digital transformation.
                </p>
                <p>
                  We believe in providing the best services to our clients and employees. Our team of dedicated professionals
                  is passionate about technology and innovation, committed to achieving excellence in everything we do.
                </p>
              </div>
              <div className="reveal opacity-0 animation-delay-500 mt-10">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right - Empty for image visibility */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
