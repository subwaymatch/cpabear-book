# Investment Alternatives and Financial Valuation Decision Models

Capital budgeting is the process of evaluating long-term investment opportunities and deciding which projects a company should pursue. On the BAR section, you must be able to calculate present values, compare projects using multiple financial metrics, and assess how changes in assumptions affect investment valuations—including option pricing models.

:::info[Blueprint Coverage]

This topic maps to **Area I, Group B, Topic 3** of the 2026 CPA Exam Blueprints. You should be prepared to calculate the present value of future cash flows or NPV, determine the impact of changes to valuation assumptions (e.g., Black-Scholes), and compare investment alternatives using payback period, NPV, EVA, cash flow analysis, and IRR.

:::

---

## Time Value of Money Review

A dollar received today is worth more than a dollar received in the future because today's dollar can be invested to earn a return. This principle underlies every capital budgeting technique.

### Present Value and Future Value

$$
FV = PV \times (1 + r)^n
$$

$$
PV = \frac{FV}{(1 + r)^n}
$$

Where $r$ is the discount rate per period and $n$ is the number of periods.

**Example — Bear Co.:** Bear Co. wants to know what $10,000 received in 5 years is worth today at a 10% discount rate.

$$
PV = \frac{10{,}000}{(1.10)^5} = \frac{10{,}000}{1.6105} = \$6{,}209
$$

### Annuities

An **ordinary annuity** is a series of equal payments made at the end of each period. The present value of an ordinary annuity is:

$$
PV_{\text{annuity}} = PMT \times \frac{1 - (1 + r)^{-n}}{r}
$$

**Example — Bear Co.:** Bear Co. expects to receive $3,000 per year for 4 years. At a discount rate of 8%:

$$
PV_{\text{annuity}} = 3{,}000 \times \frac{1 - (1.08)^{-4}}{0.08} = 3{,}000 \times 3.3121 = \$9{,}936
$$

:::tip[Annuity Due vs. Ordinary Annuity]

An **annuity due** has payments at the **beginning** of each period. To convert an ordinary annuity PV to an annuity due, multiply by $(1 + r)$. Watch for this distinction on the exam.

:::

---

## Net Present Value (NPV)

NPV measures the dollar amount of value a project creates (or destroys) by discounting all expected cash flows at the required rate of return and subtracting the initial investment.

$$
NPV = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t} - C_0
$$

Where $CF_t$ is the cash flow in period $t$, $r$ is the required rate of return, and $C_0$ is the initial investment.

| Decision | Rule |
|---|---|
| NPV > 0 | Accept — project adds value |
| NPV = 0 | Indifferent — project earns exactly the required return |
| NPV < 0 | Reject — project destroys value |

**Example — Polar Inc.:** Polar Inc. is considering a $50,000 equipment purchase that will generate annual cash flows of $15,000 for 5 years. The required rate of return is 10%.

$$
NPV = 15{,}000 \times \frac{1 - (1.10)^{-5}}{0.10} - 50{,}000 = 15{,}000 \times 3.7908 - 50{,}000 = 56{,}862 - 50{,}000 = \$6{,}862
$$

Since NPV is positive, Polar Inc. should accept the project.

:::warning[Common Exam Pitfall]

NPV calculations should use **incremental after-tax cash flows**, not accounting income. Remember to add back depreciation (a non-cash charge) and account for tax effects on salvage values.

:::

---

## Internal Rate of Return (IRR)

The IRR is the discount rate that makes the NPV of a project equal to zero. It represents the project's expected rate of return.

$$
0 = \sum_{t=1}^{n} \frac{CF_t}{(1 + IRR)^t} - C_0
$$

| Decision | Rule |
|---|---|
| IRR > required rate of return | Accept |
| IRR < required rate of return | Reject |

### IRR Limitations

| Limitation | Explanation |
|---|---|
| Multiple IRRs | Non-conventional cash flows (sign changes) can produce more than one IRR |
| Scale differences | IRR ignores the size of the investment; a small project may have a higher IRR but lower NPV |
| Reinvestment assumption | IRR assumes cash flows are reinvested at the IRR itself, which may be unrealistic |
| Mutually exclusive projects | IRR can rank projects differently than NPV when projects differ in size or timing |

