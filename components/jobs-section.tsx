"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, X, Calendar, Users, Upload, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollBlurText } from "./scroll-blur-text"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const featuredJobs = [
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Waterbury, CT",
    description: "Maganti IT Resources LLC is seeking one professional for fulltime employment for Software Developer position at Waterbury, CT 06702. We're looking for a skilled Software Developer to join our team and help build innovative solutions for our clients. You'll work on cutting-edge projects, collaborate with cross-functional teams, and contribute to the full software development lifecycle.",
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
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)

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

  const handleApplyNow = (job: typeof featuredJobs[0]) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
    setApplicationSubmitted(false)
    setFormData({ name: "", email: "", phone: "", coverLetter: "" })
    setResumeFile(null)
  }

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedJob) return

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("jobTitle", selectedJob.title)
      formDataToSend.append("jobLocation", selectedJob.location)
      formDataToSend.append("jobType", selectedJob.type)
      formDataToSend.append("coverLetter", formData.coverLetter)
      if (resumeFile) {
        formDataToSend.append("resume", resumeFile)
      }

      const response = await fetch("/api/jobs", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setApplicationSubmitted(true)
      } else {
        console.error("Failed to submit application")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="jobs" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Join Our Team
            </p>
          </div>
          <ScrollBlurText
            text="Featured Opportunities"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6 sm:mb-8"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build your career with Maganti Group. We're looking for talented individuals to join our growing team.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 sm:mt-8" />
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {featuredJobs.map((job, index) => (
            <div
              key={job.title}
              className={`reveal opacity-0 ${index === 1 ? "animation-delay-100" : ""} group bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Featured Badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <div className="px-2.5 sm:px-3 py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                  Featured
                </div>
              </div>

              <div className="relative z-10">
                {/* Job Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 pr-20 group-hover:text-primary transition-colors duration-300">
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
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    onClick={() => setSelectedJob(job)}
                    variant="outline"
                    className="flex-1 rounded-xl border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  >
                    MORE DETAILS
                  </Button>
                  <Button
                    onClick={() => handleApplyNow(job)}
                    className="flex-1 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold group"
                  >
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-card rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto animate-scale-in [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/50 [&::-webkit-scrollbar-track]:bg-muted/100">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/30 p-4 sm:p-6 flex items-center justify-between gap-3">
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-foreground line-clamp-2">
                {showApplicationForm ? `Apply for ${selectedJob.title}` : selectedJob.title}
              </h2>
              <Button
                onClick={() => {
                  setSelectedJob(null)
                  setShowApplicationForm(false)
                  setApplicationSubmitted(false)
                }}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 space-y-6">
              {applicationSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Application Submitted!</h3>
                  <p className="text-muted-foreground mb-8">Thank you for your interest in joining Maganti Group, LLC. We have received your application and will review it shortly.</p>
                  <Button
                    onClick={() => {
                      setSelectedJob(null)
                      setShowApplicationForm(false)
                      setApplicationSubmitted(false)
                    }}
                    className="rounded-xl"
                  >
                    Close
                  </Button>
                </div>
              ) : showApplicationForm ? (
                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="resume">Resume *</Label>
                      <div className="mt-2">
                        <Input
                          id="resume"
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                          className="cursor-pointer"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="mt-2 min-h-[100px]"
                        placeholder="Tell us why you're interested in this position..."
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 rounded-xl"
                    >
                      Back to Job Details
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 rounded-xl bg-primary hover:bg-primary/90"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              ) : (
                <>
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

                  <Button
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold group"
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
