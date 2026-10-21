# Cash and Receivables

Cash and receivables are the most liquid assets on the balance sheet, and they are where many FAR simulations begin. The questions combine classification (is this item cash, a cash equivalent, a receivable, or something else?), measurement (how much do we expect to collect?), and journal entries. This chapter starts with cash and the bank reconciliation, then turns to trade receivables: the allowance for credit losses, rollforwards, notes receivable, and transfers of receivables to banks and factors.

## Cash and Cash Equivalents

**Cash** includes currency, coins, and demand deposits that are available for immediate use and free from material restriction. **Cash equivalents** are short-term, highly liquid investments that are readily convertible to known amounts of cash and so close to maturity that the risk of changes in value from interest rates is insignificant. In practice, that means an **original maturity of three months or less**, measured from the date the entity buys the investment.

The "original maturity" test trips up many candidates. Bear Co. buys a Treasury bill on December 1 that matures on February 1. Because only two months remained when Bear bought it, the bill is a cash equivalent. Polar Co. buys a note on March 1 that matures on August 1. Five months remain at purchase, so the note is **not** a cash equivalent, even when only one month remains at a later balance sheet date.

| Item | Typical treatment |
| --- | --- |
| Currency, coins, and demand deposits | Cash |
| Treasury bills and commercial paper bought within three months of maturity | Cash equivalent |
| Money market funds | Usually a cash equivalent |
| Certificates of deposit with an original maturity over three months | Short-term investment, not cash |
| Post-dated checks and not-sufficient-funds (NSF) checks from customers | Receivable, not cash |
| Postage stamps | Prepaid expense |
| Compensating balances legally restricted under a loan agreement | Restricted cash |

### Restricted Cash and Overdrafts

**Restricted cash** is set aside for a stated purpose, such as debt service, collateral, or plant expansion. If the restriction is material, report it separately from unrestricted cash, as a current or noncurrent asset depending on when the cash will be used. In the statement of cash flows, however, restricted cash is included with cash and cash equivalents in the beginning and ending balances.

**Bank overdrafts** are generally reported as **current liabilities**. If an entity has more than one account at the same bank, a negative balance may be offset against a positive balance at that bank. An overdraft may not be netted against an account at a different bank.

## Bank Reconciliations

The cash balance in the general ledger rarely agrees with the bank statement on the same date, because each side knows about items the other has not yet recorded. A **bank reconciliation** brings both balances to the same **true (adjusted) cash balance**, the amount reported on the balance sheet.

The trick is to sort each reconciling item by who does not yet know about it:

| Adjust the balance per bank for | Adjust the balance per books for |
| --- | --- |
| Deposits in transit (add) | Collections made by the bank, such as a note receivable, and interest earned (add) |
| Outstanding checks (subtract) | Bank service charges (subtract) |
| Bank errors (add or subtract) | NSF checks returned by the bank (subtract) |
| | Errors in the company's books (add or subtract) |

Only the book-side items need journal entries. The bank-side items will clear on their own when the bank records them.

**Example.** At December 31, Bear Co.'s bank statement shows \$48,000 and its general ledger shows \$45,860. Bear identifies the following:

- deposits in transit of \$6,000 and outstanding checks of \$7,500
- a bank service charge of \$50
- a customer's \$1,200 check returned NSF
- a \$1,800 note receivable collected by the bank for Bear
- a \$450 check to a supplier that Bear recorded as \$540

| Balance per bank | | Balance per books | |
| --- | --- | --- | --- |
| Balance, Dec 31 | \$48,000 | Balance, Dec 31 | \$45,860 |
| Add: deposits in transit | 6,000 | Add: note collected by bank | 1,800 |
| Less: outstanding checks | (7,500) | Add: error on check (\$540 - \$450) | 90 |
| | | Less: NSF check | (1,200) |
| | | Less: service charge | (50) |
| **Adjusted cash balance** | **\$46,500** | **Adjusted cash balance** | **\$46,500** |

Bear records the book-side items in one entry. The NSF check goes back into accounts receivable, because the customer still owes the money, and the check error is corrected against accounts payable:

```journal
Dec 31
Dr. Cash[a] 640
Dr. Accounts receivable[a] 1,200
Dr. Bank service charge expense 50
    Cr. Notes receivable[a] 1,800
    Cr. Accounts payable[l] 90
```

If the two adjusted balances do not agree, something is unreconciled. Investigate before booking a plug: the difference is usually an unrecorded book-side item or an error on one side, and only a book-side item calls for an adjustment to the general ledger.

## Trade Receivables

Receivables are claims to cash arising from sales, loans, or other transactions. **Accounts receivable** are open-account customer balances. **Notes receivable** are written promises to pay, usually with interest and a specific maturity date. Other receivables include interest receivable, advances to employees, and tax refunds.

