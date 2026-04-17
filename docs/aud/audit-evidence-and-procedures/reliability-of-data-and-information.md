# Reliability of Data and Information

Auditors rely on data and information throughout every phase of an engagement—from risk assessment through forming an opinion. But audit evidence is only as strong as the data that underlies it. Before using any data to support audit conclusions, the auditor must perform procedures to assess whether that data is **sufficiently reliable** for its intended purpose. This topic is central to the 2026 AUD blueprint (III.A.2) and intersects with audit data analytics, substantive testing, and IT controls.

---

## Why Reliability Matters

An auditor who builds a beautiful regression model or performs a comprehensive data-matching procedure still reaches a flawed conclusion if the underlying data is incomplete, inaccurate, or manipulated. The standards require auditors to evaluate the **reliability of data and information used as audit evidence**, regardless of whether the data comes from the client, a third party, or the auditor's own systems.

:::info[Key Principle]

The reliability of audit evidence depends on its **source**, **nature**, and the **circumstances** under which it is obtained. Data generated internally by the entity is generally less reliable than data obtained from independent external sources—unless the entity's internal controls over that data are effective.

:::

---

## Attributes of Reliable Data

Before using data as audit evidence, the auditor evaluates four key attributes. Each attribute addresses a different dimension of data quality.

| Attribute | Definition | What the Auditor Asks |
|---|---|---|
| **Completeness** | The data set includes all transactions, events, or items for the relevant period or population | Are there missing records? Do date ranges cover the full period? Are there sequence gaps? |
| **Accuracy** | Data fields contain correct values—amounts, dates, descriptions, and classifications match the underlying economic events | Do extracted totals tie to source system control totals? Do sample items match original documents? |
| **Authenticity** | The data is what it purports to be and has not been altered, fabricated, or tampered with since origination | Can the auditor trace the data to its original source? Are there audit trails and access controls? |
| **Susceptibility to management bias** | The degree to which management could intentionally or unintentionally influence the data | Did management select the data set? Could management have filtered, adjusted, or excluded records? |

:::warning

**Susceptibility to management bias** is often the most difficult attribute to evaluate because bias can be subtle. For example, if management provides the auditor with a pre-filtered data extract showing only "active" customer accounts, the auditor cannot be certain that the filter criteria did not exclude accounts with disputed balances. Always consider whether management had the **opportunity and incentive** to influence the data.

:::

---

## Internal vs. External Data Sources

The source of data significantly affects its reliability. Auditors must consider the independence and competence of the data provider.

| Factor | Internal Source | External Source |
|---|---|---|
| **Examples** | General ledger extracts, subledger reports, ERP transaction files, management-prepared schedules | Bank statements, vendor confirmations, government databases, market price feeds, credit agency reports |
| **Independence from management** | Low — management controls the systems and processes that generate the data | High — data is produced by parties independent of the entity |
| **General reliability** | Lower, unless supported by effective internal controls | Higher, due to independence from management |
| **Key auditor procedures** | Test IT general controls, reconcile to control totals, trace samples to source documents | Verify the source's reputation, assess potential for interception or alteration, confirm direct receipt |

:::info[Example]

While auditing **Bear Co.**, the engagement team needs accounts receivable aging data to evaluate the allowance for doubtful accounts. Management provides an aging report exported from the ERP system. The auditor cannot simply accept this report at face value. Instead, the team reconciles the aging report total to the general ledger A/R balance, tests a sample of individual invoices back to original sales orders and shipping documents, and evaluates IT general controls over the billing module. In contrast, the auditor also obtains a credit report on Bear Co.'s largest customer from an independent credit agency—this external data requires less extensive reliability testing because it was generated independently of management.

:::

---

## Procedures to Validate Reliability

### Agreeing Information to Original Sources

The most direct way to validate data reliability is to **trace information back to its original source documents**. This establishes that the data accurately represents the underlying economic events.

**Common procedures include:**

- Selecting a sample of transactions from an extracted data file and tracing each to the original invoice, contract, purchase order, or receipt
- Comparing key fields (date, amount, vendor/customer name, description) in the extracted data to the source document
- Investigating any discrepancies between the data and the source

:::tip

When tracing to source documents, select items that are **representative of the population** and include items from different time periods, transaction types, and dollar ranges. Also consider selecting items specifically identified as high-risk—such as large or unusual transactions—to ensure the data is reliable in the areas that matter most.

:::

### Validating Search or Query Criteria

