"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, X, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollBlurText } from "./scroll-blur-text"

const featuredJobs = [
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Waterbury, CT",
    description: "Maganti IT Resources LLC is seeking one professional for fulltime employment (40 hours/week) for Software Developer position at Waterbury, CT 06702. We're looking for a skilled Software Developer to join our team and help build innovative solutions for our clients. You'll work on cutting-edge projects, collaborate with cross-functional teams, and contribute to the full software development lifecycle.",
    openDate: "Mar 3, 2026",
    closeDate: "Apr 5, 2026",
    featured: true,
  },
  {
    title: "Front End Developer",
    type: "Full-time",
    location: "Waterbury, CT",
    description: "Maganti IT Resources LLC is seeking one professional for a full-time position of a Front End Developer at a competitive salary. Join our team as a Front End Developer and create beautiful, responsive user interfaces for our clients. You'll transform designs into interactive web experiences, optimize performance, and ensure cross-browser compatibility.",
    openDate: "Jan 27, 2026",
    closeDate: "Feb 10, 2026",
    featured: true,
  },
]

export function JobsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedJob, setSelectedJob] = useState<typeof featuredJobs[0] | null>(null)

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
    <section ref={sectionRef} id="jobs" className="py-24 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Join Our Team
            </p>
          </div>
          <ScrollBlurText
            text="Featured Opportunities"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-8"
          />
          <p className="reveal opacity-0 animation-delay-200 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build your career with Maganti Group. We're looking for talented individuals to join our growing team.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-8" />
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredJobs.map((job, index) => (
            <div
              key={job.title}
              className={`reveal opacity-0 ${index === 1 ? "animation-delay-100" : ""} group bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Featured Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Featured
                </div>
              </div>

              <div className="relative z-10">
                {/* Job Title */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {job.title}
                </h3>

                {/* Job Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Job Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Open: {job.openDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Close: {job.closeDate}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    onClick={() => setSelectedJob(job)}
                    variant="outline" 
                    className="flex-1 rounded-xl border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  >
                    MORE DETAILS
                  </Button>
                  <Button className="flex-1 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold group">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-card rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/30 p-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-foreground">{selectedJob.title}</h2>
              <Button
                onClick={() => setSelectedJob(null)}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Company Info */}
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Company Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maganti IT Resources LLC is a technology consulting company providing innovative solutions to clients across various industries. We're committed to fostering a diverse and inclusive work environment where talented professionals can grow and thrive.
                </p>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Job Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {selectedJob.title === "Software Developer" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Bachelor's degree in Computer Science or related field</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>3+ years of experience in software development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Proficiency in modern programming languages (Java, Python, C#, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Experience with cloud platforms and microservices architecture</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Bachelor's degree in Computer Science or related field</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>2+ years of experience in front-end development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Strong knowledge of HTML, CSS, JavaScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Experience with React, Vue, or similar frameworks</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Job Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Location</span>
                  </div>
                  <p className="font-medium text-foreground">{selectedJob.location}</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Employment Type</span>
                  </div>
                  <p className="font-medium text-foreground">{selectedJob.type}</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Posted</span>
                  </div>
                  <p className="font-medium text-foreground">{selectedJob.openDate}</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Deadline</span>
                  </div>
                  <p className="font-medium text-foreground">{selectedJob.closeDate}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-card/95 backdrop-blur-sm border-t border-border/30 p-6">
              <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-4 font-semibold">
                Apply for {selectedJob.title}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
