# Gains and Losses

When a taxpayer sells or exchanges property, three questions decide the tax result: **how much** gain or loss there is, what **character** it has (capital or ordinary), and, for capital assets, whether it is **short-term or long-term**. The answers determine the rate on a gain and how much of a loss can be deducted. This chapter takes the questions in that order, applies them to digital assets, and then covers the netting rules for individuals, the exclusion for selling a home, and the losses the Code disallows. Dispositions of business property under Sections 1231, 1245, and 1250, like-kind exchanges, and installment sales are tested in TCP and covered in [Gains and Losses on Asset Disposition](../../tcp/property-transactions/gains-and-losses-on-asset-disposition.md).

---

## Computing Gain or Loss

The basic formula is:

$$\text{Gain or Loss} = \text{Amount Realized} - \text{Adjusted Basis}$$

The **amount realized** is everything the seller receives:

- Cash
- The fair market value (FMV) of any property or services received
- Any debt of the seller that the buyer assumes or takes the property subject to
- Minus selling expenses, such as commissions, legal fees, and transfer taxes

**Adjusted basis** is the seller's cost or other basis, increased by improvements and reduced by depreciation and similar recoveries, as explained in [Determination of Basis](./determination-of-basis.md).

> **Example:** Bear Co. sells a warehouse for \$500,000 cash, and the buyer also assumes Bear Co.'s \$200,000 mortgage. Bear Co. pays \$30,000 of selling costs. It bought the warehouse for \$450,000 and has claimed \$120,000 of depreciation.
>
> - Amount realized = \$500,000 + \$200,000 - \$30,000 = **\$670,000**
> - Adjusted basis = \$450,000 - \$120,000 = **\$330,000**
> - Gain = \$670,000 - \$330,000 = **\$340,000**

A **realized** gain or loss is usually also **recognized**, meaning it is reported in income now. A few nonrecognition rules defer it, such as those for like-kind exchanges of real property and involuntary conversions.

---

## Character: Capital or Ordinary

### Capital Assets

A **capital asset** is defined by exclusion: every asset a taxpayer holds is a capital asset unless §1221 excludes it. Common capital assets include:

- Stocks, bonds, and other investments
- Digital assets held as investments
- Personal-use property, such as a home, car, or furniture
- Land held for investment

### Assets That Are Not Capital

| Excluded Asset | Example |
|---|---|
| Inventory and property held for sale to customers | Merchandise in a store |
| Accounts and notes receivable from sales or services | Amounts customers owe |
| Depreciable property and real property used in a trade or business | Equipment and buildings (these are **§1231 assets**) |
| Copyrights and artistic works held by the person who created them | A novel held by its author |
| Supplies used in a trade or business | Office supplies |

Business property used for more than a year (§1231 property) is not a capital asset, but a net §1231 gain for the year is taxed as a long-term capital gain, while a net §1231 loss is fully deductible as an ordinary loss.

---

## Holding Period

The holding period decides whether a capital gain or loss is **short-term** or **long-term**:

- **Short-term:** held **one year or less**
- **Long-term:** held **more than one year**

The holding period begins the **day after** the property is acquired and includes the day it is sold. Some property takes the holding period of earlier property:

- **Gifts:** the donor's holding period **tacks on** when the donee uses the donor's basis.
- **Wash sales:** the holding period of the shares sold tacks on to the replacement shares.
- **Inherited property:** always **long-term**, however briefly the decedent or the heir held it.

> **Example:** A parent held shares for 3 months before dying, the estate held them for 2 months, and the heir sold them 1 month after receiving them. The heir's gain or loss is **long-term**, even though the combined holding period was only 6 months.

---

## Digital Assets

A **digital asset** is a digital representation of value recorded on a cryptographically secured ledger, such as a blockchain. The term covers cryptocurrency, stablecoins, and non-fungible tokens (NFTs). The 2027 REG blueprint names digital assets, alongside stocks and bonds, as investments whose sale you may need to report.

