import { brand } from "../../data/siteData";
import { ContactForm } from "../ui/ContactForm";
import { IntelligentFlowCanvas } from "../ui/IntelligentFlowCanvas";

export function ContactCTA() {
  return (
    <section id="contacto" className="page-section relative overflow-hidden bg-axon-dark text-white">
      <IntelligentFlowCanvas density="ambient" className="opacity-35" />
      <div className="absolute inset-0 bg-axon-dark/85" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-axon-blue/70 to-transparent" aria-hidden="true" />
      <div className="container-shell relative z-10 grid items-start gap-11 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="reveal">
          <p className="eyebrow">Contacto</p>
          <h2 className="font-display text-[clamp(2.125rem,5vw,3.125rem)] font-extrabold leading-[1.08] text-white">Solicita un AI Audit y recibe una ruta clara de implementación.</h2>
          <p className="mt-5 max-w-[540px] text-base leading-8 text-[#A8B2C4]">
            Identificamos procesos automatizables, fuentes de datos, integraciones y prioridades. Después definimos el camino más corto hacia un sistema funcionando.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${brand.email}`} className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-white bg-white px-8 py-4 font-bold text-axon-dark no-underline transition hover:-translate-y-0.5">
              Escribir por email
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-axon-border bg-transparent px-8 py-4 font-bold text-white no-underline transition hover:-translate-y-0.5 hover:border-axon-blue">
              WhatsApp
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Señales de confianza">
            {["ROI primero", "QA antes de lanzar", "Arquitectura documentada"].map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-[#A8B2C4]">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6F7D93]">{brand.location}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
