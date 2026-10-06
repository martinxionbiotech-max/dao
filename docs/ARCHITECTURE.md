# Dao Knowledge Base — Architecture

An English-language knowledge infrastructure for Chinese contemplative traditions
(Daoism, Chan/Zen, qigong, neidan, and related self-cultivation).

## Stack
- Astro 5 (static output) on Cloudflare Pages
- Content Collections with zod schemas (`src/content.config.ts`)
- Structured JSON datasets (`src/data/*.json`) as the knowledge-graph backing store
- Markdown authoring; no headless CMS

## Content collections (17)
| Collection | Route | Purpose |
|---|---|---|
| concepts | /concepts/ | Core ideas (Zuowang, Wu Wei, Qi...) |
| practices | /practices/ | Methods with origins, instructions, evidence |
| problems | /problems/ | Real difficulties meditators report |
| comparisons | /comparisons/ | Structured A-vs-B analysis |
| texts | /texts/ | Classical Chinese texts |
| translations | /translations/ | Term/passage translation studies |
| people | /people/ | Historical figures, legend separated |
| stories | /stories/ | Narratives with explicit legend framing |
| research | /research/ | Modern research reviews |
| glossary | /glossary/ | Chinese-English dictionary entries |
| timeline | /timeline/ | Historical development |
| guides | /guides/ | Practical guides |
| tools | /tools/ | Explorers/interfaces |
| experiences | /experiences/notes/ + /reports/ | Anonymized practitioner material |
| patterns | /experiences/patterns/ | Recurring phenomena |
| questions | /experiences/questions/ | Real practitioner questions |
| blog | /blog/ | Editorial essays only |

## Knowledge graph
`data/relationships.json` holds typed edges (belongs_to, related_to, described_in,
translated_as, associated_with, concerns, derived_from, investigates, discusses).
Pages link to entities via frontmatter `relatedConcepts/Practices/Texts/People/Questions`.

## Evidence system
Every claim class: PRIMARY SOURCE / HISTORICAL EVIDENCE / SCHOLARLY INTERPRETATION /
TRADITIONAL·LINEAGE INTERPRETATION / MODERN RESEARCH / PRACTITIONER EXPERIENCE /
CONTEMPORARY COMMUNITY OBSERVATION / EDITORIAL SYNTHESIS / UNCERTAIN.
Never mixed; uncertainty preserved.

## Publication states
- draft: not built into public routes
- published: indexed
- noindex: served but excluded from sitemap/robots consideration
- internal: not built (research material only)
