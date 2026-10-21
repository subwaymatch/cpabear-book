# Nonexchange Revenue Transactions

When a city sells water, the customer gets water and the city gets cash of about equal value. That is an **exchange transaction**. Most government revenue does not work that way. A property owner who pays \$5,000 of tax does not receive \$5,000 of services in return, and a federal agency that gives a city a grant receives nothing of equal value back. These are **nonexchange transactions**, and they make up most of the revenue of governmental funds. **GASB 33** groups them into four classes and sets out when each one produces an asset and when it produces revenue.

The BAR blueprint asks you to calculate nonexchange revenue, with journal entries, under both the accrual basis (government-wide statements) and the modified accrual basis (governmental funds). This chapter introduces the four classes, then covers the accrual rules, the "available" test that modified accrual adds, and full examples for sales taxes, property taxes, and a grant.

---

## The Four Classes

| Class | What it is | Examples |
|---|---|---|
| **Derived tax revenues** | Taxes imposed on exchange transactions between other parties | Sales tax, income tax, motor fuel tax |
| **Imposed nonexchange revenues** | Assessments imposed on people or property, not tied to an exchange | Property tax, fines, penalties, forfeitures |
| **Government-mandated nonexchange transactions** | One government requires another to carry out a program and provides the money for it | A state that requires counties to run a program and funds it |
| **Voluntary nonexchange transactions** | Resources given by agreement, with no legal mandate | Most federal and state grants a government applies for, entitlements, private donations |

---

## Recognition on the Accrual Basis

Each class has its own trigger for recognizing the asset (usually a receivable) and the revenue.

| Class | Recognize the asset | Recognize the revenue |
|---|---|---|
| **Derived tax revenues** | When the underlying exchange occurs or cash is received, whichever is first | When the underlying exchange occurs (net of estimated refunds) |
| **Imposed nonexchange revenues** | When an enforceable legal claim arises or cash is received, whichever is first | Property taxes: in the period **for which they are levied**. Other imposed revenues, such as fines: when the claim becomes enforceable, unless a time requirement applies |
| **Government-mandated and voluntary** | When **all eligibility requirements** are met | When **all eligibility requirements** are met |

For the last two classes, the key is the **eligibility requirements**:

| Requirement | Meaning | Example |
|---|---|---|
| **Required characteristics of recipients** | The recipient must have the characteristics the provider specifies | Only counties with a population over 50,000 qualify |
| **Time requirements** | The resources must be used in, or may not be used before, a specified period | Funds are for fiscal year 20X6 only |
| **Reimbursements** | The provider pays only after the recipient incurs allowable costs | A cost-reimbursement grant |
| **Contingencies** (voluntary transactions only) | The resources are provided only after the recipient takes a specified action | A donor will give \$1,000,000 for a library only after the city raises \$500,000 from others |

**Purpose restrictions are not eligibility requirements.** A grant that must be spent on road repairs is recognized as revenue as soon as the eligibility requirements are met, even if no road has been repaired yet. The purpose restriction shows up as restricted net position (or restricted fund balance), not as delayed revenue.

### What to Record When Cash Arrives Early

Cash sometimes arrives before the revenue can be recognized. What to record depends on **why** the revenue is not yet recognized:

| Situation | Recipient records | Provider records |
|---|---|---|
| Received before a **time requirement** is met (all other requirements met), or property taxes received before the period for which levied | **Deferred inflow of resources** | Deferred outflow of resources |
| Received before **other eligibility requirements** are met, such as a reimbursement requirement | **Liability** (unearned revenue) | Asset (advance) |
| Derived taxes received before the underlying exchange occurs | **Liability** | Not applicable |

:::warning[Common Exam Trap]

An advance on a cost-reimbursement grant is a **liability**, not a deferred inflow. Deferred inflows arise only when the one thing missing is the passage of time (or, in the governmental funds, availability).

:::

---

## Recognition on the Modified Accrual Basis

Governmental funds apply the accrual rules above and then add one more test: the revenue must be **available**, meaning collected within the period or soon enough afterward to pay the period's liabilities.

