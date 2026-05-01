# Samuel Ciocan | Portfolio personal

Portfolio personal de **Samuel Ciocan**, preparado como página principal, CV web, enlaces profesionales y centro de proyectos. El sitio está pensado para desplegarse gratis en **Cloudflare Pages** con el dominio `samuelciocan.com`.

## Tecnologías usadas

- HTML semántico generado de forma estática
- CSS moderno y responsive sin frameworks externos
- JavaScript ligero para menú, microinteracciones y animaciones de entrada
- Node.js solo como generador en tiempo de build
- Cloudflare Pages como hosting estático

No hay backend obligatorio, claves API, servicios de pago ni dependencias externas de npm.

## Instalación

Necesitas Node.js para ejecutar los scripts. No hay dependencias externas, así que `npm install` es opcional:

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

El servidor local genera `dist` y sirve la web en `http://localhost:4173`. Si el puerto está ocupado, el script prueba el siguiente disponible.

## Build

```bash
npm run build
```

La web final se genera en:

```text
dist
```

## Validación

```bash
npm run lint
npm test
```

Ambos comandos generan la web y comprueban que existan las rutas principales, metadatos SEO, redirects y que no aparezcan datos antiguos no deseados.

## Despliegue en Cloudflare Pages

Configuración recomendada:

- Framework preset: `None`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`
- Variables de entorno: ninguna necesaria

Después puedes conectar el dominio personalizado:

```text
samuelciocan.com
```

## Estructura de carpetas

```text
src/
  data/
    profile.mjs      Datos personales, correo, redes y textos base
    cv.mjs           Experiencia, formación, habilidades e idiomas
    projects.mjs     Proyectos y repositorios
    links.mjs        Enlaces de /links
  styles/
    styles.css       Estilos globales
  scripts/
    main.js          JS del frontend
  assets/
    img/             Imagen optimizada y Open Graph
scripts/
  build.mjs          Generador estático
  dev-server.mjs     Servidor local
  validate.mjs       Validaciones
public/
  favicon.svg
  site.webmanifest
  _headers
dist/                Salida generada, no editar a mano
```

## Cómo cambiar contenido

Edita estos archivos:

- `src/data/profile.mjs`: nombre profesional, correo, GitHub, LinkedIn, Telegram, Instagram, X y texto de presentación.
- `src/data/cv.mjs`: experiencia, formación, habilidades, idiomas y disponibilidad.
- `src/data/projects.mjs`: proyectos, descripciones, tecnologías, estados, URLs y CTAs.
- `src/data/links.mjs`: botones de la página `/links`.

Campos pendientes habituales:

- `public/cv.pdf` cuando tengas un PDF actualizado y sin datos privados
- Repositorios o demos si cambian en GitHub

## Cómo añadir proyectos

1. Abre `src/data/projects.mjs`.
2. Duplica un objeto de proyecto.
3. Cambia `slug`, `name`, `description`, `technologies`, `status`, `repoUrl` y `cta`.
4. Ejecuta `npm run build`.

## Rutas principales

- `/`
- `/links`
- `/proyectos`
- `/cv`

## Rutas cortas y redirects

El build genera `_redirects` para Cloudflare Pages:

- `/github` -> GitHub de `samu-tec`
- `/linkedin` -> LinkedIn de Samuel Ciocan
- `/telegram` -> Telegram de Samuel Ciocan
- `/instagram` -> Instagram de Samuel Ciocan
- `/x` -> perfil de Samuel Ciocan en X
- `/contacto` -> `/links`
- `/friends4you` -> repositorio de Friends4You
- `/discord-rag-bot` -> repositorio de Discord-RAG-Bot
- `/pokeapi` -> repositorio de PokeAPI
- `/proyectos/friends4you/` -> repositorio de Friends4You
- `/proyectos/discord-rag-bot/` -> repositorio de Discord-RAG-Bot
- `/proyectos/pokeapi/` -> repositorio de PokeAPI

## CV en PDF

La web muestra el CV en formato web. No hay botón de descarga por ahora; cuando tengas un PDF actualizado y sin datos privados, puedes añadirlo a `public/cv.pdf` y crear un enlace desde `src/data/profile.mjs` o desde la plantilla.
