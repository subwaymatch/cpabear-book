# Individual Compliance and Tax Planning

## Introduction

REG teaches the everyday parts of an individual return: filing status, dependents, gross income, and deductions. This chapter picks up the items that make a return nonroutine, the ones TCP expects you to handle when you prepare or review a return and when a client asks what to do before year end. We start with income items (equity compensation, the alternative minimum tax, the kiddie tax, imputed interest, and income earned abroad), then turn to the planning tools (benefit accounts, deductions, estimated taxes, and gifts of property), and finish with year-end planning.

Throughout, the chapter teaches the law as amended by the **One Big Beautiful Bill Act** (OBBBA, P.L. 119-21), enacted July 4, 2025. The provisions discussed here have been eligible for testing since July 1, 2026, unless the text says otherwise.

---

## Equity Compensation Awards

Employers often pay key people in stock or in rights to buy stock. For each kind of award, three questions decide the tax result: when the employee has income, whether that income is ordinary or capital, and whether the alternative minimum tax (AMT) is affected.

### Incentive Stock Options (ISOs)

An **incentive stock option** under IRC §422 gives an employee the right to buy company stock at a fixed exercise price. ISOs get the most favorable treatment in the Code: there is no regular tax when the option is granted or exercised. If the employee then holds the shares more than 2 years after the grant date and more than 1 year after the exercise date, the entire gain over the exercise price is long-term capital gain when the shares are sold.

The catch is the AMT. The **bargain element** at exercise (FMV minus exercise price) is an AMT adjustment in the year of exercise. If the employee sells too early (a **disqualifying disposition**), the favorable treatment is lost and the bargain element becomes ordinary compensation income.

| Event | Regular Tax | AMT |
|---|---|---|
| **Grant** | No income | No adjustment |
| **Exercise** | No income | Bargain element is a positive adjustment |
| **Qualifying disposition** | Sale price minus exercise price is long-term capital gain | AMT basis includes the bargain element, so AMT gain is smaller (a negative adjustment) |
| **Disqualifying disposition** | Bargain element (limited to the actual gain) is ordinary income; any excess is capital gain | No adjustment if the sale is in the same year as the exercise |

> **Example:** Polar Inc. grants Riley ISOs to buy 1,000 shares at \$20 per share. Two years later, when the stock trades at \$50, Riley exercises.
>
> - **At exercise:** Riley has no regular income. The \$30,000 bargain element ((\$50 - \$20) × 1,000) is a positive AMT adjustment that year.
> - **Qualifying sale:** Riley sells 18 months after exercise for \$70 per share. The \$50,000 gain ((\$70 - \$20) × 1,000) is long-term capital gain. For AMT, Riley's basis is \$50,000, so AMT gain is only \$20,000, a \$30,000 negative adjustment in the year of sale.
> - **Disqualifying sale instead:** Riley sells later in the year of exercise for \$70 per share. The \$30,000 bargain element is ordinary compensation income, and the remaining \$20,000 is short-term capital gain. Because the sale is in the same year as the exercise, there is no AMT adjustment.

### Nonqualified Stock Options (NQSOs)

Any option that does not meet the ISO rules is a **nonqualified stock option**. NQSOs are simpler and less generous. When the option has no readily ascertainable value at grant (the usual case), nothing happens at grant. At exercise, the bargain element is ordinary compensation income, reported as wages and subject to withholding and FICA, and the employer deducts the same amount. The employee's basis in the shares is their FMV at exercise, and the holding period starts then, so any later gain or loss is capital.

If Riley's options above had been NQSOs, Riley would report \$30,000 of wages at exercise. A later sale at \$70 per share would produce \$20,000 of capital gain, long-term if Riley held the shares more than 1 year after exercise.

### Restricted Stock and Restricted Stock Units (RSUs)

