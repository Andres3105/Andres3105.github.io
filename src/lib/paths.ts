// Antepone el "base" de Astro a una ruta (necesario si el sitio vive en /repo/).
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}
