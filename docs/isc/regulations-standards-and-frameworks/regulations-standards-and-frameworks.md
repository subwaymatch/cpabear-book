# Regulations, Standards, and Frameworks

A hospital system that takes credit card payments and treats patients from Europe may be bound by HIPAA, the GDPR, and PCI DSS all at once, and it may also choose the NIST Cybersecurity Framework and the CIS Controls to organize its security program. CPAs who advise on or test that program need to know what each source requires and who it applies to. These sources also supply the vocabulary for the rest of Area II: when a later chapter talks about least privilege, breach notification, or a Target Profile, it is drawing on the material here.

The exam tests this chapter at the Remembering and Understanding level, and only from the sections of each source listed in the blueprint References. The chapter covers two laws (HIPAA and the GDPR), one industry standard (PCI DSS), and five frameworks: the NIST Cybersecurity Framework, the NIST Privacy Framework, NIST SP 800-53, the CIS Controls, and COBIT 2019.

| Source | Type | Applies To | Mandatory? |
|---|---|---|---|
| **HIPAA** | U.S. federal law and HHS regulations | Covered entities and their business associates | Yes |
| **GDPR** | European Union regulation | Controllers and processors within its scope | Yes |
| **PCI DSS** | Industry standard | Entities that store, process, or transmit payment card data | Required by the card brands through contracts |
| **NIST CSF** | Framework | Any organization | No (voluntary) |
| **NIST Privacy Framework** | Framework | Any organization | No (voluntary) |
| **NIST SP 800-53** | Control catalog | Federal information systems; any organization may adopt it | Yes for federal systems |
| **CIS Controls** | Prioritized set of security controls | Any organization | No (voluntary) |
| **COBIT 2019** | Governance framework | Any enterprise | No (voluntary) |

---

## HIPAA

The **Health Insurance Portability and Accountability Act of 1996 (HIPAA)** led to national rules, issued by the Department of Health and Human Services (HHS), that protect individually identifiable health information, called **protected health information (PHI)**. PHI held or sent in electronic form is **electronic PHI (ePHI)**.

### Who HIPAA Covers

HIPAA applies to three kinds of **covered entities**:

| Covered Entity | Description | Examples |
|---|---|---|
| **Health plans** | Entities that provide or pay the cost of medical care | Health insurers, HMOs, employer group health plans, Medicare, Medicaid |
| **Health care clearinghouses** | Entities that convert nonstandard health information into standard formats, or the reverse | Billing services, repricing companies |
| **Health care providers** | Providers that transmit health information electronically in standard transactions, such as claims | Hospitals, physicians, dentists, pharmacies |

A **business associate** is a person or organization that performs services for a covered entity involving the use or disclosure of PHI, such as a cloud host, a billing company, or an IT consultant. The covered entity must have a **business associate agreement (BAA)** with each one, and business associates are directly subject to parts of the HIPAA rules.

### Permitted Uses and Disclosures

The **Privacy Rule** starts from a simple position: a covered entity may not use or disclose PHI unless the rule permits or requires it, or the individual gives written **authorization**. Two disclosures are **required**: to the individual (when the individual asks for his or her own information) and to HHS (when it investigates compliance). The rule then **permits** use and disclosure without authorization in six situations:

1. **To the individual** who is the subject of the information.
2. **For treatment, payment, and health care operations**, such as quality review, training, and auditing.
3. **With an opportunity to agree or object**, such as listing a patient in a hospital directory or talking with family members involved in the patient's care.
4. **Incident to** an otherwise permitted use, such as being overheard despite reasonable safeguards.
5. **For public interest and benefit activities**, such as uses required by law, public health activities, reporting abuse, judicial proceedings, law enforcement, and preventing a serious threat to health or safety.
6. **As a limited data set** (PHI with direct identifiers removed) for research, public health, or health care operations, under a data use agreement.

Most other uses, such as marketing, require the individual's written authorization. When PHI is used or disclosed, the **minimum necessary** standard generally limits it to the least information needed for the purpose; the standard does not apply to disclosures for treatment or to the individual.

