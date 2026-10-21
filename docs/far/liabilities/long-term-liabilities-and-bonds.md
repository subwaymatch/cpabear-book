# Long-Term Liabilities & Bonds Payable

A **long-term liability** is an obligation the entity does not expect to settle within one year or the operating cycle, whichever is longer. Notes and bonds payable are the main examples, and they are where FAR tests long-term debt most heavily: you will price a bond, build an amortization schedule, compute interest expense with discounts, premiums, and issue costs, check whether a borrower has met its debt covenants, and account for debt that is changed, restructured, or retired early. Everything rests on one idea, present value, so the chapter starts there and then moves from notes, to bonds, to what happens when the terms of debt change.

## Time Value of Money Review

A dollar received today is worth more than a dollar received in the future, because today's dollar can earn a return. Debt is therefore recorded at the **present value (PV)** of the payments it requires, discounted at the market rate of interest on the date the debt is issued. Two formulas cover almost every case:

$$
\text{Present Value of a Single Sum} = \frac{FV}{(1 + r)^n}
$$

$$
\text{Present Value of an Ordinary Annuity} = PMT \times \frac{1 - (1 + r)^{-n}}{r}
$$

Here $FV$ is the future value, $PMT$ is the periodic payment, $r$ is the interest rate per period, and $n$ is the number of periods. A bond combines the two: its price is the PV of the face value (a single sum) plus the PV of the interest payments (an annuity).

---

## Notes Payable at Present Value

Long-term notes payable are recorded at the **present value** of their future cash flows, discounted at the market rate at issuance. When the note's stated rate equals the market rate, the PV equals the face amount.

Bear Co. issues a 3-year, \$100,000 note at 8% annual interest when the market rate is also 8%:

$$
\text{PV} = \$100{,}000 \times \frac{1}{(1.08)^3} + \$8{,}000 \times \frac{1 - (1.08)^{-3}}{0.08} = \$100{,}000
$$

```journal
Dr. Cash                      100,000
    Cr. Notes payable                 100,000
```

### Noninterest-Bearing Notes

A **noninterest-bearing note** has no stated interest rate, but no lender actually lends for free. The interest is built into the face amount, so a market rate must be **imputed** to find the note's present value. The difference between face value and PV is recorded as a **discount** and amortized to interest expense over the note's life.

Polar Co. issues a 2-year, \$50,000 noninterest-bearing note for cash when the market rate is 10%:

$$
\text{PV} = \frac{\$50{,}000}{(1.10)^2} = \$41{,}322
$$

```journal
Dr. Cash                       41,322
Dr. Discount on notes payable   8,678
    Cr. Notes payable                  50,000
```

Year 1 interest expense is \$41,322 × 10% = \$4,132:

```journal
Dr. Interest expense            4,132
    Cr. Discount on notes payable       4,132
```

---

## Bonds Payable

A **bond** is a formal debt instrument in which the issuer promises to pay the holder the **face (par) value** at maturity, typically \$1,000 per bond, plus periodic **interest payments** (coupons) at the **stated (coupon) rate**. Bonds come in several forms:

| Type            | Description                                   |
| --------------- | --------------------------------------------- |
| **Debenture**   | Unsecured; backed only by issuer's credit     |
| **Secured**     | Backed by specific collateral                 |
| **Convertible** | Can be converted into common stock            |
| **Callable**    | Issuer can retire early at a call price       |
| **Zero-coupon** | No periodic interest; issued at deep discount |

The stated rate fixes the cash interest. The **effective (market or yield) rate** is the return investors demand, and it sets the price. When the two differ, the bond sells at whatever price makes its yield equal the market rate:

| Coupon vs. Market | Issued At | Carrying Value |
|---|---|---|
| Coupon = Market | **Par** | Face value |
| Coupon > Market | **Premium** | Above face value |
| Coupon < Market | **Discount** | Below face value |

### Bond Pricing

A bond's issue price is the PV of its face value plus the PV of its interest payments, both discounted at the **market rate**.

Grizzly Inc. issues \$500,000 of 5-year, 8% bonds with semiannual interest payments when the market rate is 10%.

- Semiannual coupon: \$500,000 × 8% ÷ 2 = \$20,000
- Periods: 5 × 2 = 10
- Market rate per period: 10% ÷ 2 = 5%

$$
\text{PV of face} = \frac{\$500{,}000}{(1.05)^{10}} = \$306{,}956.63
$$

