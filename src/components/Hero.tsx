import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Activity, Cpu, Gauge } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden flex items-center pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Industrial automation control room"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent animate-scan" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-electric animate-pulse-glow"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 5) * 0.6}s`,
              opacity: 0.4 + ((i % 3) * 0.2),
            }}
          />
        ))}
      </div>

      {/* Blueprint dashboard accents */}
      <DashboardOverlay />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-electric"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
            Pretoria · South Africa
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display font-bold text-balance text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            Industrial Automation
            <br />
            <span className="text-gradient-electric">&amp; Instrumentation</span>
            <br />
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Trusted supply and delivery of industrial instruments, PLC systems,
            DCS spare parts and automation solutions — engineered for mission-critical plants across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-electric px-7 py-4 text-sm font-semibold text-charcoal hover:shadow-[0_0_40px_var(--electric)] transition-all"
            >
              Request a Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-sm border border-electric/40 bg-electric/5 px-7 py-4 text-sm font-semibold text-foreground hover:bg-electric/15 hover:border-electric transition-all"
            >
              Our Services
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { k: "PLC", v: "Multi-Brand" },
              { k: "DCS", v: "Spare Parts" },
              { k: "24/7", v: "Sourcing" },
            ].map((s) => (
              <div key={s.k} className="border-l border-electric/30 pl-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-electric">{s.k}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating telemetry panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block lg:col-span-5"
        >
          <TelemetryPanel />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-electric to-transparent" />
      </motion.div>

      {/* Vertical scrolling lines */}
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden md:flex flex-col justify-between font-mono text-[10px] text-muted-foreground/40 py-32">
        <span>01 / HERO</span>
        <span>NG · ZA</span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden md:flex flex-col justify-between font-mono text-[10px] text-muted-foreground/40 py-32 items-end">
        <span>v.2026</span>
        <span>EST · NKOPODI</span>
      </div>
    </section>
  );
}

function DashboardOverlay() {
  return (
    <svg
      className="absolute right-0 top-1/4 hidden lg:block opacity-40 pointer-events-none"
      width="600"
      height="400"
      viewBox="0 0 600 400"
      fill="none"
    >
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--electric)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--electric)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--electric)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[80, 140, 200, 260, 320].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y} Q 150 ${y - 30 - i * 5}, 300 ${y + 10} T 600 ${y - 20}`}
          stroke="url(#line)"
          strokeWidth="1"
          strokeDasharray="400"
          className="animate-data-flow"
          style={{ animationDelay: `${i * 0.6}s` }}
          fill="none"
        />
      ))}
    </svg>
  );
}

function TelemetryPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-electric/10 blur-3xl rounded-full" />
      <div className="relative glass rounded-md p-6 corner-frame">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-electric animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-electric">LIVE · PLANT_01</span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">SCADA</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { icon: Gauge, label: "Pressure", value: "42.7", unit: "bar" },
            { icon: Activity, label: "Flow", value: "918", unit: "m³/h" },
            { icon: Cpu, label: "PLC Load", value: "67", unit: "%" },
          ].map((m) => (
            <div key={m.label} className="rounded-sm bg-charcoal/60 p-3 border border-border">
              <m.icon size={14} className="text-electric mb-2" />
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
              <div className="mt-1 font-display font-bold text-xl text-foreground">
                {m.value}<span className="text-[10px] font-mono text-muted-foreground ml-1">{m.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[78, 54, 91].map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-muted-foreground w-14">CH_{i + 1}0</span>
              <div className="flex-1 h-1.5 bg-charcoal rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${p}%` }}
                  transition={{ duration: 1.4, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-electric to-electric-glow"
                />
              </div>
              <span className="font-mono text-[10px] text-electric w-10 text-right">{p}%</span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">UPTIME · 99.97%</span>
          <span className="font-mono text-[10px] text-electric">● NOMINAL</span>
        </div>
      </div>
    </div>
  );
}
