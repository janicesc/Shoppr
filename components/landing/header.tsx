"use client"

import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-foreground/10">
      <div className="flex items-center h-14 sm:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center px-4 sm:px-6 h-full border-r border-foreground/10">
          <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground uppercase">Shoppr</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 px-8 h-full border-r border-foreground/10 flex-1">
          <Link href="#features" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors uppercase tracking-wide">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors uppercase tracking-wide">
            How It Works
          </Link>
          <Link href="#about" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors uppercase tracking-wide">
            About
          </Link>
          <Link href="#faq" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors uppercase tracking-wide">
            FAQ
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center ml-auto">
          <button className="h-16 w-16 flex items-center justify-center border-l border-foreground/10 hover:bg-foreground/5 transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          <Button className="h-16 px-8 rounded-none bg-foreground text-cream hover:bg-foreground/90 font-semibold uppercase tracking-wide">
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-4 py-3 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t border-foreground/10 bg-cream">
          <nav className="flex flex-col gap-4">
            <Link href="#features" onClick={closeMobileMenu} className="text-sm font-medium text-foreground uppercase tracking-wide">
              Features
            </Link>
            <Link href="#how-it-works" onClick={closeMobileMenu} className="text-sm font-medium text-foreground uppercase tracking-wide">
              How It Works
            </Link>
            <Link href="#about" onClick={closeMobileMenu} className="text-sm font-medium text-foreground uppercase tracking-wide">
              About
            </Link>
            <Link href="#faq" onClick={closeMobileMenu} className="text-sm font-medium text-foreground uppercase tracking-wide">
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-foreground/10">
              <Button className="bg-foreground text-cream hover:bg-foreground/90 font-semibold uppercase tracking-wide">
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
