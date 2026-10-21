# Inventory

For most companies that sell goods, inventory is the largest current asset, and cost of goods sold is the largest expense. The two are linked: every dollar of cost that is not left in ending inventory ends up in cost of goods sold, so an inventory error is also an income error. FAR inventory questions usually combine three issues: who owns the goods, which cost flow assumption is used, and whether the carrying amount must be written down. This chapter takes them in that order, then covers estimation methods, purchase commitments, and the rollforward and count reconciliations that appear in simulations.

## What Counts as Inventory

Inventory includes goods held for sale in the ordinary course of business, goods in production, and materials that will be consumed in production. A manufacturer such as Panda Industries carries three kinds: **raw materials** (lumber waiting to be used), **work in process** (partially completed goods), and **finished goods** ready for sale. A retailer carries only merchandise inventory.

The cost of inventory includes the purchase price and the costs of bringing the goods to a saleable condition and location, such as freight-in and, for a manufacturer, direct labor and allocated overhead. Purchase discounts reduce cost. Selling costs, freight-out, and abnormal amounts of waste or idle capacity are expensed as incurred rather than added to inventory.

## Ownership of Goods

The first step in many inventory problems is deciding who owns the goods at year-end, because goods belong in the inventory of whoever holds title, wherever the goods happen to be.

For goods in transit, the shipping terms decide. Under free on board (FOB) terms, title passes at the named point:

| Shipping term | When title passes | Goods in transit at year-end belong to |
| --- | --- | --- |
| FOB shipping point | When the seller hands the goods to the carrier | The buyer |
| FOB destination | When the buyer receives the goods | The seller |

In a **consignment**, the consignor ships goods to a consignee (often a retailer) who sells them on the consignor's behalf. The consignor keeps title until the consignee sells the goods to a third party. If Panda Industries sends goods costing \$18,000 to a retailer on consignment, Panda records no sale when it ships them and continues to report the \$18,000 as inventory, even though the goods sit on the retailer's shelves. The retailer never includes them in its own inventory.

## Cost Flow Assumptions

When identical units are bought at different prices, the company needs a rule for which costs go to cost of goods sold and which stay in ending inventory. U.S. generally accepted accounting principles (GAAP) permit several:

| Method | Basic idea |
| --- | --- |
| Specific identification | Tracks the actual cost of each specific item |
| First-in, first-out (FIFO) | Oldest costs move to cost of goods sold first |
| Last-in, first-out (LIFO) | Newest costs move to cost of goods sold first |
| Weighted average | One average unit cost for the period (periodic system) |
| Moving average | A new average after each purchase (perpetual system) |

A **periodic** system determines ending inventory by physical count and computes cost of goods sold at period-end. A **perpetual** system updates inventory with each purchase and sale and keeps a running balance. FIFO gives the same answer under either system. LIFO and the average methods can give different answers, because the perpetual versions apply the method at each sale date using only the units on hand at that point.

### Comparing the Methods

Bear Co. purchases the following units during a period of rising prices:

| Date | Units | Cost per unit |
| --- | ---: | ---: |
| Jan. 3 | 100 | \$10 |
| Mar. 8 | 100 | \$12 |
| Oct. 2 | 100 | \$14 |

Goods available for sale are 300 units costing \$3,600. Bear sells 220 units, so 80 units remain. Using a periodic system:

| Method | Ending inventory (80 units) | Cost of goods sold (220 units) |
| --- | ---: | ---: |
| FIFO | 80 × \$14 = \$1,120 | \$2,480 |
| LIFO | 80 × \$10 = \$800 | \$2,800 |
| Weighted average (\$3,600 ÷ 300 = \$12) | 80 × \$12 = \$960 | \$2,640 |

FIFO leaves the newest costs in ending inventory, and LIFO leaves the oldest. So when prices are rising, FIFO produces the highest ending inventory and the highest net income, LIFO produces the lowest of both, and weighted average falls in between. A simple memory aid: when prices rise, LIFO means lowest. The exam often asks which method gives the highest income or the highest ending inventory rather than for every journal entry.

## Subsequent Measurement

Inventory is recorded at cost, but it may not stay there. Following the recoverability idea in the conceptual framework, inventory should not be carried above what the company can recover by selling it. Which test applies depends on the cost flow method:

| Cost flow method | Measurement rule |
| --- | --- |
| FIFO, average cost, and every other method except LIFO and the retail method | Lower of cost and net realizable value |
| LIFO or the retail inventory method | Lower of cost or market |

### Lower of Cost and Net Realizable Value

**Net realizable value (NRV)** is the estimated selling price in the ordinary course of business, less reasonably predictable costs of completion, disposal, and transportation:

$$
\text{NRV} = \text{Estimated selling price} - \text{Costs to complete and sell}
$$

Bear Co. has inventory with a cost of \$48,000 and an estimated selling price of \$45,000. It expects \$2,000 of completion costs and \$1,500 of selling costs:

$$
\text{NRV} = \$45{,}000 - \$2{,}000 - \$1{,}500 = \$41{,}500
$$

Because NRV is below cost, Bear writes the inventory down by \$6,500:

```journal
Dr. Loss on inventory write-down    6,500
    Cr. Inventory[a]                   6,500
```

The written-down amount becomes the new cost basis. GAAP does not allow the write-down to be reversed if prices later recover (other than a recovery within the same fiscal year in interim reports).

