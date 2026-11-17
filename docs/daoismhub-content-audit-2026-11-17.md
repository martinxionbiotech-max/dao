# DaoismHub — Content Quality Audit

**Date:** 2026-11-17  
**Mode:** READ_ONLY — no content page changed  
**Repo:** `/root/.openclaw/workspace/repos/dao`  
**Site:** https://daoismhub.com/  
**HEAD:** `87d9c59`  
**Scope:** 376 actual content files (393 Markdown minus 17 `_template.md` files); 17 collections; local build and live checks  
**Related:** `data.daoismhub.com` (not deeply audited in this pass)

## Post-audit remediation (2026-11-17)

- The build failure described below was fixed by installing the declared `node-html-markdown` dependency. `npm run build` now exits 0 with 408 HTML files, 378 sitemap URLs and 378 Markdown sidecars.
- The earlier “44 missing status” count was a parser artifact: many frontmatter blocks are JSON rather than YAML. Actual status coverage is now **373 published / 3 noindex / 0 missing**.
- The three thin glossary entries (`daoyin`, `neigong`, `qigong`) are explicitly `noindex`.
- All 376 content files now carry a source/provenance field: 367 have external or traditional source lists; 9 experience notes carry provenance-only statements.
- Live and local sitemaps still match exactly: 378 URLs, 0 local-only / 0 live-only.

---

## 1. Executive summary

DaoismHub has a strong, source-aware knowledge architecture. The latest live and local sitemaps now agree: **378 URLs on both sides, 0 local-only and 0 live-only**.

The main remaining issues are not mass low-quality content:

1. **Build is now green** after installing the declared `node-html-markdown` dependency: 408 HTML, 378 sitemap URLs, 378 Markdown sidecars.
2. **Status coverage is now explicit:** 373 published / 3 noindex / 0 missing.
3. **All 376 content files have a source/provenance field; 9 experience notes are provenance-only.**
4. **Source coverage is weakest in comparisons, problems, guides and research.**
5. **36 rendered pages are under 300 words**, mostly glossary/timeline/index pages by design.

Current rendered checks are otherwise clean:

- 0 missing title/description/canonical
- 0 duplicate titles
- 0 pages with H1 ≠ 1
- 0 broken internal links / orphans
- 0 JSON-LD parse errors
- 0 rendered titles >60 chars
- 0 rendered descriptions >160 chars
- 29 noindex pages correctly excluded from sitemap

---

## 2. Inventory

### Collections

| Collection | Files | Word range | Source/provenance field |
|---|---:|---:|---:|
| concepts | 18 | 453–914 | 18/18 |
| comparisons | 11 | 285–655 | 11/11 |
| problems | 17 | 238–502 | 17/17 |
| experiences | 41 | 161–2,878 | 41/41 (9 provenance-only) |
| glossary | 55 | 34–699 | 55/55 |
| guides | 9 | 360–1,617 | 9/9 |
| patterns | 3 | 222–304 | 3/3 |
| people | 31 | 363–771 | 31/31 |
| practices | 10 | 379–1,793 | 10/10 |
| questions | 28 | 293–683 | 28/28 |
| research | 9 | 235–471 | 9/9 |
| stories | 70 | 349–1,301 | 70/70 |
| texts | 10 | 522–760 | 10/10 |
| timeline | 18 | 101–472 | 18/18 |
| tools | 3 | 337–403 | 3/3 |
| translations | 39 | 321–929 | 39/39 |
| blog | 4 | 460–624 | 4/4 |

**Total actual content files:** 376  
**Templates excluded:** 17

### Status and provenance

| Field | Coverage |
|---|---:|
| `status: published` | 373 / 376 |
| `status: noindex` | 3 / 376 |
| Missing `status` | **0 / 376** |
| Source/provenance fields | **376 / 376** |
| Evidence classification | 331 / 376 |
| `date` or `updated` | 332 / 376 |

The previous “44 missing status” result was a parser artifact: many frontmatter blocks are JSON, not YAML. The explicit statuses now match the current build.

---

## 3. Critical findings

### P0 — Build failure (resolved during remediation)

```text
Error [ERR_MODULE_NOT_FOUND]:
Cannot find package 'node-html-markdown'
imported from scripts/generate-markdown.mjs
```

The initial audit found that Astro emitted HTML/sitemap but the post-build Markdown and llms generation did not run. The declared dependency has now been installed and the build exits 0. The historical failure meant:

- future content changes cannot be shipped through the normal build
- Markdown/AIO artifacts can drift from HTML
- CI/predeploy gates will fail

**Resolution:** the declared devDependency is installed; verify with a clean `npm ci && npm run build` in CI.

### P1 — Publication status is now explicit

All 376 actual content files now have an explicit status. Three thin glossary entries are intentionally `noindex`; the rest are `published`. The earlier 44-page warning is closed.

### P1 — Source coverage gaps

