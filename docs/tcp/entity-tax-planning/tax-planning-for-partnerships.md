# Tax Planning for Partnerships

Partnerships are the most flexible entity in the Code. Partners can contribute property tax-free with no control test, divide income by agreement, and take most distributions without tax. That flexibility is also what makes planning necessary, because the same transaction can be taxed very differently depending on how it is structured. The TCP blueprint asks you to compute the tax result of contributing appreciated or depreciated property, of guaranteed payments and nonliquidating distributions, and of a proposed sale of a partnership interest. This chapter builds on the rules in [Partnerships](../entity-tax-compliance/partnerships.md) and takes those three areas in turn, then compares the alternatives side by side.

The One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) left the partnership contribution, allocation, and distribution rules unchanged. Its one partnership change makes the disguised payment rule of §707(a)(2) apply without waiting for regulations, for services performed and property transferred after July 4, 2025.

---

## Contributing Appreciated or Depreciated Property

### Appreciated Property and §704(c)

A contribution of appreciated property is tax-free under §721, and the partnership takes the partner's basis. The gain is deferred, not forgiven. **Section 704(c)** requires the partnership to allocate the **built-in gain**, the excess of FMV over basis at contribution, back to the contributing partner when the property is sold. Only appreciation after the contribution is shared under the partnership agreement.

> **Example:** Jordan contributes land (FMV \$300,000, adjusted basis \$100,000) to Kodiak Partners for a 50% interest, and Dana contributes \$300,000 cash for the other 50%. Neither recognizes gain. Jordan's outside basis is \$100,000, and Kodiak's basis in the land is \$100,000. Later, Kodiak sells the land for \$350,000, a \$250,000 tax gain:
>
> | Allocation | Jordan | Dana |
> |---|---|---|
> | Built-in gain at contribution (\$300,000 - \$100,000) | \$200,000 | \$0 |
> | Appreciation after contribution (\$50,000, split 50/50) | \$25,000 | \$25,000 |
> | **Total gain** | **\$225,000** | **\$25,000** |

### Section 704(c) Methods

The built-in gain also affects depreciation. A partnership keeps two sets of numbers for contributed property: **book** amounts based on FMV at contribution, and **tax** amounts based on the carryover basis. The goal is to give the noncontributing partners tax depreciation equal to their share of book depreciation. When there is not enough tax depreciation to do that, the partnership's choice of method decides what happens.

| Method | How it works | Result |
|---|---|---|
| **Traditional** | Allocates tax items to make up the book-tax difference, but never more tax items than actually exist (the **ceiling rule**) | Simplest; the ceiling rule can leave the noncontributing partner short |
| **Traditional with curative allocations** | Makes up the shortfall with other partnership tax items of the same character | Fixes the distortion if other items are available |
| **Remedial** | Creates offsetting notional tax items: a deduction for the noncontributing partner and equal income for the contributor | Always eliminates the distortion |

> **Example:** Suppose instead that Jordan had contributed equipment (FMV \$100,000, basis \$40,000) with 5 years of recovery left, and Dana had contributed \$100,000 cash. Book depreciation is \$20,000 a year, \$10,000 for each partner. Tax depreciation is only \$8,000 a year. Under the traditional method, Dana gets all \$8,000 of tax depreciation and Jordan gets none. The ceiling rule leaves Dana \$2,000 short of her \$10,000 book share each year. A curative allocation would shift \$2,000 of other tax deductions (or income) to fix the gap; the remedial method would give Dana \$2,000 of notional depreciation and Jordan \$2,000 of notional income.

### Depreciated Property

A contribution of property worth less than its basis is also tax-free, and the built-in loss is likewise reserved for the contributor. Under **§704(c)(1)(C)**, the built-in loss can be taken into account **only by the contributing partner**. For allocations to the other partners, the property's basis is treated as its FMV at contribution, so no one else can deduct a loss that arose before the contribution.

