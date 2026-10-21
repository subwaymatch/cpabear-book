# Public Company Reporting (SEC, EPS)

A company whose securities trade publicly in the United States takes on a continuing duty to report to investors. The **Securities Exchange Act of 1934** requires registered companies to file periodic reports with the **Securities and Exchange Commission (SEC)**, and the SEC's rules say what those reports contain and when they are due. Public companies must also report **earnings per share (EPS)**, the most widely quoted measure of a company's performance. FAR tests both halves of this chapter: the purpose of Forms 10-K, 10-Q, and 8-K and the main items in the 10-K and 10-Q, and the calculation of basic and diluted EPS.

## The SEC's Role

The SEC has statutory authority to set accounting standards for public companies, but it has long relied on the Financial Accounting Standards Board (FASB) to set them. What the SEC does set is **reporting and disclosure** requirements. **Regulation S-X** governs the form and content of the financial statements in SEC filings, and **Regulation S-K** governs the other disclosures, such as the description of the business, risk factors, and management's discussion and analysis.

---

## Filer Categories

The SEC classifies registrants into three filer categories based on **public float**, the market value of voting and nonvoting common equity held by nonaffiliates. The category determines filing deadlines and whether the auditor must attest to internal control.

| Filer Type | Public Float |
|---|---|
| **Large Accelerated Filer** | ≥ \$700 million |
| **Accelerated Filer** | ≥ \$75 million but < \$700 million |
| **Non-Accelerated Filer** | < \$75 million |

A **smaller reporting company (SRC)** has public float below \$250 million, or annual revenue below \$100 million with public float below \$700 million. SRC status is separate from filer category and allows scaled-down disclosures.

---

## Form 10-K (Annual Report)

The **Form 10-K** is the annual report filed with the SEC. It gives a complete picture of the company for the fiscal year, including its business and risk factors, its audited financial statements, and management's report on internal control over financial reporting (ICFR). Management's ICFR report is required of all filers. The auditor's attestation on ICFR is required only for accelerated and large accelerated filers. The 10-K also includes a cybersecurity section describing the company's processes for managing cybersecurity risk and the roles of the board and management in overseeing it.

FAR focuses on three items in **Part II** of the 10-K:

| Item | Title | What It Contains |
|---|---|---|
| **Item 7** | Management's Discussion and Analysis of Financial Condition and Results of Operations (MD&A) | Management's explanation of the results of operations, liquidity, and capital resources, including known trends, uncertainties, and critical accounting estimates |
| **Item 7A** | Quantitative and Qualitative Disclosures About Market Risk | The company's exposure to market risks such as interest rates, foreign currency exchange rates, commodity prices, and equity prices, and how it manages them |
| **Item 8** | Financial Statements and Supplementary Data | The audited financial statements and notes (balance sheet, income statement, statement of comprehensive income, statement of cash flows, and statement of stockholders' equity) and the independent auditor's report |

The SEC eliminated the former requirement for a five-year table of selected financial data in 2021.

| Filer Type              | 10-K Deadline After Fiscal Year-End |
| ----------------------- | ------------------------------ |
| Large Accelerated Filer | **60 days**                    |
| Accelerated Filer       | **75 days**                    |
| Non-Accelerated Filer   | **90 days**                    |

Larger filers have the **shortest** deadlines, on the theory that they have the most resources to prepare their filings.

---

## Form 10-Q (Quarterly Report)

The **Form 10-Q** is the quarterly report, filed for each of the **first three fiscal quarters**. The 10-K covers the fourth quarter, so there is no fourth-quarter 10-Q. The 10-Q keeps investors informed between annual reports. Its financial statements are **unaudited** but are **reviewed** by the independent auditor.

FAR focuses on the first three items in **Part I** of the 10-Q:

| Item | Title | What It Contains |
|---|---|---|
| **Item 1** | Financial Statements | Condensed interim financial statements: balance sheet, income statement, statement of cash flows, and an analysis of changes in stockholders' equity, with comparative periods and notes |
| **Item 2** | Management's Discussion and Analysis of Financial Condition and Results of Operations | Interim MD&A, focused on material changes since the last annual report |
| **Item 3** | Quantitative and Qualitative Disclosures About Market Risk | Material changes in market risk since the last 10-K |

Part II of the 10-Q covers other information, such as legal proceedings and material changes to risk factors.

| Filer Type              | 10-Q Deadline After Quarter-End |
| ----------------------- | -------------------------- |
| Large Accelerated Filer | **40 days**                |
| Accelerated Filer       | **40 days**                |
| Non-Accelerated Filer   | **45 days**                |

Coming change: ASU 2025-11, eligible for testing January 1, 2028, gives a complete list of the disclosures required in interim financial statements and adds a principle that interim reports disclose events since the last annual period that have a material effect on the entity.

---

## Form 8-K (Current Report)

The **Form 8-K** reports **material events** that occur between periodic filings, so investors do not have to wait for the next 10-Q or 10-K. It must generally be filed within **4 business days** of the triggering event. Common triggering events include:

- Entry into or termination of a material agreement
- Bankruptcy or receivership
- Completion of a significant acquisition or disposition of assets
- A **material cybersecurity incident** (Item 1.05), generally reported within four business days after the company determines the incident is material
- Changes in the company's certifying accountant
- A conclusion that previously issued financial statements should no longer be relied on
- Changes in control of the registrant
- Departure or appointment of directors or principal officers
- Unregistered sales of equity securities

Because the 8-K is event-driven, it does not contain a regular set of financial statements. The main exception is a significant business acquisition, which requires the acquired business's financial statements and pro forma financial information (these may be filed later by amendment).

---

## Earnings Per Share (EPS)

EPS is governed by **ASC 260**, *Earnings Per Share*. Public entities report EPS on the **face of the income statement**, for both **income from continuing operations** and **net income**.

| Structure   | Description                                                                              | EPS Reported                      |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------- |
| **Simple**  | No potentially dilutive securities (for example, only common and nonconvertible preferred stock) | **Basic EPS** only                |
| **Complex** | Has potentially dilutive securities (options, warrants, convertibles, contingent shares) | **Basic EPS** and **Diluted EPS** |

With a complex capital structure, basic and diluted EPS are presented with **equal prominence**. Basic EPS measures performance using the shares actually outstanding. Diluted EPS shows what EPS would have been if every dilutive security had become common stock.

## Basic EPS

$$
\text{Basic EPS} = \frac{\text{Income Available to Common Shareholders}}{\text{Weighted Average Common Shares Outstanding}}
$$

### Numerator: Income Available to Common Shareholders

Start with **net income** and subtract the dividends that belong to preferred shareholders for the period:

| Preferred Stock Type | Adjustment |
|---|---|
| **Cumulative preferred** | Subtract the **current year's dividend** whether or not it was declared (prior-year dividends in arrears are not subtracted again) |
| **Noncumulative preferred** | Subtract dividends **only if declared** |

The cumulative rule is the most commonly tested nuance. A cumulative preferred dividend that the board skipped is still owed to preferred shareholders before common shareholders get anything, so it reduces income available to common shareholders this year.

### Denominator: Weighted Average Shares Outstanding

Shares are weighted by the **fraction of the year** they were outstanding. Bear Co. has the following common stock activity during the year:

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

A stock dividend or split changes the number of shares without bringing in any resources, so it is treated as if it had occurred at the **beginning of the earliest period presented**. The shares are **retroactively adjusted** for all periods presented, and the new shares are **not** weighted by their issue date. The same treatment applies to a split or stock dividend that occurs **after year-end but before the statements are issued**. If Bear Co. declared a 2-for-1 stock split on July 1, the weighted average computation would use post-split share counts for the **entire year**, and prior-year EPS would be restated.

## Diluted EPS

Diluted EPS assumes that all **dilutive** potential common shares were converted or exercised. It shows the maximum potential dilution of earnings.

$$
\text{Diluted EPS} = \frac{\text{Adjusted Income}}{\text{Adjusted Weighted Average Shares}}
$$

### If-Converted Method (Convertible Securities)

The **if-converted method** is used for **convertible bonds** and **convertible preferred stock**. It assumes conversion at the **beginning of the period** (or at the date of issuance, if later), so it removes the cost of the security from the numerator and adds the shares to the denominator. Convertible instruments that the issuer may settle in cash or shares are presumed to be settled in shares for this purpose.

For **convertible bonds**, the numerator adds back the **after-tax** interest expense that would not have been incurred. Grizzly Inc. has \$1,000,000 of 6% convertible bonds, convertible into 50,000 shares. The tax rate is 25%:

- **Numerator adjustment:** \$1,000,000 × 6% × (1 - 0.25) = +\$45,000
- **Denominator adjustment:** +50,000 shares

For **convertible preferred stock**, the numerator adds back the preferred dividends that were subtracted in basic EPS. There is **no tax adjustment**, because preferred dividends are not tax-deductible. Polar Co. has 10,000 shares of convertible preferred stock (\$5 dividend per share), each convertible into 4 common shares:

- **Numerator adjustment:** +\$50,000 (10,000 × \$5 of preferred dividends added back)
- **Denominator adjustment:** +40,000 shares (10,000 × 4)

### Treasury Stock Method (Options and Warrants)

The **treasury stock method** is used for **stock options** and **warrants**. It assumes the options are exercised and the exercise proceeds are used to **buy back shares** at the average market price for the period:

1. Assume all options and warrants are exercised, and count the shares issued.
2. Calculate the proceeds: shares × exercise price.
3. Assume the proceeds are used to repurchase shares at the average market price.
4. **Net new shares** = shares issued minus shares repurchased.

Cub Entertainment has 10,000 stock options with an exercise price of \$20. The average market price is \$50.

$$
\text{Shares repurchased} = \frac{10{,}000 \times \$20}{\$50} = 4{,}000
$$

$$
\text{Net new shares} = 10{,}000 - 4{,}000 = 6{,}000
$$

The numerator does not change (options have no income effect), and the denominator increases by 6,000 shares. Options and warrants are dilutive **only when the exercise price is below the average market price** (in the money). If the exercise price is above the average market price, they are antidilutive and excluded.

### Potentially Dilutive Securities

| Security | Method | Dilutive When |
|---|---|---|
| Stock options and warrants | Treasury stock | Exercise price < average market price |
| Convertible bonds | If-converted | Incremental EPS < EPS before including it |
| Convertible preferred | If-converted | Incremental EPS < EPS before including it |
| Contingently issuable shares | Include if the conditions are met | Conditions are satisfied as of period-end |

### Antidilution

:::danger[Critical Rule]

A security is **antidilutive** if including it would **increase** EPS (or decrease the loss per share). Antidilutive securities are **excluded** from diluted EPS.

Compute each security's incremental EPS, rank the securities from **most dilutive to least dilutive** (lowest incremental EPS first), and add them one at a time. Stop when the next security would raise EPS.

:::

$$
\text{Incremental EPS} = \frac{\text{Increase in Numerator}}{\text{Increase in Denominator}}
$$

If an entity reports a **loss from continuing operations**, every potential common share is antidilutive, so diluted EPS equals basic EPS.

Sloth Security has income available to common shareholders of \$400,000 and 100,000 weighted average shares, so basic EPS is \$4.00. It has three potentially dilutive securities:

| Security | Numerator Effect | Denominator Effect | Incremental EPS |
|---|---|---|---|
| Options | \$0 | +5,000 | \$0.00 |
| Convertible bonds | +\$30,000 | +10,000 | \$3.00 |
| Convertible preferred | +\$80,000 | +15,000 | \$5.33 |

Rank by incremental EPS: options (\$0.00), bonds (\$3.00), preferred (\$5.33).

1. **Add options:** EPS = \$400,000 / 105,000 = \$3.81 (dilutive)
2. **Add bonds:** EPS = \$430,000 / 115,000 = \$3.74 (dilutive)
3. **Add preferred:** EPS = \$510,000 / 130,000 = \$3.92 (antidilutive, because EPS rises from \$3.74)

**Diluted EPS = \$3.74**. The convertible preferred is excluded.

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

## EPS Disclosure Requirements

ASC 260 requires basic and diluted EPS on the face of the income statement for income from continuing operations and net income; EPS for discontinued operations, on the face of the income statement or in the notes; a **reconciliation** of the numerators and denominators of basic and diluted EPS; and a description of potentially dilutive securities that were excluded because they were antidilutive.
