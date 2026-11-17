# Guía de mantenimiento del portafolio

Sitio estático hecho con [Astro](https://astro.build). Es bilingüe (español en `/` e inglés en `/en/`), tiene tema claro y oscuro, y envía casi cero JavaScript: solo unas líneas para el botón de tema.

## Qué editar

| Quiero cambiar… | Archivo |
|---|---|
| Correo, LinkedIn, foto, hoja de vida, URL del sitio | `src/data/site.ts` |
| Proyectos, experiencia, formación, habilidades y textos | `src/data/content.ts` |
| Colores, tamaños y espaciados | `src/styles/global.css` |
| Hoja de vida en PDF | `public/cv/` |
| Imagen de vista previa para LinkedIn (1200×630) | `public/og.png` |

Los datos de cada repo (lenguaje y fecha de actualización) se leen de la API de GitHub **durante el build**, no en el navegador del visitante. Si la API no responde, se usan los valores `fallback` de `content.ts`.

## Trabajar en local

Necesitas Node 22 o superior.

```bash
npm install
npm run dev       # http://localhost:4321 con recarga automática
npm run build     # genera la carpeta dist/
npm run preview   # sirve dist/ para revisarla
```

## Publicar en GitHub Pages

1. Crea un repositorio público llamado exactamente **`Andres3105.github.io`**.
2. Sube este proyecto a la rama `main` (la carpeta `node_modules` no se sube, ya está en `.gitignore`).
3. En el repo ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` compila y publica en cada push. En uno o dos minutos el sitio queda en `https://andres3105.github.io`.

Si prefieres otro nombre de repo (por ejemplo `portafolio`), el sitio quedará en `https://andres3105.github.io/portafolio/`; en ese caso descomenta `base: '/portafolio'` en `astro.config.mjs`.

El workflow también corre cada lunes para refrescar las fechas de los repos sin que tengas que hacer nada.

## Alternativa: Cloudflare Pages

En Cloudflare, crea un proyecto conectado a este repo con comando de build `npm run build` y carpeta de salida `dist`. Cambia `url` en `src/data/site.ts` por la dirección que te asigne.
