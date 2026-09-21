import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LivePrices } from "@/components/LivePrices";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LivePrices />
        <HowItWorks />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
