import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nkopodi Group — Industrial Automation & Instrumentation Supply | Pretoria" },
      { name: "description", content: "Trusted supply of industrial instruments, PLC systems, DCS spare parts and automation solutions. Pretoria, South Africa." },
      { property: "og:title", content: "Nkopodi Group — Industrial Automation & Instrumentation" },
      { property: "og:description", content: "Industrial supply, PLC/DCS spare parts and obsolete sourcing for mining, energy, petrochemical and manufacturing." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
