# S Corporations

An S corporation is a corporation that has elected under Subchapter S to be taxed much like a partnership. It files Form 1120-S, generally pays no income tax itself, and passes its income, losses, deductions, and credits through to its shareholders on Schedule K-1. Because the shareholders pay the tax, each one's **basis** decides how much loss can be deducted and whether a distribution is taxable. TCP tests that basis in detail: stock basis and debt basis, the effect of property contributions and distributions, liquidations, and the split of a year's income when a shareholder sells. This chapter follows that order and ends with the errors to look for when reviewing a basis schedule.

The One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) made no substantive changes to the S corporation rules on eligibility, basis, distributions, or built-in gains.

---

## Eligibility in Brief

REG covers the requirements in depth; TCP assumes you know them. A corporation can elect and keep S status only if it is a **domestic** corporation with no more than **100 shareholders** (family members can count as one), only **eligible shareholders** (individuals who are U.S. citizens or residents, estates, certain trusts, and certain tax-exempt organizations, but not partnerships, corporations, or nonresident aliens), and **one class of stock** (differences in voting rights alone are allowed). An S corporation generally must use a calendar year unless it has a business purpose for a fiscal year or makes a §444 election.

---

## Stock Basis

### Adjustments and Their Order

A shareholder starts with the stock's cost (or the basis carried over from a §351 contribution) and then adjusts it every year for the shareholder's pro rata share of the corporation's items. The order matters, because basis cannot go below zero:

| Step | Adjustment | Effect |
|---|---|---|
| 1 | Contributions, plus all income items (ordinary income, separately stated income and gains, and tax-exempt income) | Increase |
| 2 | Distributions that are not dividends | Decrease |
| 3 | Nondeductible expenses that are not capital expenditures (for example, the disallowed half of business meals, penalties, and expenses related to tax-exempt income) | Decrease |
| 4 | Losses and deductions (ordinary loss and separately stated loss and deduction items) | Decrease |

Putting income before distributions lets current-year income be distributed tax-free. Putting losses last means a distribution is tested before the year's losses use up basis. Losses that exceed basis are suspended and carry forward indefinitely, but they are personal to the shareholder and do not pass to a buyer of the stock.

> **Example:** Alex owns 100% of Polar Inc., an S corporation. Alex's stock basis at the start of the year is \$75,000. During the year, Polar has \$40,000 of ordinary income, \$2,000 of tax-exempt interest, and a \$5,000 charitable contribution, and it distributes \$30,000 to Alex.
>
> | Adjustment | Amount |
> |---|---|
> | Beginning stock basis | \$75,000 |
> | Plus: ordinary income and tax-exempt interest | \$42,000 |
> | Less: distribution | (\$30,000) |
> | Less: charitable contribution (a separately stated deduction) | (\$5,000) |
> | **Ending stock basis** | **\$82,000** |

### Contributions of Noncash Property

A shareholder who contributes property to an S corporation follows the same **§351** rules as for a C corporation. If the contributing shareholders have at least 80% control immediately afterward, no gain or loss is recognized, except to the extent of boot.

| Item | §351 applies | §351 does not apply |
|---|---|---|
| **Shareholder's gain or loss** | None, except gain to the extent of boot or liabilities in excess of basis (§357(c)) | Full gain or loss recognized |
| **Shareholder's stock basis** | Basis of property - boot - liabilities assumed by the corporation + gain recognized | FMV of the stock received |
| **Corporation's basis in the property** | Shareholder's basis + gain recognized | FMV |

The corporation's assumption of a liability on the property is treated as money received for basis purposes, so it **reduces** stock basis.

> **Example:** Jordan contributes equipment (FMV \$80,000, adjusted basis \$50,000, subject to a \$20,000 liability that the corporation assumes) to Bear Co., an S corporation he controls. Jordan recognizes no gain because the liability does not exceed his basis. His added stock basis is \$50,000 - \$20,000 = **\$30,000**, and Bear Co.'s basis in the equipment is **\$50,000**. If the liability had been \$65,000, Jordan would recognize \$15,000 of gain (\$65,000 - \$50,000) and add zero to his stock basis.

---

## Debt Basis

Here S corporations differ sharply from partnerships. A partner's basis includes a share of the partnership's debts. An S corporation shareholder gets **no** basis from the corporation's debts, even debts the shareholder guarantees. The only debt that counts is **debt basis** from loans the shareholder makes **directly** to the corporation.

| Source of debt | Effect on the shareholder's basis |
|---|---|
| **Corporation borrows from a bank** | None, even if the shareholder guarantees the loan |
| **Shareholder lends directly to the corporation** | Creates debt basis equal to the loan |
| **Shareholder pays on a guarantee** | Creates debt basis only when, and to the extent, the shareholder actually pays |

### Using Debt Basis to Deduct Losses

Losses reduce stock basis first. Once stock basis reaches zero, further losses reduce debt basis. Losses beyond both are suspended until basis is restored. (Deductible losses must then also clear the at-risk and passive activity limits.)

### Restoring Debt Basis and Repayments

In a later year, net income restores **debt basis first**, up to its original amount, before increasing stock basis. If the corporation repays the loan while debt basis is still reduced, the shareholder recognizes gain equal to the repayment minus the reduced debt basis. The gain is capital if the loan is evidenced by a note, and ordinary if it is an open account advance.

> **Example:** Dana's stock basis in Bear Co. is \$10,000, and her debt basis is \$25,000 from a direct loan evidenced by a note. Bear Co. allocates a \$30,000 loss to her. The first \$10,000 reduces stock basis to zero, and the next \$20,000 reduces debt basis to \$5,000. If Bear Co. repays the full \$25,000 next year before earning any income, Dana recognizes a **\$20,000 capital gain** (\$25,000 - \$5,000).

