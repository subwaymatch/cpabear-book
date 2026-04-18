# Tax Planning for Partnerships

## Introduction

Partnership tax planning offers the **most flexibility** of any entity type, but that flexibility comes with complexity. The TCP exam tests your ability to calculate the tax implications of contributing appreciated or depreciated noncash property, analyze various payments to partners (guaranteed payments and nonliquidating distributions), and derive the tax consequences of proposed transactions including contributions, distributions, and sales of partnership interests. The emphasis is on **planning** — evaluating alternative transaction structures and recommending the approach that minimizes the combined tax cost to the partnership and its partners.

This page builds on the partnership compliance concepts covered in the Entity Tax Compliance section and focuses on the **strategic planning** dimension — how to structure transactions to achieve the best tax outcomes.

---

## Contributing Appreciated or Depreciated Property

### Tax Implications of Contributing Appreciated Property

Under IRC §721, a contribution of property to a partnership is generally a **nonrecognition** event. However, the built-in gain or loss at the time of contribution creates ongoing tax consequences under IRC §704(c).

| Element | Rule |
|---|---|
| **Contributing partner** | No gain recognized at contribution |
| **Outside basis** | Equal to the adjusted basis of the property contributed (± liability adjustments) |
| **Partnership inside basis** | Carryover basis from contributing partner |
| **Built-in gain** | Must be allocated to the **contributing partner** when the property is sold (§704(c)) |
| **Book-tax difference** | The difference between FMV (book value) and tax basis is tracked and allocated under §704(c) methods |

> **Example:** Jordan contributes land (FMV \$300,000, adjusted basis \$100,000) to BIF Partners for a 50% interest. Dana contributes \$300,000 cash for a 50% interest. No gain is recognized at contribution. Jordan's outside basis = \$100,000. BIF Partners' inside basis in the land = \$100,000.

If BIF Partners later sells the land for \$350,000:

| Allocation | Jordan | Dana |
|---|---|---|
| Pre-contribution built-in gain (\$300,000 − \$100,000) | \$200,000 | \$0 |
| Post-contribution appreciation (\$350,000 − \$300,000) × 50% | \$25,000 | \$25,000 |
| **Total gain allocated** | **\$225,000** | **\$25,000** |

:::tip[Exam Tip]

The §704(c) allocation is a **high-frequency exam topic**. Remember: the built-in gain at contribution is **always** allocated back to the contributing partner. Only the post-contribution appreciation is shared based on profit-sharing ratios. The exam may provide a sale price and ask you to calculate each partner's share of the gain.

:::

### Section 704(c) Allocation Methods

The partnership must choose a method for allocating built-in gain or loss:

| Method | Description | Effect |
|---|---|---|
| **Traditional method** | Allocates built-in gain/loss to contributing partner; but cannot create a "ceiling" effect that allocates more tax gain than total book gain to any partner | May leave some built-in gain unallocated if the asset declines in value ("ceiling rule" limitation) |
| **Traditional with curative allocations** | Offsets the ceiling rule by using other partnership items to make up the shortfall | More equitable; requires curative items of the same character |
| **Remedial method** | Creates offsetting notional tax items to eliminate the ceiling rule effect entirely | Most complex; fully eliminates distortions |

