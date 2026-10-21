# Consolidated Financial Statements

When a parent controls a subsidiary, the two companies keep separate books, but investors in the parent care about the group as a whole. **Consolidated financial statements** present the parent and its subsidiaries as a **single economic entity**: their assets, liabilities, revenues, and expenses are combined, and every transaction between members of the group is removed. On FAR you will prepare consolidation adjustments and eliminations, report the noncontrolling interest, and find errors in consolidated amounts. This chapter explains when consolidation is required, walks through the common intercompany eliminations, and then shows how each consolidated statement is presented.

## When Consolidation Is Required

A parent must consolidate an entity in which it holds a **controlling financial interest**. Under the **voting interest model** in Accounting Standards Codification (ASC) 810, control is presumed when the parent owns **more than 50%** of the outstanding voting stock. Ownership levels below that call for other methods:

| Ownership Level | Accounting Method |
| --------------- | ----------------- |
| Less than 20% | Fair value (or the equity method if significant influence exists) |
| 20% to 50% | Equity method (significant influence presumed) |
| More than 50% | **Consolidation** (control presumed) |

A second model, the **variable interest entity (VIE)** model, can require consolidation without majority voting ownership. The **primary beneficiary** of a VIE consolidates it. VIEs are tested in BAR and covered in the BAR [Consolidated Financial Statements](../../bar/technical-accounting-combinations-and-reporting/consolidated-financial-statements.md) chapter.

The portion of a subsidiary's equity not owned by the parent is the **noncontrolling interest (NCI)**. Even when the parent owns less than 100%, the consolidated statements include **100%** of the subsidiary's assets, liabilities, revenues, and expenses. The NCI is then shown as a separate claim within equity.

---

## The Consolidation Worksheet

Consolidation happens in a worksheet, not in either company's books. Start with the parent's and the subsidiary's trial balances, add them line by line, and post **elimination entries** so that the totals show what the group would report if it were one company. Three kinds of eliminations come up:

1. The **investment elimination**, which replaces the parent's investment account with the subsidiary's equity and records acquisition-date fair value adjustments, goodwill, and the NCI. It is shown in the [Business Combinations](./business-combinations.md) chapter.
2. **Intercompany balances and transactions**, such as receivables and payables, loans, interest, and sales.
3. **Unrealized profits** on assets sold within the group that are still held at year-end.

Intercompany items are eliminated **at 100%**, regardless of the parent's ownership percentage. A company cannot owe money to itself or earn a profit selling to itself, so the full amount comes out.

---

## Intercompany Balances and Transactions

Bear Co. (parent) has lent Polar Co. (subsidiary) \$100,000 and charged \$3,000 of interest on the loan during the year. Bear also has a \$50,000 trade receivable from Polar. Each pair of matching accounts is eliminated:

```journal
Dr. Notes payable (Polar)     100,000
    Cr. Notes receivable (Bear)       100,000
```

```journal
Dr. Interest revenue (Bear)     3,000
    Cr. Interest expense (Polar)        3,000
```

```journal
Dr. Accounts payable (Polar)    50,000
    Cr. Accounts receivable (Bear)     50,000
```

None of these eliminations changes consolidated net income. Each removes equal amounts from both sides.

---

## Intercompany Inventory Transactions

When one affiliate sells inventory to another, consolidation eliminates the **intercompany sale**, the related **cost of goods sold (COGS)**, and any **unrealized profit** left in ending inventory. From the group's point of view, the profit is earned only when the goods are sold to an outside customer.

The direction of the sale matters for the NCI. In a **downstream** sale (parent to subsidiary), the profit was recorded by the parent, so the entire elimination reduces the parent's share of income. In an **upstream** sale (subsidiary to parent), the profit was recorded by the subsidiary, so the elimination is shared between the parent and the NCI in proportion to their ownership.

### Downstream Sale (Parent to Subsidiary)

