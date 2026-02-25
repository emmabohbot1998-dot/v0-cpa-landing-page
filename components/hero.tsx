import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <Image
        src="/images/hero-real-estate.jpg"
        alt="Modern real estate development in Los Angeles"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
          Los Angeles &middot; Real Estate Focused CPA
        </p>
        <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
          Strategic Financial Guidance for Real Estate
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          Expert accounting, tax, and advisory services built exclusively for the real estate industry.
          From fractional CFO engagements to tax filings, we handle the numbers so you can focus on closing deals.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
          >
            <a href="#contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground px-8"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
