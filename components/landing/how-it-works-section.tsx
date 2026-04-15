const steps = [
  {
    number: "01",
    title: "Upload your closet",
    description: "Add the clothes you already own. Snap photos or import from your gallery.",
    visual: "upload",
  },
  {
    number: "02",
    title: "Get outfit ideas",
    description: "Mix and match pieces instantly with AI-powered outfit generation.",
    visual: "generate",
  },
  {
    number: "03",
    title: "Style with clarity",
    description: "Save outfits and plan your looks for any occasion, weather, or mood.",
    visual: "save",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-cream border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">how it works.</span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4 text-balance uppercase tracking-tight">
            Get Started in 3 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Phone Mockup - Border style */}
                <div className="relative mb-8">
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-foreground rounded-[1.5rem] translate-x-1.5 translate-y-1.5" />
                  {/* Phone frame */}
                  <div className="relative rounded-[1.5rem] overflow-hidden w-48 h-80 bg-white border-2 border-foreground">
                    {/* Status Bar */}
                    <div className="bg-foreground text-white px-3 py-1.5 flex items-center justify-between text-[8px]">
                      <span>9:41</span>
                      <div className="w-4 h-1.5 bg-white rounded-full" />
                    </div>
                    
                    {/* Step-specific content */}
                    <StepMockup type={step.visual} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow rounded-full flex items-center justify-center border-2 border-foreground z-10">
                    <span className="font-bold text-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-black text-foreground mb-3 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepMockup({ type }: { type: string }) {
  switch (type) {
    case "upload":
      return (
        <div className="p-3 bg-white h-full">
          <div className="text-center mb-3">
            <span className="text-xs font-semibold">Add Items</span>
          </div>
          <div className="border-2 border-dashed border-teal/30 rounded-xl p-4 flex flex-col items-center justify-center h-32">
            <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center mb-2">
              <span className="text-teal text-lg">+</span>
            </div>
            <span className="text-[10px] text-muted-foreground">Take a photo</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-stone-100 rounded-lg" />
            ))}
          </div>
        </div>
      )
    case "generate":
      return (
        <div className="p-3 bg-white h-full">
          <div className="text-center mb-3">
            <span className="text-xs font-semibold">Outfit Ideas</span>
          </div>
          <div className="space-y-2">
            {[1, 2].map((_, i) => (
              <div key={i} className="bg-cream rounded-lg p-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-stone-200 rounded" />
                <div className="w-1 h-1 bg-teal rounded-full" />
                <div className="w-8 h-8 bg-blue-100 rounded" />
                <div className="w-1 h-1 bg-teal rounded-full" />
                <div className="w-6 h-6 bg-stone-300 rounded" />
              </div>
            ))}
          </div>
          <div className="mt-3 bg-gradient-to-r from-teal to-teal-dark text-white rounded-lg p-2 text-center">
            <span className="text-[10px] font-medium">Generate More ✨</span>
          </div>
        </div>
      )
    case "save":
      return (
        <div className="p-3 bg-white h-full">
          <div className="text-center mb-3">
            <span className="text-xs font-semibold">Saved Outfits</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "Work Meeting", tag: "Professional" },
              { name: "Weekend Brunch", tag: "Casual" },
              { name: "Date Night", tag: "Evening" },
            ].map((outfit, i) => (
              <div key={i} className="bg-cream rounded-lg p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-stone-200 rounded" />
                  <div>
                    <div className="text-[10px] font-medium">{outfit.name}</div>
                    <div className="text-[8px] text-muted-foreground">{outfit.tag}</div>
                  </div>
                </div>
                <div className="w-5 h-5 bg-yellow/30 rounded-full flex items-center justify-center">
                  <span className="text-[8px]">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    default:
      return <div className="h-full bg-cream" />
  }
}
