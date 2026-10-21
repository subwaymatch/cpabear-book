# Interfund Activity and Transfers

A government with dozens of funds moves resources among them constantly. The General Fund lends cash to a utility, the motor pool bills the police department, and the council sends money to the debt service fund to pay bondholders. Each fund records its side of these **interfund activities** as if it were dealing with an outsider. When the funds are combined into the government-wide statements, though, many of these internal flows would double-count if left in place.

The BAR blueprint asks you to prepare the journal entries for interfund activity and the eliminations made in the government-wide statements. This chapter defines the four kinds of interfund activity under GASB 34, shows the fund entries for each, and then explains which ones are eliminated, which are reclassified, and which survive.

---

## Four Kinds of Interfund Activity

GASB 34 sorts interfund activity into two groups. **Reciprocal** activity is the internal equivalent of an exchange: loans and sales of services. **Nonreciprocal** activity is the internal equivalent of a nonexchange: transfers and reimbursements.

| Kind | What it is | Fund reporting |
|----------|-------------|---------------------|
| **Interfund loans** | Amounts provided with a requirement for repayment | Due from / due to other funds (advances if long-term); not revenue or expenditure |
| **Interfund services provided and used** | Sales of goods or services between funds at prices equivalent to external exchange values | Revenue in the seller; expenditure or expense in the buyer |
| **Interfund transfers** | Flows of assets without an equivalent flow in return and without a requirement for repayment | Transfers in and out: other financing sources and uses in governmental funds |
| **Interfund reimbursements** | Repayments to the fund that paid for an expenditure or expense that belongs to another fund | Not reported as interfund activity: the paying fund reduces its expenditure, and the responsible fund records it |

Two classifications trip candidates up. A loan that will not be repaid within a reasonable time is not really a loan: the part not expected to be repaid is reported as a **transfer**. And a **reimbursement** is about correcting which fund bears a cost that one fund paid on another's behalf, while a **transfer** is a deliberate shift of resources, usually authorized in the budget, such as the General Fund's annual subsidy to a transit system or its payment to the debt service fund.

---

## Fund-Level Journal Entries

### Interfund Loans

The General Fund lends \$200,000 to the Water Utility Fund, to be repaid next year.

General Fund:

```journal
Dr. Due from Water Utility Fund[a] 200,000
Cr. Cash[a] 200,000
```

Water Utility Fund:

```journal
Dr. Cash[a] 200,000
Cr. Due to General Fund[l] 200,000
```

When the loan is repaid, both entries reverse. A long-term interfund loan is called an **advance** (advance to or from other funds). In the lending governmental fund, the advance is a long-term receivable, so an equal amount of fund balance is nonspendable unless the repayments are already restricted, committed, or assigned.

### Interfund Services Provided and Used

The Water Utility Fund bills the General Fund \$50,000 for water used in city buildings, at the same rates other customers pay.

Water Utility Fund:

```journal
Dr. Due from General Fund[a] 50,000
Cr. Charges for Services 50,000
```

General Fund:

```journal
Dr. Expenditures 50,000
Cr. Due to Water Utility Fund[l] 50,000
```

### Interfund Transfers

The General Fund transfers \$500,000 to a capital projects fund to help pay for a new station.

General Fund:

```journal
Dr. Transfer Out to Capital Projects Fund 500,000
Cr. Cash[a] 500,000
```

Capital Projects Fund:

```journal
Dr. Cash[a] 500,000
Cr. Transfer In from General Fund 500,000
```

In governmental funds, transfers in are **other financing sources** and transfers out are **other financing uses**, reported after revenues and expenditures. In a proprietary fund, under **GASB 103**, transfers are **noncapital subsidies** (or, if restricted for capital assets, other nonoperating revenues), as explained in [Proprietary Funds Financial Statements](../governmental-financial-statements/proprietary-funds-financial-statements.md).

### Interfund Reimbursements

The General Fund paid \$30,000 for supplies that belong to a special revenue fund. The special revenue fund now repays it.

General Fund (the expenditure was never really its own, so it reverses it):

```journal
Dr. Cash[a] 30,000
Cr. Expenditures 30,000
```

Special Revenue Fund:

```journal
Dr. Expenditures 30,000
Cr. Cash[a] 30,000
```

No transfer accounts are used. After the reimbursement, the expenditure appears only in the fund that should bear it.

---

## Where It Appears in the Fund Statements

On the **governmental funds balance sheet**, "due from other funds" and "due to other funds" are current assets and liabilities, and "advances to (from) other funds" are long-term.

On the **governmental funds statement of revenues, expenditures, and changes in fund balances**, transfers appear in the other financing sources and uses section:

```
  Revenues                                    X,XXX
- Expenditures                               (X,XXX)
= Excess (deficiency) of revenues
    over expenditures                         X,XXX
  Other financing sources (uses):
    Transfers in                              X,XXX
    Transfers out                            (X,XXX)
  Unusual or infrequent items (if any)        X,XXX
= Net change in fund balances                 X,XXX
```

---

## Eliminations in the Government-Wide Statements

The government-wide statements have two columns for the primary government: **governmental activities** and **business-type activities**. The question for each interfund item is whether both sides land in the same column.

| Kind of activity | Both sides in the same column | Sides in different columns |
|------------------------|--------------------------|----------------------|
| Interfund loans (due to/from) | Eliminated | Reported as **internal balances**, which offset in the total column |
| Interfund transfers | Eliminated | Reported on the **transfers** line, which offsets in the total column |
| Interfund services provided and used | Not eliminated between functions (see internal service funds below) | Not eliminated; reported as revenue and expense |
| Interfund reimbursements | Already removed at the fund level | Already removed at the fund level |

