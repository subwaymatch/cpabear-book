# Related Party Transactions

## Introduction

Two people who share a household or a business can set prices between themselves at whatever level suits their tax returns. The Code responds with related party rules that look through the deal. A loss on a sale to a relative or a controlled company is disallowed. Gain on depreciable property sold to a controlled company becomes ordinary income. An interest-free loan is treated as if it carried interest. And an installment sale or like-kind exchange can be unwound if the related buyer resells too soon.

TCP asks you to identify related parties, compute direct and constructive ownership, work out the result when property bought from a related party is later sold to an outsider, and calculate imputed interest. This chapter takes those tasks in that order and closes with planning points.

---

## Who Is Related

### IRC §267(b)

Section 267 is the main definition. Its list of related parties drives the loss disallowance rule and several other rules in this chapter.

| Relationship | Detail |
|---|---|
| **Family members** | Brothers and sisters (whole or half blood), spouse, ancestors (parents, grandparents), and lineal descendants (children, grandchildren) |
| **Individual and corporation** | The individual owns **more than 50%** of the value of the stock, directly or constructively |
| **Two corporations** | Members of the same controlled group, using a more-than-50% ownership test |
| **Corporation and partnership** | The same persons own more than 50% of the corporation's stock and more than 50% of the partnership's capital or profits |
| **Trusts** | A grantor and the trust's fiduciary; a fiduciary and a beneficiary of the same trust; fiduciaries of two trusts with the same grantor |
| **Tax-exempt organization** | The organization and a person who (with family) controls it |
| **Estates** | The executor and a beneficiary of the estate, except for a sale to satisfy a pecuniary bequest |

:::warning

Aunts, uncles, nieces, nephews, cousins, and in-laws are **not** related parties under §267. The family definition is narrower than most people expect, and the exam tests it.

:::

Section 267 also has a **matching rule** for expenses. When an accrual-method payer owes a deductible amount, such as salary or interest, to a related cash-method payee, the payer cannot deduct it until the payee includes it in income.

### IRC §707(b): Partnerships

Section 707(b) applies the same idea to partnerships. A loss on a sale between a partnership and a partner who owns **more than 50%** of its capital or profits (directly or constructively) is disallowed, and so is a loss between two partnerships in which the same persons own more than 50%. Gain on a sale between those parties is ordinary income if the property is not a capital asset in the buyer's hands.

### Constructive Ownership Under §267(c)

The more-than-50% tests count shares a taxpayer owns **directly** and shares the taxpayer is treated as owning **constructively** through family members and entities.

| Rule | How It Works |
|---|---|
| **Entity to owner** | Stock owned by a corporation, partnership, estate, or trust is treated as owned proportionately by its shareholders, partners, or beneficiaries |
| **Family** | An individual is treated as owning the stock owned by his or her family: siblings, spouse, ancestors, and lineal descendants |
| **Partner** | An individual who owns stock in a corporation (other than through family attribution) is also treated as owning the stock owned by his or her partners |
| **No double family attribution** | Stock attributed to someone under the family or partner rule cannot be attributed again under those rules. Stock attributed from an entity is treated as actually owned, so it can be attributed again. |

The stock redemption rules use a different set of attribution rules, §318, covered in [Tax Planning for C Corporations](/tcp/entity-tax-planning/tax-planning-for-c-corporations). Its family group (spouse, children, grandchildren, and parents) leaves out siblings and grandparents, and it adds attribution from owners to entities. Use §267(c) for related party sales and §318 for redemptions.

---

## Direct and Indirect Ownership Calculations

**Direct ownership** is simply the shares held in the taxpayer's own name. If Kai owns 300 of the 1,000 outstanding shares of Panda Industries, Kai's direct ownership is 30%. To test whether a taxpayer is related to a corporation, add constructive ownership to that figure and compare the total with 50%.

### Family Attribution

> **Example:** Alex owns 25% of Polar Inc. Alex's spouse, Dana, owns 30%.
>
> | Source | Ownership |
> |---|---|
> | Alex (direct) | 25% |
> | Attributed from spouse Dana | 30% |
> | **Total** | **55%** |
>
> Because Alex's total exceeds 50%, Alex and Polar Inc. are related parties. A loss on a sale between them is disallowed.

