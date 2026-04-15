"use client"

import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-[#FDF8F1] border-t border-[#222222]">
      {/* Horizontal split layout - Newsletter left, Contact cards right */}
      <div className="flex flex-col md:flex-row">
        {/* Left - Newsletter Section */}
        <div className="flex-1 px-8 md:px-12 lg:px-16 py-12 lg:py-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#222222] uppercase tracking-tight leading-[1.1] mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Subscribe to Our
            <br />
            Fashion Newsletter
          </h2>
          
          {/* Email Input with Subscribe Button - with border styling */}
          <div className="relative max-w-xl">
            {/* Shadow layer for input */}
            <div className="absolute inset-0 bg-[#222222] translate-x-2 translate-y-2 rounded-[10px]" />
            {/* Input and button */}
            <div className="relative flex w-full">
              <input
                type="email"
                placeholder="Enter your email address ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-[#FDF8F1] border border-[#222222] border-r-0 rounded-l-[10px] text-[#222222] placeholder:text-[#222222]/50 focus:outline-none text-base"
              />
              <button className="px-8 py-4 bg-[#FF95C9] border border-[#222222] text-[#FDF8F1] font-bold uppercase tracking-wide text-sm hover:bg-[#FF95C9]/90 transition-colors whitespace-nowrap rounded-r-[10px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right - Contact Info Cards - always visible on right */}
        <div className="w-full md:w-[380px] lg:w-[420px] flex flex-col border-l border-[#222222]">
          {[
            { label: "Social Media" },
            { label: "Email Address" },
            { label: "Phone Number" },
            { label: "App Downloads" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 min-h-[80px] md:min-h-[100px] flex items-center px-6 md:px-8 border-b border-[#222222] last:border-b-0 hover:bg-[#222222]/5 transition-colors cursor-pointer"
            >
              <span 
                className="text-lg md:text-xl lg:text-[22px] font-bold uppercase tracking-[-0.02em] text-[#222222]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
