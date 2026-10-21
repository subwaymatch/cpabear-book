# Net Position and Components

**Net position** is what is left when a government's obligations are subtracted from its resources, measured on the economic resources measurement focus and accrual basis. It is the bottom line of the government-wide statement of net position and of each proprietary fund. Like fund balance, a single total says little on its own, so GASB requires it to be split into three components: **net investment in capital assets**, **restricted**, and **unrestricted**.

The BAR blueprint asks you to calculate all three and to prepare the related journal entries. This chapter defines each component, works through the calculation of net investment in capital assets (where most exam errors occur), explains why unrestricted net position is often negative, and ends with a full calculation. It also covers how GASB 100 reports restatements of beginning net position.

---

## Net Position vs. Fund Balance

| | Net position | Fund balance |
|---|---|---|
| **Appears in** | Government-wide statement of net position; proprietary and fiduciary fund statements | Governmental fund balance sheets |
| **Measurement focus and basis** | Economic resources, accrual | Current financial resources, modified accrual |
| **Includes capital assets and long-term debt?** | Yes | No |
| **Components** | Net investment in capital assets, restricted, unrestricted | Nonspendable, restricted, committed, assigned, unassigned |

The equation is:

$$
\text{Net Position} = \text{Assets} + \text{Deferred Outflows of Resources} - \text{Liabilities} - \text{Deferred Inflows of Resources}
$$

Deferred outflows of resources (a consumption of resources that applies to a future period) increase net position. Deferred inflows of resources (an acquisition of resources that applies to a future period) decrease it. Neither is an asset or a liability.

---

## Net Investment in Capital Assets

### The Idea

This component shows how much of net position is tied up in capital assets after taking away what the government still owes on them. A city with \$40 million of roads and buildings (net of depreciation) and \$25 million of debt that paid for them has \$15 million invested in capital assets, net of the related debt.

### The Rule

Net investment in capital assets is:

- Capital assets, net of accumulated depreciation and amortization,
- **less** the outstanding balances of bonds, notes, leases, and other borrowings **attributable to acquiring, constructing, or improving those assets** (including unamortized premiums and discounts), and
- **plus or minus** deferred outflows and inflows of resources attributable to those assets or that debt, such as a deferred loss or gain on refunding capital-related debt.

The tricky part is **unspent debt proceeds**. If a government borrows \$5 million to build a courthouse and has spent only \$4.2 million by year-end, the \$800,000 still in the bank is not a capital asset. The portion of the debt attributable to those unspent proceeds is therefore **left out** of net investment in capital assets. Instead, that portion of the debt is placed in the **same component as the unspent cash**, usually restricted (because bond covenants restrict the proceeds to construction). There, the cash and the debt offset.

In formula form:

$$
\text{NICA} = \text{Capital Assets, net} - (\text{Capital-Related Debt} - \text{Debt Attributable to Unspent Proceeds}) \pm \text{Related Deferrals}
$$

| Counts as capital-related debt | Does not count |
|---|---|
| Bonds and notes issued to build or buy capital assets | Debt issued for operations or to cover a deficit |
| Lease and subscription liabilities | Pension obligation bonds |
| Unamortized premiums and discounts on that debt | Debt issued for capital assets the government does not own (for example, county debt that built schools owned by a separate school district) |
| | The portion attributable to unspent proceeds |

### Example: Calculating NICA

Bear City reports:

| Item | Amount |
|---|---|
| Capital assets, at cost | \$50,000,000 |
| Accumulated depreciation | 18,000,000 |
| Bonds payable, all issued for capital projects | 22,000,000 |
| Unamortized premium on those bonds | 400,000 |
| Unspent bond proceeds (restricted for construction) | 3,500,000 |
| Deferred outflow: loss on refunding of capital-related bonds | 600,000 |

$$
\text{Capital Assets, net} = \$50{,}000{,}000 - \$18{,}000{,}000 = \$32{,}000{,}000
$$

$$
\text{Debt in NICA} = \$22{,}000{,}000 + \$400{,}000 - \$3{,}500{,}000 = \$18{,}900{,}000
$$

$$
\text{NICA} = \$32{,}000{,}000 - \$18{,}900{,}000 + \$600{,}000 = \$13{,}700{,}000
$$

The \$3,500,000 of debt that was left out goes to restricted net position, where it offsets the \$3,500,000 of restricted cash. The net effect of the unspent proceeds on restricted net position is zero.

---

## Restricted Net Position

Net position is **restricted** when its use is constrained by:

1. **External parties**: creditors (through debt covenants), grantors, contributors, or the laws and regulations of other governments, or
2. **Law through constitutional provisions or enabling legislation**: a law the government itself passes that creates a revenue and legally requires it to be used for a specific purpose.

| Source | Example |
|---|---|
| Creditors | Debt service reserve required by a bond covenant |
| Grantors | Unspent federal highway grant restricted to road construction |
| Other governments' laws | State law requiring motor fuel tax to be spent on transportation |
| Enabling legislation | A city ordinance that levies a hotel tax and legally dedicates it to tourism promotion |
| Constitutional provision | A state constitution requiring lottery proceeds to fund education |

Restricted net position is the restricted assets **less** the liabilities that will be paid from them. When a permanent endowment or permanent fund is involved, restricted net position is shown in two parts: **expendable** and **nonexpendable**.

:::warning[Key Distinction]

Restricted net position is narrower than the combination of restricted, committed, and assigned fund balance. Constraints that the government's own governing body imposes and can remove (committed and assigned fund balance) are **not** restrictions of net position. Those amounts are part of unrestricted net position. Board designations are never shown as restricted.

:::

When both restricted and unrestricted resources are available for the same expense, which is used first is a **policy choice**, and the policy is disclosed in the notes. (For fund balance, GASB 54 sets a default of restricted first; for net position, the government simply states its policy.)

---

## Unrestricted Net Position

Unrestricted net position is the **residual**: total net position less net investment in capital assets and restricted net position.

$$
\text{Unrestricted Net Position} = \text{Total Net Position} - \text{NICA} - \text{Restricted Net Position}
$$

It can be positive or negative. Many governments report a **negative** unrestricted balance, and that does not by itself mean the government is in trouble. The usual causes are long-term liabilities that have no related capital asset:

| Cause | Why it reduces unrestricted net position |
|---|---|
| Net pension and OPEB liabilities | Large obligations recognized under GASB 68 and 75 with no offsetting asset |
| Debt for assets the government does not own | The debt is not capital-related, so it falls into unrestricted |
| Compensated absences, claims, and landfill obligations | Liabilities funded from future revenues |

A government can have a negative unrestricted net position and still have healthy fund balances in its governmental funds, because the funds do not report these long-term liabilities. Governments also have taxing power and ongoing revenues to meet obligations over time.

---

## Journal Entries and Their Effect on the Components

### Borrowing and Building

Kodiak County issues \$5,000,000 of bonds to build a courthouse and spends \$4,200,000 by year-end. The bond covenant restricts the unspent proceeds to construction.

```journal
Dr. Cash[a] 5,000,000
Cr. Bonds Payable[l] 5,000,000
```

```journal
Dr. Construction in Progress[a] 4,200,000
Cr. Cash[a] 4,200,000
```

**Effect on the components:**

- Net investment in capital assets: \$4,200,000 of CIP less the \$4,200,000 of debt attributable to it (\$5,000,000 less the \$800,000 attributable to unspent proceeds) = **\$0**.
- Restricted: \$800,000 of restricted cash less the \$800,000 of debt attributable to it = **\$0**.
- Unrestricted: **no change**.

That is the right answer, because borrowing and spending the money on an asset does not change total net position at all.

### A Restricted Grant

Grizzly County receives a \$1,200,000 state grant restricted to bridge repairs, with all eligibility requirements met.

```journal
Dr. Cash[a] 1,200,000
Cr. Grant Revenue 1,200,000
```

Restricted net position rises by \$1,200,000. When the county spends the grant on bridge improvements that are capitalized:

```journal
Dr. Infrastructure (Bridges)[a] 1,200,000
Cr. Cash[a] 1,200,000
```

The \$1,200,000 moves from restricted net position to net investment in capital assets. Total net position does not change.

### Depreciation

Bear City records \$2,500,000 of depreciation on governmental capital assets.

```journal
Dr. Depreciation Expense 2,500,000
Cr. Accumulated Depreciation[ca] 2,500,000
```

Net investment in capital assets and total net position both fall by \$2,500,000.

### Paying Down Capital Debt

Kodiak County pays \$500,000 of principal on the courthouse bonds from unrestricted cash.

```journal
Dr. Bonds Payable[l] 500,000
Cr. Cash[a] 500,000
```

Net investment in capital assets **rises** by \$500,000 (less debt against the assets) and unrestricted net position **falls** by \$500,000 (less cash). Total net position does not change.

---

## Restating Beginning Net Position (GASB 100)

