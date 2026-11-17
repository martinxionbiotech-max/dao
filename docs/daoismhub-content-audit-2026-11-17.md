# DaoismHub — Content Quality Audit

**Date:** 2026-11-17  
**Mode:** READ_ONLY — no content page changed  
**Repo:** `/root/.openclaw/workspace/repos/dao`  
**Site:** https://daoismhub.com/  
**HEAD:** `f6e24a5`  
**Scope:** 368 published/working content files excluding 17 `_template.md` files; 17 collections; live and local-build spot checks  
**Related:** `data.daoismhub.com` (not deeply audited in this pass)

---

## 1. Executive summary

DaoismHub has a strong content foundation but a serious **deployment-state discrepancy**.

The local build contains **398 sitemap URLs / 399 HTML files**, while the live `sitemap-0.xml` contains **378 URLs**:

- 29 local URLs are absent from live
- 9 live URLs are absent from local
- Local content is therefore not a reliable representation of the live site

This is a **P0 deployment/index-state issue**, not a writing issue. Content quality should be scored against the local build only after the deployment gap is resolved.

On the content itself:

- **368** actual content files excluding templates.
- **324** have explicit `status: published`; **44** omit `status`.
- **323/368** have sources/evidence fields.
- **323/368** have an evidence classification.
- **324/368** have a date or updated field.
- Duplication is low; unique-sentence share is generally 0.74–0.96.
- AI-style phrase counts are low and marketing-empty phrases are absent.
- The main content weakness is **metadata length at render time**:
  - 189 rendered titles >60 characters
  - 321 rendered descriptions >160 characters
- Many pages are short by design (glossary/timeline), but 45 rendered pages are under 300 words.

No evidence of mass AI spam or fabricated source lists was found.

---

## 2. Inventory

### Collections

| Collection | Files | Word range | Sources | Explicit editorial section |
|---|---:|---:|---:|---:|
| concepts | 18 | 370–830 | 15/18 | 13/18 |
| comparisons | 11 | 285–655 | 3/11 | 1/11 |
| problems | 17 | 238–502 | 5/17 | 2/17 |
| experiences | 33 | 161–1,212 | 32/33 | 0/33 |
| glossary | 55 | 34–699 | 49/55 | 0/55 |
| guides | 9 | 283–770 | 1/9 | 1/9 |
| patterns | 3 | 222–304 | 3/3 | 0/3 |
| people | 31 | 363–771 | 31/31 | 3/31 |
| practices | 10 | 291–573 | 7/10 | 3/10 |
| questions | 28 | 293–683 | 28/28 | 0/28 |
| research | 9 | 235–471 | 5/9 | 1/9 |
| stories | 70 | 349–1,301 | 70/70 | 0/70 |
| texts | 10 | 437–679 | 10/10 | 5/10 |
| timeline | 18 | 101–472 | 18/18 | 0/18 |
| tools | 3 | 337–403 | 3/3 | 0/3 |
| translations | 39 | 321–929 | 39/39 | 0/39 |
| blog | 4 | 460–624 | 4/4 | 1/4 |

**Total content files:** 368 (385 Markdown files minus 17 templates).

### Status

- `published`: 324
- missing `status`: 44
- `draft`: 0 explicit
- `noindex`: 0 explicit

The 44 missing-status files are a data-consistency risk because the schema defaults `status` to `draft`. The page templates filter `status !== draft` and `status !== internal`, so the intended publication state of these files must be checked explicitly.

### Dates and evidence

- Date/updated: 324/368
- Sources: 323/368
- Evidence classification: 323/368

The 44 files without a date are largely the same missing-status set; this should be resolved before relying on freshness or indexability claims.

---

## 3. Critical finding: live/build divergence

### Evidence

```text
Local dist:
  HTML files: 399
  sitemap URLs: 398

Live:
  sitemap URLs: 378
```

**Local-only URLs: 29**, including:

```text
/data/
/experiences/notes/exp-004-emotional-surfacing/
/experiences/notes/exp-005-night-qi-movement/
/experiences/notes/exp-006-leg-numbness/
/experiences/patterns/
/glossary/baoyi/
/glossary/daoyin/
/glossary/neigong/
/stories/butterfly-dream/
/stories/cicada-catcher/
/stories/confucius-meets-laozi/
/stories/hundun/
/timeline/baopuzi-shouyi/
/timeline/cheng-men-li-xue/
/timeline/guodian-daodejing/
...
```

**Live-only URLs: 9**, including:

```text
/experiences/notes/exp-034-one-thought-one-world/
/experiences/notes/exp-035-a-leaf-can-cover-the-sky/
...
/experiences/notes/exp-041-the-heart-makes-the-face/
/sitemap/
```

### Interpretation

This is not a normal deploy delay alone: the live site has pages that do not exist in local, while local has pages not yet live. The repository and deployed artifact are **not the same version**.

