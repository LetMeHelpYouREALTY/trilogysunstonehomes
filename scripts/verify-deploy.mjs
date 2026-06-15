#!/usr/bin/env node
/**
 * Pre-deploy gate: catches missing @/ imports and broken builds before git push.
 * Run from repo root: npm run verify
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const webRoot = join(repoRoot, "web");
const srcRoot = join(webRoot, "src");

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const absolute = join(dir, name);
    if (statSync(absolute).isDirectory()) {
      if (name !== "node_modules") walk(absolute, files);
    } else if (/\.(ts|tsx)$/.test(name)) {
      files.push(absolute);
    }
  }
  return files;
}

function resolveAliasImport(importPath) {
  const candidates = [
    join(srcRoot, `${importPath}.ts`),
    join(srcRoot, `${importPath}.tsx`),
    join(srcRoot, importPath, "index.ts"),
    join(srcRoot, importPath, "index.tsx"),
  ];
  return candidates.find((candidate) => existsSync(candidate)) ?? null;
}

function isTracked(relativePath) {
  try {
    execSync(`git ls-files --error-unmatch -- "${relativePath}"`, {
      cwd: repoRoot,
      stdio: "ignore",
    });
    return true;
  } catch {
    return false;
  }
}

const importPattern = /from\s+["']@\/([^"']+)["']/g;
const missingOnDisk = [];
const missingFromGit = [];

for (const file of walk(srcRoot)) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(importPattern)) {
    const aliasPath = match[1];
    const resolved = resolveAliasImport(aliasPath);
    const fromFile = relative(repoRoot, file);

    if (!resolved) {
      missingOnDisk.push({ fromFile, importPath: `@/${aliasPath}` });
      continue;
    }

    const resolvedRelative = relative(repoRoot, resolved);
    if (!isTracked(resolvedRelative)) {
      missingFromGit.push({ fromFile, importPath: `@/${aliasPath}`, file: resolvedRelative });
    }
  }
}

if (missingOnDisk.length > 0) {
  console.error("\n❌ Missing import targets on disk:\n");
  for (const item of missingOnDisk) {
    console.error(`  ${item.fromFile} → ${item.importPath}`);
  }
  process.exit(1);
}

if (missingFromGit.length > 0) {
  console.error("\n❌ Import targets exist locally but are not tracked by git (common Vercel failure):\n");
  for (const item of missingFromGit) {
    console.error(`  ${item.fromFile} → ${item.importPath}`);
    console.error(`    untracked/missing: ${item.file}`);
  }
  console.error("\nRun: git add <missing files> && git commit\n");
  process.exit(1);
}

console.log("✓ All @/ imports resolve and are tracked by git");

const steps = [
  { cwd: webRoot, cmd: "npm run build", label: "build" },
  { cwd: webRoot, cmd: "npm run typecheck", label: "typecheck" },
  { cwd: webRoot, cmd: "npm run lint", label: "lint" },
];

for (const step of steps) {
  console.log(`\n→ Running ${step.label}...`);
  execSync(step.cmd, { cwd: step.cwd, stdio: "inherit" });
}

console.log("\n✓ Deploy verification passed — safe to push");