**Restricted stock** is stock the employee receives now but can forfeit until a vesting condition is met, such as staying with the company for three years. Under §83, the employee has ordinary income when the stock vests, equal to its FMV at vesting minus anything the employee paid. A **restricted stock unit (RSU)** is only a promise to deliver shares later, so the employee has ordinary income when the shares are delivered.

The **§83(b) election** lets a holder of restricted stock (not RSUs) recognize the income at grant instead. It must be filed within **30 days** after the stock is transferred. The election is a bet that the stock will rise: the ordinary income is locked in at the low grant-date value, later appreciation is capital gain, and the capital gain holding period starts at grant. The risk is forfeiture. If the employee leaves before vesting and forfeits the shares, no deduction is allowed for the income already reported.

> **Example:** Bear Co. grants Casey 1,000 restricted shares worth \$5 each, vesting in three years. At vesting the shares are worth \$40, and Casey sells them two years after vesting for \$60.
>
> | Item | No Election | §83(b) Election |
> |---|---|---|
> | Ordinary income at grant | \$0 | \$5,000 |
> | Ordinary income at vesting | \$40,000 | \$0 |
> | Basis in shares | \$40,000 | \$5,000 |
> | Long-term capital gain on sale | \$20,000 | \$55,000 |
> | **Total income** | **\$60,000** | **\$60,000** |
>
> Total income is the same either way. The election converts \$35,000 of ordinary income into long-term capital gain. The price is paying tax on \$5,000 at grant, with no deduction if Casey later forfeits the shares.

---

## Alternative Minimum Tax (AMT)

The AMT is a second tax computation that runs alongside the regular one. It starts from regular taxable income, adds back certain deductions and exclusions, subtracts a large exemption, and applies a two-rate schedule. If the resulting **tentative minimum tax** is higher than the regular tax, the difference is owed as AMT. TCP expects you to recall which items enter **alternative minimum taxable income (AMTI)** and to follow the computation.

### The Computation

| Step | Amount |
|---|---|
| Regular taxable income | Starting point |
| Plus or minus: AMT adjustments | Timing and deduction differences (can be negative) |
| Plus: Tax preference items | Always positive |
| **Equals: AMTI** | |
| Less: Exemption | Reduced by 50% of AMTI above the phase-out threshold |
| Times: AMT rates | 26% and 28%; long-term capital gains and qualified dividends keep their regular rates |
| **Equals: Tentative minimum tax** | |
| Less: Regular tax | |
| **Equals: AMT** | If positive |

OBBBA made the larger TCJA exemption permanent but made it disappear faster at high incomes. Starting in 2026, the exemption is reduced by 50 cents (previously 25 cents) for each dollar of AMTI above the phase-out threshold, and the threshold was reset to \$500,000 (\$1,000,000 for joint filers) for 2026, indexed starting in 2027. The exemption amounts are indexed (for 2026, \$90,100 single and \$140,200 joint). The faster phase-out means a large ISO exercise is more likely to trigger AMT than it was in 2025.

### Common Adjustments and Preferences

| Item | AMT Treatment |
|---|---|
| ISO bargain element at exercise | **Add** (adjustment) |
| State and local taxes deducted as an itemized deduction | **Add back** |
| Standard deduction | **Add back** (not allowed for AMT) |
| Interest on private activity bonds | **Add** (preference item) |
| Depreciation | **Adjust** for the difference between regular and AMT methods; the adjustment turns negative in later years |
| Gain on a later sale of ISO stock | **Subtract** the difference, because AMT basis is higher |

Most AMT adjustments are timing differences. AMT paid because of them creates a **minimum tax credit** that can reduce regular tax in later years, which softens the cost of an ISO exercise.

:::tip[Exam Tip]

The ISO bargain element is the most commonly tested AMT adjustment. When a question mentions an ISO exercise, check the AMT consequences in the year of exercise and again in the year of sale.

:::

---

## Tax on a Child's Unearned Income (Kiddie Tax)

