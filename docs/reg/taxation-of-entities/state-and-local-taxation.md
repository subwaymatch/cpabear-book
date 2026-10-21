# State and Local Taxation

A business that operates in more than one state faces two questions before it can compute any state's income tax. First, does the state have the power to tax it at all? That is the question of **nexus**. Second, if it does, how much of the business's income belongs to that state? That is the job of **allocation** and **apportionment**.

The REG blueprint tests both: the concepts and rationale of nexus, allocation, and apportionment, and a computation of state taxable income using apportionment factors. This chapter follows that order and ends with combined reporting for groups of related companies. The references the blueprint names for this topic are Public Law 86-272 and the Uniform Division of Income for Tax Purposes Act (UDITPA).

---

## Nexus

**Nexus** is the minimum connection between a taxpayer and a state that allows the state to impose its tax. Without nexus, a state cannot require a business to file a return or pay income tax. The rationale is fairness: a business that benefits from a state's markets, roads, courts, and workforce should help pay for them, and a business with no real connection to the state should not.

Activities that commonly create income tax nexus include:

- Maintaining an office, warehouse, store, or other place of business in the state
- Having employees in the state, including remote employees
- Owning or leasing real or tangible personal property in the state
- Soliciting sales in the state in ways that go beyond the protection of P.L. 86-272
- Exceeding a state's **economic nexus** threshold, such as a stated level of sales into the state (for example, \$500,000), even with no physical presence

:::info[Public Law 86-272]

P.L. 86-272 is a federal statute that limits a state's power to impose a **net income tax**. If a company's only activity in a state is **soliciting orders for tangible personal property**, and the orders are approved and filled from outside the state, the state cannot impose its income tax on that company. The protection does **not** cover sales of services, intangibles, or real property, and it does not limit sales taxes or taxes measured by gross receipts.

:::

> **Example:** Bear Co. is based in Illinois and sends sales representatives into Indiana to solicit orders for the widgets it manufactures. Every order is approved in Illinois and shipped from Illinois. Under P.L. 86-272, Indiana cannot impose its income tax on Bear Co. If Bear Co. also began performing consulting services for Indiana customers, the protection would not cover that activity, and Indiana could tax Bear Co.

---

## Allocation vs. Apportionment

Once a state has nexus, the next step is deciding how much income it may tax. The answer depends on whether the income is **business income** or **nonbusiness income**, as UDITPA defines them.

| Income Type | Method | Result |
|---|---|---|
| **Business income** | Apportionment | Divided among the states by a **formula** |
| **Nonbusiness income** | Allocation | Assigned **entirely** to one state |

**Business income** arises from transactions in the regular course of the taxpayer's trade or business, including income from property that is an integral part of the business. Because it is earned through activity in many states, it is divided among them.

**Nonbusiness income** is everything else. UDITPA assigns it to a single state:

- Rents and royalties from real property, and gains on its sale, go to the **state where the property is located**.
- Interest and dividends that are nonbusiness income go to the state of **commercial domicile**, the principal place from which the business is directed or managed.

> **Example:** Kodiak Inc. is commercially domiciled in Illinois. It owns a Florida rental building, unrelated to its business, that produces \$80,000 of rent, and it earns \$25,000 of interest on investments that are not part of its business. The \$80,000 is **allocated entirely to Florida**, where the property sits, and the \$25,000 is **allocated to Illinois**, its commercial domicile. Neither amount is apportioned.

---

## Apportionment

### The traditional three-factor formula

UDITPA's formula averages three factors, each a ratio of in-state activity to activity everywhere:

$$
\text{Apportionment \%} = \frac{1}{3}\left(\frac{\text{In-state property}}{\text{Total property}} + \frac{\text{In-state payroll}}{\text{Total payroll}} + \frac{\text{In-state sales}}{\text{Total sales}}\right)
$$

| Factor | Numerator | Denominator |
|--------|-----------|-------------|
| **Property** | Average value of real and tangible personal property used in the state (owned property at original cost; rented property at 8 times annual rent) | Same, everywhere |
| **Payroll** | Compensation paid to employees working in the state | Total compensation everywhere |
| **Sales** | Sales attributed to the state; for tangible goods, sales delivered to customers in the state | Total sales everywhere |

The state then taxes its share of apportionable business income:

$$
\text{State business income} = \text{Apportionment \%} \times \text{Total business income}
$$

### Weighted and single sales factor formulas

