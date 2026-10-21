# Tests of Controls

Once the auditor understands an entity's internal control and has identified the controls that address the risks of material misstatement, the next decision is whether to **test** them. A test of controls asks a simple question: did this control actually work, consistently, throughout the period? The answer drives the auditor's assessment of **control risk** and therefore how much substantive testing is needed. This chapter covers when tests of controls are required, the procedures used, how deviations are evaluated, timing and the use of evidence from prior audits, and dual-purpose tests. The AICPA standard is AU-C 330; the PCAOB standards are AS 2301 and, in an integrated audit, AS 2201.

Testing controls is different from understanding them. During risk assessment, the auditor evaluates the **design** of relevant controls and determines whether they have been **implemented** (see [Risk Assessment Procedures](../audit-planning-and-risk-assessment/risk-assessment-procedures.md)). That tells the auditor a control exists and could work. Only a test of **operating effectiveness** shows that it did work over the period.

---

## When Tests of Controls Are Required

| Situation | Why Testing Is Required |
|---|---|
| **The auditor plans to rely on controls** | If the risk assessment assumes controls operate effectively, so that substantive testing can be reduced, the auditor must test them to support that assumption |
| **Substantive procedures alone cannot provide sufficient evidence** | In highly automated processes with little or no paper trail, evidence about the amounts may exist only if the controls over processing are effective |
| **Integrated audit of an issuer** | When an issuer's auditor must report on internal control over financial reporting under SOX Section 404(b), AS 2201 requires testing controls to support that opinion |

Otherwise, testing controls is a choice. The auditor may decide that a **substantive approach** is more efficient, for example when there are few, large transactions. In that case, control risk is assessed at the **maximum**, so the risk of material misstatement equals inherent risk, and substantive procedures carry the full load.

**Example:** Bear Co. requires two authorized signatures on every disbursement over \$10,000, a control that addresses the **occurrence** of recorded expenses (that only authorized, legitimate payments are made). To test it, the auditor selects a sample of disbursements over \$10,000 and inspects them for both signatures.

---

## Procedures Used to Test Controls

### Inquiry

**Inquiry** means asking the people who perform or oversee a control how it works, how consistently it is applied, and what happens when exceptions occur. It is a useful starting point, but **inquiry alone is never sufficient** to test operating effectiveness.

**Example:** Grizzly Inc.'s accounts payable clerk explains in detail how she matches each invoice to the purchase order and receiving report before approving payment. The explanation is helpful but is not evidence that she actually does it.

### Observation

**Observation** means watching the control being performed. It is good evidence for the moment observed and weak evidence for any other time, because people tend to follow procedures more carefully when the auditor is watching.

**Example:** The auditor watches Polar Inc.'s warehouse supervisor count an incoming shipment and compare it to the packing slip before signing the receiving report. That shows the control operated on the day of the visit.

### Inspection

**Inspection** means examining documents or records for evidence that the control was performed, such as signatures, initials, or electronic approvals. It is the most practical test for controls that leave a **documentary trail**.

**Example:** The auditor selects journal entries at Kodiak Partners and inspects each for evidence of supervisory approval in the accounting system.

### Reperformance

**Reperformance** means the auditor independently executes the control to see whether it produces the right result. It provides the **strongest evidence** of operating effectiveness.

**Example:** Cub Entertainment's sales system is supposed to reject orders that exceed a customer's credit limit. The auditor enters test transactions over the limit and confirms that the system rejects them.

| Procedure | Strength of Evidence | Best Used For |
|---|---|---|
| **Inquiry** | Weakest; never sufficient alone | Understanding the control; always combined with another procedure |
| **Observation** | Moderate; point in time only | Controls that leave no documentation, such as physical controls |
| **Inspection** | Strong | Controls that leave evidence (signatures, approvals, reviewed reconciliations) |
| **Reperformance** | Strongest | Calculations, reconciliations, and automated controls |

**Automated controls** behave consistently unless the program changes. So if the IT general controls over program changes and access are effective, testing a single operation of an automated control can provide sufficient evidence for the whole period. If the ITGCs are deficient, that conclusion does not hold.

---

## Evaluating Operating Effectiveness and Deviations

The auditor evaluates how the control was applied at relevant times during the period, how **consistently** it was applied, **by whom**, and **by what means**. For a control that operates on every transaction (an approval), the auditor tests a sample of transactions. For a periodic control (a monthly reconciliation), the auditor tests a sample of the periods.

A **deviation** occurs when the control was not performed as designed. When deviations are found, the auditor:

1. Determines their **nature and cause** (an isolated lapse, a misunderstanding, or deliberate circumvention)
2. Compares the **sample deviation rate** with the **tolerable rate** set during planning, considering sampling risk
3. Decides whether the control can still be relied on and what that means for control risk
4. Evaluates whether the deviations indicate a **control deficiency**, and if so, how severe it is (see [Misstatements and Internal Control Deficiencies](../completing-the-audit-and-reporting/misstatements-and-internal-control-deficiencies.md))

**Example:** The auditor selects 40 purchase orders at Sloth Security and tests whether each was approved by an authorized manager before ordering. Three lack approval, a sample deviation rate of 7.5% (3 ÷ 40). The tolerable rate is 5%. Because the sample rate already exceeds the tolerable rate, the auditor cannot rely on the control as planned, even though all three were small supply orders. Control risk for the related assertions goes up, substantive testing is expanded, and the deviations are evaluated as a possible control deficiency.

The statistics behind sample sizes and deviation rates (attribute sampling) are covered in the [Sampling for Tests of Controls](../audit-sampling/sampling-for-tests-of-controls.md) chapter.

---

## Timing of Tests of Controls

### Testing at an Interim Date

The auditor may test controls at an **interim date** and then decide what additional evidence is needed for the **remaining period** to year-end. The factors include the significance of the assessed risks, the controls tested and the results, the length of the remaining period, any changes in controls since the interim date, and whether substantive procedures will cover the remaining period.

### Using Evidence From Prior Audits

The AICPA and PCAOB standards differ here, and the exam tests the difference.

Under **AICPA standards (AU-C 330)**, the auditor may use evidence about operating effectiveness obtained in a prior audit, but only after confirming that the control has **not changed**. That confirmation requires inquiry combined with observation or inspection. If the control has changed, it must be tested in the current audit. If it has not changed, the auditor must still test it **at least once every third audit** and should test some controls in each audit. Controls that address a **significant risk** must be tested in the current period.

Under **PCAOB standards**, there is no three-year rotation. The auditor obtains evidence each year about the controls it relies on, although knowledge from prior audits can reduce the amount of testing needed.

---

## Using the Results: Control Risk and Substantive Testing

Under SAS 145, the auditor assesses inherent risk and control risk **separately**. The results of tests of controls set control risk, and control risk and the needed amount of substantive testing move in the same direction: the more effective the controls, the lower the control risk and the less substantive work is needed.

| Test Results | Assessed Control Risk | Effect on Substantive Procedures |
|---|---|---|
| Controls operated effectively, with deviations within the tolerable rate | Below maximum | May be reduced in nature, timing, or extent |
| Deviations exceed the tolerable rate, or controls did not operate effectively | Maximum (or close to it) | Expanded to compensate |
| Controls not tested (substantive approach) | Maximum | Full substantive procedures; RMM equals inherent risk |

**Example:** The auditor tests Bear Co.'s three-way match (purchase order, receiving report, and vendor invoice) on a sample of 50 purchases and finds no deviations. Control risk for the occurrence of purchases and existence of accounts payable is assessed as low, so the auditor vouches a smaller sample of recorded disbursements than it otherwise would.

Even with excellent controls, substantive procedures can be reduced but never eliminated for material classes of transactions, account balances, and disclosures. The [Risk Assessment Procedures](../audit-planning-and-risk-assessment/risk-assessment-procedures.md) chapter shows how control risk fits into the audit risk model.

---

## Dual-Purpose Tests

A **dual-purpose test** uses the same sample of transactions for a test of controls and a substantive test of details at the same time. It is efficient, and it is common in practice.

**Example:** The auditor selects 50 sales invoices at Panda Industries. For each one, the auditor:

- **Tests the control:** inspects for evidence that a supervisor approved the customer's credit before shipment
- **Tests the details:** agrees the invoice amount, date, and customer to the shipping document and customer order

Two rules apply. The sample must be large enough for **both** objectives. And the results must be **evaluated separately**: a missing credit approval is a control deviation, while a wrong price is a monetary misstatement. One can occur without the other, and they have different consequences. If the control test reveals deviations, the auditor also reconsiders whether the planned substantive testing is still enough.

---

## Summary

| Topic | Key Point |
|---|---|
| **Purpose** | Evidence that controls operated effectively throughout the period of reliance |
| **When required** | Planned reliance on controls; substantive procedures alone insufficient; integrated audit of an issuer |
| **Procedures** | Inquiry (never alone), observation, inspection, reperformance (strongest) |
| **Deviations** | Compare the sample rate with the tolerable rate; consider cause; evaluate as a possible deficiency |
| **Prior-year evidence** | AICPA: allowed if unchanged, test at least every third audit, significant-risk controls every year; PCAOB: no rotation |
| **Effect on substantive work** | Effective controls reduce, but never eliminate, substantive procedures |
| **Dual-purpose tests** | One sample, two objectives; evaluate deviations and misstatements separately |
