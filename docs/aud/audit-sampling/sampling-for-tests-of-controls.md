# Sampling for Tests of Controls

When the auditor plans to rely on a control to reduce substantive testing, the auditor needs evidence that the control actually worked throughout the period. Attribute sampling provides that evidence by estimating how often the control failed. This chapter walks through the process in the order the auditor performs it: defining what a deviation is and what population to sample, deciding how many items to test, evaluating the results, and responding when the control does not hold up. It ends with discovery sampling, a variation used when even one deviation matters.

---

## How Attribute Sampling Works

Each item in an attribute sample is evaluated on a **yes/no basis**: either the control was performed as prescribed, or it was not. The auditor cares about the **rate** of deviations, not the dollar amount of any misstatement that resulted. That is why attribute sampling is the method for tests of controls, while variables sampling is the method for tests of details.

The process follows a predictable sequence:

1. **Define the objective and the deviation.** State which control is being tested and exactly what counts as a failure (for example, "an invoice over \$1,000 paid without two approvals").
2. **Define the population and sampling unit.**
3. **Determine the sample size** from the confidence level, the tolerable deviation rate, and the expected deviation rate.
4. **Select the sample** using a random-based method, so the sample can be expected to represent the population.
5. **Perform the test** on each item.
6. **Evaluate the results** by comparing the upper deviation rate to the tolerable deviation rate and considering the nature of any deviations.
7. **Conclude** whether the control can be relied on as planned.

