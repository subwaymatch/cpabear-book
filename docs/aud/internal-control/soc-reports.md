# SOC Reports

Many entities hand important processes to outside providers: payroll to a payroll processor, investment custody to a bank, the entire accounting system to a cloud software company. When those providers process transactions that end up in the financial statements, their controls become part of the entity's system of internal control, and the auditor cannot ignore them just because they sit in someone else's building. The usual way the auditor learns about them is a **SOC report**, a report by the provider's own CPA on its controls. This chapter explains the types of SOC reports, the difference between Type 1 and Type 2 reports, how the auditor uses a report, complementary user entity controls, subservice organizations, and the effect on the auditor's report.

Some vocabulary first. The entity being audited is the **user entity**, and its auditor is the **user auditor**. The provider is the **service organization**, and the CPA who reports on its controls is the **service auditor**. **SOC** stands for **System and Organization Controls**. The user auditor's responsibilities are in **AU-C 402** for nonissuers and **AS 2601** for issuers. The service auditor reports under the attestation standards: **AT-C 320** for SOC 1 reports and **AT-C 205** for SOC 2 and SOC 3 reports.

---

## Why SOC Reports Matter

When a user entity outsources a process that is significant to its financial reporting, the controls over that process may sit partly or entirely at the service organization. The user auditor must understand them, and may need evidence that they worked, just as if they were the user entity's own controls. Visiting every service organization would be impractical for both sides, so service organizations engage a service auditor once and provide the resulting report to all their customers and their auditors.

**Example:** Bear Co. outsources payroll to a payroll processor that maintains employee data, calculates pay and withholdings, issues payments, and files payroll tax returns. Payroll is a significant class of transactions for Bear Co., so its auditor needs to understand the processor's controls. The auditor obtains the processor's SOC 1 report.

---

## Types of SOC Reports

| Report | Standard | Subject matter | Intended users |
|---|---|---|---|
| **SOC 1** | AT-C 320 | Controls at the service organization relevant to **user entities' internal control over financial reporting** | Management of the service organization, user entities, and user auditors (restricted use) |
| **SOC 2** | AT-C 205 | Controls relevant to **security, availability, processing integrity, confidentiality, or privacy**, evaluated against the AICPA Trust Services Criteria | Specified parties with sufficient knowledge of the system, such as customers, business partners, and regulators (restricted use) |
| **SOC 3** | AT-C 205 | The same Trust Services Criteria as SOC 2, in a short report without the detailed description of tests and results | Anyone (general use), for example posted on the provider's website |

A **SOC 1** report is the one built for financial statement audits. It describes the service organization's system, the **control objectives** (for example, "controls provide reasonable assurance that payroll changes are authorized"), and the controls designed to achieve them.

A **SOC 2** report addresses broader questions about a system, such as whether it is secure and available as promised. Every SOC 2 report covers **security**; the other four categories are included when they are relevant to the service. A SOC 2 report can contain useful information about IT controls, but it is not designed to address financial reporting assertions, so the user auditor cannot treat it as a substitute for a SOC 1 report.

:::tip[Exam Tip]

**SOC 1** is about financial reporting and is what the user auditor uses. **SOC 2** is about the Trust Services Criteria and goes to knowledgeable specified parties. **SOC 3** covers the same criteria as SOC 2 for general use. If the question involves a financial statement audit, the answer is almost always a SOC 1 report.

:::

---

## Type 1 and Type 2 Reports

SOC 1 and SOC 2 reports come in two types.

| Feature | Type 1 | Type 2 |
|---|---|---|
| **What the service auditor reports on** | Whether management's description of the system is fairly presented and the controls are **suitably designed** | The same, plus whether the controls **operated effectively** |
| **Period** | **As of a specified date** | **Throughout a specified period**, such as January 1 through September 30 |
| **Tests of controls** | None | The service auditor tests operating effectiveness and describes the tests and results |
| **Use to the user auditor** | Helps the user auditor understand the controls, but provides no evidence that they worked | Can provide evidence of operating effectiveness that supports a control risk assessment below the maximum |

A **Type 1** report alone cannot support reliance on controls, because it says nothing about whether they operated. To rely on controls at the service organization, the user auditor needs a **Type 2** report covering an appropriate period, or must perform other tests of those controls.

---

## Using a SOC 1 Report

The user auditor's work with a SOC 1 report follows a logical sequence.

1. **Understand the services.** Determine the nature and significance of the services the service organization provides and how they affect the user entity's internal control and its risks of material misstatement.
2. **Evaluate the service auditor and the report.** Be satisfied with the service auditor's professional competence and independence from the service organization, and with the adequacy of the standards under which the report was issued.
3. **Check relevance and timing.** Determine whether the controls and control objectives described address the assertions that matter to the user entity, and whether the report's date or period is appropriate for the audit.
4. **Evaluate the tests and results (Type 2).** Decide whether the tests and their results provide sufficient appropriate evidence for the user auditor's purposes, and consider the effect of any **deviations** the service auditor found.
5. **Address the gap.** If the report period does not cover all of the user entity's year, obtain evidence about the remaining period, for example by asking the service organization about significant changes (often documented in a **bridge letter** from service organization management) and by performing procedures at the user entity.
6. **Consider complementary user entity controls.** Determine whether the user entity has the controls the service organization assumes its customers have, and test them if the auditor plans to rely on them.

