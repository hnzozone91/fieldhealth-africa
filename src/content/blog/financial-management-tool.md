---
title: "I Built a Financial Management Tool as a District Medical Officer Because Nothing Adequate Existed for Cameroon"
description: "Every Category 3-5 health facility in Cameroon manages Recettes Propres manually, prone to error. I built an offline HTML tool that automates the six-step calculation and runs a six-way triangulation audit — before the IGF arrives."
pubDate: 2026-05-12
tags: ["free-library", "field-notes", "finance"]
hasAffiliateLinks: false
substackUrl: "https://drhenrynzozone.substack.com/p/i-built-a-financial-management-tool"
draft: false
---

It was a Tuesday morning in Mamfe. I had a stack of paper registers on my desk, a calculator, and the uncomfortable knowledge that a Regional audit was coming in three weeks. I needed to verify that all decade Treasury deposits had been made correctly in one of the facilities under my jurisdiction, that the Quotes-Parts were properly calculated, that the Cost Recovery funds had not been overspent, and that the Solidarity Fund had been deposited at BISEC Bank. Six different verification streams. All manual. All prone to error.

That morning, I did what I always do when a problem does not have a good solution: I decided to build one.

> There was no digital tool that matched the specific regulatory framework governing health facility finances in Cameroon. So I built one from scratch, for my own use, in my own district.

## The problem nobody talks about

Every Category 3–5 health facility in Cameroon manages what are called *Recettes Propres* — Internally Generated Funds. These are revenues collected from patients for consultations, laboratory tests, deliveries, surgeries, ambulance services, pharmacy, imaging, and other services. According to Decree 2016/6447/PM and the General Public Accounting Regulations, these revenues must be distributed through a precise six-step formula: Cost Recovery funds are extracted first, then the remainder is split 30/70 between staff motivation (Quotes-Parts) and Treasury deposits (Recette Affectée), with 10% of each going to a Solidarity Fund.

Every decade — every ten days — the Net Recette Affectée must be deposited at the Treasury against a quittance. Every expenditure from Cost Recovery funds must comply with procurement thresholds under Decree 2018/366. All of this must be documented, reconciled, and reported monthly to the Regional Delegation of Public Health, and annually audited by the Inspection Générale des Finances.

In practice, the vast majority of facility accountants and registrars perform all of this manually. With paper registers, handwritten calculations, and a calculator. In a district like Mamfe — one of the most operationally complex in Cameroon, affected by years of sociopolitical crisis, with hard-to-reach communities, facility closures, and staff shortages — the margin for error is not a theoretical concern. It is a daily reality.

## What I built

The tool is a single HTML file. You double-click it. It opens in any browser. There is no installation, no server, no internet connection required. It works on a laptop with no connectivity in a health area three hours from the nearest town. The moment you enter a revenue figure, the entire six-step calculation runs automatically and displays every result simultaneously — from Cost Recovery to Net QP to the exact decade Treasury deposit expected.

It has twelve service tabs in the **Registers** module — one per revenue line — where you record the daily summary: total amount, number of patients, receipt number range. The **Cash Journal** mirrors how the registrar works at the office. The **Treasury** module calculates the expected Net RA for each decade from the actual revenues of those days only — not the monthly total divided by three, which is the calculation error I see most often in manual registers.

![Financial management tool — registers and calculation interface](/images/blog/financial-management-tool/image%20(1).jpg)

The **triangulation engine** is the part I am most proud of. It runs six simultaneous checks:

- Service registers vs. cash journal
- Calculated RA vs. Treasury deposits
- Calculated QP vs. amount distributed
- Solidarity Fund vs. BISEC deposit
- Pharmacy CR vs. pharmacy bank account
- Available CR vs. expenditures

Every discrepancy is flagged with the exact amount and an explanation. This is essentially what an IGF auditor does manually during an inspection. The tool does it automatically, in seconds, before the auditor arrives.

> The triangulation engine replicates what an IGF auditor does manually. It runs in seconds. Facility managers can self-audit before the inspection team arrives.

## Mamfe: where this tool was tested

Mamfe District Hospital was burned during the sociopolitical crisis. It reopened in March 2025. Kendem and Kajifu had zero vaccination coverage and zero functioning health facilities for four years. We have been rebuilding health systems in one of the most difficult environments I have ever worked in.

When you are managing financial accountability in a district where the hospital was a ruin eighteen months ago and where community nurses are the only healthcare access for some populations, you do not have the luxury of waiting for someone else to build the tools you need.

## Why I am sharing it

I am sharing this through FieldHealth Africa because I believe the problem I was solving in Mamfe exists in every Category 3–5 facility in Cameroon — and in many health facilities across Francophone Africa where similar IGF regulatory frameworks apply.

Financial mismanagement in health facilities is not always corruption. It is often manual error, inadequate tools, and the absence of real-time verification. This tool addresses all three.

It is free. It requires nothing. You download it, open it, enter your facility details, and begin. French and English user guides are available alongside it. The calculation formula is transparent and verifiable. If you find an error, contact me. If it helps your facility, tell me. If you think it should be scaled nationally, let us talk about how to make that happen.

## What comes next

This is version 2.0. If you are a DMO, facility director, regional health delegate, or institutional partner who would like to pilot this tool formally or contribute to a validation study, please reach out.

Financial accountability is the foundation of health systems trust. When facility finances are transparent, auditable, and verifiable, the entire chain of accountability — from patient fee to Treasury deposit to national health budget — functions as it should. That is what this tool is designed to protect.

[Download free from the Free Library →](/free-library)
