import { motion } from "motion/react";
import { Cpu, MonitorCog, Search, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { wa } from "@/lib/impacto";

const STEPS = [
  { icon: Cpu, title: "Hardware", desc: "Componentes físicos" },
  { icon: MonitorCog, title: "Software", desc: "Sistema operacional e programas" },
  { icon: Search, title: "Diagnóstico", desc: "Identificação da causa" },
  { icon: CheckCircle2, title: "Solução", desc: "Correção adequada" },
];

const FLOW = ["Problema", "Análise", "Causa identificada", "Solução"];

export function Diagnostic() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 flex items-center gap-2 text-primary">
                <span className="h-px w-8 bg-primary/60" aria-hidden />
                Diagnóstico técnico
              </p>
              <h2 className="text-3xl font-bold text-balance sm:text-4xl">
                O problema nem sempre está onde parece.
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Nossa equipe é capacitada para analisar hardware e software, identificar a origem da
                falha e encontrar o caminho adequado para corrigir o problema.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {STEPS.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 0.1}
                  className="rounded-lg border border-border bg-card/70 p-5"
                >
                  <s.icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-4 text-sm font-bold tracking-[0.1em] uppercase">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3} className="mt-10">
              <a
                href={wa("Olá! Vim pelo site da Impacto Informática e gostaria de solicitar um diagnóstico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar diagnóstico
              </a>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-graphite p-8">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 anim-scan"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--glow) 22%, transparent), transparent)",
                  }}
                  aria-hidden
                />
                <svg
                  viewBox="0 0 320 220"
                  className="relative h-auto w-full text-foreground"
                  role="img"
                  aria-label="Computador sendo analisado por um scanner técnico"
                >
                  <rect
                    x="40"
                    y="24"
                    width="240"
                    height="150"
                    rx="8"
                    fill="var(--card)"
                    stroke="currentColor"
                    strokeOpacity="0.2"
                  />
                  <rect
                    x="56"
                    y="40"
                    width="208"
                    height="118"
                    rx="4"
                    fill="var(--ink)"
                    stroke="var(--glow)"
                    strokeOpacity="0.3"
                  />
                  <g stroke="var(--glow)" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M76 66h72M76 82h116M76 98h48M76 114h94M76 130h60" />
                  </g>
                  <rect x="196" y="96" width="52" height="46" rx="4" fill="none" stroke="var(--glow)" strokeOpacity="0.5" strokeDasharray="4 4" />
                  <path d="M140 174h40l10 22h-60z" fill="var(--card)" stroke="currentColor" strokeOpacity="0.2" />
                </svg>
              </div>
            </Reveal>

            <ol className="space-y-3">
              {FLOW.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.18 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="flex-1 rounded-md border border-border bg-card/60 px-4 py-3 text-sm font-medium tracking-[0.08em] uppercase">
                    {f}
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