If no suitable report is available, the user auditor can obtain evidence in other ways: by performing procedures at the service organization, by having another auditor perform them, or by performing more substantive procedures on the records the user entity keeps.

**Example:** Polar Inc. uses a cloud-hosted accounting platform. The service organization provides a SOC 1 Type 2 report covering January 1 through September 30, 20X4, with no deviations in the controls relevant to Polar Inc. Because Polar Inc.'s year ends December 31, the auditor obtains a bridge letter from the service organization stating that there were no significant changes to its controls in the fourth quarter, tests Polar Inc.'s own reconciliations of the platform's output for those months, and then relies on the report for the controls it covers.

The SOC report is evidence, not a substitute for judgment. The user auditor decides how much it supports and remains fully responsible for the conclusion.

---

## Complementary User Entity Controls

Service organizations design their systems assuming that each customer will perform certain controls of its own. The system description lists these **complementary user entity controls (CUECs)**. The service organization's controls achieve their objectives only if the user entity's complementary controls are in place and working.

**Example:** Kodiak Partners uses an investment custodian whose SOC 1 Type 2 report covers trade processing and securities pricing. The report lists CUECs, including that each customer:

- reconciles its investment records to the custodian's statements monthly;
- restricts access to the custodian's online portal to authorized employees; and
- reviews and approves trade confirmations within two business days.

If Kodiak Partners does not perform these controls, the control objectives in the report may not be achieved for Kodiak Partners, whatever the custodian does. The auditor cannot rely on those controls without more testing.

---

## Subservice Organizations

A service organization may itself outsource part of its work to a **subservice organization**, as when a payroll processor uses a separate company to host its data center. The service organization's report handles the subservice organization in one of two ways.

| Method | What it means | Effect on the user auditor |
|---|---|---|
| **Inclusive method** | The subservice organization's relevant controls are included in the description and in the service auditor's testing | The report covers both organizations |
| **Carve-out method** | The subservice organization's services are described, but its controls are excluded from the description and testing | The user auditor may need evidence about the subservice organization's controls from another source, such as the subservice organization's own SOC 1 report |

Under the carve-out method, the description also identifies **complementary subservice organization controls**: the controls the service organization assumes the subservice organization performs.

**Example:** Honey Entertainment uses a benefits administrator that relies on a subservice organization to process health claims. The administrator's SOC 1 report uses the carve-out method. If the claims processing is significant to Honey Entertainment's financial statements, its auditor obtains the subservice organization's SOC 1 report or performs other procedures to address those controls.

---

## Who Is Responsible for What

| Party | Responsibilities |
|---|---|
| **Service organization management** | Prepares the description of the system; identifies control objectives, CUECs, and subservice organizations; provides a written assertion about the description, design, and (Type 2) operating effectiveness |
| **Service auditor** | Examines the description and controls and issues an opinion on them; for Type 2, tests operating effectiveness and describes the tests and results |
| **User entity management** | Monitors the service organization; designs and operates the CUECs |
| **User auditor** | Understands the services, evaluates and uses the SOC report, tests CUECs when relying on them, addresses any gap period, and decides on further procedures and the effect on the opinion |

---

## Effect on the Auditor's Report

If the user auditor cannot obtain sufficient appropriate evidence about services that are significant to the user entity's financial statements (for example, there is no SOC report and the service organization will not allow other procedures), the result is a **scope limitation**. Depending on how material and pervasive the possible effects are, the user auditor issues a **qualified opinion** or a **disclaimer of opinion**.

The user auditor should **not refer** to the work of the service auditor in a report containing an unmodified opinion, unless law or regulation requires it. A reference could be misread as dividing responsibility or as a qualification. If a reference is relevant to explaining a modification of the opinion, the report should state that the reference does not diminish the user auditor's responsibility for the opinion.

**Example:** Panda Industries, a private company, uses a service organization to process most of its sales. The service organization refuses to provide a SOC 1 report or allow the auditor to perform procedures, and Panda Industries' own records are not detailed enough to test sales substantively. The auditor concludes that the possible effects are material but not pervasive and issues a qualified opinion because of the scope limitation.

:::tip[Exam Tip]

A user auditor never divides responsibility with a **service auditor**. Do not confuse this with a group audit, where the group auditor may decide to **make reference** to a **referred-to auditor**, another firm that audited a component and whose report the group auditor uses without supervising its work.

:::
