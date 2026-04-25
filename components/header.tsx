"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 p-0 transition-transform duration-300 ease-in-out"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <nav className="w-full bg-background/95 backdrop-blur-md border border-border/50 shadow-lg">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/LOGO4.png" alt="Maganti Group LLC" width={200} height={200} className="h-40 w-auto -ml-6 mt-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]" /> */}
            <Image src="/LOGO6.png" alt="Maganti Group LLC" width={200} height={200} className="h-45 w-auto -ml-6 mt-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]" /> 
            {/* <Image src="/LOGO5.png" alt="Maganti Group LLC" width={200} height={200} className="h-27 w-auto -ml-6 mt-0 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]" /> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            {/* <Link href="#leadership" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Leadership
            </Link> */}
            <Link href="#mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Talent Solutions
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#jobs">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                Get Jobs
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 px-6 lg:px-8 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link
                href="#industries"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="#about"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {/* <Link
                href="#leadership"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Leadership
              </Link> */}
              <Link
                href="#mission"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Talent Solutions
              </Link>
              <Link
                href="#contact"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link href="#jobs" onClick={() => setIsOpen(false)}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-4">
                  Get Jobs
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
