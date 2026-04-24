# Managerial and Cost Accounting

Managerial and cost accounting provides the internal information managers need to plan, control, and evaluate operations. Unlike financial accounting—which produces GAAP-compliant reports for external users—cost accounting focuses on measuring the cost of products, services, and activities so that managers can make better decisions. The BAR section of the CPA exam tests your ability to classify costs, apply costing methods, perform variance analysis, and interpret sales results.

:::info[Why This Matters]

The BAR blueprints require you to **calculate** fixed, variable, and mixed costs; **describe and use** absorption, variable, activity-based, process, and job-order costing; **derive** variance analysis methods; and **interpret** sales results through price, volume, and mix analysis. Every topic in this chapter maps directly to a testable task.

:::

---

## Cost Classifications

Before selecting a costing method, you must understand how costs behave in relation to changes in activity.

### Fixed, Variable, and Mixed Costs

| Cost Behavior | Definition | Example |
|---|---|---|
| **Fixed** | Total cost stays constant within the relevant range regardless of activity level | Annual building lease of $120,000 |
| **Variable** | Total cost changes in direct proportion to activity | Direct materials at $4 per unit |
| **Mixed (semi-variable)** | Contains both a fixed component and a variable component | Utility bill with a $500 base charge plus $0.08 per machine-hour |
| **Step-fixed** | Fixed over a range of activity but jumps to a new level once a threshold is crossed | One supervisor per 30 employees; a second is hired at employee 31 |

:::tip[Exam Tip]

On a per-unit basis the behavior flips: fixed costs per unit **decrease** as volume rises, while variable costs per unit **remain constant**. Questions often test whether you can distinguish total behavior from per-unit behavior.

:::

### Direct vs. Indirect Costs

| Classification | Definition | Example |
|---|---|---|
| **Direct cost** | Can be traced to a specific cost object economically and conveniently | Wood used in a furniture product line |
| **Indirect cost** | Cannot be conveniently traced; must be allocated | Factory rent shared by all product lines |

Whether a cost is direct or indirect depends on the **cost object**. Salary for a department manager is a direct cost of the department but an indirect cost of an individual product.

---

## Separating Mixed Costs — The High-Low Method

The high-low method estimates the variable and fixed components of a mixed cost using only the highest and lowest activity levels.

$$
\text{Variable Cost per Unit} = \frac{\text{Cost at High Activity} - \text{Cost at Low Activity}}{\text{High Activity} - \text{Low Activity}}
$$

Once the variable rate is known, solve for fixed cost at either point:

$$
\text{Fixed Cost} = \text{Total Cost} - (\text{Variable Rate} \times \text{Activity Level})
$$

### Worked Example — Bear Co. Utilities

Bear Co. recorded the following utility costs over the past six months:

| Month | Machine-Hours | Utility Cost |
|---|---|---|
| January | 2,000 | $2,100 |
| February | 3,200 | $2,860 |
| March | 2,800 | $2,580 |
| April | 4,000 | $3,300 |
| May | 1,600 | $1,880 |
| June | 3,600 | $3,060 |

**Step 1 — Identify the high and low points:**

- High: April — 4,000 hours, $3,300
- Low: May — 1,600 hours, $1,880

**Step 2 — Variable rate:**

$$
\text{Variable Rate} = \frac{\$3{,}300 - \$1{,}880}{4{,}000 - 1{,}600} = \frac{\$1{,}420}{2{,}400} \approx \$0.592 \text{ per machine-hour}
$$

**Step 3 — Fixed cost (using the high point):**

$$
\text{Fixed Cost} = \$3{,}300 - (\$0.592 \times 4{,}000) = \$3{,}300 - \$2{,}368 = \$932
$$

The cost formula is: **Total Utility Cost = $932 + $0.592 per machine-hour**.

:::note

The high-low method is simple but uses only two data points, making it sensitive to outliers. Regression analysis is more accurate when data is available, but the high-low method is the most commonly tested technique on the CPA exam.

:::

---

## Costing Methods

### Job-Order Costing

Job-order costing tracks costs to **individual jobs, batches, or contracts**. It is appropriate when products or services are distinct and identifiable—such as custom furniture, construction projects, or audit engagements.

**Flow of costs:**

1. Direct materials and direct labor are traced to specific jobs.
2. Manufacturing overhead is **applied** to jobs using a predetermined overhead rate (POHR).

$$
\text{POHR} = \frac{\text{Estimated Total Manufacturing Overhead}}{\text{Estimated Total Allocation Base}}
$$

**Example — Bear Co.** estimates annual overhead of $600,000 and expects 40,000 direct labor hours.

$$
\text{POHR} = \frac{\$600{,}000}{40{,}000 \text{ DLH}} = \$15 \text{ per DLH}
$$

