# Intangible Assets

Intangible assets are **long-lived assets without physical substance**: patents, copyrights, trademarks, franchises, software licenses, and goodwill. For many modern companies they are worth more than all the property and equipment on the balance sheet, yet many of the most valuable ones, such as a brand built over decades, never appear there at all. The accounting turns on two questions. Was the intangible **purchased** or **developed internally**? And is its useful life **finite** or **indefinite**? FAR focuses on finite-lived intangibles, purchased software, and cloud computing arrangements; goodwill impairment, other indefinite-lived intangibles, internally developed software, and research and development are covered in more depth in BAR. This chapter covers recognition, amortization, impairment, software and cloud computing, and a few special cases.

## Recognizing Intangible Assets

Common intangibles and their typical lives:

| Intangible                 | Description                                                                                   | Typical Life                     |
| -------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------- |
| **Patent**                 | Exclusive right to manufacture, use, or sell an invention                                     | Legal: 20 years                  |
| **Copyright**              | Exclusive right to reproduce and sell artistic or literary works                              | Legal: creator's life + 70 years |
| **Trademark or trade name** | Symbol, word, or phrase identifying a product or company                                     | Often indefinite (renewable)     |
| **Franchise or license**   | Right to operate under another company's brand, or to use its property                        | Contract term                    |
| **Goodwill**               | Excess of the price paid for a business over the fair value of its net identifiable assets    | Indefinite                       |

Whether an intangible is recognized depends mainly on how it was obtained:

| Source                                                          | Treatment                                                                |
| --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Purchased** from a third party                                 | Capitalize at cost, including costs to get it ready for use               |
| **Acquired in a business combination**                           | Recognize identifiable intangibles at fair value, apart from goodwill    |
| **Internally developed**                                        | Generally **expensed as incurred**, including research and development (R&D), advertising, and employee training |

The logic for expensing internally developed intangibles is that their costs are hard to separate from the cost of running the business. Under ASC 350-30, costs of developing, maintaining, or restoring intangibles that are not specifically identifiable, that have indeterminate lives, or that are inherent in a continuing business are expensed as incurred. That is why internally generated **goodwill**, **brands**, and **customer lists** are never capitalized under U.S. generally accepted accounting principles (GAAP). The direct costs of obtaining legal protection for an internally developed intangible, such as the legal and registration fees for a patent, are capitalized. So are the legal costs of successfully defending a patent; if the defense fails, the costs are expensed and the patent is written off.

## Finite-Lived Intangibles: Amortization

A finite-lived intangible is amortized over the **shorter of** its economic life and its legal life. Use the **straight-line method** unless another pattern better reflects how the benefits are used up. Intangibles usually have no residual value, so the entire cost is generally amortized.

$$
\text{Amortization period} = \min(\text{Economic life},\; \text{Legal life})
$$

Bear Co. acquires a patent from an independent inventor for \$120,000 and pays \$5,000 in legal fees to register it:

```journal
Dr. Patent[a]                        125,000
    Cr. Cash[a]                          125,000
```

The patent has 16 years remaining on its legal life, but Bear expects the technology to be useful for only 8 years, so the amortization period is 8 years:

$$
\text{Annual amortization} = \frac{\$125{,}000}{8} = \$15{,}625
$$

```journal
Dr. Amortization expense             15,625
    Cr. Accumulated amortization (patent)[ca]  15,625
```

Many companies credit the patent account directly instead of using accumulated amortization; either presentation is acceptable. If Bear later concludes the useful life is shorter or longer, it amortizes the remaining carrying amount over the revised remaining life. That is a change in estimate, applied prospectively.

## Impairment of Finite-Lived Intangibles

Finite-lived intangibles follow the **same two-step test** as property, plant, and equipment (PP&E) under Accounting Standards Codification (ASC) 360. When a triggering event suggests the carrying amount may not be recoverable, compare the carrying amount with the **undiscounted** future cash flows. If the cash flows are lower, write the asset down to **fair value**.

Grizzly Inc. holds a patent with a carrying amount of \$80,000. After a competitor's breakthrough, expected undiscounted future cash flows are \$60,000 and fair value is \$45,000. The patent fails the recoverability test (\$60,000 is less than \$80,000), so the loss is \$35,000 (\$80,000 - \$45,000):

```journal
Dr. Impairment loss                   35,000
    Cr. Accumulated amortization (patent)[ca]  35,000
```

The \$45,000 becomes the new cost basis and is amortized over the remaining useful life. Under U.S. GAAP, impairment losses on intangibles held for use are **never reversed**.

