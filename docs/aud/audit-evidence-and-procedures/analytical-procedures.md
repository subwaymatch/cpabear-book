# Analytical Procedures

**Analytical procedures** evaluate financial information by studying **plausible relationships** among financial and nonfinancial data. The auditor builds an expectation of what an amount or ratio should be and compares it with what was recorded; a large unexplained difference points to a possible misstatement. Few tools are as versatile. Analytical procedures are required when planning the audit, optional as substantive evidence, and required again at the end. This chapter covers the types of analytical procedures, when each use is required, the step-by-step process for a substantive analytical procedure with a worked example, and the final overall review.

The AICPA standards are AU-C 315 (risk assessment) and AU-C 520 (substantive and final analytical procedures). The PCAOB counterparts are AS 2110, AS 2305, and AS 2810.

---

## Types of Analytical Procedures

| Type | What the Auditor Does | Typical Precision |
|---|---|---|
| **Trend analysis** | Compares the current balance with prior periods | Lowest |
| **Ratio analysis** | Compares ratios (gross margin, receivables turnover) with prior periods, budgets, or the industry | Low to moderate |
| **Reasonableness test** | Builds an independent estimate from operating data (headcount × average pay, units × price) | Moderate to high |
| **Regression analysis** | Uses a statistical model of the relationship between the account and one or more drivers | Highest |

Precision is how close the expectation is likely to be to the correct amount. A more precise expectation can detect smaller misstatements, so it provides more assurance.

---

## When Analytical Procedures Are Required

| Audit Phase | Required? | Purpose |
|---|---|---|
| **Risk assessment (planning)** | Required | Identify unusual amounts, ratios, and trends that point to risks of material misstatement |
| **Substantive testing** | Optional | Provide evidence about an assertion, alone or with tests of details |
| **Overall review near the end of the audit** | Required | Form an overall conclusion about whether the statements are consistent with the auditor's understanding of the entity |

:::danger[Common Exam Trap]

Analytical procedures are **required** in risk assessment and in the overall review near the end of the audit. They are **optional** as substantive procedures. Questions often test whether you know which use is optional.

:::

### Analytical Procedures in Risk Assessment

At the planning stage, the auditor usually works with high-level data, such as annual or quarterly totals, so these procedures are not precise. Their job is to point the auditor toward areas that need attention.

**Example:** Planning the audit of Bear Co., the auditor compares this year's gross margin with the prior three years. Gross margin fell from 40% to 31% even though the industry was stable. The auditor treats inventory valuation and revenue cutoff as higher-risk areas and plans more work there.

---

## Substantive Analytical Procedures

When an analytical procedure is used as **substantive evidence**, it must be designed with more care. The auditor works through five steps.

### Step 1: Determine Suitability

The auditor decides whether an analytical procedure suits the assertion and the assessed risk. Analytical procedures work best for large volumes of transactions whose relationships are **plausible and predictable** over time. That is why they often suit **income statement accounts** (interest expense, payroll, rental revenue) better than balance sheet accounts, which are snapshots that can be affected by a few unusual transactions.

Analytical procedures alone are rarely enough for a **significant risk**. When the auditor responds to a significant risk only with substantive procedures, those procedures must include tests of details.

### Step 2: Evaluate the Reliability of the Data

The expectation is only as good as the data it is built on. The auditor considers:

- The **source** of the data (independent external sources are generally more reliable)
- The **comparability** of the data (industry averages may not fit an entity with an unusual product mix)
- The **nature and relevance** of the data (budgets prepared to be achievable, or prepared as stretch goals)
- The **controls** over preparing the data, and whether the data were themselves audited or tested

### Step 3: Develop an Expectation

The auditor forms an independent expectation of the recorded amount. Precision depends on:

- **Disaggregation:** monthly amounts by product line or location give a far more precise expectation than an annual total
- **Predictability** of the relationship
- **Reliability** of the data
- **Type** of procedure (a reasonableness test or regression is more precise than a simple trend)

### Step 4: Set the Threshold and Compare

Before comparing, the auditor decides how large a difference can be accepted **without further investigation**. The threshold is based on materiality (usually performance materiality) and the assurance the auditor wants from the procedure. The auditor then compares the expectation with the recorded amount.

### Step 5: Investigate Significant Differences

For a difference above the threshold, the auditor:

1. **Inquires** of management for an explanation
2. **Corroborates** the explanation with evidence; an explanation alone is not evidence
3. Performs **other procedures** if the explanation cannot be corroborated

A difference that remains unexplained is treated as a likely misstatement and evaluated with the other misstatements found in the audit. Under PCAOB AS 2305, when a substantive analytical procedure is the principal procedure for a significant assertion, the auditor documents the expectation and how it was developed, the results of the comparison, and any additional procedures performed.

### Worked Example

Sloth Security sells alarm monitoring under monthly contracts. The auditor plans a substantive analytical procedure for revenue.

1. **Suitability:** Revenue is driven by the number of contracts and the monthly fee, a stable relationship.
2. **Reliability:** The contract count comes from the customer master file, which the auditor reconciled to signed contracts; ITGCs over the billing system were tested.
3. **Expectation:** Sloth had 400 active contracts all year at \$250 per month. Expected revenue is 400 × \$250 × 12 = **\$1,200,000**.
4. **Threshold and comparison:** The auditor sets a threshold of \$40,000. Recorded revenue is \$1,265,000, a difference of \$65,000, which exceeds the threshold.
5. **Investigation:** Management explains that the monthly fee rose to \$275 on October 1. The auditor inspects the price-change notice sent to customers and a sample of October to December invoices, which confirm the new price. The refined expectation is (400 × \$250 × 9) + (400 × \$275 × 3) = \$900,000 + \$330,000 = **\$1,230,000**. The remaining difference of \$35,000 is within the threshold, so the auditor accepts recorded revenue for this procedure.

Notice that management's explanation did not end the work. The auditor corroborated it and then refined the expectation.

---

## The Overall Review Near the End of the Audit

Near the end of the audit, the auditor steps back and reads the financial statements as a whole. Do the amounts and relationships make sense given everything learned about the entity, its industry, and the economy? This review often uses the same comparisons as planning (trends, ratios, the current year against expectations) but with audited figures.

If the review reveals a previously unrecognized risk of material misstatement, for example an unexplained jump in a ratio that no audit work addressed, the auditor revises the risk assessment and performs additional procedures before issuing the report.

---

## Analytics and Technology

Data analytics software has made analytical procedures far more powerful. Auditors can build expectations from disaggregated data, run regressions on thousands of data points, and visualize trends across every location. The underlying logic is unchanged: reliable data, a precise expectation, a defined threshold, and corroborated explanations. The [Audit Data Analytics](./audit-data-analytics.md) chapter covers the tools, data preparation, and visualizations.

---

## Summary

| Topic | Key Point |
|---|---|
| **Definition** | Evaluating financial information through plausible relationships among financial and nonfinancial data |
| **Required uses** | Risk assessment and the overall review near the end of the audit |
| **Optional use** | Substantive procedures |
| **Suitability** | Best for large volumes with predictable relationships; not enough alone for significant risks |
| **Precision** | Improved by disaggregation, predictable relationships, reliable data, and more rigorous techniques |
| **Investigating differences** | Inquire, corroborate, and perform other procedures; unexplained differences are likely misstatements |
