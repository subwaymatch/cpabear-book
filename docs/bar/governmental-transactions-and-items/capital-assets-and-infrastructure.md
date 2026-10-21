# Capital Assets and Infrastructure Assets

A city's largest resources are usually things it cannot easily sell: roads, bridges, water mains, fire stations, and the land under them. These are its **capital assets**, and **infrastructure** (long-lived assets that are stationary and can be preserved far longer than most assets, such as roads and sewer systems) is often the biggest share. How a government reports them depends on which statements you are looking at. The government-wide and proprietary fund statements capitalize and depreciate them, while the governmental funds treat their purchase as spending.

The BAR blueprint asks you to identify the capital assets reported in the government-wide statements and to calculate net capital assets (land, buildings and improvements, machinery and equipment, and leases) with the journal entries for initial measurement, depreciation, and amortization. This chapter covers the categories of capital assets, how they are measured and depreciated, construction in progress, leases, the modified approach for infrastructure, and the note disclosures.

---

## What Counts as a Capital Asset

Capital assets are tangible and intangible assets used in operations with initial useful lives extending beyond one reporting period. Each government sets a **capitalization threshold** (for example, \$5,000 per item) below which purchases are simply expensed.

| Category | Examples | Depreciated or amortized? |
|---|---|---|
| **Land** and land improvements with indefinite lives | Parcels, right-of-way easements | No |
| **Buildings and improvements** | City hall, fire stations, libraries | Yes |
| **Improvements other than buildings** | Parking lots, fencing, landscaping | Yes |
| **Machinery and equipment** | Vehicles, computers, furniture | Yes |
| **Infrastructure** | Roads, bridges, tunnels, water and sewer systems | Yes, unless the modified approach is used |
| **Construction in progress** | Projects not yet placed in service | No, until completed |
| **Lease assets** (lessee) | Leased office space, leased equipment | Yes, amortized |
| **Other intangible assets** | Software, easements with finite terms, water rights | Yes if finite-lived |

Governments are encouraged, but not required, to capitalize **works of art and historical treasures**. They may skip capitalization for a collection that is held for public exhibition or research rather than financial gain, is protected and preserved, and is subject to a policy that proceeds from any sale be used to buy other collection items.

---

## Where Capital Assets Are Reported

| Reporting level | Capital assets reported? | Depreciation reported? |
|---|---|---|
| Government-wide statements | Yes | Yes |
| Proprietary fund statements | Yes | Yes |
| Fiduciary fund statements | Yes, if the fund holds any | Yes |
| Governmental fund statements | **No** | **No** |

When a governmental fund (the General Fund or a capital projects fund) buys a capital asset, it records an **expenditure**, not an asset. The asset enters the government-wide statements through the conversion adjustments described in [Deriving Government-Wide Financial Statements](deriving-government-wide-financial-statements.md).

---

## Initial Measurement

Capital assets are recorded at **historical cost**, including the charges needed to place the asset into its intended location and condition, such as freight, site preparation, and professional fees. Donated capital assets, and assets received in a service concession arrangement, are recorded at **acquisition value**: the price that would be paid to acquire an asset with equivalent service potential on the acquisition date (an entry price, not fair value).

:::warning[No Capitalized Interest]

Under **GASB 89**, interest incurred during construction is **not** capitalized. It is reported as an expense in the government-wide and proprietary fund statements (and as an expenditure in governmental funds when due). This differs from FASB, where interest during construction is capitalized.

:::

### Example: Purchase of Equipment

Bear City buys a fire truck for \$650,000 cash, paid from the General Fund. In the General Fund, the purchase is an expenditure:

```journal
Dr. Expenditures (Capital Outlay) 650,000
Cr. Cash[a] 650,000
```

In the government-wide statements, the same purchase is an asset:

```journal
Dr. Machinery and Equipment[a] 650,000
Cr. Cash[a] 650,000
```

### Example: Donated Land

A developer donates land for a city park. The land's acquisition value is \$1,200,000. In the government-wide statements, the donation is program revenue (capital grants and contributions) of the culture and recreation function:

```journal
Dr. Land[a] 1,200,000
Cr. Capital Grants and Contributions 1,200,000
```

No entry is made in the governmental funds, because no financial resources were received.

