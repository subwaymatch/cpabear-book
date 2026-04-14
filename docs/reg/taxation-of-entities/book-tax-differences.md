# Book-Tax Differences

## Introduction

Financial accounting income (book income) and taxable income are computed under different sets of rules — **GAAP** governs the books while the **Internal Revenue Code** governs the tax return. The resulting differences are reconciled on **Schedule M-1** or **Schedule M-3** of Form 1120. Understanding whether a difference is **permanent** or **temporary** is critical for both financial reporting (ASC 740) and the CPA exam REG section. The primary authorities are **IRC §§441–§530** (accounting methods), the specific Code sections creating each difference, and **Reg. §1.6011-4** (Schedule M-3 requirements).

---

## Schedule M-1 vs. Schedule M-3

### When Each Is Required

| Schedule | Requirement |
|---|---|
| **M-1** | C corporations with **total assets under \$10 million** at year end |
| **M-3** | C corporations with total assets of **\$10 million or more** (or filing a consolidated return) |

:::info

Schedule M-3 provides far more detail than M-1, breaking each reconciling item into **temporary** and **permanent** columns. The IRS uses M-3 to identify aggressive tax positions and improve audit selection.

:::
---

## Permanent Differences

Permanent differences are items that appear on the **books but never on the tax return** (or vice versa). They create a **permanent** divergence between book and taxable income and affect the **effective tax rate** but do **not** create deferred tax assets or liabilities.

| Permanent Difference | Book Treatment | Tax Treatment | M-1 Adjustment |
|---|---|---|---|
| **Tax-exempt interest** (municipal bonds) | Included in book income | **Excluded** from taxable income | Subtract from book income |
| **Life insurance premiums** (company is beneficiary) | Deducted as expense on books | **Not deductible** (IRC §264) | Add back to book income |
| **Life insurance proceeds** | Included in book income | **Excluded** from taxable income (IRC §101) | Subtract from book income |
| **Meals expense** (50% limitation) | 100% deducted on books | Only **50%** deductible (IRC §274) | Add back 50% |
| **Fines and penalties** | Deducted on books | **Not deductible** (IRC §162(f)) | Add back to book income |
| **Political contributions** | Deducted on books | **Not deductible** (IRC §162(e)) | Add back to book income |
| **Federal income tax expense** | Deducted on books | **Not deductible** (IRC §275) | Add back to book income |
| **Domestic production activities** | Not on books | Deduction on tax return (if applicable) | Subtract from book income |

> **Example:** Bear Co. reports \$500,000 of book income. Its books include \$10,000 of municipal bond interest income and \$20,000 of federal income tax expense. For the M-1 reconciliation, subtract \$10,000 (tax-exempt interest) and add \$20,000 (nondeductible federal income tax), yielding a \$10,000 net increase to arrive at taxable income.

:::tip Exam Tip

**Federal income tax expense** is the most commonly tested permanent difference. It is always deducted on the books but **never** deductible on the tax return.

:::
---

## Temporary Differences

Temporary differences arise when items are recognized in **different periods** for book and tax purposes. They reverse over time and create **deferred tax assets** (future deductible amounts) or **deferred tax liabilities** (future taxable amounts) under ASC 740.

### Common Temporary Differences

| Temporary Difference | Book Method | Tax Method | Taxable Income Effect in Current Year |
|---|---|---|---|
| **Depreciation** | Straight-line (book life) | MACRS (accelerated) | Tax depreciation > book → taxable income **lower** than book |
| **Bad debt expense** | Allowance method (estimated) | Direct write-off (actual) | Book expense > tax deduction → taxable income **higher** than book |
| **Warranty expense** | Accrued when sold (estimated) | Deducted when **paid** | Book expense > tax deduction → taxable income **higher** |
| **Prepaid income** | Deferred on books (earned over time) | Taxed when **received** (IRC §451) | Tax income > book income → taxable income **higher** |
| **Section 179 expensing** | Not available on books | Full deduction in year 1 | Tax deduction > book expense → taxable income **lower** |
| **Bonus depreciation** | Not available on books | 40% (2025), declining per TCJA | Tax deduction > book expense → taxable income **lower** |
| **Installment sales** | Full gain recognized at sale | Gain recognized as **payments received** (IRC §453) | Book income > tax income → taxable income **lower** |
| **NOL carryforward** | Not deducted on books (recognized as DTA) | Deducted on tax return (80% limit) | Reduces taxable income in carryforward year |
| **Organizational costs** | Expensed or amortized on books | \$5,000 deducted + remainder amortized over 180 months (IRC §248) | Timing difference |
| **Rent received in advance** | Recognized over lease term on books | Fully taxable when received | Tax income > book in Year 1; reverses later |

> **Example:** Kingfisher Industries purchases equipment for \$100,000. Book depreciation (straight-line, 10 years) = \$10,000/year. MACRS depreciation (7-year property) = \$14,290 in Year 1. The temporary difference in Year 1 is \$4,290, creating a **deferred tax liability** because taxable income is lower than book income now, but will be higher in the future when MACRS depreciation is less than book depreciation.

:::note

A helpful mnemonic: if tax depreciation is **higher** than book depreciation in the current year, taxable income is **lower** → a **deferred tax liability** exists (you will pay more tax in the future when the difference reverses).

:::
---

## Schedule M-1 Reconciliation Format

Schedule M-1 reconciles **book income to taxable income** in four steps:

$$
\text{Taxable Income} = \text{Book Income} + \text{Additions} - \text{Subtractions}
$$

