# Lease Accounting

Before Accounting Standards Codification (ASC) 842, a lessee could keep most of its leases off the balance sheet. Today a lessee recognizes almost every lease as an asset and a liability, and the classification question (finance lease or operating lease) decides only how the cost shows up in the income statement. FAR tests lessee accounting: classifying the lease, measuring the lease liability and right-of-use asset, recording the entries, computing lease cost, and handling residual value guarantees, purchase options, and variable payments. Lessor accounting is a BAR topic, covered in the BAR [Leases](../../bar/technical-accounting-combinations-and-reporting/leases.md) chapter.

## What Is a Lease?

A **lease** is a contract that conveys the right to control the use of an identified asset for a period of time in exchange for consideration. The key question is whether the customer has the **right to control the use** of the asset: it directs how and for what purpose the asset is used, and it obtains substantially all of the asset's economic benefits during the period of use. A contract to have a supplier deliver goods using whatever trucks it chooses is a service, not a lease of the trucks.

---

## Lease and Non-Lease Components

A contract may contain **lease components** (the right to use an asset) and **non-lease components** (services such as maintenance). Costs of the lessor such as property taxes and insurance are not separate components; payments for them are allocated to the lease and non-lease components.

The general rule is to separate each lease component and allocate the consideration based on relative standalone prices. As a **practical expedient**, a lessee may elect (by class of underlying asset) to combine lease and non-lease components into a single lease component.

Bear Co. leases office space for \$10,000 per month. The payment includes \$1,500 per month for common area maintenance (CAM). If Bear Co. elects the practical expedient, the entire \$10,000 is treated as a lease payment. Otherwise, Bear Co. allocates the \$10,000 between the lease and the CAM service based on relative standalone prices.

---

## Classification: Finance vs. Operating Lease (OWNES)

A lessee classifies a lease as a **finance lease** if it meets **any one** of the five OWNES criteria. Each criterion asks, in a different way, whether the lessee has effectively bought the asset:

| Letter | Criterion | Test |
|---|---|---|
| **O** | Ownership transfer | Title transfers to the lessee by the end of the lease |
| **W** | Written purchase option | Lessee has a purchase option it is reasonably certain to exercise |
| **N** | Ninety percent | Present value (PV) of lease payments plus any residual value guaranteed by the lessee ≥ 90% of the asset's fair value |
| **E** | Economic life | Lease term ≥ 75% of the asset's remaining economic life |
| **S** | Specialized asset | Asset is so specialized it has no alternative use to the lessor at the end of the lease |

If **none** of the criteria are met, the lease is an **operating lease**. (ASC 842 says "substantially all" and "major part"; 90% and 75% are the commonly used thresholds.) Both kinds of leases put a **right-of-use (ROU) asset** and a **lease liability** on the balance sheet. The difference is in how expense is recognized.

---

## Measuring the Lease Liability and ROU Asset

At the commencement date, the lessee measures the **lease liability** at the present value of the lease payments not yet paid. Three inputs drive the calculation: the lease term, the lease payments, and the discount rate.

### Lease Term

The lease term is the **noncancelable period**, plus periods covered by an **option to extend** that the lessee is reasonably certain to exercise, plus periods covered by an **option to terminate** that the lessee is reasonably certain **not** to exercise.

### Lease Payments

Lease payments include:

- Fixed payments, less any lease incentives receivable
- Variable payments that depend on an **index or rate**
- The exercise price of a purchase option the lessee is reasonably certain to exercise
- Termination penalties, if the lease term reflects the lessee exercising a termination option
- Amounts **probable of being owed** under residual value guarantees

Three items deserve a closer look, because the exam tests them by name.

**Purchase options.** An option's exercise price is included only if the lessee is **reasonably certain** to exercise it. If it is, the lease is also a finance lease (the W criterion), and the ROU asset is amortized over the asset's useful life rather than the lease term, because the lessee expects to keep the asset.

**Residual value guarantees.** In a residual value guarantee, the lessee promises the lessor that the asset will be worth at least a stated amount at the end of the lease and agrees to make up any shortfall. The lessee includes only the amount it **expects to owe**, not the full guaranteed amount. Grizzly Inc. guarantees that a leased truck will be worth \$10,000 at the end of the lease and expects it to be worth \$7,000. Grizzly includes the expected \$3,000 shortfall in its lease payments. (For the 90% classification test, by contrast, the full guaranteed amount is used.)

**Variable payments.** Payments that vary with an **index or rate**, such as rent adjusted annually for the consumer price index, are included using the index or rate at commencement. Later changes in the index are recognized in expense as they occur; the liability is not remeasured for them alone. Payments based on **usage or performance**, such as rent equal to a percentage of the lessee's sales, are **excluded** from the lease liability entirely and expensed as incurred.

### Discount Rate

The lessee uses the rate **implicit in the lease** if it is readily determinable. Otherwise, it uses its **incremental borrowing rate**. A lessee that is not a public business entity may elect, by class of underlying asset, to use a risk-free rate instead.

### The ROU Asset

The **ROU asset** starts at the amount of the lease liability, adjusted for three items: add lease payments made at or before commencement and **initial direct costs** (incremental costs of obtaining the lease, such as commissions), and subtract **lease incentives** received.

---

## Lessee Operating Lease Accounting

Under an operating lease, the lessee recognizes a **single lease cost on a straight-line basis** over the lease term.

Polar Co. enters a 5-year operating lease for equipment on January 1. Annual payments of \$24,000 are due at the **end** of each year. The incremental borrowing rate is 6%.

### Initial Measurement

