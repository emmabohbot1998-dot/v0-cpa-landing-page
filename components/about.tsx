import { Building2, Users, ShieldCheck, MapPin } from "lucide-react"

const stats = [
  { icon: Building2, value: "Real Estate", label: "Industry Focus" },
  { icon: Users, value: "Dedicated", label: "Client Partnerships" },
  { icon: ShieldCheck, value: "CPA", label: "Licensed & Certified" },
  { icon: MapPin, value: "Los Angeles", label: "Based in LA" },
]

export function About() {
  return (
    <section id="about" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Copy */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              About the Firm
            </p>
            <h2 className="mt-3 font-serif text-3xl text-primary-foreground md:text-5xl text-balance">
              Built for Real Estate. Based in Los Angeles.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
              Pinnacle CPA Group is a Los Angeles-based accounting firm that works exclusively with real estate professionals. From developers and investors to property managers and brokers, we understand the financial complexities of the industry inside and out.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              Our approach is hands-on and strategic. We don{"'"}t just prepare your returns and balance your books{"—"}we become a trusted financial partner that helps you make smarter decisions, reduce your tax liability, and grow your portfolio with confidence.
            </p>
          </div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center"
              >
                <stat.icon className="mx-auto mb-3 h-7 w-7 text-accent" />
                <p className="font-serif text-xl text-primary-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-primary-foreground/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
