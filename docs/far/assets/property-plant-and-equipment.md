# Property, Plant, and Equipment (PP&E)

Property, plant, and equipment (PP&E) are **tangible, long-lived assets** used in operations. Under U.S. generally accepted accounting principles (GAAP), PP&E is carried at **historical cost** less accumulated depreciation and any impairment losses. All PP&E except land is depreciated.

## Characteristics of PP&E

An asset qualifies as PP&E when it meets **all four** criteria:

1. **Used in operations**: not held for investment or resale
2. **Has physical substance**: this distinguishes PP&E from intangible assets
3. **Long-term**: useful life exceeds one year or one operating cycle
4. **Subject to depreciation**: except land, which has an unlimited useful life

## Initial Measurement: Historical Cost

PP&E is recorded at the **total cost to acquire the asset and prepare it for its intended use**.

| Cost Component | Examples |
|----------------|----------|
| Purchase price | Invoice amount less trade discounts |
| Directly attributable costs | Freight, installation, testing, legal fees |
| Site preparation | Grading, draining, clearing |
| Asset retirement obligations (AROs) | Present value (PV) of future restoration costs (debit the asset, credit a liability) |

:::info

Interest incurred while constructing a qualifying asset is **capitalized**. See the Constructed Assets section below.

:::

## Donated Fixed Assets

A company that **receives** a donated asset records it at **fair value** on the date of donation and credits **contribution revenue**.

**Example: Bear Co. receives a building from a private foundation.**

```journal
Dr. Building                      500,000
    Cr. Contribution revenue          500,000
```

:::note

Not-for-profit entities apply the same principle under Accounting Standards Codification (ASC) Topic 958: record the asset at fair value at the date of receipt, with contribution revenue.

:::

## Land

Land is recorded at **all costs to acquire it and prepare it for its intended use**:

- Purchase price
- Closing costs (title search, legal fees, recording fees)
- Existing liens or back taxes assumed
- Grading, clearing, draining, and landscaping (permanent improvements)
- Demolition of old structures (net of salvage proceeds)

:::warning

Land is **never depreciated** because it has an unlimited useful life.

:::

### Land Improvements

**Land improvements**, such as parking lots, fences, lighting, and irrigation systems, **are** depreciated because they have finite useful lives.

```journal
Dr. Land improvements             80,000
    Cr. Cash                          80,000
```

## Basket (Lump-Sum) Purchase

When several assets are acquired for one price, the total cost is **allocated based on relative fair values**.

### Example: Polar Co.

Polar Co. pays \$900,000 for land, a building, and equipment. Independent appraisals:

| Asset | Appraised Value | Proportion | Allocated Cost |
|-------|----------------|------------|----------------|
| Land | \$400,000 | 40% | \$360,000 |
| Building | \$500,000 | 50% | \$450,000 |
| Equipment | \$100,000 | 10% | \$90,000 |
| **Total** | **\$1,000,000** | **100%** | **\$900,000** |

```journal
Dr. Land                         360,000
Dr. Building                     450,000
Dr. Equipment                     90,000
    Cr. Cash                         900,000
```

## Equipment: Repairs and Maintenance

Expense costs that only maintain an asset. Capitalize costs that extend its useful life or increase its capacity or efficiency.

| Type                                     | Accounting Treatment                                         | Effect                                   |
| ---------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| **Ordinary repairs**                     | Expense as incurred                                          | Keeps the asset in normal operating condition |
| **Extraordinary repairs and improvements** | Capitalize (debit the asset or debit accumulated depreciation) | Extends useful life or increases capacity or efficiency |

**Ordinary repair (Grizzly Inc.):**

```journal
Dr. Repairs and maintenance expense   2,500
    Cr. Cash                              2,500
```

**Extraordinary repair that extends useful life (Grizzly Inc.):**

```journal
Dr. Equipment                         15,000
    Cr. Cash                              15,000
```

Many textbooks debit accumulated depreciation instead of the asset when a cost extends useful life. Either way, book value rises by \$15,000.

## Constructed Assets: Capitalized Interest

Interest incurred during construction of a **qualifying asset** is capitalized as part of the asset's cost. Qualifying assets include assets a company builds for its **own use** and assets built as **discrete projects** for sale or lease, such as ships or real estate developments. Interest is not capitalized on inventory that is routinely produced in large quantities.

### Steps to Compute Capitalized Interest

1. **Compute weighted-average accumulated expenditures (WAAE).** Weight each expenditure by the fraction of the year it was outstanding.
2. **Multiply WAAE by the interest rate:**
   - First, apply the rate on any **specific** construction borrowing.
   - If WAAE exceeds the specific borrowing, apply the **weighted-average rate** on other outstanding debt to the excess.
3. **Apply the cap.** Capitalized interest can **never exceed** actual interest incurred during the period.

The amount from steps 1 and 2 is called **avoidable interest**: the interest the company would not have incurred if it had not built the asset.

