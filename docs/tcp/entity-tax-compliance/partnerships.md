# Partnerships

## Introduction

Partnerships are **pass-through entities** that file Form 1065 as an information return and allocate income, loss, deductions, and credits to partners on **Schedule K-1**. While REG covers the fundamentals of partnership taxation, the TCP exam goes significantly deeper — testing your ability to calculate partner basis with precision (including the effects of contributions, distributions, debt allocations, and partner loans), understand partnership and partner elections, analyze transactions between partners and partnerships, and compute the tax consequences of ownership changes. The emphasis is on **compliance mechanics** — performing the calculations that a CPA must handle when preparing or reviewing a partnership return.

---

## Basis of Partner's Interest (Outside Basis)

### The BASE Framework

The partner's **outside basis** determines the deductibility of losses, the tax treatment of distributions, and the gain or loss on sale of the partnership interest. Use the **BASE** mnemonic:

| Letter | Component |
|---|---|
| **B** | **Beginning** basis |
| **A** | **Add**: contributions, income (ordinary + separately stated + tax-exempt), increase in share of liabilities |
| **S** | **Subtract**: distributions, losses and deductions, nondeductible expenses, decrease in share of liabilities |
| **E** | **Ending** basis |

### Contributions of Noncash Property

When a partner contributes property to a partnership, the transaction is generally **nonrecognition** under IRC §721.

| Element | Rule |
|---|---|
| **Partner's basis in partnership interest** | Adjusted basis of property contributed + cash contributed − liabilities assumed by partnership that relieve the partner + partner's share of partnership liabilities assumed |
| **Partnership's basis in property (inside basis)** | **Carryover basis** from the contributing partner |
| **Holding period** | Partnership tacks the contributing partner's holding period for contributed capital and §1231 assets |
| **Gain recognition exception** | Gain recognized if liability relief exceeds the partner's basis in contributed assets (treated as a distribution of money under §752) |

:::caution

When a partner contributes property subject to a liability, the liability assumption creates two simultaneous effects: (1) the partner is **relieved** of the liability (treated as a distribution of money, reducing basis), and (2) the partner picks up their **share** of the partnership's new liability (increasing basis). The net effect depends on the partner's ownership percentage.

:::

> **Example:** Jordan contributes land (FMV \$200,000, adjusted basis \$120,000, subject to a \$90,000 mortgage) to BIF Partners for a 50% interest. The partnership assumes the mortgage.

| Calculation | Amount |
|---|---|
| Adjusted basis of land | \$120,000 |
| − Liability assumed by partnership (100%) | −\$90,000 |
| + Partner's share of partnership liability (50% × \$90,000) | +\$45,000 |
| **Jordan's outside basis** | **\$75,000** |

BIF Partners' inside basis in the land is \$120,000 (carryover). No gain is recognized because the net liability relief (\$90,000 − \$45,000 = \$45,000) does not exceed Jordan's \$120,000 adjusted basis.

### Impact of Debt on Partner Basis

A critical distinction of partnerships is that a partner's outside basis includes their share of **partnership-level liabilities**. The allocation of liabilities depends on whether the debt is recourse or nonrecourse.

| Debt Type | Allocated To | Basis |
|---|---|---|
| **Recourse liabilities** | Partners who bear the **economic risk of loss** (typically general partners) | Increases outside basis |
| **Nonrecourse liabilities** | Allocated among **all partners** based on profit-sharing ratios (with adjustments for §704(c) minimum gain and partnership minimum gain) | Increases outside basis |
| **Qualified nonrecourse financing** (real estate) | Allocated like nonrecourse — to all partners based on profit-sharing ratios | Increases outside basis and **at-risk amount** |

> **Example:** BIF Partners has \$100,000 of recourse debt and \$200,000 of nonrecourse debt. Jamie (general partner, 50%) and Sarah (limited partner, 50%) share profits equally. Jamie bears all economic risk of loss for recourse debt.

| Debt Allocation | Jamie | Sarah |
|---|---|---|
| Recourse debt | \$100,000 | \$0 |
| Nonrecourse debt (50% each) | \$100,000 | \$100,000 |
| **Total liability share** | **\$200,000** | **\$100,000** |

#### Partner Loans to the Partnership

