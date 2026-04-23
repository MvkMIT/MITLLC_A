"use client"

import { useEffect, useRef } from "react"
import { Banknote, MonitorPlay, Users, ShoppingBag, Truck, Fuel, Factory } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const industries = [
  {
    number: "01",
    icon: Banknote,
    title: "Banking & Financial Services",
  },
  {
    number: "02",
    icon: MonitorPlay,
    title: "Media & Technology",
  },
  {
    number: "03",
    icon: Users,
    title: "Public Services",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Retail",
  },
  {
    number: "05",
    icon: Truck,
    title: "Transportation & Hospitality",
  },
  {
    number: "06",
    icon: Fuel,
    title: "Energy & Utilities",
  },
]

export function IndustriesSection() {
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
    <section
      ref={sectionRef}
      id="industries"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Factory className="w-5 h-5 text-red-500" />
            <p className="text-xs uppercase tracking-[0.3em] text-background/60 font-medium">
              Industries We Serve
            </p>
          </div>
          <ScrollBlurText
            text="Solutions designed for you"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-lg text-background/80 max-w-2xl mx-auto">
            Comprehensive IT consulting and staffing services tailored to drive your business forward.
          </p>
          {/* Red accent line */}
          <div className="reveal opacity-0 animation-delay-300 w-12 h-0.5 bg-red-500 mx-auto mt-6" />
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.number}
              className={`reveal opacity-0 ${index === 0 ? "" : index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : index === 3 ? "animation-delay-300" : index === 4 ? "animation-delay-400" : "animation-delay-500"} relative group`}
            >
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 relative overflow-hidden border border-background/20 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-medium text-foreground text-sm">
                  {industry.title}
                </h3>

                {/* Background Number */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl font-bold text-muted/20 select-none group-hover:text-primary/10 transition-colors">
                  {industry.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
