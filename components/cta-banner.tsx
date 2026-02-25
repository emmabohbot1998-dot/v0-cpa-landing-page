import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Ready to Take Control of Your Finances?
        </h2>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 text-base"
          >
            <a href="#contact">
              Send Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
