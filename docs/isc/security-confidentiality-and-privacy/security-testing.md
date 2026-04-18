# Security Testing

# Security Testing

Security testing is the process of evaluating an organization's security controls, awareness programs, and operational procedures to determine whether they are suitably designed and operating effectively. CPAs engaged in IT audit, advisory, and SOC 2® engagements must understand how to assess security awareness training, document findings in security assessment reports, perform walkthroughs of IT security procedures, and detect control deficiencies related to the Trust Services Criteria.
This section covers **security awareness training programs**, **security assessment reports**, **IT security walkthroughs**, and **SOC 2® security controls evaluation using the Trust Services Criteria**.
:::info
The ISC exam tests security testing at the Application and Analysis levels. You should be able to evaluate an organization's security awareness program, document issues and recommendations from control testing, perform and interpret walkthroughs of IT security procedures, and detect deficiencies in the design and operation of SOC 2® security controls.
:::

---

## Security Awareness Training Programs

A **security awareness training program** educates employees about cybersecurity threats, organizational policies, and expected behaviors to reduce human-factor risk. CPAs evaluate whether the program effectively communicates security knowledge and models appropriate behaviors.

### Components of an Effective Program

| Component                  | Description                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Content coverage**       | Topics include phishing recognition, password hygiene, data handling, physical security, incident reporting, and acceptable use policies |
| **Delivery methods**       | Computer-based training (CBT), in-person sessions, videos, newsletters, posters, and micro-learning modules                              |
| **Frequency**              | Initial onboarding training plus recurring refresher training (typically annual at minimum, quarterly for high-risk roles)               |
| **Participation tracking** | Records of who completed training, when, and whether they passed assessments                                                             |
| **Phishing simulations**   | Simulated phishing emails sent to employees to test recognition and reporting behaviors                                                  |
| **Metrics and reporting**  | Click rates on simulated phishing, training completion percentages, time-to-report metrics, and trends over time                         |

### Procedures to Assess Effectiveness

When evaluating a security awareness program, a CPA should:

1. **Inspect training materials** — Verify content aligns with the organization's security policies and addresses current threats
2. **Review completion records** — Confirm all personnel (including contractors) completed required training within the prescribed timeframe
3. **Analyze simulation results** — Examine phishing simulation click rates and trends; declining rates indicate improving awareness
4. **Interview personnel** — Ask employees about security policies to gauge actual knowledge retention
5. **Observe behaviors** — Verify that practices match training (e.g., locked screens, badge-only access, clean desks)

### Common Deficiencies

| Deficiency                                      | Impact                                                                      |
| ----------------------------------------------- | --------------------------------------------------------------------------- |
| Training not completed by all personnel         | Untrained employees are more susceptible to social engineering attacks      |
| Content not updated for emerging threats        | Employees unaware of new attack vectors (e.g., AI-generated phishing)       |
| No consequences for failed phishing simulations | Employees do not take training seriously                                    |
| Generic, one-size-fits-all content              | Role-specific risks (e.g., finance staff wire transfer fraud) not addressed |
| No tracking of completion or test scores        | Inability to demonstrate compliance to auditors                             |

## **Example:** **Bear Co.** conducts annual security awareness training but has no phishing simulation program. During a SOC 2® engagement, the auditor notes that 15% of employees did not complete the most recent training cycle and there is no mechanism to test whether employees can identify phishing emails in practice. This represents a deficiency in the operating effectiveness of the awareness program.

## Security Assessment Reports

A **security assessment report** documents the issues, findings, and recommendations identified during security control testing. CPAs must be able to structure and contribute to these reports as part of IT audit and SOC engagements.

### Report Structure

| Section                  | Purpose                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| **Executive summary**    | High-level overview of scope, methodology, and key findings for management         |
| **Scope and objectives** | Defines systems, controls, and criteria evaluated                                  |
| **Issues identified**    | Specific conditions observed that deviate from expected criteria                   |
| **Findings**             | Detailed descriptions linking observed conditions to specific controls or criteria |
| **Recommendations**      | Suggested remediation actions to address identified issues                         |
| **Severity/risk rating** | Classification of findings by impact and likelihood (Critical, High, Medium, Low)  |

### Documenting Control Test Results

When documenting findings from tests of controls, each finding should include:
| Element | Description | Example |
|---|---|---|
| **Condition** | What was observed (the factual situation) | "3 of 25 sampled user access reviews were not completed within the required 90-day period" |
| **Criteria** | What should have occurred (the standard) | "Policy requires quarterly access reviews completed within 90 days" |
| **Cause** | Why the deviation occurred | "The access review tool did not send automated reminders to department managers" |
| **Effect** | The risk or impact of the deviation | "Unauthorized access may persist beyond the review period, increasing the risk of data breach" |
| **Recommendation** | How to remediate | "Implement automated reminder notifications and escalation procedures for overdue reviews" |

### Severity Rating Framework

