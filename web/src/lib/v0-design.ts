/**
 * Server-only helpers for the v0 Platform API (Vercel).
 * @see https://v0.dev/docs/api — key from v0.dev/chat/settings/keys
 */
import { createClient } from "v0-sdk";

const DESIGN_SYSTEM_PROMPT = `You are a UI design consultant for "Trilogy Sunstone Homes" (short name; full line: "Trilogy Sunstone | Homes by Dr Jan Duffy"), a Las Vegas 55+ active adult real estate site (Next.js App Router + Tailwind v4).
Constraints: keep trust and accessibility (WCAG contrast); do not invent phone numbers, addresses, licenses, or reviews; no IDX disclaimers.
Return:
1) A short palette (hex) for primary, accent, surface, and text.
2) Three concrete Tailwind class suggestions for hero, cards, and primary CTA.
3) One sentence on motion (respect prefers-reduced-motion).
Keep the response under 400 words.`;

export type V0DesignResult = {
  chatId: string;
  webUrl: string;
  assistantText: string;
  /** Generated file snapshots when v0 returns a version with files */
  files: { name: string; content: string }[];
};

export async function runV0DesignChat(userPrompt: string): Promise<V0DesignResult> {
  const apiKey = process.env.V0_API_KEY;
  if (!apiKey) {
    throw new Error("Missing V0_API_KEY");
  }

  const v0 = createClient({ apiKey });

  const chat = await v0.chats.create({
    message: userPrompt,
    system: DESIGN_SYSTEM_PROMPT,
    chatPrivacy: "private",
    modelConfiguration: {
      modelId: "v0-1.5-md",
      imageGenerations: false,
    },
    responseMode: "sync",
  });

  const files =
    chat.latestVersion?.files?.map((f) => ({
      name: f.name,
      content: f.content,
    })) ?? [];

  return {
    chatId: chat.id,
    webUrl: chat.webUrl,
    assistantText: chat.text ?? "",
    files,
  };
}