:::note[NPV vs. IRR Conflicts]

When NPV and IRR give conflicting rankings for mutually exclusive projects, **always follow NPV**. NPV directly measures the dollar value added to the firm and uses a more realistic reinvestment assumption (the required rate of return).

:::

---

## Payback Period

The payback period is the time required to recover the initial investment from project cash flows.

### Simple Payback

$$
\text{Payback Period} = \text{Years before full recovery} + \frac{\text{Unrecovered cost at start of year}}{\text{Cash flow during year}}
$$

**Example — BIF Partners:** BIF Partners invests $40,000 in a project with the following cash flows:

| Year | Cash Flow | Cumulative |
|---|---|---|
| 1 | $12,000 | $12,000 |
| 2 | $14,000 | $26,000 |
| 3 | $16,000 | $42,000 |
| 4 | $10,000 | $52,000 |

$$
\text{Payback} = 2 + \frac{40{,}000 - 26{,}000}{16{,}000} = 2 + \frac{14{,}000}{16{,}000} = 2.875 \text{ years}
$$

### Discounted Payback

The discounted payback period uses **present values** of cash flows instead of nominal amounts. It addresses the main weakness of simple payback by accounting for the time value of money, but still ignores cash flows after the payback date.

### Pros and Cons

| Aspect | Advantage | Disadvantage |
|---|---|---|
| Simplicity | Easy to compute and explain | Ignores cash flows after payback |
| Liquidity focus | Useful for cash-constrained firms | Ignores time value of money (simple version) |
| Risk screening | Shorter payback = lower risk exposure | No direct link to shareholder value |

---

## Accounting Rate of Return (ARR)

ARR uses accounting income rather than cash flows, relating average net income to the average investment.

$$
ARR = \frac{\text{Average Annual Net Income}}{\text{Average Investment}}
$$

Where average investment is typically calculated as:

$$
\text{Average Investment} = \frac{\text{Initial Investment} + \text{Salvage Value}}{2}
$$

**Example — Bear Co.:** Bear Co. invests $80,000 in equipment with a $0 salvage value. Average annual net income is $10,000.

$$
ARR = \frac{10{,}000}{(80{,}000 + 0) / 2} = \frac{10{,}000}{40{,}000} = 25\%
$$

:::caution

ARR ignores the time value of money and uses accounting income (which includes non-cash items like depreciation). It should not be the sole criterion for capital budgeting decisions.

:::

---

## Profitability Index (PI)

The profitability index measures the bang-for-the-buck of an investment. It is particularly useful when a company faces **capital rationing** and must choose among several positive-NPV projects.

$$
PI = \frac{PV \text{ of future cash flows}}{C_0}
$$

| Decision | Rule |
|---|---|
| PI > 1.0 | Accept — project creates value per dollar invested |
| PI = 1.0 | Indifferent |
| PI < 1.0 | Reject |

**Example — Bear Co.:** From the Polar Inc. example above, the PV of future cash flows was $56,862 and the initial investment was $50,000.

$$
PI = \frac{56{,}862}{50{,}000} = 1.137
$$

A PI of 1.137 means the project returns $1.14 for every $1.00 invested.

---

## Economic Value Added (EVA)

EVA measures whether a business unit or project earns returns **above** its cost of capital. It is a residual income concept.

$$
EVA = NOPAT - (WACC \times \text{Invested Capital})
$$

Where NOPAT is net operating profit after taxes, WACC is the weighted average cost of capital, and Invested Capital is the total capital employed.

**Example — Polar Inc.:** Polar Inc. has NOPAT of $500,000, invested capital of $3,000,000, and a WACC of 12%.

$$
EVA = 500{,}000 - (0.12 \times 3{,}000{,}000) = 500{,}000 - 360{,}000 = \$140{,}000
$$

A positive EVA of $140,000 means Polar Inc. is generating returns in excess of what investors require.

:::info[EVA Interpretation]

EVA > 0 means the firm is creating shareholder value. EVA < 0 means the firm is destroying value even if accounting profits are positive. This distinction is critical on the exam.

:::

---

## Comparison of Capital Budgeting Methods

