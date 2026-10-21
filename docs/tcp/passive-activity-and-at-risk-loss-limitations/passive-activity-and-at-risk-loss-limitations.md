# Passive Activity and At-Risk Loss Limitations

## Introduction

A loss on a tax return is not always a deduction. When an individual is allocated a loss from a partnership, an S corporation, or a rental property, the loss must clear a series of hurdles before it can offset wages or investment income. Each hurdle asks a different question: does the owner have enough basis, is the owner's money truly at risk, did the owner participate in the activity, and is the year's total business loss too large? This chapter takes the hurdles in the order the Code applies them, then shows how to review a client's schedules to confirm that each dollar of loss landed in the right place.

TCP tests these rules more deeply than REG, mostly through calculations and schedule reviews. The blueprint excludes tax credit implications from this topic, so the chapter covers losses only.

---

## The Order of the Limits

A loss that fails a hurdle stops there and is tracked separately. Only the amount that clears one hurdle moves on to the next.

| Order | Limit | Question It Asks | What Happens to the Disallowed Loss |
|---|---|---|---|
| 1 | **Basis** (§704(d) for partners, §1366(d) for S corporation shareholders) | Does the owner have enough basis in the entity? | Carried forward until basis is restored |
| 2 | **At-risk** (§465) | Could the owner actually lose this much? | Carried forward until the amount at risk increases |
| 3 | **Passive activity** (§469) | Did the owner materially participate? | Suspended until there is passive income or a disposition |
| 4 | **Excess business loss** (§461(l)) | Do total business losses exceed the annual threshold? | Carried forward as a net operating loss |

The basis rules for each entity type are covered in the [S Corporations](/tcp/entity-tax-compliance/s-corporations) and [Partnerships](/tcp/entity-tax-compliance/partnerships) chapters. This chapter starts with the second hurdle.

---

## At-Risk Rules (IRC §465)

The at-risk rules limit a deductible loss to the amount the taxpayer could actually lose in the activity: the cash and property the taxpayer has put in, plus debt the taxpayer is personally responsible for repaying. The rules apply activity by activity to individuals (and to closely held C corporations), and the amount at risk is measured at the end of the tax year.

| Increases the Amount at Risk | Decreases the Amount at Risk |
|---|---|
| Cash contributed to the activity | Cash and property distributed or withdrawn |
| Adjusted basis of property contributed | Losses that cleared the at-risk limit in earlier years |
| Debt for which the taxpayer is personally liable (recourse debt) | Repayment of recourse debt |
| Debt secured by the taxpayer's property not used in the activity (up to the property's FMV) | Amounts protected against loss by guarantees, stop-loss agreements, or similar arrangements |
| Qualified nonrecourse financing for real estate | |
| Income allocated from the activity | |

**Nonrecourse debt**, debt for which no one is personally liable, is generally **not** at risk. This is the key difference between basis and the amount at risk for a partner: basis includes the partner's share of all partnership liabilities, but the amount at risk includes only recourse debt and qualified nonrecourse financing.

**Qualified nonrecourse financing** is the major exception. It is nonrecourse debt secured by real property used in the activity and borrowed from an unrelated commercial lender (or a government, or guaranteed by one). Without this exception, most real estate investors would have little at risk, because real estate mortgages are often nonrecourse.

The loss allowed is the lesser of the loss that cleared the basis limit or the amount at risk at year end. Any excess is suspended and carried forward in the same activity until the amount at risk increases.

> **Example:** Jordan, a limited partner in Kodiak Partners, contributed \$40,000 of cash and was allocated a \$55,000 loss for the year. Jordan's share of the partnership's liabilities is \$20,000 of nonrecourse debt that is not qualified nonrecourse financing.
>
> - **Basis:** \$40,000 + \$20,000 = \$60,000, so the entire \$55,000 clears the basis limit.
> - **At risk:** only the \$40,000 of cash, so \$40,000 clears the at-risk limit.
>
> The remaining \$15,000 is suspended until Jordan's amount at risk increases, for example through more contributions or future income allocations. The \$40,000 that cleared moves on to the passive activity rules, and because Jordan is a limited partner, it is almost certainly passive.

---

## Passive Activity Loss Rules (IRC §469)

Money truly at risk may still not be deductible if the taxpayer is only an investor. The passive activity rules divide income into three baskets and let passive losses offset only passive income.

| Basket | What It Includes |
|---|---|
| **Active (nonpassive) income** | Wages, and income from a trade or business in which the taxpayer materially participates |
| **Portfolio income** | Interest, dividends, annuities, royalties, and gains on investment property |
| **Passive income** | Income from a trade or business in which the taxpayer does **not** materially participate, and from rental activities (with the exceptions below) |

A **passive activity** is a trade or business in which the taxpayer does not materially participate, or a rental activity regardless of participation. **Portfolio income is never passive.** A passive loss cannot offset dividends or interest, even though the taxpayer does nothing to earn them.

