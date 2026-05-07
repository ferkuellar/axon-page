import type { Project } from "../../types";

interface ProjectPreviewProps {
  project: Project;
  compact?: boolean;
}

export function ProjectPreview({ project, compact = false }: ProjectPreviewProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-xl border border-white/10 bg-axon-dark",
        compact ? "h-44" : "h-56 md:h-64",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-80" style={{ background: `linear-gradient(135deg, ${project.accent}24, transparent 42%), radial-gradient(circle at 72% 24%, ${project.accent}24, transparent 34%)` }} />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute left-6 right-6 top-10 grid gap-2">
        {project.images.map((image, index) => (
          <div key={image} className="h-8 rounded-md border border-white/10 bg-white/[0.05]" style={{ width: `${92 - index * 11}%` }} />
        ))}
      </div>
      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur">
        <div className="mb-3 flex items-center justify-between">
          <span className="h-2 w-20 rounded-full bg-white/20" />
          <span className="h-2 w-10 rounded-full" style={{ backgroundColor: project.accent }} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-2">
              <div className="h-2 w-10 rounded-full bg-white/20" />
              <div className="mt-2 h-2 w-14 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
