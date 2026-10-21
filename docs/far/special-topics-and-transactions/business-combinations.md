# Business Combinations

A **business combination** occurs when one company, the **acquirer**, obtains control of a business. FAR tests consolidated financial statements, and every consolidation of an acquired subsidiary starts from numbers set on the acquisition date: the fair value of what was acquired, the noncontrolling interest, and goodwill. This chapter covers those foundations and the elimination entry they produce, which the [Consolidated Financial Statements](./consolidated-financial-statements.md) chapter then builds on. The topic as a whole, including business versus asset acquisitions, the consideration transferred, contingent consideration, and measurement period adjustments, is tested in the BAR section and covered in depth in the BAR [Business Combinations](../../bar/technical-accounting-combinations-and-reporting/business-combinations.md) chapter.

## The Acquisition Method

Under Accounting Standards Codification (ASC) 805, every business combination is accounted for using the **acquisition method**. (The older pooling-of-interests method is no longer permitted.) The acquirer:

1. Identifies the **acquirer**
2. Determines the **acquisition date**, the date it obtains control
3. Recognizes and measures the **identifiable assets acquired**, the **liabilities assumed**, and any **noncontrolling interest (NCI)**
4. Recognizes and measures **goodwill** or a **gain from a bargain purchase**

The guiding idea is that the acquirer has bought the acquiree's assets and liabilities at current prices. Identifiable assets acquired and liabilities assumed are therefore measured at **fair value (FV)** on the acquisition date, with limited exceptions such as deferred taxes and employee benefits, which follow their own standards. The acquiree's old book values do not carry over.

---

## Goodwill and Bargain Purchases

**Goodwill** is what the acquirer pays for that cannot be identified as a separate asset, such as an assembled workforce and expected synergies. It is measured as a residual:

$$
\text{Goodwill} = (\text{Consideration Transferred} + \text{NCI at FV}) - \text{FV of Identifiable Net Assets}
$$

Goodwill is recognized only in a business combination; internally generated goodwill is never capitalized. It is **not amortized**. Instead, it is tested for **impairment** at least annually at the reporting unit level. Private companies (and not-for-profit entities) may elect an alternative that amortizes goodwill straight-line over 10 years or less.

If the formula produces a negative number, the acquirer has made a **bargain purchase**: the fair value of the identifiable net assets exceeds the consideration plus the NCI. Because a bargain is unusual, the acquirer must first **reassess** whether it has identified and measured all assets acquired and liabilities assumed correctly, and **review** the procedures used to measure the fair values. If a bargain still exists, the acquirer recognizes the gain in **earnings** on the acquisition date.

Grizzly Inc. acquires 100% of Sloth Security for \$400,000. After the required reassessment, Sloth's identifiable net assets have a fair value of \$450,000, so Grizzly recognizes a \$50,000 bargain purchase gain:

```journal
Dr. Net identifiable assets    450,000
    Cr. Cash                           400,000
    Cr. Gain on bargain purchase        50,000
```

---

## Example: Acquisition with a Noncontrolling Interest

Bear Co. acquires 80% of Polar Co. on January 1 for **\$640,000** of consideration. The fair value of the 20% NCI is **\$160,000**. Polar Co.'s balances at acquisition are:

| Account | Book Value | Fair Value |
|---|---|---|
| Total assets | \$700,000 | \$850,000 |
| Total liabilities | \$200,000 | \$200,000 |
| **Net assets** | **\$500,000** | **\$650,000** |

Polar Co.'s book equity consists of common stock of \$100,000, additional paid-in capital (APIC) of \$150,000, and retained earnings of \$250,000, a total of \$500,000.

Goodwill is:

$$
\text{Goodwill} = (\$640{,}000 + \$160{,}000) - \$650{,}000 = \$150{,}000
$$

The assets must also be stepped up from book value to fair value: \$850,000 - \$700,000 = \$150,000. Assume \$50,000 of that step-up is a customer relationship intangible that Polar never recorded (internally developed intangibles are not on the acquiree's books), and \$100,000 relates to Polar's equipment.

### The Elimination Entry

In the consolidation workpapers, the parent's investment account is replaced with the subsidiary's assets and liabilities at fair value. The entry is often remembered as **CAR IN BIG**:

| Letter | Action | Side |
|---|---|---|
| **C** | Eliminate subsidiary **Common stock** | Debit |
| **A** | Eliminate subsidiary **APIC** | Debit |
| **R** | Eliminate subsidiary **Retained earnings** | Debit |
| **I** | Eliminate the parent's **Investment** account | Credit |
| **N** | Record the **Noncontrolling interest** at fair value | Credit |
| **B** | Adjust net assets from **Book value** to 100% fair value | Debit (credit if FV is below book) |
| **I** | Record **Identifiable intangibles** at fair value | Debit |
| **G** | Record **Goodwill** | Debit |

```journal
Dr. Common stock (Polar)       100,000
Dr. APIC (Polar)               150,000
Dr. Retained earnings (Polar)  250,000
Dr. Equipment step-up          100,000
Dr. Customer relationships      50,000
Dr. Goodwill                   150,000
    Cr. Investment in Polar            640,000
    Cr. Noncontrolling interest        160,000
```

The debits total \$800,000, the **full (100%) fair value** of Polar: the parent's \$640,000 plus the NCI's \$160,000. That is also the fair value of the identifiable net assets (\$650,000) plus goodwill (\$150,000), a quick way to check your entry.

---

## Identifiable Intangible Assets

The acquirer recognizes an intangible asset **separately from goodwill** if it meets either of two criteria:

- **Contractual-legal criterion:** the asset arises from contractual or legal rights, whether or not it can be separated from the business.
- **Separability criterion:** the asset can be sold, transferred, licensed, rented, or exchanged on its own.

| Intangible Asset | Criterion Met |
|---|---|
| Patents, trademarks, and registered trade names | Contractual-legal |
| Customer contracts and the related relationships | Contractual-legal |
| Non-compete agreements and licenses | Contractual-legal |
| Customer lists | Separability |
| Unpatented technology and databases | Separability |

In-process research and development acquired in a business combination is also recognized at fair value, as an indefinite-lived intangible until the project is completed or abandoned.

---

## Acquisition-Related Costs

Costs incurred to complete the acquisition, such as finder's fees, advisory, legal, and accounting fees, and due diligence costs, are **expensed as incurred**. They are not part of the consideration transferred and never become part of goodwill.

Bear Co. pays \$25,000 of legal and advisory fees related to the acquisition:

```journal
Dr. Acquisition expense         25,000
    Cr. Cash                            25,000
```

The one exception is the cost of issuing the debt or equity securities used to pay for the acquisition. Those costs follow the related standard: debt issue costs reduce the carrying amount of the debt, and stock issue costs reduce APIC.

---

## Later Adjustments: A Preview of BAR

Two features of ASC 805 can change the acquisition-date numbers after the deal closes. They are covered fully in BAR, but the basic rules are short.

**Contingent consideration**, such as an earn-out tied to future revenue targets, is measured at **fair value** on the acquisition date and included in the consideration transferred. If it is classified as a liability, it is remeasured to fair value each period, with changes reported in **earnings**, not goodwill. If it is classified as equity, it is not remeasured.

**Measurement period adjustments** fix provisional amounts. The acquirer has up to **one year** from the acquisition date to finalize its accounting for facts and circumstances that existed at that date. An adjustment, for example discovering that an acquired building was undervalued, usually changes goodwill. It is recorded in the period it is determined, without restating prior periods, and includes any catch-up effect on earnings, such as extra depreciation since the acquisition date.