If Job 301 uses 120 direct labor hours, applied overhead is $15 × 120 = **$1,800**.

```journal
Dr. Work-in-Process Inventory[a] 1,800
    Cr. Manufacturing Overhead 1,800
```

At year-end, any difference between actual and applied overhead is either **overapplied** (credit balance—favorable) or **underapplied** (debit balance—unfavorable) and typically closed to Cost of Goods Sold.

### Process Costing

Process costing accumulates costs by **department or process** rather than by job. It is used in continuous or mass-production environments—chemicals, beverages, petroleum refining.

The key concept is **equivalent units of production (EUP)**—converting partially completed units into the number of fully completed units they represent.

| Method | Beginning WIP Treatment | Best For |
|---|---|---|
| **Weighted average** | Blends beginning WIP costs with current-period costs | Simpler calculations; stable cost environments |
| **FIFO** | Separates beginning WIP costs from current-period costs | More accurate current-period unit costs |

**Equivalent Units — FIFO Example — Polar Inc.**

Polar Inc.'s Mixing Department reports the following for June:

| Item | Units | % Complete (Conversion) |
|---|---|---|
| Beginning WIP | 3,000 | 40% |
| Started during June | 18,000 | — |
| Completed and transferred out | 17,000 | 100% |
| Ending WIP | 4,000 | 25% |

**FIFO equivalent units for conversion costs:**

$$
\text{EUP} = (3{,}000 \times 60\%) + (14{,}000 \times 100\%) + (4{,}000 \times 25\%)
$$

$$
\text{EUP} = 1{,}800 + 14{,}000 + 1{,}000 = 16{,}800
$$

The 60% for beginning WIP reflects the work **remaining** (100% − 40% already completed).

### Activity-Based Costing (ABC)

ABC refines overhead allocation by assigning costs to **activities** (cost pools) and then to products using **cost drivers** that reflect actual resource consumption.

| Step | Action |
|---|---|
| 1 | Identify major activities (e.g., machine setups, quality inspections, material handling) |
| 2 | Assign overhead costs to each activity cost pool |
| 3 | Select a cost driver for each pool (e.g., number of setups, inspection hours) |
| 4 | Compute an activity rate for each pool |
| 5 | Allocate costs to products based on their consumption of each driver |

**Example — Kingfisher Industries** manufactures two products:

| Activity Pool | Total Cost | Cost Driver | Total Driver Volume |
|---|---|---|---|
| Machine setups | $180,000 | Number of setups | 600 |
| Quality inspections | $90,000 | Inspection hours | 1,500 |

Activity rates:

$$
\text{Setup Rate} = \frac{\$180{,}000}{600} = \$300 \text{ per setup}
$$

$$
\text{Inspection Rate} = \frac{\$90{,}000}{1{,}500} = \$60 \text{ per inspection hour}
$$

If Product A requires 200 setups and 900 inspection hours, its allocated overhead is (200 × $300) + (900 × $60) = $60,000 + $54,000 = **$114,000**.

:::warning

ABC often shifts costs from high-volume products to low-volume products because low-volume products tend to consume a disproportionate share of batch-level and product-level activities. Exam questions may ask you to compare ABC results with traditional overhead allocation and explain the difference.

:::

### Absorption Costing vs. Variable Costing

The key difference is the treatment of **fixed manufacturing overhead (FMOH)**.

| Feature | Absorption Costing | Variable Costing |
|---|---|---|
| Required by GAAP? | **Yes** | No (internal use only) |
| FMOH treatment | **Product cost** (inventoried) | **Period cost** (expensed immediately) |
| Income statement format | Traditional (COGS-based) | Contribution margin format |

**Income reconciliation:**

$$
\text{Absorption Income} - \text{Variable Income} = \text{Change in Inventory (units)} \times \text{Fixed MOH per unit}
$$

- When **production > sales**, absorption income is **higher** (fixed costs are deferred in inventory).
- When **production < sales**, absorption income is **lower** (previously deferred fixed costs flow into COGS).
- When **production = sales**, both methods yield **the same** income.

**Example — BIF Partners**

BIF Partners produces 10,000 units and sells 8,000. Fixed MOH totals $200,000, so fixed MOH per unit is $20.

$$
\text{Absorption Income} - \text{Variable Income} = (10{,}000 - 8{,}000) \times \$20 = \$40{,}000
$$

Absorption income exceeds variable income by $40,000 because $40,000 of fixed MOH remains in ending inventory under absorption costing.

---

## Standard Costing and Variance Analysis

Standard costing assigns **predetermined** costs to products and then compares actual results to the standard. Differences—called **variances**—highlight areas that need management attention.

### Direct Materials Variances

$$
\text{Materials Price Variance (MPV)} = (\text{AQ Purchased}) \times (\text{AP} - \text{SP})
$$

