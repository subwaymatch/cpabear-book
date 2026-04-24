# State and Local Taxation

## State Income Tax Considerations

### Nexus

**Nexus** is the minimum level of contact or connection between a taxpayer and a state that is sufficient for the state to impose its tax. Without nexus, a state cannot constitutionally require a business to file returns or pay income tax.

**Common activities that create nexus:**

- Maintaining a physical office, warehouse, or retail location in the state
- Employing workers (including remote employees) in the state
- Owning or leasing real or tangible personal property in the state
- Regularly soliciting sales in the state beyond the protection of **Public Law 86-272**
- Exceeding economic nexus thresholds (e.g., \$500,000 in sales into the state)

:::info[Public Law 86-272]

Federal law (P.L. 86-272) provides limited protection for sellers of **tangible personal property**. If a company's only activity in a state is the solicitation of orders for tangible personal property, and orders are sent outside the state for approval and fulfillment, the state **cannot** impose a net income tax on the company. This protection does **not** apply to sellers of services, intangibles, or digital goods.

:::

#### Example

Bear Co. is headquartered in Illinois and sends sales representatives into Indiana to solicit orders for its manufactured widgets (tangible personal property). All orders are approved and shipped from Illinois. Under P.L. 86-272, Indiana **cannot** impose its income tax on Bear Co. However, if Bear Co. also provides consulting services to Indiana customers, the protection would not apply to that activity, and Indiana could assert nexus.

---

### Determining Taxable Income in Each State

Once nexus is established, the next question is: **how much** of the taxpayer's income is subject to tax in that state? States use two methods — **allocation** and **apportionment** — to divide a multistate business's income among the states where it operates.

---

## Allocation vs. Apportionment

The distinction between allocation and apportionment depends on whether the income is classified as **business income** or **nonbusiness income**.

| Income Type | Method | Description |
|---|---|---|
| **Nonbusiness income** | Allocation | Assigned **entirely** to one specific state |
| **Business income** | Apportionment | Divided among states using a **formula** |

### Allocation of Nonbusiness Income

**Nonbusiness income** is income that is not earned in the regular course of the taxpayer's trade or business. It is typically allocated (assigned in full) to the state of the taxpayer's **commercial domicile** — the principal place from which the business is directed or managed.

**Common examples of nonbusiness income:**

- Rental income from real property → allocated to the **state where the property is located**
- Gains on sales of real property → allocated to the **state where the property is located**
- Interest and dividend income → generally allocated to the state of **commercial domicile**

#### Example

Kodiak Inc. is commercially domiciled in Illinois. It owns a rental property in Florida that generates \$80,000 of rental income. That \$80,000 is **allocated entirely to Florida** — it is not divided among states. Kodiak Inc. also earns \$25,000 of interest income from corporate bonds. The interest income is **allocated to Illinois** (commercial domicile) as nonbusiness income.

---

### Apportionment of Business Income

**Business income** is income arising from transactions in the regular course of the taxpayer's trade or business. Because business income is earned across multiple states, it must be divided using an **apportionment formula**.

---

## Apportionment Factor

The most common apportionment formula is based on three factors: **property**, **payroll**, and **sales**. The traditional approach uses an equally weighted three-factor formula, though many states now use a **single sales factor** or a **double-weighted sales factor**.

### Traditional Three-Factor Formula

$$
\text{Apportionment \%} = \frac{1}{3}\left(\frac{\text{In-State Property}}{\text{Total Property}} + \frac{\text{In-State Payroll}}{\text{Total Payroll}} + \frac{\text{In-State Sales}}{\text{Total Sales}}\right)
$$

| Factor | Numerator | Denominator |
|--------|-----------|-------------|
| **Property** | Average value of real and tangible personal property in the state | Average value of all real and tangible personal property everywhere |
| **Payroll** | Compensation paid to employees in the state | Total compensation paid everywhere |
| **Sales** | Sales to customers in the state (destination basis) | Total sales everywhere |

