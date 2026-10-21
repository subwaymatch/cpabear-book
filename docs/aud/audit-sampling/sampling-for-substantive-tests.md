# Sampling for Substantive Tests

Tests of controls ask how often a control failed. Tests of details ask a different question: how many dollars of misstatement does the account contain? **Variables sampling** answers that question by measuring misstatements in a sample and projecting them to the population. This chapter starts with the factors that drive sample size, then covers the two families of variables sampling the exam tests: probability-proportional-to-size (PPS) sampling and classical variables sampling. It closes with stratification and with projecting misstatements from a nonstatistical sample.

---

## Tolerable Misstatement and Sample Size

**Tolerable misstatement** is the largest misstatement in an account or class of transactions that the auditor can accept and still conclude, at the planned confidence level, that the account is not materially misstated. It plays the same role in a test of details that the tolerable deviation rate plays in a test of controls. Tolerable misstatement is set at or below performance materiality, so that misstatements found in different accounts, plus misstatements nobody found, do not add up to a material amount.

| Factor | Effect on sample size |
|---|---|
| **Tolerable misstatement** | Smaller tolerable misstatement, larger sample |
| **Acceptable risk of incorrect acceptance** | Lower acceptable risk (higher confidence), larger sample |
| **Assessed risk of material misstatement** | Higher assessed risk, larger sample |
| **Expected misstatement** | More misstatement expected, larger sample |
| **Variability of the population** (classical methods) | Greater variability (larger standard deviation), larger sample |
| **Acceptable risk of incorrect rejection** (classical methods) | Lower acceptable risk, larger sample |
| **Number of items in the population** | Little effect for large populations |

The relationships most often tested are these: a **higher tolerable misstatement** means a **smaller** sample, **more expected misstatement** means a **larger** sample, and a **higher acceptable risk of incorrect acceptance** means a **smaller** sample. Assessed risk matters too, because when controls are weak or risk is high, the auditor needs more substantive evidence.

For example, Grizzly Industries' inventory runs from \$0.50 parts to \$200,000 machines, and the auditor found pricing errors in the prior year. Both facts push the sample size up: the wide range of values raises variability, and the prior errors raise expected misstatement.

---

## Probability-Proportional-to-Size (PPS) Sampling

**PPS sampling**, also called **monetary unit sampling** or **dollar unit sampling**, treats each individual dollar in the population as a sampling unit. A \$40,000 receivable contains 40,000 dollars and is 40 times as likely to be selected as a \$1,000 receivable. When a dollar is selected, the auditor tests the whole item (the customer balance, invoice, or line item) that contains it. PPS borrows the mathematics of attribute sampling but expresses its conclusion in dollars, which is why it is used for tests of details.

### Sample Size and Sampling Interval

When the auditor expects no misstatements, the formulas are simple:

$$
\text{Sample Size} = \frac{\text{Recorded Balance} \times \text{Reliability Factor}}{\text{Tolerable Misstatement}}
\qquad
\text{Sampling Interval} = \frac{\text{Recorded Balance}}{\text{Sample Size}} = \frac{\text{Tolerable Misstatement}}{\text{Reliability Factor}}
$$

The **reliability factor** comes from a table and depends on the confidence level. For zero expected misstatements:

| Confidence level | Risk of incorrect acceptance | Reliability factor |
|---|---|---|
| 95% | 5% | 3.00 |
| 90% | 10% | 2.31 |
| 85% | 15% | 1.90 |
| 80% | 20% | 1.61 |

When the auditor expects some misstatement, the expected amount (multiplied by an expansion factor) is subtracted from tolerable misstatement before dividing, which shrinks the interval and enlarges the sample.

**Example.** Honey Entertainment's accounts receivable total \$6,000,000. Tolerable misstatement is \$200,000, and the auditor wants 95% confidence with no misstatements expected.

$$
\text{Sample Size} = \frac{\$6{,}000{,}000 \times 3.00}{\$200{,}000} = 90
\qquad
\text{Sampling Interval} = \frac{\$6{,}000{,}000}{90} = \$66{,}667
$$

