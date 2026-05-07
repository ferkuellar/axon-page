import { Logo } from "./Navbar";
import { IntelligentFlowCanvas } from "../ui/IntelligentFlowCanvas";
import { brand, services } from "../../data/siteData";
import type { NavLink } from "../../types";

interface FooterProps {
  links: NavLink[];
  onNavigate: (target: string) => void;
}

export function Footer({ links, onNavigate }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-axon-surface bg-[#030608]">
      <IntelligentFlowCanvas density="ambient" className="opacity-25" />
      <div className="absolute inset-0 bg-[#030608]/90" aria-hidden="true" />
      <div className="container-shell relative z-10 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#6F7D93]">
              Estudio digital de crecimiento, automatización e inteligencia comercial para empresas que necesitan sistemas claros, medibles y escalables.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Web", "CRM", "IA", "Analytics"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#8CB8FF]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title="Navegación">
            {links.map((link) => (
              <button key={link.target} className="text-left text-sm text-[#6F7D93] transition hover:text-white" type="button" onClick={() => onNavigate(link.target)}>
                {link.label}
              </button>
            ))}
          </FooterColumn>

          <FooterColumn title="Servicios">
            {services.map((service) => (
              <button key={service.name} className="text-left text-sm text-[#6F7D93] transition hover:text-white" type="button" onClick={() => onNavigate("servicios")}>
                {service.name}
              </button>
            ))}
          </FooterColumn>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Contacto</h2>
            <div className="mt-5 grid gap-3">
              <a className="text-sm text-[#6F7D93] transition hover:text-white" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
              <a className="text-sm text-[#6F7D93] transition hover:text-white" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <p className="text-sm text-[#6F7D93]">{brand.location}</p>
            </div>
            <button className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-axon-blue px-5 text-sm font-bold text-white transition hover:bg-[#1a6eee]" type="button" onClick={() => onNavigate("contacto")}>
              Agendar Discovery
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#3A4860] md:flex-row md:items-center md:justify-between">
          <p>© 2026 AXON. Todos los derechos reservados.</p>
          <p>Infraestructura digital para empresas · México</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">{title}</h2>
      <div className="mt-5 grid gap-3">{children}</div>
    </div>
  );
}