$$
\text{Materials Quantity Variance (MQV)} = (\text{AQ Used} - \text{SQ Allowed}) \times \text{SP}
$$

Where AQ = actual quantity, AP = actual price, SP = standard price, SQ = standard quantity allowed for actual output.

**Example — Illini Entertainment**

Illini Entertainment sets a standard of 3 lbs of material per unit at $5/lb. During the month, the company produced 2,000 units, purchased 6,500 lbs at $5.20/lb, and used 6,300 lbs.

- **MPV** = 6,500 × ($5.20 − $5.00) = 6,500 × $0.20 = **$1,300 Unfavorable**
- **SQ Allowed** = 2,000 × 3 = 6,000 lbs
- **MQV** = (6,300 − 6,000) × $5.00 = 300 × $5.00 = **$1,500 Unfavorable**

### Direct Labor Variances

$$
\text{Labor Rate Variance (LRV)} = \text{AH} \times (\text{AR} - \text{SR})
$$

$$
\text{Labor Efficiency Variance (LEV)} = (\text{AH} - \text{SH Allowed}) \times \text{SR}
$$

Where AH = actual hours, AR = actual rate, SR = standard rate, SH = standard hours allowed.

**Example — Illini Entertainment (continued)**

Standard: 0.5 hours per unit at $18/hr. Actual: 1,050 hours at $17.50/hr for 2,000 units.

- **LRV** = 1,050 × ($17.50 − $18.00) = 1,050 × (−$0.50) = **$525 Favorable**
- **SH Allowed** = 2,000 × 0.5 = 1,000 hours
- **LEV** = (1,050 − 1,000) × $18.00 = 50 × $18.00 = **$900 Unfavorable**

### Overhead Variances

Overhead variances can be analyzed using a **two-way** or **three-way** decomposition.

**Three-way analysis:**

| Variance | Formula |
|---|---|
| **Spending** | Actual OH − (Budgeted Fixed OH + Variable OH Rate × Actual Hours) |
| **Efficiency** | (Actual Hours − Standard Hours Allowed) × Variable OH Rate |
| **Volume** | (Standard Hours Allowed − Denominator Hours) × Fixed OH Rate |

**Two-way analysis:**

| Variance | Components |
|---|---|
| **Budget (controllable)** | Spending + Efficiency |
| **Volume** | Same as three-way volume variance |

:::tip[Exam Tip]

The **volume variance** relates only to fixed overhead. It measures whether the company operated at, above, or below the denominator (budgeted) activity level used to set the fixed overhead rate. A favorable volume variance means actual activity exceeded the denominator level.

:::

**Example — Illini Security**

Illini Security budgets 5,000 standard machine-hours per month. Budgeted fixed overhead is $50,000 and the variable overhead rate is $6 per machine-hour. Actual results: 4,800 actual hours worked, 4,600 standard hours allowed, and actual overhead of $82,000.

- **Fixed OH Rate** = $50,000 ÷ 5,000 = $10 per hour
- **Spending** = $82,000 − ($50,000 + $6 × 4,800) = $82,000 − $78,800 = **$3,200 Unfavorable**
- **Efficiency** = (4,800 − 4,600) × $6 = **$1,200 Unfavorable**
- **Volume** = (4,600 − 5,000) × $10 = **$4,000 Unfavorable**

---

## Cost-Volume-Profit (CVP) Analysis

CVP analysis examines how changes in costs and volume affect operating income. It rests on the **contribution margin**—the portion of revenue that remains after deducting variable costs.

$$
\text{Contribution Margin per Unit} = \text{Selling Price} - \text{Variable Cost per Unit}
$$

$$
\text{Contribution Margin Ratio} = \frac{\text{Contribution Margin per Unit}}{\text{Selling Price}}
$$

### Breakeven Point

$$
\text{Breakeven (units)} = \frac{\text{Total Fixed Costs}}{\text{CM per Unit}}
$$

$$
\text{Breakeven (dollars)} = \frac{\text{Total Fixed Costs}}{\text{CM Ratio}}
$$

### Target Profit

$$
\text{Units for Target Profit} = \frac{\text{Fixed Costs} + \text{Target Profit}}{\text{CM per Unit}}
$$

### Margin of Safety

$$
\text{Margin of Safety} = \text{Actual (or Budgeted) Sales} - \text{Breakeven Sales}
$$

$$
\text{Margin of Safety \%} = \frac{\text{Margin of Safety}}{\text{Actual Sales}} \times 100
$$

### Worked Example — Bear Co.

Bear Co. sells a product for $50 per unit. Variable cost is $30 per unit and total fixed costs are $160,000.

