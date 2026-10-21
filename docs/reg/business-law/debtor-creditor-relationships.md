# Debtor-Creditor Relationships

## Introduction

A creditor who lends money wants two kinds of protection: someone else to pay if the debtor does not, and property it can take if the debt goes unpaid. The first comes from **sureties and guarantors**, and the second from a **security interest** under Article 9 of the Uniform Commercial Code (UCC). When a debtor cannot pay its creditors at all, **federal bankruptcy law** decides how its property is divided and which debts survive. This chapter covers those three areas in that order: the rights and duties of sureties, attaching and perfecting a security interest, and how bankruptcy works.

---

## Sureties and Guarantors

### Definitions

A **surety** (or co-maker) is **primarily liable** on the debtor's obligation. The creditor may demand payment from the surety as soon as the debtor defaults, without first trying to collect from the debtor or even notifying the surety of the default.

A **guarantor** promises to pay if the debtor does not, and the terms of the guaranty decide how quickly the creditor can come after the guarantor:

- A **guarantor of payment** is, like a surety, liable as soon as the debtor defaults.
- A **guarantor of collection** is liable only after the creditor has tried and failed to collect from the debtor, for example by obtaining a judgment it cannot collect.

A promise to answer for another person's debt must be **in writing** under the Statute of Frauds, unless the promisor's main purpose is to benefit itself (the **main purpose rule**).

### The Surety's Rights

| Right | Description |
|---|---|
| **Exoneration** | Before paying, ask a court to compel the debtor to pay a debt that is due |
| **Reimbursement** | After paying, recover the amount paid from the debtor |
| **Subrogation** | After paying, step into the creditor's shoes, including its rights in any collateral |
| **Contribution** | After paying more than its share, recover the excess from co-sureties |

### The Surety's Defenses

A surety can use most defenses the debtor could raise on the underlying contract, plus defenses of its own. It cannot use defenses that are personal to the debtor.

| Defense Available to the Surety | Defense Not Available to the Surety |
|---|---|
| The debtor has paid or performed | The debtor's bankruptcy or insolvency |
| A material modification of the debtor's obligation without the surety's consent (an unpaid surety is fully released; a paid surety is released if the change materially increases its risk) | The debtor's lack of capacity, such as minority |
| The creditor's release or impairment of collateral (released to the extent of the collateral's value) | The creditor's failure to notify the surety of the default or to sue the debtor first |
| Fraud or duress by the creditor on the surety | The debtor's fraud that induced the surety to sign, unless the creditor knew of it |
| The creditor's release of the debtor without reserving its rights against the surety | |

### Co-Sureties

When several sureties guarantee the same debt, each bears a share in proportion to the maximum amount it agreed to guarantee. A co-surety that pays more than its share can recover the excess from the others (**contribution**).

> **Example:** Polar Co. borrows \$120,000. Three co-sureties guarantee the loan for up to \$120,000, \$80,000, and \$40,000. Their total exposure is \$240,000, so their shares are 50%, 33⅓%, and 16⅔%. If Surety A pays the entire \$120,000, A's share is only \$60,000, and A may recover \$40,000 from Surety B and \$20,000 from Surety C.

---

## Secured Transactions Under UCC Article 9

### Key Terms

| Term | Definition |
|---|---|
| **Security interest** | An interest in personal property that secures payment or performance of an obligation |
| **Secured party** | The creditor who holds the security interest |
| **Collateral** | The property subject to the security interest |
| **Security agreement** | The agreement that creates the security interest |
| **Financing statement (UCC-1)** | The document filed with the state to give public notice of the security interest |
| **Purchase money security interest (PMSI)** | A security interest held by a seller or lender whose credit enabled the debtor to buy the collateral |

### Attachment

A security interest **attaches**, meaning it becomes enforceable against the debtor, when three things are true:

1. The secured party has given **value** (for example, made the loan).
2. The debtor has **rights in the collateral**.
3. The debtor has authenticated (signed) a **security agreement** that describes the collateral, or the secured party has **possession** or **control** of the collateral.

### Perfection

**Perfection** makes the security interest effective against third parties, such as other creditors and a bankruptcy trustee. The methods are:

| Method | When It Is Used |
|---|---|
| **Filing a financing statement** | The most common method; works for most collateral, including inventory, equipment, and accounts receivable |
| **Possession** | Available for tangible collateral such as goods and instruments; the only method for money |
| **Control** | The only method for deposit accounts as original collateral; also available for investment securities |
| **Automatic perfection** | A PMSI in **consumer goods** is perfected as soon as it attaches, with no filing |

:::tip[Exam Tip]

A **PMSI in consumer goods** is perfected automatically. A PMSI in inventory or equipment is not; it must be perfected by filing (within the time limits below) to receive priority over earlier secured parties.

:::

### Priority

When two or more creditors claim the same collateral, these rules decide who is paid first:

1. **Perfected beats unperfected.**
2. **Between two perfected interests**, the first to **file or perfect** wins.
3. **Between two unperfected interests**, the first to **attach** wins.
4. **PMSI exceptions:** a PMSI in **inventory** beats an earlier perfected interest if it is perfected when the debtor receives the goods and the PMSI holder notifies the earlier secured party. A PMSI in other goods, such as **equipment**, beats an earlier interest if it is perfected within **20 days** after the debtor receives the goods.
5. **Buyers in the ordinary course of business** take goods free of a security interest created by the seller, even a perfected one.

> **Example:** Kodiak Inc. borrows from Bank A, which files a UCC-1 on January 1, and from Bank B, which files on March 1. Both loans are secured by the same equipment, and neither is a PMSI. Bank A has priority because it filed first.

---

## Bankruptcy

### Starting a Case