Parents in high brackets have an obvious incentive to move investment assets to their children, whose income would otherwise be taxed at the lowest rates. The **kiddie tax** under §1(g) blocks most of that benefit by taxing a child's net unearned income at the parent's marginal rate.

The kiddie tax applies to a child who, at the end of the year:

1. Is under age 18, or is age 18 or a full-time student age 19 through 23 whose earned income does not exceed half of the child's own support,
2. Has at least one living parent,
3. Does not file a joint return, and
4. Has unearned income above the threshold (\$2,700 for 2026, indexed).

The child's unearned income (interest, dividends, capital gains, and other investment income) is split into three layers. The first layer is offset by the child's standard deduction, the second is taxed at the child's own rates, and everything above that is **net unearned income** taxed at the parent's rate. Each of the first two layers is \$1,350 for 2026. Earned income, such as wages from a summer job, is always taxed at the child's rates.

> **Example:** Dana's 16-year-old child has \$5,000 of dividends and no other income in 2026. The first \$1,350 is offset by the child's standard deduction, the next \$1,350 is taxed at the child's rate, and the remaining \$2,300 of net unearned income is taxed at Dana's marginal rate.

Because the kiddie tax reaches only current income, gifts to children work better when the property produces little current income: growth stock that will not be sold until the child is older, or tax-exempt bonds. Accounts that defer income, such as a 529 plan or a Trump account (see [Personal Financial Planning](/tcp/personal-financial-planning)), avoid the kiddie tax while the money stays in the account.

---

## Imputed Interest on Below-Market Loans

When a lender charges less than market interest, the borrower receives something of value: the use of money at a discount. **Section 7872** makes that benefit visible. It treats the lender as charging interest at the **applicable federal rate (AFR)** and treats the forgone interest as transferred from the lender to the borrower and then paid back as interest. What the first transfer is called depends on the relationship:

| Loan | Deemed Transfer to Borrower | Lender Reports | Borrower Reports |
|---|---|---|---|
| **Gift loan** (for example, parent to child) | Gift | Interest income | Deemed interest paid, deductible only if it qualifies (investment or home mortgage interest) |
| **Compensation-related loan** (employer to employee) | Compensation | Interest income, plus a deduction for the compensation | Compensation income, plus deemed interest paid as above |
| **Corporation-to-shareholder loan** | Dividend (to the extent of E&P) | Interest income, with no deduction for the dividend | Dividend income, plus deemed interest paid as above |

> **Example:** Grizzly Inc. lends its employee Quinn \$100,000 interest-free, payable on demand, when the AFR is 4%. For the year, Grizzly Inc. is treated as paying Quinn \$4,000 of compensation (which it deducts) and receiving \$4,000 of interest income. Quinn reports \$4,000 of compensation income and is treated as paying \$4,000 of interest, which is nondeductible personal interest unless the loan qualifies as investment or home mortgage debt.

Small loans are exempt, and gift loans of \$100,000 or less get relief tied to the borrower's investment income. Those exceptions, term loans, and seller-financed sales are covered in [Related Party Transactions](/tcp/property-transactions/related-party-transactions).

---

## Income Earned Outside the U.S.

U.S. citizens and resident aliens are taxed on **worldwide income**, so wages earned in another country belong on the U.S. return. Two provisions prevent double taxation: the **foreign tax credit** and the **foreign earned income exclusion (FEIE)** under §911. A taxpayer cannot claim a credit for foreign taxes on income that has been excluded.

To use the FEIE, the taxpayer must have a **tax home** in a foreign country and meet one of two tests:

- **Bona fide residence test:** a bona fide resident of a foreign country for an uninterrupted period that includes an entire tax year, or
- **Physical presence test:** physically present in a foreign country for at least **330 full days** during any 12 consecutive months.

The exclusion covers **earned income only** (wages, salaries, and self-employment income), not interest, dividends, or pensions. The maximum is indexed (\$132,900 for 2026) and is prorated for a partial qualifying year. A taxpayer can also exclude or deduct a **foreign housing amount**, the reasonable housing costs above a base amount.

