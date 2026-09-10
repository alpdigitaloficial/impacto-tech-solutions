import { Monitor, Printer, Cpu, Mouse, Router, Cable, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { wa } from "@/lib/impacto";
import { WaveDivider } from "./WaveDivider";
import { Button } from "@/components/ui/button";
import peripheralsImage from "@/assets/product-peripherals.jpg";
import routerImage from "@/assets/product-router.jpg";
import inkRefillImage from "@/assets/product-ink-refill-upload.jpg";
import cpuImage from "@/assets/product-cpu-upload.jpg";

const CATEGORIES = [
  { icon: Monitor, title: "Computadores" },
  { icon: Printer, title: "Impressoras" },
  { icon: Cpu, title: "Componentes" },
  { icon: Mouse, title: "Periféricos" },
  { icon: Router, title: "Equipamentos de rede" },
  { icon: Cable, title: "Acessórios" },
];

const BRANDS = ["Intelbras", "Logitech", "Epson", "Entre outras"];

const PRODUCTS = [
  {
    name: "Periféricos e Acessórios",
    category: "Periféricos e acessórios",
    image: peripheralsImage,
    alt: "Composição profissional com teclado, mouse, hub USB e cabos",
  },
  {
    name: "Equipamentos de Rede",
    category: "Equipamentos de rede",
    description: "Roteador Wi-Fi e Acessórios",
    image: routerImage,
    alt: "Roteador Wi-Fi preto com antenas e indicadores azuis",
  },
  {
    name: "Refil de Tinta Epson",
    category: "Suprimentos",
    image: inkRefillImage,
    alt: "Frascos de refil de tinta colorida diante de uma impressora",
  },
  {
    name: "CPU",
    category: "Computadores",
    image: cpuImage,
    alt: "Gabinete de computador preto em fundo azul-marinho",
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative bg-section-alt py-20 lg:py-28">
      <WaveDivider className="text-section-alt" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Produtos"
          title="Precisa comprar tecnologia?"
          subtitle="Encontre o equipamento certo para sua necessidade."
        />
        <Reveal delay={0.1} className="mt-4 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            A Impacto Informática trabalha com equipamentos, componentes e acessórios de informática.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={i * 0.06}
              className="tech-card group flex items-center gap-4 p-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <c.icon className="tech-card-icon h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold tracking-[0.08em] uppercase">{c.title}</h3>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-primary">Vitrine</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Produtos em destaque</h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground sm:text-right">
                Imagens ilustrativas. Consulte modelos e disponibilidade com nossa equipe.
              </p>
            </div>
          </Reveal>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((product, i) => (
              <Reveal as="li" key={product.name} delay={i * 0.08} className="tech-card group flex min-h-full flex-col">
                <div className="aspect-[4/3] overflow-hidden border-b border-border bg-background">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex-1">
                    <p className="eyebrow text-primary">{product.category}</p>
                    <h4 className="mt-2 text-xl font-bold">{product.name}</h4>
                    {product.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                    )}
                  </div>
                  <Button asChild size="lg" className="mt-6 w-full font-semibold">
                    <a
                      href={wa(`Olá, tenho interesse no ${product.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle aria-hidden />
                      Comprar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="tech-card group mt-14 p-8 lg:p-10">
          <h3 className="eyebrow text-muted-foreground">Trabalhamos com marcas reconhecidas</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {BRANDS.map((b) => (
              <li
                key={b}
                className="tech-pill rounded-md border border-border px-4 py-2.5 font-display text-sm font-semibold tracking-[0.08em] uppercase"
              >
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Não sabe qual equipamento escolher? Fale com nossa equipe.
            </p>
            <a
              href={wa("Olá! Vim pelo site da Impacto Informática e quero comprar um equipamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Consultar produtos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
