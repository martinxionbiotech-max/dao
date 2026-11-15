// Shared Article JSON-LD for editorial collections. Keeps the author and
// publisher pointed at the site-level @id nodes declared in Base.astro, so a
// crawler resolves one person and one organisation rather than duplicates.

interface Args {
  title: string;
  description?: string;
  date?: Date;
  updated?: Date;
  path: string;
  type?: 'Article' | 'TechArticle' | 'ScholarlyArticle';
}

export function articleLd({ title, description, date, updated, path, type = 'Article' }: Args) {
  const url = new URL(path, 'https://daoismhub.com').href;
  return {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    ...(description ? { description } : {}),
    ...(date ? { datePublished: date.toISOString() } : {}),
    ...(updated || date ? { dateModified: (updated || date)!.toISOString() } : {}),
    author: { '@id': 'https://daoismhub.com/#author' },
    publisher: { '@id': 'https://daoismhub.com/#organization' },
    mainEntityOfPage: url,
  };
}