| Severity     | Definition                                                                           | Action Required                |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------ |
| **Critical** | Immediate risk of material harm; control does not exist or is completely ineffective | Immediate remediation required |
| **High**     | Significant control weakness that could lead to material impact if exploited         | Remediation within 30 days     |
| **Medium**   | Control partially effective but gaps exist that increase risk                        | Remediation within 90 days     |
| **Low**      | Minor observations or improvement opportunities; risk is minimal                     | Address in next review cycle   |

## **Example:** **MAS Inc.** engages an auditor to perform security control testing. The auditor discovers that the intrusion detection system (IDS) has not been updated with new threat signatures in 6 months. The finding is documented as: Condition — IDS signatures 6 months out of date; Criteria — Policy requires monthly signature updates; Cause — The administrator responsible left the company and the task was not reassigned; Effect — Network may not detect attacks using recently discovered exploit techniques; Severity — High.

## IT Security Walkthroughs

A **walkthrough** is a procedure in which the auditor traces a transaction or process from initiation to completion to understand how the organization executes its security procedures. The auditor then compares what was observed with what is documented in the organization's policies.

### Walkthrough Methodology

```mermaid
flowchart LR
    A[Select procedure to evaluate] --> B[Review documented policy]
    B --> C[Observe actual execution]
    C --> D[Compare observed vs. documented]
    D --> E[Identify deviations]
    E --> F[Document results]
```

During a walkthrough, the auditor:

1. **Selects the procedure** — Identifies the IT security process to evaluate
2. **Reviews documentation** — Reads the written policy, procedure, or standard
3. **Observes execution** — Watches personnel perform the procedure or inspects evidence of execution
4. **Makes inquiries** — Asks personnel to explain their understanding of the procedure
5. **Compares** — Determines whether observed practices match documented requirements
6. **Documents deviations** — Records any differences between policy and practice

### Areas Covered in IT Security Walkthroughs

| Area                         | Procedures Evaluated                                                           | What to Observe                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **IT risk management**       | Risk assessment processes, risk register maintenance, risk treatment decisions | Whether risk assessments are performed at the required frequency; whether the risk register reflects current threats |
| **Human resources security** | Background checks, onboarding/offboarding, access provisioning/deprovisioning  | Whether terminated employees' access is revoked within the timeframe specified in policy                             |
| **Access review**            | Periodic access certification, segregation of duties reviews                   | Whether managers actually review and approve/deny access as documented                                               |
| **Training and education**   | Security awareness training delivery and tracking                              | Whether training records match policy requirements for content and frequency                                         |
| **Incident response**        | Incident detection, escalation, communication procedures                       | Whether incident response team members can describe their roles consistent with the documented plan                  |

### Identifying Deviations

A **deviation** occurs when the observed procedure does not match the documented policy. Deviations may indicate:

- The policy is outdated and no longer reflects actual operations
- Personnel are not following established procedures
- Controls are not operating as designed
- Training on the procedure is insufficient
  **Example:** **Gies Co.** has a documented policy requiring that background checks be completed for all new hires before granting system access. During a walkthrough, the auditor observes that three recent hires were granted access to the ERP system before their background checks were returned. The auditor documents this as a deviation — the observed procedure does not match the policy requirement.
  :::warning
  A walkthrough alone does not provide sufficient evidence of operating effectiveness over a period of time. It provides understanding of the process and may identify design deficiencies, but additional testing (e.g., sampling) is required to conclude on operating effectiveness.
  :::

---

## SOC 2® Security Controls Evaluation

In a **SOC 2®** engagement, the practitioner evaluates a service organization's controls relevant to its **service commitments** and **system requirements** using the **Trust Services Criteria (TSC)**. The security category uses the **Common Criteria (CC series)**, which apply across all Trust Services engagements.

### Trust Services Criteria — Security (Common Criteria)

| CC Series | Focus Area                    | Example Controls                                                                             |
| --------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| **CC1**   | Control environment           | Tone at the top, governance structure, personnel commitment to competence and accountability |
| **CC2**   | Communication and information | Internal/external communication of security policies, reporting mechanisms                   |
| **CC3**   | Risk assessment               | Identification of threats and vulnerabilities, risk analysis, fraud risk consideration       |
| **CC4**   | Monitoring activities         | Ongoing and separate evaluations, communication of deficiencies                              |
| **CC5**   | Control activities            | Logical access controls, change management, system operations controls                       |
| **CC6**   | Logical and physical access   | Authentication, authorization, physical access restrictions, encryption                      |
| **CC7**   | System operations             | Incident detection, monitoring, incident response                                            |
| **CC8**   | Change management             | Change authorization, testing, approval, implementation                                      |
| **CC9**   | Risk mitigation               | Vendor management, business continuity, insurance                                            |

### Design Suitability vs. Operating Effectiveness

| Evaluation Type             | Question Answered                                                               | Example                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Design suitability**      | If the control operates as designed, would it effectively meet the criteria?    | "Is requiring MFA for all remote access a suitably designed control to address unauthorized access risk?" |
| **Operating effectiveness** | Did the control actually operate as designed throughout the examination period? | "Was MFA consistently enforced for all remote access sessions during the 12-month period?"                |

