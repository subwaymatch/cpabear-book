# Security Testing

A security policy on paper proves little. The question for a CPA is whether the controls it describes are suitably designed and actually work. **Security testing**, in the blueprint's sense, is the work a CPA does to answer that question: understanding how an entity builds security awareness, walking through its security procedures, documenting what testing finds, and detecting deficiencies against the Trust Services Criteria in a SOC 2® engagement.

This chapter takes those tasks in turn: evaluating a security awareness training program, writing up findings for a security assessment report, performing walkthroughs of IT security procedures, and evaluating security controls in a SOC 2® engagement. The tasks are tested at the Application and Analysis levels, so expect scenarios that ask what procedure to perform or how to classify a finding.

---

## Security Awareness Training Programs

People are the target of most social engineering attacks, so a **security awareness training program** is one of the main ways an entity reduces human risk. It teaches personnel about threats, explains the entity's policies, and models the behavior expected of them. In SOC 2® terms, it is part of how the entity communicates information to support internal control.

### What an Effective Program Includes

| Element | Description |
|---|---|
| **Content** | Phishing recognition, password practices, data handling, physical security, incident reporting, acceptable use |
| **Delivery** | Online courses, live sessions, videos, short refreshers, newsletters |
| **Frequency** | Training at onboarding plus regular refreshers (at least annually, more often for high-risk roles) |
| **Role-specific content** | Extra training for higher-risk roles, such as finance staff who can send wire transfers |
| **Participation tracking** | Records of who completed which training and when, and test scores |
| **Phishing simulations** | Fake phishing emails that test whether people recognize and report them |
| **Metrics** | Completion rates, simulation click rates, reporting rates, and trends over time |

### Procedures to Understand and Evaluate the Program

To understand how the entity communicates security knowledge, and whether the program works, the CPA can:

1. **Inspect the training materials** to see whether they match the entity's policies and address current threats.
2. **Inspect completion records** to see whether everyone required (including contractors) finished on time.
3. **Analyze phishing simulation results** and their trend; falling click rates and rising reporting rates suggest the program is working.
4. **Interview personnel** to gauge what they actually know.
5. **Observe behavior**, such as locked screens, badge use, and clean desks, to see whether practice matches training.

### Common Deficiencies

| Deficiency | Why It Matters |
|---|---|
| Not all personnel complete training | Untrained people are easier targets for social engineering |
| Content is not updated | People do not recognize new tactics, such as convincing AI-generated phishing |
| One-size-fits-all content | Role-specific risks, such as payment fraud aimed at finance staff, go unaddressed |
| No follow-up on repeated simulation failures | Repeat clickers keep putting the entity at risk |
| No tracking of completion or results | The entity cannot show that the program operates |

**Example:** **Bear Co.** holds annual security training but runs no phishing simulations. During a SOC 2® examination, the service auditor finds that 15% of employees did not complete the most recent training cycle. The incomplete training is an operating deviation from Bear Co.'s own training requirement. The absence of any way to test whether employees can spot phishing is a weakness in the program's design that the auditor would evaluate as well.

---

## Security Assessment Reports

A **security assessment report** documents the issues, findings, and recommendations that come out of testing security controls. The blueprint asks you to provide input into one, so know its structure and how to write up a finding.

| Section | Purpose |
|---|---|
| **Executive summary** | A short overview of scope, approach, and key findings for management |
| **Scope and objectives** | The systems, controls, and criteria evaluated |
| **Findings** | Each issue observed, linked to the control or criterion it relates to |
| **Risk rating** | The severity of each finding, based on impact and likelihood |
| **Recommendations** | Suggested actions to fix each issue |

Each finding should answer five questions, a structure that will be familiar from internal audit:

| Element | Question | Example |
|---|---|---|
| **Condition** | What did we find? | "3 of 25 sampled quarterly access reviews were not completed on time" |
| **Criteria** | What should have happened? | "Policy requires each access review to be completed within 30 days after quarter-end" |
| **Cause** | Why did it happen? | "The review tool sends no reminders to department managers" |
| **Effect** | What is the risk? | "Inappropriate access may go unnoticed, increasing the risk of unauthorized activity" |
| **Recommendation** | What should be done? | "Add automated reminders and escalate overdue reviews to the CISO" |

