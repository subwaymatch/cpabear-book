# Accounting Changes and Error Corrections

Financial statements are useful for comparison only if a company applies the same methods period after period. Sometimes, though, something has to change: new information makes an estimate out of date, management adopts a better accounting method, a new standard takes effect, or someone discovers that last year's statements were simply wrong. Accounting Standards Codification (ASC) 250 sorts these situations into four types and prescribes a treatment for each. On the exam you will classify the change, decide whether it is applied prospectively or retrospectively, compute the adjustment, and work out its effect on the statements and notes. This chapter takes the four types in turn, then shows how errors are found and corrected.

## The Four Types at a Glance

| Type | Example | Treatment | Restate Prior Periods? |
| ---- | ------- | --------- | ---------------------- |
| Change in estimate | Revising an asset's useful life | Prospective | No |
| Change in estimate effected by a change in principle | Switching from double-declining balance to straight-line depreciation | Prospective | No |
| Change in principle | Switching from FIFO to weighted-average inventory | Retrospective | Yes |
| Change in reporting entity | Presenting consolidated statements instead of individual company statements | Retrospective | Yes |
| Error correction | Discovering that last year's depreciation was never recorded | Restatement (prior period adjustment) | Yes |

The pattern is worth remembering. Changes in estimate are a normal part of accounting, so they affect only the current and future periods. Changes in principle and reporting entity are applied retrospectively so that all periods presented are comparable. Errors are corrected retrospectively because the earlier statements were wrong.

---

## Changes in Accounting Estimate

Many amounts in financial statements are estimates: the useful life and salvage value of equipment, the allowance for credit losses, warranty obligations, inventory obsolescence. A **change in estimate** results from new information, more experience, or changed circumstances. Revising an estimate does not mean the old one was wrong, so prior periods are **not** adjusted. The change is applied **prospectively**, in the current period and future periods.

Bear Co. bought equipment for \$120,000 with no salvage value and a 10-year useful life (straight-line). After 4 years, Bear Co. revises the total useful life to 8 years.

Accumulated depreciation after 4 years is \$120,000 ÷ 10 × 4 = \$48,000, leaving a book value of \$72,000. That remaining book value is spread over the remaining 4 years (8 - 4):

$$
\frac{\$72{,}000}{4} = \$18{,}000 \text{ per year}
$$

```journal
Dr. Depreciation expense       18,000
    Cr. Accumulated depreciation        18,000
```

A **change in depreciation method** (for example, from double-declining balance to straight-line) is a special case. It is a change in principle, but the reason for it is a new view of how the asset's benefits are consumed, which is an estimate. ASC 250 calls it a **change in estimate effected by a change in principle** and applies it **prospectively**, just like a change in estimate: the remaining book value is depreciated under the new method over the remaining life.

For a change in estimate that affects several future periods, such as a change in useful life, the entity discloses its effect on income from continuing operations, net income, and per-share amounts for the current period. Routine estimates made every period, such as credit loss allowances, need no disclosure unless the effect of the change is material.

---

## Changes in Accounting Principle

A **change in principle** occurs when an entity switches from one generally accepted accounting principle to another, such as from first-in, first-out (FIFO) to weighted-average inventory. A company may change voluntarily only if the new principle is **preferable**. A change required by a new Financial Accounting Standards Board (FASB) standard follows the transition method in that standard.

Changes in principle are applied **retrospectively**, as if the new principle had always been used:

1. Restate the prior-period financial statements that are presented.
2. Adjust the **beginning balance of retained earnings** for the earliest period presented for the cumulative effect on earlier periods, net of tax.
3. Disclose the nature of and reason for the change, including why the new principle is preferable.

If determining the effect on prior periods is impracticable, the new principle is applied as of the earliest date that is practicable.

Polar Co. changes from FIFO to weighted-average on January 1, Year 3. The cumulative effect on prior years is a \$25,000 decrease in inventory and retained earnings. (Ignore income taxes in this example.)

```journal
Dr. Retained earnings          25,000
    Cr. Inventory                      25,000
```

If Year 1 and Year 2 financial statements are presented for comparison, they are restated using weighted-average.

:::warning[Exception: Change to LIFO]

A change **to** LIFO from another method is not applied retrospectively, because LIFO layers for earlier years usually cannot be reconstructed. The beginning inventory in the year of change becomes the **first LIFO layer**, and no cumulative adjustment is made.

:::

**Indirect effects** of a change in principle, such as a change in profit-sharing or royalty payments based on reported income, are recognized in the period of change. They are **not** included in the retrospective restatement.

---

## Changes in Reporting Entity

