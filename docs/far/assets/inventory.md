# Inventory

Inventory questions in FAR usually combine three issues: **ownership**, **cost flow assumptions**, and **subsequent measurement**. The exam often gives a short fact pattern and asks what belongs in ending inventory or which method produces higher income.

## What counts as inventory

Inventory includes goods held for sale, goods in production, and materials that will be consumed in production.

| Category | Example |
| --- | --- |
| Raw materials | Lumber used by Kingfisher Industries |
| Work in process | Partially completed audio equipment at Illini Entertainment |
| Finished goods | Completed products ready for sale |

## Ownership of Goods

The first step in many inventory problems is deciding **who owns the goods at year-end**.

### FOB shipping terms

| Shipping term | When title passes | Include in buyer's inventory when... |
| --- | --- | --- |
| FOB shipping point | When goods are given to the common carrier | goods are shipped |
| FOB destination | When goods are received by the buyer | goods are received |

### Consigned goods

In a consignment arrangement, the consignor keeps title until the consignee sells the goods to a third party. That means the goods remain in the consignor's inventory.

:::warning

Consigned goods sitting at another party's location are still inventory of the **consignor**, not the consignee.

:::

## Cost Flow Assumptions

U.S. GAAP permits several cost flow methods.

| Method | Basic idea |
| --- | --- |
| Specific identification | Tracks the actual cost of specific items |
| FIFO | Oldest costs move to cost of goods sold first |
| LIFO | Newest costs move to cost of goods sold first |
| Weighted average | Uses average unit cost |
| Moving average | Rolling average in a perpetual system |

### Rising prices: FIFO vs. LIFO

During periods of rising prices:

- **FIFO** usually produces higher ending inventory and higher net income
- **LIFO** usually produces lower ending inventory and lower net income

:::tip[Memory aid]

**LIFO = lowest** ending inventory and income when prices are rising.

:::

## Periodic vs. Perpetual Systems

| System | Main feature |
| --- | --- |
| Periodic | Ending inventory is determined by physical count and cost of goods sold is computed at period-end |
| Perpetual | Inventory records update with each purchase and sale and maintain a running balance |

Weighted average is commonly associated with the **periodic** system, while moving average is commonly associated with the **perpetual** system.

## Lower of Cost and Subsequent Measurement

### Lower of cost and net realizable value

For inventory measured under FIFO or average methods, inventory is generally carried at the **lower of cost and net realizable value (NRV)**.

$$
\text{NRV} = \text{Estimated selling price} - \text{Completion and disposal costs}
$$

**Example:** Bear Co. has inventory with cost of \$42,000 and estimated selling price of \$45,000. It expects \$2,000 of completion costs and \$1,000 of selling costs.

$$
\text{NRV} = \$45{,}000 - \$2{,}000 - \$1{,}000 = \$42{,}000
$$

No write-down is needed because cost equals NRV.

### Lower of cost or market

For older GAAP-style questions using the **lower of cost or market** model, "market" usually means replacement cost subject to a ceiling and floor.

| Limit | Amount |
| --- | --- |
| Ceiling | NRV |
| Floor | NRV minus normal profit margin |
| Market | Replacement cost, constrained by the ceiling and floor |

:::info

If replacement cost is above the ceiling, use the ceiling. If it is below the floor, use the floor.

:::

## Firm Purchase Commitments

If a company is committed to buy inventory in the future and prices decline below the commitment price, the loss is recognized in the period of the decline.

**Example:** Gies Co. commits to buy materials for \$90,000. Before delivery, the market value drops to \$74,000.

```journal
Dr. Estimated loss on purchase commitment    16,000
    Cr. Estimated liability on purchase commitment   16,000
```

## Estimating Ending Inventory

When a physical count is not practical (e.g., interim reporting, inventory destroyed by fire), companies use estimation methods based on historical relationships.

### Gross Profit Method

The gross profit method estimates ending inventory by working backward from an assumed gross profit percentage.

$$
\text{Estimated COGS} = \text{Net Sales} \times (1 - \text{Gross Profit \%})
$$

