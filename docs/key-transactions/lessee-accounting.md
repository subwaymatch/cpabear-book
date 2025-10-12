# Lessee Accounting

Lessee accounting under ASC 842 requires recognizing right-of-use (ROU) assets and lease liabilities for most leases. FAR candida
tes must classify leases, measure initial balances, and record subsequent expense and cash flows.

## Lease Classification

A lease is a **finance lease** if any of the following criteria are met; otherwise it is an **operating lease**:

1. Ownership transfers to the lessee at the end of the lease.
2. The lessee has a purchase option that is reasonably certain to be exercised.
3. Lease term covers the major part of the asset’s remaining economic life.
4. Present value of lease payments equals or exceeds substantially all of the asset’s fair value.
5. The asset is specialized with no alternative use to the lessor.

## Initial Measurement

- **Lease liability:** Present value of lease payments (fixed payments, certain variable payments, residual value guarantees, exerci
se price of purchase options, penalties) discounted using the implicit rate or incremental borrowing rate.
- **ROU asset:** Lease liability + initial direct costs + prepaid lease payments − lease incentives received.

### Example: Finance Lease Inception

Five-year lease, annual payments $50,000 at year-end, implicit rate 6%, no residual guarantee.

```text
Present value factor (annuity due adjusted for end-of-year payments) ≈ 4.21236
Lease liability = $50,000 × 4.21236 = $210,618

Entry at commencement:
Dr. ROU asset                210,618
    Cr. Lease liability              210,618
```

## Subsequent Measurement

- **Finance leases:** Recognize interest expense on the lease liability and amortization of the ROU asset, typically straight-line.
- **Operating leases:** Recognize a single lease cost; liability amortizes using effective interest, and ROU asset is adjusted so tota
l expense is straight-line.

### Year 1 Finance Lease Entries

```text
Interest expense = 210,618 × 6% = 12,637
Principal reduction = 50,000 − 12,637 = 37,363

Payment entry:
Dr. Interest expense        12,637
Dr. Lease liability         37,363
    Cr. Cash                        50,000

ROU amortization (straight-line): 210,618 ÷ 5 = 42,124
Dr. Amortization expense – ROU asset   42,124
    Cr. Accumulated amortization – ROU asset   42,124
```

### Operating Lease Entry Example

Lease liability $180,000; discount rate 5%; annual payment $40,000. Straight-line lease expense = total undiscounted payments ($200,0
00) ÷ 5 = $40,000.

```text
Interest (year 1) = $180,000 × 5% = 9,000
Principal reduction = Payment − Interest = 31,000

Dr. Lease expense               40,000
    Cr. Lease liability                31,000
    Cr. ROU asset amortization          9,000
Dr. Lease liability             31,000
    Cr. Cash                           31,000
```

## Remeasurement and Modifications

- Reassess lease term when significant events occur that are within the lessee’s control (e.g., exercise of extension option becomes
 reasonably certain).
- Modifications not accounted for as separate leases require remeasurement of the lease liability using an updated discount rate, w
ith the offset to the ROU asset.

## Short-Term Lease Election

- Leases with terms of 12 months or less and no purchase option may be excluded from balance sheet recognition; expense payments on
 a straight-line basis.

## Presentation and Disclosure

- Present finance lease liabilities split between current and noncurrent portions.
- Report interest paid on finance leases as operating cash flow and principal as financing cash flow; operating lease payments are
 entirely operating cash flows.
- Disclose qualitative information, maturity analyses, weighted-average lease term, and discount rates.

Lessee accounting questions combine time value of money with presentation and disclosure rules—practice full amortization schedules
and journal entries for both finance and operating leases.