Trade receivables are reported at their amortized cost (for most trade receivables, the amount billed) less an **allowance for credit losses**, which leaves the net amount the entity expects to collect:

$$
\text{Net receivables} = \text{Gross receivables} - \text{Allowance for credit losses}
$$

Expected sales returns are also estimated at the time of sale. Under ASC 606 that estimate reduces revenue and is recorded as a refund liability (with an asset for the right to recover the goods), not as part of the credit loss allowance. See the revenue recognition chapter.

## The Allowance for Credit Losses (CECL)

U.S. generally accepted accounting principles (GAAP) use the **current expected credit loss (CECL)** model in ASC 326 for trade receivables and most other financial assets measured at amortized cost. Under CECL, an entity records an allowance for the **lifetime expected credit losses** on its receivables, starting the day they are recognized. The estimate draws on historical loss experience, adjusted for current conditions and reasonable and supportable forecasts. The goal is to show the expected loss in the period of the sale, before any specific account goes bad.

The **direct write-off method**, which records expense only when a specific account proves uncollectible, is not acceptable under GAAP when credit losses are material. It recognizes the expense in the wrong period and overstates receivables until the write-off.

### Estimating the Allowance

Most trade receivable questions use one of two approaches. The **percentage of receivables** approach applies a single expected loss rate to the ending balance. The **aging** approach groups balances by how long they have been outstanding and applies a higher loss rate to older groups, because they are less likely to be collected. Either way, the result is the **required ending balance** of the allowance. Credit loss expense is whatever adjustment brings the allowance to that balance.

:::note[Practical expedient for current receivables (ASU 2025-05)]

For current accounts receivable and current contract assets that arise under ASC 606, any entity may elect to assume that conditions at the balance sheet date do not change over the asset's remaining life. That removes the need for a forecast, though the entity must still adjust historical loss rates for current conditions, such as a customer known to be in financial distress. An entity other than a public business entity that elects the expedient may also elect to consider cash collected after the balance sheet date but before the statements are available to be issued: balances collected by then need no allowance. This guidance is eligible for testing starting April 1, 2026.

:::

### Recording the Allowance, Write-Offs, and Recoveries

Polar Co. begins the year with a \$5,000 credit balance in the allowance. During the year it writes off \$4,500 of specific accounts and recovers \$500 of an account written off earlier. At December 31, gross accounts receivable are \$200,000, and its aging schedule shows:

| Age | Balance | Expected loss rate | Required allowance |
| --- | --- | --- | --- |
| Current | \$150,000 | 1% | \$1,500 |
| 1-30 days past due | 30,000 | 5% | 1,500 |
| 31-90 days past due | 15,000 | 10% | 1,500 |
| Over 90 days past due | 5,000 | 30% | 1,500 |
| **Total** | **\$200,000** | | **\$6,000** |

A write-off removes a specific account from both receivables and the allowance. It does **not** create credit loss expense, because the expense was recognized when the allowance was established:

```journal
Dr. Allowance for credit losses[ca] 4,500
    Cr. Accounts receivable[a] 4,500
```

A recovery first reinstates the account:

```journal
Dr. Accounts receivable[a] 500
    Cr. Allowance for credit losses[ca] 500
```

and then records the collection:

```journal
Dr. Cash[a] 500
    Cr. Accounts receivable[a] 500
```

Before the year-end adjustment, the allowance has a credit balance of \$1,000 (\$5,000 - \$4,500 + \$500). The aging requires \$6,000, so credit loss expense is \$5,000:

```journal
Dec 31
Dr. Credit loss expense 5,000
    Cr. Allowance for credit losses[ca] 5,000
```

Polar reports accounts receivable of \$200,000 less an allowance of \$6,000, or \$194,000 net. Notice that net receivables did not change when the account was written off: gross receivables and the allowance fell by the same amount.

### Rollforwards and Reconciliations

A **rollforward** explains how a balance moved from the beginning of the period to the end, and it is a favorite simulation format because it can be used to solve for any one missing amount. The two rollforwards for receivables are:

| Accounts receivable | | Allowance for credit losses | |
| --- | --- | --- | --- |
| Beginning balance | \$180,000 | Beginning balance | \$5,000 |
| Add: credit sales | 900,000 | Add: credit loss expense | 5,000 |
| Less: write-offs | (4,500) | Less: write-offs | (4,500) |
| Add: recoveries reinstated | 500 | Add: recoveries | 500 |
| Less: cash collected | (876,000) | | |
| **Ending balance** | **\$200,000** | **Ending balance** | **\$6,000** |

If the cash collected were unknown, you could solve for it as the amount that makes the column foot to \$200,000.

