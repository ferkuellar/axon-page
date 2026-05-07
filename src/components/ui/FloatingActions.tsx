import { brand } from "../../data/siteData";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 hidden gap-2 sm:flex" aria-label="Acciones rápidas de contacto">
      <a
        href={`mailto:${brand.email}`}
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-axon-dark/90 px-4 text-xs font-bold text-white no-underline shadow-[0_10px_30px_rgba(6,10,18,.18)] backdrop-blur transition hover:-translate-y-0.5 hover:border-axon-blue/40"
        aria-label="Enviar email a AXON"
      >
        Email
      </a>
      <a
        href={`https://wa.me/${brand.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-10 items-center justify-center rounded-full bg-axon-blue px-4 text-xs font-bold text-white no-underline shadow-[0_10px_30px_rgba(43,127,255,.22)] transition hover:-translate-y-0.5 hover:bg-[#1a6eee]"
        aria-label="Contactar a AXON por WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}
