# Confidentiality and Privacy

Every organization holds information it must not let out: merger plans, pricing, source code, and personal data about customers and employees. **Confidentiality** is about keeping sensitive information away from people who should not see it. **Privacy** is about respecting the rights of the people the information describes. The two overlap heavily, and both are Trust Services categories, which is why they sit together in the blueprint and in many SOC 2® reports.

This chapter begins with encryption, the main technical tool for keeping data confidential, and then draws the line between confidentiality and privacy. It covers ways to protect confidential data while applications are built and tested, data loss prevention, and what a breach costs. It then sets out controls for each stage of handling confidential data, the SOC 2® confidentiality and privacy criteria, and walkthroughs of confidentiality and privacy procedures.

---

## Encryption Fundamentals

**Encryption** turns readable data (**plaintext**) into unreadable data (**ciphertext**) using an algorithm and a **key**. Only someone with the right key can turn it back (**decryption**). The strength of encryption depends on the algorithm and on keeping the keys secret, so key management is as important as the encryption itself.

### Symmetric and Asymmetric Encryption

| Feature | Symmetric Encryption | Asymmetric Encryption |
|---|---|---|
| **Keys** | One shared secret key encrypts and decrypts | A key pair: what one key encrypts, only the other can decrypt |
| **Speed** | Fast; suited to large volumes of data | Slower; computationally heavy |
| **Key distribution** | Hard: the secret key must reach the other party safely | Easier: the public key can be shared openly; the private key never leaves its owner |
| **Common algorithms** | AES (current standard); DES and 3DES are obsolete | RSA, elliptic curve cryptography (ECC) |
| **Typical uses** | Encrypting stored data and bulk transfers | Exchanging keys, digital signatures, encrypted email |

With asymmetric encryption, the direction matters. To send someone a confidential message, encrypt it with the **recipient's public key**, so only the recipient's private key can open it. To sign a message, the sender uses the **sender's private key**, and anyone can verify the signature with the sender's public key.

:::tip[Exam Tip]

**Symmetric = same key** shared by both parties. **Asymmetric = a pair** of public and private keys. Real systems combine them: asymmetric encryption is used to exchange a symmetric key safely, and the fast symmetric key then encrypts the data.

:::

### Hashing

**Hashing** is a one-way function: it turns any input into a fixed-length output (a **hash** or digest), and the input cannot be recovered from the hash. Changing even one character of the input produces a completely different hash. Hashing therefore checks **integrity** (has the data changed?) rather than providing confidentiality.

| Algorithm | Output Length | Status |
|---|---|---|
| **MD5** | 128 bits | Broken: attackers can create collisions (two inputs with the same hash) |
| **SHA-1** | 160 bits | Broken for the same reason; no longer acceptable |
| **SHA-256** (part of SHA-2) | 256 bits | Current standard |
| **SHA-3** | 224 to 512 bits | Newer standard, built on a different design |

### Public Key Infrastructure (PKI)

Asymmetric encryption only works if you can trust that a public key really belongs to the person or website it claims to. **Public key infrastructure (PKI)** provides that trust through **digital certificates**, electronic documents that bind a public key to an identity. A **certificate authority (CA)** verifies the identity and signs the certificate, sometimes relying on a **registration authority (RA)** to do the verification. Certificates that are compromised or no longer valid are revoked and listed on a **certificate revocation list (CRL)**.

### Data at Rest and Data in Transit

| State | Description | Common Controls |
|---|---|---|
| **At rest** | Data stored on disks, in databases, or on backup media | Full-disk encryption, database encryption, encrypted backups |
| **In transit** | Data moving across a network | TLS (as in HTTPS), VPNs, secure file transfer |

**Transport Layer Security (TLS)** replaced the older, insecure SSL protocol. It uses asymmetric cryptography to authenticate the server and agree on a session key, then symmetric encryption for the data itself, and it also protects the data's integrity in transit.

---

## Confidentiality and Privacy Compared

