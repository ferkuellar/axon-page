import type { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

export function TestimonialCard({ testimonial, compact = false }: TestimonialCardProps) {
  return (
    <article
      className={[
        compact ? "" : "reveal",
        "h-full rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 md:p-7",
        testimonial.featured
          ? "border-axon-blue/45 bg-axon-dark text-white shadow-[0_18px_48px_rgba(43,127,255,.12)]"
          : "border-[#E4E9F2] bg-white text-axon-dark hover:border-[#CBD5E4]",
      ].join(" ")}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={[
              "grid h-11 w-11 place-items-center rounded-full border font-display text-sm font-extrabold",
              testimonial.featured ? "border-white/10 bg-white/10 text-white" : "border-[#E4E9F2] bg-axon-light text-axon-dark",
            ].join(" ")}
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
          <div>
            <h3 className={`font-display text-base font-bold ${testimonial.featured ? "text-white" : "text-axon-dark"}`}>{testimonial.name}</h3>
            <p className={`mt-0.5 text-xs ${testimonial.featured ? "text-[#A8B2C4]" : "text-[#667085]"}`}>
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
        <span className={`hidden rounded-full px-3 py-1 text-xs md:inline-flex ${testimonial.featured ? "bg-white/10 text-[#DCE8F8]" : "bg-axon-light text-[#667085]"}`}>
          {testimonial.category}
        </span>
      </div>
      <blockquote className={`text-base leading-8 ${compact ? "line-clamp-5" : ""} ${testimonial.featured ? "text-[#DCE8F8]" : "text-[#35445A]"}`}>“{testimonial.quote}”</blockquote>
      <div className={`mt-6 border-t pt-5 ${testimonial.featured ? "border-white/10" : "border-[#E4E9F2]"}`}>
        <p className={`font-display text-2xl font-extrabold ${testimonial.featured ? "text-white" : "text-axon-dark"}`}>{testimonial.result}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {testimonial.technologies.map((tech) => (
            <span key={tech} className={`rounded-full px-2.5 py-1 text-xs ${testimonial.featured ? "border border-white/10 text-[#8CB8FF]" : "bg-axon-light text-[#667085]"}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
