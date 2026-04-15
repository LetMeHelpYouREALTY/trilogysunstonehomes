import { NextRequest, NextResponse } from "next/server";
import { runV0DesignChat } from "@/lib/v0-design";

/**
 * POST /api/v0/design
 * Secured with Bearer V0_DESIGN_API_SECRET (server env). Uses V0_API_KEY server-side only.
 * Body: { "prompt": "optional extra instructions" }
 */
export async function POST(request: NextRequest) {
  const secret = process.env.V0_DESIGN_API_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "V0 design API is not configured (V0_DESIGN_API_SECRET)." },
      { status: 503 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let extra = "";
  try {
    const body = (await request.json()) as { prompt?: string };
    extra = typeof body.prompt === "string" ? body.prompt.slice(0, 2000) : "";
  } catch {
    // empty body OK
  }

  const defaultPrompt =
    "Suggest an elevated visual direction (colors, depth, typography rhythm) for the marketing site that still feels trustworthy for 55+ buyers.";

  try {
    const result = await runV0DesignChat(extra ? `${defaultPrompt}\n\n${extra}` : defaultPrompt);
    return NextResponse.json({
      chatId: result.chatId,
      webUrl: result.webUrl,
      text: result.assistantText,
      fileCount: result.files.length,
      fileNames: result.files.map((f) => f.name),
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "V0 request failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
