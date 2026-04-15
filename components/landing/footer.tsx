"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// Footer component - link columns and brand section
const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "#" },
    { label: "Women Style", href: "#" },
    { label: "Men Style", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "Collection", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#" },
    { label: "Career", href: "#" },
    { label: "Collaboration", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Return Policy", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Condition", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#222222]">
      <div className="grid lg:grid-cols-[1fr,400px]">
        {/* Left - Footer Links (Dark charcoal) */}
        <div className="bg-[#222222] px-8 md:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#FDF8F1] mb-5">Shop</h4>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#FDF8F1]/75 hover:text-[#FDF8F1] text-sm uppercase transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#FDF8F1] mb-5">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#FDF8F1]/75 hover:text-[#FDF8F1] text-sm uppercase transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#FDF8F1] mb-5">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#FDF8F1]/75 hover:text-[#FDF8F1] text-sm uppercase transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Teal Brand Section */}
        <div className="bg-[#3A8165] border-l border-[#222222] px-12 py-12 hidden lg:flex flex-col items-center justify-center">
          {/* Asterisk Icon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-6">
            <path d="M32 0L34.5 26.5L56 8L37.5 29.5L64 32L37.5 34.5L56 56L34.5 37.5L32 64L29.5 37.5L8 56L26.5 34.5L0 32L26.5 29.5L8 8L29.5 26.5L32 0Z" fill="#FFC94F"/>
          </svg>
          
          {/* Brand Name */}
          <span 
            className="text-4xl font-bold text-[#FDF8F1] uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Shoppr
          </span>

          {/* Back to Top */}
          <Link 
            href="#top"
            className="flex items-center gap-2 text-[#FDF8F1] hover:text-[#FDF8F1]/80 text-xl font-bold transition-colors cursor-pointer border-b border-[#FDF8F1] pb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Back to Top
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
