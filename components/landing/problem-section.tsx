import { ShoppingBag, Clock, Repeat, Puzzle } from "lucide-react"

const problems = [
  {
    icon: ShoppingBag,
    title: "You have clothes, but nothing feels right",
    description: "You keep repeating the same outfits, even with a full closet",
    color: "bg-pink/10",
    iconColor: "text-pink",
  },
  {
    icon: Clock,
    title: '"What should I wear today?"',
    description: "Getting dressed takes more time and energy than it should",
    color: "bg-yellow/20",
    iconColor: "text-yellow",
  },
  {
    icon: Repeat,
    title: "You keep buying similar pieces",
    description: "But they don't actually work with what you already own",
    color: "bg-teal/10",
    iconColor: "text-teal",
  },
  {
    icon: Puzzle,
    title: "Outfits don't come together easily",
    description: "You have the pieces — just not the combinations",
    color: "bg-cream-dark",
    iconColor: "text-foreground",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-cream border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">the problem.</span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mt-4 text-balance uppercase tracking-tight">
            Sound Familiar?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`${problem.color} rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2 leading-snug">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
