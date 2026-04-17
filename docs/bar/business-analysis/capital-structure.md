# Capital Structure

Capital structure refers to the mix of **debt** and **equity** a company uses to finance its assets and operations. Decisions about capital structure directly affect cost of capital, financial risk, earnings per share, and compliance with loan covenants. On the BAR section, you must be able to calculate the cost of capital, evaluate the impact of structural changes, and compare financing strategies within the context of an optimal capital structure.

:::info[Blueprint Coverage]

This topic maps to **Area I, Group B, Topic 2** of the 2026 CPA Exam Blueprints. You should be prepared to calculate cost of capital, determine how changes in capital structure affect covenants and leverage, compare financing strategies, and interpret impacts on financial statements and key performance measures.

:::

---

## Overview of Capital Structure

Every company funds its operations through some combination of debt (borrowed funds) and equity (owner investment and retained earnings). The **optimal capital structure** is the mix that minimizes the company's weighted average cost of capital (WACC) while maintaining an acceptable level of financial risk.

| Component | Examples | Cost to the Firm | Risk to the Firm |
|---|---|---|---|
| Debt | Bonds, bank loans, notes payable | Interest expense (tax-deductible) | Mandatory payments; default risk |
| Preferred Equity | Preferred stock | Preferred dividends (not tax-deductible) | No legal obligation, but expected |
| Common Equity | Common stock, retained earnings | Required return demanded by shareholders | No fixed obligation; dilution risk |

:::tip[Key Insight]

Debt is generally cheaper than equity because (1) interest is tax-deductible and (2) debt holders accept lower returns since they have priority in liquidation. However, adding too much debt increases financial risk and can raise borrowing costs.

:::

---

## Cost of Capital

The cost of capital represents the minimum return a company must earn on its investments to satisfy its investors. Each source of financing has its own cost.

### Cost of Debt (After-Tax)

Because interest expense is tax-deductible, the **after-tax cost of debt** is lower than the stated interest rate:

$$
k_d = r_d \times (1 - T)
$$

Where $k_d$ is the after-tax cost of debt, $r_d$ is the pre-tax interest rate, and $T$ is the marginal tax rate.

**Example — Bear Co.:** Bear Co. issues bonds at a 6% coupon rate. Its marginal tax rate is 25%.

$$
k_d = 0.06 \times (1 - 0.25) = 0.045 = 4.5\%
$$

### Cost of Equity

Two primary models are used to estimate the cost of equity on the CPA exam.

#### Capital Asset Pricing Model (CAPM)

$$
k_e = R_f + \beta \times (R_m - R_f)
$$

Where $R_f$ is the risk-free rate, $\beta$ (beta) measures systematic risk, and $R_m - R_f$ is the market risk premium.

**Example — Gies Co.:** The risk-free rate is 3%, Gies Co.'s beta is 1.2, and the market risk premium is 7%.

$$
k_e = 0.03 + 1.2 \times 0.07 = 0.03 + 0.084 = 0.114 = 11.4\%
$$

#### Dividend Discount (Gordon Growth) Model

$$
k_e = \frac{D_1}{P_0} + g
$$

Where $D_1$ is the expected dividend next year, $P_0$ is the current stock price, and $g$ is the constant dividend growth rate.

**Example — MAS Inc.:** MAS Inc. stock trades at $50 per share. It expects to pay a dividend of $2.50 next year, and dividends are expected to grow at 4% per year.

$$
k_e = \frac{2.50}{50} + 0.04 = 0.05 + 0.04 = 0.09 = 9.0\%
$$

### Cost of Preferred Stock

$$
k_p = \frac{D_p}{P_p}
$$

Where $D_p$ is the annual preferred dividend and $P_p$ is the net issuance price. Preferred dividends are **not** tax-deductible.

### Weighted Average Cost of Capital (WACC)

WACC blends the cost of each capital component, weighted by its proportion of total capital:

$$
WACC = w_d \times k_d + w_p \times k_p + w_e \times k_e
$$

Where $w_d$, $w_p$, and $w_e$ represent the weight (proportion) of debt, preferred stock, and common equity in the capital structure, respectively.

:::note[Market vs. Book Weights]

The CPA exam typically uses **market value weights** unless the question specifically states book values. Market weights better reflect the true economic cost of capital.

:::

---

## Worked WACC Example — Kingfisher Industries

Kingfisher Industries has the following capital structure at market value:

| Component | Market Value | Weight | Cost |
|---|---|---|---|
| Debt | $4,000,000 | 40% | 5.0% (after-tax) |
| Preferred Stock | $1,000,000 | 10% | 7.0% |
| Common Equity | $5,000,000 | 50% | 12.0% |
| **Total** | **$10,000,000** | **100%** | |

$$
WACC = (0.40 \times 0.05) + (0.10 \times 0.07) + (0.50 \times 0.12)
$$

$$
WACC = 0.020 + 0.007 + 0.060 = 0.087 = 8.7\%
$$

Kingfisher Industries must earn at least **8.7%** on new investments to create value for its shareholders.

---

