import type { Benefit, Brand, HeroMetric } from "../types";

export const brand: Brand = {
  email: import.meta.env.VITE_CONTACT_EMAIL || "hola@axonai.mx",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "526140000000",
  location: "Chihuahua, México",
};

export const heroMetrics: HeroMetric[] = [
  { value: "2-4", label: "Semanas para primeros resultados" },
  { value: "48h", label: "Propuesta con alcance claro" },
  { value: "ROI", label: "Caso de negocio antes de construir" },
];

export const benefits: Benefit[] = [
  {
    title: "AI Automation",
    body: "Agentes inteligentes, bots de WhatsApp y flujos automatizados para eliminar trabajo manual repetitivo.",
  },
  {
    title: "Data Intelligence",
    body: "Dashboards ejecutivos, KPIs y analítica para convertir datos dispersos en decisiones operativas.",
  },
  {
    title: "Cloud AI Infrastructure",
    body: "APIs inteligentes, modelos de IA e infraestructura cloud preparada para producción, seguridad y escala.",
  },
];
