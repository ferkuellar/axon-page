import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

const inputClasses =
  "min-h-12 w-full rounded-lg border border-white/10 bg-axon-dark/70 px-3.5 py-3 text-white outline-none transition focus:border-axon-blue focus:shadow-[0_0_0_3px_rgba(43,127,255,.16)]";

export function FormInput({ label, id, error, className = "", ...props }: FormInputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="mb-4 grid gap-2">
      <label className="text-sm font-bold text-[#DCE8F8]" htmlFor={id}>
        {label}
      </label>
      <input id={id} className={`${inputClasses} ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={errorId} {...props} />
      {error ? (
        <span id={errorId} className="text-xs text-[#FFB4B4]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
