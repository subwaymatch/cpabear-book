# Reporting on SOC Engagements

All the planning and testing in a SOC engagement ends in a report, and the report is what users actually read. A user auditor deciding how much to rely on a payroll processor, or a customer deciding whether to trust a cloud provider with its data, will look first at the opinion, then at the system description, and then at the exceptions in the test results. The service auditor has to put each of those pieces together correctly.

This chapter covers how complementary user entity controls and subservice organizations show up in the report, the types of opinions and when each is issued, how test results and exceptions are presented in a SOC 2® report, and the overall form and content of SOC 1® and SOC 2® reports. The tasks are at the Remembering and Understanding and Application levels: expect to explain report features and to choose or prepare the right content for a given situation.

---

## The Effect of CUECs on the Report

**Complementary user entity controls (CUECs)** are controls that the service organization's system assumes user entities will perform, such as reconciling output reports or removing access for their own departed employees. They appear in three places in the report:

- **The system description** lists them, so users know what is expected of them.
- **The service auditor's report** explains that the description includes CUECs, that the service auditor did not evaluate them, and that the control objectives or criteria can be achieved only if user entities perform them.
- **The opinion itself is conditioned on them.** It says, in effect, that the controls were suitably designed (and, in a Type 2 report, operated effectively) to achieve the objectives **if** user entities applied the complementary controls assumed in the design.

The existence of CUECs does not cause a modified opinion; nearly every SOC report has them. Their effect falls on the users. A user auditor relying on a SOC 1® report must consider whether the client actually performs the CUECs relevant to its audit, and a SOC 2® user should check the same for its own operations.

**Example:** **Grizzly Inc.** outsources payroll to **Bear Co.** Bear Co.'s SOC 1® report lists a CUEC: "User entities reconcile payroll registers to their general ledger each pay period." Before relying on Bear Co.'s controls, Grizzly Inc.'s auditor needs evidence that Grizzly Inc. actually performs that reconciliation. If it does not, the controls described in Bear Co.'s report do not, by themselves, achieve the related control objective for Grizzly Inc.

---

## Reporting Under the Carve-Out and Inclusive Methods

The previous chapter explained how management chooses between the two methods for presenting a **subservice organization**. The choice changes the report in specific ways:

| Report Element | Carve-Out Method | Inclusive Method |
|---|---|---|
| **System description** | Identifies the subservice organization, describes the services it provides, and lists the **complementary subservice organization controls (CSOCs)** assumed to operate there | Describes the subservice organization's relevant services, components, and controls, and identifies which parts of the system belong to it |
| **Management's assertion** | Only service organization management's assertion | Assertions from both service organization and subservice organization management |
| **Scope of the service auditor's report** | States that the subservice organization's controls are excluded and were not evaluated | Covers the subservice organization's relevant controls |
| **Opinion** | Conditioned on the CSOCs operating as assumed, as well as on the CUECs | Covers the subservice organization's controls directly |
| **Tests and results** | No tests of the subservice organization's controls (only of the service organization's monitoring of it) | Tests of the subservice organization's controls are included |
| **What users must do** | Obtain separate assurance over the subservice organization, usually its own SOC report | Rely on one report for the whole chain |

CSOCs work like CUECs, one level over: they are controls the service organization assumes its **subservice organization** performs, disclosed but not tested. The carve-out method is the more common in practice, because many subservice organizations, especially large cloud providers, will not take part in their customers' examinations. The inclusive method is most practical when the two organizations are closely related, such as members of the same corporate group, and the subservice organization agrees to participate.

---

## Types of Opinions and Report Modifications

In a SOC 1® or SOC 2® report, the service auditor's opinion addresses the same matters as management's assertion: (1) the description (fairly presented in SOC 1®, or presented in accordance with the description criteria in SOC 2®), (2) the suitability of design of the controls, and, in a Type 2 report, (3) their operating effectiveness throughout the period.

| Opinion | When It Is Issued |
|---|---|
| **Unmodified** | The description, design, and (for Type 2) operation all meet the criteria in all material respects |
| **Qualified** | A material problem exists but is confined to a specific part of the report, such as one control objective or one criterion; the rest is fairly stated |
| **Adverse** | The problems are both material and pervasive, so the description or the controls as a whole fail to meet the criteria |
| **Disclaimer** | The service auditor cannot obtain sufficient appropriate evidence, and the possible effects are pervasive, so no opinion is expressed |

The causes of modification and their usual results:

| Cause | Likely Result |
|---|---|
| The description is materially misstated or omits required information | Qualified or adverse, depending on pervasiveness |
| Controls are not suitably designed to achieve a control objective or meet a criterion | Qualified or adverse |
| Deviations show that controls did not operate effectively enough to achieve an objective or meet a criterion (Type 2 only) | Qualified or adverse |
| A scope limitation prevents the service auditor from obtaining sufficient evidence | Qualified or disclaimer, depending on pervasiveness |

