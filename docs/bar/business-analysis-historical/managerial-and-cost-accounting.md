# Managerial and Cost Accounting

Financial accounting reports to outsiders under GAAP. Managerial and cost accounting serves the people inside the business: it measures what products, services, and activities cost so that managers can plan, set prices, and control operations. The BAR section tests whether you can classify costs by behavior, apply the main costing methods, analyze variances from standard, and explain sales results in terms of price, volume, and mix.

The chapter follows that order. It begins with how costs behave, then covers job-order, process, activity-based, absorption, and variable costing, then standard cost variances, cost-volume-profit analysis, and finally the analysis of sales variances.

---

## Cost Classifications

Before choosing a costing method, you need to know how each cost behaves when activity changes.

### Fixed, Variable, and Mixed Costs

| Cost Behavior | Definition | Example |
|---|---|---|
| **Fixed** | Total cost stays the same within the relevant range, whatever the activity level | Annual building lease of \$120,000 |
| **Variable** | Total cost changes in direct proportion to activity | Direct materials at \$4 per unit |
| **Mixed (semi-variable)** | Has both a fixed component and a variable component | Utility bill with a \$500 base charge plus \$0.08 per machine-hour |
| **Step-fixed** | Fixed over a range of activity, then jumps to a new level once a threshold is crossed | One supervisor per 30 employees; a second is hired at employee 31 |

The **relevant range** is the band of activity over which these patterns hold. Outside it, a "fixed" cost such as rent may change because the company needs another building.

:::tip[Exam Tip]

On a per-unit basis the behavior flips. Fixed cost per unit **falls** as volume rises, because the same total is spread over more units, while variable cost per unit **stays constant**. Questions often test whether you can tell total behavior from per-unit behavior.

:::

### Direct and Indirect Costs

| Classification | Definition | Example |
|---|---|---|
| **Direct cost** | Can be traced to a specific cost object economically and conveniently | Wood used in a furniture product line |
| **Indirect cost** | Cannot be conveniently traced, so it must be allocated | Factory rent shared by all product lines |

Whether a cost is direct or indirect depends on the **cost object** (the product, department, or activity being costed). A department manager's salary is a direct cost of the department but an indirect cost of each product the department makes.

---

## Separating Mixed Costs: The High-Low Method

To budget a mixed cost, you need its fixed and variable parts. The high-low method estimates them from two observations: the periods with the highest and lowest **activity** (not the highest and lowest cost).

$$
\text{Variable Cost per Unit} = \frac{\text{Cost at High Activity} - \text{Cost at Low Activity}}{\text{High Activity} - \text{Low Activity}}
$$

Once the variable rate is known, solve for fixed cost at either point:

$$
\text{Fixed Cost} = \text{Total Cost} - (\text{Variable Rate} \times \text{Activity Level})
$$

### Worked Example: Bear Co. Utilities

Bear Co. recorded these utility costs over six months:

| Month | Machine-Hours | Utility Cost |
|---|---|---|
| January | 2,000 | \$2,100 |
| February | 3,200 | \$2,860 |
| March | 2,800 | \$2,580 |
| April | 4,000 | \$3,300 |
| May | 1,600 | \$1,860 |
| June | 3,600 | \$3,060 |

The high point is April (4,000 hours, \$3,300) and the low point is May (1,600 hours, \$1,860).

$$
\text{Variable Rate} = \frac{\$3{,}300 - \$1{,}860}{4{,}000 - 1{,}600} = \frac{\$1{,}440}{2{,}400} = \$0.60 \text{ per machine-hour}
$$

$$
\text{Fixed Cost} = \$3{,}300 - (\$0.60 \times 4{,}000) = \$3{,}300 - \$2{,}400 = \$900
$$

The cost formula is **Total Utility Cost = \$900 + \$0.60 per machine-hour**. Using the low point gives the same answer: \$1,860 - (\$0.60 × 1,600) = \$900. To budget a month with 3,000 machine-hours, Bear Co. would expect \$900 + \$1,800 = \$2,700.

The method is quick, but it uses only two data points, so one unusual month can distort the estimate. Regression analysis uses every observation and is more accurate. The exam tests both, with high-low appearing most often in calculations.

---

## Costing Methods

A costing method answers one question: how do the costs of making something end up attached to the units made? The answer depends on the kind of production.

### Job-Order Costing

Job-order costing tracks costs to **individual jobs, batches, or contracts**. It fits work where each job is distinct, such as custom furniture, construction projects, or audit engagements.

