# Income Statement

The **income statement** (also called the **statement of operations** or **profit and loss statement**) reports an entity's financial performance over a period of time. It answers one question: how much did the company earn, or lose, during the period? Investors read it to judge how well the business is doing and to predict how it will do next, which is why GAAP cares so much about separating ongoing results from one-time events. FAR asks you to prepare single-step and multiple-step statements, place items in the right section, report discontinued operations, and compute gains and losses on foreign currency transactions. This chapter covers each of these in turn, along with the new expense disaggregation disclosures for public companies.

## Elements of the Income Statement

The income statement is an accrual-basis statement: revenues are recognized when earned and expenses when incurred, regardless of when cash changes hands. It reports four elements, which the conceptual framework defines in two pairs.

**Revenues** and **expenses** come from the entity's ongoing major or central operations: sales revenue, service revenue, and interest revenue for a bank on one side; cost of goods sold, salaries, and depreciation on the other. **Gains** and **losses** are increases and decreases in equity from peripheral or incidental transactions, such as selling a piece of equipment or settling a lawsuit. The distinction drives where an item appears on the statement, and it also drives how the item is measured.

**Revenues and expenses are reported gross. Gains and losses are reported net.** When Bear Co. sells equipment that cost \$50,000, with accumulated depreciation of \$30,000, for \$25,000, it does not report \$25,000 of revenue and \$20,000 of expense. It reports a single gain of \$5,000:

$$
\text{Gain} = \$25{,}000 - (\$50{,}000 - \$30{,}000) = \$5{,}000
$$

```journal
Dr. Cash[a]                       25,000
Dr. Accumulated depreciation[ca]  30,000
    Cr. Equipment[a]                  50,000
    Cr. Gain on sale of equipment      5,000
```

It also helps to see expenses as **expired costs**. A cost that still has future benefit, such as prepaid insurance, inventory, or equipment, is an asset on the balance sheet. When the benefit is used up, the cost expires and moves to the income statement as an expense: insurance expense, cost of goods sold, or depreciation.

---

## Single-Step and Multiple-Step Formats

GAAP does not prescribe a format, and two are common.

A **single-step** statement groups all revenues and gains together, then subtracts all expenses and losses in one step:

|                                |        Amount |
| ------------------------------ | ------------: |
| **Revenues and Gains**         |               |
| Sales revenue                  |     \$500,000 |
| Interest revenue               |        10,000 |
| Gain on sale of equipment      |         5,000 |
| **Total revenues and gains**   | **\$515,000** |
| **Expenses and Losses**        |               |
| Cost of goods sold             |     (300,000) |
| Selling expenses               |      (50,000) |
| Administrative expenses        |      (40,000) |
| Interest expense               |      (15,000) |
| Loss on lawsuit                |       (8,000) |
| **Total expenses and losses**  | **(413,000)** |
| **Income before income taxes** | **\$102,000** |
| Income tax expense             |      (30,600) |
| **Net income**                 |  **\$71,400** |

A **multiple-step** statement separates operating from nonoperating activities and shows subtotals such as **gross profit** and **operating income**. The same numbers look like this:

|                                       |        Amount |
| ------------------------------------- | ------------: |
| Sales revenue                         |     \$500,000 |
| Less: Cost of goods sold              |     (300,000) |
| **Gross profit**                      | **\$200,000** |
| Operating expenses:                   |               |
| &emsp;Selling expenses                |      (50,000) |
| &emsp;Administrative expenses         |      (40,000) |
| **Operating income**                  | **\$110,000** |
| Other revenues and gains:             |               |
| &emsp;Interest revenue                |        10,000 |
| &emsp;Gain on sale of equipment       |         5,000 |
| Other expenses and losses:            |               |
| &emsp;Interest expense                |      (15,000) |
| &emsp;Loss on lawsuit                 |       (8,000) |
| **Income before income taxes**        | **\$102,000** |
| Income tax expense                    |      (30,600) |
| **Income from continuing operations** |  **\$71,400** |

