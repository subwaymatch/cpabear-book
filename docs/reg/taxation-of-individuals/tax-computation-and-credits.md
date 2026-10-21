# Tax Computation and Credits

Once taxable income is known, two steps remain: compute the tax, then subtract credits. The tax comes from the rate schedule, with lower rates for long-term capital gains and qualified dividends, and with the alternative minimum tax as a backstop. Credits then reduce the tax dollar for dollar, and some of them can produce a refund even when no tax is owed.

This chapter covers the rate structure, the AMT, and the individual credits the exam tests most. It reflects the One Big Beautiful Bill Act (OBBBA, P.L. 119-21), whose provisions with 2024 or 2025 effective dates have been eligible for REG testing since July 1, 2026. Two related topics live elsewhere: the QBI deduction is in [Adjustments and Deductions](./adjustments-and-deductions.md), and the other taxes on Form 1040 (self-employment tax, the additional Medicare tax, the net investment income tax, the kiddie tax) and the estimated tax safe harbors are in [Other Individual Taxes](./other-individual-taxes.md).

---

## Regular Tax

### Ordinary Income Rates

Ordinary income is taxed under a progressive schedule of seven rates: **10%, 12%, 22%, 24%, 32%, 35%, and 37%**. OBBBA made these rates permanent. The bracket thresholds differ by filing status and are indexed every year, so an exam question supplies the schedule; what you need is the mechanics.

Each rate applies only to the income that falls within its bracket. The **marginal rate** is the rate on the next dollar of income. The **average (effective) rate** is total tax divided by taxable income.

> **Example:** For 2026, a single taxpayer's 10% bracket runs to \$12,400 and the 12% bracket to \$50,400. A single taxpayer with \$45,000 of taxable income owes:
>
> - 10% × \$12,400 = \$1,240
> - 12% × (\$45,000 - \$12,400) = 12% × \$32,600 = \$3,912
> - Total tax: **\$5,152**
>
> The marginal rate is 12%, and the average rate is \$5,152 ÷ \$45,000 = 11.4%.

### Net Capital Gain and Qualified Dividends

**Net capital gain** (net long-term capital gain minus any net short-term capital loss) and **qualified dividends** are taxed at lower rates. They are stacked on top of ordinary income, so ordinary income fills the lower brackets first.

| Type of Income | Rate |
|---|---|
| Most long-term capital gain and qualified dividends | 0%, 15%, or 20%, depending on taxable income |
| Unrecaptured §1250 gain (depreciation on real estate) | Maximum 25% |
| Collectibles gain (art, coins, and NFTs that are collectibles) | Maximum 28% |
| Short-term capital gain | Ordinary rates |

The 0%, 15%, and 20% rates are statutory, but the breakpoints are indexed. For 2026, the 0% rate applies up to taxable income of \$49,450 (single) or \$98,900 (MFJ), and the 20% rate applies above \$545,500 (single) or \$613,700 (MFJ).

> **Example:** In 2026, Rosa, who files single, has \$40,000 of ordinary taxable income and \$20,000 of qualified dividends, for taxable income of \$60,000. The ordinary income is taxed first: \$1,240 + 12% × (\$40,000 - \$12,400) = \$4,552. The dividends sit on top. The first \$9,450 of them fills the rest of the 0% range (up to \$49,450) and is taxed at 0%; the remaining \$10,550 is taxed at 15%, or \$1,582.50. Total tax is **\$6,134.50**.

---

## Alternative Minimum Tax (AMT)

The **alternative minimum tax** is a parallel tax system that keeps taxpayers with large preferences and deductions from paying too little. The taxpayer computes the regular tax and a **tentative minimum tax (TMT)**, and pays the AMT only if the TMT is higher:

1. Start with regular taxable income.
2. Add **AMT adjustments and preferences** to get alternative minimum taxable income (AMTI).
3. Subtract the **AMT exemption**, which phases out at higher AMTI.
4. Apply the AMT rates (26%, then 28% above an indexed breakpoint of \$244,500 for 2026) to get the TMT. Net capital gain and qualified dividends keep their lower rates.
5. **AMT = TMT - regular tax**, if positive.

