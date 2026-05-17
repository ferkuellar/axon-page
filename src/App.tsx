import { lazy, Suspense } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Benefits } from "./components/sections/Benefits";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { WhyAxon } from "./components/sections/WhyAxon";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import { FloatingActions } from "./components/ui/FloatingActions";
import { navLinks } from "./data/siteData";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useScrollState } from "./hooks/useScrollState";

const Portfolio = lazy(() => import("./components/sections/Portfolio").then((module) => ({ default: module.Portfolio })));
const Testimonials = lazy(() => import("./components/sections/Testimonials").then((module) => ({ default: module.Testimonials })));
const ContactCTA = lazy(() => import("./components/sections/ContactCTA").then((module) => ({ default: module.ContactCTA })));

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function SectionFallback() {
  return <div className="min-h-24 bg-axon-dark" aria-hidden="true" />;
}

export default function App() {
  const scrolled = useScrollState(60);
  useRevealOnScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-axon-dark">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-axon-dark" href="#inicio">
        Ir al contenido principal
      </a>
      <Navbar links={navLinks} scrolled={scrolled} onNavigate={scrollToSection} />
      <main>
        <ErrorBoundary name="Hero">
          <Hero onNavigate={scrollToSection} />
        </ErrorBoundary>
        <Benefits />
        <Services />
        <Suspense fallback={<SectionFallback />}>
          <ErrorBoundary name="Portfolio">
            <Portfolio />
          </ErrorBoundary>
          <Testimonials />
        </Suspense>
        <Process />
        <Pricing onNavigate={scrollToSection} />
        <WhyAxon />
        <Suspense fallback={<SectionFallback />}>
          <ErrorBoundary name="Contacto">
            <ContactCTA />
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer links={navLinks} onNavigate={scrollToSection} />
      <FloatingActions />
    </div>
  );
}
