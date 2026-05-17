import type { FormEvent } from "react";
import { useState } from "react";
import { contactForm } from "../../data/siteData";
import { Button } from "./Button";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormTextarea } from "./FormTextarea";

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
type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const updateField = (field: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (submitState !== "submitting") {
      setSubmitState("idle");
      setSubmitMessage("");
    }
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      setSubmitMessage("");
      return;
    }

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();

    if (!endpoint) {
      setSubmitState("error");
      setSubmitMessage(
        import.meta.env.DEV
          ? "Falta configurar VITE_FORM_ENDPOINT para enviar leads."
          : "No pudimos enviar la solicitud en este momento. Escríbenos por email o WhatsApp.",
      );
      return;
    }

    const payload = {
      name: form.name.trim(),
      company: form.company.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service,
      intent: form.budget,
      message: form.message.trim(),
    };

    try {
      setSubmitState("submitting");
      setSubmitMessage("");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead endpoint returned an error.");
      }

      setSubmitState("success");
      setSubmitMessage("Solicitud enviada. Te contactaremos para revisar el siguiente paso.");
      setForm(initialForm);
    } catch {
      setSubmitState("error");
      setSubmitMessage("No pudimos enviar la solicitud. Intenta de nuevo o escríbenos por email o WhatsApp.");
    }
  };

  return (
    <form className="reveal rounded-xl border border-white/10 bg-white/[0.035] p-5 md:p-7" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput label="Nombre" id="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" error={errors.name} />
        <FormInput label="Empresa" id="company" value={form.company} onChange={(event) => updateField("company", event.target.value)} autoComplete="organization" error={errors.company} />
        <FormInput label="Teléfono" id="phone" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} autoComplete="tel" inputMode="tel" error={errors.phone} />
        <FormInput label="Correo" id="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" error={errors.email} />
        <FormSelect label="Servicio de interés" id="service" value={form.service} onChange={(event) => updateField("service", event.target.value)} options={contactForm.services} error={errors.service} />
        <FormSelect label="Etapa o intención" id="budget" value={form.budget} onChange={(event) => updateField("budget", event.target.value)} options={contactForm.budgets} error={errors.budget} />
      </div>
      <FormTextarea
        label="Mensaje"
        id="message"
        rows={5}
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        placeholder="Cuéntanos qué proceso quieres automatizar, medir o atender con IA."
        error={errors.message}
      />
      <Button type="submit" fullWidth disabled={submitState === "submitting"} className={submitState === "submitting" ? "opacity-70" : ""}>
        {submitState === "submitting" ? "Enviando..." : "Enviar solicitud"}
      </Button>
      {submitMessage ? (
        <p className={`mt-4 text-sm leading-6 ${submitState === "error" ? "text-[#FFB4B4]" : "text-[#BFE4FF]"}`} role="status">
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