Organizations rate severity with their own scales. A typical scheme rates a finding **critical** when a key control is missing or wholly ineffective and the risk is immediate, **high** when a significant weakness could lead to serious harm if exploited, **medium** when a control works only partly, and **low** for minor improvements. Each rating usually carries an expected remediation timeline.

**Example:** Testing at **Polar Inc.** finds that its intrusion detection system has not received new threat signatures in six months. The write-up reads: *Condition:* IDS signatures are six months out of date. *Criteria:* Policy requires monthly signature updates. *Cause:* The administrator responsible left the company and the task was never reassigned. *Effect:* The IDS may miss attacks that use recently discovered techniques. *Rating:* High. *Recommendation:* Assign the task to a role rather than a person, and automate signature updates with alerts on failure.

---

## Walkthroughs of IT Security Procedures

A **walkthrough** follows a procedure from start to finish to see how the entity actually performs it, then compares what was observed with what the documented policy requires. The steps are:

1. **Select the procedure** to evaluate, such as terminating a user's access.
2. **Read the documentation**: the written policy, procedure, or standard.
3. **Observe or trace** the procedure being performed, or inspect evidence that it was performed for a specific instance.
4. **Ask questions** of the people who perform it.
5. **Compare** the observed practice with the documented requirement.
6. **Document** any differences.

The blueprint names IT risk management, human resources, and training and education as examples of procedures to walk through. Access reviews and incident response are common choices as well:

| Area | Procedure | What to Look For |
|---|---|---|
| **IT risk management** | Risk assessments and the risk register | Assessments performed as often as required; a register that reflects current threats |
| **Human resources** | Background checks, onboarding, termination | Checks completed before access is granted; access removed on time when people leave |
| **Access reviews** | Periodic review of user access | Managers actually reviewing and acting on the lists, not just signing them |
| **Training and education** | Security awareness training | Training content and frequency matching the policy |
| **Incident response** | Detection, escalation, communication | Team members describing their roles the way the plan does |

A difference between practice and policy can mean that people are not following the procedure, that the policy is out of date, or that training is inadequate. Each possibility leads to a different recommendation, so ask why the difference exists.

**Example:** **Bear Co.**'s policy says no new hire may receive system access until the background check is complete. In a walkthrough, the auditor finds that three recent hires were given ERP access before their checks came back. The observed practice does not match the policy, so the auditor documents a deviation.

:::warning

A walkthrough shows how a procedure works and whether a control has been implemented, and it can reveal design problems. It does not show that a control operated effectively throughout a period. That takes testing a sample of instances across the period.

:::

---

## Evaluating Security Controls in a SOC 2® Engagement

In a SOC 2® engagement, the service auditor evaluates whether the service organization's controls achieve its **service commitments and system requirements** related to security, using the **Trust Services Criteria**. The criteria for security are the **common criteria**, numbered CC1 through CC9, which apply in every SOC 2® engagement whatever other categories are included.

| Series | Topic | What It Covers |
|---|---|---|
| **CC1** | Control environment | Integrity and ethics, board oversight, structure and authority, competence, accountability |
| **CC2** | Communication and information | Quality information, internal communication (including how to report problems), external communication |
| **CC3** | Risk assessment | Objectives, risk identification and analysis, fraud risk, assessing changes |
| **CC4** | Monitoring activities | Ongoing and separate evaluations, communicating deficiencies |
| **CC5** | Control activities | Selecting control activities, general controls over technology, policies and procedures |
| **CC6** | Logical and physical access | Access security, granting and removing access, physical access, disposal of data, protection against outside threats, encryption in transit, malware prevention |
| **CC7** | System operations | Detecting vulnerabilities and anomalies, evaluating security events, responding to and recovering from incidents |
| **CC8** | Change management | Authorizing, designing, testing, approving, and implementing changes |
| **CC9** | Risk mitigation | Mitigating business disruption risk, managing vendors and business partners |

CC1 through CC5 restate COSO's 17 internal control principles. CC6 through CC9 are **supplemental criteria** that add security-specific detail; the [Planning and Performing SOC Engagements](../soc-engagements/planning-and-performing-soc-engagements.md) chapter explains this structure.

### Design Deficiencies and Operating Deviations

