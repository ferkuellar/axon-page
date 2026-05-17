# Auditoria Fase 6 - Modularidad de datos

## Auditoria inicial
- `src/data/siteData.ts` era monolitico y concentraba marca, navegacion, servicios, pricing, proyectos y testimonios.
- `Plan.price` existia en tipos y datos aunque la UI ya no mostraba precios.
- `portfolioCategories` estaba exportado pero no se usaba.
- `projects.slice(0, 4)` no tenia comentario de intencion.

## Problemas corregidos
- H-07: `siteData.ts` monolitico.
- H-12: `Plan.price` muerto.
- H-13: `portfolioCategories` exportado sin uso.
- H-14: `projects.slice(0, 4)` sin documentar.

## Archivos revisados
- `src/data/siteData.ts`
- `src/types/index.ts`
- `src/components/sections/Portfolio.tsx`
- Componentes que importan desde `src/data/siteData.ts`

## Archivos creados
- `src/data/index.ts`
- `src/data/brand.ts`
- `src/data/navigation.ts`
- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/testimonials.ts`
- `src/data/pricing.ts`
- `docs/audits/auditoria-fase-6.md`

## Archivos modificados
- `src/data/siteData.ts`
- `src/types/index.ts`
- `src/components/sections/Portfolio.tsx`

## Plan tecnico
- Dividir data por dominio.
- Crear `src/data/index.ts` como facade de re-export.
- Mantener `siteData.ts` como facade de compatibilidad para no tocar imports existentes.
- Eliminar `Plan.price`.
- Eliminar `portfolioCategories`.
- Documentar limite visual del portfolio.
- Ejecutar tests y build.

## Implementacion realizada
- `siteData.ts` ahora reexporta desde `src/data/index.ts`.
- Data movida a:
  - `brand.ts`
  - `navigation.ts`
  - `services.ts`
  - `pricing.ts`
  - `projects.ts`
  - `testimonials.ts`
- `Plan.price` eliminado de `src/types/index.ts` y de los datos.
- `portfolioCategories` eliminado.
- Se agrego comentario en `Portfolio.tsx`:
  - `Landing page intentionally shows only the first 4 projects to keep the section compact.`

## Validacion ejecutada
- `npm test` -> 4 archivos, 11 tests, todos pasan.
- `npm run build` -> exitoso.
- `rg` para confirmar:
  - No queda `portfolioCategories`.
  - No queda `price` en data/tipos.
  - El comentario del limite de 4 proyectos existe.

## Resultado
- Datos modularizados sin romper compatibilidad.
- Tipos actualizados.
- Tests y build pasan.

## Riesgos restantes
- Algunos imports siguen apuntando a `siteData.ts` por compatibilidad; se pueden migrar gradualmente al facade `src/data/index.ts` en una limpieza futura.
- Las decisiones de contenido siguen acopladas a arrays estaticos; si crece el sitio, podria convenir CMS o JSON versionado.

## Auditoria final
- Fase 6 completada.
- Criterios de aceptacion cumplidos.

## Commit sugerido
```bash
git commit -m "refactor: split site data into domain modules"
```
