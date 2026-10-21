# Governmental Accounting

## Introduction

Governmental accounting applies to **state and local governments**, including cities, counties, school districts, and special-purpose entities. Government-owned hospitals and public universities also follow governmental accounting standards. The standard-setter is the **Governmental Accounting Standards Board (GASB)**.

:::info[Key Concept]

The fundamental purpose of governmental accounting is to demonstrate **accountability**: showing that public resources are used in compliance with laws, regulations, and budgetary authority. For-profit accounting, by contrast, focuses on profitability.

:::

## Fund Accounting

Governments use **fund accounting** to segregate resources for specific purposes. A fund is a **self-balancing set of accounts** used to track resources dedicated to a particular activity or objective.

Fund accounting serves three purposes:

1. **Monitoring compliance** with legal and contractual requirements
2. **Tracking spending** by purpose
3. **Budgetary control** over appropriations

## Three Categories of Funds

```mermaid
graph TD
    A[Government Funds] --> B[Governmental Funds]
    A --> C[Proprietary Funds]
    A --> D[Fiduciary Funds]
    B --> B1["GRaSPP<br/>General<br/>Special Revenue<br/>Debt Service<br/>Capital Projects<br/>Permanent"]
    C --> C1["SE<br/>Internal Service<br/>Enterprise"]
    D --> D1["CIPPOE<br/>Custodial<br/>Investment Trust<br/>Private Purpose Trust<br/>Pension Trust<br/>Other Employee Benefits Trust"]
```

:::tip[CPA Exam Tip]

Memorize the fund mnemonics: **GRaSPP** (Governmental), **SE** (Proprietary), and **CIPPOE** (Fiduciary). The exam frequently tests which fund category a transaction belongs to.

:::

## Governmental Funds (GRaSPP)

Governmental funds use the **modified accrual basis** of accounting and the **current financial resources measurement focus**. They generally report only current financial assets and the liabilities those assets will pay. Capital assets and long-term debt are not reported in the funds.

| Fund | Purpose |
|---|---|
| **General Fund** | Accounts for all resources not required to be in another fund; the "catch-all" fund |
| **Special Revenue Fund** | Accounts for resources legally restricted or committed for specific purposes (for example, a gas tax for roads) |
| **Debt Service Fund** | Accounts for resources accumulated to pay principal and interest on general long-term debt |
| **Capital Projects Fund** | Accounts for resources used to acquire or construct major capital facilities |
| **Permanent Fund** | Accounts for resources that are legally restricted so that only earnings (not principal) may be used for government programs |

### Modified Accrual Basis

Under modified accrual:

- **Revenues** are recognized when they are **measurable and available**.
- **Available** means collectible within the current period or soon enough afterward to pay current-period liabilities. For property taxes, that means no more than **60 days** after year-end. For other revenues, the government sets and discloses its own availability period.
- **Expenditures** (not expenses) are recognized when the fund liability is incurred. Exceptions include debt service, which is recognized when due (matured).

:::warning

Governmental funds report **expenditures**, not expenses. An expenditure is recognized when a liability is incurred. There is **no depreciation** in governmental funds because capital assets are not reported at the fund level.

:::

### Revenue Recognition Example

Panda Industries, a city government, levies \$5,000,000 in property taxes for the current year. Of this amount, \$4,800,000 is expected to be collected during the year or within 60 days after year-end. Another \$150,000 is expected to be collected 61 to 120 days after year-end. The remaining \$50,000 is estimated to be uncollectible.

```journal
Dr. Property taxes receivable       5,000,000
    Cr. Allowance for uncollectible taxes       50,000
    Cr. Property tax revenue                 4,800,000
    Cr. Deferred inflows of resources          150,000
```

The \$150,000 is not available at year-end, so it is reported as a deferred inflow of resources. In the following year, the city collects the taxes:

```journal
Dr. Cash                              150,000
    Cr. Property taxes receivable              150,000
```

The amount is now available, so the deferred inflow is recognized as revenue of that year:

```journal
Dr. Deferred inflows of resources      150,000
    Cr. Property tax revenue                   150,000
```

## Budgetary Accounting

Governments are generally **required by law** to adopt budgets for governmental funds, especially the General Fund. Budget entries are recorded at the **beginning** of the fiscal year and reversed at **year-end**.

