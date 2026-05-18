import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";

const tiles = [
  { src: g1, label: "SCADA · HMI",        span: "row-span-2" },
  { src: g2, label: "Control Wiring",     span: "" },
  { src: g3, label: "Plant Engineering",  span: "" },
  { src: g4, label: "DCS Cabinets",       span: "" },
  { src: g5, label: "Process Piping",     span: "row-span-2" },
  { src: g6, label: "PLC Hardware",       span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Visual Experience"
          title={<>Inside the <span className="text-gradient-electric">automation environment.</span></>}
          description="A look at the equipment, panels and environments where Nkopodi Group components ship into service."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px] gap-3">
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-md ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/15 transition-colors" />
              <figcaption className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-electric">
                <span>{t.label}</span>
                <span className="text-muted-foreground">N/0{i + 1}</span>
              </figcaption>
              <div className="absolute inset-0 border border-transparent group-hover:border-electric/40 transition-colors" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
