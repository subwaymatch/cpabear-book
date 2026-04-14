# Pass-Through Entity Reporting for Individuals

## Introduction

A significant portion of U.S. business income flows through **pass-through entities** — partnerships, S corporations, LLCs, and sole proprietorships — rather than being taxed at the entity level. Under the pass-through model, the entity itself generally pays no federal income tax; instead, income, deductions, gains, losses, and credits **pass through** to the owners and are reported on their individual returns. The key governing provisions include **IRC §701–§761** (partnerships), **IRC §1361–§1379** (S corporations), and **IRC §301.7701-3** (entity classification / disregarded entities).

Understanding how to read a **Schedule K-1** and correctly map each item to the appropriate schedule on **Form 1040** is a core skill tested on the CPA exam.

---

## Types of Pass-Through Entities

| Entity Type | Governing Form | Tax Filing | Owner Reporting |
|---|---|---|---|
| **Sole proprietorship** | Schedule C (Form 1040) | No separate entity return | Owner reports directly on Form 1040 |
| **Single-member LLC** (disregarded entity) | Schedule C (Form 1040) | No separate entity return | Treated as sole proprietorship |
| **Partnership** (including multi-member LLC) | Form 1065 | Informational return | Schedule K-1 (Form 1065) to each partner |
| **S corporation** | Form 1120-S | Informational return | Schedule K-1 (Form 1120-S) to each shareholder |

:::info

A **disregarded entity** (single-member LLC that has not elected corporate status) does not file its own return. All income and expenses are reported on the owner's Schedule C, just like a sole proprietorship.

:::
---

## Schedule K-1: Structure and Purpose

The K-1 is the bridge between the entity's tax return and the individual owner's Form 1040. Each owner receives a K-1 showing their **allocable share** of the entity's tax items.

### Why Items Are Separately Stated

Under **IRC §702(a)** (partnerships) and **IRC §1366(a)** (S corporations), items that could affect individual taxpayers differently must be **separately stated** so each owner can apply the correct treatment on their personal return.

> **Example:** BIF Partners earns \$200,000 of ordinary business income and \$30,000 of long-term capital gains. The capital gains are separately stated because they are taxed at preferential rates on the individual return, while ordinary income is taxed at regular rates.

### K-1 Overview

| K-1 Line Item Category | Examples |
|---|---|
| Ordinary business income (loss) | Net income from trade or business operations |
| Rental real estate income (loss) | Net rental income after depreciation |
| Interest income | Bank interest, bond interest |
| Dividend income | Ordinary and qualified dividends |
| Capital gains (losses) | Short-term and long-term |
| Section 1231 gains (losses) | Gains/losses on business property held > 1 year |
| Charitable contributions | Cash and noncash donations made by the entity |
| Section 179 deduction | Elected expensing of qualifying assets |
| Tax-exempt income | Municipal bond interest |
| Foreign taxes paid | Available for credit or deduction at owner level |
| Self-employment earnings (partnerships only) | Ordinary income subject to SE tax |
| Distributions | Cash and property distributions to owners |

---

## Reporting K-1 Items on Form 1040

Each separately stated item flows to the **specific** Form 1040 schedule that governs its tax treatment.

| K-1 Item | Form 1040 Schedule/Line |
|---|---|
| Ordinary business income (loss) | **Schedule E, Part II** |
| Rental income (loss) | **Schedule E, Part II** (passive activity rules apply) |
| Interest income | **Schedule B** |
| Dividend income (ordinary and qualified) | **Schedule B** |
| Short-term capital gains/losses | **Schedule D** (and Form 8949) |
| Long-term capital gains/losses | **Schedule D** (and Form 8949) |
| Section 1231 gains/losses | **Form 4797** → Schedule D |
| Charitable contributions | **Schedule A** (if itemizing) |
| Section 179 deduction | **Form 4562** → applicable schedule |
| Foreign tax credit | **Form 1116** |
| Tax-exempt interest | **Form 1040, Line 2a** (informational; not taxed) |
| Self-employment income | **Schedule SE** |

> **Example:** Illini Entertainment is organized as an S corporation. Shareholder Dana receives a K-1 showing \$80,000 ordinary business income, \$5,000 of qualified dividends, \$12,000 of charitable contributions, and a \$3,000 short-term capital loss. Dana reports the \$80,000 on Schedule E, the dividends on Schedule B, the charitable contributions on Schedule A, and the capital loss on Schedule D.

:::tip Exam Tip

**Tax-exempt income** from a pass-through entity retains its character on the individual return — it is not taxed but **does increase the owner's basis** in the entity. Watch for this on exam questions about basis adjustments.

:::
---

## Ordinary Business Income (Loss) vs. Separately Stated Items

| Category | Treatment at Entity Level | Treatment at Individual Level |
|---|---|---|
| **Ordinary business income** | Netted at entity level from regular operations | Flows to Schedule E; subject to passive activity rules |
| **Separately stated items** | Reported line-by-line on K-1 | Each item goes to its specific schedule; owner applies individual limitations |

