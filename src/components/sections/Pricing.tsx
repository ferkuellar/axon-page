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
          eyebrow="Inversión"
          title="Planes pensados para madurar tu operación digital por etapas."
          description="No eliminamos alcance estratégico para bajar precio: cada plan incluye estructura, medición y entregables listos para operar."
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