Net income is the same under both formats; only the subtotals differ. The multiple-step format is tested more often, so know its order: sales, cost of goods sold, gross profit, operating expenses, operating income, other revenues, gains, expenses, and losses, income tax expense, income from continuing operations, discontinued operations (net of tax), and net income.

### Income from Continuing Operations

**Income from continuing operations** is the result of the entity's ongoing activities after income tax but before any discontinued operations. It includes operating revenues and expenses, nonoperating items such as interest and gains or losses on asset disposals, and the income tax expense on those items.

Items that are **unusual in nature or infrequent in occurrence**, such as a large loss from an earthquake, stay inside income from continuing operations. They may be shown as a separate line item or disclosed in the notes, but they are reported **before tax**, not net of tax. GAAP no longer has a separate "extraordinary items" category, so discontinued operations are the only income statement section reported net of tax.

---

## Discontinued Operations

Discontinued operations are reported **separately**, **net of tax**, **below** income from continuing operations, so that readers can see what the continuing business earned. This is one of the most heavily tested income statement topics.

### What Qualifies

A disposal of a **component** of an entity (operations and cash flows that can be clearly distinguished from the rest of the entity) is reported as a discontinued operation when it represents a **strategic shift** that has, or will have, a major effect on the entity's operations and financial results. Examples include the disposal of a major line of business, a major geographical area, or a major equity method investment. The component must either have been disposed of (by sale or otherwise) or be classified as **held for sale**, using the same six criteria that apply to long-lived assets (see the property, plant, and equipment chapter). Closing one store in a chain of hundreds is usually not a strategic shift.

### Measuring and Presenting the Results

The results of a discontinued operation have two parts, each reported net of tax:

1. **Income or loss from operations** of the component for the period (its revenues minus its expenses)
2. **Gain or loss on disposal**, including any impairment loss recognized when the component is classified as held for sale

The disposal gain or loss may be shown separately on the face of the income statement or disclosed in the notes.

A component held for sale is measured at the **lower of its carrying amount or fair value less costs to sell**, and any write-down is an impairment loss reported in discontinued operations.

Polar Co. decides to sell its consulting division, which qualifies as a discontinued operation. The division's net assets have a carrying amount of \$800,000 and a fair value less costs to sell of \$650,000. The division lost \$120,000 from operations during the year, and the tax rate is 25%.

$$
\text{Impairment loss} = \$800{,}000 - \$650{,}000 = \$150{,}000
$$

```journal
Dr. Loss on impairment (discontinued operations)    150,000
    Cr. Net assets of discontinued component[a]          150,000
```

Polar's income statement shows, below income from continuing operations:

|                                                                                              |        Amount |
| -------------------------------------------------------------------------------------------- | ------------: |
| Income from continuing operations                                                            |     \$500,000 |
| **Discontinued operations (net of tax):**                                                    |               |
| &emsp;Loss from operations of discontinued division (\$120,000 less tax benefit of \$30,000) |      (90,000) |
| &emsp;Impairment loss on discontinued division (\$150,000 less tax benefit of \$37,500)      |     (112,500) |
| **Net income**                                                                               | **\$297,500** |

If fair value less costs to sell later **increases**, Polar recognizes a gain in discontinued operations, but only up to the \$150,000 of losses previously recognized. A \$60,000 increase is within that limit:

```journal
Dr. Net assets of discontinued component[a]    60,000
    Cr. Gain on recovery (discontinued operations)    60,000
```

Because of the limit, a component can never be written up above its carrying amount before the impairment.

---

## Expense Disaggregation Disclosures (ASU 2024-03)

Most companies present expenses on the face of the income statement **by function**, in captions such as cost of sales and selling, general, and administrative expenses. Investors have long asked what is inside those captions. ASU 2024-03 answers that question in the notes, without changing the face of the statement.

A **public business entity** must disclose, in a tabular note, the amounts of the following that are included in each **relevant expense caption** (any expense caption on the face of the income statement, within continuing operations, that contains one of these categories):

1. Purchases of inventory
2. Employee compensation
3. Depreciation
4. Intangible asset amortization
5. Depreciation, depletion, and amortization recognized in oil- and gas-producing activities (or other depletion expense)

