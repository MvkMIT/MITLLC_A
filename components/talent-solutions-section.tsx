"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const technologies = [
  { name: "HTML5", color: "#E34F26" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Angular", color: "#DD0031" },
  { name: "React", color: "#61DAFB" },
  { name: "Java", color: "#007396" },
  { name: "Spring", color: "#6DB33F" },
  { name: ".NET", color: "#512BD4" },
  { name: "Python", color: "#3776AB" },
  { name: "Docker", color: "#2496ED" },
  { name: "Oracle", color: "#F80000" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Hadoop", color: "#66CCFF" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "SAP", color: "#0FAAFF" },
  { name: "AWS", color: "#FF9900" },
  { name: "Azure", color: "#0078D4" },
]

export function TalentSolutionsSection() {
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="talent"
      className="py-24 lg:py-32 bg-foreground relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollBlurText
            text="Talent Solutions"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-lg text-background/80 max-w-2xl mx-auto">
            Maganti Group Brings Talent To Transform Your Business With Technology Innovations.
          </p>
          {/* Red accent line */}
          <div className="reveal opacity-0 animation-delay-300 w-12 h-0.5 bg-red-500 mx-auto mt-6" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Reach Us For Talent */}
          <div className="reveal opacity-0 relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Business handshake"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
            <div className="relative p-8 lg:p-10 h-full flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-background/70 font-medium mb-4">
                Reach Us For Talent
              </p>
              <p className="text-background text-lg leading-relaxed mb-6">
                We Understand Your Business Need For Diversified Talent To Realize Your Vision. Reach Us For Highly Skilled Talent For Realistic Solutions
              </p>
              <Button 
                variant="outline" 
                className="w-fit bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground rounded-full px-6"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Technology Expertise */}
          <div className="reveal opacity-0 animation-delay-200 bg-background rounded-2xl p-6 lg:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium mb-6">
              Technology Expertise
            </p>
            
            {/* Tech Grid */}
            <div className="grid grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`reveal opacity-0 ${index < 6 ? "animation-delay-100" : index < 12 ? "animation-delay-200" : "animation-delay-300"} aspect-square rounded-lg border border-border/50 flex items-center justify-center p-2 hover:border-primary/50 hover:shadow-md transition-all duration-300 group`}
                >
                  <div 
                    className="text-xs font-semibold text-center group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
