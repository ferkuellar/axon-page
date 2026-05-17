# AxonAI Website

Landing publica de AxonAI para implementar inteligencia artificial en PyMEs y empresas medianas en Mexico y LatAm.

## Stack

- React 18
- Vite
- TypeScript
- TailwindCSS
- Vitest + React Testing Library

## Instalacion

```bash
npm install
```

## Variables de entorno

Copia `.env.example` a `.env.local` cuando necesites valores locales.

```env
VITE_SITE_URL=https://axonai.mx
VITE_CONTACT_EMAIL=hola@axonai.mx
VITE_WHATSAPP_NUMBER=526140000000
VITE_FORM_ENDPOINT=
```

No guardes secretos reales en archivos versionados. `VITE_FORM_ENDPOINT` debe apuntar a un endpoint propio de leads cuando el sitio vaya a produccion.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm test
npm run test:watch
npm run test:coverage
```

## Estructura principal

```txt
src/
  App.tsx
  main.tsx
  assets/
  components/
    layout/
    sections/
    ui/
  data/
    brand.ts
    navigation.ts
    pricing.ts
    projects.ts
    services.ts
    testimonials.ts
    index.ts
    siteData.ts
  hooks/
  styles/
  test/
  types/
```

## Contenido editable

El contenido se divide por dominio en `src/data/*`. `src/data/siteData.ts` se conserva como facade de compatibilidad.

- `brand.ts`: marca, contacto, ubicacion y metricas.
- `navigation.ts`: links principales.
- `services.ts`: servicios, proceso, diferenciales y opciones del formulario.
- `pricing.ts`: formas de empezar sin precios publicos.
- `projects.ts`: portfolio.
- `testimonials.ts`: testimonios.

## Decisiones tecnicas

- El formulario envia leads por `POST` JSON a `VITE_FORM_ENDPOINT`.
- Si falta endpoint, la UI muestra error controlado y no simula exito.
- No se loguean payloads del formulario ni PII en consola.
- `robots.txt` apunta al sitemap de `https://axonai.mx`.
- `Hero`, `Portfolio` y `ContactCTA` estan protegidos con `ErrorBoundary`.
- `Portfolio`, `Testimonials` y `ContactCTA` cargan con `React.lazy`.
- El canvas se pausa fuera de viewport, respeta `prefers-reduced-motion` y esta limitado a zonas clave.
- La landing muestra intencionalmente solo los primeros 4 proyectos para mantener compacta la seccion.

## Build y preview

```bash
npm run build
npm run preview
```

El build genera `dist/`. El preview sirve la version productiva localmente.

## Testing

```bash
npm test
```

Cobertura inicial:

- `ContactForm`: validacion, error de endpoint y exito.
- `ProjectModal`: render abierto, cierre por Escape, cierre por boton y `aria-modal`.
- Hooks: `useScrollState` y `useRevealOnScroll`.
- Configuracion de canvas: estrategias `hero` y `ambient`.

## Checklist predeploy

- [ ] `npm install`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `npm run preview`
- [ ] Confirmar `VITE_FORM_ENDPOINT` real en el entorno de hosting.
- [ ] Probar formulario con endpoint OK y endpoint fallando.
- [ ] Confirmar que no hay logs de PII en consola.
- [ ] Revisar `robots.txt` y `sitemap.xml`.
- [ ] Revisar navegacion movil.
- [ ] Revisar navegacion por teclado y skip link.
- [ ] Probar modal de portfolio con mouse y Escape.
- [ ] Revisar hero en mobile y desktop.
- [ ] Auditar el peso del GIF del hero; idealmente reemplazar por WebM/MP4 optimizado.
