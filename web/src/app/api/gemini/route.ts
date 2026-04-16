import { NextRequest, NextResponse } from "next/server";
import { generateGeminiText } from "@/lib/gemini";

const MAX_PROMPT_LENGTH = 8_000;

/**
 * POST /api/gemini
 * Secured with Bearer GEMINI_API_SECRET (server env). Uses GEMINI_API_KEY server-side only.
 * Body: { "prompt": "required" }
 */
export async function POST(request: NextRequest) {
  const secret = process.env.GEMINI_API_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Gemini API route is not configured (GEMINI_API_SECRET)." },
      { status: 503 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let prompt = "";
  try {
    const body = (await request.json()) as { prompt?: string };
    prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return NextResponse.json(
      { error: `Prompt is too long (max ${MAX_PROMPT_LENGTH} characters)` },
      { status: 400 },
    );
  }

  try {
    const result = await generateGeminiText(prompt);
    return NextResponse.json({
      text: result.text,
      model: result.model,
      finishReason: result.finishReason,
      usage: result.usage,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Gemini request failed";
    const status = message.startsWith("Missing GEMINI_API_KEY") ? 503 : 502;
    return NextResponse.json({ error: message }, { status });
  }
}
