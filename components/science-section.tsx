"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Users, Clock, Award, Lightbulb } from "lucide-react"
import { ScrollBlurText } from "./scroll-blur-text"

const stats = [
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Expert Professionals" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
]

const principles = [
  {
    number: "01",
    title: "Talent Excellence",
    description:
      "We rigorously vet every candidate to ensure they possess the technical skills and cultural fit your organization needs.",
  },
  {
    number: "02",
    title: "Rapid Deployment",
    description: "Our streamlined processes enable quick team assembly, reducing time-to-productivity for your projects.",
  },
  {
    number: "03",
    title: "Partnership Approach",
    description: "We work as an extension of your team, aligning our solutions with your long-term business objectives.",
  },
]

export function ScienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            if (!hasAnimated) {
              setHasAnimated(true)
              stats.forEach((stat) => {
                animateCounter(stat.value, stat.label)
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounter = (value: string, label: string) => {
    const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ""))
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const currentValue = Math.min(Math.round(increment * currentStep), numericValue)
      setAnimatedValues((prev) => ({ ...prev, [label]: currentValue }))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)
  }

  const formatValue = (originalValue: string, animatedValue: number | undefined) => {
    if (animatedValue === undefined) return "0"

    if (originalValue.includes("%")) return `${animatedValue}%`
    if (originalValue.includes("K+")) return `${animatedValue}K+`
    if (originalValue.includes("+")) return `${animatedValue}+`
    return `${animatedValue}`
  }

  return (
    <section ref={sectionRef} id="science" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-red-500" />
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 font-medium">
              Our Approach
            </p>
          </div>
          <ScrollBlurText
            text="Excellence in every engagement"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground text-balance mb-6"
          />
          {/* Red accent line */}
          <div className="reveal opacity-0 animation-delay-200 w-12 h-0.5 bg-red-500 mx-auto mt-6" />
          <p className="reveal opacity-0 animation-delay-300 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mt-6">
            We combine industry expertise with innovative solutions to deliver measurable results for our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="reveal opacity-0 animation-delay-400 grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground mb-2">
                {formatValue(stat.value, animatedValues[stat.label])}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className={`reveal opacity-0 ${index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""}`}
            >
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-colors">
                <span className="text-sm font-medium text-primary-foreground/50 mb-4 block">{principle.number}</span>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-primary-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