Direct materials and direct labor are traced to each job. Manufacturing overhead cannot be traced, so it is **applied** to jobs using a predetermined overhead rate (POHR), set at the start of the year from estimates:

$$
\text{POHR} = \frac{\text{Estimated Total Manufacturing Overhead}}{\text{Estimated Total Allocation Base}}
$$

**Example:** Bear Co. estimates annual overhead of \$600,000 and expects to work 40,000 direct labor hours (DLH).

$$
\text{POHR} = \frac{\$600{,}000}{40{,}000 \text{ DLH}} = \$15 \text{ per DLH}
$$

If Job 301 uses 120 direct labor hours, applied overhead is \$15 × 120 = **\$1,800**.

```journal
Dr. Work-in-Process Inventory[a] 1,800
    Cr. Manufacturing Overhead 1,800
```

Actual overhead is debited to the same Manufacturing Overhead account as it is incurred. At year-end, a credit balance means overhead was **overapplied** and a debit balance means it was **underapplied**. An immaterial difference is closed to Cost of Goods Sold. A material one is prorated among Work in Process, Finished Goods, and Cost of Goods Sold.

### Process Costing

Process costing accumulates costs by **department or process** instead of by job. It fits continuous mass production of similar units, such as chemicals, beverages, and refined petroleum.

Because some units are only partly finished at the end of a period, costs are spread over **equivalent units of production (EUP)**: the number of whole units that the work done would have completed. Two methods differ in how they treat beginning work in process (WIP):

| Method | Beginning WIP Treatment | Best For |
|---|---|---|
| **Weighted average** | Blends beginning WIP costs with current-period costs | Simpler calculations; stable costs |
| **FIFO** | Keeps beginning WIP costs separate from current-period costs | More accurate current-period unit costs |

**Example: Polar Inc. (Equivalent Units)**

Polar Inc.'s Mixing Department reports the following for June:

| Item | Units | % Complete (Conversion) |
|---|---|---|
| Beginning WIP | 3,000 | 40% |
| Started during June | 18,000 | N/A |
| Completed and transferred out | 17,000 | 100% |
| Ending WIP | 4,000 | 25% |

Under **FIFO**, count only the work done in June. The beginning units needed the remaining 60%, then 14,000 units (17,000 - 3,000) were started and completed, and ending WIP is 25% done:

$$
\text{EUP}_{\text{FIFO}} = (3{,}000 \times 60\%) + 14{,}000 + (4{,}000 \times 25\%) = 1{,}800 + 14{,}000 + 1{,}000 = 16{,}800
$$

Under **weighted average**, count all units completed plus the work in ending WIP, regardless of when the work was done:

$$
\text{EUP}_{\text{WA}} = 17{,}000 + (4{,}000 \times 25\%) = 18{,}000
$$

The 1,200-unit difference is the work done on beginning WIP last period (3,000 × 40%), which weighted average counts and FIFO does not.

### Activity-Based Costing (ABC)

Traditional costing often spreads overhead using one broad base, such as labor hours. ABC refines this. It assigns overhead to **activities** (cost pools) and then to products using **cost drivers** that reflect how much of each activity a product actually consumes.

| Step | Action |
|---|---|
| 1 | Identify the major activities (for example, machine setups, quality inspections, material handling) |
| 2 | Assign overhead costs to each activity cost pool |
| 3 | Select a cost driver for each pool (for example, number of setups, inspection hours) |
| 4 | Compute an activity rate for each pool |
| 5 | Allocate costs to products based on their use of each driver |

**Example:** Grizzly Industries makes two products and has two activity pools:

| Activity Pool | Total Cost | Cost Driver | Total Driver Volume |
|---|---|---|---|
| Machine setups | \$180,000 | Number of setups | 600 |
| Quality inspections | \$90,000 | Inspection hours | 1,500 |

$$
\text{Setup Rate} = \frac{\$180{,}000}{600} = \$300 \text{ per setup}
$$

$$
\text{Inspection Rate} = \frac{\$90{,}000}{1{,}500} = \$60 \text{ per inspection hour}
$$

If Product A requires 200 setups and 900 inspection hours, its allocated overhead is (200 × \$300) + (900 × \$60) = \$60,000 + \$54,000 = **\$114,000**.

ABC usually shifts overhead from high-volume products to low-volume products. A small specialty batch needs as many setups as a large standard batch, so under a volume-based rate the high-volume product was carrying part of the specialty product's cost. Expect questions that compare ABC with a traditional allocation and ask you to explain the difference.

