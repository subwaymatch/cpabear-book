# Partnerships

A partnership pays no income tax. It files Form 1065 as an information return and passes its income, deductions, and credits through to the partners on Schedule K-1, and the partners pay the tax. REG covers that framework. TCP tests the record keeping that makes it work: each partner's basis and how contributions, debt, and distributions change it; the elections a partnership makes; transactions between a partner and the partnership; and what happens when an interest is sold. These are the calculations a preparer or reviewer of a partnership return makes, and this chapter takes them in that order.

The One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) did not change the partnership basis, contribution, distribution, or election rules. Its one partnership change, to disguised payments under §707(a)(2), is covered below.

---

## Basis of a Partner's Interest

Two kinds of basis run through every partnership question. **Outside basis** is a partner's basis in the partnership interest itself. **Inside basis** is the partnership's basis in its own assets. Outside basis decides how much loss a partner can deduct (before the at-risk and passive activity limits, covered in [Passive Activity and At-Risk Loss Limitations](../passive-activity-and-at-risk-loss-limitations/passive-activity-and-at-risk-loss-limitations.md)), whether a distribution is taxable, and the gain or loss when the interest is sold.

### What Changes Outside Basis

| Increases | Decreases |
|---|---|
| Cash and the adjusted basis of property contributed | Cash and the partnership's basis in property distributed |
| Distributive share of taxable income and gains | Distributive share of losses and deductions |
| Share of tax-exempt income | Share of nondeductible expenses |
| Increase in share of partnership liabilities (treated as a cash contribution) | Decrease in share of partnership liabilities (treated as a cash distribution) |

Apply the increases first, then distributions, then losses. Basis can never go below zero. A loss that exceeds basis is suspended and carried forward until the partner has basis again.

### Contributions of Property (§721)

Contributing property to a partnership in exchange for an interest is generally tax-free to the partner and the partnership. Unlike a corporate formation, there is no control requirement.

| Item | Rule |
|---|---|
| **Partner's gain or loss** | None, unless the partner is relieved of liabilities in excess of basis (below) |
| **Partner's outside basis** | Basis of property and cash contributed - liabilities the partnership assumes from the partner + the partner's share of all partnership liabilities |
| **Partnership's inside basis** | **Carryover** basis from the partner |
| **Holding period** | The partnership tacks the partner's holding period for capital and §1231 assets |

Contributing mortgaged property has two effects at once. The partner is relieved of the whole debt, which is treated as a cash distribution, and the partner picks up a share of the same debt as a partnership liability, which is treated as a cash contribution. Only the net relief reduces basis. If the net relief exceeds the partner's basis, the excess is gain.

> **Example:** Jordan contributes land (FMV \$200,000, adjusted basis \$120,000, subject to a \$90,000 mortgage) to Kodiak Partners for a 50% interest. The partnership assumes the mortgage.
>
> | Calculation | Amount |
> |---|---|
> | Adjusted basis of land | \$120,000 |
> | Less: mortgage assumed by the partnership | (\$90,000) |
> | Plus: Jordan's 50% share of the mortgage | \$45,000 |
> | **Jordan's outside basis** | **\$75,000** |
>
> Jordan's net relief of \$45,000 is less than his \$120,000 basis, so he recognizes no gain. Kodiak's basis in the land is \$120,000. If the mortgage had been \$300,000 instead, Jordan's net relief of \$150,000 would exceed his \$120,000 basis by \$30,000: he would recognize \$30,000 of gain, and his outside basis would be zero.

### Partnership Liabilities and Partner Loans

A partner's outside basis includes a share of the partnership's debts. This is the main reason partners can often deduct more loss than S corporation shareholders. How a debt is shared depends on who bears the risk of repaying it:

| Debt type | Allocated to | Also increases at-risk amount? |
|---|---|---|
| **Recourse** | Partners who bear the **economic risk of loss** (typically general partners) | Yes |
| **Nonrecourse** | All partners, generally by their **profit-sharing ratios** | No |
| **Qualified nonrecourse financing** (real estate) | Like other nonrecourse debt | Yes |

When a partner lends money to the partnership, the partnership has a liability to that partner. Because the lending partner bears the risk of loss on the loan, it is a recourse liability allocated entirely to that partner, so it increases only the lender's outside basis.