Family attribution includes siblings under §267, and the no-double-attribution limit stops the chain after one step.

> **Example:** Taylor owns 30% of Honey Entertainment, and Taylor's brother Drew owns 25%. Taylor is treated as owning Drew's shares, for a total of 55%, so Taylor and Honey Entertainment are related. Taylor's spouse is treated as owning Taylor's 30%, but not Drew's 25%: those shares reached Taylor through family attribution and cannot be passed along again, and a brother-in-law is not family.

### Entity Attribution

> **Example:** Priya owns a 60% capital and profits interest in Kodiak Partners. Kodiak Partners owns 400 of the 1,000 outstanding shares of Grizzly Inc. (40%), and Priya owns another 30% of Grizzly Inc. directly.
>
> | Source | Ownership of Grizzly Inc. |
> |---|---|
> | Priya (direct) | 30% |
> | Attributed from Kodiak Partners (60% × 40%) | 24% |
> | **Total** | **54%** |
>
> Priya and Grizzly Inc. are related parties (54% > 50%).

### Chains of Ownership

> **Example:** Sam owns 80% of Cub Entertainment, which owns 70% of Sloth Security. Sam's spouse, Robin, owns another 10% of Sloth Security.
>
> | Source | Ownership of Sloth Security |
> |---|---|
> | Sam (direct) | 0% |
> | Attributed from Cub Entertainment (80% × 70%) | 56% |
> | Attributed from spouse Robin | 10% |
> | **Total** | **66%** |
>
> Sam and Sloth Security are related. Cub Entertainment and Sloth Security are also related to each other, as members of the same controlled group (Cub owns more than 50% of Sloth).

The same tests apply to partnerships, using the greater of the capital interest or the profits interest.

:::tip[Exam Tip]

When a question gives a chain of ownership percentages, **multiply through** the chain for entity attribution, but **add in full** for family attribution: all of a family member's shares are attributed, not a proportion of them.

:::

---

## Loss Disallowance (IRC §267(a)(1))

### The Basic Rule

When a taxpayer sells or exchanges property **at a loss** to a related party, the loss is **disallowed**. The seller cannot deduct it now, later, or as a carryforward. The rule applies even when the sale is at fair market value and has a good business reason.

The **buyer** gets a limited benefit. The buyer's basis is what it paid, but if the buyer later sells the property to an **unrelated** party at a gain, the seller's disallowed loss can reduce that gain.

### Three Possible Outcomes on a Later Sale

| Buyer's Later Sale | Tax Treatment |
|---|---|
| **1. Gain larger than the disallowed loss** | Recognize the gain **minus** the disallowed loss |
| **2. Gain equal to or smaller than the disallowed loss** | Recognize **no gain and no loss**; the unused part of the disallowed loss is gone |
| **3. Loss** | Recognize only the buyer's own loss; the disallowed loss provides no benefit |

The rule applies to any property. The wash sale rule (§1091), by contrast, applies only to stock and securities, and under current law it does not reach digital assets, such as bitcoin, that are not securities. Selling cryptocurrency at a loss on an exchange and buying it back is not a wash sale, but selling it at a loss directly to a related party produces a disallowed §267 loss.

### Scenario 1: Gain Exceeds the Disallowed Loss

> **Example:** Derek owns 100% of Bear Co. He sells land with a basis of \$100,000 to Bear Co. for \$70,000. Derek's \$30,000 loss is disallowed, and Bear Co.'s basis in the land is its \$70,000 cost.
>
> Bear Co. later sells the land to an unrelated buyer for \$120,000:
>
> | Item | Amount |
> |---|---|
> | Amount realized | \$120,000 |
> | Bear Co.'s basis | (\$70,000) |
> | Realized gain | \$50,000 |
> | Less: Derek's disallowed loss | (\$30,000) |
> | **Recognized gain** | **\$20,000** |

### Scenario 2: Gain Is Less Than the Disallowed Loss