:::tip[Exam Tip]

Remember **TPO**: treatment, payment, and health care operations. These are the everyday uses that need no authorization. Note also the vocabulary: HIPAA speaks of an individual's "authorization," not "consent."

:::

### The Three HIPAA Rules

| Rule | What It Does | Key Requirements |
|---|---|---|
| **Privacy Rule** | Sets standards for when PHI may be used and disclosed | Permitted uses and disclosures, minimum necessary, individual rights (access, amendment, an accounting of disclosures), notice of privacy practices |
| **Security Rule** | Sets standards for protecting ePHI | Administrative, physical, and technical safeguards that protect the confidentiality, integrity, and availability of ePHI |
| **Breach Notification Rule** | Requires notice after a breach of unsecured PHI | Notify affected individuals without unreasonable delay and within 60 days of discovery; notify HHS; notify the media when a breach affects more than 500 residents of a state or jurisdiction |

The Breach Notification Rule's timing depends on size. A breach affecting **500 or more** individuals must be reported to HHS at the same time as the individual notices. Smaller breaches may be logged and reported to HHS within 60 days after the end of the calendar year. A business associate that discovers a breach must notify the covered entity without unreasonable delay and within 60 days.

The Security Rule is flexible and risk-based: each covered entity chooses safeguards suited to its size and risks, starting from a risk analysis.

| Safeguard Category | Examples |
|---|---|
| **Administrative** | Security management process and risk analysis, workforce training, contingency planning, business associate agreements |
| **Physical** | Facility access controls, workstation use and security, device and media controls |
| **Technical** | Access controls, audit controls, integrity controls, authentication, transmission security |

HHS proposed a major overhaul of the Security Rule in January 2025. It is not final, and the exam tests the rule as currently in force.

---

## GDPR

The **General Data Protection Regulation (GDPR)** is the European Union's law governing the processing of personal data. The References limit the exam to Articles 4 through 34, which cover definitions, principles, the rights of data subjects, the duties of controllers and processors, and breach notification.

### Scope

The GDPR applies to processing of personal data by:

- An organization **established in the EU**, wherever the processing takes place.
- An organization **outside the EU** that **offers goods or services** to people who are in the EU, or that **monitors their behavior** there.

**Example:** **Cub Entertainment**, a U.S. streaming service with no European office, sells subscriptions priced in euros to people living in Spain. Because it offers services to people in the EU, the GDPR applies to its processing of those subscribers' data.

### Principles of Processing

Article 5(1) sets out the six principles the blueprint refers to:

| # | Principle | Meaning |
|---|---|---|
| 1 | **Lawfulness, fairness, and transparency** | Process data lawfully, fairly, and openly with the data subject |
| 2 | **Purpose limitation** | Collect data for specified, explicit, legitimate purposes and do not use it in ways incompatible with them |
| 3 | **Data minimization** | Collect only data that is adequate, relevant, and limited to what the purpose needs |
| 4 | **Accuracy** | Keep data accurate and up to date; correct or erase inaccurate data without delay |
| 5 | **Storage limitation** | Keep data in identifiable form no longer than the purpose needs |
| 6 | **Integrity and confidentiality** | Protect data with appropriate security against unauthorized processing, loss, destruction, or damage |

Article 5(2) adds **accountability**: the controller is responsible for complying with these principles and must be able to demonstrate it. Some sources therefore count seven principles; the blueprint counts the six in Article 5(1).

Processing is lawful only on one of six bases in Article 6: the data subject's consent, performance of a contract, a legal obligation, the vital interests of a person, a task in the public interest, or the legitimate interests of the controller or a third party (unless overridden by the data subject's rights).

### Key Concepts

