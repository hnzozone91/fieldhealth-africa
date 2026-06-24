# FosaFinanceCalc
## Gestion Financière des Recettes Propres
### Version 2.0.0 — Desktop Application Package

**Author:** Dr. Nzozone Henry Fomukong  
**Role:** District Medical Officer, Mamfe Health District, South West Region, Cameroon  
**Contact:** hnzozone91.nh@gmail.com  
**Publication:** https://hnzozone91.substack.com

---

## What Is FosaFinanceCalc?

FosaFinanceCalc is a desktop application for managing Internally Generated
Funds (Recettes Propres) in Category 3, 4 and 5 health facilities in Cameroon.

It automates the official 6-step IGF formula, tracks decade Treasury deposits,
manages Cost Recovery expenditures, and generates audit-ready reports for
IGF, DRSP and MINSANTE submission — all with no internet connection required.

---

## Folder Structure

```
fosafinancecalc/
├── main.js              ← Electron main process
├── preload.js           ← Secure renderer bridge
├── package.json         ← App config + build settings
├── README.md            ← This file
├── BUILD_WINDOWS.bat    ← Double-click to build on Windows
├── build.sh             ← Build on Mac/Linux
├── src/
│   └── index.html       ← Complete FosaFinanceCalc application
└── assets/
    ├── icon.png         ← App icon (256×256 PNG)
    ├── icon.ico         ← Windows ICO (multi-size)
    └── LICENSE.txt      ← Displayed during installation
```

---

## How to Build

### On Windows (recommended — target platform is Windows)

1. Install **Node.js LTS** from https://nodejs.org
2. Double-click **BUILD_WINDOWS.bat**
3. Wait 5-10 minutes (first run downloads Electron ~80MB)
4. Find output in `dist\` folder

### Manual build (any platform)

```bash
npm install
npm run dist:win    # Windows .exe installer + portable
npm run dist:mac    # macOS .dmg
npm run dist:linux  # Linux .AppImage + .deb
```

### Test without building

```bash
npm install
npm start
```

---

## Output Files

| File | Use |
|------|-----|
| `FosaFinanceCalc-Setup-2.0.0.exe` | Windows installer — for facility distribution |
| `FosaFinanceCalc-Portable-2.0.0.exe` | Windows portable — no install needed |
| `FosaFinanceCalc-2.0.0.dmg` | macOS |
| `FosaFinanceCalc-2.0.0.AppImage` | Linux |

---

## What the Installer Does (Windows)

1. Shows the licence text for acceptance
2. Lets user choose installation folder
3. Creates desktop shortcut: **FosaFinanceCalc**
4. Creates Start Menu entry: **FosaFinanceCalc**
5. Opens the application on first launch

Uninstall: Control Panel → Programs → FosaFinanceCalc → Uninstall

---

## Features Added by Desktop Packaging

| Feature | Browser HTML file | Desktop app |
|---------|------------------|-------------|
| Windows installer (.exe) | ✗ | ✓ |
| Desktop shortcut | ✗ | ✓ |
| Start menu entry | ✗ | ✓ |
| Native Save file dialog | ✗ | ✓ |
| Keyboard shortcuts (Ctrl+S, Ctrl+P) | Partial | ✓ |
| Professional About dialog | ✗ | ✓ |
| Version in title bar | ✗ | ✓ |
| Works offline | ✓ | ✓ |
| No internet required | ✓ | ✓ |
| Data stays on device | ✓ | ✓ |

---

## Submitting to sira.minsante.cm

- **Application name:** FosaFinanceCalc
- **Version:** 2.0.0
- **Author/Publisher:** Dr. Nzozone Henry Fomukong
- **Category:** Gestion Financière / Financial Management
- **Platforms:** Windows 7/8/10/11 (x64 & x86), macOS 10.13+, Linux
- **Connectivity:** None — fully offline
- **Submit:** FosaFinanceCalc-Setup-2.0.0.exe + bilingual user guides
- **App ID:** cm.fosafinancecalc.app

---

## Technical Specifications

| Item | Value |
|------|-------|
| Framework | Electron 28 (Chromium 120 + Node.js 18) |
| Installer | NSIS (Windows) |
| Languages | French (primary), English |
| Architecture | x64 + ia32 (Windows) |
| Code signing | Not required for facility use |
| Network calls | None |
| Data storage | Local JSON (user-controlled) |

---

*FosaFinanceCalc is not an official government or MINSANTE product.*  
*© 2026 Dr. Nzozone Henry Fomukong*
