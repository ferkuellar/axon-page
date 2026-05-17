import type { Plan } from "../types";

export const plans: Plan[] = [
  {
    tag: "Entrada rápida",
    name: "AI Audit Express",
    note: "Diagnóstico ejecutivo para decidir dónde aplicar IA primero.",
    highlighted: false,
    items: [
      "Mapa de procesos automatizables",
      "Priorización por impacto y complejidad",
      "ROI estimado por oportunidad",
      "Ruta de implementación por fases",
      "Reporte ejecutivo listo para decisión",
    ],
  },
  {
    tag: "Implementación",
    name: "Agente o automatización",
    note: "Construcción de un sistema funcional con integración a tu operación.",
    highlighted: true,
    items: [
      "Agente de IA para WhatsApp o web",
      "Automatización con n8n, APIs o webhooks",
      "Integración con CRM o fuentes de datos",
      "Ambiente de staging para revisión",
      "Capacitación y documentación técnica",
      "Soporte post-lanzamiento inicial",
    ],
  },
  {
    tag: "Continuidad",
    name: "AxonCare",
    note: "Acompañamiento mensual para operar, medir y mejorar sistemas de IA.",
    highlighted: false,
    items: [
      "Monitoreo de sistemas en producción",
      "Mejoras continuas priorizadas por impacto",
      "Soporte técnico y operativo",
      "Reporte mensual de resultados",
      "Nuevas automatizaciones por roadmap",
    ],
  },
];