> **Example:** Grizzly Partners LP has two partners who share profits equally: Jamie, the general partner, and Sarah, a limited partner. During the year, the partnership borrows \$100,000 from a bank on a recourse loan (Jamie bears the risk), borrows \$200,000 on a nonrecourse mortgage, and borrows \$40,000 from Sarah.
>
> | Liability | Jamie | Sarah |
> |---|---|---|
> | Recourse bank loan | \$100,000 | \$0 |
> | Nonrecourse mortgage (50% each) | \$100,000 | \$100,000 |
> | Loan from Sarah | \$0 | \$40,000 |
> | **Increase in outside basis** | **\$200,000** | **\$140,000** |

### Reviewing a Basis Schedule

The blueprint asks you to review a partner's basis schedule against the K-1 and other source documents. Work through the schedule in order and check each line:

| Item | What to check |
|---|---|
| Beginning basis | Agrees with last year's ending basis |
| Income and loss | Agrees with the K-1, including separately stated items |
| Tax-exempt income and nondeductible expenses | Included (they adjust basis even though they are not taxable or deductible) |
| Liabilities | Recourse debt only to partners with the risk of loss; nonrecourse debt by profit shares; partner loans to the lender |
| Contributions and distributions | Property at adjusted basis, not FMV; a decrease in liabilities shown as a distribution |
| Ending basis | Not below zero; any excess loss shown as suspended |

---

## Partnership and Partner Elections

Most elections that affect a partnership's income are made by the **partnership**, not by each partner (§703(b)). A few belong to the partners individually, such as whether to deduct or credit foreign taxes.

### Tax Year

A partnership cannot simply pick its tax year. It must use the first of these that applies:

| Order | Required year |
|---|---|
| 1 | **Majority interest** year: the tax year of partners owning more than 50% of profits and capital |
| 2 | **Principal partners'** year: the tax year of all partners owning 5% or more |
| 3 | **Least aggregate deferral**: the year that produces the least total deferral of income to the partners |

A partnership can use a different year only if it shows a business purpose (such as a natural business year, where at least 25% of gross receipts fall in the last 2 months) or makes a **§444 election**. A §444 election allows a year with no more than 3 months of deferral, and the partnership must make a required payment that roughly offsets the deferral benefit.

### Optional Basis Adjustment (§754)

When a partnership interest changes hands, the buyer's outside basis reflects the price paid, but the partnership's inside basis does not change. Without an adjustment, the buyer can be taxed on gain that the buyer effectively paid for. A **§754 election** fixes this mismatch:

| Event | Code section | Adjustment |
|---|---|---|
| **Transfer of an interest** by sale, exchange, or death | **§743(b)** | Inside basis is adjusted **for the transferee partner only** |
| **Distribution of property** | **§734(b)** | Inside basis of the partnership's **remaining** property is adjusted |

Once made, the election applies to all later transfers and distributions until the IRS consents to revoke it. Even without an election, the adjustment is **mandatory** when the partnership has a **substantial built-in loss** at the time of a transfer (inside basis exceeds the FMV of its property by more than \$250,000) or a **substantial basis reduction** on a distribution. The §743(b) calculation appears under Ownership Changes below.

### Other Elections

| Election | What it does |
|---|---|
| **§704(c) method** | Chooses how to allocate built-in gain or loss on contributed property: the traditional method, traditional with curative allocations, or the remedial method (see [Tax Planning for Partnerships](../entity-tax-planning/tax-planning-for-partnerships.md)) |
| **Electing out of the centralized audit regime** | A partnership with 100 or fewer partners, all of them eligible types (individuals, C and S corporations, estates), can elect each year on a timely return to be audited partner by partner |

---

## Transactions Between a Partner and the Partnership

### Services Performed by a Partner

A partner who works for the partnership can be paid in two ways, and the difference is the capacity in which the partner acts:

| Capacity | Payment | Treatment |
|---|---|---|
| **As a partner** | **Guaranteed payment** (§707(c)), fixed without regard to partnership income | Ordinary income to the partner, included in the partner's year in which the partnership's year ends; deductible by the partnership unless it must be capitalized; subject to self-employment tax |
| **Not as a partner** (as an outsider would) | **§707(a) payment** | Treated exactly like a payment to a nonpartner: the partner reports it under the partner's own method, and the partnership deducts or capitalizes it under the normal rules |

