#!/usr/bin/env sh
# Installs a git pre-push hook that runs `npm run verify` before every push.
set -e

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
HOOK="$ROOT/.git/hooks/pre-push"

cat > "$HOOK" <<'EOF'
#!/usr/bin/env sh
echo "Running deploy verification (npm run verify)..."
npm run verify || {
  echo ""
  echo "Push blocked: fix errors above, then push again."
  exit 1
}
EOF

chmod +x "$HOOK"
echo "Installed pre-push hook at .git/hooks/pre-push"
