# C Corporation

A **C corporation** is a separate legal and taxable entity. For REG, it is the classic corporate tax model: the corporation pays tax on its income, and shareholders may be taxed again when profits are distributed.

## Core legal and tax profile

- **Owners:** Shareholders.
- **Liability:** Shareholders generally have limited liability.
- **Federal return:** **Form 1120**.
- **Tax character:** Entity-level taxation with possible second-level shareholder taxation.

## Formation and capital structure

### Section 351 formation

When one or more persons transfer property to a corporation in exchange for stock and are in **control** immediately after the exchange, the transfer is generally tax free under **Section 351**.

### Basis rules

- Shareholder basis in stock generally starts with the basis of property transferred, adjusted for boot and other items.
- The corporation generally takes a **carryover basis** in property received.

### Capital structure

Corporations can issue different classes of stock and debt, which makes them useful when a business needs outside capital.

---

## Taxation of operations

### Corporate taxable income computation

The corporation computes taxable income separately and pays tax at corporate rates. The basic formula mirrors individual income computation but uses corporate-specific rules:

| Step | Description |
|------|-------------|
| Gross income | Revenue from sales, services, dividends, interest, rents, royalties, and other sources |
| Less: Cost of goods sold | Direct costs associated with producing revenue |
| **Gross profit** | |
| Less: Ordinary deductions | Compensation, rent, depreciation, repairs, bad debts, etc. |
| Less: Special deductions | Dividends-received deduction (DRD), NOL deduction |
| **Taxable income** | The amount subject to the corporate tax rate |

:::info[Accounting Method — Accrual Requirement]

C corporations with average annual **gross receipts exceeding \$31 million** (for tax years beginning in 2025) over the prior three-year period must use the **accrual method** of accounting. Smaller corporations may use either the cash or accrual method. The threshold is adjusted annually for inflation.

:::

### Compensation deductions

Compensation paid to employees is generally deductible if it is **reasonable in amount** and paid for services actually rendered.

**Key limitations:**

- **\$1 million cap on covered employees:** Under Section 162(m), a publicly traded C corporation cannot deduct compensation in excess of \$1 million per year for its **top five highest-compensated executives** (CEO, CFO, and three others). This limit applies to salary, bonuses, commissions, and nearly all other forms of remuneration.
- **Accrual-basis bonus timing:** An accrual-basis corporation may deduct a bonus in the year it is accrued only if the bonus is paid **within 2½ months** after the close of the tax year. If Bear Co. accrues a \$50,000 bonus for its VP on December 31, 2025, it must pay the bonus by **March 15, 2026** to deduct it in 2025.
- **Related-party payments:** Compensation owed to a related party (e.g., a controlling shareholder) by an accrual-basis corporation is not deductible until the year the related party **includes it in income** — effectively forcing cash-basis treatment for the deduction.

:::caution[Compensation vs. Dividends]

The IRS closely scrutinizes shareholder-employee compensation. If compensation is deemed unreasonably **high**, the excess is recharacterized as a nondeductible **dividend**. Conversely, if a corporation pays no salary and distributes all profits, the IRS may recharacterize distributions as compensation subject to payroll taxes.

:::

### Bad debts

For tax purposes, C corporations must use the **direct write-off method** — a deduction is allowed only when a specific receivable becomes **wholly or partially worthless**.

| Method | Tax | GAAP |
|--------|-----|------|
| Direct write-off | ✅ Required | ❌ Not acceptable |
| Allowance method | ❌ Not allowed | ✅ Required |

This difference is one of the most common book-to-tax adjustments on the exam.

**Example:** Gies Co. has \$200,000 in accounts receivable at year end. Under GAAP, Gies estimates \$12,000 of allowance for doubtful accounts. For tax, Gies can only deduct the specific receivable of \$3,500 from Acme Corp that was determined to be uncollectible during the year.

### Business interest expense limitation