Two rules surprise people. First, the exclusion does not remove income from the bottom of the rate schedule. Under the **stacking rule**, the remaining income is taxed at the rates that would apply if the excluded income were still included. Second, the FEIE is an income tax rule only: self-employment tax is still due on excluded self-employment income.

> **Example:** Kodiak Partners sends Avery, a U.S. citizen, to work in Germany for all of 2026 at a salary of \$150,000. Avery meets the physical presence test and elects the exclusion (\$132,900 for 2026). Only \$17,100 of salary is taxable, but it is taxed at the rates that apply to income between \$132,900 and \$150,000, not at the 10% and 12% rates. When the foreign country's tax rate is higher than the U.S. rate, the foreign tax credit alone often eliminates U.S. tax on the salary, so the exclusion adds little.

---

## Flexible Spending Accounts (FSAs) and Health Savings Accounts (HSAs)

Both accounts let a client pay medical costs with pretax dollars. When contributions go through an employer's cafeteria plan, they escape both income tax and FICA. The differences lie in what happens to unspent money, who can open an account, and whether the balance can be invested. The blueprint asks you to project the tax savings from using them.

### Flexible Spending Accounts

A **health FSA** is funded by salary reduction up to an indexed limit (\$3,400 for 2026). The full annual election is available from the first day of the plan year. Unspent amounts are generally forfeited at year end, although a plan may allow a limited carryover or a grace period of up to two and a half months.

A **dependent care FSA** (a dependent care assistance program under §129) works the same way for child care. Starting in 2026, the exclusion rises from \$5,000 to **\$7,500** (\$3,750 for married filing separately). This amount is fixed in the statute and not indexed.

Dollars excluded through a dependent care FSA reduce the expenses that qualify for the **child and dependent care credit**. OBBBA raised that credit's top rate to 50% for AGI of \$15,000 or less. The rate phases down to 35%, and then to a 20% floor once AGI is high enough (the second phase-down starts above \$75,000 of AGI, or \$150,000 for joint filers). The qualifying expense caps are unchanged at \$3,000 for one dependent and \$6,000 for two or more.

> **Example:** Sam and Pat (married filing jointly, AGI \$300,000, 24% marginal rate) pay \$9,000 a year for day care for two children. At their income, the credit rate is the 20% floor.
>
> - **Credit only:** 20% × \$6,000 expense cap = \$1,200 of tax saved.
> - **Dependent care FSA:** excluding \$7,500 saves 24% × \$7,500 = \$1,800 of income tax, plus payroll tax. The \$7,500 exclusion uses up the \$6,000 expense cap, so no credit remains.
>
> The FSA saves more. For most middle- and higher-income families, the exclusion beats the 20% credit.

### Health Savings Accounts

An **HSA** is a savings account the individual owns, paired with a **high-deductible health plan (HDHP)**. It is the only account with a triple tax advantage: contributions are deductible for AGI (or excluded from wages and FICA when made through payroll), earnings grow tax-free, and distributions for qualified medical expenses are tax-free. Nonqualified distributions are taxable and, before age 65, also subject to a 20% penalty.

| Requirement | Rule |
|---|---|
| **HDHP coverage** | Required. Starting in 2026, bronze and catastrophic plans bought on an exchange count as HDHPs. |
| **No other coverage** | No Medicare and no general-purpose health FSA (a limited-purpose dental and vision FSA is allowed). Telehealth coverage before the deductible is permanently allowed, and starting in 2026 a direct primary care arrangement does not disqualify the account. |
| **Not a dependent** | The account holder cannot be claimed as someone else's dependent. |
| **Contribution limits** | Indexed (\$4,400 self-only and \$8,750 family for 2026), plus a \$1,000 catch-up at age 55 or older. |

:::tip[Planning Opportunity]

