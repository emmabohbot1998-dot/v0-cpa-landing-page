import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Real Estate Specialization",
    description:
      "We focus exclusively on the real estate industry. That means we understand 1031 exchanges, cost segregation, depreciation schedules, and multi-entity structures better than a generalist firm ever could.",
  },
  {
    title: "Proactive, Not Reactive",
    description:
      "We don't wait for tax season to start talking strategy. Our team works with you year-round to plan, forecast, and optimize your financial position.",
  },
  {
    title: "Scalable Engagement Models",
    description:
      "Whether you need a fractional CFO for strategic guidance or reliable bookkeeping to keep operations running, our services scale with your business.",
  },
  {
    title: "Los Angeles Market Expertise",
    description:
      "We know the LA real estate landscape—from regulatory nuances to market dynamics—and bring that local expertise to every engagement.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Why Pinnacle
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
            The Difference a Specialist Makes
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