When data is obtained through a query, report, or search function, the auditor must evaluate whether the **criteria used to generate the data** are appropriate and complete.

| Validation Step | What the Auditor Does |
|---|---|
| **Review the query logic** | Examine the SQL query, report parameters, or filter settings used to extract the data |
| **Test boundary conditions** | Verify that the date range, account codes, or other filters capture the complete population |
| **Re-perform the extraction** | Independently run the same query and compare results to management's extract |
| **Check for excluded records** | Determine whether any filters or exclusions could omit relevant transactions |

:::info[Example]

The audit team at **Gies Co.** requests a listing of all journal entries posted during the year with amounts exceeding \$50,000. Management's IT department runs a query against the ERP system and provides the results. Before using this data for journal entry testing, the auditor reviews the query parameters and discovers that the query only captured entries posted to the "Operating" ledger, excluding entries posted to the "Adjusting" and "Closing" ledgers. The auditor requests a revised extract that includes all ledger types—a step that adds 23 journal entries totaling \$1.8 million that would have otherwise been excluded from testing.

:::

### Reconciliation to Control Totals

Reconciling extracted data to **control totals** from the source system is a fundamental reliability procedure. If the totals agree, the auditor has evidence that the extraction process did not introduce errors or omissions.

**Reconciliation procedures include:**

1. Compare the **total dollar amount** of the extracted data to the corresponding general ledger account balance or trial balance total
2. Compare the **record count** in the extracted file to the transaction count reported by the source system
3. Investigate any differences, no matter how small—even rounding differences can indicate extraction errors

:::info[Example]

**MAS Inc.**'s auditor extracts all 14,832 payroll transactions for the year from the HR/payroll system. The auditor compares the sum of gross pay in the extract (\$28,441,206) to the total payroll expense per the general ledger (\$28,441,206). The record count also agrees. This reconciliation provides evidence that the extraction is complete and accurate—at least at the aggregate level.

:::

### Testing Completeness

Even when totals reconcile, the auditor performs additional procedures to test the **completeness** of the data at a more granular level.

| Completeness Test | Procedure | What It Detects |
|---|---|---|
| **Record counts** | Compare the number of records in the extract to the source system's transaction log | Missing or duplicated records |
| **Date range coverage** | Verify that the earliest and latest transaction dates span the full audit period | Truncated periods (e.g., data starts February 1 instead of January 1) |
| **Sequence gap analysis** | Check document numbers (invoice numbers, check numbers, PO numbers) for gaps or duplicates | Missing transactions or renumbered documents |
| **Cross-referencing** | Compare the extracted population to an independent source (e.g., bank statements, third-party confirmations) | Transactions recorded in one system but missing from another |

:::caution

