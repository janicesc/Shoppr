export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium text-white/60 uppercase tracking-wider">about.</span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-6 mb-8 text-balance uppercase tracking-tight">
            Nice to Meet You
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
            Shoppr helps users make better wardrobe decisions by organizing what they already own 
            and turning it into purposeful outfit combinations. We act as a decision-support layer, 
            not another shopping destination.
          </p>
          
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            In a world of fast fashion and overconsumption, we believe the most sustainable wardrobe 
            is the one you already have. Our platform helps you rediscover, remix, and reimagine 
            your existing pieces—maximizing style while minimizing waste.
          </p>

          <div className="flex justify-center gap-2">
            <span className="text-pink text-2xl">✦</span>
            <span className="text-yellow text-2xl">✦</span>
            <span className="text-white text-2xl">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
