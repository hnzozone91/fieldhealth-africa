# MINSANTE Financial Management Tool v3 Is Here — Built From Your Requests

*Outil de Gestion Financière v3 — Recettes Propres des FOSA | Published by FieldHealth Africa*

---

When we released the first version of the MINSANTE Financial Management Tool for health facilities in Cameroon, we expected interest. We did not expect what actually happened.

Within days of the first release, district medical officers, facility directors, and registrars were sending back the same message, in different words: *this is exactly what we needed — but can it also do this?*

We wrote down every request. We triaged them. And then we built.

Version 3 is the direct result of that conversation with our audience. Every major feature in this upgrade was requested by someone in the field. This article walks through what changed, why it matters, and how to get it.

---

## What people asked for — and what we built

### "We need a way to see the whole month at once"

The original tool used a 12-tab interface — one tab per service. It was precise. But field staff told us that entering data service by service, day by day, was slow when you were working from paper registers at the end of a busy week.

**v3 adds a Monthly Grid view.** A single table with 31 rows (one per day) and 12 columns (one per service). You type directly into the cells. Totals update in real time. The grid and the original tab interface are fully synchronised — data entered in one appears immediately in the other. Both modes coexist. You choose how you work.

---

### "The Treasury and Solidarity tables should be per decade, not per month"

This was one of the most important corrections. RGCP Article 68 is explicit: revenue must be deposited at the Treasury at the end of each decade (D1: days 1–10, D2: days 11–20, D3: days 21–end of month). A single monthly row was not compliant with this requirement.

**v3 rebuilds both the Treasury Deposits and Solidarity Fund tables around decades.** Each month now shows three rows — one per decade — with individually calculated expected amounts, receipt fields, deposit dates, agent names, and automatic status indicators. The annual summary table follows the same structure. You now have a complete, decade-by-decade audit trail for the full year.

---

### "The calculation engine should run from the Journal de Caisse"

This was a fundamental design correction. The original tool calculated from register entries. The audit-facing source of truth in Cameroonian health finance is the Journal de Caisse — the cash book. Calculations must be traceable to that document.

**v3 moves the official calculation engine into the Cash Journal tab.** The moment you record an encaissement (receipt), the engine fires and displays all 6 steps simultaneously on screen:

**Step 1 — Cost Recovery (ring-fenced before any split)**
CR Lab = Lab revenue × 50%. CR Echo = Echo revenue × 50%. CR Ambulance × 50%. CR Pharmacy = Pharmacy revenue × 50% — this goes directly to the pharmacy bank account and bypasses the QP/RA split entirely.

**Step 2 — Total Gross Revenue**
Sum of all 12 service lines in the journal.

**Step 3 — QP/RA Calculation Base**
Total Gross Revenue minus CR Lab, CR Echo, CR Ambulance — and minus the *full* pharmacy revenue (100%), not just the 50% CR portion. The entire pharmacy line is ring-fenced out of the QP/RA circuit.

**Step 4 — Gross Splits**
Gross QP = Base × 30%. Gross RA = Base × 70%. (Décret 2016/6447/PM)

**Step 5 — Solidarity Fund**
10% of Gross RA + 10% of Gross QP = Total deposited to BISEC Bank.

**Step 6 — Net Final Accounts**
Net QP → distributed to staff against signed discharge sheet. Net RA → deposited at Treasury against quittance. CR Pharmacy → deposited to pharmacy bank account.

Every number is visible. Every formula is labelled. Every step links back to its regulatory reference. This is what an auditor needs to see.

---

### "Triangulation should work over any period"

In the original tool, the triangulation engine ran for a single month. Health district supervisors who review quarterly or annual figures had to run it twelve times.

**v3 makes triangulation period-aware.** You now select Monthly, Month Range (e.g. January to June), or Full Year. The engine aggregates all six cross-checks across the selected period and displays consolidated results alongside a month-by-month breakdown. One click. One view.

---

### "We need to export to Excel"

This was the most frequently requested feature.

**v3 adds CSV and Excel export to every single module** — Registers, Cash Journal, Treasury, Solidarity, Pharmacy, Expenditures, and Quotes-Parts. Each has its own export button. The action bar also has a single "Export All (Excel)" button that generates a multi-sheet workbook covering the entire financial year in one file.

---

### "The report should print cleanly — not the whole tool"

A registrar described printing the report and getting 40 pages of the tool interface instead of the 8 pages of the actual report. We fixed this.

**v3's print CSS hides everything except the generated report.** Header, navigation, action bar, all data entry panels, export buttons — none of it prints. Only the report content goes to the printer. Exactly as expected.

---

### Security fixes that were not visible but matter

Four significant security issues were resolved in v3:

The financial base calculation had a double-subtraction bug — pharmacy CR was being excluded twice, causing QP and RA to be systematically understated. This is now corrected.

All user-entered text that appears in the report (facility name, registrar name, supplier fields) is now sanitised before HTML injection, preventing any script injection from malformed data.

Journal entries now use stable unique IDs rather than loop indices, so deletions always target the correct entry regardless of table state.

The region dropdown now correctly restores from saved JSON files — it was silently resetting to blank on every load.

---

## What's also in v3

**Autosave.** Every change saves automatically to browser storage. Every time you open the file, your data is restored. The status bar shows the exact time of the last save. A JSON export creates an external backup that survives a browser cache clear.

**Ctrl+S shortcut.** Saves the current tab's data without reaching for the mouse.

**Dashboard pharmacy alert.** If pharmacy CR has been calculated but not deposited, the dashboard now flags it — alongside the existing treasury and solidarity alerts.

**Rates configuration by category.** The 30/70 split, 10% solidarity, and 50% CR rates are now stored in a configuration object keyed by facility category, making future adjustments clean and traceable.

---

## The tool, in brief

The MINSANTE Financial Management Tool v3 is a single HTML file. No installation. No internet connection required after download. No server, no database, no subscription software. Open it in Chrome or Edge on any computer.

It covers ten modules: Dashboard, Registers, Cash Journal, Treasury Deposits, Solidarity Fund, Pharmacy, CR Expenditures, Quotes-Parts, Triangulation, and Official Report. It generates a fully formatted, print-ready report with signature blocks, legal references, and decade-by-decade triangulation results.

A bilingual user guide (Français / English) is included.

It is designed for categories 3, 4 and 5 health facilities in Cameroon, and complies with:

- Décret 2016/6447/PM — Quotes-Parts du personnel
- Décret 2018/366 — Passation des marchés
- RGCP Art. 68 — Versements décadaires obligatoires
- RGCP Art. 71 — Pièces justificatives obligatoires
- Circulaire MINSANTE — Rapport mensuel à la Délégation Régionale

---

## How to get it

The tool is available at **www.fieldhealthafrica.org**.

**Price: $10 USD**

Payment is via **Mobile Money (MOMO)** — no credit card required.

After payment, you receive the HTML file and the bilingual user guide immediately.

---

*FieldHealth Africa publishes practical tools, templates, and SOPs for health professionals working in the field. Weekly Asset Library. From data to decisions, in the field.*

*— Dr Henry Fomukong, Medical Doctor, Field Epidemiologist, District Medical Officer*
