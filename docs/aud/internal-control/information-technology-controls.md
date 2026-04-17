# Information Technology Controls

Virtually every organization today relies on information technology to initiate, record, process, and report financial transactions. Because IT systems are deeply embedded in the financial reporting process, auditors must understand how **IT controls** affect the reliability of financial data and, consequently, the audit approach. Weak IT controls can undermine even well-designed manual controls, while strong IT controls can enhance consistency and accuracy across millions of transactions.

This section covers **general IT controls (GITCs)** and **application controls**, the key categories within each, the distinction between **automated and manual controls**, **end-user computing risks**, **cybersecurity considerations**, and how IT controls influence the auditor's risk assessment and testing strategy.

:::info

Auditing standards (AU-C 315 and AS 2110) require the auditor to obtain an understanding of the entity's information system—including IT—relevant to financial reporting. This includes understanding how transactions are initiated, recorded, processed, corrected, and reported.

:::

---

## General IT Controls (GITCs) vs. Application Controls

IT controls are broadly divided into two categories:

| Category | Description | Scope |
|---|---|---|
| **General IT Controls (GITCs)** | Controls over the IT environment as a whole that support the continued proper functioning of application controls | Apply across multiple systems and applications |
| **Application Controls** | Controls embedded within specific software applications to ensure completeness, accuracy, and validity of transaction processing | Apply to individual business processes or transaction cycles |

GITCs create the foundation upon which application controls operate. If GITCs are weak—for example, if anyone can modify a payroll application without authorization—then the application controls within that system cannot be relied upon, even if they appear well designed.

**Example:** MAS Inc. uses an ERP system to process accounts payable. The system has an automated three-way match (application control) that compares purchase orders, receiving reports, and vendor invoices before authorizing payment. However, if MAS Inc. lacks adequate program change controls (a GITC), a programmer could modify the matching logic to bypass the control—rendering the three-way match unreliable.

:::tip[Exam Tip]

Think of GITCs as the "umbrella" over all application controls. On the CPA exam, if a question describes a weakness in a GITC (such as poor access controls), the correct answer often involves questioning the reliability of **all** application controls that depend on that system.

:::

---

## Categories of General IT Controls

GITCs are typically organized into four categories:

### Program Change Controls

**Program change controls** ensure that modifications to existing applications or systems are properly authorized, tested, approved, and documented before being moved into production. Without these controls, unauthorized or untested changes could corrupt data processing.

Key elements include:

- **Authorization** — All changes must be requested and approved by appropriate personnel
- **Testing** — Changes are tested in a separate environment before deployment
- **Segregation of environments** — Development, testing, and production environments are separated
- **Documentation** — Changes are logged with details of what was modified, by whom, and when

**Example:** Kingfisher Industries requires that any changes to its revenue recognition module go through a formal change request, testing in a sandbox environment, approval by the IT manager and the controller, and documentation in a change log before deployment.

### Access Controls (Logical and Physical)

**Access controls** restrict who can access IT systems, data, and physical IT infrastructure. They are subdivided into:

| Type | Description | Examples |
|---|---|---|
| **Logical access controls** | Restrict access to software, data, and system resources | Passwords, multi-factor authentication, role-based access, encryption |
| **Physical access controls** | Restrict physical access to IT hardware and facilities | Locked server rooms, badge readers, security cameras |

Key principles include **least privilege** (users receive only the minimum access necessary), **segregation of duties** (no single user should have incompatible access rights), and **periodic access reviews** (user access is reviewed regularly and revoked when no longer needed).

### Computer Operations Controls

**Computer operations controls** ensure that IT systems operate as intended on a day-to-day basis. These include:

- **Job scheduling** — Ensuring batch processes (e.g., nightly posting runs) execute on time and in the correct sequence
- **Backup and recovery** — Regular backups of data and systems, with tested restoration procedures
- **Incident management** — Procedures for identifying, escalating, and resolving system errors or outages
- **Monitoring** — Automated alerts for system failures, capacity thresholds, or abnormal activity

**Example:** Gies Co. runs a nightly batch job to post all journal entries from its subledgers to the general ledger. Computer operations controls ensure this job runs every night at 11:00 PM, that any failures trigger an automated alert to the IT operations team, and that a recovery procedure exists if the job fails mid-process.

### Data Integrity Controls

**Data integrity controls** protect data from unauthorized modification, loss, or corruption throughout its lifecycle—during input, storage, processing, and transmission. These include:

- **Database access restrictions** — Limiting direct access to database tables
- **Referential integrity checks** — Ensuring relationships between tables remain valid
- **Audit trails and logging** — Recording all changes to critical data
- **Data validation rules** — Preventing invalid data from being stored

---

## Application Controls

Application controls are embedded within specific software programs and operate at the transaction level. They are divided into three categories:

### Input Controls

**Input controls** ensure that data entered into a system is accurate, complete, and authorized. Common input controls include:

| Control | Description |
|---|---|
| **Validity checks** | Ensure entered data matches predefined acceptable values (e.g., valid account codes) |
| **Range checks** | Verify that numerical data falls within acceptable limits |
| **Check digits** | Mathematical verification of identification numbers to detect transposition errors |
| **Completeness checks** | Require all mandatory fields to be populated before a transaction is accepted |
| **Authorization controls** | Require approval before a transaction can be entered or submitted |
| **Batch totals** | Compare control totals (hash totals, record counts, financial totals) to verify that all items in a batch were entered |

**Example:** BIF Partners' accounts receivable system requires that every customer invoice include a valid customer number (validity check), an invoice amount between \$1 and \$10,000,000 (range check), and a populated due date (completeness check). Invoices failing any check are rejected and routed to an exception report.