The auditor evaluates two things. **Suitability of design** asks whether the control, if it operated as described, would meet the criterion. **Operating effectiveness** (in a Type 2 engagement) asks whether it did operate as described throughout the period.

| Problem | Definition | Example |
|---|---|---|
| **Design deficiency** | A needed control is missing, or the control would not meet the criterion even if performed perfectly | The password policy allows 4-character passwords; enforcing it perfectly would still leave accounts easy to crack |
| **Operating deviation** | A suitably designed control was not performed, or not performed as designed, during the period | Quarterly access reviews are required, but one quarter was skipped during staff turnover |

:::tip[Exam Tip]

Ask: "If this control worked perfectly every time, would it address the risk?" If **no**, it is a **design deficiency**. If **yes**, but it did not always work during the period, it is an **operating deviation**.

:::

Here are typical findings mapped to the criteria they relate to:

| Criterion | Finding | Classification |
|---|---|---|
| **CC6.2** (removing access) | No process exists to remove access when employees leave | Design deficiency |
| **CC6.2** (removing access) | A removal process exists, but 4 of 20 departed employees kept access for more than 48 hours | Operating deviation |
| **CC7.2** (monitoring for anomalies) | The security monitoring tool was offline for three weeks during a migration, with nothing in its place | Operating deviation |
| **CC8.1** (change management) | No test environment exists, so changes go to production untested | Design deficiency |
| **CC2.2** (internal communication) | Policy requires new hires to receive the security policies at onboarding, but a sample shows several did not | Operating deviation |

**Example:** **Illini Security** provides managed security services and undergoes a SOC 2® Type 2 examination. Its service commitment says every security alert is investigated within 4 hours. Testing finds that 8 of 30 sampled alerts were investigated late. The control (a 4-hour investigation procedure with assigned analysts) is suitably designed, but it did not operate as designed for those alerts, so this is an **operating deviation**.

---

## Summary

| Topic | Key Takeaway |
|---|---|
| Security awareness training | Evaluate content, frequency, role-specific coverage, tracking, simulations, and metrics |
| Security assessment reports | Write each finding as condition, criteria, cause, effect, and recommendation, with a risk rating |
| Walkthroughs | Compare observed practice with documented policy; a walkthrough alone does not prove operating effectiveness |
| SOC 2® security | Common criteria CC1-CC9; distinguish design deficiencies from operating deviations |

---

## Practice Questions

1. **Kingfisher Industries** runs quarterly phishing simulations. For a year, the click rate has stayed at 22%, even though employees who click must complete extra training. Management asks the CPA to evaluate the program. What should the CPA look into, and what might the CPA recommend?

2. **Illini Entertainment** is in a SOC 2® Type 2 examination. Its policy says department managers review user access every quarter. Of 25 sampled reviews, 6 were completed 45 days late and 2 have no evidence of being done at all. How should the auditor classify these findings?

3. A new IT security manager at **Bear Co.** walks through the employee termination process. Policy requires system access to be removed within 24 hours of termination. HR notifies IT by ordinary email; there is no workflow, no tracking, and no check that access was actually removed. What kind of deficiency is this, and why?

:::tip[Answers]

1. A flat 22% click rate means the program is **not changing behavior**. The CPA should look at whether the content is relevant and current, whether training matches the kinds of phishing being simulated, whether repeat clickers get escalating follow-up, and whether high-risk roles get targeted training. Recommendations could include role-based content, escalation for repeat clickers, varied simulation difficulty, real examples from the entity's own industry, and measuring the reporting rate as well as the click rate.

2. All 8 are **operating deviations**: the control (quarterly manager reviews) is suitably designed, but it did not operate as designed for these instances. The 2 reviews with no evidence are more serious, since there is no sign the control operated at all. The auditor documents the exceptions (8 of 25, or 32%), investigates their cause, and evaluates whether the deviations mean the related criteria, such as CC6.2 and CC6.3 on granting, changing, and removing access, were not met.

3. A **design deficiency**. Even if HR sent every email and IT read every one, the process has no mechanism to make removal happen within 24 hours, no tracking to keep a notice from being overlooked, and no check that access was actually removed. As designed, it cannot reliably meet the requirement, however faithfully people follow it.

:::