**Consequences**

- Content counts in this report describe the local build, not necessarily what users or Google see.
- New content additions are not indexed.
- Older live-only pages may be missing from the repo or were removed locally without a redirect.
- The next content audit must re-run after deployment convergence.

**Priority:** P0 for deployment/index quality; not a content-writing issue.

---

## 4. Six-dimension content findings

### 4.1 Duplication — PASS

No 4-gram pair reached 0.70 within a collection. Unique-sentence share by collection:

| Collection | Mean | Min |
|---|---:|---:|
| comparisons | 0.96 | 0.92 |
| problems | 0.94 | 0.82 |
| concepts | 0.91 | 0.79 |
| timeline | 0.92 | 0.77 |
| stories | 0.93 | 0.84 |
| tools | 0.81 | 0.68 |
| questions | 0.94 | 0.83 |
| people | 0.96 | 0.90 |
| translations | 0.90 | 0.74 |
| experiences | 0.95 | 0.84 |
| patterns | 0.92 | 0.91 |
| practices | 0.93 | 0.86 |
| texts | 0.96 | 0.92 |
| blog | 0.93 | 0.89 |
| glossary | 0.91 | 0.51 |
| research | 0.95 | 0.84 |
| guides | 0.92 | 0.86 |

**Conclusion:** no evidence of mass template duplication. Glossary `yi` at 0.51 is the main manual-review candidate.

### 4.2 AI traces — PASS with P2 observation

Low mechanical-phrase counts:

- concepts: 1 hit / 1 page
- stories: 7 hits / 5 pages
- questions: 1 / 1
- people: 2 / 2
- translations: 2 / 1
- texts: 1 / 1
- blog: 1 / 1
- glossary: 1 / 1
- research: 1 / 1
- guides: 1 / 1

No empty marketing phrases (`best price`, `one-stop`, `leading manufacturer`, etc.) were found.

**Caveat:** this is a phrase scan, not a full stylistic read. The editorial voice is generally specific and source-aware.

### 4.3 Thin content — PARTIAL / P2

Rendered site scan:

```text
300–800 words: 257 pages
800–1,500 words: 88 pages
under 300 words: 45 pages
1,500+ words: 8 pages
```

The 45 under-300 pages include:

- glossary entries by design (dictionary definitions)
- timeline entries (dated facts)
- short problem/question pages
- some legal/utility pages

**Conclusion:** dictionary/timeline shortness is a format choice, not automatically a thin-content failure. The concern is only when a page promises an answer but has no substantive explanation.

### 4.4 Value / original information — PASS

- 323/368 pages carry source fields or evidence classifications.
- Concepts and texts separate primary-source quotations from scholarly interpretation.
- Stories distinguish narrative/legend from historical claims.
- Experiences use anonymized practitioner reports and explicit evidence boundaries.
- Tools and guides provide operational frameworks rather than generic marketing.

### 4.5 Subjective / editorial viewpoint — PARTIAL / P1

Explicit `In our view` / editorial section presence is uneven:

- concepts: 13/18
- texts: 5/10
- people: 3/31
- practices: 3/10
- comparisons: 1/11
- guides: 1/9
- stories: 0/70
- translations: 0/39
- questions: 0/28

This does not mean the pages have no judgement; many are descriptive/story formats. It does mean the site lacks a consistent visible editorial-position layer across content types. For a knowledge base, this is a **P1 consistency issue**, not necessarily a violation.

### 4.6 Non-originality — PARTIAL

A source-site corpus is not stored in this repository, so external originality cannot be measured with a 4-gram comparison.

What is verified:

- 323/368 pages have a `sources` field or an in-body Sources section.
- 45 pages have no explicit source field.
- The strongest source discipline is in concepts, people, stories, timeline and translations.
- Comparisons/problems/guides have uneven source coverage.

**Verdict:** source architecture is strong; external originality remains **PARTIAL/unverified**.

---

## 5. Metadata and technical findings

### Rendered metadata (site scan, 398 pages)

| Metric | Result |
|---|---:|
| Pages with missing title/description/canonical | 0 |
| H1 ≠ 1 | 0 |
| Duplicate titles | 0 |
| Rendered titles >60 chars | **189** |
| Rendered descriptions >160 chars | **321** |
| Broken internal links | 0 |
| Orphan pages | 0 |
| JSON-LD parse errors | 0 |
| Sitemap/noindex conflict | 0 |

### Schema

- WebPage: 398
- BreadcrumbList: 397
- DefinedTerm: 73
- WebSite: 1
- Person: 1

No schema parse errors. The Person node is limited, not sprayed across every page.

### Technical normal

- Canonical self-references pass locally.
- No noindex pages in local sitemap.
- H1 count is exactly one on all pages.
- No broken internal links or orphans in local build.
- Live homepage, About and Glossary return 200.

