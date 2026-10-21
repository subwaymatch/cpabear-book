# COSO Framework

When auditors, regulators, and managers talk about internal control in the United States, they almost always mean the framework published by the **Committee of Sponsoring Organizations of the Treadway Commission (COSO)**. Its *Internal Control: Integrated Framework* (updated in 2013) gives everyone a shared vocabulary: what internal control is, what it is for, and how to tell whether it works. It is the framework management uses to assess internal control over financial reporting, the one the auditor uses to evaluate it, and the only internal control framework in the AUD References. This chapter defines internal control, then walks through the framework's structure and its five components and seventeen principles, and ends with why the auditor needs to understand internal control on every audit.

---

## What Internal Control Is

COSO defines **internal control** as a process, effected by an entity's board of directors, management, and other personnel, designed to provide **reasonable assurance** regarding the achievement of objectives relating to operations, reporting, and compliance. Each part of that definition does work. Internal control is a *process*, not a policy manual. It is carried out by *people* at every level. And it provides *reasonable*, not absolute, assurance.

The framework groups objectives into three categories:

| Objective category | What it covers |
|---|---|
| **Operations** | Effective and efficient operations, including financial performance goals and safeguarding assets against loss |
| **Reporting** | Reliable internal and external reporting, both financial and nonfinancial |
| **Compliance** | Adherence to laws and regulations that apply to the entity |

**Example:** Grizzly Industries tracks machine downtime to keep its plants running efficiently (operations), reconciles its subledgers to the general ledger each month so its quarterly statements are accurate (reporting), and logs every hazardous waste shipment to meet environmental rules (compliance).

A financial statement auditor cares mainly about the reporting objective, specifically internal control over financial reporting. Some operations and compliance controls matter too, when they affect the financial statements. A control that restricts access to the warehouse is an operations control that also protects the existence of inventory.

### Why Assurance Is Only Reasonable

No system of internal control can provide absolute assurance. People make mistakes and use poor judgment, two or more people can collude to get around a control, management can override controls, and an entity will not spend more on a control than the risk it addresses is worth. These **inherent limitations**, and the risk of management override in particular, are the subject of the next chapter, [Limitations of Controls and Management Override](/aud/internal-control/limitations-of-controls-and-management-override).

---

## How the Framework Is Built

The framework has three layers. There are **five components** of internal control. Each component is supported by **principles**, seventeen in total, that describe what the component requires. Each principle comes with **points of focus**, which are characteristics that help management judge whether the principle is present and functioning; they are guidance, not a checklist.

For internal control to be **effective**, each of the five components and each relevant principle must be **present** (it exists in the design) and **functioning** (it operates as designed), and the five components must **operate together** as an integrated system. A deficiency that severely reduces the likelihood that the entity can achieve its objectives is called a **major deficiency** in COSO terms, and management cannot conclude that internal control is effective while one exists.

The five components, in the order COSO presents them, are the control environment, risk assessment, control activities, information and communication, and monitoring activities. A common mnemonic is **CRIME**: **C**ontrol activities, **R**isk assessment, **I**nformation and communication, **M**onitoring, and the control **E**nvironment.

COSO often draws the framework as a cube. One face shows the three objective categories, another the five components, and the third the entity's organizational structure (entity, division, operating unit, function). The picture makes a simple point: every component applies to every objective at every level of the organization.

---

## Control Environment

The **control environment** is the set of standards, processes, and structures that provide the basis for carrying out internal control across the organization. It is often called the **tone at the top**, and it is the foundation for every other component. A strong set of control activities will not last long under leaders who ignore them.

| # | Principle |
|---|---|
| 1 | The organization demonstrates a commitment to **integrity and ethical values** |
| 2 | The board of directors demonstrates **independence from management** and exercises **oversight** of the development and performance of internal control |
| 3 | Management establishes, with board oversight, **structures, reporting lines, and appropriate authorities and responsibilities** |
| 4 | The organization demonstrates a commitment to attract, develop, and retain **competent individuals** |
| 5 | The organization holds individuals **accountable** for their internal control responsibilities |