| Concept | Meaning |
|---|---|
| **Personal data** | Any information relating to an identified or identifiable natural person (the **data subject**), such as a name, an ID number, location data, or an online identifier |
| **Special categories** | Sensitive personal data, such as health, genetic, biometric, racial or ethnic origin, religious beliefs, and sexual orientation, which may be processed only under narrow conditions |
| **Processing** | Any operation on personal data: collecting, recording, storing, using, disclosing, or erasing it |
| **Controller** | The organization that decides the purposes and means of processing |
| **Processor** | An organization that processes personal data on the controller's behalf |
| **Consent** | Freely given, specific, informed, and unambiguous agreement, as easy to withdraw as to give |
| **Pseudonymization** | Processing data so it cannot be linked to a person without separately held additional information; pseudonymized data is still personal data |
| **Data subject rights** | Rights of access, rectification, erasure ("right to be forgotten"), restriction of processing, data portability, and objection |
| **Data protection by design and by default** | Building data protection into systems from the start, and processing only the data needed by default |
| **Breach notification** | The controller notifies the supervisory authority within **72 hours** of becoming aware of a breach, unless the breach is unlikely to result in a risk to individuals; it notifies affected individuals without undue delay when the risk is high; a processor notifies the controller without undue delay |

:::tip[Exam Tip]

**Data minimization** is tested often. It does not mean collecting no data. It means collecting only what is adequate, relevant, and limited to what the stated purpose needs.

:::

---

## PCI DSS

The **Payment Card Industry Data Security Standard (PCI DSS)** is a set of security requirements published by the PCI Security Standards Council, which the major card brands founded. It is not a law. The card brands and the banks that process card payments make compliance a condition of accepting or processing cards, so it is enforced by contract.

The current version is **PCI DSS v4.0.1**, published in June 2024 as a limited revision of v4.0 with clarifications and no new requirements. Version 4.0 was retired at the end of 2024, so v4.0.1 is the only active version, and the requirements that v4.0 had marked as future-dated became effective on March 31, 2025. The exam References cite "PCI DSS v4.x."

### Scope

PCI DSS protects **account data**, which has two parts:

- **Cardholder data**: the primary account number (PAN), the cardholder's name, the expiration date, and the service code.
- **Sensitive authentication data**: the full magnetic-stripe or chip data, the card verification code, and PINs. Sensitive authentication data may not be stored after a transaction is authorized, even in encrypted form.

The standard applies to every entity that stores, processes, or transmits account data (merchants, processors, acquirers, issuers, and service providers) and to any system that could affect the security of that data.

### The 12 Requirements, Grouped by Six Goals

| Goal | Requirement |
|---|---|
| **Build and maintain a secure network and systems** | 1. Install and maintain network security controls |
| | 2. Apply secure configurations to all system components |
| **Protect account data** | 3. Protect stored account data |
| | 4. Protect cardholder data with strong cryptography during transmission over open, public networks |
| **Maintain a vulnerability management program** | 5. Protect all systems and networks from malicious software |
| | 6. Develop and maintain secure systems and software |
| **Implement strong access control measures** | 7. Restrict access to system components and cardholder data by business need to know |
| | 8. Identify users and authenticate access to system components |
| | 9. Restrict physical access to cardholder data |
| **Regularly monitor and test networks** | 10. Log and monitor all access to system components and cardholder data |
| | 11. Test security of systems and networks regularly |
| **Maintain an information security policy** | 12. Support information security with organizational policies and programs |

How an entity proves compliance is set by the card brands and acquiring banks, not by PCI DSS. In general, the largest merchants and service providers need an annual Report on Compliance prepared by a Qualified Security Assessor (QSA), while smaller merchants complete a Self-Assessment Questionnaire (SAQ). The transaction thresholds for these "merchant levels" are card-brand programs outside the exam References.

---

## NIST Cybersecurity Framework (CSF)

The **NIST Cybersecurity Framework (CSF)**, published by the National Institute of Standards and Technology, is a voluntary, risk-based framework for managing cybersecurity risk. The current version, **CSF 2.0**, was released in February 2024. It broadened the framework's audience from critical infrastructure to organizations of every size and sector, and it added a sixth function, Govern. The framework has three parts:

| Part | What It Is |
|---|---|
| **CSF Core** | A taxonomy of cybersecurity outcomes, organized into Functions, then Categories, then Subcategories |
| **CSF Tiers** | Four levels describing how rigorous an organization's cybersecurity risk governance and management practices are |
| **CSF Organizational Profiles** | Descriptions of an organization's current or target cybersecurity posture in terms of Core outcomes |

### The Core: Six Functions

| Function | Outcome | Example Categories |
|---|---|---|
| **Govern (GV)** | The organization's cybersecurity risk management strategy, expectations, and policy are established, communicated, and monitored | Organizational context, risk management strategy, roles and responsibilities, policy, oversight, supply chain risk management |
| **Identify (ID)** | The organization's current cybersecurity risks are understood | Asset management, risk assessment, improvement |
| **Protect (PR)** | Safeguards to manage cybersecurity risks are used | Identity management, authentication, and access control; awareness and training; data security; platform security; infrastructure resilience |
| **Detect (DE)** | Possible attacks and compromises are found and analyzed | Continuous monitoring, adverse event analysis |
| **Respond (RS)** | Actions regarding a detected incident are taken | Incident management, analysis, reporting and communication, mitigation |
| **Recover (RC)** | Assets and operations affected by an incident are restored | Recovery plan execution, recovery communication |

The functions are meant to operate at the same time and continuously, not in sequence. Govern sits at the center, informing how the organization carries out the other five.

:::tip[Exam Tip]

**Govern** is new in CSF 2.0; earlier versions had five functions. A simple way to remember the six is **G-I-P-D-R-R**: Govern, Identify, Protect, Detect, Respond, Recover.

:::

### Tiers

| Tier | Name | Characteristics |
|---|---|---|
| **1** | Partial | Ad hoc and reactive; limited awareness of cybersecurity risk |
| **2** | Risk Informed | Practices are approved by management but may not be set as organization-wide policy |
| **3** | Repeatable | Practices are formally approved, expressed as policy, and updated regularly |
| **4** | Adaptive | Practices adapt based on lessons learned and predictive indicators; continuous improvement |

Tiers describe the maturity of the organization's approach, not a score to maximize; an organization picks the Tier that fits its risks and resources.

### Organizational Profiles

A **Current Profile** describes the Core outcomes an organization is achieving now. A **Target Profile** describes the outcomes it wants to achieve. The gap between them becomes the action plan. CSF 2.0 also describes **Community Profiles**, shared baselines that a sector or other group develops for organizations with similar needs.

---

## NIST Privacy Framework

The **NIST Privacy Framework** is a voluntary tool for managing privacy risk as part of enterprise risk management. Version 1.0, issued in January 2020, is the current final version; a draft version 1.1 released for comment in April 2025 is not final.

The framework's starting point is the overlap between privacy and cybersecurity. Cybersecurity risk comes from threats to the confidentiality, integrity, or availability of systems and data. Privacy risk comes from **data processing** that causes problems for individuals, such as surveillance, discrimination, or loss of trust. The two overlap in **cybersecurity-related privacy events**, such as a breach exposing personal data. But privacy risk can arise without any security failure: data processed exactly as designed can still harm the people it describes.

The framework mirrors the CSF's structure with three parts:

| Part | What It Is |
|---|---|
| **Framework Core** | Privacy activities and outcomes organized into Functions, Categories, and Subcategories |
| **Framework Profiles** | An organization's current or target privacy activities, selected from the Core |
| **Framework Implementation Tiers** | Four levels (Partial, Risk Informed, Repeatable, Adaptive) describing how mature the organization's privacy risk management is |

The Core has five functions:

| Function | Purpose |
|---|---|
| **Identify-P** | Understand the privacy risks to individuals that arise from data processing |
| **Govern-P** | Build the governance structure for ongoing privacy risk management |
| **Control-P** | Manage data with enough granularity to manage privacy risks |
| **Communicate-P** | Give organizations and individuals a reliable understanding of how data is processed and the related privacy risks |
| **Protect-P** | Put data processing safeguards in place to prevent cybersecurity-related privacy events |

