# Financial Ratio Analysis

A balance sheet that shows \$480,000 of current assets says little by itself. Compared with \$300,000 of current liabilities, it says the company can cover its short-term debts 1.6 times over. Financial ratios turn raw financial statement numbers into comparable measures like that one. On FAR you may be asked to choose the right ratio for a given type of analysis, calculate it, or interpret a change in it, and to compare actual results with a budget. This chapter groups the ratios the way analysts do: **liquidity** (the ability to meet short-term obligations), **activity** (how efficiently the company uses its assets), **solvency** (the ability to meet long-term obligations), and **profitability**. It then covers DuPont analysis, market-based performance metrics, a comprehensive example, and budget variances.

:::info[Exam Tip]

The exam often tests whether you use **average** or **ending** balances. When a ratio compares an income statement figure (a flow over the year) with a balance sheet figure (a balance at one date), use the average balance unless the question says otherwise. The operating cash flow ratio and days payables outstanding (DPO), as presented in this chapter, are exceptions that use ending balances.

:::

---

## Liquidity Ratios

Liquidity ratios measure whether a company can pay its bills as they come due.

### Current Ratio

Measures a company's ability to pay its short-term liabilities with its current assets.

$$
\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}
$$

A current ratio above 1.0 means the company has more current assets than current liabilities. Creditors generally prefer a higher current ratio, but an excessively high ratio may signal inefficient use of assets.

**Example (Bear Co.):** Bear Co. reports current assets of \$480,000 and current liabilities of \$300,000.

$$
\frac{\$480{,}000}{\$300{,}000} = 1.60
$$

Bear Co. has \$1.60 of current assets for every \$1.00 of current liabilities.

### Quick Ratio (Acid-Test Ratio)

Measures the ability to meet short-term obligations with the **most liquid** assets. Inventory and prepaid expenses are excluded.

$$
\text{Quick Ratio} = \frac{\text{Cash} + \text{Marketable Securities} + \text{Net Accounts Receivable}}{\text{Current Liabilities}}
$$

A quick ratio below 1.0 is a warning sign that the company may struggle to cover near-term debts without selling inventory.

**Example (Polar Co.):** Cash \$50,000; marketable securities \$20,000; net accounts receivable (A/R) \$80,000; current liabilities \$200,000.

$$
\frac{\$50{,}000 + \$20{,}000 + \$80{,}000}{\$200{,}000} = 0.75
$$

Polar Co.'s quick ratio of 0.75 suggests potential short-term liquidity pressure.

### Operating Cash Flow Ratio

Shows whether operating cash flows alone can cover current liabilities.

$$
\text{Operating Cash Flow Ratio} = \frac{\text{Cash Flow from Operations}}{\text{Ending Current Liabilities}}
$$

This ratio uses **ending** current liabilities (not average) because it focuses on the ability to pay obligations that exist right now.

**Example (Grizzly Inc.):** Cash flow from operations \$270,000; ending current liabilities \$300,000.

$$
\frac{\$270{,}000}{\$300{,}000} = 0.90
$$

Grizzly Inc. generates \$0.90 of operating cash for every \$1.00 of current liabilities. The ratio is a useful complement to the current ratio because it relies on cash actually generated, not on current assets that may include slow-moving inventory.

---

## Activity (Efficiency) Ratios

These "turnover" ratios measure how quickly a company converts assets into cash or sales.

### Accounts Receivable Turnover

Measures how many times, on average, receivables are collected during a period.

$$
\text{A/R Turnover} = \frac{\text{Net Credit Sales}}{\text{Average Net Accounts Receivable}}
$$

A higher number means the company collects cash faster.

**Example (Bear Co.):** Net credit sales \$1,200,000; beginning A/R \$90,000; ending A/R \$110,000.

$$
\frac{\$1{,}200{,}000}{(\$90{,}000 + \$110{,}000)/2} = \frac{\$1{,}200{,}000}{\$100{,}000} = 12.0\text{ times}
$$

### Days Sales Outstanding (DSO)

Average number of days to collect cash from a credit sale.

$$
\text{DSO} = \frac{365}{\text{A/R Turnover}}
$$

