# Tax Computation and Credits

## Introduction

After determining adjusted gross income and taxable income, taxpayers must compute their tax liability using the applicable rate schedules and then apply any available credits. This chapter covers the **Section 199A qualified business income deduction**, individual tax rate schedules, the **alternative minimum tax (AMT)**, additional taxes (net investment income tax, additional Medicare tax, self-employment tax), the **kiddie tax**, and the major individual tax credits tested on the CPA exam.

---

## Section 199A — Qualified Business Income Deduction

### Overview

IRC §199A provides a deduction of up to **20%** of qualified business income (QBI) from pass-through entities — sole proprietorships, partnerships, S corporations, and certain trusts. The deduction is taken **below the line** (reduces taxable income, not AGI) but is available to both itemizers and standard-deduction filers.

### QBI Defined

**Qualified business income** is the net amount of qualified items of income, gain, deduction, and loss from a qualified trade or business operated within the United States. QBI does **not** include:

- Capital gains or losses
- Dividend income
- Interest income not allocable to the business
- Wage income as an employee
- Guaranteed payments to partners for services

### Basic Calculation

The Section 199A deduction equals the **lesser** of:

1. **20%** of QBI, or
2. **20%** of taxable income (before the §199A deduction) in excess of net capital gain.

> **Example:** MSA Records operates as a sole proprietorship with \$200,000 of QBI. The owner's taxable income before the §199A deduction is \$180,000. The deduction is the lesser of 20% × \$200,000 = \$40,000 or 20% × \$180,000 = \$36,000. The deduction is **\$36,000**.

### W-2 Wage and Capital Limitation

For taxpayers above the income threshold, the deduction for each qualified business is limited to the **greater** of:

- **50%** of W-2 wages paid by the business, **or**
- **25%** of W-2 wages **plus 2.5%** of the unadjusted basis immediately after acquisition (UBIA) of qualified property.

:::info

These limitations phase in over a range of \$50,000 (single) or \$100,000 (MFJ) above the threshold. Below the threshold, the full 20% deduction applies without limitation.

:::
### Specified Service Trades or Businesses (SSTBs)

An SSTB is any trade or business involving the performance of services in the fields of health, law, accounting, actuarial science, performing arts, consulting, athletics, financial services, brokerage services, or any business where the principal asset is the reputation or skill of employees or owners. **Investment management and trading** are also SSTBs.

| Taxable Income (2024 Approx.) | Non-SSTB | SSTB |
|---|---|---|
| Below threshold (\$191,950 S / \$383,900 MFJ) | Full 20% deduction | Full 20% deduction |
| Within phase-in range | W-2/UBIA limitation phases in | Deduction phases out entirely |
| Above phase-in range | W-2/UBIA limitation fully applies | **No deduction** |

:::tip Exam Tip

Engineering and architecture are specifically **excluded** from the SSTB definition — they qualify for the full deduction regardless of income level.

:::
### QBI Deduction Calculation Steps

1. Identify each qualified trade or business.
2. Determine QBI for each business.
3. Apply the W-2 wage / UBIA limitation if above the threshold.
4. Determine whether any business is an SSTB and apply phase-out if applicable.
5. Combine QBI amounts (net negative QBI carries forward).
6. Apply the overall taxable-income limitation.

---

## Tax Rate Schedules

### Ordinary Income Tax Rates

The 2024 individual tax brackets are:

| Rate | Single | Married Filing Jointly |
|---|---|---|
| 10% | \$0 – \$11,600 | \$0 – \$23,200 |
| 12% | \$11,601 – \$47,150 | \$23,201 – \$94,300 |
| 22% | \$47,151 – \$100,525 | \$94,301 – \$201,050 |
| 24% | \$100,526 – \$191,950 | \$201,051 – \$383,900 |
| 32% | \$191,951 – \$243,725 | \$383,901 – \$487,450 |
| 35% | \$243,726 – \$609,350 | \$487,451 – \$731,200 |
| 37% | Over \$609,350 | Over \$731,200 |

### Capital Gains Tax Rates

Net long-term capital gains and qualified dividends are taxed at preferential rates:

| Rate | Single Taxable Income | MFJ Taxable Income |
|---|---|---|
| 0% | Up to \$47,025 | Up to \$94,050 |
| 15% | \$47,026 – \$518,900 | \$94,051 – \$583,750 |
| 20% | Over \$518,900 | Over \$583,750 |

