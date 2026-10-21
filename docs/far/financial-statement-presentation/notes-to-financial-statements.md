# Notes to Financial Statements

The **notes to financial statements** (also called footnotes or disclosures) are an integral part of a complete set of financial statements prepared under U.S. generally accepted accounting principles (GAAP). The face of the statements gives the numbers; the notes explain how those numbers were measured, break them into their parts, and report risks and events that the numbers alone cannot show. The auditor's opinion covers both. One rule frames everything that follows: **disclosure does not substitute for recognition**. If GAAP requires an item to be recognized on the face of the statements, describing it in a note does not fix the omission. FAR tests the notes by asking you to correct errors and omissions in them and to compare them with the statements to find inconsistencies. This chapter covers how the notes are organized, the policies note, the main disclosures for individual accounts (including the new income tax and expense disclosures), risks and uncertainties, subsequent events, and how to review a set of notes.

---

## How the Notes Are Organized

Notes are typically presented in this order:

1. **Summary of significant accounting policies** (usually Note 1)
2. Notes for individual balance sheet and income statement items, in roughly the order they appear in the statements
3. Commitments and contingencies
4. Related party transactions
5. Subsequent events

## Note 1: Summary of Significant Accounting Policies

The policies note tells readers how the numbers were prepared. Under ASC 235, it should preferably be the **first note**, or a separate summary just before the notes. Its main job is to disclose the **methods chosen when GAAP permits alternatives**, such as the inventory cost flow method or the depreciation method, along with unusual or industry-specific applications of GAAP. Entities often describe policies where GAAP allows no choice too, for readers' convenience. Common topics include:

| Policy Area                  | What to Disclose                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| **Basis of presentation**    | Consolidation principles, fiscal year-end                                           |
| **Revenue recognition**      | Performance obligations, timing of satisfaction, variable consideration             |
| **Inventory**                | Cost flow method (first-in, first-out, last-in, first-out, or weighted average) and the measurement rule |
| **Depreciation**             | Methods and useful lives                                                            |
| **Income taxes**             | Deferred tax approach, uncertain tax positions                                      |
| **Financial instruments**    | Classification, measurement, credit loss approach                                   |
| **Leases**                   | Discount rate approach, practical expedients elected                                |
| **Cash equivalents**         | The definition used                                                                 |

A typical excerpt:

> **Note 1: Summary of Significant Accounting Policies**
>
> _Inventory:_ Bear Co. values inventory at the lower of cost and net realizable value. Cost is determined using the first-in, first-out (FIFO) method.
>
> _Property, Plant, and Equipment:_ PP&E is recorded at historical cost and depreciated using the straight-line method over estimated useful lives of 5 to 40 years. Land is not depreciated.
>
> _Revenue Recognition:_ Revenue is recognized when control of goods or services transfers to the customer, in an amount that reflects the consideration the Company expects to be entitled to in exchange for those goods or services.

---

## Notes for Individual Accounts

Each major account gets its own note. The notes below are the ones most often used in simulations.

### Inventories

The inventory note shows the composition of inventory (raw materials, work in process, finished goods), the costing method, any write-downs to net realizable value, and, for an entity using LIFO, the LIFO reserve.

> **Note 3: Inventories**
>
> Inventories consist of the following at December 31:
>
> | Component             |        Amount |
> | --------------------- | ------------: |
> | Raw materials         |      \$85,000 |
> | Work in process       |       120,000 |
> | Finished goods        |       195,000 |
> | **Total inventories** | **\$400,000** |
>
> During the year, the Company recognized a write-down of \$15,000 to reduce finished goods inventory to net realizable value, recorded in cost of goods sold.

### Property, Plant, and Equipment

The PP&E note shows balances by major class, accumulated depreciation, depreciation methods and useful lives, and depreciation expense for the period.

> **Note 4: Property, Plant, and Equipment**
>
> | Asset Class | Useful Life   |            Cost |    Accum. Depr. |             Net |
> | ----------- | ------------- | --------------: | --------------: | --------------: |
> | Buildings   | 30 years      |     \$1,200,000 |     (\$400,000) |       \$800,000 |
> | Equipment   | 5 to 10 years |         650,000 |       (260,000) |         390,000 |
> | Vehicles    | 5 years       |         180,000 |       (108,000) |          72,000 |
> | Land        | N/A           |         300,000 |             N/A |         300,000 |
> | **Total**   |               | **\$2,330,000** | **(\$768,000)** | **\$1,562,000** |
>
> Depreciation expense was \$155,000 for the year ended December 31.

### Fair Value Measurements