Both accounts save income tax and, when funded through payroll, FICA. The HSA's advantages are that unspent money carries over indefinitely, can be invested, and stays with the employee after a job change. The health FSA's advantages are that it requires no HDHP and the full annual amount can be spent on day one. A client who can pay current medical bills out of pocket can let the HSA grow as a supplemental retirement account.

:::

---

## Deductions After OBBBA

Every individual deducts the larger of the standard deduction or itemized deductions. OBBBA made the larger standard deduction permanent (\$16,100 single and \$32,200 joint for 2026, indexed) and reworked several itemized deductions. It also created four temporary deductions for 2025 through 2028 that are claimed whether or not the taxpayer itemizes. Because those four are available either way, they do not change the itemize-or-not decision, but their income phase-outs matter for planning.

### Temporary Deductions for 2025-2028

These deductions are taken after AGI, so they reduce taxable income but not AGI. Their dollar limits and phase-out thresholds are fixed in the statute and not indexed, which means they can be tested. Each phase-out is based on modified AGI (MAGI), which here means AGI plus excluded foreign and possessions income.

| Deduction | Maximum | Phase-Out | Key Conditions |
|---|---|---|---|
| **Qualified tips** | \$25,000 per return | \$100 for each \$1,000 of MAGI over \$150,000 (\$300,000 MFJ) | Voluntary tips in an occupation on Treasury's list of tipped occupations, reported on a W-2, 1099, or Form 4137; not earned in a specified service trade or business |
| **Qualified overtime** | \$12,500 (\$25,000 MFJ) | Same as tips | Only the premium the Fair Labor Standards Act (FLSA) requires: the "half" in time-and-a-half |
| **Car loan interest** | \$10,000 | \$200 for each \$1,000 (or part) of MAGI over \$100,000 (\$200,000 MFJ) | Loan taken out after 2024 to buy a new personal-use vehicle with final assembly in the U.S., secured by the vehicle; VIN on the return |
| **Senior deduction** | \$6,000 per person age 65 or older | 6% of MAGI over \$75,000 (\$150,000 MFJ) | Each qualifying spouse on a joint return gets one |

For the tips, overtime, and senior deductions, the taxpayer's Social Security number must be on the return, and married taxpayers must file jointly. Tips and overtime remain subject to FICA; only income tax is affected. Recall the blueprint assumption as well: a question's reference to wages does not include tips or overtime unless it says so.

### Itemized Deductions

| Deduction | Current Rule |
|---|---|
| **State and local taxes (SALT)** | Capped at \$40,000 for 2025 and \$40,400 for 2026, rising 1% a year through 2029 and falling back to \$10,000 in 2030 (half for married filing separately). The cap is reduced by 30% of MAGI above \$500,000 for 2025 (\$505,000 for 2026, also rising 1% a year), but never below \$10,000 (\$5,000 MFS). |
| **Home mortgage interest** | Interest on up to \$750,000 of acquisition debt (\$375,000 MFS), permanently. No deduction for home equity debt not used to buy, build, or improve the home. Starting in 2026, mortgage insurance premiums again count as deductible interest, phased out above \$100,000 of AGI. |
| **Charitable contributions** | Starting in 2026, deductible only to the extent the year's total gifts exceed 0.5% of the contribution base (generally AGI). The 60% of AGI limit for cash gifts to public charities is permanent. |
| **Medical expenses** | Deductible to the extent they exceed 7.5% of AGI. |
| **Personal casualty losses** | Only losses from federally declared disasters (and, starting in 2026, state-declared disasters), after a \$100 floor and 10% of AGI. |
| **Wagering losses** | Starting in 2026, only 90% of losses are deductible, and only up to wagering gains. |
| **Miscellaneous itemized deductions** | Those subject to the 2% floor are permanently eliminated. Starting in 2026, unreimbursed educator expenses are an exception, deductible with no floor and no cap. |

The SALT phase-down works like this:

> **Example:** In 2026, Jordan (single) has MAGI of \$555,000 and pays \$45,000 of state income and property taxes. The \$40,400 cap is reduced by 30% × (\$555,000 - \$505,000) = \$15,000, to \$25,400. Jordan deducts \$25,400.

Owners of partnerships and S corporations can often do better through a **pass-through entity tax**. When the entity pays the state tax, the entity deducts it, and the individual SALT cap does not apply.

**The 2/37 limit for top-bracket taxpayers.** OBBBA permanently repealed the old Pease limitation and replaced it, starting in 2026, with a rule that holds the value of itemized deductions to about 35 cents per dollar. For a taxpayer in the 37% bracket, itemized deductions are reduced by 2/37 of the lesser of (a) total itemized deductions or (b) the amount by which taxable income plus itemized deductions exceeds the start of the 37% bracket. The limit applies after every other limit, including the SALT cap and the 0.5% charitable floor.

> **Example:** In 2026, a married couple filing jointly has taxable income of \$900,000 before this rule and \$100,000 of itemized deductions. Taxable income plus itemized deductions is \$1,000,000, which is \$231,300 above the start of the 37% bracket (\$768,700 for 2026). The lesser amount is the \$100,000 of deductions, so the reduction is 2/37 × \$100,000 = \$5,405.

### Standard Deduction or Itemize: Bunching

Most taxpayers take the standard deduction, so the planning question is whether shifting deductible payments can push one year over the line. **Bunching** concentrates two or more years of discretionary deductions, usually charitable gifts, into one year so the taxpayer itemizes that year and takes the standard deduction in the others. Two OBBBA changes affect the math. The 0.5% floor trims the charitable deduction in each itemizing year, and starting in 2026 non-itemizers can deduct up to **\$1,000 (\$2,000 MFJ)** of cash gifts to public charities (not donor-advised funds) on top of the standard deduction.

> **Example:** Alex is single with AGI of \$100,000 each year, pays \$6,000 of state and local taxes, and gives \$8,000 in cash to public charities every year. Assume a \$16,100 standard deduction in both years. Itemizing in a normal year would give only \$6,000 + (\$8,000 - \$500 floor) = \$13,500, less than the standard deduction.
>
> | Year | Give \$8,000 Each Year | Bunch \$16,000 into Year 1 |
> |---|---|---|
> | Year 1 | \$16,100 standard + \$1,000 non-itemizer gift deduction = \$17,100 | \$6,000 SALT + (\$16,000 - \$500 floor) = \$21,500 itemized |
> | Year 2 | \$17,100 | \$16,100 standard (no gifts) |
> | **Two-year total** | **\$34,200** | **\$37,600** |
>
> Bunching adds \$3,400 of deductions over two years. A donor-advised fund lets Alex take the bunched deduction in Year 1 while the fund makes grants to charities over both years.

---

## Estimated Tax Payments

Wages come with withholding; investment income, self-employment income, and gains usually do not. An individual whose withholding falls short must make quarterly estimated payments or owe an **underpayment penalty** under §6654, which works like interest on each late installment.

No penalty applies if the tax due after withholding is less than \$1,000. Otherwise, the taxpayer must pay, through withholding and estimates, the **required annual payment**, which is the **lesser of**:

- **90%** of the current year's tax, or
- **100%** of the prior year's tax (**110%** if prior-year AGI exceeded \$150,000, or \$75,000 for married filing separately). This safe harbor is not available if the prior tax year was shorter than 12 months.

Each installment is 25% of the required annual payment, due April 15, June 15, September 15, and January 15 of the following year (moved to the next business day when a date falls on a weekend or holiday).

> **Example:** Morgan's 2026 tax was \$40,000 on AGI of \$200,000. Morgan projects 2027 tax of \$60,000 and expects \$30,000 of withholding.
>
> - 90% of 2027 tax: \$54,000
> - 110% of 2026 tax (prior-year AGI over \$150,000): \$44,000
> - Required annual payment: the lesser, \$44,000
>
> Morgan needs \$14,000 beyond withholding, or \$3,500 per quarter. Paying under the prior-year safe harbor avoids the penalty even though Morgan will still owe \$16,000 with the return.

