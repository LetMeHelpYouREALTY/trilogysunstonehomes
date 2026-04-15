param(
  [Parameter(Mandatory = $false)]
  [string[]]$RepoPaths
)

$ErrorActionPreference = "Stop"

$sourceRoot = Join-Path $PSScriptRoot "..\\.cursor\\rules"
$sourceRoot = [System.IO.Path]::GetFullPath($sourceRoot)

if (-not (Test-Path $sourceRoot)) {
  throw "Source rules directory not found: $sourceRoot"
}

$ruleFiles = @(
  "nextjs-stack.mdc",
  "realtor-site.mdc",
  "seo.mdc"
)

if (-not $RepoPaths -or $RepoPaths.Count -eq 0) {
  Write-Host "No repo paths provided. Example usage:"
  Write-Host "  .\\scripts\\apply-mdc-rules.ps1 -RepoPaths 'C:\\repo1','C:\\repo2'"
  exit 1
}

foreach ($repoPath in $RepoPaths) {
  $resolvedRepoPath = [System.IO.Path]::GetFullPath($repoPath)
  if (-not (Test-Path $resolvedRepoPath)) {
    Write-Warning "Skipping missing path: $resolvedRepoPath"
    continue
  }

  $targetRulesDir = Join-Path $resolvedRepoPath ".cursor\\rules"
  New-Item -ItemType Directory -Force -Path $targetRulesDir | Out-Null

  foreach ($ruleFile in $ruleFiles) {
    $source = Join-Path $sourceRoot $ruleFile
    $target = Join-Path $targetRulesDir $ruleFile
    Copy-Item -Path $source -Destination $target -Force
  }

  Write-Host "Applied .mdc rules to: $resolvedRepoPath"
}
