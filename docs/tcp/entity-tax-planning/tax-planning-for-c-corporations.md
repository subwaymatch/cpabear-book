# Tax Planning for C Corporations

## Introduction

Tax planning for C corporations focuses on strategies to **minimize the combined entity-level and shareholder-level tax burden** while maintaining compliance. The TCP exam tests your ability to calculate tax savings from NOL and capital loss carryovers, optimize state and local tax positions, time income and deductions in response to changing tax rates, compute estimated tax payments to avoid penalties, and analyze the tax consequences of post-formation shareholder-corporation transactions. The emphasis throughout is on **quantitative analysis** — deriving the dollar impact of planning strategies and comparing alternative approaches.

This page builds on the C corporation compliance concepts covered in the Entity Tax Compliance section and focuses on the **planning dimension** — the strategies a CPA uses to reduce a corporation's effective tax rate.

---

## NOL and Capital Loss Carryover Planning

### Maximizing NOL Utilization

Net operating losses are among the most valuable tax attributes a C corporation can carry forward. Effective planning ensures these losses are used before they become limited or worthless.

| Strategy | Description |
|---|---|
| **Accelerate income into carryforward years** | Recognize income in years when NOLs are available to offset it |
| **Defer deductions in carryforward years** | Postpone discretionary deductions (e.g., bonus depreciation elections) to preserve taxable income for NOL absorption |
| **Monitor the 80% limitation** | Post-2017 NOLs can only offset 80% of taxable income — plan for the 20% minimum tax each year |
| **Pre-acquisition planning** | Before an ownership change, evaluate the §382 limitation impact on existing NOLs |

> **Example:** Bear Co. has a \$1,000,000 NOL carryforward. In 2024, Bear Co. expects taxable income (before NOL) of \$600,000. The NOL deduction is limited to 80% × \$600,000 = **\$480,000**. Bear Co. will pay tax on \$120,000 regardless of the NOL. To maximize utilization, Bear Co. should consider accelerating an additional \$250,000 of income (e.g., selling appreciated investments) to use \$200,000 more of its NOL (80% × \$250,000), reducing the carryforward to \$320,000.

### Section 382 Planning Around Ownership Changes

The §382 limitation can dramatically reduce the value of a corporation's NOLs after an ownership change. Proactive planning is essential.

| Planning Approach | Detail |
|---|---|
| **Structure acquisitions to avoid ownership change** | Keep the shift in 5% shareholders below 50 percentage points over the 3-year testing period |
| **Maximize FMV before ownership change** | The annual limitation equals FMV × long-term tax-exempt rate — a higher FMV means a higher annual cap |
| **Built-in gain recognition** | If the corporation has a **net unrealized built-in gain** at the change date, gains recognized within the 5-year recognition period increase the §382 limitation |
| **Evaluate NOL value in acquisition pricing** | Discount the NOL carryforward by the present value of the restricted annual usage |

> **Example:** MAS Inc. is being acquired in a transaction that will trigger an ownership change. MAS Inc. has \$2,000,000 in NOLs. The FMV of MAS Inc. stock is \$5,000,000, and the long-term tax-exempt rate is 4%. The annual §382 limitation = \$5,000,000 × 4% = **\$200,000**. At 21% tax rate, the annual tax savings = \$200,000 × 21% = \$42,000. The acquirer should value the NOLs at the present value of \$42,000 per year — not the full \$2,000,000 face value.

:::warning

If the corporation has a **net unrealized built-in loss** at the change date, the §382 limitation also applies to built-in losses recognized during the 5-year recognition period. This can catch acquirers off guard when depreciation deductions on pre-change assets are limited.

:::

### Capital Loss Carryover Strategies

C corporation capital losses can only offset capital gains and have limited carryback (3 years) and carryforward (5 years) periods.

| Strategy | Description |
|---|---|
| **Harvest capital gains before carryforward expiration** | Sell appreciated capital assets to generate gains that absorb expiring capital loss carryforwards |
| **Coordinate timing of capital gains and losses** | Defer capital gains to years with available capital loss carryovers |
| **Carryback first** | Capital losses are carried back 3 years first — amend prior returns to recover tax paid on capital gains |
| **Convert to ordinary income/loss if possible** | §1244 stock losses (up to \$50,000/\$100,000) are ordinary — consider whether any capital losses can be recharacterized |

