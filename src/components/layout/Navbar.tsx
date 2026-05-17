import { useState } from "react";
import { Button } from "../ui/Button";
import type { NavLink } from "../../types";

interface NavbarProps {
  links: NavLink[];
  scrolled: boolean;
  onNavigate: (target: string) => void;
}

export function Navbar({ links, scrolled, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navigate = (target: string) => {
    setOpen(false);
    onNavigate(target);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 flex h-[68px] items-center justify-between px-5 transition duration-300 md:px-12",
        scrolled ? "border-b border-axon-border bg-axon-dark/95 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Logo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
        {links.map((link) => (
          <button key={link.target} className="text-sm text-axon-muted transition hover:text-white" type="button" onClick={() => navigate(link.target)}>
            {link.label}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Button className="hidden px-5 py-2 text-sm md:inline-flex" onClick={() => navigate("contacto")}>
          AI Audit
        </Button>
        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-axon-border bg-axon-surface/70 md:hidden"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded bg-white" />
            <span className="block h-0.5 w-5 rounded bg-white" />
            <span className="block h-0.5 w-5 rounded bg-white" />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="absolute left-4 right-4 top-[76px] grid gap-1 rounded-lg border border-axon-border bg-axon-dark/98 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:hidden" aria-label="Navegación móvil">
          {links.map((link) => (
            <button key={link.target} className="rounded-lg px-3 py-3 text-left text-axon-muted transition hover:bg-axon-surface hover:text-white" type="button" onClick={() => navigate(link.target)}>
              {link.label}
            </button>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export function Logo() {
  return (
    <a className="inline-flex items-center gap-1.5 font-display text-xl font-extrabold tracking-[0.16em] text-white no-underline" href="#inicio" aria-label="Ir al inicio de AxonAI">
      <span>AxonAI</span>
      <span className="mb-1.5 h-1.5 w-1.5 rounded-full bg-axon-blue" aria-hidden="true" />
    </a>
  );
}
