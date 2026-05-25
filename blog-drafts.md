# FieldHealth Africa — Blog Drafts
# Fill in each post below. Separate posts with =====
# REMOVE "Thanks for reading FieldHealth Africa! Subscribe for free to receive new posts and support my work". IN TEXT BODY 
# U CAN MODIFY POST TO MAKE IT BETTER VISUALLY 
# When done, tell Claude and I'll split these into individual published post files.
# ─────────────────────────────────────────────────────────────────────────────

TITLE A pharmacy inventory workbook your facility can actually use
SUBTILTILE Free. Offline. 245 drugs pre-loaded. Built in a Mamfe DMO office, fixed openly in version 2.1.
TAG FieldHealth Africa
PUB DATE May 18, 2026

BODY Most pharmacy management software was designed for retail pharmacies in cities with stable electricity, dedicated IT staff, and monthly subscriptions of 30.000 FCFA to 180.000FCFA.

None of those conditions hold in the average African district health facility.

So I built a different kind of tool.

Thanks for reading FieldHealth Africa! Subscribe for free to receive new posts and support my work.

What this is
A complete pharmacy inventory management workbook for a single health facility. One Excel file. 18 sheets. 245 drugs pre-loaded with another 55 free slots. No internet. No installation. No subscription. No vendor lock-in.

It tracks every drug across all 12 months of the year, computes Average Monthly Consumption using a 3-month rolling average (the WHO standard), automatically calculates Minimum Stock, Maximum Stock, Security Stock, and Quantity to Order, colour-codes every drug as STOCKOUT / LOW STOCK / ADEQUATE / OVERSTOCK, and tracks every batch with its expiry date using FEFO (First Expiry First Out) discipline.




Why it beats traditional pharmacy apps
Cost. Traditional pharmacy software charges every month, every facility, forever. This workbook is free in our Free Library. After download, it is yours.

Offline. Most pharmacy SaaS tools assume always-on internet. This workbook is a file. It opens. It works whether the generator is running or not.

Transparent. Every calculation is a visible Excel formula. If the Director asks why a drug is flagged for reorder, the pharmacist can click the cell and show the math. No black boxes, no vendor lock-in.

Survives. No license server to phone home. No cloud sync to break. No ‘enable editing’ dialog that requires admin rights. It runs in Excel, LibreOffice, WPS, Google Sheets, and mobile spreadsheet apps.




What is in the package
- The workbook itself (FieldHealth_Pharmacy_Inventory_v2.1.xlsx)

- A 24-page user guide explaining setup, monthly routine, adding new drugs, sorting, batch tracking, troubleshooting, and the full v2.0 to v2.1 changelog

How to use it
1. Download both files below.

2. Open the workbook. Go to the Cover sheet. Type your facility name in the orange cell.

3. Open JAN_26. Review the pre-loaded drug list. Adjust prices or add your own drugs if needed.

4. Each month, fill in three columns: Stock Received, Quantity Sold, Cash Received. The workbook handles everything else.

5. Open the DASHBOARD sheet at month-end. Print it for review meetings.

Who this is for
DMOs, facility managers, district pharmacists, M&E officers, and anyone responsible for keeping a pharmacy stocked in a low-resource setting.

If that is you, the files are attached. Use them. Share them. Tell me what breaks.

Download and Share here

From data to decisions, in the field.

https://drhenrynzozone.substack.com/p/a-pharmacy-inventory-workbook-your

=====

---
title: ""
description: ""
pubDate: 2026-
tags: [""]
hasAffiliateLinks: false
substackUrl: ""
draft: true
---

<!-- POST BODY — write freely below -->



=====

TITLE I Built a Financial Management Tool as a District Medical Officer Because Nothing Adequate Existed for Cameroon
SUBTITLE By Dr. Nzozone Henry Fomukong | District Medical Officer, Mamfe Health District | Field Epidemiologist | Founder, Digital Health Africa
AFFILIATE/ TAGFieldHealth Africa
DATE May 12, 2026

BODY It was a Tuesday morning in Mamfe. I had a stack of paper registers on my desk, a calculator, and the uncomfortable knowledge that a Regional audit was coming in three weeks. I needed to verify that all decade Treasury deposits had been made correctly in one of the facilities under my jurisdiction, that the Quotes-Parts were properly calculated, that the Cost Recovery funds had not been overspent, and that the Solidarity Fund had been deposited at BISEC Bank. Six different verification streams. All manual. All prone to error.

That morning, I did what I always do when a problem does not have a good solution: I decided to build one.
“There was no digital tool that matched the specific regulatory framework governing health facility finances in Cameroon. So I built one from scratch, for my own use, in my own district.”