> **Example:** Alex and Sam are equal partners in Grizzly Partners. Alex contributes equipment (FMV \$60,000, adjusted basis \$100,000), a \$40,000 built-in loss. The partnership later sells it for \$50,000:
>
> | Calculation | Amount |
> |---|---|
> | Total tax loss (\$100,000 - \$50,000) | \$50,000 |
> | Built-in loss, allocated only to Alex | \$40,000 |
> | Loss after contribution (\$60,000 - \$50,000), split 50/50 | \$5,000 each |
> | **Alex's loss** | **\$45,000** |
> | **Sam's loss** | **\$5,000** |

### Planning Points for Contributions

| Strategy | Description |
|---|---|
| **Contribute appreciated property to defer gain** | No tax now; the contributor bears the built-in gain when the partnership sells |
| **Sell depreciated property first** | The contributor can deduct the loss now, then contribute cash, instead of waiting for the partnership to sell |
| **Watch liabilities** | If the net debt relief on mortgaged property exceeds the contributor's basis, the excess is taxed now; paying down the debt first avoids that |
| **Choose the §704(c) method deliberately** | The traditional method can favor the contributor through the ceiling rule; the remedial method protects the other partners |

---

## Payments to Partners

### Guaranteed Payments (§707(c))

A **guaranteed payment** is a payment to a partner for services or for the use of capital that is fixed without regard to the partnership's income. It works like a salary: ordinary income to the partner, a deduction for the partnership (unless it must be capitalized), and, when paid for services, subject to self-employment tax. The partner includes it in the tax year in which the partnership's year ends. It does not reduce the partner's outside basis directly; instead, the partnership's deduction reduces every partner's distributive share.

> **Example:** Pat is a 40% partner in Sun Bear Partners and receives a guaranteed payment of \$100,000 for managing the business. Before the payment, the partnership has \$300,000 of ordinary income.
>
> | Item | Pat (40%) | Other partners (60%) |
> |---|---|---|
> | Guaranteed payment | \$100,000 | \$0 |
> | Share of remaining \$200,000 of income | \$80,000 | \$120,000 |
> | **Total ordinary income** | **\$180,000** | **\$120,000** |

| Factor | Guaranteed payment | Distributive share |
|---|---|---|
| **Amount** | Fixed or set by formula, regardless of income | Depends on partnership income |
| **Partnership's income** | Deducted in computing it | An allocation of it |
| **Self-employment tax** | Yes, if paid for services | Yes for general partners; no for limited partners, whose self-employment income is limited to guaranteed payments for services |
| **Planning effect** | Gives the working partner a priority claim and a steady income | Varies with results |

:::tip[Exam Tip]

Distinguish a guaranteed payment from a §707(a) payment. A guaranteed payment is for services the partner performs **as a partner**. A §707(a) payment is for services the partner performs as an outsider would, and it is taxed exactly as if paid to a nonpartner, including when it is reported. Whether a §707(a) payment is subject to self-employment tax depends on the partner's own business, not on the partnership.

:::

### Nonliquidating Distributions

| Distribution | Tax result | Planning point |
|---|---|---|
| **Cash up to outside basis** | No gain; basis is reduced | Tax-free way to take money out |
| **Cash above outside basis** | Gain, generally capital | Check basis before large distributions |
| **Property** | No gain or loss; the partner takes the lesser of inside basis or remaining outside basis | A partner with low outside basis takes a reduced basis in the property |
| **Contributed property to another partner within 7 years** | The contributing partner recognizes the built-in gain (§704(c)(1)(B)) | Wait 7 years, or distribute the property back to its contributor |

The 7-year rule closes an obvious loophole. Without it, a partner could contribute appreciated property, let the partnership hand it to another partner, and escape the built-in gain. A companion rule (§737) taxes the contributor if, within the same 7 years, the contributor receives **other** property while the partnership still holds the appreciated property the contributor put in.