A lower number is better because cash is collected more quickly.

**Example (Bear Co.):** Using the A/R turnover of 12.0 computed above:

$$
\frac{365}{12.0} \approx 30.4 \text{ days}
$$

### Inventory Turnover

How many times the company sells and replaces its inventory in a period.

$$
\text{Inventory Turnover} = \frac{\text{Cost of Goods Sold}}{\text{Average Inventory}}
$$

A higher number generally indicates strong sales and less risk of obsolete inventory.

**Example (Kodiak Partners):** Cost of goods sold (COGS) \$730,000; beginning inventory \$160,000; ending inventory \$200,000.

$$
\frac{\$730{,}000}{(\$160{,}000 + \$200{,}000)/2} = \frac{\$730{,}000}{\$180{,}000} \approx 4.06 \text{ times}
$$

### Days in Inventory (DII)

Average number of days inventory is held before being sold.

$$
\text{Days in Inventory} = \frac{365}{\text{Inventory Turnover}}
$$

**Example (Kodiak Partners):** Use the unrounded turnover of 4.0556 (\$730,000 ÷ \$180,000):

$$
\frac{365}{4.0556} \approx 90.0 \text{ days}
$$

Dividing by the rounded 4.06 gives 89.9 days, a rounding difference only.

### Days Payables Outstanding (DPO)

Average number of days a company takes to pay its suppliers.

$$
\text{DPO} = \frac{\text{Ending Accounts Payable}}{\text{COGS} / 365}
$$

A higher DPO means the company holds onto cash longer, but a very high DPO may signal strained supplier relationships.

**Example (Kodiak Partners):** Ending accounts payable (A/P) \$95,000; COGS \$730,000.

$$
\frac{\$95{,}000}{\$730{,}000 / 365} = \frac{\$95{,}000}{\$2{,}000} = 47.5 \text{ days}
$$

### Cash Conversion Cycle (CCC)

The number of days between paying suppliers for inventory and collecting cash from customers.

$$
\text{CCC} = \text{Days in Inventory} + \text{DSO} - \text{DPO}
$$

A shorter cycle is better because the company turns its investment in inventory into cash faster. When a question gives raw data and asks only for the CCC, compute all three components first, then combine them.

**Example (Kodiak Partners):** Kodiak Partners also has net credit sales of \$1,460,000 and average A/R of \$120,000. That gives an A/R turnover of 12.17 and a DSO of 30.0 days. Using the values computed above for days in inventory (90.0) and DPO (47.5):

$$
90.0 + 30.0 - 47.5 = 72.5 \text{ days}
$$

### Total Asset Turnover

Measures how efficiently a company uses **all** of its assets to generate sales.

$$
\text{Total Asset Turnover} = \frac{\text{Net Sales}}{\text{Average Total Assets}}
$$

**Example (Panda Industries):** Net sales \$5,000,000; average total assets \$2,500,000.

$$
\frac{\$5{,}000{,}000}{\$2{,}500{,}000} = 2.0 \text{ times}
$$

### Fixed Asset Turnover

Measures how efficiently a company uses its **property, plant, and equipment** (PP\&E) to generate sales.

$$
\text{Fixed Asset Turnover} = \frac{\text{Net Sales}}{\text{Average Net Fixed Assets}}
$$

**Example (Panda Industries):** Net sales \$5,000,000; average net PP\&E \$1,250,000.

$$
\frac{\$5{,}000{,}000}{\$1{,}250{,}000} = 4.0 \text{ times}
$$

Fixed asset turnover is especially useful for capital-intensive industries such as manufacturing and utilities. A low ratio may indicate over-investment in plant assets or underused capacity.

---

## Solvency (Leverage) Ratios

These ratios measure long-term financial health and the degree to which a company relies on debt financing.

### Debt-to-Assets Ratio

The percentage of total assets financed by debt. It is also called the **total debt ratio**.

$$
\text{Debt-to-Assets} = \frac{\text{Total Liabilities}}{\text{Total Assets}}
$$

A lower ratio means less risk. A ratio of 0.6 means creditors fund 60% of the assets.