Sequence gap analysis is particularly important for auditing revenue. If **Kingfisher Industries** uses pre-numbered invoices (Invoice #10001 through #10847), the auditor should verify that all 847 invoices appear in the extracted data. A gap—say, invoices #10512 through #10519 are missing—could indicate unrecorded sales, voided transactions that were not properly documented, or data extraction errors.

:::

### Tracing Samples Back to Source Documents

Beyond aggregate-level reconciliation, the auditor selects **individual items** from the extracted data and traces them to their original source documents.

**This procedure serves two purposes:**

1. **Validates accuracy** — Confirms that the data fields (amounts, dates, descriptions) in the extract match the source
2. **Validates authenticity** — Confirms that the transactions actually occurred and are supported by legitimate documentation

The sample should be drawn using a method appropriate to the audit objective—random selection, stratified sampling, or targeted selection of high-risk items.

---

## Evaluating IT General Controls Over Data-Generating Systems

The reliability of electronically generated data is directly linked to the **effectiveness of IT general controls (ITGCs)** over the systems that produced it.

| ITGC Category | Relevance to Data Reliability |
|---|---|
| **Access controls** | Restrict who can create, modify, or delete data—reducing the risk of unauthorized changes |
| **Change management** | Ensure that system changes (patches, upgrades, configuration changes) do not corrupt data or alter processing logic |
| **Computer operations** | Ensure that batch jobs, data transfers, and backups run correctly and completely |
| **Program development** | Ensure that new applications are properly tested before deployment |

:::info[Example]

**Illini Security** uses a proprietary billing system to generate monthly invoices. The auditor evaluates ITGCs over this system and finds that: (1) access to the billing module is restricted to authorized billing clerks, (2) all system changes go through a formal change management process with testing and approval, and (3) nightly batch processing logs are reviewed daily by the IT manager. These strong ITGCs increase the auditor's confidence in the reliability of billing data extracted from the system.

:::

:::note

If ITGCs are **deficient**, the auditor cannot place the same level of reliance on data from the affected systems. In that case, the auditor must either (a) perform more extensive manual testing to validate the data, (b) obtain the data from an alternative source, or (c) reduce reliance on data-dependent audit procedures and increase the extent of other substantive procedures.

:::

---

## Considerations for Data Prepared Using Technology and AI

Advances in technology—including artificial intelligence (AI), robotic process automation (RPA), and machine learning—have changed how entities generate, process, and report financial data. The auditor must consider how these technologies affect data reliability.

### Key Considerations

| Technology Factor | Auditor's Consideration |
|---|---|
| **AI-generated estimates** | How was the AI model designed, trained, and validated? Are the inputs reliable? Is the model's logic transparent and explainable? |
| **Automated data processing** | Are there controls over automated workflows? How are exceptions handled? Is there a manual override capability? |
| **Data transformation** | When data passes through multiple systems or transformation layers, how does the auditor verify that no errors or omissions were introduced? |
| **Algorithm bias** | Could the algorithm systematically over- or understate certain values? Has the entity validated the algorithm against known outcomes? |
| **Black box models** | If the auditor cannot understand or independently test the model's logic, the output may be less reliable |

:::warning

When **Illini Entertainment** uses an AI-powered tool to estimate its expected credit loss reserve, the auditor cannot simply accept the AI's output as reliable audit evidence. The auditor must understand the model's inputs (historical loss data, economic forecasts), evaluate the model's methodology (what machine learning algorithm is used, how was it trained), test the model's output against independent expectations, and consider whether management could have manipulated the model's parameters to achieve a desired result. AI-generated data requires the **same level of professional skepticism** as any other management-generated data—if not more.

:::

### Procedures for Technology-Generated Data

1. **Understand the technology** — Obtain a description of the system, algorithm, or tool used to generate the data
2. **Evaluate input data** — Apply the same reliability procedures to the data fed into the technology as to any other audit data
3. **Test processing logic** — Where possible, independently verify the calculations or transformations performed by the technology
4. **Assess controls** — Evaluate ITGCs and application controls over the technology, including access controls, change management, and monitoring
5. **Compare outputs** — Reconcile the technology's output to independent expectations or alternative data sources
6. **Engage specialists** — If the technology is complex (e.g., a neural network model), consider involving an IT audit specialist or data scientist

---

## Relationship to Audit Data Analytics

Reliability of data and information is **foundational** to audit data analytics (ADAs). Every ADA depends on reliable data to produce meaningful results.

| ADA Step | Data Reliability Connection |
|---|---|
| **Plan** | Identify what data is needed and consider potential reliability issues upfront |
| **Access data** | Obtain the data and assess its source, completeness, and integrity |
| **Review and prepare data** | Validate the data using reconciliation, completeness testing, and sample tracing |
| **Perform the analysis** | The analysis is only as good as the data—reliability issues can produce false positives or mask real misstatements |
| **Evaluate results** | Consider whether data reliability issues could explain anomalies before concluding on audit implications |

:::tip

Think of data reliability assessment as a **prerequisite** to any ADA. If the auditor skips or shortcuts the reliability evaluation, the entire analysis is undermined—no matter how sophisticated the analytical technique. On the CPA exam, look for answer choices that emphasize validating data **before** performing the analysis.

:::

---

## Summary

| Topic | Key Takeaway |
|---|---|
| **Why it matters** | Audit evidence is only as reliable as the underlying data; unreliable data leads to flawed conclusions |
| **Four attributes** | Completeness, accuracy, authenticity, and susceptibility to management bias |
| **Internal vs. external** | External data is generally more reliable due to independence; internal data requires more extensive testing |
| **Agreeing to sources** | Trace extracted data to original documents to validate accuracy and authenticity |
| **Query validation** | Review and re-perform the search criteria used to generate data extracts |
| **Reconciliation** | Compare extracted totals and record counts to source system control totals |
| **Completeness testing** | Check record counts, date ranges, sequence gaps, and cross-references |
| **IT general controls** | Strong ITGCs increase confidence in data from electronic systems; weak ITGCs require compensating procedures |
| **AI and technology** | Apply the same skepticism to AI-generated data; understand inputs, logic, and controls |
| **Link to ADAs** | Data reliability assessment is a prerequisite to every audit data analytic—validate data before analyzing it |
