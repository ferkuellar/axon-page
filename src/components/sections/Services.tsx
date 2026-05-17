import { services } from "../../data/siteData";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "../ui/ServiceCard";

export function Services() {
  return (
    <section id="servicios" className="page-section relative overflow-hidden bg-axon-dark text-white">
      <div className="absolute inset-0 bg-axon-dark/80" aria-hidden="true" />
      <div className="container-shell relative z-10">
        <SectionHeader
          eyebrow="Servicios"
          title="Servicios productizados para implementar IA real en tu operación."
          description="AxonAI combina agentes, automatización, datos e infraestructura cloud para pasar de idea a sistema funcionando."
          dark
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
