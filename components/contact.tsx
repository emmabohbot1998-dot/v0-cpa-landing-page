import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left - Info */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
              Let{"'"}s Start a Conversation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tell us about your business and goals, and we{"'"}ll put together a plan tailored to your needs. Your first consultation is free.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Office</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Los Angeles, California
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a href="mailto:info@lennybohbotcpa.com" className="mt-0.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@lennybohbotcpa.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a href="tel:+13105550100" className="mt-0.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    (310) 555-0100
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Hours</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Mon{"\u2013"}Fri: 9:00 AM{"\u2013"}5:00 PM PST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-secondary p-8 shadow-lg lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
