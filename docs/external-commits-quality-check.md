# 外部提交质检报告 — external-commits-quality-check

日期：2026-10-23 · 质检师：内容质检 + 合规审计
范围：`dao`（daoismhub.com）4 笔 · `guotan`（chinacharcoalhub.com）1 笔

---

## 判定总表

| # | 仓库 | 提交 | 主题 | 判定 |
|---|------|------|------|------|
| 1 | dao | `b8f9a78` | 移除公开文案字数规格 | ✅ PASS |
| 2 | dao | `baf1801` | 身份/联系方式一致性 + 法律页加厚 | ✅ PASS（含 1 处口径修复） |
| 3 | dao | `5805b37` | retrigger Pages deploy | ✅ PASS（无内容变更） |
| 4 | dao | `c2f211d` | EXP-033 祛魅第一人称反思 | ✅ PASS（含 1 处口径修复） |
| 5 | guotan | `0487ad2` | Product schema + AggregateOffer US$80–200 | ⚠️ PASS（1 处轻微提示） |

**发现 ISSUE：1 处（已修复）· 修复文件：4 个 · 大改清单：无**

---

## dao — 逐笔证据

### 1. `b8f9a78` 移除字数规格 ✅

验证方式：全站 grep 字数措辞。

```
grep -rniE "100–400|400–1500|word count|word-count|字数|100.{0,3}400" src/
→ 0 命中（公开文案与 content/ 均无残留）
```

- 4 个文件（`content.config.ts` 注释、`experiences/index.astro`、`notes/index.astro`、`reports/index.astro`）均已替换为无字数描述。
- 结论：公开文案中已无字数规格残留，无回归。

### 2. `baf1801` 法律页交叉一致性 ✅（含 1 处修复）

**身份/联系方式核验（全站 grep）：**

| 检查项 | 结果 |
|--------|------|
| 邮箱残留 `landengltd@gmail.com` | ❌ 0 命中（已统一） |
| 身份残留 `Martin.W` / `Martin Wong` | ❌ 0 命中（已统一） |
| 个人电话残留 `+86 13323237275` / `tel:` / `+86` | ❌ 0 命中（已移除） |
| 现行邮箱 `martinwang2024@gmail.com` | ✅ 统一（privacy/disclaimer/compliance/contact/accessibility/about/footer 全一致） |
| 现行身份 `Ding.W` | ✅ 统一（about Person schema + footer + contact + privacy "The editor is Ding.W"） |

**与 10-19 本会话 About/Contact（Ding.W + martinwang2024@gmail.com）一致性：**
✅ 完全一致，无身份冲突。

**四法律页 + about 口径统一（主体/日期/版本）：**

| 页面 | 版本 | 日期 | 适用域 |
|------|------|------|--------|
| privacy | 2.0 | Oct 21, 2026 | daoismhub.com + data.daoismhub.com |
| disclaimer | 2.0 | Oct 21, 2026 | 同上 |
| compliance (terms) | 2.0 | Oct 21, 2026 | 同上 |
| contact | 2.0 | Oct 21, 2026 | 同上 |
| about | 2.0 | Oct 21, 2026 | 同上 |
| accessibility（新增） | 1.0 | Oct 21, 2026 | 同上 |

✅ 日期统一（Oct 21, 2026），主体统一（DaoismHub，编辑 Ding.W），口径统一。

**加厚内容虚构核查：**
- 无编造法律实体：privacy 明确 controller 为 "the operator of DaoismHub"，未虚构注册公司名。
- 无编造 DPO：全文无 "Data Protection Officer" / 指名的 DPO。
- 无编造资质/认证：accessibility 明确 "We do not claim certification or third-party audit"；about 明确 "not a scholarly edition / not a directory / no authority to teach"。
- Cloudflare 作为 processor 的声明属实（静态站 CDN 托管，与仓库实际架构一致）。
- 结论：无虚构实体/资质。

**⚠️ 发现的 1 处口径断裂（已修复）：**
法律页（disclaimer §9 / compliance §9）与经验索引（experiences/index、notes/index）统一声称经验内容为 "anonymized ... gathered from public community discussions"。但 `c2f211d` 新增的 EXP-033 是编辑本人第一人称反思（`anonymity: with-permission`，非匿名、非社区报告）。原口径未覆盖这一类别。

修复（4 文件，各一句）：
- `disclaimer/index.astro` §9、`compliance/index.astro` §9：补 "together with a small number of first-person reflections by the site's editor published under the editor's own byline"。
- `experiences/index.astro` lede：改为 "anonymized community accounts plus the editor's own reflections"。
- `experiences/notes/index.astro` lede/description：改为 "mostly anonymized, with the editor's own reflections labelled as such"。

