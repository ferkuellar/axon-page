import { heroMetrics } from "../../data/siteData";
import heroAiFlow from "../../assets/hero-ai-flow.gif";
import { Button } from "../ui/Button";
import { IntelligentFlowCanvas } from "../ui/IntelligentFlowCanvas";

interface HeroProps {
  onNavigate: (target: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="inicio" className="relative flex min-h-[92svh] items-center overflow-hidden bg-axon-dark py-28 text-center md:py-32">
      <div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <IntelligentFlowCanvas />
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden" aria-hidden="true">
        <img
          src={heroAiFlow}
          alt=""
          className="mt-10 h-[460px] w-[min(1220px,150vw)] scale-110 object-cover opacity-28 mix-blend-screen blur-[1.4px] saturate-150 contrast-125 [mask-image:radial-gradient(ellipse_at_center,black_0%,black_42%,rgba(0,0,0,.68)_58%,transparent_82%)] md:-mt-4 md:h-[700px] md:w-[min(1380px,118vw)]"
          loading="eager"
        />
      </div>
      <div className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,127,255,.11)_0%,transparent_68%)] blur-sm" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,10,18,.32)_0%,rgba(6,10,18,.78)_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-axon-dark/55 via-axon-dark/18 to-axon-dark" aria-hidden="true" />
      <div className="container-shell reveal relative z-10 max-w-[880px]">
        <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#8CB8FF]">
          <span className="h-1.5 w-1.5 rounded-full bg-axon-blue" aria-hidden="true" />
          Agencia de inteligencia artificial en México
        </p>
        <h1 className="m-0 font-display text-[clamp(2.8rem,8vw,5.8rem)] font-extrabold leading-[0.98] tracking-normal text-white">
          Implementamos IA en tu empresa en semanas, no en meses.
        </h1>
        <p className="mx-auto mb-9 mt-6 max-w-[660px] text-base leading-8 text-[#A8B2C4] md:text-lg">
          AxonAI construye agentes inteligentes, automatizaciones, dashboards e infraestructura cloud con resultados medibles desde las primeras semanas.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button className="pointer-events-auto" size="lg" onClick={() => onNavigate("contacto")}>
            Solicitar AI Audit Express
          </Button>
          <Button className="pointer-events-auto" size="lg" variant="ghost" onClick={() => onNavigate("servicios")}>
            Ver servicios
          </Button>
        </div>
        <dl className="mx-auto mt-14 grid max-w-[720px] gap-3 md:mt-16 md:grid-cols-3">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <dt className="font-display text-2xl font-extrabold text-white">{metric.value}</dt>
              <dd className="mt-1.5 text-xs text-[#6F7D93]">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
