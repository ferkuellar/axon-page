import type { Service } from "../../types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="reveal rounded-xl border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-axon-blue/40 md:p-7">
      <p className="eyebrow mb-3">{service.tag}</p>
      <h3 className="mb-3 font-display text-xl font-bold leading-tight text-white">{service.name}</h3>
      <p className="text-sm leading-7 text-[#A8B2C4]">{service.description}</p>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label={`Incluye ${service.name}`}>
        {service.chips.map((chip) => (
          <span key={chip} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-[#8CB8FF]">
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}
