# Auditing Cash and Investments

Cash is the most liquid asset an entity owns, which makes it the easiest to steal and one of the easiest balances to manipulate around year-end. Investments raise a different problem: the balance may be easy to confirm, but its fair value can rest on models and judgment. This chapter covers the core cash procedures (confirmation and the bank reconciliation), two cash fraud schemes the exam likes (lapping and kiting), and then the audit of investments in securities, with emphasis on the audit considerations for measuring and disclosing fair value.

---

## Confirming Cash

The auditor confirms cash balances directly with the financial institutions that hold them. For bank deposits and loans, the AICPA's **Standard Form to Confirm Account Balance Information with Financial Institutions** asks the bank to report each deposit balance and each direct loan, with its interest rate, due date, and collateral. Many confirmations are now sent and returned electronically through an intermediary service, which the auditor must evaluate for reliability (see [External Confirmations](../audit-evidence-and-procedures/external-confirmations.md)).

The auditor sends requests to **every bank the client did business with during the year**, including banks where the client closed an account. An account closed in March may have been reopened, and a bank relationship may include a loan the client has not recorded. The standard form does not ask the bank to search its records comprehensively, so the auditor confirms lines of credit, compensating balance arrangements, and guarantees separately, usually with letters addressed to the bank officer responsible for the relationship.

For issuers, PCAOB AS 2310 (effective for fiscal years ending on or after June 15, 2025) **requires** the auditor to confirm cash and cash equivalents held by third parties, or to obtain the same evidence by directly accessing information held by a knowledgeable external source, such as the bank's records. For nonissuers, current AICPA standards (AU-C 505) leave the decision to confirm cash to the auditor's judgment, although confirming bank balances is standard practice. SAS 150 adds an explicit cash confirmation requirement for nonissuers, but it is effective for periods ending on or after December 15, 2028, and is not testable until 2029.

---

## Testing the Bank Reconciliation

The client's year-end bank reconciliation connects the balance the bank reports to the balance in the general ledger. The auditor tests it by:

1. Agreeing the **balance per bank** to the bank confirmation and the **balance per books** to the general ledger.
2. Recalculating the reconciliation.
3. Tracing **outstanding checks** to checks that cleared the bank after year-end, and investigating any that are unusually large or long outstanding.
4. Tracing **deposits in transit** to deposits the bank recorded shortly after year-end. A deposit that takes a week to appear deserves a question.
5. Examining support for any other reconciling items.

The key evidence for steps 3 and 4 is a **cutoff bank statement**: a statement covering a short period after year-end (often 7 to 10 days) that the bank sends **directly to the auditor**. Because it never passes through the client's hands, the client cannot alter it to hide a problem.

**Example.** Kodiak Partners' December 31 bank reconciliation shows a balance per bank of \$425,000, outstanding checks of \$42,000, and a deposit in transit of \$15,000. The auditor agrees \$425,000 to the bank confirmation and recalculates: \$425,000 - \$42,000 + \$15,000 = \$398,000, which agrees with the general ledger. Using the cutoff bank statement through January 10, the auditor confirms that the outstanding checks cleared and that the bank recorded the \$15,000 deposit on January 2.

---

## Cash Fraud Schemes

### Lapping

**Lapping** hides the theft of customer payments by applying later payments to the accounts of earlier customers. An employee at Panda Industries pockets a \$1,000 check from Customer A. When Customer B pays \$1,200, the employee credits \$1,000 of it to Customer A's account. When Customer C pays, part of that payment goes to Customer B, and so on. The shortage never disappears; it just moves from account to account, usually growing over time.

Lapping requires an employee who handles cash receipts and can also post to customer accounts, so the best prevention is segregating those duties. To detect it, the auditor compares the names, dates, and amounts on the **detailed deposit slips** (or the remittance list prepared when mail is opened) with the postings to individual customer accounts. Lapping shows up as payments posted to the wrong customers or posted days after the cash arrived. **Confirming receivables** can also expose it, because customers whose payments were diverted report balances lower than the client's records show.

### Kiting

**Kiting** exploits the float, the days between depositing a check in one bank and that check clearing the bank it was drawn on. Near year-end, an employee at Bear Co. writes a check on Bank A and deposits it in Bank B. If the deposit is recorded before year-end but the disbursement is recorded after year-end, the same cash appears in both accounts on the balance sheet, overstating cash. Kiting can also conceal a shortage in one account.