| Class | Modified accrual revenue |
|---|---|
| Derived tax revenues | When the underlying exchange occurs **and** the resources are available |
| Imposed nonexchange revenues | In the period for which levied (property taxes) or when the claim is enforceable **and** the resources are available |
| Government-mandated and voluntary | When all eligibility requirements are met **and** the resources are available |

Each government sets and discloses its availability period. For **property taxes**, it generally may not exceed **60 days** after year-end. For other revenues, such as grants, governments often use longer periods.

A receivable that meets the accrual criteria but will not be collected within the availability period is recorded in the fund with an offsetting **deferred inflow of resources (unavailable revenue)**. The revenue is recognized in the fund in the later period when the resources become available. Government-wide, it is revenue now.

---

## Derived Tax Revenue: Sales Tax

Bear City imposes a 2% sales tax. December 20X4 taxable sales are \$15,000,000, so retailers owe \$300,000, which they remit in January 20X5. Bear City's availability period for sales taxes is 60 days.

The revenue belongs to 20X4 because the sales happened in December. Because the cash arrives within 60 days, it is also available, so the entry is the same in the government-wide statements and the General Fund:

```journal
Dec 31, 20X4
Dr. Sales Tax Receivable[a] 300,000
Cr. Sales Tax Revenue 300,000
```

If the tax would not be collected within 60 days, the government-wide entry would be unchanged, but the General Fund would record:

```journal
Dec 31, 20X4
Dr. Sales Tax Receivable[a] 300,000
Cr. Deferred Inflows of Resources (Unavailable Revenue) 300,000
```

---

## Imposed Nonexchange Revenue: Property Taxes

Property taxes are the most heavily tested nonexchange revenue. The rule has two parts. Revenue belongs to the **period for which the taxes are levied** (a time requirement), and in the governmental funds it must also be **available**.

| Situation | Accrual basis | Modified accrual basis |
|---|---|---|
| Levied for the current year and collected during the year or within 60 days after | Revenue | Revenue |
| Levied for the current year but collected more than 60 days after year-end | Revenue | Deferred inflow (unavailable revenue) until collected |
| Collected before the year for which levied | Deferred inflow | Deferred inflow |
| Estimated uncollectible | Allowance; revenue is reported net | Allowance; revenue is reported net |

### Example

Bear City levies \$10,000,000 of property taxes for fiscal year 20X5 (July 1, 20X4 to June 30, 20X5). It expects 2% (\$200,000) to be uncollectible. Collections are:

- \$9,200,000 during fiscal 20X5
- \$500,000 between July 1 and August 29, 20X5 (within 60 days of year-end)
- \$100,000 after August 29, 20X5

**Government-wide (accrual).** The full net levy of \$9,800,000 is revenue of fiscal 20X5, because that is the year for which it was levied.

```journal
Levy date
Dr. Property Taxes Receivable[a] 10,000,000
Cr. Allowance for Uncollectible Taxes[ca] 200,000
Cr. Property Tax Revenue 9,800,000
```

```journal
During FY 20X5
Dr. Cash[a] 9,200,000
Cr. Property Taxes Receivable[a] 9,200,000
```

The \$600,000 collected after year-end simply reduces the receivable; no further revenue is recorded.

**General Fund (modified accrual).** The fund records the same levy and collections. At year-end, though, the \$100,000 that will not be collected within 60 days is not available, so it is moved out of revenue:

```journal
Jun 30, 20X5
Dr. Property Tax Revenue 100,000
Cr. Deferred Inflows of Resources (Unavailable Revenue) 100,000
```

| Component | Amount | Modified accrual treatment |
|---|---|---|
| Collected during fiscal 20X5 | \$9,200,000 | Revenue |
| Collected within 60 days after year-end | 500,000 | Revenue |
| Collected after 60 days | 100,000 | Deferred inflow |
| Estimated uncollectible | 200,000 | Allowance |
| **Revenue recognized** | **\$9,700,000** | |

In fiscal 20X6, when the last \$100,000 is collected, it becomes revenue of that year:

```journal
FY 20X6
Dr. Cash[a] 100,000
Cr. Property Taxes Receivable[a] 100,000
```

```journal
FY 20X6
Dr. Deferred Inflows of Resources (Unavailable Revenue) 100,000
Cr. Property Tax Revenue 100,000
```

A shortcut for the modified accrual amount: levy, less estimated uncollectible, less the amount collected after the availability period. Here, \$10,000,000 - \$200,000 - \$100,000 = \$9,700,000.

### Fines and Penalties

Fines are imposed nonexchange revenues. They are recognized when the government has an **enforceable legal claim** (for example, when a court imposes the fine), net of estimated uncollectible amounts. In the governmental funds, they must also be available.

---

## Grants: Government-Mandated and Voluntary

### Example: A Cost-Reimbursement Grant

Kodiak County is awarded a \$2,000,000 federal grant to build low-income housing, a voluntary nonexchange transaction. The county already meets the required characteristics. The grant may be used only in fiscal 20X6 (a time requirement), and the county is reimbursed only for eligible costs it has incurred (a reimbursement requirement).

**Fiscal 20X5: the county receives a \$500,000 advance.** Neither the time requirement nor the reimbursement requirement is met. Because a requirement other than time is unmet, the advance is a **liability** on both bases:

```journal
FY 20X5
Dr. Cash[a] 500,000
Cr. Unearned Revenue (Grant Advance)[l] 500,000
```

**Fiscal 20X6: the county incurs \$1,200,000 of eligible costs.** Now both requirements are met for \$1,200,000. The advance covers \$500,000, and the county bills the federal government for the other \$700,000. On the accrual basis:

```journal
FY 20X6
Dr. Unearned Revenue (Grant Advance)[l] 500,000
Dr. Intergovernmental Receivable[a] 700,000
Cr. Grant Revenue 1,200,000
```

The governmental fund records the same entry if the \$700,000 will be received within the county's availability period for grants. If it would not be, the fund credits \$700,000 to deferred inflows (unavailable revenue) instead of revenue until it becomes available.

When the reimbursement arrives:

```journal
FY 20X6
Dr. Cash[a] 700,000
Cr. Intergovernmental Receivable[a] 700,000
```

### Example: A Time Requirement Only

In June 20X5, Bear City receives \$300,000 from the state that may be spent only in fiscal 20X6, with no other conditions. All requirements except time are met, so the city records a **deferred inflow** on both bases and recognizes the revenue in fiscal 20X6.

```journal
Jun 20X5
Dr. Cash[a] 300,000
Cr. Deferred Inflows of Resources 300,000
```

---

## Summary

| Class | Revenue (accrual) | Revenue (modified accrual) | Early cash |
|---|---|---|---|
| **Derived tax** | When the underlying exchange occurs | Same, and available | Liability |
| **Imposed** | Period for which levied (property tax); when enforceable (fines) | Same, and available (property tax: within 60 days) | Deferred inflow (property taxes received before the levy year) |
| **Government-mandated** | All eligibility requirements met | Same, and available | Liability, or deferred inflow if only time is missing |
| **Voluntary** | All eligibility requirements met | Same, and available | Liability, or deferred inflow if only time is missing |

### Common Exam Scenarios

| Scenario | Modified accrual treatment |
|---|---|
| Property taxes levied for the current year, collected 45 days after year-end | Revenue (within 60 days) |
| Property taxes levied for the current year, collected 90 days after year-end | Deferred inflow (unavailable revenue) |
| Property taxes collected in advance for next year's levy | Deferred inflow |
| Sales tax on December sales, received in January within the availability period | Revenue of the year of the sale |
| Grant with all requirements met, cash due in 30 days | Revenue |
| Grant cash received before the time requirement is met (all else met) | Deferred inflow |
| Advance on a cost-reimbursement grant before costs are incurred | Liability (unearned revenue) |
| Unconditional donation of cash | Revenue when received |

To solve any nonexchange problem, work in three steps: classify the transaction, apply that class's accrual rule (and check what is missing if cash came early), and then, for governmental funds, apply the availability test.
