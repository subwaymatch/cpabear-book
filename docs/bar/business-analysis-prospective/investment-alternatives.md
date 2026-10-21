# Investment Alternatives and Financial Valuation Decision Models

Should the company buy the new machine, replace the old system, make the part or buy it, lease the equipment or own it? Each question is a choice between investment alternatives, and each is answered the same basic way: estimate the cash flows of each choice, adjust for the time value of money, and compare. This process of evaluating long-term investments is called **capital budgeting**.

The BAR section tests whether you can calculate present values and net present value, compare alternatives with several metrics (payback, NPV, internal rate of return, economic value added, and cash flow analysis), and explain how a change in assumptions changes a valuation, including the inputs to the Black-Scholes option pricing model. This chapter reviews the time value of money, works through each decision model, applies them to make-or-buy and lease-or-buy decisions, and ends with a full comparison of two projects.

---

## Time Value of Money Review

A dollar today is worth more than a dollar next year, because today's dollar can be invested to earn a return. Every capital budgeting technique except simple payback and the accounting rate of return builds on that idea.

### Present Value and Future Value

$$
FV = PV \times (1 + r)^n
\qquad
PV = \frac{FV}{(1 + r)^n}
$$

Here $r$ is the discount rate per period and $n$ is the number of periods.

**Example (Bear Co.):** What is \$10,000 received in five years worth today at a 10% discount rate?

$$
PV = \frac{10{,}000}{(1.10)^5} = \frac{10{,}000}{1.6105} = \$6{,}209
$$

### Annuities

An **ordinary annuity** is a series of equal payments at the **end** of each period. Its present value is:

$$
PV_{\text{annuity}} = PMT \times \frac{1 - (1 + r)^{-n}}{r}
$$

**Example (Bear Co.):** Bear Co. expects to receive \$3,000 a year for four years. At an 8% discount rate:

$$
PV_{\text{annuity}} = 3{,}000 \times \frac{1 - (1.08)^{-4}}{0.08} = 3{,}000 \times 3.3121 = \$9{,}936
$$

An **annuity due** has payments at the **beginning** of each period, so each payment is discounted one period less. To convert, multiply the ordinary annuity PV by $(1 + r)$. Watch for which one a question describes.

---

## Net Present Value (NPV)

NPV measures how much value a project creates. Discount every expected cash flow at the required rate of return, then subtract the initial investment.

$$
NPV = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t} - C_0
$$

