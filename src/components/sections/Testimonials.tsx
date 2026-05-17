import { testimonials } from "../../data/siteData";
import { TestimonialCard } from "../ui/TestimonialCard";

const marqueeTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="page-section overflow-hidden bg-axon-light">
      <div className="container-shell">
        {testimonials.length > 0 ? (
          <div className="reveal relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-16 bg-gradient-to-r from-axon-light to-transparent md:w-28" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-16 bg-gradient-to-l from-axon-light to-transparent md:w-28" aria-hidden="true" />
            <div className="testimonial-marquee relative z-10 flex w-max gap-5 hover:[animation-play-state:paused]">
              {marqueeTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.name}-${testimonial.company}-${index}`} className="w-[min(82vw,390px)] shrink-0">
                  <TestimonialCard testimonial={testimonial} compact />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="reveal mt-10 rounded-2xl border border-[#E4E9F2] bg-white p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-axon-dark">Testimonios en preparación</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#667085]">Pronto agregaremos casos validados con métricas y contexto de proyecto.</p>
          </div>
        )}
      </div>
    </section>
  );
}
