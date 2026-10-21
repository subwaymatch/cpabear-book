# C Corporation

A **C corporation** is a separate legal and taxable entity. It pays tax on its own income at a flat 21% rate, and its shareholders are taxed again when profits are distributed as dividends. For REG, the core skill is computing a C corporation's taxable income: the deductions with special limits, the treatment of capital losses and NOLs, the dividends-received deduction, and the credits that reduce the tax. This chapter covers those computations first, then the tax, credits, and estimated payments, and closes with a brief look at distributions and other corporate topics that are tested mainly in TCP.

## Core legal and tax profile

- **Owners:** Shareholders, with no limit on number or type.
- **Liability:** Shareholders generally have limited liability.
- **Federal return:** **Form 1120**, due the 15th day of the 4th month after year end (April 15 for a calendar-year corporation).
- **Tax character:** Entity-level tax, with a second level of tax when shareholders receive dividends.

---

## Computing taxable income

### The basic formula

A corporation's taxable income follows the same broad pattern as an individual's, but with corporate rules for many items:

| Step | Description |
|------|-------------|
| Gross income | Sales, services, dividends, interest, rents, royalties, and gains |
| Less: Cost of goods sold | The cost of the goods sold during the year |
| **Gross profit** | |
| Less: Ordinary deductions | Compensation, rent, depreciation, repairs, bad debts, interest, taxes, charitable contributions, and so on |
| **Taxable income before special deductions** | |
| Less: Special deductions | The dividends-received deduction and the NOL deduction |
| **Taxable income** | Taxed at 21% |

A C corporation must use the **accrual method** unless it meets the small business **gross receipts test**: average annual gross receipts for the prior three years at or below a threshold that is indexed for inflation (\$32 million for 2026). Inventory may be valued using FIFO, LIFO, average cost, or specific identification. A corporation that uses LIFO for tax must also use it in its financial statements (the **LIFO conformity rule**).

### Compensation

Compensation is deductible if it is **reasonable** in amount and paid for services actually performed. Three limits are commonly tested:

- **Public company pay over \$1 million.** A publicly held corporation cannot deduct more than \$1,000,000 a year of pay to a **covered employee**: the CEO, the CFO, the three other highest-paid officers, and anyone who was a covered employee in any year after 2016. Starting in 2026, pay from every member of the corporation's controlled group counts toward the limit. For tax years beginning after 2026, the next five highest-paid employees are added; that change is expected to be eligible for testing starting July 1, 2027.
- **Accrued bonuses.** An accrual-method corporation may deduct a bonus accrued at year end only if it is paid within **2½ months** after the year ends. If Bear Co. accrues a \$50,000 bonus for a vice president on December 31, 2026, it must pay the bonus by **March 15, 2027** to deduct it for 2026.
- **Related parties.** An accrual-method corporation cannot deduct an amount owed to a related cash-method person, such as a shareholder who owns more than 50% of the stock, until the year that person includes it in income.

Compensation that the IRS finds **unreasonably high** for a shareholder-employee is recharacterized as a nondeductible **dividend**.

### Bad debts

For tax purposes, a corporation deducts a bad debt only when a specific receivable becomes **wholly or partially worthless** (the direct write-off method). The GAAP allowance method is not allowed for tax, which makes bad debts one of the most common book-tax differences.

> **Example:** Polar Co. has \$200,000 of accounts receivable at year end and records a \$12,000 allowance for doubtful accounts on its books. For tax, it may deduct only the \$3,500 receivable from Den Corp. that it determined was uncollectible during the year.

### Business interest expense limitation

Under **Section 163(j)**, a corporation's deduction for business interest expense is limited to:

$$
\text{Deductible Business Interest} = \text{Business Interest Income} + 30\% \times \text{Adjusted Taxable Income (ATI)}
$$

**ATI** is taxable income computed **without** business interest expense and income, NOL deductions, and, for tax years beginning after 2024, **depreciation, amortization, and depletion**. In other words, ATI is roughly EBITDA. Interest disallowed in one year carries forward **indefinitely**. Corporations that meet the gross receipts test described above are exempt.

> **Example:** Panda Industries has \$500,000 of business interest expense, \$20,000 of business interest income, and ATI of \$1,200,000, computed before \$300,000 of depreciation. The limit is \$20,000 + (30% × \$1,200,000) = **\$380,000**, and the remaining \$120,000 carries forward. Because ATI is computed before depreciation, the \$300,000 of depreciation does not reduce the limit.

### Charitable contributions

A corporation may deduct charitable contributions up to **10%** of its taxable income computed **before** the charitable deduction, the dividends-received deduction, and any NOL or capital loss carryback. Beginning in 2026, OBBBA adds a **1% floor**: contributions are deductible only to the extent they exceed 1% of that same taxable income.