| Dimension | Confidentiality | Privacy |
|---|---|---|
| **Concern** | Keeping sensitive information from unauthorized access or disclosure | Collecting, using, keeping, sharing, and disposing of **personal information** in line with the entity's commitments and the law |
| **What is protected** | Any sensitive information: trade secrets, financial data, plans, and personal data | Information about identifiable people: customers, employees, patients |
| **Typical source of the obligation** | Contracts, nondisclosure agreements, and the entity's own policies | Laws and regulations (such as HIPAA and the GDPR) and the entity's privacy notice |
| **Trust Services category** | Confidentiality (C1) | Privacy (P1-P8) |
| **Example** | Keeping **Bear Co.**'s merger plans from leaking | Making sure **Bear Co.** tells customers how it will use their email addresses, and uses them only that way |

Privacy depends on confidentiality, since personal data that leaks has obviously been mishandled. But privacy goes further. It also covers notice, consent, limits on use, and individuals' rights to see and correct their data, none of which encryption addresses. And much confidential information, such as a proprietary formula, has nothing to do with privacy at all.

---

## Protecting Confidential Data in Applications

The blueprint asks how confidential data is protected during the design, development, testing, and implementation of applications that use it. The main concern is that developers and testers need realistic data, but they should not see real Social Security numbers or card numbers. Several techniques help:

| Method | What It Does | Reversible? | Typical Use |
|---|---|---|---|
| **Data obfuscation** | The general term for disguising data so that it is useless to unauthorized viewers; masking and scrambling are forms of it | Depends on the technique | Any non-production use |
| **Masking** | Replaces some or all characters with substitutes, such as showing only XXX-XX-1234 | Static masking: no. Dynamic masking hides data on screen but leaves the stored value intact | Screens, reports, and test data |
| **Scrambling (shuffling)** | Mixes up characters or swaps values among records | Generally no | Test environments |
| **Tokenization** | Replaces the sensitive value with a random token; the real value is kept in a secured token vault | Yes, but only through the vault | Payment card data (reduces PCI DSS scope) |
| **Encryption** | Transforms data with a key | Yes, with the key | Stored and transmitted data |
| **Pseudonymization** | Replaces identifiers with artificial ones; the link back is kept separately | Yes, with the separately held information | Analytics on personal data (still personal data under the GDPR) |
| **Anonymization** | Removes identifying information permanently | No | Research and aggregate analysis |

Each stage of the development life cycle has its own job:

| Stage | Protection Step |
|---|---|
| **Design** | Classify the data the application will use and define how each class must be protected |
| **Development** | Build tokenization, masking, and encryption into the application |
| **Testing** | Use masked, tokenized, or synthetic test data instead of real production data |
| **Implementation** | Turn on dynamic masking and access controls in production, and extend data loss prevention monitoring to the new application |

**Example:** **Polar Inc.** is building a new payroll application. Developers and testers never see real employee Social Security numbers: the security team supplies test data in which every number has been replaced with a token, so the application's logic can be tested without exposing actual values.

---

## Data Loss Prevention (DLP)

**Data loss prevention (DLP)** is the set of tools, policies, and processes that detect and stop sensitive data from leaving the organization without authorization.

| Type | Where It Works | What It Watches |
|---|---|---|
| **Network DLP** | At the points where traffic leaves the network | Email, web uploads, file transfers |
| **Endpoint DLP** | On laptops and workstations | Copying to USB drives, printing, uploads from the device |
| **Cloud DLP** | Inside SaaS and cloud platforms | File sharing links, data moving between cloud services |

DLP tools work in three steps. They **inspect content** for patterns such as card numbers, Social Security numbers, or document labels; they **consider context**, such as who is sending, to whom, and where; and they **enforce policy** by blocking, quarantining, encrypting, or alerting.

**Example:** **Illini Security** sets its network DLP to flag any outbound email containing more than 10 numbers in Social Security number format. When an employee tries to email a spreadsheet of 500 customer SSNs to a personal address, the DLP tool blocks the email and alerts the security team.

DLP is only as good as its rules. It can protect only the kinds of data it has been configured to recognize, so its rules must track the organization's data classification scheme and be updated as new kinds of sensitive data appear.

---

## Financial and Operational Implications of a Data Breach

A data breach costs far more than the immediate cleanup:

| Category | Examples |
|---|---|
| **Direct financial costs** | Forensic investigation, legal counsel, notifying affected people, credit monitoring, call centers |
| **Regulatory and legal** | Fines and penalties (the GDPR allows fines up to €20 million or 4% of worldwide annual turnover, whichever is higher), lawsuits, settlements, mandated audits |
| **Operational** | Systems taken offline, disrupted operations, staff pulled from regular work |
| **Reputational** | Lost customers, harder sales, negative press, a falling stock price |
| **Insurance** | Higher premiums at renewal, deductibles, and disputes over coverage |

Industry studies put the average total cost of a breach in the millions of dollars. Organizations that encrypt sensitive data, detect breaches quickly, and have a tested response plan generally lose less, because less data is exposed and the incident is contained sooner.

**Example:** **Kingfisher Industries** suffers a breach that exposes 200,000 customer payment records. The direct costs are \$2 million for notification and credit monitoring, \$1.5 million for forensic investigation, and a \$3 million regulatory penalty, a total of \$6.5 million. Lost customers and brand damage cost more than another \$5 million over the next two years.

---

## Controls Over Confidential and Personal Data

The blueprint asks you to determine controls and data management practices to securely **collect, process, store, transmit, and delete** confidential data or data subject to privacy rules. Those five verbs map onto the data life cycle described in the [Data Management](../data-management/data-management.md) chapter:

| Activity | Key Controls |
|---|---|
| **Collect** | Notice and consent where required, collecting only the data needed, input validation, classifying data when it enters the system |
| **Process** | Role-based access and least privilege, audit logging, data quality checks |
| **Store** | Encryption, access control lists, classification labels, encrypted backups, retention schedules |
| **Transmit** | TLS, VPNs, encrypted email, secure file transfer |
| **Delete** | Secure deletion or destruction at the end of the retention period, with documentation |

Controls start with **data classification**, because the organization cannot protect data appropriately until it knows how sensitive the data is. A common four-level scheme:

| Level | Harm If Disclosed | Example |
|---|---|---|
| **Public** | None | Marketing materials |
| **Internal** | Minor | Internal memos |
| **Confidential** | Significant | Unreleased financial statements |
| **Restricted** | Severe | Personal data, health information, trade secrets |

Deletion deserves care, because ordinary deletion usually leaves the data recoverable. NIST's guidance on media sanitization (SP 800-88) describes three levels: **clear** (overwriting data so ordinary tools cannot recover it), **purge** (techniques such as cryptographic erase or degaussing that defeat even laboratory recovery), and **destroy** (shredding, disintegrating, or incinerating the media). **Crypto-shredding**, destroying the encryption keys for data that was always stored encrypted, makes the data unreadable without touching the media. **Degaussing** erases magnetic media with a strong magnetic field. Whatever the method, the organization should document the destruction.

---

## SOC 2® Confidentiality and Privacy Criteria

In a SOC 2® engagement that includes these categories, the service auditor evaluates the service organization's controls against additional criteria, on top of the common criteria.

### Confidentiality (C1)

| Criterion | Focus |
|---|---|
| **C1.1** | The entity identifies and maintains confidential information to meet its confidentiality objectives |
| **C1.2** | The entity disposes of confidential information to meet its confidentiality objectives |

### Privacy (P1-P8)

| Criteria | Topic | Focus |
|---|---|---|
| **P1** | Notice | The entity tells people about its privacy practices |
| **P2** | Choice and consent | The entity offers choices and obtains consent where required |
| **P3** | Collection | Personal information is collected only for the purposes identified |
| **P4** | Use, retention, and disposal | Personal information is used only for the stated purposes, kept only as long as needed, and disposed of securely |
| **P5** | Access | People can see and correct their personal information |
| **P6** | Disclosure and notification | Personal information is disclosed to third parties only as permitted, and breaches are reported to the people affected |
| **P7** | Quality | Personal information is kept accurate, complete, and relevant |
| **P8** | Monitoring and enforcement | The entity monitors compliance and handles privacy inquiries and complaints |

