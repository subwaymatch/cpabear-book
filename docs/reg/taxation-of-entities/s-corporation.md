# S Corporation

An **S corporation** is a corporation that makes a valid election to be taxed under **Subchapter S**. For REG, it blends corporate law with pass-through taxation, making it a favorite area for eligibility, basis, and distribution questions.

## Core legal and tax profile

- **Owners:** Shareholders.
- **Liability:** Shareholders generally have limited liability.
- **Federal return:** **Form 1120-S**.
- **Tax character:** Usually a pass-through entity with items reported to shareholders on **Schedule K-1**.

---

## Eligibility requirements

To qualify for S corporation status, the entity must satisfy **all** of the following requirements simultaneously:

| Requirement | Detail |
|-------------|--------|
| **Domestic corporation** | Must be organized under U.S. federal or state law |
| **Eligible shareholders only** | Individuals, estates, certain trusts, and certain tax-exempt organizations. **No** partnerships, C corporations, or nonresident aliens. |
| **Maximum 100 shareholders** | Members of one family (up to six generations) may elect to be treated as a single shareholder |
| **One class of stock** | All outstanding shares must confer identical rights to distribution and liquidation proceeds. Differences in **voting rights** alone are permitted. |
| **Not an ineligible corporation** | Cannot be a bank using the reserve method, an insurance company, a DISC, or certain other entities |

:::info One Class of Stock
An S corporation may issue both voting and nonvoting common stock — those are still treated as **one class** because the economic rights are identical. However, if one class of shares has a preferred distribution right, the corporation has two classes and fails the test.

**Debt that is reclassified as equity** (e.g., shareholder loans with excessive debt-to-equity ratios) can inadvertently create a second class of stock and terminate the election.
:::

---

## Election process

### Filing Form 2553

The S election is made by filing **Form 2553** (Election by a Small Business Corporation) with the IRS.

| Timing Rule | Detail |
|-------------|--------|
| **For an existing corporation** | File by the **15th day of the 3rd month** of the tax year (March 15 for calendar-year corporations) |
| **For a new corporation** | File within **2 months and 15 days** of the earliest of: (1) the beginning of the tax year, (2) the date the corporation first has shareholders, or (3) the date the corporation first has assets or begins business |
| **Late election** | If filed after the deadline, the election is effective for the **following** tax year (unless the IRS grants relief) |

### Shareholder consent

**All shareholders** who own stock on the day the election is filed must consent. If stock was transferred during the year the election is to be effective, both the **transferor and transferee** must consent.

**Example:** Sarah and Marcus each own 50% of Illini Entertainment, a calendar-year C corporation. To elect S status for 2025, they must file Form 2553 by **March 15, 2025**, and both must sign the consent.

---

## Termination of S election

An S election terminates under three circumstances:

### 1. Voluntary revocation

Shareholders holding more than **50%** of the shares (voting and nonvoting) must consent to revocation.

| Timing of Revocation | Effective Date |
|---------------------|----------------|
| Filed on or before the **15th day of the 3rd month** | Beginning of the **current** tax year |
| Filed after the 15th day of the 3rd month | Beginning of the **following** tax year |
| A **specific prospective date** is designated | The designated date |

### 2. Failure to meet eligibility requirements

If the corporation ceases to satisfy **any** eligibility requirement — for example, a nonresident alien acquires stock — the election terminates on the **day** the disqualifying event occurs. This creates a **short S year** ending the day before the event and a **short C year** beginning on the date of the event.

### 3. Passive investment income (former C corps only)

If an S corporation has **accumulated E&P** from C corporation years and its **passive investment income** exceeds **25%** of gross receipts for **three consecutive tax years**, the election terminates at the beginning of the **fourth** tax year.

:::caution
This passive income termination rule applies **only** to S corporations that have accumulated earnings and profits from a prior C corporation period. A corporation that has always been an S corporation (no C corp E&P) is not subject to this rule.
:::

### Short tax years and allocation methods

When the S election terminates mid-year, income must be allocated between the short S year and the short C year using one of two methods:

| Method | Description |
|--------|-------------|
| **Pro-rata (default)** | Annual income is allocated on a daily basis |
| **Specific accounting (closing of the books)** | Actual income is assigned to each short year based on when it was earned; requires **all affected shareholders** to consent |

### 5-year waiting period

After a termination or revocation, the corporation generally **cannot re-elect** S status for **five tax years** without IRS consent. The IRS may waive this period if the termination was inadvertent.

---

## Income and loss flow-through

### Ordinary business income

The S corporation computes its income much like an individual. Items that do not require separate treatment are combined into **ordinary business income (loss)** on Form 1120-S and flow through to shareholders on Schedule K-1.

