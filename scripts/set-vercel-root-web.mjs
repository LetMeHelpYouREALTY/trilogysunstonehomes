/**
 * Sets Vercel project Root Directory to `web` so `.next` is produced where the
 * Next.js builder expects it (fixes ".next not found at /vercel/path0/.next").
 *
 * Requires: VERCEL_TOKEN from https://vercel.com/account/tokens
 * Optional: VERCEL_TEAM_ID (default: Janet Duffy team), VERCEL_PROJECT (default: trilogysunstonehomes)
 */
const token = process.env.VERCEL_TOKEN;
const teamId = process.env.VERCEL_TEAM_ID ?? "team_EIbjFXaDDtGMTweb5Hvo3CG3";
const project = process.env.VERCEL_PROJECT ?? "trilogysunstonehomes";

if (!token) {
  console.error(
    "Missing VERCEL_TOKEN. Create a token at https://vercel.com/account/tokens and run:\n" +
      "  VERCEL_TOKEN=... node scripts/set-vercel-root-web.mjs",
  );
  process.exit(1);
}

const url = `https://api.vercel.com/v10/projects/${encodeURIComponent(project)}?teamId=${encodeURIComponent(teamId)}`;

const res = await fetch(url, {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ rootDirectory: "web" }),
});

const text = await res.text();
if (!res.ok) {
  console.error(`Vercel API ${res.status}:`, text);
  process.exit(1);
}

console.log("Updated project settings:");
console.log(JSON.stringify(JSON.parse(text), null, 2));
console.log(
  "\nNext: In Vercel → Project → Settings → General, confirm Root Directory is `web`. " +
    "Clear Build Command / Output Directory overrides if set. Redeploy production.",
);
