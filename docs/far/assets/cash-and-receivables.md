import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cash and Receivables

Cash and receivables are heavily tested because they combine **classification**, **measurement**, and **journal entry** issues. FAR questions often ask whether an item is cash, a cash equivalent, a receivable, a contra account, or a liability.

## Cash and Cash Equivalents

Cash includes amounts that are available for immediate use and free from material restriction. Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and close enough to maturity that interest-rate risk is insignificant.

:::tip[Exam rule]

A cash equivalent must have an **original maturity of three months or less from the date of purchase**.

:::

| Item | Typical treatment |
| --- | --- |
| Currency and coins | Cash |
| Demand deposits | Cash |
| Treasury bills purchased with 90 days or less to maturity | Cash equivalent |
| Money market funds | Usually cash equivalent |
| Post-dated checks | Receivable, not cash |
| NSF checks | Receivable, not cash |
| Restricted cash | Separate current or noncurrent line item |

### Classification examples

<Tabs>
  <TabItem value="bear" label="Bear Co." default>

Bear Co. buys a Treasury bill on December 1 that matures on February 1. Because the investment has only two months to maturity **when purchased**, it is a cash equivalent.

  </TabItem>
  <TabItem value="gies" label="Polar Co.">

Polar Co. buys a note on March 1 that matures on August 1. Because five months remain at purchase, it is **not** a cash equivalent even though it matures within the same year.

  </TabItem>
</Tabs>

## Restricted Cash and Overdrafts

Restricted cash is segregated for a stated purpose, such as debt service, collateral, or plant expansion. It is not included with unrestricted cash if the restriction is material.

Bank overdrafts are generally reported as **current liabilities**. If multiple accounts exist at the same bank, a negative balance may be offset against a positive balance at that same bank.

:::warning

Do not automatically net an overdraft against another bank account at a different bank.

:::

## Trade Receivables Overview

Receivables are claims to cash arising from sales, loans, or other transactions. The main categories are:

| Type | Example |
| --- | --- |
| Accounts receivable | Open-account customer balances |
| Notes receivable | Written promises to pay |
| Other receivables | Interest receivable, employee receivables, tax refunds |

Receivables are usually reported at **net realizable value**, which is the amount expected to be collected.

$$
\text{Net realizable value} = \text{Gross receivables} - \text{Allowance for expected credit losses}
$$

## Notes Receivable

### Non-interest-bearing notes

A non-interest-bearing promissory note is recorded at the **present value of future cash receipts**, discounted using the market rate of interest. The difference between face value and present value is a discount that is amortized to interest income over the life of the note.

**Example:** Sloth Security accepts a \$50,000 note due in one year. The market rate is 8%, but the note states no interest.

$$
\text{Present value} = \frac{\$50{,}000}{1.08} \approx \$46{,}296
$$

```journal
Dr. Notes receivable              50,000
    Cr. Sales revenue                 46,296
    Cr. Discount on notes receivable   3,704
```

### Discounting a note

When a note is discounted before maturity, use this sequence:

1. compute the **maturity value**
2. compute the **bank discount** using the maturity value and discount period
3. compute **proceeds** as maturity value less discount
4. compare proceeds with the carrying amount to determine gain, loss, or interest income

### With recourse vs. without recourse

| Transfer type | Meaning |
| --- | --- |
| With recourse | Transferor remains contingently liable if the debtor does not pay |
| Without recourse | Transferor has no further liability after transfer |

## Expected Credit Losses (CECL)

U.S. GAAP requires an allowance approach for trade receivables and many other financial assets measured at amortized cost. The goal is to recognize expected losses on a timely basis.

### Estimating the allowance

Common estimation methods include:

- percentage of ending accounts receivable
- aging of accounts receivable

<Tabs>
  <TabItem value="aging" label="Aging method" default>

Older balances receive higher expected loss percentages because they are less likely to be collected.

  </TabItem>
  <TabItem value="percent" label="Percent of receivables">

The entity applies a single expected loss rate to the ending receivable balance.

  </TabItem>
</Tabs>

### Core CECL entries

**1. Record the estimate**

```journal
Dr. Credit loss expense                 18,000
    Cr. Allowance for expected credit losses   18,000
```

**2. Write off a specific account**

```journal
Dr. Allowance for expected credit losses    4,500
    Cr. Accounts receivable                     4,500
```

:::info

The write-off entry does **not** create additional bad debt expense at the time of write-off. Expense was recognized when the allowance was established or adjusted.

:::

### Why direct write-off fails under GAAP

The direct write-off method records expense only when a specific account proves uncollectible. That method is not acceptable under U.S. GAAP for material receivables because it:

- fails to match credit loss expense with the related sales period
- overstates receivables before write-off

## Factoring Accounts Receivable

Factoring means selling receivables to a third party (the factor) for cash.

### Economic distinction

- **With recourse:** Bear Co. keeps some risk of loss.
- **Without recourse:** the factor assumes the credit risk.

**Example:** Bear Co. factors \$120,000 of receivables without recourse and receives cash of \$116,000.

```journal
Dr. Cash                           116,000
Dr. Loss on sale of receivables      4,000
    Cr. Accounts receivable            120,000
```

If the transfer is with recourse, additional liability recognition may be required for the recourse obligation.

## Quick Comparison: Accounts vs. Notes

| Feature | Accounts receivable | Notes receivable |
| --- | --- | --- |
| Formal written promise | Usually no | Yes |
| Interest element | Usually implicit or none | Often explicit or imputed |
| Maturity date | Short-term, open account | Specific maturity date |
| Valuation issue | CECL allowance | Present value plus CECL, if applicable |

## Integrated Example

Polar Co. records \$200,000 of credit sales during December. Based on an aging analysis, it estimates expected credit losses of \$6,000. In January, a \$1,400 customer balance is written off.

**Year-end adjustment**

```journal
Dr. Credit loss expense                  6,000
    Cr. Allowance for expected credit losses    6,000
```

**January write-off**

```journal
Dr. Allowance for expected credit losses    1,400
    Cr. Accounts receivable                     1,400
```

At December 31, Polar Co. reports accounts receivable net of the allowance, not at gross face amount.

## What to memorize for FAR

:::note[Checklist]

- Know the 90-day rule for cash equivalents.
- Know that non-interest-bearing notes are recorded at present value.
- Know the four discounting steps for notes.
- Know the difference between with recourse and without recourse.
- Know that CECL uses an allowance account and that write-offs reduce the allowance, not expense.

:::