> **Example:** Dana, a partner in Kodiak Partners, is a lawyer. If the partnership agreement pays her \$80,000 a year for managing the partnership's legal affairs, that is a guaranteed payment: ordinary income to Dana, deductible by Kodiak, and subject to self-employment tax. If she instead handles a separate lawsuit for Kodiak under an engagement letter, on the same terms she offers her other clients, the fee is a §707(a) payment. Dana reports it with the rest of her law practice's income (where self-employment tax applies, as it would for any client), and Kodiak deducts it when its accounting method allows.

**Disguised payments.** If a partner performs services or transfers property and receives a related allocation and distribution that is really a payment for them, §707(a)(2) recharacterizes the arrangement as a payment to a nonpartner. For services performed and property transferred after July 4, 2025, OBBBA made this rule apply "except as provided by the Secretary", so it no longer waits on regulations. Disguised sales of property are covered under Distributions below.

### Built-In Gain on Contributed Property

Contributed property often has a built-in gain or loss: a difference between its FMV and its tax basis at contribution. Three rules keep that built-in amount with the contributing partner:

| Rule | Effect |
|---|---|
| **§704(c)** | Built-in gain or loss is allocated to the **contributing partner** when the partnership sells the property, and depreciation is allocated to account for it |
| **§724** | Contributed unrealized receivables stay ordinary income property, contributed inventory stays ordinary for 5 years, and built-in loss on contributed capital loss property stays capital for 5 years |
| **Depreciation recapture** | Recapture potential carries over to the partnership and is triggered when it sells the property |

The planning side of §704(c), including the 7-year anti-mixing-bowl rules, is in [Tax Planning for Partnerships](../entity-tax-planning/tax-planning-for-partnerships.md).

### Nonliquidating Distributions

A distribution that does not end the partner's interest is almost always tax-free, because the partner simply reduces outside basis.