### What Is *Not* Separately Stated

Items that have the same character for all taxpayers and do not require special treatment may be netted into **ordinary business income**. Common examples:
- Cost of goods sold
- Business operating expenses (rent, salaries, supplies)
- Depreciation (except Section 179, which is separately stated)

---

## Guaranteed Payments (Partnerships)

Under **IRC §707(c)**, a guaranteed payment is a payment to a partner for **services or use of capital** that is determined without regard to the partnership's income.

| Feature | Treatment |
|---|---|
| To the **partner** | Ordinary income; reported on Schedule E and **Schedule SE** |
| To the **partnership** | Deductible business expense (reduces ordinary income) |
| Timing | Included in the partner's income for the partner's tax year that includes the **end of the partnership's tax year** |

> **Example:** Bear Co. partner Jordan receives a \$60,000 guaranteed payment for management services from BIF Partners, which also allocates \$40,000 of ordinary income to Jordan. Jordan reports \$100,000 total on Schedule E (\$60,000 guaranteed + \$40,000 ordinary share) and owes self-employment tax on the full \$100,000.

:::warning

Guaranteed payments are subject to **self-employment tax** in full, regardless of the partner's participation level. This is a common exam trap — students often forget that guaranteed payments are always SE income.

:::
---

## Self-Employment Tax Implications

| Entity Type | SE Tax Treatment |
|---|---|
| **Sole proprietorship / disregarded entity** | All net profit on Schedule C is SE income |
| **Partnership — general partner** | Ordinary income + guaranteed payments = SE income |
| **Partnership — limited partner** | Only guaranteed payments for services are SE income (IRC §1402(a)(13)) |
| **S corporation** | S corp income is **not** SE income; however, shareholder-employees must take **reasonable compensation** (W-2 wages subject to payroll taxes) |

:::caution

The IRS closely scrutinizes S corporation shareholder-employees who pay themselves **unreasonably low** salaries to avoid payroll taxes. If challenged, the IRS can reclassify distributions as wages.

:::
---

## Disregarded Entities — Schedule C Reporting

A single-member LLC that has not elected to be taxed as a corporation is a **disregarded entity** under Reg. §301.7701-3. The owner reports all income and expenses on **Schedule C** (or Schedule E for rental activities).

| Item | Where Reported |
|---|---|
| Gross receipts | Schedule C, Line 1 |
| Cost of goods sold | Schedule C, Line 4 |
| Business expenses | Schedule C, Part II |
| Net profit (loss) | Schedule C, Line 31 → Form 1040, Schedule 1 |
| Self-employment tax | Schedule SE |

> **Example:** Gies Co. consultant Maria operates as a single-member LLC. She earns \$150,000 in consulting revenue and incurs \$30,000 in deductible expenses. Maria reports \$120,000 net profit on Schedule C and pays self-employment tax on this amount via Schedule SE.

---

## Timing: Entity Tax Year vs. Individual Tax Year

Partners and S corporation shareholders report their share of entity items in the **individual tax year in which the entity's tax year ends**.

| Entity Year End | Individual Reports Income In |
|---|---|
| December 31, 2024 | 2024 individual return |
| January 31, 2025 (fiscal year partnership) | 2025 individual return |

:::info

**Required tax years:** S corporations must use a calendar year. Partnerships generally must conform to the majority partners' tax year, but may elect a fiscal year under IRC §444 (limited to a 3-month deferral with a required payment).

:::
---

## Passive Activity Considerations

Income and losses from pass-through entities may be classified as **passive** or **nonpassive** at the individual level under **IRC §469**.

| Classification | Rule |
|---|---|
| **Passive** | Taxpayer does not materially participate in the activity |
| **Nonpassive** | Taxpayer materially participates (meets one of the 7 tests) |
| **Rental activity** | Generally passive regardless of participation (exceptions for real estate professionals) |

Passive losses can only offset **passive income**. See the [Loss Limitations](./loss-limitations.md) page for the complete passive activity loss rules and material participation tests.

> **Example:** MAS Inc. shareholder Taylor owns 30% of an S corporation but does not participate in its operations. Taylor's \$25,000 share of the S corp's ordinary loss is classified as a **passive loss** and can only offset Taylor's passive income from other sources.

---

## Summary

| Topic | Key Rule |
|---|---|
| **Pass-through taxation** | Entity does not pay tax; owners report their share on Form 1040 |
| **Schedule K-1** | Reports each owner's allocable share of income, deductions, credits |
| **Separately stated items** | Items that may receive different treatment at the individual level (capital gains, charitable contributions, etc.) |
| **Ordinary business income** | Netted at entity level from regular operations |
| **Guaranteed payments** | Ordinary income + SE tax to the partner; deduction for the partnership |
| **Disregarded entities** | Report on Schedule C (sole proprietorship treatment) |
| **SE tax** | Applies to sole proprietors, general partners; not to S corp flow-through income |
| **Timing** | Report in the individual year that includes the entity's year end |
| **Passive activities** | Material participation determines passive vs. nonpassive classification |
