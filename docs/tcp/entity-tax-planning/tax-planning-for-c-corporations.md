# Tax Planning for C Corporations

Planning for a C corporation means thinking about two taxpayers at once: the corporation, which pays 21% on its income, and its shareholders, who pay again when earnings come out. Good planning lowers the combined bill and gets the timing right. The TCP blueprint asks you to put dollar amounts on that planning: the tax saved by using loss carryovers, the state tax effect of where a business locates, the effect of rate and law changes on when to report income and expenses, the estimated payments needed to avoid a penalty, and the tax result of contributions and distributions after formation. This chapter builds on the compliance rules in [C Corporations](../entity-tax-compliance/c-corporations.md) and takes those topics in that order.

The One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) left the 21% rate and the NOL rules alone, but it changed several of the timing tools below: it made 100% bonus depreciation permanent, restored immediate expensing of domestic research costs, and added a 1% floor on corporate charitable deductions. Those provisions have been eligible for TCP testing since July 1, 2026.

---

## Getting the Most From Loss Carryovers

### Net Operating Losses

An NOL is worth the tax it saves: the NOL deduction times the 21% rate. Because post-2017 NOLs can offset only 80% of taxable income, at least 20% of each year's pre-NOL income stays taxable, so a large NOL takes several years to use.

> **Example:** Bear Co. has a \$1,000,000 NOL carryforward from 2025 and expects \$600,000 of taxable income before the NOL deduction in 2026. The deduction is limited to 80% × \$600,000 = **\$480,000**, which saves 21% × \$480,000 = **\$100,800** of tax. Bear Co. still pays tax on \$120,000 and carries \$520,000 forward.

Planning ideas include accelerating income into years when NOLs are available and slowing down discretionary deductions in those years, for example by electing out of bonus depreciation, so that more income is available for the NOL to absorb.

### Section 382 Planning

After an ownership change, §382 limits the annual use of pre-change NOLs to the value of the loss corporation's stock times the long-term tax-exempt rate. A buyer should value a target's NOLs at the present value of the deductions it can actually take, not at face value.

| Planning approach | Detail |
|---|---|
| **Avoid an ownership change** | Keep the increase in 5% shareholders' ownership at 50 percentage points or less over the 3-year testing period |
| **Value the NOLs realistically** | The annual limitation, times 21%, is the most tax the NOLs can save each year |
| **Use built-in gains** | If the loss corporation has a net unrealized built-in gain, gains it recognizes within 5 years after the change increase the limitation |
| **Watch built-in losses** | If it has a net unrealized built-in loss, losses it recognizes within 5 years (including depreciation on those assets) are limited like NOLs |

> **Example:** Polar Inc. has \$2,000,000 of NOLs and is about to be acquired in a transaction that will be an ownership change. Its stock is worth \$5,000,000, and the long-term tax-exempt rate is 4%. The annual §382 limitation is \$5,000,000 × 4% = **\$200,000**, which saves at most 21% × \$200,000 = **\$42,000** a year. The NOLs will take at least 10 years to use, so the buyer should value them at the present value of \$42,000 a year, far less than 21% of \$2,000,000.

### Capital Loss Carryovers

A C corporation's capital losses offset only capital gains and expire after a 3-year carryback and a 5-year carryforward. Planning is about making sure gains arrive before the losses expire.

| Strategy | Description |
|---|---|
| **Harvest gains before expiration** | Sell appreciated capital assets in a year when an expiring carryforward can absorb the gain |
| **Carry back first** | A new capital loss goes back 3 years first and produces a refund of tax paid on earlier capital gains |
| **Use §1231 gains** | A net §1231 gain is treated as long-term capital gain, so selling business property at a gain can also absorb a capital loss (subject to the 5-year lookback for prior §1231 losses) |

> **Example:** Bear Co. has a \$150,000 capital loss from 2022 that can be carried forward through 2027. In 2026 it holds stock with \$200,000 of unrealized gain. If it sells enough stock in 2026 or 2027 to recognize \$150,000 of gain, the carryforward offsets the whole gain and saves **\$31,500** (21% × \$150,000). If it waits until 2028, the carryforward expires unused.

:::tip[Exam Tip]

Check the expiration year of every capital loss carryforward (5 years after the loss year) and remember that it is used as a short-term capital loss, whatever its original character.

:::

---

## State and Local Tax Planning

### Apportionment

A corporation that does business in several states divides its income among them by an **apportionment formula**. The traditional formula weights sales, payroll, and property equally. Most states now use a **single sales factor**, which apportions income only by where customers are.