$$
\text{PV of Lease Payments} = \$24{,}000 \times \frac{1 - (1.06)^{-5}}{0.06} = \$24{,}000 \times 4.21236 = \$101{,}097
$$

```journal
Dr. Right-of-use asset        101,097
    Cr. Lease liability               101,097
```

### Year 1: Payment and Expense

Straight-line lease expense is \$24,000 per year (\$120,000 total payments ÷ 5 years). Behind that single expense, the liability is still accounted for like a loan:

- Interest on the lease liability: \$101,097 × 6% = \$6,066
- Lease liability reduction: \$24,000 payment - \$6,066 interest = \$17,934
- ROU asset amortization (the plug that keeps total expense straight-line): \$24,000 - \$6,066 = \$17,934

Record the payment and the straight-line lease expense:

```journal
Dec 31
Dr. Lease expense              24,000
    Cr. Cash                           24,000
```

Then reduce the lease liability and the ROU asset by the same amount:

```journal
Dec 31
Dr. Lease liability            17,934
    Cr. Right-of-use asset             17,934
```

At the end of Year 1, both the lease liability and the ROU asset are \$83,163 (\$101,097 - \$17,934). Because the payments are level and there is no prepaid rent, lease incentive, or initial direct cost, the two balances stay equal throughout the lease.

---

## Lessee Finance Lease Accounting

Under a finance lease, the lessee recognizes **two separate expenses**: amortization of the ROU asset and interest on the lease liability. Because interest is highest when the liability is largest, total expense is higher in the early years (front-loaded).

Grizzly Inc. enters a 4-year finance lease on January 1 for a machine with a fair value of \$80,000. Annual payments are \$22,000 at the end of each year. The rate implicit in the lease is 5%.

### Initial Measurement

$$
\text{PV} = \$22{,}000 \times \frac{1 - (1.05)^{-4}}{0.05} = \$22{,}000 \times 3.54595 = \$78{,}011
$$

The PV is 97.5% of the machine's \$80,000 fair value, so the 90% test is met and the lease is a finance lease.

```journal
Dr. Right-of-use asset         78,011
    Cr. Lease liability                78,011
```

### Year 1

- **Interest expense:** \$78,011 × 5% = \$3,901
- **Lease liability reduction:** \$22,000 - \$3,901 = \$18,099

```journal
Dr. Interest expense            3,901
Dr. Lease liability            18,099
    Cr. Cash                           22,000
```

**ROU asset amortization** is straight-line over the lease term. (If ownership transfers or a purchase option is reasonably certain to be exercised, the asset is amortized over its useful life instead.)

$$
\frac{\$78{,}011}{4} = \$19{,}503
$$

```journal
Dr. Amortization expense       19,503
    Cr. Right-of-use asset             19,503
```

Total Year 1 expense is \$23,404 (\$3,901 + \$19,503), more than the \$22,000 cash payment. That is the front-loading effect.

### Amortization Schedule

| Year | Beg. Liability | Interest (5%) | Payment  | Principal | End Liability |
| ---- | -------------- | ------------- | -------- | --------- | ------------- |
| 1    | \$78,011       | \$3,901       | \$22,000 | \$18,099  | \$59,912      |
| 2    | \$59,912       | \$2,996       | \$22,000 | \$19,004  | \$40,908      |
| 3    | \$40,908       | \$2,045       | \$22,000 | \$19,955  | \$20,953      |
| 4    | \$20,953       | \$1,047       | \$22,000 | \$20,953  | \$0           |

Year 4 interest is rounded so the liability ends at zero.

---

## Comparison: Operating vs. Finance Lease

| Feature                 | Operating Lease                    | Finance Lease                                 |
| ----------------------- | ---------------------------------- | --------------------------------------------- |
| Balance sheet           | ROU asset + Lease liability        | ROU asset + Lease liability                   |
| Income statement        | Single straight-line lease expense | Amortization + Interest (front-loaded)        |
| Cash flow statement     | Operating section                  | Principal in financing; interest in operating |
| Total expense over life | Equals total lease payments        | Equals total lease payments                   |

---

## Short-Term Lease Exception

A lessee may elect **not** to recognize an ROU asset and lease liability for a lease with a term of **12 months or less** at commencement that has no purchase option the lessee is reasonably certain to exercise. The election is made by **class of underlying asset**, not lease by lease. Under this election, lease payments are recognized as expense on a **straight-line basis** over the lease term.

Kodiak Partners leases a copier for 10 months at \$500 per month and has elected the exception for office equipment. Each month it records:

```journal
Dr. Lease expense                 500
    Cr. Cash                             500
```

---

## Leasehold Improvements and Common Control Leases

Improvements a lessee makes to leased property, such as interior build-outs, are normally amortized over the **shorter** of their useful life and the remaining lease term. ASU 2023-01 created an exception for leases between entities under **common control** (for example, two companies owned by the same parent). In those leases, the lessee amortizes the improvements over their useful life to the common control group, regardless of the lease term, for as long as it controls the use of the leased asset. If the lessee later stops controlling the asset, the remaining improvements are accounted for as a transfer between entities under common control, through equity. The same ASU lets private companies (and not-for-profit entities that are not conduit bond obligors) use the written terms of a common control arrangement to decide whether a lease exists and how to classify it.

---

## Disclosures

Lessees disclose information about the nature of their leasing activities; finance and operating lease costs; a maturity analysis of lease liabilities (each of the next five years, then a total for the remaining years); the weighted-average remaining lease term and discount rate; and ROU assets obtained in exchange for new lease liabilities.
