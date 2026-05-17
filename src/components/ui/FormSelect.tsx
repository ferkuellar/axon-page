import type { SelectHTMLAttributes } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  error?: string;
  options: string[];
  placeholder?: string;
}

const selectClasses =
  "min-h-12 w-full rounded-lg border border-white/10 bg-axon-dark/70 px-3.5 py-3 text-white outline-none transition focus:border-axon-blue focus:shadow-[0_0_0_3px_rgba(43,127,255,.16)]";

export function FormSelect({ label, id, error, options, placeholder = "Seleccionar", className = "", ...props }: FormSelectProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="mb-4 grid gap-2">
      <label className="text-sm font-bold text-[#DCE8F8]" htmlFor={id}>
        {label}
      </label>
      <select id={id} className={`${selectClasses} ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={errorId} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <span id={errorId} className="text-xs text-[#FFB4B4]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
