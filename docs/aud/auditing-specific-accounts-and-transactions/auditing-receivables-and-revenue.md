# Auditing Receivables and Revenue

Revenue is usually the largest number on the income statement and the one management is most tempted to inflate, which is why auditing standards presume a risk of fraud in revenue recognition. Receivables travel with revenue: a fictitious sale leaves behind a fictitious receivable. This chapter starts with the controls in the revenue cycle, then explains the fraud presumption and the substantive procedures that respond to it: tests in both directions, cutoff, confirmation of receivables, and evaluation of the allowance for credit losses.

---

## Controls in the Revenue Cycle

A well-controlled revenue cycle splits the work so that no one person can both create a sale and hide its effects.

| Function | Responsibility |
|---|---|
| **Sales order** | Receives the customer's order and prepares a sales order |
| **Credit approval** | Approves credit before goods are shipped |
| **Shipping** | Ships only approved orders and prepares the **bill of lading** (the shipping document) |
| **Billing** | Invoices the customer by matching the sales order to the shipping document |
| **Accounts receivable** | Maintains the subsidiary ledger of customer balances |
| **Cash receipts** | Opens the mail and prepares a **remittance list** of payments received |
| **General accounting** | Posts to the general ledger and reconciles it to the subsidiary ledger |

When payments arrive, the person opening the mail lists them on the remittance list. The checks go to the cashier for deposit intact each day, a copy of the list goes to accounts receivable for posting to customer accounts, and another copy goes to general accounting to compare against the deposit. Because the person who handles the cash never records it, a theft would show up as a difference between the deposit and the postings. Without this split, an employee could steal payments and hide the theft by lapping (see [Auditing Cash and Investments](./auditing-cash-and-investments.md)).

The same logic applies to write-offs. Writing off an uncollectible account should be approved by someone independent of both cash receipts and accounts receivable, typically in the treasurer's office. Otherwise an accounts receivable clerk at Polar Inc. could write off a customer's balance, then pocket the customer's payment when it arrives, and no one would notice the missing cash.

---

## Revenue Is a Presumed Fraud Risk

Under AU-C 240 (AICPA) and AS 2401 (PCAOB), the auditor presumes that there are **risks of material misstatement due to fraud in revenue recognition**. The auditor identifies which types of revenue, transactions, or assertions give rise to that risk. Common schemes include recording fictitious sales, recognizing revenue before control transfers to the customer, bill-and-hold arrangements that do not meet the criteria, and side agreements that give customers rights of return the contract does not show. The presumption can be overcome, for example when an entity has a single, simple type of revenue such as rent from one property, but the auditor must document the reasons.

The response typically combines several procedures: confirming contract terms (including the absence of side agreements) with customers, testing cutoff, examining credit memos and returns recorded after year-end, and analytical procedures such as revenue by month, gross margin, and days sales outstanding. A spike in revenue in the last week of the year, followed by heavy returns in January, is the pattern to look for.

---

## Testing in Both Directions

The direction of a test determines which assertion it addresses.

- **Vouching** starts with a recorded entry and works back to the source documents. Selecting sales from the sales journal and examining the related customer orders and shipping documents tests **occurrence**: did the recorded sale really happen?
- **Tracing** starts with source documents and works forward to the records. Selecting bills of lading from the shipping department's file and tracing them to the sales journal tests **completeness**: was every shipment recorded?

:::tip[Exam Tip]

Ask where the sample came from. A sample drawn from the **journal or ledger** can only test whether recorded items are valid (occurrence or existence). A sample drawn from **source documents** outside the accounting records can test whether anything was left out (completeness).

:::

---

## Cutoff

Cutoff testing checks that sales near year-end are recorded in the right period. Under ASC 606, revenue from selling goods is recognized when control passes to the customer, which for shipped goods often depends on the shipping terms: FOB shipping point usually transfers control at shipment, and FOB destination at delivery. The auditor examines shipping documents for the last few days before and the first few days after year-end and compares them to the dates and terms of the recorded sales. The auditor also reviews credit memos and returns recorded after year-end, since a large return in January may reveal a December sale that should not have been recorded.

