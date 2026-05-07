import { benefits } from "../../data/siteData";

export function Benefits() {
  return (
    <section className="border-y border-[#E8EDF5] bg-white py-12 md:py-16" aria-label="Beneficios principales">
      <div className="container-shell grid gap-4 md:grid-cols-3">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="reveal rounded-xl border border-[#E8EDF5] bg-white p-6 transition duration-200 hover:border-axon-blue/30">
            <h2 className="font-display text-lg font-bold text-axon-dark">{benefit.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#5C687A]">{benefit.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
