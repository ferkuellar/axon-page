# AxonAI Website

Landing page pública de AxonAI, una agencia de inteligencia artificial enfocada en implementar agentes, automatizaciones, dashboards e infraestructura cloud para empresas de México y Latinoamérica.

## Stack

- React 18
- Vite
- TypeScript
- TailwindCSS
- PostCSS + Autoprefixer

## Instalación

```bash
npm install
npm run dev
```

Para generar build de producción:

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## Estructura

```txt
src/
  main.tsx
  App.tsx
  styles/globals.css
  data/siteData.ts
  hooks/useScrollState.ts
  hooks/useRevealOnScroll.ts
  components/
    layout/Navbar.tsx
    layout/Footer.tsx
    sections/Hero.tsx
    sections/Portfolio.tsx
    sections/Testimonials.tsx
    sections/Services.tsx
    sections/Process.tsx
    sections/Pricing.tsx
    sections/WhyAxon.tsx
    sections/ContactCTA.tsx
    ui/Button.tsx
    ui/SectionHeader.tsx
    ui/ServiceCard.tsx
    ui/PlanCard.tsx
    ui/DifferenceCard.tsx
    ui/ContactForm.tsx
  types/index.ts
```

## Cómo modificar contenido

Todo el contenido editable vive en `src/data/siteData.ts`:

- `navLinks`: navegación principal y footer.
- `services`: tarjetas de servicios.
- `steps`: metodología.
- `plans`: formas de empezar sin precios públicos. El elemento con `highlighted: true` se muestra destacado.
- `differences`: diferenciales de AxonAI.
- `heroMetrics`: métricas del hero.
- `contactForm`: opciones del formulario.
- `brand`: correo, WhatsApp y ubicación.

## Notas de producción

- El formulario tiene validación frontend y deja `handleSubmit` preparado para integración futura con CRM, email transaccional o API propia.
- El SEO básico está en `index.html`.
- `robots.txt` y `sitemap.xml` están incluidos como base técnica para indexación.
- El favicon incluido es un placeholder SVG y puede reemplazarse por el isotipo final de AxonAI.

## Diagnóstico UI/UX aplicado

- La versión previa tenía una estética premium funcional, pero con demasiado peso visual en glow, tarjetas, sombras y CTAs flotantes.
- El hero necesitaba comunicar la propuesta en menos tiempo: se redujo el mensaje a una promesa directa y se bajó la densidad visual.
- Las tarjetas tenían estilos correctos, pero competían demasiado entre sí. Se simplificaron bordes, fondos y estados hover.
- El contacto mezclaba un CTA azul de alto contraste con formulario oscuro; se consolidó en una sección oscura más sobria y consistente.
- Faltaban `robots.txt`, `sitemap.xml`, canonical y preconnect de fuentes.

## Mejoras implementadas

- Hero más minimalista, con un solo mensaje principal, CTA claro y métricas de menor ruido.
- Nueva sección de beneficios para explicar AI Automation, Data Intelligence y Cloud AI Infrastructure antes de entrar al detalle de servicios.
- Cards más ligeras, con hover sutil y menos sombras costosas.
- Animaciones reveal reducidas a 320ms con `ease-out` y soporte `prefers-reduced-motion`.
- CTA flotante global para email y WhatsApp, oculto en móviles pequeños para no invadir el viewport.
- Fuentes cargadas desde `index.html` con `preconnect` en lugar de `@import` en CSS.
- SEO técnico base: canonical, Open Graph, favicon, `robots.txt` y `sitemap.xml`.
- Sistema visual `IntelligentFlowCanvas` aplicado en zonas oscuras:
  - Hero con modo completo e interacción sutil al cursor.
  - Servicios, diferenciales, contacto y footer con modo ambiental de baja densidad.
  - Modo ambiental sin eventos de puntero para no bloquear UI ni formularios.
- Portfolio Experience Container:
  - Proyectos definidos desde `src/data/siteData.ts`.
  - Cards premium y modal accesible.
  - Previews visuales generados por CSS para evitar peso de imágenes externas.
- Sección de testimonios:
  - Testimonios definidos desde `src/data/siteData.ts`.
  - Cinta infinita animada, métricas concretas, tecnologías y estado vacío.

