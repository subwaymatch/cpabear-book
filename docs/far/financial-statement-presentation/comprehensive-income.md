# Statement of Comprehensive Income

Net income does not capture every change in a company's equity from nonowner sources. A few kinds of gains and losses, mostly unrealized changes in the value of certain assets and liabilities, are kept out of net income so that it is not whipsawed by remeasurements that may reverse before they are ever realized. Those items are **other comprehensive income (OCI)**, and **comprehensive income** is the total of the two:

$$
\text{Comprehensive income} = \text{Net income} + \text{Other comprehensive income (OCI)}
$$

The FAR blueprint asks you to know the purpose and structure of the statement of comprehensive income and to identify which items belong in OCI. This chapter covers the OCI items, how they accumulate in equity, the two presentation formats, and the reclassification adjustments that move items into net income when they are realized.

---

## What Goes in OCI

OCI includes gains and losses that U.S. generally accepted accounting principles (GAAP) recognize in equity but **exclude from net income**. Most are unrealized, so they are held in equity until they are realized or reclassified. The list is short and specific: if an item is not on it, it goes through net income.

:::tip[Remember PUFI]

| Letter | Component |
|--------|-----------|
| **P** | **P**ension and other postretirement benefit adjustments (prior service cost and net actuarial gains and losses not yet recognized in expense) |
| **U** | **U**nrealized gains and losses on available-for-sale (AFS) debt securities, plus gains and losses on cash flow hedges |
| **F** | **F**oreign currency translation adjustments |
| **I** | **I**nstrument-specific credit risk (the part of the change in fair value of a liability measured under the fair value option that is caused by the entity's own credit risk) |

:::

**Pension adjustments.** When an employer sponsors a defined benefit plan, two kinds of change are recognized first in OCI rather than in pension expense: **prior service cost**, from plan amendments that grant credit for past service, and **net actuarial gains and losses**, from changes in assumptions and from differences between actual and expected returns on plan assets. Both are later amortized from accumulated OCI into pension expense.

**AFS debt securities and cash flow hedges.** AFS debt securities are reported at fair value, and their unrealized gains and losses go to OCI. The exception is credit losses, which go to net income through an allowance (see the investments chapter). For a **cash flow hedge**, the change in the hedging instrument's fair value that is included in the assessment of hedge effectiveness is recorded in OCI and reclassified to earnings when the hedged transaction affects earnings. Since ASU 2017-12, the older idea of separating an "effective portion" no longer applies.

**Foreign currency translation adjustments.** When a foreign subsidiary's statements are **translated** from its functional currency into the parent's reporting currency, the resulting translation adjustment goes to OCI. Do not confuse translation with **remeasurement**, which is used when the subsidiary's functional currency is the parent's currency, or with foreign currency **transaction** gains and losses on receivables and payables. Both of those go to net income.

**Instrument-specific credit risk.** When an entity elects the **fair value option** for a financial liability, the part of the change in fair value caused by a change in its own credit risk is reported in OCI rather than net income (ASC 825).

Just as important is what is **not** in OCI. Equity securities with readily determinable fair values are measured at fair value through **net income** under ASC 321, so their fair value changes never touch OCI. Unrealized gains and losses on trading debt securities also go to net income.

### Recording an OCI Item

Bear Co. holds AFS debt securities with an amortized cost of \$200,000 and a year-end fair value of \$215,000. The \$15,000 increase is an unrealized gain recorded in OCI:

```journal
Dr. Fair value adjustment (AFS)[a]           15,000
    Cr. OCI (unrealized gain on AFS securities)   15,000
```

OCI items have tax effects, just like items in net income. At a 25% rate, Bear also records deferred tax of \$3,750 (\$15,000 × 25%) against OCI, so the gain adds \$11,250 to equity net of tax:

```journal
Dr. OCI (tax effect)               3,750
    Cr. Deferred tax liability[l]      3,750
```

---

## Accumulated Other Comprehensive Income

Each period's OCI flows into **accumulated other comprehensive income (AOCI)**, a separate component of stockholders' equity, in the same way that net income flows into retained earnings. AOCI decreases when items are reclassified into net income. Companies track AOCI by component, and the notes show a rollforward like this one for Polar Co.:

| Component | Beginning AOCI | Current OCI | Reclassification | Ending AOCI |
|---|---:|---:|---:|---:|
| AFS unrealized gains | \$12,000 | \$8,000 | (\$3,000) | \$17,000 |
| Pension adjustments | (25,000) | (10,000) | 5,000 | (30,000) |
| Translation adjustments | 18,000 | (6,000) | 0 | 12,000 |
| **Total AOCI** | **\$5,000** | **(\$8,000)** | **\$2,000** | **(\$1,000)** |

---

## Presenting Comprehensive Income

GAAP allows two formats. Under either one, OCI must appear in a **statement of comprehensive income**; it may not be presented only in the statement of changes in stockholders' equity. (An entity with no OCI items does not need to report comprehensive income, and not-for-profit entities are not required to report it.)

**A single continuous statement** shows net income and OCI together:

| Cub Entertainment | Year Ended Dec. 31 |
|---|---:|
| Revenues | \$900,000 |
| Expenses | (650,000) |
| **Net income** | **\$250,000** |
| **Other comprehensive income:** | |
| &emsp;Unrealized gain on AFS debt securities (net of \$6,000 tax) | 18,000 |
| &emsp;Foreign currency translation loss (net of \$3,000 tax benefit) | (9,000) |
| &emsp;Pension adjustment (net of \$2,000 tax benefit) | (6,000) |
| **Total other comprehensive income** | **3,000** |
| **Comprehensive income** | **\$253,000** |

**Two separate but consecutive statements** consist of a traditional income statement that ends with net income, followed immediately by a statement of comprehensive income that begins with net income and adds the OCI items. For Cub, the second statement would start at net income of \$250,000 and end at the same \$253,000.

Either way, each OCI component can be shown **net of tax**, as above, or **before tax**, with a single line for the aggregate tax effect. The tax effect of each component must be shown on the face of the statement or disclosed in the notes. Cub's OCI presented before tax looks like this:

| Item | Amount |
|---|---:|
| Unrealized gain on AFS debt securities | \$24,000 |
| Foreign currency translation loss | (12,000) |
| Pension adjustment | (8,000) |
| Total OCI before tax | 4,000 |
| Income tax effect | (1,000) |
| **Total OCI, net of tax** | **\$3,000** |

When a company has a noncontrolling interest, comprehensive income is also split between the amount attributable to the parent and the amount attributable to the noncontrolling interest.

---

## Reclassification Adjustments

When an OCI item is **realized**, for example when AFS securities are sold, the gain or loss is recognized in net income. Because the same gain was already included in OCI when it arose, a **reclassification adjustment** removes it from OCI in the same period. Without it, the gain would be counted twice in comprehensive income.

Kodiak Partners holds AFS debt securities with an amortized cost of \$100,000. It previously recorded a \$10,000 unrealized gain in OCI, so the securities are carried at \$110,000. In the current year, it sells them for \$110,000. The sale produces a realized gain of \$10,000 in net income:

```journal
Dr. Cash[a]                               110,000
    Cr. AFS debt securities[a]                100,000
    Cr. Realized gain on sale of securities    10,000
```

The reclassification adjustment removes the gain from OCI and eliminates the fair value adjustment:

```journal
Dr. OCI (reclassification adjustment)     10,000
    Cr. Fair value adjustment (AFS)[a]        10,000
```

For the year, net income includes the \$10,000 gain and OCI includes a \$10,000 reduction, so comprehensive income is unaffected by the sale: the gain was already in comprehensive income in the year the value rose. AOCI for these securities returns to zero. Companies disclose the amounts reclassified out of AOCI, by component and by the income statement line affected, either on the face of the statement or in the notes.

| Feature                      | Net Income | Comprehensive Income                 |
| ---------------------------- | ---------- | ------------------------------------ |
| Includes operating results   | Yes        | Yes                                  |
| Includes OCI items           | No         | Yes                                  |
| Closed to                    | Retained earnings | Net income portion to retained earnings; OCI portion to AOCI |
| Realized OCI items           | Included when realized | Reclassified out of OCI, so not counted twice |

:::warning[Common exam traps]

Fair value changes on **equity securities** go to net income, not OCI. Foreign currency **transaction** gains and losses go to net income; only **translation** adjustments go to OCI. And presenting OCI only in the statement of changes in equity is not allowed.

:::

---

## Practice Problem

Grizzly Inc. reports the following for the year ended December 31:

- Net income: \$400,000
- Unrealized loss on AFS debt securities (pretax): \$20,000
- Foreign currency translation gain: \$35,000 (no tax effect, because the subsidiary's earnings are indefinitely reinvested)
- Prior service cost from a pension plan amendment (pretax): \$50,000
- Tax rate: 25%

**Required:** Calculate comprehensive income.

<details>
<summary>Solution</summary>

| Item | Pretax | Tax Effect | Net of Tax |
|---|---:|---:|---:|
| Net income | | | \$400,000 |
| Unrealized loss on AFS | (\$20,000) | \$5,000 | (\$15,000) |
| Translation gain | \$35,000 | None | \$35,000 |
| Prior service cost | (\$50,000) | \$12,500 | (\$37,500) |
| **Comprehensive income** | | | **\$382,500** |

Other comprehensive income is a net loss of \$17,500, so comprehensive income is lower than net income.

</details>
