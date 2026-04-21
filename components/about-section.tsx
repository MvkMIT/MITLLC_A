"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const leadershipTeam = [
  {
    name: "Prasad Maganti",
    role: "Founder and CEO",
    image: "/leadership/prasad_ceo.png",
  },
  {
    name: "Sushma Maganti",
    role: "Co-Founder and CTO",
    image: "/leadership/Sushma.jpg",
  },
  {
    name: "Gita Poudel",
    role: "Director of Human Capital/Compliance",
    image: "/leadership/Gita.jpg",
  },
  {
    name: "Venkata Sainath",
    role: "Director of Operations",
    image: "/leadership/sai.jpg",
  },
  {
    name: "Pavan Kumar GN",
    role: "Sr. Account Manager",
    image: "/leadership/pavan.jpg",
  },
]

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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Story Section */}
          <div>
            <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4 text-center lg:text-left">
              Story
            </p>
            <h2 className="reveal opacity-0 animation-delay-200 font-serif text-2xl md:text-3xl font-medium text-foreground text-balance mb-8 text-center lg:text-left">
              Surpassing our client&apos;s expectation since 2014!
            </h2>
            <div className="reveal opacity-0 animation-delay-400 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Maganti Group, LLC is a best in class technology consulting service provider 
                serving clients with end-to-end talent solutions. We provide innovative solutions to 
                our clients with our quality standards and transparent business model. Our 
                headquarter is based in Connecticut, USA with major technology hubs established 
                in India. We deliver custom and platform-based solutions to large and midsized 
                companies in the financial, healthcare, banking, retail, telecom and other 
                industries.
              </p>
              <p className="text-foreground font-medium">
                We believe that putting our Values into practice creates 
                long-term benefits for shareholders, customers, employees, 
                suppliers, and the communities we serve.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <div>
            <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-8 text-center">
              Leadership
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {leadershipTeam.map((leader, index) => (
                <div
                  key={leader.name}
                  className={`reveal opacity-0 ${index === 0 ? "" : index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : index === 3 ? "animation-delay-300" : "animation-delay-400"} group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {leader.role}
                      </p>
                    </div>
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