When a partner lends money **directly** to the partnership:

| Effect | Treatment |
|---|---|
| **Partnership side** | Records a liability to the partner |
| **Lending partner's basis** | The loan is a partnership liability — allocated among partners under the recourse/nonrecourse rules (the lending partner typically bears the economic risk of loss and is allocated the debt) |
| **Distinction from S corps** | In a partnership, the loan increases basis through the liability allocation — in an S corp, a shareholder loan creates separate debt basis |

### Impact of Distributions on Basis

#### Cash Distributions

| Rule | Treatment |
|---|---|
| Cash ≤ outside basis | **No gain** recognized; reduce outside basis by amount of cash |
| Cash > outside basis | Gain recognized to the extent cash exceeds basis (treated as capital gain from sale of partnership interest) |

#### Property Distributions

| Rule | Treatment |
|---|---|
| General rule | **No gain** recognized to the partner; partner takes the **lesser of** (1) the partnership's inside basis in the property or (2) the partner's outside basis, reduced by any cash received in the same distribution |
| Partnership | **No gain or loss** recognized on a nonliquidating property distribution |

> **Example:** Sarah has an outside basis of \$50,000 in BIF Partners. The partnership distributes \$20,000 cash and equipment with an inside basis of \$40,000 (FMV \$55,000). Sarah's basis is first reduced by the cash: \$50,000 − \$20,000 = \$30,000. Sarah's basis in the equipment is the lesser of the partnership's inside basis (\$40,000) or Sarah's remaining outside basis (\$30,000) = **\$30,000**. Sarah's outside basis is reduced to **\$0**. No gain is recognized.

### Reviewing Basis Schedules

The TCP Blueprint requires candidates to review partner basis schedules for accuracy. Key items to verify:

| Item | What to Check |
|---|---|
| Beginning basis | Matches prior-year ending basis |
| Liability allocations | Recourse allocated to partners with economic risk of loss; nonrecourse allocated by profit-sharing ratios |
| Income and loss allocations | Match Schedule K-1; special allocations have substantial economic effect |
| Contributions and distributions | Property contributions at adjusted basis; cash distributions reduce basis |
| Tax-exempt income | Increases basis even though not taxable |
| Nondeductible expenses | Reduce basis even though not deductible |
| Ending basis | Cannot go below zero |

:::tip[Exam Tip]

Common basis schedule errors include: allocating nonrecourse debt only to general partners, failing to include tax-exempt income in basis, forgetting that a decrease in a partner's share of liabilities is treated as a cash distribution, and computing basis without following the correct adjustment ordering.

:::

---

## Partnership and Partner Elections

### Tax Year Election

A partnership must adopt a tax year determined under a hierarchy of rules:

| Priority | Rule | Description |
|---|---|---|
| 1 | **Majority interest tax year** | Tax year of partners owning > 50% of profits and capital |
| 2 | **Principal partners' tax year** | Tax year common to all partners owning ≥ 5% of profits or capital |
| 3 | **Least aggregate deferral** | Tax year that produces the least aggregate deferral of income to partners |
| 4 | **§444 election** | Partnership may elect a fiscal year with a maximum 3-month deferral (requires a required payment deposit) |

### Election to Adjust Basis of Partnership Property (§754)

A partnership may elect under **IRC §754** to adjust the basis of partnership property when:

| Triggering Event | Code Section | Effect |
|---|---|---|
| **Transfer of partnership interest** (sale, exchange, or death) | **§743(b)** | Adjust inside basis of partnership assets with respect to the **transferee partner only** |
| **Distribution of property** to a partner | **§734(b)** | Adjust inside basis of **remaining** partnership property |

The §754 election, once made, applies to **all** subsequent transfers and distributions unless revoked with IRS consent.

#### §743(b) Adjustment on Transfer

The §743(b) adjustment equals the difference between the transferee partner's **outside basis** (purchase price or stepped-up basis at death) and their share of the partnership's **inside basis** in its assets.

> **Example:** Marcus purchases Jamie's 50% interest in BIF Partners for \$150,000. BIF Partners' total inside basis in its assets is \$200,000, so Marcus's share of inside basis is \$100,000. If a §754 election is in effect, Marcus receives a **\$50,000 positive §743(b) adjustment** (\$150,000 − \$100,000), which is allocated among the partnership's assets.

