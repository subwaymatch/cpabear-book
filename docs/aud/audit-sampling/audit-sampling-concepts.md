# Audit Sampling Concepts

Audit sampling involves applying a procedure to less than 100% of items within a population for the purpose of drawing a conclusion about that entire population. Sampling is a practical necessity—auditors cannot examine every transaction—but it introduces risk that the sample may not be representative of the population. Understanding sampling concepts, risks, and methods is essential for the CPA exam.

---

## Statistical vs. Nonstatistical Sampling

Both approaches are acceptable under professional standards. The critical distinction lies in how the sample is selected and how results are evaluated.

| Feature | Statistical Sampling | Nonstatistical Sampling |
|---|---|---|
| **Selection method** | Random selection (every item has a known, nonzero probability of selection) | Auditor uses judgment to select items |
| **Evaluation** | Mathematical quantification of sampling risk | Auditor uses judgment to evaluate results |
| **Objectivity** | Higher — results are mathematically defensible | Lower — relies more on professional judgment |
| **Projection** | Results can be statistically projected to the population | Projection is based on auditor judgment |

:::info Key Point

Both statistical and nonstatistical sampling require the auditor to select a sample that is **expected to be representative** of the population. The choice between them does not affect the sufficiency or appropriateness of the evidence—both can provide effective audit evidence when properly applied.

:::
---

## Professional Judgment in Sampling

Professional judgment plays a role throughout the sampling process, regardless of whether statistical or nonstatistical methods are used:

- **Defining the population** and the sampling unit
- **Determining sample size** (even in statistical sampling, inputs like confidence level and tolerable deviation rate require judgment)
- **Evaluating results** and deciding whether additional testing is needed
- **Assessing qualitative aspects** of identified misstatements or deviations (e.g., whether they indicate fraud)

---

## Sampling Risk

**Sampling risk** is the risk that the auditor's conclusion based on a sample differs from the conclusion that would be reached if the entire population were tested. It exists because the auditor examines only a subset of the population.

:::warning

Sampling risk can lead the auditor to reach an **incorrect conclusion**. The two types of incorrect conclusions depend on whether the auditor is performing tests of controls or substantive tests.

:::
### Sampling Risk for Tests of Controls

When testing controls, two types of sampling risk exist:

| Risk | Definition | Effect | Impact |
|---|---|---|---|
| **Risk of assessing control risk too LOW** (risk of overreliance) | The sample suggests controls are effective when they are actually not | Auditor relies on ineffective controls and reduces substantive testing | Affects **audit effectiveness** — may lead to an incorrect opinion |
| **Risk of assessing control risk too HIGH** (risk of underreliance) | The sample suggests controls are ineffective when they are actually working | Auditor does not rely on controls and performs excessive substantive testing | Affects **audit efficiency** — leads to more work than necessary |

:::danger

The risk of assessing control risk **too low** is the more serious risk because it can result in an inappropriate audit opinion. The risk of assessing control risk **too high** merely causes the auditor to do more work (an efficiency issue, not an effectiveness issue).

:::
### Sampling Risk for Substantive Tests

When performing substantive tests, two types of sampling risk exist:

| Risk | Definition | Effect | Impact |
|---|---|---|---|
| **Risk of incorrect ACCEPTANCE** | The sample suggests the balance is not materially misstated when it actually is | Auditor accepts a materially misstated balance | Affects **audit effectiveness** — may lead to an incorrect opinion |
| **Risk of incorrect REJECTION** | The sample suggests the balance is materially misstated when it actually is not | Auditor rejects a balance that is fairly stated and performs additional unnecessary work | Affects **audit efficiency** — leads to wasted effort |

:::tip Memory Aid

The "dangerous" sampling risks—the ones that affect audit **effectiveness**—are:
- Tests of controls: Risk of assessing control risk **too low**
- Substantive tests: Risk of **incorrect acceptance**

Both of these risks can lead to issuing a wrong audit opinion.

