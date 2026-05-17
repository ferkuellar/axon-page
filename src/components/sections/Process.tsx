import { steps } from "../../data/siteData";
import { SectionHeader } from "../ui/SectionHeader";

export function Process() {
  return (
    <section id="proceso" className="page-section bg-axon-light">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Metodología"
          title="Un flujo de entrega claro para llevar IA a producción."
          description="Cada etapa tiene entregables, revisiones y criterios técnicos visibles para reducir riesgo y mantener control."
          align="center"
        />
        <div className="relative grid gap-8 md:grid-cols-6 md:gap-3">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#E4E9F2] md:block" aria-hidden="true" />
          {steps.map((step) => (
            <article key={step.number} className="reveal relative z-10 text-center">
              <div
                className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border-2 border-[#E4E9F2] bg-white font-display font-extrabold text-axon-blue"
              >
                {step.number}
              </div>
              <h3 className="mb-2 font-display text-[15px] font-bold text-axon-dark">{step.name}</h3>
              <p className="text-sm leading-6 text-axon-muted md:text-[13px]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
