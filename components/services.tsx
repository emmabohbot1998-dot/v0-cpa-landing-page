import {
  BookOpen,
  Building2,
  TrendingUp,
  FileText,
  Receipt,
  BarChart3,
  Home,
  ClipboardCheck,
  ShieldCheck,
  Hammer,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const specializedSolutions = [
  {
    icon: BookOpen,
    title: "Monthly Bookkeeping",
    tagline: "Your books, reconciled and ready — month after month.",
    items: [
      "Sales tax reporting and filing",
      "Monthly financial statement preparation",
      "General ledger maintenance",
      "Accounts payable and receivable management",
      "Bank and credit card reconciliations",
    ],
  },
  {
    icon: Building2,
    title: "Property Management Accounting",
    tagline: "Rent rolls, owner statements, and expenses — accurately tracked.",
    items: [
      "1099 preparation for contractors",
      "Trust accounting, track income and expense by property",
      "Maintenance and repair categorization",
      "Owner distribution calculations",
      "Property expense tracking",
      "Tenant rent roll management",
    ],
  },
  {
    icon: Hammer,
    title: "House Flippers",
    tagline:
      "Track reno costs, profit margins, and timelines for every project.",
    items: [
      "Timeline and budget monitoring",
      "Profit margin analysis",
      "Material expense categorization",
      "Contractor and vendor management",
      "Project-based cost tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "CFO Advisory",
    tagline: "Forecasts and strategy without a full-time hire.",
    items: [
      "Process implementation",
      "Strategic planning support",
      "KPI tracking and reporting",
      "Budget planning and variance analysis",
      "Cash flow forecasting",
      "Monthly financial analysis",
    ],
  },
]

const additionalServices = [
  {
    icon: Receipt,
    title: "Catch-Up & Cleanup",
    description: "Behind on bookkeeping? We'll get you current — fast.",
  },
  {
    icon: FileText,
    title: "Invoicing, AP/AR & Expense Management",
    description: "Invoice out, pay bills on time, stay cash-flow positive.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "See what matters — profit, tailored for your need.",
  },
  {
    icon: Home,
    title: "Landlords",
    description: "Rental income and expense by property.",
  },
  {
    icon: ClipboardCheck,
    title: "Year-End & Audit Prep",
    description: "Audit-ready packs that save everyone time.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Tax Preparation",
    description: "1099 filing, tax returns for businesses and individuals.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Specialized Solutions for Your Industry
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
            Tailored Accounting for Real Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We understand the unique accounting challenges of different real
            estate business types and provide tailored solutions that fit your
            specific needs.
          </p>
        </div>

        {/* Specialized Solutions - detailed cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {specializedSolutions.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.tagline}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Comprehensive Solutions
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
              Services That Amplify Success
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From foundational bookkeeping to strategic financial guidance, we
              provide the expertise your business needs to flourish and prosper.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
