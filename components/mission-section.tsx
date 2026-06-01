"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import techSoftwaresBg from "@/public/TECH_SOFTWARES.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const services = [
  {
    title: "Contract Staffing",
    description: "Access skilled technology professionals quickly when timelines are tight or internal capacity is limited. Fill urgent skill gaps without the overhead of permanent hiring. Keep delivery moving while Maganti IT manages the staffing process."
  },
  {
    title: "Contract-to-Hire",
    description: "Evaluate talent in a real work environment before making a permanent hiring decision. Reduce hiring risk by assessing skills, reliability, communication, and cultural fit on the job. Move to full-time employment with greater confidence when the fit is right."
  },
  {
    title: "Direct Hire and Permanent Placement",
    description: "Secure long-term technology talent for roles that are critical to growth and stability. Save recruiting time by connecting with qualified professionals who match your technical and business needs. Build stronger teams with candidates aligned to your goals and culture."
  },
  {
    title: "Project-Based Teams",
    description: "Scale delivery without building every capability internally. Get the right mix of developers, engineers, analysts, project managers, and technology specialists for your project. Accelerate timelines while maintaining flexibility and control."
  },
  {
    title: "Enterprise Technology Staffing",
    description: "Find professionals who understand complex systems, large-scale environments, and mission-critical operations. Access talent across enterprise applications, cloud, data, cybersecurity, infrastructure, ERP, and digital transformation. Modernize platforms, improve system performance, and support business growth with the right expertise."
  },
  {
    title: "Embedded Global Teams",
    description: "Expand capacity with dedicated professionals who work as an extension of your internal workforce. Improve delivery speed and support ongoing technology needs while managing costs effectively. Keep collaboration consistent with teams aligned to your workflows, tools, and goals."
  },
  {
    title: "Leadership and Executive Hiring",
    description: "Find senior technology leaders who can guide transformation, growth, and long-term strategy. Strengthen decision-making with leaders who connect technology priorities to business outcomes. Build technology functions that support execution, innovation, and measurable results."
  }
]

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
    <section ref={sectionRef} id="mission" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="relative max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={techSoftwaresBg.src} alt="Technology background" className="w-full h-full object-cover" />

          {/* Black shade for text readability — covers full width on mobile, left 2/3 on desktop */}
          <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-2/3 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
          <div className="mb-10 sm:mb-12">
            <div className="reveal opacity-0 flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-red-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-background/60 font-medium">
                Talent Solutions
              </p>
            </div>
            <ScrollBlurText
              text="Transforming Businesses Through Technology"
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-background text-balance mb-6"
            />
            {/* Red accent line */}
            <div className="reveal opacity-0 animation-delay-200 w-12 h-0.5 bg-red-500 mb-6 sm:mb-8" />
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="reveal opacity-0 p-4 sm:p-5 md:p-6 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20 h-full">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-background mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-background/80 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="static md:absolute left-0 md:-left-12" />
            <CarouselNext className="static md:absolute right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
