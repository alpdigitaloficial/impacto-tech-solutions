import { Monitor, Printer, Network, MonitorCog, PackageSearch } from "lucide-react";
import { Reveal } from "./Reveal";
import { wa } from "@/lib/impacto";
import { WaveDivider } from "./WaveDivider";

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
      <defs><filter id="office-glow" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
      <g stroke="var(--glow)" strokeWidth="1.4" fill="none" opacity="0.32">
        <path d="M210 82 78 162" /><path d="M210 82 210 162" /><path d="M210 82 342 162" />
      </g>
      <g stroke="var(--glow)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        {["M210 82 78 162", "M210 82 210 162", "M210 82 342 162"].map((d, i) => <path key={d} d={d} strokeDasharray="5 180" className="anim-dash" style={{ animationDelay: `${i * 1.25}s` }} />)}
      </g>
      <g className="group cursor-default">
        <rect x="172" y="62" width="76" height="24" rx="5" fill="var(--card)" stroke="var(--glow)" strokeOpacity="0.45" className="transition-all duration-300 group-hover:[filter:url(#office-glow)]" />
        <circle cx="187" cy="74" r="2" fill="var(--glow)" /><circle cx="197" cy="74" r="2" fill="var(--glow)" /><path d="M216 74h19" stroke="var(--glow)" strokeOpacity="0.65" />
        <g stroke="var(--glow)" strokeWidth="2" fill="none" strokeLinecap="round" style={{ transformOrigin: "210px 52px" }}>
          <path d="M193 53a24 24 0 0 1 34 0" className="anim-wave-pulse" />
          <path d="M200 43a14 14 0 0 1 20 0" className="anim-wave-pulse" style={{ animationDelay: ".55s" }} />
        </g>
      </g>
      {[
        { x: 78, type: "monitor" }, { x: 210, type: "printer" }, { x: 342, type: "layers" },
      ].map((node) => (
        <g key={node.type} className="group cursor-default">
          <rect x={node.x - 42} y="155" width="84" height="72" rx="7" fill="var(--card)" stroke="var(--glow)" strokeOpacity="0.28" className="transition-all duration-300 group-hover:stroke-primary group-hover:[filter:url(#office-glow)]" />
          <g transform={`translate(${node.x} 190)`} fill="none" stroke="var(--glow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {node.type === "monitor" && <><rect x="-20" y="-17" width="40" height="27" rx="3" /><path d="M-7 18h14M0 10v8" /></>}
            {node.type === "printer" && <><rect x="-20" y="-9" width="40" height="25" rx="3" /><path d="M-13-18h26v15M-12 8h24v15h-24z" /><circle cx="13" cy="-2" r="1" fill="var(--glow)" /></>}
            {node.type === "layers" && <><path d="m0-20 22 11L0 2-22-9Z" /><path d="m-22 2 22 11L22 2M-22 13 0 24l22-11" /></>}
          </g>
        </g>
      ))}
    </svg>
  );
}

export function Business() {
  return (
    <section id="empresas" className="surface-light relative py-20 lg:py-28">
      <WaveDivider className="text-section" />
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
                  className="tech-card group p-6"
                >
                  <c.icon className="tech-card-icon h-5 w-5 text-primary" aria-hidden />
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
