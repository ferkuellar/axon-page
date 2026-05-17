import type { ContactFormOptions, Difference, ProcessStep, Service } from "../types";

export const services: Service[] = [
  {
    tag: "AI Audit Express",
    name: "Diagnóstico de IA",
    description: "Análisis ejecutivo de procesos automatizables, oportunidades de impacto, prioridades técnicas y ruta de implementación.",
    chips: ["5-7 días", "Mapa de oportunidades", "ROI estimado", "Reporte PDF"],
  },
  {
    tag: "AxonBot",
    name: "Agente inteligente",
    description: "Agente conversacional para WhatsApp o web, conectado a reglas de negocio, CRM y flujos de atención o ventas.",
    chips: ["WhatsApp", "Web chat", "CRM", "Soporte inicial"],
  },
  {
    tag: "AxonFlow",
    name: "Automatización de operaciones",
    description: "Flujos con n8n, APIs e integraciones para automatizar seguimiento, reportes, alertas y tareas repetibles.",
    chips: ["n8n", "APIs", "Webhooks", "Documentación"],
  },
  {
    tag: "AxonPulse",
    name: "Dashboard de inteligencia",
    description: "Tableros ejecutivos con KPIs, alertas y conexión a fuentes de datos para operar con visibilidad real.",
    chips: ["KPIs", "Alertas", "Looker", "Metabase"],
  },
  {
    tag: "AxonCare",
    name: "AI Retainer mensual",
    description: "Mejora continua, monitoreo de sistemas en producción, soporte prioritario y reporte mensual de resultados.",
    chips: ["Monitoreo", "Optimización", "Soporte", "KPIs"],
  },
  {
    tag: "AxonAgent SaaS",
    name: "Agente white-label",
    description: "Agente de atención personalizable con panel de administración para PyMEs o agencias que necesitan IA lista para operar.",
    chips: ["White-label", "Panel admin", "Setup rápido", "Atención 24/7"],
  },
];

export const steps: ProcessStep[] = [
  { number: "01", name: "Discovery", description: "Identificamos procesos costosos, cuellos de botella y métricas de éxito." },
  { number: "02", name: "Arquitectura", description: "Definimos stack, alcance, cronograma, integración y criterios de aceptación." },
  { number: "03", name: "Construcción", description: "Desarrollamos agentes, automatizaciones, dashboards o APIs en staging." },
  { number: "04", name: "QA", description: "Probamos flujos, permisos, datos, errores, logs y comportamiento esperado." },
  { number: "05", name: "Lanzamiento", description: "Publicamos en producción, capacitamos al equipo y entregamos accesos." },
  { number: "06", name: "Seguimiento", description: "Medimos resultados del primer mes y priorizamos mejoras continuas." },
];

export const differences: Difference[] = [
  {
    number: "01",
    title: "Ejecución sobre estrategia",
    body: "No entregamos presentaciones sobre IA. Construimos sistemas funcionando en producción con alcance, responsables y criterios de éxito.",
  },
  {
    number: "02",
    title: "ROI primero",
    body: "Cada proyecto parte de un caso de negocio medible. Si la oportunidad no tiene impacto claro, se prioriza otra antes de construir.",
  },
  {
    number: "03",
    title: "Velocidad con control",
    body: "Buscamos primeros resultados en semanas con arquitectura limpia, documentación y QA antes de lanzar.",
  },
  {
    number: "04",
    title: "Transparencia total",
    body: "Sin cajas negras ni magia. Alcances claros, métricas visibles, logs, documentación y decisiones técnicas explicables.",
  },
];

export const contactForm: ContactFormOptions = {
  services: [
    "AI Audit Express",
    "AxonBot - Agente inteligente",
    "AxonFlow - Automatización de operaciones",
    "AxonPulse - Dashboard de inteligencia",
    "AxonCare - Retainer mensual",
    "AxonAgent SaaS - White-label",
  ],
  budgets: ["Quiero un AI Audit", "Tengo proceso para automatizar", "Necesito dashboard", "Busco agente IA", "Quiero retainer/soporte"],
};