A **change in reporting entity** occurs when the entity being reported on differs from the one reported in prior periods. Examples include presenting consolidated statements in place of individual company statements and changing which subsidiaries are included in the consolidated group. All prior-period statements presented are **restated** as if the new entity structure had always existed.

---

## Error Corrections

An **error** in previously issued financial statements can come from a mathematical mistake, a mistake in applying generally accepted accounting principles (GAAP), or oversight or misuse of facts that existed when the statements were prepared. A change from a non-GAAP method (such as the cash basis) to a GAAP method (such as the accrual basis) is also an **error correction**, not a change in principle.

A material error in prior-period statements is corrected by **restatement**. The prior-period statements presented are restated, and the cumulative effect on earlier periods is a **prior period adjustment** to the beginning balance of retained earnings (net of tax) for the earliest period presented. The correction never runs through current-year income.

Grizzly Inc. discovers in Year 3 that it failed to record \$40,000 of depreciation expense in Year 1. The tax rate is 21%, so the after-tax effect is \$40,000 × (1 - 0.21) = \$31,600.

Assume the depreciation was correctly deducted on the Year 1 tax return. Then the error affected only the books: it overstated the asset's carrying amount, which overstated the deferred tax liability by the \$8,400 tax effect (\$40,000 × 21%). The correction reduces that liability. (If the tax return had also omitted the deduction, the debit would go to income taxes payable or a refund receivable instead.)

```journal
Dr. Retained earnings          31,600
Dr. Deferred tax liability      8,400
    Cr. Accumulated depreciation        40,000
```

The statement of retained earnings shows the correction as an adjustment to the beginning balance:

| Line | Amount |
|---|---|
| Beginning retained earnings (as previously reported) | \$500,000 |
| Prior period adjustment (net of tax) | (\$31,600) |
| **Beginning retained earnings (as restated)** | **\$468,400** |
| Net income | \$120,000 |
| Dividends | (\$30,000) |
| **Ending retained earnings** | **\$558,400** |

### Counterbalancing Errors

Some errors correct themselves over two periods. Suppose Polar Co. understates its Year 1 ending inventory by \$10,000 (ignore income taxes). Year 1 cost of goods sold is overstated, so Year 1 net income is understated. But Year 1's ending inventory is Year 2's beginning inventory, so Year 2 cost of goods sold is understated and Year 2 net income is overstated by the same \$10,000. These are **counterbalancing errors**:

| Item | Year 1 | Year 2 |
|---|---|---|
| Cost of goods sold | Overstated \$10,000 | Understated \$10,000 |
| Net income | Understated \$10,000 | Overstated \$10,000 |
| Ending retained earnings | Understated \$10,000 | Correct |

When the error is found determines the entry. If Polar discovers it during Year 2, before the Year 2 books are closed, retained earnings is still understated, so Polar records a prior period adjustment and Year 2 cost of goods sold is then computed from the corrected beginning inventory:

```journal
Dr. Inventory[a] 10,000
    Cr. Retained earnings[e] 10,000
```

If Polar discovers the error after the Year 2 books are closed, no entry is needed, because retained earnings has already corrected itself. The Year 1 and Year 2 statements are still restated if they are presented for comparison. Other common counterbalancing errors are failures to record accrued expenses, accrued revenue, and prepaid items. Errors such as unrecorded depreciation are **non-counterbalancing**: they do not reverse until the asset is disposed of, so they always require a correcting entry.

### Correcting Entries

A **correcting entry** fixes a mistake whenever it is found. If the mistake is discovered in the same period, before the books are closed, the entry simply moves amounts to the right accounts. Polar Co. debited Equipment for a \$5,000 repair that should have been expensed and finds the error before year-end:

```journal
Dr. Repairs expense             5,000
    Cr. Equipment                       5,000
```

Correcting entries are different from **adjusting entries**, which are routine end-of-period entries for accruals and deferrals and are covered in [Adjusting Journal Entries](../accounting-basics/adjusting-journal-entries.md). If a mistake affects a period whose books have already been closed, the income statement accounts for that period no longer exist, so the correction goes through retained earnings as shown above.

---

## Disclosures

Each type of change carries its own disclosures:

| Type | Key Disclosures |
|---|---|
| Change in principle | Nature of and reason for the change, including why the new principle is preferable; the method of applying it; the effect on income from continuing operations, net income, other affected line items, and per-share amounts for each period presented; the cumulative effect on retained earnings at the beginning of the earliest period presented |
| Change in estimate | Effect on income from continuing operations, net income, and per-share amounts for the current period, when the change affects several future periods or is material |
| Error correction | That previously issued statements have been restated and the nature of the error; the effect on each line item and per-share amount for each prior period presented; the cumulative effect on retained earnings at the beginning of the earliest period presented |
