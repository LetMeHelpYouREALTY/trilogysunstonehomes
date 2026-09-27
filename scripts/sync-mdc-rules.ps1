param(
  [Parameter(Mandatory = $false)]
  [string[]]$RepoPaths,

  [Parameter(Mandatory = $false)]
  [string]$RootPath,

  [Parameter(Mandatory = $false)]
  [switch]$DryRun,

  [Parameter(Mandatory = $false)]
  [string]$LogPath,

  [Parameter(Mandatory = $false)]
  [switch]$FailOnDrift
)

$ErrorActionPreference = "Stop"

function Get-CanonicalRules {
  return @{
    "nextjs-stack.mdc" = @'
---
description: Next.js stack baseline
alwaysApply: true
---

# Next.js Stack Baseline

- Next.js 16, App Router only. Never use Pages Router patterns.
- React 19 with TypeScript strict mode.
- Use `next/image` for local listing photos and other first-party images. Only use raw third-party embeds or iframes when the integration requires it.
- Every route should export either static `metadata` or `generateMetadata()` with page-specific title, description, and canonical behavior.
- Server Components by default. Use `'use client'` only when required.
- Tailwind CSS v4 classes for styling. Avoid inline styles unless a browser API or external embed requires a dynamic inline value.
- Prefer shared constants and helpers in `web/src/lib/` over duplicating SEO, NAP, schema, or URL strings in page files.
'@;
    "realtor-site.mdc" = @'
---
description: Realtor site safety and integration rules
alwaysApply: true
---

# Realtor Site Rules

- Never hardcode site-specific phone numbers, address lines, or license text in page/component copy when a shared source already exists. Use shared constants such as `web/src/lib/site-contact.ts`.
- Keep visible NAP, metadata, and JSON-LD aligned. If a page mentions Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, or Trilogy Sunstone contact details, they must match the shared contact source.
- Use RealScout embeds only where the integration requires them, and keep related CSP/script domains aligned with the app config.
- Use shared schema helpers in `web/src/lib/schema.ts` for `WebSite`, `RealEstateAgent`, `LocalBusiness`, `FAQPage`, and breadcrumbs before adding page-specific schema.
- Do not add `RealEstateListing` schema unless the page has concrete listing-level data to support it.
'@;
    "seo.mdc" = @'
---
description: SEO implementation defaults
alwaysApply: true
---

# SEO Rules

- Each indexable route should have unique title, description, and canonical behavior via static `metadata` or `generateMetadata()`.
- Match visible H1/H2 copy to the route's primary search intent; avoid boilerplate titles that invite Google rewrites.
- Use App Router `robots.ts` and `sitemap.ts` metadata routes unless the project explicitly uses a different supported generator.
- Keep structured data tied to visible content and shared schema helpers. Favor `FAQPage`, `BreadcrumbList`, `RealEstateAgent`, and `LocalBusiness` where appropriate.
- Allow `CCBot` and other legitimate crawlers in `robots.ts`; never block `/_next/static` assets needed for rendering.
'@
  }
}

function Resolve-RepoTargets {
  param(
    [string[]]$ExplicitRepos,
    [string]$ScanRoot
  )

  $repos = @()

  if ($ExplicitRepos -and $ExplicitRepos.Count -gt 0) {
    foreach ($repo in $ExplicitRepos) {
      $repos += (Resolve-Path -Path $repo).Path
    }
    return $repos | Sort-Object -Unique
  }

  if ([string]::IsNullOrWhiteSpace($ScanRoot)) {
    throw "Provide either -RepoPaths or -RootPath."
  }

  $resolvedRoot = (Resolve-Path -Path $ScanRoot).Path
  if (-not (Test-Path $resolvedRoot)) {
    throw "RootPath does not exist: $resolvedRoot"
  }

  $gitDirs = Get-ChildItem -Path $resolvedRoot -Recurse -Directory -Force -Depth 3 -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -eq ".git" -and $_.FullName -notmatch "\\node_modules\\" }

  foreach ($gitDir in $gitDirs) {
    if ($gitDir.Parent -and $gitDir.Parent.FullName) {
      $repos += $gitDir.Parent.FullName
    }
  }

  return $repos | Sort-Object -Unique
}

function Get-NormalizedContent {
  param([string]$Text)
  return ($Text -replace "`r`n", "`n").TrimEnd()
}

