# Gains and Losses on Asset Disposition

## Introduction

Selling a business asset raises two questions: how much gain or loss, and what kind. The amount is the familiar amount realized minus adjusted basis. The character is where TCP goes beyond REG. Gain on depreciable property can be partly ordinary income (depreciation recapture), partly gain taxed at a maximum 25% rate, and partly long-term capital gain, while losses on the same kind of property can be fully ordinary.

This chapter builds the character analysis in the order you apply it: Section 1231, recapture under Sections 1245 and 1250, unrecaptured Section 1250 gain, and then the netting and lookback steps that finish the job. It then covers small business stock under Sections 1244 and 1202, installment sales, and how to review a client's schedule of asset dispositions.

---

## Three Kinds of Property

Every asset falls into one of three groups, and the group sets the starting point for character:

| Group | Examples | Character of Gain or Loss |
|---|---|---|
| **Capital assets** | Investment stocks and bonds, investment land, personal-use property | Capital; long-term if held more than 1 year |
| **Section 1231 property** | Depreciable property and land used in a trade or business and held more than 1 year | Net gain is long-term capital gain; net loss is ordinary (after recapture) |
| **Ordinary assets** | Inventory, accounts receivable, business property held 1 year or less | Ordinary |

**Digital assets**, such as cryptocurrency, stablecoins, and NFTs, are property, not currency. Held for investment, they are capital assets. Basis is the cost in dollars plus fees, a holding period of more than one year gives long-term treatment, and trading one digital asset for another or using one to buy goods is a taxable disposition. An NFT that represents a collectible, such as artwork, can be taxed at the 28% collectibles rate. Brokers report sales on Form 1099-DA starting with 2025 sales, and since January 1, 2025, basis must be tracked separately for each wallet or account.

---

## Section 1231: Trade or Business Property

### What Qualifies

**Section 1231 property** is depreciable property and real property used in a trade or business and held for **more than one year**. It also includes involuntary conversions of business property and of capital assets held in connection with a business.

| Qualifies as §1231 Property | Does Not Qualify |
|---|---|
| Machinery and equipment used in business (held > 1 year) | Inventory or property held for sale to customers |
| Buildings and land used in business (held > 1 year) | Personal-use property (home, personal car) |
| Timber, coal, and iron ore (under the applicable rules) | Securities and investment assets (capital assets) |
| Unharvested crops sold with the land | Business property held 1 year or less (ordinary) |
| Livestock held for draft, breeding, dairy, or sporting purposes (with required holding periods) | Copyrights and artistic works held by their creator |

### The §1231 Netting Process

Section 1231 property is technically excluded from the definition of a capital asset, but it gets the better of both treatments. At year end, all §1231 gains and losses (after recapture) are netted:

- A **net §1231 gain** is treated as **long-term capital gain**, taxed at preferential rates.
- A **net §1231 loss** is an **ordinary loss**, fully deductible with no \$3,000 capital loss limit.

Casualty and theft gains and losses on business property held more than a year are netted among themselves first. If the casualty losses exceed the casualty gains, they are ordinary and stay out of §1231; otherwise they join the main netting.

> **Example:** Avery, a sole proprietor, sells two business assets held more than one year: land used as a parking lot, at a \$200,000 gain, and a delivery truck for \$8,000, less than its \$25,000 adjusted basis, at a \$17,000 loss. (A sale at a loss has no depreciation recapture.) Avery's net §1231 gain is \$200,000 - \$17,000 = \$183,000, treated as long-term capital gain unless the lookback rule applies.

### The §1231 Lookback Rule

Without a limit, a taxpayer could sell loss assets in one year for ordinary losses and gain assets the next year for capital gains. The **lookback rule** closes that gap. A current net §1231 gain is **ordinary income** to the extent of **nonrecaptured net §1231 losses** from the **prior 5 years**, meaning losses deducted as ordinary in those years that have not already been recaptured.

