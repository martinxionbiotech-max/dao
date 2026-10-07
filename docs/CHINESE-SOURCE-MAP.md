# 中文体验/讨论素材源地图（Chinese Practitioner Material Source Map）

Updated: 2026-10-07. Status verified by live testing this session.
Purpose: sources for the experience system (experiences / patterns / questions / stories).
Rule: all material is anonymized and paraphrased before publication; no usernames, no direct quotes without permission.

## Tier 1 — 已实测可抓（本次已验证）

| Site | Access | Content type | Notes |
|---|---|---|---|
| 百度健康 health.baidu.com | ✅ web_fetch 200 | 打坐/冥想身体反应科普（发热、腿麻等） | 医疗科普口径，适合作 alternative interpretation 素材 |
| 网易订阅 163.com/dy | ✅ web_fetch 200 | 修行问答专栏（太师修行问答系列） | 金矿：真实 Q&A，发热/气感/丹田充气/腿痛全有 |
| 壹心理 xinli001.com | ✅ Firecrawl 200 | 冥想 Q&A（睡着、杂念等） | 匿名用户提问，天然符合 anonymized 要求 |
| 维基文库 zh.wikisource.org | ✅ | 古籍原文（庄子、史记、宋史） | 原文核验用 |
| 百度百科/维基百科 | ✅ | 词条、成语出处、原文引用 | 佐证用 |

## Tier 2 — 搜索索引可用（直接抓被反爬，但搜索引擎快照可见内容）

| Site | Direct | Via search (tavily) | Content type |
|---|---|---|---|
| 百度贴吧 tieba.baidu.com（冥想吧/打坐吧/静坐吧） | ❌ 403 安全验证 | ✅ 快照含帖文 | 第一手练习者经验（身动现象、气感、杂念、心结翻出） |
| 知乎 zhihu.com / zhuanlan | ❌ 403 | ✅ 快照含长文全文 | 打坐方法长文、佛道体验对比（69 答帖）、腿痛应对 |
| 豆瓣 douban.com | ⚠️ 登录墙 | ✅ 部分 | 小组讨论 |
| 简书 jianshu.com | ⚠️ 限流 | ✅ 部分 | 冥想日记 |

## Tier 3 — 需登录/cookie（未测，备选）

| Site | Access | Notes |
|---|---|---|
| 小红书 xiaohongshu | 需登录 | opencli rednote adapter 有 [cookie] 命令 |
| B站评论 bilibili | 需 cookie | opencli bilibili search [cookie] |
| 微博超话 weibo | 需登录 | opencli weibo user-posts [cookie] |
| 贴吧 opencli tieba | 需 Browser Bridge 扩展 | `opencli tieba posts 冥想` 需 Chrome 扩展连接，当前环境未装 |

## 已定管道

1. **贴吧**：tavily 检索 → 索引快照取帖文 → 匿名转写。直连被百度安全验证拦截（不硬破验证码）。
2. **知乎**：同上，tavily 快照通常含长文主体。
3. **直抓**：163/百度健康/壹心理 用 web_fetch 或 Firecrawl。
4. **原文核验**：维基文库 + 百度百科交叉。
5. **firecrawl 自托管** (43.173.100.60:3002) 串行使用（1.9GB 内存，并行 5 请求会 408）。

## 已产出（2026-10-07）

- 6 experiences (EXP-001..006)：睡着、发热旋转感、腿痛+丹田充气、情绪浮现、夜间气感、腿麻针刺
- 3 patterns：昏沉vs入静、发热气感、腿麻腿痛
- 4 stories：庖丁解牛、孔子见老子、庄周梦蝶、程门立雪
- 1 question：冥想睡着
