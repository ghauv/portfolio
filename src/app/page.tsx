import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Portfolio } from "@/sections/portfolio";
import { Resume } from "@/sections/resume";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
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