> **Example:** Bear Co. reported these §1231 results:
>
> | Year | Net §1231 Result | Treatment |
> |---|---|---|
> | Year 1 | (\$30,000) | Ordinary loss |
> | Year 2 | (\$10,000) | Ordinary loss |
> | Year 3 | \$0 | None |
> | Year 4 | \$15,000 | Ordinary income (lookback recapture of \$15,000) |
> | Year 5 | \$0 | None |
> | Year 6 (current) | \$50,000 | See below |
>
> Nonrecaptured losses from Years 1 through 5: \$30,000 + \$10,000 - \$15,000 = **\$25,000**. Of the \$50,000 net §1231 gain in Year 6, **\$25,000** is ordinary income and **\$25,000** is long-term capital gain.

:::caution

The lookback rule is easy to overlook. Before you call a net §1231 gain capital, always check for nonrecaptured §1231 losses in the prior 5 years.

:::

---

## Section 1245 Depreciation Recapture

### The Rule

Depreciation reduces ordinary income while the asset is used. If the asset is then sold at a gain, that gain exists largely because of the depreciation. **Section 1245** prevents the taxpayer from converting ordinary deductions into capital gain: gain is ordinary income to the extent of **all** depreciation and amortization taken.

Section 1245 property includes:

- **Tangible personal property** used in a business: machinery, equipment, vehicles, furniture, and computers
- **Amortizable §197 intangibles**, such as patents, customer lists, and purchased goodwill
- **Single-purpose agricultural and horticultural structures**
- **Qualified production property**: the part of a new factory building expensed under OBBBA's 100% election for production property is treated as §1245 property, so the expensed amount is recaptured as ordinary income

$$
\text{\S 1245 Ordinary Income} = \min(\text{Gain Realized},\ \text{Total Depreciation Taken})
$$

Any gain **above** total depreciation is §1231 gain and joins the §1231 netting.

> **Example:** Polar Inc. bought equipment for \$120,000 and claimed \$45,000 of depreciation, leaving an adjusted basis of \$75,000.
>
> | Sale Price | Gain | §1245 Ordinary Income | §1231 Gain |
> |---|---|---|---|
> | \$100,000 | \$25,000 | \$25,000 (all of it, because gain is less than depreciation) | \$0 |
> | \$140,000 | \$65,000 | \$45,000 (limited to depreciation) | \$20,000 |

Recapture applies to **all** depreciation, whatever the method, and that includes **bonus depreciation** and **§179 expensing**. With 100% bonus depreciation now permanent for property acquired after January 19, 2025, this matters often. If Polar Inc. expenses an \$80,000 machine in full and later sells it for \$50,000, the entire \$50,000 gain is ordinary income.

### Sale at a Loss

Recapture can never create or increase a loss. If §1245 property is sold at a loss, there is nothing to recapture, and the loss is a §1231 loss.

> **Example:** Jordan sells office furniture that cost \$30,000, with \$22,000 of accumulated depreciation (adjusted basis \$8,000), for \$5,000. The \$3,000 loss is a §1231 loss, and there is no recapture.

---

## Section 1250 Depreciation Recapture (Real Property)

### The Rule

**Section 1250** applies to depreciable real property: buildings and their structural components. It is gentler than §1245. It recaptures as ordinary income only **excess depreciation**, the amount by which accelerated depreciation exceeded what straight-line depreciation would have been.

$$
\text{\S 1250 Ordinary Income} = \min(\text{Gain Realized},\ \text{Excess Depreciation})
$$

$$
\text{Excess Depreciation} = \text{Depreciation Taken} - \text{Straight-Line Depreciation}
$$

Since 1987, residential rental property (27.5 years) and nonresidential real property (39 years) must be depreciated straight-line. With no accelerated depreciation, excess depreciation is zero, so **§1250 recapture is usually zero for buildings placed in service after 1986**. You will see it mainly for older buildings that used accelerated methods.

> **Example:** Morgan bought an apartment building in 1985 for \$500,000 (excluding land) and used accelerated depreciation, claiming \$320,000. Straight-line depreciation would have been \$280,000. Morgan sells the building for \$400,000.
>
> - Adjusted basis = \$500,000 - \$320,000 = **\$180,000**
> - Gain = \$400,000 - \$180,000 = **\$220,000**
> - Excess depreciation = \$320,000 - \$280,000 = **\$40,000**, which is §1250 ordinary income
> - The remaining **\$180,000** is §1231 gain, all of it unrecaptured §1250 gain (explained next), because it is less than the \$280,000 of straight-line depreciation

