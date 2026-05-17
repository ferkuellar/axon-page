import { differences } from "../../data/siteData";
import { DifferenceCard } from "../ui/DifferenceCard";
import { SectionHeader } from "../ui/SectionHeader";

export function WhyAxon() {
  return (
    <section id="nosotros" className="page-section relative overflow-hidden bg-axon-dark text-white">
      <div className="absolute inset-0 bg-axon-dark/80" aria-hidden="true" />
      <div className="container-shell relative z-10">
        <SectionHeader
          eyebrow="Por qué AxonAI"
          title='No somos una agencia que agregó "IA" a su portafolio.'
          description="Somos un equipo técnico que implementa, despliega y opera sistemas de IA con métricas, documentación y criterio comercial."
          dark
        />
        <div className="grid gap-5 md:grid-cols-2">
          {differences.map((difference) => (
            <DifferenceCard key={difference.number} difference={difference} />
          ))}
        </div>
      </div>
    </section>
  );
}
