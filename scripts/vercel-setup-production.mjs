/**
 * One-shot Vercel production setup for Trilogy Sunstone Homes.
 *
 * - Ensures trilogysunstonehomes Root Directory = web
 * - Disconnects duplicate "web" project from GitHub (stops double deploys)
 * - Optionally sets NEXT_PUBLIC_GSC_VERIFICATION on production
 * - Triggers a production redeploy on trilogysunstonehomes
 *
 * Requires: VERCEL_TOKEN from https://vercel.com/account/tokens
 *
 * Usage:
 *   VERCEL_TOKEN=... npm run vercel:setup-production
 *   VERCEL_TOKEN=... NEXT_PUBLIC_GSC_VERIFICATION=abc123 npm run vercel:setup-production
 */
const token = process.env.VERCEL_TOKEN;
const teamId = process.env.VERCEL_TEAM_ID ?? "team_EIbjFXaDDtGMTweb5Hvo3CG3";
const productionProject = process.env.VERCEL_PROJECT ?? "trilogysunstonehomes";
const duplicateProject = process.env.VERCEL_DUPLICATE_PROJECT ?? "web";
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();

if (!token) {
  console.error(
    "Missing VERCEL_TOKEN.\n" +
      "Create one at https://vercel.com/account/tokens then run:\n" +
      "  VERCEL_TOKEN=... npm run vercel:setup-production",
  );
  process.exit(1);
}

const baseUrl = "https://api.vercel.com";

async function vercel(path, { method = "GET", body } = {}) {
  const url = `${baseUrl}${path}${path.includes("?") ? "&" : "?"}teamId=${encodeURIComponent(teamId)}`;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    throw new Error(`Vercel API ${method} ${path} → ${res.status}: ${text}`);
  }
  return data;
}

async function getProject(nameOrId) {
  return vercel(`/v9/projects/${encodeURIComponent(nameOrId)}`);
}

async function ensureRootDirectory(project) {
  if (project.rootDirectory === "web") {
    console.log(`✓ ${project.name}: Root Directory already "web"`);
    return project;
  }

  console.log(
    `→ ${project.name}: setting Root Directory to "web" (was ${project.rootDirectory ?? "empty"})`,
  );
  const updated = await vercel(`/v10/projects/${encodeURIComponent(project.id)}`, {
    method: "PATCH",
    body: { rootDirectory: "web" },
  });
  console.log(`✓ ${project.name}: Root Directory set to "web"`);
  return updated;
}

async function disconnectGit(project) {
  if (!project.link) {
    console.log(`✓ ${project.name}: no Git repository connected`);
    return;
  }

  const repo = `${project.link.org ?? project.link.repoOwner}/${project.link.repo}`;
  console.log(`→ ${project.name}: disconnecting Git repo ${repo}`);
  await vercel(`/v9/projects/${encodeURIComponent(project.id)}/link`, {
    method: "DELETE",
  });
  console.log(`✓ ${project.name}: disconnected ${repo}`);
}

async function ensureGscEnv(project) {
  if (!gscVerification) {
    console.log("• Skipping GSC env var (NEXT_PUBLIC_GSC_VERIFICATION not set)");
    return;
  }

  const envVars = await vercel(`/v9/projects/${encodeURIComponent(project.id)}/env`);
  const existing = envVars.envs?.find(
    (env) => env.key === "NEXT_PUBLIC_GSC_VERIFICATION" && env.target?.includes("production"),
  );

  if (existing?.value === gscVerification) {
    console.log("✓ NEXT_PUBLIC_GSC_VERIFICATION already set on production");
    return;
  }

  console.log("→ Setting NEXT_PUBLIC_GSC_VERIFICATION on production");
  await vercel(`/v10/projects/${encodeURIComponent(project.id)}/env?upsert=true`, {
    method: "POST",
    body: {
      key: "NEXT_PUBLIC_GSC_VERIFICATION",
      value: gscVerification,
      type: "plain",
      target: ["production"],
      comment: "Google Search Console HTML tag verification",
    },
  });
  console.log("✓ NEXT_PUBLIC_GSC_VERIFICATION set on production");
}

async function redeployProduction(project) {
  const gitSource = {
    type: "github",
    ref: project.link?.productionBranch ?? "main",
    repo:
      project.link?.repo ??
      `${project.link?.org ?? "LetMeHelpYouREALTY"}/trilogysunstonehomes`,
  };

  if (project.link?.repoId) {
    gitSource.repoId = project.link.repoId;
  }

  console.log(`→ Triggering production redeploy for ${project.name}`);
  const deployment = await vercel(`/v13/deployments`, {
    method: "POST",
    body: {
      name: project.name,
      project: project.id,
      target: "production",
      gitSource,
    },
  });

  if (deployment?.url) {
    console.log(`✓ Production redeploy started: https://${deployment.url}`);
  } else {
    console.log("✓ Production redeploy request sent");
  }
}

async function main() {
  console.log("Vercel production setup — Trilogy Sunstone Homes\n");

  const production = await getProject(productionProject);
  await ensureRootDirectory(production);

  const duplicate = await getProject(duplicateProject);
  await disconnectGit(duplicate);

  await ensureGscEnv(production);

  if (gscVerification) {
    const refreshed = await getProject(productionProject);
    await redeployProduction(refreshed);
  } else {
    console.log("• Skipping redeploy (only needed after GSC env var changes)");
  }

  console.log("\nDone.");
  console.log(`Production: https://www.trilogysunstonehomes.com`);
  console.log(`Dashboard:  https://vercel.com/janet-duffys-projects/${productionProject}`);
}

main().catch((error) => {
  console.error("\nSetup failed:", error.message);
  process.exit(1);
});