Thanks for reading! Subscribe for free to receive new posts and support my work.

The Problem Nobody Talks About
Every Category 3-5 health facility in Cameroon manages what are called Recettes Propres — Internally Generated Funds. These are revenues collected from patients for consultations, laboratory tests, deliveries, surgeries, ambulance services, pharmacy, imaging, and other services. According to Decree 2016/6447/PM and the General Public Accounting Regulations, these revenues must be distributed through a precise six-step formula: Cost Recovery funds are extracted first, then the remainder is split 30/70 between staff motivation (Quotes-Parts) and Treasury deposits (Recette Affectee), with 10% of each going to a Solidarity Fund.

Every decade — every ten days — the Net Recette Affectee must be deposited at the Treasury against a quittance. Every expenditure from Cost Recovery funds must comply with procurement thresholds under Decree 2018/366. All of this must be documented, reconciled, and reported monthly to the Regional Delegation of Public Health, and annually audited by the Inspection Generale des Finances.

In practice, the vast majority of facility accountants and registrars perform all of this manually. With paper registers, handwritten calculations, and a calculator. In a district like Mamfe — one of the most operationally complex in Cameroon, affected by years of sociopolitical crisis, with hard-to-reach communities, facility closures, and staff shortages — the margin for error is not a theoretical concern. It is a daily reality.

What I Built
The tool is a single HTML file. You double-click it. It opens in any browser. There is no installation, no server, no internet connection required. It works on a laptop with no connectivity in a health area three hours from the nearest town. The moment you enter a revenue figure, the entire six-step calculation runs automatically and displays every result simultaneously — from Cost Recovery to Net QP to the exact decade Treasury deposit expected.




It has twelve service tabs in the Registers module — one per revenue line — where you record the daily summary: total amount, number of patients, receipt number range. The Cash Journal mirrors how the registrar works at the office. The Treasury module calculates the expected Net RA for each decade from the actual revenues of those days only — not the monthly total divided by three, which is the calculation error I see most often in manual registers.




The triangulation engine is the part I am most proud of. It runs six simultaneous checks: service registers versus cash journal, calculated RA versus Treasury deposits, calculated QP versus amount distributed, Solidarity Fund versus BISEC deposit, Pharmacy CR versus pharmacy bank account, and available CR versus expenditures. Every discrepancy is flagged with the exact amount and an explanation. This is essentially what an IGF auditor does manually during an inspection. The tool does it automatically, in seconds, before the auditor arrives.

“The triangulation engine replicates what an IGF auditor does manually. It runs in seconds. Facility managers can self-audit before the inspection team arrives.”




Mamfe: Where This Tool Was Tested
Mamfe District Hospital was burned during the sociopolitical crisis. It reopened in March 2025. Kendem and Kajifu had zero vaccination coverage and zero functioning health facilities for four years. We have been rebuilding health systems in one of the most difficult environments I have ever worked in. When you are managing financial accountability in a district where the hospital was a ruin eighteen months ago and where community nurses are the only healthcare access for some populations, you do not have the luxury of waiting for someone else to build the tools you need.

Why I Am Sharing It
I am sharing this through Digital Health Africa because I believe the problem I was solving in Mamfe exists in every Category 3-5 facility in Cameroon — and in many health facilities across Francophone Africa where similar IGF regulatory frameworks apply. Financial mismanagement in health facilities is not always corruption. It is often manual error, inadequate tools, and the absence of real-time verification. This tool addresses all three.

It is free. It requires nothing. You download it, open it, enter your facility details, and begin. The French and English user guides are available alongside it. The calculation formula is transparent and verifiable. If you find an error, contact me. If it helps your facility, tell me. If you think it should be scaled nationally, let us talk about how to make that happen.

What Comes Next
This is version 2.0. If you are a DMO, facility director, regional health delegate, or institutional partner who would like to pilot this tool formally or contribute to a validation study, please reach out through Digital Health Africa.

Financial accountability is the foundation of health systems trust. When facility finances are transparent, auditable, and verifiable, the entire chain of accountability — from patient fee to Treasury deposit to national health budget — functions as it should. That is what this tool is designed to protect.



Generated Funds Financial Management Tool for Category 3-5 Health Facilities in Cameroon. Digital Health Africa; 2026. Version 2.0. Dr. Nzozone Henry Fomukong is a Field Epidemiologist and District Medical Officer of Mamfe Health District, South West Region, Cameroon. He has led health system recovery in two conflict-affected districts and has published seven peer-reviewed papers.

https://drhenrynzozone.substack.com/p/i-built-a-financial-management-tool
=====