## Indefinite-Lived Intangibles and Goodwill

An intangible has an **indefinite** life when no legal, regulatory, contractual, competitive, or economic factor limits the period over which it will generate cash flows. Examples include a trademark the entity intends and is able to renew indefinitely and a broadcast license that can be renewed at little cost. Indefinite-lived intangibles are **not amortized**. Instead, they are tested for impairment **at least annually**, and more often if a triggering event occurs, by comparing carrying amount with fair value (after an optional qualitative assessment). Each period the entity also reassesses whether the life is still indefinite; if it has become finite, amortization begins.

**Goodwill** arises only in a **business combination**, when the price paid exceeds the fair value of the identifiable net assets acquired:

$$
\text{Goodwill} = \text{Consideration transferred} - \text{Fair value of identifiable net assets}
$$

If Panda Industries pays \$2,000,000 for a business whose identifiable assets have a fair value of \$2,800,000 and whose liabilities have a fair value of \$1,200,000, the identifiable net assets are \$1,600,000 and goodwill is \$400,000.

Goodwill is not amortized by public companies. It is tested for impairment at the reporting unit level at least annually, and any loss is limited to the goodwill balance and never reversed. Private companies may elect to amortize goodwill on a straight-line basis over 10 years or less. The details of goodwill and indefinite-lived intangible impairment testing are BAR topics; see [Indefinite-Lived Intangible Assets](../../bar/technical-accounting-assets-and-revenue/indefinite-lived-intangible-assets.md).

## Purchased Software

Software that a company buys or licenses from a vendor to run its own business is **internal-use software** (ASC 350-40), an intangible asset. Its cost includes the purchase or license price and the external costs of getting the software ready for use, such as installation, configuration, coding, and testing. Training and data conversion are expensed as incurred, because they prepare the company's people and records, not the software. The capitalized cost is amortized on a straight-line basis over the software's estimated useful life, starting when the software is ready for its intended use, and it is tested for impairment like other long-lived assets.

Polar Co. buys a perpetual license for warehouse software for \$60,000. It pays a consultant \$15,000 to configure and test the software, spends \$5,000 training employees, and spends \$3,000 converting old data. It capitalizes \$75,000 (\$60,000 + \$15,000) and expenses the \$8,000 of training and data conversion:

```journal
Dr. Software[a]                       75,000
Dr. Training and data conversion expense  8,000
    Cr. Cash[a]                           83,000
```

Over a five-year useful life, annual amortization is \$15,000 (\$75,000 ÷ 5).

Software a company **develops** itself, whether for internal use or for sale to customers, follows separate capitalization rules (ASC 350-40 and ASC 985-20) that are tested in BAR; see [Internally Developed Software](../../bar/technical-accounting-assets-and-revenue/internally-developed-software.md).

## Cloud Computing Arrangements

Many companies no longer install software at all. They pay a vendor a subscription to use software hosted on the vendor's servers. The first question in a **cloud computing arrangement (CCA)** is whether the company has bought a software license or a service:

- If the customer has the contractual right to take possession of the software at any time without significant penalty, **and** it is feasible for the customer to run the software on its own hardware (or a third party's), the arrangement includes a **software license**. The customer accounts for the license as purchased internal-use software, as above.
- Otherwise, the arrangement is a **service contract**. The subscription fees are expensed as the service is received.

Even in a service contract, the customer often pays significant **implementation costs** to configure and integrate the hosted software. Under ASU 2018-15, the customer applies the internal-use software stage model to those costs:

| Stage | Treatment |
|-------|-----------|
| **Preliminary project stage** (evaluating alternatives, selecting a vendor) | Expense |
| **Application development stage** (configuration, integration, testing) | **Capitalize** |
| **Post-implementation and operation stage** (training, maintenance) | Expense |

Capitalized implementation costs are **not** an intangible asset. They are presented in the same balance sheet line as prepaid hosting fees, amortized on a straight-line basis over the term of the hosting arrangement (including renewals the customer is reasonably certain to exercise), and the amortization is presented in the same income statement line as the hosting fees. They are tested for impairment under the same long-lived asset model as purchased software.

Kodiak Partners signs a three-year hosting arrangement that is a service contract. It spends \$6,000 evaluating vendors, \$36,000 configuring and testing the hosted software, and \$4,000 training staff. Kodiak expenses the \$10,000 of evaluation and training costs and capitalizes \$36,000:

```journal
Dr. Prepaid hosting implementation costs[a] 36,000
    Cr. Cash[a]                                 36,000
```

Each year it amortizes \$12,000 (\$36,000 ÷ 3) to the same expense line as its hosting fees:

```journal
Dr. Hosting service expense             12,000
    Cr. Prepaid hosting implementation costs[a] 12,000
```

:::note[Coming change: ASU 2025-06]

ASU 2025-06 removes the project stages from the internal-use software guidance, including for CCA implementation costs. Capitalization will start when management has authorized and committed to funding the project and it is probable that the project will be completed and the software will perform its intended function. ASU 2025-06 is eligible for testing starting January 1, 2028. Through December 31, 2027, the stage model above is the tested rule.

:::

## Franchises

When a franchisee pays an initial franchise fee, it records an **intangible asset** at the **present value** of the payments and amortizes it over the period of expected benefit, usually the franchise term.

Bear Co. acquires a franchise from a national chain. The initial fee is \$50,000, payable \$10,000 at signing and \$10,000 at the end of each of the next four years. The appropriate discount rate is 8%:

$$
\text{PV of remaining payments} = \$10{,}000 \times 3.3121 = \$33{,}121 \qquad \text{Franchise cost} = \$10{,}000 + \$33{,}121 = \$43{,}121
$$

```journal
Dr. Franchise[a]                      43,121
Dr. Discount on note payable[cl]       6,879
    Cr. Cash[a]                           10,000
    Cr. Note payable[l]                   40,000
```

Over a 20-year franchise term, annual amortization is \$2,156 (\$43,121 ÷ 20). The \$6,879 discount is recognized as interest expense over the four years of the note.

## Costs That Are Always Expensed

Two categories of cost look like they create long-term benefits but are expensed as incurred.

**Start-up and organization costs** (ASC 720), such as the costs of opening a new facility or forming a new entity, are expensed as incurred for financial reporting, even though tax law allows part of them to be amortized.

**Research and development costs** (ASC 730) are expensed as incurred, including salaries, materials, contract research performed by others, and a reasonable allocation of indirect costs. Equipment and facilities bought for R&D are capitalized only if they have an **alternative future use**; the depreciation on them is then R&D expense. Items with no alternative future use are expensed when acquired. Intangible R&D acquired in a business combination is the main exception: it is recognized at fair value as an indefinite-lived intangible until the project is completed or abandoned. R&D is covered in depth in BAR; see [Research and Development Costs](../../bar/technical-accounting-assets-and-revenue/research-and-development-costs.md).

## Crypto Assets

A **crypto asset** (such as bitcoin or ether) is a digital asset recorded on a blockchain. Because it is not cash, a financial instrument, or tangible property, it is an **intangible asset**. Under ASC 350-60, a crypto asset is measured at **fair value**, with changes recognized in **net income**, when it meets **all** of the following conditions:

1. It meets the definition of an intangible asset.
2. It does **not** give the holder enforceable rights to underlying goods, services, or other assets.
3. It is created or resides on a distributed ledger based on blockchain or similar technology.
4. It is secured through cryptography.
5. It is fungible.
6. It is **not** created or issued by the reporting entity or its related parties.

Bear Co. holds 5 bitcoin purchased at \$30,000 each. At year-end, the fair value is \$35,000 per bitcoin, an unrealized gain of \$25,000 (5 × \$5,000):

```journal
Dec 31
Dr. Crypto assets[a] 25,000
    Cr. Unrealized gain on crypto assets 25,000
```

Crypto assets measured at fair value are presented separately from other intangibles on the balance sheet, and their remeasurement gains and losses are presented separately from changes in other intangibles in the income statement. A crypto asset that does **not** meet all six conditions, such as a non-fungible token (NFT), follows the general intangible asset guidance: it is carried at cost less impairment.

---

## Summary

| Category                                    | Amortization                   | Impairment Test                            |
| ------------------------------------------- | ------------------------------ | ------------------------------------------ |
| Finite-lived intangible                     | Shorter of legal and economic life, usually straight-line | Two-step test (same as PP&E); no reversal |
| Indefinite-lived intangible (other than goodwill) | None                     | Compare carrying amount with fair value at least annually |
| Goodwill                                    | None (private company alternative: 10 years or less) | At least annually at the reporting unit level (BAR) |
| Purchased internal-use software             | Straight-line over useful life | Same as PP&E                               |
| CCA implementation costs (service contract) | Straight-line over the hosting term, with hosting expense | Same as PP&E                   |
| R&D and start-up costs                      | Not applicable (expensed as incurred) | Not applicable                      |
| Crypto assets (qualifying)                  | None (fair value through net income) | Not applicable (remeasured each period) |
