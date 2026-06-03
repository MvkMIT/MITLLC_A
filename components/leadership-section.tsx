"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Users, Linkedin } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import prasadImage from "@/public/leadership/prasad_ceo.png"
import sushmaImage from "@/public/leadership/Sushma.jpg"
import gitaImage from "@/public/leadership/Gita_Madam.jpg"
import saiImage from "@/public/leadership/sai.jpg"
import pavanImage from "@/public/leadership/pavan.jpg"

// Leadership team data. Add/remove/reorder entries here to update the grid —
// images are imported above and the cards render from this array in order.
const leadershipTeam = [
  {
    name: "Prasad Maganti",
    role: "Founder and CEO",
    image: prasadImage,
    description: "Founder and Entrepreneur with over 35 years of experience in the IT industry, Prasad is an accomplished leader with domestic and international experience in operations, P&L oversight, product development, and marketing involving start-ups, mid-sized businesses, and growth organizations.",
    linkedin: "https://www.linkedin.com/in/prasadmaganti/",
  },
  {
    name: "Sushma Maganti",
    role: "Co-Founder and CTO",
    image: sushmaImage,
    description: "Over 24 years experience as a demonstrated leader, and in-depth technology expertise - Sushma strives to sustain a culture of diversity and inclusion. Has a proven track record to deliver intelligent, innovative, cost-effective & secure infrastructure applications to global businesses.",
    linkedin: "https://www.linkedin.com/in/sushmamaganti/",
  },
  {
    name: "Gita Poudel",
    role: "Director of Human Capital/Compliance",
    image: gitaImage,
    description: "Dedicated, self-motivated, and experienced Human Resource professional with an extensive background in employment and immigration laws. With over 17 years of experience, Gita proactively develops HR strategies to meet short and long-term business needs and manages strategies from conception to implementation by identifying areas of growth.",
    linkedin: "https://www.linkedin.com/in/gita-p-7558aa64/",
  },
  {
    name: "Venkata Sainath",
    role: "Director&Business Initiatives",
    image: saiImage,
    description: "A demonstrated leader with years of experience in the IT sector, possessing valuable insights, keen analysis, and a team approach to implementing best practices to achieve business excellence. Adept in modules involving design and implementation, developing applications through lifecycles.",
    linkedin: "https://www.linkedin.com/in/venkata-sainath-kadiyala-a3544aaa/",
  },
  {
    name: "Pavan Kumar GN",
    role: "Sr. Account Manager",
    image: pavanImage,
    description: "Client relationship specialist focused on understanding business needs and delivering tailored solutions.",
    linkedin: "https://www.linkedin.com/in/pavan-kumar-gurram/",
  },
]

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Reveal-on-scroll: fade elements marked `.reveal` into view once they enter the viewport.
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
    <section ref={sectionRef} id="leadership" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Our Team
            </p>
          </div>
          <ScrollBlurText
            text="Leadership"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries guiding Maganti Group
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Responsive card grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leadershipTeam.map((leader, index) => (
            // `index` staggers the reveal animation so cards fade in one after another.
            <div
              key={leader.name}
              className={`reveal opacity-0 ${index === 0 ? "" : index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : index === 3 ? "animation-delay-300" : "animation-delay-400"} group bg-gradient-to-br from-card via-card to-secondary/5 rounded-3xl overflow-hidden border border-border/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 relative`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              </div>

              {/* Photo Section with Circular Avatar */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-muted flex items-center justify-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* LinkedIn Button - Top Right Corner */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 bg-background/90 backdrop-blur-sm rounded-full shadow-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label={`${leader.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 text-center relative z-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                  {leader.role}
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4 opacity-60" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {leader.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
