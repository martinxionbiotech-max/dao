import { defineCollection, z } from 'astro:content';

// Shared field groups ---------------------------------------------------------

// Evidence classification (MASTER PROMPT §3). Never mix categories.
const evidence = z.enum([
  'PRIMARY SOURCE',
  'HISTORICAL EVIDENCE',
  'SCHOLARLY INTERPRETATION',
  'TRADITIONAL / LINEAGE INTERPRETATION',
  'MODERN RESEARCH',
  'PRACTITIONER EXPERIENCE',
  'CONTEMPORARY COMMUNITY OBSERVATION',
  'EDITORIAL SYNTHESIS',
  'UNCERTAIN',
]);

const status = z.enum(['draft', 'published', 'noindex', 'internal']).default('draft');

const base = {
  title: z.string(),
  description: z.string().optional(),
  status,
  date: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
  evidence: z.array(evidence).optional(),
  relatedConcepts: z.array(z.string()).optional(),
  relatedPractices: z.array(z.string()).optional(),
  relatedTexts: z.array(z.string()).optional(),
  relatedPeople: z.array(z.string()).optional(),
  relatedQuestions: z.array(z.string()).optional(),
  relatedResearch: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
};

// Collections -----------------------------------------------------------------

const concepts = defineCollection({
  schema: z.object({
    ...base,
    chinese: z.string().optional(),
    pinyin: z.string().optional(),
    literalMeaning: z.string().optional(),
    tradition: z.string().optional(),
  }),
});

const practices = defineCollection({
  schema: z.object({
    ...base,
    chinese: z.string().optional(),
    pinyin: z.string().optional(),
    tradition: z.string().optional(),
    difficulty: z.string().optional(),
    originPeriod: z.string().optional(),
  }),
});

const problems = defineCollection({
  schema: z.object({
    ...base,
    // The search-intent question this problem page answers, e.g.
    // "Why does breathing become very slow during meditation?"
    question: z.string(),
    shortAnswer: z.string().optional(),
  }),
});

const comparisons = defineCollection({
  schema: z.object({
    ...base,
    entities: z.array(z.string()), // at least 2 compared entities
  }),
});

const texts = defineCollection({
  schema: z.object({
    ...base,
    chinese: z.string().optional(),
    pinyin: z.string().optional(),
    author: z.string().optional(),
    dynasty: z.string().optional(),
    genre: z.string().optional(),
  }),
});

const translations = defineCollection({
  schema: z.object({
    ...base,
    sourceText: z.string().optional(), // reference to texts collection slug
    term: z.string().optional(),
    chinese: z.string().optional(),
  }),
});

const people = defineCollection({
  schema: z.object({
    ...base,
    chinese: z.string().optional(),
    pinyin: z.string().optional(),
    period: z.string().optional(),
    // history vs tradition vs legend separation (§25)
    historicity: z.enum(['historical', 'semi-legendary', 'legendary', 'uncertain']).optional(),
  }),
});

const stories = defineCollection({
  schema: z.object({
    ...base,
    tradition: z.string().optional(),
    sourceText: z.string().optional(),
  }),
});

const research = defineCollection({
  schema: z.object({
    ...base,
    question: z.string(),
    method: z.string().optional(),
    findingsSummary: z.string().optional(),
    limitations: z.string().optional(),
    traditionRelevance: z.string().optional(), // direct / indirect / adjacent evidence boundary (§16)
  }),
});

const glossary = defineCollection({
  schema: z.object({
    ...base,
    chinese: z.string(),
    pinyin: z.string(),
    literalMeaning: z.string().optional(),
    translationOptions: z.array(z.string()).optional(),
    recommended: z.string().optional(),
  }),
});

const timeline = defineCollection({
  schema: z.object({
    ...base,
    periodStart: z.string().optional(),
    periodEnd: z.string().optional(),
    eventType: z.string().optional(),
  }),
});

const guides = defineCollection({
  schema: z.object({
    ...base,
    audience: z.string().optional(),
  }),
});

const tools = defineCollection({
  schema: z.object({
    ...base,
    purpose: z.string().optional(),
  }),
});

// Experience system (§6-§15) — notes (100-400w), reports (400-1500w+)
const experiences = defineCollection({
  schema: z.object({
    ...base,
    experienceId: z.string(),
    practice: z.string().optional(),
    tradition: z.string().optional(),
    practiceDuration: z.string().optional(),
    sessionDuration: z.string().optional(),
    frequency: z.string().optional(),
    context: z.string().optional(),
    trigger: z.string().optional(),
    physical: z.string().optional(),
    breathing: z.string().optional(),
    attention: z.string().optional(),
    cognitive: z.string().optional(),
    emotional: z.string().optional(),
    perception: z.string().optional(),
    afterEffects: z.string().optional(),
    difficulty: z.string().optional(),
    practitionerInterpretation: z.string().optional(),
    traditionalInterpretation: z.string().optional(),
    alternativeInterpretation: z.string().optional(),
    sourceType: z.enum(['note', 'report']).default('note'),
    confidence: z.enum(['high', 'medium', 'low']).optional(),
    // 'anonymized community report' etc. — never real names (§9)
    anonymity: z.enum(['anonymous', 'anonymized', 'with-permission']).default('anonymous'),
  }),
});

// Patterns: multiple independent reports of similar phenomena (§12)
const patterns = defineCollection({
  schema: z.object({
    ...base,
    phenomenon: z.string(),
    reportCount: z.number().optional(),
    practices: z.array(z.string()).optional(),
    // Explicit separation: PRACTITIONER REPORT vs SCIENTIFIC EVIDENCE
    evidenceBasis: z.enum(['practitioner-reports-only', 'partially-researched', 'research-supported']).default('practitioner-reports-only'),
  }),
});

// Questions: real practitioner/search questions (§16)
const questions = defineCollection({
  schema: z.object({
    ...base,
    question: z.string(),
    context: z.string().optional(),
    answerState: z.enum(['open', 'investigating', 'answered']).default('open'),
  }),
});

const blog = defineCollection({
  schema: z.object({
    ...base,
    author: z.string().optional(),
    kind: z.enum(['editorial', 'research-synthesis', 'comparison', 'essay', 'announcement']).default('editorial'),
  }),
});

export const collections = {
  concepts,
  practices,
  problems,
  comparisons,
  texts,
  translations,
  people,
  stories,
  research,
  glossary,
  timeline,
  guides,
  tools,
  experiences,
  patterns,
  questions,
  blog,
};
