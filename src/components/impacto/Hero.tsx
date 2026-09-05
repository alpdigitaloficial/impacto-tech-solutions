import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";
import { wa } from "@/lib/impacto";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="hero-glow pointer-events-none absolute -top-48 -right-36 h-[620px] w-[620px]" aria-hidden />
      <div className="hero-glow pointer-events-none absolute -bottom-72 -left-40 h-[620px] w-[620px] opacity-60" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-foreground/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary anim-pulse-soft" aria-hidden />
            Desde 2000
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl"
          >
            Seu equipamento precisa funcionar.
            <span className="text-gradient-blue mt-2 block">A Impacto sabe como fazer isso.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Manutenção, suporte e soluções em informática para computadores, impressoras, redes e
            equipamentos em Sidrolândia e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_14px_34px_-12px_color-mix(in_oklab,var(--glow)_72%,transparent)]"
            >
              Solicitar atendimento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#servicos"
              className="glass-button inline-flex items-center justify-center rounded-md border border-border px-6 py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              Conhecer serviços
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto w-full max-w-lg"
        >
          <HeroIllustration className="text-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