The auditor picks a random starting dollar between 1 and 66,667 and then selects every 66,667th dollar after it. Any customer balance of \$66,667 or more is certain to be selected, so PPS automatically tests every large item.

### Evaluating a PPS Sample

For each misstatement found, the auditor computes a **projected misstatement**:

- If the item's recorded amount is **at least the sampling interval**, the misstatement is used as found. Every dollar of such an item was effectively tested, so there is nothing to project.
- If the item's recorded amount is **less than the interval**, the auditor computes the **tainting percentage** (misstatement divided by recorded amount) and multiplies it by the interval. The item stands in for the whole interval it was drawn from.

**Example.** Polar Inc.'s receivables total \$5,000,000. Tolerable misstatement is \$150,000, the confidence level is 95%, and no misstatements are expected, so the sample size is 100 and the interval is \$50,000. The auditor finds three overstatements:

| Customer | Recorded | Audited | Misstatement | Tainting | Projected misstatement |
|---|---|---|---|---|---|
| A | \$80,000 | \$76,000 | \$4,000 | Not applicable (item exceeds interval) | \$4,000 |
| B | \$10,000 | \$9,000 | \$1,000 | 10% | 10% × \$50,000 = \$5,000 |
| C | \$2,000 | \$1,500 | \$500 | 25% | 25% × \$50,000 = \$12,500 |
| **Total** | | | **\$5,500** | | **\$21,500** |

The auditor found only \$5,500 of actual misstatement, but the best estimate of misstatement in the population is \$21,500. To reach a conclusion, the auditor adds an **allowance for sampling risk** to get the **upper misstatement limit**: basic precision (reliability factor × interval, here 3.00 × \$50,000 = \$150,000) plus an incremental allowance for the misstatements found. The upper limit is then compared to tolerable misstatement. Here basic precision alone uses up the entire \$150,000 of tolerable misstatement, so any projected misstatement pushes the upper limit above it. The auditor cannot conclude that receivables are fairly stated at 95% confidence and would ask Polar Inc. to investigate and correct the population, perform additional testing, or propose an adjustment. Had the auditor expected some misstatement during planning, the sample would have been larger and left room for these findings.

### Advantages and Disadvantages

PPS is popular because it is efficient when few misstatements are expected. It automatically emphasizes large items, so no separate stratification step is needed. Its sample size does not depend on the population's standard deviation, which the auditor would otherwise have to estimate. Sample selection can begin before the complete population is available, for example by applying the interval to transactions as they are processed.

The weaknesses come from the same design. Items recorded at small amounts are unlikely to be selected, and items recorded at zero (or not recorded at all) cannot be selected, so PPS is poorly suited to finding **understatements**. Credit balances in a debit population need separate treatment. When many misstatements exist, the allowance for sampling risk grows quickly and the projection can be overly conservative.

:::warning

PPS is well suited to testing for **overstatement**, such as the existence of receivables, and poorly suited to testing for **understatement**, such as the completeness of payables. An unrecorded liability has no recorded dollars, so it has no chance of being selected.

:::

---

## Classical Variables Sampling

Classical variables sampling uses the normal distribution to estimate the population's audited value and build a confidence interval (precision range) around that estimate. There are three methods.

### Mean-Per-Unit Estimation

The auditor computes the average audited value of the sample items and multiplies it by the number of items in the population:

$$
\text{Estimated Population Value} = \text{Mean Audited Value per Item} \times \text{Number of Items in Population}
$$

If the auditor tests 100 of Panda Industries' 5,000 inventory items and the average audited value is \$82, the estimated population value is \$82 × 5,000 = \$410,000. Mean-per-unit does not need the recorded value of each item, so it works even when the client's detailed records are unreliable. Because it ignores recorded values, it usually needs the largest sample of the three methods.

### Ratio Estimation

The auditor computes the ratio of audited value to recorded value in the sample and applies it to the population's recorded total:

$$
\text{Estimated Population Value} = \frac{\text{Total Audited Value in Sample}}{\text{Total Recorded Value in Sample}} \times \text{Total Recorded Value of Population}
$$

If Bear Co.'s sampled receivables have a recorded value of \$150,000 and an audited value of \$147,000, the ratio is 0.98. Applied to a recorded population of \$3,000,000, the estimated value is \$2,940,000. Ratio estimation works best when misstatements are **proportional to the size** of the items.

### Difference Estimation

The auditor computes the average difference between audited and recorded values in the sample and projects it to the population:

$$
\text{Estimated Population Misstatement} = \text{Mean Difference per Item} \times \text{Number of Items in Population}
$$

If 80 of Polar Inc.'s fixed asset records show an average overstatement of \$45 and the population has 2,000 items, the estimated overstatement is \$45 × 2,000 = \$90,000. Difference estimation works best when misstatements are **roughly constant in dollar amount**, regardless of item size.

Both ratio and difference estimation need the recorded value of each item, and both need a reasonable number of misstatements in the sample to produce a reliable estimate. When the sample contains few or no misstatements, PPS is usually the better choice.

| Feature | Mean-per-unit | Ratio estimation | Difference estimation |
|---|---|---|---|
| Needs recorded value of each item? | No | Yes | Yes |
| Works best when misstatements are | Not applicable | Proportional to item size | Similar in dollar amount |
| Relative sample size | Largest | Smaller | Smaller |
| Usable when detailed records are unreliable? | Yes | No | No |

### The Decision Rule

The auditor compares the client's recorded amount to the confidence interval around the estimate. Suppose the auditor estimates Kodiak Partners' receivables at \$4,850,000 with a precision of ±\$200,000, giving an interval of \$4,650,000 to \$5,050,000. The recorded balance of \$4,920,000 falls inside the interval, so the auditor concludes the balance is not materially misstated. A recorded amount outside the interval would mean the balance may be materially misstated, and the auditor would investigate further or propose an adjustment.

---

## Stratification

**Stratification** divides a population into groups (strata) of similar items, usually by dollar size, and samples each group separately. Because items within a stratum are more alike, variability falls, and a smaller total sample achieves the same precision. Stratification also guarantees attention to large items and lets the auditor apply different approaches to different strata.

Sloth Security has 3,000 customer accounts ranging from \$100 to \$750,000. The auditor stratifies the population:

| Stratum | Balance range | Number of accounts | Approach |
|---|---|---|---|
| 1 | Over \$100,000 | 25 | Test all 25 (individually significant) |
| 2 | \$10,000 to \$100,000 | 275 | Select a sample |
| 3 | Under \$10,000 | 2,700 | Select a smaller sample |

Stratification matters most for classical variables sampling, where variability drives sample size. PPS stratifies automatically, because every dollar has an equal chance of selection and large items therefore dominate the sample.

---

## Projecting Misstatements from a Nonstatistical Sample

Whatever the method, the auditor must project the misstatements found in the sample to the population. A sample's known misstatements are never the whole answer. In a nonstatistical sample, a common approach is the ratio of misstatement to the dollars sampled.

Bear Co.'s accounts payable total \$2,000,000. The auditor tests items totaling \$400,000 and finds \$6,000 of misstatement, a rate of 1.5%. The projected misstatement is 1.5% × \$2,000,000 = \$30,000. (Difference projection works the same way, using the average misstatement per item instead.)

The auditor then compares projected misstatement to tolerable misstatement. If projected misstatement exceeds tolerable misstatement, the sample does not support the recorded amount. If it is well below, as \$30,000 is below a tolerable misstatement of \$100,000, the auditor can usually conclude the account is not materially misstated. If it is close, a nonstatistical sample cannot measure the remaining sampling risk, so the auditor generally performs more testing or asks the client to investigate and correct the population. The projected misstatement, not just the \$6,000 actually found, goes onto the summary of misstatements described in [Misstatements and Internal Control Deficiencies](../completing-the-audit-and-reporting/misstatements-and-internal-control-deficiencies.md).
