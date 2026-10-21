# Capital Structure

Every company has to pay for its assets somehow. **Capital structure** is the mix of **debt** and **equity** it uses to do so. The choice matters because it sets the company's cost of capital, its financial risk, its earnings per share, and how close it runs to the limits in its loan agreements.

The BAR section tests whether you can calculate the cost of capital, work out how a change in capital structure affects leverage, liquidity, and loan covenants, compare ways of financing a new initiative, and interpret the effect on the financial statements. This chapter builds up in that order: the sources of capital and their costs, the weighted average cost of capital, leverage, covenants, and finally the comparison of financing strategies.

---

## Sources of Capital

A company raises capital from lenders and from owners. Each source has a different cost and a different kind of risk for the company.

| Component | Examples | Cost to the Firm | Risk to the Firm |
|---|---|---|---|
| Debt | Bonds, bank loans, notes payable | Interest expense (tax-deductible) | Mandatory payments; default risk |
| Preferred equity | Preferred stock | Preferred dividends (not tax-deductible) | No legal obligation, but expected |
| Common equity | Common stock, retained earnings | Return required by shareholders | No fixed obligation; dilution risk |

Debt is usually the cheapest source, for two reasons. Interest is tax-deductible, and lenders accept a lower return because they are paid before shareholders and have a claim on assets in liquidation. The catch is that each added dollar of debt raises the risk of financial distress, which eventually pushes up the cost of both debt and equity. The **optimal capital structure** is the mix that minimizes the weighted average cost of capital while keeping financial risk acceptable.

---

## Cost of Capital

The cost of capital is the minimum return a company must earn on its investments to satisfy the people who provide its funds. It is calculated for each source and then blended.

### Cost of Debt (After-Tax)

Because interest is deductible, the government in effect pays part of it. The **after-tax cost of debt** is therefore lower than the interest rate:

$$
k_d = r_d \times (1 - T)
$$

Here $k_d$ is the after-tax cost of debt, $r_d$ is the pre-tax rate (the market yield on the debt), and $T$ is the marginal tax rate.

**Example (Bear Co.):** Bear Co. issues bonds at par with a 6% interest rate. Its marginal tax rate is 25%.

$$
k_d = 0.06 \times (1 - 0.25) = 0.045 = 4.5\%
$$

### Cost of Common Equity

Shareholders have no contract that states their return, so the cost of equity has to be estimated. The exam uses two models. If a question gives you a beta and market data, use CAPM. If it gives you dividends and a growth rate, use the dividend growth model.

**Capital Asset Pricing Model (CAPM).** Shareholders demand the risk-free rate plus a premium for the stock's systematic (market) risk:

$$
k_e = R_f + \beta \times (R_m - R_f)
$$

$R_f$ is the risk-free rate, $\beta$ (beta) measures the stock's systematic risk relative to the market, and $R_m - R_f$ is the market risk premium.

**Example (Bear Co.):** The risk-free rate is 3%, Bear Co.'s beta is 1.2, and the market risk premium is 7%.

$$
k_e = 0.03 + 1.2 \times 0.07 = 0.03 + 0.084 = 0.114 = 11.4\%
$$

**Dividend growth (Gordon growth) model.** If dividends grow at a constant rate, the return to shareholders is the dividend yield plus the growth rate:

$$
k_e = \frac{D_1}{P_0} + g
$$

$D_1$ is next year's expected dividend, $P_0$ is the current stock price, and $g$ is the constant growth rate.

**Example (Polar Inc.):** Polar Inc. stock trades at \$50 per share. It expects to pay a \$2.50 dividend next year, and dividends are expected to grow 4% a year.

$$
k_e = \frac{2.50}{50} + 0.04 = 0.05 + 0.04 = 0.09 = 9.0\%
$$

### Cost of Preferred Stock

Preferred stock usually pays a fixed dividend with no maturity, so its cost is the dividend divided by the net proceeds from issuing it:

$$
k_p = \frac{D_p}{P_p}
$$

$D_p$ is the annual preferred dividend and $P_p$ is the net issuance price. Preferred dividends are **not** tax-deductible, so there is no tax adjustment.

### Weighted Average Cost of Capital (WACC)

WACC blends the cost of each source, weighted by its share of total capital:

$$
\text{WACC} = w_d \times k_d + w_p \times k_p + w_e \times k_e
$$

$w_d$, $w_p$, and $w_e$ are the weights of debt, preferred stock, and common equity. Use **market value** weights unless the question says to use book values, because market values reflect what investors currently require.

**Example: Grizzly Industries**

| Component | Market Value | Weight | Cost |
|---|---|---|---|
| Debt | \$4,000,000 | 40% | 5.0% (after-tax) |
| Preferred Stock | \$1,000,000 | 10% | 7.0% |
| Common Equity | \$5,000,000 | 50% | 12.0% |
| **Total** | **\$10,000,000** | **100%** | |

