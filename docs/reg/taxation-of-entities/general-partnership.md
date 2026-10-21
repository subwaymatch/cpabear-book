# General Partnership

A **general partnership** is an unincorporated business with two or more owners carrying on a trade or business for profit. Legally it is a separate entity in many respects, but for federal income tax it is a **pass-through**: the partnership files a return and pays no income tax, and the partners pay tax on their shares of its income whether or not any cash is distributed.

For REG, the partnership rules come down to three skills: computing ordinary business income and separately stated items, computing a partner's basis, and applying the limits on losses. This chapter covers formation, the Form 1065 computation, guaranteed payments, start-up costs, the QBI deduction, basis, losses, self-employment tax, and distributions. The same rules apply to limited partnerships and to LLCs taxed as partnerships.

## Core legal and tax profile

- **Owners:** Two or more general partners.
- **Liability:** Each general partner generally has **unlimited personal liability** for partnership obligations.
- **Federal return:** **Form 1065**, an information return; the partnership usually pays no federal income tax.
- **Tax character:** Items flow through to partners on **Schedule K-1**.

---

## Formation and basis rules

### Contributions to the partnership

When a partner contributes cash or property in exchange for a partnership interest, neither the partner nor the partnership generally recognizes gain or loss (§721).

### Outside basis

A partner's **outside basis** (tax basis in the partnership interest) starts with:

- Cash contributed
- Plus the adjusted basis of property contributed
- Plus the partner's share of partnership liabilities
- Minus any of the partner's own liabilities that the partnership assumes (the other partners' share of that debt is treated as a cash distribution to the contributing partner)

### Inside basis

The partnership's **inside basis** in contributed property is the partner's **carryover basis**, and the partner's holding period carries over as well.

These basis rules matter because outside basis decides how much loss a partner can deduct, whether a distribution is taxable, and the gain or loss when the partner sells the interest.

---

## Flow-through taxation

### How Form 1065 works

The partnership files **Form 1065** to report its income, deductions, gains, losses, and credits. Schedule K summarizes the partnership-level totals, and each partner receives a **Schedule K-1** showing his or her share. Each partner then reports those items on his or her own return.

:::info

Form 1065 is due by the **15th day of the 3rd month** after the end of the partnership's tax year (March 15 for a calendar-year partnership), one month earlier than an individual return, so partners have their K-1s in time. A six-month extension is available.

:::

### Ordinary business income vs. separately stated items

**Ordinary business income (loss)** is the net of items that every partner treats the same way: sales, cost of goods sold, operating expenses, guaranteed payments, and regular depreciation. These are netted on page 1 of Form 1065.

**Separately stated items** are reported individually because each partner may face different limits or rates:

| Category | Why It Is Separately Stated |
|----------|----------|
| Short-term and long-term capital gains and losses | Preferential rates; netted with the partner's other capital items |
| §1231 gains and losses | Netted with the partner's other §1231 items |
| Charitable contributions | Subject to the partner's own AGI limits |
| Interest and dividend income | Portfolio income; qualified dividends get preferential rates |
| Tax-exempt income | Excluded from income but increases basis |
| Rental real estate income and losses | Subject to passive activity rules at the partner level |
| §179 expense | Subject to dollar and business income limits at the partner level |
| Foreign taxes paid | Credit or deduction at the partner level |
| Investment interest expense | Limited to the partner's net investment income |
| Guaranteed payments and self-employment earnings | Used for the partner's SE tax |

> **Example:** Grizzly Partners, a general partnership with two equal partners, Jamie and Sarah, has \$200,000 of ordinary business income, \$30,000 of long-term capital gain, and \$10,000 of charitable contributions. Each partner's K-1 shows \$100,000 of ordinary income, \$15,000 of long-term capital gain, and \$5,000 of charitable contributions. The contributions are separately stated because each partner's deduction depends on his or her own AGI.

---

## Guaranteed payments

A **guaranteed payment** is a payment to a partner for services or for the use of capital, determined **without regard** to the partnership's income (§707(c)).