$CF_t$ is the cash flow in period $t$, $r$ is the required rate of return (often the company's WACC), and $C_0$ is the initial investment. A positive NPV means the project earns more than the required return and should be accepted. A negative NPV means it should be rejected. At zero, the project earns exactly the required return.

**Example (Polar Inc.):** Polar Inc. is considering a \$50,000 equipment purchase that will generate cash flows of \$15,000 a year for five years. The required rate of return is 10%.

$$
NPV = 15{,}000 \times \frac{1 - (1.10)^{-5}}{0.10} - 50{,}000 = 15{,}000 \times 3.7908 - 50{,}000 = 56{,}862 - 50{,}000 = \$6{,}862
$$

The NPV is positive, so Polar Inc. should accept the project.

:::warning[Common Exam Pitfall]

NPV uses **incremental after-tax cash flows**, not accounting income. Depreciation is not a cash flow, but it reduces taxes, so include its tax savings (depreciation × tax rate). Also include changes in working capital and the after-tax salvage value. **Sunk costs** (money already spent) are irrelevant.

:::

---

## Internal Rate of Return (IRR)

The IRR is the discount rate that makes a project's NPV exactly zero. It is the project's expected rate of return.

$$
0 = \sum_{t=1}^{n} \frac{CF_t}{(1 + IRR)^t} - C_0
$$

Accept the project if its IRR exceeds the required rate of return, and reject it if the IRR is lower. When the cash flows are an even annuity, you can find the IRR from the annuity factor. For Polar Inc.'s project, the factor is \$50,000 ÷ \$15,000 = 3.3333. The five-year annuity factors are 3.3522 at 15% and 3.2743 at 16%, so the IRR is a little over 15% (about 15.2%). That beats the 10% required return, which agrees with the positive NPV.

IRR is easy to communicate, but it has weaknesses:

| Limitation | Explanation |
|---|---|
| Multiple IRRs | Cash flows that change sign more than once can produce more than one IRR |
| Scale | IRR ignores the size of the investment; a small project can have a higher IRR but a lower NPV |
| Reinvestment assumption | IRR assumes cash flows are reinvested at the IRR itself, which may be unrealistic |
| Mutually exclusive projects | IRR can rank projects differently from NPV when they differ in size or timing |

When NPV and IRR rank mutually exclusive projects differently, **follow NPV**. It measures the dollars of value added and assumes reinvestment at the required rate of return, which is more realistic.

---

## Payback Period

The payback period is the time it takes to recover the initial investment from the project's cash flows. When cash flows are uneven, count the full years before recovery and then add the fraction of the next year needed:

$$
\text{Payback Period} = \text{Years before full recovery} + \frac{\text{Unrecovered cost at start of year}}{\text{Cash flow during that year}}
$$

**Example (Kodiak Partners):** Kodiak Partners invests \$40,000 in a project with these cash flows:

| Year | Cash Flow | Cumulative |
|---|---|---|
| 1 | \$12,000 | \$12,000 |
| 2 | \$14,000 | \$26,000 |
| 3 | \$16,000 | \$42,000 |
| 4 | \$10,000 | \$52,000 |

$$
\text{Payback} = 2 + \frac{40{,}000 - 26{,}000}{16{,}000} = 2 + \frac{14{,}000}{16{,}000} = 2.875 \text{ years}
$$

Payback is simple and highlights how quickly cash comes back, which matters to a cash-constrained company and serves as a rough risk screen. Its weaknesses are just as clear: it ignores everything after the payback date, and the simple version ignores the time value of money. The **discounted payback period** fixes the second problem by using the present values of the cash flows, but it still ignores cash flows after payback.

---

## Accounting Rate of Return (ARR)

ARR uses accounting income instead of cash flows. It divides average annual net income by the average investment:

$$
ARR = \frac{\text{Average Annual Net Income}}{\text{Average Investment}}
\qquad
\text{Average Investment} = \frac{\text{Initial Investment} + \text{Salvage Value}}{2}
$$

**Example (Bear Co.):** Bear Co. invests \$80,000 in equipment with no salvage value. Average annual net income is \$10,000.

$$
ARR = \frac{10{,}000}{(80{,}000 + 0) \div 2} = \frac{10{,}000}{40{,}000} = 25\%
$$

ARR is easy to compute from the accounting records, but it ignores the time value of money and is based on income rather than cash. It should not be the only basis for a decision.

---

## Profitability Index (PI)

The profitability index is the present value of future cash flows per dollar invested. It is most useful under **capital rationing**, when a company has more positive-NPV projects than it can fund and must rank them.

$$
PI = \frac{PV \text{ of future cash flows}}{C_0}
$$

A PI above 1.0 means the project creates value (it is the same as a positive NPV). A PI below 1.0 means it does not.

**Example (Polar Inc.):** From the NPV example, the PV of future cash flows is \$56,862 and the investment is \$50,000.

$$
PI = \frac{56{,}862}{50{,}000} = 1.137
$$

Each dollar invested returns about \$1.14 in present value.

---

## Economic Value Added (EVA)

EVA asks whether a business, division, or project earns more than the cost of the capital it uses. It is a form of **residual income**: profit left after charging for capital.

$$
EVA = NOPAT - (WACC \times \text{Invested Capital})
$$

NOPAT is net operating profit after taxes, WACC is the weighted average cost of capital, and invested capital is the total capital employed.

**Example (Polar Inc.):** Polar Inc. has NOPAT of \$500,000, invested capital of \$3,000,000, and a WACC of 12%.

$$
EVA = 500{,}000 - (0.12 \times 3{,}000{,}000) = 500{,}000 - 360{,}000 = \$140{,}000
$$

A positive EVA means Polar earns more than its investors require. A negative EVA means the company is destroying value, even if its accounting profit is positive. EVA is used mainly to evaluate the performance of existing operations, while NPV is used to choose new projects.

---

## Comparison of Capital Budgeting Methods

| Method | Considers Time Value? | Uses Cash Flows? | Measures Value Created? | Best Use |
|---|---|---|---|---|
| NPV | Yes | Yes | Yes (dollar amount) | Primary accept-or-reject tool |
| IRR | Yes | Yes | Yes (percentage) | Quick return benchmark |
| Payback | No (simple version) | Yes | No | Liquidity screening |
| Discounted payback | Yes | Yes | No | Improved liquidity screening |
| ARR | No | No (uses income) | No | Accounting performance |
| PI | Yes | Yes | Yes (ratio) | Ranking under capital rationing |
| EVA | Yes (through WACC) | No (uses NOPAT) | Yes (dollar amount) | Performance of existing operations |

:::tip[Exam Strategy]

When a question asks which method is most appropriate, remember the pattern: **NPV** for accept-or-reject and mutually exclusive choices, **PI** when capital is limited, **payback** for liquidity and risk screening, and **EVA** for measuring the performance of operations already in place.

:::

---

## Relevant Costs: Make, Buy, or Replace

Make-or-buy and system replacement decisions use the same principle: only **differential (incremental)** costs and revenues matter. Sunk costs, and fixed costs that will be incurred whichever option is chosen, are irrelevant.

**Example (Cub Entertainment):** Cub Entertainment makes a component at these per-unit costs:

| Cost Element | Per Unit |
|---|---|
| Direct materials | \$8.00 |
| Direct labor | \$12.00 |
| Variable overhead | \$5.00 |
| Fixed overhead (avoidable) | \$3.00 |
| Fixed overhead (unavoidable) | \$7.00 |
| **Total cost to make** | **\$35.00** |

An outside supplier offers the component for \$27.00 per unit. The \$7.00 of unavoidable fixed overhead stays whichever option Cub chooses, so it is excluded. The relevant cost to make is \$8 + \$12 + \$5 + \$3 = **\$28.00**, which exceeds the \$27.00 price. On the numbers alone, Cub should buy.

The numbers are not the whole decision. Management should also ask whether the supplier can meet quality standards and deliver reliably, whether the freed capacity can be used for other profitable work (an opportunity cost that would strengthen the case for buying), whether outsourcing would expose proprietary processes, and how the change affects the workforce.

A **system replacement** decision compares the incremental cash flows of the new system (its cost, operating savings, and any sale proceeds from the old system, all after tax) with those of keeping the old one. The book value of the old system is a sunk cost and does not matter, except for the tax effect of selling it.

---

## Lease or Buy Decisions

A lease-or-buy analysis compares the cost of leasing an asset with the cost of buying it, often with borrowed money.

| Factor | Lease | Buy |
|---|---|---|
| Cash outflows | Periodic lease payments | Purchase price (or loan payments) |
| Tax benefits | Lease payments are deductible (for a lease treated as a true lease for tax purposes) | Depreciation and interest are deductible |
| Residual value | Returns to the lessor | Belongs to the buyer |
| Maintenance | Often included in the lease | Buyer's responsibility |
| Obsolescence risk | Borne by the lessor | Borne by the buyer |

**Decision approach:** Discount the after-tax cash flows of each alternative and choose the one with the **lower present value of cost**. Because leasing is a substitute for borrowing, the usual discount rate is the **after-tax cost of debt**.

**Example (Sloth Security):** Sloth Security needs equipment that costs \$100,000, has a five-year life, and has no salvage value. It can lease the equipment for \$24,000 a year, paid at the end of each year, or buy it with a five-year loan at 8%. Its tax rate is 25%, so its after-tax cost of debt is 8% × (1 - 0.25) = 6%. The five-year annuity factor at 6% is 4.2124.

- **Lease:** The after-tax payment is \$24,000 × (1 - 0.25) = \$18,000 a year. PV = \$18,000 × 4.2124 = **\$75,823**.
- **Buy:** Straight-line depreciation is \$20,000 a year, which saves \$20,000 × 25% = \$5,000 of tax a year, with a PV of \$5,000 × 4.2124 = \$21,062. Discounted at the after-tax borrowing rate, the after-tax loan payments have a PV equal to the \$100,000 borrowed. The PV cost of buying is \$100,000 - \$21,062 = **\$78,938**.

Leasing costs about \$3,100 less in present value terms, so Sloth Security should lease, before considering qualitative factors such as maintenance terms and the risk of obsolescence.

---

## Black-Scholes Option Pricing Model

The Black-Scholes model estimates the value of a European-style call option (one that can be exercised only at expiration). The exam does not ask you to solve the formula. It asks how a **change in one input** changes the option's value, with all other inputs held constant.

| Input | Symbol | Effect on Call Value | Why |
|---|---|---|---|
| Current stock price | $S$ | Higher price raises value | The option is closer to, or further into, the money |
| Strike (exercise) price | $K$ | Higher strike lowers value | The holder must pay more to exercise |
| Time to expiration | $T$ | More time raises value | More time for the stock price to rise |
| Risk-free interest rate | $r$ | Higher rate raises value | The present value of the strike price is lower |
| Volatility of the stock | $\sigma$ | Higher volatility raises value | Bigger swings raise the chance of a large payoff, while the loss is capped at the premium |
| Expected dividends | $q$ | Higher dividends lower value | Dividends reduce the stock price, and the option holder does not receive them |

Volatility raises the value of both calls and puts. The risk-free rate moves them in opposite directions: a higher rate raises call values and lowers put values. The basic model assumes that stock returns are lognormally distributed, that the option can be exercised only at expiration, that volatility and the risk-free rate are constant, and that markets are frictionless. The same inputs drive the fair value of employee stock options, covered in [Stock Compensation](../technical-accounting-assets-and-revenue/stock-compensation.md).

---

## Worked Example: Grizzly Industries

Grizzly Industries is choosing between two mutually exclusive projects. Each costs \$200,000, and the required rate of return is 12%.

| Year | PV Factor at 12% | Alpha Cash Flow | PV of Alpha | Beta Cash Flow | PV of Beta |
|---|---|---|---|---|---|
| 1 | 0.8929 | \$80,000 | \$71,432 | \$30,000 | \$26,787 |
| 2 | 0.7972 | \$70,000 | \$55,804 | \$50,000 | \$39,860 |
| 3 | 0.7118 | \$60,000 | \$42,708 | \$70,000 | \$49,826 |
| 4 | 0.6355 | \$40,000 | \$25,420 | \$90,000 | \$57,195 |
| 5 | 0.5674 | \$20,000 | \$11,348 | \$110,000 | \$62,414 |
| **Total** | | **\$270,000** | **\$206,712** | **\$350,000** | **\$236,082** |

**NPV:** Alpha is \$206,712 - \$200,000 = **\$6,712**. Beta is \$236,082 - \$200,000 = **\$36,082**.

**Profitability index:** Alpha is \$206,712 ÷ \$200,000 = **1.034**. Beta is \$236,082 ÷ \$200,000 = **1.180**.

**Simple payback:** Alpha has recovered \$150,000 after two years and needs \$50,000 of Year 3's \$60,000, so payback is 2 + 50/60 = **2.83 years**. Beta has recovered \$150,000 after three years and needs \$50,000 of Year 4's \$90,000, so payback is 3 + 50/90 = **3.56 years**.

| Metric | Project Alpha | Project Beta | Preferred |
|---|---|---|---|
| NPV | \$6,712 | \$36,082 | Beta |
| PI | 1.034 | 1.180 | Beta |
| Payback | 2.83 years | 3.56 years | Alpha |

Alpha pays back faster because its cash flows come early. Beta's larger later cash flows create far more value even after discounting. Because the projects are mutually exclusive, **Grizzly Industries should choose Project Beta**. This is the classic exam scenario showing why payback should not override NPV.
