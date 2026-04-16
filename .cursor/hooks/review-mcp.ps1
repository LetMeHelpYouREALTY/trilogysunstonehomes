$ErrorActionPreference = "Stop"

$raw = [Console]::In.ReadToEnd()
if ([string]::IsNullOrWhiteSpace($raw)) {
  Write-Output '{ "permission": "allow" }'
  exit 0
}

$payload = $raw | ConvertFrom-Json
$toolName = ""
if ($null -ne $payload.PSObject.Properties["tool_name"]) {
  $toolName = [string]$payload.tool_name
}

if ($toolName -match 'auth|delete|destroy|deploy|publish|secret|token|release|billing') {
  $result = @{
    permission = "ask"
    user_message = "This MCP action may have side effects or involve credentials. Review before continuing."
    agent_message = "Project hook asks for confirmation on side-effecting MCP tools."
  } | ConvertTo-Json -Compress
  Write-Output $result
  exit 0
}

Write-Output '{ "permission": "allow" }'
