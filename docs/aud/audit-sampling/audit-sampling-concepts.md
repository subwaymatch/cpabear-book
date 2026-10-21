# Audit Sampling Concepts

No auditor examines every invoice, paycheck, and receivable. Instead, the auditor tests part of a population and uses the results to reach a conclusion about the whole. That shortcut is what makes an audit affordable, but it carries a cost: the part tested may not look like the whole. This chapter explains what counts as audit sampling, how the auditor matches the sampling method to the procedure, and the risks that come with drawing conclusions from a sample. The next two chapters apply these ideas to tests of controls and to tests of details.

---

## What Counts as Audit Sampling

**Audit sampling** is applying an audit procedure to less than 100% of the items in a population so that the items selected are expected to be representative, and then using the results to reach a conclusion about the entire population. The key word is *representative*: the auditor projects what the sample shows onto the items that were never looked at.

Not every selection of fewer than all items is sampling. When the auditor tests every item over \$50,000 in an account, or every journal entry posted on a weekend, the auditor is **selecting specific items**. The results tell the auditor about those items only; they are not projected to the rest of the population. If the remaining items could still hold a material misstatement, the auditor may sample them separately or apply other procedures.

Technology has made this distinction more practical. With audit data analytics, the auditor can run a query over all 40,000 of Bear Co.'s journal entries and flag the 120 that were posted after hours by senior management. Testing those 120 entries is a test of specific items, not sampling, and the analytic itself examined 100% of the population. Sampling remains useful when each item must be examined by hand, for example when the evidence is a signed approval on a paper invoice or a customer's confirmation reply.

---

## Matching the Method to the Procedure

The 2027 blueprint frames the choice in two pairs: the sampling method (attributes or variables) must fit the objective of the procedure (a test of controls or a test of details).

| Procedure | Sampling method | What the auditor measures | Question answered |
|---|---|---|---|
| **Test of controls** | **Attribute sampling** | The rate of deviation from a control (a yes/no characteristic) | Is the control operating effectively enough to rely on? |
| **Test of details** | **Variables sampling** (classical variables sampling or probability-proportional-to-size sampling) | The dollar amount of misstatement | Is the account balance or class of transactions materially misstated? |

Attribute sampling counts how often something happens. Each purchase order either carries the required approval or it does not. Variables sampling measures how much: each receivable is overstated by some number of dollars, or it is not misstated at all. A single sample can serve both purposes (a **dual-purpose test**), such as examining an invoice for approval and for the correct amount, but the auditor evaluates the deviation rate and the dollar misstatements separately.

---

## Statistical and Nonstatistical Sampling

Either attribute or variables sampling can be statistical or nonstatistical. Both are acceptable under AICPA and PCAOB standards, and both can provide sufficient appropriate evidence when properly applied.

| Feature | Statistical sampling | Nonstatistical sampling |
|---|---|---|
| **Selection** | Random-based selection, so every item has a known chance of selection | Judgmental selection, still expected to be representative |
| **Evaluation** | Probability theory measures sampling risk | The auditor's judgment evaluates the results |
| **Sampling risk** | Quantified (for example, 5% risk at 95% confidence) | Considered, but not measured |

The difference lies in how sampling risk is handled, not in the quality of the evidence. A nonstatistical sample should usually be about as large as a well-designed statistical sample for the same objective. Professional judgment runs through both approaches: the auditor still defines the population, sets the acceptable risk and tolerable error, and decides what the results mean.

### Selection Methods

| Method | How it works | Use |
|---|---|---|
| **Random selection** | Every item has an equal chance, typically chosen with a random number generator | Statistical or nonstatistical |
| **Systematic selection** | Every *n*th item after a random start | Statistical if the start is random; the auditor must make sure the population has no pattern that lines up with the interval |
| **Monetary unit selection** | Every *n*th dollar, so larger items are more likely to be chosen | Probability-proportional-to-size sampling (see the substantive tests chapter) |
| **Haphazard selection** | The auditor picks items without a structured technique but avoids conscious bias | Nonstatistical only |
| **Block selection** | A contiguous group, such as all December disbursements | Rarely appropriate on its own, because one block seldom represents a full year |

---

## Sampling Risk and Nonsampling Risk

**Sampling risk** is the risk that the auditor's conclusion from a sample differs from the conclusion the auditor would reach if the entire population were tested. It exists only because the auditor looked at a sample. Larger samples reduce it, and testing 100% of the items eliminates it.

**Nonsampling risk** is the risk of a wrong conclusion for any other reason: choosing a procedure that cannot detect the problem (vouching recorded payables will never find an unrecorded one), misreading the evidence, or failing to recognize a deviation. A larger sample does nothing for nonsampling risk. Adequate planning, supervision, and the firm's quality management reduce it.

### The Four Sampling Risks

Sampling risk can push the auditor in either direction, and the consequences are not equal.

| Procedure | Risk to audit **effectiveness** (wrong opinion) | Risk to audit **efficiency** (extra work) |
|---|---|---|
| **Test of controls** | **Risk of assessing control risk too low** (risk of overreliance): the sample suggests the control works when it does not | **Risk of assessing control risk too high** (risk of underreliance): the sample suggests the control fails when it works |
| **Test of details** | **Risk of incorrect acceptance**: the sample suggests the balance is fairly stated when it is materially misstated | **Risk of incorrect rejection**: the sample suggests the balance is misstated when it is fairly stated |

The effectiveness risks are the dangerous ones. If the auditor relies on a control that does not work, or accepts a balance that is materially wrong, the audit can end in an inappropriate opinion. The efficiency risks are costly but self-correcting: the auditor does more testing than needed, and the extra work usually reveals that the population was fine.

:::tip[Memory Aid]

The risks that threaten the opinion are the ones that make things look **better** than they are: control risk assessed **too low**, and **incorrect acceptance**. Sample size planning focuses on these two.

:::

### Confidence Level

The **confidence level** (also called the reliability level) is the complement of sampling risk:

$$
\text{Confidence Level} + \text{Sampling Risk} = 100\%
$$

If the auditor will accept only a 5% risk of incorrect acceptance when testing Bear Co.'s accounts receivable, the auditor is working at a 95% confidence level. Moving to 90% confidence (10% risk) allows a smaller sample, and moving to 99% confidence requires a larger one.

---

## How the Next Two Chapters Fit

The chapter on tests of controls covers attribute sampling in detail: defining a deviation, setting the tolerable deviation rate, sizing the sample, and comparing the upper deviation rate to the tolerable rate. The chapter on substantive tests covers variables sampling: probability-proportional-to-size sampling, the classical methods (mean-per-unit, ratio, and difference estimation), stratification, and how to project the misstatements found in a sample onto the whole population.