### Separately stated items

Certain items must be **separately stated** because they may have different tax consequences at the shareholder level:

| Category | Examples |
|----------|----------|
| Capital gains and losses | Short-term and long-term |
| Section 1231 gains and losses | Gains/losses on business property held > 1 year |
| Charitable contributions | Pass through subject to shareholder-level limits |
| Interest income | Portfolio and tax-exempt |
| Dividend income | Qualified and nonqualified |
| Rental income and losses | Subject to passive activity rules |
| Section 179 deduction | Subject to shareholder-level limits |
| Foreign taxes paid | Eligible for foreign tax credit at shareholder level |
| Investment interest expense | Subject to the investment interest limitation |

Each shareholder reports their **pro-rata share** based on the percentage of stock owned and the number of days held during the year.

**Example:** Gies Co. is an S corporation with two equal shareholders. The corporation earns \$300,000 of ordinary business income and \$40,000 of long-term capital gain. Each shareholder reports \$150,000 of ordinary income and \$20,000 of LTCG on their individual return.

### Qualified Business Income (QBI) deduction

S corporation shareholders may be eligible for the **Section 199A QBI deduction** — up to **20%** of qualified business income passed through from the S corporation. The deduction is taken at the **shareholder level**, not on the S corporation return. It is subject to W-2 wage and property limitations for higher-income taxpayers.

### Fringe benefits for >2% shareholders

A shareholder who owns **more than 2%** of an S corporation's stock is treated like a **partner** for fringe benefit purposes. This means:

- Health insurance premiums paid by the corporation are included in the shareholder's **W-2 income** (but may be deductible as self-employed health insurance on the shareholder's Form 1040)
- Group-term life insurance, meals and lodging exclusions, and other employee fringe benefits are generally **not** available tax-free to >2% shareholders

:::tip
The >2% shareholder rule is a frequently tested distinction. Unlike employees, these shareholder-employees cannot receive tax-free fringe benefits from the corporation.
:::

---

## Shareholder basis computation

A shareholder's **stock basis** in an S corporation determines the tax treatment of distributions and the ability to deduct losses. Stock basis is adjusted annually:

### Stock basis ordering

| Step | Adjustment | Direction |
|------|-----------|-----------|
| 1 | Beginning stock basis | Starting point |
| 2 | Additional capital contributions | **Increase** |
| 3 | All income items (ordinary + separately stated) | **Increase** |
| 4 | Distributions | **Decrease** (but not below zero) |
| 5 | Nondeductible expenses (e.g., 50% of meals, penalties) | **Decrease** |
| 6 | Deductible losses and deductions | **Decrease** (but not below zero) |

:::info Ordering Matters
Distributions reduce basis **before** losses. This means a large distribution can reduce basis to zero, preventing the shareholder from deducting any passed-through losses in that year.
:::

**Example — Stock basis computation:**

Jamie owns 100% of Bear Co. (S corporation). At the start of the year, her stock basis is \$50,000. During the year:

| Item | Amount |
|------|--------|
| Ordinary business income | \$80,000 |
| Tax-exempt interest | \$5,000 |
| Cash distribution | \$30,000 |
| Charitable contributions (separately stated) | \$8,000 |
| Nondeductible expenses | \$2,000 |

**Basis calculation:**

| Step | Amount |
|------|--------|
| Beginning basis | \$50,000 |
| + Ordinary income | +\$80,000 |
| + Tax-exempt interest | +\$5,000 |
| − Distribution | −\$30,000 |
| − Nondeductible expenses | −\$2,000 |
| − Charitable contributions | −\$8,000 |
| **Ending stock basis** | **\$95,000** |

### Debt basis

Unlike partnerships, an S corporation shareholder gets debt basis **only** from **direct loans made by the shareholder to the corporation**. Entity-level debt (e.g., a bank loan to the corporation) does **not** increase a shareholder's debt basis — even if the shareholder personally guarantees the loan.

| Source of Debt | Increases Basis? |
|---------------|-----------------|
| Shareholder loans directly to the S corp | ✅ Yes |
| Bank loan guaranteed by shareholder | ❌ No |
| Third-party loans to the corporation | ❌ No |
| Entity-level mortgage | ❌ No |

:::caution S Corp vs. Partnership Debt Basis
This is one of the most important distinctions on the exam. In a **partnership**, a partner's share of entity-level liabilities increases outside basis. In an **S corporation**, only direct shareholder-to-entity loans count. Guarantees do **not** create debt basis for S corporation shareholders.
:::

### Tax basis limitation on losses

