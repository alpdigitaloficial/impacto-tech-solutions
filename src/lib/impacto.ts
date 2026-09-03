export const WHATSAPP_NUMBER = "5567996483702";
export const PHONE_DISPLAY = "(67) 3272-6364";
export const PHONE_HREF = "+556732726364";
export const WHATSAPP_DISPLAY = "(67) 99648-3702";
export const EMAIL = "impacto_micros@hotmail.com";
export const ADDRESS = "João Márcio Ferreira Terra, nº 290B — Sidrolândia/MS";
export const MAPS_QUERY = encodeURIComponent(
  "Impacto Informática, João Márcio Ferreira Terra, 290B, Sidrolândia - MS",
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Impacto Informática e gostaria de solicitar atendimento.";

export function wa(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Empresas", href: "#empresas" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];
