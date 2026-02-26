import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero-real-estate.jpg"
                alt="Los Angeles real estate skyline"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right - Copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
              A CPA Firm Built for Real Estate
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Lenny Bohbot, CPA, apc is a Los Angeles based accounting firm helping business owners nationwide make smarter financial decisions through expert accounting, tax planning, and CFO advisory services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We go beyond basic compliance. Our proactive approach means we{"'"}re working year-round on your behalf{"—"}identifying tax-saving opportunities, providing data-driven financial analysis, and building strategies that support long-term growth.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you need monthly bookkeeping, fractional CFO guidance, or tax services, we{"'"}re here to help your business thrive.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-secondary p-5 text-center">
                <p className="font-serif text-2xl text-foreground">11+ Years</p>
                <p className="mt-1 text-xs text-muted-foreground">Experience</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary p-5 text-center">
                <p className="font-serif text-2xl text-foreground">CPA</p>
                <p className="mt-1 text-xs text-muted-foreground">Licensed & Accredited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