If Cub Entertainment shipped goods FOB shipping point on January 2 but recorded the sale on December 30, revenue and receivables are overstated at year-end.

---

## Confirming Receivables

Confirmation sends a request directly to the customer and asks the customer to respond directly to the auditor. It is strong evidence that a receivable **exists**, because it comes from an independent outside party. It is weaker evidence of **valuation**: a customer may confirm that it owes \$50,000 and still be unable to pay.

### When Confirmation Is Expected

The two standard setters both expect receivables to be confirmed, but they frame the rule differently.

**Nonissuers (AICPA).** AU-C 330 presumes that the auditor will use external confirmation procedures for accounts receivable. The auditor may skip confirmation only when one of three conditions applies:

1. The overall account balance is immaterial.
2. Confirmation would be ineffective (for example, the customers are known not to respond).
3. The assessed risk of material misstatement is low, and other planned substantive procedures address that risk.

An auditor who does not confirm must document how the presumption was overcome.

**Issuers (PCAOB).** AS 2310 requires the auditor to confirm receivables or to obtain the evidence by **directly accessing** information held by a knowledgeable external source. If neither is feasible, the auditor performs other substantive procedures, including tests of details that obtain external evidence indirectly, such as examining subsequent cash receipts. When a significant risk involves receivables and the auditor neither confirmed nor used direct access, the auditor must tell the audit committee.

### Positive, Negative, and Blank Requests

| Type | What it asks | When it fits |
|---|---|---|
| **Positive** | The customer replies in every case, agreeing or disagreeing with the stated balance | Large balances, higher assessed risk, or reason to expect disputes |
| **Blank (a form of positive request)** | The customer fills in the balance without being told the client's amount | When the auditor wants to avoid customers signing without checking; more reliable, but response rates are lower |
| **Negative** | The customer replies only if it disagrees | Many small, similar balances where little misstatement is expected |

Silence is weak evidence, so negative requests come with limits. Under AICPA standards, negative confirmations may be the **only** substantive procedure for an assertion only when all of these are true: the risk of material misstatement is assessed as low and the auditor has evidence that relevant controls operate effectively; the population consists of a large number of small, homogeneous balances; a very low exception rate is expected; and the auditor has no reason to believe recipients will ignore the request. Under PCAOB AS 2310, negative confirmations are **never sufficient on their own**; they provide evidence only when combined with other substantive procedures.

**Example.** The auditor of Kodiak Partners sends **positive** requests to its largest customers, Grizzly Industries and Cub Entertainment, because their balances are material. For several thousand small retail accounts, controls are effective and few errors are expected, so the auditor sends **negative** requests and, because Kodiak Partners is a nonissuer meeting all four conditions, may rely on them for that group.

Exceptions, nonresponses, and the alternative procedures that replace a missing reply (such as tracing subsequent cash receipts to the bank, or examining the sales invoice and shipping document) are covered in [External Confirmations](../audit-evidence-and-procedures/external-confirmations.md).

---

## The Allowance for Credit Losses

The allowance is an accounting estimate, so the approaches in [Auditing Accounting Estimates](./auditing-accounting-estimates.md) apply. Typical procedures include:

- Testing the **aging schedule** by recalculating it and vouching a sample of invoices to confirm they sit in the right age category.
- Examining **cash collected after year-end**, which is direct evidence that a balance was collectible.
- Evaluating management's loss rates against the entity's collection history and its forecast of economic conditions, as the current expected credit loss model requires.
- Reviewing large past-due accounts with the credit manager and reading the customers' credit files.
- Comparing last year's allowance to the write-offs that actually followed.

---

## Presentation and Disclosure

The auditor also checks that the notes and the balance sheet tell users what they need to know: receivables that have been **pledged, factored, or sold** (which also bear on the rights assertion), receivables from related parties, concentrations of credit risk, the entity's revenue recognition policies, and the disaggregation of revenue and contract balances required by ASC 606.