> **Example:** Same facts, but Bear Co. sells the land for \$90,000. Its \$20,000 realized gain is fully offset by \$20,000 of the disallowed loss, so Bear Co. recognizes **no gain and no loss**. The remaining \$10,000 of the disallowed loss is permanently lost.

### Scenario 3: Loss on the Later Sale

> **Example:** Same facts, but Bear Co. sells the land for \$60,000. Bear Co. recognizes its own \$10,000 loss (\$60,000 - \$70,000). Derek's \$30,000 disallowed loss provides no benefit, because it can only reduce a gain, never create or increase a loss.

:::tip[Exam Tip]

Think of the disallowed loss as a coupon the buyer holds. It can **reduce a gain** on a later sale to an unrelated party, but it can never create or increase a loss. If the buyer sells at a loss, the coupon expires worthless.

:::

### Putting the Steps Together

> **Example:** Jordan owns 40% of Ursa Security, and Jordan's mother owns another 20%. Jordan sells investment land with a basis of \$80,000 to Ursa Security for \$55,000. Two years later, Ursa Security sells the land to an unrelated buyer for \$72,000.
>
> - **Related?** Jordan owns 40% directly and 20% through family attribution from a parent, a total of 60%. Yes.
> - **Jordan's loss:** \$55,000 - \$80,000 = (\$25,000), disallowed. Ursa Security's basis is \$55,000.
> - **Ursa Security's later sale:** \$72,000 - \$55,000 = \$17,000 of realized gain. That is less than the \$25,000 disallowed loss, so Ursa Security recognizes \$0. The remaining \$8,000 of disallowed loss is gone for good.

---

## Gain Recharacterization: Capital to Ordinary (IRC §1239)

### The Rule

Without a special rule, an owner could sell an appreciated building to his own corporation, pay tax on a capital gain, and let the corporation depreciate the stepped-up basis against ordinary income. **Section 1239** stops that: when property is sold between related persons and is **depreciable in the buyer's hands**, all of the seller's gain is **ordinary income**.

| Requirement | Detail |
|---|---|
| **Sale at a gain** | §1239 does not apply to losses (§267 handles those) |
| **Depreciable property** | The property is depreciable **by the buyer** |
| **Related persons** | Under §1239's own definition, below |

### Related Persons Under §1239

| Relationship | §1239 Applies? |
|---|---|
| A person and a **controlled entity**: more than 50% of the value of a corporation's stock, or of a partnership's capital or profits, counting constructive ownership | Yes |
| Two entities controlled by the same person | Yes |
| A taxpayer and a trust in which the taxpayer or the taxpayer's spouse is a beneficiary (other than a remote contingent interest) | Yes |
| An executor and a beneficiary of the estate (except for a pecuniary bequest) | Yes |
| Siblings, parents, or children selling directly to each other | No |
| Spouses | Not needed: transfers between spouses are nontaxable under §1041 |

:::info

Control is measured with the §267(c) attribution rules (other than the partner rule). A parent who sells depreciable property to a corporation owned entirely by the parent's child is selling to a controlled entity, because the parent constructively owns the child's shares.

:::

> **Example:** Quinn owns 100% of Salmon Entertainment and sells it a building for \$500,000. Quinn's adjusted basis is \$350,000, and Salmon Entertainment will depreciate the building in its business. Without §1239, much of the \$150,000 gain could have been §1231 gain taxed at capital gain rates. Because the buyer is Quinn's controlled entity and the building is depreciable in its hands, the entire **\$150,000 gain is ordinary income**.

> **Example:** Ellis sells a business computer (adjusted basis \$2,000) to Ellis's sibling, Lee, for \$5,000, and Lee uses it in a sole proprietorship. Siblings are related under §267 but **not** under §1239, because no entity is involved. The \$3,000 gain keeps its normal character, which here is ordinary income anyway under §1245 recapture.

---

## Imputed Interest (IRC §7872 and §1274)

### Overview

When related parties make a loan or a seller-financed sale at a **below-market** interest rate, or with no interest at all, the Code **imputes** interest at the **applicable federal rate (AFR)**. Without this rule, a parent could make a large interest-free loan instead of a taxable gift, and a seller could raise the price and drop the interest, converting ordinary interest into capital gain.