A deviation in test results does **not** automatically modify the opinion. The question is whether, considering all the evidence (including other controls that address the same objective or criterion), the control objective was still achieved or the criterion still met. A Type 2 report often contains exceptions alongside an unmodified opinion.

When the opinion is modified, a paragraph before the opinion describes the matter, and the opinion is phrased to fit. A qualified opinion in a SOC 2® Type 2 report might read: "In our opinion, except for the matter described in the preceding paragraph, in all material respects... the controls stated in the description operated effectively throughout the period..."

---

## Preparing Test Results for a SOC 2® Report

A SOC 2® Type 2 report includes the service auditor's **description of the tests of controls and the results**, usually as a separate section. The blueprint asks you to prepare these results, including when a test found an exception.

### What Each Entry Contains

| Column | Content |
|---|---|
| **Criterion** | The Trust Services criterion the control addresses, such as CC6.2 |
| **Control** | The service organization's control, as stated in the description |
| **Test performed** | What the service auditor did, including the nature of the test and the sample tested |
| **Results** | "No exceptions noted," or a factual description of each exception |

The tests themselves are the familiar ones:

| Test | Description | Example |
|---|---|---|
| **Inquiry** | Asking personnel how the control works | Asked the security manager how access reviews are performed |
| **Observation** | Watching the control being performed | Observed a quarterly access review meeting |
| **Inspection** | Examining documents, records, or system settings | Inspected sign-offs for a sample of 25 access reviews |
| **Reperformance** | Performing the control independently | Reperformed the comparison of terminated employees to active accounts for a sample of 20 terminations |

Inquiry alone is never enough to conclude that a control operated effectively. It is always combined with observation, inspection, or reperformance.

### Results With and Without Exceptions

| Criterion | Control | Test Performed | Results |
|---|---|---|---|
| CC6.1 | Access to production systems requires multi-factor authentication | Inspected the authentication settings for all production servers | No exceptions noted |
| CC7.2 | Security events are monitored with a SIEM tool that alerts on anomalies | Inspected the SIEM alert rules and, for a sample of 25 days, evidence that alerts were reviewed | No exceptions noted |
| CC6.2 | Access is removed within 24 hours of an employee's termination | Inspected access removal records for a sample of 30 employees terminated during the period | **Exception noted:** For 3 of the 30 terminations sampled, access was removed 2 to 5 days after termination |

When an exception is found, the results should state **how many items were tested** and the **number and nature of the deviations**, factually and without minimizing them. The service auditor also investigates the cause of each deviation and considers its effect on whether the criterion was met; that evaluation shapes the opinion.

**Management's responses** to exceptions, such as "we installed automated termination triggers on September 1," are management's statements, not the service auditor's findings. They do not belong in the service auditor's test results. If management wants to include them, they usually go in a separate section of other information provided by the service organization, which the service auditor reads for material inconsistencies but does not cover in the opinion.

**Example:** The service auditor for **Illini Security**, a managed security provider, finds that 2 of 25 sampled terminations had access removed 25 to 48 hours after termination, against a 24-hour requirement. The results column reads: "Exception noted: For 2 of the 25 terminations sampled, access was removed between 25 and 48 hours after termination." The exception alone does not modify the opinion; the service auditor evaluates whether CC6.2 was still met.

---

## Form and Content of SOC 1® and SOC 2® Reports

SOC reports are commonly organized in the sections below. The numbering is convention, not a requirement, but the content is consistent.

### SOC 1® Report

| Section | Title | Contents |
|---|---|---|
| **I** | Independent Service Auditor's Report | Scope, responsibilities, inherent limitations, and the opinion on fair presentation of the description, suitability of design, and (Type 2) operating effectiveness |
| **II** | Management's Assertion | Management's written assertion about the description and the controls |
| **III** | Description of the System | Services provided, classes of transactions, processing procedures, records and reports, control objectives and controls, CUECs, and subservice organizations (with CSOCs under the carve-out method) |
| **IV** | Control Objectives, Controls, and Tests | The control objectives and related controls; in a Type 2 report, the tests of controls and results |
| **V** | Other Information (optional) | Information from management not covered by the opinion, such as responses to exceptions |

### SOC 2® Report

| Section | Title | Contents |
|---|---|---|
| **I** | Independent Service Auditor's Report | Scope, responsibilities, inherent limitations, and the opinion on the description, suitability of design, and (Type 2) operating effectiveness against the applicable Trust Services Criteria |
| **II** | Management's Assertion | Management's assertion that the description follows the description criteria and that the controls provide reasonable assurance of achieving the service commitments and system requirements |
| **III** | Description of the System | Services, principal service commitments and system requirements, the five system components, relevant system incidents, the applicable criteria and related controls, CUECs, subservice organizations and CSOCs, and (Type 2) significant changes |
| **IV** | Criteria, Controls, Tests, and Results | The applicable criteria mapped to the related controls; in a Type 2 report, the tests and results |
| **V** | Other Information (optional) | Management's additional information, not covered by the opinion |