| Type of Petition | Who Files | Requirements |
|---|---|---|
| **Voluntary** | The debtor | Available under Chapters 7, 11, and 13; the debtor need not be insolvent |
| **Involuntary** | Creditors | Available only under Chapters 7 and 11; the debtor must generally be failing to pay its debts as they come due |

For an **involuntary petition**:

- If the debtor has **12 or more** creditors, at least **3** must join, holding unsecured claims that together total at least a minimum amount.
- If the debtor has **fewer than 12** creditors, **1** creditor holding at least that minimum may file.

The minimum is adjusted every three years for inflation; for cases filed on or after April 1, 2025, it is \$21,050. Individual debtors must also complete **credit counseling** within the 180 days before filing.

### The Automatic Stay

Filing a petition creates an **automatic stay** that immediately halts most collection efforts against the debtor and its property, including lawsuits, foreclosures, repossessions, wage garnishments, and collection calls and letters. The stay does **not** stop criminal proceedings or the collection of domestic support obligations (alimony and child support).

### The Three Main Chapters

**Chapter 7 (liquidation).** A **trustee** collects the debtor's nonexempt property, sells it, and distributes the proceeds to creditors in the order of priority below. An individual debtor keeps **exempt property** (such as a homestead exemption, household goods, and tools of the trade) and usually receives a **discharge** of most remaining debts. Under the **Bankruptcy Abuse Prevention and Consumer Protection Act of 2005 (BAPCPA)**, an individual whose income is above the state median must pass a **means test**. A debtor who can afford to repay a meaningful part of the debts is presumed to be abusing Chapter 7 and is generally steered to Chapter 13.

**Chapter 11 (reorganization).** Used mainly by businesses to restructure their debts while continuing to operate. The debtor usually stays in control as **debtor in possession**. A **plan of reorganization** must be proposed and confirmed by the court. Small businesses can use a simpler version under **Subchapter V**.

**Chapter 13 (adjustment of debts of an individual).** Available only to **individuals with regular income** whose debts fall under limits that are adjusted every three years. The debtor keeps its property and pays creditors under a **3- to 5-year plan**.

### Distribution of the Debtor's Property

**Secured creditors** are paid first from their collateral, up to its value. Any shortfall becomes an unsecured claim. Unsecured claims are then paid in a statutory order, and each class is paid in full before the next receives anything:

| Rank (simplified) | Claim |
|---|---|
| 1 | **Domestic support obligations** (alimony and child support) |
| 2 | **Administrative expenses** of the case (trustee and professional fees) |
| 3 | **Gap claims** in an involuntary case (ordinary-course debts arising between the filing and the order for relief) |
| 4 | **Wages, salaries, and commissions** earned within 180 days before filing, up to a per-person cap |
| 5 | **Contributions to employee benefit plans**, within the same period and cap |
| 6 | **Consumer deposits** for goods or services never provided, up to a per-person cap |
| 7 | **Certain taxes** owed to governments |
| 8 | **General unsecured claims** |

The wage cap, like other bankruptcy dollar amounts, is adjusted every three years; for cases filed on or after April 1, 2025, it is \$17,150 per person.

### Discharge

A **discharge** releases the debtor from personal liability for most debts that arose before the case. Some debts are **not dischargeable**, including:

- **Domestic support obligations**
- Most **student loans**, unless repaying them would impose an undue hardship
- Recent **income taxes** (generally those for which a return was due within 3 years before filing) and taxes for which no return or a fraudulent return was filed
- Debts obtained by **fraud** or false pretenses
- Debts for **willful and malicious injury** to another person or property
- **Fines and penalties** owed to a government
- Debts the debtor failed to list in the bankruptcy schedules

A court may also **deny** a discharge entirely, for example if the debtor concealed or destroyed property, made fraudulent transfers, failed to explain a loss of assets, or received a Chapter 7 discharge within the prior **8 years**.

### Preferences and Fraudulent Transfers

The trustee can recover certain transfers the debtor made before filing:

- A **preference** is a transfer to a creditor on an existing debt, made while the debtor was **insolvent**, within **90 days** before filing (**1 year** if the creditor is an **insider**, such as a relative, officer, or affiliate), that gives the creditor more than it would receive in a Chapter 7 liquidation. The debtor is presumed insolvent during the 90 days.
- A **fraudulent transfer** is a transfer made within **2 years** before filing either with intent to hinder, delay, or defraud creditors, or for less than reasonably equivalent value while the debtor was insolvent.

> **Example:** Salmon Entertainment repays a \$50,000 unsecured loan from its majority shareholder 10 months before filing for bankruptcy, while it is insolvent. The shareholder is an **insider**, and the payment falls within the 1-year look-back, so the trustee can recover it as a **preference**. The same payment to an unrelated lender would be safe, because it falls outside the 90-day window.

---

## Summary

| Topic | Key Rule |
|---|---|
| Surety | Primarily liable; can use the debtor's contract defenses but not personal ones |
| Guarantor of collection | Liable only after the creditor fails to collect from the debtor |
| Surety's rights | Exoneration, reimbursement, subrogation, contribution |
| Attachment | Value, rights in the collateral, and a signed security agreement (or possession or control) |
| Perfection | Filing, possession, control, or automatic (PMSI in consumer goods) |
| Priority | Perfected beats unperfected; first to file or perfect; PMSI exceptions |
| Automatic stay | Halts most collection actions on filing |
| Chapter 7 | Liquidation; means test for above-median individual debtors |
| Chapter 11 | Reorganization; debtor in possession |
| Chapter 13 | Individuals with regular income; 3- to 5-year plan |
| Nondischargeable debts | Support obligations, most student loans, recent taxes, fraud, willful injury |
| Preferences | 90 days before filing (1 year for insiders) |
| Fraudulent transfers | 2 years before filing |