### Recording the Budget

Bear Co. City Council adopts an annual budget with estimated revenues of \$10,000,000 and appropriations (authorized spending) of \$9,500,000.

```journal
Dr. Estimated revenues              10,000,000
    Cr. Appropriations                       9,500,000
    Cr. Budgetary fund balance                 500,000
```

:::note

- **Estimated revenues** is a budgetary debit account (not actual revenue).
- **Appropriations** is a budgetary credit account (the authorized spending limit).
- **Budgetary fund balance** is the plug. A credit indicates an expected surplus; a debit indicates an expected deficit.

:::

### Closing the Budget at Year-End

The budget entry is reversed at year-end:

```journal
Dr. Appropriations                   9,500,000
Dr. Budgetary fund balance             500,000
    Cr. Estimated revenues                  10,000,000
```

## Encumbrance Accounting

Governments use **encumbrances** to track outstanding purchase orders and other commitments. Encumbrances prevent overspending of appropriations.

### Step 1: Record the Encumbrance (Purchase Order Issued)

Polar Co. School District orders \$200,000 of textbooks:

```journal
Dr. Encumbrances                     200,000
    Cr. Budgetary fund balance reserved for encumbrances   200,000
```

### Step 2: Reverse Encumbrance and Record Expenditure (Goods Received)

The textbooks arrive with an invoice for \$195,000. First, reverse the encumbrance at the original estimate:

```journal
Dr. Budgetary fund balance reserved for encumbrances   200,000
    Cr. Encumbrances                                         200,000
```

Then record the expenditure at the actual amount:

```journal
Dr. Expenditures                     195,000
    Cr. Vouchers payable                     195,000
```

:::tip[CPA Exam Tip]

Encumbrances are **always** reversed at the **estimated** amount, not the actual amount. The expenditure is recorded at the **actual** amount. The \$5,000 difference is simply unused appropriation authority that remains available to spend.

:::

### Outstanding Encumbrances at Year-End

If purchase orders are still outstanding at year-end, the encumbrances may be:

- **Closed** and re-established the following year, or
- **Carried forward** (left open) into the following year.

Either way, outstanding encumbrances are reported as part of **restricted, committed, or assigned fund balance**. They are never reported as expenditures or liabilities.

## Proprietary Funds (SE)

Proprietary funds operate like **businesses** within government. They use the **full accrual basis** of accounting and the **economic resources measurement focus**.

| Fund | Purpose |
|---|---|
| **Internal Service Fund** | Provides goods or services to **other departments** within the government (for example, motor pool, IT, printing) |
| **Enterprise Fund** | Provides goods or services to the **general public** for user charges (for example, water, sewer, and electric utilities, and airports) |

### Proprietary Fund Financial Statements

- **Statement of Net Position** (balance sheet)
- **Statement of Revenues, Expenses, and Changes in Net Position** (income statement)
- **Statement of Cash Flows** (the **direct method** is required, not optional)

:::warning

Unlike for-profit entities, proprietary funds must use the **direct method** for the statement of cash flows. Proprietary funds also classify cash flows into **four** categories: operating, noncapital financing, capital and related financing, and investing.

:::

### Enterprise Fund Example

Sloth Security, a government-run utility, bills customers \$3,000,000 for water services:

```journal
Dr. Accounts receivable             3,000,000
    Cr. Charges for services (operating revenue)   3,000,000
```

The utility purchases a new water treatment facility for \$8,000,000:

```journal
Dr. Capital assets (water treatment facility)  8,000,000
    Cr. Cash                                     8,000,000
```

Annual depreciation is \$400,000:

```journal
Dr. Depreciation expense               400,000
    Cr. Accumulated depreciation                   400,000
```

## Fiduciary Funds (CIPPOE)

Fiduciary funds account for resources the government holds **in a trust or custodial capacity** for others. They use the **full accrual basis** of accounting.

| Fund | Purpose |
|---|---|
| **Custodial Fund** | Resources held temporarily for other entities (for example, taxes collected for other governments) |
| **Investment Trust Fund** | External portion of investment pools managed by the government |
| **Private Purpose Trust** | Trust arrangements whose principal and income benefit external parties |
| **Pension Trust Fund** | Resources held for employee pension plans |
| **Other Employee Benefits Trust** | Resources held for other postemployment benefit (OPEB) plans and similar plans |