### Absorption Costing and Variable Costing

The two methods differ in one respect: the treatment of **fixed manufacturing overhead (FMOH)**.

| Feature | Absorption Costing | Variable Costing |
|---|---|---|
| Required by GAAP? | **Yes** | No (internal use only) |
| FMOH treatment | **Product cost** (inventoried) | **Period cost** (expensed immediately) |
| Income statement format | Traditional (COGS-based) | Contribution margin format |

Under absorption costing, part of each period's fixed overhead sits in ending inventory until the goods are sold. That timing difference explains every gap between the two incomes:

$$
\text{Absorption Income} - \text{Variable Income} = \text{Change in Inventory (units)} \times \text{Fixed MOH per unit}
$$

When production exceeds sales, inventory grows, fixed costs are deferred, and absorption income is **higher**. When sales exceed production, previously deferred fixed costs flow into COGS and absorption income is **lower**. When production equals sales, the two incomes are **the same**.

**Example: Kodiak Partners**

Kodiak Partners produces 10,000 units and sells 8,000. Fixed MOH totals \$200,000, or \$20 per unit.

$$
\text{Absorption Income} - \text{Variable Income} = (10{,}000 - 8{,}000) \times \$20 = \$40{,}000
$$

Absorption income is \$40,000 higher because \$40,000 of fixed overhead remains in ending inventory instead of being expensed.

---

## Standard Costing and Variance Analysis

A **standard cost** is a predetermined cost for one unit of output: how much of each input it should use, and what each input should cost. Comparing actual results with the standard produces **variances**, which point management to the cost drivers that need attention.

Each input cost splits into a price effect and a quantity effect. In every formula below, a positive result is **unfavorable** (actual exceeded standard) and a negative result is **favorable**.

### Direct Materials Variances

$$
\text{Materials Price Variance (MPV)} = \text{AQ Purchased} \times (\text{AP} - \text{SP})
$$

$$
\text{Materials Quantity Variance (MQV)} = (\text{AQ Used} - \text{SQ Allowed}) \times \text{SP}
$$

AQ is the actual quantity, AP the actual price, SP the standard price, and SQ the standard quantity allowed for the actual output. The price variance is usually computed on the quantity **purchased**, so it is recognized when materials are bought. The quantity variance uses the quantity **used**.

**Example: Panda Industries**

Panda Industries' standard is 3 lbs of material per unit at \$5 per lb. During the month it produced 2,000 units, purchased 6,500 lbs at \$5.20 per lb, and used 6,300 lbs.

- **MPV** = 6,500 × (\$5.20 - \$5.00) = **\$1,300 Unfavorable**
- **SQ Allowed** = 2,000 × 3 = 6,000 lbs
- **MQV** = (6,300 - 6,000) × \$5.00 = **\$1,500 Unfavorable**

### Direct Labor Variances

$$
\text{Labor Rate Variance (LRV)} = \text{AH} \times (\text{AR} - \text{SR})
$$

$$
\text{Labor Efficiency Variance (LEV)} = (\text{AH} - \text{SH Allowed}) \times \text{SR}
$$

AH is actual hours, AR the actual rate, SR the standard rate, and SH the standard hours allowed for the actual output.

**Example: Panda Industries (continued)**

The labor standard is 0.5 hours per unit at \$18 per hour. Panda used 1,050 hours at \$17.50 per hour to make the 2,000 units.

- **LRV** = 1,050 × (\$17.50 - \$18.00) = -\$525, or **\$525 Favorable**
- **SH Allowed** = 2,000 × 0.5 = 1,000 hours
- **LEV** = (1,050 - 1,000) × \$18.00 = **\$900 Unfavorable**

The two labor variances may be linked. Panda may have used less-experienced workers at a lower rate, who then took longer to do the work.

### Overhead Variances

Overhead is applied to production at standard: standard hours allowed times the overhead rate. The difference between actual overhead and applied overhead can be broken into three pieces (three-way analysis) or two (two-way analysis).

| Variance | Formula |
|---|---|
| **Spending** | Actual OH - (Budgeted Fixed OH + Variable OH Rate × Actual Hours) |
| **Efficiency** | (Actual Hours - Standard Hours Allowed) × Variable OH Rate |
| **Volume** | (Denominator Hours - Standard Hours Allowed) × Fixed OH Rate |

The two-way analysis combines spending and efficiency into a single **budget (controllable) variance** and keeps the same volume variance.

