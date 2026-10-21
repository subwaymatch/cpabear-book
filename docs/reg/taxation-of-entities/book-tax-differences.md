# Book-Tax Differences

## Introduction

A corporation keeps two sets of numbers. Its books follow **GAAP**, which aims to measure economic performance, while its tax return follows the **Internal Revenue Code**, which serves other goals, such as raising revenue and encouraging investment. The gap between **book income** and **taxable income** is reconciled on **Schedule M-1** or **Schedule M-3** of Form 1120. The REG blueprint asks you to classify each difference as **permanent** or **temporary**, compute the adjustments, and find them by reviewing a trial balance. This chapter explains the two kinds of differences, walks through the M-1 and M-3 formats, and finishes with a checklist for reviewing a trial balance and the traps the exam likes to set.

---

## Schedule M-1 or Schedule M-3?

| Schedule | Who Files It |
|---|---|
| **M-1** | Corporations with total assets of **less than \$10 million** at year end |
| **M-3** | Corporations with total assets of **\$10 million or more** |

A corporation with both total receipts and total assets under \$250,000 does not have to complete Schedule M-1. Schedule M-3 is far more detailed: it reconciles line by line and splits each difference into **temporary** and **permanent** parts, which helps the IRS spot issues for examination.

---

## Permanent Differences

A **permanent difference** is an item that is counted for book purposes but never for tax purposes, or the reverse. It never reverses. Permanent differences change the corporation's effective tax rate, but they do **not** create deferred tax assets or liabilities.

| Permanent Difference | Book Treatment | Tax Treatment | M-1 Adjustment |
|---|---|---|---|
| **Tax-exempt interest** (municipal bonds) | Income | Excluded | Subtract |
| **Life insurance premiums** when the corporation is the beneficiary | Expense | Not deductible (§264) | Add back |
| **Life insurance proceeds** | Income | Excluded (§101) | Subtract |
| **Business meals** | 100% expense | Generally 50% deductible (§274) | Add back the nondeductible 50% |
| **Entertainment** | Expense | Not deductible | Add back |
| **Employer-provided meals** at an on-site eating facility or for the employer's convenience, from 2026 | Expense | Not deductible, with limited exceptions | Add back |
| **Fines and penalties** paid to a government | Expense | Not deductible (§162(f)) | Add back |
| **Political contributions and lobbying** | Expense | Not deductible (§162(e)) | Add back |
| **Federal income tax expense** | Expense | Not deductible (§275) | Add back |

The **dividends-received deduction** is also a permanent difference. Because it is a special deduction taken after the line where Schedule M-1 ends, it does not appear in the M-1 reconciliation.

> **Example:** Bear Co. reports \$500,000 of book income after taxes. Its books include \$10,000 of municipal bond interest and \$20,000 of federal income tax expense. On Schedule M-1, Bear Co. subtracts the \$10,000 of tax-exempt interest and adds back the \$20,000 of federal income tax, a net increase of \$10,000, for taxable income of \$510,000 (before any other adjustments).

---

## Temporary Differences

A **temporary difference** arises when an item is recognized in **different years** for book and tax purposes. Over time, it reverses. Temporary differences create **deferred tax liabilities** (when taxable income is lower now and will be higher later) or **deferred tax assets** (when taxable income is higher now and will be lower later).

