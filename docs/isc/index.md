---
id: index
slug: /isc
title: ISC
---

# Information Systems and Controls (ISC)

**Information Systems and Controls (ISC)** is the Discipline section for candidates headed toward IT audit, advisory, and System and Organization Controls (SOC) work. It asks how an entity's systems process and protect information, which risks those systems face, and how a CPA tests the controls that address those risks. You will see the same scenario from several angles: a cloud provider hosting **Bear Co.**'s ERP system is an infrastructure question, a security question, and a SOC 2® question at once.

This part of the book follows the exam's three content areas in order: information systems and data management, then security, confidentiality, and privacy, and finally SOC engagements. Each chapter opens with the ideas, then the rules and criteria, then worked scenarios and practice questions.

:::info[Exam Structure]

The ISC exam is **4 hours** long and contains **82 multiple-choice questions (MCQs)** and **6 task-based simulations (TBSs)**. MCQs count for **60%** of the score and TBSs for **40%**. ISC is one of three Discipline sections, alongside BAR (Business Analysis and Reporting) and TCP (Tax Compliance and Planning); candidates pass one of the three.

Discipline sections can be taken only in the first month of each calendar quarter. In 2027 the exam moves to a new delivery platform: no exams are given July 1-11, 2027, and the third-quarter Discipline window runs July 12 to August 12, 2027.

:::

---

## The 2027 ISC Blueprint

This book follows the **2027 ISC Blueprint**, which the AICPA Board of Examiners approved on September 16, 2026 and which is effective January 1, 2027. The 2027 revisions are small. The weights, question counts, and skill levels are unchanged, and so is every reference source except one. The only change narrows how blockchain is tested:

- The COSO publication *Blockchain and Internal Control: The COSO Perspective* was removed from the References.
- The task asking how the COSO internal control framework can be used to evaluate blockchain risks in financial reporting was removed.
- The ERP task now asks you to "recognize other systems with which they interact (e.g., blockchain, electronic data interchange)." Blockchain is now tested only as one of the systems that exchange data with ERP and accounting systems.

| Content Area | What It Covers | Weight |
|---|---|---|
| **I. Information Systems and Data Management** | IT infrastructure and cloud computing, ERP and accounting information systems, availability, change management, data management, SQL, and business process models | 35-45% |
| **II. Security, Confidentiality and Privacy** | Regulations, standards, and frameworks; threats and attacks; mitigation; security testing; confidentiality and privacy; incident response | 35-45% |
| **III. Considerations for SOC Engagements** | Planning, performing, and reporting on SOC 1® and SOC 2® engagements; SOC 3® and SOC for Cybersecurity reports | 15-25% |

| Skill Level | Weight |
|---|---|
| Remembering and Understanding | 55-65% |
| Application | 20-30% |
| Analysis | 10-20% |

ISC leans more on Remembering and Understanding than any other section. Most of the Analysis tasks ask you to detect deficiencies in the design and operation of controls.

:::note[Testing before January 1, 2027?]

Sittings through December 31, 2026 (the last ISC window of 2026 is October) use the 2026 Blueprint. Everything in this book still applies to you. The one difference is that the 2026 Blueprint also includes the COSO blockchain task described above; the [Enterprise and Accounting Information Systems](./information-systems/enterprise-and-accounting-information-systems.md) chapter has a short note on it.

:::

For a section-by-section summary, see the [2027 blueprint guide](/blueprint/2027).

---

## What This Section Covers

### Area I: Information Systems and Data Management (35-45%)

Area I treats information systems in a modern, largely cloud-based setting. [IT Infrastructure](./information-systems/it-infrastructure.md) introduces the parts of an IT environment, the cloud service and deployment models, and the shared responsibility between a cloud provider and its customer. [Enterprise and Accounting Information Systems](./information-systems/enterprise-and-accounting-information-systems.md) covers ERP systems, the business processes they run, the systems they exchange data with, and controls over processing integrity. [Availability](./information-systems/availability.md) covers continuity and recovery planning, backups, and availability measures, and [Change Management](./information-systems/change-management.md) covers how changes to systems are approved, tested, and moved into production. [Data Management](./data-management/data-management.md) closes the area with storage types, relational databases, SQL queries, data integration, and business process models.

The higher-order tasks in this area ask you to trace a real process against its documentation and to spot where a control is missing or was not performed. Learn the vocabulary, but practice applying it to scenarios.