- **CM per unit** = $50 − $30 = $20
- **CM ratio** = $20 ÷ $50 = 40%
- **Breakeven** = $160,000 ÷ $20 = **8,000 units** (or $160,000 ÷ 0.40 = **$400,000**)
- **Target profit of $60,000** → ($160,000 + $60,000) ÷ $20 = **11,000 units**
- If budgeted sales are 10,000 units ($500,000), **margin of safety** = $500,000 − $400,000 = **$100,000 (20%)**

:::caution

CVP analysis assumes a **constant sales mix**, linear cost behavior, and that all costs can be classified as either fixed or variable. When these assumptions are violated, results should be interpreted with caution.

:::

---

## Sales Analysis — Price, Volume, and Mix Variances

When actual sales differ from budget, management needs to know **why**. Sales variances decompose the total revenue variance into its component drivers.

### Sales Price Variance

$$
\text{Sales Price Variance} = (\text{Actual Price} - \text{Budgeted Price}) \times \text{Actual Quantity Sold}
$$

### Sales Volume Variance

$$
\text{Sales Volume Variance} = (\text{Actual Quantity} - \text{Budgeted Quantity}) \times \text{Budgeted Price}
$$

### Sales Mix Variance

When a company sells multiple products, the **mix variance** isolates the effect of selling a different proportion of products than planned.

$$
\text{Sales Mix Variance} = (\text{Actual Mix \%} - \text{Budgeted Mix \%}) \times \text{Total Actual Units} \times \text{Budgeted CM per Unit}
$$

### Worked Example — Bear Co. Multi-Product Sales

Bear Co. budgeted and actual results for two products:

| Product | Budgeted Units | Budgeted Price | Budgeted CM/Unit | Actual Units | Actual Price |
|---|---|---|---|---|---|
| Alpha | 6,000 | $40 | $16 | 5,500 | $42 |
| Beta | 4,000 | $60 | $30 | 5,500 | $58 |
| **Total** | **10,000** | | | **11,000** | |

**Budgeted mix:** Alpha 60%, Beta 40%. **Actual mix:** Alpha 50%, Beta 50%.

**Sales price variances:**

- Alpha: ($42 − $40) × 5,500 = **$11,000 Favorable**
- Beta: ($58 − $60) × 5,500 = **$11,000 Unfavorable**

**Sales mix variances (using budgeted CM):**

- Alpha: (50% − 60%) × 11,000 × $16 = −0.10 × 11,000 × $16 = **$17,600 Unfavorable**
- Beta: (50% − 40%) × 11,000 × $30 = 0.10 × 11,000 × $30 = **$33,000 Favorable**
- **Net mix variance** = −$17,600 + $33,000 = **$15,400 Favorable**

The net favorable mix variance tells Bear Co. that the shift toward the higher-margin Beta product more than offset the decline in Alpha's share.

:::tip[Exam Tip]

A favorable sales mix variance occurs when the actual mix shifts toward products with **higher contribution margins**. Always compute mix variances using **budgeted contribution margin per unit**, not selling price, so that the analysis reflects profitability impact.

:::

---

## Summary of Key Formulas

| Formula | Equation |
|---|---|
| High-low variable rate | (High cost − Low cost) ÷ (High activity − Low activity) |
| POHR | Estimated total MOH ÷ Estimated total allocation base |
| Materials price variance | AQ purchased × (AP − SP) |
| Materials quantity variance | (AQ used − SQ allowed) × SP |
| Labor rate variance | AH × (AR − SR) |
| Labor efficiency variance | (AH − SH allowed) × SR |
| Breakeven (units) | Fixed costs ÷ CM per unit |
| Breakeven (dollars) | Fixed costs ÷ CM ratio |
| Margin of safety | Actual sales − Breakeven sales |
| Sales price variance | (Actual price − Budgeted price) × Actual quantity |
| Sales volume variance | (Actual quantity − Budgeted quantity) × Budgeted price |
| Sales mix variance | (Actual mix % − Budgeted mix %) × Total actual units × Budgeted CM/unit |

---

## Chapter Recap

:::info[Key Takeaways]

1. **Cost behavior** — Fixed costs are constant in total; variable costs are constant per unit. Mixed costs require separation (high-low method or regression).
2. **Costing methods** — Job-order costing traces costs to individual jobs; process costing averages costs over equivalent units; ABC assigns costs through activity cost pools and drivers; absorption costing capitalizes fixed MOH while variable costing expenses it immediately.
3. **Variance analysis** — Compare actual results to standards. Materials variances split into price and quantity; labor variances split into rate and efficiency; overhead variances split into spending, efficiency, and volume (three-way) or budget and volume (two-way).
4. **CVP analysis** — Contribution margin drives breakeven, target profit, and margin of safety calculations. Assumes linear behavior and constant mix.
5. **Sales analysis** — Decompose revenue variances into price, volume, and mix components to identify the true drivers of performance versus plan.

:::
