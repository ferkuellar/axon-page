import type { Benefit, Brand, ContactFormOptions, Difference, HeroMetric, NavLink, Plan, ProcessStep, Project, Service, Testimonial } from "../types";

export const brand: Brand = {
  email: "hola@axon.mx",
  whatsapp: "526140000000",
  location: "Chihuahua, México",
};

export const navLinks: NavLink[] = [
  { label: "Servicios", target: "servicios" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Proceso", target: "proceso" },
  { label: "Planes", target: "precios" },
  { label: "Contacto", target: "contacto" },
];

export const heroMetrics: HeroMetric[] = [
  { value: "48h", label: "Propuesta ejecutiva" },
  { value: "7", label: "Capas conectadas" },
  { value: "0", label: "Decisiones sin medición" },
];

export const benefits: Benefit[] = [
  {
    title: "Captación clara",
    body: "Una web que explica la oferta, filtra prospectos y lleva al contacto sin fricción.",
  },
  {
    title: "Seguimiento medible",
    body: "CRM, automatización y tableros para entender qué canal genera avance comercial real.",
  },
  {
    title: "Operación escalable",
    body: "IA y procesos digitales para reducir trabajo manual sin sumar complejidad innecesaria.",
  },
];

export const services: Service[] = [
  {
    tag: "AXON Starter",
    name: "Diseño web profesional",
    description: "Sitios corporativos rápidos, claros y medibles para presentar tu oferta y convertir visitas en conversaciones comerciales.",
    chips: ["Web corporativa", "SEO técnico", "GA4", "WhatsApp"],
  },
  {
    tag: "AXON Growth",
    name: "CRM y automatización comercial",
    description: "Pipelines, flujos y seguimiento para que cada lead tenga dueño, etapa, próxima acción y trazabilidad.",
    chips: ["CRM", "Pipelines", "Email", "WhatsApp"],
  },
  {
    tag: "AXON Intel",
    name: "IA aplicada a ventas y operación",
    description: "Agentes y asistentes internos que responden, califican y ejecutan tareas repetibles con reglas claras.",
    chips: ["Agentes IA", "RAG", "Flujos", "Integraciones"],
  },
  {
    tag: "AXON Pulse",
    name: "Analítica, ads y optimización",
    description: "Tracking, dashboards, SEO y pauta conectados a indicadores de negocio, no solo a reportes de clics.",
    chips: ["Dashboards", "KPIs", "Ads", "SEO"],
  },
];

export const steps: ProcessStep[] = [
  { number: "01", name: "Discovery", description: "Mapeamos oferta, cliente ideal, canales, fricciones y objetivo comercial." },
  { number: "02", name: "Arquitectura", description: "Definimos estrategia, alcance, stack, métricas y ruta de implementación." },
  { number: "03", name: "Construcción", description: "Diseñamos, desarrollamos, configuramos e integramos cada componente." },
  { number: "04", name: "QA y lanzamiento", description: "Probamos responsive, formularios, tracking, automatizaciones y velocidad." },
  { number: "05", name: "Optimización", description: "Medimos desempeño, detectamos oportunidades y mejoramos el sistema." },
];

export const plans: Plan[] = [
  {
    tag: "AXON Starter",
    name: "Presencia Profesional",
    price: "$20,000",
    note: "Implementación única · entrega estimada en 3 semanas",
    highlighted: false,
    items: [
      "Sitio web corporativo hasta 6 páginas",
      "Diseño responsivo y optimizado",
      "SEO técnico base",
      "Google Analytics 4 y eventos clave",
      "Formulario de contacto validado",
      "Botón de WhatsApp",
      "Google Business Profile",
      "1 ronda de ajustes incluida",
    ],
  },
  {
    tag: "AXON Growth",
    name: "Sistema de Ventas",
    price: "$45,000",
    note: "Implementación única · entrega estimada en 6 semanas",
    highlighted: true,
    items: [
      "Todo lo del plan Starter",
      "CRM configurado y personalizado",
      "Automatización WhatsApp + correo",
      "Seguimiento automático de leads",
      "Landing page de captación",
      "Dashboard de métricas básico",
      "Integración con Google Ads / Meta Ads",
      "2 rondas de ajustes + soporte 1 mes",
    ],
  },
  {
    tag: "AXON Enterprise",
    name: "Infraestructura Completa",
    price: "$90,000",
    note: "Implementación única · entrega estimada en 10 semanas",
    highlighted: false,
    items: [
      "Todo lo del plan Growth",
      "Agente IA / chatbot personalizado",
      "Automatización avanzada con n8n",
      "Dashboard ejecutivo en tiempo real",
      "Integración de fuentes de datos",
      "Campañas Google Ads / Meta Ads",
      "Reportes automatizados semanales",
      "3 rondas de ajustes + soporte 2 meses",
    ],
  },
];

export const differences: Difference[] = [
  {
    number: "01",
    title: "Arquitectura, no solo diseño",
    body: "Pensamos en integración, medición, seguridad y escalabilidad desde el día uno. Entregamos sistemas comerciales, no páginas decorativas.",
  },
  {
    number: "02",
    title: "IA útil, no demostrativa",
    body: "Implementamos agentes, bases de conocimiento y automatizaciones que reducen carga operativa y aceleran el ciclo de ventas.",
  },
  {
    number: "03",
    title: "Métricas desde el inicio",
    body: "Cada proyecto incluye tracking, eventos, tableros y KPIs para evaluar impacto real en leads, ventas y eficiencia.",
  },
  {
    number: "04",
    title: "Un sistema, un responsable",
    body: "Web, CRM, IA, ads, SEO y analítica bajo una misma dirección técnica y comercial. Menos fricción, más avance.",
  },
];

export const contactForm: ContactFormOptions = {
  services: [
    "Diseño web profesional",
    "CRM y automatización",
    "IA aplicada",
    "Analítica y dashboards",
    "Google Ads / Meta Ads",
    "SEO",
    "Sistema digital completo",
  ],
  budgets: ["Menos de $20,000 MXN", "$20,000 - $45,000 MXN", "$45,000 - $90,000 MXN", "Más de $90,000 MXN", "Aún no definido"],
};

export const portfolioCategories = ["Todos", "Web Development", "Automation", "AI Systems", "Dashboards", "Enterprise Platforms"] as const;

export const projects: Project[] = [
  {
    title: "Norte Capital Platform",
    category: "Enterprise Platforms",
    description: "Portal corporativo y sistema de captación para una firma B2B con pipeline comercial, formularios inteligentes y analítica ejecutiva.",
    technologies: ["React", "TypeScript", "CRM", "GA4", "HubSpot"],
    images: ["dashboard", "pipeline", "analytics"],
    metrics: [
      { label: "Leads calificados", value: "+42%" },
      { label: "Tiempo de respuesta", value: "-68%" },
      { label: "Eventos medidos", value: "24" },
    ],
    year: "2026",
    client: "Firma financiera B2B",
    links: [{ label: "Ver alcance", href: "#contacto" }],
    tags: ["Web", "CRM", "Analytics"],
    featured: true,
    results: ["Arquitectura de conversión por vertical", "Integración CRM con etapas comerciales", "Dashboard ejecutivo para decisiones semanales"],
    accent: "#7DB2FF",
  },
  {
    title: "Atria Commerce Engine",
    category: "Web Development",
    description: "Experiencia ecommerce premium con catálogo modular, checkout asistido y medición avanzada de intención comercial.",
    technologies: ["Vite", "React", "Tailwind", "Meta Ads", "SEO"],
    images: ["commerce", "checkout", "seo"],
    metrics: [
      { label: "Conversión", value: "+31%" },
      { label: "LCP", value: "1.8s" },
      { label: "Revenue tracking", value: "100%" },
    ],
    year: "2026",
    client: "Retail especializado",
    links: [{ label: "Solicitar demo", href: "#contacto" }],
    tags: ["Ecommerce", "Performance", "Ads"],
    featured: true,
    results: ["Carga móvil optimizada", "Eventos de conversión listos para pauta", "SEO técnico para categorías clave"],
    accent: "#69E2C6",
  },
  {
    title: "PulseOps Automation",
    category: "Automation",
    description: "Sistema de automatización para seguimiento post-lead, asignación interna y alertas comerciales por prioridad.",
    technologies: ["n8n", "CRM", "WhatsApp", "Email", "Webhooks"],
    images: ["flows", "automation", "alerts"],
    metrics: [
      { label: "Tareas manuales", value: "-54%" },
      { label: "SLA comercial", value: "12m" },
      { label: "Flujos activos", value: "18" },
    ],
    year: "2025",
    client: "Operación comercial nacional",
    links: [{ label: "Explorar sistema", href: "#contacto" }],
    tags: ["Automation", "CRM", "Ops"],
    featured: false,
    results: ["Ruteo automático de oportunidades", "Alertas por etapa y prioridad", "Bitácora comercial trazable"],
    accent: "#A8B2FF",
  },
  {
    title: "Lumen AI Concierge",
    category: "AI Systems",
    description: "Agente conversacional con base de conocimiento, calificación de prospectos y escalamiento humano controlado.",
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
    title: "Metric Room",
    category: "Dashboards",
    description: "Dashboard ejecutivo para inversión digital, oportunidades comerciales y desempeño por canal en tiempo casi real.",
    technologies: ["Looker", "GA4", "Ads", "CRM", "ETL"],
    images: ["metrics", "charts", "board"],
    metrics: [
      { label: "Fuentes conectadas", value: "9" },
      { label: "Reportes manuales", value: "-80%" },
      { label: "KPIs clave", value: "16" },
    ],
    year: "2025",
    client: "Dirección comercial",
    links: [{ label: "Ver enfoque", href: "#contacto" }],
    tags: ["Dashboards", "BI", "KPIs"],
    featured: false,
    results: ["Indicadores por canal y etapa", "Lectura ejecutiva semanal", "Modelo de atribución inicial"],
    accent: "#5B8BD8",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Torres",
    company: "Norte Capital",
    role: "Directora Comercial",
    quote: "AXON nos ayudó a ordenar la captación digital y conectarla con ventas. Dejamos de medir solo tráfico y empezamos a ver oportunidades reales por canal.",
    result: "+42% leads calificados",
    category: "Plataforma B2B",
    technologies: ["CRM", "Analytics", "Web"],
    initials: "MT",
    featured: true,
  },
  {
    name: "Diego Salazar",
    company: "Atria Commerce",
    role: "Founder",
    quote: "La diferencia fue la claridad. No recibimos solo una web bonita; recibimos una estructura medible para entender qué productos y campañas estaban generando intención.",
    result: "+31% conversión",
    category: "Ecommerce",
    technologies: ["SEO", "Ads", "Performance"],
    initials: "DS",
  },
  {
    name: "Laura Méndez",
    company: "PulseOps",
    role: "Operations Lead",
    quote: "El sistema redujo tareas manuales y nos dio seguimiento automático sin perder control. El equipo comercial trabaja con menos fricción y más contexto.",
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
    category: "AI Systems",
    technologies: ["AI Agent", "RAG", "CRM"],
    initials: "RI",
  },
];