Bear Co. sells inventory costing \$60,000 to Polar Co. for \$80,000. At year-end, Polar Co. still holds 25% of this inventory.

**Step 1: Eliminate the intercompany sale and COGS.**

```journal
Dr. Sales (Bear)               80,000
    Cr. Cost of goods sold             80,000
```

**Step 2: Eliminate the unrealized profit in ending inventory.** Unrealized profit = (\$80,000 - \$60,000) × 25% = \$5,000.

```journal
Dr. Cost of goods sold          5,000
    Cr. Inventory (Polar)               5,000
```

### Upstream Sale (Subsidiary to Parent)

Polar Co. (an 80%-owned subsidiary) sells inventory costing \$40,000 to Bear Co. for \$55,000. Bear Co. still holds 40% of it at year-end.

**Step 1: Eliminate the intercompany sale and COGS.**

```journal
Dr. Sales (Polar)               55,000
    Cr. Cost of goods sold             55,000
```

**Step 2: Eliminate the unrealized profit.** Unrealized profit = (\$55,000 - \$40,000) × 40% = \$6,000.

```journal
Dr. Cost of goods sold          6,000
    Cr. Inventory (Bear)                6,000
```

Because the sale was upstream, the \$6,000 reduction in consolidated income is shared: \$4,800 (80%) reduces the parent's share and \$1,200 (20%) reduces the NCI's share.

---

## Intercompany Land and Depreciable Assets

When one affiliate sells land to another, the **unrealized gain or loss** is eliminated until the land is sold to an outside party. Bear Co. sells land with a book value of \$100,000 to Polar Co. for \$130,000:

```journal
Dr. Gain on sale of land       30,000
    Cr. Land                           30,000
```

The land stays on the consolidated balance sheet at its **original cost** of \$100,000 until it is sold outside the group.

A depreciable asset needs one more step, because the buyer depreciates the higher price it paid. Consolidation must (1) eliminate the unrealized gain and restore the asset and accumulated depreciation to their original amounts, and (2) eliminate the excess depreciation each year.

Panda Industries sells equipment (cost \$80,000, accumulated depreciation \$30,000) to its subsidiary Cub Entertainment for \$70,000. The remaining life is 5 years.

Gain on intercompany sale = \$70,000 - (\$80,000 - \$30,000) = \$20,000

**Step 1: Eliminate the gain and restore the original cost basis.** Equipment goes from the buyer's \$70,000 back to the original \$80,000 cost, and the original \$30,000 of accumulated depreciation is reinstated:

```journal
Dr. Gain on sale of equipment  20,000
Dr. Equipment                  10,000
    Cr. Accumulated depreciation       30,000
```

**Step 2: Eliminate the excess depreciation.** Cub records depreciation of \$70,000 ÷ 5 = \$14,000 per year. The consolidated amount is \$50,000 ÷ 5 = \$10,000. The \$4,000 difference (\$20,000 ÷ 5) is eliminated each year:

```journal
Dr. Accumulated depreciation    4,000
    Cr. Depreciation expense            4,000
```

At the end of Year 1, Cub carries the equipment at \$56,000 (\$70,000 - \$14,000). The consolidated carrying amount is \$40,000 (\$80,000 cost - \$40,000 accumulated depreciation). The \$16,000 difference is the part of the gain not yet realized (\$20,000 - \$4,000). Each year, another \$4,000 of the gain is realized through the lower consolidated depreciation.

---

## Intercompany Bonds

When one affiliate buys the bonds of another from outside investors, the debt is effectively **retired** from the group's point of view: the group now owes the money to itself. The difference between the bonds' carrying amount and the price paid is a **constructive gain or loss** on retirement, reported in consolidated income even though neither company recorded it.

Grizzly Inc. (parent) has \$200,000 of bonds outstanding with a carrying amount of \$196,000. Its subsidiary, Kodiak Partners, buys these bonds on the open market for \$193,000. The constructive gain is \$196,000 - \$193,000 = \$3,000:

```journal
Dr. Bonds payable (Grizzly)            200,000
    Cr. Discount on bonds (Grizzly)              4,000
    Cr. Investment in bonds (Kodiak)           193,000
    Cr. Gain on constructive retirement          3,000
```

---

## Noncontrolling Interest in Net Income

Consolidated net income belongs to two groups of owners, so the income statement divides it. The **NCI's share** is the NCI percentage times the subsidiary's net income, after adjusting that income for amortization or depreciation of the acquisition-date fair value adjustments and for unrealized profits on **upstream** sales.

Continue the Bear Co. and Polar Co. acquisition from the [Business Combinations](./business-combinations.md) chapter: Bear owns 80%, and Polar's equipment was stepped up by \$100,000 at acquisition. Assume the equipment has a remaining life of 10 years, Polar reports net income of \$100,000 for the year, and the \$6,000 of upstream unrealized profit computed above is still in Bear's inventory:

| Item | Amount |
|---|---|
| Polar's reported net income | \$100,000 |
| Less: depreciation of the equipment step-up (\$100,000 ÷ 10) | (10,000) |
| Less: unrealized profit on upstream sale | (6,000) |
| Polar's adjusted net income | \$84,000 |
| **NCI share (20%)** | **\$16,800** |

If consolidated net income is \$500,000, the consolidated income statement ends:

| Line Item | Amount |
|---|---|
| **Consolidated net income** | **\$500,000** |
| Less: Net income attributable to the noncontrolling interest | (16,800) |
| **Net income attributable to Bear Co.** | **\$483,200** |

The NCI balance in equity grows by the NCI's share of income and shrinks by dividends paid to the noncontrolling shareholders. Starting from \$160,000 at acquisition, it would be \$176,800 at year-end if Polar paid no dividends.

---

## Presenting the Consolidated Statements

**Balance sheet.** Combine the parent's and subsidiary's assets and liabilities, then eliminate the subsidiary's stockholders' equity and the parent's investment account, add the remaining acquisition-date fair value adjustments, and report goodwill as an asset. The NCI is presented **within equity**, separately from the parent's equity. It is not a liability.

**Income statement.** Include 100% of the parent's revenues and expenses for the full year and 100% of the subsidiary's revenues and expenses for the **post-acquisition period only**. Eliminate intercompany revenues and expenses, then divide consolidated net income between the NCI and the parent, as shown above.

**Comprehensive income.** The other comprehensive income (OCI) items of the parent and subsidiary are combined, and comprehensive income is divided between the parent and the NCI in the same way.

**Statement of changes in equity.** Show the parent's equity accounts (common stock, additional paid-in capital, retained earnings, and accumulated other comprehensive income) and, in a separate column, the NCI balance and its changes.

**Statement of cash flows.** Cash paid for an acquisition is an **investing** outflow, reported net of the subsidiary's cash acquired. Only the subsidiary's post-acquisition cash flows are included, and intercompany cash flows are eliminated. If Bear Co. pays \$640,000 cash for 80% of Polar Co. and Polar holds \$40,000 of cash at acquisition, Bear reports an investing outflow of \$600,000 (\$640,000 - \$40,000).

---

## Pushdown Accounting

Normally the acquirer's new basis in the subsidiary's assets exists only in the consolidation worksheet. **Pushdown accounting** is an optional election that lets the acquired company reflect that new basis in its **own standalone financial statements**. The subsidiary may elect it each time an acquirer obtains control, in the period of the change in control or later (a later election is a change in accounting principle). Once made, the election is irrevocable.

Under pushdown accounting, the subsidiary restates its assets and liabilities to the amounts the acquirer recognized (generally fair value) and records the goodwill on its own books, with the offset to **additional paid-in capital**. A bargain purchase gain is also recorded in APIC, not in earnings. Pushdown accounting does not change the consolidated statements at all; it affects only the subsidiary's separate statements.
