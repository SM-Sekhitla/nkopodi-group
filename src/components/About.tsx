import { motion } from "framer-motion";
import { ShieldCheck, Network, Search, Handshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import aboutImg from "@/assets/about-engineer.jpg";

const pillars = [
  { icon: ShieldCheck, title: "Industrial Supply Expertise", text: "Specialised procurement of instrumentation and automation hardware for heavy industry." },
  { icon: Network, title: "Automation Systems Support", text: "PLC and DCS spare parts, integration support and obsolete-system sourcing." },
  { icon: Search, title: "Reliable Sourcing", text: "Vetted multi-brand supply chain across OEM and discounted channels." },
  { icon: Handshake, title: "Trusted Partnerships", text: "Long-term relationships with mining, energy and manufacturing clients." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-grid-fine opacity-30 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="About Nkopodi Group"
              title={<>The procurement backbone for <span className="text-gradient-electric">industrial plants.</span></>}
              description="Nkopodi Group (Pty) Ltd is a Pretoria-based industrial supplier specialising in instrumentation, PLC and DCS systems, and hard-to-source automation spare parts. We exist to keep mission-critical operations running — sourcing the right component, fast, regardless of brand or vintage."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative rounded-sm border border-border bg-card/50 p-5 hover:border-electric/60 transition-colors"
                >
                  <p.icon size={20} className="text-electric mb-3" />
                  <div className="font-semibold text-sm text-foreground">{p.title}</div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md corner-frame">
              <img
                src={aboutImg}
                alt="Engineer at industrial automation panel"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-grid opacity-20" />

              <div className="absolute bottom-6 left-6 right-6 glass rounded-sm p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-electric">Head Office</div>
                <div className="mt-1 text-sm font-semibold text-foreground">Unit 27, Co Space Entrepreneur Village</div>
                <div className="text-xs text-muted-foreground">Pretoria · South Africa</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-32 w-32 border border-electric/40 rounded-sm hidden md:block" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
