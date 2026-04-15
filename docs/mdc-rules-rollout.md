# MDC Rules Rollout

This repository includes `scripts/sync-mdc-rules.ps1` to enforce the three baseline Cursor rules files in target repos:

- `.cursor/rules/nextjs-stack.mdc`
- `.cursor/rules/realtor-site.mdc`
- `.cursor/rules/seo.mdc`

## What It Does

- Creates `.cursor/rules/` if missing.
- Creates or updates only the three baseline `.mdc` files.
- Supports explicit repo list mode and root-scan mode.
- Supports dry-run preview mode.
- Supports optional run logging via `-LogPath`.
- Honors per-repo opt-out marker file: `.mdc-sync-skip`.
- Prints per-file status for each repo: `created`, `updated`, `unchanged`, `skipped`, or `error`.

## Usage

Run from this repository root:

```powershell
# Dry-run against explicit repos
powershell -ExecutionPolicy Bypass -File .\scripts\sync-mdc-rules.ps1 -RepoPaths "C:\repo1","C:\repo2" -DryRun

# Apply to explicit repos
powershell -ExecutionPolicy Bypass -File .\scripts\sync-mdc-rules.ps1 -RepoPaths "C:\repo1","C:\repo2"

# Dry-run scan for git repos under a root folder
powershell -ExecutionPolicy Bypass -File .\scripts\sync-mdc-rules.ps1 -RootPath "C:\Users\geneb\projects" -DryRun

# Apply scan for git repos under a root folder
powershell -ExecutionPolicy Bypass -File .\scripts\sync-mdc-rules.ps1 -RootPath "C:\Users\geneb\projects"

# Apply with a persistent CSV-style run log
powershell -ExecutionPolicy Bypass -File .\scripts\sync-mdc-rules.ps1 -RootPath "C:\Users\geneb\projects" -LogPath ".\logs\mdc-sync.log"

# CI mode: fail if any drift is detected
powershell -ExecutionPolicy Bypass -File .\scripts\sync-mdc-rules.ps1 -RepoPaths "." -DryRun -FailOnDrift
```

## Guardrails

- The script only writes to `.cursor/rules/nextjs-stack.mdc`, `.cursor/rules/realtor-site.mdc`, and `.cursor/rules/seo.mdc`.
- Non-git paths are skipped and reported as `skipped`.
- Existing repo-specific custom rules are not touched.
- Place a `.mdc-sync-skip` file in any repo you want excluded from automation.
- Use `-DryRun` first when running across many repos.

## Manual Fallback

If a repo is non-standard or excluded from automation:

1. Create `.cursor/rules/` if missing.
2. Copy these files from this repo:
   - `.cursor/rules/nextjs-stack.mdc`
   - `.cursor/rules/realtor-site.mdc`
   - `.cursor/rules/seo.mdc`
3. Verify content matches the baseline exactly.

Authoritative source of truth:

- The canonical rule content lives in `Get-CanonicalRules` inside `scripts/sync-mdc-rules.ps1`.
- If you manually copy files, run the sync script first in this repo so on-disk files are up to date.