| Factor | Traditional weight | Common today |
|---|---|---|
| **Sales** | 1/3 | 100% (single sales factor) |
| **Payroll** | 1/3 | Often 0% |
| **Property** | 1/3 | Often 0% |

| Strategy | Description |
|---|---|
| **Locate people and property with the formula in mind** | Under a single sales factor, moving payroll or property out of a state does not lower that state's share; under a three-factor formula, it does |
| **Manage nexus** | Avoid creating physical or economic nexus in a high-tax state unless the business needs it |
| **Watch throwback and throwout rules** | Some states treat sales shipped into a state that cannot tax the seller as sales in the state of origin ("throwback") or drop them from the formula ("throwout") |
| **Price intercompany transactions at arm's length** | Transfer prices between affiliates shift income among states, but combined-reporting states and auditors look closely |

> **Example:** Cub Entertainment does business in State A (10% income tax, single sales factor) and State B (no income tax). Moving \$500,000 of payroll from State A to State B does not change Cub's State A apportionment, because State A looks only at sales. If State A used an equally weighted three-factor formula, the same move would lower the payroll factor, reduce the State A apportionment percentage, and save State A tax.

### Pass-Through Entity Taxes

A C corporation deducts its state income taxes in full. Individual owners of pass-through entities are limited by the **SALT cap** on itemized deductions for state and local taxes. Under OBBBA, the cap is \$40,000 for 2025 and rises 1% a year through 2029, but it is reduced (to no less than \$10,000) once modified AGI exceeds \$500,000 for 2025 (\$505,000 for 2026), and it returns to \$10,000 in 2030. Many states let partnerships and S corporations elect a **pass-through entity tax (PTET)**: the entity pays the state tax and deducts it federally, so the owners' share of the tax never runs into the cap. OBBBA did not restrict these elections, so they remain valuable, especially for owners whose income phases them down to the \$10,000 floor.

---

## Timing Income and Deductions Around Rate and Law Changes

### The Basic Rule

When rates are expected to change, shift income into the lower-rate year and deductions into the higher-rate year.

| Expected change | Income | Deductions |
|---|---|---|
| **Rates going up** | Accelerate into the current year | Defer to the later year |
| **Rates going down** | Defer to the later year | Accelerate into the current year |

> **Example:** Suppose Congress enacts an increase in the corporate rate from 21% to 28%, effective next year. Bear Co. has \$400,000 of discretionary expenses it can pay this year or next. Deferring them to next year makes them worth 7 points more, saving \$400,000 × 7% = **\$28,000**. Accelerating \$500,000 of income into this year saves \$500,000 × 7% = **\$35,000**.

Timing must stay within the corporation's accounting method. An accrual-method corporation includes income when all events have occurred that fix the right to it and the amount can be determined with reasonable accuracy, whether or not it has been collected.

### Timing Tools

| Tool | How it shifts income or deductions |
|---|---|
| **Bonus depreciation** | OBBBA made 100% bonus depreciation permanent for property acquired after January 19, 2025. A corporation can elect out, class by class, to spread the deductions over later years |
| **§179 expensing** | Expenses qualifying property up to an annual limit (\$2,500,000 for 2025, indexed after that), reduced once purchases exceed a threshold, and limited to business taxable income |
| **Domestic research costs (§174A)** | Domestic research and experimental costs paid in tax years beginning after 2024 are deductible right away, or the corporation can elect to capitalize them and amortize them over at least 60 months; foreign research is still amortized over 15 years |
| **Year-end bonuses** | An accrual-method corporation can deduct bonuses to unrelated employees in the year accrued if they are paid within two and a half months after year-end; a bonus owed to a more-than-50% shareholder-employee is deductible only when paid (§267) |
| **Charitable contributions** | Deductible only above a 1% floor and up to a 10% cap of taxable income (below), so bunching gifts into one year can increase the total deduction |

### The Corporate Charitable Floor

For tax years beginning after December 31, 2025, OBBBA allows a corporation to deduct charitable contributions only to the extent they exceed **1%** of taxable income, and still not above **10%**. Contributions above the 10% cap carry forward 5 years. Contributions lost to the 1% floor carry forward only from a year in which the 10% cap was also exceeded; otherwise they are lost for good. The floor also creates a new book-tax difference.

