# Tax Planning for S Corporations

S corporation planning is about keeping the benefits of pass-through treatment while working inside the rules that come with it. Most of the traps come from a corporation's C corporation past: the built-in gains tax on appreciation from before the election, and accumulated earnings and profits that can turn distributions into dividends or even end the election. The TCP blueprint asks you to project the built-in gains tax on a proposed sale, identify what happens when an election terminates, work out the tax result of contributions, distributions, and loans between the corporation and its shareholders, and evaluate the election to distribute accumulated earnings and profits before the accumulated adjustments account. This chapter builds on [S Corporations](../entity-tax-compliance/s-corporations.md) and takes those topics in turn.

The One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) did not change the S corporation rules. It did make the 20% qualified business income deduction permanent for tax years beginning after December 31, 2025, which keeps the S election attractive for profitable businesses whose owners would otherwise face two levels of tax in a C corporation.

---

## Built-In Gains Tax Planning

### How the Tax Works

A C corporation that elects S status could otherwise sell its appreciated assets after the election and escape the corporate-level tax. The **built-in gains (BIG) tax** of §1374 prevents that. It taxes built-in gain that the corporation recognizes during the **recognition period**, the **5 years** beginning on the first day of its first S year. The total subject to tax is capped at the **net unrealized built-in gain (NUBIG)**: the excess of the FMV of all the corporation's assets over their total basis on that first day.

| Element | Rule |
|---|---|
| **Built-in gain** | Gain on an asset, up to the asset's built-in gain on the conversion date; appreciation after conversion is not built-in gain |
| **Rate** | The highest corporate rate, **21%** |
| **Annual limit** | Net recognized built-in gain for the year, but not more than the corporation's taxable income computed as if it were a C corporation (an excess carries to later years in the period) |
| **Overall limit** | Total recognized built-in gain over the period cannot exceed NUBIG |
| **Offsets** | NOL and capital loss carryforwards from C corporation years reduce the gain taxed, and C year business credit carryforwards reduce the tax |
| **Pass-through** | The gain still passes through to the shareholders, reduced by the BIG tax, which passes through as a loss |

> **Example:** Bear Co. converted from a C corporation to an S corporation on January 1, 2023. That day it held:
>
> | Asset | FMV | Basis | Built-in gain |
> |---|---|---|---|
> | Land | \$400,000 | \$250,000 | \$150,000 |
> | Equipment | \$180,000 | \$120,000 | \$60,000 |
> | Inventory | \$70,000 | \$50,000 | \$20,000 |
> | **NUBIG** | | | **\$230,000** |
>
> On June 15, 2026, within the recognition period (2023 through 2027), Bear Co. sells the land for \$450,000, a \$200,000 gain with no change in basis since conversion. The recognized built-in gain is the lesser of the \$200,000 gain or the land's \$150,000 built-in gain: **\$150,000**. Assuming taxable income does not limit it, the BIG tax is 21% × \$150,000 = **\$31,500**. The other \$50,000 is post-conversion appreciation and is not subject to the tax. The shareholders report the full \$200,000 gain and a \$31,500 loss for the BIG tax.

### Minimizing the Tax

| Strategy | Description |
|---|---|
| **Wait out the recognition period** | Gain recognized after the 5 years end is not subject to the tax |
| **Use C corporation carryforwards** | NOLs and capital losses from C years offset recognized built-in gain; they cannot pass through to the shareholders, so this is often their only use |
| **Sell assets with little built-in gain first** | Sell post-conversion purchases or low-gain assets during the period, and hold high-gain assets until it ends |
| **Track the NUBIG ceiling** | Once cumulative recognized built-in gain reaches NUBIG, no more BIG tax applies |
| **Keep records from the conversion date** | An appraisal at conversion supports the claim that later gain is post-conversion appreciation |

Installment sales do not escape the tax. If the sale happens during the recognition period, gain from payments received after the period ends is still built-in gain.

> **Example:** Bear Co. converted with NUBIG of \$500,000 and a \$200,000 NOL carryforward from its C years. In its second S year, it recognizes \$300,000 of built-in gain. The NOL offsets \$200,000, so the BIG tax is 21% × \$100,000 = **\$21,000**. The remaining NUBIG ceiling is \$500,000 - \$300,000 = **\$200,000**.

:::tip[Exam Tip]

The built-in gain on any one sale is limited to that asset's built-in gain at conversion, and total built-in gain over the 5 years is limited to NUBIG. A question that gives you the sale price, the conversion-date values, and the earlier sales is testing both limits.

:::

---

