import { useEffect } from "react";
import type { Project } from "../../types";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-axon-dark/75 p-3 backdrop-blur-md md:items-center md:p-8" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="absolute inset-0 cursor-default" type="button" aria-label="Cerrar modal" onClick={onClose} />
      <article className="reveal is-visible relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#070C15] shadow-[0_30px_90px_rgba(0,0,0,.38)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#070C15]/90 px-5 py-4 backdrop-blur md:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-axon-blue">{project.category}</p>
            <h2 id="project-modal-title" className="mt-1 font-display text-xl font-bold text-white md:text-2xl">
              {project.title}
            </h2>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-axon-blue" type="button" onClick={onClose} aria-label="Cerrar proyecto">
            ×
          </button>
        </div>
        <div className="grid gap-8 p-5 md:grid-cols-[1.05fr_0.95fr] md:p-7">
          <ProjectPreview project={project} />
          <div>
            <p className="text-sm leading-7 text-[#A8B2C4]">{project.description}</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="font-display text-2xl font-extrabold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#6F7D93]">{metric.label}</p>
                </div>
              ))}
            </div>
            <dl className="mt-6 grid gap-4 border-y border-white/10 py-5 text-sm md:grid-cols-2">
              <div>
                <dt className="text-[#6F7D93]">Cliente</dt>
                <dd className="mt-1 text-white">{project.client}</dd>
              </div>
              <div>
                <dt className="text-[#6F7D93]">Año</dt>
                <dd className="mt-1 text-white">{project.year}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <h3 className="font-display text-lg font-bold text-white">Resultados</h3>
              <ul className="mt-3 grid gap-2">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-sm leading-6 text-[#A8B2C4]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-axon-blue" aria-hidden="true" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#DCE8F8]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {project.links.map((link) => (
                <a key={link.label} href={link.href} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-axon-blue px-5 text-sm font-bold text-white no-underline transition hover:bg-[#1a6eee]" onClick={onClose}>
                  {link.label}
                </a>
              ))}
              <button className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-bold text-white transition hover:border-axon-blue" type="button" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