Two tools help clients with uneven income. Withholding is treated as paid evenly through the year no matter when it was withheld, so increasing withholding in December can cure underpaid earlier installments. And the **annualized income installment method** lets a taxpayer whose income arrives late in the year (for example, a large gain in November) base each installment on the income actually earned through that quarter.

---

## Charitable Contributions of Noncash Property

When a client wants to give, the choice of what to give can matter as much as how much. The deduction depends on the type of property and the type of charity, and the AGI limit is lower when the deduction is measured at fair market value. For gifts to public charities:

| Property | Deduction | AGI Limit |
|---|---|---|
| **Cash** | Amount given | 60% |
| **Long-term capital gain property** (held more than 1 year) | Fair market value | 30% |
| **Long-term capital gain property**, if the donor elects | Basis | 50% |
| **Ordinary income property** (inventory, property held 1 year or less) | Basis (or FMV if lower) | 50% |
| **Tangible personal property** the charity does not use in its exempt purpose | Basis (or FMV if lower) | 50% |

Gifts to private nonoperating foundations face lower limits. Deductions over a limit carry forward 5 years. Starting in 2026, the 0.5% floor applies to the year's total itemized gifts, and the 2/37 limit applies to donors in the 37% bracket. Gifts of property worth more than \$5,000 generally need a qualified appraisal.

The blueprint asks you to pick the property that minimizes the current year's tax. Two rules drive the answer:

- **Give appreciated long-term property.** The donor deducts full FMV and never pays tax on the appreciation.
- **Sell loss property, then give the cash.** A gift of property worth less than its basis is deductible only at FMV, and the built-in loss is lost forever. Selling first lets the donor deduct both the loss and the cash gift.

> **Example:** Taylor, a Honey Entertainment director, wants to give \$50,000 to a public charity this year. Taylor is in the 35% bracket, pays 15% on long-term capital gains, and has AGI high enough that the percentage limits do not bind. Taylor owns two blocks of stock, each worth \$50,000:
>
> | Item | Stock A | Stock B |
> |---|---|---|
> | Basis | \$10,000 | \$60,000 |
> | Holding period | 3 years | 2 years |
> | Built-in gain (loss) | \$40,000 | (\$10,000) |
>
> - **Give Stock A:** the \$50,000 deduction saves \$17,500 (35%), and Taylor avoids the \$6,000 of capital gains tax (15% × \$40,000) a sale would have cost.
> - **Give Stock B:** the deduction is also \$50,000, but the \$10,000 loss disappears.
> - **Sell Stock B and give the cash:** a \$50,000 deduction plus a \$10,000 capital loss Taylor can use against other gains.
>
> Taylor should give Stock A. If Taylor also wants out of Stock B, Taylor should sell it rather than donate it. The 0.5% floor reduces the deduction by the same amount under every option, so it does not change the choice.

---

## Year-End Tax Planning

Year-end planning is where the pieces of this chapter come together. In a typical scenario you review a client's projected income and deductions in the fall and recommend moves before December 31. The basic principle is to recognize income in the year it will be taxed at the lower rate and to take deductions in the year they save the most.

| Move | When It Helps |
|---|---|
| **Defer income** (delay a bonus, use an installment sale, postpone a sale of appreciated property) | The client expects a lower rate next year, or deferral keeps MAGI below a phase-out |
| **Accelerate income** (exercise options, sell appreciated property, convert to a Roth IRA) | The client expects a higher rate next year, or this year has unusually large deductions or losses |
| **Accelerate deductions** (prepay deductible expenses, bunch charitable gifts) | This year's rate is higher, or a deduction is scheduled to shrink |
| **Defer deductions** | Next year's rate will be higher |

### Phase-Outs and Interacting Limits