---

## Depreciation

Capital assets with finite useful lives are depreciated, and intangible assets (including lease assets) are amortized, in the government-wide and proprietary fund statements. Any systematic and rational method may be used; straight-line is the most common.

$$
\text{Annual Depreciation (Straight-Line)} = \frac{\text{Cost} - \text{Salvage Value}}{\text{Useful Life}}
$$

Bear City's \$650,000 fire truck has a salvage value of \$50,000 and a useful life of 10 years:

$$
\text{Depreciation} = \frac{\$650{,}000 - \$50{,}000}{10} = \$60{,}000 \text{ per year}
$$

```journal
Dr. Depreciation Expense (Public Safety) 60,000
Cr. Accumulated Depreciation (Machinery and Equipment)[ca] 60,000
```

In the statement of activities, depreciation is charged to the **function** that uses the asset, here public safety. Depreciation of an asset that serves essentially all functions, such as city hall, may be reported as a separate "unallocated depreciation" line. Depreciation of general infrastructure is usually charged to the function that builds and maintains it (often public works) or shown as a separate line.

---

## Construction in Progress

Costs of a project that is not finished accumulate in **construction in progress (CIP)**, which is not depreciated. When the project is placed in service, CIP is reclassified to the proper asset class and depreciation begins.

Bear City spends \$4,200,000 on a new library in Year 1 and another \$1,800,000 in Year 2, when the library opens. The government-wide entries are:

```journal
Year 1
Dr. Construction in Progress[a] 4,200,000
Cr. Cash[a] 4,200,000
```

```journal
Year 2
Dr. Construction in Progress[a] 1,800,000
Cr. Cash[a] 1,800,000
```

```journal
Year 2
Dr. Buildings[a] 6,000,000
Cr. Construction in Progress[a] 6,000,000
```

---

## Leases (GASB 87)

A government that leases an asset as lessee recognizes a **lease liability** and an intangible right-to-use **lease asset** at the start of the lease. GASB uses the term "lease asset" rather than FASB's "right-of-use asset," and it has a single lessee model: there is no operating and finance lease split. Short-term leases (a maximum possible term of 12 months or less) are exempt.

- The **lease liability** is the present value of the payments expected during the lease term.
- The **lease asset** is the lease liability, plus payments made at or before commencement and initial direct costs needed to place the asset into service, less lease incentives received.
- The lease asset is **amortized** over the shorter of the lease term or the useful life of the underlying asset.

Bear City leases office space for 5 years. The present value of the payments is \$420,000, and there are no other costs or incentives.

```journal
Dr. Lease Asset (Buildings)[a] 420,000
Cr. Lease Liability[l] 420,000
```

Annual amortization is \$420,000 ÷ 5 = \$84,000:

```journal
Dr. Amortization Expense (General Government) 84,000
Cr. Accumulated Amortization (Lease Asset)[ca] 84,000
```

If the lease is paid from a governmental fund, the fund records the lease at commencement as an expenditure (capital outlay) and an other financing source, each equal to the initial lease liability, just as it would for a bond-financed purchase. **Subscription-based IT arrangements** (GASB 96), such as cloud software subscriptions, follow the same pattern with a subscription asset and subscription liability.

---

## Calculating Net Capital Assets

Net capital assets are historical cost less accumulated depreciation and amortization:

$$
\text{Net Capital Assets} = \text{Historical Cost} - \text{Accumulated Depreciation and Amortization}
$$

**Kodiak County governmental activities capital assets, June 30, 20X5:**

| Category | Cost | Accumulated depreciation or amortization | Net |
|---|---|---|---|
| Land | \$4,500,000 | N/A | \$4,500,000 |
| Buildings | 28,000,000 | (\$8,400,000) | 19,600,000 |
| Improvements other than buildings | 6,200,000 | (2,480,000) | 3,720,000 |
| Machinery and equipment | 9,800,000 | (5,880,000) | 3,920,000 |
| Infrastructure | 52,000,000 | (15,600,000) | 36,400,000 |
| Construction in progress | 3,100,000 | N/A | 3,100,000 |
| Lease assets (buildings) | 2,100,000 | (420,000) | 1,680,000 |
| **Total** | **\$105,700,000** | **(\$32,780,000)** | **\$72,920,000** |

