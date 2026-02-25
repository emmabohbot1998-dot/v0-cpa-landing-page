import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Real estate specialization — not a generalist firm",
  "Proactive tax strategy year-round, not just at filing time",
  "Data-driven financial analysis and reporting",
  "Scalable services from bookkeeping to fractional CFO",
  "Deep understanding of the Los Angeles real estate market",
  "Personalized service — you work directly with your CPA",
  "Cloud-based, modern technology stack",
  "Transparent, fixed-fee pricing with no surprises",
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
              The Difference a Specialist Makes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We don{"'"}t just crunch numbers. We provide the insight, strategy, and support you need to make confident financial decisions and grow your business.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