A shareholder can deduct passed-through losses only to the extent of their **combined stock basis and debt basis** (tax basis limitation).

$$
\text{Maximum Deductible Loss} = \text{Stock Basis} + \text{Debt Basis}
$$

Losses exceeding this limit are **suspended** and carried forward **indefinitely** until the shareholder obtains sufficient basis.

**Loss ordering:** Losses first reduce **stock basis** to zero, then reduce **debt basis** to zero.

**Basis restoration:** When debt basis has been reduced by losses, subsequent income first restores **debt basis** before increasing stock basis.

**Example:** Marcus owns 100% of Illini Security (S corp). His stock basis is \$10,000, and he has loaned the corporation \$15,000 (debt basis = \$15,000). The corporation passes through a \$35,000 ordinary loss.

| Step | Amount |
|------|--------|
| Total basis available | \$10,000 + \$15,000 = \$25,000 |
| Loss passed through | \$35,000 |
| Deductible loss | **\$25,000** (limited to basis) |
| Suspended loss | **\$10,000** (carried forward) |
| Ending stock basis | \$0 |
| Ending debt basis | \$0 |

---

## Accumulated Adjustments Account (AAA)

The **AAA** tracks the cumulative net income that has already been taxed to shareholders but not yet distributed. It is most important when the S corporation has **accumulated E&P** from prior C corporation years.

### Distribution ordering with accumulated E&P

When an S corporation has both AAA and accumulated C corporation E&P, distributions are applied in this order:

| Priority | Source | Tax Treatment |
|----------|--------|--------------|
| 1st | **AAA** | Tax-free return (reduces stock basis) |
| 2nd | **Accumulated E&P** (from C corp years) | Taxed as **dividend income** |
| 3rd | **Remaining stock basis** | Tax-free return of capital |
| 4th | **Excess** | **Capital gain** |

:::tip AAA Can Go Negative
Unlike stock basis, the AAA **can** be reduced below zero by losses and deductions. However, distributions cannot reduce AAA below zero — only losses can.
:::

**Example:** Bear Co. converted from a C corporation to an S corporation several years ago. It has AAA of \$60,000, accumulated E&P of \$40,000, and distributes \$120,000 to its sole shareholder (stock basis of \$100,000).

| Layer | Amount | Treatment |
|-------|--------|-----------|
| AAA | \$60,000 | Tax-free (reduces stock basis to \$40,000) |
| Accumulated E&P | \$40,000 | **Dividend income** |
| Remaining basis | \$20,000 | Tax-free return of capital (reduces stock basis to \$0) |
| **Total distributed** | **\$120,000** | |

---

## Compensation issues

Shareholder-employees who perform services must receive **reasonable compensation** as wages. This is a major exam issue because wages are subject to payroll taxes, while distributions are not.

## When businesses choose an S corporation

S corporations are often attractive for closely held businesses that want:

- Liability protection
- Pass-through taxation
- Potential payroll tax planning compared with sole proprietorship or partnership treatment

They are less useful when owners need multiple classes of stock or want institutional investors.

## Advantages and disadvantages

| Topic | S Corporation |
| --- | --- |
| Liability protection | Strong |
| Tax regime | Pass-through taxation |
| Ownership restrictions | Significant |
| Capital raising | More limited than a C corporation |
| Exam focus | Eligibility, basis, distributions, and reasonable compensation |

## REG quick hits

- S corporations file Form 1120-S.
- They are usually pass-through entities — no entity-level tax in most cases.
- Eligibility: domestic corporation, ≤ 100 shareholders, eligible shareholders only, one class of stock.
- Election is made on **Form 2553** by the 15th day of the 3rd month.
- **All shareholders** must consent to the election.
- Termination can occur through voluntary revocation, disqualifying events, or excess passive income (3 years with C corp E&P).
- A **5-year waiting period** applies before re-election after termination.
- Shareholders may take the **QBI deduction** (up to 20%) on passed-through income.
- >2% shareholders are treated as partners for fringe benefit purposes.
- Stock basis: contributions + income − distributions − nondeductible − losses.
- Debt basis comes **only** from direct shareholder loans — entity-level debt and guarantees do **not** count.
- Maximum deductible loss = stock basis + debt basis.
- Suspended losses carry forward **indefinitely**.
- The **AAA** controls the tax treatment of distributions when accumulated E&P exists.
- Reasonable compensation is a recurring exam issue.

## Bottom line

An S corporation gives small business owners corporate liability protection without regular C corporation taxation, but the election comes with strict eligibility limits. On REG, know the qualification rules, election timing, termination triggers, basis limits (especially the stock-plus-debt-only rule), distribution ordering with the AAA, and wage-versus-distribution issues.
