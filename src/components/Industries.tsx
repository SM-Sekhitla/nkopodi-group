import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import mining from "@/assets/ind-mining.jpg";
import manufacturing from "@/assets/ind-manufacturing.jpg";
import energy from "@/assets/ind-energy.jpg";
import petrochemical from "@/assets/ind-petrochemical.jpg";
import water from "@/assets/ind-water.jpg";
import plants from "@/assets/ind-plants.jpg";

const items = [
  { name: "Mining", img: mining, desc: "Underground and surface operations" },
  { name: "Manufacturing", img: manufacturing, desc: "Discrete and process production" },
  { name: "Energy", img: energy, desc: "Power generation and distribution" },
  { name: "Petrochemical", img: petrochemical, desc: "Refining and downstream processing" },
  { name: "Water Treatment", img: water, desc: "Municipal and industrial" },
  { name: "Industrial Plants", img: plants, desc: "Heavy industrial complexes" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries Served"
          title={<>Engineered for <span className="text-gradient-electric">every plant floor.</span></>}
          description="From deep mines to refineries — our supply network covers the operating environments that define African industry."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-md cursor-pointer"
            >
              <img
                src={it.img}
                alt={it.name}
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-electric/0 group-hover:from-electric/20 group-hover:to-transparent transition-colors duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-electric/60 transition-colors" />

              <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
                0{i + 1} / 06
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-electric/80">{it.desc}</div>
                <h3 className="mt-2 font-display font-bold text-3xl text-foreground tracking-tight">{it.name}</h3>
                <div className="mt-3 h-px w-12 bg-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