**Example (Cub Entertainment):** Total liabilities \$600,000; total assets \$1,000,000.

$$
\frac{\$600{,}000}{\$1{,}000{,}000} = 0.60
$$

### Debt-to-Equity Ratio

Compares total obligations to owners' equity.

$$
\text{Debt-to-Equity} = \frac{\text{Total Liabilities}}{\text{Total Equity}}
$$

A ratio of 1.0 means debt and equity are equal. Higher values indicate greater financial risk.

**Example (Cub Entertainment):** Total liabilities \$600,000; total equity \$400,000.

$$
\frac{\$600{,}000}{\$400{,}000} = 1.50
$$

### Equity Multiplier

Shows how many dollars of assets are supported by each dollar of equity. It is one of the three components of the DuPont framework.

$$
\text{Equity Multiplier} = \frac{\text{Average Total Assets}}{\text{Average Total Equity}}
$$

**Example (Cub Entertainment):** Average total assets \$1,000,000; average total equity \$400,000.

$$
\frac{\$1{,}000{,}000}{\$400{,}000} = 2.50
$$

An equity multiplier of 2.50 means the company holds \$2.50 of assets for every \$1.00 of equity. Debt finances the other \$1.50.

### Times Interest Earned (TIE) Ratio

Measures the ability to cover interest payments from operating profit, measured as earnings before interest and taxes (EBIT).

$$
\text{TIE} = \frac{\text{EBIT}}{\text{Interest Expense}}
$$

A higher number is safer. A TIE of 5 means operating profit can cover interest five times over. EBIT is **not** net income: if a question gives net income, add back interest expense and income tax expense to get EBIT.

**Example (Sloth Security):** EBIT \$250,000; interest expense \$50,000.

$$
\frac{\$250{,}000}{\$50{,}000} = 5.0 \text{ times}
$$

Lenders often write ratios like TIE, debt-to-equity, and the current ratio into loan agreements as covenants. The [Long-Term Liabilities and Bonds](../liabilities/long-term-liabilities-and-bonds.md) chapter shows a covenant compliance check.

---

## Profitability Ratios

These ratios measure how well the company generates profit from its operations.

### Gross Profit Margin

The percentage of each sales dollar remaining after the cost of the goods sold.

$$
\text{Gross Profit Margin} = \frac{\text{Net Sales} - \text{COGS}}{\text{Net Sales}}
$$

**Example (Bear Co.):** Net sales \$1,200,000; COGS \$720,000.

$$
\frac{\$1{,}200{,}000 - \$720{,}000}{\$1{,}200{,}000} = \frac{\$480{,}000}{\$1{,}200{,}000} = 40\%
$$

### Net Profit Margin

The percentage of each sales dollar that becomes profit after **all** expenses. It is also called **return on sales**.

$$
\text{Net Profit Margin} = \frac{\text{Net Income}}{\text{Net Sales}}
$$

**Example (Bear Co.):** Net income \$120,000; net sales \$1,200,000.

$$
\frac{\$120{,}000}{\$1{,}200{,}000} = 10\%
$$

### Return on Assets (ROA)

Measures how efficiently management uses assets to generate profit.

$$
\text{ROA} = \frac{\text{Net Income}}{\text{Average Total Assets}}
$$

**Example (Polar Co.):** Net income \$90,000; average total assets \$600,000.

$$
\frac{\$90{,}000}{\$600{,}000} = 15\%
$$

### Return on Equity (ROE)

Measures the return generated for shareholders.

$$
\text{ROE} = \frac{\text{Net Income}}{\text{Average Total Equity}}
$$

**Example (Polar Co.):** Net income \$90,000; average total equity \$300,000.

$$
\frac{\$90{,}000}{\$300{,}000} = 30\%
$$

### Earnings Per Share (Basic EPS)

The portion of net income allocated to each outstanding share of common stock.

$$
\text{Basic EPS} = \frac{\text{Net Income} - \text{Preferred Dividends}}{\text{Weighted Average Common Shares Outstanding}}
$$

