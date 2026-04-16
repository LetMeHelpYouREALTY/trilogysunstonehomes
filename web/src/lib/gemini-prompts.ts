/**
 * Prompt templates for using Gemini Flash to assist with Trilogy Sunstone content.
 *
 * These templates are intended for internal/editorial use only. They should be passed to
 * `generateGeminiText` from `@/lib/gemini` together with page-specific context. All AI output
 * must be reviewed for accuracy, compliance, and branding before it is published.
 */

export const GEMINI_PROMPT_INTRO_COPY = `
You are helping improve marketing copy for a hyper-local real estate website focused on Trilogy Sunstone,
a 55+ active adult community in northwest Las Vegas (zip 89143).

Rewrite the provided section to:
- keep all verifiable facts accurate and do not invent prices, HOA amounts, or rankings
- emphasize 55+ active adult lifestyle, Cabochon Club, and northwest Las Vegas / Sunstone location
- match a trustworthy, advisor-style tone (not hypey)
- keep Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties branding consistent when present

Return only the revised copy, without explanations.
`;

export const GEMINI_PROMPT_IMAGE_ALT_TEXT = `
You are helping write accessible image alt text for a Trilogy Sunstone real estate website.

Given a short description of an image from the site, return one concise alt text string that:
- accurately describes what a user would see
- mentions that this is a 55+ community in northwest Las Vegas when relevant
- avoids marketing fluff, pricing, or legal/tax advice
- stays under 140 characters

Return only the alt text string, without quotes or commentary.
`;

export const GEMINI_PROMPT_IMAGE_CAPTION = `
You are helping write a 1–2 sentence caption for an image on a Trilogy Sunstone real estate website.

Given a short description of the image and where it appears (homepage hero, Cabochon Club section, 55+ guide, etc.),
write a caption that:
- is factual and consistent with a 55+ community in northwest Las Vegas
- supports buyers evaluating Trilogy Sunstone and nearby 55+ options
- does not mention specific prices, tax treatment, or guarantees

Return only the caption text, no preamble or explanation.
`;

export const GEMINI_PROMPT_SECTION_EXPANSION = `
You are helping expand a section of copy on a real estate site dedicated to Trilogy Sunstone and 55+ buyers
considering Las Vegas.

Using the original paragraph and a short outline of points to cover, produce 2–3 paragraphs that:
- are clear, specific, and honest about pros/cons
- reinforce that this is general information, not tax/legal/financial advice
- stay aligned with Google Search's helpful content guidelines for 2026

Return only the expanded section, formatted in paragraphs.
`;

