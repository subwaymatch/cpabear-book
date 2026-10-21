# Auditing Debt and Equity

Debt and equity transactions are usually few in number but large in amount, and almost all of them are governed by documents: loan agreements, bond indentures, the articles of incorporation, and board resolutions. That makes this part of the audit document-heavy and well suited to confirmation and recalculation. The bigger risks are an unrecorded borrowing, a covenant violation that changes how debt must be classified, and an equity transaction that was never authorized. This chapter covers debt, then equity, and ends with the payroll cycle, which is audited with similar tools.

---

## Debt

### Confirmation and Documents

The auditor confirms debt directly with lenders, bond trustees, and other creditors, asking for the principal outstanding, interest rate, maturity dates, collateral, and any unused lines of credit. Requests go to every lender the client did business with during the year, including those with no recorded balance, because a confirmation from a lender the client "forgot" is one of the few ways to find an **unrecorded borrowing**. The bank confirmation used for cash also reports direct loans.

The auditor reads the loan agreements and bond indentures and traces their key terms to the financial statements: the interest rate, the maturity schedule, the collateral, and the **restrictive covenants**. The board minutes should show authorization for new borrowings, refinancings, and early repayments.

### Recalculation and Cutoff

Interest expense and the related accrual are tested by recalculation. Bear Co. has a \$2,000,000 term loan at 6%, with interest paid monthly in arrears. The auditor recalculates annual interest expense of \$2,000,000 × 6% = \$120,000 and a year-end accrual of one month's interest, \$120,000 ÷ 12 = \$10,000. For bonds issued at a premium or discount, the auditor recalculates the amortization under the effective interest method and confirms the carrying amount at year-end. Cutoff testing makes sure borrowings and repayments near year-end, and interest through the balance sheet date, are recorded in the right period.

### Covenants and Classification

A covenant violation can change the balance sheet. When a borrower violates a covenant and the lender can demand repayment, long-term debt generally must be reclassified as **current** unless the lender has waived its right to demand repayment for more than a year from the balance sheet date, or the agreement allows a grace period and it is probable the violation will be cured within it. A violation can also signal liquidity problems that bear on the going concern evaluation (see [Going Concern](../completing-the-audit-and-reporting/going-concern.md)). The auditor recalculates each covenant ratio from the audited figures rather than relying on management's computation.

**Example.** Grizzly Industries has \$5,000,000 of 5% bonds issued at a discount, with \$500,000 maturing within the next 12 months. The auditor confirms the balance with the bond trustee, recalculates interest and discount amortization, and verifies that the \$500,000 is classified as current. The indenture requires a current ratio of at least 1.5 to 1; the auditor recalculates the ratio from the audited balance sheet as 1.7 to 1, so the covenant is met. The board minutes also show approval of a new \$1,000,000 line of credit, which the auditor traces to the bank confirmation and the debt note.

---

## Equity

### Authorization and Documents

Equity transactions require approval by the board or the shareholders, so **board minutes** are a primary source of evidence. They should show the authorization of stock issuances and repurchases, the declaration of dividends, and stock splits. The **articles of incorporation** show the classes of stock, the number of shares authorized, par or stated value, and the rights of each class.

The auditor vouches stock issuances and treasury stock purchases to the board authorization and the cash receipt or payment. If the company uses an independent **transfer agent and registrar**, the auditor confirms the shares authorized, issued, and outstanding (and dividends paid) directly with the agent. That confirmation is strong evidence from an independent party, and it largely replaces detailed testing of the company's own stock records.

### Retained Earnings and Restrictions

The auditor analyzes the change in retained earnings: net income or loss, dividends declared, prior period adjustments, and any other direct entries (such as the cumulative effect of adopting a new accounting standard). Any entry other than net income and dividends deserves a close look, because it bypasses the income statement. The auditor also looks for restrictions on retained earnings, such as a loan covenant that limits dividends, and makes sure they are disclosed.

**Example.** Cub Entertainment issued 50,000 shares of \$1 par common stock at \$25 per share. The auditor vouches the issuance to the board resolution, traces the \$1,250,000 to the bank statement, confirms the new shares outstanding with the transfer agent, and checks the articles of incorporation to confirm that enough authorized shares were available. The entry agrees:

```journal
Dr. Cash[a] 1,250,000
Cr. Common Stock[e] 50,000
Cr. Additional Paid-in Capital[e] 1,200,000
```

The auditor also reads Cub's loan agreement, which prohibits dividends if retained earnings fall below \$2,000,000, and confirms that the restriction is disclosed.

---

## The Payroll Cycle

Payroll is a recurring, high-volume cash disbursement, so it depends on segregation of duties more than on transaction-by-transaction review.

| Function | Responsibility |
|---|---|
| **Human resources** (authorization) | Approves hiring, terminations, pay rates, and deductions |
| **Timekeeping and payroll** (recording) | Collects approved time records, computes gross pay, deductions, and net pay, and maintains the payroll register |
| **Treasurer** (custody) | Funds the payroll account and releases direct deposits or distributes checks |

The classic payroll fraud is the **ghost employee**: a fictitious name (or a former employee) left on the payroll so that someone can collect the pay. Keeping authorization in human resources, separate from the people who prepare and distribute payroll, is the main defense, because no ghost can be paid without an HR record.

The auditor's procedures follow from that risk:

- **Trace employees on the payroll register to HR files** (hire authorization, approved pay rate) and HR records to the register, to confirm that everyone paid is a real, authorized employee.
- **Recalculate gross pay, withholdings, and net pay** for a sample of employees, and test that payroll taxes were withheld and remitted on time.
- **Use data analytics** over the whole payroll file to find employees who share a bank account or address, employees with no tax withholdings, and payments to people after their termination dates.
- **Apply analytical procedures**, comparing payroll by department and month to headcount, prior periods, and budgets.
- **Observe a payroll distribution** on a surprise basis where employees are still paid by check, requiring each to show identification. With direct deposit now the norm, the data analytics above do much of this work.

**Example.** The auditor of Polar Inc. selects 25 employees from the December payroll register, traces each to an HR hire authorization and approved pay rate, and recalculates gross pay, withholdings, and net pay. A data analytic run over the full year's payroll file finds two employees paid into the same bank account; one turns out to be a former employee whose termination was never processed. The auditor communicates the matter to an appropriate level of management and evaluates its implications as possible fraud.
