type Props = {
  className?: string;
  compact?: boolean;
};

/**
 * Lockup tipográfico da Impacto Informática com o símbolo Power.
 * Substituível pelo arquivo oficial do logo quando fornecido.
 */
export function PowerMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Símbolo Power da Impacto Informática">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path
        d="M24 26.5a13.5 13.5 0 0 1-9.55-23.05"
        fill="none"
        stroke="none"
      />
      <path
        d="M14.8 15.4a12 12 0 1 0 18.4 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M24 8v14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "", compact = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="text-primary">
        <PowerMark className="h-8 w-8" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-lg font-extrabold tracking-tight uppercase">
            Impacto
          </span>
          <span className="block text-[0.62rem] font-semibold tracking-[0.32em] uppercase text-muted-foreground">
            Informática
          </span>
        </span>
      )}
    </span>
  );
}