OBBBA made the larger exemptions permanent (indexed; \$90,100 single and \$140,200 MFJ for 2026). Starting in 2026, it also reset the point where the exemption begins to phase out to \$500,000 (single) and \$1,000,000 (MFJ), indexed after 2026, and doubled the phase-out rate: the exemption now shrinks by **50 cents** for each dollar of AMTI above that point, instead of 25 cents.

| Common Adjustment or Preference | AMT Treatment |
|---|---|
| Itemized deduction for state and local taxes | Not allowed (added back) |
| Standard deduction | Not allowed (added back) |
| Interest on private activity bonds | Added back |
| Exercise of an incentive stock option | The bargain element (FMV minus exercise price) is added at exercise |
| 200% declining balance MACRS on personal property | Recomputed using 150% declining balance (no adjustment for bonus depreciation or straight-line property) |

> **Example:** Taylor, who files single, has 2026 AMTI of \$600,000. The exemption is \$90,100 - 50% × (\$600,000 - \$500,000) = \$40,100, leaving \$559,900 subject to AMT. The TMT is 26% × \$244,500 + 28% × (\$559,900 - \$244,500) = \$63,570 + \$88,312 = \$151,882. If Taylor's regular tax is \$145,000, the AMT is **\$6,882**.

---

## Tax Credits

A **credit** reduces tax dollar for dollar, so a \$1,000 credit is worth \$1,000 to anyone, while a \$1,000 deduction is worth only \$1,000 times the taxpayer's marginal rate.

### Refundable and Nonrefundable Credits

A **nonrefundable** credit can reduce tax to zero but no further; any excess is lost unless the credit has its own carryforward. A **refundable** credit is paid out even when it exceeds the tax, so it can produce a refund for someone who owes nothing.

| Refundable | Nonrefundable |
|---|---|
| Earned income credit | Child tax credit (the part that is not refundable) |
| Additional child tax credit (the refundable part of the child tax credit) | Credit for other dependents |
| 40% of the American opportunity credit | Child and dependent care credit |
| Up to \$5,000 of the adoption credit (indexed after 2025) | Lifetime learning credit |
| Premium tax credit | The rest of the adoption credit (5-year carryforward) |
| Excess Social Security withholding from two or more employers | Foreign tax credit |

### Child Tax Credit and Credit for Other Dependents

| Feature | Rule |
|---|---|
| Amount | \$2,200 per qualifying child under age 17 at year-end (set by OBBBA for 2025 and indexed after; still \$2,200 for 2026) |
| Refundable portion | Up to an indexed amount per child (\$1,700 for 2026), limited to 15% of earned income above \$2,500 |
| Phase-out | \$50 for each \$1,000 (or part) of MAGI over \$200,000 (\$400,000 MFJ); fixed by statute |
| SSN rules | The child needs an SSN valid for employment, issued by the return's due date; the taxpayer (or at least one spouse on a joint return) must also have an SSN |
| Credit for other dependents | \$500, nonrefundable, for each dependent who is not a qualifying child for this credit, such as a 17-year-old child or a dependent parent |

> **Example:** Jordan and Alex file jointly with MAGI of \$410,000. They have two children under 17 and a dependent 18-year-old in college. Their tentative credit is 2 × \$2,200 + \$500 = \$4,900. MAGI exceeds \$400,000 by \$10,000, so the credit is reduced by 10 × \$50 = \$500. They claim **\$4,400**.

### Child and Dependent Care Credit

This nonrefundable credit covers care for a child under 13, or a disabled spouse or dependent, so that the taxpayer (and spouse) can work or look for work. Eligible expenses are capped at **\$3,000** for one qualifying individual or **\$6,000** for two or more, cannot exceed the earned income of the lower-earning spouse, and are reduced by any excluded employer-provided dependent care assistance.

Starting in 2026, OBBBA raised the credit rate. The rate is **50%** for AGI of \$15,000 or less. It drops 1 percentage point for each \$2,000 (or part) of AGI above \$15,000 until it reaches **35%**, and stays at 35% until AGI reaches \$75,000 (\$150,000 MFJ). Above that, it drops 1 point for each \$2,000 (\$4,000 MFJ) of additional AGI, but never below **20%**. These amounts are statutory. The maximum credit is therefore \$1,500 for one qualifying individual and \$3,000 for two or more.

