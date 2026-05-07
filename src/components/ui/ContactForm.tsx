import type { FormEvent, ReactElement } from "react";
import { useState } from "react";
import { contactForm } from "../../data/siteData";
import { Button } from "./Button";

interface LeadForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

const initialForm: LeadForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

type FormErrors = Partial<Record<keyof LeadForm, string>>;

export function ContactForm() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Escribe tu nombre.";
    if (!form.company.trim()) nextErrors.company = "Escribe el nombre de tu empresa.";
    if (form.phone.trim().length < 8) nextErrors.phone = "Escribe un teléfono válido.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Escribe un correo válido.";
    if (!form.service) nextErrors.service = "Selecciona un servicio.";
    if (!form.budget) nextErrors.budget = "Selecciona un presupuesto.";
    if (form.message.trim().length < 12) nextErrors.message = "Cuéntanos un poco más del proyecto.";

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    // Preparado para futura integración con CRM, email transaccional o API propia.
    console.info("AXON lead payload", form);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <form className="reveal rounded-xl border border-white/10 bg-white/[0.035] p-5 md:p-7" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre" id="name" error={errors.name}>
          <input id="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Empresa" id="company" error={errors.company}>
          <input id="company" value={form.company} onChange={(event) => updateField("company", event.target.value)} autoComplete="organization" aria-invalid={Boolean(errors.company)} />
        </Field>
        <Field label="Teléfono" id="phone" error={errors.phone}>
          <input id="phone" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} />
        </Field>
        <Field label="Correo" id="email" error={errors.email}>
          <input id="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Servicio de interés" id="service" error={errors.service}>
          <select id="service" value={form.service} onChange={(event) => updateField("service", event.target.value)} aria-invalid={Boolean(errors.service)}>
            <option value="">Seleccionar</option>
            {contactForm.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Presupuesto aproximado" id="budget" error={errors.budget}>
          <select id="budget" value={form.budget} onChange={(event) => updateField("budget", event.target.value)} aria-invalid={Boolean(errors.budget)}>
            <option value="">Seleccionar</option>
            {contactForm.budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Mensaje" id="message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Cuéntanos qué quieres mejorar, automatizar o medir."
          aria-invalid={Boolean(errors.message)}
        />
      </Field>
      <Button type="submit" fullWidth>
        Enviar solicitud
      </Button>
      {sent ? <p className="mt-4 text-sm leading-6 text-[#BFE4FF]" role="status">Solicitud lista. En producción este punto se conectará al CRM o backend de AXON.</p> : null}
    </form>
  );
}

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  children: ReactElement;
}

function Field({ label, id, error, children }: FieldProps) {
  return (
    <div className="mb-4 grid gap-2">
      <label className="text-sm font-bold text-[#DCE8F8]" htmlFor={id}>
        {label}
      </label>
      <div className="[&_input]:min-h-12 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-white/10 [&_input]:bg-axon-dark/70 [&_input]:px-3.5 [&_input]:py-3 [&_input]:text-white [&_input]:outline-none [&_input]:transition [&_input:focus]:border-axon-blue [&_input:focus]:shadow-[0_0_0_3px_rgba(43,127,255,.16)] [&_select]:min-h-12 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-white/10 [&_select]:bg-axon-dark/70 [&_select]:px-3.5 [&_select]:py-3 [&_select]:text-white [&_select]:outline-none [&_select]:transition [&_select:focus]:border-axon-blue [&_select:focus]:shadow-[0_0_0_3px_rgba(43,127,255,.16)] [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:bg-axon-dark/70 [&_textarea]:px-3.5 [&_textarea]:py-3 [&_textarea]:text-white [&_textarea]:outline-none [&_textarea]:transition [&_textarea:focus]:border-axon-blue [&_textarea:focus]:shadow-[0_0_0_3px_rgba(43,127,255,.16)]">
        {children}
      </div>
      {error ? <span className="text-xs text-[#FFB4B4]">{error}</span> : null}
    </div>
  );
}
