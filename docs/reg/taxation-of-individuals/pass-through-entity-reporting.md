# Pass-Through Entity Reporting for Individuals

Much of the business income in the United States is never taxed at the entity level. A partnership or S corporation computes its income but generally pays no federal income tax; instead, its income, deductions, gains, losses, and credits **pass through** to the owners, who report them on their own returns. A sole proprietorship or single-member LLC goes further, with no separate return at all.

On the exam, this shows up as a translation task: given a **Schedule K-1** or a disregarded entity's results, put each item in the right place on Form 1040. This chapter explains which entities pass items through, why some items are separately stated, where each item goes, and the self-employment tax and timing rules that come with them. The entity-level rules are covered in the entity chapters, such as [General Partnership](../taxation-of-entities/general-partnership.md) and [S Corporation](../taxation-of-entities/s-corporation.md).

---

## Types of Pass-Through Entities

| Entity | Entity Return | What the Owner Receives | Where the Owner Reports |
|---|---|---|---|
| **Sole proprietorship** | None | Nothing; the owner keeps the books | Schedule C |
| **Single-member LLC** (disregarded entity) | None | Nothing; treated like a sole proprietorship | Schedule C (or Schedule E for rentals) |
| **Partnership** (including a multi-member LLC) | Form 1065 (information return) | Schedule K-1 (Form 1065) | Schedule E and other schedules by item |
| **S corporation** | Form 1120-S (information return) | Schedule K-1 (Form 1120-S) | Schedule E and other schedules by item |

A **disregarded entity** is a single-member LLC that has not elected to be taxed as a corporation (Reg. §301.7701-3). It files no income tax return of its own, and all of its income and expenses appear on the owner's return.

---

## Why Items Are Separately Stated

The K-1 is the bridge between the entity's return and the owner's Form 1040. It reports two kinds of figures. **Ordinary business income (loss)** is the net of everything that is treated the same way for every owner: sales, cost of goods sold, salaries, rent, and regular depreciation. **Separately stated items** are reported one by one because they can affect owners differently: a capital gain is taxed at a preferential rate, a charitable contribution depends on the owner's AGI, and a §179 deduction is subject to owner-level limits (§702(a) for partnerships and §1366(a) for S corporations).

> **Example:** Grizzly Partners earns \$200,000 of ordinary business income and \$30,000 of long-term capital gain. The capital gain is separately stated, because each partner taxes it at preferential rates and nets it against his or her own capital losses.

Common separately stated items include rental real estate income, interest, dividends, capital gains and losses, §1231 gains and losses, charitable contributions, the §179 deduction, tax-exempt income, foreign taxes paid, and (for partnerships) guaranteed payments and self-employment earnings. Distributions also appear on the K-1, but they are not income; they reduce the owner's basis.

---

## Where K-1 Items Go on Form 1040

| K-1 Item | Where It Is Reported |
|---|---|
| Ordinary business income (loss) | **Schedule E, Part II** |
| Rental real estate income (loss) | **Schedule E, Part II** (passive activity rules apply) |
| Guaranteed payments | **Schedule E, Part II**, and Schedule SE for services |
| Interest income | **Schedule B** |
| Dividends (ordinary and qualified) | **Schedule B** |
| Short-term and long-term capital gains and losses | **Schedule D** |
| §1231 gains and losses | **Form 4797**, then Schedule D if a net gain |
| Charitable contributions | **Schedule A** if itemizing |
| §179 deduction | **Form 4562**, then Schedule E |
| Foreign taxes paid | **Form 1116** (credit) or Schedule A (deduction) |
| Tax-exempt interest | **Form 1040, line 2a** (reported but not taxed) |
| Self-employment earnings | **Schedule SE** |
| QBI information (QBI, W-2 wages, UBIA, SSTB status) | **Form 8995 or 8995-A** for the QBI deduction |

> **Example:** Salmon Entertainment, an S corporation, sends shareholder Dana a K-1 showing \$80,000 of ordinary business income, \$5,000 of qualified dividends, \$12,000 of charitable contributions, and a \$3,000 short-term capital loss. Dana reports the \$80,000 on Schedule E, the dividends on Schedule B, the contributions on Schedule A (if she itemizes), and the capital loss on Schedule D.

:::tip[Exam Tip]

**Tax-exempt income** passed through from an entity keeps its character: it is not taxed, but it **does increase** the owner's basis. Otherwise, the owner would be taxed on it later when selling the interest. Watch for it in basis questions.

:::