> **Example:** Bear Co. has \$2,000,000 of taxable income (as computed for the charitable limit) every year, so its floor is \$20,000 and its cap is \$200,000. If it gives \$40,000 in each of two years, it deducts \$20,000 each year, a total of \$40,000, and the other \$40,000 is lost because the cap was never exceeded. If it gives the full \$80,000 in one year, it deducts \$60,000. Bunching adds \$20,000 of deductions and saves **\$4,200** (21% × \$20,000).

---

## Estimated Tax Payments

### Required Installments

A corporation that expects to owe \$500 or more must pay estimated tax in four installments. For a calendar-year corporation, they are due April 15, June 15, September 15, and December 15. Each installment is 25% of the **required annual payment**, which is the lesser of:

- 100% of the **current year's** tax, or
- 100% of the **prior year's** tax, if the prior year was a full 12-month year with a positive tax.

A **large corporation** (taxable income of \$1 million or more in any of the 3 preceding years) can use the prior-year amount for its **first installment only**. Any shortfall from that choice must be made up with the second installment, and the remaining installments must be based on the current year.

> **Example:** Bear Co. owed \$80,000 last year and expects to owe \$120,000 this year. It is not a large corporation, so it can pay 25% of \$80,000, or **\$20,000**, each quarter and owe no penalty, then pay the remaining \$40,000 with its return.
>
> Grizzly Inc. is a large corporation. It owed \$300,000 last year and expects \$480,000 this year. Its installments are:
>
> | Installment | Amount | Basis |
> |---|---|---|
> | 1st | \$75,000 | 25% of last year's \$300,000 |
> | 2nd | \$165,000 | 25% of \$480,000 (\$120,000) plus the \$45,000 the first installment fell short |
> | 3rd | \$120,000 | 25% of \$480,000 |
> | 4th | \$120,000 | 25% of \$480,000 |
> | **Total** | **\$480,000** | |

### Annualized Income Installment Method

A corporation whose income comes late in the year can base each installment on the income actually earned so far, annualized. Under the standard periods, income is annualized and a cumulative percentage of the resulting tax is due by each installment:

| Installment | Income period | Annualize by | Cumulative share of annualized tax |
|---|---|---|---|
| 1st | First 3 months | × 12/3 | 25% |
| 2nd | First 3 months | × 12/3 | 50% |
| 3rd | First 6 months | × 12/6 | 75% |
| 4th | First 9 months | × 12/9 | 100% |

A corporation may elect other periods instead (2, 4, 7, and 10 months, or 3, 5, 8, and 11 months). Each installment is the lesser of the annualized amount or the regular 25% installment.

> **Example:** Panda Industries earns most of its income in the second half of the year. Its taxable income is \$100,000 for the first 3 months, \$300,000 for the first 6 months, and \$600,000 for the first 9 months.
>
> | Installment | Annualized income | Annualized tax (21%) | Cumulative due | Installment |
> |---|---|---|---|---|
> | 1st | \$400,000 | \$84,000 | \$21,000 | \$21,000 |
> | 2nd | \$400,000 | \$84,000 | \$42,000 | \$21,000 |
> | 3rd | \$600,000 | \$126,000 | \$94,500 | \$52,500 |
> | 4th | \$800,000 | \$168,000 | \$168,000 | \$73,500 |
>
> The method keeps cash in the business early in the year, when the income has not yet been earned.

### The Underpayment Penalty

The penalty works like interest. It is computed on the amount by which each installment fell short, at the federal short-term rate plus 3 percentage points, from the installment's due date until the earlier of the date paid or the return's original due date.

---

## Transactions After Formation

### Contributing Property

A later contribution of property is tax-free under §351 only if the contributing shareholders have 80% control immediately afterward. A shareholder who already owns 80% or more meets the test alone.

| Property | Planning point |
|---|---|
| **Appreciated property** | The shareholder defers the gain, but the corporation takes a carryover basis, so the gain will be taxed to the corporation on a sale, and again when the proceeds are distributed |
| **Property worth less than its basis** | The loss is not recognized. It stays in the shareholder's stock basis, and the corporation's basis in net built-in loss property is generally limited to FMV (§362(e)(2)), so the loss is not duplicated |
| **Selling instead of contributing** | A sale lets the shareholder recognize a loss, but not if the shareholder owns more than 50% of the corporation (§267) |

:::warning

A shareholder who wants a current deduction for a loss should sell the property to an unrelated party, recognize the loss, and contribute the cash. Contributing the property defers the loss, and selling it to a more-than-50%-owned corporation disallows it.

:::

### Distributing Property

A distribution of appreciated property is taxed twice: the corporation recognizes gain as if it sold the property, and the shareholder has a dividend equal to its FMV (to the extent of E&P).

