import logoSrc from "@/assets/nko_logo.png";

type Props = { className?: string; compact?: boolean };

export function Logo({ className = "", compact = false }: Props) {
  return (
    <a href="#top" className={`group inline-flex items-center ${className}`}>
      <div className="relative">
        <div
          className="absolute inset-0 -m-2 rounded-lg opacity-60 group-hover:opacity-100 blur-xl transition-opacity"
          style={{ background: "radial-gradient(closest-side, var(--electric), transparent 70%)" }}
        />
        <img
          src={logoSrc}
          alt="Nkopodi Group — Industrial Automation & Instrumentation"
          className={`relative w-auto object-contain transition-all ${compact ? "h-9" : "h-12 sm:h-14"}`}
          style={{ filter: "drop-shadow(0 0 12px color-mix(in oklab, var(--electric) 55%, transparent))" }}
        />
      </div>
    </a>
  );
}