:::tip[Exam Tip]

When computing net capital assets, include every class: land and CIP (which have no accumulated depreciation), infrastructure, and lease assets. The common errors are leaving out CIP or infrastructure, or subtracting depreciation from land.

:::

---

## Infrastructure and the Modified Approach

GASB 34 offers an alternative to depreciation for **eligible infrastructure assets** that are part of a network or subsystem. Under the **modified approach**, the government does not depreciate the network. It expenses the costs of preserving it instead, on the theory that a road kept in the same condition year after year has not been "used up."

To use the modified approach, the government must:

1. Manage the assets with an **asset management system** that keeps an up-to-date inventory, performs **condition assessments** (at least every three years) and summarizes the results on a measurement scale, and estimates each year the annual amount needed to maintain and preserve the assets at the condition level the government has established and disclosed.
2. **Document** that the assets are being preserved approximately at or above that condition level.

| Cost | Treatment under the modified approach |
|---|---|
| Preservation and maintenance | Expensed when incurred |
| Additions and improvements that increase capacity or efficiency | Capitalized |
| Depreciation | Not recorded |

If the requirements stop being met, the government begins depreciating the network **prospectively**, as a change in accounting estimate. The condition assessments and the estimated versus actual preservation costs are presented as RSI (see [Required Supplementary Information](../governmental-financial-statements/required-supplementary-information.md)).

---

## Impairment

GASB 42 requires a government to evaluate capital assets for **impairment** when events or changes in circumstances suggest that an asset's **service utility** has declined significantly and unexpectedly. Indicators include physical damage, changes in laws or environmental factors, technological obsolescence, a change in the manner or expected duration of use, and construction stoppage. An impairment loss is recognized only if the decline is large and outside the normal life cycle of the asset.

The measurement approach follows the cause:

| Cause | Measurement approach |
|---|---|
| Physical damage | Restoration cost approach |
| Changes in laws, regulations, or environmental factors; technological obsolescence | Service units approach |
| Change in manner or duration of use | Service units approach or deflated depreciated replacement cost approach |
| Construction stoppage | Lower of carrying amount or fair value |

Under the **restoration cost approach**, the loss is not simply the cost of repairs. The current cost to restore the asset is converted to historical-cost terms, for example by applying the ratio of restoration cost to current replacement cost to the asset's carrying amount.

A flood damages a Kodiak County bridge with a carrying amount of \$8,000,000. Restoring it would cost \$2,500,000 today, and replacing it would cost \$12,500,000. Restoration is 20% of replacement cost (\$2,500,000 ÷ \$12,500,000), so the impairment loss is 20% of the carrying amount, or \$1,600,000.

```journal
Dr. Impairment Loss (Public Works) 1,600,000
Cr. Accumulated Depreciation (Infrastructure)[ca] 1,600,000
```

Any insurance recovery is netted against the loss if received in the same year; otherwise it is reported as revenue when realized.

---

## Note Disclosures

The capital asset note presents a rollforward (beginning balance, increases, decreases, ending balance) by major class, for governmental and business-type activities separately, with depreciation expense charged to each function. Under **GASB 104** (testable since July 1, 2025), the note must show lease assets, partnership right-to-use assets, subscription assets, and other intangible assets separately from owned assets, and it must disclose **capital assets held for sale** (those the government has decided to sell and expects to sell within one year). The details are in [Notes to Financial Statements](../governmental-financial-statements/notes-to-financial-statements.md).

---

## Summary of Journal Entries (Government-Wide)

| Transaction | Debit | Credit |
|---|---|---|
| Purchase a capital asset | Capital asset (by class) | Cash |
| Receive a donated capital asset | Capital asset | Capital grants and contributions (program revenue) |
| Record depreciation | Depreciation expense (by function) | Accumulated depreciation |
| Accumulate construction costs | Construction in progress | Cash or contracts payable |
| Complete a project | Capital asset (by class) | Construction in progress |
| Begin a lease | Lease asset | Lease liability |
| Amortize a lease asset | Amortization expense | Accumulated amortization |
| Record an impairment | Impairment loss | Accumulated depreciation (or the asset) |