### Example: Kodiak Partners

Kodiak Partners begins constructing a warehouse on January 1. Expenditures during the year:

| Date | Amount | Months Outstanding | Weight | Weighted Amount |
|------|--------|-------------------|--------|-----------------|
| Jan 1 | \$200,000 | 12/12 | 1.00 | \$200,000 |
| Jul 1 | \$300,000 | 6/12 | 0.50 | \$150,000 |
| Oct 1 | \$100,000 | 3/12 | 0.25 | \$25,000 |
| **WAAE** | | | | **\$375,000** |

Kodiak has a 10% construction loan of \$250,000 and \$1,000,000 of other debt at a weighted-average rate of 8%. WAAE exceeds the construction loan by \$125,000, so the 8% rate applies to that excess.

$$
\text{Capitalized interest} = (\$250{,}000 \times 10\%) + (\$125{,}000 \times 8\%) = \$25{,}000 + \$10{,}000 = \$35{,}000
$$

Actual interest incurred is \$105,000 (\$25,000 on the construction loan plus \$80,000 on other debt). Avoidable interest of \$35,000 is below that cap, so all \$35,000 is capitalized. The remaining \$70,000 is expensed.

```journal
Dr. Building under construction    35,000
Dr. Interest expense               70,000
    Cr. Interest payable              105,000
```

## Depreciation Methods

Depreciation **systematically allocates** the depreciable base of a tangible asset over its useful life.

$$
\text{Depreciable Base} = \text{Cost} - \text{Salvage Value}
$$

### Straight-Line (SL)

$$
\text{Annual Depreciation} = \frac{\text{Cost} - \text{Salvage Value}}{\text{Useful Life}}
$$

### Sum-of-the-Years'-Digits (SYD)

$$
\text{SYD Denominator} = \frac{n(n+1)}{2}
$$

Year $k$ depreciation:

$$
\text{Depreciation}_k = \frac{n - k + 1}{\text{SYD}} \times (\text{Cost} - \text{Salvage Value})
$$

### Declining Balance (DB)

$$
\text{DB Rate} = \frac{1}{\text{Useful Life}} \times \text{Multiplier}
$$

The most common multiplier is 2, which gives the **double-declining-balance (DDB)** method. Apply the rate to the **beginning book value**, not the depreciable base. Ignore salvage value when computing each year's depreciation, but never depreciate below salvage value.

### Units of Production

$$
\text{Depreciation} = \frac{\text{Cost} - \text{Salvage Value}}{\text{Total Estimated Units}} \times \text{Units Produced}
$$

### Depreciation Example: Panda Industries

Panda Industries purchases equipment for \$100,000 with a \$10,000 salvage value and a 5-year useful life.

| Year | Straight-Line | SYD | DDB |
|------|--------------|-----|-----|
| 1 | \$18,000 | \$30,000 | \$40,000 |
| 2 | \$18,000 | \$24,000 | \$24,000 |
| 3 | \$18,000 | \$18,000 | \$14,400 |
| 4 | \$18,000 | \$12,000 | \$8,640 |
| 5 | \$18,000 | \$6,000 | \$2,960 |
| **Total** | **\$90,000** | **\$90,000** | **\$90,000** |

:::note

SYD uses a denominator of 15 (5 × 6 ÷ 2). DDB uses a 40% rate (2 × 1/5) applied to beginning book value. Book value at the start of Year 5 is \$12,960, so Year 5 DDB depreciation is limited to \$2,960. That brings book value down to the \$10,000 salvage value and no lower.

:::

## Component vs. Composite / Group Depreciation

### Component Depreciation

Each **significant component** of an asset is depreciated separately. Component depreciation is **required** under International Financial Reporting Standards (IFRS) and permitted, but not required, under U.S. GAAP.

### Composite / Group Depreciation

Multiple assets are depreciated using a single **composite rate**:

$$
\text{Composite Rate} = \frac{\text{Total Annual Depreciation}}{\text{Total Cost}}
$$

$$
\text{Composite Life} = \frac{\text{Total Depreciable Base}}{\text{Total Annual Depreciation}}
$$

:::warning

Under composite depreciation, **no gain or loss** is recognized on the disposal of individual assets. The difference between proceeds and cost is debited or credited to accumulated depreciation.

:::

## Disposals

To record a disposal, first record depreciation up to the disposal date. Then remove the asset's cost and accumulated depreciation, and recognize a gain or loss for the difference between any proceeds and book value.

### Sale of an Asset

**Sloth Security sells equipment (cost \$50,000, accumulated depreciation \$35,000) for \$20,000.** Book value is \$15,000, so the gain is \$5,000.

```journal
Dr. Cash                          20,000
Dr. Accumulated depreciation      35,000
    Cr. Equipment                     50,000
    Cr. Gain on sale of equipment      5,000
```

