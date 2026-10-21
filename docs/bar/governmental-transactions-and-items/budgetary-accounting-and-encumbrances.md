# Budgetary Accounting and Encumbrances

In a business, a budget is a management plan. In a government, the budget is law. When a city council adopts the General Fund budget, its **appropriations** become the legal limit on what each department may spend, and spending beyond that limit can be illegal. Governments therefore build the budget into the accounting records themselves, a practice called **budgetary integration**, and they track purchase orders as **encumbrances** so that no department commits more than it has been given.

The BAR blueprint asks you to recall the types of budgets governments use and to prepare journal entries for the original budget, the final (amended) budget, and encumbrances. This chapter takes those in order, then shows what happens at year-end, including how outstanding encumbrances are reported in fund balance.

---

## Types of Budgets

Governments use several kinds of budgets, and they can be described along a few dimensions.

| Dimension | Types | Notes |
|---|---|---|
| What is covered | **Operating budget** and **capital budget** | The operating budget authorizes the year's spending on services. The capital budget authorizes long-term projects such as buildings and roads. |
| Period | **Annual**, **biennial**, or **project-length** | Most general-purpose governments adopt annual operating budgets; some states adopt two-year budgets. Capital projects funds are often controlled by a budget for the life of the project. |
| Response to activity | **Fixed** or **flexible** | Governmental funds use fixed budgets: the appropriation is a dollar ceiling. Flexible budgets, which adjust allowed costs to the level of activity, suit proprietary funds, where demand drives costs. |
| How spending is organized | **Line-item (object of expenditure)**, **performance**, **program**, **zero-based** | A line-item budget appropriates by type of spending (salaries, supplies). Performance and program budgets tie spending to outputs or goals. A zero-based budget makes every program justify its funding from zero each cycle. |

The budget that is formally recorded in the ledger is the **legally adopted annual operating budget**, usually for the General Fund and special revenue funds. Proprietary funds generally do not record their budgets, because their spending is controlled by the revenues they earn rather than by appropriations.

The level at which spending cannot exceed appropriations without legislative approval is the **legal level of budgetary control**. It might be the fund, the department, or even the object of expenditure within a department. Spending above an appropriation at that level is an **overexpenditure**.

---

## Budgetary Accounts and the Budget Entry

Budgetary accounts are recorded alongside the actual accounts but with different names, so that planned and actual amounts never mix.

| Budgetary account | Normal balance | Represents |
|---|---|---|
| Estimated Revenues | Debit | Revenues the government expects to collect |
| Estimated Other Financing Sources | Debit | Expected transfers in and bond proceeds |
| Appropriations | Credit | The legal ceiling on expenditures |
| Estimated Other Financing Uses | Credit | Authorized transfers out |
| Budgetary Fund Balance | Debit or credit | The planned surplus (credit) or deficit (debit) |

The budget entry records expected inflows as debits and authorized outflows as credits, with Budgetary Fund Balance as the balancing figure:

$$
\text{Budgetary Fund Balance} = (\text{Estimated Revenues} + \text{Estimated OFS}) - (\text{Appropriations} + \text{Estimated OFU})
$$

A positive result is a planned surplus and is credited. A negative result is a planned deficit and is debited.

### Example: Original Budget With a Surplus

Bear City adopts a General Fund budget with estimated revenues of \$5,000,000 and appropriations of \$4,800,000. The planned surplus of \$200,000 is credited to Budgetary Fund Balance.

```journal
Dr. Estimated Revenues 5,000,000
Cr. Appropriations 4,800,000
Cr. Budgetary Fund Balance 200,000
```

None of these accounts records a real transaction. Estimated Revenues is a plan, not cash collected, and Appropriations is authority to spend, not spending. Actual revenues and expenditures are recorded separately as they occur.

### Example: Original Budget With a Deficit and Transfers

Polar Township adopts a budget with estimated revenues of \$3,200,000, an expected transfer in from another fund of \$150,000, appropriations of \$3,500,000, and an authorized transfer out of \$100,000. Inflows of \$3,350,000 fall short of outflows of \$3,600,000 by \$250,000, so Budgetary Fund Balance is debited.

```journal
Dr. Estimated Revenues 3,200,000
Dr. Estimated Other Financing Sources 150,000
Dr. Budgetary Fund Balance 250,000
Cr. Appropriations 3,500,000
Cr. Estimated Other Financing Uses 100,000
```

---

## Budget Amendments and the Final Budget