Under **Section 163(j)**, the deduction for business interest expense is limited to:

$$
\text{Business Interest Deduction} = \text{Business Interest Income} + 30\% \times \text{Adjusted Taxable Income (ATI)}
$$

- **ATI** is roughly taxable income before interest, NOLs, and depreciation/amortization adjustments.
- Disallowed interest carries forward **indefinitely**.
- Small businesses with average annual gross receipts of **\$31 million or less** (2025 threshold) are exempt from this limitation.

**Example:** Kingfisher Industries has \$500,000 of business interest expense, \$20,000 of business interest income, and ATI of \$1,200,000. The deduction limit is \$20,000 + (30% × \$1,200,000) = **\$380,000**. The remaining \$120,000 is carried forward.

### Charitable contribution limits

A C corporation may deduct charitable contributions up to **10% of taxable income** computed **before** the charitable deduction, the DRD, NOL carryback, and capital loss carryback.

| Rule | Detail |
|------|--------|
| Limitation | 10% of modified taxable income |
| Carryforward | **5 years** (on a FIFO basis) |
| Carryback | Not allowed |
| Accrual-basis timing | Board may authorize in current year; payment must occur by **15th day of 4th month** of next year |

**Example:** MAS Inc. has taxable income of \$800,000 before charitable contributions and DRD. The maximum deduction is 10% × \$800,000 = **\$80,000**. If MAS donated \$95,000, only \$80,000 is deducted currently; the \$15,000 excess carries forward for up to five years.

:::tip[Accrual-Basis Timing Rule]

An accrual-basis C corporation can elect to deduct a charitable contribution in the year the **board of directors authorizes** the donation, as long as payment is made by the **15th day of the 4th month** following the close of the tax year (e.g., April 15 for a calendar-year corporation).

:::

### Business casualty losses

A C corporation can deduct **casualty and theft losses** related to business property. Unlike individuals, corporations are **not** subject to the \$100 floor or the 10%-of-AGI threshold. Business casualty losses are deductible as ordinary losses.

If insurance proceeds exceed the adjusted basis of the destroyed property, the corporation recognizes a gain but may defer it under **Section 1033** (involuntary conversion) if replacement property is acquired within the required period.

### Organizational expenditures and start-up costs

A corporation may **immediately expense** up to **\$5,000** of organizational expenditures in the year the corporation begins business, with the remainder amortized over **180 months** (15 years).

The \$5,000 immediate deduction is **reduced dollar-for-dollar** when total organizational expenditures exceed **\$50,000**.

| Cost Type | Examples | Immediate Deduction | Amortization |
|-----------|----------|-------------------|--------------|
| Organizational | Legal fees for charter, state filing fees, temporary directors' fees | Up to \$5,000 | 180 months |
| Start-up costs | Market surveys, advertising before opening, training employees | Up to \$5,000 | 180 months |

:::note

Costs of issuing stock (e.g., commissions, printing stock certificates) are **not** organizational expenditures. They reduce paid-in capital and are never deductible.

:::

**Example:** Illini Entertainment incorporates and incurs \$4,200 in organizational expenditures and \$48,000 in start-up costs. In year one, it deducts \$4,200 of organizational expenditures immediately (under the \$5,000 limit). For start-up costs, it deducts \$5,000 immediately and amortizes the remaining \$43,000 over 180 months.

### Capital gains and losses

C corporations follow unique capital gain and loss rules:

| Rule | C Corporation Treatment |
|------|------------------------|
| Capital gains rate | Taxed at **ordinary corporate rates** (no preferential rate) |
| Net capital loss deduction | **Cannot** offset ordinary income (no \$3,000 deduction) |
| Capital loss carryback | **3 years** |
| Capital loss carryforward | **5 years** |
| Character on carryback/forward | Always carried as **short-term** capital loss |

