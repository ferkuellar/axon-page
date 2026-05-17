import type { TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
}

const textareaClasses =
  "w-full resize-y rounded-lg border border-white/10 bg-axon-dark/70 px-3.5 py-3 text-white outline-none transition focus:border-axon-blue focus:shadow-[0_0_0_3px_rgba(43,127,255,.16)]";

export function FormTextarea({ label, id, error, className = "", ...props }: FormTextareaProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="mb-4 grid gap-2">
      <label className="text-sm font-bold text-[#DCE8F8]" htmlFor={id}>
        {label}
      </label>
      <textarea id={id} className={`${textareaClasses} ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={errorId} {...props} />
      {error ? (
        <span id={errorId} className="text-xs text-[#FFB4B4]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