### Corporations: The §291 Add-On

C corporations get no capital gain rate preference, so the 25% rate discussed next does not apply to them. Instead, **§291** makes a corporation treat **20%** of the depreciation-related gain on real property as ordinary income: 20% of the lesser of the gain or the straight-line depreciation (more precisely, of the excess of what §1245 would have recaptured over the §1250 recapture). The rest is §1231 gain.

---

## Unrecaptured Section 1250 Gain

### The Rule

After any §1250 recapture, the rest of the gain on a building is §1231 gain. For individuals, and for partners and S corporation shareholders who receive their share of it, the part of that gain attributable to depreciation is **unrecaptured §1250 gain**, taxed at a **maximum rate of 25%** rather than 0%, 15%, or 20%.

$$
\text{Unrecaptured \S 1250 Gain} = \min(\text{Gain},\ \text{Total Depreciation}) - \text{\S 1250 Ordinary Income}
$$

For a post-1986 building, §1250 recapture is zero, so unrecaptured §1250 gain is simply the lesser of the gain or the depreciation taken.

Unrecaptured §1250 gain is **still §1231 gain**. It enters the §1231 netting with everything else, and the 25% rate matters only if the netting produces a net gain. When it does, the 25% portion cannot exceed the net §1231 gain, and any lookback recapture comes out of the 25% portion first.

| Layer of Gain on a Building | Character | Maximum Rate |
|---|---|---|
| **1. §1250 recapture** (excess depreciation) | Ordinary income | Ordinary rates |
| **2. Unrecaptured §1250 gain** (rest of the depreciation) | §1231 gain; long-term capital gain if the netting produces a net gain | 25% |
| **3. Remaining gain** (appreciation above original cost) | §1231 gain; long-term capital gain if the netting produces a net gain | 0%, 15%, or 20% |

> **Example:** Riley bought a commercial building in 2005 for \$800,000 (excluding land) and claimed \$250,000 of straight-line depreciation. Riley sells it for \$900,000.
>
> - Adjusted basis = \$800,000 - \$250,000 = **\$550,000**
> - Gain = \$900,000 - \$550,000 = **\$350,000**
> - §1250 recapture = **\$0** (straight-line)
> - Unrecaptured §1250 gain = min(\$350,000, \$250,000) = **\$250,000**, at a maximum 25%
> - Remaining gain = **\$100,000**, at 0%, 15%, or 20%
>
> All \$350,000 is §1231 gain. If Riley has no other §1231 transactions and no prior §1231 losses, \$250,000 is taxed at up to 25% and \$100,000 at the regular capital gain rates. If Grizzly Inc., a C corporation, had sold the same building, §291 would make 20% × \$250,000 = \$50,000 ordinary income, and the other \$300,000 would be §1231 gain.

:::tip[Exam Tip]

For post-1986 buildings, §1250 recapture is almost always zero, so the real issue is **unrecaptured §1250 gain**: the depreciation taken, capped at the gain, taxed at up to 25% for individuals. For corporations, think §291 instead.

:::

---

## Putting It Together: The Order of Operations

When a taxpayer sells business property during the year, characterize the results in this order:

1. **Compute the gain or loss** on each asset.
2. **Apply recapture** to each asset sold at a gain: §1245 (all depreciation), §1250 (excess depreciation), and, for corporations, §291. Recapture is ordinary income.
3. **Treat the rest as §1231 gain or loss** for business property held more than one year. For buildings sold by noncorporate taxpayers, note how much of the §1231 gain is unrecaptured §1250 gain.
4. **Net all §1231 gains and losses.** A net loss is ordinary, and you are done.
5. **Apply the lookback rule** to a net gain: it is ordinary income to the extent of nonrecaptured net §1231 losses from the prior 5 years.
6. **Tax the rest as long-term capital gain.** The 25% portion is the unrecaptured §1250 gain, limited to the net §1231 gain and reduced first by any lookback recapture. The balance is taxed at 0%, 15%, or 20%.