> **Example:** Go back to Jordan's land, with its \$200,000 built-in gain, before Kodiak Partners sells it. Suppose Jordan contributed it in 2024, and in 2027, when the land is worth \$350,000, Kodiak distributes it to Dana. Because this is within 7 years, Jordan recognizes the **\$200,000** of precontribution gain (but not the later appreciation), even though he receives nothing. His outside basis and Kodiak's basis in the land each increase by \$200,000, so Dana takes the land with a \$300,000 basis (assuming her outside basis is at least that much).

### Comparing Payment Types

| Payment | Character to the partner | Self-employment tax | Effect on outside basis |
|---|---|---|---|
| **Guaranteed payment** | Ordinary income | Yes, for services | Indirect, through the smaller distributive share |
| **Cash distribution** | Tax-free to the extent of basis; capital gain above it | No | Reduces it |
| **Draw against the distributive share** | Treated as a distribution | No | Reduces it |

A working partner usually prefers a guaranteed payment for its certainty, and the other partners benefit from the partnership's deduction. A distribution costs the partnership nothing in deductions but is tax-free to the recipient only to the extent of basis.

---

## Selling a Partnership Interest

### The Seller's Tax

| Component | Calculation |
|---|---|
| **Amount realized** | Cash + FMV of property received + the seller's share of partnership liabilities (from which the seller is relieved) |
| **Gain or loss** | Amount realized - outside basis on the sale date |
| **Character** | Capital, except for the part attributable to §751 hot assets |

### Hot Assets (§751)

The part of the gain attributable to the partnership's **hot assets** is ordinary income, because the seller would have had ordinary income if the partnership had sold them. For a sale of an interest, hot assets are:

| Hot asset | Examples |
|---|---|
| **Unrealized receivables** | A cash-method partnership's accounts receivable, and depreciation recapture on §1245 and §1250 property |
| **Inventory items** | Any inventory that has appreciated (the "substantially appreciated" test applies only to certain distributions, not to sales of interests) |

> **Example:** Morgan sells a 25% interest in Sun Bear Partners for \$200,000. Morgan's outside basis is \$120,000, and the partnership has no liabilities. Morgan's 25% share of the partnership's assets is:
>
> | Asset | FMV | Basis | Gain |
> |---|---|---|---|
> | Cash | \$50,000 | \$50,000 | \$0 |
> | Accounts receivable (hot) | \$40,000 | \$0 | \$40,000 |
> | Equipment, all gain is §1245 recapture (hot) | \$30,000 | \$20,000 | \$10,000 |
> | Land | \$80,000 | \$50,000 | \$30,000 |
> | **Total** | **\$200,000** | **\$120,000** | **\$80,000** |
>
> Morgan's \$80,000 gain is **\$50,000 ordinary income** (\$40,000 + \$10,000 from the hot assets) and **\$30,000 capital gain**.

:::warning

A sale of a partnership interest is not automatically all capital gain. Service partnerships often hold large receivables, and equipment-heavy partnerships hold large recapture. Always look through to the hot assets before stating the character of the gain.

:::

### Planning a Sale

| Strategy | Description |
|---|---|
| **Count the liabilities** | Relief from the seller's share of partnership debt is part of the amount realized, so a seller whose basis was used up by debt-financed losses can owe tax while receiving little cash |
| **Offer the buyer a §754 election** | With a §754 election, the buyer gets a §743(b) basis adjustment that aligns inside and outside basis, which makes the interest more valuable to the buyer |
| **Use the installment method** | The capital gain can be reported as payments are received; the §751 ordinary income from receivables, recapture, and inventory is taxed in the year of sale |
| **Do not expect to convert hot asset income** | Collecting receivables or selling inventory before the sale does not help: the seller's share of that ordinary income arrives through the K-1 instead of through §751 |
| **Compare a sale with a retirement** | A retiring partner whose interest is liquidated by the partnership is taxed under §736 (below), which can produce different character and deductions |

---

## Comparing the Alternatives

### Contributions, Distributions, and Sales

