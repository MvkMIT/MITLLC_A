import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  produits: [
    { label: "Talent Acquisition", href: "#" },
    { label: "Staff Augmentation", href: "#" },
    { label: "Consulting", href: "#" },
    { label: "All Services", href: "#" },
  ],
  entreprise: [
    { label: "About Us", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  ressources: [
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Press", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                <span className="text-foreground font-serif text-sm font-medium">M</span>
              </div>
              <span className="font-serif text-xl font-medium text-background">Maganti Group</span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Empowering businesses worldwide through innovative technology solutions and strategic IT services.
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hr@magantigroupllc.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (203)-490-0100</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
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
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2024 Maganti Group. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              Legal notice
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of sale
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