The auditor's main tool is a **bank transfer schedule**, which lists every transfer between the client's accounts in the days around year-end, with the dates each side was recorded in the books and cleared each bank.

| Transfer | Disbursement recorded in books | Cleared Bank A | Receipt recorded in books | Cleared Bank B | Problem? |
|---|---|---|---|---|---|
| #1 | 12/30 | 1/3 | 12/30 | 1/2 | No, both sides recorded in December |
| #2 | **1/3** | 1/5 | **12/31** | 1/4 | **Yes, receipt recorded before the disbursement** |
| #3 | 12/29 | 1/2 | 12/29 | 1/3 | No, both sides recorded in December |

Transfer #2 is the warning sign. Bear Co. recorded the deposit in Bank B on December 31 but did not record the matching disbursement from Bank A until January 3, so the transferred amount is counted twice in year-end cash.

---

## Investments in Securities

### Existence, Rights, and Classification

Most securities are held by a broker, bank, or trustee, so the auditor **confirms** the holdings with the custodian: a description and quantity of each security, and whether any are pledged or restricted. Securities the client holds itself are **inspected**, and the inspection takes place at the same time as the cash count (or with all liquid assets under the auditor's control). Otherwise an employee could use cash to cover missing securities, or securities to cover missing cash, by moving them between counts.

Classification drives the accounting, so the auditor gathers evidence about management's intent. A debt security can be carried at amortized cost as held-to-maturity only if the entity has the positive intent and ability to hold it to maturity. The auditor looks for support in investment committee minutes and the entity's history of holding (or selling) such securities, and obtains a written representation about intent. The auditor also evaluates management's assessment of credit losses on debt securities, and for equity method investments obtains the investee's financial statements (preferably audited) to test the entity's share of earnings.

### Fair Value: Audit Considerations

Fair value is an accounting estimate, so the approaches from [Auditing Accounting Estimates](./auditing-accounting-estimates.md) apply. What changes from one security to the next is how much judgment the measurement involves, and the fair value hierarchy is a good guide to the risk.

- **Level 1 (quoted prices in active markets).** The risk is low. The auditor agrees the prices to an independent source as of the measurement date, such as the closing exchange price on December 31, and recalculates quantity times price.
- **Level 2 (observable inputs other than quoted prices).** Many securities, such as corporate bonds, are priced by a **pricing service** or a broker. The auditor obtains an understanding of the service's methods and inputs, considers whether a broker quote is a binding offer or only an indication, and often compares a sample of prices to a second independent source.
- **Level 3 (unobservable inputs).** The value comes from a model, such as discounted cash flows for a private company investment. The auditor tests management's method, significant assumptions (such as the discount rate and projected cash flows), and data, or develops an independent estimate. A valuation specialist is often involved. Because small changes in assumptions can move the value a great deal, the auditor pays close attention to sensitivity and to bias.

The auditor's responsibility is to evaluate fair value **as of the measurement date**, using conditions that existed at that date. The auditor is not responsible for predicting future market moves. A market decline in February does not make a December 31 fair value wrong, although a significant decline may call for a subsequent events disclosure.

Disclosure is part of the measurement, not an afterthought. The auditor checks that the notes present the level of the hierarchy for each class of securities, the valuation techniques and significant inputs for Level 2 and Level 3 measurements, and (for Level 3) a reconciliation of the opening and closing balances.

### Example: Grizzly Industries' Portfolio

Grizzly Industries holds listed equity securities, corporate bonds, and a minority stake in a private company. The auditor:

- Confirms the listed securities and bonds with the brokerage firm and confirms the private company shares with the investee.
- Agrees the year-end prices of the listed equities (Level 1) to closing exchange prices.
- Obtains an understanding of how the pricing service values the corporate bonds (Level 2) and compares a sample of its prices to a second pricing source.
- Engages a valuation specialist to evaluate the discounted cash flow model for the private company stake (Level 3), tests the projected cash flows against the investee's budgets and history, and compares the discount rate to rates for similar companies.
- Notes that a comparable private company was sold in January at a price consistent with Grizzly's valuation, which corroborates the year-end amount.
- Reviews the fair value disclosures, including the Level 3 reconciliation.
