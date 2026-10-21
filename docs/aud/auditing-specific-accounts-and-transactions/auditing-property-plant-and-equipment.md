# Auditing Property, Plant, and Equipment

Property, plant, and equipment (PP&E) changes slowly. Most of the buildings and machines on this year's balance sheet were there last year and were audited then. So instead of re-auditing the whole balance every year, the auditor starts from the prior year's audited balance and concentrates on what changed: **additions**, **disposals**, and **depreciation**. This chapter follows that rollforward, then covers the search for capital items hidden in repair expense, impairment, and disclosure.

---

## Starting with the Rollforward

The auditor obtains a schedule from the client that rolls each asset class forward:

$$
\text{Beginning Balance} + \text{Additions} - \text{Disposals} = \text{Ending Balance}
$$

The auditor agrees the beginning balances to the prior year's audited figures, agrees the ending balances to the general ledger, and then tests the two moving parts. Accumulated depreciation gets the same treatment, with depreciation expense as the addition and the accumulated depreciation on disposed assets as the reduction.

---

## Vouching Additions

For significant additions, the auditor examines:

- **Authorization**, such as an approved capital expenditure request or board approval for large projects
- **Vendor invoices, purchase contracts, and payment records**, to confirm the cost (including freight, installation, and other costs needed to get the asset ready for use)
- **The asset itself**, by physical inspection of significant items, to confirm it exists and is in service

The auditor also checks that each addition was properly capitalized under the entity's policy, assigned to the right asset class, and given a sensible useful life and depreciation method. Errors run both ways: capitalizing an item that should have been expensed overstates assets and income, and expensing an item that should have been capitalized understates them.

**Example.** Sloth Security bought surveillance equipment for \$450,000. The auditor agrees the cost to the vendor invoice and the payment, confirms that the purchase was approved in the capital budget, inspects the equipment at the main facility, and confirms it was recorded as security equipment with a seven-year life consistent with similar assets.

Physical inspection works in two directions, just as test counts do for inventory. Selecting items from the asset register and finding them on the premises tests **existence**. Selecting assets on the premises and finding them in the register tests **completeness**.

---

## Reviewing Disposals

When assets are sold, scrapped, or retired, the cost and accumulated depreciation must come off the books and any gain or loss must be measured correctly. The auditor reviews the schedule of disposals and the authorization for each one, recalculates the gain or loss, and makes sure depreciation was recorded up to the date of disposal. Skipping the current year's depreciation before removing the asset overstates the carrying amount and misstates the gain or loss.

The harder problem is the disposal nobody recorded. Assets that were scrapped, abandoned, or idled may still be on the register, overstating PP&E. To find them, the auditor asks plant and operations personnel about retirements, looks for proceeds from scrap sales in miscellaneous income, and notes when new assets clearly replaced old ones that are still listed.

**Example.** Grizzly Industries sold equipment for \$30,000. Its cost was \$120,000 and accumulated depreciation through the sale date was \$100,000, a carrying amount of \$20,000. The auditor recalculates a \$10,000 gain (\$30,000 - \$20,000) and agrees it to the recorded entry:

```journal
Dr. Cash[a] 30,000
Dr. Accumulated Depreciation[ca] 100,000
Cr. Equipment[a] 120,000
Cr. Gain on Disposal of Equipment 10,000
```

---

## Testing Depreciation

The auditor tests depreciation expense by recalculation for a sample of assets, often supplemented by an analytical procedure: dividing each class's depreciation expense by its average depreciable cost gives an implied rate that should be consistent with the useful lives in the entity's policy. The auditor also checks that methods and lives are applied consistently from year to year and still make sense given how the assets are actually used.

**Example.** Polar Inc. depreciates equipment straight-line. For a \$200,000 machine with a 10-year life and \$20,000 salvage value, the auditor recalculates annual depreciation of (\$200,000 - \$20,000) ÷ 10 = \$18,000, which agrees with the client's records.

---

## Searching Repairs Expense for Capital Items

One of the most productive PP&E procedures looks outside PP&E entirely. The auditor scans **repairs and maintenance expense** for large or unusual charges and examines the invoices for any that extend an asset's life, increase its capacity, or improve its efficiency, since those costs should be capitalized. Data analytics makes it easy to list every repair invoice over a threshold for review.

**Example.** In Bear Co.'s repairs and maintenance account, the auditor finds a \$75,000 charge for replacing the building's HVAC system. Replacing a major component that extends the building's life is a capital expenditure, so the auditor proposes an adjustment:

```journal
December 31
Dr. Building Improvements[a] 75,000
Cr. Repairs and Maintenance Expense 75,000
```

The auditor would also consider the depreciation on the improvement from the date it was placed in service.

---

## Impairment, Cutoff, and Disclosure

The auditor considers whether **impairment indicators** exist, such as idle plants, a significant drop in an asset's market value, or operating losses tied to a group of assets. If they do, the auditor evaluates management's impairment test as an accounting estimate. **Cutoff** for PP&E follows the same idea as for inventory: assets received and disposals completed before year-end belong in the current year.

Finally, the auditor reviews the notes for the depreciation methods and useful lives used, the balances of each major asset class and accumulated depreciation, assets **pledged as collateral**, impairment losses, and significant commitments to buy assets. Kodiak Partners, for example, has pledged \$3.2 million of buildings under its mortgage. The auditor agrees the pledge to the loan agreement and the bank confirmation and checks that the note discloses it.
