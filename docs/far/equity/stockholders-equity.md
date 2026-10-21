# Stockholders' Equity

**Stockholders' equity** is the residual interest in a corporation's assets after deducting its liabilities: the owners' claim on the company's net assets. Unlike assets and liabilities, equity is not measured directly. Its balance is the cumulative result of transactions with owners (issuing stock, buying it back, paying dividends) and of the company's earnings. FAR tests those owner transactions in journal entry form, especially stock issuances, treasury stock, stock dividends, and stock splits. This chapter starts with the components of equity, then works through common and preferred stock, treasury stock, distributions to shareholders, and retained earnings, and ends with book value per share.

## Components of Equity

The balance sheet reports equity in five major components:

$$\text{Stockholders' equity} = \text{Capital stock} + \text{APIC} + \text{Retained earnings} + \text{AOCI} - \text{Treasury stock}$$

| Component | Description |
|---|---|
| **Capital stock** | Par or stated value of issued shares (common and preferred) |
| **Additional paid-in capital (APIC)** | Amounts paid in by owners above par value, from stock issuances and from certain treasury stock and other equity transactions |
| **Retained earnings** | Cumulative net income less cumulative dividends and other adjustments |
| **Accumulated other comprehensive income (AOCI)** | Cumulative other comprehensive income (OCI) items, such as unrealized gains and losses on available-for-sale (AFS) debt securities, foreign currency translation adjustments, pension adjustments, and cash flow hedges |
| **Treasury stock** | Cost (or par value) of the company's own shares that have been reacquired and not retired; a deduction |

The first two components together are **contributed capital** (or paid-in capital): what owners have invested. Retained earnings is **earned capital**. Equity is also called shareholders' equity or, in general, net assets. Partnerships use partners' capital accounts instead, covered in the next chapter.

---

## Common Stock

Common stock is the basic ownership interest in a corporation. Common stockholders typically have the right to vote (electing the board of directors and approving major corporate actions), to share in dividends when the board declares them, and to receive a proportionate share of the assets left in liquidation after all other claims are paid. Some corporations also grant **preemptive rights**, which let existing stockholders maintain their percentage ownership when new shares are issued.

### Issuing Common Stock

When a corporation issues common stock for cash, it credits **Common Stock** for the par value of the shares and **APIC** for the excess. Par value is a legal amount with no connection to market value, so the split between the two accounts matters for presentation, not for total equity. Bear Co. issues 10,000 shares of \$2 par value common stock at \$25 per share:

```journal
Dr. Cash[a]                     250,000
    Cr. Common Stock[e]             20,000
    Cr. Additional Paid-in Capital[e] 230,000
```

Direct costs of issuing stock, such as underwriting and legal fees, reduce the proceeds, so they are debited to APIC rather than expensed.

Some states allow **no-par stock**. If no-par stock has a **stated value**, the stated value is treated like par value. If there is no stated value, the entire proceeds are credited to Common Stock. When Grizzly Inc. issues 1,000 shares of no-par stock with no stated value at \$40 per share, it credits Common Stock for the full \$40,000.

### Issuing Stock for Noncash Consideration

Stock issued for property or services is recorded at the **fair value of the consideration received** or the **fair value of the stock issued**, whichever is more readily determinable. Polar Co. issues 5,000 shares of \$1 par common stock, which trades at \$30 per share, in exchange for a building with an appraised value of \$140,000. A quoted market price is more reliable than an appraisal, so Polar uses the stock's fair value of \$150,000 (5,000 × \$30):

```journal
Dr. Building[a]                 150,000
    Cr. Common Stock[e]             5,000
    Cr. Additional Paid-in Capital[e] 145,000
```

Stock issued to **nonemployees** for goods or services is a share-based payment under ASC 718 and is measured at the **grant-date fair value of the equity instruments issued**. If Sloth Security issues 500 shares of \$1 par common stock (market price \$40 per share) to an attorney for legal services billed at \$19,000, it records legal expense of \$20,000 (500 × \$40), Common Stock of \$500, and APIC of \$19,500. Share-based payments in general are a BAR topic.

### Stock Rights and Subscriptions

**Stock rights** (or warrants) give existing shareholders the right to buy additional shares at a specified price. Issuing rights to existing shareholders requires only a memo entry. If they are exercised, the corporation records an ordinary stock issuance at the exercise price; if they expire, nothing is recorded.

A **stock subscription** is a contract in which an investor agrees to buy shares now and pay for them later, often in installments. The shares are issued only when they are fully paid. Panda Industries receives subscriptions for 2,000 shares of \$5 par common stock at \$22 per share and collects a 50% down payment:

```journal
Dr. Stock Subscriptions Receivable    44,000
    Cr. Common Stock Subscribed[e]       10,000
    Cr. APIC (Common)[e]                 34,000
```

```journal
Dr. Cash[a]                           22,000
    Cr. Stock Subscriptions Receivable    22,000
```

When the subscriber pays the remaining \$22,000, Panda records the cash, then issues the shares by debiting Common Stock Subscribed and crediting Common Stock for \$10,000. Until then, Stock Subscriptions Receivable is generally reported as a **deduction from stockholders' equity**, not as an asset. It may be shown as an asset only when there is substantial evidence that the subscriber will pay within a reasonably short period, and Securities and Exchange Commission (SEC) registrants generally must report it as contra-equity.

---

## Preferred Stock

Preferred stock carries **preferential rights** over common stock, usually to dividends and to assets in liquidation, and usually gives up voting rights in exchange. Its features vary:

| Type                       | Feature                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Cumulative**             | Unpaid dividends accumulate as **dividends in arrears** and must be paid before any common dividends         |
| **Noncumulative**          | Unpaid dividends do not accumulate; skipped dividends are lost permanently                                   |
| **Participating**          | After receiving its stated dividend, preferred stock shares in additional dividends with common stock        |
| **Convertible**            | Can be exchanged for common stock at a predetermined conversion ratio                                        |
| **Callable**               | The corporation can redeem the stock at a specified call price                                               |
| **Mandatorily redeemable** | Must be redeemed on a specified date or upon an event certain to occur |

One feature changes the classification entirely. Under ASC 480, **mandatorily redeemable** preferred stock is a **liability**, not equity, because the issuer has an unconditional obligation to pay it off. Dividends on it are reported as **interest expense**. Callable and convertible preferred stock remain equity, because redemption or conversion is not certain.

Panda Industries issues 2,000 shares of \$100 par, 6% cumulative preferred stock at \$108 per share:

```journal
Dr. Cash[a]                     216,000
    Cr. Preferred Stock[e]          200,000
    Cr. Additional Paid-in Capital (Preferred)[e]  16,000
```

### Converting Preferred to Common

Conversions of convertible preferred stock use the **book value method**: the carrying amount of the preferred stock moves to common stock, and no gain or loss is recognized. Panda Industries converts 1,000 shares of \$50 par preferred stock, originally issued at \$55 per share, into 4,000 shares of \$5 par common stock:

```journal
Dr. Preferred Stock[e]          50,000
Dr. APIC (Preferred)[e]          5,000
    Cr. Common Stock[e]             20,000
    Cr. APIC (Common)[e]            35,000
```

### Allocating Dividends Between Preferred and Common

When both classes are outstanding, dividends go to preferred stockholders first, including any arrears on cumulative preferred stock. Dividends in arrears are **not a liability** until the board declares them, but they must be **disclosed** in the notes.

Polar Co. has 10,000 shares of \$100 par, 6% cumulative preferred stock and 200,000 shares of \$1 par common stock. Preferred dividends are two years in arrears, and the board declares total dividends of \$200,000 in Year 3. The annual preferred dividend is \$60,000 (10,000 × \$100 × 6%):

| Allocation | Preferred | Common |
|---|---|---|
| Arrears (2 years × \$60,000) | \$120,000 | \$0 |
| Current year preference | \$60,000 | \$0 |
| Remainder (\$200,000 - \$180,000) | \$0 | \$20,000 |
| **Total** | **\$180,000** | **\$20,000** |

Some preferred stock pays **paid-in-kind (PIK) dividends**: additional preferred shares instead of cash. Under ASU 2026-01, a PIK dividend on equity-classified preferred stock is initially measured using the PIK rate in the preferred stock agreement, for example the PIK rate times the liquidation value of the preferred shares outstanding. If Polar's preferred stock instead paid a 6% PIK dividend on a \$1,000,000 liquidation value, the dividend would be measured at \$60,000. ASU 2026-01 is eligible for testing starting January 1, 2027; before that, GAAP had no specific guidance and practice varied.

---

## Treasury Stock

**Treasury stock** is a corporation's own stock that has been **issued and later reacquired** but not retired. Companies buy back shares to return cash to shareholders, to offset shares issued to employees, or to support the stock price. Treasury stock is not an asset, because a company cannot own itself. It is reported as a **deduction from total stockholders' equity**. Treasury shares are issued but not outstanding: they have no voting or dividend rights and are excluded from earnings per share (EPS). No gain or loss is ever recognized on treasury stock transactions, because they are transactions with owners.

GAAP allows two methods. The **cost method** is far more common.

### Cost Method

Under the cost method, treasury stock is recorded at its **reacquisition cost**. Polar Co. reacquires 1,000 shares of its own \$5 par common stock at \$35 per share:

```journal
Dr. Treasury Stock[ce]          35,000
    Cr. Cash[a]                     35,000
```

Polar later reissues 400 of the treasury shares at \$40 per share. The \$5 per share excess over cost (\$2,000) is credited to APIC (Treasury Stock):

```journal
Dr. Cash[a]                     16,000
    Cr. Treasury Stock[ce]          14,000
    Cr. APIC (Treasury Stock)[e]    2,000
```

Polar then reissues the remaining 600 shares at \$30 per share, a shortfall of \$3,000 (\$5 × 600) below cost. The shortfall is charged first against the \$2,000 balance in APIC (Treasury Stock), and the remaining \$1,000 goes to retained earnings. APIC (Treasury Stock) is never debited below zero.

```journal
Dr. Cash[a]                     18,000
Dr. APIC (Treasury Stock)[e]     2,000
Dr. Retained Earnings[e]         1,000
    Cr. Treasury Stock[ce]          21,000
```

Suppose instead that, before any reissuance, Polar **retires** 200 of its treasury shares. The shares were originally issued at \$25 (\$5 par plus \$20 APIC per share) and reacquired at \$35. Retirement removes the par and original APIC for those shares, and the \$2,000 excess of cost over the original issue price is charged to retained earnings:

```journal
Dr. Common Stock[e]              1,000
Dr. APIC (Common)[e]             4,000
Dr. Retained Earnings[e]         2,000
    Cr. Treasury Stock[ce]           7,000
```

If a shareholder **donates** shares back to the corporation, only a memo entry is made, because the corporation gives up nothing. When the shares are later resold, the proceeds are credited to APIC (Donated Capital).

### Par Value Method

The par value method treats a repurchase as if the shares were retired. Treasury stock is recorded at **par value**, the original APIC on those shares is removed, and any excess of cost over the original issue price is charged to retained earnings (or credited to APIC from treasury stock if the cost is lower). Grizzly Inc. reacquires 500 shares of its own \$10 par common stock, originally issued at \$28 per share, at \$32 per share:

```journal
Dr. Treasury Stock[ce]           5,000
Dr. APIC (Common)[e]             9,000
Dr. Retained Earnings[e]         2,000
    Cr. Cash[a]                     16,000
```

Reissuance is then treated like a **new issuance**: credit Treasury Stock for par and APIC for the excess. Grizzly reissues 300 of the treasury shares at \$36 per share:

```journal
Dr. Cash[a]                     10,800
    Cr. Treasury Stock[ce]           3,000
    Cr. APIC (Common)[e]             7,800
```

| Feature                    | Cost Method               | Par Value Method               |
| -------------------------- | ------------------------- | ------------------------------ |
| Treasury stock recorded at | Reacquisition cost        | Par value                      |
| APIC affected at purchase? | No                        | Yes, original APIC removed     |
| Total equity after purchase | Reduced by the cost paid | Reduced by the cost paid       |
| Presentation               | Single deduction at the end of equity | Deduction from capital stock, with APIC already adjusted |

---

## Distributions to Shareholders

### Cash Dividends

Three dates matter for a cash dividend:

| Date | Event | Journal Entry? |
|---|---|---|
| **Declaration date** | Board declares the dividend; a liability is created | Yes |
| **Record date** | Determines which shareholders receive the dividend | No |
| **Payment date** | Cash is distributed to shareholders | Yes |

On March 1, Bear Co. declares a \$2.00 per share cash dividend on 50,000 shares outstanding, payable April 15 to shareholders of record on March 20:

```journal
Mar 1
Dr. Retained Earnings (or Dividends Declared)[e]  100,000
    Cr. Dividends Payable[l]                       100,000
```

```journal
Apr 15
Dr. Dividends Payable[l]        100,000
    Cr. Cash[a]                     100,000
```

### Property Dividends

A **property dividend** distributes noncash assets. The asset is first **remeasured to fair value** on the declaration date, with the gain or loss recognized in income, and the dividend is then recorded at that fair value. Cub Entertainment declares a dividend of investments with a carrying amount of \$60,000 and a fair value of \$75,000:

```journal
Dr. Investments[a]              15,000
    Cr. Gain on Appreciation of Investments  15,000
```

```journal
Dr. Retained Earnings[e]        75,000
    Cr. Property Dividends Payable[l] 75,000
```

On the payment date, Cub debits Property Dividends Payable and credits Investments for \$75,000.

### Stock Dividends

A **stock dividend** distributes additional shares to existing shareholders. No assets leave the corporation, and each shareholder's percentage ownership is unchanged; the dividend simply moves an amount from retained earnings to contributed capital. How much it moves depends on the size of the dividend.

A **small stock dividend** (less than 20% to 25% of the shares outstanding) is recorded at the **fair value** of the shares distributed, on the theory that it is small enough not to affect the market price. Cub Entertainment has 100,000 shares outstanding (\$1 par, market price \$30) and declares a 10% stock dividend of 10,000 shares:

```journal
Dr. Retained Earnings[e]        300,000
    Cr. Common Stock Dividend Distributable[e]  10,000
    Cr. APIC (Common)[e]                     290,000
```

When the shares are distributed, Cub debits Common Stock Dividend Distributable and credits Common Stock for \$10,000. Between declaration and distribution, Common Stock Dividend Distributable is reported in **equity**, not as a liability, because the company will never pay out assets to settle it.

A **large stock dividend** (more than 20% to 25%) is likely to reduce the market price per share, much like a split, so it is recorded at **par value** only. If Cub instead declares a 50% stock dividend of 50,000 shares, it debits Retained Earnings and credits Common Stock Dividend Distributable for \$50,000 (50,000 × \$1).

### Stock Splits

A **stock split** increases the number of shares outstanding and reduces the par value per share in proportion, so total par value does not change. **No journal entry is required**; only a memo entry is made. Grizzly Inc. has 100,000 shares of \$10 par common stock outstanding and declares a 2-for-1 split:

| | Before Split | After Split |
|---|---|---|
| Shares outstanding | 100,000 | 200,000 |
| Par value per share | \$10 | \$5 |
| Total par value | \$1,000,000 | \$1,000,000 |

If the par value is **not** changed, the transaction is a stock split effected in the form of a dividend: the par value of the new shares is transferred to Common Stock, as for a large stock dividend.

| Type                                 | Assets Leave? | Retained Earnings Impact           | Shares Change? | Par Value Change? |
| ------------------------------------ | ------------- | ---------------------------------- | -------------- | ----------------- |
| Cash dividend                        | Yes           | Decrease (amount declared)         | No             | No                |
| Property dividend                    | Yes           | Decrease (fair value of property)  | No             | No                |
| Small stock dividend (under 20%-25%) | No            | Decrease (fair value of new shares) | Increase      | No                |
| Large stock dividend (over 20%-25%)  | No            | Decrease (par value of new shares) | Increase       | No                |
| Stock split                          | No            | No change                          | Increase       | Decrease          |

:::tip[Stock dividend or stock split?]

A small stock dividend transfers fair value from retained earnings to paid-in capital. A large stock dividend transfers par value. A stock split changes the number of shares and the par value but transfers nothing. In all three cases, total stockholders' equity is unchanged.

:::

---

## Retained Earnings

Retained earnings is the corporation's cumulative net income since inception, less cumulative dividends declared, plus or minus prior period adjustments:

$$\text{Ending RE} = \text{Beginning RE} + \text{Net income} - \text{Dividends declared} \pm \text{Prior period adjustments}$$

As the treasury stock entries showed, retained earnings also absorbs certain charges from equity transactions once the related APIC is used up.

### Prior Period Adjustments

**Prior period adjustments** correct errors in previously issued financial statements (ASC 250). The correction is reported, net of tax, as an adjustment to the **beginning balance** of retained earnings for the earliest period presented, and any prior periods presented are restated.

Bear Co. discovers in Year 3 that it failed to record \$30,000 of depreciation expense in Year 1. Its tax return correctly deducted the depreciation, and the tax rate is 25%. Because book income was overstated, Bear recorded \$7,500 too much deferred tax expense and a deferred tax liability it should not have. The correction is:

```journal
Dr. Retained Earnings[e]        22,500
Dr. Deferred Tax Liability[l]    7,500
    Cr. Accumulated Depreciation[ca] 30,000
```

The retained earnings adjustment is the error net of tax: \$30,000 × (1 - 0.25) = \$22,500. If the depreciation had also been omitted from the tax return, the \$7,500 debit would go to Income Tax Refund Receivable instead. Error corrections are covered fully in the accounting changes chapter.

### Appropriations

The board of directors may **appropriate** (restrict) part of retained earnings for a specific purpose, such as plant expansion or to signal a loan covenant restriction. Appropriated retained earnings are still part of total retained earnings, and the appropriation sets aside no cash or other asset. It is simply a reclassification within equity that tells readers those earnings are not available for dividends.

---

## Book Value Per Share

**Book value per share** measures the net assets attributable to each share of common stock:

$$\text{Book value per share} = \frac{\text{Total stockholders' equity} - \text{Preferred stock equity}}{\text{Common shares outstanding}}$$

**Preferred stock equity** is the amount preferred stockholders would receive: the call price or liquidation value of the preferred stock (par value if neither applies), plus any dividends in arrears on cumulative preferred stock.

Cub Entertainment reports total stockholders' equity of \$1,200,000 and 50,000 common shares outstanding. It also has 1,000 shares of \$100 par, 8% cumulative preferred stock, callable at \$105, with two years of dividends in arrears (\$16,000):

$$\text{Preferred stock equity} = (1{,}000 \times \$105) + \$16{,}000 = \$121{,}000$$

$$\text{Book value per share} = \frac{\$1{,}200{,}000 - \$121{,}000}{50{,}000} = \$21.58$$

## Noncontrolling Interest

When a parent consolidates a subsidiary that it does not wholly own, the portion of the subsidiary's equity that belongs to outside shareholders is reported as **noncontrolling interest (NCI)**. NCI is presented **within equity** in the consolidated balance sheet, separately from the parent's equity, and it increases for the noncontrolling shareholders' share of the subsidiary's net income and decreases for their share of its dividends. The consolidated financial statements chapter covers the computations.

---

## Summary

| Topic                                  | Key Rule                                                |
| -------------------------------------- | ------------------------------------------------------- |
| Common stock issuance                  | Credit par to Common Stock, excess to APIC; issue costs reduce APIC |
| Noncash issuance                       | Fair value of stock or of consideration received, whichever is more readily determinable |
| Mandatorily redeemable preferred stock | Classify as a **liability**; dividends are interest expense |
| Cumulative preferred arrears           | Disclose in notes; not a liability until declared       |
| Treasury stock (cost method)           | Record at reacquisition cost; shortfalls on reissue hit APIC (Treasury Stock), then retained earnings |
| Treasury stock (par value method)      | Record at par; remove original APIC at purchase         |
| Small stock dividend                   | Record at **fair value**; debit Retained Earnings       |
| Large stock dividend                   | Record at **par value**; debit Retained Earnings        |
| Stock split                            | Memo entry only; par value decreases, shares increase   |
| Property dividend                      | Remeasure to **fair value**; recognize gain or loss     |
| Prior period adjustment                | Adjust beginning retained earnings, net of tax          |
| Noncontrolling interest                | Report in equity, separate from parent's equity         |