| Transaction | Gain recognized | Character | Basis effect |
|---|---|---|---|
| **Contribution of property** | Generally none (§721) | Not applicable | Outside basis = basis contributed, adjusted for liabilities |
| **Nonliquidating cash distribution** | Only if cash exceeds outside basis | Capital | Reduces outside basis |
| **Nonliquidating property distribution** | Generally none | Not applicable | Partner takes the lesser of inside basis or outside basis |
| **Liquidating distribution** | Gain if cash exceeds basis; loss only with cash, receivables, and inventory alone | Capital | Remaining outside basis goes to the property |
| **Sale of the interest** | Amount realized - outside basis | Capital plus §751 ordinary income | Interest disposed of |
| **Guaranteed payment** | Fully taxable | Ordinary | Indirect, through the distributive share |

### Disguised Sales (§707(a)(2)(B))

If a partner contributes property and receives a related distribution of money or other property, the transaction may be treated as a **sale** of the property to the partnership. A contribution and distribution within **2 years** of each other are presumed to be a sale; after 2 years, they are presumed not to be. Either presumption can be rebutted by the facts.

> **Example:** Sam contributes property (FMV \$400,000, basis \$150,000) to Grizzly Partners and receives a \$400,000 cash distribution 6 months later. The transfer is presumed to be a sale, and Sam recognizes **\$250,000** of gain (\$400,000 - \$150,000). If he had received only \$200,000, he would be treated as selling half the property: an amount realized of \$200,000, minus half the basis (\$75,000), for a **\$125,000** gain, and contributing the other half.

:::tip[Exam Tip]

Signs of a disguised sale include a short time between contribution and distribution, a distribution that approximates the contributed property's value, and a partner who bore little risk from the partnership's business in the meantime.

:::

### Payments to a Retiring or Deceased Partner (§736)

When the partnership itself buys out a retiring partner or a deceased partner's successor, §736 splits the payments into two kinds:

| Category | Treatment |
|---|---|
| **§736(b) payments** | For the partner's share of partnership **property**, treated as a **distribution**: capital gain or loss to the retiring partner, no deduction for the partnership |
| **§736(a) payments** | Everything else, treated as a **guaranteed payment** or distributive share: ordinary income to the retiring partner, which reduces the remaining partners' income |

In a partnership where **capital is not a material income-producing factor** (typically a service partnership) and the retiring partner is a **general partner**, payments for unrealized receivables, and for goodwill unless the agreement provides for it, fall under §736(a). In all other partnerships, payments for those items are §736(b) payments.

| Planning choice | Effect |
|---|---|
| **The agreement provides for payment for goodwill** | Goodwill payments are §736(b): capital gain to the retiring partner |
| **The agreement is silent on goodwill** | Goodwill payments are §736(a): ordinary income to the retiring partner, but they reduce the remaining partners' taxable income |
| **The negotiation** | The retiring partner prefers §736(b); the continuing partners prefer §736(a) |

---

## Summary

| Topic | Key rule |
|---|---|
| Appreciated property | Tax-free under §721; the built-in gain goes back to the contributor under §704(c) |
| §704(c) methods | Traditional (ceiling rule), traditional with curative allocations, or remedial |
| Depreciated property | Built-in loss available only to the contributor (§704(c)(1)(C)); selling first gives an immediate deduction |
| Guaranteed payments | Ordinary income, deductible by the partnership, subject to self-employment tax when for services |
| §707(a) payments | Taxed as if paid to an outsider; disguised payments are recharacterized |
| Distributions | Cash tax-free to the extent of basis; property takes the lesser of inside or outside basis |
| 7-year rules | Contributor taxed on built-in gain if the property goes to another partner (§704(c)(1)(B)) or the contributor receives other property (§737) within 7 years |
| Sale of an interest | Amount realized (including liabilities) - outside basis; §751 makes the hot asset portion ordinary |
| Installment sales | Capital gain portion only; §751 ordinary income taxed in the year of sale |
| Disguised sales | Contribution and related distribution within 2 years presumed to be a sale; part sales allocate basis |
| §736 | (b) property payments are distributions; (a) other payments are ordinary income that reduces the remaining partners' income |