### Write-Off (Fully Depreciated, No Proceeds)

Remove the cost and accumulated depreciation. No gain or loss results.

```journal
Dr. Accumulated depreciation      50,000
    Cr. Equipment                     50,000
```

### Involuntary Conversion

If an asset is destroyed and insurance proceeds exceed book value, a **gain** is recognized. If proceeds are less than book value, a loss is recognized. Under U.S. GAAP, the gain or loss is recognized even if the proceeds are reinvested in replacement property.

Equipment with a cost of \$50,000 and accumulated depreciation of \$35,000 (book value \$15,000) is destroyed in a fire. The insurer pays \$60,000, so the gain is \$45,000.

```journal
Dr. Cash (insurance proceeds)     60,000
Dr. Accumulated depreciation      35,000
    Cr. Equipment                     50,000
    Cr. Gain on involuntary conversion 45,000
```

## Depletion: Wasting Assets

Natural resources (oil, gas, minerals, timber) are subject to **depletion**, computed with the units-of-production method:

$$
\text{Depletion per Unit} = \frac{\text{Cost} + \text{Development Costs} + \text{Restoration Costs} - \text{Residual Value}}{\text{Total Estimated Units}}
$$

**Example: Bear Co. mining operation**

Bear Co. pays \$5,000,000 for mineral rights, incurs \$500,000 in development costs, and estimates restoration costs of \$300,000 (present value). Estimated recoverable units are 2,000,000 tons. During Year 1, Bear Co. extracts 250,000 tons.

$$
\text{Depletion per ton} = \frac{\$5{,}000{,}000 + \$500{,}000 + \$300{,}000}{2{,}000{,}000} = \$2.90
$$

$$
\text{Year 1 Depletion} = 250{,}000 \times \$2.90 = \$725{,}000
$$

Depletion is a product cost. It is charged to inventory and becomes part of cost of goods sold when the extracted ore is sold.

```journal
Dr. Inventory (ore)              725,000
    Cr. Accumulated depletion        725,000
```

## Impairment of Long-Lived Assets

Under ASC 360, long-lived assets are tested for impairment whenever events or changes in circumstances (triggering events) indicate that the carrying value may not be recoverable.

### Assets Held for Use: Two-Step Test

```mermaid
graph TD
    A[Triggering event occurs] --> B{Step 1: Recoverability Test}
    B -->|Undiscounted cash flows ≥ Carrying value| C[No impairment]
    B -->|Undiscounted cash flows < Carrying value| D{Step 2: Measurement}
    D --> E[Impairment loss =<br/>Carrying value minus fair value]
```

**Step 1, Recoverability Test:** Compare the asset's carrying value to the sum of its **undiscounted** expected future cash flows. If the cash flows are lower, the asset is impaired.

**Step 2, Measurement:** Write the asset down to **fair value**. The loss equals carrying value minus fair value.

### Example: Cub Entertainment

Cub Entertainment owns a theme park ride with a carrying value of \$800,000. Due to declining attendance, the company estimates undiscounted future cash flows of \$600,000 and a fair value of \$500,000.

- **Step 1:** \$600,000 < \$800,000, so the asset is impaired.
- **Step 2:** Loss = \$800,000 - \$500,000 = **\$300,000**

```journal
Dr. Impairment loss              300,000
    Cr. Accumulated depreciation     300,000
```

After the write-down, the \$500,000 carrying value becomes the asset's new cost basis. Depreciation continues over the remaining useful life.

:::danger

For assets **held for use**, impairment losses are **never reversed** under U.S. GAAP, even if fair value later increases.

:::

### Assets Held for Sale

Assets classified as **held for sale** are measured at the **lower of carrying value or fair value less costs to sell**. Key differences from assets held for use:

| Feature | Held for Use | Held for Sale |
|---------|-------------|-------------------|
| Depreciation | Continues | **Ceases** |
| Impairment measurement | Write down to fair value | Write down to fair value **less costs to sell** |
| Subsequent recovery | Not permitted | **Permitted** (up to cumulative loss recognized) |

:::info

When fair value less costs to sell of a **held-for-sale** asset recovers, a gain is recognized, but only up to the cumulative loss previously recognized. The asset's carrying value never rises above its carrying value at the date of reclassification.

:::

## Summary

| Topic                          | Key Rule                                        |
| ------------------------------ | ----------------------------------------------- |
| Initial measurement            | Historical cost (all costs to ready for use)    |
| Land                           | Never depreciated                               |
| Basket purchase                | Allocate by relative fair value                 |
| Capitalized interest           | WAAE × interest rate; capped at actual interest |
| Ordinary repairs               | Expense                                         |
| Extraordinary repairs          | Capitalize                                      |
| Impairment (held for use)      | Two-step test; no reversal                      |
| Impairment (held for sale)     | Fair value less costs to sell; reversal allowed up to prior losses |
| Depletion                      | Units-of-production method                      |