## Financial Leverage

Leverage measures the sensitivity of a company's earnings to changes in sales volume or operating income.

### Degree of Operating Leverage (DOL)

DOL measures how a change in sales affects **operating income (EBIT)**:

$$
DOL = \frac{\text{Contribution Margin}}{\text{EBIT}}
$$

A high DOL means the company has a large proportion of **fixed operating costs** relative to variable costs.

### Degree of Financial Leverage (DFL)

DFL measures how a change in EBIT affects **earnings per share (EPS)**:

$$
DFL = \frac{\text{EBIT}}{\text{EBIT} - \text{Interest Expense}}
$$

A high DFL indicates substantial debt in the capital structure. The more interest a firm pays, the more sensitive EPS is to changes in operating income.

### Degree of Total (Combined) Leverage (DTL)

$$
DTL = DOL \times DFL = \frac{\text{Contribution Margin}}{\text{EBIT} - \text{Interest Expense}}
$$

**Example — Illini Entertainment:** Illini Entertainment has a contribution margin of $600,000, EBIT of $200,000, and interest expense of $50,000.

| Measure | Calculation | Result |
|---|---|---|
| DOL | $600,000 / $200,000 | 3.0x |
| DFL | $200,000 / ($200,000 − $50,000) | 1.33x |
| DTL | 3.0 × 1.33 | 4.0x |

A DTL of 4.0x means that a **1% increase in sales** would produce approximately a **4% increase in EPS**, and vice versa.

:::warning[High Leverage Risk]

While leverage amplifies gains, it equally amplifies losses. A company with a DTL of 4.0x that experiences a 10% decline in sales would see EPS drop by roughly 40%.

:::

---

## Leverage and Solvency Ratios

These ratios help analysts and lenders assess the risk embedded in a company's capital structure.

| Ratio | Formula | Interpretation |
|---|---|---|
| Debt-to-Equity | Total Debt / Total Equity | Higher = more financial risk |
| Debt-to-Total Capital | Total Debt / (Total Debt + Total Equity) | Proportion of capital from debt |
| Equity Multiplier | Total Assets / Total Equity | Reflects the degree of asset leverage |
| Times Interest Earned | EBIT / Interest Expense | Ability to cover interest obligations |

**Example — BIF Partners:** BIF Partners has total debt of $3,000,000, total equity of $5,000,000, total assets of $8,000,000, EBIT of $1,200,000, and interest expense of $240,000.

| Ratio | Calculation | Result |
|---|---|---|
| Debt-to-Equity | $3,000,000 / $5,000,000 | 0.60 |
| Debt-to-Total Capital | $3,000,000 / $8,000,000 | 0.375 |
| Equity Multiplier | $8,000,000 / $5,000,000 | 1.60 |
| Times Interest Earned | $1,200,000 / $240,000 | 5.0x |

---

## Liquidity Considerations

Changes in capital structure can significantly affect a company's **liquidity** — its ability to meet short-term obligations.

| Ratio | Formula | Benchmark |
|---|---|---|
| Working Capital | Current Assets − Current Liabilities | Positive is generally preferred |
| Current Ratio | Current Assets / Current Liabilities | Typically > 1.0 |
| Quick Ratio | (Cash + Short-term Investments + Receivables) / Current Liabilities | Typically > 0.5–1.0 |

:::caution[Capital Structure and Liquidity Linkage]

Taking on new debt may improve asset capacity but can reduce liquidity if loan proceeds are used for long-term investments while **current maturities** of that debt increase current liabilities. Always consider the maturity profile of new debt.

:::

---

## Loan Covenants

Loan covenants are contractual restrictions lenders impose on borrowers to protect their interests. Capital structure decisions must account for existing and prospective covenant requirements.

### Types of Covenants

| Type | Description | Examples |
|---|---|---|
| **Affirmative** | Actions the borrower **must** take | Maintain insurance, provide audited financial statements, comply with laws |
| **Negative** | Actions the borrower **must not** take | Cannot exceed a debt-to-equity ratio, cannot pay dividends above a threshold, cannot sell major assets |
| **Financial** | Quantitative thresholds that must be maintained | Minimum current ratio, maximum leverage ratio, minimum interest coverage ratio |

### Common Financial Covenants

- **Maximum debt-to-equity ratio** (e.g., must not exceed 2.0)
- **Minimum interest coverage ratio** (e.g., must maintain at least 3.0x)
- **Minimum current ratio** (e.g., must remain above 1.5)
- **Maximum capital expenditure limits**

### Consequences of Covenant Violations

A covenant breach (technical default) can trigger severe consequences:

1. **Acceleration of debt** — the full balance becomes due immediately
2. **Increased interest rates** — penalty rate provisions
3. **Loss of borrowing capacity** — lenders may freeze credit lines
4. **Reclassification of debt** — long-term debt is reclassified as current on the balance sheet, severely impacting liquidity ratios

:::warning[Financial Statement Impact]

When a borrower violates a covenant and the lender has not waived the violation before the financial statements are issued, the **entire debt balance** must be reclassified as a current liability under GAAP. This can cause a dramatic deterioration in the current ratio and working capital.