| Rule | Detail |
|------|--------|
| Floor | Contributions are deductible only above **1%** of modified taxable income (from 2026) |
| Cap | Total deductible contributions cannot exceed **10%** of modified taxable income |
| Carryforward | Contributions over the cap carry forward **5 years**. Amounts disallowed by the 1% floor carry forward only from a year in which the 10% cap was also exceeded |
| Carryback | Not allowed |
| Accrual-method timing | A contribution authorized by the board during the year may be deducted that year if it is paid by the **15th day of the 4th month** after year end |

> **Example:** In 2026, Kodiak Inc. has modified taxable income of \$800,000 and gives \$50,000 to charity. The floor is 1% × \$800,000 = \$8,000, and the cap is 10% × \$800,000 = \$80,000. Kodiak deducts \$50,000 - \$8,000 = **\$42,000**. Because its contributions did not exceed the cap, the \$8,000 below the floor does not carry forward; it is a permanent book-tax difference.

### Capital gains and losses

| Rule | C Corporation Treatment |
|------|------------------------|
| Rate on capital gains | Taxed at the regular **21%** rate; no preferential rate |
| Net capital loss | **Cannot** offset ordinary income (no \$3,000 allowance) |
| Carryback | **3 years** |
| Carryforward | **5 years** |
| Character when carried | Always a **short-term** capital loss |

> **Example:** Bear Co. has \$600,000 of ordinary income and a \$45,000 net capital loss in 2026. It cannot deduct any of the capital loss this year. It carries the loss back 3 years, then forward up to 5 years, to offset capital gains in those years.

### Dividends-received deduction

A corporation that receives dividends from a domestic corporation may deduct part of them, which keeps corporate profits from being taxed three or more times as they move between corporations. The percentage depends on the recipient's ownership:

| Ownership of the Paying Corporation | DRD |
|---------------------|---------------|
| Less than 20% | **50%** |
| 20% to less than 80% | **65%** |
| 80% or more (affiliated group) | **100%** |

**Taxable income limit.** The 50% and 65% deductions cannot exceed that same percentage of taxable income computed without the DRD, the NOL deduction, and any capital loss carryback. The limit does **not** apply if taking the full DRD creates or increases a net operating loss.

> **Example:** Polar Co. owns 25% of Kodiak Inc. and receives \$100,000 of dividends. Its taxable income before the DRD is \$140,000.
>
> | Step | Amount |
> |------|--------|
> | Dividends received | \$100,000 |
> | DRD percentage (20% to 80% ownership) | 65% |
> | Tentative DRD | \$65,000 |
> | Taxable income limit: 65% × \$140,000 | \$91,000 |
> | DRD allowed (the lesser) | **\$65,000** |
>
> If Polar Co.'s taxable income before the DRD were only \$80,000, the limit would be 65% × \$80,000 = \$52,000. A full \$65,000 DRD would still leave \$15,000 of taxable income, so the limit applies and the DRD is **\$52,000**. If its taxable income before the DRD were \$60,000 instead, a full \$65,000 DRD would create a \$5,000 NOL. The limit then does not apply, and Polar Co. deducts the full **\$65,000**.

### Organizational and start-up costs

