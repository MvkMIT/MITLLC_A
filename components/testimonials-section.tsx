"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const testimonials = [
  {
    quote:
      "Maganti Group helped us scale our development team rapidly. Their candidates were highly skilled and integrated seamlessly into our workflow.",
    author: "Sarah M.",
    role: "CTO, Tech Startup",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The quality of talent Maganti Group provides is exceptional. They truly understand our technical requirements and company culture.",
    author: "Michael R.",
    role: "Engineering Director",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with Maganti Group has transformed our IT operations. Their consultants brought expertise that accelerated our digital transformation.",
    author: "Jennifer K.",
    role: "VP of Operations",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Reliable, professional, and efficient. Maganti Group is our go-to partner for all staffing needs.",
    author: "David L.",
    role: "HR Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Their global presence and local expertise made all the difference in our international expansion.",
    author: "Lisa T.",
    role: "CEO, Financial Services",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

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
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past half (since we duplicate content)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section ref={sectionRef} id="temoignages" className="py-24 bg-background overflow-hidden lg:py-32 lg:pb-0">
      {/* Section Header */}
      <div className="w-full">
        <div className="text-center mb-16 lg:mb-20 px-6">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Testimonials
          </p>
          <ScrollBlurText
            text="Trusted by industry leaders"
            className="font-serif text-3xl md:text-4xl text-foreground text-balance lg:text-7xl font-light"
          />
        </div>

        <div className="reveal opacity-0 animation-delay-400">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-2xl p-6 border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 my-6 py-10"
              >
                <blockquote className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