:::

---

## Financing Strategies

When a company needs capital, management must evaluate several alternatives within the context of its optimal capital structure.

### Comparison of Financing Alternatives

| Factor | Debt Financing | Equity Financing | Retained Earnings |
|---|---|---|---|
| Cost | Lower (tax-deductible interest) | Higher (required return) | No issuance cost; opportunity cost only |
| Dilution | No ownership dilution | Dilutes existing shareholders | No dilution |
| Obligation | Fixed payments required | No mandatory payments | No obligation |
| Risk | Increases financial risk | Decreases financial risk | No additional risk |
| Covenant impact | May add or tighten restrictions | Generally improves covenant metrics | No covenant impact |
| EPS effect (if earnings exceed cost) | Increases EPS via leverage | Decreases EPS due to more shares | Neutral |

### Convertible Securities

Convertible bonds or convertible preferred stock offer a **hybrid** strategy:

- Lower initial coupon rate than straight debt (investors accept less current income in exchange for conversion upside)
- Potential dilution if converted to common stock
- Attractive when management believes the stock price will rise

### Choosing the Right Strategy

**Example — Illini Security** needs to raise $2,000,000 for expansion. Consider two scenarios:

| Scenario | Method | Shares Outstanding | EBIT | Interest | Tax (25%) | Net Income | EPS |
|---|---|---|---|---|---|---|---|
| A | Issue Debt at 6% | 500,000 | $800,000 | $120,000 | $170,000 | $510,000 | $1.02 |
| B | Issue 100,000 shares at $20 | 600,000 | $800,000 | $0 | $200,000 | $600,000 | $1.00 |

Scenario A (debt) produces higher EPS ($1.02 vs. $1.00) because the after-tax cost of debt (4.5%) is less than the earnings yield. However, Scenario A also increases financial risk and may tighten covenant ratios.

---

## Impact on Financial Statements

Different financing choices flow through the financial statements in distinct ways.

### Balance Sheet Effects

| Transaction | Assets | Liabilities | Equity |
|---|---|---|---|
| Issue bonds for cash | ↑ Cash | ↑ Bonds Payable | No change |
| Issue common stock for cash | ↑ Cash | No change | ↑ Common Stock & APIC |
| Use retained earnings | No change | No change | ↓ Retained Earnings (if dividends paid) |

### Income Statement and EPS Effects

- **Debt financing** creates interest expense, reducing pre-tax income but also reducing taxes (the tax shield).
- **Equity financing** has no income statement cost, but more shares outstanding dilute EPS.
- **Higher leverage** amplifies the variability of net income and EPS.

### Key Ratios Affected

| Ratio | Impact of More Debt | Impact of More Equity |
|---|---|---|
| Debt-to-Equity | Increases | Decreases |
| Times Interest Earned | Decreases | Increases (or N/A) |
| Return on Equity (ROE) | Increases (if ROA > cost of debt) | Decreases |
| EPS | Increases (if earnings exceed interest) | Decreases (dilution) |
| Current Ratio | May decrease (if current maturities rise) | May increase |

---

## Modigliani-Miller Theorem

The Modigliani-Miller (M&M) theorem provides the theoretical foundation for capital structure analysis.

| Proposition | Assumption | Conclusion |
|---|---|---|
| **Without taxes** | Perfect capital markets, no taxes, no bankruptcy costs | Capital structure is **irrelevant**; firm value is unaffected by the debt-equity mix |
| **With taxes** | Corporate taxes exist | Debt adds value through the **interest tax shield**; optimal structure is 100% debt (in theory) |

In practice, the **trade-off theory** recognizes that the benefit of the tax shield must be balanced against the increasing costs of **financial distress** (bankruptcy costs, agency costs, and loss of operational flexibility). The optimal capital structure exists where the marginal benefit of the tax shield equals the marginal cost of financial distress.

:::info[Exam Relevance]

The CPA exam does not require complex M&M calculations. Focus on understanding the **intuition**: debt creates a tax advantage, but too much debt increases the probability and cost of financial distress. The optimal structure balances these two forces.

:::

---

## Exam Tips

:::tip[Capital Structure Exam Strategies]

1. **WACC calculations** are high-frequency exam questions. Memorize the formula and practice computing each component cost.
2. **After-tax cost of debt** — always multiply the interest rate by $(1 - T)$. The exam will penalize you for forgetting the tax adjustment.
3. **Leverage ratios** — know which direction each ratio moves when debt is added or equity is issued. Think through the numerator and denominator.
4. **Covenant violations** — remember that breached covenants can force reclassification of long-term debt to current, dramatically affecting the balance sheet.
5. **EPS analysis** — when comparing debt vs. equity financing, calculate EPS under each scenario. Debt increases EPS when return on assets exceeds the after-tax cost of debt.
6. **CAPM vs. Dividend Growth Model** — the exam may give you data suited for one model. If you have beta and market data, use CAPM. If you have dividends and a growth rate, use the Gordon Growth Model.

:::
