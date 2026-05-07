import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Benefits } from "./components/sections/Benefits";
import { ContactCTA } from "./components/sections/ContactCTA";
import { Hero } from "./components/sections/Hero";
import { Portfolio } from "./components/sections/Portfolio";
import { Pricing } from "./components/sections/Pricing";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { WhyAxon } from "./components/sections/WhyAxon";
import { FloatingActions } from "./components/ui/FloatingActions";
import { navLinks } from "./data/siteData";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useScrollState } from "./hooks/useScrollState";

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  const scrolled = useScrollState(60);
  useRevealOnScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-axon-dark">
      <Navbar links={navLinks} scrolled={scrolled} onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Benefits />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <Pricing onNavigate={scrollToSection} />
        <WhyAxon />
        <ContactCTA />
      </main>
      <Footer links={navLinks} onNavigate={scrollToSection} />
      <FloatingActions />
    </div>
  );
}