### Types of Deficiencies

| Deficiency Type         | Definition                                                                                     | Example                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Design deficiency**   | The control, even if operating as intended, would not effectively meet the applicable criteria | A password policy requires only 4-character passwords — even if enforced perfectly, this is insufficient to prevent brute-force attacks |
| **Operating deviation** | The control is suitably designed but did not operate as designed during the period             | The organization requires quarterly access reviews, but one quarter was skipped due to staff turnover                                   |

### Examples of SOC 2® Security Control Deficiencies

| Criteria                        | Deficiency                                                                                            | Type                |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------- |
| **CC6.1** (Logical access)      | No process exists to remove access for terminated employees                                           | Design deficiency   |
| **CC6.1** (Logical access)      | Access removal process exists but 4 of 20 terminated employees retained access for more than 48 hours | Operating deviation |
| **CC7.2** (Incident monitoring) | Security monitoring tool was offline for 3 weeks during migration with no compensating control        | Operating deviation |
| **CC5.3** (Change management)   | Changes deployed directly to production without testing — no test environment exists                  | Design deficiency   |
| **CC2.1** (Communication)       | Security policies not communicated to new hires during onboarding                                     | Operating deviation |

**Example:** **Illini Security** provides managed security services and undergoes a SOC 2® Type 2 examination. The auditor identifies that the organization's service commitment states "all security events are investigated within 4 hours." However, testing reveals that 8 of 30 sampled security events were not investigated within the 4-hour window. This is an **operating deviation** — the control is suitably designed (4-hour SLA with an investigation procedure) but did not operate effectively during the examination period.
:::tip[Exam Tip]
On the ISC exam, distinguish between design deficiencies and operating deviations by asking: "If this control worked perfectly every single time, would it address the risk?" If **no** — it is a **design deficiency**. If **yes**, but it did not work perfectly during the period — it is an **operating deviation**.
:::

---

## Summary

| Topic                       | Key Takeaway                                                                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security awareness training | Evaluated by content coverage, delivery methods, frequency, participation tracking, phishing simulations, and metrics; deficiencies include incomplete participation and outdated content         |
| Security assessment reports | Document findings using Condition, Criteria, Cause, Effect, and Recommendation; assign severity ratings (Critical, High, Medium, Low)                                                             |
| IT security walkthroughs    | Compare observed procedures to documented policies; cover IT risk management, HR security, access review, training, and incident response                                                         |
| SOC 2® security controls    | Use Trust Services Common Criteria (CC1–CC9); distinguish design deficiencies (control would not meet criteria even if operating) from operating deviations (control did not operate as designed) |

---

## Practice Questions

1. **Kingfisher Industries** conducts quarterly phishing simulations as part of its security awareness program. Over the past year, the click rate has remained steady at 22% despite employees receiving training after each failed simulation. Management asks the CPA to evaluate the program's effectiveness. What deficiencies should the CPA investigate, and what recommendations are appropriate?
2. **Illini Entertainment** is undergoing a SOC 2® Type 2 examination. The organization's documented policy states that all user access is reviewed quarterly by department managers. During testing, the auditor selects a sample of 25 access reviews and finds that 6 reviews were completed 45 days past the quarterly deadline, and 2 reviews have no evidence of completion at all. How should the auditor classify these findings?
3. **Bear Co.** hires a new IT security manager who performs a walkthrough of the employee termination process. The documented policy requires that system access be revoked within 24 hours of termination. During the walkthrough, the manager observes that the HR department sends termination notifications to IT via email, but there is no automated workflow, no tracking mechanism, and no verification step to confirm access was actually revoked. What type of deficiency is this, and why?
   :::tip[Answers]
4. The steady 22% click rate despite repeated training indicates the program is **not effectively changing behavior**. The CPA should investigate: (a) whether training content is relevant and engaging, (b) whether consequences exist for repeated failures, (c) whether training is tailored to the types of simulations being conducted, and (d) whether high-risk repeat clickers receive additional targeted training. Recommendations include implementing role-based training, escalating consequences for repeat offenders, varying simulation difficulty, and incorporating real-world examples from the organization's industry.
5. The 6 late reviews represent **operating deviations** — the control is suitably designed (quarterly reviews by managers) but did not operate within the required timeframe. The 2 reviews with no evidence of completion are also **operating deviations** and are more severe because there is no evidence the control operated at all for those cases. The auditor should document these as exceptions, noting the deviation rate (8 of 25 = 32%), assess the severity, and determine whether the deviations prevent the organization from meeting the applicable Trust Services Criteria (likely CC6.1 regarding logical access controls).
6. This is a **design deficiency**. Even if the email notification process operates exactly as designed every single time, the control would not reliably meet the 24-hour revocation requirement because: (a) there is no automated workflow to ensure timely action, (b) there is no tracking to prevent notifications from being overlooked, and (c) there is no verification step to confirm access was actually revoked. The control, as designed, relies entirely on manual email processing with no accountability mechanism — it is insufficient to meet the stated criteria regardless of how consistently it is followed.
   :::