Most states have moved away from equal weighting. Some **double-weight the sales factor** (counting it twice and dividing by four), and many now use a **single sales factor**, which apportions income using only the sales ratio. A sales-heavy formula shifts tax toward the states where a company's customers are and away from the states where its factories and employees are, which is why states use it to attract in-state investment.

### Comprehensive example

Polar Co. operates in several states and has \$2,000,000 of apportionable business income. It also has \$100,000 of nonbusiness interest income, allocable to its commercial domicile, which is State A. Its factors for State A are:

| Factor | State A | Everywhere | Ratio |
|--------|----------|-------------------|-------|
| Property | \$3,000,000 | \$10,000,000 | 30% |
| Payroll | \$1,500,000 | \$5,000,000 | 30% |
| Sales | \$4,000,000 | \$8,000,000 | 50% |

Under each formula, State A's share of business income is:

| Formula | Apportionment % | Business Income Apportioned to State A |
|---|---|---|
| Equally weighted three factors | (30% + 30% + 50%) ÷ 3 = 36.67% | \$2,000,000 × 110% ÷ 3 = \$733,333 |
| Double-weighted sales | (30% + 30% + 50% + 50%) ÷ 4 = 40% | \$800,000 |
| Single sales factor | 50% | \$1,000,000 |

If State A uses the equally weighted formula, Polar Co.'s State A taxable income is the \$733,333 of apportioned business income **plus** the \$100,000 of nonbusiness interest allocated to State A, or **\$833,333**, before any state-specific deductions or credits.

### Computing state taxable income

On the exam, the steps are usually:

1. Start with **federal taxable income**.
2. Make the state's **modifications**. Common ones add back state income taxes deducted federally and interest on other states' bonds, and subtract interest on U.S. obligations.
3. **Remove nonbusiness income** to leave apportionable business income.
4. **Apportion** the business income using the state's formula.
5. **Add** nonbusiness income allocated to the state.

---

## Combined Reporting

Some states require **combined reporting** for a group of related corporations engaged in a **unitary business**, meaning their operations are integrated, interdependent, or contribute to one another. Combined reporting keeps a group from moving income into an affiliate located in a low-tax or no-tax state.

1. **Identify the unitary group:** the commonly owned entities that operate as a unitary business.
2. **Combine their income**, eliminating intercompany transactions.
3. **Apportion the combined income** to the state, using factors that include every group member.
4. **Each member with nexus reports** its share of the apportioned income.

Other states use **separate entity reporting**, in which each corporation files on its own. The method chosen can change a group's total state tax considerably.

> **Example:** Panda Industries owns two subsidiaries: Panda Manufacturing, in California, and Panda Sales, in Nevada, which has no corporate income tax. All of Panda Manufacturing's products are sold through Panda Sales. California requires combined reporting for unitary businesses, and the two subsidiaries form one. California therefore **combines** their income before apportioning it, so the group cannot shelter profit in Nevada by routing every sale through the Nevada subsidiary.

---

## Pass-Through Entity Taxes

Most states tax partnerships and S corporations through their owners, just as the federal system does. Because individuals' federal deduction for state and local taxes is capped, many states also let a partnership or S corporation elect to pay the state income tax at the **entity level**. The entity deducts that tax in computing its federal ordinary income, so it is not limited by the owners' cap (see [Adjustments and Deductions](../taxation-of-individuals/adjustments-and-deductions.md)).

---

## Summary

| Concept | Key Rule |
|---------|----------|
| **Nexus** | The minimum connection required before a state can impose its tax |
| **P.L. 86-272** | Bars a state net income tax when the only in-state activity is soliciting orders for tangible personal property approved and filled from outside the state |
| **Allocation** | Nonbusiness income goes to one state: real property income to its location; nonbusiness interest and dividends to commercial domicile |
| **Apportionment** | Business income is divided by formula (property, payroll, and sales, often weighted toward sales) |
| **Single sales factor** | Apportions by the sales ratio alone, favoring companies with in-state property and payroll but out-of-state customers |
| **State taxable income** | Federal taxable income, plus or minus state modifications, with business income apportioned and nonbusiness income allocated |
| **Combined reporting** | A unitary group combines its income before apportioning it, which prevents income shifting |

:::note[CPA Exam Focus]

Expect to classify income as business (apportioned) or nonbusiness (allocated), decide whether an activity creates nexus or is protected by P.L. 86-272, and compute an apportionment percentage and the resulting state taxable income.

:::