:::warning

A guarantee is not an economic outlay. Candidates often add a guaranteed bank loan to an S shareholder's basis because they are thinking of partnership rules. For an S corporation, only a direct loan from the shareholder, or an actual payment on the guarantee, creates debt basis.

:::

---

## Distributions

### Cash Distributions

For most S corporations, distributions are simple: they are tax-free to the extent of stock basis, and any excess is capital gain. The complication arises only when the corporation was once a C corporation and still has **accumulated earnings and profits (AE&P)** from those years. Then distributions come out in this order:

| Order | Source | Treatment |
|---|---|---|
| 1 | **Accumulated adjustments account (AAA)**, which tracks income taxed to shareholders during the S years | Tax-free to the extent of stock basis; any excess is capital gain |
| 2 | **AE&P** from C corporation years | **Taxable dividend** |
| 3 | Remaining stock basis | Tax-free return of capital |
| 4 | Any excess | Capital gain |

The order makes sense once you see what each layer represents. AAA is income the shareholders were already taxed on, so it comes out first and tax-free. AE&P was never taxed to the shareholders, so it is a dividend. The corporation can elect to reverse the first two layers; that planning choice is covered in [Tax Planning for S Corporations](../entity-tax-planning/tax-planning-for-s-corporations.md).

### Distributions of Noncash Property

An S corporation that distributes appreciated property recognizes **gain** as if it sold the property at FMV, just as a C corporation would. The difference is that the gain passes through to the shareholders and increases their stock basis before the distribution reduces it. Loss on depreciated property is **not** recognized. The shareholder's basis in the property is its **FMV**.

> **Example:** Bear Co., an S corporation owned entirely by Jordan, distributes equipment (FMV \$45,000, adjusted basis \$20,000). Jordan's stock basis before the distribution is \$30,000. Bear Co. recognizes a \$25,000 gain (ordinary §1245 recapture, because the drop in basis came from depreciation), which passes through and raises Jordan's basis to \$55,000. The \$45,000 distribution then reduces it to **\$10,000**. Jordan's basis in the equipment is **\$45,000**.

### Liquidating Distributions

In a complete liquidation, the S corporation recognizes gain and loss on its assets as if it sold them at FMV (§336). That gain or loss passes through and adjusts stock basis first. Then each shareholder treats the distribution as payment for the stock and recognizes **capital gain or loss** equal to the FMV received minus the adjusted stock basis (§331). The shareholder's basis in the property received is FMV. If the corporation converted from C status within the last 5 years, the built-in gains tax may also apply at the entity level.

> **Example:** Polar Inc., an S corporation owned entirely by Alex, liquidates by distributing land (FMV \$300,000, basis \$120,000). Alex's stock basis is \$100,000. Polar's \$180,000 gain passes through and raises Alex's basis to \$280,000. Alex then receives land worth \$300,000 and recognizes a **\$20,000 capital gain**. In total Alex is taxed on \$200,000, which is exactly the land's value minus his original basis. There is one level of tax, not two.

---

## Allocating Income After a Shareholder Sells

When a shareholder sells stock during the year, the corporation's items are allocated **per share, per day**. The selling shareholder is treated as owning the stock on the day of the sale. If the seller's entire interest ends, the corporation and all affected shareholders can instead elect to **close the books** as of the sale date and allocate actual results to each period.

> **Example:** Cub Entertainment, an S corporation with \$365,000 of ordinary income for the year, has one shareholder, Marcus. Marcus sells all of his stock to Pat on July 1, the 182nd day of the year. Under the per-day method, Marcus is allocated 182/365 × \$365,000 = **\$182,000**, and Pat is allocated 183/365 × \$365,000 = **\$183,000**.

---

## Reviewing Stock and Debt Basis Schedules

The blueprint asks you to review a shareholder's basis schedules and the source documents behind them. Most errors are one of these:

| Common error | Correct rule |
|---|---|
| Corporate bank debt added to basis | Only direct shareholder loans create debt basis |
| Guaranteed loan added to debt basis | A guarantee counts only when the shareholder pays |
| Losses applied before distributions | Order is income, distributions, nondeductible expenses, then losses |
| Tax-exempt income or nondeductible expenses omitted | Both adjust stock basis |
| Later income added to stock basis while debt basis is still reduced | Net income restores debt basis first |
| Loan repayment treated as tax-free when debt basis was reduced | Repayment in excess of reduced debt basis is gain |
| Distribution in excess of stock basis not reported | The excess is capital gain |

---

## Summary

| Topic | Key rule |
|---|---|
| Stock basis order | Income (and contributions), then distributions, then nondeductible expenses, then losses; never below zero |
| Noncash contributions | §351 if 80% control; liabilities assumed reduce stock basis; gain if liabilities exceed basis |
| Debt basis | Only from direct shareholder loans or actual payments on a guarantee |
| Loss order | Stock basis, then debt basis, then suspended indefinitely |
| Restoring debt basis | Net income restores debt basis first; repayment above reduced debt basis is gain |
| Distributions with no AE&P | Tax-free to the extent of stock basis; excess is capital gain |
| Distributions with AE&P | AAA, then AE&P (dividend), then remaining basis, then capital gain |
| Property distributions | Corporation recognizes gain (not loss), which passes through; shareholder takes FMV basis |
| Liquidations | Entity-level gain or loss passes through first; shareholder has capital gain or loss; one level of tax |
| Sale of stock | Per-share, per-day allocation (seller owns the stock on the sale day); elective closing of the books |