| Temporary Difference | Book Treatment | Tax Treatment | Effect on Taxable Income This Year |
|---|---|---|---|
| **Depreciation** | Straight-line over the useful life | MACRS, often with 100% bonus depreciation or Section 179 | Usually **lower** than book in early years |
| **Bad debts** | Allowance method (estimated expense) | Deducted only when specific accounts are written off | **Higher** than book while the allowance grows |
| **Warranty expense** | Accrued when products are sold | Deducted when costs are **paid** | **Higher** than book when accruals exceed payments |
| **Advance payments for goods or services** | Deferred and recognized as earned | Taxed when received, or deferred one year at most if the taxpayer elects | **Higher** than book in the year received |
| **Rent received in advance** | Recognized over the lease term | Taxable when received | **Higher** than book in the year received |
| **Installment sales** | Full gain at the time of sale | Gain recognized as payments are received (§453) | **Lower** than book in the year of sale |
| **Organizational and start-up costs** | Expensed when incurred | \$5,000 deducted, the rest amortized over 180 months | **Higher** than book in the first year |
| **Business interest over the §163(j) limit** | Expense | Disallowed now, carried forward indefinitely | **Higher** than book in the year disallowed |
| **Net capital loss** | Reduces book income | Not deductible this year; carried back 3 years and forward 5 | **Higher** than book in the loss year |
| **Charitable contributions over the 10% limit** | Expense | Carried forward 5 years | **Higher** than book in the year given |
| **NOL carryforward** | No book deduction | Deducted in later years, up to 80% of taxable income | **Lower** than book in the carryforward year |

