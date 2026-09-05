import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/impacto/Header";
import { Hero } from "@/components/impacto/Hero";
import { AuthorityBar } from "@/components/impacto/AuthorityBar";
import { Problems } from "@/components/impacto/Problems";
import { Services } from "@/components/impacto/Services";
import { Diagnostic } from "@/components/impacto/Diagnostic";
import { Process } from "@/components/impacto/Process";
import { Business } from "@/components/impacto/Business";
import { Products } from "@/components/impacto/Products";
import { About } from "@/components/impacto/About";
import { Contact } from "@/components/impacto/Contact";
import { FinalCta } from "@/components/impacto/FinalCta";
import { Footer } from "@/components/impacto/Footer";
import { WhatsAppFloat } from "@/components/impacto/WhatsAppFloat";
import { Testimonials } from "@/components/impacto/Testimonials";

const TITLE = "Impacto Informática | Manutenção de Computadores em Sidrolândia";
const DESCRIPTION =
  "Impacto Informática em Sidrolândia/MS. Manutenção de computadores, impressoras, redes, suporte de software, hardware, equipamentos e acessórios. Desde 2000.";

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Impacto Informática",
  description: DESCRIPTION,
  telephone: "+55 67 3272-6364",
  email: "impacto_micros@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "João Márcio Ferreira Terra, 290B",
    addressLocality: "Sidrolândia",
    addressRegion: "MS",
    addressCountry: "BR",
  },
  areaServed: "Sidrolândia e região",
  foundingDate: "2000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "11:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <Problems />
        <Services />
        <Diagnostic />
        <Process />
        <Business />
        <Products />
        <About />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