**Example:** Bear Co. has \$600,000 of ordinary income and a \$45,000 net capital loss in 2025. Bear Co. cannot deduct any of the capital loss against ordinary income. It must carry the loss back 3 years or forward up to 5 years to offset capital gains in those years.

:::caution

Unlike individuals, C corporations receive **no preferential tax rate** on long-term capital gains — all capital gains are taxed at the flat 21% corporate rate.

:::

### Inventory valuation methods

C corporations with inventory must account for it using an acceptable method:

- **FIFO** (First-In, First-Out)
- **LIFO** (Last-In, First-Out) — if used for tax, must also be used for **financial reporting** (LIFO conformity rule)
- **Weighted average cost**
- **Specific identification**

Inventory must be valued at the **lower of cost or market** (LCM) under FIFO, or simply at **cost** under LIFO.

### Dividends-Received Deduction (DRD)

When a C corporation receives dividends from another domestic C corporation, it may claim a **dividends-received deduction** to mitigate triple taxation. The percentage depends on the ownership level:

| Ownership Percentage | DRD Percentage |
|---------------------|---------------|
| Less than 20% | **50%** |
| 20% to less than 80% | **65%** |
| 80% or more (affiliated group) | **100%** |

**Taxable income limitation:** The 50% and 65% DRD cannot exceed the same percentage of **taxable income** computed without the DRD, NOL deduction, and capital loss carryback. However, this limitation **does not apply** if taking the full DRD creates or increases a **net operating loss**.

**Example — DRD computation:**

Gies Co. owns 25% of MAS Inc. stock and receives \$100,000 in dividends. Gies Co.'s taxable income before the DRD is \$140,000.

| Step | Amount |
|------|--------|
| Dividend income received | \$100,000 |
| DRD percentage (20%–80% ownership) | 65% |
| Tentative DRD | \$65,000 |
| Taxable income limitation: 65% × \$140,000 | \$91,000 |
| DRD allowed (lesser of tentative or TI limit) | **\$65,000** |

Since \$65,000 < \$91,000, the full \$65,000 DRD is allowed.

:::info[NOL Exception]

If applying the full DRD would create or increase an NOL, the taxable income limitation is **disregarded** and the corporation takes the full DRD. This exception is commonly tested.

:::

---

## Book-to-tax differences

Because GAAP and tax rules differ, corporations must reconcile **book income** (per financial statements) to **taxable income**. Differences fall into two categories:

### Temporary differences

These reverse over time and create **deferred tax assets** or **deferred tax liabilities**.

| Item | Book Treatment | Tax Treatment |
|------|---------------|---------------|
| Depreciation | Straight-line (typically) | MACRS (accelerated) |
| Bad debts | Allowance method | Direct write-off |
| Prepaid income | Deferred on books | Often taxable when received |
| Warranty expense | Accrued when estimated | Deductible when paid |
| Installment sales | Full gain at sale | Gain as payments received |

### Permanent differences

These **never** reverse and create no deferred tax effect.

| Item | Explanation |
|------|-------------|
| Tax-exempt municipal bond interest | Included in book income, excluded from taxable income |
| Federal income tax expense | Deducted on books, **never** deductible for tax |
| Life insurance premiums (corp is beneficiary) | Deducted on books, not deductible for tax |
| Life insurance proceeds | Not taxable, but included in book income |
| Meals (50% limit) | Full deduction on books, only 50% for tax |
| Penalties and fines | Deducted on books, **never** deductible for tax |

### Schedule M-1 and Schedule M-3

- **Schedule M-1** reconciles book income to taxable income for corporations with total assets **under \$10 million**.
- **Schedule M-3** is required for corporations with total assets of **\$10 million or more** and provides a more detailed reconciliation with separate columns for temporary and permanent differences.

:::tip[Schedule M-1 Shortcut]

Start with **book income**, then:
- **Add back** items deducted on books but not on the return (e.g., federal tax expense, excess capital losses, 50% of meals)
- **Add back** income reported on the return but not on books (e.g., prepaid income received)
- **Subtract** income on books not on the return (e.g., tax-exempt interest)
- **Subtract** deductions on the return not on books (e.g., excess tax depreciation)
= **Taxable income**

