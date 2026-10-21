# C Corporations

A C corporation is a separate taxpayer. It pays its own tax at a flat 21% rate, and its shareholders pay a second tax when earnings come out as dividends. REG introduces this double taxation; TCP asks what happens in the harder cases: a loss year, a capital loss the corporation cannot use, a shareholder who contributes or receives property instead of cash, a group of corporations filing one return, and income that crosses a border. Most questions here are calculations, so most rules below come with a worked example. The chapter moves from loss carryovers to shareholder transactions, then to consolidated returns and international issues.

The One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) left the 21% rate and the NOL rules unchanged, but it rewrote parts of the international rules for tax years beginning after December 31, 2025. Those changes have been eligible for TCP testing since July 1, 2026.

---

## Net Operating Losses

### Computing the NOL

A corporation has a **net operating loss (NOL)** when its deductions exceed its gross income. You compute the loss year on its own, so NOL carryovers from other years are left out. Two other items behave differently in a loss year:

- The **dividends-received deduction (DRD)** is allowed in full. Its usual taxable income limit does not apply when the full DRD creates or increases an NOL.
- **Charitable contributions** produce no deduction, because the corporate limit is a percentage of taxable income. They carry forward 5 years instead.

A net capital loss never adds to an NOL; it follows the separate capital loss rules below.

> **Example:** In 2026, Bear Co. has \$400,000 of gross income from operations, \$100,000 of dividends from a 30%-owned domestic corporation, and \$560,000 of operating expenses. Before the DRD, Bear Co. has a \$60,000 loss (\$500,000 - \$560,000). The 65% DRD adds \$65,000 of deductions, and because it increases an NOL, the taxable income limit does not cut it back. Bear Co.'s 2026 NOL is **\$125,000**.

### Carryforward and the 80% Limit

For NOLs arising in tax years beginning after 2017, three rules apply:

| Rule | Detail |
|---|---|
| **Carryback** | None, except a 2-year carryback for farming losses (and special rules for some insurance companies) |
| **Carryforward** | Indefinite |
| **Annual limit** | The NOL deduction cannot exceed **80%** of taxable income computed before the NOL deduction |

NOLs from tax years beginning before 2018 follow the old rules: a 2-year carryback, a 20-year carryforward, and no 80% limit. That is why TCP questions about NOLs always give real dates.

> **Example:** Sloth Security carries a \$500,000 NOL from 2025 into 2026, when its taxable income before the NOL deduction is \$400,000. The deduction is limited to 80% × \$400,000 = **\$320,000**. Sloth Security pays tax on \$80,000 (\$16,800 at 21%) and carries the remaining \$180,000 forward to 2027.

### Section 382: NOLs After an Ownership Change

Losses are valuable, so the Code stops a profitable buyer from acquiring a loss corporation just to use its NOLs. Under **§382**, an **ownership change** occurs when the stock ownership of one or more 5% shareholders increases by **more than 50 percentage points** over a **3-year testing period**. After the change, the corporation can use pre-change NOLs each year only up to the **§382 limitation**:

$$\S 382 \text{ limitation} = \text{Value of the loss corporation's stock just before the change} \times \text{Long-term tax-exempt rate}$$

The IRS publishes the long-term tax-exempt rate monthly, and an exam question will give it. Any unused limitation carries forward and increases the next year's limit. If the new owners do not continue the old business (or use a significant part of its assets) for 2 years, the limitation drops to zero.

> **Example:** Polar Inc. has a \$3,000,000 NOL. At the end of 2026, an investor buys 60% of its stock, an ownership change. Polar's stock is worth \$4,000,000 immediately before the change, and the long-term tax-exempt rate is 3.5%. The annual §382 limitation is \$4,000,000 × 3.5% = **\$140,000**. In 2027, Polar earns \$500,000 before the NOL deduction. The 80% limit would allow \$400,000, but §382 caps the pre-change NOL at **\$140,000**, so Polar's taxable income is \$360,000.

---

## Capital Losses

A C corporation's capital losses can offset only capital gains. None of a net capital loss is deductible against ordinary income, but the loss can move to other years.

| Rule | C corporation | Individual (for comparison) |
|---|---|---|
| **Offset** | Capital gains only | Capital gains plus up to \$3,000 of ordinary income |
| **Carryback** | **3 years** | None |
| **Carryforward** | **5 years** | Indefinite |
| **Character in other years** | Always **short-term**, whatever the original character | Keeps its character |

The loss goes to the earliest year first. A carryback cannot create or increase an NOL in the carryback year.

> **Example:** In 2026, Panda Industries has \$200,000 of ordinary income and a \$50,000 net capital loss. None of the loss reduces 2026 income. Panda carries it back to 2023 first, where it had \$20,000 of net capital gain, and claims a refund of \$4,200 (21% × \$20,000). It had no capital gains in 2024 or 2025, so the remaining \$30,000 carries forward as a short-term capital loss to 2027 through 2031.

---

## Transactions Between a Shareholder and the Corporation

### Contributions of Property (§351)

Forming or adding to a corporation is not supposed to be a taxable event when the owners are simply changing the form of their investment. **Section 351** provides that no gain or loss is recognized when one or more persons transfer property to a corporation solely for its stock and the transferors are in **control** immediately afterward. Control means owning at least 80% of the total voting power and at least 80% of the shares of each other class of stock.

If the shareholder also receives **boot** (cash or other property), gain is recognized up to the lesser of the boot or the realized gain. Losses are never recognized.

| Item | Rule |
|---|---|
| **Shareholder's stock basis** | Basis of property transferred - boot received - liabilities assumed by the corporation + gain recognized |
| **Corporation's basis in the property** | Shareholder's basis + gain the shareholder recognized |
| **Loss property** | If the total basis of the transferred property exceeds its total FMV, the corporation's basis is generally limited to FMV (§362(e)(2)), unless the shareholder elects to reduce stock basis instead |

> **Example:** Jordan transfers equipment (FMV \$100,000, adjusted basis \$60,000) to Grizzly Inc. for all of its stock (worth \$85,000) plus \$15,000 cash. Jordan's realized gain is \$100,000 - \$60,000 = \$40,000. Jordan recognizes gain equal to the \$15,000 of boot. Jordan's stock basis is \$60,000 - \$15,000 + \$15,000 = **\$60,000**, and Grizzly's basis in the equipment is \$60,000 + \$15,000 = **\$75,000**.

**Liabilities.** A corporation's assumption of the shareholder's debt is not boot, with two exceptions. Under **§357(c)**, if the total liabilities assumed exceed the total basis of the property transferred, the excess is gain. Under **§357(b)**, if the assumption has no business purpose or is aimed at avoiding tax, the **entire** liability is treated as boot. Either way, the liabilities reduce the shareholder's stock basis.

### Nonliquidating Distributions

A distribution is a dividend only to the extent of the corporation's **earnings and profits (E&P)**, a tax concept that approximates the corporation's economic ability to pay dividends. Each distribution is tested in layers:

| Layer | Treatment to the shareholder |
|---|---|
| **1. Current E&P**, then **accumulated E&P** | **Dividend** (qualified dividend rates for most individual shareholders) |
| **2. Shareholder's stock basis** | **Tax-free return of capital**, reducing basis |
| **3. Any excess** | **Capital gain** (long-term if the stock was held more than 1 year) |

Current E&P is allocated pro rata to all distributions during the year. Accumulated E&P is then applied to distributions in date order.

> **Example:** Bear Co. distributes \$150,000 to its sole shareholder, Dana. Bear Co. has \$90,000 of current and accumulated E&P, and Dana's stock basis is \$40,000. The first \$90,000 is a dividend. The next \$40,000 reduces Dana's basis to zero. The remaining **\$20,000** is capital gain.

**Distributions of property.** When a corporation distributes property instead of cash, it is treated as if it sold the property at fair market value (FMV). It recognizes **gain** on appreciated property (§311(b)) but **no loss** on property that has declined in value. If the property is subject to a liability, its FMV is treated as no less than the liability. On the shareholder's side:

- The **amount distributed** is the property's FMV minus any liability the shareholder assumes.
- The shareholder's **basis** in the property is its full **FMV**.
- The corporation's E&P increases by the recognized gain and decreases by the amount distributed.

> **Example:** Panda Industries distributes land (FMV \$80,000, adjusted basis \$30,000, subject to a \$10,000 mortgage that the shareholder assumes) to its shareholder, Alex. Panda recognizes a **\$50,000** gain. Alex receives a distribution of \$80,000 - \$10,000 = **\$70,000**, a dividend to the extent of Panda's E&P. Alex's basis in the land is **\$80,000**.

### Liquidating Distributions

In a complete liquidation, the corporation distributes everything it owns and goes out of existence. Both sides are treated as if a sale took place:

| Party | Treatment |
|---|---|
| **Corporation (§336)** | Recognizes gain **and loss** as if it sold each asset at FMV |
| **Shareholder (§331)** | Treats the distribution as payment for the stock: **capital gain or loss** equal to the FMV received minus stock basis |
| **Shareholder's basis in property received** | **FMV** |

Losses are limited in two situations. No loss is allowed on a distribution to a **related shareholder** (one owning more than 50%) if the distribution is not pro rata or the property was acquired in a §351 transfer or capital contribution during the previous 5 years. And built-in loss on property contributed to the corporation to generate a loss on liquidation is disallowed.

> **Example:** Bear Co. liquidates. It distributes land (FMV \$200,000, basis \$120,000) and equipment it bought years ago (FMV \$50,000, basis \$70,000) to its sole shareholder, Dana, whose stock basis is \$100,000. Bear Co. recognizes an \$80,000 gain on the land and a \$20,000 loss on the equipment (the distribution is pro rata, and the equipment was not recently contributed). Dana recognizes a capital gain of \$250,000 - \$100,000 = **\$150,000** and takes FMV bases of \$200,000 and \$50,000.

**Liquidating a subsidiary (§332).** When a parent corporation owns at least 80% of a subsidiary's voting power and value, the liquidation is tax-free to both. The parent recognizes no gain or loss on its stock, the subsidiary recognizes none on the distributions to the parent (§337), and the parent takes a **carryover basis** in the assets along with the subsidiary's tax attributes, such as its NOLs and E&P.

### Loans Between a Corporation and Its Shareholders

A loan between a corporation and its shareholder is respected only if it looks like real debt. The two issues on the exam are below-market interest and debt that is really equity.

**Below-market loans (§7872).** If a corporation lends to a shareholder at no interest or a rate below the applicable federal rate (AFR), the law treats the forgone interest as if it were paid. The corporation is deemed to pay that amount to the shareholder (as a **dividend** to a shareholder, or as **compensation** to a shareholder-employee), and the shareholder is deemed to pay it back as **interest**. Loans that total \$10,000 or less are exempt unless tax avoidance is a principal purpose.

> **Example:** Bear Co. lends its shareholder Dana \$200,000 interest-free, payable on demand. The AFR is 4%, so the forgone interest for the year is \$8,000. Bear Co. reports \$8,000 of interest income and is treated as paying Dana an \$8,000 dividend, which it cannot deduct. Dana reports an \$8,000 dividend (to the extent of E&P) and is treated as paying \$8,000 of interest, deductible only if it qualifies under the normal rules (for example, as investment interest).

**Debt or equity?** When a shareholder lends to the corporation, the IRS may treat the "loan" as a capital contribution. Interest payments then become nondeductible dividends, and repayments become distributions. Facts that support real debt include a written note with a fixed maturity date, a reasonable stated interest rate, a repayment schedule that is followed, terms an outside lender would accept, and a debt-to-equity ratio that is not excessive (a corporation with very little equity is called **thinly capitalized**).

---

## Consolidated Tax Returns

### Who Can File

An **affiliated group** may elect to file one consolidated Form 1120 in place of separate returns. The main advantage is that one member's losses offset another member's income.

| Requirement | Detail |
|---|---|
| **Common parent** | Must directly own at least 80% of the voting power **and** 80% of the value of at least one includible corporation |
| **Other members** | Each must be at least 80% owned (vote and value) by the parent or other members |
| **Not includible** | Tax-exempt organizations, foreign corporations, S corporations, REITs, RICs, and certain insurance companies |
| **Election** | Every member must consent in the first consolidated year; the group must then keep filing consolidated returns unless the IRS permits otherwise |

### Computing Consolidated Taxable Income

Start with each member's separate taxable income, then make two kinds of adjustments. First, **intercompany transactions** are adjusted so the group is taxed as if it were one corporation. Second, certain items are computed **for the group as a whole**: capital gains and losses, §1231 gains and losses, charitable contributions, and NOLs.

| Intercompany item | Treatment |
|---|---|
| **Sale of inventory** | Profit is **deferred** until the buyer resells to an outsider |
| **Sale of depreciable property** | Gain is deferred and taken into income as the buyer depreciates the property (or sells it outside the group) |
| **Dividends** | **Eliminated** |
| **Interest** | Income to the lender and expense to the borrower offset each other |

> **Example:** Bear Co. owns 100% of Cub Supply, and they file a consolidated return. Bear Co.'s separate taxable income is \$400,000, which includes \$50,000 of profit on inventory it sold to Cub Supply for \$200,000 (cost \$150,000). By year-end, Cub Supply has resold 60% of that inventory to outside customers. Cub Supply's separate return shows an \$80,000 loss. Bear Co. defers the profit on the 40% still in the group, \$20,000. Consolidated taxable income is \$400,000 - \$80,000 - \$20,000 = **\$300,000**.

:::tip[Exam Tip]

Intercompany profit is deferred, not eliminated forever. When the buying member sells to an outsider, or depreciates the asset, the deferred amount comes back into consolidated income.

:::

---

## International Tax Issues

The TCP blueprint tests general concepts of sourcing and allocating income, not specific foreign laws or treaties. Four ideas carry most questions: where income comes from, how a foreign corporation with U.S. income is taxed, how a U.S. corporation is taxed on a controlled foreign corporation, and how the foreign tax credit is limited.

### Sourcing of Income

The **source** of income decides which country has the first claim to tax it. A U.S. corporation is taxed on its worldwide income, so for it sourcing matters mainly for the foreign tax credit limitation. For a foreign corporation, sourcing decides whether the United States can tax the income at all.

| Income type | Source |
|---|---|
| **Compensation for services** | Where the services are **performed** |
| **Rents and royalties** | Where the property is **located or used** |
| **Interest** | **Residence** of the payer |
| **Dividends** | **Country of incorporation** of the paying corporation |
| **Purchased inventory** | Where **title passes** |
| **Inventory the seller produces** | Where the **production** takes place |
| **Other personal property** | Generally the **residence** of the seller |

### A Foreign Corporation With U.S. Operations

A foreign corporation pays U.S. tax on two kinds of U.S. income, and in different ways:

| Income | How it is taxed |
|---|---|
| **Effectively connected income (ECI)**, from a U.S. trade or business | Net basis at the regular **21%** rate, plus a **30% branch profits tax** on earnings the U.S. branch does not reinvest (a treaty may reduce it) |
| **Fixed, determinable, annual, or periodic (FDAP) income** that is not ECI, such as dividends, interest, rents, and royalties | **30%** of the gross amount, collected through withholding by the U.S. payer (a treaty may reduce the rate) |

Under most treaties, a foreign corporation's business profits are taxable in the United States only if they are attributable to a **permanent establishment (PE)**. A PE is a fixed place of business through which the enterprise carries on business, such as an office, branch, factory, or workshop. A construction site that lasts longer than a period set by the treaty, or a dependent agent who habitually concludes contracts in the corporation's name, also creates one. Activities that are only preparatory or auxiliary, such as storing goods, displaying them, or purchasing, generally do not.

### A U.S. Corporation With Foreign Operations: Branch or Subsidiary

A U.S. corporation can operate abroad through a **branch** (an unincorporated office of the U.S. company) or a **subsidiary** (a foreign corporation it owns). The choice changes when the income is taxed in the United States.

| Feature | Foreign branch | Foreign subsidiary |
|---|---|---|
| **Legal status** | Part of the U.S. corporation | Separate foreign corporation |
| **U.S. tax on earnings** | Included on the U.S. return as earned | Not taxed as earned, except for Subpart F income and net CFC tested income (below) |
| **Losses** | Reduce U.S. taxable income currently | Stay in the subsidiary |
| **Foreign tax credit** | Direct credit for foreign taxes the branch pays | Deemed-paid credit only for taxes tied to Subpart F and net CFC tested income inclusions |
| **Actual dividends to the U.S. parent** | Not applicable | Foreign-source portion generally eligible for a **100% DRD** (§245A) if the parent owns at least 10% |

> **Example:** Cub Entertainment operates in Country X through a branch that earns \$1,000,000 and pays \$150,000 of Country X tax. Cub includes the \$1,000,000 on its U.S. return and claims a foreign tax credit for the \$150,000, subject to the limitation below. If Cub had used a subsidiary instead, the \$1,000,000 would not appear on Cub's return as earned. Cub would include only its share of any Subpart F income and net CFC tested income, and a later dividend would generally qualify for the 100% DRD.

### Controlled Foreign Corporations

A **controlled foreign corporation (CFC)** is a foreign corporation in which **U.S. shareholders** together own more than **50%** of the vote or value. A U.S. shareholder is a U.S. person owning at least **10%** of the vote or value. Two regimes make a U.S. shareholder include a CFC's income currently, whether or not the CFC pays a dividend:

- **Subpart F income** is mainly passive and easily moved income, such as dividends, interest, rents, and royalties, plus certain sales and services income from related-party deals.
- **Net CFC tested income (NCTI)** picks up most of the CFC's remaining income. OBBBA renamed this inclusion (formerly global intangible low-taxed income, or GILTI) for tax years beginning after December 31, 2025, and repealed the old exclusion for a deemed 10% return on the CFC's tangible assets. A domestic C corporation deducts **40%** of its NCTI inclusion under §250, and it may credit **90%** of the foreign taxes tied to the inclusion.

> **Example:** Bear Co. owns 100% of Bear GmbH, a CFC that earns \$1,000,000 of tested income and, to keep things simple, pays no foreign tax. Bear Co. includes \$1,000,000 of NCTI, deducts 40% (\$400,000), and pays 21% × \$600,000 = **\$126,000**, an effective rate of 12.6%. When Bear GmbH later distributes those earnings, they are previously taxed and are not taxed again. If Bear GmbH had paid foreign tax, Bear Co. would also include the tax as a §78 gross-up and claim a credit for 90% of it.

OBBBA also renamed the related deduction for export income. A domestic C corporation that sells property or services to foreign customers deducts 33.34% of its **foreign-derived deduction eligible income (FDDEI)**, formerly called foreign-derived intangible income (FDII), for an effective rate of about 14%.

### The Foreign Tax Credit Limitation

A U.S. corporation can credit foreign income taxes against its U.S. tax, but only up to the U.S. tax on its foreign-source income. Otherwise high foreign taxes would reduce U.S. tax on U.S. income.

$$\text{FTC limitation} = \text{U.S. tax before credit} \times \frac{\text{Foreign-source taxable income}}{\text{Worldwide taxable income}}$$

The limitation is computed separately for each category (basket) of income, such as passive income, general income, and NCTI. Excess credits carry back 1 year and forward 10 years, except that NCTI-basket credits cannot be carried at all. To find foreign-source taxable income, subtract from foreign-source gross income the expenses directly related to it plus a share of the expenses that relate to all income.

> **Example:** Bear Co. has \$3,000,000 of U.S.-source gross income and \$1,000,000 of foreign-source gross income. Expenses directly related to each are \$2,000,000 and \$400,000. Shared overhead of \$600,000 is apportioned by gross income: 25%, or \$150,000, to foreign sources.
>
> - Foreign-source taxable income: \$1,000,000 - \$400,000 - \$150,000 = **\$450,000**
> - U.S.-source taxable income: \$3,000,000 - \$2,000,000 - \$450,000 = **\$550,000**
> - U.S. tax before credit: 21% × \$1,000,000 = \$210,000
> - FTC limitation: \$210,000 × \$450,000 / \$1,000,000 = **\$94,500**
>
> Bear Co. paid \$120,000 of foreign tax, so it credits \$94,500 and carries the other \$25,500 back 1 year or forward 10. Its net U.S. tax of \$115,500 equals 21% of its U.S.-source income, which is the limitation working as intended.

---

## Summary

| Topic | Key rule |
|---|---|
| NOL computation | Full DRD allowed; no charitable deduction; no capital loss |
| NOL carryover (post-2017) | No carryback (except farming); indefinite carryforward; deduction limited to 80% of taxable income |
| §382 | After a more-than-50-point ownership change, annual use of pre-change NOLs is limited to stock value × long-term tax-exempt rate |
| Capital losses | Offset capital gains only; 3-year carryback and 5-year carryforward, always as short-term |
| §351 contributions | No gain or loss with 80% control; gain to the extent of boot; liabilities over basis are gain (§357(c)) |
| Nonliquidating distributions | Dividend to the extent of E&P, then return of basis, then capital gain; corporation recognizes gain (not loss) on property; shareholder takes FMV basis |
| Liquidations | Corporation recognizes gain and loss (with related-party loss limits); shareholder has capital gain or loss; §332 makes an 80% subsidiary's liquidation tax-free |
| Shareholder loans | Below-market loans impute interest (§7872); loans without real debt features may be treated as equity |
| Consolidated returns | 80% vote and value; defer intercompany gains, eliminate intercompany dividends |
| Sourcing | Services where performed; interest by payer's residence; dividends by payer's country; produced inventory where produced |
| Foreign corporations | ECI taxed at 21% plus branch profits tax; FDAP withheld at 30% unless a treaty reduces it |
| CFCs | U.S. shareholders include Subpart F income and NCTI (formerly GILTI) currently; 40% §250 deduction and 90% deemed-paid credit for NCTI |
| Foreign tax credit | Limited to U.S. tax × foreign-source income / worldwide income, by basket; 1-year back, 10-year forward |
