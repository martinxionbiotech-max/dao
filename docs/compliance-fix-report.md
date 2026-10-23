# 合规全检+修复批报告 — daoismhub.com

日期：2026-10-23 · 执行：合规法律内容编辑 + 技术 SEO
范围：`dao`（daoismhub.com）七页法律/合规基线 · 目标 1500–2200 词条款级 · 零虚构

---

## 一、检查矩阵（7 页词数 前→后）

| 页面 | 前（词） | 后（词） | 判定 |
|------|---------|---------|------|
| about | 715 | 1410 | 达标（增厚 collections/how-to-use/evidence-classes/how-you-can-help） |
| contact | 475 | 1281 | 达标（增厚 before-you-write/corrections/permissions/security/响应时间表） |
| privacy | 1671 | 1714 | 达标（微调：Cookie Policy 交叉引用 + 相关页互链） |
| disclaimer | 1179 | 1399 | 达标（增厚 adverse-experience 研究 + 超常主张口径） |
| compliance | 1928 | 1968 | 达标（重构为 Compliance 声明 + 交叉引用 ToS） |
| **terms-of-service** | — | **1485** | **新建** ✅ |
| **cookies** | — | **1445** | **新建** ✅ |

> 注：`accessibility` 页不在七页范围，仅作相关页互链微调（未计入矩阵）。

## 二、新建页清单

1. **/terms-of-service/** — Terms of Service（17 条款，~1485 词）：准入与使用范围 · 主体（编辑 Ding.W，非商业实体）· 内容性质 · 知识产权 · 许可（引用/禁止）· 机器可读数据（attribution 口径，与现状一致）· 用户行为 · 第三方链接 · 保证免责 · 责任限制 · 赔偿 · 中止 · 条款变更 · 适用法律与争议解决（中国法律 + 经营者住所地法院 + 消费者强制规则保留）· 可分割性与一般条款 · 联系。
2. **/cookies/** — Cookie Policy（14 节 + FAQ，~1445 词）：如实零 Cookie 立场 · 四类 Cookie 分类表（全「未使用」）· 托管安全措施（Cloudflare challenge）· Data Registry 浏览器内搜索 · 管理与 consent（无需 banner）· DNT/GPC · FAQ · 联系。

## 三、零虚构核对

| 检查项 | 结果 |
|--------|------|
| 法律主体 | ✅ 未虚构注册公司名；controller/operator = 「the operator of DaoismHub」（编辑 Ding.W），与现状一致 |
| 邮箱/作者 | ✅ martinwang2024@gmail.com · Ding.W，七页 + footer 全一致 |
| 资质/认证 | ✅ 未虚构 DPO、认证、资质；无 bug-bounty（contact/cookies 显式「无赏金计划」） |
| 紧急电话 | ✅ 未虚构热线号码，仅「contact local emergency services」 |
| 适用法律 | ✅ 中国法律（沿现状，未虚构） |
| 追踪实况 | ✅ grep 证实零 analytics/tracking/cookies（仅 JSON-LD schema + 站内搜索脚本）；cookies/privacy 如实声明 |
| 数据集授权 | ✅ 与现状 compliance §3 口径一致（attribution 必需，schema+field 引用，商业复用需许可） |
| 10-23 QC 口径 | ✅ 「编辑自述类别」未回归：disclaimer §9 / compliance §9 保留 "first-person reflections by the site's editor" |
| Person schema | ✅ Ding.W 完整（name/email/url/knowsAbout），未回归 |

## 四、一致性

- 版本/日期：5 现存页 → Version 2.1 · Oct 23, 2026；2 新建页 → Version 1.0 · Oct 23, 2026。
- 七页互链统一；页脚 nav 更新为 About/Contact/Terms of Service/Privacy/Cookies/Disclaimer/Compliance/Accessibility。
- 旧「Compliance & Terms of Use」→ 重构为「Compliance」（ToS 独立），残留交叉引用已清理（contact/accessibility）。

## 五、构建与提交

- **Build：** `npm run build` → **399 页**（原 397，+2），exit 0 ✅
- **渲染验证：** dist/terms-of-service、dist/cookies 生成；footer nav / Person schema / BreadcrumbList 均正确渲染；7 页全部内部链接 resolve（20 个目标全 OK）。
- **提交（compliance-fix-*，9 笔）：**
  1. `compliance-fix-terms-of-service`
  2. `compliance-fix-cookies`
  3. `compliance-fix-about`
  4. `compliance-fix-contact`
  5. `compliance-fix-disclaimer`
  6. `compliance-fix-privacy`
  7. `compliance-fix-compliance`
  8. `compliance-fix-nav`（footer + breadcrumb + 残留引用）
  9. `compliance-fix-nav`（hyphenated breadcrumb key 引号修复）
