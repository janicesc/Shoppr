import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { ValuesMarquee } from "@/components/landing/values-marquee"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { AboutSection } from "@/components/landing/about-section"
import { FeaturedSection } from "@/components/landing/featured-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-teal relative overflow-hidden">
      {/* Diagonal lighter green accent in top-right corner */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-[50%] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.08) 100%)"
        }}
      />
      {/* Teal outer container with padding */}
      <div className="relative p-2 sm:p-4 md:p-6 lg:p-8">
        {/* Cream inner content container */}
        <main className="bg-cream rounded-none md:rounded-lg overflow-hidden shadow-2xl">
          <Header />
          <HeroSection />
          <ProblemSection />
          <ValuesMarquee />
          <FeaturesSection />
          <HowItWorksSection />
          <AboutSection />
          <FeaturedSection />
          <SocialProofSection />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  )
}