$$
\text{PV of interest payments} = \$20{,}000 \times \frac{1 - (1.05)^{-10}}{0.05} = \$154{,}434.70
$$

$$
\text{Issue price} = \$306{,}956.63 + \$154{,}434.70 = \$461{,}391.33 \approx \$461{,}391
$$

The coupon rate is below the market rate, so the bonds are issued at a **discount** of \$38,609 (\$500,000 - \$461,391).

```journal
Dr. Cash                      461,391
Dr. Discount on bonds payable  38,609
    Cr. Bonds payable                 500,000
```

### Carrying Value and Issue Costs

The bonds' **carrying value** is face value minus any unamortized discount, or plus any unamortized premium. It moves toward face value as the discount or premium is amortized, and it equals face value at maturity.

**Debt issue costs** (legal, accounting, and underwriting fees) are presented as a **direct deduction** from the carrying amount of the debt, just like a discount, not as a deferred asset. They are amortized to interest expense over the life of the debt using the effective interest method, so they raise the effective rate of the borrowing. A company that pays \$12,000 of fees to issue bonds records:

```journal
Dr. Debt issue costs[cl]       12,000
    Cr. Cash                           12,000
```

### Amortizing a Discount or Premium

GAAP requires the **effective interest method**. It applies a constant rate (the market rate at issuance) to the carrying value each period, so interest expense always reflects the true cost of the borrowing:

$$
\text{Interest Expense} = \text{Carrying Value} \times \text{Market Rate per Period}
$$

$$
\text{Amortization} = \text{Interest Expense} - \text{Cash Interest Paid}
$$

**Period 1 for Grizzly Inc.:**

$$
\text{Interest Expense} = \$461{,}391 \times 5\% = \$23{,}070
$$

$$
\text{Amortization} = \$23{,}070 - \$20{,}000 = \$3{,}070
$$

```journal
Dr. Interest expense           23,070
    Cr. Discount on bonds payable       3,070
    Cr. Cash                           20,000
```

New carrying value = \$461,391 + \$3,070 = \$464,461. The schedule continues the same way:

| Period | Beginning Carrying Value | Interest Expense (5%) | Cash Paid (4%) | Discount Amortized | Ending Carrying Value |
|---|---|---|---|---|---|
| 1 | \$461,391 | \$23,070 | \$20,000 | \$3,070 | \$464,461 |
| 2 | \$464,461 | \$23,223 | \$20,000 | \$3,223 | \$467,684 |
| 3 | \$467,684 | \$23,384 | \$20,000 | \$3,384 | \$471,068 |

The carrying value keeps rising until it reaches the \$500,000 face value at maturity. Because the carrying value grows, interest expense on a **discount** bond **increases** each period. For a **premium** bond the pattern reverses: the carrying value shrinks, so interest expense **decreases**.

The **straight-line method**, which allocates the same amount of discount or premium to each period, is permitted only if the results are **not materially different** from the effective interest method. For Grizzly Inc., straight-line amortization would be \$38,609 ÷ 10 = \$3,861 per period, giving interest expense of \$23,861 every period.

---

## Bonds Issued Between Interest Dates

When bonds are issued between interest payment dates, the buyer pays the issuer **accrued interest** from the last interest date to the issue date. The issuer then pays a full interest payment on the next interest date, so the buyer gets its money back and ends up with interest only for the time it actually held the bond.

Kodiak Partners issues \$200,000 of 6% bonds (interest paid semiannually on January 1 and July 1) at par on March 1. Accrued interest is \$200,000 × 6% × 2/12 = \$2,000:

```journal
Dr. Cash                      202,000
    Cr. Bonds payable                 200,000
    Cr. Interest payable                2,000
```

On July 1, Kodiak Partners pays the full semiannual interest of \$6,000. Only \$4,000 (four months) is interest expense:

```journal
Dr. Interest payable            2,000
Dr. Interest expense            4,000
    Cr. Cash                            6,000
```

## Year-End Accrual

If the fiscal year-end falls between interest payment dates, accrue interest from the last payment date to year-end. Bear Co. has \$300,000 of 8% bonds (interest paid semiannually on April 1 and October 1) and a December 31 year-end. Accrued interest from October 1 to December 31 (3 months):

$$
\$300{,}000 \times 8\% \times \frac{3}{12} = \$6{,}000
$$

```journal
Dr. Interest expense            6,000
    Cr. Interest payable                6,000
```

If the bonds were issued at a premium or discount, the issuer also records amortization for the three months.

