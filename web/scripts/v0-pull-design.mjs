#!/usr/bin/env node
/**
 * Local CLI: call v0 Platform API for design ideas (CSS / Tailwind direction).
 *
 * Usage (Node 20+):
 *   cd web
 *   set V0_API_KEY=...   (PowerShell: $env:V0_API_KEY="...")
 *   node --env-file=.env.local ./scripts/v0-pull-design.mjs "optional extra prompt"
 *
 * Or pass prompt as argv without .env.local if vars are in the shell.
 */
import { createClient } from "v0-sdk";

const apiKey = process.env.V0_API_KEY;
if (!apiKey) {
  console.error("Set V0_API_KEY (e.g. from v0.dev/chat/settings/keys).");
  process.exit(1);
}

const extra = process.argv.slice(2).join(" ").trim();
const message =
  extra ||
  "Suggest design tokens and Tailwind patterns for a premium Las Vegas 55+ real estate site (trust, clarity, warm accent with blue primary).";

const v0 = createClient({ apiKey });

const chat = await v0.chats.create({
  message,
  system: `You help refine marketing UI for Next.js + Tailwind v4. Output concise, actionable design guidance only—no fabricated business facts.`,
  chatPrivacy: "private",
  modelConfiguration: { modelId: "v0-1.5-md", imageGenerations: false },
  responseMode: "sync",
});

console.log("\n--- v0 chat ---");
console.log("id:", chat.id);
console.log("webUrl:", chat.webUrl);
console.log("\n--- assistant text ---\n");
console.log(chat.text ?? "(no text)");
if (chat.latestVersion?.files?.length) {
  console.log("\n--- files ---");
  for (const f of chat.latestVersion.files) {
    console.log("-", f.name, `(${f.content?.length ?? 0} chars)`);
  }
}
