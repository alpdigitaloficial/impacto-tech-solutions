import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="eyebrow mb-3 flex items-center gap-2 text-primary">
          {align === "left" && <span className="h-px w-8 bg-primary/60" aria-hidden />}
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}
