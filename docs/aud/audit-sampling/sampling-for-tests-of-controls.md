# Sampling for Tests of Controls

When auditors plan to rely on internal controls to reduce substantive testing, they must gather evidence that those controls are operating effectively. Attribute sampling provides a structured, systematic approach for testing controls—allowing the auditor to estimate the rate of deviation from a prescribed procedure and determine whether the control can be relied upon.

---

## Attribute Sampling for Control Testing

Attribute sampling is the primary sampling method used for tests of controls. Each item in the sample is evaluated on a **yes/no basis**: either the control was applied correctly, or it was not. The auditor is interested in the **rate** at which deviations occur, not the dollar amount of any related misstatement.

### The Process

1. **Define the objective** — Identify which control is being tested and what constitutes a deviation
2. **Define the population** — Determine the complete set of items from which the sample will be drawn
3. **Determine the sample size** — Consider confidence level, tolerable deviation rate, and expected deviation rate
4. **Select the sample** — Use random or systematic selection to ensure representativeness
5. **Perform the test** — Examine each selected item for the presence or absence of the control attribute
6. **Evaluate results** — Calculate the sample deviation rate and compare to the tolerable deviation rate
7. **Draw conclusions** — Decide whether the control can be relied upon

:::info Example
**Illini Entertainment** requires that all vendor invoices above \$1,000 receive dual approval before payment. The auditor wants to test whether this control operated effectively throughout the year.
:::

---

## Tolerable Deviation Rate

The **tolerable deviation rate (TDR)** is the maximum percentage of control deviations the auditor is willing to accept and still conclude that the control is operating effectively. It is set **before** selecting the sample.

Key considerations when setting the TDR:

- A **lower TDR** means the auditor requires stricter control performance, resulting in a **larger sample size**
- A **higher TDR** indicates the auditor can tolerate more deviations, resulting in a **smaller sample size**
- The TDR is influenced by the **degree of reliance** the auditor plans to place on the control

| Planned Reliance on Control | Typical TDR Range | Sample Size Impact |
|---|---|---|
| Heavy reliance | 2% – 5% | Larger sample |
| Moderate reliance | 5% – 8% | Moderate sample |
| Limited reliance | 8% – 10% | Smaller sample |

:::tip
The more the auditor wants to rely on a control (and thereby reduce substantive testing), the lower the tolerable deviation rate must be set—and the larger the sample must be to support that reliance.
:::

---

## Defining the Population and Sampling Unit

### Population

The population must consist of **all items** subject to the control during the period being tested. It must be:

- **Complete** — Every item that should have been subjected to the control must be included
- **Appropriate** — The population must correspond to the control being tested

:::warning
If the population is incomplete, the auditor cannot conclude that the control operated effectively over the entire period. For example, if the auditor tests **MAS Inc.'s** purchase order approval control but only obtains purchase orders from January through September, no conclusion can be drawn about October through December.
:::

### Sampling Unit

The sampling unit is the **individual item** that constitutes one element of the population. The sampling unit must be defined consistently with the control being tested.

| Control Being Tested | Population | Sampling Unit |
|---|---|---|
| Approval of purchase orders at **Gies Co.** | All purchase orders issued during the year | Individual purchase order |
| Three-way match before payment at **BIF Partners** | All cash disbursements during the year | Individual cash disbursement (check or EFT) |
| Review of daily bank reconciliation at **Kingfisher Industries** | All business days during the year | Individual daily bank reconciliation |
| IT access review at **Illini Security** | All quarterly access review reports | Individual quarterly report |

---

## Evaluating Sample Results

After testing each item in the sample, the auditor evaluates the results by following these steps:

### Step 1: Calculate the Sample Deviation Rate

$$
\text{Sample Deviation Rate} = \frac{\text{Number of Deviations Found}}{\text{Sample Size}}
$$

:::info Example
The auditor selects 50 purchase orders from **Gies Co.** and finds that 2 lacked the required supervisory approval. The sample deviation rate is:

$$
\frac{2}{50} = 4\%
$$
:::

### Step 2: Determine the Upper Deviation Rate

Using statistical tables (or software), the auditor determines the **upper deviation rate (UDR)** at the specified confidence level. The UDR accounts for sampling risk and represents the maximum likely deviation rate in the population.

The UDR is always **higher** than the sample deviation rate because it incorporates an allowance for sampling risk.

### Step 3: Compare to Tolerable Deviation Rate

| Comparison | Conclusion | Action |
|---|---|---|
| UDR ≤ TDR | Control is operating effectively | Rely on the control; perform reduced substantive procedures |
| UDR > TDR | Control is **not** operating effectively | Do not rely on the control; increase substantive procedures |

### Step 4: Consider the Nature of Deviations

Even if the UDR is within the TDR, the auditor should consider the **qualitative nature** of any deviations found:

- Do the deviations suggest an intentional override of the control?
- Are the deviations concentrated in a particular time period?
- Were the deviations caused by a specific individual?
- Could the deviations indicate fraud?

:::danger
A single deviation that suggests **fraud or intentional override** may require investigation far beyond what the deviation rate alone would suggest. Qualitative factors matter as much as quantitative results.
:::

---

## Drawing Conclusions from Attribute Sampling

Based on the evaluation, the auditor reaches one of the following conclusions:

### Conclusion 1: Control Is Operating Effectively

The upper deviation rate does not exceed the tolerable deviation rate. The auditor can rely on the control as planned and may reduce the nature, extent, or timing of related substantive procedures.

:::info Example
The auditor tests **Illini Entertainment's** invoice approval control with a TDR of 6% and a confidence level of 95%. After testing 80 items and finding 2 deviations, the UDR is calculated as 5.5%. Since 5.5% ≤ 6%, the auditor concludes the control is effective and relies on it to reduce accounts payable substantive testing.
:::

### Conclusion 2: Control Is NOT Operating Effectively

The upper deviation rate exceeds the tolerable deviation rate. The auditor must:

1. **Reassess the risk of material misstatement** — The assessed level of control risk for the related assertion increases
2. **Modify the audit plan** — Expand substantive procedures to compensate for the inability to rely on the control
3. **Consider other controls** — Determine whether compensating controls exist that might mitigate the risk

:::info Example
The auditor tests **MSA Records'** bank reconciliation review control. The TDR is set at 5%, but the UDR based on sample results is 8.3%. The auditor cannot rely on this control and must expand substantive testing of the cash balance—perhaps by confirming additional bank accounts and performing extended cutoff testing.
:::

### Common Pitfalls

:::warning
- **Expanding the sample after poor results**: If the initial sample yields a UDR above the TDR, the auditor **may** select additional items to test. However, this must be done carefully—the original and additional items must be evaluated together, and the auditor should not "cherry-pick" favorable results.
- **Ignoring qualitative factors**: Even a numerically acceptable deviation rate can mask serious underlying issues if the deviations involve fraud indicators, management override, or systematic errors.
:::