> **Example:** Gies Co. has a \$150,000 capital loss carryforward from 2022, expiring after 2027. In 2024, Gies Co. holds stock investments with \$200,000 of unrealized gains. By selling \$150,000 of investments in 2024, Gies Co. generates capital gains that are fully offset by the capital loss carryforward — **\$0 net tax on the gains**. If Gies Co. waits until 2028, the carryforward expires worthless.

:::tip[Exam Tip]

The exam may present a timeline of capital losses and ask you to calculate the tax savings from strategic timing of capital gain recognition. Always check the expiration date of the carryforward (5 years) and remember that C corporation capital losses are carried forward as **short-term capital losses**.

:::

---

## State and Local Tax (SALT) Optimization

### Income Apportionment Planning

Multistate corporations apportion income among states using formulas that typically consider **sales**, **payroll**, and **property** factors. Many states have moved to a **single sales factor** formula, creating planning opportunities.

| Factor | Traditional Weight | Modern Trend |
|---|---|---|
| **Sales** | 1/3 | Many states use **100% sales factor** (single sales factor) |
| **Payroll** | 1/3 | Reduced or eliminated in single-factor states |
| **Property** | 1/3 | Reduced or eliminated in single-factor states |

#### Planning Strategies for Apportionment

| Strategy | Description |
|---|---|
| **Locate operations in favorable states** | Place employees and property in states with no income tax or favorable apportionment rules while directing sales to market states |
| **Elect alternative apportionment** | Some states allow alternative methods if the standard formula does not fairly represent business activity |
| **Manage throwback/throwout rules** | States with throwback rules attribute sales to the state of origin if the destination state cannot tax the seller — plan sales routing accordingly |
| **Transfer pricing between affiliates** | Arm's-length intercompany pricing can shift income between state jurisdictions (subject to audit scrutiny) |

> **Example:** Illini Entertainment operates in State A (10% income tax, 100% sales factor) and State B (0% income tax). If Illini shifts \$500,000 of payroll from State A to State B, this has **no effect on State A apportionment** under a single sales factor formula. However, if State A used an equal-weighted 3-factor formula, the payroll shift would reduce the State A apportionment percentage and save tax.

### Entity Structure for SALT Optimization

| Approach | Mechanism |
|---|---|
| **Separate entities per state** | Isolate high-income operations in low-tax states; some states require combined reporting, eliminating this benefit |
| **Pass-through entity tax (PTET)** | Many states allow pass-through entities to elect to pay state income tax at the entity level, creating a federal deduction that bypasses the \$10,000 SALT cap |
| **Nexus planning** | Evaluate whether physical presence or economic nexus thresholds are met in each state; avoid creating nexus in high-tax states when possible |

:::info

The **pass-through entity tax (PTET)** election is a significant planning tool that allows S corporation and partnership owners to effectively deduct state income taxes above the \$10,000 individual SALT cap. C corporations are not directly affected by the SALT cap since they deduct state taxes at the entity level without limitation.

:::

---

## Timing of Income and Expenses Under Changing Tax Rates

### General Principles

When tax rates are expected to change, the timing of income recognition and expense deduction becomes a critical planning lever.

| Expected Rate Change | Income Strategy | Deduction Strategy |
|---|---|---|
| **Rates increasing** | Accelerate income into current (lower-rate) year | Defer deductions to future (higher-rate) year |
| **Rates decreasing** | Defer income to future (lower-rate) year | Accelerate deductions into current (higher-rate) year |

### Specific Timing Techniques

| Technique | Application |
|---|---|
| **Accelerate/defer revenue** | Adjust billing cycles, prepayment terms, or contract completion dates (within accounting method constraints) |
| **Bonus depreciation elections** | Elect or decline bonus depreciation to shift deductions between years |
| **§179 expensing** | Expense qualifying assets in the current year vs. capitalizing and depreciating |
| **Charitable contribution timing** | C corporations may deduct charitable contributions up to 10% of taxable income — time large donations to maximize the deduction |
| **Accrued compensation** | Accrue bonuses to related parties within 2½ months of year-end to deduct in the current year (§267 limitation) |

