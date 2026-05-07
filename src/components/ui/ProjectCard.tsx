import type { Project } from "../../types";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="reveal group rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition duration-300 hover:-translate-y-1 hover:border-axon-blue/40">
      <button className="block w-full text-left" type="button" onClick={() => onOpen(project)} aria-label={`Abrir caso de proyecto ${project.title}`}>
        <ProjectPreview project={project} />
        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#8CB8FF]">{project.category}</span>
            <span className="text-xs text-[#6F7D93]">{project.year}</span>
            {project.featured ? <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Featured</span> : null}
          </div>
          <h3 className="font-display text-2xl font-bold leading-tight text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#A8B2C4]">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full bg-white/[0.055] px-2.5 py-1 text-xs text-[#DCE8F8]">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-lg font-extrabold text-white">{metric.value}</p>
                <p className="mt-1 text-[11px] leading-4 text-[#6F7D93]">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 text-sm font-bold text-axon-blue transition group-hover:translate-x-1">Ver caso →</div>
        </div>
      </button>
    </article>
  );
}
