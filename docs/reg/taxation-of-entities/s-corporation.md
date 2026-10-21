# S Corporation

An **S corporation** is a corporation that has elected to be taxed under **Subchapter S** of the Code. It is a corporation under state law, with limited liability for its shareholders, but for federal income tax it is generally a pass-through: its income, deductions, and credits flow to the shareholders, who pay the tax. In exchange, it must meet strict eligibility rules.

REG tests S corporations from start to finish: who can be a shareholder, how the election is made and lost, how ordinary income and separately stated items are computed, how the accumulated adjustments account works, and how stock and debt basis change each year. This chapter follows that order.

## Core legal and tax profile

- **Owners:** Shareholders.
- **Liability:** Shareholders generally have limited liability.
- **Federal return:** **Form 1120-S**.
- **Tax character:** Pass-through, with items reported to shareholders on **Schedule K-1**.

---

## Eligibility requirements

A corporation must meet **all** of these requirements, and keep meeting them, to be an S corporation:

| Requirement | Detail |
|-------------|--------|
| **Domestic corporation** | Organized under U.S. federal or state law |
| **Eligible shareholders only** | Individuals who are U.S. citizens or residents, estates, certain trusts (such as grantor trusts, qualified subchapter S trusts, and electing small business trusts), and certain tax-exempt organizations (§501(c)(3) charities and qualified retirement plan trusts). **No** partnerships, corporations, or nonresident aliens. |
| **No more than 100 shareholders** | Members of one family (a common ancestor and descendants, up to six generations, plus spouses) count as one shareholder |
| **One class of stock** | All outstanding shares carry identical rights to distributions and liquidation proceeds. Differences in **voting rights** alone are allowed. |
| **Not an ineligible corporation** | Not a bank using the reserve method for bad debts, an insurance company, or a DISC, among others |

:::info[One Class of Stock]

An S corporation may have voting and nonvoting common stock, because the economic rights are the same. Stock with a preferred right to dividends or liquidation proceeds creates a second class and ends the election. So can shareholder "loans" that are really equity, such as advances with no fixed repayment terms made in proportion to stock ownership.

:::

---

## Election process

### Filing Form 2553

The election is made on **Form 2553** (Election by a Small Business Corporation).

| Timing Rule | Detail |
|-------------|--------|
| **Effective for the current year** | File no later than **2 months and 15 days** after the start of the tax year (March 15 for a calendar-year corporation), or at any time during the preceding year |
| **New corporation** | The tax year starts on the earliest of the date it first has shareholders, acquires assets, or begins business, so the 2-month-and-15-day window runs from that date |
| **Late election** | Takes effect for the **following** tax year, unless the IRS grants relief for reasonable cause |

### Shareholder consent

**Every shareholder** who owns stock when the election is filed must consent. For an election filed during the year it is to take effect, anyone who owned stock earlier in that year and has since sold it must also consent; if any of them does not, or if the corporation was not eligible for the whole pre-election part of the year, the election starts the next year.

> **Example:** Sarah and Marcus each own 50% of Salmon Entertainment, a calendar-year C corporation. To be an S corporation for all of 2027, Salmon must file Form 2553 by **March 15, 2027**, and both Sarah and Marcus must consent.

---

## Termination of the election

An S election ends in one of three ways.

### 1. Voluntary revocation

Shareholders holding **more than 50%** of the shares (voting and nonvoting) consent to revoke.

| Revocation Filed | Effective Date |
|---------------------|----------------|
| On or before the **15th day of the 3rd month** of the year | Beginning of the **current** tax year |
| After that date | Beginning of the **following** tax year |
| With a **specific future date** designated | The designated date |

### 2. Ceasing to be eligible

If the corporation fails **any** eligibility requirement (for example, a nonresident alien or a partnership buys stock, or a 101st shareholder appears), the election ends on the **date of the disqualifying event**. The S corporation year ends the day before, and a C corporation year begins that day.

