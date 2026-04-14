# Auditing Receivables and Revenue

The revenue cycle is one of the most critical areas of the audit because revenue recognition is a presumed fraud risk under auditing standards. Understanding the flow of transactions—from sales order through cash collection—is essential for designing effective audit procedures.

## Revenue Cycle Overview

The revenue cycle involves several key departments, each with distinct responsibilities that provide internal controls through segregation of duties.

### Departments and Responsibilities

| Department | Key Responsibilities |
|---|---|
| **Sales Order** | Receives customer orders, prepares sales orders, and initiates the transaction |
| **Credit Approval** | Evaluates customer creditworthiness and authorizes credit sales before goods are shipped |
| **Shipping** | Ships goods to the customer and prepares the **bill of lading** (shipping document proving goods left the warehouse) |
| **Billing/Invoicing** | Prepares and sends invoices to customers based on shipping documents and approved sales orders |
| **Accounts Receivable** | Maintains the subsidiary ledger of customer balances |
| **General Accounting** | Records transactions in the general ledger and reconciles subsidiary ledgers |
| **Cashier/Mail Room** | Receives and deposits customer payments; prepares the **cash receipts listing** (remittance list) |

:::info Cash Receipts Flow

When cash is received, a **cash receipts listing** (also called a remittance listing or prelist) is prepared and distributed to three areas:
1. **Cashier** – deposits funds intact daily
2. **Accounts Receivable** – posts payments to customer accounts in the subsidiary ledger
3. **General Accounting** – records the deposit in the general ledger and reconciles

This three-way distribution ensures no single individual can both handle cash and record the transaction.

:::
### Example: Revenue Cycle at Gies Co.

Gies Co. receives an order from a customer. The **sales order department** enters the order and routes it to **credit approval**, which checks the customer's credit history and limit. Once approved, the **shipping department** packages and ships the goods, generating a bill of lading. The **billing department** then matches the approved sales order with the shipping document and sends an invoice. When payment arrives, the **mail room** prepares a cash receipts listing and forwards it to the cashier, accounts receivable, and general accounting.

## Credit Loss Write-Off Approval

:::warning

Write-offs of uncollectible accounts should be approved by the **treasurer's department** (or an officer independent of the accounts receivable and cash receipts functions). This segregation prevents employees who handle cash from concealing theft by writing off legitimate receivables.

:::
For example, at MAS Inc., the accounts receivable clerk identifies a delinquent account. The clerk prepares a write-off memorandum, but only the **treasurer** has authority to approve the actual write-off. This control prevents the AR clerk from writing off an account and pocketing subsequent payments.

## Accounts Receivable Confirmations

Confirmations are a primary substantive procedure for verifying the existence and accuracy of receivable balances. The auditor sends requests directly to customers asking them to verify amounts owed.

### Types of Confirmations

| Type | Description | Best Used When |
|---|---|---|
| **Positive Confirmation** | Asks the customer to respond whether they agree or disagree with the stated balance | Combined assessed risk of material misstatement is **high**; large individual balances; accounts in dispute |
| **Negative Confirmation** | Asks the customer to respond **only if they disagree** with the stated balance | Combined assessed risk of material misstatement is **low**; large number of small, homogeneous balances; low expected exception rate; no reason to believe recipients will disregard the request |
| **Blank (Open) Confirmation** | A type of positive confirmation that does **not** state the balance—asks the customer to fill in the amount or provide details | Provides stronger evidence because the customer must look up the balance independently rather than simply agreeing |

:::tip Exam Tip

Blank confirmations are considered the **most reliable** form because the customer cannot simply agree without verifying. However, response rates tend to be lower because they require more effort from the respondent.

:::
### Example: Confirmations at BIF Partners

The auditor of BIF Partners selects a sample of receivable balances for confirmation:
- **Large balances** from Kingfisher Industries and Illini Entertainment receive **positive confirmations** because of the material amounts involved.
- A large pool of **small retail customer balances** receives **negative confirmations** because the individual amounts are immaterial, internal controls are strong, and the accounts are expected to be largely correct.
- One disputed balance from MSA Records receives a **blank confirmation** to obtain the customer's independent calculation of the amount owed.

## Common Revenue Cycle Audit Procedures

### 1. Tracing Shipping Documents to the Sales Journal

The auditor selects a sample of **shipping documents** (bills of lading) and traces them forward to the sales journal to test for **completeness**—ensuring all shipments were recorded as sales.

:::note Direction of Testing

- **Tracing** (from source document → journal) tests **completeness** (Did we record everything that happened?)
- **Vouching** (from journal → source document) tests **existence/occurrence** (Did a transaction really happen?)

:::
### 2. Vouching Sales Journal Entries to Supporting Documents

The auditor selects entries from the **sales journal** and vouches them back to shipping documents, sales orders, and customer purchase orders to verify that recorded sales actually occurred.

### 3. Cutoff Testing

The auditor examines transactions recorded near the **period end** to ensure revenue is recorded in the correct accounting period. This involves:
- Examining the **last few shipping documents** before and after year-end
- Comparing shipping dates to the dates sales were recorded
- Reviewing credit memos issued after year-end

For example, if Illini Security shipped goods on January 2 but recorded the sale on December 30, revenue would be overstated in the current period.

### 4. Accounts Receivable Confirmations

As discussed above, the auditor sends confirmations directly to customers to verify account balances exist and are accurately stated.

### 5. Allowance for Credit Losses Testing

The auditor evaluates management's estimate of the allowance for doubtful accounts by:
- Reviewing the **aging schedule** of accounts receivable
- Evaluating historical collection rates
- Considering current economic conditions
- Examining subsequent cash collections (payments received after year-end)
- Testing the accuracy of the aging categories by vouching individual invoices

### 6. Disclosure Review

The auditor verifies that financial statement disclosures related to revenue and receivables are complete and accurate, including:
- Revenue recognition policies
- Pledged or assigned receivables
- Related party receivables
- Concentrations of credit risk
- Allowance methodology

:::danger Common Pitfall

Revenue is a **presumed fraud risk** under AU-C 240 / AS 2401. The auditor must always consider the risk that revenue is fictitious or recorded in the wrong period, even if no specific fraud risk factors are identified. This presumption can be rebutted, but only with documented justification.

:::
## Summary

| Procedure | Primary Assertion Tested |
|---|---|
| Trace shipping docs → sales journal | Completeness |
| Vouch sales journal → shipping docs | Occurrence/Existence |
| Cutoff testing | Cutoff (Period) |
| AR confirmations | Existence, Rights, Valuation |
| Allowance testing | Valuation |
| Disclosure review | Presentation and Disclosure |