Sampling is not the right tool for every control. An automated control (such as a system edit that rejects a sale over the customer's credit limit) performs the same way every time, so the auditor usually tests one or a few instances and relies on effective IT general controls for the rest. A control that leaves no documentary trail, such as segregation of duties, is tested by observation and inquiry rather than by sampling documents.

---

## Defining the Population and Sampling Unit

The population must include **every item that was subject to the control** during the period the auditor intends to rely on it. If the auditor tests Polar Inc.'s purchase order approval control using only January through September purchase orders, the results say nothing about October through December. The auditor must either extend testing to the remaining months or perform other procedures to cover them.

The **sampling unit** is the individual item the auditor selects and examines. It should match the way the control operates.

| Control being tested | Population | Sampling unit |
|---|---|---|
| Approval of purchase orders at Bear Co. | All purchase orders issued during the year | Individual purchase order |
| Three-way match before payment at Kodiak Partners | All cash disbursements during the year | Individual disbursement (check or EFT) |
| Daily review of cash receipts reconciliation at Grizzly Industries | All business days during the year | One day's reconciliation |

A few practical rules follow from the definition of a deviation. If a selected document has been properly voided, the auditor replaces it with another item, because a voided purchase order was never subject to the control. If a selected document cannot be found, the auditor treats it as a **deviation**, because there is no evidence the control was performed.

---

## Determining the Sample Size

### Tolerable Deviation Rate

The **tolerable deviation rate** is the highest rate of deviation the auditor can accept and still rely on the control at the planned level. The auditor sets it before selecting the sample, based on how much reliance the auditor plans to place on the control. The more the auditor wants to rely on a control (and the more substantive testing that reliance will replace), the lower the tolerable rate and the larger the sample. If the auditor plans no reliance at all, the control is not tested.

### Factors That Drive Sample Size

| Factor | Effect on sample size |
|---|---|
| **Confidence level** (1 minus the risk of assessing control risk too low) | Higher confidence, larger sample |
| **Tolerable deviation rate** | Lower tolerable rate, larger sample |
| **Expected population deviation rate** | Higher expected rate, larger sample |
| **Population size** | Little effect, except for very small populations |

Confidence level and the expected deviation rate move in the **same direction** as sample size. The tolerable deviation rate moves in the **opposite direction**. If the auditor expects the deviation rate to be at or above the tolerable rate, the test cannot support reliance, so the auditor assesses control risk at the maximum and does not perform it.

To see the size of the effect, consider a sample planned at 95% confidence with no deviations expected. A tolerable rate of 5% requires 59 items. Doubling the tolerable rate to 10% cuts the sample to 29 items.

---

## Evaluating the Results

### Step 1: Compute the Sample Deviation Rate

$$
\text{Sample Deviation Rate} = \frac{\text{Number of Deviations Found}}{\text{Sample Size}}
$$

If the auditor examines 50 of Bear Co.'s purchase orders and 2 lack the required approval, the sample deviation rate is 2 ÷ 50 = 4%.

### Step 2: Determine the Upper Deviation Rate

The sample rate is the auditor's best estimate of the population rate, but the true rate could be higher. Using statistical tables or software, the auditor finds the **upper deviation rate** (also called the upper limit or achieved upper precision limit): the highest rate the population could have at the chosen confidence level. The difference between the two is the **allowance for sampling risk**:

$$
\text{Upper Deviation Rate} = \text{Sample Deviation Rate} + \text{Allowance for Sampling Risk}
$$

The upper deviation rate is always higher than the sample rate. Even a sample with zero deviations has an upper limit above zero.

### Step 3: Compare to the Tolerable Deviation Rate

| Comparison | Conclusion | Action |
|---|---|---|
| Upper deviation rate ≤ tolerable rate | The control is operating effectively | Rely on the control as planned |
| Upper deviation rate > tolerable rate | The control is **not** operating effectively enough to rely on | Assess control risk higher and expand substantive procedures |

### Worked Example: Honey Entertainment

Honey Entertainment requires two approvals on every vendor invoice over \$1,000. The auditor sets a tolerable deviation rate of 6%, works at 95% confidence, and tests 100 invoices.

| Deviations found | Sample rate | Upper deviation rate (95% confidence) | Compared to 6% tolerable | Conclusion |
|---|---|---|---|---|
| 1 | 1% | 4.7% | Below | Rely on the control |
| 2 | 2% | 6.2% | Above | Do not rely on the control |

The second row is the classic exam trap. A 2% sample rate looks comfortably below the 6% tolerable rate, but once the allowance for sampling risk is added, the auditor cannot be 95% confident that the true rate is 6% or less. The decision always turns on the **upper** deviation rate, never the sample rate alone.

### Step 4: Consider the Nature of the Deviations

Numbers are not the whole story. Even when the upper deviation rate is acceptable, the auditor asks whether the deviations were intentional, whether they cluster in one period or with one employee, and whether they suggest management override or fraud. A single deviation that points to fraud calls for investigation far beyond what the deviation rate would suggest.

---

## When the Control Fails

If the upper deviation rate exceeds the tolerable rate, the auditor cannot rely on the control as planned. The auditor then:

1. **Reassesses control risk** for the related assertions at a higher level.
2. **Expands substantive procedures** to make up for the lost reliance.
3. **Looks for other controls** that address the same risk and could be tested instead.
4. **Evaluates the deviation as a control deficiency**, which may need to be communicated to management and those charged with governance (see [Misstatements and Internal Control Deficiencies](../completing-the-audit-and-reporting/misstatements-and-internal-control-deficiencies.md)).

For example, the auditor of Panda Industries sets a 5% tolerable rate for the monthly review of bank reconciliations, but the upper deviation rate from the sample is 8.3%. The auditor stops relying on the review and expands substantive testing of cash, for example by obtaining a cutoff bank statement directly from the bank and testing the year-end reconciling items in detail.

:::warning[Common Pitfall]

An auditor whose initial sample fails may test more items, but the original and additional items must be evaluated together as one sample. The auditor cannot discard the original deviations or keep adding items until the results look acceptable.

:::

---

## Discovery Sampling

**Discovery sampling** is a form of attribute sampling designed to find **at least one** deviation if deviations exist at or above a very low rate. It is used when the expected deviation rate is near zero and a single deviation would be significant, such as testing whether any unauthorized wire transfers occurred at Grizzly Industries.

The auditor sets the sample size so that, if the deviation rate in the population were at or above the critical rate, the sample would almost certainly contain at least one. If the sample turns up no deviations, the auditor concludes, at the planned confidence level, that the rate is below the critical rate. If even one deviation appears, that conclusion is no longer possible, and the auditor typically stops sampling and investigates the deviation directly.
