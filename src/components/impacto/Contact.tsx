import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  ADDRESS,
  EMAIL,
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_DISPLAY,
  wa,
} from "@/lib/impacto";

const NEEDS = [
  "Manutenção de computador",
  "Problema com impressora",
  "Rede/Wi-Fi",
  "Suporte de software",
  "Compra de equipamento",
  "Compra de acessórios",
  "Atendimento para empresa",
  "Outro",
];

const QUICK = [
  { label: "Preciso de manutenção", msg: "Olá! Preciso de manutenção. Vim pelo site da Impacto Informática." },
  { label: "Tenho problema com impressora", msg: "Olá! Tenho problema com impressora. Vim pelo site da Impacto Informática." },
  { label: "Preciso de suporte de rede", msg: "Olá! Preciso de suporte de rede. Vim pelo site da Impacto Informática." },
  { label: "Quero comprar um equipamento", msg: "Olá! Quero comprar um equipamento. Vim pelo site da Impacto Informática." },
  { label: "Sou empresa e preciso de suporte", msg: "Olá! Sou empresa e preciso de suporte. Vim pelo site da Impacto Informática." },
];

export function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", tipo: "", mensagem: "" });
  type Errors = { nome?: string; telefone?: string; tipo?: string; mensagem?: string };
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Errors = {};
    if (form.nome.trim().length < 2) e.nome = "Informe seu nome.";
    if (form.telefone.replace(/\D/g, "").length < 10) e.telefone = "Informe um telefone válido com DDD.";
    if (!form.tipo) e.tipo = "Selecione o tipo de necessidade.";
    if (form.mensagem.trim().length < 5) e.mensagem = "Descreva brevemente sua necessidade.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    // Sem backend configurado: a solicitação é encaminhada pelo WhatsApp.
    const msg = `Olá! Vim pelo site da Impacto Informática.\nNome: ${form.nome}\nTelefone: ${form.telefone}\nNecessidade: ${form.tipo}\nMensagem: ${form.mensagem}`;
    setSent(true);
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Localização e contato"
          title="Estamos em Sidrolândia."
          subtitle="Atendemos clientes e empresas em Sidrolândia e região."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-bold">Impacto Informática</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{ADDRESS}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                  <a href={`tel:${PHONE_HREF}`} className="hover:text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                  <a href={wa()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                  <a href={`mailto:${EMAIL}`} className="break-all hover:text-primary">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">
                    Segunda a sexta: 08:00 às 18:00
                    <br />
                    Sábado: 08:00 às 11:00
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={wa()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Falar no WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-xs font-semibold tracking-[0.1em] uppercase transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Abrir localização
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Mapa da localização da Impacto Informática em Sidrolândia/MS"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>

            <div>
              <p className="eyebrow mb-3 text-muted-foreground">Atalhos de atendimento</p>
              <ul className="flex flex-wrap gap-2">
                {QUICK.map((q) => (
                  <li key={q.label}>
                    <a
                      href={wa(q.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-md border border-border bg-card px-4 py-2.5 text-xs font-medium transition-colors hover:border-primary/50"
                    >
                      {q.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl border border-border bg-card p-7 lg:p-9"
            >
              <h3 className="font-display text-xl font-bold">Solicite atendimento</h3>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="nome" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    className={field}
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? "erro-nome" : undefined}
                  />
                  {errors.nome && (
                    <p id="erro-nome" className="mt-1.5 text-xs text-destructive">
                      {errors.nome}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefone" className="text-sm font-medium">
                    Telefone/WhatsApp
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    placeholder="(67) 99999-9999"
                    className={field}
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    aria-invalid={!!errors.telefone}
                    aria-describedby={errors.telefone ? "erro-telefone" : undefined}
                  />
                  {errors.telefone && (
                    <p id="erro-telefone" className="mt-1.5 text-xs text-destructive">
                      {errors.telefone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="tipo" className="text-sm font-medium">
                    Tipo de necessidade
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    className={field}
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    aria-invalid={!!errors.tipo}
                    aria-describedby={errors.tipo ? "erro-tipo" : undefined}
                  >
                    <option value="">Selecione</option>
                    {NEEDS.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  {errors.tipo && (
                    <p id="erro-tipo" className="mt-1.5 text-xs text-destructive">
                      {errors.tipo}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="mensagem" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className={field}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    aria-invalid={!!errors.mensagem}
                    aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
                  />
                  {errors.mensagem && (
                    <p id="erro-mensagem" className="mt-1.5 text-xs text-destructive">
                      {errors.mensagem}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-md bg-primary px-6 py-4 text-sm font-semibold tracking-[0.1em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enviar solicitação
              </button>
              <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
                {sent
                  ? "Solicitação preparada. Conclua o envio na conversa do WhatsApp."
                  : "O envio abre uma conversa no WhatsApp com os dados preenchidos."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
