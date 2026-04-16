$ErrorActionPreference = "Stop"

$raw = [Console]::In.ReadToEnd()
if ([string]::IsNullOrWhiteSpace($raw)) {
  Write-Output '{ "permission": "allow" }'
  exit 0
}

$payload = $raw | ConvertFrom-Json
$subagentType = ""
if ($null -ne $payload.PSObject.Properties["subagent_type"]) {
  $subagentType = [string]$payload.subagent_type
}

if ($subagentType -in @("browser-use", "best-of-n-runner")) {
  $result = @{
    permission = "ask"
    user_message = "This subagent can trigger browser sessions or isolated worktrees. Review before continuing."
    agent_message = "Project hook asks for confirmation on high-side-effect subagent types."
  } | ConvertTo-Json -Compress
  Write-Output $result
  exit 0
}

Write-Output '{ "permission": "allow" }'
