import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

const fillValidForm = async () => {
  const user = userEvent.setup();

  await user.type(screen.getByLabelText("Nombre"), "Ana Lopez");
  await user.type(screen.getByLabelText("Empresa"), "Norte AI");
  await user.type(screen.getByLabelText("Teléfono"), "6141234567");
  await user.type(screen.getByLabelText("Correo"), "ana@example.com");
  await user.selectOptions(screen.getByLabelText("Servicio de interés"), "AI Audit Express");
  await user.selectOptions(screen.getByLabelText("Etapa o intención"), "Quiero un AI Audit");
  await user.type(screen.getByLabelText("Mensaje"), "Necesitamos automatizar reportes operativos.");

  return user;
};

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("ContactForm", () => {
  it("muestra errores con campos vacios", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Enviar solicitud" }));

    expect(screen.getByText("Escribe tu nombre.")).toBeInTheDocument();
    expect(screen.getByText("Escribe el nombre de tu empresa.")).toBeInTheDocument();
    expect(screen.getByText("Escribe un teléfono válido.")).toBeInTheDocument();
    expect(screen.getByText("Escribe un correo válido.")).toBeInTheDocument();
    expect(screen.getByText("Selecciona un servicio.")).toBeInTheDocument();
    expect(screen.getByText("Selecciona un presupuesto.")).toBeInTheDocument();
    expect(screen.getByText("Cuéntanos un poco más del proyecto.")).toBeInTheDocument();
  });

  it("rechaza email invalido", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Correo"), "correo-invalido");
    await user.click(screen.getByRole("button", { name: "Enviar solicitud" }));

    expect(screen.getByText("Escribe un correo válido.")).toBeInTheDocument();
  });

  it("no envia si la validacion falla", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    vi.stubEnv("VITE_FORM_ENDPOINT", "https://example.test/leads");
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Enviar solicitud" }));

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("maneja error de endpoint", async () => {
    vi.stubEnv("VITE_FORM_ENDPOINT", "https://example.test/leads");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    render(<ContactForm />);

    const user = await fillValidForm();
    await user.click(screen.getByRole("button", { name: "Enviar solicitud" }));

    expect(await screen.findByText("No pudimos enviar la solicitud. Intenta de nuevo o escríbenos por email o WhatsApp.")).toBeInTheDocument();
  });

  it("maneja exito de endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubEnv("VITE_FORM_ENDPOINT", "https://example.test/leads");
    vi.stubGlobal("fetch", fetchMock);
    render(<ContactForm />);

    const user = await fillValidForm();
    await user.click(screen.getByRole("button", { name: "Enviar solicitud" }));

    expect(await screen.findByText("Solicitud enviada. Te contactaremos para revisar el siguiente paso.")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.test/leads",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    );
    await waitFor(() => expect(screen.getByLabelText("Nombre")).toHaveValue(""));
  });
});
