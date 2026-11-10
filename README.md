# REAnima · Contra el REA en blanco

REAnima ayuda a los docentes a romper el bloqueo inicial al crear un Recurso Educativo Abierto (REA). Guía en 5 fases (Analiza, Crea, Convierte, Mejora y Valida) con prompts para cualquier IA conversacional y convierte el resultado en un archivo de **eXeLearning 3** (`.elpx`), directamente en el navegador.

- Etapas: Primaria, ESO, Bachillerato y Formación Profesional.
- Estructura inspirada en proyectos REA de referencia, EDIA (INTEF/Cedec) y CREA (Junta de Extremadura), parte de la OER Dynamic Coalition de la UNESCO.
- REA alineados con la norma UNE 71362 de Calidad de los Materiales Educativos Digitales: las fases Mejora y Valida siguen sus criterios.
- Español e inglés.
- Sin servidor: los datos se guardan solo en el navegador de cada usuario.
- Se usa como aplicación instalada (PWA): la instalación es el último paso obligatorio de la bienvenida. Después se abre desde su icono, en su propia ventana y también sin conexión.

Autoría: Ángel Luis González Serrano · angel@gmail.com
Proyecto sin ánimo de lucro, hecho para ayudar a docentes. Es solo un complemento para potenciar el trabajo del docente: no sustituye al docente ni a los materiales habituales del aula, como libros de texto o manuales.

## Publicarlo en GitHub Pages

1. Crea un repositorio público en GitHub (por ejemplo, `reanima`).
2. Sube el contenido de esta carpeta a la raíz del repositorio: `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` y la carpeta `icons/`.
3. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
4. En un par de minutos estará en `https://TU-USUARIO.github.io/reanima/`.

## Instalarlo

La instalación es obligatoria: en una pestaña normal del navegador, REAnima solo muestra la bienvenida hasta que se instala.


- **Chrome o Edge (ordenador):** abre la dirección, completa la bienvenida y pulsa «Instalar REAnima». Queda un icono en el escritorio o en el menú de aplicaciones.
- **Android (Chrome):** menú ⋮ → «Instalar aplicación» o «Añadir a pantalla de inicio».
- **iPhone/iPad (Safari):** botón Compartir → «Añadir a pantalla de inicio». Al abrirla desde el icono, pide de nuevo los datos de la bienvenida (iOS guarda los datos de la app por separado).
- Firefox y Safari en Mac no instalan aplicaciones web: usa Chrome o Edge.

## Actualizar

Sube los archivos nuevos al repositorio. Si cambias `index.html`, cambia también el nombre de la caché en `sw.js` (por ejemplo `reanima-v3` → `reanima-v4`) para que los usuarios reciban la versión nueva.
