# Reliability of Data and Information

Most audit evidence today begins life as data in a client's system: an aging report, a payroll register, a query result, a reconciliation produced by automation software. An elegant regression model or a full-population match still leads to the wrong conclusion if the data underneath it is incomplete, inaccurate, or manipulated. So before relying on data or information, the auditor performs procedures to validate it. This chapter covers the four attributes of reliable data, how the source affects reliability, the specific validation procedures the blueprint names (agreeing information to original sources and validating query criteria), the role of IT general controls, and information generated using technologies such as artificial intelligence.

The 2027 blueprint task reads: perform procedures to validate the reliability (completeness, accuracy, authenticity, and susceptibility to management bias) of data and information from internal and external sources, with examples that include "analyses, schedules or reconciliations generated using various technologies including artificial intelligence." The 2026 task already included artificial intelligence, so only the wording of the example changed.

---

## Attributes of Reliable Data

| Attribute | Meaning | What the Auditor Asks |
|---|---|---|
| **Completeness** | The data includes all transactions or items for the relevant period or population | Are records missing? Does the date range cover the whole period? Are there sequence gaps? |
| **Accuracy** | Amounts, dates, descriptions, and classifications match the underlying events | Do totals agree to the source system? Do sample items agree to original documents? |
| **Authenticity** | The data is what it claims to be and has not been fabricated or altered | Can the data be traced to its origin? Are there audit trails and access controls? |
| **Susceptibility to management bias** | The degree to which management could influence the data, intentionally or not | Who selected or filtered the data? Could records have been adjusted or excluded? |

Management bias is often the hardest attribute to evaluate because it can be subtle. Suppose management gives the auditor an extract of "active" customer accounts. The auditor cannot assume the filter did not also drop accounts with disputed balances. The question to ask is whether management had both the **opportunity and the incentive** to shape the data.

---

## Internal vs. External Sources

The source of data strongly affects how much testing it needs.

| Factor | Internal Source | External Source |
|---|---|---|
| **Examples** | General ledger extracts, subledger reports, ERP transaction files, management-prepared schedules | Bank statements, confirmations, government databases, market price feeds, credit agency reports |
| **Independence from management** | Low: management controls the systems that produce it | High: produced by parties independent of the entity |
| **General reliability** | Lower, unless supported by effective controls | Higher, because of that independence |
| **Typical auditor procedures** | Test IT general controls, reconcile to control totals, agree samples to source documents | Consider the source's reputation, check for interception or alteration, obtain it directly where possible |

**Example:** To evaluate Bear Co.'s allowance for doubtful accounts, the auditor needs the receivables aging report. Management exports it from the ERP system. The auditor reconciles its total to the general ledger, agrees a sample of invoices to sales orders and shipping documents (including the aging buckets), and relies on tested IT general controls over the billing module. A credit report on Bear Co.'s largest customer, obtained by the auditor directly from a credit agency, needs much less testing because management did not produce it.

External information that **reaches the auditor through the company** is a middle case. A price file or bank data that the company downloads and hands over could have been altered along the way. PCAOB amendments to AS 1105, effective for fiscal years beginning on or after December 15, 2025, specify the auditor's responsibilities here: the auditor understands where the information came from and how the company received and processed it, and then either tests the controls over that process or tests the information itself, for example by obtaining it directly from the source.

---

## Procedures to Validate Reliability

### Agreeing Information to Original Sources

The most direct procedure is to select items from the data and agree them to the **original source documents**: invoices, contracts, purchase orders, or receipts. Comparing the key fields (date, amount, customer or vendor, description) tests **accuracy**, and finding legitimate support tests **authenticity**. Selections should cover different periods, transaction types, and dollar ranges, plus any large or unusual items, so that the test reaches the parts of the data that matter most.

### Validating Search or Query Criteria

When data comes from a query, report, or filter, the auditor must make sure the **criteria used to produce it** captured the right population.

| Step | What the Auditor Does |
|---|---|
| **Review the query logic** | Examine the SQL statement, report parameters, or filter settings |
| **Test boundary conditions** | Check that date ranges, account codes, and other filters capture the full population |
| **Reperform the extraction** | Run the same query independently and compare the result to management's extract |
| **Look for exclusions** | Determine whether any filter could leave out relevant transactions |

**Example:** For journal entry testing, the Bear Co. audit team requests all journal entries over \$50,000 posted during the year. Reviewing the query, the auditor finds it pulled entries only from the "Operating" ledger and skipped the "Adjusting" and "Closing" ledgers. The revised extract adds 23 entries totaling \$1.8 million. Those entries, made at period end and outside routine processing, are exactly the kind most at risk of management override.

### Reconciling to Control Totals

Reconciling an extract to **control totals** in the source system shows that the extraction did not drop or add records. The auditor compares the extract's **dollar total** to the general ledger or trial balance and its **record count** to the source system's count, and investigates any difference, however small.

