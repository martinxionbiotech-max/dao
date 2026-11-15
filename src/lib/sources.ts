// Maps a citation string to a stable, verifiable URL when one exists.
// Rules are deliberately conservative: a wrong link is worse than plain text.
// - Primary texts go to ctext.org (Chinese Text Project), which serves the
//   received text and is stable.
// - The Stanford Encyclopedia of Philosophy entry is used for the general
//   Daoism topic, not for specific claims.
// - Anything that looks like a book (has a 4-digit year) gets a WorldCat
//   search URL, which is a lookup, not a claim that this is the edition cited.
// - Everything else stays unlinked.

const TEXT_LINKS: { test: RegExp; url: string }[] = [
  { test: /daodejing|dao de jing|道德经|laozi|lao zi/i, url: 'https://ctext.org/dao-de-jing' },
  { test: /zhuangzi|chuang tzu|庄子/i, url: 'https://ctext.org/zhuangzi' },
  { test: /liezi|lieh tzu|列子/i, url: 'https://ctext.org/liezi' },
  { test: /huainanzi|淮南子/i, url: 'https://ctext.org/huainanzi' },
  { test: /baopuzi|bao pu zi|抱朴子/i, url: 'https://ctext.org/baopu-zi' },
  { test: /yijing|book of changes|易经|周易/i, url: 'https://ctext.org/book-of-changes' },
  { test: /analects|lunyu|论语/i, url: 'https://ctext.org/analects' },
  { test: /zhuangzi|庄子/i, url: 'https://ctext.org/zhuangzi' },
  { test: /daozang|道藏/i, url: 'https://ctext.org/daoism' },
  { test: /stanford encyclopedia|sep entry/i, url: 'https://plato.stanford.edu/entries/daoism/' },
];

export function sourceHref(text: string): string | null {
  const raw = (text || '').trim();
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) return null; // already a URL; render as text to avoid double links
  for (const { test, url } of TEXT_LINKS) {
    if (test.test(raw)) return url;
  }
  const year = raw.match(/\b(1[5-9]\d{2}|20[0-2]\d)\b/);
  if (year) {
    return `https://search.worldcat.org/search?q=${encodeURIComponent(raw.slice(0, 120))}`;
  }
  return null;
}