:::info

Without a §754 election, the transferee partner's share of inside basis would be \$100,000 — creating a mismatch between inside and outside basis. The §754 election eliminates this mismatch and is often advantageous when the purchase price exceeds the share of inside basis (stepped-up scenario).

:::

### Other Partner Elections

| Election | Description |
|---|---|
| **§704(c) method** | Partners may select from traditional, traditional with curative allocations, or remedial allocation methods for built-in gain/loss property |
| **Optional basis adjustments** | §754 election (discussed above) |
| **Electing out of partnership audit rules** | Qualifying small partnerships (≤ 100 K-1s, all eligible partners) may elect out of the centralized partnership audit regime |

---

## Transactions Between Partner and Partnership

### Services Performed by a Partner

When a partner provides services to the partnership, the tax treatment depends on whether the partner is acting in their **capacity as a partner** or as an **outsider**.

| Capacity | Payment Type | Tax Treatment |
|---|---|---|
| **As a partner** | **Guaranteed payment** | Ordinary income to partner; deductible by partnership; subject to self-employment tax |
| **Not in capacity as a partner** (outsider) | **IRC §707(a) payment** | Treated as a payment to a third party — ordinary income to partner, deductible by partnership if an ordinary business expense |

> **Example:** Dana, a partner in Bear Co. partnership, provides legal services to the partnership. If Dana acts in her capacity as a partner and receives a guaranteed payment of \$80,000, it is ordinary income to Dana and deductible by Bear Co. If Dana provides the same services in a transaction not in her capacity as a partner (e.g., a separately negotiated contract), the \$80,000 is a §707(a) payment — still ordinary income to Dana and deductible by Bear Co., but a §707(a) payment is generally **not** subject to self-employment tax (unlike a guaranteed payment, which **is** subject to SE tax).

### Contributions of Noncash Property

The gain/loss calculation on contributions to a partnership follows the general §721 nonrecognition rules discussed in the basis section above. Key additional concepts:

| Concept | Rule |
|---|---|
| **Built-in gain or loss** | When a partner contributes property with FMV ≠ basis, the built-in gain or loss must be allocated to the contributing partner when the property is sold (IRC §704(c)) |
| **Depreciation recapture potential** | Carries over to the partnership — recapture is triggered on later sale |
| **Character** | The character of gain or loss on contributed property (ordinary, §1231, capital) is determined by the partnership's use, but §724 requires certain contributed property to retain its character (unrealized receivables, inventory, capital loss property) |

### Nonliquidating Distributions

As covered in the basis section, nonliquidating distributions are generally **nonrecognition** events:

| Distribution Type | Partner Gain/Loss | Partner's Basis in Property |
|---|---|---|
| **Cash only** | Gain if cash > outside basis; no loss recognized | N/A |
| **Property only** | No gain or loss recognized | Lesser of partnership's inside basis or partner's outside basis |
| **Cash + property** | Gain if cash > outside basis; property basis = remaining outside basis after cash reduction | See property-only rule |

:::warning

A partner **never** recognizes a loss on a nonliquidating distribution. Losses are only recognized on **liquidating** distributions when the partner receives only cash, unrealized receivables, and/or inventory with a total basis less than the partner's outside basis.

:::

### Liquidating Distributions

A liquidating distribution terminates the partner's entire interest in the partnership.

| Rule | Treatment |
|---|---|
| **Gain recognition** | Only if cash received exceeds partner's outside basis |
| **Loss recognition** | Only if the partner receives **only** cash, unrealized receivables, and/or inventory — and the total basis of those items is less than outside basis |
| **Basis in property received** | Partner's remaining outside basis is allocated among distributed assets (cash first at face value, then to unrealized receivables and inventory at inside basis, then to other property) |

> **Example:** Alex receives a liquidating distribution from Kingfisher Industries partnership: \$30,000 cash and land with an inside basis of \$60,000 (FMV \$90,000). Alex's outside basis is \$100,000. Cash reduces basis by \$30,000 → remaining basis \$70,000 → allocated to the land. Alex's basis in the land = **\$70,000**. No gain or loss recognized (FMV is irrelevant for basis allocation in a liquidating distribution).

