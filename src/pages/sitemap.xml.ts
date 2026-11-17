import { site } from '../data/site';
import { withBase } from '../lib/paths';

export function GET() {
  const urls = ['/', '/en/'].map((p) => new URL(withBase(p), site.url).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