**Example:** At Bear Co., the CEO talks about ethics at every quarterly all-staff meeting and disciplines employees who violate the code of conduct. The audit committee consists entirely of independent directors who meet privately with the auditor. Job descriptions define who can approve what, the company pays for accounting staff to keep their skills current, and performance reviews include control responsibilities. Each of these is evidence of a strong control environment.

---

## Risk Assessment

**Risk assessment** is the entity's process for identifying and analyzing risks to achieving its objectives, as a basis for deciding how to manage them. Because conditions change, the process must be ongoing.

| # | Principle |
|---|---|
| 6 | The organization specifies **objectives** with enough clarity to identify and assess related risks |
| 7 | The organization **identifies and analyzes risks** to achieving its objectives |
| 8 | The organization considers the potential for **fraud** in assessing risks |
| 9 | The organization identifies and assesses **changes** that could significantly affect internal control |

**Example:** Polar Inc. is replacing its billing system. Management identifies the risk that invoices could be lost or duplicated during the conversion (Principle 7), considers whether employees with new system access could create fictitious credit memos (Principle 8), and evaluates how the change affects existing reconciliation controls (Principle 9).

---

## Control Activities

**Control activities** are the actions, established through policies and procedures, that help ensure management's directives to mitigate risks are carried out. They are what most people picture when they hear the words "internal control."

| # | Principle |
|---|---|
| 10 | The organization selects and develops **control activities** that mitigate risks to acceptable levels |
| 11 | The organization selects and develops **general control activities over technology** |
| 12 | The organization deploys control activities through **policies** that establish what is expected and **procedures** that put the policies into action |

Control activities can be **preventive** (stopping an error before it is recorded) or **detective** (finding it afterward), and **manual** or **automated**. The blueprint names the common types:

| Type | Example |
|---|---|
| **Authorizations and approvals** | A manager approves purchase orders over \$10,000 before they are sent |
| **Verifications** | The system matches each vendor invoice to the purchase order and receiving report before payment |
| **Reconciliations** | Accounting reconciles the bank account to the general ledger monthly and investigates differences |
| **Physical controls** | Inventory is kept in a locked warehouse, and periodic counts are compared to the records |
| **Logical access controls** | Users need a password and multi-factor authentication, and their system access matches their job role |
| **Supervisory controls** | A supervisor reviews a sample of reconciliations prepared by staff |
| **Segregation of duties** | The person who records cash receipts does not also handle deposits |

**Physical** controls protect tangible assets and locations: locks, badge readers, cameras, safes. **Logical access** controls protect systems and data: user authentication, role-based permissions, encryption. Both matter, but because most financial data now lives in systems, weak logical access can undo strong physical security. A locked office does not help if anyone can log into the accounting system from home. The [Information Technology Controls](/aud/internal-control/information-technology-controls) chapter covers IT controls in detail.

### Segregation of Duties

**Segregation of duties** keeps any one person from being able to both commit and conceal an error or fraud. Three functions should be separated: **authorization** of transactions, **recordkeeping**, and **custody** of the related assets (sometimes remembered as **ARC**).

**Example:** At Grizzly Industries, the purchasing manager approves purchase orders (authorization), the accounts payable clerk records vendor invoices (recordkeeping), and the warehouse supervisor receives and holds the goods (custody). No single person can order goods, record the purchase, and take the inventory, so a fictitious purchase or a theft would require collusion.

When an entity is too small to separate these duties fully, it relies on **compensating controls**, such as an owner who reviews every bank statement and approves every disbursement.

---

## Information and Communication

**Information** is needed for people to carry out their internal control responsibilities, and **communication** is how it reaches them. This component covers the systems that capture and process transactions as well as the channels that share expectations and problems, inside and outside the entity.

| # | Principle |
|---|---|
| 13 | The organization obtains or generates and uses **relevant, quality information** to support internal control |
| 14 | The organization **internally communicates** information, including objectives and responsibilities for internal control |
| 15 | The organization **communicates with external parties** about matters affecting internal control |

