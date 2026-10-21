# Audit Data Analytics

For most of auditing's history, the auditor looked at a sample because looking at everything was impossible. **Audit data analytics (ADAs)** change that: with the right data and software, the auditor can analyze every transaction in a population, find the handful that look wrong, and focus the work there. This chapter covers what ADAs are and the process for performing them, the data skills the blueprint tests (how relational databases are structured, measurement scales, requesting and transforming data), the four categories of analytics, how ADAs are used at each stage of the audit, and how to read and act on the results. The reliability of the underlying data is covered in [Reliability of Data and Information](./reliability-of-data-and-information.md).

---

## What Audit Data Analytics Are

Audit data analytics are techniques for discovering and analyzing **patterns, anomalies, and other useful information** in the data underlying an audit, often across **entire populations**, through analysis, modeling, and visualization. They can be used in risk assessment, tests of controls, substantive procedures, and the overall conclusion.

**Example:** The audit team at Bear Co. compares every sales transaction recorded during the year with the shipping records. The analysis flags 47 sales totaling \$218,000 that were recorded with no shipment within 15 days. Instead of hoping a random sample of invoices would hit a cutoff problem, the team now knows exactly which transactions to examine.

The main benefits are broader coverage (100% of transactions instead of a sample), better targeting of audit effort toward the riskiest items, and patterns that manual review would miss. ADAs do not replace judgment: the auditor still decides what to analyze, whether the data can be trusted, and what the results mean.

---

## The ADA Process

The AICPA's guidance describes five steps:

| Step | Activity | Key Questions |
|---|---|---|
| **1. Plan the ADA** | Define the objective, the population, the technique, and what will count as a notable item | What risk or assertion does the analysis address? What data are needed? |
| **2. Access and prepare the data** | Request or extract the data and transform it into a usable form | Where do the data come from? What format are they in? |
| **3. Consider relevance and reliability** | Validate the data before relying on them | Are the data complete and accurate? Could they have been altered? |
| **4. Perform the ADA** | Run the analysis | Is the technique appropriate for the objective? |
| **5. Evaluate the results and conclude** | Investigate notable items and decide whether the objective was met | Is the evidence sufficient and appropriate? Are more procedures needed? |

The planning step is where many analytics go wrong. An analysis without a clear objective produces a list of oddities, not audit evidence.

---

## Working With Data

### Relational Databases

Most accounting data lives in **relational databases**, which organize data into related tables.

- A **table** holds data about one kind of thing, such as customers, invoices, or products.
- Each row is a **record** (one customer, one invoice).
- Each column is a **field**, also called an **attribute** (customer name, invoice date, amount).
- A **primary key** is a field that uniquely identifies each record in a table, such as the invoice number.
- A **foreign key** is a field in one table that refers to the primary key of another, which is how tables are linked. The customer number on each invoice is a foreign key pointing to the customer table.

**Normalization** is the process of organizing tables so that each fact is stored only once. In a normalized design, a customer's address is kept in the customer table, not repeated on every invoice. That reduces redundancy and prevents inconsistencies, such as one invoice showing an old address and another the new one. For the auditor, the practical consequence is that answering most questions requires **joining** tables through their keys.

**Example:** Grizzly Inc.'s sales orders, shipments, and invoices sit in three tables linked by the order number. The auditor writes a query that joins the shipping table to the invoice table and lists shipments with no matching invoice. Each one is a possible unbilled, unrecorded sale, so the query tests the **completeness** of revenue.

### Measurement Scales

The type of data determines which analyses make sense:

| Scale | Characteristics | Audit Examples | Meaningful Operations |
|---|---|---|---|
| **Nominal** | Labels or categories with no order | Vendor ID, state, general ledger account type | Counting, grouping |
| **Ordinal** | Categories with a meaningful order but unequal gaps | Credit ratings, risk ratings (high, medium, low) | Ranking, medians |
| **Interval** | Ordered, equal gaps, no true zero | Calendar dates, temperature in degrees Fahrenheit | Differences (days between dates) |
| **Ratio** | Ordered, equal gaps, and a true zero | Dollar amounts, quantities, days outstanding | All arithmetic, including ratios |

