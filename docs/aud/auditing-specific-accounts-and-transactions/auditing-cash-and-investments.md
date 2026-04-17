# Auditing Cash and Investments

Cash is the most liquid asset and therefore the most susceptible to theft and manipulation. The audit of cash focuses on confirming balances, testing reconciliations, and detecting fraud schemes such as lapping and kiting. The investment cycle requires verification of existence, valuation, and proper disclosure.

## Cash Cycle

### Lapping

**Lapping** is a fraud scheme in which an employee conceals the theft of cash receipts by applying a subsequent customer's payment to the account of the customer whose payment was stolen.

#### How Lapping Works

1. An employee at MSA Records receives a \$1,000 payment from Customer A and pockets the cash.
2. When Customer B sends a \$1,200 payment, the employee applies \$1,000 of it to Customer A's account to hide the shortage.
3. When Customer C pays, the employee applies part of that payment to Customer B's account.
4. This cycle continues indefinitely, with the employee constantly "robbing Peter to pay Paul."

:::warning

Lapping becomes increasingly difficult to conceal over time because the employee must continuously redirect payments. The accounts are always partially out of date, and the total shortage grows.

:::

#### Detecting Lapping

| Detection Method | How It Works |
|---|---|
| **Confirming receivables directly with customers** | Customers report balances that differ from the client's records |
| **Comparing cash receipts listing (remittance advice) to deposits and AR postings** | Delays between receipt and posting become visible |
| **Surprise cash counts** | Unexpected counts may reveal cash on hand that should have been deposited |
| **Segregation of duties** | Ensuring the person who opens mail and lists cash receipts is not the same person who posts to AR |

### Kiting

**Kiting** is a fraud scheme that exploits the time lag (float) between depositing a check and the check clearing the bank. The perpetrator transfers funds between bank accounts to conceal a cash shortage or to inflate cash balances at the reporting date.

#### How Kiting Works

1. Near year-end, an employee at Illini Entertainment writes a check from Bank Account A to Bank Account B.
2. The deposit into Bank B is recorded before year-end, but the disbursement from Bank A is not recorded until after year-end.
3. This makes it appear that cash exists in **both** accounts simultaneously, overstating the total cash balance.

:::info[Bank Transfer Schedule]

The primary tool for detecting kiting is a **bank transfer schedule**. This schedule lists all interbank transfers made around year-end and shows:
- Date the check was recorded as a **disbursement** in the books
- Date the check **cleared** Bank A (the paying bank)
- Date the deposit was recorded as a **receipt** in the books
- Date the deposit **cleared** Bank B (the receiving bank)

If the receipt is recorded before year-end but the corresponding disbursement is recorded after year-end, kiting may be occurring.

:::

#### Example: Bank Transfer Schedule at Gies Co.

| Transfer | Book Disbursement Date | Bank A Clear Date | Book Receipt Date | Bank B Clear Date | Potential Issue? |
|---|---|---|---|---|---|
| #1 | 12/30 | 1/3 | 12/30 | 1/2 | No – both sides recorded in same period |
| #2 | **1/3** | 1/5 | **12/31** | 1/4 | **Yes – receipt recorded before disbursement (kiting indicator)** |
| #3 | 12/29 | 1/2 | 12/29 | 1/3 | No – both sides recorded in same period |

Transfer #2 is suspicious because the cash was recorded as received in Bank B on 12/31, but the corresponding disbursement from Bank A was not recorded until 1/3—inflating cash at year-end.

## Primary Cash Audit Procedures

### Bank Confirmations

The auditor sends a **standard bank confirmation** (also known as a Standard Form to Confirm Account Balance Information with Financial Institutions) directly to each bank the client uses. The confirmation requests:
- Account balances at a specified date
- Loan balances outstanding
- Interest rates and collateral
- Other arrangements (lines of credit, contingent liabilities)

:::tip

Bank confirmations are sent to **all banks** the client has done business with during the period, including banks where accounts may have been closed. This helps detect undisclosed accounts or borrowings.