Protect-P covers the security safeguards that protect privacy. For detecting, responding to, and recovering from cybersecurity-related privacy events, the Privacy Framework points organizations to the CSF's Detect, Respond, and Recover functions, which is one reason the two frameworks are designed to be used together.

---

## NIST SP 800-53

**NIST Special Publication 800-53, Revision 5**, *Security and Privacy Controls for Information Systems and Organizations*, is a catalog of security and privacy controls. The References limit the exam to its first two chapters, which explain the catalog's purpose, audience, and structure, so focus on those rather than on individual controls. (NIST has issued minor updates to the catalog itself since Rev. 5, most recently release 5.2.0 in August 2025, but those changes fall outside the tested chapters.)

**Purpose.** The catalog gives organizations controls to protect their operations and assets, individuals, other organizations, and the nation from a wide range of threats and risks, including hostile attacks, human errors, natural disasters, structural failures, foreign intelligence entities, and privacy risks.

**Applicability.** The controls are required for U.S. federal information systems under the Federal Information Security Modernization Act (FISMA) and related federal standards. Revision 5 wrote the controls as outcomes, without naming who must implement them, so that any organization (state and local governments, private companies, and others) can use them voluntarily.

**Target audience.** The publication is written for people with responsibilities across the system life cycle: system owners, developers, and security and privacy engineers; those who manage and oversee security and privacy, such as authorizing officials, chief information officers, and senior privacy officials; those who implement and operate controls; and those who assess and monitor them, such as auditors and assessors.

