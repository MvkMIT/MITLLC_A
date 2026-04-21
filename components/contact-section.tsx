"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, User, Building2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollBlurText } from "./scroll-blur-text"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hr@magantigroupllc.com",
    href: "mailto:hr@magantigroupllc.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (203)-490-0100",
    href: "tel:+12034900100",
  },
  {
    icon: MapPin,
    title: "Locate Us",
    value: "21 State Street, Waterbury, CT 06702",
    href: "https://maps.google.com/?q=21+State+Street,+Waterbury,+CT+06702",
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
            Get in Touch
          </p>
          <ScrollBlurText
            text="Find Us"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Maganti Group, LLC strive to support communities
          </p>
          {/* Gradient accent line */}
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className={`reveal opacity-0 ${index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : ""}`}
              >
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <a
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="leading-relaxed">{item.value}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Middle: Contact Form */}
          <div className="reveal opacity-0 animation-delay-300 lg:col-span-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Enter user name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-lg"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter an email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-lg"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-lg"
                />
              </div>

              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-lg"
                />
              </div>

              <Textarea
                placeholder="Enter message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px] bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-lg resize-none"
              />

              <Button
                type="submit"
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 font-medium"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="reveal opacity-0 animation-delay-400 lg:col-span-4">
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-73.0413!3d41.5584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7c4c6e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2s21+State+St%2C+Waterbury%2C+CT+06702!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Location Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
