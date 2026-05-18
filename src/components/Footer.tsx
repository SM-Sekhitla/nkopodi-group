import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent animate-pulse-glow" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Industrial automation, instrumentation supply and obsolete PLC sourcing for mining,
              energy, petrochemical and manufacturing operations across Southern Africa.
            </p>
          </div>

          <FooterCol
            title="Services"
            links={[
              "Industrial Instruments",
              "PLC Spare Parts",
              "DCS Spare Parts",
              "Obsolete Sourcing",
              "Analyzer Systems",
              "Flow Meters",
            ]}
          />
          <FooterCol
            title="Company"
            links={["About", "Industries", "Why Choose Us", "Gallery", "Contact"]}
          />
          <FooterCol
            title="Office"
            links={[
              "Unit 27, Co Space",
              "Entrepreneur Village",
              "Pretoria · ZA",
              "procurement@nkopodigroup.co.za",
            ]}
          />
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {year} Nkopodi Group (Pty) Ltd · All rights reserved
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" /> Live · Pretoria</span>
            <span>VAT REG. PENDING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
