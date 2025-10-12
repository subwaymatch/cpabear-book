# Revenue Recognition

Revenue recognition under ASC 606 follows a five-step model that applies to nearly all contracts with customers. FAR candidates mu
st identify performance obligations, determine transaction prices, and recognize revenue when control transfers.

## Five-Step Model

1. **Identify the contract.** Ensure parties approve the arrangement, rights are identified, payment terms are known, and collecti
   bility is probable.
2. **Identify performance obligations.** Distinct goods or services are separate obligations; use series guidance for repetitivel
   y delivered services.
3. **Determine the transaction price.** Consider fixed and variable consideration, significant financing components, noncash consi
   deration, and consideration payable to the customer.
4. **Allocate the transaction price.** Use relative standalone selling prices; estimate when not directly observable.
5. **Recognize revenue when (or as) performance obligations are satisfied.** Apply point-in-time indicators or measure progress ov
   er time.

## Comprehensive Example

A software vendor sells a three-year license ($120,000), installation services ($30,000), and annual support ($18,000) with paymen
t terms of $84,000 at contract inception and $84,000 at the start of Year 2. Standalone selling prices: license $150,000, installa
tion $25,000, support $24,000.

1. Performance obligations: license (functional IP), installation, support (series).
2. Transaction price: $168,000 total. No significant financing (payments not disproportionate to transfer schedule).
3. Allocation:

| Obligation   | Standalone Price | Allocation Percentage | Allocated Revenue |
| ------------ | ---------------- | --------------------- | ----------------- |
| License      | 150,000          | 75%                   | 126,000           |
| Installation | 25,000           | 12.5%                 | 21,000            |
| Support      | 24,000           | 12.5%                 | 21,000            |

4. Recognition:
   - License revenue at delivery (point in time).
   - Installation over the implementation period.
   - Support ratably over three years.

### Journal Entries

```text
Contract inception (cash received):
Dr. Cash                    84,000
    Cr. Contract liability         84,000

License delivered Day 1:
Dr. Contract liability      84,000
    Cr. Revenue – license          84,000

Adjust allocation at period end:
Dr. Contract liability      42,000
    Cr. Revenue – license          42,000
(Recognizes total $126,000 license revenue.)

Installation costs incurred ($16,000) and revenue recognition:
Dr. Costs of services       16,000
    Cr. Cash/Payroll               16,000
Dr. Contract liability       7,000
    Cr. Revenue – installation      7,000

Support revenue (Year 1 portion):
Dr. Contract liability        7,000
    Cr. Revenue – support           7,000
```

Remaining contract liabilities roll forward until performance obligations are satisfied.

## Contract Costs

- Capitalize incremental costs of obtaining a contract (sales commissions) if recoverable; amortize consistent with revenue recogni
  tion.
- Recognize fulfillment costs as assets when they relate directly to a contract, generate or enhance resources, and are expected to
  be recovered.

```text
Dr. Contract cost asset   6,000
    Cr. Cash                     6,000
Dr. Amortization expense  2,000
    Cr. Contract cost asset      2,000
```

## Special Topics

- **Variable consideration:** Estimate using expected value or most likely amount and apply the constraint to avoid significant reve
  nue reversal.
- **Principal vs. agent:** Evaluate who controls the good or service before transfer; impacts gross versus net revenue.
- **Contract modifications:** Treat as separate contracts, part of the existing contract, or prospective adjustments based on pric
  ing and distinct goods.
- **Nonrefundable upfront fees:** Often represent advance payments for future services; recognize over the period of benefit.

## Disclosure Checklist

1. Disaggregate revenue by meaningful categories (geography, product line, timing).
2. Provide opening and closing balances for contract assets and liabilities with explanations of significant changes.
3. Describe performance obligations, remaining transaction price, and timing of recognition.
4. Explain significant judgments, including methods for measuring progress and determining transaction prices.

Revenue recognition questions mix conceptual analysis with numerical allocation, so practice full-cycle examples that include jour
nal entries and contract rollforwards.