The denominator is the **weighted average** number of shares, not the shares outstanding at year-end. [Public Company Reporting](./public-company-reporting.md) shows how to compute the weighted average and diluted EPS.

**Example (Grizzly Inc.):** Net income \$500,000; preferred dividends \$20,000; weighted average common shares 120,000.

$$
\frac{\$500{,}000 - \$20{,}000}{120{,}000} = \frac{\$480{,}000}{120{,}000} = \$4.00 \text{ per share}
$$

---

## DuPont Analysis

The DuPont model breaks **return on equity** into three drivers so you can pinpoint *why* ROE changed. Each fraction's denominator cancels the next fraction's numerator, so the product is simply net income divided by average equity:

$$
\text{ROE} = \underbrace{\frac{\text{Net Income}}{\text{Net Sales}}}_{\text{Net Profit Margin}} \times \underbrace{\frac{\text{Net Sales}}{\text{Average Total Assets}}}_{\text{Total Asset Turnover}} \times \underbrace{\frac{\text{Average Total Assets}}{\text{Average Total Equity}}}_{\text{Equity Multiplier}}
$$

The three levers are profitability (margin), asset efficiency (turnover), and leverage (the equity multiplier). Two companies with the same ROE can get there very differently, and a question may ask which lever drove a change.

**Example (Polar Co.):** Polar Co. has net sales of \$900,000, net income of \$90,000, average total assets of \$600,000, and average total equity of \$300,000.

| Component | Calculation | Result |
|-----------|------------|--------|
| Net Profit Margin | \$90,000 ÷ \$900,000 | 10.0% |
| Total Asset Turnover | \$900,000 ÷ \$600,000 | 1.50× |
| Equity Multiplier | \$600,000 ÷ \$300,000 | 2.00× |
| **ROE** | 10.0% × 1.50 × 2.00 | **30.0%** |

The result matches the direct ROE calculation above (\$90,000 ÷ \$300,000 = 30%). Now suppose Polar borrowed to buy back some of its shares. Ignoring the added interest, its margin and turnover would not change, but lower equity would raise the equity multiplier and therefore ROE. DuPont analysis shows that the higher ROE came from leverage, not from better operations.

---

## Performance Metrics

Several widely used metrics combine financial statement amounts with market data or add back noncash charges.

### EBITDA

**Earnings before interest, taxes, depreciation, and amortization (EBITDA)** approximates the cash earnings generated by operations before financing costs and taxes. It is not a GAAP measure.

$$
\text{EBITDA} = \text{Net Income} + \text{Interest} + \text{Taxes} + \text{Depreciation} + \text{Amortization}
$$

Equivalently, EBITDA = EBIT + depreciation and amortization.

**Example (Sloth Security):** EBIT \$250,000; depreciation and amortization \$40,000. EBITDA = \$250,000 + \$40,000 = **\$290,000**.

### Price-to-Earnings (P/E) Ratio

The **P/E ratio** shows how much investors pay for each dollar of earnings. A high P/E usually signals that the market expects strong growth.

$$
\text{P/E Ratio} = \frac{\text{Market Price per Common Share}}{\text{Earnings per Share}}
$$

**Example (Grizzly Inc.):** EPS is \$4.00 (computed above) and the stock trades at \$60. P/E = \$60 ÷ \$4.00 = **15.0**.

### Dividend Payout Ratio

The **dividend payout ratio** shows the share of earnings paid out to common shareholders as dividends. The rest is retained in the business.

$$
\text{Dividend Payout Ratio} = \frac{\text{Dividends per Common Share}}{\text{Earnings per Share}}
$$

**Example (Grizzly Inc.):** Grizzly pays common dividends of \$1.20 per share. Payout = \$1.20 ÷ \$4.00 = **30%**, so 70% of earnings available to common shareholders is retained.

Asset turnover is often listed as a performance metric as well; it is covered with the activity ratios above.

---

## Comprehensive Worked Example: Cub Entertainment

Below is a condensed set of financial data for **Cub Entertainment** for the year ended December 31, 2024. All sales are on credit, so net credit sales equal net sales. Every ratio below is computed from this single data set.

