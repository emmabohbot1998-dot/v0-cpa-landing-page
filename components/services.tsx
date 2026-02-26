import {
  BookOpen,
  TrendingUp,
  Receipt,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description:
      "Custom financial reports tailored to your business. See what matters — profitability by property, project, or entity — with clear, actionable insights.",
  },
  {
    icon: ShieldCheck,
    title: "Tax Preparation",
    description:
      "Proactive tax strategy for businesses and individuals. 1099 filing, federal and state returns, and year-round planning to minimize your liability.",
  },
  {
    icon: TrendingUp,
    title: "CFO Advisory",
    description:
      "Cash flow forecasting, monthly financial analysis, budget planning and variance analysis, KPI tracking, strategic planning support, and process implementation.",
  },
  {
    icon: BookOpen,
    title: "Monthly Bookkeeping",
    description:
      "Sales tax reporting, monthly financial statements, general ledger maintenance, AP/AR management, and bank reconciliations. Your books — reconciled and ready, month after month.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance with Local & State Filings",
    description:
      "Stay compliant with all local and state filing requirements. We handle deadlines, documentation, and regulatory reporting so you never miss a beat.",
  },
  {
    icon: Receipt,
    title: "Catch-Up & Cleanup",
    description:
      "Behind on your books? We will get you current — fast. Backlog reconciliation, reclassification, and a clean starting point going forward.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            Accounting Solutions Built for Real Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From day-to-day bookkeeping to high-level financial strategy, we provide the specialized expertise your real estate business needs.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
