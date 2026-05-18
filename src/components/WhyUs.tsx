import { motion } from "framer-motion";
import { CheckCircle2, Truck, Wrench, Users, Layers, BadgePercent } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: CheckCircle2, title: "Reliable Procurement", desc: "Documented sourcing process with full traceability and OEM warranty pass-through." },
  { icon: Truck,        title: "Fast Delivery",        desc: "Local SA warehousing and air-freight partners for critical-path components." },
  { icon: Wrench,       title: "Technical Expertise",  desc: "Engineering team that speaks PLC, DCS, fieldbus and protocol — not just SKUs." },
  { icon: Users,        title: "Trusted Suppliers",    desc: "Vetted upstream network spanning OEM, authorised distributor and surplus channels." },
  { icon: Layers,       title: "Multi-Brand Support",  desc: "Siemens, ABB, Honeywell, Schneider, Rockwell, Yokogawa, Emerson and more." },
  { icon: BadgePercent, title: "Competitive Pricing",  desc: "Direct supplier relationships translate to better unit economics on every bid." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Animated background lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bgline" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--electric)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--electric)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--electric)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 35, 55, 75].map((y, i) => (
          <line key={i} x1="0" x2="100%" y1={`${y}%`} y2={`${y}%`} stroke="url(#bgline)" strokeWidth="1" strokeDasharray="6 12" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          eyebrow="Why Choose Us"
          title={<>Built for <span className="text-gradient-electric">tender-grade reliability.</span></>}
          description="Six commitments that make Nkopodi Group the procurement partner of choice for high-stakes industrial bids."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-md overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative bg-card/80 p-8 hover:bg-card transition-colors"
            >
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                0{i + 1}
                <span className="h-px flex-1 bg-border group-hover:bg-electric transition-colors" />
              </div>
              <f.icon size={28} className="mt-6 text-electric" />
              <h3 className="mt-5 font-display font-semibold text-xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-electric/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
