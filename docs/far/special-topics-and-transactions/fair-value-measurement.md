# Fair Value Measurement

Fair value appears all over the financial statements: investments in securities, assets and liabilities acquired in a business combination, impaired long-lived assets, and items measured under the fair value option. Accounting Standards Codification (ASC) 820 gives one definition of fair value and one framework for measuring it, used wherever another standard calls for fair value. FAR asks you to identify the valuation techniques, apply the key assumptions (market participants, highest and best use, and unit of account), and classify a measurement within the fair value hierarchy. This chapter follows that order: the definition, the assumptions, the approaches, and the hierarchy.

## What Fair Value Means

ASC 820 defines **fair value** as:

> The price that would be received to sell an asset or paid to transfer a liability in an **orderly transaction** between **market participants** at the **measurement date**.

Three features of the definition drive almost every exam question.

**It is an exit price.** Fair value is what the entity would receive to sell the asset (or pay to transfer the liability), not what it would pay to buy it.

**It assumes an orderly transaction.** The transaction is assumed to have had normal exposure to the market before the measurement date. A forced sale or liquidation price is not fair value.

**It is market-based, not entity-specific.** Fair value uses the assumptions that **market participants** would use in pricing the asset or liability, including assumptions about risk. Market participants are buyers and sellers in the principal (or most advantageous) market who are independent of the entity, knowledgeable, and able and willing to transact. What the entity itself intends to do with the asset does not matter.

---

## Principal Market vs. Most Advantageous Market

Fair value is measured using the price in one market:

1. **Principal market:** the market with the **greatest volume and level of activity** for the asset or liability. If a principal market exists, its price is used, even if a better price is available somewhere else.
2. **Most advantageous market:** used only if there is no principal market. It is the market that **maximizes** the amount received for an asset (or **minimizes** the amount paid for a liability), after transaction costs and transport costs.

The two kinds of costs are treated differently. **Transaction costs** (such as commissions) are used to choose the most advantageous market, but they are **not** deducted in measuring fair value, because they belong to the transaction, not to the asset. **Transport costs** (the cost to move the asset to the market) **are** deducted, because location is a characteristic of the asset.

Bear Co. holds a commodity that trades in two active markets. Neither market is the principal market.

| Market | Price | Transaction Costs | Transport Costs | Net Proceeds |
|---|---|---|---|---|
| Market A | \$105 | \$3 | \$2 | \$100 |
| Market B | \$103 | \$1 | \$1 | \$101 |

Market B is the most advantageous market (\$101 > \$100). The reported **fair value**, however, excludes transaction costs:

$$
\text{Fair Value} = \$103 - \$1 \text{ (transport)} = \$102
$$

---

## Highest and Best Use

For a **nonfinancial asset**, such as land, a building, or equipment, fair value assumes the asset is put to its **highest and best use** by market participants. That is the use that is physically possible, legally permissible, and financially feasible, and that produces the highest value. The highest and best use may be to use the asset on its own or in combination with other assets. An entity's current use is presumed to be the highest and best use unless market or other factors suggest a different use would be worth more.

Grizzly Inc. owns land that it uses as a parking lot. As a parking lot, the land would sell for \$2,000,000. Zoning permits residential development, and market participants would pay \$3,000,000 for the land as a development site, after the cost of preparing it. The land's fair value is **\$3,000,000**, even though Grizzly plans to keep running the parking lot. For the same reason, an asset acquired in a business combination that the acquirer does not plan to use is still measured at the value market participants would get from it.

The highest and best use concept does not apply to financial assets or to liabilities.

---

## Unit of Account

The **unit of account** is the level at which an asset or liability is aggregated or disaggregated for measurement: a single share, a block of shares, a single machine, or a group of assets. Other standards set the unit of account; ASC 820 then measures the fair value of that unit.

For securities with a quoted price in an active market (Level 1, described below), the unit of account is the individual security. Fair value is the quoted price times the quantity held. No **blockage factor** (a discount for holding a block too large for the market to absorb at once) is allowed.

The same logic applies to restrictions on sale. A restriction that is a characteristic of the security itself, and would pass to any buyer, is reflected in fair value. A **contractual sale restriction** that the holder agreed to, such as an underwriter's lock-up agreement, is a separate agreement, not part of the unit of account, so it is **not** considered in measuring fair value (ASU 2022-03). Coming change: ASU 2026-03, eligible for testing January 1, 2028, will require investment companies to consider contractual sale restrictions; other entities will continue to ignore them.

Polar Co. holds 1,000,000 shares of a listed stock that closes at \$45 per share. Polar agreed to a 180-day lock-up when the shares were issued, and its block is large compared with the stock's daily trading volume. Fair value is still 1,000,000 × \$45 = **\$45,000,000**, with no discount for the block size or the lock-up.

---

## Valuation Approaches

ASC 820 describes three approaches for measuring fair value. The entity uses whichever technique is appropriate and for which sufficient data are available, and it maximizes the use of observable inputs.

### Market Approach

The market approach uses prices and other information from **market transactions** involving identical or comparable assets or liabilities.

