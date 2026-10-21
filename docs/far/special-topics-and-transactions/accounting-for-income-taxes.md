# Accounting for Income Taxes

A company keeps two sets of rules in mind when it reports income: generally accepted accounting principles (GAAP) for its financial statements and the Internal Revenue Code (IRC) for its tax return. The two often recognize the same revenue or expense in different years, and sometimes one recognizes an item the other never does. Accounting Standards Codification (ASC) 740 reconciles them. The result is income tax expense that has two parts: the tax actually owed for the year, and the future tax effects of differences that will reverse later. FAR tests this topic through calculation: current and deferred tax, the journal entry for the provision, valuation allowances, and uncertain tax positions. The chapter closes with the income tax disclosures introduced by ASU 2023-09.

## Why Book Income and Taxable Income Differ

**Pretax financial income** (book income) is computed under GAAP. **Taxable income** is computed under the IRC. The bridge between them is:

$$
\text{Taxable Income} = \text{Pretax Financial Income} \pm \text{Permanent Differences} \pm \text{Temporary Differences}
$$

The two kinds of differences are treated very differently, so the first job in any tax question is to sort them.

---

## Permanent vs. Temporary Differences

### Permanent Differences

**Permanent differences** never reverse. They affect book income or taxable income, but not both, so they never create deferred taxes. They do change the effective tax rate.

| Example | Effect |
|---|---|
| Municipal bond interest | Included in book income; never taxable |
| Life insurance premiums (company is the beneficiary) | Book expense; never deductible |
| Fines and penalties | Book expense; never deductible |
| Life insurance proceeds (company is the beneficiary) | Included in book income; never taxable |

### Temporary Differences

**Temporary differences** arise when the book basis of an asset or liability differs from its tax basis. They reverse in future periods, and they create **deferred tax assets (DTAs)** or **deferred tax liabilities (DTLs)**. To classify one, ask what it will do when it reverses. If it will **increase** future taxable income (a future taxable amount), it creates a **DTL**. If it will **decrease** future taxable income (a future deductible amount), it creates a **DTA**.

| Example | Timing | Creates |
|---|---|---|
| Depreciation (straight-line for books, accelerated for tax) | Larger tax deduction now, larger book expense later | **DTL** |
| Installment sales | Book income now, taxable when collected | **DTL** |
| Allowance for credit losses | Book expense now, tax deduction when the receivable is written off | **DTA** |
| Estimated warranty liability | Book expense now, tax deduction when paid | **DTA** |
| Rent collected in advance (unearned rent) | Taxable when received, book income when earned | **DTA** |
| Inventory costs capitalized for tax but expensed for books (uniform capitalization rules) | Book expense now, tax deduction when the inventory is sold | **DTA** |

---

## Computing Tax Expense

Total income tax expense has two components:

$$
\text{Total Tax Expense} = \text{Current Tax Expense} + \text{Deferred Tax Expense (Benefit)}
$$

**Current tax expense** is the tax on this year's return:

$$
\text{Current Tax Expense} = \text{Taxable Income} \times \text{Enacted Tax Rate}
$$

**Deferred tax expense** is the change in the deferred tax balances during the year. ASC 740 uses a balance sheet approach: compute the deferred tax balances that should exist at year-end (each temporary difference times the **enacted** rate expected to apply when it reverses), then compare them with the beginning balances.

$$
\text{Deferred Tax Expense} = \Delta \text{DTL} - \Delta \text{DTA}
$$

An increase in a DTL adds to tax expense. An increase in a DTA reduces it.

---

## DTL and DTA Calculations

### Deferred Tax Liability

Bear Co. buys equipment for \$100,000. Book depreciation is straight-line over 5 years (\$20,000 per year). Tax depreciation in Year 1 is \$33,000. The enacted tax rate is 21%.

| | Book | Tax | Difference |
|---|---|---|---|
| Year 1 depreciation | \$20,000 | \$33,000 | \$13,000 |

At year-end the equipment's book basis (\$80,000) exceeds its tax basis (\$67,000) by \$13,000. Bear Co. has deducted more for tax than for books, so it will have smaller tax deductions, and pay **more tax**, in later years when the difference reverses:

$$
\text{DTL} = \$13{,}000 \times 21\% = \$2{,}730
$$

```journal
Dr. Income tax expense          2,730
    Cr. Deferred tax liability          2,730
```

### Deferred Tax Asset

Grizzly Inc. records credit loss expense of \$30,000, building its allowance for credit losses to \$30,000. For tax purposes, bad debts are deductible only when specific accounts are written off, and none were written off this year. The \$30,000 will be deductible in the future:

