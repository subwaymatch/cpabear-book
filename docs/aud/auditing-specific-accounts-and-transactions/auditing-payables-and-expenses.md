# Auditing Payables and Expenses

The expenditure cycle covers everything from a purchase request to the payment that settles it. For receivables, the auditor worries that management has recorded too much. For payables, the worry runs the other way: a company that wants to look healthier simply leaves bills unrecorded, which understates both liabilities and expenses. That is why the audit of payables centers on **completeness**. This chapter covers the controls in the cycle, the search for unrecorded liabilities, confirmations of payables, and the testing of expenses.

---

## Controls in the Expenditure Cycle

The basic control design separates the people who authorize purchases, receive the goods, record the liability, and pay the bill.

| Function | Responsibility |
|---|---|
| **Requisitioning department** | Requests goods or services, with approval |
| **Purchasing** | Selects the vendor and issues a prenumbered **purchase order** |
| **Receiving** | Counts and inspects goods on arrival and prepares a **receiving report** |
| **Accounts payable** | Matches documents, records the liability, and prepares the payment voucher |
| **Treasurer** | Reviews the approved voucher package, signs or releases the payment, and cancels the supporting documents so they cannot be paid twice |

The central control is the **three-way match**. Before an invoice is approved for payment, accounts payable compares the **purchase order** (what was authorized, at what price), the **receiving report** (what actually arrived), and the **vendor invoice** (what the vendor is billing). All three must agree on items, quantities, and prices, and any difference is resolved before payment.

**Example.** Bear Co. orders 500 units at \$10 each. The receiving report shows 480 units, but the vendor bills for 500. The accounts payable clerk catches the 20-unit difference, contacts the vendor, and approves payment of \$4,800 for the units actually received.

---

## The Search for Unrecorded Liabilities

The most important substantive procedure in the cycle is the **search for unrecorded liabilities**. Its logic is simple: an unrecorded liability is not in the accounting records, so the auditor cannot find it by sampling the records. Instead, the auditor starts with evidence **outside** the payables ledger and works back to see whether the liability was recorded at year-end.

The auditor:

1. **Examines cash disbursements made after year-end** and the related invoices, looking for payments that relate to goods or services received before year-end.
2. **Reviews unmatched receiving reports** from before year-end that have no recorded invoice or payable.
3. **Examines unpaid invoices and vendor statements** received after year-end.
4. **Inquires** of management and the purchasing department about obligations that might not have been recorded.

The search usually runs from year-end up to near the report date, and the larger the payments, the more of them the auditor examines.

**Example.** Reviewing Kodiak Partners' January disbursements, the auditor finds a \$150,000 payment to Sloth Security for consulting work performed in December. Kodiak had not accrued the liability, so the auditor proposes an adjusting entry:

```journal
December 31
Dr. Consulting Expense 150,000
Cr. Accounts Payable[l] 150,000
```

---

## Confirming Accounts Payable

Confirming payables is not required, and auditors use it less often than receivable confirmations, because the auditor can usually get reliable external evidence from vendor invoices and statements. When the auditor does confirm payables, the design is the mirror image of a receivables confirmation.

| | Accounts receivable confirmations | Accounts payable confirmations |
|---|---|---|
| **Main risk** | Overstatement | Understatement |
| **Assertion** | Existence | Completeness |
| **Whom to ask** | Customers with large recorded balances | Major vendors, including those with **small or zero recorded balances** |
| **Form** | Often states the balance | Usually asks the vendor to fill in the amount owed (a blank form) |

A vendor the client buys from every month that shows a zero balance at year-end is exactly where an unrecorded invoice would hide. Payables confirmations are most useful when controls are weak, when vendor statements are not available, or when the auditor suspects the client is holding back invoices.

**Example.** Polar Inc. buys raw materials from the same five suppliers every month, but two of them show no balance at December 31. The auditor sends blank confirmation requests to all five. One of the two replies that Polar owes \$62,000 for December shipments, which Polar has not recorded.

---

## Other Procedures for Payables and Expenses

| Procedure | Assertion addressed |
|---|---|
| Search for unrecorded liabilities; confirm vendors with small or zero balances | Completeness |
| Vouch recorded payables to purchase orders, receiving reports, and invoices | Existence |
| Test purchases cutoff using receiving reports near year-end | Cutoff |
| Recalculate accruals such as wages, interest, and utilities | Accuracy and valuation |
| Review expense accounts for items that belong elsewhere (for example, capital expenditures charged to repairs) | Classification |
| Review notes for purchase commitments and other obligations | Presentation and disclosure |

Purchases cutoff works exactly as described in [Auditing Inventory and Cost of Sales](./auditing-inventory-and-cost-of-sales.md): goods received before year-end should be recorded as purchases and payables, and goods received after year-end should not.

### Testing Expenses

Most expense accounts are tested with a mix of **analytical procedures** and **tests of details**. The auditor compares each expense by month and against the prior year and the budget, and investigates fluctuations that the auditor's understanding of the business does not explain. Expenses that can be predicted, such as rent under a lease or depreciation, are often tested by recalculation. The auditor also examines large or unusual entries, vouching them to invoices and approvals, and tests **prepaid expenses** and **accrued liabilities** together with the expense accounts they affect.

Data analytics makes some expenditure tests far more powerful. The auditor can scan every disbursement for the year to find **duplicate payments** (same vendor, amount, and invoice number) or compare the vendor master file with the employee master file to find vendors that share an address or bank account with an employee, a common sign of fictitious vendor fraud.

:::warning[Common Exam Trap]

For accounts payable, the primary concern is **completeness** (understatement); for accounts receivable, it is **existence** (overstatement). Vouching recorded payables tests existence and will never find an unrecorded liability. To test completeness, the auditor must start outside the payables records.

:::
