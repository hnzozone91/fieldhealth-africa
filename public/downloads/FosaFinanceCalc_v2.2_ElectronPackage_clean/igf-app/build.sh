#!/bin/bash
echo "================================================"
echo " FosaFinanceCalc v2.0 — Build Script"
echo " Dr. Nzozone Henry Fomukong"
echo "================================================"

command -v node &>/dev/null || { echo "ERROR: Install Node.js from nodejs.org"; exit 1; }
echo "[1/3] Node.js: $(node --version)"

echo "[2/3] Installing dependencies..."
npm install || { echo "npm install failed"; exit 1; }

echo "[3/3] Building..."
[[ "$OSTYPE" == "darwin"* ]] && npm run dist:mac || npm run dist:linux

echo "================================================"
echo " BUILD COMPLETE — output in dist/ folder"
ls dist/ 2>/dev/null