> **Example:** In 2026, Ellen and Raj file jointly with AGI of \$130,000 and pay \$8,000 for day care for their two young children. Eligible expenses are capped at \$6,000, and their AGI is in the 35% range, so the credit is \$6,000 × 35% = **\$2,100**. If their AGI were \$250,000, the rate would fall to the 20% floor and the credit would be \$1,200.

### Earned Income Credit (EIC)

The **earned income credit** is a **refundable** credit for low- and moderate-income workers. Its amount depends on earned income, AGI, filing status, and the number of qualifying children, and every phase-in and phase-out amount is indexed. A taxpayer loses the credit entirely if investment income exceeds an indexed limit. A worker with no qualifying child must be at least 25 and under 65. An MFS filer can claim the credit only if separated from his or her spouse.

### Education Credits

| Feature | American Opportunity (AOTC) | Lifetime Learning (LLC) |
|---|---|---|
| Maximum | \$2,500 per student (100% of the first \$2,000 of expenses plus 25% of the next \$2,000) | \$2,000 per return (20% of up to \$10,000 of expenses) |
| Refundable? | 40% (up to \$1,000) | No |
| Years available | First 4 years of postsecondary education | Unlimited |
| Enrollment | At least half time, in a degree program | Any course load, including courses to improve job skills |
| MAGI phase-out (single) | \$80,000 to \$90,000 | \$80,000 to \$90,000 |
| MAGI phase-out (MFJ) | \$160,000 to \$180,000 | \$160,000 to \$180,000 |
| Felony drug conviction | Disqualifies | No effect |

The phase-out ranges are fixed by statute. Books and supplies count for the AOTC even if they are not bought from the school. Starting in 2026, both credits require the taxpayer's SSN on the return (and the student's name and SSN, if the student is not the taxpayer or spouse), and the AOTC also requires the school's employer identification number. A missing number is treated as a math error.

### Adoption Credit

The adoption credit covers qualified adoption expenses up to an indexed maximum per child (\$17,670 for 2026), and it phases out over an indexed MAGI range. For a child with special needs, the full credit is allowed whatever the actual expenses. Starting in 2025, up to \$5,000 of the credit is **refundable** (indexed after 2025; \$5,120 for 2026). The rest is nonrefundable and carries forward up to 5 years.

### Energy Credits That Have Ended

OBBBA ended the main individual energy credits early. The energy efficient home improvement credit (§25C) is not available for property placed in service after December 31, 2025, and the residential clean energy credit (§25D, for solar panels and similar systems) is not available for expenditures made after that date. An expenditure is "made" when installation is complete, so a 2025 payment for a system installed in 2026 gets no credit. The new and previously owned clean vehicle credits (§§30D and 25E) are not available for vehicles acquired after September 30, 2025.

### A Credit That Starts in 2027

For tax years ending after 2026, new §25F allows a credit of up to \$1,700 per taxpayer for cash contributions to scholarship granting organizations in states that choose to participate. Under the AICPA's six-month rule, it should become eligible for testing on July 1, 2027.

---

## Summary

| Topic | Key Rule |
|---|---|
| Ordinary rates | Seven rates from 10% to 37%, permanent; brackets indexed |
| Capital gains and qualified dividends | 0%, 15%, or 20% (25% unrecaptured §1250; 28% collectibles), stacked on top of ordinary income |
| AMT | Tentative minimum tax minus regular tax, if positive; exemption phases out at 50 cents per dollar starting in 2026 |
| Refundable vs. nonrefundable | Refundable credits can create a refund; nonrefundable credits stop at zero tax |
| Child tax credit | \$2,200 per child under 17; partly refundable; phase-out at \$200,000 (\$400,000 MFJ) |
| Child and dependent care credit | 50% to 20% of up to \$3,000 or \$6,000 of expenses (starting in 2026) |
| AOTC | \$2,500 per student; 40% refundable |
| Lifetime learning credit | \$2,000 per return; nonrefundable |
| EIC | Fully refundable; indexed income and investment income limits |
| Adoption credit | Up to \$5,000 refundable starting in 2025; rest carries forward 5 years |
| Energy credits | §§25C and 25D ended after 2025; clean vehicle credits ended for vehicles acquired after September 30, 2025 |

:::info

Credit questions often turn on the phase-out. Confirm the filing status and MAGI first, then compute the reduction, watching whether the statute counts each \$1,000 of excess or "each \$1,000 or part of \$1,000."

:::