The same logic applies to the **accounts receivable subledger**, which lists each customer's balance. The subledger total should equal the general ledger control account. When it does not, look for postings recorded in one but not the other (for example, a credit memo entered in the subledger but not posted to the ledger), cutoff errors at period-end, and transposed amounts. Adjust the general ledger only for errors in the ledger itself.

## Notes Receivable

An **interest-bearing note** is recorded at its face amount, and interest income is accrued over its life. A **non-interest-bearing note**, or one with an unreasonably low stated rate, is recorded at the **present value** of its future cash receipts, discounted at the market rate of interest. The difference between face value and present value is a **discount**, amortized to interest income over the life of the note.

Sloth Security sells merchandise and accepts a \$50,000 note due in one year. The note states no interest, and the market rate is 8%:

$$
\text{Present value} = \frac{\$50{,}000}{1.08} \approx \$46{,}296
$$

```journal
Dr. Notes receivable[a] 50,000
    Cr. Sales revenue 46,296
    Cr. Discount on notes receivable[ca] 3,704
```

The \$3,704 discount is recognized as interest income over the year until the note matures. Recording the full \$50,000 as revenue would overstate sales and understate interest income.

### Discounting a Note at a Bank

A company that needs cash before a note matures can **discount** it, transferring it to a bank in exchange for the maturity value less the bank's charge. Work it in four steps:

1. Compute the **maturity value**: face value plus interest to maturity.
2. Compute the **bank discount**: maturity value × bank discount rate × time remaining to maturity.
3. Compute the **proceeds**: maturity value less the bank discount.
4. Compare the proceeds with the note's carrying amount (face value plus interest accrued to date) to find the gain or loss.

Grizzly Inc. holds a \$20,000, 9%, six-month note dated March 1. On May 1, after accruing two months of interest (\$300), it discounts the note at a bank at 12%, and the transfer qualifies as a sale. The maturity value is \$20,900 (\$20,000 + \$20,000 × 9% × 6/12). The bank discount for the four months remaining is \$836 (\$20,900 × 12% × 4/12), so the proceeds are \$20,064. The carrying amount is \$20,300, so Grizzly records a \$236 loss:

```journal
May 1
Dr. Cash[a] 20,064
Dr. Loss on sale of note receivable 236
    Cr. Notes receivable[a] 20,000
    Cr. Interest receivable[a] 300
```

## Transfers of Receivables

Companies also raise cash from receivables before customers pay. The accounting question is always the same: did the company **sell** the receivables, or did it **borrow** using them as collateral?

Under ASC 860, a transfer is a **sale** only if the transferor gives up control. All three conditions must be met: the receivables are legally isolated from the transferor (beyond the reach of its creditors, even in bankruptcy), the transferee has the right to pledge or exchange them, and the transferor does not keep effective control (for example, through an agreement to repurchase them). If any condition fails, the transfer is a **secured borrowing**: the receivables stay on the balance sheet, and the cash received is recorded as a liability.

Two common borrowing arrangements are the simplest. In a **pledge**, the company uses its receivables in general as collateral for a loan. It records only the loan and discloses the pledge. In an **assignment**, specific receivables are assigned to a lender as collateral. The company records the loan, reclassifies the assigned receivables to a separate account (Accounts receivable assigned), and discloses the arrangement. Panda Industries assigns \$50,000 of receivables to its bank as collateral for a \$40,000 loan, and the bank charges a 1% finance fee:

```journal
Dr. Cash[a] 39,600
Dr. Interest expense 400
    Cr. Notes payable[l] 40,000
```

In **factoring**, the company sells receivables to a finance company (the factor). In a factoring **without recourse**, the factor bears the credit risk. In a factoring **with recourse**, the seller must reimburse the factor for accounts that prove uncollectible. A transfer with recourse can still be a sale if the control conditions are met. The seller then records the recourse obligation as a liability at fair value, which increases the loss on the sale.

Bear Co. factors \$120,000 of receivables without recourse. The factor charges a 2% fee (\$2,400) and holds back 5% (\$6,000) to cover returns and allowances, which it will pay Bear once the accounts are settled:

```journal
Dr. Cash[a] 111,600
Dr. Due from factor[a] 6,000
Dr. Loss on sale of receivables 2,400
    Cr. Accounts receivable[a] 120,000
```

If the same transfer were with recourse and the recourse obligation had a fair value of \$1,500, Bear would also credit a recourse liability for \$1,500, and the loss would be \$3,900.

:::tip[Sale or borrowing?]

When an exam question describes a receivables transfer, decide first whether the seller gave up control. A sale removes the receivables and produces a gain or loss. A secured borrowing leaves the receivables on the books and adds a liability, with the bank's charges recorded as interest expense.

:::
