# Public Company Reporting (SEC, EPS)

## Overview

Public companies in the United States are subject to reporting requirements established by the **Securities and Exchange Commission (SEC)**. These requirements ensure that investors receive timely, reliable financial information. The SEC mandates periodic filings and prescribes specific disclosures, including **earnings per share (EPS)**, which is one of the most tested topics on the CPA exam.
:::info Key Concept

The SEC has the statutory authority to set accounting standards for public companies but has historically delegated that role to the FASB. However, the SEC establishes **reporting and disclosure** requirements through Regulation S-X (financial statement rules) and Regulation S-K (non-financial disclosures).

:::
## SEC Filing Requirements

### Filer Categories

The SEC classifies registrants into three categories based on **public float** (market value of voting and non-voting common equity held by non-affiliates):
| Filer Type | Public Float | Revenue Test |
|---|---|---|
| **Large Accelerated Filer** | ≥ \$700 million | N/A |
| **Accelerated Filer** | ≥ \$75 million but < \$700 million | N/A |
| **Non-Accelerated Filer** | < \$75 million | N/A |
| **Smaller Reporting Company** | < \$250 million (or < \$100M revenue with < \$700M float) | See threshold |
:::tip CPA Exam Tip

The filing deadlines depend on filer category. Large accelerated filers have the **shortest** deadlines because they have the most resources to prepare filings.

:::
### Form 10-K (Annual Report)

The Form 10-K is the **annual report** filed with the SEC. It includes:

- **Audited financial statements** (balance sheet, income statement, cash flows, stockholders' equity, comprehensive income)
- **Management's Discussion and Analysis (MD&A)**
- **Selected financial data** (5-year summary, though recently simplified)
- **Report of independent registered public accounting firm**
- **Internal control over financial reporting** (for accelerated filers)

#### 10-K Filing Deadlines

| Filer Type              | Deadline After Fiscal Year-End |
| ----------------------- | ------------------------------ |
| Large Accelerated Filer | **60 days**                    |
| Accelerated Filer       | **75 days**                    |
| Non-Accelerated Filer   | **90 days**                    |

### Form 10-Q (Quarterly Report)

The Form 10-Q is filed for each of the **first three fiscal quarters** (not the fourth — that's covered by the 10-K). It includes:

- **Unaudited** (but reviewed) interim financial statements
- Condensed balance sheet, income statement, and cash flows
- Interim **MD&A**
- Updates to risk factors

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
- Changes in certifying accountant
- Changes in control of the registrant
- Departure of directors or principal officers
- Unregistered sales of equity securities
  :::note
  Form 8-K has **no** financial statement requirement — it is an event-driven disclosure.
  :::

## Earnings Per Share (EPS)

EPS is governed by **ASC 260** (Earnings Per Share) and is required to be reported on the **face of the income statement** by all public entities.

### Simple vs. Complex Capital Structure

| Structure   | Description                                                                              | EPS Reported                      |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------- |
| **Simple**  | Only common stock outstanding (no potentially dilutive securities)                       | **Basic EPS** only                |
| **Complex** | Has potentially dilutive securities (options, warrants, convertibles, contingent shares) | **Basic EPS** and **Diluted EPS** |

:::warning

EPS is reported with **equal prominence** on the face of the income statement. If both basic and diluted EPS are presented, they must be equally visible. EPS must be shown for both **income from continuing operations** and **net income**.

:::
## Basic EPS

### Formula

$$
\text{Basic EPS} = \frac{\text{Income Available to Common Shareholders}}{\text{Weighted Average Common Shares Outstanding}}
$$

### Numerator: Income Available to Common Shareholders

Start with **net income** and adjust for preferred stock dividends:
| Preferred Stock Type | Adjustment |
|---|---|
| **Cumulative preferred** | Subtract the **annual dividend** regardless of whether declared |
| **Noncumulative preferred** | Subtract dividends **only if declared** |

$$
\text{Income Available} = \text{Net Income} - \text{Preferred Dividends}
$$

:::danger

For **cumulative** preferred stock, you **always** subtract the annual dividend — even if the board did not declare a dividend that year. This is the most commonly tested nuance.

:::
### Denominator: Weighted Average Shares Outstanding

Shares are weighted by the **fraction of the year** they were outstanding.

> **Example:** Bear Co. has the following common stock activity during the year:
> | Date | Event | Shares |
> |---|---|---|
> | Jan 1 | Beginning balance | 100,000 |
> | Apr 1 | Issued new shares | +20,000 |
> | Oct 1 | Repurchased treasury shares | −10,000 |

$$
\text{WACSO} = (100{,}000 \times \tfrac{12}{12}) + (20{,}000 \times \tfrac{9}{12}) + (-10{,}000 \times \tfrac{3}{12})
$$

$$
= 100{,}000 + 15{,}000 - 2{,}500 = 112{,}500
$$

If Bear Co. reported net income of \$450,000 and had \$50,000 in cumulative preferred dividends:

$$
\text{Basic EPS} = \frac{\$450{,}000 - \$50{,}000}{112{,}500} = \frac{\$400{,}000}{112{,}500} = \$3.56
$$

### Stock Dividends and Stock Splits

Stock dividends and stock splits are treated as if they occurred at the **beginning of the earliest period presented**. This means:

- **Retroactively adjust** all prior periods
- No weighting is needed — apply to the entire period
  > If Bear Co. declared a 2-for-1 stock split on July 1, the weighted average shares would use the post-split number for the **entire year**.

## Diluted EPS

Diluted EPS assumes that all **potentially dilutive securities** have been converted or exercised. It represents the **worst-case** EPS scenario.

$$
\text{Diluted EPS} = \frac{\text{Adjusted Income}}{\text{Adjusted Weighted Average Shares}}
$$

### If-Converted Method (Convertible Securities)

Used for **convertible bonds** and **convertible preferred stock**. Assumes conversion occurred at the **beginning of the period** (or date of issuance, if later).

#### Convertible Bonds

- **Numerator:** Add back interest expense (net of tax) that would not have been paid
- **Denominator:** Add the shares that would have been issued upon conversion
  > MAS Inc. has \$1,000,000 of 6% convertible bonds, convertible into 50,000 shares. Tax rate is 25%.
  > **Numerator adjustment:**
  $$
  \text{Interest saved} = \$1{,}000{,}000 \times 6\% = \$60{,}000
  $$
  $$
  \text{After-tax} = \$60{,}000 \times (1 - 0.25) = \$45{,}000
  $$
  **Denominator adjustment:** +50,000 shares

#### Convertible Preferred Stock

- **Numerator:** Add back the preferred dividends that were subtracted in basic EPS
- **Denominator:** Add the shares that would have been issued upon conversion
  > Gies Co. has 10,000 shares of convertible preferred stock (\$5 dividend per share), each convertible into 4 common shares.
  > **Numerator adjustment:** +\$50,000 (preferred dividends added back)
  > **Denominator adjustment:** +40,000 shares
  > :::info
  > For convertible preferred stock, there is **no tax adjustment** because preferred dividends are not tax-deductible.
  > :::

### Treasury Stock Method (Options & Warrants)

Used for **stock options** and **warrants**. Assumes the proceeds from exercise are used to **buy back shares** at the average market price.
**Steps:**

1. Assume all options/warrants are exercised → shares issued
2. Calculate proceeds: shares × exercise price
3. Assume proceeds used to repurchase shares at average market price
4. **Net new shares** = shares issued − shares repurchased
   > Illini Entertainment has 10,000 stock options with an exercise price of \$20. The average market price is \$50.
   $$
   \text{Proceeds} = 10{,}000 \times \$20 = \$200{,}000
   $$
   $$
   \text{Shares repurchased} = \frac{\$200{,}000}{\$50} = 4{,}000
   $$
   $$
   \text{Net new shares} = 10{,}000 - 4{,}000 = 6{,}000
   $$
   **Numerator adjustment:** \$0 (no income effect for options)
   **Denominator adjustment:** +6,000 shares
   :::warning
   Options and warrants are dilutive **only when the exercise price is below the average market price** (in-the-money). If the exercise price exceeds the market price, the security is **antidilutive** and excluded.
   :::

### Potentially Dilutive Securities

The following securities may be potentially dilutive:
| Security | Method | Dilutive When |
|---|---|---|
| Stock options/warrants | Treasury stock | Exercise price < average market price |
| Convertible bonds | If-converted | Incremental EPS < basic EPS |
| Convertible preferred | If-converted | Incremental EPS < basic EPS |
| Contingently issuable shares | Include if conditions are met | Conditions are satisfied by period-end |

### Antidilution Rule

:::danger Critical Rule

A security is **antidilutive** if including it would **increase** EPS (or decrease the loss per share). Antidilutive securities are **excluded** from diluted EPS.
Test each security individually, ranking from **most dilutive to least dilutive** (lowest incremental EPS to highest). Add securities one at a time — stop when adding the next security would be antidilutive.

:::
**Incremental EPS for each security:**

$$
\text{Incremental EPS} = \frac{\text{Increase in Numerator}}{\text{Increase in Denominator}}
$$

> **Example:** BIF Partners has basic EPS of \$4.00 and three potentially dilutive securities:
> | Security | Numerator Effect | Denominator Effect | Incremental EPS |
> |---|---|---|---|
> | Options | \$0 | +5,000 | \$0.00 |
> | Convertible bonds | +\$30,000 | +10,000 | \$3.00 |
> | Convertible preferred | +\$80,000 | +15,000 | \$5.33 |
> Rank by incremental EPS: Options (\$0.00), Bonds (\$3.00), Preferred (\$5.33).

1. **Add Options:** EPS = \$400,000 / 105,000 = \$3.81 ✓ (dilutive)
2. **Add Bonds:** EPS = \$430,000 / 115,000 = \$3.74 ✓ (dilutive)
3. **Add Preferred:** EPS = \$510,000 / 130,000 = \$3.92 ✗ (antidilutive — EPS increased from \$3.74)
   **Diluted EPS = \$3.74** (exclude convertible preferred)

## EPS Disclosure Requirements

ASC 260 requires the following disclosures:

- Basic and diluted EPS on the **face of the income statement**
- EPS for **income from continuing operations** and **net income**
- EPS for discontinued operations may be presented on the face or in the notes
- A **reconciliation** of the numerator and denominator from basic to diluted EPS
- Description of potentially dilutive securities not included due to antidilution

## Comprehensive Example

Kingfisher Industries reports the following for the year ended December 31:
| Item | Amount |
|---|---|
| Net income | \$900,000 |
| Cumulative preferred dividends (nonconvertible) | \$100,000 |
| Weighted average common shares | 200,000 |
| 8% convertible bonds (face \$500,000; convertible into 20,000 shares) | Interest = \$40,000 |
| Stock options (15,000 options, exercise price \$25, avg market price \$50) | — |
| Tax rate | 25% |
**Step 1: Basic EPS**

$$
\text{Basic EPS} = \frac{\$900{,}000 - \$100{,}000}{200{,}000} = \frac{\$800{,}000}{200{,}000} = \$4.00
$$

**Step 2: Rank dilutive securities**
| Security | Numerator Effect | Denominator Effect | Incremental EPS |
|---|---|---|---|
| Options | \$0 | +7,500 | \$0.00 |
| Convertible bonds | +\$30,000 (= \$40,000 × 0.75) | +20,000 | \$1.50 |
Options: Treasury stock method → 15,000 − (15,000 × \$25 / \$50) = 15,000 − 7,500 = **7,500 net shares**
**Step 3: Add most dilutive first**

1. Add options: (\$800,000) / (200,000 + 7,500) = \$800,000 / 207,500 = **\$3.86** ✓
2. Add bonds: (\$800,000 + \$30,000) / (207,500 + 20,000) = \$830,000 / 227,500 = **\$3.65** ✓
   **Diluted EPS = \$3.65**

## Summary

| Topic                   | Key Rule                           |
| ----------------------- | ---------------------------------- |
| 10-K deadline           | 60 / 75 / 90 days (LAF / AF / NAF) |
| 10-Q deadline           | 40 / 40 / 45 days (LAF / AF / NAF) |
| 8-K deadline            | 4 business days                    |
| Basic EPS numerator     | Net income − preferred dividends   |
| Cumulative preferred    | Always subtract dividend           |
| Noncumulative preferred | Subtract only if declared          |
| Stock splits/dividends  | Retroactive adjustment             |
| Convertible securities  | If-converted method                |
| Options/warrants        | Treasury stock method              |
| Antidilution            | Exclude if security increases EPS  |
| Ranking                 | Most dilutive to least dilutive    |

:::tip Final Exam Reminder

Always compute **basic EPS first**, then test each potentially dilutive security. On the exam, if you see options with an exercise price **above** market price, they are **out of the money** and excluded immediately.

:::