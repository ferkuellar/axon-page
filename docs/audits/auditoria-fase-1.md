# Auditoria Fase 1 - SEO y seguridad minima go-live

## Auditoria inicial
- `robots.txt` apuntaba a `https://axon.mx/sitemap.xml`, distinto al dominio publico actual `https://axonai.mx/`.
- `ContactForm.tsx` ejecutaba `console.info("AxonAI lead payload", form)`, exponiendo nombre, empresa, telefono, email, servicio, etapa y mensaje.
- No existia `.env.example`.
- `siteData.ts` tenia contacto hardcodeado, sin convencion de entorno para deployment.

## Problemas corregidos
- H-01: conflicto de dominio en `robots.txt`.
- H-02: leak de PII por logging del formulario.
- H-15: falta de `.env.example` y convencion minima de variables.

## Archivos revisados
- `robots.txt`
- `src/components/ui/ContactForm.tsx`
- `src/data/siteData.ts`
- `.env.example`

## Archivos creados
- `.env.example`
- `docs/audits/auditoria-fase-1.md`

## Archivos modificados
- `robots.txt`
- `src/components/ui/ContactForm.tsx`
- `src/data/siteData.ts`

## Plan tecnico
- Corregir sitemap en `robots.txt` a `https://axonai.mx/sitemap.xml`.
- Eliminar cualquier logging de payload del formulario.
- Crear `.env.example` sin secretos reales.
- Preparar `brand` para leer contacto desde `import.meta.env` con fallback seguro.
- Validar con build y busqueda de logs.

## Implementacion realizada
- `robots.txt` ahora apunta a `https://axonai.mx/sitemap.xml`.
- Se elimino `console.info` del submit del formulario.
- Se agrego `.env.example` con:
  - `VITE_SITE_URL`
  - `VITE_CONTACT_EMAIL`
  - `VITE_WHATSAPP_NUMBER`
  - `VITE_FORM_ENDPOINT`
- `brand.email` y `brand.whatsapp` ahora leen desde `import.meta.env` y mantienen fallback publico.

## Validacion ejecutada
- `npm run build` -> exitoso.
- `rg -n "console\\.(info|log|warn)|AxonAI lead payload|Sitemap:" robots.txt src\\components\\ui\\ContactForm.tsx src\\data\\siteData.ts .env.example`
  - Resultado: solo aparece `Sitemap: https://axonai.mx/sitemap.xml`.

## Resultado
- `robots.txt` ya usa el dominio correcto.
- No queda logging de PII del formulario en los archivos corregidos.
- `.env.example` existe y no contiene secretos.
- Build productivo exitoso.

## Riesgos restantes
- El formulario aun muestra exito local sin enviar a endpoint real; esto se corrige en Fase 2.
- El endpoint real no esta configurado porque debe venir por variable de entorno.
- Persisten riesgos de performance del canvas/GIF hasta Fase 3.

## Auditoria final
- Fase 1 completada.
- Criterios de aceptacion cumplidos.
- No se introdujeron dependencias nuevas.

## Commit sugerido
```bash
git commit -m "fix: correct sitemap domain and remove contact form PII logging"
```