**Property, not currency.** For federal tax purposes, digital assets are **property**. A digital asset held as an investment is a **capital asset**, so its sale produces a capital gain or loss, long-term if the taxpayer held it for **more than one year**. Basis is generally the cost in U.S. dollars plus fees, tracked wallet by wallet (see [Determination of Basis](./determination-of-basis.md#digital-assets)). An NFT that represents a collectible, such as a piece of art, can be a **collectible** taxed at up to 28%.

**What triggers a gain or loss.** A taxpayer recognizes gain or loss when they:

- **Sell** a digital asset for U.S. dollars or another currency
- **Exchange** one digital asset for another
- **Use** a digital asset to pay for goods or services

Buying a digital asset with dollars, simply holding it, and moving it between one's own wallets or accounts are **not** taxable events. Exchanges of digital assets do not qualify for like-kind treatment, because §1031 applies only to real property. Digital assets received as **payment** for services or as mining or staking rewards are ordinary income at their FMV when received; that amount becomes their basis.

**Reporting.** Brokers, such as custodial trading platforms, report sales of digital assets on **Form 1099-DA**. They report **gross proceeds** for sales on or after January 1, 2025, and also report **basis** for sales on or after January 1, 2026 of assets acquired in the account on or after that date. The taxpayer reports each sale on **Form 8949**, which has separate boxes for transactions reported on Form 1099-DA, and carries the totals to **Schedule D**. Form 1040 also asks every filer whether they received or disposed of any digital asset during the year.

> **Example:** In March 2025, Derek buys 2 units of a cryptocurrency for \$8,000, including fees, so each unit has a \$4,000 basis. In June 2026, he exchanges 1 unit for an NFT worth \$6,500. The exchange is a taxable disposition. Derek has a **long-term** capital gain of \$6,500 - \$4,000 = **\$2,500**, because he held the unit for more than a year. His basis in the NFT is \$6,500, and its holding period starts the day after the exchange.

Under current law, the **wash sale rule** applies only to stock and securities. It does not reach digital assets that are not securities, such as bitcoin, so a loss on selling and quickly rebuying such an asset is not disallowed by §1091.

---

## Capital Gains and Losses of Individuals

### Rates

Short-term capital gains are taxed at **ordinary income rates**. Long-term capital gains are taxed at preferential maximum rates that depend on the kind of gain:

| Maximum Rate | Applies To |
|---|---|
| **0%, 15%, or 20%** | Most long-term capital gains, such as stock held more than a year; the rate depends on taxable income, and the breakpoints are indexed |
| **25%** | Unrecaptured §1250 gain: the part of a gain on depreciable real estate that reflects straight-line depreciation |
| **28%** | Gains on **collectibles** (art, antiques, coins, stamps, and collectible NFTs) and the taxable part of gain on qualified small business stock |

Higher-income taxpayers may also owe the **3.8% net investment income tax** on capital gains and other investment income.

Gain on **qualified small business stock** held by an individual may be partly or fully excluded under §1202. For stock acquired after July 4, 2025, the exclusion is 50% after 3 years, 75% after 4 years, and 100% after 5 years.

### Netting Gains and Losses

Because long-term gains are taxed at different rates, an individual cannot simply add up all gains and losses. Instead, the gains and losses are sorted into groups and netted in a set order.

**Step 1: Net within each group.**

- **Short-term:** assets held one year or less
- **28% group:** long-term gains and losses on collectibles and qualified small business stock
- **25% group:** unrecaptured §1250 gain
- **0/15/20% group:** all other long-term gains and losses

**Step 2: Net across groups.** A net loss in one group offsets net gains in the others, starting with the group taxed at the highest rate. A **net short-term capital loss** offsets the 28% group first, then the 25% group, and then the 0/15/20% group. A net loss in the 28% group offsets the 25% group and then the 0/15/20% group, and a net loss in the 0/15/20% group offsets the 28% group first.

> **Example:** During the year, an individual has:
>
> - A short-term capital loss of \$50,000 on stock
> - A collectibles gain of \$40,000 on a vintage guitar collection
> - A long-term capital gain of \$25,000 on mutual funds held for 3 years
>
> The \$50,000 short-term loss first offsets the entire \$40,000 collectibles gain, which would otherwise be taxed at up to 28%. The remaining \$10,000 offsets the long-term gain, leaving \$25,000 - \$10,000 = \$15,000. The taxpayer reports a **net long-term capital gain of \$15,000**, taxed at the 0%, 15%, or 20% rate.

:::caution[Common Pitfall]

Do not apply the \$3,000 loss deduction until all netting is finished, and do not offset the 0/15/20% group before the 28% group. A net short-term loss always absorbs the most heavily taxed gains first.

:::

### The \$3,000 Loss Limit and Carryforwards

If losses exceed gains after netting, an individual may deduct up to **\$3,000** of the net capital loss against ordinary income each year (**\$1,500** if married filing separately). This amount is fixed by statute. Any unused loss carries forward **indefinitely** and keeps its character as short-term or long-term.

> **Example:** Jamie has \$2,000 of short-term capital gain and \$12,000 of long-term capital loss. Her net capital loss is \$10,000, all long-term. She deducts \$3,000 against ordinary income this year and carries forward a \$7,000 long-term capital loss.

### C Corporations

C corporations follow different rules: their capital gains get no preferential rate, their capital losses can offset only capital gains, and an unused net capital loss is carried back 3 years and forward 5 years as a short-term loss. See [C Corporation](../taxation-of-entities/c-corporation.md#capital-gains-and-losses).

---

## Sale of a Principal Residence (§121)

An individual who sells a **principal residence** may exclude up to **\$250,000** of gain (**\$500,000** on a joint return) if the taxpayer **owned** the home and **used** it as a principal residence for at least **2 of the 5 years** before the sale. The two years of ownership and use need not be the same years or consecutive. For the \$500,000 joint exclusion, either spouse may meet the ownership test, but both must meet the use test. The exclusion is available only once every **2 years**.

> **Example:** Alex and Morgan, who file jointly, bought their home 7 years ago for \$350,000 and have lived in it ever since. They sell it for \$900,000, realizing a \$550,000 gain. They exclude **\$500,000** and report a **\$50,000** long-term capital gain.

A taxpayer who fails the 2-year tests because of a **change in place of employment**, **health**, or **unforeseen circumstances** may claim a **partial exclusion**:

$$\text{Partial Exclusion} = \text{Maximum Exclusion} \times \frac{\text{Months of Qualifying Ownership and Use}}{24}$$

The exclusion applies only to gains. A loss on selling a personal residence is not deductible, because the home is personal-use property.

---

## Disallowed Losses

Several losses are disallowed, either permanently or for now. A helpful mnemonic is **WRaP**: **W**ash sales, **R**elated parties, and **P**ersonal-use property.

### Wash Sales

A **wash sale** occurs when a taxpayer sells stock or securities at a loss and buys **substantially identical** stock or securities within **30 days before or after** the sale, a 61-day window. The loss is **disallowed**, but it is added to the basis of the replacement shares, so the taxpayer recovers it when those shares are sold. The rule applies only to losses, and only to stock and securities (including options to buy them).

> **Example:** On November 10, Sarah sells 100 shares of Grizzly Inc. stock for \$4,000, a \$3,000 loss on her \$7,000 basis. On November 25, she buys 100 shares of Grizzly Inc. for \$4,500.
>
> - The \$3,000 loss is **disallowed**.
> - Her basis in the new shares is \$4,500 + \$3,000 = **\$7,500**.
> - Her holding period for the new shares includes the time she held the old ones.

### Related Party Losses (§267)

A loss on a sale or exchange between **related parties** is disallowed. Related parties include:

- Family members: a spouse, brothers and sisters, ancestors, and lineal descendants (but **not** in-laws, aunts, uncles, nieces, nephews, or cousins)
- An individual and a corporation in which the individual owns, directly or indirectly, more than 50% of the stock
- Other relationships listed in §267(b), such as a trust's grantor and its fiduciary

The buyer takes a cost basis. If the buyer later sells to an unrelated party at a **gain**, the buyer may use the seller's disallowed loss to reduce that gain, but not below zero. The disallowed loss never creates or increases a loss for the buyer.

> **Example:** Marcus sells land to his daughter Priya for \$60,000. His adjusted basis was \$80,000, so he has a \$20,000 loss, which is **disallowed**.
>
> - If Priya later sells the land to an unrelated buyer for \$90,000, her realized gain is \$30,000. She offsets it with Marcus's \$20,000 disallowed loss and reports a **\$10,000 gain**.
> - If she sells for \$65,000 instead, her \$5,000 gain is offset by \$5,000 of the disallowed loss, so she reports **no gain**. The other \$15,000 is lost permanently.

### Personal-Use Property

A loss on selling **personal-use property**, such as a personal residence, car, furniture, or jewelry, is not deductible. A **gain** on the same property is taxable as a capital gain. This asymmetry appears often on the exam.

> **Example:** Taylor sells a personal boat for \$5,000 that cost \$12,000. The \$7,000 loss is **nondeductible**. If Taylor had sold the boat for \$15,000 instead, the \$3,000 gain would be a **taxable capital gain**.
