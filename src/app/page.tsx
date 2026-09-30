import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductLines } from "@/components/ProductLines";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Supply } from "@/components/Supply";
import { Enquiry } from "@/components/Enquiry";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <ProductLines />
        <About />
        <Process />
        <Supply />
        <Enquiry />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
      <Reveal />
    </>
  );
}
