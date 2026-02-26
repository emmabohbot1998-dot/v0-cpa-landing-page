import {
  Building2,
  Home,
  Landmark,
  Store,
} from "lucide-react"

const audiences = [
  {
    icon: Store,
    title: "Small Business Owners",
    description: "Bookkeeping, payroll support, financial reporting, and tax planning.",
  },
  {
    icon: Building2,
    title: "S Corp Owners",
    description: "Entity compliance, reasonable compensation analysis, payroll, and tax-efficient distributions.",
  },
  {
    icon: Landmark,
    title: "Real Estate Investors",
    description: "Multi-property portfolios, 1031 exchanges, cost segregation, and entity structuring.",
  },
  {
    icon: Home,
    title: "Landlords & Property Managers",
    description: "Rental income tracking, trust accounting, owner statements, depreciation schedules, and property-level reporting.",
  },
]

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Who We Serve
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            Built for Your Industry
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We work with real estate professionals and business owners who demand more from their accountant.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex gap-5"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/5">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
