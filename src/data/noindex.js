// First cleanup batch — 2026-11-12.
// Pages below are thin or low-value templates (mostly <600 words) and are
// temporarily set to noindex,follow while they are rewritten or consolidated.
// They are also excluded from the sitemap so the two signals stay consistent.
// Review after 4–6 weeks; remove entries when a page has been rewritten, or
// delete/410 pages that are confirmed to add no unique value.
export const NOINDEX_PATHS = [
  // thin hub pages
  '/data/',
  '/experiences/reports/',
  '/experiences/patterns/',

  // thin glossary entries
  '/glossary/qigong/',
  '/glossary/neigong/',
  '/glossary/daoyin/',
  '/glossary/yi/',
  '/glossary/ming/',
  '/glossary/xing/',
  '/glossary/baoyi/',
  '/glossary/tuoyue/',
  '/glossary/xi/',
  '/glossary/xuan/',
  '/glossary/de/',
  '/glossary/xin/',

  // thin timeline entries
  '/timeline/baopuzi-shouyi/',
  '/timeline/taiping-jing-shouyi/',
  '/timeline/guodian-daodejing/',
  '/timeline/shiji-biographies/',
  '/timeline/qingjing-neiguan-jing/',
  '/timeline/zuowang-lun-composition/',
  '/timeline/cheng-men-li-xue/',
  '/timeline/zhuzi-yulei-jingzuo/',

  // thin experience notes / patterns
  '/experiences/notes/exp-005-night-qi-movement/',
  '/experiences/notes/exp-007-digestive-release/',
  '/experiences/notes/exp-004-emotional-surfacing/',
  '/experiences/notes/exp-006-leg-numbness/',
  '/experiences/patterns/drowsiness-vs-stillness/',

  // thin story pages
  '/stories/standing-in-snow/',
  '/stories/wooden-rooster/',
  '/stories/butterfly-dream/',
  '/stories/hundun/',
  '/stories/confucius-meets-laozi/',
  '/stories/cicada-catcher/',
  '/stories/painter-unrobed/',
];
