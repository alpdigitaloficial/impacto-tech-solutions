import { Logo } from "./Logo";
import {
  ADDRESS,
  EMAIL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_DISPLAY,
  wa,
} from "@/lib/impacto";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs font-display text-sm font-bold tracking-[0.1em] uppercase text-muted-foreground">
            Tecnologia que funciona. Suporte que resolve.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="eyebrow text-muted-foreground">Navegação</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-muted-foreground">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              WhatsApp:{" "}
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              Telefone:{" "}
              <a href={`tel:${PHONE_HREF}`} className="text-foreground hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${EMAIL}`} className="break-all text-foreground hover:text-primary">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
            <li>
              Segunda a sexta 08:00–18:00
              <br />
              Sábado 08:00–11:00
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Impacto Informática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
