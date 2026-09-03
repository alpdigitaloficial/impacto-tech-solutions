import { HardDrive, MonitorCog, Network, Printer } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const SERVICES = [
  {
    num: "01",
    tag: "Hardware",
    icon: HardDrive,
    title: "Montagem e manutenção de computadores",
    desc: "Diagnóstico, montagem, limpeza, manutenção, upgrades e substituição de componentes.",
    items: ["Diagnóstico", "Montagem", "Limpeza", "Manutenção", "Upgrade", "Componentes"],
  },
  {
    num: "02",
    tag: "Software",
    icon: MonitorCog,
    title: "Suporte e diagnóstico de sistemas",
    desc: "Análise e correção de problemas relacionados ao sistema operacional e softwares.",
    items: [
      "Diagnóstico",
      "Configuração",
      "Correção de erros",
      "Instalação",
      "Otimização",
      "Suporte técnico",
    ],
  },
  {
    num: "03",
    tag: "Redes",
    icon: Network,
    title: "Redes cabeadas e sem fio",
    desc: "Montagem, configuração e manutenção de redes para clientes residenciais e empresas.",
    items: ["Rede cabeada", "Wi-Fi", "Configuração", "Instalação", "Manutenção", "Organização"],
  },
  {
    num: "04",
    tag: "Impressoras",
    icon: Printer,
    title: "Manutenção e configuração de impressoras",
    desc: "Diagnóstico, instalação, configuração e manutenção de impressoras.",
    items: ["Diagnóstico", "Instalação", "Configuração", "Manutenção", "Conexão", "Rede"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="surface-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções para manter sua tecnologia funcionando."
          subtitle="Da análise técnica à manutenção, a Impacto oferece soluções para computadores, redes e impressoras."
        />

        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal
              as="li"
              key={s.num}
              delay={i * 0.08}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(16,24,40,0.35)] lg:p-9"
            >
              <span
                className="pointer-events-none absolute top-5 right-6 font-display text-6xl font-extrabold text-foreground/[0.05]"
                aria-hidden
              >
                {s.num}
              </span>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="eyebrow text-primary">{s.tag}</span>
              </div>
              <h3 className="mt-6 max-w-sm text-xl font-bold sm:text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