A corporation may deduct up to **\$5,000** of organizational expenditures and, separately, up to **\$5,000** of start-up costs in the year it begins business. Each \$5,000 is reduced by the amount by which that category exceeds \$50,000, and the rest is amortized over **180 months**. The full rules are in [Determination of Basis](../property-transactions/determination-of-basis.md#organizational-and-start-up-costs). Costs of issuing stock, such as underwriting commissions, are neither: they reduce paid-in capital and are never deductible.

> **Example:** Salmon Entertainment Inc. incurs \$4,200 of organizational expenditures and \$48,000 of start-up costs before it opens. It deducts all \$4,200 of organizational expenditures in its first year. For start-up costs, it deducts \$5,000 and amortizes the remaining \$43,000 over 180 months.

### Business casualty losses

A corporation deducts casualty and theft losses on business property as ordinary losses, without the \$100 floor or the 10%-of-AGI limit that apply to an individual's personal losses. If insurance proceeds exceed the property's adjusted basis, the resulting gain may be deferred by buying replacement property under the involuntary conversion rules.

### Net operating losses

| Feature | NOLs Arising Before 2018 | NOLs Arising After 2017 |
|---------|--------------|----------------|
| Carryback | 2 years | **None** (with narrow exceptions) |
| Carryforward | 20 years | **Indefinite** |
| Limit when used | 100% of taxable income | **80%** of taxable income (before the NOL deduction) |

> **Example:** Bear Co. has a \$500,000 NOL in 2025. In 2026, its taxable income before the NOL deduction is \$400,000. It may deduct 80% × \$400,000 = **\$320,000**, leaving taxable income of \$80,000, and carries the remaining \$180,000 forward indefinitely.

The 80% limit means a corporation using post-2017 NOLs still pays some tax in a profitable year. OBBBA did not change the NOL rules.

### Book-to-tax differences

Because GAAP and the tax law differ, a corporation reconciles book income to taxable income on Schedule M-1 or M-3. Permanent and temporary differences, the reconciliation formats, and trial balance review are covered in [Book-Tax Differences](./book-tax-differences.md).

---

## Tax computation

### The 21% flat rate

C corporations pay a **flat 21%** federal income tax on taxable income, with no graduated brackets. The rate was set by the Tax Cuts and Jobs Act and was not changed by OBBBA.

$$
\text{Federal Tax} = \text{Taxable Income} \times 21\%
$$

> **Example:** Panda Industries has taxable income of \$2,000,000. Its federal income tax is \$2,000,000 × 21% = **\$420,000**.

### Tax credits

Credits reduce the tax dollar for dollar:

| Credit | Description |
|--------|-------------|
| **General business credit** | An umbrella for many business credits, such as the research credit, the work opportunity credit, the low-income housing credit, and the employer credits for child care and paid family leave. Limited each year based on tax liability; unused credits carry back 1 year and forward 20 |
| **Research credit** | 20% of qualified research expenses above a base amount, or 14% under the alternative simplified method |
| **Foreign tax credit** | Credit for foreign income taxes, limited to the U.S. tax on foreign-source income; excess credits carry back 1 year and forward 10 |

### Estimated tax payments

A corporation that expects to owe **\$500 or more** of tax must pay estimated tax in four installments, due on the 15th day of the **4th, 6th, 9th, and 12th months** of the tax year (April 15, June 15, September 15, and December 15 for a calendar-year corporation).

To avoid an underpayment penalty, each installment must be at least 25% of the **lesser** of:

- 100% of the **current year's** tax, or
- 100% of the **prior year's** tax, if the prior year was a full 12-month year with a positive tax liability

A **large corporation**, one with taxable income of \$1 million or more in any of the three preceding years, may use the prior-year amount only for its **first** installment. Its remaining installments must be based on the current year's tax.

---

## Other corporate topics

### Distributions

A nonliquidating distribution to shareholders is taxed in three tiers:

1. **Dividend** to the extent of the corporation's current and accumulated **earnings and profits (E&P)**
2. **Return of capital**, tax-free, to the extent of the shareholder's stock basis
3. **Capital gain** for any excess

Dividends are not deductible by the corporation, which is the source of double taxation. A corporation that distributes appreciated property also recognizes gain as if it had sold the property. Property distributions, E&P computations, liquidations, and reorganizations are tested in TCP and covered in [Formation and Liquidation](../../tcp/entity-tax-planning/formation-and-liquidation.md).

### Formation

When one or more persons transfer property to a corporation for its stock and together **control** it (own at least 80%) immediately afterward, no gain or loss is generally recognized under **Section 351**. The shareholders take a basis in their stock equal to the basis of the property transferred, adjusted for any boot, and the corporation takes a carryover basis in the property.

### Penalty taxes

Two corporate penalty taxes exist mainly to stop shareholders from using a corporation to avoid dividend tax: the **accumulated earnings tax**, a 20% tax on earnings kept beyond the reasonable needs of the business, and the **personal holding company tax**, a 20% tax on the undistributed passive income of a closely held corporation. Neither is named in the 2027 REG blueprint, so recognizing what each targets is enough.

### Choosing a C corporation

Businesses often choose a C corporation when they need several classes of stock, plan to raise money from institutional or venture investors, want to reinvest earnings at the 21% rate, or want shareholders to qualify for the exclusion of gain on **qualified small business stock** (see [Gains and Losses](../property-transactions/gains-and-losses.md#rates)). The cost is the second layer of tax on distributed profits, and losses stay inside the corporation rather than passing through to the owners.

---

## REG quick hits

- C corporations file Form 1120 and pay a flat **21%** tax.
- The 163(j) limit is business interest income plus **30% of ATI**, and ATI is computed before depreciation, amortization, and depletion.
- Charitable contributions are deductible only above a **1% floor** (from 2026) and up to a **10% cap** of modified taxable income; excess over the cap carries forward 5 years.
- Capital losses offset only capital gains; they carry back 3 years and forward 5 years as short-term losses.
- The DRD is 50%, 65%, or 100%, subject to a taxable income limit that does not apply when the full DRD creates or increases an NOL.
- Post-2017 NOLs carry forward indefinitely but are limited to **80%** of taxable income.
- Accrued bonuses must be paid within 2½ months of year end to be deducted.
- Large corporations may use the prior-year estimated tax safe harbor only for the first installment.
- Book-to-tax differences are reconciled on Schedule M-1 (smaller corporations) or M-3 (assets of \$10 million or more).

## Bottom line

A C corporation offers strong liability protection and the most flexible way to raise capital, but its profits are taxed at the corporate level and again when distributed. On REG, expect to compute taxable income with its special limits (interest, charitable contributions, capital losses, NOLs, and the DRD), apply credits and the 21% rate, and reconcile book income to taxable income.