### The Service Auditor's Report

Deciding the appropriate form and content of the report comes down to including the right elements. A SOC 2® Type 2 report from the service auditor typically contains:

1. A **title** that includes the word "independent."
2. An **addressee**, usually the service organization's management or board.
3. A **scope** section identifying the description, the period, the criteria, and how CUECs, subservice organizations, and any other information are treated.
4. The **service organization's responsibilities** for the description, the assertion, the controls, and the commitments.
5. The **service auditor's responsibilities**, including that the examination was conducted under AICPA attestation standards to obtain reasonable assurance.
6. The **inherent limitations** of controls, including the risk of projecting conclusions to future periods.
7. A reference to the **description of tests of controls** and their results.
8. The **opinion**.
9. A **restricted use** paragraph naming the specified parties.
10. The firm's **signature**, its **city and state**, and the **report date**.

A Type 1 report omits the operating effectiveness opinion and the tests of operating effectiveness. A SOC 3® report is much shorter: a general-use report with the service auditor's opinion, management's assertion, and a brief description of the system and its boundaries, without a detailed description or test results.

### SOC 1® and SOC 2® Compared

| Dimension | SOC 1® | SOC 2® |
|---|---|---|
| **Standard** | AT-C 320 | AT-C 105 and 205, with the SOC 2® guide |
| **Criteria** | Control objectives relevant to user entities' ICFR | Trust Services Criteria (security, plus any other categories selected) and the description criteria |
| **Primary users** | User auditors and user entity management | User entities and other specified parties: customers, business partners, regulators |
| **Use** | Restricted (Type 1 and Type 2) | Restricted (Type 1 and Type 2); SOC 3® is the general-use alternative |
| **Supports a financial statement audit?** | Yes, directly | No; it addresses operational and compliance concerns |

**Example:** **Kingfisher Industries** runs its accounting on a cloud ERP application and receives two reports from the provider. Its external auditor uses the **SOC 1®** report to evaluate controls relevant to financial reporting, such as controls over automated calculations, interfaces, and changes to the application. Kingfisher's IT governance team uses the **SOC 2®** report to evaluate the provider's security, availability, and confidentiality controls.

---

## Summary

| Topic | Key Takeaway |
|---|---|
| CUECs | Listed in the description, not tested, and built into the opinion's wording; their existence does not modify the opinion |
| Carve-out reporting | Subservice controls excluded; CSOCs listed; opinion conditioned on them; most common method |
| Inclusive reporting | Subservice controls included and tested; the subservice organization also asserts |
| Opinions | Unmodified, qualified (material but confined), adverse (material and pervasive), disclaimer (pervasive scope limitation) |
| Test results | Criterion, control, test performed, results; exceptions state items tested and number and nature of deviations; management responses belong in other information |
| Report form | Service auditor's report, management's assertion, system description, tests and results, optional other information |

---

## Practice Questions

**1.** **Illini Entertainment** relies on a SOC 1® Type 2 report from its payroll provider. The report lists a CUEC requiring user entities to review and approve payroll exception reports weekly. What should Illini Entertainment's external auditor do?

- A. Accept the SOC 1® report without further work, because the opinion is unmodified
- B. Ask the service auditor to test the CUEC next year
- C. Test whether Illini Entertainment actually reviews and approves the exception reports weekly
- D. Modify the audit opinion because a CUEC exists

**2.** A service organization uses a cloud infrastructure provider as a subservice organization and reports under the **carve-out method**. How does the subservice organization appear in the SOC 2® report?

- A. Its controls are tested and the results appear with the other tests
- B. It is not mentioned anywhere in the report
- C. The description identifies it and lists CSOCs, but its controls are not tested
- D. The service auditor issues a separate opinion on it

**3.** In a SOC 2® Type 2 examination, the service auditor inspects access removal records for 40 terminated employees and finds that 12 kept access for more than 72 hours, against a 24-hour policy. What is the most likely effect?

- A. None, because fewer than half of the items were exceptions
- B. The exceptions are listed in the results, but the opinion is unmodified because management has since fixed the process
- C. The service auditor evaluates whether the 30% deviation rate means the related criterion was not met, which would call for a qualified or adverse opinion
- D. The service auditor must disclaim an opinion

:::tip[Answers]

1. **C.** CUECs are outside the service auditor's testing but necessary for the control objectives to be achieved. The user auditor must obtain evidence that the client performs the CUEC before relying on the service organization's controls.

2. **C.** Under the carve-out method, the description identifies the subservice organization and lists the CSOCs assumed to operate there, but its controls are excluded from the examination, and the opinion is conditioned on those CSOCs.

3. **C.** A 30% deviation rate (12 of 40) is high. The service auditor must evaluate whether the deviations mean the related criterion was not met; if so, the opinion is qualified if the problem is confined, or adverse if it is pervasive. Remediation after the fact does not erase deviations during the period (so B is wrong), and nothing here limits the scope of the examination (so D is wrong).

:::