Data are also **discrete** or **continuous**. Discrete data take countable values, such as the number of invoices or employees. Continuous data can take any value in a range, such as weight or elapsed time. Averaging a nominal field such as vendor ID produces a number with no meaning, so matching the analysis to the scale matters.

### Requesting Data

A good **data extraction request** is specific. It identifies the source system and tables, the fields (attributes) needed and their data types, the period covered, the file format, and the control totals (record counts and dollar totals) that should accompany the file so the auditor can check that the extraction is complete. A data dictionary describing each field helps the auditor interpret the data correctly.

### Transforming Data

Raw data rarely arrive ready to analyze. Auditors often describe preparation as **ETL: extract, transform, load**.

| Stage | Key Activities | Risk If Done Poorly |
|---|---|---|
| **Extract** | Pull data from the source system by query, download, or interface | Missing records or periods |
| **Transform** | Clean and scrub the data: remove duplicates, standardize dates, currencies, and names, handle blank fields, convert data types, join tables | Analysis distorted by data quality problems or by errors introduced during cleaning |
| **Load** | Import the prepared data into the analysis tool | Truncated or corrupted records during import |

Every transformation should be documented, and the auditor should confirm that the prepared data still reconcile to the source totals. Cleaning that silently drops records is a common way for an analysis to go wrong.

### Structured and Unstructured Data

Most ADAs use **structured data**, which fits predefined rows and fields: general ledger detail, payroll registers, inventory files. **Unstructured data**, such as emails, contracts, and scanned documents, has no predefined format and must be processed before it can be analyzed, which raises extra questions about completeness and extraction accuracy. AI tools that read contracts or summarize documents are one way auditors now work with unstructured data; their output still has to be checked against the source documents.

---

## Four Categories of Analytics

| Category | Question It Answers | Audit Example |
|---|---|---|
| **Descriptive** | What happened? | Summarizing all of Polar Inc.'s journal entries by user, date, and amount |
| **Diagnostic** | Why did it happen? | Drilling into Bear Co.'s 40% third-quarter jump in warranty expense by product line and return data |
| **Predictive** | What is likely to happen? | Modeling expected bad debts for Cub Entertainment from historical collections and the current aging |
| **Prescriptive** | What should we do about it? | Using risk scores by customer segment to decide where Kodiak Partners' revenue testing should concentrate |

Most audit analytics in use today are descriptive or diagnostic. Be ready to classify a described procedure into the right category.

---

## Using ADAs Throughout the Audit

### Risk Assessment

ADAs help identify where misstatements are most likely: unusual growth by product line or customer, journal entries posted at odd hours, by unusual users, or in round amounts, and digit patterns that depart from what **Benford's Law** predicts.

**Example:** Planning the audit of Grizzly Inc., the team runs a Benford's Law analysis on all vendor payments over \$1,000. Payments beginning with the digit 8 occur far more often than expected. Investigation finds a procurement clerk who set up a fictitious vendor and billed between \$8,000 and \$8,999 each time, staying just under the \$10,000 level that requires a manager's approval.

### Tests of Controls

ADAs can test a control across the whole population instead of a sample: checking every purchase for a three-way match, confirming that every disbursement over the approval limit at Sloth Security carries the required authorization, or analyzing user access logs for conflicts in segregation of duties.

### Tests of Details

ADAs can provide direct evidence about assertions: matching the full revenue population to shipping records (occurrence and cutoff), comparing the inventory master file to the general ledger, or recalculating depreciation for every asset Bear Co. owns. When an analysis covers the whole population and the data are reliable, the auditor may not need a separate sample for that assertion. Under PCAOB amendments effective for fiscal years beginning on or after December 15, 2025, the auditor must investigate the items such an analysis flags and, if one analysis serves several purposes, achieve the objective of each (see [Substantive Procedures](./substantive-procedures.md)).

### Analytical Procedures and the Overall Conclusion

ADAs sharpen analytical procedures: a regression of Polar Inc.'s monthly revenue on headcount, contract volume, and season gives a much more precise expectation than a simple trend. At the end of the audit, visualizing key ratios by quarter helps the auditor judge whether the statements as a whole fit what was learned during the audit.