$$
\text{DTA} = \$30{,}000 \times 21\% = \$6{,}300
$$

```journal
Dr. Deferred tax asset          6,300
    Cr. Income tax expense              6,300
```

An accrued warranty liability works the same way: the expense is recorded for books now and deducted for tax when the repairs are paid.

---

## Comprehensive Example

Panda Industries has pretax financial income of \$500,000 and a 21% tax rate. The following differences arose this year:

| Item | Amount | Type |
|---|---|---|
| Municipal bond interest | \$20,000 | Permanent |
| Excess tax depreciation | \$40,000 | Temporary (DTL) |
| Warranty accrual (not yet paid) | \$15,000 | Temporary (DTA) |

**Step 1: Taxable income**

$$
\$500{,}000 - \$20{,}000 - \$40{,}000 + \$15{,}000 = \$455{,}000
$$

**Step 2: Current tax expense**

$$
\$455{,}000 \times 21\% = \$95{,}550
$$

**Step 3: Deferred taxes**

$$
\text{DTL increase} = \$40{,}000 \times 21\% = \$8{,}400
$$

$$
\text{DTA increase} = \$15{,}000 \times 21\% = \$3{,}150
$$

**Step 4: Total tax expense**

$$
\$95{,}550 + \$8{,}400 - \$3{,}150 = \$100{,}800
$$

Check: (\$500,000 - \$20,000) × 21% = \$100,800. Temporary differences shift tax between years but do not change total tax expense; only the permanent difference does.

```journal
Dr. Income tax expense        100,800
Dr. Deferred tax asset          3,150
    Cr. Income tax payable             95,550
    Cr. Deferred tax liability          8,400
```

---

## Valuation Allowance

A DTA is worth something only if the company will have enough taxable income in the future to use the deductions. A **valuation allowance** reduces a DTA to the amount that is **more likely than not** (a likelihood of more than 50%) to be realized. If it is more likely than not that some or all of the DTA will **not** be realized, an allowance is required for that portion.

The judgment weighs all available evidence. Realization depends on future taxable income from four possible sources:

1. Future reversals of existing taxable temporary differences (existing DTLs)
2. Future taxable income from operations, excluding reversing differences
3. Taxable income in prior carryback years, if carryback is permitted
4. Tax-planning strategies the company would use to keep the benefit from expiring

Negative evidence points toward an allowance: cumulative losses in recent years, losses expected in the near future, a history of carryforwards expiring unused, and uncertainties that could hurt future profits. Objectively verifiable negative evidence, such as recent cumulative losses, is hard to overcome.

Kodiak Partners has a DTA of \$60,000 but determines that only \$40,000 is more likely than not to be realized:

```journal
Dr. Income tax expense         20,000
    Cr. Valuation allowance            20,000
```

The DTA is presented net: \$60,000 - \$20,000 = \$40,000. The allowance is reassessed every period. If the evidence later improves, the allowance is reduced, and the reduction lowers income tax expense.

---

## Enacted Tax Rate Changes

Deferred taxes are measured using **enacted** rates, never rates that are only proposed. When a new rate is enacted, the deferred tax balances are remeasured, and the entire effect goes to income tax expense from continuing operations in the **period of enactment**.

$$
\text{Adjustment} = \text{Temporary Difference Balance} \times (\text{New Rate} - \text{Old Rate})
$$

Bear Co. has a cumulative taxable temporary difference of \$200,000. The enacted rate for future years falls from 35% to 21%:

$$
\text{Reduction in DTL} = \$200{,}000 \times (35\% - 21\%) = \$28{,}000
$$

```journal
Dr. Deferred tax liability     28,000
    Cr. Income tax expense             28,000
```

---

## Net Operating Losses

A **net operating loss (NOL)** occurs when allowable tax deductions exceed gross income. Under current federal law, an NOL arising in a tax year beginning after 2020 cannot be carried back (apart from narrow exceptions such as farming losses). It is carried forward indefinitely, but the NOL deduction in any year is limited to **80% of taxable income** computed before the deduction. Older losses followed different rules, such as a 2-year carryback and 20-year carryforward for losses arising before 2018.

Because an NOL carryforward will reduce future taxes, it creates a **DTA** in the year of the loss, subject to the same valuation allowance assessment as any other DTA.

Sloth Security has a 2024 NOL of \$100,000 and records a DTA of \$100,000 × 21% = \$21,000:

```journal
Dr. Deferred tax asset         21,000
    Cr. Income tax benefit             21,000
```

In 2025, Sloth has taxable income of \$110,000 before the NOL deduction. The deduction is limited to \$110,000 × 80% = \$88,000, so taxable income after the deduction is \$22,000 and \$12,000 of the NOL carries forward. Sloth uses \$88,000 × 21% = \$18,480 of the DTA:

