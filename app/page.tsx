import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Resume } from "@/components/resume"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Resume />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
