import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
          Schedule a free consultation and discover how proactive accounting and tax strategy can transform your real estate business.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-card text-foreground hover:bg-card/90 px-8 text-base font-semibold"
          >
            <a href="#contact">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
