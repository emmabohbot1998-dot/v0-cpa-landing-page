import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Kickoff",
    description:
      "We understand your business, systems, and goals in a comprehensive onboarding session.",
  },
  {
    number: "2",
    title: "Proposal",
    description:
      "We clarify our mission and put together a plan adapted to your specific needs.",
  },
  {
    number: "3",
    title: "Reporting",
    description:
      "Monthly, quarterly, or annual financial reports delivered on time with insight and recommendations.",
  },
  {
    number: "4",
    title: "Optimize",
    description:
      "We plan for your growth with ongoing strategy, forecasting, and process improvements.",
  },
]

const reasons = [
  {
    title: "Real Estate Specialization",
    description:
      "We focus on the real estate industry. That means we understand 1031 exchanges, cost segregation, depreciation schedules, trust accounting, and multi-entity structures better than a generalist firm ever could.",
  },
  {
    title: "Proactive, Not Reactive",
    description:
      "We don't wait for tax season to start talking strategy. We work with you year-round to plan, forecast, and optimize your financial position.",
  },
  {
    title: "Scalable Engagement Models",
    description:
      "Whether you need a fractional CFO for strategic guidance, property management accounting, or reliable bookkeeping to keep operations running, our services scale with your business.",
  },
  {
    title: "Los Angeles Market Expertise",
    description:
      "We know the LA real estate landscape — from regulatory nuances to market dynamics — and bring that local expertise to every engagement.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Process section */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            How We Operate
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
            A Refined, Systematic Approach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We transform your financial chaos into organized prosperity, step by step.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10">
                <span className="font-serif text-xl text-accent">{step.number}</span>
              </div>
              <h3 className="font-serif text-lg text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Us section */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Why Lenny Bohbot, CPA
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
              The Difference a Specialist Makes
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
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
      </div>
    </section>
  )
}