:::
---

## Relationship Between Sampling Risk and Confidence Level

Sampling risk and the confidence level (also called the reliability level) are **complementary**—they sum to 100%.

$$
\text{Confidence Level} + \text{Sampling Risk} = 100\%
$$

| Confidence Level | Sampling Risk | Interpretation |
|---|---|---|
| 95% | 5% | The auditor is 95% confident the sample results reflect the population; 5% chance they do not |
| 90% | 10% | Lower confidence; higher sampling risk |
| 99% | 1% | Very high confidence; very low sampling risk |

:::info Example

If the auditor wants only a 5% risk of incorrect acceptance when testing **Gies Co.'s** accounts receivable, they need a 95% confidence level. This will result in a larger sample size compared to accepting a 10% risk.

:::
---

## Attribute Sampling

Attribute sampling is used primarily for **tests of controls**. It estimates the **rate of occurrence** of a specific characteristic (attribute) in a population—typically the deviation rate from a prescribed control.

### How It Works

1. The auditor defines the attribute of interest (e.g., whether a purchase order was properly approved)
2. A sample is selected from the population
3. Each item is evaluated as either having the attribute (deviation) or not
4. The sample deviation rate is calculated
5. The auditor compares the sample deviation rate to the **tolerable deviation rate**

:::info Example

The auditor tests **MAS Inc.'s** control requiring supervisory approval on all purchase orders over \$5,000. From a population of 500 such purchase orders, the auditor selects a sample of 60. If 3 items lack the required approval, the sample deviation rate is 3/60 = 5%.

:::
### Factors Affecting Attribute Sample Size

Several factors influence how large the sample must be:

| Factor | Relationship to Sample Size | Explanation |
|---|---|---|
| **Confidence level (1 − risk of overreliance)** | Direct | Higher confidence → larger sample |
| **Tolerable deviation rate** | Inverse | Lower tolerable rate → larger sample (less room for error) |
| **Expected population deviation rate** | Direct | Higher expected deviations → larger sample |
| **Population size** | Minimal effect | For large populations, size has negligible impact on sample size |

:::tip

Remember the relationships: Confidence level and expected deviation rate move in the **same direction** as sample size. Tolerable deviation rate moves in the **opposite direction**.

:::
---

## Upper Deviation Rate vs. Tolerable Deviation Rate

After evaluating the sample, the auditor calculates (or looks up) the **upper deviation rate** (also called the achieved upper precision limit). This represents the maximum deviation rate in the population at the specified confidence level.

| Term | Definition |
|---|---|
| **Tolerable deviation rate (TDR)** | The maximum rate of control deviations the auditor is willing to accept and still rely on the control |
| **Upper deviation rate (UDR)** | The statistically calculated maximum deviation rate based on sample results |

### Decision Rule

- If **UDR ≤ TDR** → The control is operating effectively enough to rely upon
- If **UDR > TDR** → The control is not operating effectively enough; the auditor should increase the assessed level of control risk and expand substantive procedures

:::info Example

The auditor sets a tolerable deviation rate of 7% for **BIF Partners'** cash disbursement approval control. After testing a sample, the calculated upper deviation rate is 5.2%. Since 5.2% ≤ 7%, the auditor concludes the control is operating effectively and can be relied upon.

:::
---

## Discovery Sampling

Discovery sampling is a specialized form of attribute sampling designed to detect **at least one instance** of a critical deviation in a population, if such deviations exist at a specified rate or higher.

Key characteristics:

- Used when the expected deviation rate is **near zero**
- The tolerable deviation rate is set very low
- The sample is designed so that if deviations exist at or above the tolerable rate, the probability of finding at least one is high
- If **any deviation** is found, the conclusion is that the deviation rate exceeds the tolerable level

:::warning

Discovery sampling is most appropriate for testing controls related to **fraud or compliance** where even a single deviation is significant—for example, testing whether any unauthorized wire transfers occurred at **Kingfisher Industries**.

:::