### Disguised Sales (§707(a)(2)(B))

If a partner contributes property to a partnership and the partnership distributes cash or other property to that partner within **2 years**, the transaction may be recharacterized as a **disguised sale**. A presumption of a disguised sale applies when the contribution and distribution occur within 2 years, unless the facts clearly establish otherwise.

---

## Ownership Changes

### Allocation of Income/Loss After Sale of Partner's Share

When a partner sells their partnership interest during the year, the partnership's income and loss must be allocated.

| Method | Description |
|---|---|
| **Interim closing of the books** | Close the partnership's books as of the date of sale; allocate actual results to each period |
| **Proration method** | Allocate the full year's results on a daily basis between the selling partner and the purchasing partner |

The partnership agreement may specify the method. If the agreement is silent, the partnership uses the **interim closing method** for the transferring partner's share.

> **Example:** Sam sells a 25% interest in BIF Partners to Pat on September 30. BIF Partners earned \$80,000 in the first 9 months and \$40,000 in the last 3 months (total \$120,000). Under the interim closing method: Sam is allocated 25% × \$80,000 = **\$20,000**; Pat is allocated 25% × \$40,000 = **\$10,000**.

### Calculating the Selling Partner's Gain or Loss

The selling partner recognizes gain or loss equal to:

$$\text{Gain (Loss)} = \text{Amount Realized} - \text{Outside Basis}$$

The **amount realized** includes cash, FMV of property received, **and** the buyer's assumption of the selling partner's share of partnership liabilities (which is treated as a distribution of money on the date of sale).

:::caution

Under **IRC §751** ("hot assets"), a portion of the gain may be recharacterized as **ordinary income** if the partnership holds unrealized receivables or substantially appreciated inventory. The ordinary income portion is based on the selling partner's share of the §751 assets' built-in gain.

:::

### Revised Basis of Partnership Assets Due to Transfer (§743(b))

As discussed in the elections section, when a §754 election is in effect and a partnership interest is transferred, the partnership adjusts the inside basis of its assets with respect to the transferee partner.

| Adjustment | Calculation |
|---|---|
| **§743(b) adjustment** | Transferee's outside basis (purchase price) − transferee's share of partnership's inside basis |
| **Positive adjustment** | Transferee gets additional depreciation/amortization deductions or reduced gain on sale |
| **Negative adjustment** | Transferee's deductions are reduced or gain is increased |

The adjustment is allocated between **ordinary income** assets and **capital gain** assets in proportion to the built-in gain or loss in each category.

> **Example:** Pat purchases a 25% interest in BIF Partners for \$90,000. BIF Partners' total inside basis in its assets is \$280,000 (Pat's 25% share = \$70,000). With a §754 election, Pat receives a **\$20,000 positive §743(b) adjustment** (\$90,000 − \$70,000), allocated among partnership assets.

---

## Summary

| Topic | Key Concept |
|---|---|
| Outside basis (BASE) | Beginning + Additions (contributions, income, liabilities) − Subtractions (distributions, losses, liability decreases) = Ending |
| Noncash contributions | Generally nonrecognition (§721); carryover basis to partnership; adjust for liabilities |
| Debt allocations | Recourse → partners with economic risk of loss; nonrecourse → all partners by profit-sharing ratio |
| Partner loans | Increase partnership liabilities → allocated to lending partner under recourse rules |
| Cash distributions | No gain unless cash > outside basis; no loss on nonliquidating distributions |
| Property distributions | Partner takes lesser of inside basis or outside basis; no gain or loss |
| Liquidating distributions | Loss recognized only if receiving cash, receivables, and/or inventory with basis < outside basis |
| Tax year election | Majority interest → principal partners → least aggregate deferral → §444 |
| §754 election | Adjusts inside basis on transfers (§743(b)) and distributions (§734(b)) |
| Guaranteed payments | Ordinary income to partner; deductible by partnership; subject to SE tax |
| Built-in gain (§704(c)) | Allocated to contributing partner on sale of contributed property |
| Ownership changes | Interim closing or proration method; §751 hot assets may create ordinary income |
| §743(b) adjustment | Transferee's outside basis − share of inside basis; allocated to partnership assets |
