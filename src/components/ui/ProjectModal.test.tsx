import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Project } from "../../types";
import { ProjectModal } from "./ProjectModal";

const project: Project = {
  title: "Demo AI",
  category: "AI Agents",
  description: "Agente de prueba para validar el modal.",
  technologies: ["React", "AI"],
  images: ["ai"],
  metrics: [{ label: "Cobertura", value: "24/7" }],
  year: "2026",
  client: "Cliente demo",
  links: [{ label: "Ver enfoque", href: "#contacto" }],
  tags: ["AI"],
  featured: true,
  results: ["Resultado medible"],
  accent: "#7DB2FF",
};

describe("ProjectModal", () => {
  it("renderiza abierto", () => {
    render(<ProjectModal project={project} onClose={vi.fn()} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Demo AI")).toBeInTheDocument();
  });

  it("respeta aria-modal", () => {
    render(<ProjectModal project={project} onClose={vi.fn()} />);

    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("cierra con Escape", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);

    fireEvent.keyDown(window, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("cierra con boton", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);

    fireEvent.click(screen.getByRole("button", { name: "Cerrar proyecto" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