## Terminating the S Election

### How an Election Ends

| Event | When the termination takes effect |
|---|---|
| **Voluntary revocation**, with the consent of shareholders owning more than 50% of the shares | The first day of the tax year if made by the 15th day of the 3rd month; otherwise the first day of the next tax year; or a later date the revocation specifies |
| **Ceasing to qualify**, such as a 101st shareholder, an ineligible shareholder, or a second class of stock | The day the disqualifying event occurs |
| **Excess passive investment income**: passive investment income above 25% of gross receipts for 3 consecutive years while the corporation has accumulated E&P at the end of each year | The first day of the fourth year |

The passive income rule applies only to a corporation with **accumulated E&P** from C years. Before it ends the election, it costs money: in each year passive investment income exceeds 25% of gross receipts, the corporation pays a 21% tax on its excess net passive income (§1375).

### What Termination Means

When an election ends partway through a year, the year splits into an **S short year** and a **C short year**. Income is allocated between them per day, unless all shareholders consent to close the books on the termination date. The corporation files Form 1120-S for the S period and Form 1120 for the C period. It generally **cannot re-elect S status for 5 years** without IRS consent.

An **inadvertent termination**, such as stock passing to an ineligible trust without anyone noticing, can be forgiven under §1362(f) if the corporation and its shareholders fix the problem promptly once it is discovered and the IRS agrees the termination was inadvertent.

### Planning Around Termination

| Strategy | Description |
|---|---|
| **Shareholder agreements** | Restrict transfers to eligible shareholders and include buy-sell provisions, so no one can terminate the election by selling to an ineligible buyer |
| **Monitor passive investment income** | If the corporation has accumulated E&P, keep passive investment income at or below 25% of gross receipts |
| **Eliminate accumulated E&P** | A corporation with no accumulated E&P can never lose its election, or pay §1375 tax, because of passive income (see the AE&P election below) |
| **Time a voluntary revocation** | Choosing the first day of a tax year avoids a split year and a short-year return |

---

## Shareholder Transactions

### Contributing Property

A contribution of property to an S corporation follows §351, exactly as for a C corporation: no gain or loss if the contributing shareholders have 80% control, except to the extent of boot or liabilities in excess of basis.

| Property | Planning point |
|---|---|
| **Appreciated property** | The gain is deferred, and the corporation takes a carryover basis; when it sells, the gain passes through to **all** shareholders by ownership |
| **Property worth less than its basis** | No loss is recognized; selling it first lets the shareholder deduct the loss |
| **Mortgaged property** | The liability reduces stock basis, and gain results if liabilities exceed the basis of the property contributed |

The first row is the important difference from a partnership. A partnership allocates built-in gain on contributed property back to the contributing partner under §704(c). An S corporation has no such rule: every item passes through in proportion to stock ownership. If one shareholder contributes appreciated property and the corporation sells it, all shareholders share the gain, so the owners should account for the built-in gain when they set the number of shares issued, or use a sale instead of a contribution.

### Distributions From AAA and AE&P

A corporation with accumulated E&P distributes first from the **accumulated adjustments account (AAA)**, tax-free to the extent of stock basis, then from **AE&P** as a taxable dividend, then from any remaining basis, and finally as capital gain.

Under **§1368(e)(3)**, the corporation can elect, with the consent of every shareholder who receives a distribution that year, to distribute **AE&P first**. That seems backward, since it makes distributions taxable sooner, but it is the way to eliminate AE&P and with it the passive income tax and the termination risk. The regulations also allow a **deemed dividend** election, which treats AE&P as distributed and immediately contributed back, so the corporation can purge AE&P without paying out cash.

> **Example:** Cub Entertainment, an S corporation, has AAA of \$200,000 and AE&P of \$80,000. It distributes \$250,000 to its sole shareholder, Alex, who has ample stock basis.
>
> | Ordering | From AAA (tax-free) | From AE&P (dividend) | AE&P left |
> |---|---|---|---|
> | **Default: AAA first** | \$200,000 | \$50,000 | \$30,000 |
> | **§1368(e)(3) election: AE&P first** | \$170,000 | \$80,000 | **\$0** |
>
> The election adds \$30,000 of dividend income this year (\$7,140 at a 23.8% rate). In exchange, Cub has no AE&P left, so its passive income can no longer trigger the §1375 tax or end its election.

:::tip[Exam Tip]

When an S corporation with AE&P has passive investment income near or above 25% of gross receipts, compare the tax on the extra dividend with the cost of the §1375 tax and a possible loss of the election. The election is usually worth making in that situation.