## Checklist QA final

- [ ] Validar hero y CTA en mobile de 360px, 390px y 430px.
- [ ] Validar menú móvil con teclado y lector de pantalla.
- [ ] Probar formulario vacío, email inválido y envío válido.
- [ ] Probar apertura/cierre del modal de portfolio con mouse y teclado.
- [ ] Validar legibilidad y contraste de testimonios en mobile.
- [ ] Confirmar que “AI Audit” navega a `#contacto`.
- [ ] Confirmar que la implementación destacada no muestra precios públicos.
- [ ] Ejecutar `npm run build`.
- [ ] Ejecutar Lighthouse mobile y revisar Performance, Accessibility, Best Practices y SEO.
- [ ] Reemplazar `https://axonai.mx/` en canonical/sitemap si el dominio final cambia.

## Registro de mejoras significativas

### Intelligent Flow Canvas en zonas oscuras

- Se creó `src/components/ui/IntelligentFlowCanvas.tsx` como una capa Canvas reutilizable.
- El componente soporta `density="hero"` para el hero principal y `density="ambient"` para fondos secundarios.
- La animación usa nodos, líneas finas y pulsos lentos para mantener una sensación tecnológica sin saturar.
- En modo ambiental se reducen nodos, pulsos, opacidad e interacción para proteger performance y usabilidad.
- Build validado con `npm run build`.

### Portfolio Experience Container

- Se agregó `src/components/sections/Portfolio.tsx` con listado directo de proyectos y modal de detalle.
- Se agregaron `ProjectCard`, `ProjectModal` y `ProjectPreview` como componentes reutilizables.
- La estructura `Project` soporta título, categoría, descripción, tecnologías, imágenes, video opcional, métricas, año, cliente, links, tags, destacado y resultados.
- El modal bloquea scroll del body, cierra con Escape y usa `role="dialog"` con `aria-modal`.
- Los previews son abstractos y ligeros para mantener rendimiento sin depender de assets pesados.

### Simplificación del portfolio

- Se retiraron filtros y búsqueda del portfolio para evitar fricción de navegación.
- La sección ahora muestra todos los proyectos siempre y conserva interacción por modal.
- Build validado con `npm run build`.

### Límite visual de portfolio

- La sección de proyectos muestra solo los primeros 4 proyectos definidos en `siteData.ts`.
- La estructura de datos conserva más proyectos para uso futuro sin saturar la landing.

### Ajuste de inversión

- Se retiraron los precios visibles de las cards de planes.
- Se retiró la nota de mantenimiento mensual bajo la sección de inversión.
- La sección conserva nombres de planes, alcance incluido y CTA para solicitar propuesta.

### Normalización de metodología

- Se igualó el círculo del paso Discovery con el resto de pasos.
- Todos los pasos usan el mismo borde, fondo y color para evitar jerarquía visual innecesaria.

### Footer profesional

- Se reemplazó el footer simple por un layout corporativo de varias columnas.
- Incluye bloque de marca, navegación, servicios, contacto, CTA y barra legal.
- Mantiene animación ambiental oscura sin bloquear interacción.

### Git ignore

- Se agregó `.gitignore` para excluir dependencias, builds, caches, logs, archivos de entorno y configuración local de editores.

### Testimonios premium

- Se agregó `src/components/sections/Testimonials.tsx`.
- Se agregó `src/components/ui/TestimonialCard.tsx`.
- Se extendió `siteData.ts` con `testimonials`.
- La sección usa una cinta infinita horizontal con pausa en hover, métricas específicas, tecnologías y estado vacío.
- No se añadió slider ni dependencia externa para mantener rendimiento y evitar patrones genéricos.

### Testimonios en cinta infinita

- Se transformó la sección de testimonios en un marquee CSS continuo.
- La animación se pausa en hover y se desactiva con `prefers-reduced-motion`.
- Se duplican los datos en render para lograr loop continuo sin JavaScript de animación.

### Simplificación de testimonios

- Se retiró el encabezado textual de la sección de testimonios.
- La sección queda como cinta visual directa para reducir ruido y mejorar ritmo de scroll.
