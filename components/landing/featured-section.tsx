import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function FeaturedSection() {
  return (
    <section className="bg-cream">
      <div className="grid lg:grid-cols-2">
        {/* Left Image Section */}
        <div className="relative bg-yellow min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Teal blob shape */}
          <div className="absolute w-80 h-80 bg-teal rounded-full transform -translate-x-10" />
          
          {/* Phone mockup with video - Border style */}
          <div className="relative z-10">
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-foreground rounded-[2rem] translate-x-2 translate-y-2" />
            {/* Phone frame */}
            <div className="relative w-56 h-[450px] rounded-[2rem] overflow-hidden border-2 border-foreground">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ThriftedMarketplace-P2IrmckupW8BUTGDK6En6vGg8RNSVZ.mov" 
                  type="video/mp4" 
                />
              </video>
            </div>
          </div>

          {/* Price tag decoration */}
          <div className="absolute top-8 right-8 bg-pink text-white px-4 py-2 rounded-lg shadow-lg">
            <span className="font-bold">Free</span>
          </div>

          {/* Decorative flower */}
          <div className="absolute bottom-8 left-8">
            <span className="text-pink text-4xl">✿</span>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="bg-cream-dark p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            thrift-ready.
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight uppercase tracking-tight">
            Thrifted
            <br />
            Marketplace
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
            Discover curated secondhand pieces that complement what you already own. 
            Expand your wardrobe intentionally with pre-loved finds that increase 
            versatility without adding clutter.
          </p>

          {/* Button with angled shadow */}
          <div className="relative w-fit group">
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-foreground translate-x-1 translate-y-1" />
            {/* Button */}
            <button className="relative bg-cream border-2 border-foreground px-6 py-3 font-bold text-sm uppercase tracking-wide hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex items-center gap-2">
              Explore Marketplace
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
