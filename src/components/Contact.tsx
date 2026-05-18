import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-grid opacity-20 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Request a Quotation"
          title={<>Speak to our <span className="text-gradient-electric">procurement team.</span></>}
          description="Send us your bill of materials, obsolete part numbers, or project specifications — we respond within one business day."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass rounded-md p-7 corner-frame">
              <div className="font-mono text-[10px] uppercase tracking-widest text-electric">Head Office</div>
              <h3 className="mt-2 font-display font-bold text-2xl text-foreground">Nkopodi Group (Pty) Ltd</h3>

              <div className="mt-6 space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Unit 27, Co Space Entrepreneur Village\nPretoria, South Africa" },
                  { icon: Phone,  label: "Phone",   value: "+27 (0) 00 000 0000" },
                  { icon: Mail,   label: "Email",   value: "procurement@nkopodigroup.co.za" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="mt-0.5 h-9 w-9 shrink-0 rounded-sm bg-electric/10 border border-electric/30 flex items-center justify-center">
                      <c.icon size={15} className="text-electric" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                      <div className="mt-1 text-sm text-foreground whitespace-pre-line">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map style block */}
            <div className="relative h-56 rounded-md overflow-hidden border border-border">
              <div className="absolute inset-0 bg-grid-fine opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy to-charcoal opacity-90" />
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 220" fill="none">
                <path d="M0 130 Q 80 60 160 110 T 320 90 T 400 140" stroke="var(--electric)" strokeWidth="1" fill="none" />
                <path d="M0 170 Q 100 140 200 160 T 400 130" stroke="var(--electric)" strokeWidth="1" opacity="0.5" fill="none" />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative h-3 w-3">
                  <span className="absolute inset-0 rounded-full bg-electric animate-ping" />
                  <span className="absolute inset-0 rounded-full bg-electric" />
                </div>
                <div className="mt-3 glass rounded-sm px-3 py-1.5">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-electric">25.7°S · 28.2°E</div>
                  <div className="text-xs font-semibold text-foreground">Pretoria · ZA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 glass rounded-md p-7 lg:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Industry / Sector" name="industry" />
            <Field as="textarea" label="Project Specification / BOM" name="message" rows={5} required />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Response · &lt;24h business hours
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center gap-3 rounded-sm bg-electric px-6 py-3.5 text-sm font-semibold text-charcoal hover:shadow-[0_0_30px_var(--electric)] transition-all disabled:opacity-80"
              >
                {sent ? <><Check size={16} /> Request Received</> : <>Submit Request <Send size={14} className="group-hover:translate-x-0.5 transition-transform" /></>}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  rows?: number;
  as?: "input" | "textarea";
};

function Field({ label, name, type = "text", required, rows, as = "input" }: FieldProps) {
  const base = "peer w-full bg-charcoal/50 border border-border focus:border-electric outline-none rounded-sm px-4 pt-6 pb-2 text-sm text-foreground transition-colors focus:bg-charcoal/80";
  return (
    <label className="relative block group">
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={rows} placeholder=" " className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} required={required} placeholder=" " className={base} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground peer-focus:text-electric transition-colors">
        {label}{required && <span className="text-electric">*</span>}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-electric scale-x-0 peer-focus:scale-x-100 origin-left transition-transform" />
    </label>
  );
}
