# Sampling for Substantive Tests

While attribute sampling addresses the **rate of deviations** for tests of controls, substantive testing focuses on the **dollar amounts** of account balances and transactions. Variables sampling—also known as estimation sampling—allows the auditor to estimate a numerical value (such as the total dollar amount of a population) or to determine whether a recorded balance is materially misstated.

---

## Variables Sampling

Variables sampling is used in **substantive testing** to estimate the monetary value of a population or to test whether a recorded amount is fairly stated. Unlike attribute sampling (which evaluates yes/no characteristics), variables sampling measures **continuous numerical values**.

The auditor uses variables sampling to:

- Estimate the total dollar value of an account balance
- Determine whether the difference between the recorded amount and the estimated (audited) amount is material
- Project sample misstatements to the entire population

---

## Tolerable Misstatement

**Tolerable misstatement** is the maximum monetary error in an account balance that the auditor is willing to accept and still conclude the balance is not materially misstated. It is the substantive testing equivalent of the tolerable deviation rate in attribute sampling.

:::tip
Tolerable misstatement is typically set at or below **materiality** for the account being tested. The lower the tolerable misstatement, the larger the required sample size, because the auditor needs more evidence to conclude the account is fairly stated within a tighter margin.
:::

---

## Factors Affecting Variables Sample Size

Several factors influence the sample size for variables sampling. Understanding the direction of each relationship is critical for the CPA exam.

| Factor | Relationship to Sample Size | Explanation |
|---|---|---|
| **Variability in the population** | Direct | Greater variability (larger standard deviation) → larger sample needed for precision |
| **Tolerable misstatement** | Inverse | Smaller tolerable misstatement → larger sample needed |
| **Acceptable risk of incorrect acceptance** | Inverse | Lower acceptable risk → larger sample (more evidence required) |
| **Expected misstatement** | Direct | Higher expected misstatement → larger sample needed to distinguish between actual and expected errors |
| **Assessed risk of material misstatement** | Direct | Higher assessed risk → larger sample needed |
| **Population size** | Direct (minimal effect) | Larger populations may require marginally larger samples, but the effect is usually small |

:::warning
The most commonly tested relationships on the CPA exam are:
- **Tolerable misstatement ↑ → Sample size ↓** (inverse)
- **Expected misstatement ↑ → Sample size ↑** (direct)
- **Acceptable risk of incorrect acceptance ↑ → Sample size ↓** (inverse)
:::

:::info Example
The auditor is planning a variables sample to test **Kingfisher Industries'** inventory balance. Because inventory items range from $0.50 parts to $200,000 equipment, the high variability requires a larger sample. Additionally, because the auditor found inventory errors in the prior year, the expected misstatement is set higher, further increasing the required sample size.
:::

---

## Comparing Book Value to Calculated Range

After the sample is tested, the auditor uses the results to calculate a **point estimate** of the total population value and a **confidence interval** (precision range) around that estimate.

### Decision Rule

| Scenario | Conclusion |
|---|---|
| The **recorded book value** falls **within** the confidence interval | The balance is **not materially misstated** — accept the book value |
| The **recorded book value** falls **outside** the confidence interval | The balance **may be materially misstated** — investigate further or propose an adjustment |

:::info Example
The auditor tests a sample of **BIF Partners'** accounts receivable and calculates a point estimate of $4,850,000 with a precision interval of ±$200,000 (i.e., $4,650,000 to $5,050,000). The recorded book value is $4,920,000. Since $4,920,000 falls within the range, the auditor concludes the balance is not materially misstated.
:::

---

## Three Classical Variables Sampling Plans

The auditor may choose from three classical variables sampling approaches. Each takes a different path to estimating the population total.

### 1. Mean-Per-Unit (MPU) Estimation

The auditor calculates the **average audited value** per item in the sample and multiplies by the number of items in the population to estimate the total population value.

$$
\text{Estimated Population Value} = \text{Mean Audited Value per Item} \times \text{Number of Items in Population}
$$

**Characteristics:**
- Does **not** require the book value of individual population items
- Can be used even when the client's records are unreliable
- Tends to require **larger sample sizes** than ratio or difference estimation
- Results in wider confidence intervals unless the population has low variability

:::info Example
The auditor selects 100 items from **MSA Records'** inventory of 5,000 items. The average audited value per sample item is $82. The estimated population total is $82 × 5,000 = $410,000.
:::

### 2. Ratio Estimation

The auditor calculates the **ratio** of the total audited value to the total book value in the sample, then applies that ratio to the total population book value.

$$
\text{Estimated Population Value} = \frac{\text{Total Audited Value in Sample}}{\text{Total Book Value in Sample}} \times \text{Total Population Book Value}
$$

**Characteristics:**
- Requires **book values** for each individual item in the sample
- Most effective when the **size of misstatements is proportional** to the book value of items
- Generally produces **smaller sample sizes** than MPU when there is a high correlation between book and audited values

:::info Example
From a sample of **Gies Co.'s** receivables, the total book value is $150,000 and the total audited value is $147,000. The ratio is $147,000 / $150,000 = 0.98. If the total population book value is $3,000,000, the estimated population value is $3,000,000 × 0.98 = $2,940,000.
:::

### 3. Difference Estimation

The auditor calculates the **average difference** between the audited value and the book value for sample items, then projects that average difference to the population.

$$
\text{Estimated Population Misstatement} = \text{Mean Difference per Item} \times \text{Number of Items in Population}
$$

**Characteristics:**
- Requires **book values** for each individual item in the sample
- Most effective when **misstatements are frequent** and of varying sizes
- Produces efficient results when there is a **consistent dollar difference** across items (rather than a proportional one)

