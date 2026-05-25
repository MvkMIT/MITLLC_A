"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
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
    description: "Need a specialist for 3 months? A team for a product launch? Contract staffing gives you access to pre-vetted IT professionals who can start quickly, without the overhead of permanent employment. We handle onboarding, payroll, compliance, and performance management, so you stay focused on delivery."
  },
  {
    title: "Contract-to-Hire",
    description: "Start with a contract engagement. Evaluate the candidate's skills, work ethic, and cultural fit in a real environment, then convert to permanent employment when you're confident. This model eliminates hiring risk for roles that matter most."
  },
  {
    title: "Direct / Permanent Placement",
    description: "For roles that define your business, our retained and contingency search capabilities connect you with candidates who aren't applying to job boards, because the best talent rarely is. We run comprehensive searches, handle reference verification, and manage the full offer process."
  },
  {
    title: "RPO (Recruitment Process Outsourcing)",
    description: "Hand us your entire hiring function, or just the parts you want to improve. Our RPO model embeds Maganti Group LLC recruiters within your organization, operating as a fully integrated talent acquisition team aligned to your processes, culture, and hiring KPIs."
  },
  {
    title: "Enterprise Staffing",
    description: "Maganti Group LLC maintains India's deepest bench of certified SAP professionals from Basis and ABAP to FI/CO, MM, SD, and SuccessFactors. Whether you're running a large-scale SAP S/4HANA migration or need ongoing AMS support, we have the specialists who've done it before."
  },
  {
    title: "Staff Augmentation",
    description: "Plug skilled professionals directly into your existing team without changing your structure. Our staff augmentation model gives your teams the bandwidth they need for product development, cloud migrations, QA, data engineering, or cybersecurity, without the cost and delay of permanent hiring."
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
          <div className="mb-12">
            <div className="reveal opacity-0 flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-red-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-background/60 font-medium">
                Talent Solutions
              </p>
            </div>
            <ScrollBlurText
              text="Transforming Businesses Through Technology"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background text-balance mb-6"
            />
            {/* Red accent line */}
            <div className="reveal opacity-0 animation-delay-200 w-12 h-0.5 bg-red-500 mb-8" />
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="reveal opacity-0 p-6 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20 h-full">
                    <h3 className="text-xl font-semibold text-background mb-4">{service.title}</h3>
                    <p className="text-background/80 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
