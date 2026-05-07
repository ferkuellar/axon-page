interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = "left", dark = false }: SectionHeaderProps) {
  return (
    <div className={`reveal mb-14 max-w-[680px] ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`font-display text-[clamp(2rem,4.5vw,2.875rem)] font-extrabold leading-[1.1] tracking-normal ${dark ? "text-white" : "text-axon-dark"}`}>
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-axon-muted">{description}</p> : null}
    </div>
  );
}