### Lower of Cost or Market

Inventory measured using LIFO or the retail inventory method is carried at the **lower of cost or market (LCM)**. Here "market" means replacement cost, limited by a ceiling and a floor:

- The **ceiling** is NRV.
- The **floor** is NRV minus a normal profit margin.
- **Market** is replacement cost if it falls between the two. If replacement cost is above the ceiling, market is the ceiling; if it is below the floor, market is the floor. (Equivalently, market is the middle value of the three.)

Then compare market with cost and report the lower amount.

Grizzly Inc. uses LIFO. One item has a cost of \$100, a replacement cost of \$70, an expected selling price of \$110, costs to sell of \$20, and a normal profit margin of \$15. The ceiling is \$90 (\$110 - \$20) and the floor is \$75 (\$90 - \$15). Replacement cost of \$70 is below the floor, so market is \$75. Because market is below cost, the item is written down by \$25 to \$75.

## Firm Purchase Commitments

A company may sign a noncancelable contract to buy inventory at a fixed price in the future. If the market price falls below the contract price before delivery, the company has a loss on a contract it cannot escape, and it recognizes that loss in the period of the decline rather than waiting for the goods to arrive.

Polar Co. commits to buy materials for \$90,000. Before delivery, the market value drops to \$74,000:

```journal
Dr. Estimated loss on purchase commitment    16,000
    Cr. Estimated liability on purchase commitment[l]   16,000
```

## Estimating Ending Inventory

When a physical count is not practical, for example at an interim date or after a fire destroys the warehouse, companies estimate ending inventory from historical relationships. The gross profit method is only an estimate. The retail inventory method goes further: many retailers use it as their costing method in annual financial statements, applying it to a physical count taken at retail prices.

### Gross Profit Method

The gross profit method works backward from an assumed gross profit percentage:

$$
\text{Estimated COGS} = \text{Net sales} \times (1 - \text{Gross profit \%})
$$

$$
\text{Estimated ending inventory} = \text{Goods available for sale} - \text{Estimated COGS}
$$

Bear Co. has beginning inventory of \$50,000 and purchases of \$200,000, so goods available for sale are \$250,000. Net sales for the period are \$275,000, and the historical gross profit percentage is 40%. Estimated cost of goods sold is \$165,000 (\$275,000 × 60%), so estimated ending inventory is \$85,000 (\$250,000 - \$165,000).

The gross profit method is **not** acceptable for annual financial statements under GAAP. It is used for interim reporting, insurance claims, and reasonableness checks.

:::tip[Markup on cost versus gross profit on sales]

Read carefully how the percentage is expressed. A markup on cost and a gross profit percentage on sales give different answers. To convert, gross profit on sales = markup on cost ÷ (1 + markup on cost). A 25% markup on cost equals a 20% gross profit on sales.

:::

### Retail Inventory Method

The retail inventory method keeps track of inventory at both cost and retail prices and converts ending inventory at retail to cost using a **cost-to-retail ratio**:

$$
\text{Ending inventory at cost} = \text{Ending inventory at retail} \times \frac{\text{Goods available at cost}}{\text{Goods available at retail}}
$$

The **conventional retail method** approximates lower of cost or market by including net markups but excluding net markdowns from the ratio's denominator. A larger denominator gives a lower ratio and a lower, more conservative ending inventory. Including both markups and markdowns gives an average cost result instead.

Polar Co. has the following data:

| | At Cost | At Retail |
|---|---:|---:|
| Beginning inventory | \$30,000 | \$50,000 |
| Purchases | 120,000 | 180,000 |
| Net markups | | 20,000 |
| **Goods available before markdowns** | **\$150,000** | **\$250,000** |
| Net markdowns | | (10,000) |
| Net sales | | (210,000) |
| **Ending inventory at retail** | | **\$30,000** |

Under the conventional method, the ratio is 60% (\$150,000 ÷ \$250,000), and ending inventory at cost is \$18,000 (\$30,000 × 60%). Under the average cost version, the markdowns are also included, so the ratio is 62.5% (\$150,000 ÷ \$240,000) and ending inventory is \$18,750.

---

## Rollforwards and Count Reconciliations

Every inventory balance must satisfy one identity:

$$
\text{Beginning inventory} + \text{Net purchases} - \text{Cost of goods sold} = \text{Ending inventory}
$$

A simulation may give you any three of the amounts and ask for the fourth, or give you all four and ask you to find the error.

Under a perpetual system, the general ledger balance should agree with the inventory subledger, and both should agree with the physical count. Differences point to specific problems: goods received but not yet recorded, cutoff errors at year-end (often involving FOB terms or consigned goods), pricing errors, or **shrinkage** from theft, breakage, or spoilage. Correct recording errors where they occurred. Shrinkage that is confirmed by the count is written off, usually to cost of goods sold. If Kodiak Partners' perpetual records show \$52,000 of inventory but the count supports only \$50,500, and the difference is shrinkage, Kodiak records:

```journal
Dr. Cost of goods sold    1,500
    Cr. Inventory[a]         1,500
```

For reference, the basic perpetual entries are a purchase (debit Inventory, credit Accounts Payable) and, for each sale, two entries: one recording the revenue and receivable at the selling price, and one moving the cost of the goods from Inventory to Cost of Goods Sold.
