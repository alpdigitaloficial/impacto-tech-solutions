import { Gauge, Printer, Wifi, Cpu } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { wa } from "@/lib/impacto";
import { WaveDivider } from "./WaveDivider";

const CARDS = [
  {
    icon: Gauge,
    title: "Computador lento",
    desc: "Travamentos, lentidão, erros ou baixo desempenho.",
  },
  {
    icon: Printer,
    title: "Impressora com problema",
    desc: "Falhas, erros, problemas de instalação, configuração ou conexão.",
  },
  {
    icon: Wifi,
    title: "Rede instável",
    desc: "Problemas de Wi-Fi, cabeamento, conexão ou configuração.",
  },
  {
    icon: Cpu,
    title: "Equipamento com defeito",
    desc: "Identifique se o problema está no hardware, software ou configuração.",
  },
];

export function Problems() {
  return (
    <section className="relative bg-section py-20 lg:py-28">
      <WaveDivider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sintomas comuns"
          title="Quando a tecnologia para, sua rotina também pode parar."
          subtitle="Computador lento, impressora com problema ou rede instável? Antes de trocar equipamentos ou tentar resolver sozinho, descubra a verdadeira causa."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={i * 0.08}
              className="tech-card group p-6"
            >
              <c.icon className="tech-card-icon h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={wa("Olá! Vim pelo site da Impacto Informática e preciso de ajuda com um equipamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Preciso de ajuda
          </a>
        </Reveal>
      </div>
    </section>
  );
}