The same table must include certain expense amounts that GAAP already requires to be disclosed elsewhere, and a qualitative description of the amounts in each caption that are not broken out. The entity must also disclose its **total selling expenses** and, in annual periods, how it defines selling expenses.

For example, if Grizzly Inc., a public company, reports "Cost of sales" of \$600,000 on its income statement, its note might show that the caption includes \$380,000 of inventory purchases, \$150,000 of employee compensation, and \$40,000 of depreciation, with the remaining \$30,000 described as freight and other costs.

ASU 2024-03 applies to annual periods beginning after December 15, 2026, and to interim periods beginning after December 15, 2027. It is eligible for testing starting January 1, 2027. It does not apply to private companies or not-for-profit entities.

---

## Foreign Currency Transactions

When a U.S. company buys or sells on credit in a **foreign currency**, the dollar amount it will pay or receive changes as exchange rates move. Those changes are **foreign currency transaction gains and losses**, and they are reported in net income.

The transaction is first recorded at the **spot exchange rate** on the transaction date. Grizzly Inc. buys inventory from a French supplier for €100,000, payable in 60 days, when the spot rate is \$1.10 per euro:

$$
\text{Payable in USD} = 100{,}000 \text{ EUR} \times \$1.10 = \$110{,}000
$$

```journal
Dr. Inventory[a]           110,000
    Cr. Accounts payable[l]    110,000
```

At the balance sheet date, **monetary items** denominated in a foreign currency, such as receivables and payables, are remeasured at the **current spot rate**. Nonmonetary items, such as the inventory, stay at the historical rate. If the spot rate at year-end is \$1.15 per euro, the payable is now \$115,000, and Grizzly has a \$5,000 loss:

```journal
Dr. Foreign currency transaction loss    5,000
    Cr. Accounts payable[l]                 5,000
```

When the transaction is settled, any further change since the last balance sheet date is recognized. If the spot rate at settlement is \$1.12 per euro, Grizzly pays \$112,000 and recognizes a \$3,000 gain (\$115,000 - \$112,000):

```journal
Dr. Accounts payable[l]                 115,000
    Cr. Cash[a]                             112,000
    Cr. Foreign currency transaction gain     3,000
```

Over the life of the transaction, Grizzly's net loss is \$2,000, the difference between the \$110,000 originally recorded and the \$112,000 paid.

:::tip[Which way did the dollar move?]

A **weakening** U.S. dollar (more dollars per euro) means a foreign-currency **payable** costs more, which is a loss, and a foreign-currency **receivable** is worth more, which is a gain. A strengthening dollar reverses both. Check the direction of the rate change and whether the company owes or is owed before choosing the sign.

:::

---

## Practice Problem

Panda Industries reports the following for the year ended December 31:

- Sales revenue: \$1,200,000
- Cost of goods sold: \$720,000
- Operating expenses: \$180,000
- Interest expense: \$25,000
- Gain on sale of investments: \$15,000
- Loss from operations of discontinued segment (pretax): \$60,000
- Gain on disposal of discontinued segment (pretax): \$40,000
- Tax rate: 25%

**Required:** Prepare a multiple-step income statement.

<details>
<summary>Solution</summary>

| Panda Industries                            |        Amount |
| ------------------------------------------- | ------------: |
| Sales revenue                               |   \$1,200,000 |
| Cost of goods sold                          |     (720,000) |
| **Gross profit**                            | **\$480,000** |
| Operating expenses                          |     (180,000) |
| **Operating income**                        | **\$300,000** |
| Interest expense                            |      (25,000) |
| Gain on sale of investments                 |        15,000 |
| **Income before income taxes**              | **\$290,000** |
| Income tax expense (25%)                    |      (72,500) |
| **Income from continuing operations**       | **\$217,500** |
| **Discontinued operations (net of tax):**   |               |
| &emsp;Loss from operations (\$60,000 × 75%) |      (45,000) |
| &emsp;Gain on disposal (\$40,000 × 75%)     |        30,000 |
| **Net income**                              | **\$202,500** |

The two common errors are reporting the discontinued items before tax and netting the gain on sale of investments against operating expenses. The gain is a nonoperating item, reported net, below operating income.

</details>
