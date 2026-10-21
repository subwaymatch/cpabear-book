# Expenditures and Expenses

Governments report two different measures of what they spend. Governmental funds report **expenditures**: decreases in current financial resources, recognized on the modified accrual basis. The government-wide statements and proprietary funds report **expenses**: the cost of economic resources used up, recognized on the accrual basis. Buying a \$500,000 fire truck is a \$500,000 expenditure this year but only \$50,000 of expense per year over its life.

The BAR blueprint asks you to calculate both, with journal entries: expenditures paid from available fund resources under modified accrual, and expenses under accrual. This chapter explains the recognition rule for each, works through the items that differ most (supplies, debt service, and employee-related liabilities), and ends with a conversion from fund expenditures to government-wide expenses.

---

## The Two Measures Side by Side

| | Expenditures | Expenses |
|---|---|---|
| **Used in** | Governmental funds | Government-wide statements and proprietary funds |
| **Measurement focus and basis** | Current financial resources, modified accrual | Economic resources, accrual |
| **General recognition** | When the fund liability is incurred, if it will be paid from current resources | When the resources are consumed |
| **Capital assets** | Full cost when acquired (capital outlay) | Depreciation or amortization over the useful life |
| **Long-term debt principal** | Expenditure when due | Not an expense; it reduces the liability |
| **Long-term obligations to employees** | Only the portion that has matured | The full cost as it is incurred |

If a question says "General Fund" or "governmental fund," think expenditures. If it says "government-wide," "statement of activities," or "enterprise fund," think expenses.

---

## Expenditures Under Modified Accrual

The general rule is that an expenditure is recognized when the related **fund liability is incurred**: when the goods are received or the services are performed. Most expenditures (salaries, utilities, supplies under the purchase method) follow this rule, just as they would under accrual.

The exceptions are liabilities that are **not normally paid with expendable available financial resources**. For these, the fund recognizes an expenditure only when the amount **matures**, that is, when it becomes due and payable:

- Principal and interest on general long-term debt
- Compensated absences
- Pensions and OPEB
- Claims and judgments, and landfill closure and postclosure care

The unmatured portion of each of these is a general long-term liability, reported only in the government-wide statements.

Governmental fund expenditures are classified by **character** and by **function**. Character tells the reader what kind of spending it was: **current** (salaries, supplies, services), **intergovernmental** (payments to other governments), **capital outlay** (acquiring capital assets), and **debt service** (principal and interest). Function tells the reader what it was for: general government, public safety, public works, health and welfare, culture and recreation, and so on.

### Supplies and Prepaid Items: Purchase vs. Consumption Method

A government may account for supplies inventory and prepaid items under either of two methods.

| Method | At purchase | When used | Year-end balance sheet |
|---|---|---|---|
| **Purchase method** | Debit Expenditures | No entry | Significant inventory is reported as an asset, offset by nonspendable fund balance |
| **Consumption method** | Debit Inventory | Debit Expenditures, credit Inventory | Inventory is an asset; an equal amount of fund balance is nonspendable |

Bear City buys \$60,000 of supplies during the year and has \$8,000 on hand at year-end.

Under the **purchase method**, the whole \$60,000 is an expenditure when bought:

```journal
Dr. Expenditures 60,000
Cr. Cash[a] 60,000
```

At year-end, the inventory on hand is recorded, with an equal amount of nonspendable fund balance:

```journal
Dr. Inventory of Supplies[a] 8,000
Cr. Fund Balance (Nonspendable)[e] 8,000
```

Under the **consumption method**, the purchase is recorded as inventory:

```journal
Dr. Inventory of Supplies[a] 60,000
Cr. Cash[a] 60,000
```

At year-end, the \$52,000 used is recorded as an expenditure:

```journal
Dr. Expenditures 52,000
Cr. Inventory of Supplies[a] 52,000
```

The balance sheet looks the same under both methods. The difference is **when** the expenditure appears: \$60,000 this year under the purchase method, \$52,000 under the consumption method. The government-wide statements always use consumption, so the expense is \$52,000.

### Debt Service

Principal and interest on general long-term debt are expenditures, usually of the **debt service fund**, when they are **due**. Interest is not accrued between payment dates.

Bear City's debt service fund pays a \$500,000 principal installment and \$75,000 of interest on their due date:

```journal
Dr. Expenditures (Debt Service, Principal) 500,000
Dr. Expenditures (Debt Service, Interest) 75,000
Cr. Cash[a] 575,000
```

There is one optional exception. If the government has already provided resources to the debt service fund for principal and interest that fall due **early in the next year** (no more than one month after year-end), it may accrue the expenditure and the liability at year-end.