**Organizational responsibilities.** Each organization decides which controls it needs. It manages risk through a defined process (NIST's Risk Management Framework, SP 800-37), selects and tailors controls to its systems and risk tolerance, implements them, assesses whether they work, and monitors them over time.

### How the Catalog Is Organized

The controls fall into **20 families**:

| ID | Family | ID | Family |
|---|---|---|---|
| AC | Access Control | PE | Physical and Environmental Protection |
| AT | Awareness and Training | PL | Planning |
| AU | Audit and Accountability | PM | Program Management |
| CA | Assessment, Authorization, and Monitoring | PS | Personnel Security |
| CM | Configuration Management | PT | PII Processing and Transparency |
| CP | Contingency Planning | RA | Risk Assessment |
| IA | Identification and Authentication | SA | System and Services Acquisition |
| IR | Incident Response | SC | System and Communications Protection |
| MA | Maintenance | SI | System and Information Integrity |
| MP | Media Protection | SR | Supply Chain Risk Management |

Each control has a base statement, optional **control enhancements** that strengthen it, a discussion, and a list of related controls. Controls can be implemented as **common controls** (provided once and inherited by many systems, such as a data center's physical security), **system-specific controls**, or **hybrid controls** that are partly each. Revision 5 also integrated privacy controls into the catalog and moved the control baselines to a separate publication (SP 800-53B).

---

## CIS Controls v8.1

The **CIS Controls**, published by the Center for Internet Security, are a prioritized set of security actions that defend against the most common attacks. Version 8.1, released in 2024, kept the 18 Controls of version 8 and added a **Govern** security function to align with NIST CSF 2.0. Each Control contains specific actions called safeguards. The References cover each Control's overview and its "Why is this Control critical?" explanation.

| # | Control | Overview |
|---|---|---|
| 1 | **Inventory and Control of Enterprise Assets** | Know every device connected to the environment, so unmanaged ones can be found and removed |
| 2 | **Inventory and Control of Software Assets** | Know all software, so only authorized software is installed and runs |
| 3 | **Data Protection** | Identify, classify, securely handle, retain, and dispose of data |
| 4 | **Secure Configuration of Enterprise Assets and Software** | Set and maintain secure configurations for devices and software |
| 5 | **Account Management** | Manage the life cycle of user, administrator, and service accounts |
| 6 | **Access Control Management** | Create, assign, manage, and revoke access rights and privileges |
| 7 | **Continuous Vulnerability Management** | Continuously assess and remediate vulnerabilities |
| 8 | **Audit Log Management** | Collect, review, and retain logs that help detect and recover from attacks |
| 9 | **Email and Web Browser Protections** | Defend the email and web channels attackers use most |
| 10 | **Malware Defenses** | Prevent or control the installation and execution of malicious software |
| 11 | **Data Recovery** | Maintain backup and recovery practices to restore assets to a trusted state |
| 12 | **Network Infrastructure Management** | Securely manage network devices |
| 13 | **Network Monitoring and Defense** | Monitor and defend the network against threats |
| 14 | **Security Awareness and Skills Training** | Train the workforce to reduce human-driven risk |
| 15 | **Service Provider Management** | Evaluate service providers that hold sensitive data or run critical platforms |
| 16 | **Application Software Security** | Manage the security of software developed, hosted, or acquired |
| 17 | **Incident Response Management** | Build and maintain the capability to prepare for, detect, and respond to attacks |
| 18 | **Penetration Testing** | Test defenses by simulating an attacker's methods to find and exploit weaknesses |

The safeguards are grouped into three **Implementation Groups (IGs)** so an organization can start with what matters most:

| Group | Typical Organization | What It Includes |
|---|---|---|
| **IG1** | Small organizations with limited IT and security expertise | Essential cyber hygiene: the minimum every organization should do |
| **IG2** | Organizations with more complex IT and more sensitive data | IG1 plus safeguards for greater risk exposure |
| **IG3** | Organizations with security specialists and data subject to regulatory oversight | IG1 and IG2 plus advanced safeguards |

Each group builds on the one before it, so think of IG1 as essential hygiene, IG2 as intermediate, and IG3 as advanced.

---

## COBIT 2019

**COBIT 2019** is ISACA's framework for the governance and management of enterprise information and technology (I&T). The References cover *COBIT 2019 Framework: Introduction and Methodology*, Chapters 1 through 5. COBIT's starting point is that **governance** and **management** are different activities. Governance, usually the board's job, **evaluates** stakeholder needs, **directs** the enterprise by setting priorities, and **monitors** performance. Management **plans, builds, runs, and monitors** activities in line with that direction. COBIT organizes its 40 governance and management objectives into five domains on that basis: Evaluate, Direct and Monitor (EDM) for governance, and Align, Plan and Organize (APO); Build, Acquire and Implement (BAI); Deliver, Service and Support (DSS); and Monitor, Evaluate and Assess (MEA) for management.

### Governance System Principles (Six)

| # | Principle | Meaning |
|---|---|---|
| 1 | **Provide stakeholder value** | The governance system satisfies stakeholder needs and creates value from I&T |
| 2 | **Holistic approach** | The system is built from components of different types that work together |
| 3 | **Dynamic governance system** | The system adapts when design factors, such as strategy or technology, change |
| 4 | **Governance distinct from management** | Governance and management are separate activities with separate structures |
| 5 | **Tailored to enterprise needs** | The system is customized to the enterprise using design factors |
| 6 | **End-to-end governance system** | The system covers all of the enterprise's technology and information, not just the IT function |

### Governance Framework Principles (Three)

These describe the COBIT framework itself, rather than the governance system an enterprise builds with it:

| # | Principle | Meaning |
|---|---|---|
| 1 | **Based on a conceptual model** | The framework rests on a consistent model of key components and relationships |
| 2 | **Open and flexible** | The framework can take in new content and adapt to new issues |
| 3 | **Aligned to major standards** | The framework aligns with related standards, frameworks, and regulations |

### Components of a Governance System (Seven)

| Component | Description |
|---|---|
| **Processes** | Organized practices and activities that achieve objectives and produce outputs |
| **Organizational structures** | The key decision-making bodies, such as the board and its committees |
| **Principles, policies, and procedures** | Guidance that turns desired behavior into practical day-to-day rules |
| **Information** | The information the enterprise produces and uses, including governance information such as reports and plans |
| **Culture, ethics, and behavior** | The behavior of individuals and of the enterprise, which is often underestimated as a success factor |
| **People, skills, and competencies** | The human capabilities needed to make good decisions and carry them out |
| **Services, infrastructure, and applications** | The technology and services that support governance and management |

:::warning

Do not confuse COBIT's **six governance system principles**, which describe what an enterprise's governance system should be, with its **three governance framework principles**, which describe how the COBIT framework itself is built.

:::

ISACA announced COBIT 7 for October 2026. The 2027 Blueprint still cites COBIT 2019, and new versions are tested only once the References list them, so study COBIT 2019.

---

## Summary

| Source | Key Takeaway |
|---|---|
| HIPAA | Covered entities and business associates; TPO uses need no authorization; administrative, physical, and technical safeguards; breach notice within 60 days |
| GDPR | Reaches non-EU organizations that offer goods or services to, or monitor, people in the EU; six principles plus accountability; 72-hour breach notification |
| PCI DSS | v4.0.1; 12 requirements under 6 goals; protects cardholder data and sensitive authentication data |
| NIST CSF 2.0 | Core (six functions, G-I-P-D-R-R), Tiers (1-4), and Organizational Profiles (current and target) |
| NIST Privacy Framework | Core (Identify-P, Govern-P, Control-P, Communicate-P, Protect-P), Profiles, and Implementation Tiers |
| NIST SP 800-53 Rev. 5 | Control catalog; required for federal systems, usable by anyone; 20 families |
| CIS Controls v8.1 | 18 prioritized Controls; Implementation Groups IG1, IG2, and IG3 |
| COBIT 2019 | Governance distinct from management; 6 system principles, 3 framework principles, 7 components |

---

## Practice Questions

1. **Bear Co.** is a health insurer. It contracts with a cloud provider to store member records, and the provider suffers a breach of unsecured PHI affecting 1,200 members. Which HIPAA rule applies, what notices are required, and what must the cloud provider do?

2. **Kingfisher Industries**, a U.S. manufacturer with no European offices, sells products through its website to customers in France and Germany. It stores customer data with **Sloth Security**, a U.S. hosting company. Kingfisher's CEO says the GDPR cannot apply because the company has no presence in Europe. Is the CEO right? Which company is the controller and which is the processor? Which principle would stop Kingfisher from requiring customers' dates of birth to complete a purchase?

3. **Polar Inc.** has completed a Current Profile under the NIST CSF, and its CISO recommends building a Target Profile. A board member asks how a Profile differs from a Tier. How should the CISO answer?

:::tip[Answers]

1. The **Breach Notification Rule**. Bear Co. (a health plan, so a covered entity) must notify the affected members without unreasonable delay and no later than 60 days after discovery. Because the breach affects 500 or more individuals, it must notify HHS at the same time, and if more than 500 of the affected members live in one state or jurisdiction, it must also notify prominent media outlets there. The cloud provider is a **business associate**, so it must notify Bear Co. without unreasonable delay and within 60 days of discovering the breach.

2. The CEO is **wrong**. The GDPR applies to an organization outside the EU that offers goods or services to people in the EU, which Kingfisher does through its website. Kingfisher decides why and how the customer data is processed, so it is the **controller**; Sloth Security processes the data on Kingfisher's behalf, so it is a **processor**. The **data minimization** principle limits Kingfisher to data that is adequate, relevant, and necessary for the purpose. A shipping address is needed to deliver a product; a date of birth usually is not.

3. **Tiers** (Partial, Risk Informed, Repeatable, Adaptive) describe how rigorous and mature the organization's cybersecurity risk governance and management **practices** are. **Profiles** describe the specific cybersecurity **outcomes** from the CSF Core that the organization achieves now (Current Profile) or wants to achieve (Target Profile). An organization at Tier 2 might have a Current Profile that is strong in Protect but weak in Respond and Recover. The Tier speaks to how the organization manages risk; the Profile speaks to what it accomplishes.

:::
