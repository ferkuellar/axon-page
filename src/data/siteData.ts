import type { Benefit, Brand, ContactFormOptions, Difference, HeroMetric, NavLink, Plan, ProcessStep, Project, Service, Testimonial } from "../types";

export const brand: Brand = {
  email: "hola@axonai.mx",
  whatsapp: "526140000000",
  location: "Chihuahua, México",
};

export const navLinks: NavLink[] = [
  { label: "Servicios", target: "servicios" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Proceso", target: "proceso" },
  { label: "Empezar", target: "precios" },
  { label: "Contacto", target: "contacto" },
];

export const heroMetrics: HeroMetric[] = [
  { value: "2-4", label: "Semanas para primeros resultados" },
  { value: "48h", label: "Propuesta con alcance claro" },
  { value: "ROI", label: "Caso de negocio antes de construir" },
];

export const benefits: Benefit[] = [
  {
    title: "AI Automation",
    body: "Agentes inteligentes, bots de WhatsApp y flujos automatizados para eliminar trabajo manual repetitivo.",
  },
  {
    title: "Data Intelligence",
    body: "Dashboards ejecutivos, KPIs y analítica para convertir datos dispersos en decisiones operativas.",
  },
  {
    title: "Cloud AI Infrastructure",
    body: "APIs inteligentes, modelos de IA e infraestructura cloud preparada para producción, seguridad y escala.",
  },
];

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

export const plans: Plan[] = [
  {
    tag: "Entrada rápida",
    name: "AI Audit Express",
    price: "",
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
    price: "",
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
    price: "",
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

export const portfolioCategories = ["Todos", "AI Agents", "Automation", "Dashboards", "Cloud AI", "White-label"] as const;

export const projects: Project[] = [
  {
    title: "Manufactura AI Control",
    category: "Automation",
    description: "Automatización de reportes operativos, alertas por desviaciones y tablero ejecutivo para una operación industrial regional.",
    technologies: ["n8n", "Python", "PostgreSQL", "APIs", "Metabase"],
    images: ["flows", "automation", "analytics"],
    metrics: [
      { label: "Reportes manuales", value: "-70%" },
      { label: "Alertas críticas", value: "24/7" },
      { label: "Fuentes conectadas", value: "6" },
    ],
    year: "2026",
    client: "Operación industrial",
    links: [{ label: "Diseñar automatización", href: "#contacto" }],
    tags: ["Automation", "Data", "Ops"],
    featured: true,
    results: ["Flujos documentados con logs", "Alertas para incidencias operativas", "Dashboard semanal para dirección"],
    accent: "#7DB2FF",
  },
  {
    title: "Clínica Concierge IA",
    category: "AI Agents",
    description: "Agente conversacional para responder preguntas frecuentes, calificar intención y escalar citas con contexto al equipo humano.",
    technologies: ["AI Agents", "RAG", "WhatsApp", "CRM", "Analytics"],
    images: ["ai", "chat", "knowledge"],
    metrics: [
      { label: "Cobertura inicial", value: "24/7" },
      { label: "Consultas resueltas", value: "60%+" },
      { label: "Escalamiento", value: "Con contexto" },
    ],
    year: "2026",
    client: "Servicios profesionales",
    links: [{ label: "Diseñar agente", href: "#contacto" }],
    tags: ["AI Agent", "WhatsApp", "RAG"],
    featured: true,
    results: ["Base de conocimiento controlada", "Reglas de escalamiento humano", "Métricas de intención y atención"],
    accent: "#69E2C6",
  },
  {
    title: "PulseOps Automation",
    category: "Automation",
    description: "Sistema de automatización para asignación interna, seguimiento operativo y alertas por prioridad entre áreas.",
    technologies: ["n8n", "CRM", "WhatsApp", "Email", "Webhooks"],
    images: ["flows", "automation", "alerts"],
    metrics: [
      { label: "Tareas manuales", value: "-54%" },
      { label: "SLA comercial", value: "12m" },
      { label: "Flujos activos", value: "18" },
    ],
    year: "2025",
    client: "Operación de servicios",
    links: [{ label: "Explorar sistema", href: "#contacto" }],
    tags: ["Automation", "Integrations", "Ops"],
    featured: false,
    results: ["Ruteo automático de tareas", "Alertas por etapa y prioridad", "Bitácora trazable para auditoría interna"],
    accent: "#A8B2FF",
  },
  {
    title: "Lumen AI Concierge",
    category: "AI Agents",
    description: "Agente conversacional con base de conocimiento, calificación de solicitudes y escalamiento humano controlado.",
    technologies: ["AI Agents", "RAG", "CRM", "Knowledge Base", "Analytics"],
    images: ["ai", "chat", "knowledge"],
    metrics: [
      { label: "Cobertura", value: "24/7" },
      { label: "Consultas resueltas", value: "63%" },
      { label: "Escalamiento", value: "Smart" },
    ],
    year: "2026",
    client: "Servicios profesionales",
    links: [{ label: "Diseñar agente", href: "#contacto" }],
    tags: ["AI", "RAG", "Support"],
    featured: true,
    results: ["Respuestas consistentes con reglas de marca", "Calificación automática de intención", "Escalamiento con contexto completo"],
    accent: "#8CB8FF",
  },
  {
    title: "AxonPulse Room",
    category: "Dashboards",
    description: "Dashboard ejecutivo para operación, productividad, solicitudes y desempeño por área en tiempo casi real.",
    technologies: ["Looker", "Metabase", "SQL", "APIs", "ETL"],
    images: ["metrics", "charts", "board"],
    metrics: [
      { label: "Fuentes conectadas", value: "9" },
      { label: "Reportes manuales", value: "-80%" },
      { label: "KPIs clave", value: "16" },
    ],
    year: "2025",
    client: "Dirección operativa",
    links: [{ label: "Ver enfoque", href: "#contacto" }],
    tags: ["Dashboards", "BI", "KPIs"],
    featured: false,
    results: ["Indicadores por área y etapa", "Lectura ejecutiva semanal", "Alertas automáticas para desviaciones"],
    accent: "#5B8BD8",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Torres",
    company: "Grupo Norte",
    role: "Directora de Operaciones",
    quote: "AxonAI convirtió reportes manuales en un sistema con alertas y visibilidad ejecutiva. El equipo dejó de perseguir hojas de cálculo para tomar decisiones.",
    result: "-70% reportes manuales",
    category: "Automatización",
    technologies: ["n8n", "Dashboards", "APIs"],
    initials: "MT",
    featured: true,
  },
  {
    name: "Diego Salazar",
    company: "Atria Servicios",
    role: "Founder",
    quote: "La diferencia fue que no nos vendieron teoría. El agente quedó funcionando, con reglas claras y métricas para saber cuándo escalar a una persona.",
    result: "24/7 atención inicial",
    category: "AI Agent",
    technologies: ["AI Agent", "RAG", "WhatsApp"],
    initials: "DS",
  },
  {
    name: "Laura Méndez",
    company: "PulseOps",
    role: "Operations Lead",
    quote: "El sistema redujo tareas manuales y nos dio seguimiento automático sin perder control. El equipo trabaja con menos fricción y más contexto.",
    result: "-54% tareas manuales",
    category: "Automatización",
    technologies: ["n8n", "CRM", "WhatsApp"],
    initials: "LM",
  },
  {
    name: "Ricardo Ibarra",
    company: "Lumen Advisory",
    role: "Socio Director",
    quote: "El agente de IA quedó alineado a nuestro tono y reglas internas. Resuelve preguntas frecuentes, califica intención y escala casos con contexto suficiente.",
    result: "24/7 atención inicial",
    category: "AI Agents",
    technologies: ["AI Agent", "RAG", "CRM"],
    initials: "RI",
  },
];