During the year the legislative body may amend the budget. Each amendment is recorded as its own entry for the **net change** only.

Midway through the year, Bear City's council raises estimated revenues by \$150,000 (to \$5,150,000) and appropriations by \$200,000 (to \$5,000,000). Appropriations grew \$50,000 more than revenues, so the planned surplus shrinks from \$200,000 to \$150,000 and Budgetary Fund Balance is debited \$50,000.

```journal
Dr. Estimated Revenues 150,000
Dr. Budgetary Fund Balance 50,000
Cr. Appropriations 200,000
```

The **final budget** is the original budget plus all amendments: here, estimated revenues of \$5,150,000, appropriations of \$5,000,000, and a planned surplus of \$150,000. Both the original and final amounts appear in the budgetary comparison schedule, along with the variance between them (see [Required Supplementary Information](../governmental-financial-statements/required-supplementary-information.md)).

:::tip[Exam Tip]

If a question asks for the entry to "record the final budget," check whether it wants the amendment alone or a single combined entry. The combined entry for Bear City would debit Estimated Revenues \$5,150,000 and credit Appropriations \$5,000,000 and Budgetary Fund Balance \$150,000.

:::

---

## Encumbrances

An **encumbrance** is a commitment, such as a purchase order or a signed contract, for goods or services not yet received. Recording it sets aside part of the appropriation so the same money cannot be committed twice. The available appropriation at any moment is:

$$
\text{Available Appropriation} = \text{Appropriations} - \text{Expenditures} - \text{Outstanding Encumbrances}
$$

An encumbrance is **not** an expenditure and **not** a liability. Nothing has been received, so nothing is owed. It is purely a budgetary control.

The life of an encumbrance has three steps:

| Step | Debit | Credit |
|---|---|---|
| Purchase order issued (estimated amount) | Encumbrances | Budgetary Fund Balance (Reserve for Encumbrances) |
| Goods or services received: reverse the encumbrance (estimated amount) | Budgetary Fund Balance (Reserve for Encumbrances) | Encumbrances |
| Goods or services received: record the expenditure (actual amount) | Expenditures | Vouchers Payable (or Cash) |

Textbooks name the credit account differently: Budgetary Fund Balance Reserved for Encumbrances, Encumbrances Outstanding, or Reserve for Encumbrances. Whatever the name, it is a budgetary account. It is not one of the five fund balance classifications of GASB 54.

### Example: Goods Received at the Estimated Cost

Bear City issues a purchase order for \$75,000 of supplies.

```journal
Dr. Encumbrances 75,000
Cr. Budgetary Fund Balance (Reserve for Encumbrances) 75,000
```

The supplies arrive with an invoice for exactly \$75,000. First reverse the encumbrance, then record the expenditure.

```journal
Dr. Budgetary Fund Balance (Reserve for Encumbrances) 75,000
Cr. Encumbrances 75,000
```

```journal
Dr. Expenditures 75,000
Cr. Vouchers Payable[l] 75,000
```

### Example: Goods Received at a Different Cost

Bear City ordered office furniture estimated at \$40,000. The invoice is \$42,500. The encumbrance is reversed at the **estimated** amount, because that is the amount it was recorded at. The expenditure is recorded at the **actual** amount.

```journal
Dr. Budgetary Fund Balance (Reserve for Encumbrances) 40,000
Cr. Encumbrances 40,000
```

```journal
Dr. Expenditures 42,500
Cr. Vouchers Payable[l] 42,500
```

No other entry is needed for the \$2,500 difference. It simply uses \$2,500 more of the available appropriation than was set aside.

---

## Year-End

### Closing the Budgetary Accounts

At year-end the budgetary accounts are closed by reversing the original budget and all amendments. For Bear City after its amendment:

```journal
Dr. Appropriations 5,000,000
Dr. Budgetary Fund Balance 150,000
Cr. Estimated Revenues 5,150,000
```

Actual revenues and expenditures are closed separately to fund balance, as in any fund.

### Outstanding Encumbrances

Some purchase orders are still open at year-end. What happens to them depends on whether the government's appropriations **lapse** at year-end.

**If appropriations lapse** (the more common case), the unused authority expires. If the government intends to honor the open orders, it closes the encumbrances and re-establishes them next year against the new year's appropriations. Meanwhile the committed amount is shown within fund balance.

**If appropriations do not lapse**, the authority carries into the next year, and the encumbrance can stay open until the goods arrive.

