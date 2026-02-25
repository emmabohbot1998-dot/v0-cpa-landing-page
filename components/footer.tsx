import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Lenny Bohbot, CPA, APC logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain brightness-0 invert"
              />
              <span className="font-serif text-lg text-primary-foreground">
                Lenny Bohbot, CPA, APC
              </span>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
              Data-Driven Financial Analysis.
              <br />
              Proactive Tax Strategy.
              <br />
              Long-Term Growth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Quick Links
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              <a href="#about" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                About
              </a>
              <a href="#services" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Services
              </a>
              <a href="#who-we-serve" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Who We Serve
              </a>
              <a href="#contact" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-foreground/50" />
                <span className="text-sm text-primary-foreground/70">
                  Los Angeles, California
                </span>
              </div>

              <a href="mailto:info@lennybohbotcpa.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Mail className="h-4 w-4 text-primary-foreground/50" />
                info@lennybohbotcpa.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Lenny Bohbot, CPA, APC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