$$
\text{WACC} = (0.40 \times 0.05) + (0.10 \times 0.07) + (0.50 \times 0.12) = 0.020 + 0.007 + 0.060 = 8.7\%
$$

Grizzly must earn at least **8.7%** on new investments of similar risk to create value for its shareholders. WACC is the discount rate used in the net present value analysis covered in [Investment Alternatives](investment-alternatives.md).

---

## Operating and Financial Leverage

Leverage describes how strongly earnings react to a change in sales. Fixed costs create it. Fixed operating costs create operating leverage, and fixed interest costs create financial leverage.

**Degree of operating leverage (DOL)** measures how a change in sales affects operating income (EBIT). It is equal to the percentage change in EBIT divided by the percentage change in sales, and at a given level of sales it can be computed as:

$$
\text{DOL} = \frac{\text{Contribution Margin}}{\text{EBIT}}
$$

A high DOL means a large share of the company's operating costs are fixed.

**Degree of financial leverage (DFL)** measures how a change in EBIT affects earnings per share (EPS). It equals the percentage change in EPS divided by the percentage change in EBIT:

$$
\text{DFL} = \frac{\text{EBIT}}{\text{EBIT} - \text{Interest Expense}}
$$

The more interest a company pays, the more its EPS swings with operating income.

**Degree of total (combined) leverage (DTL)** combines the two:

$$
\text{DTL} = \text{DOL} \times \text{DFL} = \frac{\text{Contribution Margin}}{\text{EBIT} - \text{Interest Expense}}
$$

**Example (Cub Entertainment):** Cub Entertainment has a contribution margin of \$600,000, EBIT of \$200,000, and interest expense of \$50,000.

| Measure | Calculation | Result |
|---|---|---|
| DOL | \$600,000 ÷ \$200,000 | 3.0x |
| DFL | \$200,000 ÷ (\$200,000 - \$50,000) | 1.33x |
| DTL | \$600,000 ÷ \$150,000 | 4.0x |

A DTL of 4.0x means a 1% increase in sales produces roughly a 4% increase in EPS. Leverage works in both directions, so a 10% drop in sales would cut EPS by roughly 40%.

---

## Solvency and Liquidity Measures

Lenders and analysts judge the risk in a capital structure with a handful of ratios. The general ratio families are covered in [Financial Statement Analysis](../business-analysis-historical/financial-statement-analysis.md). The ones most tied to capital structure are:

| Ratio | Formula | Interpretation |
|---|---|---|
| Debt-to-Equity | Total Debt ÷ Total Equity | Higher means more financial risk |
| Debt-to-Total Capital | Total Debt ÷ (Total Debt + Total Equity) | Share of capital supplied by lenders |
| Equity Multiplier | Total Assets ÷ Total Equity | Degree to which assets are financed with debt |
| Times Interest Earned | EBIT ÷ Interest Expense | Ability to cover interest |

**Example (Kodiak Partners):** Kodiak Partners has total debt of \$3,000,000, total equity of \$5,000,000, total assets of \$8,000,000, EBIT of \$1,200,000, and interest expense of \$240,000.

| Ratio | Calculation | Result |
|---|---|---|
| Debt-to-Equity | \$3,000,000 ÷ \$5,000,000 | 0.60 |
| Debt-to-Total Capital | \$3,000,000 ÷ \$8,000,000 | 0.375 |
| Equity Multiplier | \$8,000,000 ÷ \$5,000,000 | 1.60 |
| Times Interest Earned | \$1,200,000 ÷ \$240,000 | 5.0x |

Capital structure decisions also affect **liquidity**, measured by working capital, the current ratio, and the quick ratio. New long-term debt raises cash and the current ratio at first. If the proceeds are spent on long-term assets, though, the cash is gone while the **current maturities** of the debt start to add to current liabilities. Always look at the repayment schedule of new debt, not just its total.

---

## Loan Covenants

Lenders protect themselves with **covenants**: contractual promises the borrower makes in the loan agreement. A capital structure decision has to fit within existing covenants and any a new lender would require.

| Type | Description | Examples |
|---|---|---|
| **Affirmative** | Actions the borrower **must** take | Maintain insurance, provide audited financial statements, comply with laws |
| **Negative** | Actions the borrower **must not** take | Pay dividends above a limit, sell major assets, take on more debt without consent |
| **Financial** | Ratio thresholds the borrower must maintain | Maximum debt-to-equity of 2.0, minimum interest coverage of 3.0x, minimum current ratio of 1.5, a cap on capital spending |

Breaking a covenant is a **technical default**, even if every payment has been made on time. The lender may then accelerate the loan (make the full balance due at once), charge a penalty rate, or freeze credit lines.

