#!/bin/bash
# One-command setup: creates GitHub repo + deploys to Vercel
# Run from any directory: bash <(curl -s RAW_URL) OR clone branch and run ./setup.sh
set -e

echo "=== Context Forge Setup ==="

# 1. Create GitHub repo
echo "Creating GitHub repo..."
gh repo create Huddler-Venture-Studio/context-forge \
  --public \
  --description "Project dashboard — TravlTeam Hub v3" \
  --confirm 2>/dev/null || echo "Repo may already exist, continuing..."

# 2. Initialize and push
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -d .git ]; then
  git init
  git branch -M main
fi

git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/Huddler-Venture-Studio/context-forge.git
git add -A
git commit -m "Initial commit: Context Forge project dashboard" 2>/dev/null || echo "Already committed"
git push -u origin main --force

echo ""
echo "=== GitHub repo ready ==="
echo "https://github.com/Huddler-Venture-Studio/context-forge"
echo ""

# 3. Install and build
echo "Installing dependencies..."
npm install
echo "Building..."
npm run build

# 4. Deploy to Vercel
echo "Deploying to Vercel..."
if command -v vercel &>/dev/null || npx vercel --version &>/dev/null; then
  npx vercel --prod --yes
else
  echo "Vercel CLI not found. Deploy manually at https://vercel.com/new"
fi

echo ""
echo "=== Done! ==="