:::

### Loans and Debt Basis

A shareholder can deduct S corporation losses only up to stock basis plus **debt basis**, and debt basis comes only from loans the shareholder makes **directly** to the corporation.

| Approach | Effect on basis |
|---|---|
| **Shareholder lends directly to the corporation** | Creates debt basis, allowing more loss to be deducted |
| **Shareholder guarantees a bank loan to the corporation** | No debt basis unless and until the shareholder actually pays |
| **Back-to-back loan** | The shareholder borrows from the bank personally and lends the money to the corporation; this creates debt basis because the corporation owes the shareholder |

> **Example:** Polar Inc., an S corporation, allocates a \$120,000 loss to its sole shareholder, Jordan, whose stock basis is \$50,000 and debt basis is \$0. Jordan can deduct only \$50,000. If Jordan lends Polar \$70,000 before year-end, his debt basis becomes \$70,000 and he can deduct the full \$120,000 (\$50,000 against stock basis and \$70,000 against debt basis).

A back-to-back loan must have substance: the shareholder must be personally liable to the bank, and the corporation must owe the shareholder. Having the bank lend to the corporation with the shareholder's guarantee does not create debt basis, however the paperwork describes it.

### Repaying a Shareholder Loan

If losses have reduced debt basis, repaying the loan produces gain equal to the repayment minus the reduced debt basis. Net income in a later year restores debt basis first, so the timing of a repayment matters.

> **Example:** Dana lent \$50,000 to Panda Industries, an S corporation, and losses have reduced her debt basis to \$15,000. If Panda repays the full loan now, Dana recognizes a **\$35,000 gain** (\$50,000 - \$15,000). If Panda first allocates \$35,000 of net income to her, that income restores her debt basis to \$50,000, and the repayment is then tax-free.

---

## The Post-Termination Transition Period

After an S election ends, the former shareholders get a limited window, the **post-termination transition period (PTTP)**, to finish S corporation business. It generally runs for 1 year after the last day of the last S year (or until the due date of the last S return, including extensions, if later).

| Item | Rule |
|---|---|
| **Cash distributions during the PTTP** | Come first from AAA, tax-free to the extent of stock basis |
| **Suspended losses** | Deductible on the last day of the PTTP, up to the shareholder's stock basis at that time |
| **After the PTTP** | Distributions follow C corporation rules: dividends to the extent of E&P |

Because the window is short, plan the AAA distributions and any contributions needed to free suspended losses as soon as the election ends.

---

## Comprehensive Planning Example

> **Example:** The owners of Grizzly Inc., a C corporation, are considering an S election. Grizzly's assets are worth \$2,000,000 and have a total basis of \$1,200,000, so NUBIG is \$800,000. Grizzly also has \$300,000 of accumulated E&P and a \$150,000 NOL carryforward. The owners plan to sell the business in about 6 years.
>
> | Planning question | Analysis |
> |---|---|
> | **BIG tax exposure** | If the assets are sold within the 5-year recognition period, the NOL offsets \$150,000 of the \$800,000 built-in gain, and the BIG tax is 21% × \$650,000 = **\$136,500** |
> | **Timing the sale** | An asset sale in year 6, after the recognition period, avoids the BIG tax entirely, saving \$136,500 |
> | **Passive income risk** | The \$300,000 of AE&P makes passive investment income a risk; Grizzly should monitor it each year |
> | **Purging AE&P** | A §1368(e)(3) election or a deemed dividend election can eliminate the \$300,000 of AE&P, at the cost of dividend tax to the shareholders now |

---

## Summary

| Topic | Key rule |
|---|---|
| BIG tax | 21% on built-in gain recognized within 5 years of conversion; limited by each asset's built-in gain, taxable income, and NUBIG |
| Reducing the BIG tax | Wait out the period, use C year NOLs, sell low-gain assets first; installment sales do not escape it |
| Termination events | Revocation with more than 50% consent, failing to qualify, or 3 years of excess passive income with AE&P |
| After termination | S and C short years; 5-year wait to re-elect; relief for inadvertent terminations |
| Contributions | §351 applies; no §704(c) equivalent, so gain on contributed property is shared by all shareholders |
| AAA and AE&P | Default order is AAA first; the §1368(e)(3) or deemed dividend election purges AE&P |
| Loans | Direct and back-to-back loans create debt basis; guarantees do not until paid |
| Loan repayments | Gain to the extent repayment exceeds reduced debt basis; net income restores debt basis first |
| PTTP | About 1 year to take AAA distributions tax-free and deduct suspended losses against stock basis |
