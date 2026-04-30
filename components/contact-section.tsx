"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, User, Building2, Send, MessageCircle, Globe, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollBlurText } from "./scroll-blur-text"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hr@magantigroupllc.com",
    href: "mailto:hr@magantigroupllc.com",
    description: "Get in touch with our team",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (203) 490-0100",
    href: "tel:+12034900100",
    description: "Mon-Fri 9AM-6PM EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "21 State Street, Waterbury, CT 06702",
    href: "https://maps.google.com/?q=21+State+Street,+Waterbury,+CT+06702",
    description: "Visit our headquarters",
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
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error("Failed to send message")
      }
      
      toast.success("Message sent successfully! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-6">
            <MessageCircle className="w-6 h-6 text-primary" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Connect With Us
            </p>
          </div>
          <ScrollBlurText
            text="Let's Start a Conversation"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-8"
          />
          <p className="reveal opacity-0 animation-delay-200 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help you transform your business with innovative technology solutions. Reach out to our team today.
          </p>
          <div className="reveal opacity-0 animation-delay-300 flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" />
              <span>Global Support</span>
            </div>
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className={`reveal opacity-0 ${index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : ""} group block p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Middle: Enhanced Contact Form */}
          <div className="reveal opacity-0 animation-delay-300">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-12 text-base"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-12 text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-12 text-base"
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-12 text-base"
                    />
                  </div>
                </div>

                <Textarea
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl text-base resize-none leading-relaxed"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-4 font-semibold text-base flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Right: Enhanced Map */}
          <div className="reveal opacity-0 animation-delay-400">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/30 shadow-xl">
              <div className="p-6 border-b border-border/20">
                <h3 className="font-serif text-xl font-bold text-foreground">Visit Our Office</h3>
                <p className="text-sm text-muted-foreground mt-1">Waterbury, Connecticut</p>
              </div>
              <div className="relative h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-73.0413!3d41.5584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7c4c6e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2s21+State+St%2C+Waterbury%2C+CT+06702!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                {/* Enhanced Location Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
                    <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-t from-primary/5 to-transparent">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>21 State Street, Waterbury, CT 06702</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