The **volume variance** relates only to fixed overhead. The fixed rate was set by dividing budgeted fixed overhead by a **denominator level** of activity. If the standard hours allowed for actual output fall short of that level, less fixed overhead is applied than was budgeted, and the volume variance is unfavorable. It reflects how fully capacity was used, not how well spending was controlled.

**Example: Kodiak Inc.**

Kodiak Inc. sets its overhead rates using a denominator of 5,000 machine-hours per month. Budgeted fixed overhead is \$50,000 and the variable overhead rate is \$6 per machine-hour. In March, Kodiak worked 4,800 actual hours, the standard hours allowed for its output were 4,600, and actual overhead was \$82,000.

- **Fixed OH Rate** = \$50,000 ÷ 5,000 = \$10 per hour
- **Spending** = \$82,000 - (\$50,000 + \$6 × 4,800) = \$82,000 - \$78,800 = **\$3,200 Unfavorable**
- **Efficiency** = (4,800 - 4,600) × \$6 = **\$1,200 Unfavorable**
- **Volume** = (5,000 - 4,600) × \$10 = **\$4,000 Unfavorable**

As a check, applied overhead is 4,600 × (\$6 + \$10) = \$73,600. Actual overhead of \$82,000 exceeds it by \$8,400, which equals the three variances added together (\$3,200 + \$1,200 + \$4,000). In a two-way analysis, the budget variance is \$4,400 unfavorable and the volume variance is \$4,000 unfavorable.

---

## Cost-Volume-Profit (CVP) Analysis

CVP analysis asks how operating income changes when volume, price, or costs change. It rests on the **contribution margin (CM)**: what remains of each sales dollar after variable costs, available first to cover fixed costs and then to provide profit.

$$
\text{CM per Unit} = \text{Selling Price} - \text{Variable Cost per Unit}
\qquad
\text{CM Ratio} = \frac{\text{CM per Unit}}{\text{Selling Price}}
$$

The **breakeven point** is the volume at which CM exactly covers fixed costs. Adding a target profit to the numerator gives the volume needed to earn it. The **margin of safety** measures how far sales could fall before the company reaches breakeven.

$$
\text{Breakeven (units)} = \frac{\text{Total Fixed Costs}}{\text{CM per Unit}}
\qquad
\text{Breakeven (dollars)} = \frac{\text{Total Fixed Costs}}{\text{CM Ratio}}
$$

$$
\text{Units for Target Profit} = \frac{\text{Fixed Costs} + \text{Target Profit}}{\text{CM per Unit}}
$$

$$
\text{Margin of Safety} = \text{Budgeted (or Actual) Sales} - \text{Breakeven Sales}
\qquad
\text{Margin of Safety \%} = \frac{\text{Margin of Safety}}{\text{Budgeted (or Actual) Sales}}
$$

### Worked Example: Polar Inc.

Polar Inc. sells its product for \$50 per unit. Variable cost is \$30 per unit, and total fixed costs are \$160,000.

- **CM per unit** = \$50 - \$30 = \$20, and the **CM ratio** = \$20 ÷ \$50 = 40%
- **Breakeven** = \$160,000 ÷ \$20 = **8,000 units**, or \$160,000 ÷ 0.40 = **\$400,000** of sales
- A **target profit** of \$60,000 requires (\$160,000 + \$60,000) ÷ \$20 = **11,000 units**
- If budgeted sales are 10,000 units (\$500,000), the **margin of safety** is \$500,000 - \$400,000 = **\$100,000**, or 20% of sales

These results hold only under CVP's assumptions: costs are linear and can be split cleanly into fixed and variable, the selling price does not change with volume, and for a company with several products, the sales mix stays constant. When a question changes one of those facts, the breakeven point changes too.

---

## Sales Analysis: Price, Volume, and Mix Variances

When actual results differ from the budget, management wants to know **why**. Sales variances split the difference into three drivers: the prices charged, the number of units sold, and the mix of products sold.

The **sales price variance** isolates the effect of charging a different price:

$$
\text{Sales Price Variance} = (\text{Actual Price} - \text{Budgeted Price}) \times \text{Actual Quantity Sold}
$$

The **sales volume variance** isolates the effect of selling a different number of units. It is usually measured in **budgeted contribution margin**, so that it shows the effect on profit:

$$
\text{Sales Volume Variance} = (\text{Actual Quantity} - \text{Budgeted Quantity}) \times \text{Budgeted CM per Unit}
$$

