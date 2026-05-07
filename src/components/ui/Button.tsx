import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline" | "light" | "ghostLight";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary: "border-axon-blue bg-axon-blue text-white hover:bg-[#1a6eee] hover:shadow-[0_12px_34px_rgba(43,127,255,0.24)]",
  ghost: "border-axon-border bg-transparent text-axon-muted hover:border-axon-blue hover:text-axon-blue",
  outline: "border-[#E4E9F2] bg-transparent text-[#35445A] hover:border-axon-blue hover:text-axon-blue",
  light: "border-white bg-white text-axon-dark hover:shadow-[0_12px_34px_rgba(6,10,18,0.18)]",
  ghostLight: "border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10",
};

export function Button({ children, variant = "primary", fullWidth = false, size = "md", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-lg border font-bold leading-tight no-underline transition duration-200 hover:-translate-y-0.5",
        size === "lg" ? "min-h-[52px] px-8 py-4" : "min-h-11 px-6 py-3",
        fullWidth ? "w-full" : "",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