$$
\text{Estimated Ending Inventory} = \text{Goods Available for Sale} - \text{Estimated COGS}
$$

**Example:** Bear Inc. has beginning inventory of \$50,000 and purchases of \$200,000. Net sales for the period are \$275,000, and the historical gross profit percentage is 40%.

$$
\text{Goods Available for Sale} = \$50{,}000 + \$200{,}000 = \$250{,}000
$$

$$
\text{Estimated COGS} = \$275{,}000 \times (1 - 0.40) = \$165{,}000
$$

$$
\text{Estimated Ending Inventory} = \$250{,}000 - \$165{,}000 = \$85{,}000
$$

:::tip[Exam Tip]

The gross profit method is **not** acceptable for annual financial statements under GAAP. It is used for interim reporting, insurance claims, and reasonableness checks. Be careful with how the gross profit percentage is expressed — "markup on cost" and "gross profit as a percentage of sales" produce different results.

:::

### Retail Inventory Method

The retail inventory method estimates ending inventory by converting the retail value of ending inventory to cost using a **cost-to-retail ratio** (also called the cost complement).

$$
\text{Cost-to-Retail Ratio} = \frac{\text{Goods Available for Sale at Cost}}{\text{Goods Available for Sale at Retail}}
$$

$$
\text{Estimated Ending Inventory at Cost} = \text{Ending Inventory at Retail} \times \text{Cost-to-Retail Ratio}
$$

**Example:** Gies Co. has the following data:

| | At Cost | At Retail |
|---|---:|---:|
| Beginning inventory | \$30,000 | \$50,000 |
| Purchases | \$120,000 | \$190,000 |
| Goods available for sale | \$150,000 | \$240,000 |
| Net sales | | \$210,000 |

$$
\text{Cost-to-Retail Ratio} = \frac{\$150{,}000}{\$240{,}000} = 62.5\%
$$

$$
\text{Ending Inventory at Retail} = \$240{,}000 - \$210{,}000 = \$30{,}000
$$

$$
\text{Ending Inventory at Cost} = \$30{,}000 \times 62.5\% = \$18{,}750
$$

:::info

Under U.S. GAAP, the retail inventory method can approximate **lower of cost or market (LCM)** when net markdowns are excluded from the cost-to-retail ratio calculation. This produces a lower ratio and a more conservative ending inventory.

:::

---

## Inventory Costing Illustration

Assume Bear Inc. purchases the following units:

| Date | Units | Cost per unit |
| --- | ---: | ---: |
| Jan. 3 | 100 | \$10 |
| Mar. 8 | 100 | \$12 |
| Oct. 2 | 100 | \$14 |

If Bear Inc. sells 220 units during a period of rising prices:

- **FIFO** leaves the newest costs in ending inventory
- **LIFO** leaves the oldest costs in ending inventory
- **Weighted average** smooths the effect

The exam may not ask you for every journal entry, but it often asks which method gives the highest income or highest ending inventory.

## Consignment Example

Kingfisher Industries sends goods costing \$18,000 to a retailer on consignment.

```journal
Dr. No entry to sales revenue at shipment
```

Kingfisher continues to report the goods as inventory until the retailer sells them to an outside customer.

## Key Inventory Entries

### Purchase under a perpetual system

```journal
Dr. Inventory                     25,000
    Cr. Accounts payable              25,000
```

### Sale under a perpetual system

```journal
Dr. Accounts receivable           40,000
    Cr. Sales revenue                 40,000
```

```journal
Dr. Cost of goods sold            24,000
    Cr. Inventory                     24,000
```

### Write-down to NRV

```journal
Dr. Loss on inventory write-down    6,500
    Cr. Inventory                      6,500
```

## Inventory Takeaways for FAR

:::note[Checklist]

- Determine ownership first: FOB terms and consignment can change the answer.
- Know the difference between periodic and perpetual systems.
- Know the major cost flow assumptions.
- Know the effect of LIFO versus FIFO in rising prices.
- Know NRV and, when tested, the ceiling-and-floor approach for market.
- Recognize losses on firm purchase commitments when prices decline.

:::