**Interfund services between functions are not eliminated** because they reflect real costs of the buying function at real prices. When a water utility bills the police department at its standard rates, public safety really does incur a water expense, and the utility really does earn charges for services.

**Internal service funds** are the exception. Most of their customers are governmental departments, and their assets and liabilities are folded into governmental activities. If their billings to those departments stayed in, governmental activities would show the motor pool's costs twice: once as the motor pool's own salaries and depreciation, and again as the departments' charges. So the billings are eliminated, and any profit or loss the internal service fund made is allocated back to the functions it billed. The details are in [Deriving Government-Wide Financial Statements](deriving-government-wide-financial-statements.md).

:::tip[Exam Tip]

Ask two questions. First: is it an interfund service at external prices between functions? If yes, it stays (unless it is an internal service fund billing). Second: does it cross between governmental and business-type activities? If yes, loans become internal balances and transfers stay on the transfers line. If it is neither, eliminate it.

:::

---

## Comprehensive Example: Bear City

Bear City has these interfund transactions during the year. The water utility and the transit system are enterprise funds (business-type activities). The General Fund, debt service fund, and special revenue fund are governmental.

| # | Transaction | Amount |
|---|-------------|--------|
| 1 | General Fund lends cash to the Water Utility Fund, repayable next year | \$100,000 |
| 2 | Water Utility Fund bills the General Fund for water at standard rates | \$75,000 |
| 3 | General Fund transfers an operating subsidy to the Transit Fund | \$300,000 |
| 4 | General Fund transfers cash to the Debt Service Fund | \$400,000 |
| 5 | Special Revenue Fund reimburses the General Fund for supplies | \$20,000 |

### Step 1: Fund Entries

**Transaction 1, loan.** General Fund, then Water Utility Fund:

```journal
Dr. Due from Water Utility Fund[a] 100,000
Cr. Cash[a] 100,000
```

```journal
Dr. Cash[a] 100,000
Cr. Due to General Fund[l] 100,000
```

**Transaction 2, interfund service.** Water Utility Fund, then General Fund (unpaid at year-end):

```journal
Dr. Due from General Fund[a] 75,000
Cr. Charges for Services 75,000
```

```journal
Dr. Expenditures 75,000
Cr. Due to Water Utility Fund[l] 75,000
```

**Transaction 3, transfer.** General Fund, then Transit Fund:

```journal
Dr. Transfer Out to Transit Fund 300,000
Cr. Cash[a] 300,000
```

```journal
Dr. Cash[a] 300,000
Cr. Transfer In from General Fund 300,000
```

**Transaction 4, transfer.** General Fund, then Debt Service Fund:

```journal
Dr. Transfer Out to Debt Service Fund 400,000
Cr. Cash[a] 400,000
```

```journal
Dr. Cash[a] 400,000
Cr. Transfer In from General Fund 400,000
```

**Transaction 5, reimbursement.** General Fund, then Special Revenue Fund:

```journal
Dr. Cash[a] 20,000
Cr. Expenditures 20,000
```

```journal
Dr. Expenditures 20,000
Cr. Cash[a] 20,000
```

### Step 2: Government-Wide Treatment

| # | Columns involved | Treatment |
|---|------------------------|----------------------|
| 1 | Governmental and business-type | Reclassify to **internal balances** |
| 2 | Governmental and business-type | Not eliminated. Business-type activities report \$75,000 of charges for services; governmental activities report \$75,000 of expense in the functions that used the water. The unpaid \$75,000 is an internal balance. |
| 3 | Governmental and business-type | Reported on the **transfers** line: (\$300,000) governmental, \$300,000 business-type |
| 4 | Governmental only | **Eliminated** |
| 5 | Governmental only | Nothing to do; already netted in the funds |

The elimination of transaction 4 within governmental activities:

```journal
Dr. Transfer In from General Fund 400,000
Cr. Transfer Out to Debt Service Fund 400,000
```

### Step 3: The Result

The due to and due from amounts from transactions 1 and 2 become internal balances. Governmental activities have a net internal receivable of \$25,000 (\$100,000 lent less \$75,000 owed for water), and business-type activities have the matching \$25,000 payable.

| Line | Governmental activities | Business-type activities | Total |
|------|------------------------|-------------------------|----------------|
| Internal balances (statement of net position) | \$25,000 | (\$25,000) | \$0 |
| Transfers (statement of activities) | (\$300,000) | \$300,000 | \$0 |
| Transfer between General Fund and Debt Service Fund | Eliminated | | |

Both internal balances and transfers net to zero in the total column, so neither changes the net position of the primary government as a whole. They only move resources between the two columns.

---

## Summary

| Kind | Fund reporting | Government-wide |
|-------|----------|----------|
| Interfund loans | Due from / due to (advances if long-term) | Eliminated within a column; internal balances between columns |
| Interfund services provided and used | Revenue and expenditure or expense | Not eliminated (except internal service fund billings, which are eliminated and allocated back) |
| Interfund transfers | Other financing sources and uses (governmental funds); noncapital subsidies or other nonoperating items (proprietary funds) | Eliminated within a column; transfers line between columns |
| Interfund reimbursements | Reduce the paying fund's expenditure | Already removed |
