/**
 * Server-only helper for the Gemini REST API.
 * Official docs:
 * - https://ai.google.dev/api/generate-content
 * - https://ai.google.dev/gemini-api/docs/api-key
 */

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const DEFAULT_TIMEOUT_MS = 20_000;
const MAX_PROMPT_LENGTH = 8_000;

type GeminiTextPart = {
  text?: string;
};

type GeminiContent = {
  parts?: GeminiTextPart[];
};

type GeminiCandidate = {
  content?: GeminiContent;
  finishReason?: string;
};

export type GeminiGenerateResult = {
  text: string;
  finishReason?: string;
  model: string;
  usage?: unknown;
  raw: unknown;
};

function getGeminiApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY");
  }
  return apiKey;
}

function extractText(payload: { candidates?: GeminiCandidate[] }): string {
  const parts = payload.candidates?.[0]?.content?.parts ?? [];
  return parts
    .map((part) => part.text?.trim() ?? "")
    .filter(Boolean)
    .join("\n\n");
}

export async function generateGeminiText(prompt: string): Promise<GeminiGenerateResult> {
  const normalizedPrompt = prompt.trim();
  if (!normalizedPrompt) {
    throw new Error("Prompt is required");
  }
  if (normalizedPrompt.length > MAX_PROMPT_LENGTH) {
    throw new Error(`Prompt is too long (max ${MAX_PROMPT_LENGTH} characters)`);
  }

  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": getGeminiApiKey(),
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: normalizedPrompt }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 512,
      },
    }),
    signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Gemini request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as {
    candidates?: GeminiCandidate[];
    usageMetadata?: unknown;
    modelVersion?: string;
  };

  const text = extractText(payload);
  if (!text) {
    throw new Error("Gemini returned no text content");
  }

  return {
    text,
    finishReason: payload.candidates?.[0]?.finishReason,
    model: payload.modelVersion ?? GEMINI_MODEL,
    usage: payload.usageMetadata,
    raw: payload,
  };
}