### Processing Controls

**Processing controls** ensure that transactions are processed accurately and completely once they have been entered. Examples include:

- **Run-to-run totals** — Comparing output totals from one processing stage to input totals of the next stage
- **Sequence checks** — Verifying that transactions are processed in the correct order
- **Reasonableness tests** — Flagging transactions that fall outside expected parameters
- **Automatic calculations** — Ensuring mathematical computations (e.g., tax, discounts) are performed consistently

### Output Controls

**Output controls** ensure that processing results are complete, accurate, and distributed only to authorized recipients:

- **Report distribution lists** — Ensuring sensitive reports are sent only to authorized personnel
- **Reconciliation of output to input** — Verifying that the number and dollar amount of transactions processed match what was entered
- **Review of exception reports** — Management review of items that failed processing controls

---

## Automated vs. Manual Controls

| Characteristic | Automated Controls | Manual Controls |
|---|---|---|
| **Consistency** | Highly consistent—perform the same way every time | Subject to human error, fatigue, and judgment variability |
| **Evidence** | May not leave visible evidence; audit trail is electronic | Typically leave physical evidence (signatures, initials) |
| **Scalability** | Handle high volumes efficiently | Become less effective as transaction volume increases |
| **Adaptability** | Cannot handle unusual or unexpected transactions | Can exercise judgment for unique situations |
| **Dependence on GITCs** | Effectiveness depends on strong GITCs | Not directly dependent on GITCs |

:::caution

An automated control is only as reliable as the system it runs on. If GITCs are weak, the auditor **cannot** rely on automated controls without additional testing. Conversely, a strong GITC environment increases the auditor's ability to rely on automated controls and may reduce the extent of substantive testing.

:::

---

## End-User Computing Risks

**End-user computing (EUC)** refers to spreadsheets, databases, and other tools developed and maintained by business users outside the formal IT environment. Common examples include Excel spreadsheets used to calculate reserves, Access databases tracking inventory, or user-developed macros.

EUC risks include:

- **Lack of change controls** — Formulas can be modified without authorization or documentation
- **No access restrictions** — Files may be stored on shared drives with broad access
- **Version control issues** — Multiple versions of the same spreadsheet may exist
- **Lack of testing** — Spreadsheet logic may contain undetected errors
- **Limited audit trail** — Changes are often untraceable

**Example:** Illini Entertainment uses an Excel spreadsheet to calculate its allowance for doubtful accounts. The spreadsheet contains complex formulas and links to data exported from the ERP system. Because the spreadsheet is maintained by one accountant with no formal review or change controls, there is a significant risk that formula errors or unauthorized changes could result in a material misstatement.

:::warning

Spreadsheet risk is a frequent CPA exam topic. When an entity relies on a spreadsheet for a significant accounting estimate or financial reporting calculation, the auditor should evaluate whether adequate controls exist over the spreadsheet's integrity, access, and change management.

:::

---

## IT Governance and Security

**IT governance** refers to the organizational structure, policies, and processes that ensure IT supports and enables the achievement of the entity's strategies and objectives. Key elements include:

- **IT strategic planning** — Aligning IT investments with business objectives
- **IT organizational structure** — Defining roles, responsibilities, and reporting lines within the IT function
- **IT policies and procedures** — Establishing standards for security, development, operations, and data management
- **Performance monitoring** — Measuring and reporting on IT system availability, reliability, and compliance

---

## Cybersecurity Considerations

Cybersecurity threats can have a direct impact on financial reporting. **Data breaches**, **ransomware attacks**, and **unauthorized access** may result in:

- Loss or corruption of financial data
- Unauthorized transactions
- Disruption of business operations affecting completeness of recorded transactions
- Significant disclosure obligations and contingent liabilities

The auditor should consider:

- Whether the entity has performed a **cybersecurity risk assessment**
- The adequacy of **network security** controls (firewalls, intrusion detection, encryption)
- **Incident response plans** and whether significant breaches have occurred
- The effect of any cybersecurity incidents on the **financial statements and disclosures**

**Example:** Illini Security, a cybersecurity firm, discovers that a client—MSA Records—experienced a data breach that exposed customer financial data. MSA Records must evaluate whether the breach creates a contingent liability requiring disclosure and whether any financial data was compromised, which could affect the completeness and accuracy of recorded transactions.

---

## How IT Controls Affect the Audit Approach

The strength or weakness of IT controls directly influences the auditor's **risk assessment** and **audit strategy**:

| IT Control Environment | Impact on Audit Approach |
|---|---|
| **Strong GITCs and application controls** | Auditor may rely on automated controls, perform fewer substantive tests, and use a lower assessed level of control risk |
| **Weak GITCs** | Auditor cannot rely on automated application controls; must increase substantive testing and may need to use a fully substantive approach |
| **Significant EUC reliance** | Auditor must evaluate controls over key spreadsheets and may need to reperform calculations independently |
| **Recent cybersecurity incidents** | Auditor should assess whether data integrity was compromised and consider expanding procedures |

When IT controls are effective, the auditor can adopt a **combined approach** (tests of controls plus reduced substantive procedures). When IT controls are ineffective, the auditor must adopt a **substantive approach** and may need to use more extensive analytical procedures, larger sample sizes, or additional year-end procedures to compensate.

:::tip[Exam Tip]

The CPA exam frequently tests the relationship between IT control weaknesses and the audit response. Remember: a weakness in GITCs has a **pervasive** effect—it can undermine the reliability of **all** application controls in the affected system, not just one specific control.

:::
