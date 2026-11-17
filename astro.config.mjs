import { defineConfig } from 'astro/config';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  // Si publicas en un repo que NO se llama "Andres3105.github.io"
  // (por ejemplo "portafolio"), descomenta la línea de abajo:
  // base: '/portafolio',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    // El CSS va dentro del HTML: cero peticiones que bloqueen el render.
    inlineStylesheets: 'always',
  },
  prefetch: false,
});
