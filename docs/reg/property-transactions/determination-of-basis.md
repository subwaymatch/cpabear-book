# Determination of Basis

The **basis** of an asset is the starting point for calculating gain or loss on its sale or disposition. How basis is determined depends on how the taxpayer acquired the property — by purchase, gift, inheritance, or conversion.

---

## Purchased Property

When a taxpayer purchases property, the basis is simply the **cost** of the property. Cost includes the purchase price plus all amounts paid to acquire the asset and make it ready for its intended use.

**Cost basis includes:**
- Purchase price
- Sales tax
- Freight and installation charges
- Legal fees related to acquisition
- Recording fees and transfer taxes

### Adjusted Basis

Over time, the original cost basis is modified to produce the **adjusted basis**:

$$\text{Adjusted Basis} = \text{Cost} - \text{Accumulated Depreciation} + \text{Capital Improvements}$$

> **Example:** Bear Co. purchases a delivery truck for \$40,000 and pays \$2,000 for sales tax and delivery charges. The initial cost basis is \$42,000. After 3 years, Bear Co. has claimed \$18,000 in MACRS depreciation. The adjusted basis is \$42,000 − \$18,000 = **\$24,000**.

### Holding Period

For purchased property, the holding period begins the **day after the acquisition date**. If Jamie buys stock on March 1, the holding period begins on March 2.

---

## Gifted Property

When property is received as a gift, the basis rules depend on whether the donee later sells at a **gain** or a **loss**.

### Gain Basis (Carryover Basis)

If the donee sells the gifted property for **more** than the donor's adjusted basis, the donee uses the **donor's adjusted basis** (carryover basis). The donor's holding period also **tacks on** — it carries over to the donee.

### Loss Basis (FMV Rule)

If the **FMV at the date of the gift** is **less than** the donor's adjusted basis, a special dual-basis rule applies:

- If the donee sells at a **gain** (above donor's basis): use the **donor's basis**
- If the donee sells at a **loss** (below FMV at the date of the gift): use the **FMV at the date of the gift**
- If the donee sells for an amount **between** the donor's basis and the FMV at the gift date: **no gain and no loss** is recognized (the "limbo" zone)

> **Example:** Sarah receives stock as a gift from her uncle. The uncle's adjusted basis was \$10,000, and the FMV on the gift date was \$7,000.
>
> - If Sarah sells for \$12,000 → Gain of \$12,000 − \$10,000 = **\$2,000 gain** (uses donor's basis)
> - If Sarah sells for \$5,000 → Loss of \$5,000 − \$7,000 = **\$2,000 loss** (uses FMV at gift date)
> - If Sarah sells for \$8,500 → The sale price falls between \$7,000 and \$10,000 → **No gain or loss**

### Holding Period for Gifts

- **If using the donor's carryover basis** (gain situation): the donor's holding period **tacks on** to the donee's
- **If using FMV at the gift date** (loss situation): the holding period begins on the **date of the gift**

:::tip
A quick way to remember the gift basis rule: **Gains use the donor's basis; losses use FMV.** If the sale price is in the middle, it's a wash.
:::

---

## Inherited Property

When a taxpayer inherits property, the general rule is that the basis is "stepped" to the value of the asset at the time of the decedent's death. This is a crucial concept for the CPA exam, as it differs significantly from the carryover basis rules used for gifted property.

### 1. The General Rule: Step-Up (or Step-Down) to FMV

In most cases, the basis of inherited property is the **Fair Market Value (FMV) at the date of the decedent's death.**

- **Step-Up:** If the property appreciated (e.g., the decedent bought it for \$10,000 and it was worth \$50,000 at death), the heir's basis is \$50,000. The \$40,000 of appreciation is never taxed.

- **Step-Down:** If the property declined in value (e.g., the decedent bought it for \$10,000 and it was worth \$8,000 at death), the heir's basis is \$8,000. The \$2,000 pre-death loss disappears and cannot be claimed by anyone.

### 2. The Alternative Valuation Date (AVD)

The executor of an estate may elect an **Alternative Valuation Date** to value all estate property. This election is only available if it **decreases both** the total gross estate value **and** the estate tax due.

If the AVD is elected, each asset's basis equals its FMV at the **earlier of:**

1. **Six months** after the date of death, or
2. The **date the asset is distributed or sold** (if that occurs before the six-month mark).

> **Example:**
>
> - FMV at date of death: \$100,000
> - FMV six months later: \$90,000
>
> If the executor validly elects AVD, the heir's basis is **\$90,000**.

:::note
The AVD election applies to **all** estate assets — the executor cannot cherry-pick which assets to value at the AVD.
:::

### 3. The Automatic Long-Term Holding Period

Regardless of how long the decedent owned the property or how long the heir holds it before selling, inherited property is **automatically deemed to have a long-term holding period.**

Even if the decedent bought stock one day before dying and the heir sells it one day after inheriting it, any gain or loss is treated as a **long-term capital gain or loss (LTCG/L).**

### 4. Comparison: Gifted vs. Inherited Property

| **Feature** | **Gifted Property** | **Inherited Property** |
| --- | --- | --- |
| **Basis Rule** | Carryover (donor's) basis | FMV at date of death |
| **Holding Period** | "Tacks on" from donor's acquisition date | Always long-term |
| **Loss Rule** | Dual basis: lower of adjusted basis or FMV at date of gift | FMV at death (step-down permanently eliminates the loss) |

:::caution Common Pitfall
On the CPA exam, do not confuse gifted and inherited property. A gift uses the **donor's carryover basis**; inherited property uses **FMV at death**. These rules are frequently tested together.
:::

### 5. Exception: Income in Respect of a Decedent (IRD)

The step-up (or step-down) rule does **not** apply to assets that constitute **Income in Respect of a Decedent (IRD)**. IRD items are amounts the decedent had earned or was entitled to receive but had not yet recognized for income tax purposes before death.

- **Common examples:** Traditional IRAs, 401(k)s, uncollected wages, accrued interest, and installment sale receivables.

- **Tax treatment:** The heir takes the decedent's basis (typically \$0 for pre-tax retirement accounts) and pays **ordinary income tax** on distributions, just as the decedent would have.

:::note
IRD assets are still included in the decedent's **gross estate** for estate tax purposes, but the heir does receive a deduction for the estate taxes attributable to the IRD item (the "IRD deduction" under IRC §691(c)), which partially offsets the income tax burden.
:::

---

## Capitalize or Expense

When a business incurs a cost, a critical question is whether the expenditure should be **capitalized** (added to the basis of an asset and recovered over time through depreciation or amortization) or **expensed** (deducted immediately in the current year).

### General Rule

If the expenditure creates or improves an asset with a **useful life greater than one year**, it must be **capitalized**. If it merely maintains existing property in its current operating condition, it is generally an **expense**.

| **Capitalize** | **Expense** |
| --- | --- |
| Improvements (betterments, restorations, adaptations) | Routine repairs and maintenance |
| Additions to property | Supplies used and consumed in the year |
| New roof, HVAC system, structural modifications | Painting, patching, cleaning |

### Materials and Supplies

A taxpayer may deduct amounts paid for **materials and supplies** if the item meets either of these criteria:

- The item costs **\$200 or less**, or
- The item has a useful life of **12 months or less**

Items that do not meet either threshold must be capitalized.

### De Minimis Safe Harbor Election

Taxpayers may elect to expense items that would otherwise be capitalized if the cost per item (or per invoice) does not exceed a specific threshold:

| **Taxpayer Type** | **Threshold Per Item** |
| --- | --- |
| Taxpayer with an **Applicable Financial Statement (AFS)** (e.g., audited financials) | **\$5,000** |
| Taxpayer **without** an AFS | **\$2,500** |

> **Example:** Gies Co. has audited financial statements and purchases 20 laptops at \$2,400 each for employee use. Because Gies Co. has an AFS and each laptop costs less than \$5,000, the company may elect to deduct the entire \$48,000 under the de minimis safe harbor rather than capitalizing and depreciating each laptop.

:::info
The de minimis safe harbor is an **annual election** made on the tax return. The taxpayer must have a written accounting policy in place at the beginning of the tax year to capitalize amounts below the threshold on its books.
:::

---

## Property Converted from Personal to Business Use

When a taxpayer converts personal-use property (e.g., a personal residence) to business or income-producing use (e.g., a rental property), special basis rules apply because losses that accrued during personal use are not deductible.

### Depreciation Basis

The basis for computing **depreciation** on the converted property is the **lesser of:**

1. The taxpayer's **adjusted basis** at the date of conversion (original cost + improvements − any depreciation, though personal-use property has none), or
2. The **FMV** of the property at the date of conversion

### Gain and Loss Basis

| **Purpose** | **Basis Used** |
| --- | --- |
| **Computing gain** on a later sale | Original **cost basis** (adjusted for depreciation taken after conversion) |
| **Computing loss** on a later sale | **Lesser of** cost or FMV at date of conversion (adjusted for depreciation) |

> **Example:** Marcus purchased a home for \$300,000. He later converts it to a rental when the FMV is \$250,000.
>
> - **Depreciation basis:** Lesser of \$300,000 (cost) or \$250,000 (FMV) = **\$250,000**
> - If Marcus later sells for \$350,000 after claiming \$30,000 in depreciation:
>   - Gain basis = \$300,000 − \$30,000 = \$270,000 → Gain = \$350,000 − \$270,000 = **\$80,000**
> - If Marcus later sells for \$200,000 after claiming \$30,000 in depreciation:
>   - Loss basis = \$250,000 − \$30,000 = \$220,000 → Loss = \$200,000 − \$220,000 = **(\$20,000)**

:::caution
The conversion rules prevent taxpayers from claiming a loss that is attributable to a decline in value during personal use. Only losses that occur **after** the conversion to business use are deductible.
:::

---

## Intangible Property

### Purchased Intangibles

When a taxpayer purchases an intangible asset (such as a patent, trademark, copyright, or goodwill), the basis is the **cost** of the intangible. If the intangible is acquired as part of a business purchase, the amount allocated to the intangible under IRC §1060 becomes its basis.

Most purchased intangibles that are part of a business acquisition (IRC §197 intangibles) are amortized over **15 years** using the straight-line method.

### Organizational and Start-Up Costs

When a new business is formed, it may incur organizational costs (costs of creating the legal entity) and start-up costs (costs incurred before the business begins operations).

**Each category is treated the same way:**

1. The taxpayer may **immediately deduct up to \$5,000** in the first year
2. The \$5,000 deduction is **reduced dollar-for-dollar** for costs exceeding \$50,000 (fully phased out at \$55,000)
3. Any remaining costs are amortized over **180 months** (15 years), beginning in the month the business starts operations

| **Cost Type** | **Examples** |
| --- | --- |
| **Organizational costs** | Legal fees for drafting articles of incorporation/partnership agreements, state filing fees, accounting fees for setting up the entity's books |
| **Start-up costs** | Market research, employee training before opening, advertising for the grand opening, consultant fees for site selection |

> **Example:** Illini Entertainment, a new LLC, incurs \$8,000 in organizational costs and \$42,000 in start-up costs.
>
> - **Organizational costs:** Deduct \$5,000 immediately; amortize the remaining \$3,000 over 180 months (\$16.67/month)
> - **Start-up costs:** Deduct \$5,000 immediately; amortize the remaining \$37,000 over 180 months (\$205.56/month)

:::note
Organizational and start-up costs are treated as **separate categories** — each gets its own \$5,000 deduction and 180-month amortization. Do not combine them.
:::
