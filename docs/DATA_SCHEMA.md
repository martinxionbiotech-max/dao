# Data Schema (v1)

## data/concepts.json / data/practices.json
```json
{ "items": [{ "id": "zuowang", "name": "Zuowang", "chinese": "坐忘",
  "pinyin": "zuòwàng", "tradition": "Daoist", "page": "/concepts/zuowang/",
  "evidence": "PRIMARY SOURCE", "related": ["zhuangzi"] }] }
```

## data/experiences.json
```json
{ "items": [{ "experience_id": "EXP-001", "title": "...", "practice": "zuowang",
  "tradition": "Daoist", "anonymity": "anonymous", "evidence_type": "PRACTITIONER EXPERIENCE",
  "publication_status": "published", "page": "/experiences/notes/exp-001/" }] }
```

## data/patterns.json
```json
{ "items": [{ "id": "subtle-breathing", "phenomenon": "breathing becomes very subtle",
  "report_count": 12, "practices": ["zuowang", "jingzuo"],
  "evidence_basis": "practitioner-reports-only", "page": "/experiences/patterns/subtle-breathing/" }] }
```

## data/relationships.json
```json
{ "items": [{ "from": "zuowang", "to": "zhuangzi", "relation": "described_in" }] }
```

## data/sources.json
```json
{ "items": [{ "id": "zhuangzi", "title": "Zhuangzi", "type": "primary_text",
  "language": "zh", "url": null, "pages_used_in": ["/concepts/zuowang/"] }] }
```
