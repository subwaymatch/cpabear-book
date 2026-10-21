# Information Technology Controls

Almost every transaction an auditor tests today was initiated, recorded, or processed by a computer system. That is good news for consistency (a system performs the same calculation the same way every time) and a source of risk (a single unauthorized change can corrupt thousands of transactions without anyone noticing). The auditor therefore has to understand the entity's **IT environment** and the **controls** over it, both to assess risk and to decide whether the system's output can be trusted. This chapter explains the IT environment, the difference between general IT controls and application controls, the main categories of each, automated and manual controls, spreadsheets and other end-user tools, artificial intelligence, cybersecurity, and how all of this shapes the audit approach.

For nonissuers, AU-C 315 (as revised by **SAS 145**) sets the requirements; for issuers, AS 2110 and AS 2201. SAS 145 expanded the guidance on IT and requires the auditor to identify the risks arising from the entity's use of IT and the general IT controls that address them.

---

## The IT Environment

The **IT environment** consists of the entity's IT applications and the supporting IT infrastructure, together with the IT processes and personnel involved in managing them. In practice that includes:

- **IT applications**: the programs that process transactions and data, such as an ERP system, a payroll package, or a custom billing system;
- **IT infrastructure**: the network, operating systems, databases, and hardware, whether on-site or provided through **cloud computing or hosting arrangements**; and
- **IT processes**: the processes for managing access, managing program and other changes, and managing IT operations.

The auditor obtains an understanding of how the entity uses IT to capture, store, and process information, and identifies the **IT applications** that are relevant to the audit: for example, applications whose automated controls the auditor plans to rely on, or that produce reports or data the auditor will use as evidence. For those applications, the auditor identifies the **risks arising from the use of IT**, such as unauthorized access to data or unauthorized changes to programs, and the general IT controls that address them.

When an application or its infrastructure is run by an outside provider, such as a cloud-based accounting system, the provider is a service organization. The auditor's understanding then often relies on a SOC 1 report, covered in [SOC Reports](/aud/internal-control/soc-reports).

---

## General IT Controls and Application Controls

IT controls fall into two broad categories.

| Category | What it does | Scope |
|---|---|---|
| **General IT controls (GITCs)** | Support the continued proper operation of the IT environment, including the effective functioning of application controls and the integrity of data | Apply across many applications and the infrastructure beneath them |
| **Application controls** | Controls within a specific application (often automated) that address the completeness, accuracy, validity, and authorization of transactions | Apply to a particular business process or class of transactions |

GITCs are the foundation for application controls. An automated control can be trusted only if nobody could have changed the program that runs it or bypassed it through unauthorized access.

**Example:** Polar Inc.'s ERP system performs an automated three-way match of purchase orders, receiving reports, and vendor invoices before releasing payments. If Polar Inc. has no effective control over program changes, a programmer could alter the matching logic without anyone knowing, so the auditor could not rely on the three-way match even though it appears well designed.

---

## General IT Controls

GITCs are organized around the three IT processes.

### Managing Access

Access controls restrict who can use systems and data and what they can do. **Logical access** controls protect software and data through user authentication (passwords, multi-factor authentication), role-based permissions, and restrictions on direct access to databases. **Physical access** controls protect the hardware through locked server rooms, badge readers, and cameras.

Effective access management rests on a few principles: **least privilege** (users receive only the access their job requires), **segregation of incompatible access** (the same user cannot, for example, both create vendors and approve payments), careful control of **privileged** or administrator access, prompt **removal of access** when employees leave or change jobs, and **periodic reviews** in which managers confirm that each user's access is still appropriate.

### Managing Program and Other Changes

Change management controls make sure that changes to applications, databases, and infrastructure are authorized, tested, approved, and documented before they reach the live (production) environment. Key elements are formal change requests, testing in a separate environment, approval by both IT and the business owner, separation of the development, testing, and production environments, and a rule that the person who wrote a change is not the person who moves it into production. The same discipline applies to developing or acquiring a new system and to converting data from an old system to a new one.

**Example:** Grizzly Industries requires every change to its revenue module to go through a written change request, testing in a separate environment, sign-off by the IT manager and the controller, and migration to production by a different IT staff member, with each step recorded in a change log.

### Managing IT Operations

IT operations controls keep systems running as intended day to day: **job scheduling** so that batch processes run on time and in the right order, **monitoring** that alerts staff to failures, **backup and recovery** procedures that are periodically tested, and **incident management** for identifying and resolving problems.

**Example:** Bear Co. runs a nightly job that posts all subledger activity to the general ledger. Operations controls make sure the job runs every night, send an automated alert to IT if it fails, and require IT to confirm that a failed job was rerun completely before the next business day.

---

## Application Controls

Application controls operate at the transaction level and are usually grouped by the stage of processing they address.

**Input controls** make sure data entered into the system is complete, accurate, and authorized.

| Control | What it does |
|---|---|
| **Validity check** | Accepts only values on an approved list, such as existing customer numbers or account codes |
| **Limit or range check** | Rejects amounts outside reasonable bounds |
| **Check digit** | Detects transposition errors in identification numbers |
| **Completeness check** | Requires all mandatory fields before a transaction is accepted |
| **Batch totals** | Compare record counts, dollar totals, or hash totals of a batch before and after entry |

**Processing controls** make sure transactions are processed completely and accurately once entered, for example through run-to-run totals, sequence checks that flag missing or duplicate document numbers, and automated calculations of amounts such as sales tax or discounts.