### 3. Excess passive investment income (former C corporations only)

If an S corporation has **accumulated earnings and profits (E&P)** from years when it was a C corporation, and its **passive investment income** (interest, dividends, rents, royalties, and similar income) exceeds **25%** of gross receipts for **three consecutive tax years**, the election ends at the start of the **fourth** year. A corporation that has always been an S corporation has no C corporation E&P and cannot lose its election this way.

### Short years and the 5-year wait

When an election ends mid-year, the year's income is split between the short S year and the short C year either **pro rata by day** (the default) or by an **actual closing of the books**, which requires the consent of every affected shareholder. After a termination or revocation, the corporation generally **cannot re-elect** S status for **five tax years** without IRS consent. The IRS can waive a termination that was inadvertent and promptly corrected.

---

## Ordinary business income and separately stated items

The S corporation computes its income much like a partnership. Items that need no special treatment at the shareholder level, such as sales, cost of goods sold, salaries (including shareholders' wages), and regular depreciation, are netted into **ordinary business income (loss)**. Items that can affect shareholders differently are **separately stated**:

| Category | Examples |
|----------|----------|
| Capital gains and losses | Short-term and long-term |
| §1231 gains and losses | Gains and losses on business property held more than 1 year |
| Charitable contributions | Subject to each shareholder's AGI limits |
| Portfolio income | Interest and dividends |
| Tax-exempt income | Municipal bond interest |
| Rental real estate income and losses | Subject to passive activity rules |
| §179 deduction | Subject to shareholder-level limits |
| Foreign taxes paid | Credit or deduction at the shareholder level |
| Investment interest expense | Subject to the investment interest limit |
| Nondeductible expenses | Penalties, the disallowed 50% of meals |

Each shareholder reports a **pro rata share** of each item, based on the percentage of stock owned and the number of days it was held during the year.

> **Example:** Polar Co., an S corporation with two equal shareholders, has \$300,000 of ordinary business income and \$40,000 of long-term capital gain. Each shareholder reports \$150,000 of ordinary income and \$20,000 of long-term capital gain.

An S corporation usually pays no federal income tax. The exceptions apply to former C corporations: a **built-in gains tax** on appreciation that existed at conversion and is recognized within five years, and a tax on **excess net passive income** when C corporation E&P remains.

### QBI deduction

Shareholders may claim the **§199A QBI deduction** of up to **20%** of the qualified business income that passes through, computed on their own returns. The One Big Beautiful Bill Act (OBBBA, P.L. 119-21) made the deduction permanent. **Reasonable compensation** paid to a shareholder-employee is wages, not QBI. See [Adjustments and Deductions](../taxation-of-individuals/adjustments-and-deductions.md) for the computation.

### Fringe benefits for more-than-2% shareholders

A shareholder who owns **more than 2%** of the stock is treated like a **partner** for fringe benefit purposes. Health insurance premiums the corporation pays for that shareholder are included in the shareholder's W-2 wages (and the shareholder may then deduct them as self-employed health insurance), and benefits such as group-term life insurance and on-premises meals and lodging are not tax free to that shareholder.

---

## Accumulated adjustments account (AAA)

The **accumulated adjustments account (AAA)** is a corporate-level account that tracks income the shareholders have already been taxed on but that the corporation has not yet distributed. It matters most when the corporation also has **accumulated E&P** from C corporation years, because it decides whether a distribution is tax free or a dividend.

### Computing AAA for the year

AAA starts at zero on the first day of the S election and is adjusted each year much like stock basis, with two key differences:

| Item | Stock Basis | AAA |
|---|---|---|
| Ordinary income and separately stated income | Increase | Increase |
| **Tax-exempt income** | Increase | **No effect** |
| Losses and deductions | Decrease (not below zero) | Decrease (**can go below zero**) |
| Nondeductible expenses | Decrease | Decrease (except those related to tax-exempt income) |
| Distributions | Decrease (not below zero) | Decrease, but **not below zero** |

> **Example:** Panda Industries, an S corporation that was once a C corporation, begins the year with AAA of \$40,000. During the year it has \$60,000 of ordinary income, \$5,000 of tax-exempt interest, and \$2,000 of nondeductible penalties, and it distributes \$30,000. Ending AAA is \$40,000 + \$60,000 - \$2,000 - \$30,000 = **\$68,000**. The tax-exempt interest increases the shareholders' stock basis but not AAA.

### Distribution ordering when accumulated E&P exists

| Priority | Source | Tax Treatment |
|----------|--------|--------------|
| 1st | **AAA** | Tax free to the extent of stock basis; reduces basis |
| 2nd | **Accumulated E&P** from C corporation years | **Dividend income**; does not reduce basis |
| 3rd | **Remaining stock basis** | Tax-free return of capital; reduces basis |
| 4th | **Excess** | **Capital gain** |

> **Example:** Bear Co. converted from a C corporation to an S corporation several years ago. It has AAA of \$60,000 and accumulated E&P of \$40,000, and it distributes \$120,000 to its sole shareholder, whose stock basis is \$100,000.
>
> - The first \$60,000 comes from AAA. It is tax free and reduces stock basis to \$40,000.
> - The next \$40,000 comes from accumulated E&P. It is a **dividend** and does not reduce basis.
> - The last \$20,000 is a tax-free return of capital that reduces stock basis to **\$20,000**.
>
> The shareholder has \$40,000 of dividend income and ends with \$20,000 of stock basis.

An S corporation with **no** accumulated E&P (one that has always been an S corporation, for example) skips the AAA layers: distributions are tax free up to stock basis, and any excess is capital gain.

---

## Shareholder basis

A shareholder's **stock basis** and **debt basis** decide whether distributions are taxable and how much loss the shareholder can deduct.

### Stock basis ordering

Stock basis starts with the amount paid for the stock (or the basis of property contributed for it) and is adjusted each year in this order:

| Step | Adjustment | Direction |
|------|-----------|-----------|
| 1 | Capital contributions and all income items (ordinary, separately stated, and tax-exempt) | **Increase** |
| 2 | Distributions | **Decrease** (not below zero) |
| 3 | Nondeductible, noncapital expenses (penalties, the disallowed 50% of meals) | **Decrease** (not below zero) |
| 4 | Losses and deductions | **Decrease** (not below zero) |

Because distributions come off **before** losses, a large distribution can use up basis and leave no room to deduct the year's losses.

> **Example:** Jamie owns 100% of Honey Security, an S corporation. Her stock basis at the start of the year is \$50,000. During the year, Honey Security has \$80,000 of ordinary business income, \$5,000 of tax-exempt interest, \$8,000 of charitable contributions, and \$2,000 of nondeductible expenses, and it distributes \$30,000 to her.

| Step | Amount |
|------|--------|
| Beginning stock basis | \$50,000 |
| + Ordinary income | \$80,000 |
| + Tax-exempt interest | \$5,000 |
| - Distribution | (\$30,000) |
| - Nondeductible expenses | (\$2,000) |
| - Charitable contributions | (\$8,000) |
| **Ending stock basis** | **\$95,000** |

### Debt basis

An S corporation shareholder gets **debt basis** only from **loans the shareholder makes directly to the corporation**. Debt the corporation owes to a bank or other third party never creates basis for a shareholder, **even if the shareholder guarantees it**.

| Source of Debt | Creates Shareholder Basis? |
|---------------|-----------------|
| Shareholder's direct loan to the S corporation | Yes |
| Bank loan to the corporation guaranteed by the shareholder | No |
| Other third-party loans to the corporation | No |

:::caution[S Corporation vs. Partnership Debt]

This is one of the most tested distinctions in REG. A **partner's** share of partnership liabilities increases outside basis. An **S corporation shareholder** gets basis only from his or her own direct loans to the corporation.

:::

### Losses limited to stock and debt basis

A shareholder can deduct passed-through losses only up to **stock basis plus debt basis**. Losses first reduce stock basis to zero and then reduce debt basis. Any excess is **suspended** and carries forward indefinitely, to be used when basis is restored. When debt basis has been reduced, later net income restores **debt basis first**, before it increases stock basis.

> **Example:** Marcus owns 100% of Cub Entertainment, an S corporation. His stock basis is \$10,000, and he has lent the corporation \$15,000, so his debt basis is \$15,000. Cub Entertainment passes through a \$35,000 ordinary loss. Marcus deducts **\$25,000** (his total basis), stock and debt basis both fall to zero, and the remaining **\$10,000** is suspended.

### Repayment of a shareholder loan with reduced basis

If the corporation repays a shareholder loan whose debt basis was reduced by losses, part of each repayment is **gain**. The gain is the repayment times the ratio of the gain built into the loan (face amount minus debt basis) to the face amount. The gain is capital if the loan is evidenced by a written note, and ordinary if it is an open account.

> **Example:** Continue with Marcus. The next year, before any income has restored his debt basis, Cub Entertainment repays \$6,000 of the \$15,000 loan, which is evidenced by a note. His debt basis is \$0, so the entire \$6,000 repayment is capital gain. If losses had reduced his debt basis only to \$5,000, the gain would be \$6,000 × (\$10,000 ÷ \$15,000) = \$4,000, and his debt basis would fall to \$5,000 - \$2,000 = \$3,000.

---

## Compensation issues

A shareholder who works for the S corporation must be paid **reasonable compensation** as W-2 wages before taking distributions. Wages are subject to payroll taxes, while distributions and flow-through income are not, so the IRS watches for owners who pay themselves too little. If it challenges a low salary successfully, it recharacterizes distributions as wages.

## When businesses choose an S corporation

An S corporation suits a closely held business that wants liability protection, pass-through taxation, and the payroll tax advantage over a sole proprietorship or partnership (only wages, not all income, bear employment taxes). It is a poor fit for owners who need more than one class of stock, more than 100 shareholders, or investors such as partnerships, corporations, or nonresident aliens.

## Advantages and disadvantages

| Topic | S Corporation |
| --- | --- |
| Liability protection | Strong |
| Tax regime | Pass-through taxation |
| Ownership restrictions | Significant |
| Capital raising | More limited than a C corporation |
| Exam focus | Eligibility, AAA, basis, distributions, and reasonable compensation |

## REG quick hits

- File Form 1120-S; generally no entity-level income tax.
- Eligibility: domestic corporation, no more than 100 eligible shareholders, one class of stock.
- Elect on **Form 2553** within 2 months and 15 days of the start of the year; **all shareholders** consent.
- The election ends by revocation (more than 50% of shares), by losing eligibility, or by excess passive income for 3 years with C corporation E&P.
- A **5-year wait** applies before re-electing.
- More-than-2% shareholders are treated as partners for fringe benefits.
- AAA ignores tax-exempt income and can go negative from losses, but not from distributions.
- With accumulated E&P, distributions come from AAA, then E&P (dividend), then remaining basis, then capital gain.
- Stock basis order: income, then distributions, then nondeductible expenses, then losses.
- Debt basis comes **only** from direct shareholder loans; guarantees do not count.
- Repayment of a loan with reduced debt basis produces gain.
- Shareholders claim the QBI deduction on their own returns; reasonable compensation is not QBI.

## Bottom line

An S corporation gives owners corporate liability protection without corporate-level income tax, but the election comes with strict eligibility limits. On REG, know the qualification and election rules, the termination triggers, the AAA computation and distribution ordering, the stock and debt basis rules (especially the direct-loan-only rule for debt basis), and the line between wages and distributions.