:::danger

Fiduciary fund resources belong to **others**, not the government. They are **excluded** from the government-wide financial statements.

:::

## GASB 34 Reporting Model

GASB Statement No. 34 established the minimum reporting requirements for state and local governments.

### Government-Wide Financial Statements

These statements report the government as a **whole** using the **full accrual basis** and **economic resources measurement focus**:

| Statement | Content |
|---|---|
| **Statement of Net Position** | All assets, deferred outflows of resources, liabilities, deferred inflows of resources, and net position |
| **Statement of Activities** | Expenses by function, program revenues, general revenues, and change in net position |

The Statement of Activities uses a **net cost format**:

$$
\text{Net (Expense) Revenue} = \text{Program Revenues} - \text{Direct Expenses}
$$

Program revenues include charges for services, operating grants and contributions, and capital grants and contributions.

### Fund-Based Financial Statements

These statements report individual funds using the measurement focus and basis of accounting appropriate to each fund type:

- **Governmental funds**: Modified accrual; report current financial resources
- **Proprietary funds**: Full accrual; report economic resources
- **Fiduciary funds**: Full accrual; report economic resources

### Reconciliation

A reconciliation is required between the governmental fund statements and the government-wide statements. Major differences include:

| Item | Governmental Funds | Government-Wide |
|---|---|---|
| Capital assets | Not reported (expenditure when purchased) | Capitalized and depreciated |
| Long-term debt | Not reported | Reported as liability |
| Accrued interest | Not reported until due | Accrued |
| Internal service funds | Reported with proprietary funds, not governmental funds | Generally included in governmental activities |

## Fund Balance Classifications (GASB 54)

Governmental fund balance is classified into five categories, from most to least constrained:

| Classification | Constraint Level | Set By |
|---|---|---|
| **Nonspendable** | Cannot be spent (inventory, prepaids, permanent fund principal) | Nature of the resource |
| **Restricted** | Externally imposed or imposed by law | Creditors, grantors, laws |
| **Committed** | Self-imposed by highest decision-making authority | Government's governing body |
| **Assigned** | Intended use set by authorized body or official | Governing body or designee |
| **Unassigned** | Residual; positive only in the General Fund (may be negative in other funds) | N/A |

:::tip[CPA Exam Tip]

Remember the order: **N-R-C-A-U** (Nonspendable, Restricted, Committed, Assigned, Unassigned). Unless the government has a different policy, spendable resources are assumed to be spent from most restricted to least restricted.

:::

## Measurement Focus Comparison

| Feature             | Modified Accrual (Governmental)      | Full Accrual (Proprietary / Government-Wide) |
| ------------------- | ------------------------------------ | -------------------------------------------- |
| Revenue recognition | Measurable and available             | Earned                                       |
| Expense/expenditure | When liability is incurred (current) | When incurred (all)                          |
| Capital assets      | Not reported                         | Capitalized and depreciated                  |
| Long-term debt      | Not reported                         | Reported                                     |
| Focus               | Current financial resources          | Economic resources                           |

## Summary

| Topic                          | Key Rule                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| Standard-setter                | GASB                                                         |
| Fund types                     | Governmental (GRaSPP), Proprietary (SE), Fiduciary (CIPPOE)  |
| Governmental basis             | Modified accrual, current financial resources                |
| Proprietary basis              | Full accrual, economic resources                             |
| Available period               | Property taxes: within 60 days after year-end                |
| Budget entry accounts          | Estimated Revenues, Appropriations, Budgetary Fund Balance   |
| Encumbrances                   | Reversed at estimated amount; actual recorded as expenditure |
| Government-wide statements     | Full accrual for all activities except fiduciary             |
| Fiduciary funds                | Excluded from government-wide statements                     |
| Cash flow method (proprietary) | Direct method required                                       |

:::warning[Final Exam Reminder]

The CPA exam heavily tests the **differences** between modified accrual and full accrual. Be able to convert governmental fund statements to government-wide statements by adding capital assets (net of depreciation), long-term debt, and accrued items such as interest.

:::