Many benefits shrink as MAGI rises, so a dollar of extra income can cost more than the marginal rate suggests. The statutory thresholds that come up most often:

- **Child tax credit** (\$2,200 per child for 2026, indexed): reduced by \$50 for each \$1,000 of MAGI above \$200,000 (\$400,000 MFJ)
- **Tips and overtime deductions:** phase-out starts at \$150,000 (\$300,000 MFJ)
- **Senior deduction:** phase-out starts at \$75,000 (\$150,000 MFJ)
- **SALT cap:** phase-down starts at \$505,000 for 2026, rising 1% a year
- **\$25,000 rental real estate loss allowance:** phased out between \$100,000 and \$150,000 of MAGI

> **Example:** Jamie (single) expects 2027 MAGI of \$165,000, including \$10,000 of qualified overtime premium. The overtime deduction is reduced by \$100 for each \$1,000 of MAGI over \$150,000: 15 × \$100 = \$1,500, leaving \$8,500. If Jamie makes an additional \$10,000 pretax 401(k) contribution, MAGI falls to \$155,000, the reduction falls to \$500, and the deduction rises to \$9,500. The contribution removes \$10,000 from taxable income directly and restores \$1,000 of overtime deduction, so it shelters \$11,000 of income in all.

### Changing Tax Law

The blueprint also asks how changing rates and legislation affect timing. The biggest recent change removed a deadline. Before OBBBA, the TCJA's individual rules were set to expire after 2025, and planners pulled income into 2025 to beat expected rate increases. OBBBA made those rules permanent, so that cliff is gone. The scheduled changes still in the law are narrower:

- The four temporary deductions (tips, overtime, car loan interest, and the senior deduction) end after 2028.
- The SALT cap keeps rising 1% a year through 2029 and then falls to \$10,000 in 2030. A deduction that will shrink is worth more while the higher limit applies, to the extent the payment is deductible when made.
- The individual clean energy credits are gone: no credit for energy-efficient home improvements or residential clean energy property after 2025 (§25C and §25D), and none for clean vehicles acquired after September 30, 2025.

A few provisions take effect after 2026 and, under the AICPA's six-month rule, are tested later. For example, the new credit of up to \$1,700 for contributions to scholarship granting organizations applies to tax years ending after December 31, 2026, so it should not be eligible for testing before July 1, 2027.

:::warning

Year-end planning questions often involve several moving parts at once: income timing, deduction timing, estimated payments, and MAGI-based phase-outs. Read the scenario carefully and identify which variable the question asks you to optimize.

:::

---

## Summary

| Topic | Key Concept |
|---|---|
| ISOs | No regular tax at grant or exercise; bargain element is an AMT adjustment; qualifying disposition produces long-term capital gain |
| NQSOs | Bargain element is ordinary income at exercise; basis is FMV at exercise |
| Restricted stock and RSUs | Ordinary income at vesting or delivery; §83(b) (restricted stock only) moves income to grant |
| AMT | Regular taxable income plus adjustments and preferences, less an exemption that phases out at 50% from 2026 |
| Kiddie tax | Net unearned income of a qualifying child is taxed at the parent's rate |
| Imputed interest | Below-market loans are recast at the AFR; the deemed transfer is a gift, compensation, or dividend |
| Foreign earned income | FEIE for earned income only, with stacking; foreign tax credit as the alternative |
| FSAs and HSAs | Pretax medical and dependent care dollars; dependent care exclusion is \$7,500 from 2026; HSAs carry over and can be invested |
| Deductions | Permanent larger standard deduction; four temporary deductions for 2025-2028; SALT cap with phase-down; 0.5% charitable floor and 2/37 limit from 2026 |
| Estimated taxes | Lesser of 90% of current-year tax or 100% (110%) of prior-year tax |
| Noncash charitable gifts | Give appreciated long-term property; sell loss property and give the cash |
| Year-end planning | Income in the lower-rate year, deductions in the higher-rate year; watch phase-outs and scheduled changes |