```journal
Dr. Income tax expense         18,480
    Cr. Deferred tax asset             18,480
```

The remaining DTA is \$2,520 (\$12,000 × 21%).

---

## Uncertain Tax Positions

A company sometimes takes a position on its return that the tax authority might challenge, such as an aggressive deduction. ASC 740-10 lets the company recognize the benefit of the position in its financial statements only to the extent the benefit is likely to survive an examination. It uses a **two-step approach**:

1. **Recognition:** recognize a benefit only if the position is **more likely than not** (more than 50%) to be sustained on examination, based on its technical merits. Assume the tax authority will examine the position with full knowledge of all relevant information.
2. **Measurement:** recognize the **largest amount** of benefit that has a cumulative probability of more than 50% of being realized on settlement.

Polar Co. takes a deduction worth \$21,000 of tax on its return and concludes the position is more likely than not to be sustained. It estimates these possible outcomes:

| Benefit Realized | Probability | Cumulative Probability |
|---|---|---|
| \$21,000 | 30% | 30% |
| \$15,000 | 30% | 60% |
| \$8,000 | 40% | 100% |

The largest benefit with a cumulative probability above 50% is \$15,000, so Polar recognizes \$15,000. Because it claimed the full \$21,000 on its return, it records a **liability for unrecognized tax benefits** for the \$6,000 difference:

```journal
Dr. Income tax expense          6,000
    Cr. Liability for unrecognized tax benefits[l] 6,000
```

If the position had failed step 1, Polar would recognize no benefit at all and the liability would be the full \$21,000. Interest and penalties on unrecognized tax benefits are accrued. The company elects, as a policy applied consistently, whether to classify them as income tax expense or as interest and other expense.

---

## Balance Sheet Presentation

All deferred tax assets and liabilities are classified as **noncurrent**. Within each tax-paying component and tax jurisdiction, DTAs and DTLs are netted and presented as a single noncurrent amount. Income taxes payable for the current year are a current liability.

---

## Investee Undistributed Earnings

Under the equity method, the investor's share of investee earnings is book income, but only dividends are taxable. The undistributed earnings are therefore a temporary difference that creates a DTL:

$$
\text{DTL} = \text{Undistributed Earnings} \times \text{Tax Rate}
$$

This simplified formula ignores any dividends-received deduction (DRD). If a DRD applies, use only the taxable portion of the undistributed earnings. The **indefinite reversal** exception, which allows a company to skip the DTL when it can show the earnings will be reinvested indefinitely, applies only to the undistributed earnings of **foreign subsidiaries and foreign corporate joint ventures** that are essentially permanent in duration. It does not apply to an ordinary equity-method investee.

---

## Income Tax Disclosures (ASU 2023-09)

ASU 2023-09 rewrote the income tax footnote to give investors more detail about where a company pays tax and why its effective rate differs from the statutory rate.

**All entities** disclose:

- **Income taxes paid** (net of refunds), split among federal, state, and foreign, and further split by any individual jurisdiction that accounts for at least 5% of total income taxes paid
- **Pretax income (loss) from continuing operations**, split between domestic and foreign
- **Income tax expense (benefit) from continuing operations**, split among federal, state, and foreign

**Public business entities** also present a tabular **rate reconciliation**, in both percentages and dollar amounts, from the statutory rate to the effective rate. It uses eight specific categories:

1. State and local income tax, net of federal income tax effect
2. Foreign tax effects
3. Effect of changes in tax laws or rates enacted in the current period
4. Effect of cross-border tax laws
5. Tax credits
6. Changes in valuation allowances
7. Nontaxable or nondeductible items
8. Changes in unrecognized tax benefits

Within these categories, any reconciling item equal to at least **5%** of the amount computed by multiplying pretax income by the statutory rate must be shown separately. Entities that are not public business entities instead describe the nature and effect of their significant reconciling items in words.

For Panda Industries in the comprehensive example, the only reconciling item is the nontaxable municipal bond interest:

| | Amount | Percent |
|---|---|---|
| Tax at the U.S. federal statutory rate (\$500,000 × 21%) | \$105,000 | 21.00% |
| Nontaxable or nondeductible items (municipal bond interest) | (4,200) | (0.84%) |
| **Income tax expense and effective rate** | **\$100,800** | **20.16%** |

ASU 2023-09 also removed two older disclosures: the estimate of how unrecognized tax benefits could reasonably change within the next 12 months, and the cumulative amount of temporary differences for which no DTL was recognized on investments in subsidiaries and corporate joint ventures.