| Method | Considers TVM? | Uses Cash Flows? | Measures Value Creation? | Best Use |
|---|---|---|---|---|
| NPV | Yes | Yes | Yes (dollar amount) | Primary decision tool |
| IRR | Yes | Yes | Yes (percentage) | Quick return benchmark |
| Payback | No (simple) | Yes | No | Liquidity screening |
| Discounted Payback | Yes | Yes | No | Improved liquidity screening |
| ARR | No | No (uses income) | No | Accounting performance |
| PI | Yes | Yes | Yes (ratio) | Capital rationing |
| EVA | Yes (via WACC) | No (uses NOPAT) | Yes (dollar amount) | Ongoing performance evaluation |

:::tip[Exam Strategy]

The exam may present a scenario and ask which method is most appropriate. Remember: **NPV is the gold standard** for accept/reject decisions. PI is preferred when capital is limited. EVA is used for performance measurement of existing operations.

:::

---

## Make vs. Buy Decisions

A make-or-buy decision compares the cost of producing a component internally versus purchasing it from an external supplier.

### Relevant Costs Framework

Only **differential (incremental) costs** matter. Sunk costs and allocated fixed costs that will not change are irrelevant.

**Example — Illini Entertainment:** Illini Entertainment currently manufactures a component at the following per-unit costs:

| Cost Element | Per Unit |
|---|---|
| Direct materials | $8.00 |
| Direct labor | $12.00 |
| Variable overhead | $5.00 |
| Fixed overhead (avoidable) | $3.00 |
| Fixed overhead (unavoidable) | $7.00 |
| **Total cost to make** | **$35.00** |

An external supplier offers the component at $27.00 per unit. The relevant comparison:

| | Make | Buy |
|---|---|---|
| Relevant costs per unit | $28.00 | $27.00 |

The relevant cost to make is $8 + $12 + $5 + $3 = $28.00 (excluding unavoidable fixed overhead of $7.00). Since $28.00 > $27.00, the quantitative analysis favors buying.

### Qualitative Factors

- **Quality control** — Can the supplier meet quality standards?
- **Supply reliability** — Risk of disruption or lead time variability
- **Capacity utilization** — Can freed-up capacity be used for other profitable work?
- **Confidentiality** — Does outsourcing expose proprietary processes?
- **Long-term relationships** — Impact on workforce and supplier dependency

---

## Lease vs. Buy Decisions

A lease-versus-buy analysis compares the total cost of leasing an asset against purchasing it outright (often with financing).

### Financial Comparison Framework

| Factor | Lease | Buy |
|---|---|---|
| Cash outflows | Periodic lease payments | Down payment + loan payments |
| Tax benefits | Lease payments are deductible (operating lease) | Depreciation + interest deductions |
| Residual value | Returns to lessor | Belongs to buyer |
| Maintenance | Often included in lease | Buyer's responsibility |
| Obsolescence risk | Lessor bears risk | Buyer bears risk |

**Decision approach:** Discount all after-tax cash flows for each alternative to the present and select the option with the **lower PV of total costs**.

**Example — Illini Security:** Illini Security needs equipment costing $100,000 with a 5-year useful life and no salvage value. Option A is to lease at $24,000 per year (tax-deductible). Option B is to buy with 100% financing at 8% interest, with straight-line depreciation. At a 25% tax rate, the after-tax lease cost per year is $24,000 × (1 − 0.25) = $18,000. The firm should compare the PV of the lease stream to the PV of loan payments minus tax shields from depreciation and interest.

---

## Black-Scholes Option Pricing Model

The Black-Scholes model estimates the theoretical value of European-style call options. On the CPA exam, you will not be asked to solve the full equation, but you must understand the **inputs** and how changes in assumptions affect the option value.

### Model Inputs

| Input | Symbol | Effect on Call Value |
|---|---|---|
| Current stock price | $S$ | Higher stock price → higher call value |
| Strike (exercise) price | $K$ | Higher strike price → lower call value |
| Time to expiration | $T$ | More time → higher call value |
| Risk-free interest rate | $r$ | Higher rate → higher call value |
| Volatility of the stock | $\sigma$ | Higher volatility → higher call value |

### Sensitivity to Assumptions

:::warning[Assumption Changes on the Exam]