:::

### Bank Reconciliation Testing

The auditor tests the client's bank reconciliation to verify the reported cash balance. Key steps include:

1. **Obtain the bank statement and reconciliation** for the period end
2. **Trace the balance per bank** to the bank confirmation
3. **Trace the balance per books** to the general ledger
4. **Test outstanding checks** – verify they cleared in the subsequent period; investigate long-outstanding checks
5. **Test deposits in transit** – verify they cleared the bank shortly after year-end
6. **Verify reconciling items** – examine other adjustments for validity
7. **Request a cutoff bank statement** – obtain a bank statement for a period (typically 7–10 days) after year-end to test subsequent clearing of outstanding items

### Example: Bank Reconciliation at BIF Partners

The auditor of BIF Partners receives the December 31 bank reconciliation. The bank confirmation shows a balance of \$425,000. The books show \$398,000. Outstanding checks total \$42,000 and deposits in transit total \$15,000. The auditor verifies: \$425,000 − \$42,000 + \$15,000 = \$398,000 ✓. The auditor then obtains a cutoff bank statement through January 10 to confirm that the outstanding checks cleared and the deposit in transit was received by the bank.

## Investment Cycle

### Confirmation of Securities

For investments held by third-party custodians (brokers, banks, trust companies), the auditor sends **confirmations** requesting:
- Description and quantity of securities held
- Whether securities are pledged as collateral
- Any restrictions on the investments

### Physical Inspection

If the client holds investment securities on its premises, the auditor should **physically inspect** them simultaneously with the cash count. This prevents an employee from using securities to cover a cash shortage (or vice versa).

:::note

All liquid assets—cash, securities, negotiable instruments—should be counted **simultaneously** or placed under the auditor's control to prevent substitution.

:::

### Evaluation of Disclosures

The auditor verifies that investment disclosures comply with applicable standards, including:
- Classification (trading, available-for-sale, held-to-maturity, equity method)
- Fair value measurement methodology (Level 1, 2, or 3 inputs)
- Unrealized gains and losses
- Impairment considerations
- Concentrations and related risks

### Example: Investments at Kingfisher Industries

Kingfisher Industries holds a portfolio of equity securities and corporate bonds. The auditor confirms the holdings with the brokerage firm, verifies fair values using independent pricing sources, and reviews the financial statement disclosures for proper classification and measurement under ASC 320/321.

## Auditing Fair Values

:::warning[Important Distinction]

The auditor is responsible for obtaining **sufficient appropriate audit evidence** that fair value measurements and disclosures are reasonable and in conformity with the applicable financial reporting framework. However, the auditor is **not responsible for predicting future conditions, transactions, or events** that might affect fair values.

:::

When auditing fair values, the auditor may:
- **Test management's process** for determining fair values
- **Develop an independent estimate** of fair value for comparison
- **Review subsequent events** that confirm or contradict the fair value estimate
- **Evaluate the reasonableness of significant assumptions** used by management
- **Assess the work of a specialist** engaged by management to determine fair values (e.g., an appraiser)

### Example: Fair Value at MAS Inc.

MAS Inc. holds Level 3 investments (valued using unobservable inputs). The auditor reviews management's valuation model, tests the key assumptions (discount rate, growth projections), develops an independent estimate using alternative assumptions, and evaluates whether subsequent events (such as a sale of similar assets in January) corroborate the year-end fair value.

## Summary

| Area | Key Procedures | Primary Assertions |
|---|---|---|
| Cash | Bank confirmations, reconciliation testing, cutoff bank statement, bank transfer schedule | Existence, Completeness, Valuation |
| Lapping Detection | Confirmations, comparing receipts to postings, surprise counts | Existence, Valuation |
| Kiting Detection | Bank transfer schedule around year-end | Existence, Cutoff |
| Investments | Confirmations, physical inspection, fair value testing | Existence, Valuation, Disclosure |