For a company with several products, the volume variance splits into two parts. The **sales mix variance** captures selling a different proportion of products than planned. The **sales quantity variance** captures selling more or fewer units in total at the budgeted mix.

$$
\text{Sales Mix Variance} = (\text{Actual Mix \%} - \text{Budgeted Mix \%}) \times \text{Total Actual Units} \times \text{Budgeted CM per Unit}
$$

$$
\text{Sales Quantity Variance} = (\text{Total Actual Units} - \text{Total Budgeted Units}) \times \text{Budgeted Mix \%} \times \text{Budgeted CM per Unit}
$$

In all of these, a positive result is favorable. Some questions measure the volume variance in revenue terms, multiplying by the budgeted price instead of the budgeted CM. Read the requirement to see which one is asked for.

### Worked Example: Bear Co. Multi-Product Sales

Bear Co. sells two products. Actual variable cost per unit equaled budget.

| Product | Budgeted Units | Budgeted Price | Budgeted CM/Unit | Actual Units | Actual Price |
|---|---|---|---|---|---|
| Alpha | 6,000 | \$40 | \$16 | 5,500 | \$42 |
| Beta | 4,000 | \$60 | \$30 | 5,500 | \$58 |
| **Total** | **10,000** | | | **11,000** | |

The budgeted mix was 60% Alpha and 40% Beta. The actual mix was 50% of each.

| Variance | Alpha | Beta | Total |
|---|---|---|---|
| **Price:** (AP - BP) × actual units | (\$42 - \$40) × 5,500 = \$11,000 F | (\$58 - \$60) × 5,500 = \$11,000 U | \$0 |
| **Mix:** (actual % - budget %) × 11,000 × budgeted CM | (50% - 60%) × 11,000 × \$16 = \$17,600 U | (50% - 40%) × 11,000 × \$30 = \$33,000 F | \$15,400 F |
| **Quantity:** (11,000 - 10,000) × budget % × budgeted CM | 1,000 × 60% × \$16 = \$9,600 F | 1,000 × 40% × \$30 = \$12,000 F | \$21,600 F |
| **Volume (mix + quantity):** (actual - budgeted units) × budgeted CM | (5,500 - 6,000) × \$16 = \$8,000 U | (5,500 - 4,000) × \$30 = \$45,000 F | \$37,000 F |

To check the result, budgeted CM was (6,000 × \$16) + (4,000 × \$30) = \$216,000. Actual CM was 5,500 × (\$42 - \$24) + 5,500 × (\$58 - \$30) = \$99,000 + \$154,000 = \$253,000, where \$24 and \$30 are the budgeted variable costs. The \$37,000 increase equals the price variance (\$0) plus the volume variance (\$37,000).

The story is now clear. The price changes canceled out. Bear Co. sold 1,000 more units than planned, worth \$21,600, and it shifted its sales toward Beta, the product with the higher margin, worth another \$15,400.

:::tip[Exam Tip]

A favorable mix variance means the mix shifted toward products with **higher contribution margins per unit**, not higher prices. That is why mix variances are computed with budgeted CM per unit.

:::

---

## Summary of Key Formulas

| Formula | Equation |
|---|---|
| High-low variable rate | (High cost - Low cost) ÷ (High activity - Low activity) |
| POHR | Estimated total MOH ÷ Estimated total allocation base |
| Absorption vs. variable income | Change in inventory units × Fixed MOH per unit |
| Materials price variance | AQ purchased × (AP - SP) |
| Materials quantity variance | (AQ used - SQ allowed) × SP |
| Labor rate variance | AH × (AR - SR) |
| Labor efficiency variance | (AH - SH allowed) × SR |
| Overhead spending variance | Actual OH - (Budgeted fixed OH + Variable OH rate × AH) |
| Overhead efficiency variance | (AH - SH allowed) × Variable OH rate |
| Overhead volume variance | (Denominator hours - SH allowed) × Fixed OH rate |
| Breakeven (units) | Fixed costs ÷ CM per unit |
| Breakeven (dollars) | Fixed costs ÷ CM ratio |
| Margin of safety | Budgeted (or actual) sales - Breakeven sales |
| Sales price variance | (Actual price - Budgeted price) × Actual quantity |
| Sales volume variance | (Actual quantity - Budgeted quantity) × Budgeted CM per unit |
| Sales mix variance | (Actual mix % - Budgeted mix %) × Total actual units × Budgeted CM per unit |
| Sales quantity variance | (Total actual units - Total budgeted units) × Budgeted mix % × Budgeted CM per unit |
