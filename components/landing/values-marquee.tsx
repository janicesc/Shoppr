"use client"

const values = [
  "SUSTAINABILITY",
  "INTENTIONALITY",
  "CLARITY",
  "CREATIVITY",
  "SIMPLICITY",
]

export function ValuesMarquee() {
  return (
    <div className="bg-foreground py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...values, ...values, ...values, ...values].map((value, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-white font-semibold tracking-wide text-sm sm:text-base">
              {value}
            </span>
            <span className="text-pink mx-4 text-lg">✦</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
