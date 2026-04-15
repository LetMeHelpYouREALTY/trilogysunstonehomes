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

- Next.js 15, App Router only. Never use Pages Router patterns.
- React 19 with TypeScript strict mode.
- Use `next/image` for all listing photos. Never use raw `<img>` tags.
- Use `generateMetadata()` on every page.
- Server Components by default. Use `'use client'` only when required.
- Tailwind CSS v4 classes for styling. Avoid inline styles.
'@;
    "realtor-site.mdc" = @'
---
description: Realtor site safety and integration rules
alwaysApply: true
---

# Realtor Site Rules

- Never change site-specific phone numbers directly in page/component code. Read from environment variables.
- Use RealScout embeds in Server Components only.
- Include LocalBusiness and RealEstateListing JSON-LD schema on every page.
- Use the Cloudflare Worker schema injector pattern across all sites.
- `cadencehenderson.com` is new-build buyers only and uses phone `702-930-8672`.
'@;
    "seo.mdc" = @'
---
description: SEO implementation defaults
alwaysApply: true
---

# SEO Rules

- Create `error.tsx` alongside each `page.tsx`.
- Use `generateMetadata()` with title, description, Open Graph, and canonical URL fields.
- Use auto-generated sitemap via `next-sitemap`.
- Allow CCBot in `robots.txt` and never block it.
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
