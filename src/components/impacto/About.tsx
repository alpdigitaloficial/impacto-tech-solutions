import { Reveal } from "./Reveal";
import { PowerMark } from "./Logo";
import { WaveDivider } from "./WaveDivider";

const TIMELINE = [
  { year: "2000", title: "Início da Impacto", desc: "" },
  { year: "Evolução", title: "A tecnologia mudou", desc: "" },
  { year: "Experiência", title: "Conhecimento técnico acumulado", desc: "" },
  { year: "Hoje", title: "Soluções em informática para clientes e empresas", desc: "" },
];

const DIFFS = [
  { num: "01", title: "Análise técnica", desc: "Identificação da origem do problema." },
  { num: "02", title: "Hardware + Software", desc: "Conhecimento dos dois lados da solução." },
  { num: "03", title: "Experiência", desc: "Atuação no mercado desde 2000." },
  { num: "04", title: "Atendimento", desc: "Soluções para clientes e empresas." },
];

export function About() {
  return (
    <section id="sobre" className="surface-light relative py-20 lg:py-28">
      <WaveDivider className="text-section" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 flex items-center gap-2 text-primary">
                <span className="h-px w-8 bg-primary/60" aria-hidden />
                Sobre a empresa
              </p>
              <h2 className="text-3xl font-bold text-balance sm:text-4xl">
                Experiência que começou em 2000.
              </h2>
              <p className="mt-5 text-muted-foreground">
                A tecnologia mudou. Os equipamentos evoluíram. Os problemas também. Mas uma coisa
                permaneceu: a necessidade de contar com alguém que realmente entende do assunto.
              </p>
              <p className="mt-4 text-muted-foreground">
                A Impacto Informática atua em Sidrolândia e região oferecendo manutenção, suporte e
                soluções em informática para clientes e empresas.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <div className="tech-card group flex items-center gap-5 p-7">
                <span className="text-primary">
                  <PowerMark className="h-12 w-12" />
                </span>
                <p className="font-display text-3xl font-extrabold tracking-[0.06em] uppercase sm:text-4xl">
                  Desde 2000
                </p>
              </div>
            </Reveal>
          </div>

          <ol className="relative">
            <div className="absolute top-2 bottom-2 left-[7px] w-px bg-border" aria-hidden />
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.12} className="relative pb-9 pl-10 last:pb-0">
                <span className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-primary bg-card" aria-hidden />
                <p className="font-display text-sm font-bold tracking-[0.16em] uppercase text-primary">
                  {t.year}
                </p>
                <p className="mt-1.5 text-base font-medium">{t.title}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <ul className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFS.map((d, i) => (
            <Reveal as="li" key={d.num} delay={i * 0.08} className="tech-card group p-6">
              <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">{d.num}</p>
              <h3 className="mt-4 text-sm font-bold tracking-[0.08em] uppercase">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