> **Example:** Bear Co. (C corporation) expects the corporate tax rate to increase from 21% to 28% next year. Bear Co. has \$400,000 of discretionary expenses it can pay this year or next. If Bear Co. **defers** the expenses to next year, the tax savings increase by \$400,000 × (28% − 21%) = **\$28,000**. Conversely, if Bear Co. has \$500,000 of income it can accelerate into this year, it saves \$500,000 × 7% = **\$35,000** by recognizing the income at the lower 21% rate.

:::caution

Timing strategies must comply with the corporation's **method of accounting** (cash or accrual). An accrual-method taxpayer cannot simply defer recognizing revenue that has been earned and is fixed in amount — the all-events test determines the year of inclusion regardless of collection timing.

:::

---

## Estimated Tax Payments and Underpayment Penalties

### Required Estimated Payments

C corporations must make quarterly estimated tax payments to avoid underpayment penalties.

| Due Date | Quarter |
|---|---|
| April 15 | 1st quarter |
| June 15 | 2nd quarter |
| September 15 | 3rd quarter |
| December 15 | 4th quarter |

### Safe Harbor Rules

| Corporation Size | Safe Harbor |
|---|---|
| **Taxable income ≤ \$1 million in all 3 prior years** | Pay 100% of **prior year's tax** (in 4 equal installments) **or** 100% of current year's tax |
| **Large corporation** (taxable income > \$1 million in any of the 3 prior years) | May use prior year's tax for the **1st quarter only**; remaining quarters must be based on current year's annualized income |

### Annualized Income Installment Method

Corporations with seasonal or uneven income may use the **annualized income installment method** to reduce early-quarter payments when income is concentrated later in the year.

| Period | Annualization Factor |
|---|---|
| First 3 months | × 4 |
| First 5 months | × 12/5 |
| First 8 months | × 12/8 |
| First 11 months | × 12/11 |

> **Example:** Kingfisher Industries (large corporation) earns most of its income in Q4. Using the annualized income installment method, Kingfisher calculates estimated tax based on actual income earned through each period — resulting in lower payments in Q1–Q3 and a larger Q4 payment. This avoids tying up cash in estimated payments before income is actually earned.

:::tip[Exam Tip]

The exam frequently tests the **large corporation rule**: a corporation that had taxable income exceeding \$1 million in any of the 3 prior years can only use prior year's tax as the safe harbor for the **first installment**. All subsequent installments must be based on current year projected income. Forgetting this rule is a common exam mistake.

:::

### Calculating the Underpayment Penalty

The underpayment penalty is essentially **interest** on the shortfall between required and actual payments, calculated at the federal short-term rate plus 3 percentage points, compounded daily.

| Step | Calculation |
|---|---|
| 1 | Determine the **required annual payment** (lesser of 100% of current year tax or applicable safe harbor) |
| 2 | Divide by 4 to determine the **required quarterly installment** |
| 3 | Compare to **actual payment** made by each due date |
| 4 | Compute interest on any **shortfall** from the due date to the earlier of the payment date or the return due date |

---

## Post-Formation Shareholder-Corporation Transactions

### Noncash Property Contributions After Formation

Post-formation contributions to a C corporation must still satisfy the §351 control requirement. When a single shareholder contributes property and already owns ≥ 80%, the transaction qualifies.

| Planning Consideration | Detail |
|---|---|
| **Contributing appreciated property** | Shareholder defers gain under §351; corporation takes carryover basis — future gain is taxed at corporate level (and again on distribution) |
| **Contributing depreciated property** | Loss is **not recognized** under §351 — the loss is permanently lost if the property is contributed to the corporation |
| **Alternative: sell property to corporation** | If the shareholder wants to recognize a loss, selling (rather than contributing) the property allows loss recognition — but related party rules (§267) disallow losses between > 50% owners |

:::warning

Never contribute **depreciated property** (FMV < basis) to a C corporation in a §351 exchange if the goal is to recognize the loss. The loss disappears. Instead, the shareholder should sell the property to an unrelated party, recognize the loss, and contribute the cash proceeds.

