import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 -z-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Now Accepting New Clients
        </p>

        <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          A CPA Firm Built for Entrepreneurs
        </h1>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base"
          >
            <a href="#contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

        </div>
      </div>
    </section>
  )
}
