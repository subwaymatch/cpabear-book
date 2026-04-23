# SOC Reports

Many organizations outsource critical business functions—such as payroll processing, cloud hosting, or transaction processing—to third-party **service organizations**. When an entity (the "user entity") relies on a service organization to process transactions that affect its financial statements, the auditor of the user entity needs assurance that the service organization's controls are suitably designed and operating effectively. This assurance is provided through **Service Organization Controls (SOC) reports**.

This section covers the **types of SOC reports** (SOC 1, SOC 2, and SOC 3), the distinction between **Type 1 and Type 2 reports**, how auditors **use** a service auditor's report, **complementary user entity controls (CUECs)**, **subservice organizations**, and the respective responsibilities of management, the service auditor, and the user auditor.

:::info

SOC reports are issued under **SSAE 18** (AT-C 320) and are based on the AICPA's attestation standards. The service auditor—an independent CPA—performs the examination and issues the report. The user auditor then evaluates the report when planning and performing the audit of the user entity's financial statements.

:::

---

## Why SOC Reports Matter

When a user entity outsources a significant process, the related internal controls may reside at the service organization rather than at the user entity. The user entity's auditor cannot simply ignore those controls—they are part of the user entity's **system of internal control** relevant to financial reporting.

**Example:** Bear Co. outsources its entire payroll function to a third-party payroll processor. The payroll processor handles employee data entry, tax calculations, check printing, and payroll tax filings. Because payroll is a significant transaction class, Bear Co.'s auditor needs to understand and evaluate the controls at the payroll processor. The auditor can do this by obtaining and reviewing a SOC 1 report issued by the service organization's auditor.

---

## Types of SOC Reports

The AICPA defines three types of SOC reports, each serving a different purpose and audience:

| Report | Standard | Subject Matter | Primary Audience | Distribution |
|---|---|---|---|---|
| **SOC 1** | SSAE 18 (AT-C 320) | Controls relevant to **user entities' internal control over financial reporting (ICFR)** | User entity management and auditors | Restricted — only to user entities and their auditors |
| **SOC 2** | AT-C 205 / TSP 100 | Controls related to **security, availability, processing integrity, confidentiality, and/or privacy** (Trust Services Criteria) | Management, regulators, and specified parties | Restricted — specified parties only |
| **SOC 3** | AT-C 205 / TSP 100 | Same subject matter as SOC 2 but in a **general-use summary format** | General public | Unrestricted — can be freely distributed |

### SOC 1 Reports

SOC 1 reports are the most relevant for **financial statement audits**. They focus specifically on controls at the service organization that could affect the user entity's financial reporting. When the CPA exam asks about a "service auditor's report" in the context of an audit, it is almost always referring to a SOC 1 report.

### SOC 2 Reports

SOC 2 reports evaluate controls based on the **Trust Services Criteria** established by the AICPA:

- **Security** — The system is protected against unauthorized access (required for all SOC 2 reports)
- **Availability** — The system is available for operation and use as committed
- **Processing integrity** — System processing is complete, valid, accurate, and timely
- **Confidentiality** — Information designated as confidential is protected
- **Privacy** — Personal information is collected, used, retained, disclosed, and disposed of properly

SOC 2 reports are not specifically designed for financial statement audits but may provide relevant information about IT controls.

### SOC 3 Reports

SOC 3 reports cover the same Trust Services Criteria as SOC 2 but are presented in a **shortened, general-use format** without detailed descriptions of tests performed and results. They are designed for broad distribution (e.g., posting on a website) and provide less detail than SOC 2 reports.

:::tip[Exam Tip]

For the CPA exam, remember: **SOC 1 = financial reporting controls** (what auditors use), **SOC 2 = Trust Services Criteria** (restricted distribution), **SOC 3 = Trust Services Criteria summary** (general use). When a question involves an audit of financial statements, the relevant report is almost always a **SOC 1**.

:::

---

## Type 1 vs. Type 2 Reports

Both SOC 1 and SOC 2 reports can be issued as either **Type 1** or **Type 2**:

| Feature | Type 1 | Type 2 |
|---|---|---|
| **Focus** | Design of controls at a **point in time** | Design **and operating effectiveness** of controls over a **period of time** |
| **Period covered** | A specific date (e.g., "as of June 30, 20X4") | A specified period (e.g., "January 1 through December 31, 20X4") |
| **Tests of controls** | Not performed — the report only describes the system and evaluates whether controls are **suitably designed** | The service auditor **tests** the operating effectiveness of controls and reports the results |
| **Usefulness to user auditor** | Limited — provides understanding of controls but does not provide evidence of operating effectiveness | Greater — provides evidence that controls were operating effectively during the period, which the user auditor can use to assess control risk |

**Example:** Polar Inc. uses a cloud-based accounting platform hosted by a service organization. The service organization provides a SOC 1 Type 2 report covering January 1 through September 30, 20X4. Polar Inc.'s auditor reviews the report and determines that the controls tested are relevant and were operating effectively during the period. The auditor then evaluates whether additional procedures are needed for the gap period (October 1 through December 31).

:::caution

A **Type 1 report** alone is generally **not sufficient** for the user auditor to reduce control risk. Because it only addresses design (not operating effectiveness), the user auditor would need to perform additional procedures to assess whether controls actually operated effectively during the period.

:::

---

## Using a Service Auditor's Report in an Audit

When a user auditor obtains and evaluates a SOC 1 report, the following steps are typically involved:

1. **Determine the significance** of the service organization's activities to the user entity's financial reporting
2. **Obtain the SOC 1 report** (Type 1 or Type 2)
3. **Evaluate the service auditor's competence and independence** — Is the service auditor a reputable CPA firm? Is the report issued under appropriate standards?
4. **Assess whether the report covers the relevant controls** — Do the control objectives and controls described in the report relate to the assertions relevant to the user entity's financial statements?
5. **Evaluate the period covered** — Does the report cover a sufficient portion of the period under audit? If there is a gap between the end of the SOC report period and the user entity's year-end, the user auditor must determine what additional procedures are necessary
6. **Review test results (Type 2)** — Evaluate whether any exceptions were noted in the service auditor's testing and whether those exceptions affect the user entity's controls
7. **Consider complementary user entity controls (CUECs)** — Determine whether the user entity has implemented the CUECs assumed in the service organization's system description

:::warning

The user auditor **cannot simply reference** the service auditor's report as the sole basis for reducing control risk. The user auditor must perform their own evaluation of the report and exercise professional judgment. The service auditor's report is **evidence** the user auditor uses—not a substitute for the user auditor's own assessment.

:::

---

## Complementary User Entity Controls (CUECs)

Service organizations typically design their control systems with the assumption that the user entity will implement certain controls on its end. These are called **complementary user entity controls (CUECs)**.

CUECs are described in the service organization's system description (included in the SOC 1 report) and represent controls that **must** be in place at the user entity for the overall control system to function effectively.

**Example:** Kodiak Partners uses a third-party investment custodian that provides a SOC 1 Type 2 report. The report describes the custodian's controls over trade processing and asset valuation. However, the report also identifies several CUECs, including:

- Kodiak Partners must **reconcile** its internal investment records to the custodian's statements monthly
- Kodiak Partners must **restrict access** to its custodian portal to authorized personnel only
- Kodiak Partners must **review and approve** all trade confirmations within two business days

If Kodiak Partners has not implemented these CUECs, the overall control system is incomplete, and the user auditor cannot rely on the controls described in the SOC 1 report without additional substantive testing.

---

## Subservice Organizations

A service organization may itself outsource certain functions to another service provider—a **subservice organization**. For example, a payroll processor may use a separate entity to print and distribute paychecks.

SOC 1 reports can address subservice organizations using one of two methods:

| Method | Description | Effect on SOC 1 Report |
|---|---|---|
| **Inclusive method** | The subservice organization's controls are **included** in the scope of the service organization's SOC 1 report | The service auditor tests and reports on the controls of both the service organization and the subservice organization |
| **Carve-out method** | The subservice organization's controls are **excluded** from the scope of the SOC 1 report | The service auditor identifies the subservice organization and the functions it performs but does **not** test or report on its controls |

When the **carve-out method** is used, the user auditor must separately evaluate the controls at the subservice organization—either by obtaining a separate SOC report from the subservice organization or by performing procedures directly.

**Example:** Honey Entertainment outsources its benefits administration to a service organization, which in turn uses a subservice organization to process health insurance claims. The service organization's SOC 1 report uses the carve-out method—it describes the subservice organization's role but does not include the subservice organization's controls in its testing. Honey Entertainment's auditor must separately assess whether the subservice organization's controls are adequate, potentially by obtaining the subservice organization's own SOC 1 report.

:::tip[Exam Tip]

On the CPA exam, if you see a question about a SOC report that mentions a subservice organization using the **carve-out method**, the key point is that the user auditor must **separately** evaluate the subservice organization's controls. Under the **inclusive method**, the service auditor has already done this work.

:::

---

## Responsibilities: Management, Service Auditor, and User Auditor

| Party | Key Responsibilities |
|---|---|
| **Service organization management** | Provide a fair description of the system; identify control objectives and related controls; identify CUECs and subservice organizations; assert that controls are suitably designed (Type 1) and operating effectively (Type 2) |
| **Service auditor** | Evaluate the fairness of management's system description; test design suitability (Type 1) or design and operating effectiveness (Type 2); issue the SOC report with an opinion |
| **User entity management** | Implement CUECs; evaluate the service organization's controls and their effect on the user entity's internal control; provide the SOC report to the user auditor |
| **User auditor** | Evaluate the significance of the service organization; obtain and evaluate the SOC report; assess the competence and independence of the service auditor; test CUECs; determine whether additional procedures are needed; determine the effect on the audit opinion |

---

## Effect on the Audit Report

If the user auditor is **unable to obtain sufficient appropriate audit evidence** about the controls and transactions processed by the service organization—for example, if no SOC report is available and direct testing is not feasible—this constitutes a **scope limitation**. Depending on the significance, the user auditor may need to issue a **qualified opinion** or a **disclaimer of opinion**.

Importantly, the user auditor should **not reference** the service auditor or the SOC report in an **unmodified audit opinion**. Doing so might be misinterpreted as a qualification or a division of responsibility. The user auditor takes full responsibility for the opinion on the user entity's financial statements.

**Example:** Grizzly Industries uses a service organization for processing a significant volume of sales transactions. The service organization refuses to provide a SOC 1 report, and Grizzly Industries' auditor is unable to perform alternative procedures to obtain sufficient evidence about the controls over sales processing. The auditor concludes this is a material scope limitation and issues a qualified opinion.

:::tip[Exam Tip]

The CPA exam may test whether the user auditor can reference the service auditor in the audit report. The answer is **no**—the user auditor should not divide responsibility with a service auditor. The user auditor may, however, reference a **component auditor** in a group audit under certain circumstances. Do not confuse service auditors with component auditors.

:::