> **Example:** Polar Inc. distributes land (FMV \$300,000, basis \$180,000) to its sole shareholder, Dana, and has ample E&P. Polar recognizes a \$120,000 gain and pays \$25,200 of tax (21%). Dana has a \$300,000 dividend; at a 23.8% rate (20% plus the net investment income tax) she owes \$71,400. The distribution costs **\$96,600** in total.

A corporation recognizes **no loss** when it distributes property worth less than its basis, and the shareholder takes an FMV basis, so the loss disappears. The better plan is to sell the property to an unrelated buyer, deduct the loss, and distribute the cash.

### Stock Redemptions

When a corporation buys back its own stock, the shareholder gets **exchange** treatment (capital gain or loss) only if the redemption meets one of the §302(b) tests. Otherwise the whole amount is a **dividend** to the extent of E&P.

| Test | Requirement |
|---|---|
| **Substantially disproportionate (§302(b)(2))** | After the redemption, the shareholder owns less than 50% of the voting power and less than 80% of the percentage owned before |
| **Complete termination (§302(b)(3))** | The shareholder's entire interest is redeemed; family attribution can be waived if the shareholder keeps no interest for 10 years |
| **Not essentially equivalent to a dividend (§302(b)(1))** | A meaningful reduction in the shareholder's interest, based on the facts |

Ownership is measured after the **constructive ownership** rules of §318, which attribute stock owned by a spouse, children, grandchildren, and parents, and by related entities, to the shareholder.

> **Example:** Alex owns 60 of Bear Co.'s 100 shares, and an unrelated investor owns the other 40. Bear Co. redeems 30 of Alex's shares. Afterward Alex owns 30 of 70 shares, or 42.9%. That is less than 50%, and less than 80% of his former 60% (48%), so the redemption is substantially disproportionate and Alex has a capital gain or loss. If the other 40 shares belonged to Alex's daughter, Alex would be treated as owning all 70 remaining shares, and the redemption would be a dividend.

Two more points matter for planning. A publicly traded corporation pays a **1% excise tax** on the value of stock it repurchases (§4501). And in a closely held corporation, a **buy-sell agreement** funded with corporate-owned life insurance has an estate tax cost: in *Connelly v. United States* (2024), the Supreme Court held that the insurance proceeds increase the value of the corporation's stock and are not offset by the corporation's obligation to redeem the deceased owner's shares. A cross-purchase agreement, in which the owners insure each other, avoids that result.

### Compensation Planning

| Item | Rule |
|---|---|
| **Reasonable compensation** | Deductible by the corporation and taxed once to the employee-shareholder |
| **Unreasonable compensation** | The excess is not deductible and is treated as a dividend |
| **§162(m)** | A public corporation cannot deduct more than \$1,000,000 a year of pay to a covered employee; for tax years beginning after 2025, pay from every member of the controlled group counts toward the limit |
| **Nonqualified deferred compensation** | §409A governs when the employee is taxed; the corporation deducts the pay when the employee includes it |

---

## Summary

| Topic | Key rule |
|---|---|
| NOL savings | Deduction (limited to 80% of taxable income) × 21%; accelerate income or slow deductions to use NOLs sooner |
| §382 planning | Annual limit = stock value × long-term tax-exempt rate; value NOLs at the present value of the limited deductions |
| Capital loss carryovers | 3 years back, 5 forward; harvest capital or §1231 gains before the carryforward expires |
| SALT | Single sales factor states tax by customer location; PTET elections let owners avoid the individual SALT cap |
| Rate changes | Accelerate income and defer deductions when rates are rising; reverse when falling |
| Timing tools | 100% bonus depreciation (elect out to defer), §179, §174A domestic research expensing, the two-and-a-half-month bonus rule |
| Charitable floor | Deductible only between 1% and 10% of taxable income (2026 and later); bunching gifts reduces the floor's cost |
| Estimated taxes | Lesser of 100% of current or prior-year tax; large corporations use prior year only for the first installment; annualization helps seasonal businesses |
| Contributions | §351 defers gain and loss; sell loss property to an unrelated party to deduct the loss |
| Property distributions | Corporate gain on appreciated property plus a dividend of FMV; no corporate loss |
| Redemptions | Exchange if substantially disproportionate, a complete termination, or a meaningful reduction (after §318 attribution); otherwise a dividend |
| Compensation | Reasonable pay is deductible; §162(m) caps public-company pay at \$1,000,000 per covered employee, now counting the whole controlled group |
