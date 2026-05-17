# Auditoria Fase 2 - Formulario real de leads

## Auditoria inicial
- El formulario validaba campos, pero marcaba exito local sin enviar datos a ningun endpoint.
- No habia estado de `submitting`, `success` o `error`.
- `VITE_FORM_ENDPOINT` existia en `.env.example` desde Fase 1, pero no se usaba.
- No quedaban logs de PII despues de Fase 1.

## Problemas corregidos
- H-03: formulario sin integracion real.
- H-02: se mantiene la ausencia de logging de PII.
- H-15: se usa `VITE_FORM_ENDPOINT`.

## Archivos revisados
- `src/components/ui/ContactForm.tsx`
- `src/data/siteData.ts`
- `.env.example`

## Archivos creados
- `docs/audits/auditoria-fase-2.md`

## Archivos modificados
- `src/components/ui/ContactForm.tsx`

## Plan tecnico
- Convertir `handleSubmit` a flujo async.
- Mantener validacion local antes del envio.
- Leer endpoint desde `import.meta.env.VITE_FORM_ENDPOINT`.
- Enviar payload minimo via `POST` JSON.
- Manejar estados `idle`, `submitting`, `success`, `error`.
- Limpiar el formulario solo si el endpoint responde OK.
- Mostrar error de configuracion claro en desarrollo si falta endpoint.

## Implementacion realizada
- Se agrego `SubmitState`.
- Se agregaron `submitState` y `submitMessage`.
- Se usa `fetch(formEndpoint, { method: "POST", headers, body })`.
- Se valida `response.ok`; si falla, se muestra error.
- Si falta `VITE_FORM_ENDPOINT`:
  - En desarrollo se muestra: `Falta configurar VITE_FORM_ENDPOINT para enviar leads.`
  - En produccion se muestra un mensaje operativo sin romper la UI.
- El boton queda deshabilitado mientras se envia y muestra `Enviando...`.
- El formulario se limpia solo en exito real del endpoint.

## Validacion ejecutada
- `npm run build` -> exitoso.
- `rg` para `console.info`, `console.log`, `console.warn`, mensaje de exito falso y uso de `VITE_FORM_ENDPOINT`.

## Resultado
- El formulario ya no muestra exito falso.
- El envio depende de `VITE_FORM_ENDPOINT`.
- No hay logging de PII.
- Build productivo exitoso.

## Riesgos restantes
- No se puede probar un envio real hasta configurar un endpoint externo.
- La cobertura automatizada del formulario se agregara en Fase 5.
- El formulario mantiene el componente `Field` generico con Tailwind arbitrario hasta Fase 8.

## Auditoria final
- Fase 2 completada.
- Criterios de aceptacion cumplidos a nivel de codigo y build.

## Commit sugerido
```bash
git commit -m "feat: connect contact form to configurable lead endpoint"
```