:::

---

## Tax computation

### The 21% flat rate

Since the Tax Cuts and Jobs Act (TCJA), C corporations pay a **flat 21%** federal income tax rate on taxable income. There are no graduated brackets.

$$
\text{Federal Tax} = \text{Taxable Income} \times 21\%
$$

**Example:** Kingfisher Industries has taxable income of \$2,000,000. Federal tax = \$2,000,000 × 21% = **\$420,000**.

### Estimated tax payments

A C corporation must make **quarterly estimated tax payments** if it expects to owe \$500 or more in tax. Payments are due on the **15th day of the 4th, 6th, 9th, and 12th months** of the tax year.

| Quarter | Due Date (Calendar Year) |
|---------|------------------------|
| 1st | April 15 |
| 2nd | June 15 |
| 3rd | September 15 |
| 4th | December 15 |

To avoid an underpayment penalty, the corporation generally must pay the **lesser of**:
- 100% of current-year tax liability, or
- 100% of prior-year tax liability (not available for **large corporations** after the first installment)

:::note[Large Corporation Rule]

A **large corporation** (taxable income ≥ \$1 million in any of the three preceding years) may use the prior-year safe harbor only for the **first installment**. The remaining three installments must be based on the current-year liability.

:::

### Tax credits

C corporations may reduce their tax liability with various credits:

| Credit | Description |
|--------|-------------|
| **General Business Credit (GBC)** | An umbrella credit that includes the investment credit, work opportunity credit, low-income housing credit, and others. Subject to a limitation based on tax liability. |
| **Research & Development Credit** | 20% of qualified research expenditures exceeding a base amount (regular method), or 14% using the alternative simplified credit. |
| **Foreign Tax Credit** | Credit for income taxes paid to foreign governments, limited to the U.S. tax attributable to foreign-source income. Excess credits carry back 1 year and forward 10 years. |
| **Minimum Tax Credit** | Corporations that paid AMT in years before 2018 may have minimum tax credit carryforwards to offset regular tax. |

---

## Penalty taxes

### Accumulated earnings tax

The **accumulated earnings tax** discourages C corporations from retaining earnings beyond the reasonable needs of the business to help shareholders avoid dividend taxation.

| Feature | Detail |
|---------|--------|
| Tax rate | **20%** of accumulated taxable income |
| Exemption | First **\$250,000** of accumulated E&P (\$150,000 for personal service corporations) |
| Applies to | Corporations that accumulate earnings **beyond reasonable business needs** |
| Key defense | Specific, definite, and feasible plans for using the retained earnings |

**Example:** Illini Security is a C corporation with accumulated E&P of \$400,000 and no specific plans for using the excess funds. The IRS may assert the accumulated earnings tax on the amount exceeding \$250,000 — that is, on \$150,000, resulting in a potential tax of \$150,000 × 20% = **\$30,000**.

:::caution

The accumulated earnings tax is based on the **subjective** determination that the corporation is retaining earnings to avoid dividends. Corporations should document specific, definite, and feasible **business plans** for retained funds (e.g., expansion, debt retirement, working capital needs).

:::

### Personal holding company (PHC) tax

The PHC tax targets closely held corporations used primarily to hold passive investments.

**Two-part test — both must be met:**

1. **Ownership test:** More than **50%** of the corporation's outstanding stock is owned (directly or constructively) by **five or fewer individuals** at any time during the last half of the tax year.
2. **Income test:** At least **60%** of the corporation's **adjusted ordinary gross income** is **personal holding company income** (PHCI) — dividends, interest, rents (sometimes), royalties, and certain personal service income.