**Example:** The auditor extracts Polar Inc.'s 14,800 payroll transactions for the year. Gross pay in the extract totals \$28.4 million, which agrees to payroll expense in the general ledger, and the record count agrees to the payroll system's report. That is evidence the extract is complete and accurate in total, though not yet at the level of individual records.

### Testing Completeness in More Detail

Totals can agree even when individual records are missing and offset by others, so the auditor also tests completeness more finely:

| Test | Procedure | What It Detects |
|---|---|---|
| **Record counts** | Compare the number of records to the source system's log | Missing or duplicated records |
| **Date range coverage** | Check the earliest and latest dates against the audit period | Truncated periods (for example, data that starts February 1) |
| **Sequence gap analysis** | Check document numbers for gaps and duplicates | Missing or renumbered documents |
| **Cross-referencing** | Compare the population to an independent source, such as bank statements | Items recorded in one system but missing from another |

**Example:** Grizzly Inc. issues prenumbered invoices numbered 10001 through 10847. The extract should contain all 847. If invoices 10512 through 10519 are missing, the gap could mean unrecorded sales, voided invoices that were not documented, or an extraction error, and the auditor investigates.

---

## IT General Controls Over Data-Generating Systems

The reliability of electronic data depends on the **IT general controls (ITGCs)** over the systems that produce it.

| ITGC Area | Why It Matters for Data Reliability |
|---|---|
| **Access controls** | Limit who can create, change, or delete data |
| **Program change management** | Keep system changes from corrupting data or altering processing logic |
| **IT operations** | Make sure batch jobs, interfaces, and backups run completely and correctly |
| **Program development** | Make sure new applications are tested before they go live |

**Example:** Sloth Security generates monthly invoices from a custom billing system. The auditor finds that billing access is limited to authorized clerks, every system change is tested and approved, and the IT manager reviews nightly batch logs each morning. Effective ITGCs give the auditor more confidence in billing data drawn from the system.

If ITGCs are **deficient**, the auditor cannot rely on the affected data to the same degree. The options are to test the data more extensively, obtain it from another source, or rely less on data-dependent procedures and do more of other substantive work.

---

## Information Generated Using Technology and AI

Entities increasingly use artificial intelligence, robotic process automation, and machine learning to produce analyses, schedules, and reconciliations, and even estimates. The output looks authoritative, but its reliability depends on the same things as any other data, plus a few new risks.

| Factor | Auditor's Consideration |
|---|---|
| **Inputs** | Are the data fed into the tool complete and accurate? |
| **Model or logic** | How was the model designed, trained, and validated? Can its logic be explained? |
| **Automated workflows** | Are there controls over the workflow, its exceptions, and manual overrides? |
| **Bias and error** | Could the tool systematically over- or understate values, or produce plausible but fabricated results? Has the entity checked it against known outcomes? |
| **Opacity** | If the auditor cannot understand or test the logic (a "black box"), the output is less reliable |

**Example:** Cub Entertainment uses an AI-based tool to estimate its allowance for expected credit losses. The auditor cannot accept the tool's output at face value. The auditor tests the input data (historical losses and current receivables), obtains an understanding of the model and how it was validated, compares the output to an independent expectation, and considers whether management could have adjusted the model's parameters to reach a desired answer.

Typical procedures for technology-generated information are:

1. **Understand the technology**: obtain a description of the system, model, or tool
2. **Validate the inputs**: apply the same reliability procedures as for any other data
3. **Test the processing**: where possible, recalculate or reperform what the tool does
4. **Assess controls**: evaluate ITGCs and application controls over the tool, including access, change management, and monitoring
5. **Compare outputs**: agree the output to independent expectations or other sources
6. **Involve specialists**: for complex models, consider an IT audit specialist or data scientist

The same thinking applies to the audit team's own tools: evidence produced by the firm's software is only as reliable as the data it used and the team's understanding of how it works.

---

## Relationship to Audit Data Analytics

Validating data is a **prerequisite** to any audit data analytic. If the auditor skips it, even a sophisticated analysis is undermined: unreliable data can create false exceptions or hide real misstatements. When an analysis produces odd results, the auditor should also consider whether a data problem, rather than a misstatement, is the cause. The [Audit Data Analytics](./audit-data-analytics.md) chapter shows where these procedures fit in the analytics process.

:::tip

On the exam, when an answer choice validates the data **before** the analysis is run (reconciling the extract to the ledger, checking the query criteria), it is usually the better choice.

:::

---

## Summary

| Topic | Key Takeaway |
|---|---|
| **Four attributes** | Completeness, accuracy, authenticity, and susceptibility to management bias |
| **Internal vs. external** | External data is generally more reliable; internal data needs more testing; external data received through the company needs its own evaluation |
| **Agreeing to sources** | Agree extracted items to original documents to test accuracy and authenticity |
| **Query validation** | Review and reperform the criteria used to produce the data |
| **Control totals and completeness** | Reconcile totals and record counts; test date ranges, sequences, and cross-references |
| **IT general controls** | Effective ITGCs support reliance on system data; deficient ITGCs call for more testing |
| **Technology and AI** | Understand inputs, logic, and controls; test the output like any other management-produced data |
