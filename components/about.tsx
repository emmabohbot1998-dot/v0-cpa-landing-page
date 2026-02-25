import { Building2, Users, ShieldCheck, MapPin, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const stats = [
  { icon: Building2, value: "Real Estate", label: "Industry Focus" },
  { icon: ShieldCheck, value: "Licensed CPA", label: "APC Accredited" },
  { icon: MapPin, value: "Los Angeles", label: "Based in LA" },
  { icon: UserPlus, value: "Accepting", label: "New Clients" },
]

export function About() {
  return (
    <section id="about" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Copy */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              A Dedicated CPA Partner
            </p>
            <h2 className="mt-3 font-serif text-3xl text-primary-foreground md:text-5xl text-balance">
              Meet Your CPA Partner
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
              Lenny Bohbot, CPA, APC helps founders, property managers, landlords, house flippers, and small businesses keep clean books, stay compliant, and make confident financial decisions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              With a deep understanding of the unique challenges facing growing real estate businesses, I provide personalized accounting solutions that scale with your success. From monthly bookkeeping to strategic financial guidance, I{"'"}m here to ensure your financial foundation is solid and your business thrives.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              >
                <a href="#contact">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
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
