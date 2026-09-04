import { Reveal } from "./Reveal";
import { PowerMark } from "./Logo";
import { wa } from "@/lib/impacto";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex text-primary anim-pulse-soft">
            <PowerMark className="h-14 w-14" />
          </span>
          <h2 className="mt-8 text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
            Seu equipamento está com problema?
          </h2>
          <p className="mt-3 font-display text-xl font-bold text-primary sm:text-2xl">
            Vamos encontrar a solução.
          </p>
          <p className="mt-5 text-muted-foreground">
            Fale com a Impacto Informática e solicite atendimento.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-4 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicitar atendimento pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-colors hover:bg-secondary"
          >
            Conhecer nossos serviços
          </a>
        </Reveal>
      </div>
    </section>
  );
}