:::warning[Financial Statement Impact]

If a covenant violation at the balance sheet date makes long-term debt callable by the lender, GAAP requires the debt to be classified as **current**. The exception is when, before the statements are issued, the lender waives or loses the right to demand repayment for more than one year from the balance sheet date, or the loan has a grace period during which the violation will probably be cured. Reclassification can sharply reduce the current ratio and working capital.

:::

---

## Financing Strategies

When a company needs capital, management compares the alternatives against its target capital structure.

| Factor | Debt Financing | New Equity | Retained Earnings |
|---|---|---|---|
| Cost | Lower (tax-deductible interest) | Higher (shareholders' required return plus issuance costs) | Shareholders' required return, but no issuance costs |
| Dilution | No ownership dilution | Dilutes existing shareholders | No dilution |
| Obligation | Fixed payments required | No mandatory payments | No obligation |
| Risk | Increases financial risk | Decreases financial risk | No added risk |
| Covenants | May add or tighten restrictions | Generally improves covenant ratios | No effect |
| EPS | Increases EPS if earnings on the funds exceed the cost of debt | Lowers EPS through more shares | No new shares |

**Convertible securities** sit between the two. Convertible bonds or convertible preferred stock carry a lower coupon than straight debt because investors accept less current income in exchange for the chance to convert into common stock. The company gets cheaper financing now, at the risk of dilution later. They appeal to management that expects the stock price to rise.

### Comparing Debt and Equity: EPS Analysis

**Example:** Sloth Security, which has 500,000 shares outstanding, needs \$2,000,000 for an expansion. It can borrow at 6% or issue 100,000 new shares at \$20. Expected EBIT after the expansion is \$800,000, and the tax rate is 25%.

| Scenario | Method | Shares Outstanding | EBIT | Interest | Tax (25%) | Net Income | EPS |
|---|---|---|---|---|---|---|---|
| A | Borrow at 6% | 500,000 | \$800,000 | \$120,000 | \$170,000 | \$510,000 | \$1.02 |
| B | Issue 100,000 shares at \$20 | 600,000 | \$800,000 | \$0 | \$200,000 | \$600,000 | \$1.00 |

Debt produces higher EPS here. Borrowing costs 4.5% after tax, while each new share sold at \$20 gives away \$1.00 of earnings a year, an earnings yield of 5%. The advantage depends on EBIT staying high. At the **indifference point**, both plans give the same EPS:

$$
\frac{(\text{EBIT} - 120{,}000)(1 - 0.25)}{500{,}000} = \frac{\text{EBIT}(1 - 0.25)}{600{,}000} \quad\Rightarrow\quad \text{EBIT} = \$720{,}000
$$

Above \$720,000 of EBIT, debt gives higher EPS. Below it, equity does. Management has to weigh that higher expected EPS against the added risk, the lower interest coverage, and any covenant limits.

### Effects on the Financial Statements

Each choice flows through the statements differently. Debt adds a liability and creates interest expense, which lowers pretax income but also lowers taxes (the **interest tax shield**). New equity adds to common stock and additional paid-in capital, has no income statement cost, and spreads earnings over more shares. Retaining earnings instead of paying dividends keeps cash in the business and leaves retained earnings higher than it would otherwise be. In every case, more leverage makes net income and EPS more variable.

| Ratio | Effect of More Debt | Effect of More Equity |
|---|---|---|
| Debt-to-Equity | Increases | Decreases |
| Times Interest Earned | Decreases | No new interest; unchanged or higher |
| Return on Equity (ROE) | Increases if the return on the new assets exceeds the after-tax cost of debt | Decreases unless the new assets earn more than the existing ROE |
| EPS | Increases if earnings on the funds exceed the after-tax interest | Decreases from dilution unless earnings grow enough |
| Current Ratio | Rises while proceeds are held as cash; falls as current maturities come due | Rises while proceeds are held as cash |

---

## Modigliani-Miller and the Trade-Off Theory

The Modigliani-Miller (M&M) propositions are the theoretical starting point for capital structure.

| Proposition | Assumption | Conclusion |
|---|---|---|
| **Without taxes** | Perfect capital markets, no taxes, no bankruptcy costs | Capital structure is **irrelevant**; firm value does not depend on the debt-equity mix |
| **With taxes** | Corporate taxes exist | Debt adds value through the **interest tax shield**; in theory the optimal structure is all debt |

Real companies do not borrow without limit, and the **trade-off theory** explains why. The tax benefit of debt must be weighed against the rising expected costs of **financial distress**: bankruptcy costs, conflicts between lenders and owners, and lost flexibility. The optimal structure is where the marginal benefit of the tax shield equals the marginal cost of distress. The exam tests this intuition, not M&M calculations.