Short-term capital gains (assets held one year or less) are taxed at ordinary income rates.

---

## Alternative Minimum Tax (AMT)

### Purpose

The AMT is a parallel tax system designed to ensure that high-income taxpayers pay at least a minimum amount of tax even when they benefit from significant deductions and exclusions under the regular tax system.

### Calculation

**Alternative Minimum Taxable Income (AMTI)** = Taxable income + AMT preferences + AMT adjustments − AMT exemption

| AMT Component | 2024 Amounts (Approx.) |
|---|---|
| Exemption — Single | \$85,700 |
| Exemption — MFJ | \$133,300 |
| Phase-out begins — Single | \$609,350 |
| Phase-out begins — MFJ | \$1,218,700 |
| AMT rate | 26% on first \$232,600 (MFJ); 28% above |

### Common AMT Preferences and Adjustments

| Item | Treatment |
|---|---|
| State and local tax (SALT) deduction | Added back |
| Private-activity municipal bond interest | Added back |
| Incentive stock option (ISO) bargain element | Added back at exercise |
| MACRS depreciation on personal property | Recalculated using 150% DB / ADS life |
| Standard deduction | Added back (if claimed) |
| Medical expenses | Only deductible to the extent exceeding 10% of AGI (same as regular tax post-2012) |

:::caution

The AMT is computed separately. A taxpayer owes AMT only if the **tentative minimum tax** exceeds the **regular tax**. The AMT is the excess amount.

:::
> **Example:** Gies Co.'s sole proprietor has a regular tax of \$42,000 and a tentative minimum tax of \$48,000. The AMT owed is \$48,000 − \$42,000 = **\$6,000**.

---

## Additional Taxes

### Net Investment Income Tax (NIIT) — 3.8%

A **3.8% surtax** applies to the **lesser** of:

- Net investment income (NII), or
- The excess of modified AGI (MAGI) over the threshold amount.

| Filing Status | MAGI Threshold |
|---|---|
| Single | \$200,000 |
| MFJ | \$250,000 |
| MFS | \$125,000 |

**Net investment income** includes interest, dividends, capital gains, rental and royalty income, and passive activity income — but **not** wages, self-employment income, or distributions from qualified retirement plans.

> **Example:** Kingfisher Industries' owner has MAGI of \$300,000 (MFJ) and NII of \$80,000. The NIIT applies to the lesser of \$80,000 or \$50,000 (\$300,000 − \$250,000). NIIT = 3.8% × \$50,000 = **\$1,900**.

### Additional Medicare Tax — 0.9%

An additional **0.9%** Medicare tax applies to wages and self-employment income exceeding:

| Filing Status | Threshold |
|---|---|
| Single | \$200,000 |
| MFJ | \$250,000 |
| MFS | \$125,000 |

The employer does not match the additional 0.9%. It is the employee's sole responsibility.

### Self-Employment Tax

Self-employed individuals pay both the employer and employee share of Social Security and Medicare taxes.

| Component | Rate | Wage Base (2024) |
|---|---|---|
| Social Security (OASDI) | 12.4% | \$168,600 |
| Medicare (HI) | 2.9% | No limit |
| Additional Medicare | 0.9% | Above \$200,000 / \$250,000 |

**Calculation steps:**

1. Net self-employment income × **92.35%** = SE tax base.
2. Apply Social Security rate (12.4%) up to the wage base.
3. Apply Medicare rate (2.9%) on all SE earnings.
4. **50%** of SE tax is deductible as an above-the-line deduction on Form 1040.

---

## Kiddie Tax

The **kiddie tax** applies to unearned income of a child who is:

- Under age **19**, or under age **24** if a full-time student, **and**
- Has unearned income exceeding **\$2,500** (2024 approx.).

Unearned income above the threshold is taxed at the **parent's marginal rate**. The first \$1,250 is offset by the child's standard deduction; the next \$1,250 is taxed at the child's rate.

:::tip Exam Tip

The kiddie tax applies only to **unearned** income (interest, dividends, capital gains). A teenager's wages from a summer job are taxed at the child's own rate.

:::
---

## Tax Credits

