import { plans } from "../../data/siteData";
import { PlanCard } from "../ui/PlanCard";
import { SectionHeader } from "../ui/SectionHeader";

interface PricingProps {
  onNavigate: (target: string) => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  return (
    <section id="precios" className="page-section bg-white">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Formas de empezar"
          title="Elige el punto de entrada correcto para implementar IA sin improvisar."
          description="No publicamos precios cerrados porque el alcance depende del proceso, datos e integraciones. Empezamos con diagnóstico, implementación o mejora continua."
          align="center"
        />
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onSelect={() => onNavigate("contacto")} />
          ))}
        </div>
      </div>
    </section>
  );
}