---

## Debt Covenants

Lenders protect themselves with **covenants**, which are conditions written into the debt agreement. Some limit what the borrower may do (for example, pay dividends above a set amount). Others require the borrower to maintain financial ratios, such as a minimum current ratio or a maximum debt-to-equity ratio. Violating a covenant is a **technical default**, even if every payment has been made on time.

Checking compliance is a calculation exercise: compute each ratio using the **definitions in the agreement**, which may differ from textbook definitions, and compare it with the required level.

Bear Co.'s loan agreement requires a current ratio of at least 1.5, a debt-to-equity ratio of no more than 2.0, and times interest earned of at least 3.0. At year-end, Bear Co. reports current assets of \$900,000, current liabilities of \$500,000, total liabilities of \$1,800,000, total equity of \$1,000,000, earnings before interest and taxes of \$300,000, and interest expense of \$120,000.

| Covenant | Calculation | Result | Required | Met? |
|---|---|---|---|---|
| Current ratio | \$900,000 ÷ \$500,000 | 1.8 | At least 1.5 | Yes |
| Debt-to-equity | \$1,800,000 ÷ \$1,000,000 | 1.8 | No more than 2.0 | Yes |
| Times interest earned | \$300,000 ÷ \$120,000 | 2.5 | At least 3.0 | No |

Bear Co. has violated the interest coverage covenant. A violation matters for classification when it makes the debt **callable** by the lender. In that case the entire debt is reclassified as a **current liability**, unless one of two exceptions applies:

1. **Waiver.** Before the financial statements are issued (or available to be issued), the lender waives or loses its right to demand repayment for more than one year from the balance sheet date.
2. **Grace period.** The agreement gives the borrower a grace period to cure the violation, and it is probable that the borrower will cure it within that period.

---

## Changing the Terms of Debt

Borrowers and lenders often renegotiate debt: a lower rate, a longer maturity, a smaller principal. The accounting depends on two questions, asked in order. First, is the change a **troubled debt restructuring**? If not, is it a **modification** or an **extinguishment**?

### Troubled Debt Restructuring

A **troubled debt restructuring (TDR)** occurs when the creditor, because of the debtor's **financial difficulty**, grants a **concession** it would not otherwise consider. Both elements are required. Signs of financial difficulty include a current or probable default, bankruptcy proceedings, substantial doubt about the debtor's ability to continue as a going concern, and an inability to obtain funds elsewhere at market rates. A concession exists when the debtor's effective borrowing rate on the restructured debt is **lower** than the effective rate on the old debt. The debtor accounts for a TDR under ASC 470-60, and the method depends on how the debt is settled or changed.

#### Transfer of Assets

The debtor first adjusts the transferred asset to fair value, recognizing an ordinary gain or loss on disposition. It then recognizes a **gain on restructuring** for the excess of the debt's carrying amount over the asset's fair value.

Panda Industries settles a \$500,000 note by transferring land with a book value of \$300,000 and a fair value of \$350,000:

- Gain on disposition of land: \$350,000 - \$300,000 = \$50,000
- Gain on restructuring: \$500,000 - \$350,000 = \$150,000

```journal
Dr. Notes payable             500,000
    Cr. Land                          300,000
    Cr. Gain on disposition of land    50,000
    Cr. Gain on restructuring         150,000
```

#### Equity Transfer

If the debtor issues equity instead, it records the shares at fair value. The difference between the carrying amount of the debt and the fair value of the shares is a gain on restructuring.

#### Modification of Terms

When the terms are modified, the debtor compares the **total undiscounted future cash payments** under the new terms with the **carrying amount** of the debt (including accrued interest):

- **Future payments exceed the carrying amount:** no gain is recognized. The debtor computes a new effective interest rate that equates the future payments with the carrying amount and applies it prospectively.
- **Future payments are less than the carrying amount:** the debtor recognizes a gain for the difference and reduces the carrying amount to the total future payments. Every later payment then reduces the liability, so no interest expense is recognized for the rest of the term.

Sloth Security owes a \$500,000 note plus \$50,000 of accrued interest. Because Sloth is in financial difficulty, the lender reduces the principal to \$400,000, forgives the accrued interest, and lowers the rate to 5% for the remaining 2 years. Future payments total \$440,000 (\$400,000 principal + 2 × \$20,000 interest), which is less than the \$550,000 carrying amount, so Sloth recognizes a \$110,000 gain:

```journal
Dr. Notes payable             500,000
Dr. Interest payable           50,000
    Cr. Restructured note payable     440,000
    Cr. Gain on restructuring         110,000
```

Creditors no longer apply separate TDR accounting. ASU 2022-02 eliminated the creditor TDR recognition and measurement guidance for entities that apply the current expected credit loss (CECL) model in ASC 326. A creditor now accounts for the change under the general loan modification guidance and measures credit losses under CECL. The rules above are for the **debtor**.

### Modification or Extinguishment

If the change is not a TDR, ASC 470-50 asks whether the new terms are **substantially different** from the old ones. They are if the present value of the cash flows under the new terms differs by **at least 10%** from the present value of the remaining cash flows under the original terms, with both discounted at the **original effective interest rate**.

| | Extinguishment (difference of 10% or more) | Modification (difference under 10%) |
|---|---|---|
| Old debt | Derecognized | Kept on the books |
| New debt | Recorded at fair value | Carrying amount continues; a new effective rate is applied prospectively |
| Gain or loss | Recognized now | None |
| Fees paid to the lender | Included in the gain or loss | Amortized as an adjustment of interest expense |
| Third-party costs | Treated as issue costs of the new debt | Expensed as incurred |

For example, if the remaining cash flows on Grizzly Inc.'s note have a present value of \$1,000,000 and the cash flows under the proposed new terms have a present value of \$880,000 (both at the original rate), the 12% difference makes the change an extinguishment.

---

## Extinguishment of Debt

When bonds are retired before maturity (called, or repurchased on the open market), the difference between the **reacquisition price** and the **net carrying amount** is a gain or loss. The net carrying amount is face value plus any unamortized premium, or minus any unamortized discount and issue costs.

$$
\text{Gain (Loss)} = \text{Net Carrying Amount} - \text{Reacquisition Price}
$$

Cub Entertainment retires \$100,000 face value bonds (carrying value \$97,200) at 102:

- Reacquisition price = \$100,000 × 102% = \$102,000
- Unamortized discount = \$100,000 - \$97,200 = \$2,800
- Loss = \$97,200 - \$102,000 = \$4,800

```journal
Dr. Bonds payable             100,000
Dr. Loss on extinguishment      4,800
    Cr. Discount on bonds payable       2,800
    Cr. Cash                          102,000
```

The gain or loss is reported in **income from continuing operations**. The extraordinary item classification no longer exists.

---

## Convertible Bonds and Induced Conversions

**Convertible bonds** let the holder exchange the bonds for a fixed number of the issuer's common shares. For most convertible debt, the issuer records the entire proceeds as a single liability, exactly like ordinary bonds. (The main exceptions are a conversion feature that must be separated as a derivative and debt issued at a substantial premium.) When holders convert under the original terms, the issuer moves the carrying amount of the debt, including any unamortized discount or premium, into equity. **No gain or loss** is recognized.

Sometimes an issuer wants holders to convert early, so it sweetens the deal for a limited time, for example by offering more shares than the original terms require. This is an **induced conversion**. The issuer recognizes an **expense** equal to the fair value of all securities and other consideration transferred in excess of the fair value of the securities issuable under the original conversion terms, measured on the date the holder accepts the offer.

Polar Co. has \$1,000,000 of convertible bonds outstanding with a carrying amount of \$980,000. Each \$1,000 bond converts into 20 shares of \$1 par common stock. To induce conversion, Polar offers 25 shares per bond, and all holders accept when the stock's fair value is \$60 per share.

- Shares under the original terms: 1,000 bonds × 20 = 20,000 shares
- Shares issued: 1,000 bonds × 25 = 25,000 shares
- Induced conversion expense: 5,000 extra shares × \$60 = \$300,000

```journal
Dr. Bonds payable                 1,000,000
Dr. Induced conversion expense      300,000
    Cr. Discount on bonds payable           20,000
    Cr. Common stock                        25,000
    Cr. Additional paid-in capital       1,255,000
```

ASU 2024-04, eligible for testing since January 1, 2026, clarifies which settlements qualify. A settlement is accounted for as an induced conversion only if the offer gives the holder at least the consideration, in form and amount, issuable under the existing conversion privileges, tested on the date the holder accepts. If the conversion terms were changed within the past year without being substantially different, the comparison uses the terms that existed one year earlier. The guidance also applies to debt with cash conversion features and to debt that is not currently convertible. A settlement that fails the test is accounted for as a debt extinguishment.
