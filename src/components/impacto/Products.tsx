import { Monitor, Printer, Cpu, Mouse, Router, Cable } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { wa } from "@/lib/impacto";

const CATEGORIES = [
  { icon: Monitor, title: "Computadores" },
  { icon: Printer, title: "Impressoras" },
  { icon: Cpu, title: "Componentes" },
  { icon: Mouse, title: "Periféricos" },
  { icon: Router, title: "Equipamentos de rede" },
  { icon: Cable, title: "Acessórios" },
];

const BRANDS = ["Intelbras", "Logitech", "Epson", "Entre outras"];

export function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produtos"
          title="Precisa comprar tecnologia?"
          subtitle="Encontre o equipamento certo para sua necessidade."
        />
        <Reveal delay={0.1} className="mt-4 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            A Impacto Informática trabalha com equipamentos, componentes e acessórios de informática.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={i * 0.06}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase">{c.title}</h3>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15} className="mt-14 rounded-xl border border-border bg-card/50 p-8 lg:p-10">
          <h3 className="eyebrow text-muted-foreground">Trabalhamos com marcas reconhecidas</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {BRANDS.map((b) => (
              <li
                key={b}
                className="rounded-md border border-border px-4 py-2.5 font-display text-sm font-semibold tracking-[0.08em] uppercase"
              >
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Não sabe qual equipamento escolher? Fale com nossa equipe.
            </p>
            <a
              href={wa("Olá! Vim pelo site da Impacto Informática e quero comprar um equipamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Consultar produtos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
