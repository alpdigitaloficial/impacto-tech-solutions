import { Monitor, Printer, Network, MonitorCog, PackageSearch } from "lucide-react";
import { Reveal } from "./Reveal";
import { wa } from "@/lib/impacto";

const CARDS = [
  { icon: Monitor, title: "Computadores", desc: "Manutenção e suporte." },
  { icon: Printer, title: "Impressoras", desc: "Instalação, configuração e manutenção." },
  { icon: Network, title: "Redes", desc: "Estruturas cabeadas e Wi-Fi." },
  { icon: MonitorCog, title: "Software", desc: "Diagnóstico e correção." },
  { icon: PackageSearch, title: "Equipamentos", desc: "Orientação e fornecimento." },
];

function OfficeIllustration() {
  return (
    <svg
      viewBox="0 0 420 280"
      className="h-auto w-full text-foreground"
      role="img"
      aria-label="Escritório conectado com computadores, impressora, roteador Wi-Fi e rede"
    >
      <rect x="30" y="200" width="360" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
      {[70, 190, 310].map((x, i) => (
        <g key={x} className="anim-float" style={{ animationDelay: `${i * 0.9}s`, transformOrigin: `${x}px 170px` }}>
          <rect x={x - 38} y="130" width="76" height="52" rx="5" fill="var(--card)" stroke="currentColor" strokeOpacity="0.2" />
          <rect x={x - 30} y="138" width="60" height="36" rx="3" fill="var(--ink)" stroke="var(--glow)" strokeOpacity="0.3" />
          <path d={`M${x - 12} 182h24l5 14h-34z`} fill="var(--card)" stroke="currentColor" strokeOpacity="0.2" />
        </g>
      ))}
      <g stroke="var(--glow)" strokeOpacity="0.35" strokeWidth="1" fill="none">
        <path d="M70 130 210 70M190 130 210 70M310 130 210 70" />
      </g>
      <g stroke="var(--glow)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M70 130 210 70" strokeDasharray="4 180" className="anim-dash" />
        <path d="M310 130 210 70" strokeDasharray="4 180" className="anim-dash" style={{ animationDelay: "2s" }} />
      </g>
      <g>
        <rect x="182" y="60" width="56" height="16" rx="4" fill="var(--card)" stroke="currentColor" strokeOpacity="0.22" />
        <g stroke="var(--glow)" strokeWidth="2" fill="none" strokeLinecap="round" className="anim-pulse-soft" style={{ transformOrigin: "210px 48px" }}>
          <path d="M196 50a20 20 0 0 1 28 0" />
          <path d="M203 40a10 10 0 0 1 14 0" />
        </g>
      </g>
      <g transform="translate(360 150)">
        <rect x="-24" y="-6" width="48" height="24" rx="3" fill="var(--card)" stroke="currentColor" strokeOpacity="0.2" />
        <rect x="-15" y="-20" width="30" height="14" rx="2" fill="none" stroke="var(--glow)" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

export function Business() {
  return (
    <section id="empresas" className="surface-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 flex items-center gap-2 text-primary">
                <span className="h-px w-8 bg-primary/60" aria-hidden />
                Para empresas
              </p>
              <h2 className="text-3xl font-bold text-balance sm:text-4xl">
                Sua empresa não pode parar por causa da tecnologia.
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Computadores, impressoras, sistemas e redes fazem parte da operação diária. A Impacto
                oferece suporte e soluções para manter sua estrutura tecnológica funcionando.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <OfficeIllustration />
            </Reveal>
          </div>

          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {CARDS.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.title}
                  delay={i * 0.08}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <c.icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3} className="mt-8">
              <a
                href={wa("Olá! Sou empresa e preciso de suporte da Impacto Informática.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-4 text-center text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Preciso de suporte para minha empresa
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