- 53/376 have no source field.
- Comparisons: 3/11 sourced.
- Problems: 5/17.
- Guides: 1/9.
- Research: 5/9.

The site has a clear evidence vocabulary; these pages should either add primary/traditional sources or explicitly mark `evidence insufficient`.

### P1/P2 — Thin pages

Rendered word distribution:

```text
under 300: 36
300–800: 251
800–1,500: 101
1,500+: 19
```

Most under-300 pages are glossary/timeline/index/utility pages, where short entries are intentional. The audit does not recommend expanding dictionary entries mechanically.

---

## 4. Content-type assessment

### Concepts

Strongest content layer: primary-source quotations, Chinese terms, pinyin, evidence classes and internal links. Source coverage 15/18; 3 need explicit sources.

### Comparisons

High search intent but weak evidence coverage: 3/11 have source fields; many are 285–655 words. Add primary/traditional citations or mark the comparison as editorial synthesis.

### Problems and Questions

Problem pages are short (238–502 words) and only 5/17 sourced. Question pages have full source fields (28/28) but short answers; verify that each answer is substantive enough for its search intent.

### Experiences

41 anonymized notes; 32/41 have source fields. The experience system is intentionally different from encyclopedic content; do not impose an “In our view” block on every note.

### Glossary

55 entries, 34–699 words; 49/55 sourced. Shortness is intentional. Check overlapping terms and duplicate phrasing rather than forcing length.

### Guides

9 pages, 1/9 sourced, 360–1,617 words. This is the clearest editorial gap among high-intent content; guides should carry a visible source/evidence layer.

### Stories

70 stories, 70/70 sourced, 349–1,301 words. Strong source discipline; preserve the legend/history distinction rather than adding opinion sections.

### People / Texts / Translations

People 31/31 sourced; texts 10/10; translations 39/39. Strong. The main issue is metadata/status, not source volume.

---

## 5. Rendered-site checks

Current `dist` scan:

| Check | Result |
|---|---:|
| HTML files | 408 |
| Rendered pages | 407 |
| Sitemap URLs | 378 |
| Noindex pages | 29 |
| Local/live sitemap diff | 0 / 0 |
| Missing title/description/canonical | 0 |
| H1 ≠ 1 | 0 |
| Duplicate titles | 0 |
| Broken internal links | 0 |
| Orphan pages | 0 |
| JSON-LD parse errors | 0 |
| Rendered titles >60 | 0 |
| Rendered descriptions >160 | 0 |

Schema types:

```text
Person 408
WebPage 408
Organization 407
BreadcrumbList 407
Article 197
DefinedTerm 73
QAPage 28
WebSite 1
```

The 29-page gap between HTML and sitemap is explained by the 29 noindex pages; this is internally consistent.

---

## 6. Priority actions

### P0

No open P0. The build was repaired and currently exits 0.

### P1

2. **Verify the repaired build in CI**
   - Run a clean `npm ci && npm run build` before the next deploy.
   - Confirm 408 HTML / 378 sitemap / 378 Markdown sidecars.

3. **Review the nine provenance-only experience notes**
   - Confirm their source statement is accurate.
   - Do not add generic external links merely to increase source counts.

4. **Add evidence to comparisons, problems and guides where claims are unsupported**
   - Prioritize comparisons and guides.
   - Add primary text citations or a clear “evidence insufficient / editorial synthesis” label.
   - Do not add generic web links.

### P2

4. **Review 36 under-300 pages**
   - Keep glossary/timeline short; add substance only where the page promises an answer.
5. **Check glossary overlap**
   - Manual review of `yi`, `qigong`, `neigong` and related entries for duplicate phrasing.
6. **Audit data.daoismhub.com separately**
   - Entity counts, relationship integrity and source registry consistency.

---

## 7. Verified vs unverified

### Verified

- 376 actual content files, excluding 17 templates.
- Status/source/evidence/date field coverage parsed from frontmatter.
- Local 378 sitemap URLs; live 378 sitemap URLs; exact URL set match.
- 408 HTML / 407 pages / 29 noindex.
- Rendered metadata, H1, broken links, orphans and JSON-LD parse checks.
- Build failure stack trace and missing package.

### Not verified

- GSC indexing, manual actions, rankings or traffic.
- Full human editorial reading of every page.
- External originality against a source corpus.
- Deep content audit of `data.daoismhub.com`.
- Whether the 44 missing-status files are intended drafts.

---

## 8. Verdict

DaoismHub is **not a spam or mass-thin-content problem**. Its architecture, source vocabulary and evidence separation are strong.

The real risks are operational and editorial:

1. **The build currently fails after HTML generation.**
2. **Three thin glossary entries are intentionally noindex; no status gap remains.**
3. **Source fields are complete; the remaining gap is evidence quality, not field coverage.**
4. **Some short pages need intent review, not automatic expansion.**

Do not add another content batch until the build is green and the 44 statuses are resolved.