Sometimes a government must restate the net position it reported last year. Under **GASB 100** (testable since July 1, 2023), **changes in accounting principle** and **error corrections** are reported **retroactively**: beginning net position (or fund balance) is restated for the cumulative effect. A **change to or within the financial reporting entity** (for example, adding a component unit) adjusts beginning balances of the current period. A **change in accounting estimate** is reported **prospectively**, in the current and future periods, with no restatement.

The restatement appears as an adjustment to beginning net position, displayed for each reporting unit affected (for example, governmental activities, business-type activities, and each major fund). The notes include a **tabular reconciliation** of each beginning balance as previously reported, the adjustments, and the balance as restated.

---

## Complete Worked Example

**Bear City governmental activities, December 31, 20X4.**

| Item | Amount |
|---|---|
| Capital assets, at cost | \$85,000,000 |
| Accumulated depreciation | 32,000,000 |
| Other assets (cash, investments, receivables) | 14,500,000 |
| Deferred outflows related to pensions | 3,200,000 |
| Deferred outflow: loss on refunding of capital-related bonds | 750,000 |
| General obligation bonds payable, all issued for capital assets | 38,000,000 |
| Unamortized premium on those bonds | 1,100,000 |
| Net pension liability | 21,000,000 |
| Other liabilities | 4,600,000 |
| Deferred inflows related to pensions | 2,800,000 |

Other assets include \$5,000,000 of unspent bond proceeds restricted for construction, \$2,100,000 of resources restricted by grantors, and \$900,000 restricted by enabling legislation. No liabilities are payable from the grant or enabling legislation resources.

### Step 1: Total Net Position

| | Amount |
|---|---|
| Capital assets, net (\$85,000,000 - \$32,000,000) | \$53,000,000 |
| Other assets | 14,500,000 |
| **Total assets** | **67,500,000** |
| Deferred outflows (\$3,200,000 + \$750,000) | 3,950,000 |
| Liabilities (\$38,000,000 + \$1,100,000 + \$21,000,000 + \$4,600,000) | (64,700,000) |
| Deferred inflows | (2,800,000) |
| **Total net position** | **\$3,950,000** |

### Step 2: Net Investment in Capital Assets

The debt attributable to capital assets excludes the \$5,000,000 attributable to unspent proceeds:

$$
\text{Debt in NICA} = \$38{,}000{,}000 + \$1{,}100{,}000 - \$5{,}000{,}000 = \$34{,}100{,}000
$$

$$
\text{NICA} = \$53{,}000{,}000 - \$34{,}100{,}000 + \$750{,}000 = \$19{,}650{,}000
$$

### Step 3: Restricted Net Position

The \$5,000,000 of unspent proceeds is restricted cash, but it is offset by the \$5,000,000 of debt excluded from NICA, so it adds nothing. The other restrictions have no related liabilities:

$$
\text{Restricted} = (\$5{,}000{,}000 - \$5{,}000{,}000) + \$2{,}100{,}000 + \$900{,}000 = \$3{,}000{,}000
$$

:::tip[Exam Tip]

Do not count unspent bond proceeds as both a reduction of the debt in NICA and as restricted net position. The debt you remove from NICA travels with the cash into restricted, and the two cancel.

:::

### Step 4: Unrestricted Net Position

$$
\text{Unrestricted} = \$3{,}950{,}000 - \$19{,}650{,}000 - \$3{,}000{,}000 = -\$18{,}700{,}000
$$

| Component | Amount |
|---|---|
| Net investment in capital assets | \$19,650,000 |
| Restricted | 3,000,000 |
| Unrestricted | (18,700,000) |
| **Total net position** | **\$3,950,000** |

The deficit in unrestricted net position comes mainly from the \$21,000,000 net pension liability, a common result under GASB 68. Compute the components in this order (total, then NICA, then restricted, then unrestricted as the residual) and they will always sum to the total.

---

## Summary

| Rule | Detail |
|---|---|
| Components | Net investment in capital assets, restricted, unrestricted |
| NICA | Net capital assets less capital-related debt, plus or minus related deferrals; debt attributable to unspent proceeds is excluded |
| Unspent proceeds | The excluded debt goes with the unspent cash (usually restricted), and they offset |
| Restricted | External constraints or constitutional provisions and enabling legislation; committed and assigned amounts are unrestricted |
| Permanent endowments | Restricted net position split into expendable and nonexpendable |
| Restricted vs. unrestricted spending | A disclosed policy choice |
| Unrestricted | The residual; often negative because of pension and OPEB liabilities |
| Restatements (GASB 100) | Principle changes and error corrections retroactive; estimate changes prospective; tabular reconciliation in the notes |
