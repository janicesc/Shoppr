import { Upload, Wand2, SlidersHorizontal, Eye, Calendar } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Upload,
    title: "Digitize Your Closet",
    description: "Upload your clothes and see everything in one place. Know exactly what you own.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%283%29-mL4oCUXUfQCDD0usJWcJnrPm8riNi7.png",
    color: "bg-teal/10",
    type: "single",
  },
  {
    icon: Wand2,
    title: "Generate Outfit Combinations",
    description: "Turn individual pieces into complete outfits with AI-powered suggestions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GenerateOutfitCombinations-r0RX5t3d3UY0jVwAt9B2XInXYRBnFO.png",
    color: "bg-yellow/20",
    type: "single",
  },
  {
    icon: SlidersHorizontal,
    title: "Filter by Context",
    description: "Style for weather, occasion, and location. Get recommendations that make sense.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FilterbyContext-Yu3xkrV2YRg4Ye7RJxy3vDHhFNx7ms.png",
    color: "bg-pink/10",
    type: "single",
  },
  {
    icon: Eye,
    title: "Discover What You're Not Wearing",
    description: "Surface underused pieces in your wardrobe and maximize your cost-per-wear.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4uhEGuteinZFSM7WXhEaGaX0rrDUIl.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oDVxb7ew4OznfEi1gFElZxtXfSAL0s.png",
    ],
    color: "bg-cream-dark",
    type: "double",
  },
  {
    icon: Calendar,
    title: "Plan Ahead",
    description: "Save outfits for upcoming days or events. Never scramble to get dressed again.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PlanAhead-ayo8WPlP2E5phpFq7XpozJHNqASi37.png",
    color: "bg-teal/10",
    type: "single",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-cream border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">features.</span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4 text-balance uppercase tracking-tight">
            What You Can Do
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="flex-1 lg:max-w-md">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4 uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Phone Mockup(s) */}
              <div className="flex-1 flex justify-center">
                {feature.type === "double" && feature.images ? (
                  <div className="flex gap-4 items-end">
                    {/* Left Phone - Style Stats */}
                    <div className="w-44 sm:w-52 rounded-[1.5rem] overflow-hidden shadow-xl">
                      <Image
                        src={feature.images[0]}
                        alt="Style stats screen"
                        width={280}
                        height={580}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    {/* Right Phone - Cost per Wear */}
                    <div className="w-44 sm:w-52 rounded-[1.5rem] overflow-hidden shadow-xl">
                      <Image
                        src={feature.images[1]}
                        alt="Cost per wear screen"
                        width={280}
                        height={580}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-[280px] sm:max-w-[320px] rounded-[2rem] overflow-hidden shadow-xl">
                    <Image
                      src={feature.image as string}
                      alt={feature.title}
                      width={320}
                      height={640}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
