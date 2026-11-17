// Lee tus repositorios de la API de GitHub UNA vez, durante el build.
// El visitante nunca hace peticiones a GitHub: recibe HTML ya generado.
// Si la API falla (sin red, límite de uso), se usan los datos "fallback".
import { site } from '../data/site';

export type RepoMeta = {
  language: string | null;
  pushed: string;
  stars: number;
  homepage: string | null;
};

let cache: Promise<Map<string, RepoMeta>> | undefined;

async function load(): Promise<Map<string, RepoMeta>> {
  const map = new Map<string, RepoMeta>();
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const res = await fetch(`https://api.github.com/users/${site.github}/repos?per_page=100`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as any[];
    if (!Array.isArray(data)) throw new Error('respuesta inesperada');
    for (const r of data) {
      map.set(String(r.name).toLowerCase(), {
        language: r.language ?? null,
        pushed: r.pushed_at,
        stars: r.stargazers_count ?? 0,
        homepage: r.homepage || null,
      });
    }
  } catch (err) {
    console.warn(`[github] No se pudo leer la API (${(err as Error).message}). Uso datos locales.`);
  }
  return map;
}

export function getRepos() {
  cache ??= load();
  return cache;
}
