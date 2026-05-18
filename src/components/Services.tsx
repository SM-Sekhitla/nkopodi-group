import { motion } from "framer-motion";
import {
  Gauge, Droplets, Thermometer, FlaskConical, Activity,
  Cpu, CircuitBoard, Server, Archive, Tag, Layers, Truck,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import pressure from "@/assets/instr-pressure.jpg";
import level from "@/assets/instr-level.jpg";
import temp from "@/assets/instr-temp.jpg";
import analyzer from "@/assets/instr-analyzer.jpg";
import flow from "@/assets/instr-flow.jpg";
import plc from "@/assets/instr-plc.jpg";
import plants from "@/assets/ind-plants.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";

const services = [
  { icon: Truck,        title: "Supply & Delivery of Industrial Instruments", desc: "End-to-end procurement and logistics for plant-floor instrumentation.", img: gal1 },
  { icon: Gauge,        title: "Pressure Instrumentation",        desc: "Transmitters, gauges and switches for critical pressure loops.", img: pressure },
  { icon: Droplets,     title: "Level Instrumentation",           desc: "Radar, ultrasonic and hydrostatic level measurement.", img: level },
  { icon: Thermometer,  title: "Temperature Instrumentation",     desc: "RTDs, thermocouples and transmitters with full traceability.", img: temp },
  { icon: FlaskConical, title: "Analyzer Systems",                desc: "Gas, liquid and emissions analyzer supply and support.", img: analyzer },
  { icon: Activity,     title: "Flow Meters",                     desc: "Magnetic, Coriolis, vortex and ultrasonic flow technologies.", img: flow },
  { icon: Cpu,          title: "Industrial Automation Solutions", desc: "Turnkey automation hardware sourcing and consulting.", img: plants },
  { icon: CircuitBoard, title: "PLC Spare Parts",                 desc: "I/O modules, CPUs and power supplies across all OEMs.", img: plc },
  { icon: Server,       title: "DCS Spare Parts",                 desc: "Controllers, cards and accessories for major DCS platforms.", img: gal2 },
  { icon: Archive,      title: "Obsolete PLC Sourcing",           desc: "Specialist channel for end-of-life and legacy automation hardware.", img: gal3 },
  { icon: Tag,          title: "Discounted Spare Parts",          desc: "Surplus, refurbished and clearance options at substantial savings.", img: gal4 },
  { icon: Layers,       title: "Multi-Brand PLC & DCS Support",   desc: "Siemens, ABB, Honeywell, Schneider, Rockwell, Yokogawa and more.", img: gal5 },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>A complete <span className="text-gradient-electric">automation procurement</span> stack.</>}
          description="From a single sensor to a full DCS rebuild — we source, deliver, and stand behind every component on time and on spec."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              className="group relative overflow-hidden rounded-md border border-border bg-card/40 hover:border-electric/60 transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-[140%] w-full object-cover transition-transform duration-[2000ms] ease-out translate-y-0 group-hover:-translate-y-[28%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/10 transition-colors" />
                <div className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-charcoal/80 border border-electric/30 backdrop-blur">
                  <s.icon size={16} className="text-electric" />
                </div>
                <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">0{(i % 9) + 1}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-base text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-electric opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                  Enquire <span>→</span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-md border border-transparent group-hover:border-electric/40 group-hover:shadow-[0_0_30px_-10px_var(--electric)] transition-all" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