### 3. `5805b37` retrigger deploy ✅

仅触发 Pages 部署，无源码变更（`git show --stat` 空）。无内容风险。

### 4. `c2f211d` EXP-033 ✅（含口径修复，见上）

**实质增量与诚实口径：**
- 前置字段 `context` 明确："First-person reflection written by the editor of this site (Ding.W) ... not a report gathered from a public community discussion, not a clinical account, not a research finding"。
- `anonymity: with-permission`（schema 枚举合法值）；`sourceType: note`；`confidence: medium`。
- 正文 "A note on register" 段：明确无匿名社区来源、无引用事件、无疗效/安全/因果主张，仅为单一实践者自述。
- 结尾 "Confidence note"：区分 "medium confidence as an account of a practice habit, low confidence as any kind of general claim"。

**无营销腔 / 无虚构体验细节：**
- 无疗效宣称、无 "蜕变/成功" 营销叙事；两处误读（祛魅≠轻蔑、≠评判他人）被显式点名，结尾 "exactly like you" 把观察者置于同等位置。
- 佛学词汇（六道轮回/有情众生/七情六欲/人生八苦/平常心）在 "framework it draws on" 段注释而不背书。

**日期戳 / 作者 / 来源标注：**
- frontmatter `date: 2026-10-21`、`updated: 2026-10-21`（与提交时间一致）；作者 = 编辑 Ding.W（context + about Person schema）；来源类型 = 编辑自述（with-permission）。✅

**Schema 无回归：**
- about 页 Person schema（Ding.W）仍在，`name/email/url/knowsAbout` 完整。✅

**Build 通过：**
- `npm run build` → 397 pages，exit 0。✅

---

## guotan — `0487ad2` AggregateOffer ⚠️

### SpamCheck 纪律核验

**1. 价格区间与页面可见价格一致性 ✅**

schema 输出：`lowPrice: 80, highPrice: 200, priceCurrency: USD`。
页面可见文案（4 个产品页均渲染）：`Indicative price: US$80 – US$200 — range varies with grade, packaging and order volume; the exact figure is confirmed on quotation.`

- grep 确认 4 页（bamboo/bbq/coconut-shell/hookah）均含 `price-note`，dist 渲染后 `Indicative price` 各出现 1 次。
- 结论：schema 价格与可见价格一致，满足 "不可见内容不入 schema" 纪律。✅

**2. priceCurrency / offerCount 真实性 ✅**

- `priceCurrency: USD`：B2B 出口报价美元计价，符合站点定位。✅
- `offerCount`：**未输出**（非虚构，合法省略；Google AggregateOffer 中 offerCount 为推荐非必需）。✅

**3. 有无虚构 availability / seller / rating / review ✅**

- `availability: InStock`（默认值）——见下方提示。
- `seller`：未输出（`offers.sellerId` 未传入；四页均未传）。✅
- `rating` / `review` / `aggregateRating`：grep 全库 `ratingValue|reviewCount|aggregateRating|review` → 无输出；seo.ts 头部注释明确 "never fabricate ratings, reviews, authors, or data"。✅

**4. schema 与可见内容一致性 ✅**

- 可见属性（Raw material / Formats / Burning time / Ignition）与 `additionalProperty` 一一对应，均为 supplier-declared 标注，无凭空数据。
- JSON-LD 校验：4 页所有 `<script type="application/ld+json">` 块均通过 `JSON.parse`（无语法错误）。✅

**⚠️ 轻微提示（建议，非违规）：**
`availability: InStock` 用于报价制 B2B 站略显超前——页面自述 "exact figure is confirmed on quotation"、产品标注 "supplier-declared — not independently verified"，站点无现货库存概念。InStock 属可辩护但非最精确。**建议**：可考虑省略 availability 或改用更贴合报价制的取值，并将 `seller` 链接到已建 Organization 实体（`organizationJsonLd` 已含 Yancheng Xuanbao 实体，本可复用）。此为可选增强，非强制修复，未改动。

**Build 通过：** `npm run build` → 21 pages，exit 0。✅

---

## 汇总

- **5 笔提交判定：** 4 PASS · 1 PASS（轻微提示）
- **发现 ISSUE：** 1（dao 经验内容 vs 法律页口径断裂）
- **当场修复：** 1 处 · 4 文件（disclaimer、compliance、experiences/index、notes/index，各一句小改）
- **大改清单：** 无
- **构建：** dao 397 页 ✅ · guotan 21 页 ✅
- **报告路径：** `docs/external-commits-quality-check.md`