**Output controls** make sure results are complete and accurate and reach only authorized people, for example by reconciling output totals to input totals, restricting the distribution of sensitive reports, and having management review exception reports.

**Example:** Honey Entertainment's billing system accepts an invoice only if it has a valid customer number (validity check), an amount between \$1 and \$1,000,000 (range check), and a due date (completeness check). Rejected invoices go to an exception report that the billing supervisor reviews and clears daily.

---

## Automated and Manual Controls

| Characteristic | Automated controls | Manual controls |
|---|---|---|
| **Consistency** | Perform the same way every time | Subject to error, fatigue, and inconsistency |
| **Volume** | Handle large volumes efficiently | Become less reliable as volume grows |
| **Judgment** | Cannot handle situations they were not programmed for | Can deal with unusual or complex items |
| **Evidence** | Leave an electronic trail | Often leave a signature or sign-off |
| **Dependence on GITCs** | Directly depend on effective GITCs | Often depend on system-generated reports |

Because an automated control performs consistently, an auditor who tests it once can rely on it for the whole period, but only if GITCs show that the program was not changed and the control was not bypassed. If GITCs are weak, the auditor cannot simply rely on the automated control and must either test it more extensively or obtain the evidence some other way.

Manual controls depend on IT more often than they seem to. A manager who reviews an aging report for unusual balances is performing a manual control, but the review is only as good as the report. When a control or a substantive procedure uses **information produced by the entity**, the auditor obtains evidence that the information is complete and accurate, for example by testing the report's logic and the GITCs over the application that produces it.

---

## Spreadsheets and Other End-User Computing

**End-user computing** refers to spreadsheets, small databases, scripts, and similar tools that business users build and maintain outside the formal IT environment. They are common in exactly the places auditors care about, such as calculating reserves, allocations, and fair values. Because they usually sit outside IT's change management and access controls, they carry familiar risks: formulas changed without review, files on shared drives that anyone can edit, several versions in circulation, logic that was never tested, and no record of who changed what.

**Example:** Honey Entertainment calculates its allowance for credit losses in a spreadsheet that one accountant maintains, using data exported from the ERP system. No one else reviews the formulas, and the file is not protected. The auditor treats the calculation as higher risk, tests the completeness of the exported data, and recalculates the allowance independently rather than relying on the spreadsheet.

---

## Artificial Intelligence and Other Emerging Technologies

The blueprint lists an entity's **adoption and use of technologies, including artificial intelligence**, among the factors that affect the risk of material misstatement. An entity might use AI to code vendor invoices to accounts, match customer payments to open invoices, flag unusual transactions, or help develop estimates. For the auditor, an AI tool is another IT application, and the same questions apply: What does it do in the financial reporting process? What could go wrong? Which controls address it?

The risks have some distinctive features. Outputs depend on the **quality and completeness of the data** the tool uses. A model can be **changed or retrained** without the formal change management that applies to ordinary programs. Some outputs are **hard to explain**, and some are simply **wrong** while looking authoritative. And a model can carry **bias** from the data it learned from. The controls follow the general IT control pattern (restricted access to models and data, change management over models, and monitoring of performance), plus management review of the tool's outputs before they are recorded. When the auditor uses information generated by such a tool as evidence, the auditor evaluates its reliability, as discussed in [Reliability of Data and Information](/aud/audit-evidence-and-procedures/reliability-of-data-and-information).

---

## Cybersecurity

Cyber incidents such as data breaches, ransomware, and unauthorized access can affect the financial statements directly. Financial data can be lost or corrupted, unauthorized transactions can be processed, operations can be disrupted (affecting the completeness of recorded transactions), and the entity may face losses, contingent liabilities, and disclosure obligations. The auditor considers whether the entity has assessed its cybersecurity risks, how its access and network controls protect financial systems, whether any significant incidents occurred during the period, and how they were reflected in the financial statements.

**Example:** Panda Records suffers a ransomware attack in November that locks its billing system for two weeks. The auditor asks how transactions were recorded during the outage and how the data was restored, tests the completeness of billings for that period, and evaluates whether the company has properly accounted for and disclosed the costs, any customer claims, and any insurance recoveries.

---

## How IT Controls Affect the Audit

| IT control environment | Effect on the audit |
|---|---|
| **Effective GITCs and application controls** | The auditor may test and rely on automated controls, assess control risk below the maximum, and reduce substantive testing |
| **Ineffective GITCs** | The auditor cannot simply rely on automated controls or system reports in the affected applications; more substantive testing, or testing of the data itself, is needed |
| **Heavy reliance on spreadsheets** | The auditor evaluates controls over key spreadsheets or reperforms the calculations |
| **Recent cyber incident** | The auditor considers whether data integrity was compromised and expands procedures |

When IT controls are effective, the auditor can use a **combined approach**: tests of controls plus reduced substantive procedures. When they are not, the auditor generally moves toward a **substantive approach**. There is one important limit to that fallback. When an entity processes large volumes of transactions electronically with little or no paper trail, substantive procedures alone may not provide sufficient appropriate evidence, and the auditor must test the controls over that processing.

:::tip[Exam Tip]

A weakness in a GITC is **pervasive** within the applications it covers. If program change controls over the ERP system are ineffective, every automated control and every system-generated report in that system is in question, not just one control.

:::