> **Example:** Bear Co. Partnership uses the traditional method. Jordan contributed equipment (FMV \$100,000, basis \$40,000). The partnership depreciates the equipment over 5 years. Book depreciation = \$20,000/year. Tax depreciation = \$8,000/year (\$40,000 ÷ 5). The \$12,000 annual difference is allocated entirely to Jordan (reducing Jordan's share of the built-in gain). Under the traditional method, Dana cannot receive more than \$8,000 of tax depreciation per year.

### Tax Implications of Contributing Depreciated Property

Contributing property with FMV less than adjusted basis creates a **built-in loss**.

| Element | Rule |
|---|---|
| **Contributing partner** | No loss recognized at contribution |
| **Partnership inside basis** | Carryover basis (higher than FMV) |
| **Built-in loss allocation** | Must be allocated to the **contributing partner** under §704(c) |
| **§704(c)(1)(C) limitation** | For contributed property with built-in loss, the partnership's basis for allocating loss to **non-contributing** partners is limited to **FMV at contribution** |

> **Example:** Gies Co. Partnership has two equal partners — Alex and Sam. Alex contributes equipment (FMV \$60,000, adjusted basis \$100,000, built-in loss of \$40,000). If the partnership sells the equipment for \$50,000:

| Calculation | Amount |
|---|---|
| Total tax loss (\$100,000 basis − \$50,000 sale price) | \$50,000 |
| Built-in loss allocated to Alex (§704(c)) | \$40,000 |
| Post-contribution loss (\$60,000 FMV − \$50,000) × 50% each | \$5,000 each |
| **Alex's total loss** | **\$45,000** |
| **Sam's total loss** | **\$5,000** |

:::warning

Under §704(c)(1)(C), the partnership must use **FMV as the basis** for purposes of allocating depreciation and loss to the non-contributing partner. This prevents a non-contributing partner from benefiting from a loss that economically belongs to the contributor. The exam may test this by asking for the depreciation allocation on contributed depreciated property.

:::

### Planning Strategies for Property Contributions

| Strategy | Description |
|---|---|
| **Contribute appreciated property to defer gain** | Gain is deferred until the partnership sells the property — partner receives current partnership interest without immediate tax |
| **Avoid contributing depreciated property** | Sell the property first, recognize the loss personally, then contribute the cash — this is often more advantageous than deferring the loss inside the partnership |
| **Consider liability impact** | If property is subject to a liability exceeding basis, the contribution triggers gain — plan to reduce the liability before contributing |
| **Evaluate §704(c) method choice** | The remedial method creates the most equitable allocations but is the most complex; the traditional method may benefit the contributing partner through the ceiling rule |

---

## Guaranteed Payments and Distribution Planning

### Guaranteed Payments (IRC §707(c))

Guaranteed payments are payments to a partner for services or use of capital that are determined **without regard to partnership income**.

| Characteristic | Treatment |
|---|---|
| **To the partner** | Ordinary income; subject to **self-employment tax** |
| **To the partnership** | Deductible as an ordinary business expense (reduces partnership ordinary income) |
| **Timing** | Included in the partner's income for the partner's tax year that includes the **partnership's year-end** |
| **Effect on partner's outside basis** | No direct effect — the guaranteed payment reduces partnership income, which reduces the partner's distributive share |

> **Example:** Dana is a 40% partner in Kingfisher Industries partnership. The partnership agreement provides Dana a guaranteed payment of \$100,000 for management services. The partnership has \$300,000 of ordinary income before the guaranteed payment.

| Item | Dana (40%) | Other Partners (60%) |
|---|---|---|
| Guaranteed payment | \$100,000 | — |
| Partnership income after guaranteed payment: \$300,000 − \$100,000 = \$200,000 | \$80,000 (40%) | \$120,000 (60%) |
| **Total income** | **\$180,000** | **\$120,000** |

### Guaranteed Payments vs. Distributive Share

| Factor | Guaranteed Payment | Distributive Share |
|---|---|---|
| **Determined by** | Fixed amount or formula — without regard to income | Partnership income allocation |
| **Self-employment tax** | **Yes** — subject to SE tax | **Yes** for general partners; **no** for limited partners (limited to guaranteed payments only) |
| **Effect on partnership income** | Reduces partnership ordinary income | Does not reduce — is the allocation of income |
| **Planning implication** | Provides certainty of income to the partner; shifts tax burden | Variable with partnership performance |

:::tip[Exam Tip]

The exam may test the distinction between a guaranteed payment and a §707(a) payment (partner acting in a non-partner capacity). A guaranteed payment is for services rendered **in the partner's capacity as a partner** and is always ordinary income subject to SE tax. A §707(a) payment is for services as a third party and is generally **not** subject to SE tax.

:::

### Nonliquidating Distribution Planning

#### Cash Distributions

| Scenario | Tax Consequence | Planning Consideration |
|---|---|---|
| Cash ≤ outside basis | No gain; reduces basis | Tax-free extraction of partnership value |
| Cash > outside basis | Gain recognized (capital gain) | Monitor basis before taking large distributions |

#### Property Distributions

| Scenario | Tax Consequence | Planning Consideration |
|---|---|---|
| Property distribution | No gain or loss to partner or partnership; partner takes lesser of inside basis or outside basis | May result in a step-down in basis (loss of basis) if inside basis > outside basis |
| Distribution of §704(c) property to non-contributor | Partnership recognizes gain equal to built-in gain at contribution (§704(c)(1)(B)) | Avoid distributing contributed appreciated property to non-contributing partners within 7 years |

:::caution

The **7-year rule** under §704(c)(1)(B) is a critical planning trap. If the partnership distributes contributed property to **any partner other than the contributor** within 7 years of contribution, the contributing partner recognizes the built-in gain as if the property had been sold. This is designed to prevent using distributions to shift built-in gain away from the contributing partner.

:::

> **Example:** Jordan contributed land with a built-in gain of \$150,000 to BIF Partners in 2022. In 2026 (within 7 years), BIF Partners distributes the land to partner Dana. Jordan must recognize the \$150,000 built-in gain — even though Jordan did not receive the distribution.

### Mixing Guaranteed Payments and Distributions

| Payment Type | Character | SE Tax | Basis Effect |
|---|---|---|---|
| **Guaranteed payment** | Ordinary income | Yes | Indirectly reduces distributive share |
| **Cash distribution** | Tax-free to extent of basis; capital gain on excess | No | Directly reduces outside basis |
| **Drawing/advance against distributive share** | Treated as distribution | No | Reduces outside basis |

Planning often involves balancing guaranteed payments (which provide deductible compensation to the partnership) against distributions (which are tax-free to the extent of basis).

---

## Sale of Partnership Interest Planning

### Tax Consequences to the Selling Partner

| Component | Calculation |
|---|---|
| **Amount realized** | Cash + FMV of property received + buyer's assumption of selling partner's share of partnership liabilities |
| **Outside basis** | Adjusted basis of the partnership interest on the sale date |
| **Gain or loss** | Amount realized − outside basis |
| **Character** | Generally **capital gain** — except for the §751 "hot assets" portion |

### Hot Assets and Ordinary Income (IRC §751)

A portion of the gain on the sale of a partnership interest is recharacterized as **ordinary income** to the extent attributable to **unrealized receivables** and **substantially appreciated inventory** (collectively, "hot assets").

| Hot Asset Category | Examples |
|---|---|
| **Unrealized receivables** | Accounts receivable (cash-basis partnership), depreciation recapture potential (§1245/§1250 property) |
| **Substantially appreciated inventory** | Inventory with FMV exceeding 120% of its adjusted basis |

> **Example:** Alex sells a 25% interest in Illini Entertainment partnership for \$200,000. Alex's outside basis is \$120,000. The partnership has the following assets:

| Asset | FMV (25% Share) | Basis (25% Share) | Built-In Gain |
|---|---|---|---|
| Cash | \$50,000 | \$50,000 | \$0 |
| Accounts receivable (hot) | \$40,000 | \$0 | \$40,000 |
| Equipment — §1245 recapture (hot) | \$30,000 | \$20,000 | \$10,000 |
| Goodwill | \$80,000 | \$50,000 | \$30,000 |
| **Total** | **\$200,000** | **\$120,000** | **\$80,000** |

| Character of Gain | Amount |
|---|---|
| Ordinary income (hot assets): \$40,000 + \$10,000 | **\$50,000** |
| Capital gain (remaining): \$80,000 − \$50,000 | **\$30,000** |
| **Total gain** | **\$80,000** |

:::warning

Many candidates assume that the sale of a partnership interest produces only **capital gain**. The §751 hot asset rules recharacterize a significant portion as ordinary income — particularly when the partnership holds receivables (common in service partnerships) or has depreciation recapture potential. Always check for hot assets before computing the character of gain.

:::

### Planning Strategies for Sales of Partnership Interests

| Strategy | Description |
|---|---|
| **Time the sale to maximize basis** | Increase outside basis before the sale through additional contributions or by waiting for income allocations |
| **Evaluate §754 election** | If a §754 election is in effect, the buyer receives a basis adjustment (§743(b)) that aligns inside and outside basis — makes the interest more attractive to buyers |
| **Installment sale** | Report gain over the installment period; applicable to the capital gain portion (§751 ordinary income is recognized in full in the year of sale) |
| **Reduce hot asset exposure** | Before the sale, the partnership can sell hot assets and distribute the proceeds — converting the hot asset gain from ordinary to capital for the selling partner |
| **Retirement vs. sale** | A retiring partner may prefer a §736 liquidating payment structure (which may allow the partnership to deduct guaranteed-payment-like amounts) over a third-party sale |

---

## Comprehensive Transaction Planning

### Contributions, Distributions, and Sales Compared

| Transaction | Gain Recognition | Character | Basis Effect |
|---|---|---|---|
| **Contribution of property** | Generally none (§721) | N/A | Outside basis = adjusted basis of property ± liabilities |
| **Cash distribution (nonliquidating)** | Only if cash > outside basis | Capital gain | Reduces outside basis |
| **Property distribution (nonliquidating)** | Generally none | N/A | Partner takes lesser of inside basis or outside basis |
| **Liquidating distribution** | Cash > basis = gain; loss only if receiving cash, receivables, and/or inventory < basis | Capital gain or loss | Remaining outside basis allocated to property |
| **Sale of partnership interest** | Amount realized − outside basis | Capital gain + §751 ordinary income | N/A (interest is disposed of) |
| **Guaranteed payment** | Fully recognized | Ordinary income | Indirectly through reduced distributive share |

### Disguised Sale Considerations (IRC §707(a)(2)(B))

When a partner contributes property and receives a related distribution within **2 years**, the transaction may be recharacterized as a **disguised sale**.

| Timing | Presumption |
|---|---|
| Contribution and distribution within **2 years** | **Presumed** to be a sale (rebuttable) |
| Contribution and distribution **after 2 years** | **Presumed** not to be a sale (rebuttable) |

> **Example:** Sam contributes property (FMV \$400,000, basis \$150,000) to MAS Inc. partnership and receives a \$400,000 cash distribution 6 months later. This is presumed to be a disguised sale. Sam would recognize \$250,000 of gain (\$400,000 − \$150,000) as if the property were sold to the partnership.

:::tip[Exam Tip]

Disguised sale questions typically test whether the partner received a distribution of cash or property that was **related to** a prior contribution. Key indicators include: short time period between contribution and distribution, the distribution amount approximates the FMV of contributed property, and the partner's risk during the holding period was minimal.

:::

### Section 736 — Payments to a Retiring or Deceased Partner

When a partner retires or dies and the partnership liquidates their interest, §736 divides the payments into two categories:

| Category | Treatment |
|---|---|
| **§736(b) payments** | Payments for the partner's share of partnership **property** (including goodwill if the partnership agreement provides for it) — treated as a **distribution** (capital gain/loss to the retiring partner) |
| **§736(a) payments** | Payments for the partner's share of **unrealized receivables** and **goodwill** (to the extent not covered by §736(b)) — treated as **guaranteed payments** (ordinary income to the retiring partner, deductible by the partnership) |

:::info

The §736(a)/(b) distinction applies only to **general partners** in partnerships where **capital is not a material income-producing factor** (typically service partnerships). For all other partnerships, all payments are treated under §736(b).

:::

| Planning Consideration | Detail |
|---|---|
| **Include goodwill in the partnership agreement** | If the agreement provides for goodwill payments, they are §736(b) — capital gain to the retiring partner (favorable) |
| **Omit goodwill from the agreement** | If the agreement is silent, goodwill payments are §736(a) — ordinary income to the retiring partner but **deductible** by the partnership (favorable to remaining partners) |
| **Negotiate the split** | The retiring partner prefers §736(b) (capital gain); the remaining partners prefer §736(a) (deductible) — this is a negotiation point |

---

## Summary

| Topic | Key Concept |
|---|---|
| Appreciated property contributions | Nonrecognition under §721; built-in gain tracked and allocated to contributor under §704(c) |
| §704(c) methods | Traditional (ceiling rule), traditional with curative, remedial — each affects allocation of built-in gain/loss differently |
| Depreciated property contributions | Loss deferred; partnership uses FMV as basis for non-contributor allocations (§704(c)(1)(C)) |
| Guaranteed payments | Ordinary income to partner; deductible by partnership; subject to SE tax |
| Guaranteed payment vs. §707(a) | Guaranteed = in capacity as partner (SE tax); §707(a) = as outsider (generally no SE tax) |
| Nonliquidating distributions | Cash: gain if > basis; property: no gain, lesser of inside/outside basis |
| 7-year rule (§704(c)(1)(B)) | Contributing partner recognizes built-in gain if contributed property is distributed to another partner within 7 years |
| Sale of partnership interest | Gain = amount realized − outside basis; §751 hot assets create ordinary income |
| Installment sale planning | Capital gain portion eligible for installment method; §751 ordinary income recognized immediately |
| Disguised sales | Contribution + distribution within 2 years presumed to be a sale |
| §736 retirement payments | §736(b) = distribution (capital gain); §736(a) = guaranteed payment (ordinary, deductible) |
| Goodwill planning | Including goodwill in the agreement makes payments §736(b) — favorable to retiring partner |