### Applicable Federal Rates

The IRS publishes AFRs monthly in three categories:

| Loan Term | AFR Category |
|---|---|
| 3 years or less (and demand loans) | Short-term AFR |
| More than 3 years, up to 9 years | Mid-term AFR |
| More than 9 years | Long-term AFR |

A question will give you the rate. You need to know which category applies and how to compute the imputed interest.

### Below-Market Loans (IRC §7872)

Section 7872 treats the lender as if it charged the AFR and then transferred the forgone interest to the borrower, who paid it back as interest. What that deemed transfer is called depends on the relationship:

| Loan Type | Deemed Transfer to the Borrower | Deemed Interest |
|---|---|---|
| **Gift loan** (for example, parent to child) | A **gift** from lender to borrower | Interest income to the lender; possibly deductible by the borrower |
| **Compensation-related loan** (employer to employee) | **Compensation** to the employee, deductible by the employer | Interest income to the employer |
| **Corporation-to-shareholder loan** | A **dividend** to the shareholder (to the extent of E&P) | Interest income to the corporation |
| **Shareholder-to-corporation loan** | A **contribution to capital** by the shareholder | Interest income to the shareholder; interest expense for the corporation |
| **Tax avoidance loan** | Depends on the facts | Interest income to the lender |

For a **demand loan** (payable whenever the lender asks), imputed interest is computed each year:

$$
\text{Imputed Interest} = \text{Loan Principal} \times (\text{AFR} - \text{Stated Rate})
$$

For a **term loan** (with a fixed repayment date), the lender is treated as transferring, on the date of the loan, the excess of the amount loaned over the **present value** of the required payments, discounted at the AFR.

> **Example:** On January 1, Pat lends \$200,000 to Pat's adult child Jamie as a demand loan at 1% interest. The short-term AFR is 5%.
>
> | Item | Amount |
> |---|---|
> | Loan principal | \$200,000 |
> | AFR minus stated rate | 5% - 1% = 4% |
> | **Imputed interest** | **\$8,000** |
>
> - Pat is treated as making an **\$8,000 gift** to Jamie (which may be covered by the annual gift tax exclusion).
> - Jamie is treated as paying **\$8,000 of interest** to Pat, deductible only if it qualifies (for example, as investment interest or home mortgage interest).
> - Pat reports **\$10,000 of interest income**: the \$2,000 actually received plus the \$8,000 imputed.

### De Minimis Exceptions

| Exception | Threshold | Condition |
|---|---|---|
| **Gift loans between individuals** | Total outstanding loans between the two of **\$10,000 or less** | No imputed interest, unless the loan is used to buy or carry income-producing assets |
| **Gift loans between individuals: investment income cap** | Total outstanding loans of **\$100,000 or less** | Imputed interest is limited to the borrower's **net investment income** for the year, and is treated as **\$0** if that income is \$1,000 or less; not available if tax avoidance is a principal purpose |
| **Compensation-related and corporation-shareholder loans** | Total outstanding loans of **\$10,000 or less** | No imputed interest, unless tax avoidance is a principal purpose |

> **Example:** Morgan lends \$8,000 interest-free to his son Casey, who uses it for living expenses. Because total gift loans between them do not exceed \$10,000 and the money is not used for income-producing assets, no interest is imputed.

> **Example:** Harper lends \$60,000 interest-free to her daughter Reese, whose net investment income for the year is \$750. The loan exceeds \$10,000 but not \$100,000, so imputed interest is capped at Reese's net investment income. Because that income is \$1,000 or less, it is treated as \$0, and no interest is imputed this year.

### Seller-Financed Sales and Original Issue Discount (IRC §1274)

When a seller finances a sale with a note that carries too little interest, §1274 recasts part of the stated price as interest, called **original issue discount (OID)**.

1. Compute the **present value** of all payments on the note, discounted at the AFR.
2. If the present value is **less than** the stated principal, the difference is OID, which the seller reports as interest income and the buyer deducts as interest expense as it accrues over the life of the note.
3. The selling price, and therefore the seller's amount realized and the buyer's basis, is reduced to the present value.