**Example:** Honey Entertainment's ERP system captures every ticket sale and produces a daily revenue report that managers use to spot unusual activity (Principle 13). Accounting policies are posted on the company intranet and new staff are trained on them, and employees can report concerns through an anonymous hotline (Principle 14). The company also has procedures for responding to inquiries from regulators and for communicating with its external auditors (Principle 15).

---

## Monitoring Activities

**Monitoring activities** determine whether each of the five components, and the principles within them, is present and functioning. Monitoring can be **ongoing**, built into normal operations, or **separate**, performed periodically by people outside the process.

| # | Principle |
|---|---|
| 16 | The organization selects, develops, and performs **ongoing and/or separate evaluations** |
| 17 | The organization evaluates and communicates **deficiencies** in a timely manner to those responsible for corrective action, including senior management and the board |

**Example:** At Panda Records, the controller reviews exception reports from the payroll system every pay period, an ongoing evaluation. Once a year, the internal audit department tests key financial controls and reports its findings to the audit committee, a separate evaluation. When internal audit finds that terminated employees kept system access for weeks, it reports the deficiency to the CFO and the audit committee, who assign someone to fix it.

---

## Why the Auditor Obtains an Understanding of Internal Control

On every audit, under both AU-C 315 and PCAOB AS 2110, the auditor must obtain an understanding of the entity's system of internal control. The auditor does not do this to grade the client's controls. The purpose is to identify and assess the **risks of material misstatement** and to design further audit procedures that respond to them. Knowing where controls are strong or weak tells the auditor where misstatements are most likely and what kind of evidence will be needed.

The understanding covers all five components. Within control activities, the auditor identifies the specific controls that address risks of material misstatement at the assertion level, such as controls over significant risks, controls over journal entries, and controls the auditor plans to test. For those controls, the auditor **evaluates their design** and **determines whether they have been implemented** (that they exist and are being used), using inquiry together with observation, inspection, or a walkthrough. Inquiry alone is not enough. The auditor also identifies the IT applications involved and the general IT controls that address the risks arising from their use.

Understanding a control is different from testing whether it worked all year:

| Activity | Purpose | When required |
|---|---|---|
| **Obtaining an understanding**, including design and implementation of identified controls | Identify and assess risks; design further procedures | On every audit |
| **Testing operating effectiveness** | Obtain evidence that controls operated effectively throughout the period | When the auditor plans to rely on the controls to reduce substantive testing, or when substantive procedures alone cannot provide sufficient appropriate evidence; also in an integrated audit |

**Example:** Bear Co.'s auditor walks through the revenue cycle, inspects the credit policy, and observes the order entry process. The walkthrough shows that credit memos are issued without anyone's approval. Rather than rely on controls that do not exist, the auditor treats credit memos as a higher-risk area and performs extensive substantive testing of credit memos issued near year-end.

For issuers subject to SOX Section 404(b) (accelerated and large accelerated filers), the auditor goes further and tests the operating effectiveness of controls over all relevant assertions in order to give an opinion on internal control over financial reporting. See [Reporting on Internal Control](/aud/completing-the-audit-and-reporting/reporting-on-internal-control).

---

## Summary

| Topic | Key takeaway |
|---|---|
| **Definition** | A process effected by the board, management, and other personnel, providing reasonable assurance about operations, reporting, and compliance objectives |
| **Structure** | 5 components, 17 principles, and points of focus; effective control requires every component and relevant principle to be present and functioning, and the components to operate together |
| **Control environment (1-5)** | Integrity and ethics, board independence and oversight, structure and authority, competence, accountability |
| **Risk assessment (6-9)** | Objectives, risk identification, fraud risk, significant change |
| **Control activities (10-12)** | Control activities, general controls over technology, policies and procedures |
| **Information and communication (13-15)** | Quality information, internal communication, external communication |
| **Monitoring activities (16-17)** | Ongoing and separate evaluations; communicating deficiencies |
| **Segregation of duties** | Separate authorization, recordkeeping, and custody |
| **Auditor's understanding** | Required on every audit to assess risks; testing operating effectiveness is required only to rely on controls, when substantive procedures alone are not enough, or in an integrated audit |