The same two kinds of findings apply here as in every SOC 2® category. A **design deficiency** means a control is missing or would not meet the criterion even if performed perfectly: **Bear Co.** has no requirement at all to encrypt confidential client data at rest. An **operating deviation** means a suitably designed control was not performed as designed: Bear Co. requires encryption, but an administrator turned it off for three months during a system migration. The [Security Testing](../security/security-testing.md) chapter covers this distinction in more detail.

---

## Walkthroughs of Confidentiality and Privacy Procedures

The blueprint asks you to walk through an organization's procedures relevant to confidentiality and privacy and compare what you observe with the documented policy. The method is the same as for security walkthroughs (see [Security Testing](../security/security-testing.md)): select a procedure, read the policy, trace an instance through the process, ask the people involved, and compare. For confidentiality and privacy, good procedures to choose include how personal data is collected and consent recorded, how access to confidential data is granted and removed, how data is disposed of, and how breaches are escalated and reported.

| Area | What to Look For |
|---|---|
| **IT risk management** | Risk assessments that include confidentiality and privacy risks |
| **Human resources** | Confidentiality agreements signed at hiring; access to confidential data removed promptly at termination |
| **Training and education** | Privacy and data handling training delivered as often as the policy requires |
| **Incident response** | Breach notification procedures that meet regulatory deadlines |
| **Vendor management** | Contracts with confidentiality and data protection terms for vendors that handle the data |

**Example:** **Illini Entertainment**'s policy requires access to customer personal data to be removed within 24 hours of an employee's termination. In a walkthrough, the auditor finds that two terminated employees kept access for 15 days. The policy is suitably designed but was not followed, so this is an **operating deviation**.

---

## Summary

| Topic | Key Takeaway |
|---|---|
| Encryption | Symmetric is fast for bulk data; asymmetric solves key exchange and enables signatures; hashing checks integrity |
| Confidentiality vs. privacy | Confidentiality protects sensitive information; privacy governs personal information and individuals' rights |
| Protecting data in applications | Masking, scrambling, tokenization, encryption, pseudonymization, and anonymization; never test with real sensitive data |
| DLP | Inspects content and context on networks, endpoints, and cloud services; only as good as its rules |
| Breach costs | Direct, regulatory, operational, reputational, and insurance costs |
| Data handling controls | Classify first, then control collection, processing, storage, transmission, and deletion |
| SOC 2® criteria | Confidentiality C1.1-C1.2; privacy P1-P8 |
| Walkthroughs | Compare observed procedures with documented policies |

---

## Practice Questions

1. **Bear Co.** stores customer payment data in a cloud database encrypted with AES-256 and sends it to its payment processor over TLS 1.3. A new developer proposes adding MD5 hashes to check that files are not altered in transfer. Should the security team approve?

2. In a SOC 2® engagement at **Polar Inc.**, the auditor tests confidentiality controls. Polar Inc.'s retention policy requires client files to be securely deleted 90 days after an engagement ends, and a scheduled deletion procedure exists. The auditor finds client files from engagements that ended eight months ago still on the file server. Is this a design deficiency or an operating deviation?

3. **Illini Security** installs a DLP tool with rules that block outbound email containing credit card numbers, but it creates no rules for Social Security numbers, health records, or source code. Six months later an employee emails 1,000 patient health records to an outside address and no alert fires. What went wrong, and what should the team have done?

:::tip[Answers]

1. **No.** MD5 is broken: attackers can create two different files with the same MD5 hash, so it cannot be trusted to show that a file is unchanged. Any integrity check should use **SHA-256** or stronger. TLS already protects the integrity of data in transit, so an additional check is useful mainly for files at rest or end-to-end verification, and it must use a current algorithm.

2. An **operating deviation**. The control (a 90-day retention rule with a scheduled deletion procedure) is suitably designed; it was not performed. The auditor would report a deviation and evaluate its effect on criterion C1.2, which covers disposal of confidential information.

3. The DLP **rules were incomplete**: the tool can block only the kinds of data it is set to recognize. Illini Security should have classified all of its sensitive data (card data, personal data, health information, intellectual property) first, written DLP rules for each class, and tested that each rule actually detects its data type.

:::
