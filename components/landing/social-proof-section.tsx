const testimonials = [
  {
    quote: "I finally know what I own. No more buying duplicates or forgetting about pieces in the back of my closet.",
    author: "Sarah M.",
    role: "Fashion Enthusiast",
    avatar: "S",
  },
  {
    quote: "The outfit suggestions are surprisingly good. It's like having a personal stylist that knows my entire wardrobe.",
    author: "Jessica K.",
    role: "Working Professional",
    avatar: "J",
  },
  {
    quote: "I've saved so much money by actually wearing what I own instead of buying new things every season.",
    author: "Maya T.",
    role: "Sustainability Advocate",
    avatar: "M",
  },
]

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "1M+", label: "Outfits Created" },
  { value: "500K+", label: "Items Digitized" },
  { value: "30+", label: "Countries" },
]

export function SocialProofSection() {
  return (
    <section className="bg-[#222222] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-[#FDF8F1]/60 tracking-wider">community.</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FDF8F1] mt-4 text-balance tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Loved by Intentional Dressers
          </h2>
          <p className="mt-5 text-[#FDF8F1]/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Join people styling more with what they own. Make better wardrobe decisions by organizing what you already have.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#FFC94F]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</div>
              <div className="text-sm text-[#FDF8F1]/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FDF8F1]/5 border border-[#FDF8F1]/10 rounded-xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFC94F] rounded-full flex items-center justify-center">
                  <span className="text-[#222222] font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#FDF8F1]">{testimonial.author}</div>
                  <div className="text-xs text-[#FDF8F1]/60">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-[#FDF8F1]/75 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Pink Ornaments */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="text-[#FF95C9] text-lg">✳</span>
          <span className="text-[#FF95C9] text-lg">✳</span>
          <span className="text-[#FF95C9] text-lg">✳</span>
        </div>
      </div>
    </section>
  )
}
