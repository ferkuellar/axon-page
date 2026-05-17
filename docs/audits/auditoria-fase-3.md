# Auditoria Fase 3 - Performance de canvas

## Auditoria inicial
- Existian 6 instancias de `IntelligentFlowCanvas`:
  - Hero
  - Services
  - Portfolio
  - WhyAxon
  - ContactCTA
  - Footer
- `IntelligentFlowCanvas` usaba `requestAnimationFrame` mientras el componente estuviera montado, incluso fuera de viewport.
- El cleanup cancelaba RAF y desconectaba `ResizeObserver`, pero no existia `IntersectionObserver`.
- `Testimonials` creaba `const marqueeTestimonials = [...testimonials, ...testimonials]` dentro del render.
- El hero usa `src/assets/hero-ai-flow.gif` de aproximadamente 3.7 MB.
- No existe alternativa `.webm` o `.mp4` en `src/assets`.

## Problemas corregidos
- H-04: demasiadas instancias simultaneas de `IntelligentFlowCanvas`.
- H-16: marquee recalculado en cada render.
- Parte operativa de H-10: se documento que no existe alternativa WebM/MP4 sin romper assets.

## Archivos revisados
- `src/components/ui/IntelligentFlowCanvas.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Services.tsx`
- `src/components/sections/Portfolio.tsx`
- `src/components/sections/WhyAxon.tsx`
- `src/components/sections/ContactCTA.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/assets/hero-ai-flow.gif`

## Archivos creados
- `docs/audits/auditoria-fase-3.md`

## Archivos modificados
- `src/components/ui/IntelligentFlowCanvas.tsx`
- `src/components/sections/Services.tsx`
- `src/components/sections/Portfolio.tsx`
- `src/components/sections/WhyAxon.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Testimonials.tsx`

## Plan tecnico
- Mantener canvas solo donde aporta mas identidad visual.
- Eliminar instancias ambientales redundantes.
- Agregar `IntersectionObserver` para pausar RAF fuera de viewport.
- Mantener soporte para `prefers-reduced-motion`.
- Garantizar cleanup de RAF, observers y listeners.
- Mover duplicacion de testimonios fuera del render.
- Documentar que el GIF necesita conversion futura a WebM/MP4.

## Implementacion realizada
- Se redujo `IntelligentFlowCanvas` a 2 instancias montadas:
  - Hero
  - ContactCTA
- Se removieron canvas de:
  - Services
  - Portfolio
  - WhyAxon
  - Footer
- `IntelligentFlowCanvas` ahora:
  - Usa `IntersectionObserver`.
  - Inicia animacion solo cuando el canvas intersecta el viewport.
  - Cancela `requestAnimationFrame` cuando sale del viewport.
  - Respeta cambios de `prefers-reduced-motion`.
  - Desconecta `IntersectionObserver` y `ResizeObserver` en cleanup.
  - Remueve listeners de puntero en cleanup.
- `marqueeTestimonials` se movio a scope de modulo.
- No se reemplazo el GIF por video porque no existe alternativa `.webm`/`.mp4` local.

## Validacion ejecutada
- `npm run build` -> exitoso.
- `rg` para confirmar:
  - Solo 2 usos de `<IntelligentFlowCanvas`.
  - `marqueeTestimonials` en scope de modulo.
  - Presencia de `IntersectionObserver`, `requestAnimationFrame` y `cancelAnimationFrame`.
- `Get-ChildItem -Recurse src/assets` -> solo existe `hero-ai-flow.gif`.

## Resultado
- No hay mas de 2 canvas montados.
- RAF se pausa fuera de viewport.
- Reduced motion sigue respetado.
- Build productivo exitoso.
- UI conserva identidad visual en hero y contacto.

## Riesgos restantes
- TODO tecnico: convertir `hero-ai-flow.gif` a WebM/MP4 optimizado y usar `<video autoplay loop muted playsInline>` con fallback.
- El canvas aun mezcla configuracion, dibujo y lifecycle en un solo componente; se refactorizara en Fase 7.
- No hay medicion Lighthouse/CPU todavia; queda para auditoria final.

## Auditoria final
- Fase 3 completada.
- Criterios de aceptacion cumplidos a nivel de codigo y build.

## Commit sugerido
```bash
git commit -m "perf: pause canvas off viewport and reduce animation workload"
```
