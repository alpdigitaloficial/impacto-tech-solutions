import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  { num: "01", title: "Você entra em contato", desc: "Conte o que está acontecendo." },
  { num: "02", title: "Analisamos", desc: "Identificamos a origem do problema." },
  { num: "03", title: "Apresentamos a solução", desc: "Você sabe o que precisa ser feito." },
  { num: "04", title: "Executamos", desc: "Realizamos o serviço aprovado." },
  { num: "05", title: "Tecnologia funcionando", desc: "Você volta a usar seu equipamento." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = scaleX;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Processo de atendimento" title="Do problema à solução." />

        <div ref={ref} className="relative mt-14">
          {/* trilho desktop */}
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" aria-hidden>
            <motion.div className="h-px origin-left bg-primary" style={{ scaleX }} />
          </div>
          {/* trilho mobile */}
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border lg:hidden" aria-hidden>
            <motion.div className="h-full w-px origin-top bg-primary" style={{ scaleY }} />
          </div>

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.num} delay={i * 0.1} className="relative pl-12 lg:pl-0">
                <span className="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background text-[0.7rem] font-bold text-primary lg:relative lg:mb-6">
                  {s.num}
                </span>
                <h3 className="text-base font-semibold lg:mt-0">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