function Write-Utf8NoBom {
  param(
    [string]$Path,
    [string]$Text
  )

  $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $Text, $utf8NoBom)
}

function Sync-RuleFile {
  param(
    [string]$RepoPath,
    [string]$FileName,
    [string]$Content,
    [bool]$IsDryRun
  )

  $targetRulesDir = Join-Path $RepoPath ".cursor\rules"
  $targetFile = Join-Path $targetRulesDir $FileName

  if (-not (Test-Path $targetRulesDir)) {
    if (-not $IsDryRun) {
      New-Item -ItemType Directory -Force -Path $targetRulesDir | Out-Null
    }
  }

  if (-not (Test-Path $targetFile)) {
    if (-not $IsDryRun) {
      Write-Utf8NoBom -Path $targetFile -Text $Content
    }
    return "created"
  }

  $existing = Get-Content -Path $targetFile -Raw
  $isSame = (Get-NormalizedContent $existing) -eq (Get-NormalizedContent $Content)
  if ($isSame) {
    return "unchanged"
  }

  if (-not $IsDryRun) {
    Write-Utf8NoBom -Path $targetFile -Text $Content
  }
  return "updated"
}

$targets = Resolve-RepoTargets -ExplicitRepos $RepoPaths -ScanRoot $RootPath
if (-not $targets -or $targets.Count -eq 0) {
  Write-Host "No repositories found to process."
  exit 0
}

$rules = Get-CanonicalRules
$results = @()

foreach ($repoPath in $targets) {
  try {
    if (-not (Test-Path $repoPath)) {
      $results += [PSCustomObject]@{
        repo   = $repoPath
        file   = "-"
        status = "skipped"
        reason = "missing_path"
      }
      continue
    }

    $gitMarker = Join-Path $repoPath ".git"
    if (-not (Test-Path $gitMarker)) {
      $results += [PSCustomObject]@{
        repo   = $repoPath
        file   = "-"
        status = "skipped"
        reason = "not_git_repo"
      }
      continue
    }

    $skipMarker = Join-Path $repoPath ".mdc-sync-skip"
    if (Test-Path $skipMarker) {
      $results += [PSCustomObject]@{
        repo   = $repoPath
        file   = "-"
        status = "skipped"
        reason = "opt_out"
      }
      continue
    }

    foreach ($ruleName in $rules.Keys) {
      $status = Sync-RuleFile -RepoPath $repoPath -FileName $ruleName -Content $rules[$ruleName] -IsDryRun $DryRun.IsPresent
      $results += [PSCustomObject]@{
        repo   = $repoPath
        file   = $ruleName
        status = $status
        reason = ""
      }
    }
  }
  catch {
    $results += [PSCustomObject]@{
      repo   = $repoPath
      file   = "-"
      status = "error"
      reason = $_.Exception.Message
    }
  }
}

$results |
  Sort-Object repo, file |
  Format-Table -AutoSize

$summary = $results | Group-Object status | Sort-Object Name
Write-Host ""
Write-Host "Summary:"
foreach ($row in $summary) {
  Write-Host ("  {0}: {1}" -f $row.Name, $row.Count)
}

if (-not [string]::IsNullOrWhiteSpace($LogPath)) {
  $resolvedLogPath = [System.IO.Path]::GetFullPath($LogPath)
  $logDirectory = Split-Path -Path $resolvedLogPath -Parent
  if (-not [string]::IsNullOrWhiteSpace($logDirectory) -and -not (Test-Path $logDirectory)) {
    New-Item -ItemType Directory -Force -Path $logDirectory | Out-Null
  }

  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
  $logHeader = "=== Sync run: $timestamp ==="
  $csvBody = $results | ConvertTo-Csv -NoTypeInformation | Out-String
  Add-Content -Path $resolvedLogPath -Value ($logHeader + "`n" + $csvBody) -Encoding utf8
}

$driftStatuses = @("created", "updated", "error")
$hasDrift = $results | Where-Object { $driftStatuses -contains $_.status } | Select-Object -First 1

if ($DryRun.IsPresent) {
  Write-Host ""
  Write-Host "Dry-run mode: no files were written."
}

if ($FailOnDrift.IsPresent -and $null -ne $hasDrift) {
  Write-Error "Drift detected (created/updated/error). Failing due to -FailOnDrift."
  exit 2
}