| Technique | Description |
|---|---|
| Quoted prices | Directly observable market prices |
| Matrix pricing | Values debt securities by reference to quoted prices of similar benchmark securities |
| Market multiples | Comparable company ratios such as price-to-earnings (P/E) or enterprise value to earnings before interest, taxes, depreciation, and amortization (EV/EBITDA) |

The lock-up example above used the market approach: a quoted price times the number of shares.

### Cost Approach

The cost approach reflects the amount required today to **replace** the service capacity of an asset (its **current replacement cost**), adjusted for obsolescence. It is often used for specialized tangible assets.

$$
\text{Fair Value} = \text{Replacement Cost} - \text{Physical Deterioration} - \text{Functional Obsolescence} - \text{Economic Obsolescence}
$$

Grizzly Inc. owns a specialized machine. A new equivalent machine costs \$200,000, and the existing machine has 40% of its useful life remaining, so fair value is approximately \$200,000 × 40% = \$80,000.

### Income Approach

The income approach converts **future amounts** (cash flows or earnings) to a **single present value**. Techniques include discounted cash flow (DCF) models, option pricing models such as Black-Scholes and binomial models, and the multi-period excess earnings method used for intangible assets.

Panda Industries values a patent using DCF. Expected annual cash flows are \$50,000 for 5 years, discounted at 8%:

$$
\text{Fair Value} = \$50{,}000 \times \frac{1 - (1.08)^{-5}}{0.08} = \$50{,}000 \times 3.99271 = \$199{,}636
$$

---

## Fair Value Hierarchy

Not all fair values are equally reliable. A quoted price for the identical asset in an active market leaves little room for judgment; a model built on management's own forecasts leaves a lot. ASC 820 ranks the **inputs** to a measurement in three levels:

| Level | Inputs | Examples |
|---|---|---|
| **Level 1** | **Unadjusted** quoted prices for **identical** assets or liabilities in **active** markets that the entity can access at the measurement date | Stock traded on the New York Stock Exchange (NYSE); exchange-traded commodity futures |
| **Level 2** | Observable inputs other than Level 1 prices: quoted prices for **similar** items in active markets, quoted prices for identical or similar items in **inactive** markets, and observable inputs such as interest rates, yield curves, and credit spreads | Interest rate swap valued with the Secured Overnight Financing Rate (SOFR) yield curve; corporate bond priced from Treasury rates plus an observed credit spread; real estate valued from comparable sales |
| **Level 3** | **Unobservable** inputs that reflect the entity's own assumptions about what market participants would use | Private company valued with internal cash flow projections; reporting unit valued for a goodwill impairment test using internal forecasts |

A measurement is classified **in its entirety** at the **lowest level input that is significant** to it. If a measurement uses mostly Level 2 inputs but a significant Level 3 input, the whole measurement is Level 3.

| Scenario | Level |
| -------- | ----- |
| NYSE-traded equity security | Level 1 |
| Over-the-counter (OTC) bond priced with observable yield curves | Level 2 |
| Real estate appraised using comparable sales | Level 2 |
| Private company valued with an internal DCF model | Level 3 |
| Goodwill tested for impairment using internal projections | Level 3 |

:::warning[Common trap]

The level depends on the **inputs**, not on the valuation approach. A DCF model is Level 2 if all its significant inputs are observable market data, and Level 3 if a significant input is the entity's own forecast.

:::

---

## Disclosures

Fair value disclosures tell users how much judgment sits behind the numbers. For each class of assets and liabilities measured at fair value, an entity discloses the fair value and its level in the hierarchy. For Level 2 and Level 3 measurements, it describes the valuation techniques and inputs used, and any change in technique. Level 3 measurements get the most disclosure: entities give quantitative information about the significant unobservable inputs, and for recurring Level 3 measurements, public entities also provide a reconciliation of beginning to ending balances (purchases, sales, gains and losses, and transfers into or out of Level 3). For a nonrecurring measurement, such as an impaired asset written down to fair value, the entity also discloses the reason for the measurement.

---

## Scope Exceptions and the NAV Practical Expedient

Some measurements that look like fair value are outside ASC 820. Share-based payment awards (ASC 718) and lease classification and measurement (ASC 842) follow their own standards, and measurements such as net realizable value for inventory resemble fair value but are not fair value.

For investments in certain funds without readily determinable fair values, such as hedge funds and private equity funds, an entity may use the fund's **net asset value (NAV) per share** as a practical expedient. Investments measured this way are **not** classified within the fair value hierarchy.

---

## Fair Value Option

Under ASC 825, an entity may **elect** to measure many financial assets and financial liabilities at fair value, with changes in fair value reported in earnings. The election is made instrument by instrument, generally when the instrument is first recognized, and it is **irrevocable**.

Cub Entertainment elects the fair value option for a \$500,000 note payable. At year-end, the note's fair value is \$480,000. The entire decline is caused by a rise in market interest rates, not by a change in Cub's own credit risk:

$$
\text{Gain} = \$500{,}000 - \$480{,}000 = \$20{,}000
$$

```journal
Dr. Notes payable                         20,000
    Cr. Unrealized gain (fair value option)       20,000
```

For a liability measured under the fair value option, the part of the change in fair value caused by **instrument-specific credit risk** (the entity's own credit standing) is reported in **other comprehensive income (OCI)**, not net income. Without that rule, a company whose credit was deteriorating would report a gain in earnings.