> **Example:** Dana, a sole proprietor, sells three business assets this year, all held more than one year. Dana has \$20,000 of nonrecaptured net §1231 losses from two years ago.
>
> | Asset | Type | Cost | Depreciation | Adjusted Basis | Sale Price | Gain (Loss) |
> |---|---|---|---|---|---|---|
> | Equipment | §1245 | \$200,000 | \$80,000 | \$120,000 | \$185,000 | \$65,000 |
> | Building | §1250, post-1986 | \$500,000 | \$150,000 | \$350,000 | \$575,000 | \$225,000 |
> | Land | §1231 | \$100,000 | \$0 | \$100,000 | \$70,000 | (\$30,000) |
>
> **Step 1, recapture.** The equipment's \$65,000 gain is less than its \$80,000 of depreciation, so all \$65,000 is §1245 ordinary income. The building used straight-line depreciation, so it has no §1250 recapture.
>
> **Step 2, §1231 gains and losses.** The building's entire \$225,000 gain is §1231 gain, of which \$150,000 (the depreciation taken) is unrecaptured §1250 gain. The land produces a \$30,000 §1231 loss.
>
> **Step 3, netting.** \$225,000 - \$30,000 = \$195,000 net §1231 gain.
>
> **Step 4, lookback.** \$20,000 of the net gain is ordinary income. The remaining \$175,000 is long-term capital gain.
>
> **Step 5, rate layers.** The 25% portion is \$150,000 (less than the \$195,000 net gain) minus the \$20,000 lookback, or \$130,000. The other \$45,000 is taxed at 0%, 15%, or 20%.
>
> | Component | Amount | Character |
> |---|---|---|
> | §1245 recapture | \$65,000 | Ordinary income |
> | §1231 lookback recapture | \$20,000 | Ordinary income |
> | Unrecaptured §1250 gain | \$130,000 | Long-term capital gain, maximum 25% |
> | Other net §1231 gain | \$45,000 | Long-term capital gain, 0%, 15%, or 20% |
> | **Total** | **\$260,000** | Equals \$65,000 + \$225,000 - \$30,000 |
>
> The prior \$20,000 of §1231 losses is now fully recaptured, so none carries into future lookback years.

---

## Section 1244 Small Business Stock

### The Rule

Investors in a small corporation that fails would normally have a capital loss, usable only against capital gains plus \$3,000 a year. **Section 1244** turns that loss into an **ordinary loss**, up to an annual limit, so it can offset salary and other ordinary income right away.

