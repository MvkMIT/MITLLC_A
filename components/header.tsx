"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/public/LOGO6.png"

export function Header() {
  // Controls whether the mobile dropdown menu is open.
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Fixed, translucent header that stays pinned to the top across all pages.
    <header
      className="fixed top-0 left-0 right-0 z-50 p-0"
    >
      <nav className="w-full bg-background/95 backdrop-blur-md border border-border/50 shadow-lg">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo — links back to the home page */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src={logo} alt="Maganti Group LLC" width={200} height={200} className="h-28 sm:h-36 lg:h-44 w-auto -ml-2 sm:-ml-4 lg:-ml-6 mt-2 sm:mt-3 lg:mt-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]" />
          </Link>

          {/* Desktop navigation — hidden below the md breakpoint (anchors scroll to page sections) */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Talent Solutions
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Primary call-to-action — desktop only */}
          <div className="hidden md:block">
            <Link href="#jobs">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                Get Jobs
              </Button>
            </Link>
          </div>

          {/* Hamburger toggle — shown only on mobile (md:hidden) */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation — rendered only while the menu is open; each link closes the menu on tap */}
        {isOpen && (
          <div className="md:hidden py-6 px-4 sm:px-6 border-t border-border/50 max-h-[calc(100vh-4rem)] overflow-y-auto">
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
