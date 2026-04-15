"use client"

import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedEmail = email.trim()
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setShowSuccess(false)
      setErrorMessage("Please enter a valid email address.")
      return
    }

    try {
      setIsSubmitting(true)
      setErrorMessage("")
      setShowSuccess(false)

      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      const result = (await response.json()) as { ok?: boolean; error?: string }
      if (!response.ok || !result.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.")
        return
      }

      setShowSuccess(true)
      setEmail("")
    } catch {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <form onSubmit={handleSubmit} className="relative flex w-full">
              <input
                type="email"
                placeholder="Enter your email address ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-[#FDF8F1] border border-[#222222] border-r-0 rounded-l-[10px] text-[#222222] placeholder:text-[#222222]/50 focus:outline-none text-base"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#FF95C9] border border-[#222222] text-[#FDF8F1] font-bold uppercase tracking-wide text-sm hover:bg-teal disabled:opacity-70 disabled:cursor-not-allowed transition-colors whitespace-nowrap rounded-r-[10px]"
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          </div>
          {showSuccess && (
            <p className="mt-4 text-sm font-medium text-[#2d5a50]">
              You&apos;re in. Get ready to style smarter.
            </p>
          )}
          {errorMessage && <p className="mt-4 text-sm font-medium text-[#c0392b]">{errorMessage}</p>}
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