| Requirement | Detail |
|---|---|
| **Issuing corporation** | A domestic corporation (C or S) |
| **Capitalization limit** | Total money and property the corporation received for stock, as of the time the stock is issued, did not exceed **\$1,000,000** |
| **Consideration** | Issued for money or property, **not services** (and not in exchange for other stock or securities) |
| **Original holder** | Only an individual (or a partnership) who acquired the stock **directly from the corporation** qualifies; later buyers do not |
| **Active business** | For the 5 years before the loss (or the corporation's life, if shorter), more than **50%** of gross receipts came from sources other than passive income such as rents, royalties, dividends, and interest |

| Filing Status | Maximum Ordinary Loss Per Year |
|---|---|
| Single, head of household, or married filing separately | **\$50,000** |
| Married filing jointly | **\$100,000** |

These amounts are fixed in the statute. Any loss above the annual limit is a capital loss.

> **Example:** Alex, who is single, bought 1,000 shares of qualifying §1244 stock directly from Honey Entertainment Inc. for \$80,000 and later sells all of it for \$15,000.
>
> - Loss = \$15,000 - \$80,000 = **(\$65,000)**
> - §1244 ordinary loss = **\$50,000** (single limit)
> - Capital loss = **\$15,000** (long-term, assuming Alex held the shares more than 1 year)
>
> Alex deducts the \$50,000 against ordinary income. The \$15,000 capital loss offsets capital gains first, then up to \$3,000 of ordinary income, with any rest carried forward.

If Sam and Priya, who file jointly, had invested \$40,000 each in §1244 stock that became worthless, their entire \$80,000 loss would be ordinary, because it is within the \$100,000 joint limit.

:::caution

Watch for facts that knock out §1244: stock received for **services**, a corporation whose capitalization exceeded \$1,000,000 when the stock was issued, or shares **bought from another shareholder** rather than from the corporation.

:::

---

## Section 1202 Qualified Small Business Stock

Section 1244 helps when a small business fails. **Section 1202** helps when it succeeds. A noncorporate taxpayer who sells **qualified small business stock (QSBS)** can exclude some or all of the gain. QSBS is stock of a domestic C corporation acquired at original issuance for money, property, or services, where the corporation's gross assets did not exceed a limit when the stock was issued and at least 80% of its assets are used in an active qualified business. Most service businesses, such as health, law, accounting, and consulting, cannot qualify.

OBBBA expanded the exclusion for stock acquired after July 4, 2025. These changes have been eligible for testing since July 1, 2026.

| Rule | Stock Acquired After July 4, 2025 | Older Stock |
|---|---|---|
| **Exclusion** | 50% if held at least 3 years, 75% at 4 years, 100% at 5 years or more | Requires more than 5 years; the percentage depends on when the stock was acquired (100% for stock acquired after September 27, 2010) |
| **Per-issuer gain cap** | Greater of \$15,000,000 (indexed after 2026) or 10 times basis | Greater of \$10,000,000 or 10 times basis |
| **Gross assets limit at issuance** | \$75,000,000 (indexed after 2026) | \$50,000,000 |

The excluded gain on the newer stock is not an AMT preference. The part of a gain that is not excluded is taxed at a maximum 28% rate.

> **Example:** Casey buys newly issued QSBS from Salmon Entertainment Inc. in September 2025 for \$1,000,000 and sells it in October 2029, more than 4 years but less than 5 years later, for \$5,000,000. Of the \$4,000,000 gain, 75% (\$3,000,000) is excluded, and the remaining \$1,000,000 is taxed at a maximum 28%. Had Casey held the stock until September 2030, the entire gain would have been excluded.

---

## Installment Sales (IRC §453)

### The Rule

An **installment sale** is a sale of property in which at least one payment is received after the year of sale. The installment method matches tax to cash: the seller recognizes gain **in proportion to the payments received**, rather than all in the year of sale. It applies automatically unless the seller elects out.

$$
\text{Gross Profit} = \text{Selling Price} - \text{Adjusted Basis} - \text{Selling Expenses}
$$

$$
\text{Contract Price} = \text{Selling Price} - \text{Mortgage Assumed by Buyer} + \text{Excess of Mortgage over Basis}
$$

$$
\text{Gross Profit Percentage} = \frac{\text{Gross Profit}}{\text{Contract Price}}
$$

$$
\text{Gain Recognized in a Year} = \text{Payments Received} \times \text{Gross Profit Percentage}
$$

A mortgage the buyer assumes is not a payment, except for any part that exceeds the seller's basis (plus selling expenses). That excess is treated as a payment received in the year of sale.

### Basic Installment Sale

> **Example:** Taylor sells investment land with an adjusted basis of \$60,000 for \$200,000. The buyer pays \$40,000 at closing and \$40,000 a year for the next 4 years. There are no selling expenses.
>
> - Gross profit = \$200,000 - \$60,000 = \$140,000
> - Contract price = \$200,000 (no mortgage)
> - Gross profit percentage = \$140,000 ÷ \$200,000 = **70%**
>
> Taylor recognizes \$40,000 × 70% = **\$28,000** of gain in each of the 5 years, \$140,000 in total.

### Installment Sale with a Mortgage

> **Example:** Panda Industries sells a commercial building with an adjusted basis of \$200,000 for \$500,000. The buyer assumes Panda's \$150,000 mortgage, pays \$50,000 at closing, and pays the remaining \$300,000 at \$100,000 a year for 3 years.
>
> - The mortgage (\$150,000) does not exceed basis (\$200,000), so none of it is a payment.
> - Gross profit = \$500,000 - \$200,000 = **\$300,000**
> - Contract price = \$500,000 - \$150,000 = **\$350,000**
> - Gross profit percentage = \$300,000 ÷ \$350,000 = **85.71%** (6/7)
>
> | Year | Payment | Gain Recognized |
> |---|---|---|
> | Year 1 (closing) | \$50,000 | \$42,857 |
> | Year 2 | \$100,000 | \$85,714 |
> | Year 3 | \$100,000 | \$85,714 |
> | Year 4 | \$100,000 | \$85,714 |
> | **Total** | **\$350,000** | **\$300,000** (after rounding) |

### Mortgage Exceeding Basis

> **Example:** Cub Entertainment sells property with an adjusted basis of \$180,000 for \$400,000, and the buyer assumes Cub's \$250,000 mortgage.
>
> - Excess of mortgage over basis = \$250,000 - \$180,000 = **\$70,000**, treated as a Year 1 payment
> - Gross profit = \$400,000 - \$180,000 = **\$220,000**
> - Contract price = \$400,000 - \$250,000 + \$70,000 = **\$220,000**
> - Gross profit percentage = \$220,000 ÷ \$220,000 = **100%**
>
> Every dollar Cub receives, including the \$70,000 deemed payment, is gain.

### Depreciation Recapture Is Never Deferred

All §1245 and §1250 recapture is recognized **in the year of sale**, even if no cash is received that year. Only the gain above the recapture can be spread over the payments. The recapture is added to basis when computing the gross profit percentage, so it is not taxed twice.

> **Example:** Quinn sells equipment (§1245 property) for \$300,000. It cost \$220,000, and \$120,000 of depreciation was taken, so its adjusted basis is \$100,000. The buyer pays \$100,000 at closing and \$100,000 in each of the next 2 years.
>
> - Gain = \$300,000 - \$100,000 = **\$200,000**
> - §1245 recapture = min(\$200,000, \$120,000) = **\$120,000**, all ordinary income in Year 1
> - Gain eligible for the installment method = \$200,000 - \$120,000 = **\$80,000**
> - Gross profit percentage = \$80,000 ÷ \$300,000 = **26.67%**
>
> | Year | Payment | Installment Gain | §1245 Recapture | Total Gain Recognized |
> |---|---|---|---|---|
> | Year 1 | \$100,000 | \$26,667 | \$120,000 | \$146,667 |
> | Year 2 | \$100,000 | \$26,667 | \$0 | \$26,667 |
> | Year 3 | \$100,000 | \$26,667 | \$0 | \$26,667 |
> | **Total** | **\$300,000** | **\$80,000** (after rounding) | **\$120,000** | **\$200,000** |

### When the Installment Method Is Not Available

| Transaction | Reason |
|---|---|
| Sales of **inventory** and other dealer dispositions | Gain recognized in full at sale (limited exceptions for farm property and timeshares) |
| Sales of **publicly traded stock or securities** | Readily marketable, so gain is recognized in full |
| Sales at a **loss** | The method applies only to gains |
| The **recapture** part of the gain | Recognized in full in the year of sale |
| **Depreciable property sold to a controlled entity** (a related person under §1239) | All payments are treated as received in the year of sale, unless tax avoidance was not a principal purpose |

### Related Party Installment Sales

Installment sales between family members invite a simple abuse: the seller defers gain while the related buyer resells the property for cash right away. Under the **second disposition rule** of §453(e), if a related buyer (as defined by the §267 and §318 attribution rules) resells the property within **2 years** of the first sale, the original seller is treated as receiving, at the time of the resale, the lesser of the resale price or the original contract price, minus the payments already received.

> **Example:** Derek sells land with a basis of \$50,000 to his daughter Jamie for \$150,000: \$30,000 down and the rest over 4 years. Derek's gross profit percentage is \$100,000 ÷ \$150,000 = 66.67%, so he reports \$20,000 of gain in the year of sale. Six months later, Jamie resells the land to an unrelated buyer for \$155,000.
>
> - Deemed payment to Derek = lesser of \$155,000 or \$150,000, minus the \$30,000 already received = **\$120,000**
> - Gain Derek recognizes that year = \$120,000 × 66.67% = **\$80,000**
>
> All \$100,000 of Derek's gain is now recognized. Jamie's later installment payments are tax-free to Derek.

:::danger

The second disposition rule is a common trap. The exceptions are narrow: a resale after the death of either party, an involuntary conversion, or a showing that neither sale had a principal purpose of avoiding tax.

:::

### Farmland Sold to Farmers (§1062)

OBBBA added a separate election for sales of qualified farmland to a qualified farmer in tax years beginning after July 4, 2025. The seller may pay the net income tax on the gain in **four equal annual installments**. The land must have been farmed, or leased to a farmer, for substantially all of the 10 years before the sale, and it must carry a 10-year covenant restricting it to farming. The election defers payment of the tax, not recognition of the gain, so it is not the §453 installment method.

---

## Reviewing Asset Disposition Schedules

The blueprint asks you to review a client's schedule of asset dispositions and the source data behind it, and to resolve discrepancies flagged by automated diagnostic checks. The goal is to confirm both the **amount** and the **character** of every gain and loss.

| Review Item | What to Check |
|---|---|
| **Cost and date placed in service** | Purchase invoices, closing statements, and the fixed asset ledger |
| **Accumulated depreciation** | Agrees with the tax depreciation schedule, including bonus depreciation and §179 expensing |
| **Sale price and date** | Sales agreements, closing statements, and Forms 1099-S, 1099-B, and 1099-DA |
| **Selling expenses** | Commissions, legal fees, and transfer costs reduce the amount realized |
| **Holding period** | More than one year for §1231 and long-term treatment |
| **Asset classification** | §1245, §1250, capital asset, or ordinary asset |
| **Recapture** | Computed from the depreciation records, and recognized in the year of sale even for installment sales |
| **Prior §1231 losses** | Five-year lookback history |
| **Stock losses and gains** | §1244 requirements for ordinary loss treatment; §1202 holding period and acquisition date for exclusions |

### Common Discrepancies

| Discrepancy | Resolution |
|---|---|
| Depreciation on the disposition schedule does not match the tax depreciation schedule | Reconcile, then recompute adjusted basis and gain |
| Equipment classified as §1250 property | Reclassify as §1245 and recapture all depreciation, not just excess |
| Gain treated entirely as §1231 gain | Apply recapture first |
| Short-term business property treated as §1231 property | If held one year or less, the gain or loss is ordinary |
| Installment sale defers the recapture | Recognize all recapture in the year of sale |
| Lookback rule not applied | Review the prior 5 years and recharacterize as needed |
| §1244 loss claimed on shares bought from another shareholder | Disallow ordinary treatment; the loss is capital |
| Form 1099-DA shows proceeds but no basis | The asset is noncovered; the taxpayer must supply basis from their own records for that wallet or account |

:::tip[Exam Tip]

In a review scenario, ask four questions of every line: Is the amount right? Is the character right? Was recapture applied before §1231 netting? Was the lookback rule considered? Those four checks catch most planted errors.

:::

---

## Summary

| Concept | Key Rule |
|---|---|
| **Digital assets** | Property, not currency; capital assets when held for investment; exchanges are taxable |
| **§1231 property** | Depreciable and real property used in business, held more than 1 year |
| **§1231 netting** | Net gain is long-term capital gain; net loss is ordinary |
| **§1231 lookback** | Net gain is ordinary to the extent of nonrecaptured §1231 losses from the prior 5 years |
| **§1245 recapture** | Ordinary income up to **all** depreciation, including bonus and §179 |
| **§1250 recapture** | Ordinary income up to **excess** depreciation; usually zero after 1986 |
| **§291** | Corporations treat 20% of the depreciation-related gain on buildings as ordinary |
| **Unrecaptured §1250 gain** | Depreciation portion of §1231 gain on buildings; maximum 25% for individuals; limited to net §1231 gain and reduced first by lookback recapture |
| **§1244 stock** | Ordinary loss up to \$50,000 (\$100,000 MFJ) a year; excess is capital |
| **§1202 stock** | Gain exclusion; for stock acquired after July 4, 2025, 50%, 75%, or 100% after 3, 4, or 5 years |
| **Installment sales** | Gain = payments × gross profit percentage; recapture is recognized in the year of sale |
| **Related party installment sales** | Resale by a related buyer within 2 years accelerates the seller's gain; no installment method for depreciable property sold to a controlled entity |
