# Foreign Currency Issues

When a U.S. company sells to a customer in London and agrees to be paid in pounds, the dollar value of its receivable changes every time the exchange rate moves. Accounting Standards Codification (ASC) 830, _Foreign Currency Matters_, says how to record those changes. FAR tests **foreign currency transactions**: recording them at the spot rate, adjusting receivables and payables at the balance sheet date, and computing the transaction gain or loss reported in net income. Two related topics, converting a foreign subsidiary's financial statements into dollars and hedging with forward contracts, are tested in BAR. This chapter covers transactions in full and closes with a short preview of the BAR material.

## What Counts as a Foreign Currency Transaction

Every entity has a **functional currency**, the currency of the primary economic environment in which it operates. For a U.S. company, that is usually the U.S. dollar (USD). A **foreign currency transaction** is a transaction **denominated** (to be settled) in a currency other than the functional currency, such as a sale invoiced in pounds or a purchase payable in yen.

The accounting follows three dates:

1. **Transaction date:** record the transaction at the **spot rate**, the exchange rate on that date.
2. **Balance sheet date:** adjust **monetary items** (cash, receivables, and payables denominated in the foreign currency) to the current spot rate. The change is a **transaction gain or loss** in net income.
3. **Settlement date:** record the cash at the spot rate on that date. Any further change since the last balance sheet date is another transaction gain or loss.

Nonmonetary items, such as inventory or equipment bought with foreign currency, stay at the historical dollar amount. Only the receivable or payable is exposed to rate changes.

---

## A Foreign Currency Receivable

### Transaction Date

On November 1, Bear Co. sells merchandise to a customer in the United Kingdom for £100,000 when the spot rate is \$1.30/£:

$$
\text{Receivable} = £100{,}000 \times \$1.30 = \$130{,}000
$$

```journal
Nov 1
Dr. Accounts receivable       130,000
    Cr. Sales revenue                 130,000
```

The sale is recorded once, at \$130,000. Later rate changes affect the receivable, never the revenue.

### Balance Sheet Date

On December 31, the spot rate is \$1.35/£. The pound has **strengthened**, so the receivable is worth more dollars:

$$
\text{Foreign currency gain} = £100{,}000 \times (\$1.35 - \$1.30) = \$5{,}000
$$

```journal
Dec 31
Dr. Accounts receivable         5,000
    Cr. Foreign currency gain           5,000
```

### Settlement Date

On February 1, Bear Co. collects the £100,000 when the spot rate is \$1.28/£. The receivable was carried at \$135,000, and the cash received is only \$128,000:

$$
\text{Foreign currency loss} = £100{,}000 \times (\$1.35 - \$1.28) = \$7{,}000
$$

```journal
Feb 1
Dr. Cash                      128,000
Dr. Foreign currency loss       7,000
    Cr. Accounts receivable           135,000
```

Over the life of the transaction, Bear Co. recognized a \$5,000 gain in the first year and a \$7,000 loss in the second, a net loss of \$2,000. That equals the difference between the \$130,000 recorded at the sale and the \$128,000 actually collected.

---

## A Foreign Currency Payable

A payable works the same way, but the direction of the gain or loss reverses. On December 1, Bear Co. buys inventory from a supplier in Japan for ¥10,000,000, payable in 60 days, when the spot rate is \$0.0070/¥:

```journal
Dec 1
Dr. Inventory[a] 70,000
    Cr. Accounts payable[l] 70,000
```

On December 31, the spot rate is \$0.0072/¥. The yen has strengthened, so Bear Co. now needs more dollars to pay the same yen debt. The payable rises to \$72,000, a \$2,000 loss:

```journal
Dec 31
Dr. Foreign currency loss 2,000
    Cr. Accounts payable[l] 2,000
```

On January 30, Bear Co. pays when the spot rate is \$0.0069/¥. The payment costs \$69,000, so Bear Co. recognizes a \$3,000 gain:

```journal
Jan 30
Dr. Accounts payable[l] 72,000
    Cr. Cash[a] 69,000
    Cr. Foreign currency gain 3,000
```

The inventory stays at its original \$70,000 cost throughout.

---

## Summary of Exchange Rate Effects

| Situation | Foreign Currency Strengthens | Foreign Currency Weakens |
| --------- | ---------------------------- | ------------------------ |
| **Receivable in foreign currency** | Gain | Loss |
| **Payable in foreign currency** | Loss | Gain |

The logic is simple once you ask how many dollars the company will receive or pay. A stronger foreign currency means more dollars: good news for the holder of a receivable, bad news for the debtor on a payable.

:::tip[Exam Tip]

Foreign currency **transaction** gains and losses are reported in **net income**, typically in other income and expense. They are not part of other comprehensive income. Exam questions often ask for the gain or loss in one particular year, so measure it from the rate at the **later** of the transaction date and the last balance sheet date.

:::

---

## Looking Ahead to BAR: Hedging and Translation

**Forward contracts.** A company can lock in a future exchange rate with a **forward contract** to buy or sell foreign currency. The contract is a derivative, recorded on the balance sheet at fair value, and its gains and losses largely offset the transaction gains and losses on the hedged receivable or payable. Hedge accounting is covered in the BAR [Derivatives and Hedge Accounting](../../bar/technical-accounting-combinations-and-reporting/derivatives-and-hedge-accounting.md) chapter.

**Foreign subsidiaries.** A U.S. parent with a foreign subsidiary must restate the subsidiary's financial statements in dollars before consolidating them. The method depends on the subsidiary's functional currency:

| Subsidiary's Functional Currency | Method | Where the Adjustment Goes |
|---|---|---|
| Its local (foreign) currency | **Translation** (current rate method) | Other comprehensive income, as the cumulative translation adjustment (CTA) |
| The U.S. dollar | **Remeasurement** (temporal method) | Net income |

A subsidiary in a highly inflationary economy (cumulative inflation of about 100% or more over three years) is remeasured as if its functional currency were the dollar. Both methods are worked through in the BAR [Consolidated Financial Statements](../../bar/technical-accounting-combinations-and-reporting/consolidated-financial-statements.md) chapter.