| Direction | Category | Examples |
|---|---|---|
| **Add** | Expenses on books **not deductible** for tax | Federal income tax, fines, penalties, life insurance premiums, excess book depreciation |
| **Add** | Income on tax return **not on books** | Prepaid income taxable for tax but deferred on books |
| **Subtract** | Income on books **not taxable** | Tax-exempt interest, life insurance proceeds |
| **Subtract** | Deductions on tax return **not on books** | Excess tax depreciation (MACRS > book), Section 179 |

### M-1 Walkthrough Example

> **Gies Co.** reports the following for 2024:
>
> | Item | Amount |
> |---|---|
> | Net income per books (after tax) | \$400,000 |
> | Federal income tax expense | \$100,000 |
> | Tax-exempt interest income | \$15,000 |
> | Life insurance premiums (company is beneficiary) | \$8,000 |
> | Excess of MACRS over book depreciation | \$25,000 |
> | Fines and penalties | \$5,000 |
>
> **M-1 Reconciliation:**
>
> | | Amount |
> |---|---|
> | Net income per books | \$400,000 |
> | **Add:** Federal income tax expense | +\$100,000 |
> | **Add:** Life insurance premiums | +\$8,000 |
> | **Add:** Fines and penalties | +\$5,000 |
> | **Subtract:** Tax-exempt interest | −\$15,000 |
> | **Subtract:** Excess MACRS depreciation | −\$25,000 |
> | **Taxable income** | **\$473,000** |

:::caution

When the M-1 starts with net income per books **after** federal income tax, you must **add back** the federal income tax expense. Some questions give book income **before** tax — in that case, do **not** add it back. Read the question carefully.

:::
---

## Schedule M-3 Format

Schedule M-3 provides a three-column reconciliation for each line item:

| Column | Description |
|---|---|
| **Column (a)** | Amount per income statement (financial statements) |
| **Column (b)** | Temporary difference |
| **Column (c)** | Permanent difference |
| **Column (d)** | Amount per tax return |

The relationship: **Column (a) + Column (b) + Column (c) = Column (d)**

> **Example:** MAS Inc. has \$60,000 of depreciation expense on its income statement. MACRS depreciation is \$85,000. On M-3:
> - Column (a): \$60,000 (book depreciation)
> - Column (b): \$25,000 (temporary difference — additional tax depreciation)
> - Column (c): \$0 (no permanent difference)
> - Column (d): \$85,000 (tax depreciation)

---

## Reviewing a Trial Balance for Book-Tax Differences

When reviewing an entity's adjusted book trial balance, look for these common items that signal book-tax differences:

| Trial Balance Account | Likely Difference | Type |
|---|---|---|
| Depreciation expense | MACRS vs. straight-line | Temporary |
| Allowance for doubtful accounts | Allowance vs. direct write-off | Temporary |
| Warranty liability / expense | Accrual vs. payment | Temporary |
| Federal income tax expense | Nondeductible | Permanent |
| Tax-exempt interest income | Excluded from taxable income | Permanent |
| Meals expense | 50% nondeductible | Permanent |
| Life insurance (officer policies) | Premiums nondeductible; proceeds nontaxable | Permanent |
| Fines, penalties, or lobbying | Nondeductible | Permanent |
| Deferred revenue | May be taxable when received | Temporary |
| Accumulated depreciation | Compare book vs. tax basis of assets | Temporary |
| Capital loss carryforward | Limited to capital gains; carryforward 5 years for corps | Temporary |

> **Example:** Illini Entertainment's trial balance shows a \$50,000 allowance for doubtful accounts and \$12,000 in actual write-offs during the year. Book bad debt expense is the change in the allowance; the tax deduction is only the \$12,000 actually written off. The difference is **temporary** — it will reverse when the estimated accounts are ultimately written off.

:::warning

**Capital losses** for C corporations can only offset **capital gains** (no \$3,000 deduction against ordinary income like individuals). Unused capital losses carry back 3 years and forward 5 years. This creates a temporary difference when a corporation has a net capital loss.

:::
---

## Common Exam Traps

1. **Federal income tax expense**: Always a permanent difference — add it back.
2. **State income tax**: This **is** deductible for federal tax purposes (unlike federal income tax). Do **not** add it back.
3. **Officer life insurance**: Premiums are nondeductible (permanent), and proceeds are nontaxable (permanent). Both adjustments are needed.
4. **Depreciation**: In early years, MACRS usually exceeds book depreciation (subtract the excess). In later years, the relationship reverses.
5. **M-1 starting point**: Know whether the question gives book income before or after federal income tax.
6. **Installment sales**: Book recognizes the full gain; tax recognizes gain as cash is collected. The difference is temporary.

> **Example:** Illini Security's M-1 starts with net income per books of \$200,000 (after tax). A student who forgets to add back the \$50,000 federal income tax expense will understate taxable income by \$50,000. Always check the starting point.

---

## Summary

| Concept | Key Rule |
|---|---|
| **Permanent difference** | Never reverses; affects effective tax rate; no deferred tax effect |
| **Temporary difference** | Reverses over time; creates DTA or DTL under ASC 740 |
| **Schedule M-1** | Required for C corps with total assets < \$10 million |
| **Schedule M-3** | Required for C corps with total assets ≥ \$10 million |
| **M-1 formula** | Book income + additions − subtractions = taxable income |
| **Federal income tax** | Always permanent (nondeductible); most common exam item |
| **State income tax** | Deductible for federal tax — not a book-tax difference |
| **Depreciation** | Temporary difference (MACRS vs. book straight-line) |
| **Bad debts** | Temporary (allowance method vs. direct write-off) |
| **Tax-exempt interest** | Permanent (subtract from book income) |
| **Fines/penalties** | Permanent (add back to book income) |
| **Capital losses (corps)** | Offset capital gains only; carry back 3 / forward 5 years |