### Compensated Absences

Under **GASB 101** (testable since January 1, 2024), a governmental fund recognizes compensated absences expenditures for the amount that would normally be **liquidated with expendable available financial resources**. In practice, that is leave that has matured: for example, accumulated vacation owed to employees who resigned or retired before year-end but have not yet been paid, plus leave that has been used but not yet paid. The rest of the compensated absences liability is reported only in the government-wide statements. The recognition rules for that full liability are covered in [General and Proprietary Long-Term Liabilities](general-and-proprietary-long-term-liabilities.md).

### Pensions, OPEB, and Claims

The same pattern applies to other long-term obligations. A governmental fund's pension or OPEB expenditure equals the amounts paid plus the change in amounts that have matured and remain unpaid (for example, contributions due to the plan at year-end). Claims and judgments are expenditures to the extent the settlement is due and payable at year-end.

---

## Expenses Under Accrual

Under the accrual basis, an expense is recognized when the resources are used up, whenever the cash is paid. The contrast with modified accrual is sharpest for these items:

| Transaction | Expenditure (modified accrual) | Expense (accrual) |
|---|---|---|
| Buy a \$500,000 asset with a 10-year life | \$500,000 in the year of purchase | \$50,000 per year of depreciation |
| Pay \$200,000 of bond principal | \$200,000 when due | None; the liability decreases |
| Buy \$80,000 of supplies, use \$65,000 | \$80,000 (purchase method) or \$65,000 (consumption method) | \$65,000 |
| Employees earn \$120,000 of leave, of which \$90,000 matures and is paid | \$90,000 | \$120,000 |
| Interest accrues for 3 months but is not due until next year | None | The accrued amount |

Government-wide entries look like business entries. Depreciation on equipment:

```journal
Dr. Depreciation Expense 50,000
Cr. Accumulated Depreciation[ca] 50,000
```

The full cost of leave earned during the year:

```journal
Dr. Compensated Absences Expense 120,000
Cr. Compensated Absences Payable[l] 120,000
```

Proprietary funds record the same kinds of entries in the fund itself. For example, an enterprise fund that owes its employees \$150,000 of wages at year-end accrues them as an operating expense:

```journal
Dr. Operating Expenses (Wages) 150,000
Cr. Accrued Wages Payable[l] 150,000
```

---

## Converting Fund Expenditures to Government-Wide Expenses

When the government-wide statements are prepared, governmental fund expenditures are converted to expenses. The full set of conversion adjustments is covered in [Deriving Government-Wide Financial Statements](deriving-government-wide-financial-statements.md); here is the expenditure side for one fund.

Bear City's General Fund reports these expenditures:

| Item | Expenditure |
|---|---|
| Salaries | \$2,000,000 |
| Supplies (purchase method) | 300,000 |
| Capital outlay (equipment) | 400,000 |
| Debt service: principal | 250,000 |
| Debt service: interest | 100,000 |
| **Total expenditures** | **\$3,050,000** |

Additional information:

- Supplies on hand rose from \$30,000 to \$45,000 during the year.
- Depreciation on all capital assets for the year, including the new equipment, is \$180,000.
- Accrued interest payable rose by \$15,000.
- The compensated absences liability rose by \$60,000, none of which has matured.

| Adjustment | Amount |
|---|---|
| Total fund expenditures | \$3,050,000 |
| Remove capital outlay | (400,000) |
| Add depreciation | 180,000 |
| Remove debt principal | (250,000) |
| Remove the increase in supplies inventory (\$45,000 - \$30,000) | (15,000) |
| Add the increase in accrued interest | 15,000 |
| Add the increase in compensated absences | 60,000 |
| **Government-wide expenses** | **\$2,640,000** |

The supplies adjustment works because the purchase method expensed everything bought (\$300,000), while accrual expenses only what was used. Purchases of \$300,000 less the \$15,000 that went into inventory is \$285,000 used.

---

## Summary

| Transaction | Governmental fund (modified accrual) | Government-wide (accrual) |
|---|---|---|
| Buy equipment | Capital outlay expenditure for the full cost | Capitalize the asset; depreciate it |
| Pay bond principal | Expenditure when due | Reduce bonds payable |
| Pay bond interest | Expenditure when due | Expense as it accrues |
| Employees earn leave | Expenditure only for the matured portion | Expense for the full liability increase |
| Buy supplies and use some | Expenditure at purchase or at use, depending on method | Expense when used |
| Pension and OPEB cost | Amounts paid plus matured unpaid amounts | Pension or OPEB expense under GASB 68 or 75 |
