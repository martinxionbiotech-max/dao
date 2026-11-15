// Rebuild llms.txt from the built sitemap so the machine-readable index cannot
// drift behind the site. Previously this file listed only the hub pages (30
// links against 372 URLs), which made the site look much smaller to retrieval
// systems than it is.
//
// Run after `astro build` (see package.json). Reads dist/sitemap-0.xml and
// writes dist/llms.txt, grouped by the first path segment.

import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITEMAP = path.join(DIST, 'sitemap-0.xml');
const OUT = path.join(DIST, 'llms.txt');

const xml = fs.readFileSync(SITEMAP, 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const SECTIONS = [
  ['', 'Core pages'],
  ['concepts', 'Concepts'],
  ['practices', 'Practices'],
  ['texts', 'Texts'],
  ['translations', 'Translations'],
  ['people', 'People'],
  ['timeline', 'Timeline'],
  ['glossary', 'Glossary'],
  ['stories', 'Stories'],
  ['research', 'Research'],
  ['comparisons', 'Comparisons'],
  ['problems', 'Problems'],
  ['guides', 'Guides'],
  ['tools', 'Tools'],
  ['experiences', 'Practitioner experience'],
  ['blog', 'Blog'],
];

function sectionOf(url) {
  const p = new URL(url).pathname.replace(/^\/|\/$/g, '');
  if (!p) return '';
  return p.split('/')[0];
}

const bySection = new Map();
for (const u of urls) {
  const s = sectionOf(u);
  if (!bySection.has(s)) bySection.set(s, []);
  bySection.get(s).push(u);
}

const lines = [];
lines.push('# Dao — Chinese Contemplative Traditions Knowledge Base');
lines.push('');
lines.push(
  '> English-language knowledge infrastructure connecting Chinese contemplative traditions, classical texts, historical scholarship, modern research, and anonymized practitioner experience — with explicit evidence classification and a structured knowledge graph. Contact: admin@daoismhub.com.'
);
lines.push('');
lines.push(`This file lists all ${urls.length} indexed URLs. Each page also serves Markdown at the same URL with \`Accept: text/markdown\`, and at \`/<path>/index.md\`.`);
lines.push('');

lines.push('## Answers');
lines.push('');
lines.push('- **Who writes this site?** Ding.W, a meditation practitioner, with every page carrying a visible byline and a last-updated date. Editorial rules are on /compliance/.');
lines.push('- **How is evidence handled?** Every entry can carry an evidence classification (primary source, historical evidence, scholarly interpretation, traditional/lineage interpretation, modern research, practitioner experience, contemporary community observation, editorial synthesis, uncertain). Classes are not mixed.');
lines.push('- **Are sources cited?** Yes — 337 entries carry a sources field, rendered as a Sources section. Where a stable edition or lookup exists, the citation links to it.');
lines.push('- **What this site does not do?** It does not diagnose, prescribe, or promise health outcomes; it does not publish teacher credentials it cannot verify; it does not treat traditional claims as modern evidence.');
lines.push('');

for (const [seg, label] of SECTIONS) {
  const items = bySection.get(seg);
  if (!items || items.length === 0) continue;
  lines.push(`## ${label} (${items.length})`);
  lines.push('');
  for (const u of items.sort()) {
    const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
    const name = p === '' ? 'Home' : p.split('/').pop().replace(/-/g, ' ');
    lines.push(`- [${name}](${u})`);
  }
  lines.push('');
}

// Any section not listed above (policies, search, data) goes last.
const known = new Set(SECTIONS.map(([s]) => s));
const rest = [...bySection.keys()].filter((s) => !known.has(s));
if (rest.length) {
  lines.push('## Site pages');
  lines.push('');
  for (const s of rest) {
    for (const u of bySection.get(s).sort()) {
      const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
      lines.push(`- [${p || 'Home'}](${u})`);
    }
  }
  lines.push('');
}

fs.writeFileSync(OUT, lines.join('\n'));
console.log(`[llms] ${urls.length} URLs -> ${OUT}`);
