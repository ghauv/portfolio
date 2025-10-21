import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Portfolio } from "@/sections/portfolio";
import { Resume } from "@/sections/resume";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { Suspense } from "react";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <ScrollRestoration />
      </Suspense>
      <Header />
      <Hero />
      <Portfolio />
      <Resume />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
