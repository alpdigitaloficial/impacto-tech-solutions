import { Reveal } from "./Reveal";

const ITEMS = [
  { title: "Desde 2000", desc: "Experiência no mercado" },
  { title: "Hardware + Software", desc: "Análise completa" },
  { title: "PC + Redes + Impressoras", desc: "Soluções em informática" },
  { title: "Sidrolândia + Região", desc: "Atendimento local" },
];

export function AuthorityBar() {
  return (
    <section aria-label="Indicadores da empresa" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="py-7 sm:px-6 lg:py-9">
            <p className="font-display text-sm font-bold tracking-[0.1em] uppercase text-foreground">
              {item.title}
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
