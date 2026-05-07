import { differences } from "../../data/siteData";
import { DifferenceCard } from "../ui/DifferenceCard";
import { IntelligentFlowCanvas } from "../ui/IntelligentFlowCanvas";
import { SectionHeader } from "../ui/SectionHeader";

export function WhyAxon() {
  return (
    <section id="nosotros" className="page-section relative overflow-hidden bg-axon-dark text-white">
      <IntelligentFlowCanvas density="ambient" className="opacity-45" />
      <div className="absolute inset-0 bg-axon-dark/80" aria-hidden="true" />
      <div className="container-shell relative z-10">
        <SectionHeader
          eyebrow="Por qué AXON"
          title='No somos otra agencia de "redes y diseño".'
          description="Somos un estudio digital de crecimiento, automatización e inteligencia comercial para empresas que necesitan claridad, velocidad y control."
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