Credits directly reduce tax liability and are more valuable than deductions. Credits are classified as **nonrefundable** (limited to tax liability) or **refundable** (payable even if they exceed tax).

### Child Tax Credit

| Feature | Rule (2024) |
|---|---|
| Amount | \$2,000 per qualifying child under age 17 |
| Refundable portion | Up to \$1,700 (Additional Child Tax Credit) |
| Phase-out begins | \$200,000 (Single) / \$400,000 (MFJ) |
| Phase-out rate | \$50 per \$1,000 of excess MAGI |

### Child and Dependent Care Credit

- Covers expenses for care of a child under 13 or a disabled dependent while the taxpayer works.
- Maximum eligible expenses: **\$3,000** (one qualifying individual) or **\$6,000** (two or more).
- Credit rate: **20% to 35%** of eligible expenses based on AGI.
- **Nonrefundable.**

> **Example:** MAS Inc.'s CFO pays \$8,000 in daycare for two children. Eligible expenses are capped at \$6,000. With AGI above \$43,000, the credit rate is 20%, producing a credit of \$6,000 × 20% = **\$1,200**.

### Earned Income Credit (EIC)

- **Refundable** credit for low-to-moderate income workers.
- Amount depends on earned income, AGI, filing status, and number of qualifying children.
- Investment income must be **\$11,600 or less** (2024).
- Cannot be claimed by MFS filers (with limited exceptions post-2021).

### Education Credits

| Credit | American Opportunity (AOTC) | Lifetime Learning |
|---|---|---|
| Maximum | \$2,500 per student | \$2,000 per return |
| Refundable? | 40% refundable (\$1,000) | No |
| Years available | First 4 years of postsecondary | Unlimited |
| Enrollment | At least half-time | Any course load |
| MAGI phase-out (Single) | \$80,000 – \$90,000 | \$80,000 – \$90,000 |
| MAGI phase-out (MFJ) | \$160,000 – \$180,000 | \$160,000 – \$180,000 |
| Felony drug conviction | Disqualifies | No effect |

:::tip Exam Tip

The AOTC provides 100% of the first \$2,000 plus 25% of the next \$2,000 of qualified expenses. Books and supplies qualify for the AOTC even if not purchased from the institution.

:::
### Adoption Credit

- Maximum credit: **\$16,810** (2024) per eligible child.
- **Nonrefundable** but may be carried forward up to 5 years.
- Phase-out: MAGI of \$252,150 – \$292,150 (2024).
- For a child with special needs, the full credit is available regardless of actual expenses.

---

## Estimated Tax Payments and Penalties

Taxpayers who expect to owe **\$1,000 or more** after withholding must make quarterly estimated payments (April 15, June 15, September 15, January 15).

### Safe-Harbor Rules to Avoid Penalty

A taxpayer avoids the underpayment penalty by paying at least the **lesser** of:

1. **90%** of the current-year tax liability, or
2. **100%** of the prior-year tax liability (**110%** if prior-year AGI exceeds \$150,000).

:::warning

The penalty is calculated separately for each quarter — catching up in Q4 does not eliminate the penalty for earlier quarters.

:::
> **Example:** Illini Security's owner had a prior-year tax of \$60,000 and current-year AGI above \$150,000. The safe-harbor requires quarterly payments totaling at least 110% × \$60,000 = \$66,000. Each quarterly installment must be at least \$16,500.

---

## Summary

| Topic | Key Rule |
|---|---|
| §199A QBI deduction | Lesser of 20% of QBI or 20% of taxable income |
| SSTB phase-out | No deduction above the income threshold |
| AMT | Tentative minimum tax minus regular tax (if positive) |
| NIIT | 3.8% on lesser of NII or excess MAGI over threshold |
| Additional Medicare | 0.9% on wages/SE income above threshold |
| SE tax deduction | 50% of SE tax is above-the-line |
| Child Tax Credit | \$2,000 per child; partially refundable |
| AOTC | \$2,500 per student; 40% refundable |
| EIC | Fully refundable; income limits apply |
| Estimated tax safe harbor | 90% current year or 100%/110% prior year |

:::info

On the CPA exam, credit calculations frequently require identifying the **correct phase-out threshold** and computing the **reduction amount**. Always verify filing status and MAGI before applying a credit.

:::