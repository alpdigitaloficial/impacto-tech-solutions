import { MessageSquareQuote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { WaveDivider } from "./WaveDivider";

const PLACEHOLDERS = ["Atendimento técnico", "Suporte para empresas", "Soluções em informática"];

export function Testimonials() {
  return (
    <section className="relative bg-section-alt py-20 lg:py-28" aria-labelledby="avaliacoes-title">
      <WaveDivider className="text-section-alt" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Avaliações"
          title="Confiança construída no atendimento."
          subtitle="Este espaço receberá avaliações reais de clientes após autorização para publicação."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {PLACEHOLDERS.map((label, index) => (
            <Reveal as="li" key={label} delay={index * 0.08} className="tech-card group min-h-48 p-6">
              <MessageSquareQuote className="tech-card-icon h-6 w-6 text-primary" aria-hidden />
              <h3 id={index === 0 ? "avaliacoes-title" : undefined} className="mt-6 text-base font-semibold">{label}</h3>
              <p className="mt-3 text-sm text-muted-foreground">Avaliação de cliente em breve.</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}