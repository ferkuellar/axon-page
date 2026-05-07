import type { Difference } from "../../types";

interface DifferenceCardProps {
  difference: Difference;
}

export function DifferenceCard({ difference }: DifferenceCardProps) {
  return (
    <article className="reveal relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-7 transition duration-200 before:absolute before:bottom-7 before:left-0 before:top-7 before:w-[2px] before:rounded-r before:bg-axon-blue hover:border-axon-blue/40">
      <p className="mb-4 font-display text-sm font-extrabold text-axon-blue">{difference.number}</p>
      <h3 className="mb-3 font-display text-xl font-bold leading-tight text-white">{difference.title}</h3>
      <p className="text-sm leading-7 text-[#A8B2C4]">{difference.body}</p>
    </article>
  );
}
