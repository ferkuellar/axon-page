import { useState } from "react";
import { projects } from "../../data/siteData";
import type { Project } from "../../types";
import { IntelligentFlowCanvas } from "../ui/IntelligentFlowCanvas";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";
import { SectionHeader } from "../ui/SectionHeader";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="page-section relative overflow-hidden bg-axon-dark text-white">
      <IntelligentFlowCanvas density="ambient" className="opacity-35" />
      <div className="absolute inset-0 bg-axon-dark/85" aria-hidden="true" />
      <div className="container-shell relative z-10">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="Portfolio"
            title="Sistemas digitales diseñados para verse bien y operar mejor."
            description="Una selección de experiencias, automatizaciones y plataformas pensadas para convertir, medir y escalar con claridad."
            dark
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