The exam frequently tests how changing one input affects the option value while holding others constant. Key relationships:

- **Increasing volatility** always increases option value (both calls and puts) because greater price swings increase the chance of a favorable outcome.
- **Increasing time to expiration** increases option value because there is more time for the stock to move favorably.
- **Increasing the risk-free rate** increases call values but decreases put values.

:::

The model assumes stock prices follow a lognormal distribution, the option can only be exercised at expiration (European-style), no dividends are paid during the option's life, and markets are frictionless.

---

## Worked Example: Kingfisher Industries

Kingfisher Industries is evaluating two mutually exclusive projects with a required rate of return of 12%.

| | Project Alpha | Project Beta |
|---|---|---|
| Initial investment | $200,000 | $200,000 |
| Year 1 cash flow | $80,000 | $30,000 |
| Year 2 cash flow | $70,000 | $50,000 |
| Year 3 cash flow | $60,000 | $70,000 |
| Year 4 cash flow | $40,000 | $90,000 |
| Year 5 cash flow | $20,000 | $110,000 |

### NPV Calculation

**Project Alpha:**

$$
NPV_{\alpha} = \frac{80{,}000}{1.12} + \frac{70{,}000}{1.2544} + \frac{60{,}000}{1.4049} + \frac{40{,}000}{1.5735} + \frac{20{,}000}{1.7623} - 200{,}000
$$

$$
NPV_{\alpha} = 71{,}429 + 55{,}804 + 42{,}707 + 25{,}421 + 11{,}349 - 200{,}000 = \$6{,}710
$$

**Project Beta:**

$$
NPV_{\beta} = \frac{30{,}000}{1.12} + \frac{50{,}000}{1.2544} + \frac{70{,}000}{1.4049} + \frac{90{,}000}{1.5735} + \frac{110{,}000}{1.7623} - 200{,}000
$$

$$
NPV_{\beta} = 26{,}786 + 39{,}860 + 49{,}825 + 57{,}199 + 62{,}420 - 200{,}000 = \$36{,}090
$$

### Profitability Index

$$
PI_{\alpha} = \frac{206{,}710}{200{,}000} = 1.034 \qquad PI_{\beta} = \frac{236{,}090}{200{,}000} = 1.180
$$

### Simple Payback

**Project Alpha:** cumulative cash flows reach $200,000 partway through Year 3.

$$
\text{Payback}_{\alpha} = 2 + \frac{200{,}000 - 150{,}000}{60{,}000} = 2.83 \text{ years}
$$

**Project Beta:** cumulative cash flows reach $200,000 partway through Year 4.

$$
\text{Payback}_{\beta} = 3 + \frac{200{,}000 - 150{,}000}{90{,}000} = 3.56 \text{ years}
$$

### Summary and Recommendation

| Metric | Project Alpha | Project Beta | Preferred |
|---|---|---|---|
| NPV | $6,710 | $36,090 | Beta |
| PI | 1.034 | 1.180 | Beta |
| Payback | 2.83 years | 3.56 years | Alpha |

Project Alpha has a shorter payback, but Project Beta has a substantially higher NPV and PI. Since these are mutually exclusive projects, **Kingfisher Industries should select Project Beta**. NPV is the superior criterion because it directly measures shareholder value creation.

:::note[Why Payback Can Mislead]

Alpha's faster payback reflects front-loaded cash flows, but Beta's larger later cash flows create more total value when properly discounted. This is a classic exam scenario illustrating why payback should not override NPV.

:::

---

## Exam Tips

:::tip[High-Yield Reminders]

- **NPV is the primary decision tool** — when methods conflict, follow NPV.
- Always use **after-tax incremental cash flows** for NPV and IRR calculations.
- **Sunk costs are irrelevant** in all investment decisions — only future differential costs matter.
- For make-or-buy problems, exclude **unavoidable fixed costs** from the analysis.
- Know the **direction** of each Black-Scholes input's effect on option value — you will not need to compute the formula.
- **EVA** is a performance measurement tool, not a project selection tool. It tells you whether existing operations create or destroy value above the cost of capital.
- When projects are **mutually exclusive**, compare NPV directly. When facing **capital rationing**, rank by PI.

:::