I Built a Free Reproductive Health Data Quality and Performance Review Tool for DHIS2 Users
FieldHealth Africa
Apr 28, 2026

Routine reproductive health data is collected every month, but many health teams still struggle with one major problem:

How do we quickly turn DHIS2 data into useful feedback, facility-level data quality checks, performance interpretation, and corrective actions?

Thanks for reading! Subscribe for free to receive new posts and support my work.

To support this gap, I have developed the Reproductive Health Data Quality and Performance Review Tool v1.0.

This is an Excel-based tool designed for public health managers, reproductive health focal persons, M&E officers, DHIS2 users, district health teams, NGO staff, and program officers working with routine reproductive health data.

The tool works with one-month DHIS2 aggregate facility data exported from the Data Visualization app.

What the tool helps you do
The tool automatically supports review of:

Missing required values

Reporting status

Zero-only reporting

ANC1 and LLIN comparison

Deliveries and AMTSL comparison

Caesarean section rate

PNC <48h proxy

Family planning method-sum checks

New acceptor comparison

LARC analysis

Overall data quality score

Performance score and classification

Facility-level issue summaries

Corrective action prompts

Why I built it
In many low-resource health systems, the problem is not only data collection. The bigger challenge is converting routine data into action.

This tool is a practical attempt to make monthly reproductive health data review easier, faster, and more structured.

It is not meant to replace national DHIS2 validation rules, official program guidance, or supervisory judgment. It is a field-oriented review aid designed to help teams identify issues that require verification and follow-up.

Who can use it
This tool may be useful for:

District health managers

Reproductive health focal persons

M&E officers

DHIS2/data managers

NGO and project officers

Public health consultants

Health facility supervisors

Students and researchers learning routine health data review



The folder contains the tool, user guide, and feedback materials.

Feedback requested
This is version 1.0, so I am inviting colleagues to test it and provide feedback.

Please test it with one month of DHIS2 reproductive health aggregate facility data and share your observations.

Do not use or share patient-level confidential data.

Your feedback will help improve future versions of the tool.

Final note
This is part of a broader effort under Digital Health Africa to build practical, field-tested tools that help public health teams in low-resource settings use data better.

If you test the tool, I would be grateful to hear what worked, what failed, and what should be improved.
https://drhenrynzozone.substack.com/p/i-built-a-free-reproductive-health
=====

The Ultimate Google Sheets Task Tracker for Health Projects
FieldHealth Africa
Jul 03, 2025

Dear colleagues, leaders, and changemakers,

In response to repeated requests, I’m excited to officially release the Digital Health Task Tracker — a powerful Google Sheets template designed to help district health managers, NGO teams, and public health professionals plan, monitor, and execute health activities without expensive software.

Thanks for reading! Subscribe for free to receive new posts and support my work.

🧠 Why This Tool Matters
Managing a health project — especially in rural or under-resourced settings — often means juggling:

Dozens of activities and deadlines

Team responsibilities spread across health areas

Poor reporting tools

No visual dashboards to track progress in real time

I’ve been there. That’s why I built this.

✅ Fully automated task tracking logic
✅ Daily, weekly, and monthly views
✅ Visual progress dashboard
✅ Works offline or online
✅ No coding or formulas required — just fill and track

This sheet has supported work in Mamfe health districts in Cameroon — from immunization to HIV, surveillance to staffing.

💾 What You’ll Get
🔹 Instant copyable Google Sheet
🔹 Built-in sample data for testing
🔹 Color-coded logic: overdue, on track, completed
🔹 User instructions tab + walkthrough
🔹 BONUS: Comes with a PDF usage guide

👉 Click Subscribe to get immediate access to the full tracker.

🛠️ This is a one-time upgrade that supports the development of more tools like this for health workers across Africa.

⚠️ Usage Disclaimer
This task tracker is provided for informational and educational purposes only.
It is not a substitute for official health information systems, and the creator assumes no responsibility for outcomes related to its use or modification. Full disclaimer is included in the tool.

🌍 Let’s Build Smarter, Leaner Systems
If you're ready to simplify your workflow, eliminate chaos, and manage your projects like a digital leader — this tool is your next step.

✅ Subscribe to unlock the tracker For Download Here:
[https://docs.google.com/spreadsheets/d/1n0HAjMTZgF4i6Gq7PRYcvOUJJv25zlxymt9r4Aq1Da4/edit?usp=sharing]

Thank you for being part of this movement.
Dr. Nzozone Henry Fomukong
Founder, Digital Health Africa
https://drhenrynzozone.substack.com/p/the-ultimate-google-sheets-task-tracker



