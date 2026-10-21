# Fund Balances and Components

A governmental fund's balance sheet ends with **fund balance**: the difference between its assets plus deferred outflows and its liabilities plus deferred inflows. A single number is not very useful to a reader, though. A General Fund balance of \$4 million might be free to spend on anything, or it might be tied up in inventory, promised to a grantor, or set aside by the council for a new fire station. **GASB 54** answers that question by splitting fund balance into five classifications, based on how strictly the government is bound to spend the resources for particular purposes.

The BAR blueprint asks you to calculate each of the five classifications (nonspendable, restricted, committed, assigned, and unassigned) and to prepare the related journal entries. This chapter defines each classification, explains the spending order and how each fund type uses the classifications, and then classifies a full General Fund balance.

---

## The Five Classifications

The classifications run from the most constrained to the least constrained.

| Classification | Source of the constraint | Examples |
|---|---|---|
| **Nonspendable** | The form of the resource, or a requirement to keep it intact | Inventory, prepaid items, long-term loans receivable, permanent fund principal |
| **Restricted** | External parties (creditors, grantors, contributors, other governments' laws) or the government's own constitution or enabling legislation | Unspent grant money, a debt service reserve required by bond covenants, a dedicated tax required by state law |
| **Committed** | Formal action of the government's **highest level of decision-making authority** | An ordinance setting aside money for a new fire station |
| **Assigned** | The government's **intent**, expressed by the governing body or an official it has authorized | Amounts the finance director earmarks for technology upgrades |
| **Unassigned** | No constraint; the residual | The remaining General Fund balance |

The first classification is about form; the other four, together called **spendable** fund balance, are about the strength of the constraint.

---

## The Classifications in Detail

### Nonspendable

Nonspendable fund balance includes amounts that are **not in spendable form**, such as inventory and prepaid items, and amounts that are **legally or contractually required to be maintained intact**, such as the principal of a permanent fund. Long-term receivables and property acquired for resale are also nonspendable, unless the proceeds when collected or sold are already restricted, committed, or assigned. In that case, they go in that classification instead.

Nonspendable does not mean "never spent." It means not spendable now. When inventory is used or a prepaid item expires, the constraint goes away.

### Restricted

Restricted fund balance carries constraints that the government cannot remove on its own. They come from **outside parties** (creditors through debt covenants, grantors, contributors, or the laws of other governments) or from **constitutional provisions or enabling legislation**. Enabling legislation is a law the government itself passes that both authorizes a revenue (such as a tax) and legally requires it to be used for a specific purpose that outsiders can enforce.

### Committed

Committed fund balance is constrained by **formal action** (an ordinance or resolution) of the government's highest level of decision-making authority, typically the city council or county board. Only the same body, through the same type of action, can remove or change the commitment. The action must be taken **before year-end**, although the exact amount may be determined after year-end.

### Assigned

Assigned fund balance reflects the government's **intent** to use resources for a specific purpose, where the intent falls short of a restriction or commitment. The intent can be expressed by the governing body itself or by a body or official it has delegated authority to, such as a finance committee or the finance director. No formal ordinance is needed. Two common sources of assigned fund balance:

- **Fund balance appropriated in next year's budget.** If the next year's budget uses part of the existing fund balance to cover a projected deficit, that amount (up to the projected excess of expenditures over revenues) is assigned. An assignment can never push unassigned fund balance below zero.
- **Outstanding encumbrances.** Encumbered amounts are reported within whichever classification already applies to the resources; for ordinary General Fund money, that is usually assigned (see [Budgetary Accounting and Encumbrances](budgetary-accounting-and-encumbrances.md)). GASB 54 does not allow a separate "encumbrances" classification.

In governmental funds other than the General Fund, assigned also serves as the residual: whatever is not nonspendable, restricted, or committed is assigned to the purpose of that fund.

### Unassigned

Unassigned fund balance is the residual classification for the **General Fund**: everything not placed in another classification.

:::warning[Critical Rule]

Only the **General Fund** reports a **positive** unassigned fund balance. Another governmental fund can report unassigned fund balance only as a **negative** amount, which arises when its expenditures for a purpose exceed the resources restricted, committed, and assigned to that purpose.

:::

---

## Spending Order

When an expenditure qualifies for more than one classification, which resources are used first? GASB 54 sets a default: **restricted** amounts are spent first, then, among unrestricted amounts, **committed**, then **assigned**, then **unassigned**. The most constrained money goes first.

A government may adopt a different policy, for example spending unassigned before assigned. If an exam question states a policy, follow it; if it does not, use the default. Either way, the policy is disclosed in the notes.

---

## Fund Balance by Fund Type

| Fund type | Classifications typically used |
|---|---|
| **General Fund** | All five; the only fund with positive unassigned |
| **Special revenue fund** | Restricted or committed (its main revenue source must be restricted or committed); assigned for any other resources |
| **Capital projects fund** | Restricted, committed, or assigned |
| **Debt service fund** | Restricted, committed, or assigned |
| **Permanent fund** | Nonspendable (the principal) and restricted (the spendable earnings) |

---

## Stabilization Arrangements

Many governments keep a "rainy day" amount for emergencies or revenue shortfalls. GASB 54 classifies it by the source of the constraint, but it sets a high bar for anything other than unassigned.

| Circumstance | Classification |
|---|---|
| Required by enabling legislation, a constitution, or an outside party | **Restricted** |
| Set by formal action of the highest decision-making authority, with specific circumstances for its use that are not expected to occur routinely | **Committed** |
| Does not meet the criteria for restricted or committed | **Unassigned** (in the General Fund) |

The last row is the one candidates miss. A stabilization amount that is only informally earmarked, or whose conditions for use are routine, is **not** assigned. It stays in unassigned fund balance.

---

## Journal Entries for Reclassifications

Reclassifying fund balance moves amounts between classifications. It never involves revenues or expenditures, and it never changes total fund balance.

The council passes an ordinance committing \$500,000 for a park renovation:

```journal
Dr. Fund Balance (Unassigned)[e] 500,000
Cr. Fund Balance (Committed)[e] 500,000
```

The finance director, under authority delegated by the council, earmarks \$200,000 for technology upgrades:

```journal
Dr. Fund Balance (Unassigned)[e] 200,000
Cr. Fund Balance (Assigned)[e] 200,000
```

The council later rescinds the park commitment by ordinance:

```journal
Dr. Fund Balance (Committed)[e] 500,000
Cr. Fund Balance (Unassigned)[e] 500,000
```

At year-end, the General Fund has \$75,000 of supplies inventory under the consumption method:

```journal
Dr. Fund Balance (Unassigned)[e] 75,000
Cr. Fund Balance (Nonspendable)[e] 75,000
```

---

## Comprehensive Example

**Panda Township General Fund, June 30, 20X5.** Total fund balance is \$4,200,000. The township has the following items:

| Item | Amount | Source of constraint |
|---|---|---|
| Inventory of supplies | \$90,000 | Not in spendable form |
| Prepaid insurance | 35,000 | Not in spendable form |
| Unspent state grant for road maintenance | 600,000 | State law |
| Unspent federal grant for homeless services | 280,000 | Federal grantor |
| Ordinance setting aside money for a new fire station | 1,000,000 | Formal action of the township board |
| Finance director's earmark for IT systems | 350,000 | Official authorized by the board |
| Rainy day amount set by informal board policy, with no specific conditions for use | 400,000 | No qualifying constraint |

**Classification:**

| Classification | Components | Amount |
|---|---|---|
| **Nonspendable** | Inventory \$90,000 + prepaid insurance \$35,000 | **\$125,000** |
| **Restricted** | State road grant \$600,000 + federal grant \$280,000 | **\$880,000** |
| **Committed** | Fire station ordinance | **\$1,000,000** |
| **Assigned** | IT earmark | **\$350,000** |
| **Unassigned** | \$4,200,000 - \$125,000 - \$880,000 - \$1,000,000 - \$350,000 (includes the \$400,000 rainy day amount) | **\$1,845,000** |
| **Total fund balance** | | **\$4,200,000** |

The rainy day amount does not meet the GASB 54 criteria for restricted or committed, so it remains part of unassigned fund balance.

A good method for any fund balance question: start with the total, pull out the nonspendable amounts first, classify the spendable amounts by the source and strength of each constraint, and let unassigned be the residual.

---

## Fund Balance vs. Net Position

Fund balance (governmental funds) and net position (government-wide) are different measures.

| | Fund balance | Net position |
|---|---|---|
| **Measurement focus and basis** | Current financial resources, modified accrual | Economic resources, accrual |
| **Includes capital assets and long-term liabilities?** | No | Yes |
| **Components** | Nonspendable, restricted, committed, assigned, unassigned | Net investment in capital assets, restricted, unrestricted |

Committed and assigned fund balance have no counterpart in net position. Constraints imposed by the government's own governing body are not restrictions, so in the government-wide statements those amounts are part of **unrestricted** net position. See [Net Position and Components](net-position-and-components.md). The required reconciliation from total governmental fund balances to governmental activities net position is covered in [Deriving Government-Wide Financial Statements](deriving-government-wide-financial-statements.md).