| Feature | Detail |
|---------|--------|
| Tax rate | **20%** of undistributed PHC income |
| Avoidance | Pay a **deficiency dividend** to eliminate or reduce the PHC tax |
| Common PHCI | Dividends, interest, rents (if < 50% of AOGI), royalties, personal service contract income |

---

## Net operating losses (NOLs)

The treatment of corporate NOLs depends on when the loss arose:

| Feature | Pre-2018 NOLs | Post-2017 NOLs |
|---------|--------------|----------------|
| Carryback | 2 years (general rule) | **No carryback** (with limited exceptions) |
| Carryforward | 20 years | **Indefinitely** |
| Limitation | Could offset **100%** of taxable income | Limited to **80%** of taxable income in the carryforward year |

**Example:** Bear Co. generates a \$500,000 NOL in 2025. In 2026, Bear Co. has taxable income of \$400,000 before the NOL deduction. The maximum NOL deduction in 2026 is 80% × \$400,000 = **\$320,000**. The remaining \$180,000 carries forward indefinitely.

:::info

The 80% limitation ensures that a profitable corporation always pays **some** tax in years when it uses post-2017 NOL carryforwards. This is a frequently tested concept.

:::

### Capital loss rules recap

Remember that C corporation capital losses follow different rules from individuals:

- **No deduction** against ordinary income
- Carryback **3 years**, carryforward **5 years**
- Always carried as **short-term** capital losses
- Must be used against **capital gains only**

---

## Deductible versus nondeductible payments

- **Reasonable compensation** paid to employee-shareholders is generally deductible by the corporation.
- **Dividends** are not deductible.

This distinction is a common REG issue because taxpayers may try to label dividends as compensation.

## Corporate distributions

A nonliquidating distribution follows a three-step pattern at the shareholder level:

1. Dividend income to the extent of current and accumulated **earnings and profits (E&P)**
2. Return of capital to the extent of stock basis
3. Capital gain for any excess

The corporation may also recognize gain when it distributes appreciated property.

## Liquidation and reorganization themes

### Liquidation

- The corporation may recognize gain or loss on property distributed in complete liquidation.
- Shareholders generally treat liquidating distributions as payment in exchange for their stock.

### Reorganizations

Some reorganizations can qualify for nonrecognition treatment if statutory requirements are met, but REG usually focuses on the broad idea that not every restructuring creates immediate tax.

## When businesses choose a C corporation

C corporations are often preferred when a business needs:

- Multiple classes of equity
- Institutional or venture capital investors
- Easier retention of earnings inside the entity
- The possibility of **qualified small business stock (QSBS)** treatment if requirements are met

## Advantages and disadvantages

| Topic | C Corporation |
| --- | --- |
| Liability protection | Strong |
| Capital raising | Best among common entity forms |
| Tax regime | Entity-level tax plus possible dividend tax |
| Loss use | Losses stay with the corporation |
| Ownership flexibility | Broadest flexibility |

## REG quick hits

- C corporations file Form 1120.
- The corporation is a separate taxpayer.
- Section 351 is central to formation questions.
- Dividends are not deductible; the DRD reduces triple taxation on intercorporate dividends.
- The flat corporate rate is **21%**.
- Charitable contributions are limited to **10%** of modified taxable income.
- Capital losses cannot offset ordinary income — carryback 3 years, carryforward 5 years.
- Post-2017 NOLs carry forward indefinitely but are limited to **80%** of taxable income.
- The accumulated earnings tax and PHC tax are penalty taxes on retained earnings and passive income.
- Distributions depend on E&P and shareholder stock basis.
- Liquidating distributions and reorganizations have their own corporate tax rules.
- Book-to-tax differences are reconciled on Schedule M-1 (small) or M-3 (large).

## Bottom line

A C corporation offers strong liability protection and the most financing flexibility, but that comes with entity-level taxation and possible double taxation. On REG, expect questions on formation, E&P, distributions, liquidation, the DRD, book-to-tax differences, NOL limitations, penalty taxes, and the difference between compensation and dividends.
