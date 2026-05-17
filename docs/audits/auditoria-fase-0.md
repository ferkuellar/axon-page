# Auditoria Fase 0 - Baseline tecnico

## Auditoria inicial
- Proyecto React 18 + Vite + TypeScript + TailwindCSS.
- `node_modules/` existe, por lo que `npm install` no fue necesario en esta fase.
- `axonai-code-audit-report.html` no se encontro dentro del workspace; se continua con los hallazgos especificados en el prompt.
- Estado inicial relevante:
  - `robots.txt` apunta a `https://axon.mx/sitemap.xml`.
  - `sitemap.xml`, canonical y Open Graph apuntan a `https://axonai.mx/`.
  - `ContactForm.tsx` imprime el payload completo del formulario con `console.info`.
  - No existe script `lint`.
  - No existe setup de tests.
  - `Plan.price` existe en tipos/data aunque las cards no muestran precio.
  - `portfolioCategories` esta exportado desde `siteData.ts`.
  - El GIF del hero queda empaquetado como asset de aproximadamente 3.7 MB.

## Problemas corregidos
- Ninguno. Fase 0 es solo diagnostico y baseline.

## Archivos revisados
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `index.html`
- `robots.txt`
- `sitemap.xml`
- `src/App.tsx`
- `src/components/ui/ContactForm.tsx`
- `src/components/ui/IntelligentFlowCanvas.tsx`
- `src/components/sections/Hero.tsx`
- `src/data/siteData.ts`

## Archivos creados
- `docs/audits/auditoria-fase-0.md`

## Archivos modificados
- Ningun archivo productivo.

## Plan tecnico
- Usar este baseline para ejecutar las fases en orden.
- Corregir primero SEO minimo, logging de PII y convenciones de entorno.
- No avanzar a fases posteriores si el build falla.

## Implementacion realizada
- Se inspeccionaron los archivos requeridos.
- Se confirmaron scripts disponibles:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
- Se confirmo que no existe `npm run lint`.
- Se confirmo que `node_modules/` existe.
- Se ejecuto build de baseline sin modificar codigo productivo.

## Validacion ejecutada
- `Test-Path node_modules` -> `True`
- `npm run build` -> exitoso
- Busqueda inicial con `rg` para `console.*`, dominios, `VITE_`, campos muertos y exports relevantes.

## Resultado
- Build actual pasa.
- El proyecto esta en estado compilable, pero no esta listo para go-live por los hallazgos criticos detectados:
  - Dominio incorrecto en `robots.txt`.
  - Logging de datos personales del formulario.
  - Falta `.env.example`.
  - Formulario muestra exito falso sin integracion real.

## Riesgos restantes
- Riesgo alto de filtracion de PII por consola si el formulario se usa en produccion.
- Riesgo SEO por conflicto de dominio entre `robots.txt` y `sitemap.xml`.
- Riesgo comercial por perdida de leads hasta conectar `VITE_FORM_ENDPOINT`.
- Riesgo de performance por multiples canvas y GIF pesado.

## Auditoria final
- Fase 0 completada sin corregir codigo productivo.
- Baseline documentado.
- Build baseline exitoso.

## Commit sugerido
```bash
git commit -m "docs: add phase 0 audit baseline"
```
