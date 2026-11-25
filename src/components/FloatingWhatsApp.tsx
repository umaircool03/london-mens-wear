import { BUSINESS } from "@/data/store";
import { WhatsAppIcon } from "./Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with London Men's Wear on WhatsApp (+91-9935007339)"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-gold-400"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