The QBI deduction is figured on the owner's return, not the entity's. The K-1 supplies each business's QBI, W-2 wages, and UBIA so the owner can apply the limits described in [Adjustments and Deductions](./adjustments-and-deductions.md). Guaranteed payments to a partner and reasonable compensation paid to an S corporation shareholder are not QBI.

---

## Guaranteed Payments

Under §707(c), a **guaranteed payment** is a payment to a partner for services or for the use of capital that is determined without regard to partnership income.

| Party | Treatment |
|---|---|
| **Partner** | Ordinary income on Schedule E, included in the partner's tax year in which the partnership's year ends; a payment for services is also self-employment income |
| **Partnership** | Deductible in computing ordinary business income (or capitalized, if for a capital item) |

> **Example:** Jordan, a general partner in Grizzly Partners, receives a \$60,000 guaranteed payment for managing the business, and the partnership also allocates Jordan \$40,000 of ordinary income. Jordan reports \$100,000 on Schedule E and owes self-employment tax on the full \$100,000.

Guaranteed payments for services are self-employment income for every partner, including a limited partner, regardless of how much the partner participates. Students often forget this.

---

## Self-Employment Tax by Entity

| Owner | What Is Self-Employment Income |
|---|---|
| **Sole proprietor or owner of a disregarded entity** | All net profit on Schedule C |
| **General partner** | Distributive share of ordinary business income plus guaranteed payments |
| **Limited partner** | Only guaranteed payments for services (§1402(a)(13)) |
| **S corporation shareholder** | None; flow-through income is not SE income, but a shareholder who works for the corporation must receive **reasonable compensation** as W-2 wages subject to payroll taxes |

:::caution

The IRS scrutinizes S corporation shareholder-employees who pay themselves an unreasonably low salary and take the rest as distributions to avoid payroll taxes. If it succeeds, the distributions are recharacterized as wages.

:::

---

## Disregarded Entities on Schedule C

The owner of a single-member LLC (or a sole proprietor) reports the business directly:

| Item | Where Reported |
|---|---|
| Gross receipts | Schedule C, line 1 |
| Cost of goods sold | Schedule C, line 4 |
| Business expenses | Schedule C, Part II |
| Net profit (loss) | Schedule C, line 31, which flows to Schedule 1 |
| Self-employment tax | Schedule SE |

> **Example:** Maria operates her consulting practice as a single-member LLC. She earns \$150,000 of revenue and has \$30,000 of deductible expenses. She reports \$120,000 of net profit on Schedule C and pays self-employment tax on it through Schedule SE.

---

## Timing: Entity Year vs. Owner Year

Partners and S corporation shareholders report their share of entity items in the **owner's tax year in which the entity's tax year ends**.

| Entity Year Ends | Calendar-Year Owner Reports On |
|---|---|
| December 31, 2026 | 2026 return |
| January 31, 2027 (fiscal-year partnership) | 2027 return |

An S corporation generally must use a calendar year. A partnership generally must use the tax year of its majority partners, but it may elect a fiscal year under §444, limited to a three-month deferral and conditioned on a required payment.

---

## Passive Activity Considerations

Each pass-through item is also classified as **passive** or **nonpassive** on the owner's return under §469. Income or loss from a business is passive if the owner does not **materially participate**, and rental activities are generally passive regardless of participation (with an exception for real estate professionals). Passive losses can offset only passive income. See [Loss Limitations](./loss-limitations.md) for the material participation tests and the full ordering of the basis, at-risk, passive, and excess business loss rules.

> **Example:** Taylor owns 30% of Kodiak Inc., an S corporation, but does not work in the business. Taylor's \$25,000 share of its ordinary loss (assuming enough basis and amount at risk) is a **passive loss** that can offset only Taylor's passive income from other sources.

---

## Summary

| Topic | Key Rule |
|---|---|
| Pass-through taxation | The entity generally pays no income tax; owners report their shares |
| Schedule K-1 | Reports each owner's share of ordinary income and separately stated items |
| Separately stated items | Items that can affect owners differently (capital gains, charitable contributions, §179, and so on) |
| Disregarded entities | Reported on the owner's Schedule C, like a sole proprietorship |
| Guaranteed payments | Ordinary income (and SE income, if for services) to the partner; deductible by the partnership |
| SE tax | Sole proprietors and general partners pay it on business income; S corporation flow-through income is exempt |
| QBI | Computed by the owner from K-1 information |
| Timing | Report in the owner's year in which the entity's year ends |
| Passive activities | Material participation decides passive or nonpassive treatment |
