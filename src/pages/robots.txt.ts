import { site } from '../data/site';
import { withBase } from '../lib/paths';

export function GET() {
  const sitemap = new URL(withBase('/sitemap.xml'), site.url).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`);
}