:::

### Noncash Property Distributions

When a C corporation distributes appreciated property to shareholders, it creates **two levels of tax**:

```journal
Distribution of Appreciated Land to Shareholder
Dr. Gain on Distribution of Property 120,000
Cr. Land[a] 120,000
```

| Level | Tax Consequence |
|---|---|
| **Corporate level** | Recognizes gain (FMV − adjusted basis) — taxed at 21% |
| **Shareholder level** | Distribution = FMV of property; taxed as dividend to extent of E&P |

> **Example:** MAS Inc. distributes land (FMV \$300,000, adjusted basis \$180,000) to sole shareholder Dana. MAS Inc. recognizes a \$120,000 gain (taxed at 21% = \$25,200). Dana receives a \$300,000 distribution — taxable as a dividend to the extent of E&P (at qualified dividend rates up to 20% + 3.8% NIIT). Total tax on the \$120,000 of appreciation: corporate tax of \$25,200 plus shareholder tax on the dividend — illustrating the double taxation problem.

#### Loss Property Distributions

| Rule | Treatment |
|---|---|
| **Depreciated property distributed to shareholder** | Corporation does **not** recognize the loss |
| **Planning alternative** | Sell the property to an unrelated party (recognizing the loss), then distribute the cash proceeds |

### Stock Redemptions

A stock redemption occurs when a corporation repurchases its own stock. The tax treatment to the shareholder depends on whether the redemption qualifies as an **exchange** or is treated as a **dividend**.

| Treatment | Shareholder Tax Result | When Does It Apply? |
|---|---|---|
| **Exchange treatment** | Capital gain or loss (amount received − stock basis) | Substantially disproportionate (§302(b)(2)), complete termination (§302(b)(3)), or not essentially equivalent to a dividend (§302(b)(1)) |
| **Dividend treatment** | Entire proceeds taxed as dividend to extent of E&P | Fails all §302(b) tests — constructive ownership rules apply |

:::tip[Exam Tip]

The **constructive ownership rules** (§318) are critical for redemption analysis. Stock owned by family members (spouse, children, grandchildren, parents) and by entities is attributed to the shareholder. A redemption that appears to reduce ownership may still fail the substantially disproportionate test after applying attribution rules.

:::

### Compensation Planning

| Strategy | Tax Benefit |
|---|---|
| **Reasonable compensation** | Deductible by corporation as ordinary expense; reduces E&P and corporate tax |
| **Excessive compensation** | Nondeductible to the extent the IRS determines it is unreasonable — recharacterized as a disguised dividend |
| **§162(m) limitation** | Publicly traded corporations cannot deduct compensation exceeding \$1,000,000 per year for covered employees |
| **Deferred compensation** | §409A rules govern timing of deductions and income recognition for nonqualified deferred compensation |

---

## Summary

| Topic | Key Concept |
|---|---|
| NOL utilization | Indefinite carryforward; 80% limitation means 20% minimum taxable income; accelerate income to absorb NOLs |
| §382 limitation | Ownership change caps annual NOL use at FMV × long-term tax-exempt rate; plan acquisition structure to preserve NOL value |
| Capital loss carryovers | Offset capital gains only; 3-year carryback, 5-year carryforward; harvest gains before expiration |
| SALT optimization | Single sales factor apportionment favors locating operations in low-tax states; PTET election bypasses SALT cap for pass-throughs |
| Income/expense timing | Accelerate income when rates are rising; defer deductions when rates are rising; reverse when rates are falling |
| Estimated tax payments | Quarterly payments required; large corporations can use prior year's tax for Q1 only |
| Annualized income method | Reduces early-quarter payments for seasonal businesses |
| Post-formation contributions | §351 nonrecognition; never contribute depreciated property — loss is permanently lost |
| Property distributions | Corporation recognizes gain (not loss); shareholder taxed on FMV as dividend to extent of E&P |
| Stock redemptions | Exchange treatment (capital gain) if substantially disproportionate or complete termination; otherwise dividend |
| Compensation planning | Reasonable compensation is deductible; excess is recharacterized as dividend; §162(m) caps deduction at \$1M for public companies |
