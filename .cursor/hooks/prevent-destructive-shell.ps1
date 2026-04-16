$ErrorActionPreference = "Stop"

$raw = [Console]::In.ReadToEnd()
if ([string]::IsNullOrWhiteSpace($raw)) {
  Write-Output '{ "permission": "allow" }'
  exit 0
}

$payload = $raw | ConvertFrom-Json
$command = ""
if ($null -ne $payload.PSObject.Properties["command"]) {
  $command = [string]$payload.command
}

$dangerPatterns = @(
  'git\s+reset\s+--hard',
  'git\s+checkout\s+--',
  'git\s+clean\s+-f',
  'git\s+push\s+--force',
  'git\s+push\s+--force-with-lease',
  'rm\s+-rf',
  'del\s+/f',
  'Remove-Item\s+.+-Recurse.+-Force',
  'format\s+[a-zA-Z]:',
  'diskpart'
)

foreach ($pattern in $dangerPatterns) {
  if ($command -match $pattern) {
    $result = @{
      permission = "ask"
      user_message = "This shell command looks destructive. Review it before continuing."
      agent_message = "Project hook flagged a potentially destructive shell command."
    } | ConvertTo-Json -Compress
    Write-Output $result
    exit 0
  }
}

Write-Output '{ "permission": "allow" }'