| Distribution | Partner's gain or loss | Partner's basis in property received |
|---|---|---|
| **Cash** (including marketable securities and any decrease in the partner's share of liabilities) | Gain only if cash exceeds outside basis; never a loss | Not applicable |
| **Property** | None | **Lesser of** the partnership's inside basis or the partner's outside basis remaining after any cash |

The partnership recognizes no gain or loss. If the partner's remaining outside basis is too small to cover several distributed properties, it is assigned first to unrealized receivables and inventory, then to other property.

> **Example:** Sarah's outside basis in Grizzly Partners LP is \$50,000. The partnership distributes \$20,000 cash and equipment with an inside basis of \$40,000 (FMV \$55,000). The cash reduces her basis to \$30,000. Her basis in the equipment is the lesser of \$40,000 or \$30,000, so it is **\$30,000**, and her outside basis falls to **zero**. She recognizes no gain.

### Liquidating Distributions

A liquidating distribution ends the partner's entire interest, so the partner's whole outside basis must go somewhere.

| Rule | Treatment |
|---|---|
| **Gain** | Only if cash received exceeds outside basis |
| **Loss** | Only if the partner receives **nothing but** cash, unrealized receivables, and inventory, and their total basis is less than outside basis |
| **Basis in property received** | Outside basis is reduced by cash, then assigned to unrealized receivables and inventory (up to the partnership's basis), and any remainder goes to other property, even if that exceeds the partnership's basis |

> **Example:** Alex's outside basis in Kodiak Partners is \$100,000. In liquidation of his interest, he receives \$30,000 cash and land with an inside basis of \$60,000 (FMV \$90,000). The cash leaves \$70,000 of basis, all of which goes to the land, so Alex's basis in the land is **\$70,000** and he recognizes no gain or loss. If Alex had instead received \$30,000 cash and inventory with an inside basis of \$40,000, he could not step the inventory up. He would take a \$40,000 basis in the inventory and recognize a **\$30,000 capital loss** (\$100,000 - \$30,000 - \$40,000).

### Disguised Sales (§707(a)(2)(B))

A partner might try to sell property to the partnership tax-free by "contributing" it and then taking cash out. If a contribution and a related distribution occur within **2 years**, they are **presumed** to be a sale unless the facts clearly show otherwise; after 2 years, the presumption reverses. A worked example is in [Tax Planning for Partnerships](../entity-tax-planning/tax-planning-for-partnerships.md).

---

## Ownership Changes

### Allocating the Year's Income When an Interest Is Sold

When a partner sells an interest during the year, the year's income must be split between the seller and the buyer. The default is the **interim closing of the books** method, which allocates actual results before and after the sale. The partners may agree to use the **proration** method instead, which spreads the full year's results evenly by day.

> **Example:** Sam sells his 25% interest in Kodiak Partners to Pat on September 30. Kodiak earns \$80,000 in the first 9 months and \$40,000 in the last 3 months. Under an interim closing, Sam is allocated 25% × \$80,000 = **\$20,000** and Pat is allocated 25% × \$40,000 = **\$10,000**. Under proration, the \$30,000 annual share would be split by days: about \$22,438 to Sam (273 days) and \$7,562 to Pat (92 days).

### The Seller's Gain or Loss

$$\text{Gain or loss} = \text{Amount realized} - \text{Outside basis}$$

The amount realized includes cash, the FMV of any property received, and the seller's share of partnership liabilities, because the seller is relieved of them. The gain is capital, except that **§751** treats the part attributable to the partnership's "hot assets" (unrealized receivables, including depreciation recapture, and inventory) as **ordinary income**.

### Basis Adjustment for the Buyer (§743(b))

With a §754 election in effect (or when the adjustment is mandatory), the buyer gets a special basis adjustment equal to the difference between the buyer's outside basis and the buyer's share of the partnership's inside basis. The adjustment is then allocated among the partnership's assets based on the buyer's share of the built-in gain or loss in each, first between ordinary income property and capital gain property (§755).

> **Example:** Continuing the sale above, Kodiak Partners has no liabilities and two assets:
>
> | Asset | Inside basis | FMV | Pat's 25% share of built-in gain |
> |---|---|---|---|
> | Inventory | \$80,000 | \$100,000 | \$5,000 |
> | Land | \$200,000 | \$260,000 | \$15,000 |
> | **Total** | **\$280,000** | **\$360,000** | **\$20,000** |
>
> Pat pays Sam \$90,000 (25% × \$360,000). Sam's outside basis is \$70,000, so Sam has \$20,000 of gain: **\$5,000 ordinary** under §751 (his share of the inventory gain) and **\$15,000 capital**. Kodiak has a §754 election, so Pat's §743(b) adjustment is \$90,000 - \$70,000 (25% of inside basis) = **\$20,000**, allocated \$5,000 to the inventory and \$15,000 to the land. When Kodiak later sells the inventory for \$100,000, Pat's \$5,000 share of the gain is offset by the \$5,000 adjustment, so Pat is not taxed on appreciation he paid for. A negative adjustment works the same way in reverse.

---

## Summary

| Topic | Key rule |
|---|---|
| Outside basis | Increases first, then distributions, then losses; never below zero |
| Property contributions (§721) | No gain or loss; carryover inside basis; gain only if net liability relief exceeds basis |
| Liabilities | Recourse to partners with the risk of loss; nonrecourse by profit shares; a partner's loan goes to that partner |
| Tax year | Majority interest, then principal partners, then least aggregate deferral; or business purpose or §444 |
| §754 election | §743(b) adjustment for a transferee; §734(b) adjustment on distributions; mandatory for substantial built-in loss |
| Guaranteed payments | Ordinary income; deductible by the partnership; subject to self-employment tax |
| §707(a) payments | Treated as paid to a nonpartner; disguised payments recharacterized (self-executing after July 4, 2025) |
| Contributed property | §704(c) built-in gain or loss goes to the contributor; §724 preserves character |
| Nonliquidating distributions | Gain only if cash exceeds basis; no loss; property basis is the lesser of inside or outside basis |
| Liquidating distributions | Loss only with cash, receivables, and inventory alone; remaining basis goes to other property |
| Disguised sales | Contribution and distribution within 2 years presumed to be a sale |
| Sale of an interest | Interim closing (default) or proration; §751 ordinary income for hot assets; liabilities are part of amount realized |
| §743(b) adjustment | Buyer's outside basis minus share of inside basis, allocated by built-in gain (§755) |