Either way, the GAAP reporting is the same: an outstanding encumbrance is **never** an expenditure or a liability in the GAAP statements. GASB 54 does not allow a separate "encumbrances" category of fund balance. Instead, encumbered amounts are reported within whichever classification already applies to the resources that will pay for them: **restricted**, **committed**, or **assigned**. For ordinary General Fund resources, that is usually **assigned**, because the purchase order reflects an intended use approved by management, not a formal commitment by the governing body. Significant encumbrances are also disclosed in the notes.

:::warning[Common Pitfall]

Outstanding encumbrances do not appear as expenditures in the GAAP-basis statement of revenues, expenditures, and changes in fund balances. They can, however, appear as expenditures in the budgetary comparison schedule if the government's budgetary basis treats them that way. That is one reason the schedule needs a reconciliation to GAAP.

:::

---

## Complete Worked Example

**Grizzly County General Fund, fiscal year 20X5.** Appropriations lapse at year-end, and the county intends to honor open purchase orders.

**Step 1: Record the original budget.** Estimated revenues are \$10,000,000 and appropriations are \$9,600,000.

```journal
Dr. Estimated Revenues 10,000,000
Cr. Appropriations 9,600,000
Cr. Budgetary Fund Balance 400,000
```

**Step 2: Record an amendment.** Midyear, the county increases appropriations by \$250,000 with no change in estimated revenues. The final budget is estimated revenues of \$10,000,000, appropriations of \$9,850,000, and a planned surplus of \$150,000.

```journal
Dr. Budgetary Fund Balance 250,000
Cr. Appropriations 250,000
```

**Step 3: Issue a purchase order.** The county orders a vehicle fleet estimated at \$320,000.

```journal
Dr. Encumbrances 320,000
Cr. Budgetary Fund Balance (Reserve for Encumbrances) 320,000
```

**Step 4: Receive the vehicles.** The invoice is \$318,500. Reverse the encumbrance at \$320,000 and record the expenditure at \$318,500.

```journal
Dr. Budgetary Fund Balance (Reserve for Encumbrances) 320,000
Cr. Encumbrances 320,000
```

```journal
Dr. Expenditures 318,500
Cr. Vouchers Payable[l] 318,500
```

**Step 5: Deal with the open order at year-end.** A \$45,000 order for computer equipment has not been filled. Close the encumbrance, then show the amount as assigned fund balance.

```journal
Dr. Budgetary Fund Balance (Reserve for Encumbrances) 45,000
Cr. Encumbrances 45,000
```

```journal
Dr. Fund Balance (Unassigned)[e] 45,000
Cr. Fund Balance (Assigned)[e] 45,000
```

**Step 6: Close the budgetary accounts.**

```journal
Dr. Appropriations 9,850,000
Dr. Budgetary Fund Balance 150,000
Cr. Estimated Revenues 10,000,000
```

**Step 7: Next year, re-establish the encumbrance.** When the new budget includes appropriations for the open order, the county records the encumbrance again. The \$45,000 assignment of fund balance is reversed back to unassigned at the same time.

```journal
Dr. Encumbrances 45,000
Cr. Budgetary Fund Balance (Reserve for Encumbrances) 45,000
```

---

## Summary

| Event | Debit | Credit |
|---|---|---|
| Adopt budget with a surplus | Estimated Revenues (and Estimated OFS) | Appropriations (and Estimated OFU); Budgetary Fund Balance |
| Adopt budget with a deficit | Estimated Revenues (and Estimated OFS); Budgetary Fund Balance | Appropriations (and Estimated OFU) |
| Amend budget to raise appropriations only | Budgetary Fund Balance | Appropriations |
| Issue purchase order | Encumbrances | Reserve for Encumbrances |
| Receive goods: reverse encumbrance (estimate) | Reserve for Encumbrances | Encumbrances |
| Receive goods: record expenditure (actual) | Expenditures | Vouchers Payable |
| Close open encumbrance at year-end | Reserve for Encumbrances | Encumbrances |
| Show open encumbrance in fund balance | Fund Balance (Unassigned) | Fund Balance (Assigned) |
| Close budgetary accounts | Appropriations; Budgetary Fund Balance (if a surplus) | Estimated Revenues |

When you work a budget or encumbrance problem, ask three questions. Is this a budgetary entry or an actual one? Is the amount the estimate (encumbrances) or the actual cost (expenditures)? And do appropriations lapse, which decides the year-end treatment?