> **Example:** Avery sells investment land (basis \$100,000) to Honey Security Inc., which Avery owns entirely, for \$300,000. The buyer gives a 5-year note with **0% stated interest**, payable in a single \$300,000 payment at the end of Year 5. The mid-term AFR is 5% (compounded annually here for simplicity).
>
> $$
> \text{PV} = \frac{\$300{,}000}{(1.05)^5} = \frac{\$300{,}000}{1.27628} = \$235{,}058
> $$
>
> | Item | Amount |
> |---|---|
> | Stated price | \$300,000 |
> | Less: OID (imputed interest) | (\$64,942) |
> | **Amount realized** | **\$235,058** |
> | Avery's basis | (\$100,000) |
> | **Gain on sale** | **\$135,058** |
>
> Avery reports the \$64,942 of OID as interest income as it accrues over the 5 years, and Honey Security deducts it. The \$135,058 gain is capital gain (the land is a capital asset in Avery's hands). Because the land is not depreciable, §1239 does not apply, and Avery can report the gain under the installment method when the payment arrives, unless Honey Security resells the land within 2 years. Honey Security's basis in the land is \$235,058, not \$300,000.

| Selling Price | Rule |
|---|---|
| **\$250,000 or less** | §1274 does not apply, but §483 imputes interest in much the same way on payments due more than one year after the sale |
| **More than \$250,000** | §1274 applies if the stated rate is below the AFR |

:::danger

Do not confuse the **\$10,000** de minimis rule for loans under §7872 with the **\$250,000** line between §483 and §1274 for seller-financed sales. They apply to different transactions.

:::

### Other Related Party Rules on Dispositions

Two more related party rules appear in the property transactions chapters:

- **Installment sales:** if a related buyer resells within 2 years, the seller's deferred gain is accelerated, and depreciable property sold to a controlled entity cannot use the installment method. See [Gains and Losses on Asset Disposition](/tcp/property-transactions/gains-and-losses-on-asset-disposition).
- **Like-kind exchanges:** related parties must each hold the exchanged property for 2 years. See [Nontaxable Disposition of Assets](/tcp/property-transactions/nontaxable-disposition-of-assets).

---

## Planning Considerations

Most related party problems can be avoided with planning before the deal. A client who wants to deduct a loss should sell the property to an unrelated buyer on the open market, not to a family member or a controlled company. If the family wants to keep the property, the related buyer can purchase a similar asset separately. Ownership just above 50% can sometimes be reduced below the line, but constructive ownership must be counted before concluding that two parties are no longer related.

For loans and seller financing, the simplest protection is to charge at least the AFR and put the terms in writing: a promissory note, a repayment schedule, and actual payments. A sale between family members at a price well below fair market value can be treated as part sale and part gift, so independent appraisals are worth the cost for significant transfers.

---

## Summary

| Concept | Key Rule |
|---|---|
| **Related parties (§267)** | Family (siblings, spouse, ancestors, lineal descendants); an individual and a more-than-50%-owned corporation; controlled groups; trust, estate, and exempt organization relationships |
| **Related parties (§707(b))** | A partnership and a more-than-50% partner; two partnerships with more-than-50% common ownership |
| **Constructive ownership (§267(c))** | Add family members' shares in full and entity shares proportionately; no second round of family attribution |
| **Loss disallowance** | Loss on a sale to a related party is disallowed to the seller |
| **Later sale at a gain** | The buyer's gain is reduced by the disallowed loss, but not below zero |
| **Later sale at a loss** | Only the buyer's own loss is recognized; the disallowed loss is gone |
| **§1239** | Gain on depreciable property sold to a controlled entity is ordinary income |
| **§7872** | Below-market loans are recast at the AFR as a gift, compensation, dividend, or capital contribution plus interest |
| **De minimis loans** | \$10,000 or less: no imputed interest (with exceptions); gift loans of \$100,000 or less: limited to the borrower's net investment income, zero if \$1,000 or less |
| **§1274 and §483** | Seller financing below the AFR: the price is reduced to present value, and the difference is interest (OID) |