| Item | Amount |
|------|--------|
| Cash | \$80,000 |
| Marketable Securities | \$20,000 |
| Net Accounts Receivable (ending) | \$150,000 |
| Net Accounts Receivable (beginning) | \$130,000 |
| Inventory (ending) | \$200,000 |
| Inventory (beginning) | \$180,000 |
| Other Current Assets | \$50,000 |
| **Total Current Assets** | **\$500,000** |
| Net Fixed Assets (ending) | \$700,000 |
| Net Fixed Assets (beginning) | \$600,000 |
| **Total Assets (ending)** | **\$1,200,000** |
| **Total Assets (beginning)** | **\$1,000,000** |
| Accounts Payable (ending) | \$100,000 |
| Other Current Liabilities | \$150,000 |
| **Total Current Liabilities** | **\$250,000** |
| Long-Term Debt | \$350,000 |
| **Total Liabilities** | **\$600,000** |
| **Total Equity (ending)** | **\$600,000** |
| **Total Equity (beginning)** | **\$500,000** |
| Net Credit Sales | \$2,000,000 |
| COGS | \$1,200,000 |
| Depreciation and Amortization | \$50,000 |
| EBIT | \$300,000 |
| Interest Expense | \$40,000 |
| Income Tax Expense | \$60,000 |
| **Net Income** | **\$200,000** |
| Cash Flow from Operations | \$280,000 |
| Preferred Dividends | \$10,000 |
| Common Dividends (\$0.90 per share) | \$90,000 |
| Weighted Average Common Shares | 100,000 |
| Market Price per Common Share | \$38 |

### Computed Ratios

The formulas are in the summary table that follows.

| Ratio | Calculation | Result |
|-------|-------------|--------|
| Current Ratio | \$500,000 ÷ \$250,000 | **2.00** |
| Quick Ratio | (\$80k + \$20k + \$150k) ÷ \$250k | **1.00** |
| Operating Cash Flow Ratio | \$280,000 ÷ \$250,000 | **1.12** |
| A/R Turnover | \$2,000k ÷ \$140k | **14.29×** |
| DSO | 365 ÷ 14.29 | **25.5 days** |
| Inventory Turnover | \$1,200k ÷ \$190k | **6.32×** |
| Days in Inventory | 365 ÷ 6.32 | **57.8 days** |
| DPO | \$100k ÷ \$3,288 | **30.4 days** |
| Cash Conversion Cycle | 57.8 + 25.5 - 30.4 | **52.9 days** |
| Total Asset Turnover | \$2,000k ÷ \$1,100k | **1.82×** |
| Fixed Asset Turnover | \$2,000k ÷ \$650k | **3.08×** |
| Debt-to-Assets | \$600k ÷ \$1,200k | **0.50** |
| Debt-to-Equity | \$600k ÷ \$600k | **1.00** |
| Equity Multiplier | \$1,100k ÷ \$550k | **2.00** |
| TIE | \$300k ÷ \$40k | **7.50×** |
| Gross Profit Margin | \$800k ÷ \$2,000k | **40.0%** |
| Net Profit Margin | \$200k ÷ \$2,000k | **10.0%** |
| ROA | \$200k ÷ \$1,100k | **18.2%** |
| ROE | \$200k ÷ \$550k | **36.4%** |
| DuPont ROE | 10.0% × 1.82 × 2.00 | **36.4%** |
| Basic EPS | \$190k ÷ 100k | **\$1.90** |
| EBITDA | \$300k + \$50k | **\$350,000** |
| P/E Ratio | \$38 ÷ \$1.90 | **20.0** |
| Dividend Payout Ratio | \$0.90 ÷ \$1.90 | **47.4%** |

The DuPont ROE matches the direct ROE calculation, which makes it a useful self-check. The equity accounts also tie: beginning equity of \$500,000 plus net income of \$200,000 minus total dividends of \$100,000 equals ending equity of \$600,000.

---

## Summary Reference Table