A few arrangements that look like rentals are not "rental activities" under the regulations, most often property whose average customer use is 7 days or less, such as a vacation home rented by the night. For those, the ordinary material participation tests decide whether the activity is passive.

### Material Participation Tests

**Material participation** means involvement in the operations on a regular, continuous, and substantial basis. A taxpayer materially participates if they meet **any one** of seven tests:

| Test | Description |
|---|---|
| 1 | Participated more than **500 hours** during the year |
| 2 | Participation was **substantially all** of the participation by all individuals |
| 3 | Participated more than **100 hours**, and no other individual participated more |
| 4 | Participated more than 100 hours in each of several **significant participation activities**, and total participation in all of them exceeds **500 hours** |
| 5 | Materially participated in the activity in any **5 of the prior 10 years** |
| 6 | The activity is a **personal service activity**, and the taxpayer materially participated in any **3 prior years** |
| 7 | Based on all facts and circumstances, participated on a regular, continuous, and substantial basis (and more than 100 hours) |

A limited partner can generally qualify only under tests 1, 5, or 6.

### Netting Passive Gains and Losses

Passive income and losses from all of a taxpayer's passive activities are netted each year. A net passive gain is taxed normally. A net passive loss is **suspended** and carried forward indefinitely. The suspended loss is allocated among the activities that produced losses, so it can be released later when a specific activity is sold.

> **Example:** Pat has three passive activities: Activity A produced a \$25,000 gain, Activity B a \$40,000 loss, and Activity C a \$10,000 gain. Net passive result: \$25,000 + \$10,000 - \$40,000 = (\$5,000). The \$5,000 net passive loss is suspended and assigned to Activity B, the only loss activity. Pat cannot deduct it against wages or portfolio income.

### Rental Real Estate: Two Exceptions

Rental activities are passive by definition, but two exceptions let owners of rental real estate use losses against other income.

#### Exception 1: The \$25,000 Allowance for Active Participation

An individual who **actively participates** in a rental real estate activity may deduct up to **\$25,000** a year of rental losses against nonpassive income. Active participation is a much lower standard than material participation. It requires bona fide involvement in management decisions, such as approving tenants, setting rents, and approving repairs, and it can be met even when a property manager handles daily operations.

| Requirement | Detail |
|---|---|
| **Ownership** | At least a 10% interest (by value) in the property |
| **Active participation** | Bona fide involvement in management decisions |
| **MAGI phase-out** | The allowance is reduced by 50% of MAGI (AGI before passive losses) above \$100,000 and is gone at \$150,000 |

These amounts are fixed in the statute and not indexed. A married taxpayer filing separately who lived apart from the spouse all year gets half the allowance and half the thresholds; one who lived with the spouse at any time during the year gets none.

> **Example:** Alex owns a rental house and actively participates in its management. Alex's rental loss for the year is \$30,000, and MAGI is \$120,000. The \$25,000 allowance is reduced by 50% × (\$120,000 - \$100,000) = \$10,000, leaving \$15,000. Alex deducts \$15,000 of the rental loss against nonpassive income, and the remaining \$15,000 is suspended.

#### Exception 2: Real Estate Professionals

A taxpayer who qualifies as a **real estate professional** under §469(c)(7) is not automatically passive in rental real estate. To qualify for the year, the taxpayer must:

1. Spend more than **750 hours** in real property trades or businesses in which the taxpayer materially participates, **and**
2. Spend **more than half** of all personal services performed during the year in those real property trades or businesses.

On a joint return, one spouse must meet both tests alone. Qualifying is only the first step: each rental is nonpassive only if the taxpayer also materially participates in it, unless the taxpayer elects to treat all rental real estate as a single activity.

---

## Excess Business Loss Limitation (IRC §461(l))

The last hurdle applies to noncorporate taxpayers with large business losses. After the other limits, the taxpayer's total deductions from all trades or businesses may exceed total business income and gains by no more than an annual threshold, which is indexed (\$256,000, or \$512,000 for joint filers, for 2026). The **excess business loss** is not lost. It is carried forward as part of the taxpayer's net operating loss (NOL) in the next year. Wages are not business income for this purpose, so a large business loss cannot offset a spouse's salary without limit.

OBBBA made this limit permanent (it had been scheduled to end after 2028) and reset the threshold's base, which is why the 2026 threshold is lower than the 2025 threshold of \$313,000 (\$626,000 joint).

> **Example:** Sam and Robin file jointly for 2026. Sam's sole proprietorship, in which Sam materially participates, has a \$700,000 loss that clears the at-risk and passive hurdles. They have no other business income, and Robin earns \$900,000 of wages. Only \$512,000 of the loss offsets the wages. The \$188,000 excess business loss becomes an NOL carryforward to 2027.

---

