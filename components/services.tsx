import { TrendingUp, FileText, BarChart3, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: TrendingUp,
    title: "Fractional CFO Services",
    description:
      "Get executive-level financial leadership without the full-time cost. We provide strategic financial planning, cash flow management, and investor reporting tailored to your real estate portfolio.",
  },
  {
    icon: FileText,
    title: "Tax Return Preparation & Filings",
    description:
      "Navigate complex real estate tax regulations with confidence. From 1031 exchanges to depreciation strategies, we maximize your deductions and ensure full compliance.",
  },
  {
    icon: BarChart3,
    title: "Financial Statement Preparation & Compilations",
    description:
      "Accurate, lender-ready financial statements and compilations for your properties and entities. We present your financials with clarity that builds credibility with stakeholders.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description:
      "Keep your books clean and current across every property and entity. Our real estate bookkeeping services track rent rolls, operating expenses, and capital expenditures with precision.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-5xl text-balance">
            Comprehensive Financial Services for Real Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every service we offer is built around the unique needs of real estate professionals, developers, and investors.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