For assets and liabilities measured at fair value, ASC 820 requires disclosure of where each measurement falls in the **fair value hierarchy**: Level 1 (unadjusted quoted prices in active markets for identical items), Level 2 (other observable inputs, such as quoted prices for similar items or yield curves), or Level 3 (unobservable inputs based on the entity's own assumptions).

> |                                      |   Level 1 |   Level 2 |  Level 3 |     Total |
> | ------------------------------------ | --------: | --------: | -------: | --------: |
> | Trading securities                   | \$150,000 |           |          | \$150,000 |
> | Available-for-sale (AFS) debt securities |       | \$200,000 |          | \$200,000 |
> | Contingent consideration             |           |           | \$45,000 |  \$45,000 |

Level 3 measurements carry the most extra disclosure. For recurring Level 3 measurements, entities disclose the changes in the balance during the period (a full rollforward, for public entities), including transfers into and out of Level 3, and quantitative information about the significant unobservable inputs. The fair value measurement chapter covers the hierarchy in depth.

### Contingencies

A **contingency** is an existing condition involving uncertainty about a possible gain or loss that will be resolved by a future event. The treatment depends on how likely that future event is:

| Likelihood | Loss Contingency | Gain Contingency |
|---|---|---|
| **Probable** | Accrue if reasonably estimable, and disclose | Do not accrue; disclose, with care not to imply it will be realized |
| **Reasonably possible** | Disclose only | Generally not disclosed |
| **Remote** | No disclosure required (except guarantees) | Not disclosed |

Panda Industries is being sued for \$500,000, and its counsel believes an unfavorable outcome is reasonably possible but not probable. Panda records nothing and discloses the claim:

> **Note 8: Contingencies**
>
> The Company is a defendant in a lawsuit filed by a former supplier alleging breach of contract and seeking damages of \$500,000. Management, in consultation with legal counsel, believes an unfavorable outcome is reasonably possible. No accrual has been made, but an unfavorable resolution could result in a loss of up to \$500,000.

If the loss were probable and estimable at \$350,000, Panda would accrue it and still disclose the nature of the claim:

```journal
Dr. Loss from litigation         350,000
    Cr. Estimated liability from litigation[l]  350,000
```

The current liabilities and contingencies chapter covers the recognition rules in full.

### Income Taxes (ASU 2023-09)

The income tax note explains the gap between the statutory rate and the rate the company actually paid, and where the cash went. ASU 2023-09 expanded it substantially. It has been eligible for testing since January 1, 2025.

**All entities** must disclose, each year:

- **Income taxes paid**, net of refunds, broken down by federal, state, and foreign taxes, and further by any individual jurisdiction that accounts for 5% or more of total income taxes paid
- Income (or loss) from continuing operations before tax, split between **domestic and foreign**
- Income tax expense from continuing operations, split among **federal, state, and foreign**

**Public business entities** must also present a tabular **rate reconciliation**, in both percentages and dollar amounts, from the tax computed at the statutory rate to reported income tax expense. It uses eight required categories: state and local income tax (net of the federal effect), foreign tax effects, the effect of changes in tax laws or rates enacted in the current period, the effect of cross-border tax laws, tax credits, changes in valuation allowances, nontaxable or nondeductible items, and changes in unrecognized tax benefits. Within those categories, any reconciling item equal to at least **5% of pretax income times the statutory rate** must be shown separately. Other entities describe the significant reconciling items qualitatively instead of in a table.

Bear Co., a public business entity, has pretax income of \$1,000,000 and a 21% federal statutory rate, so the 5% threshold is \$10,500 (5% × \$210,000):

| Rate reconciliation | Amount | Percent |
| --- | ---: | ---: |
| Tax at the federal statutory rate | \$210,000 | 21.0% |
| State and local income tax, net of federal effect | 40,000 | 4.0% |
| Tax credits: research credit | (30,000) | (3.0%) |
| Nondeductible items: fines and penalties | 15,000 | 1.5% |
| Changes in valuation allowances | 5,000 | 0.5% |
| **Income tax expense and effective rate** | **\$240,000** | **24.0%** |

The research credit and the nondeductible fines exceed \$10,500, so each is described by its nature. The valuation allowance change is below the threshold but appears because it is a required category.

ASU 2023-09 also removed two older disclosures: the estimated range of reasonably possible changes in unrecognized tax benefits over the next 12 months, and the cumulative amount of temporary differences for which no deferred tax liability is recognized on investments in subsidiaries and joint ventures. If a practice question shows either one as required, it is testing the old rules.

### Expense Disaggregation (ASU 2024-03)

Starting with annual periods beginning after December 15, 2026, a **public business entity** must add a tabular note that breaks each relevant income statement expense caption into purchases of inventory, employee compensation, depreciation, intangible asset amortization, and depletion, with a qualitative description of what remains, plus total selling expenses and the entity's definition of them. The face of the income statement does not change. ASU 2024-03 is eligible for testing starting January 1, 2027; the income statement chapter shows an example.

### Segments

Public entities report information about their **operating segments** under ASC 280: components whose operating results are regularly reviewed by the chief operating decision maker (CODM). Since ASU 2023-07, each reportable segment's note includes the **significant segment expenses** regularly provided to the CODM, along with segment revenue, profit or loss, and assets. Segment reporting is tested mainly in BAR.

### Related Parties

Transactions with related parties, such as affiliates, principal owners, management, and their immediate families, may not be at arm's length. ASC 850 requires disclosure of the nature of each relationship, a description of the transactions, their dollar amounts, and amounts due to or from related parties at the balance sheet date. A statement that a transaction was on terms equivalent to an arm's-length transaction may be made only if it can be supported.

---

## Risks and Uncertainties (ASC 275)

ASC 275 requires four kinds of disclosure that help readers judge how exposed the entity is to near-term surprises.

**Nature of operations.** A short description of what the entity does: its principal products or services, markets, and locations. For example: "Bear Co. manufactures and distributes consumer electronics products, primarily in the United States and Canada."

**Use of estimates.** Every set of GAAP financial statements must state that their preparation requires management to make estimates and assumptions that affect reported amounts, and that actual results could differ.

**Significant estimates.** When it is **reasonably possible** that an estimate will change in the near term (within one year) and the effect would be **material**, the entity discloses the nature of the uncertainty. Common examples are the allowance for credit losses, inventory obsolescence, warranty obligations, valuation allowances for deferred tax assets, Level 3 fair values, and litigation accruals.

**Concentrations.** An entity discloses concentrations that make it vulnerable to a severe near-term impact, such as one customer providing a large share of revenue, a single-source supplier for a key component, operations concentrated in one region, or a workforce covered by one union contract. Concentrations of credit risk on financial instruments are disclosed under ASC 825.

> **Note 11: Concentrations**
>
> Approximately 35% of the Company's revenue for the year ended December 31 was derived from a single customer. As of December 31, the accounts receivable balance due from this customer was \$420,000. The loss of this customer would have a material adverse effect on the Company's operations.

---

## Subsequent Events (ASC 855)

Subsequent events occur **after the balance sheet date** but **before the financial statements are issued** (or available to be issued), and the notes disclose the date through which they were evaluated. The key question is whether the condition **existed at the balance sheet date**:

| Type | Description | Treatment |
| --- | --- | --- |
| **Recognized** | Gives more evidence about a condition that existed at the balance sheet date, such as a lawsuit settled after year-end for a claim that arose before it | **Adjust** the financial statements |
| **Nonrecognized** | Concerns a condition that arose after the balance sheet date, such as a fire in January or a business combination completed after year-end | **Disclose** the nature and an estimate of the effect (do not adjust) |

If Grizzly Inc.'s main warehouse burns down on January 25, an estimated \$2,000,000 loss, nothing is adjusted in the December 31 statements, but a note describes the fire and its estimated effect. The subsequent events chapter covers the rules and examples in depth.

---

## Reviewing the Notes Against the Statements

Because the notes and the statements describe the same facts, they must agree, and a common simulation asks you to find where they do not. Work through the notes with the statements beside you:

- **Tie the numbers.** Totals in the notes (inventory components, PP&E by class, debt maturities, the fair value table) should equal the related balance sheet lines. Depreciation expense in the PP&E note should match the expense in the income statement and the add-back in the statement of cash flows.
- **Check the policies against the accounting.** If Note 1 says inventory is costed on FIFO, the inventory amounts should reflect FIFO. If it says an expedient was elected, the numbers should reflect that election.
- **Look for omissions.** A probable, estimable loss that is disclosed but not accrued, a missing use-of-estimates statement, or a known concentration that is not disclosed are all errors to correct.
- **Check classification language.** A note that describes debt as callable because of a covenant violation is inconsistent with a balance sheet that shows the debt as noncurrent, unless a qualifying waiver is also described.

:::warning[Common exam traps]

Gain contingencies are never accrued before realization. Remote loss contingencies generally need no disclosure, except guarantees. The use-of-estimates disclosure is required in every set of GAAP statements. And a subsequent event is recognized only if the underlying condition existed at the balance sheet date.

:::

---

## Practice Problem

Cub Entertainment has the following situations at its December 31 year-end (financial statements will be issued on March 15):

1. A lawsuit filed against the company in October has a probable unfavorable outcome. Legal counsel estimates the loss at \$100,000 to \$300,000, with \$180,000 being the best estimate.
2. One customer accounts for 45% of revenue.
3. On February 1, the company acquired a competitor for \$5,000,000.
4. On January 20, a customer declared bankruptcy. The receivable of \$75,000 was outstanding at December 31 and is now uncollectible.

**Required:** For each item, state whether to accrue, disclose, or both.

<details>
<summary>Solution</summary>

1. **Accrue \$180,000 and disclose.** The loss is probable, and the best estimate within the range is \$180,000. If no amount in the range were a better estimate than any other, accrue the **minimum** of the range (\$100,000) and disclose the range.

   ```journal
   Dr. Loss from litigation         180,000
       Cr. Estimated liability from litigation[l]  180,000
   ```

2. **Disclose** the customer concentration. No accrual is needed; this is a risk disclosure under ASC 275.
3. **Disclose only (nonrecognized subsequent event).** The acquisition reflects a condition that arose after year-end. Disclose the nature of the transaction and an estimate of its financial effect.
4. **Adjust (recognized subsequent event).** The customer's financial difficulties existed at year-end; the bankruptcy confirms the receivable was uncollectible at December 31. Cub increases its allowance (or writes off the account if the allowance already covers it):

   ```journal
   Dr. Credit loss expense             75,000
       Cr. Allowance for credit losses[ca] 75,000
   ```

</details>
