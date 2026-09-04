import { MessageCircle } from "lucide-react";
import { wa } from "@/lib/impacto";

export function WhatsAppFloat() {
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Impacto Informática no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whats text-background shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
