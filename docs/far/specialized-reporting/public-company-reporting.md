# Public Company Reporting (SEC, EPS)

## Overview

Public companies in the United States must meet reporting requirements set by the **Securities and Exchange Commission (SEC)**. These requirements give investors timely, reliable financial information. The SEC requires periodic filings and specific disclosures, including **earnings per share (EPS)**, one of the most tested topics on the CPA exam.

:::info[Key Concept]

The SEC has statutory authority to set accounting standards for public companies but has historically relied on the Financial Accounting Standards Board (FASB) to set them. The SEC does set **reporting and disclosure** requirements, through Regulation S-X (form and content of financial statements) and Regulation S-K (nonfinancial disclosures).

:::

## SEC Filing Requirements

### Filer Categories

The SEC classifies registrants into three filer categories based on **public float**: the market value of voting and nonvoting common equity held by nonaffiliates.

| Filer Type | Public Float |
|---|---|
| **Large Accelerated Filer** | ≥ \$700 million |
| **Accelerated Filer** | ≥ \$75 million but < \$700 million |
| **Non-Accelerated Filer** | < \$75 million |

A **smaller reporting company (SRC)** has public float below \$250 million, or annual revenue below \$100 million with public float below \$700 million. SRC status is separate from filer category and allows scaled-down disclosures.

:::tip[CPA Exam Tip]

Filing deadlines depend on the filer category. Large accelerated filers have the **shortest** deadlines because they have the most resources to prepare filings.

:::

### Form 10-K (Annual Report)

The Form 10-K is the **annual report** filed with the SEC. It includes:

- **Audited financial statements** (balance sheet, income statement, statement of comprehensive income, statement of cash flows, and statement of stockholders' equity)
- **Management's Discussion and Analysis (MD&A)**
- **Report of the independent registered public accounting firm**
- **Management's report on internal control over financial reporting (ICFR)**, required of all filers; the auditor's attestation on ICFR is required only for accelerated and large accelerated filers

The SEC eliminated the former requirement for a five-year table of **selected financial data** in 2021.

#### 10-K Filing Deadlines

| Filer Type              | Deadline After Fiscal Year-End |
| ----------------------- | ------------------------------ |
| Large Accelerated Filer | **60 days**                    |
| Accelerated Filer       | **75 days**                    |
| Non-Accelerated Filer   | **90 days**                    |

### Form 10-Q (Quarterly Report)

The Form 10-Q is filed for each of the **first three fiscal quarters**. The 10-K covers the fourth quarter. The 10-Q includes:

- **Unaudited** condensed interim financial statements (balance sheet, income statement, and statement of cash flows), reviewed by the independent auditor
- Interim **MD&A**
- Material changes to risk factors

#### 10-Q Filing Deadlines

| Filer Type              | Deadline After Quarter-End |
| ----------------------- | -------------------------- |
| Large Accelerated Filer | **40 days**                |
| Accelerated Filer       | **40 days**                |
| Non-Accelerated Filer   | **45 days**                |

### Form 8-K (Current Report)

The Form 8-K reports **material events** that occur between periodic filings. It must generally be filed within **4 business days** of the triggering event.

Common triggering events include:

- Entry into or termination of a material agreement
- Bankruptcy or receivership
- Acquisition or disposition of assets
- Changes in the certifying accountant
- Changes in control of the registrant
- Departure of directors or principal officers
- Unregistered sales of equity securities

:::note

Form 8-K is an event-driven report, so it does not contain a regular set of periodic financial statements. The main exception is a significant business acquisition, which requires the acquired business's financial statements and pro forma financial information (these may be filed later by amendment).

:::

## Earnings Per Share (EPS)

EPS is governed by **ASC 260**, *Earnings Per Share*, in the FASB Accounting Standards Codification (ASC). Public entities must report EPS on the **face of the income statement**.

### Simple vs. Complex Capital Structure

| Structure   | Description                                                                              | EPS Reported                      |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------- |
| **Simple**  | No potentially dilutive securities (for example, only common and nonconvertible preferred stock) | **Basic EPS** only                |
| **Complex** | Has potentially dilutive securities (options, warrants, convertibles, contingent shares) | **Basic EPS** and **Diluted EPS** |

:::warning

With a complex capital structure, basic and diluted EPS are presented with **equal prominence** on the face of the income statement. EPS must be shown for both **income from continuing operations** and **net income**.

:::

## Basic EPS

### Formula

$$
\text{Basic EPS} = \frac{\text{Income Available to Common Shareholders}}{\text{Weighted Average Common Shares Outstanding}}
$$

### Numerator: Income Available to Common Shareholders

Start with **net income** and subtract preferred stock dividends:

| Preferred Stock Type | Adjustment |
|---|---|
| **Cumulative preferred** | Subtract the **current year's dividend** whether or not it was declared (prior-year dividends in arrears are not subtracted again) |
| **Noncumulative preferred** | Subtract dividends **only if declared** |

$$
\text{Income Available} = \text{Net Income} - \text{Preferred Dividends}
$$

:::danger

For **cumulative** preferred stock, **always** subtract the current year's dividend, even if the board did not declare a dividend that year. This is the most commonly tested nuance.

:::

### Denominator: Weighted Average Shares Outstanding

Shares are weighted by the **fraction of the year** they were outstanding.

**Example:** Bear Co. has the following common stock activity during the year:

| Date | Event | Shares |
|---|---|---|
| Jan 1 | Beginning balance | 100,000 |
| Apr 1 | Issued new shares | +20,000 |
| Oct 1 | Repurchased treasury shares | (10,000) |

The weighted average common shares outstanding (WACSO) are:

$$
\text{WACSO} = (100{,}000 \times \tfrac{12}{12}) + (20{,}000 \times \tfrac{9}{12}) + (-10{,}000 \times \tfrac{3}{12})
$$

$$
= 100{,}000 + 15{,}000 - 2{,}500 = 112{,}500
$$

If Bear Co. reported net income of \$450,000 and had \$50,000 of cumulative preferred dividends:

$$
\text{Basic EPS} = \frac{\$450{,}000 - \$50{,}000}{112{,}500} = \frac{\$400{,}000}{112{,}500} = \$3.56
$$

### Stock Dividends and Stock Splits

Stock dividends and stock splits are treated as if they occurred at the **beginning of the earliest period presented**. This means:

- **Retroactively adjust** the shares for all periods presented.
- **Do not weight** the new shares by issue date; the adjustment applies to the entire period.
- Apply the same treatment to a split or stock dividend that occurs **after year-end but before the statements are issued**.

**Example:** If Bear Co. declared a 2-for-1 stock split on July 1, the weighted average share computation would use post-split share counts for the **entire year**.

## Diluted EPS

Diluted EPS assumes that all **dilutive** potential common shares were converted or exercised. It represents the **worst-case** EPS.

$$
\text{Diluted EPS} = \frac{\text{Adjusted Income}}{\text{Adjusted Weighted Average Shares}}
$$

### If-Converted Method (Convertible Securities)

Used for **convertible bonds** and **convertible preferred stock**. The method assumes conversion at the **beginning of the period** (or at the date of issuance, if later).

#### Convertible Bonds

- **Numerator:** Add back the after-tax interest expense that would not have been incurred.
- **Denominator:** Add the shares that would have been issued on conversion.

**Example:** Grizzly Inc. has \$1,000,000 of 6% convertible bonds, convertible into 50,000 shares. The tax rate is 25%.

**Numerator adjustment:**

$$
\text{Interest saved} = \$1{,}000{,}000 \times 6\% = \$60{,}000
$$

$$
\text{After-tax} = \$60{,}000 \times (1 - 0.25) = \$45{,}000
$$

**Denominator adjustment:** +50,000 shares

#### Convertible Preferred Stock

- **Numerator:** Add back the preferred dividends that were subtracted in basic EPS.
- **Denominator:** Add the shares that would have been issued on conversion.

**Example:** Polar Co. has 10,000 shares of convertible preferred stock (\$5 dividend per share), each convertible into 4 common shares.

- **Numerator adjustment:** +\$50,000 (10,000 × \$5 of preferred dividends added back)
- **Denominator adjustment:** +40,000 shares (10,000 × 4)

:::info

For convertible preferred stock, there is **no tax adjustment** because preferred dividends are not tax-deductible.

:::

### Treasury Stock Method (Options and Warrants)

Used for **stock options** and **warrants**. The method assumes the exercise proceeds are used to **buy back shares** at the average market price for the period.

**Steps:**

1. Assume all options and warrants are exercised, and count the shares issued.
2. Calculate the proceeds: shares × exercise price.
3. Assume the proceeds are used to repurchase shares at the average market price.
4. **Net new shares** = shares issued minus shares repurchased.

**Example:** Cub Entertainment has 10,000 stock options with an exercise price of \$20. The average market price is \$50.

$$
\text{Proceeds} = 10{,}000 \times \$20 = \$200{,}000
$$

$$
\text{Shares repurchased} = \frac{\$200{,}000}{\$50} = 4{,}000
$$

$$
\text{Net new shares} = 10{,}000 - 4{,}000 = 6{,}000
$$

- **Numerator adjustment:** \$0 (options have no income effect)
- **Denominator adjustment:** +6,000 shares

:::warning

Options and warrants are dilutive **only when the exercise price is below the average market price** (in the money). If the exercise price exceeds the average market price, the options are **antidilutive** and excluded.

:::

### Potentially Dilutive Securities

The following securities may be dilutive:

| Security | Method | Dilutive When |
|---|---|---|
| Stock options/warrants | Treasury stock | Exercise price < average market price |
| Convertible bonds | If-converted | Incremental EPS < basic EPS |
| Convertible preferred | If-converted | Incremental EPS < basic EPS |
| Contingently issuable shares | Include if conditions are met | Conditions are satisfied as of period-end |

### Antidilution Rule

:::danger[Critical Rule]

A security is **antidilutive** if including it would **increase** EPS (or decrease the loss per share). Antidilutive securities are **excluded** from diluted EPS.

Test each security individually, ranking from **most dilutive to least dilutive** (lowest incremental EPS to highest). Add securities one at a time, and stop when the next security would be antidilutive.

:::

If an entity reports a **loss from continuing operations**, every potential common share is antidilutive, so diluted EPS equals basic EPS.

**Incremental EPS for each security:**

$$
\text{Incremental EPS} = \frac{\text{Increase in Numerator}}{\text{Increase in Denominator}}
$$

**Example:** Kodiak Partners has income available to common shareholders of \$400,000 and 100,000 weighted average shares, so basic EPS is \$4.00. It has three potentially dilutive securities:

| Security | Numerator Effect | Denominator Effect | Incremental EPS |
|---|---|---|---|
| Options | \$0 | +5,000 | \$0.00 |
| Convertible bonds | +\$30,000 | +10,000 | \$3.00 |
| Convertible preferred | +\$80,000 | +15,000 | \$5.33 |

Rank by incremental EPS: options (\$0.00), bonds (\$3.00), preferred (\$5.33).

1. **Add options:** EPS = \$400,000 / 105,000 = \$3.81 (dilutive)
2. **Add bonds:** EPS = \$430,000 / 115,000 = \$3.74 (dilutive)
3. **Add preferred:** EPS = \$510,000 / 130,000 = \$3.92 (antidilutive, because EPS rises from \$3.74)

**Diluted EPS = \$3.74** (the convertible preferred is excluded).

## EPS Disclosure Requirements

ASC 260 requires the following disclosures:

- Basic and diluted EPS on the **face of the income statement**
- EPS for **income from continuing operations** and **net income**
- EPS for discontinued operations, either on the face of the income statement or in the notes
- A **reconciliation** of the numerators and denominators of basic and diluted EPS
- A description of potentially dilutive securities excluded because they were antidilutive

## Comprehensive Example

Panda Industries reports the following for the year ended December 31:

| Item | Amount |
|---|---|
| Net income | \$900,000 |
| Cumulative preferred dividends (nonconvertible) | \$100,000 |
| Weighted average common shares | 200,000 |
| 8% convertible bonds (face \$500,000; convertible into 20,000 shares) | Interest = \$40,000 |
| Stock options (15,000 options, exercise price \$25, average market price \$50) | N/A |
| Tax rate | 25% |

**Step 1: Basic EPS**

$$
\text{Basic EPS} = \frac{\$900{,}000 - \$100{,}000}{200{,}000} = \frac{\$800{,}000}{200{,}000} = \$4.00
$$

**Step 2: Rank the potentially dilutive securities**

Options (treasury stock method): 15,000 - (15,000 × \$25 ÷ \$50) = 15,000 - 7,500 = **7,500 net shares**

| Security | Numerator Effect | Denominator Effect | Incremental EPS |
|---|---|---|---|
| Options | \$0 | +7,500 | \$0.00 |
| Convertible bonds | +\$30,000 (= \$40,000 × 0.75) | +20,000 | \$1.50 |

**Step 3: Add the most dilutive security first**

1. Add options: \$800,000 / (200,000 + 7,500) = \$800,000 / 207,500 = **\$3.86** (dilutive)
2. Add bonds: (\$800,000 + \$30,000) / (207,500 + 20,000) = \$830,000 / 227,500 = **\$3.65** (dilutive)

**Diluted EPS = \$3.65**

## Summary

| Topic                   | Key Rule                                                       |
| ----------------------- | -------------------------------------------------------------- |
| 10-K deadline           | 60 / 75 / 90 days (large accelerated / accelerated / non-accelerated) |
| 10-Q deadline           | 40 / 40 / 45 days (large accelerated / accelerated / non-accelerated) |
| 8-K deadline            | 4 business days                                                |
| Basic EPS numerator     | Net income minus preferred dividends                           |
| Cumulative preferred    | Always subtract the current year's dividend                    |
| Noncumulative preferred | Subtract only if declared                                      |
| Stock splits/dividends  | Retroactive adjustment                                         |
| Convertible securities  | If-converted method                                            |
| Options/warrants        | Treasury stock method                                          |
| Antidilution            | Exclude if the security increases EPS                          |
| Ranking                 | Most dilutive to least dilutive                                |

:::tip[Final Exam Reminder]

Always compute **basic EPS first**, then test each potentially dilutive security. On the exam, options with an exercise price **above** the average market price are **out of the money** and excluded immediately.

:::