---

## Reading and Acting on the Results

### Visualizations

| Visualization | Best Used For | Audit Example |
|---|---|---|
| **Bar or column chart** | Comparing categories | Revenue by product line at Bear Co. across periods |
| **Line chart** | Trends over time | Monthly sales at Grizzly Inc., to spot departures from seasonality |
| **Scatter plot** | Relationships and outliers | Invoice amount against days to payment at Polar Inc. |
| **Heat map** | Concentrations of activity | Journal entry volume by user and hour at Sloth Security |
| **Histogram** | Frequency distributions | Vendor payment amounts at Bear Co., including leading-digit patterns |

A scatter plot is the natural choice for spotting outliers, and a line chart for trends over time.

### Interpretation Techniques

**Regression analysis** models the relationship between the amount being audited and one or more drivers, then compares the model's prediction with the recorded amount.

**Example:** The auditor models Cub Entertainment's monthly revenue using active subscribers, average ticket price, and a seasonal index. The model predicts December revenue of \$4.2 million; recorded revenue is \$5.1 million. The \$900,000 difference exceeds the auditor's threshold. Investigation shows that management recorded \$850,000 of gift card sales as revenue instead of deferring them as a contract liability.

**Variance analysis** compares recorded amounts with budgets, prior periods, or benchmarks, such as identifying Kodiak Partners' departments that overspent budget by more than 10% and corroborating management's explanations. **Trend analysis** looks for unusual changes over time, such as a buildup of Bear Co.'s inventory over three years or a falling allowance-to-receivables ratio.

### Evaluating Exceptions

When an ADA flags items, the auditor:

1. **Investigates the cause**: a misstatement, an unusual but legitimate transaction, or a data problem
2. **Measures the amount** and compares it with tolerable misstatement
3. **Identifies the assertions** affected
4. **Considers the population**: whether a systematic error implies a larger misstatement
5. **Decides whether more procedures are needed** or the ADA provides sufficient evidence

:::warning

An ADA that finds **no exceptions** does not prove the assertion is free of misstatement. The auditor must consider whether the analysis was designed well, whether the data were reliable, and whether the technique could have detected the misstatements that might exist.

:::

---

## Putting It Together: Auditing Revenue at Grizzly Inc.

Grizzly Inc., a midsize manufacturer, reports revenue of \$48 million.

- **Planning (descriptive):** The auditor imports all 32,000 sales transactions and summarizes them by month, customer, and product line. December revenue is 35% above the monthly average, and one customer accounts for 22% of annual revenue.
- **Risk assessment (diagnostic):** Drilling into December shows that 60% of the increase comes from five large orders in the last week of the year, a **cutoff** risk. The customer concentration raises a **valuation** (collectibility) risk.
- **Testing (full-population matching):** The auditor matches all 32,000 sales to shipping records. It finds 112 sales totaling \$1.3 million that were recorded in December but not shipped until January. The five large orders did ship before year-end.
- **Evaluation:** The \$1.3 million cutoff error exceeds tolerable misstatement of \$500,000. The auditor proposes moving the revenue to January, and management records the correction.
- **Documentation:** The workpapers record the objective, the data source and the reliability testing, the technique, the results, and the conclusion, linked to the **occurrence** and **cutoff** assertions for revenue.

---

## Summary

| Topic | Key Point |
|---|---|
| **ADA process** | Plan; access and prepare data; consider relevance and reliability; perform; evaluate and conclude |
| **Relational databases** | Tables of records and fields linked by primary and foreign keys; normalization stores each fact once |
| **Measurement scales** | Nominal, ordinal, interval, ratio; discrete or continuous |
| **Data preparation** | Specific extraction requests with control totals; documented cleaning that still reconciles to the source |
| **Four categories** | Descriptive, diagnostic, predictive, prescriptive |
| **Uses** | Risk assessment, tests of controls, tests of details, analytical procedures, overall conclusion |
| **Zero exceptions** | Not proof of no misstatement; consider design, data reliability, and sensitivity |