| Aspect | Treatment |
|--------|-----------|
| To the **partnership** | Deductible as an ordinary business expense (reduces ordinary income) |
| To the **receiving partner** | **Ordinary income**, whether or not the partnership has income |
| Self-employment tax | A payment for services is **subject to SE tax** |
| Timing | Included in the partner's tax year in which the partnership's tax year ends |

> **Example:** Marcus, a partner in Grizzly Partners, receives a \$60,000 guaranteed payment for management services. Grizzly Partners deducts the \$60,000. Marcus reports \$60,000 of ordinary income, and it is self-employment income to him, even if Grizzly Partners has a loss for the year.

:::tip[Guaranteed Payments vs. Distributions]

Guaranteed payments are compensation: deductible by the partnership and income to the partner. A **distribution** is a withdrawal of the partner's share of profits or capital: it is not deductible, is not separately taxed (the partner was already taxed on the income), and reduces outside basis. Expect a question that tests the difference.

:::

---

## Organizational and start-up costs

A partnership may **deduct up to \$5,000** of organizational expenditures in the year it begins business and **amortize the rest over 180 months**. The same rule applies separately to **start-up costs**. Each \$5,000 deduction is **reduced dollar for dollar** once that category's total costs exceed **\$50,000**. These amounts are fixed by statute.

| Cost Type | Examples | Treatment |
|-----------|----------|-----------|
| **Organizational** | Legal fees for drafting the partnership agreement, filing fees, accounting fees for setting up the books | Up to \$5,000 deducted; rest over 180 months |
| **Start-up** | Market research, advertising before operations begin, training employees | Up to \$5,000 deducted; rest over 180 months |
| **Syndication** | Commissions and fees for selling partnership interests | **Never deductible or amortizable** (capitalized) |

> **Example:** Grizzly Partners incurs \$3,500 of organizational costs and \$52,000 of start-up costs. It deducts all \$3,500 of organizational costs. For start-up costs, the \$5,000 deduction is reduced by \$2,000 (\$52,000 - \$50,000), so it deducts \$3,000 and amortizes the remaining \$49,000 over 180 months.

---

## Qualified business income (QBI) deduction

Partners may claim the **§199A QBI deduction** of up to **20%** of the qualified business income that flows through from the partnership. The One Big Beautiful Bill Act (OBBBA, P.L. 119-21) made the deduction permanent. It is computed on each partner's own return, using QBI, W-2 wage, and property information from the K-1. A partner's **guaranteed payments are not QBI**.

For partners with taxable income above the threshold, the deduction can be limited by the W-2 wages the partnership paid, by the unadjusted basis of its qualified property, and by whether the business is a **specified service trade or business (SSTB)**. See [Adjustments and Deductions](../taxation-of-individuals/adjustments-and-deductions.md) for the full computation.

> **Example:** Jamie's share of Grizzly Partners' qualified business income is \$100,000, and her taxable income is below the threshold. Her QBI deduction is 20% × \$100,000 = **\$20,000** (assuming 20% of her taxable income is at least that much), claimed on her own return.

---

## Partner's tax basis (outside basis)

### The BASE mnemonic

:::tip[BASE: Memorize This]

| Letter | Component |
|--------|-----------|
| **B** | **Beginning** tax basis |
| **A** | **Add**: contributions, all income items (ordinary, separately stated, and tax-exempt), and any increase in the partner's share of partnership liabilities |
| **S** | **Subtract**: distributions, all losses and deductions, nondeductible expenses (for example, the disallowed 50% of meals, and penalties), and any decrease in the partner's share of partnership liabilities |
| **E** | **Ending** tax basis (never below zero) |

:::

A partner's share of **partnership liabilities**, recourse and nonrecourse, is part of basis. An increase in that share is treated as a cash contribution, and a decrease is treated as a **cash distribution**, which can trigger gain if it exceeds basis. This is the most important difference from an S corporation, where entity-level debt never adds to a shareholder's basis.

**Example: outside basis computation.** Sarah contributes \$40,000 of cash to Grizzly Partners for a 50% interest. The partnership borrows \$100,000 from a bank, and Sarah's share of that liability is \$50,000, so her initial outside basis is \$90,000. During the year, the partnership earns \$60,000 of ordinary income and \$10,000 of tax-exempt interest and distributes \$20,000 of cash to Sarah.