### Area II: Security, Confidentiality and Privacy (35-45%)

Area II starts with [Regulations, Standards, and Frameworks](./regulations-standards-and-frameworks/regulations-standards-and-frameworks.md): HIPAA, the GDPR, PCI DSS, the NIST Cybersecurity Framework and Privacy Framework, NIST SP 800-53, the CIS Controls, and COBIT 2019. These are tested at the Remembering and Understanding level, and they supply the vocabulary for the rest of the area. [Threats and Attacks](./security/threats-and-attacks.md) describes who attacks and how, [Mitigation](./security/mitigation.md) covers the controls that prevent, detect, and correct those attacks, and [Security Testing](./security/security-testing.md) shows how a CPA tests those controls. [Confidentiality and Privacy](./confidentiality-privacy-and-incident-response/confidentiality-and-privacy.md) and [Incident Response](./confidentiality-privacy-and-incident-response/incident-response.md) finish the area.

### Area III: Considerations for SOC Engagements (15-25%)

Area III applies the first two areas to SOC engagements. [Planning and Performing SOC Engagements](./soc-engagements/planning-and-performing-soc-engagements.md) covers the Trust Services Criteria, the SOC report types and their users, management's assertions, materiality, subservice organizations, system descriptions, and complementary user entity controls. [Reporting on SOC Engagements](./soc-engagements/reporting-on-soc-engagements.md) covers opinions, report modifications, the presentation of test results and exceptions, and the form and content of SOC 1® and SOC 2® reports. The exam's SOC 1® coverage includes planning, certain procedures, and reporting, but not the testing of controls over financial reporting itself.

---

## Key References

The ISC References limit what can be tested: a task that names a framework is tested only from the sections the References list, and not from material those sources point to. The main sources are:

| Source | What It Is |
|---|---|
| **AICPA Trust Services Criteria (2017, revised points of focus 2022)** | Criteria for security, availability, processing integrity, confidentiality, and privacy in SOC 2® and SOC 3® engagements |
| **AICPA Description Criteria (DC 200, 2018, revised implementation guidance 2022)** | What a SOC 2® system description must contain |
| **AICPA SOC 1® and SOC 2® Guides, attestation standards (SSAEs)** | Guidance for planning, performing, and reporting on SOC engagements |
| **COSO guidance** | *Enterprise Risk Management for Cloud Computing* and *Managing Cyber Risk in a Digital Age* |
| **COBIT 2019** | ISACA's governance framework for enterprise information and technology (Introduction and Methodology, Chapters 1-5) |
| **NIST Cybersecurity Framework (CSF)** | Framework for managing cybersecurity risk; version 2.0 (2024) is current |
| **NIST Privacy Framework** | Framework for managing privacy risk (introduction, basics, and glossary) |
| **NIST SP 800-53 Rev. 5** | Catalog of security and privacy controls (Chapters 1 and 2) |
| **CIS Controls v8.1** | Eighteen prioritized controls (overview of each control) |
| **HIPAA** | Security and Privacy Rules for protected health information (45 CFR 164.103-164.530) |
| **GDPR** | EU General Data Protection Regulation (Articles 4-34) |
| **PCI DSS v4.x** | Requirements for protecting payment account data |

---

## How to Study ISC

Start with Area I. It carries as much weight as Area II and gives you the technical base for everything else. Then work through Area II, beginning with the frameworks chapter so that the controls in later chapters have a "why" behind them. Finish with Area III, which assumes you already know the controls and asks how a service auditor examines and reports on them.

Throughout, learn the terms precisely. ISC questions often turn on one word: IaaS versus PaaS, an IDS versus an IPS, a design deficiency versus an operating deviation, the carve-out method versus the inclusive method. Then practice with scenarios, because a single TBS can draw on all three areas. A question about **Polar Inc.**'s cloud provider might require you to know the service model (Area I), the threat (Area II), and how the provider's SOC 2® report treats its subservice organizations (Area III).

:::tip[The Common Pitfall]

Many candidates assume IT knowledge is enough. ISC tests IT through the lens of an engagement: you must know not only what a control is, but how to evaluate its design, test its operation, and describe a deficiency. Candidates who study only the technology often struggle with the application and analysis questions.

:::

Ready to begin? Start with the first chapter, **[IT Infrastructure](./information-systems/it-infrastructure.md)**.
