import { getCollection } from 'astro:content';
import slugmapData from '../data/slugmap.json';

const slugUrl: Record<string, string> = {};
for (const it of (slugmapData as any).items) {
  if (it.urls?.length && !slugUrl[it.slug]) slugUrl[it.slug] = it.urls[0];
}

const COLLECTIONS = [
  'concepts', 'practices', 'problems', 'comparisons', 'texts', 'translations',
  'people', 'stories', 'research', 'glossary', 'timeline', 'guides', 'tools',
  'experiences', 'patterns', 'questions', 'blog',
] as const;

export async function GET() {
  const docs: { title: string; description: string; url: string; coll: string }[] = [];
  for (const coll of COLLECTIONS) {
    const entries = await getCollection(coll as any);
    for (const e of entries) {
      if (e.data.status === 'draft' || e.data.status === 'internal') continue;
      const slug = e.id.replace(/\.md$/, '');
      const url = slugUrl[slug];
      if (!url) continue;
      docs.push({
        title: e.data.title,
        description: e.data.description || '',
        url,
        coll,
      });
    }
  }
  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
