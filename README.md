# Samuel Ciocan — Portfolio personal

Portfolio personal de **Samuel Ciocan**, desarrollador web full stack. La web centraliza proyectos, CV, contacto y enlaces profesionales en `samuelciocan.com`.

El objetivo del proyecto es tener una página sencilla, rápida y mantenible para presentar mi perfil como programador web, con foco en frontend moderno, backend organizado, bases de datos, APIs y despliegue web.

## Tecnologías utilizadas

- HTML semántico generado de forma estática
- CSS responsive sin frameworks externos
- JavaScript ligero para navegación, animaciones y copia de correo
- Node.js como generador en tiempo de build
- Cloudflare Workers con assets estáticos

No incluye backend obligatorio, claves privadas ni datos personales sensibles.

## Estructura general

- `src/data/profile.mjs`: datos públicos, texto base, SEO y tecnologías.
- `src/data/projects.mjs`: proyectos destacados y repositorios.
- `src/data/cv.mjs`: perfil profesional, formación, experiencia, habilidades e idiomas.
- `src/data/links.mjs`: enlaces mostrados en `/links`.
- `src/styles/styles.css`: estilos globales y responsive.
- `src/scripts/main.js`: interacción del menú, animaciones y botón de copiar correo.
- `scripts/build.mjs`: genera la web estática en `dist`.
- `public/`: archivos públicos como `favicon.svg`, `_headers` y `site.webmanifest`.

## Rutas principales

- `/`: página de inicio y presentación.
- `/proyectos/`: proyectos y repositorios destacados.
- `/cv/`: currículum web, tecnologías y contacto.
- `/links/`: link in bio con enlaces profesionales.

## Despliegue

La web se publica en Cloudflare usando los assets estáticos generados en `dist`.

Comandos de uso interno:

```bash
npm run build
npx wrangler deploy
```

`npm run build` genera la carpeta `dist`. `npx wrangler deploy` despliega el proyecto en Cloudflare.

## Nota

Este repositorio es mi portfolio personal. No está planteado como plantilla reutilizable ni como tutorial de instalación para terceros. El contenido y el código quedan sin licencia de reutilización; consulta `LICENCE`.
