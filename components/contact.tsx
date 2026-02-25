import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left - Info */}
          <div className="lg:col-span-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl text-balance">
              Ready to get started?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Fill out the form and a member of our team will reach out within one business day to discuss your needs.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Office</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Los Angeles, California
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    info@pinnaclecpagroup.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    (310) 555-0100
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
