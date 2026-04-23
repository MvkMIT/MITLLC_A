"use client"

import { useEffect, useRef } from "react"
import { MessageSquare } from "lucide-react"
import { ScrollBlurText } from "./scroll-blur-text"

const testimonials = [
  {
    quote:
      "I hold the greatest admiration for Sushma Maganti and the Maganti IT team, who directed and managed our collaboration to achieve major developments on the FUTEK Web Portal (RUMI).",
    author: "Javad Mokhbery",
    role: "FUTEK CEO",
    avatar: "https://mitwebsiteartifacts.s3.amazonaws.com/images/events/091194a3-f4ea-418b-a14e-d23969e0ba1b/testimonial/766b3df9-ffb6-4a46-9384-d8e8d25a9e87.png",
  },
  {
    quote:
      "Thanks for the exceptional experience working with Maganti IT. As a new business owner, I found other companies overpriced or lacking quality. Maganti delivered a website I'm proud of, marketing support for visibility, and genuine staff support. My appreciation to the entire team!",
    author: "Barbara Belicia",
    role: "WholePerson Therapeutics LLC",
    avatar: "https://mitwebsiteartifacts.s3.amazonaws.com/images/events/ad576506-0eb4-474a-9786-75461d0f6c69/testimonial/5d55d9bd-0a84-40d9-8540-0ada19adf56d.png",
  },
  {
    quote:
      "Thank you for the rebrand work. The new website, logos and business cards have received excellent feedback. The mobile-enabled site with integrated CMS is a key marketing tool helping us compete. Maganti IT Resources LLC, Rocks!",
    author: "Carlos Maldonado",
    role: "C&R Yard Pro",
    avatar: "https://mitwebsiteartifacts.s3.amazonaws.com/images/events/a8617aa3-018c-4107-8a43-da43412dfcf2/testimonial/8d2d270a-b6f2-45fb-ad8f-5d6530c2e559.png",
  },
  {
    quote:
      "Maganti IT Resources did a fabulous job on my website at very reasonable fees. Throughout development, I received excellent guidance and support. They helped with my logo and advertising questions. I highly recommend them!",
    author: "Candace J. Kosinski-CPA",
    role: "Proprietor, CPA AuditPro 411",
    avatar: "https://mitwebsiteartifacts.s3.amazonaws.com/images/events/1fe339d5-99b1-49d8-adb5-a7f41cc0198e/testimonial/069877cf-712d-466f-b324-3d7a74279ee1.png",
  },
  {
    quote:
      "I met Kamran Baig by chance when assigned to replace his windshield. He and the crew at MIT RESOURCE helped transform my vision into a thriving auto glass business. Their support has been invaluable.",
    author: "Santos & The Ortega Family",
    role: "Nexus AutoGlass CT",
    avatar: "https://mitwebsiteartifacts.s3.amazonaws.com/images/events/93b5c980-814a-41d4-b396-75db216c47b1/testimonial/8005fe29-c63c-48b7-a81f-8a4d12ecae46.png",
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
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium">
              Testimonials
            </p>
          </div>
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