### Issues

1. **P1 — live/build divergence** described above.
2. **P1 — rendered title length**: 189 pages exceed 60 characters.
3. **P1 — rendered description length**: 321 pages exceed 160 characters.
4. **P1 — 44 missing `status` fields**: schema defaults to draft; publication intent is ambiguous.
5. **P2 — 45 pages under 300 words**: mostly glossary/timeline by design; audit content promises instead of forcing length.
6. **P2 — 45 pages lack sources/evidence fields**: concentrated in comparisons, problems and guides.

---

## 6. Content-type observations

### Concepts

Strong: primary-source quotes, Chinese terms, pinyin, evidence classes, internal links. 13/18 have explicit editorial sections. Main gap: 3/18 lack sources and 3 lack status.

### Comparisons

Short (285–655 words), source coverage only 3/11, one explicit editorial section. High search intent but weak evidence layer. This is the clearest content-quality gap after metadata.

### Problems / Questions

Useful question-led pages, but short and uneven sourcing (5/17 for problems; 28/28 for questions have source fields). Avoid adding generic answers; add primary/traditional evidence or a clear “unresolved” marker.

### Stories

70 stories, strong source coverage 70/70, high unique-sentence share, but no explicit editorial/viewpoint section. The narrative format may not need one; distinguish story from historical claim is more important.

### Experiences

33 notes with anonymized practitioner evidence; 32/33 sources, 0 explicit editorial sections. This is appropriate if the experience system relies on framing sections rather than “In our view.”

### Glossary

55 entries, many short by design; 49/55 source fields. `yi` has low unique-sentence share (0.51) and should be manually checked for overlap. Do not bulk-expand dictionary entries just to meet a word count.

### Guides

9 pages, only 1/9 source fields; this is the weakest source layer among high-intent pages. Also only 1/9 has an explicit editorial section.

### People / Texts / Translations

Strong source and uniqueness; people 3/31 editorial sections may be intentional for biographical pages. Texts 5/10 have editorial sections.

---

## 7. Priority fix list

### P0

1. **Reconcile the live site with the repository.**
   - Deploy the local build or identify why live has 9 pages not in local.
   - Compare local-only and live-only URL sets.
   - Add redirects or restore pages as appropriate; do not silently drop live URLs.
   - Re-run the sitemap comparison after deployment.
   - Verification: local sitemap = live sitemap, 0 local-only / 0 live-only.

### P1

2. **Resolve 44 missing `status` fields.**
   - Set `status: published` only where editorial approval exists.
   - Otherwise set `draft`/`noindex` and exclude from sitemap.
   - Verify build/sitemap/noindex counts.

3. **Add source/evidence fields to comparisons, problems and guides.**
   - Priority: comparisons (3/11 sourced), problems (5/17), guides (1/9).
   - Use primary text citations or explicit “UNRESOLVED / evidence insufficient” markers.
   - Do not add generic sources.

4. **Shorten rendered titles and descriptions.**
   - 189 titles >60; 321 descriptions >160.
   - Fix at the template/metadata layer first, not by rewriting bodies.
   - Do not truncate meaningful Chinese titles without checking readability.

### P2

5. **Manual review of glossary `yi`** for duplicate/reused sentences.
6. **Add explicit editorial sections only where the format supports them**; do not force stories/timeline/glossary into an “In our view” block.
7. **Review 45 under-300 pages**; keep dictionary/timeline short, add substance only where a page promises an answer.
8. **Audit `data.daoismhub.com` separately** for entity-count consistency with the main site.

---

## 8. Verification and limitations

### Verified

- 368 actual content files excluding 17 templates.
- Collection counts and word ranges measured directly.
- 4-gram uniqueness and sentence-share measured.
- Source/evidence/date/status fields parsed.
- Local build: 399 HTML files / 398 sitemap URLs.
- Live sitemap: 378 URLs via curl.
- Live homepage/About/Glossary: 200.
- Rendered metadata scan: 189 long titles, 321 long descriptions, 0 broken/orphan links, 0 JSON-LD parse errors.

### Not verified

- GSC coverage, manual actions, rankings or traffic.
- A full human editorial read of all 368 pages.
- External originality against a source corpus.
- Deep audit of `data.daoismhub.com` content.
- Whether the 44 missing-status files are intended drafts or publication errors.

---

## 9. Verdict

DaoismHub is **not a content-spam problem**. Its strongest assets are unique explanatory prose, explicit evidence classes and a large, coherent knowledge structure.

Its current risks are:

1. **A live site that does not match the repository.**
2. **Inconsistent status metadata.**
3. **Weak source coverage in comparisons, problems and guides.**
4. **Large-scale metadata length defects at render time.**

The correct next move is not to add more content. It is to:

**converge the deployment → fix status → add evidence to the weakest collections → fix metadata lengths.**
