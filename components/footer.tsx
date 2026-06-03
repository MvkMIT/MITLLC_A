import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import logo from "@/public/MG.png"

const footerLinks = {
  produits: [
    { label: "Contract Staffing", href: "#mission" },
    { label: "Contract-to-Hire", href: "#mission" },
    { label: "Direct Hire and Permanent Placement", href: "#mission" },
    { label: "Project-Based Teams", href: "#mission" },
    { label: "Enterprise Technology Staffing", href: "#mission" },
    { label: "Embedded Global Teams", href: "#mission" },
    { label: "Leadership and Executive Hiring", href: "#mission" },
  ],
  entreprise: [
    { label: "About Us", href: "#about" },
    { label: "Leadership", href: "#leadership" },
    { label: "Careers", href: "#jobs" },
    { label: "Contact", href: "#contact" },
  ],
  ressources: [
    { label: "Industries", href: "#industries" },
    { label: "Technologies", href: "#science" },
    { label: "Testimonials", href: "#temoignages" },
    { label: "Open Positions", href: "#jobs" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src={logo} alt="Maganti Group logo" width={40} height={40} className="h-10 w-auto" />
              <span className="font-serif text-xl font-medium text-background">Maganti Group</span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm text-sm sm:text-base">
              Empowering businesses worldwide through innovative technology solutions and strategic{" "}
              <Link
                href="https://mitresource.com/services/custom-software-development-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/90"
              >
                IT services
              </Link>
              .
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">hr@magantigroupllc.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (203)-490-0100</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>21 State Street, Waterbury, CT 06702</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <p className="text-xs sm:text-sm text-background/50 leading-relaxed">
            © Copyright 2026 All Rights Reserved. The Maganti Group is proud to be an Equal Opportunities / Affirmative Action Employer.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-background/50">
              <Link href="#" className="hover:text-background transition-colors">
                Terms of Use
              </Link>
              <span className="text-background/30 hidden sm:inline">|</span>
              <Link href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/company/maganti-group-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
