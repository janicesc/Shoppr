"use client"

import { useState } from "react"
import { Apple, Play } from "lucide-react"

export function HeroSection() {
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
    <section className="relative bg-cream overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left Content - Cream background */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 lg:py-24 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-5 sm:mb-6 text-foreground tracking-tight uppercase">
            Stop Buying.
            <br />
            Start Styling.
          </h1>
          
          <p className="text-[15px] sm:text-base text-muted-foreground max-w-sm mb-7 sm:mb-8 leading-relaxed">
            Upload your clothes. Build outfits. Get dressed with clarity. 
            Stop buying more — start styling smarter.
          </p>

          {/* Email input and waitlist CTA */}
          <div className="relative w-full max-w-[420px]">
            <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 rounded-[10px]" />
            <form onSubmit={handleSubmit} className="relative flex w-full flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 sm:px-6 py-3.5 sm:py-4 bg-cream border border-foreground sm:border-r-0 rounded-t-[10px] sm:rounded-t-none sm:rounded-l-[10px] text-foreground placeholder:text-foreground/50 focus:outline-none text-[15px] sm:text-base"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-cream border border-foreground text-foreground font-bold uppercase tracking-wide text-sm hover:bg-pink hover:text-cream disabled:opacity-70 disabled:cursor-not-allowed transition-colors whitespace-nowrap rounded-b-[10px] sm:rounded-b-none sm:rounded-r-[10px]"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          </div>
          {showSuccess && (
            <p className="mt-4 text-sm font-medium text-teal">
              You&apos;re in. Get ready to style smarter.
            </p>
          )}
          {errorMessage && <p className="mt-4 text-sm font-medium text-[#c0392b]">{errorMessage}</p>}

          {/* App Store buttons */}
          <div className="flex flex-wrap gap-3 mt-7 sm:mt-8">
            <button className="flex items-center gap-2 bg-foreground text-cream px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors">
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-80">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-2 bg-foreground text-cream px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors">
              <Play className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-80">Get it on</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Pink background with phone mockup */}
        <div className="relative bg-pink min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Yellow blob shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow/60 rounded-full" />
          
          {/* Phone Frame with Video - Border style */}
          <div className="relative z-10">
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-foreground rounded-[2rem] translate-x-2 translate-y-2" />
            {/* Phone frame */}
            <div className="relative w-52 sm:w-64 h-[430px] sm:h-[520px] rounded-[2rem] overflow-hidden border-2 border-foreground">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shoppr_HeroVideo-qOtDIQovznY8HbypTpdFXIsBfaBu6H.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
          </div>

          {/* Floating notification card - top left */}
          <div className="absolute left-4 lg:left-8 top-16 bg-white rounded-xl shadow-xl p-3 hidden md:block z-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-pink/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">+</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Outfit Ready</div>
                <div className="text-[10px] text-muted-foreground">Date night look saved!</div>
              </div>
            </div>
          </div>

          {/* Stats badge - bottom right */}
          <div className="absolute right-4 lg:right-8 bottom-1/4 bg-yellow rounded-xl shadow-lg px-4 py-2 hidden md:block z-20">
            <div className="text-sm font-bold text-foreground">+247 items</div>
            <div className="text-xs text-foreground/70">in your closet</div>
          </div>
        </div>
      </div>
    </section>
  )
}