:::info Example
The auditor tests 80 items from **MAS Inc.'s** fixed asset records and finds that the average overstatement per item is $45. With a population of 2,000 fixed assets, the estimated total overstatement is $45 × 2,000 = $90,000.
:::

### Comparison of the Three Plans

| Feature | Mean-Per-Unit | Ratio Estimation | Difference Estimation |
|---|---|---|---|
| Requires individual book values? | No | Yes | Yes |
| Best when misstatements are... | N/A | Proportional to book value | Constant dollar amounts |
| Typical sample size | Largest | Smaller | Smaller |
| Useful when book values are unreliable? | Yes | No | No |

---

## Probability-Proportional-to-Size (PPS) Sampling

PPS sampling (also known as **monetary unit sampling** or **dollar unit sampling**) is a widely used statistical sampling technique that treats each individual dollar in a population as a separate sampling unit.

### Definition

In PPS sampling, every **dollar** in the account balance has an equal chance of being selected. Larger items are more likely to be selected because they contain more dollars—effectively building stratification into the sample design.

### Advantages of PPS Sampling

- **Automatically emphasizes larger items** — No separate stratification step is needed
- **Easier to apply** — Sample size formulas are simpler than classical methods
- **Efficient for populations with few expected misstatements** — Works well when the auditor expects a low rate of error
- **Can begin sampling before the complete population is available** — The auditor needs only the total recorded balance, not a complete listing, to determine the sampling interval
- **Conservative results** — Tends to produce larger projected misstatements, which is a safeguard

### Disadvantages of PPS Sampling

- **Not well-suited for understatements** — Since larger recorded amounts are more likely to be selected, items recorded at zero or understated amounts may be missed
- **Overstated items with zero balances are excluded** — An item recorded at $0 has zero chance of selection
- **Can overstate misstatements when many errors exist** — If the population contains numerous misstatements, PPS may produce an overly conservative projection
- **Requires special consideration for negative balances** — Credit balances in a debit population (or vice versa) require special handling

:::warning
PPS sampling is **excellent** for testing for overstatements (such as existence of receivables) but is **poorly suited** for testing for understatements (such as completeness of payables) because understated or omitted items contain fewer or zero dollars and are less likely to be selected.
:::

### Sampling Interval Calculation

The sampling interval determines which dollars are selected from the population:

$$
\text{Sampling Interval} = \frac{\text{Recorded Balance of Population}}{\text{Sample Size}}
$$

Or equivalently:

$$
\text{Sampling Interval} = \frac{\text{Tolerable Misstatement}}{\text{Reliability Factor}}
$$

The **reliability factor** is determined by the desired confidence level and is obtained from statistical tables.

| Confidence Level | Risk of Incorrect Acceptance | Reliability Factor (0 expected errors) |
|---|---|---|
| 95% | 5% | 3.00 |
| 90% | 10% | 2.31 |
| 85% | 15% | 1.90 |
| 80% | 20% | 1.61 |

### Sample Size Calculation

$$
\text{Sample Size} = \frac{\text{Recorded Balance} \times \text{Reliability Factor}}{\text{Tolerable Misstatement}}
$$

:::info Example
The auditor is testing **Illini Entertainment's** accounts receivable balance of $6,000,000. The tolerable misstatement is $200,000, and the desired confidence level is 95% (reliability factor = 3.00, assuming zero expected errors).

$$
\text{Sample Size} = \frac{\$6{,}000{,}000 \times 3.00}{\$200{,}000} = 90 \text{ items}
$$

$$
\text{Sampling Interval} = \frac{\$6{,}000{,}000}{90} = \$66{,}667
$$

Every 66,667th dollar is selected, and the transaction (or customer balance) that contains that dollar becomes part of the sample.
:::

---

## Stratification

### Purpose

**Stratification** is the process of dividing a population into subgroups (strata) that share similar characteristics—typically dollar value—before selecting a sample from each stratum. The primary purpose is to **reduce variability** within each subgroup, which improves the efficiency and precision of the sample.

### When Stratification Is Used

Stratification is particularly useful when:

- The population contains items of **widely varying sizes** (e.g., both $50 and $500,000 receivables)
- The auditor wants to ensure that **large, individually significant items** receive adequate attention
- The auditor is using **classical variables sampling** (MPU, ratio, or difference estimation) and wants to reduce the required sample size

:::info Example
**Illini Security** has 3,000 customer accounts ranging from $100 to $750,000. The auditor stratifies the population into three groups:

| Stratum | Balance Range | Number of Accounts | Approach |
|---|---|---|---|
| 1 | Over $100,000 | 25 | Test 100% (individually significant) |
| 2 | $10,000 – $100,000 | 275 | Select a statistical sample |
| 3 | Under $10,000 | 2,700 | Select a smaller statistical sample |

By stratifying, the auditor ensures comprehensive coverage of large balances while maintaining an efficient sample size for smaller balances.
:::

### Stratification and PPS Sampling

:::note
PPS sampling **inherently stratifies** because each dollar has an equal probability of selection. Larger items are automatically more likely to be included in the sample. Therefore, separate stratification is generally unnecessary when using PPS sampling—it is already built into the methodology.
:::

### Benefits of Stratification

- **Reduces overall sample size** needed to achieve a given level of precision
- **Ensures coverage** of high-value items that could individually cause a material misstatement
- **Improves the precision** of the population estimate by reducing variability within each stratum
- **Allows different testing approaches** for different strata (e.g., 100% testing of the top stratum, sampling for lower strata)