| Adjustment | Amount |
|-----------|--------|
| Beginning basis (\$40,000 cash + \$50,000 share of liabilities) | \$90,000 |
| + Share of ordinary income (50%) | \$30,000 |
| + Share of tax-exempt income (50%) | \$5,000 |
| - Cash distribution | (\$20,000) |
| **Ending outside basis** | **\$105,000** |

If the partnership later repays \$40,000 of the loan, Sarah's share of liabilities falls by \$20,000. That decrease is a deemed cash distribution that reduces her basis to \$85,000.

---

## Limits on deducting partnership losses

A partner can deduct passed-through losses only to the extent of **outside basis**. Losses above basis are **suspended** and carry forward indefinitely until the partner has more basis, from contributions, income allocations, or a larger share of liabilities.

:::warning[Losses Lost on Disposal]

Losses suspended for lack of basis are **lost** if the partner sells or otherwise disposes of the interest before restoring basis. They cannot be deducted on the final return.

:::

> **Example:** Jamie's outside basis in Grizzly Partners is \$15,000, and her share of the year's ordinary loss is \$22,000. She deducts \$15,000, reducing her basis to zero, and the remaining \$7,000 is suspended. If she sells her interest next year without restoring basis, the \$7,000 is never deductible.

A loss that passes the basis test must then clear the at-risk limit (§465), the passive activity limit (§469), and the excess business loss limit (§461(l)), in that order. See [Loss Limitations](../taxation-of-individuals/loss-limitations.md).

---

## Self-employment tax

A general partner's distributive share of ordinary business income is **self-employment income**, and so is any guaranteed payment for services. A **limited partner's** distributive share is generally not self-employment income, although guaranteed payments for services still are.

---

## LLCs taxed as partnerships

A domestic LLC with two or more members is taxed as a partnership by default. It follows every rule in this chapter (Form 1065, K-1s, basis, guaranteed payments, SE tax) while giving its members limited liability. See [Limited Liability Company](./limited-liability-company.md) for the classification rules.

---

## Distributions

### Nonliquidating (current) distributions

A current distribution is generally tax free. The partner recognizes gain only if **cash** distributed, including a deemed cash distribution from a decrease in the partner's share of liabilities, exceeds outside basis. Distributed property generally takes the partnership's basis, limited to the partner's remaining outside basis, and reduces outside basis by that amount.

### Liquidating distributions

A liquidating distribution ends the partner's interest. The partner's remaining outside basis is allocated to the assets received. A loss can be recognized only when the partner receives nothing but cash, unrealized receivables, and inventory, and the total is less than outside basis.

---

## Advantages and disadvantages

| Topic | General Partnership |
| --- | --- |
| Tax regime | Pass-through taxation |
| Formation | Flexible and easy to organize |
| Liability protection | None for general partners |
| Basis flexibility | Shares of partnership debt increase outside basis |
| Management | Partners can participate directly |

## REG quick hits

- Form 1065 is an information return, due **March 15** for a calendar-year partnership.
- Each partner receives a Schedule K-1 showing his or her share of every item.
- Use **BASE** to compute outside basis; it never goes below zero.
- A partner's share of partnership liabilities increases basis; a decrease is a deemed cash distribution.
- Losses above outside basis carry forward indefinitely but are **lost on disposal**.
- Guaranteed payments are deductible by the partnership, ordinary income to the partner, and SE income if for services.
- General partners pay SE tax on their share of business income; limited partners generally do not.
- Organizational and start-up costs: \$5,000 each deducted, rest over 180 months, reduced dollar for dollar above \$50,000. **Syndication costs are never deductible.**
- Partners claim the QBI deduction (up to 20%) on their own returns; guaranteed payments are not QBI.

## Bottom line

A general partnership combines pass-through taxation with management flexibility, at the cost of unlimited liability for the partners. On the exam, the recurring themes are separately stated items, guaranteed payments, basis (including liability shares), the loss limits, SE tax, and the treatment of distributions.
