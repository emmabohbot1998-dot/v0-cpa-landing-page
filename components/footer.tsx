import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link href="/" className="font-serif text-lg text-primary-foreground">
              Lenny Bohbot, CPA, APC
            </Link>
            <p className="mt-1 text-xs text-primary-foreground/50">
              Real Estate Accounting & Advisory &middot; Los Angeles, CA &middot; Now Accepting New Clients
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            <a
              href="#services"
              className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              About
            </a>
            <a
              href="#why-us"
              className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Lenny Bohbot, CPA, APC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
