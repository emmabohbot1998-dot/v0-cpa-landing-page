import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhoWeServe } from "@/components/who-we-serve"
import { WhyUs } from "@/components/why-us"
import { CtaBanner } from "@/components/cta-banner"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhoWeServe />
        <WhyUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