The resulting percentage is applied to the taxpayer's **apportionable business income** to determine the amount taxable in that state:

$$
\text{State Taxable Business Income} = \text{Apportionment \%} \times \text{Total Business Income}
$$

### Single Sales Factor

A growing number of states use a **single sales factor** formula, which apportions income based solely on the ratio of in-state sales to total sales:

$$
\text{Apportionment \%} = \frac{\text{In-State Sales}}{\text{Total Sales}}
$$

:::tip

The single sales factor benefits companies that have significant property and employees in a state but make most of their sales to customers in other states. It reduces the income apportioned to the home state.

:::

### Comprehensive Example

Polar Co. operates in three states: Illinois, Indiana, and Ohio. Total business income is \$2,000,000. Illinois uses the traditional equally weighted three-factor formula.

| Factor | Illinois | Total Everywhere | Ratio |
|--------|----------|-------------------|-------|
| Property | \$3,000,000 | \$10,000,000 | 30% |
| Payroll | \$1,500,000 | \$5,000,000 | 30% |
| Sales | \$4,000,000 | \$8,000,000 | 50% |

$$
\text{Illinois Apportionment \%} = \frac{30\% + 30\% + 50\%}{3} = \frac{110\%}{3} = 36.67\%
$$

$$
\text{Income Apportioned to Illinois} = \$2{,}000{,}000 \times 36.67\% = \$733{,}400
$$

Polar Co. would then add any nonbusiness income allocated to Illinois and subtract any applicable state deductions to compute Illinois taxable income.

---

## Combined Reporting

Some states require (or permit) **combined reporting** — a method that aggregates the income of related entities into a single tax return for apportionment purposes. The goal is to prevent companies from shifting income among related entities to avoid state taxation.

### How Combined Reporting Works

1. **Identify the unitary group** — A group of commonly owned entities engaged in a **unitary business** (i.e., their operations are integrated, interdependent, or contribute to each other).
2. **Combine income** — The income of all members of the unitary group is combined (intercompany transactions are typically eliminated).
3. **Apportion the combined income** — The combined income is apportioned to each state using the apportionment formula, with all group members' factors included.
4. **Each entity reports its share** — Each member files in the states where it has nexus, reporting its share of the combined apportioned income.

:::caution

Not all states require combined reporting. Some states use **separate entity** reporting, where each legal entity files its own return. The choice of method can significantly affect the total state tax liability of a corporate group. CPA exam questions may test whether a taxpayer must include a related entity's income in a combined report.

:::

#### Example

Panda Industries owns two subsidiaries: Panda Manufacturing (located in California) and Panda Sales (located in Nevada, which has no state income tax). All of Panda Manufacturing's products are sold through Panda Sales. California requires combined reporting for unitary businesses. Because the two subsidiaries are part of a unitary business, California requires Panda Industries to **combine** the income of both entities. This prevents the group from sheltering income in Nevada by routing all sales through the Nevada subsidiary.

---

## Summary

| Concept | Key Rule |
|---------|----------|
| **Nexus** | Minimum contact required before a state can impose tax |
| **P.L. 86-272** | Protects sellers of tangible personal property whose only in-state activity is solicitation |
| **Allocation** | Nonbusiness income assigned to a **single state** (situs or commercial domicile) |
| **Apportionment** | Business income divided among states by **formula** (property, payroll, sales) |
| **Single sales factor** | Apportions based solely on sales ratio — benefits companies with home-state property/payroll |
| **Combined reporting** | Aggregates related entity income to prevent income shifting |

:::note[CPA Exam Focus]

The REG exam tests your ability to distinguish between **business income** (apportioned) and **nonbusiness income** (allocated), apply the apportionment formula, and understand when nexus exists. Be prepared to calculate apportionment percentages and determine the income taxable in a given state.

:::
