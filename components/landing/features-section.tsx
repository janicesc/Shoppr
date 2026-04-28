import { Upload, Wand2, SlidersHorizontal, Eye, Calendar } from "lucide-react"
import Image from "next/image"

/**
 * Most rows: shadow on the image so it follows the device outline (avoids cream “rings” from clips).
 * “Discover…” pair only: previous rounded box + box-shadow (see `phoneDiscoverFrame`).
 */
const phoneShade =
  "block h-auto w-full max-w-none select-none [filter:drop-shadow(3px_4px_0_rgba(26,26,26,0.04))_drop-shadow(6px_10px_20px_rgba(26,26,26,0.11))_drop-shadow(10px_18px_32px_-6px_rgba(26,26,26,0.08))]"
const phoneShellSingle = "max-w-[200px] sm:max-w-[260px] w-full"
/** Feature 2 mockup: scaled up to sit visually in line with other feature phones */
const phoneShellFeature2 = "max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] w-full"
const phonePlainImg = "block h-auto w-full select-none"
const phoneDiscoverFrame =
  "w-[8.25rem] sm:w-52 overflow-hidden rounded-2xl shadow-[5px_8px_18px_-2px_rgba(26,26,26,0.09),2px_4px_10px_rgba(26,26,26,0.045)]"

const features = [
  {
    icon: Upload,
    title: "Digitize Your Closet",
    description: "Upload your clothes and see everything in one place. Know exactly what you own.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%283%29-mL4oCUXUfQCDD0usJWcJnrPm8riNi7.png",
    color: "bg-teal/10",
    /** Matches Sound Familiar? icon strokes (paste on pastel tile) */
    iconColor: "text-teal",
    type: "single",
  },
  {
    icon: Wand2,
    title: "Generate Outfit Combinations",
    description: "Turn individual pieces into complete outfits with AI-powered suggestions.",
    image: "/images/landing/feature-2-generate-outfit-combinations.png",
    color: "bg-yellow/20",
    iconColor: "text-yellow",
    type: "single",
  },
  {
    icon: SlidersHorizontal,
    title: "Filter by Context",
    description: "Style for weather, occasion, and location. Get recommendations that make sense.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FilterbyContext-Yu3xkrV2YRg4Ye7RJxy3vDHhFNx7ms.png",
    color: "bg-pink/10",
    iconColor: "text-pink",
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
    iconColor: "text-foreground",
    type: "double",
  },
  {
    icon: Calendar,
    title: "Plan Ahead",
    description: "Save outfits for upcoming days or events. Never scramble to get dressed again.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PlanAhead-ayo8WPlP2E5phpFq7XpozJHNqASi37.png",
    color: "bg-teal/10",
    iconColor: "text-teal",
    type: "single",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-cream border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slightly narrower than 7xl so zig-zag rows read centered on the page, not edge-stretched */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">features.</span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4 text-balance uppercase tracking-tight">
              What You Can Do
            </h2>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {features.map((feature, index) => {
              const isGenerateOutfit =
                feature.title === "Generate Outfit Combinations"

              const textBlock = (
                <div className="mx-auto w-full max-w-lg shrink-0 text-left lg:mx-0 lg:w-auto">
                  <div className={`w-14 h-14 sm:w-[4.25rem] sm:h-[4.25rem] ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                    <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-[1.65rem] sm:text-[1.85rem] lg:text-[2.05rem] font-black text-foreground mb-3 sm:mb-4 uppercase tracking-tight text-balance leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.95rem] sm:text-lg lg:text-xl leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                </div>
              )

              const phoneBlock = (
                <div className="flex shrink-0 justify-center">
                  {feature.type === "double" && feature.images ? (
                    <div className="flex gap-2.5 sm:gap-4 items-end">
                      <div className={phoneDiscoverFrame}>
                        <Image
                          src={feature.images[0]}
                          alt="Style stats screen"
                          width={236}
                          height={488}
                          className={phonePlainImg}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className={phoneDiscoverFrame}>
                        <Image
                          src={feature.images[1]}
                          alt="Cost per wear screen"
                          width={236}
                          height={488}
                          className={phonePlainImg}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={
                        isGenerateOutfit ? phoneShellFeature2 : phoneShellSingle
                      }
                    >
                      <Image
                        src={feature.image as string}
                        alt={feature.title}
                        width={isGenerateOutfit ? 380 : 248}
                        height={isGenerateOutfit ? 760 : 496}
                        className={phoneShade}
                        style={{ width: "100%", height: "auto" }}
                        sizes={
                          isGenerateOutfit
                            ? "(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                            : "(max-width: 640px) 200px, 260px"
                        }
                      />
                    </div>
                  )}
                </div>
              )

              return (
                <div
                  key={index}
                  className="flex w-full flex-col items-center gap-y-8 sm:gap-y-10 lg:flex-row lg:items-center lg:justify-center lg:gap-x-20 lg:gap-y-0"
                >
                  {/*
                    Even index: [text, phone] — odd index: [phone, text] in the DOM. Always `flex-row`
                    on large screens (never `row-reverse`) so the horizontal gap between the two
                    children is the same in every feature (reverse had been tightening text↔image on
                    some rows in practice).
                  */}
                  {index % 2 === 0 ? (
                    <>
                      {textBlock}
                      {phoneBlock}
                    </>
                  ) : (
                    <>
                      {phoneBlock}
                      {textBlock}
                    </>
                  )}
                </div>
              )
            })}
        </div>
        </div>
      </div>
    </section>
  )
}