## Disposition of a Passive Activity

Suspended passive losses are not lost. When a taxpayer makes a **fully taxable disposition** of the **entire interest** in a passive activity to an **unrelated** party, all suspended losses from that activity are released. They first offset any gain on the sale and other passive income; the rest is treated as a nonpassive loss, deductible against any type of income.

| Type of Disposition | Treatment of Suspended Losses |
|---|---|
| **Fully taxable sale** to an unrelated party | All released and deductible against any type of income |
| **Sale to a related party** | Stay suspended until the related buyer disposes of the interest to an unrelated party |
| **Gift** | Not deductible by anyone; added to the basis of the interest the donee receives |
| **Death** | Deductible on the decedent's final return only to the extent they exceed the step-up in basis |
| **Installment sale** | Released each year in proportion to the gain recognized that year |

> **Example:** Casey has \$80,000 of suspended passive losses from a limited partnership interest in Panda Industries LP. Casey sells the entire interest to an unrelated buyer at a \$30,000 gain. The \$80,000 of losses is released: \$30,000 offsets the gain, and the remaining \$50,000 is a nonpassive loss Casey can deduct against wages, interest, or any other income.

---

## Reviewing Basis Schedules and Supporting Documentation

The blueprint asks you to review an owner's basis schedules and the source documents behind them, and to confirm how a loss was split among the amounts suspended under the at-risk rules, the amounts suspended under the passive rules, and the amount allowed.

| Item | What to Check |
|---|---|
| **Beginning balances** | Beginning basis and amount at risk agree with the prior year's ending balances |
| **Schedule K-1** | Income, loss, and separately stated items match the entity's return |
| **Contributions and distributions** | Cash and property transactions are recorded at the correct amounts |
| **Debt** | For partners, the share of recourse, nonrecourse, and qualified nonrecourse debt; for S corporation shareholders, only loans the shareholder made directly to the corporation |
| **At-risk computation** | Only cash, property basis, recourse debt, and qualified nonrecourse financing are counted |
| **Passive worksheets** | Material participation is supported, and passive losses offset only passive income |
| **Carryforwards** | Each suspended amount is tracked under the limit that suspended it |

> **Example:** Riley is a limited partner in Grizzly Partners. Before this year's loss, Riley has contributed \$50,000 of cash, and Riley's share of partnership debt is \$30,000 of nonrecourse debt that is not qualified nonrecourse financing. Riley's K-1 shows a \$90,000 loss. Riley also has \$15,000 of passive income from another passive activity.
>
> | Step | Limit | Loss Allowed Through | Loss Suspended |
> |---|---|---|---|
> | 1. Basis | \$50,000 + \$30,000 = \$80,000 | \$80,000 | \$10,000 (§704(d)) |
> | 2. At risk | \$50,000 (cash only) | \$50,000 | \$30,000 (§465) |
> | 3. Passive | \$15,000 of passive income | \$15,000 | \$35,000 (§469) |
> | 4. Excess business loss | Well under the threshold | \$15,000 | \$0 |
> | **Deductible this year** | | **\$15,000** | **\$75,000** |
>
> The four amounts add back to the \$90,000 loss. Each suspended amount is released under its own rule: the \$10,000 when Riley's basis increases, the \$30,000 when Riley's amount at risk increases, and the \$35,000 when Riley has more passive income or sells the interest. Riley's basis and amount at risk both fall to \$0, because each is reduced by the loss that cleared it, even though only \$15,000 was deducted.

:::tip[Exam Tip]

Simulations often present a completed schedule with errors planted in it. Common ones: counting nonrecourse debt as at risk, giving an S corporation shareholder basis for corporate debt the shareholder merely guaranteed, failing to reduce basis or the amount at risk for distributions, and netting passive losses against portfolio income. Work the hurdles in order and the errors show up.

:::

---

## Summary

| Concept | Key Rule |
|---|---|
| Order of limits | Basis, then at-risk, then passive activity, then excess business loss |
| Amount at risk | Cash, basis of property contributed, recourse debt, and qualified nonrecourse financing for real estate, adjusted for income, losses, and distributions |
| At-risk limitation | Loss limited to the amount at risk at year end; excess carried forward in the same activity |
| Passive activity | A business without material participation, or a rental activity (with exceptions) |
| Material participation | Any one of seven tests; the 500-hour test is the most common |
| Passive netting | Passive losses offset only passive income; a net loss is suspended and assigned to the loss activities |
| \$25,000 rental allowance | Active participation and 10% ownership; phased out between \$100,000 and \$150,000 of MAGI |
| Real estate professional | More than 750 hours and more than half of personal services in real property businesses, plus material participation in the rental |
| Excess business loss | Business losses above an indexed threshold become an NOL carryforward; permanent after OBBBA |
| Disposition | A fully taxable sale of the entire interest to an unrelated party releases all suspended losses |
