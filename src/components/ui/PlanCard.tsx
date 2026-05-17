import { Button } from "./Button";
import type { Plan } from "../../types";

interface PlanCardProps {
  plan: Plan;
  onSelect: () => void;
}

export function PlanCard({ plan, onSelect }: PlanCardProps) {
  const highlighted = plan.highlighted;

  return (
    <article
      className={[
        "reveal rounded-xl border p-7 transition duration-200",
        highlighted ? "border-axon-blue bg-axon-dark shadow-[0_18px_48px_rgba(43,127,255,.12)]" : "border-[#E4E9F2] bg-white hover:border-[#CBD5E4]",
      ].join(" ")}
    >
      {highlighted ? (
        <p className="mb-6 inline-flex rounded-full bg-axon-blue px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">Más solicitado</p>
      ) : null}
      <p className="eyebrow mb-3">{plan.tag}</p>
      <h3 className={`mb-3 font-display text-[21px] font-bold ${highlighted ? "text-white" : "text-axon-dark"}`}>{plan.name}</h3>
      <p className="mb-6 text-xs leading-5 text-axon-muted">{plan.note}</p>
      <ul className={`mb-8 grid gap-3 border-t pt-6 ${highlighted ? "border-white/10" : "border-[#E4E9F2]"}`}>
        {plan.items.map((item) => (
          <li key={item} className={`flex items-start gap-3 text-sm leading-6 ${highlighted ? "text-[#C8D6E8]" : "text-[#35445A]"}`}>
            <span className="mt-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-axon-blue/10 text-xs font-extrabold text-axon-blue" aria-hidden="true">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <Button variant={highlighted ? "primary" : "outline"} fullWidth onClick={onSelect}>
        Solicitar diagnóstico
      </Button>
    </article>
  );
}