Starting in 2026, a corporation may deduct charitable contributions only to the extent they exceed **1%** of taxable income, still subject to the 10% cap. The part below the 1% floor carries forward only from a year in which contributions also exceeded the 10% cap; otherwise it is lost, which makes it a **permanent** difference. The details are in [C Corporation](./c-corporation.md#charitable-contributions).

> **Example:** In 2026, Panda Industries buys equipment for \$100,000 and claims 100% bonus depreciation. For the books, it depreciates the equipment straight-line over 10 years, or \$10,000 a year (assume a full year). Tax depreciation of \$100,000 exceeds book depreciation by \$90,000, so taxable income is \$90,000 lower than book income this year. That temporary difference creates a **deferred tax liability**, which reverses over the next 9 years as Panda records \$10,000 of book depreciation each year with no tax depreciation left to claim.

When tax depreciation runs **ahead** of book depreciation, taxable income is lower now and will be higher later, so the corporation records a deferred tax liability.

---

## Schedule M-1 Format

Schedule M-1 starts with net income per books and arrives at taxable income before the NOL deduction and special deductions:

$$\text{Taxable Income} = \text{Book Income} + \text{Additions} - \text{Subtractions}$$

| Direction | Category | Examples |
|---|---|---|
| **Add** | Federal income tax expense | Current and deferred federal tax expense on the books |
| **Add** | Expenses on the books **not deductible** for tax | Fines, nondeductible meals, life insurance premiums, excess capital losses, book depreciation in excess of tax depreciation |
| **Add** | Income taxable **but not on the books** | Advance payments taxed when received |
| **Subtract** | Income on the books **not taxable** | Tax-exempt interest, life insurance proceeds |
| **Subtract** | Deductions on the return **not on the books** | Tax depreciation in excess of book depreciation |

### Walkthrough Example

> **Polar Co.** reports the following for 2026:
>
> | Item | Amount |
> |---|---|
> | Net income per books (after tax) | \$400,000 |
> | Federal income tax expense | \$100,000 |
> | Tax-exempt interest income | \$15,000 |
> | Life insurance premiums (Polar Co. is the beneficiary) | \$8,000 |
> | Excess of tax depreciation over book depreciation | \$25,000 |
> | Fines and penalties | \$5,000 |
>
> **Schedule M-1 reconciliation:**
>
> | | Amount |
> |---|---|
> | Net income per books | \$400,000 |
> | **Add:** Federal income tax expense | +\$100,000 |
> | **Add:** Life insurance premiums | +\$8,000 |
> | **Add:** Fines and penalties | +\$5,000 |
> | **Subtract:** Tax-exempt interest | -\$15,000 |
> | **Subtract:** Excess tax depreciation | -\$25,000 |
> | **Taxable income** | **\$473,000** |

:::caution

Schedule M-1 starts with net income per books **after** federal income tax, so federal income tax expense must be added back. Some exam questions give book income **before** tax instead; in that case, do not add it back. Always check the starting point.

:::

---

## Schedule M-3 Format

Schedule M-3 reconciles each line item using four columns:

| Column | Description |
|---|---|
| **(a)** | Income (loss) per the income statement |
| **(b)** | Temporary difference |
| **(c)** | Permanent difference |
| **(d)** | Income (loss) per the tax return |

Column (a) + Column (b) + Column (c) = Column (d).

> **Example:** Kodiak Inc. records \$60,000 of depreciation expense on its income statement, and its tax depreciation is \$85,000. On the depreciation line of Schedule M-3, it reports \$60,000 in column (a), \$25,000 in column (b) as a temporary difference, \$0 in column (c), and \$85,000 in column (d).

---

## Reviewing a Trial Balance for Book-Tax Differences

When you review an adjusted trial balance, certain accounts should prompt you to look for a difference:

| Trial Balance Account | What to Check | Type |
|---|---|---|
| Depreciation expense and accumulated depreciation | Book depreciation versus MACRS, bonus, and Section 179 | Temporary |
| Bad debt expense and allowance for doubtful accounts | Book expense versus actual write-offs | Temporary |
| Warranty expense and warranty liability | Accruals versus payments | Temporary |
| Deferred revenue | Whether advance payments were taxable when received | Temporary |
| Interest expense | Whether the §163(j) limit applies | Temporary |
| Charitable contributions | The 1% floor and 10% cap | Temporary or permanent |
| Capital gains and losses | Whether a net capital loss must be carried over | Temporary |
| Federal income tax expense | Not deductible | Permanent |
| Tax-exempt interest income | Not taxable | Permanent |
| Meals and entertainment | 50% or 0% deductible | Permanent |
| Officer life insurance | Premiums not deductible; proceeds not taxable | Permanent |
| Fines, penalties, political contributions, and lobbying | Not deductible | Permanent |

> **Example:** Salmon Entertainment's allowance for doubtful accounts was \$40,000 at the start of the year and \$50,000 at year end, and it wrote off \$12,000 of specific accounts during the year. Book bad debt expense is \$50,000 - \$40,000 + \$12,000 = \$22,000. The tax deduction is only the \$12,000 written off. Salmon adds back \$10,000 on Schedule M-1, a **temporary** difference that reverses when the remaining accounts are written off.

---

## Common Exam Traps

1. **Federal income tax expense** is always a permanent difference. Add it back when the starting point is after-tax book income.
2. **State income tax** is deductible for federal purposes. It is not a book-tax difference (unlike federal income tax).
3. **Officer life insurance** creates two permanent differences: premiums are not deductible, and proceeds are not taxable.
4. **Depreciation** usually reduces taxable income below book income in early years, especially with 100% bonus depreciation, and the relationship reverses later.
5. **Installment sales** create a temporary difference: the books recognize the full gain at once, while the return recognizes it as cash is collected.

> **Example:** Honey Security's Schedule M-1 starts with after-tax book income of \$200,000. A preparer who forgets to add back the \$50,000 of federal income tax expense understates taxable income by \$50,000.

---

## Summary

| Concept | Key Rule |
|---|---|
| **Permanent difference** | Never reverses; affects the effective tax rate; no deferred tax |
| **Temporary difference** | Reverses over time; creates a deferred tax asset or liability |
| **Schedule M-1** | Corporations with total assets under \$10 million |
| **Schedule M-3** | Corporations with total assets of \$10 million or more; splits temporary and permanent |
| **M-1 formula** | Book income + additions - subtractions = taxable income |
| **Federal income tax** | Permanent; added back |
| **State income tax** | Deductible; not a difference |
| **Depreciation** | Temporary; bonus depreciation makes it large in year 1 |
| **Bad debts** | Temporary; allowance method versus write-offs |
| **Charitable contributions** | Excess over 10% is temporary; amounts below the 1% floor can be permanent |
| **Capital losses (corporations)** | Offset capital gains only; carried back 3 years and forward 5 |