| Ratio | Formula | "Good" Direction |
|-------|---------|-----------------|
| Current Ratio | Current assets ÷ Current liabilities | Higher (≥ 1.0) |
| Quick Ratio | (Cash + Marketable securities + Net A/R) ÷ Current liabilities | Higher (≥ 1.0) |
| Operating Cash Flow Ratio | Cash flow from operations ÷ Ending current liabilities | Higher (≥ 1.0) |
| A/R Turnover | Net credit sales ÷ Average net A/R | Higher |
| DSO | 365 ÷ A/R turnover | Lower |
| Inventory Turnover | COGS ÷ Average inventory | Higher |
| Days in Inventory | 365 ÷ Inventory turnover | Lower |
| DPO | Ending A/P ÷ (COGS ÷ 365) | Higher (within reason) |
| Cash Conversion Cycle | DII + DSO - DPO | Lower |
| Total Asset Turnover | Net sales ÷ Average total assets | Higher |
| Fixed Asset Turnover | Net sales ÷ Average net fixed assets | Higher |
| Debt-to-Assets | Total liabilities ÷ Total assets | Lower |
| Debt-to-Equity | Total liabilities ÷ Total equity | Lower |
| Equity Multiplier | Average total assets ÷ Average total equity | Lower (less leverage) |
| TIE | EBIT ÷ Interest expense | Higher |
| Gross Profit Margin | (Net sales - COGS) ÷ Net sales | Higher |
| Net Profit Margin (Return on Sales) | Net income ÷ Net sales | Higher |
| ROA | Net income ÷ Average total assets | Higher |
| ROE | Net income ÷ Average total equity | Higher |
| Basic EPS | (Net income - Preferred dividends) ÷ Weighted average shares | Higher |
| EBITDA | Net income + Interest + Taxes + Depreciation + Amortization | Higher |
| P/E Ratio | Market price per share ÷ EPS | Depends on growth expectations |
| Dividend Payout Ratio | Dividends per common share ÷ EPS | Depends on dividend policy |

:::warning[Common Exam Traps]

- **Net credit sales vs. net sales:** A/R turnover technically uses net *credit* sales. If the question gives only net sales, use that.
- **Preferred dividends in EPS:** Always subtract preferred dividends from net income in the numerator of basic EPS.
- **EBIT ≠ net income:** TIE uses EBIT, not net income. Remember to add back interest and taxes.

:::

---

## Variance Analysis (Actual vs. Plan)

Ratios compare one part of the statements with another. **Variance analysis** compares actual results with the **budget** (or business plan) to show where performance beat or fell short of expectations. A **variance** is the difference between the actual and budgeted amount for a line item. It is **favorable (F)** if it makes income higher than planned and **unfavorable (U)** if it makes income lower, so revenue and cost variances read in opposite directions:

| Variance Type | Favorable (F) | Unfavorable (U) |
|---|---|---|
| **Revenue** | Actual > Budget | Actual < Budget |
| **Expense / Cost** | Actual < Budget | Actual > Budget |

### Example: Budget Variance Analysis

Panda Industries compared its quarterly budget with actual results:

| Line Item | Budget | Actual | Variance | F / U |
|---|---:|---:|---:|:---:|
| Sales revenue | \$500,000 | \$475,000 | (\$25,000) | U |
| Cost of goods sold | \$300,000 | \$280,000 | \$20,000 | F |
| **Gross profit** | **\$200,000** | **\$195,000** | **(\$5,000)** | **U** |
| Operating expenses | \$120,000 | \$130,000 | (\$10,000) | U |
| **Operating income** | **\$80,000** | **\$65,000** | **(\$15,000)** | **U** |

COGS came in \$20,000 below plan, a favorable variance. The \$25,000 revenue shortfall and the \$10,000 operating expense overrun more than offset it, producing a \$15,000 unfavorable variance in operating income.

### Reading Variances with Care

"Favorable" describes the effect on income, not whether the result is good. Panda's favorable COGS variance may simply reflect lower sales volume rather than better cost control, and advertising spending well below plan is a favorable cost variance that could signal underinvestment. Variances are also only as good as the budget behind them: an unrealistic budget produces misleading variances, a single period does not reveal trends, and netting favorable against unfavorable variances can hide problems. A variance tells you where to look; it does not explain why results differed from plan.
