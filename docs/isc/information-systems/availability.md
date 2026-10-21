# Availability

A system that is accurate and secure but down during month-end close is not much use. **Availability** is the ability of an information system to be up and usable when it is needed. For a company that bills customers, pays suppliers, and closes its books through its systems, even a few hours of downtime can mean lost revenue, missed deadlines, and broken promises to customers.

This chapter covers how organizations plan for disruptions (business resiliency, continuity plans, and disaster recovery plans), how they keep copies of data and systems (mirroring, replication, and backups), how they decide what to protect first (business impact analysis), and how availability is measured. It ends with how a service auditor evaluates availability controls in a SOC 2® engagement. Expect both recall questions and scenarios that ask whether a backup strategy meets the organization's recovery objectives.

---

## Business Resiliency, Continuity, and Disaster Recovery

**Business resiliency** is an organization's ability to anticipate, absorb, respond to, and recover from disruptions, whether the cause is a cyberattack, a storm, an equipment failure, or a pandemic. It is the broad goal. Two plans put it into practice:

| Plan | Scope | Focus | Example Question It Answers |
|---|---|---|---|
| **Business continuity plan (BCP)** | The whole organization | Keeping critical business functions running during and after a disruption: people, processes, facilities | How does **Bear Co.** keep paying employees if its main office floods? |
| **Disaster recovery plan (DRP)** | IT systems and data | Restoring technology (servers, networks, databases, applications) after a disruption | How does **Bear Co.** restore its ERP system and database after a server failure? |

The DRP is usually a component of the BCP: the continuity plan says which business functions must keep going, and the recovery plan says how the technology behind them comes back.

When evaluating either plan, ask whether it covers all critical functions and systems, assigns specific people to specific recovery tasks, includes a communication protocol for employees, customers, and regulators, and is updated when systems or personnel change. Above all, ask whether it has been **tested**. Tests range from a tabletop exercise (walking through a scenario in a meeting) to a simulation, to a parallel test (bringing up the recovery site while production keeps running), to a full interruption test (actually switching over). A plan that has never been tested gives false comfort, and exam scenarios often feature a well-written plan that fails the first time it is used.

---

## Mirroring and Replication

**Mirroring** and **replication** keep extra copies of data or systems so that operations can continue, or resume quickly, if the primary fails.

| Technique | How It Works | Effect on Recovery |
|---|---|---|
| **Mirroring** | Maintains an exact, real-time copy on a separate disk or system; every write goes to both copies at once | Near-instant failover with essentially no data loss |
| **Synchronous replication** | Copies each change to a secondary system and confirms it there before the transaction completes | No data loss, but adds delay, so it suits shorter distances |
| **Asynchronous replication** | Copies changes to a secondary system shortly after they occur, often to a distant site | Fast and suits long distances, but the most recent changes can be lost if the primary fails |

The objectives are to minimize downtime through quick failover, to protect against data loss by keeping copies in a separate location, and to support systems that must be highly available. Copies can also share the load of read requests.

**Example:** **Kingfisher Industries** replicates its financial database to a second data center 200 miles away. When the primary data center loses power during month-end close, the secondary site takes over within minutes and the close continues.

Mirroring and replication are not substitutes for backups. They copy everything, including mistakes: if a user deletes a table or ransomware encrypts files, the damage is copied to the mirror too. Only a backup taken before the event lets the organization go back in time.

---

## Business Impact Analysis (BIA)

A **business impact analysis (BIA)** identifies an organization's critical business functions and estimates what a disruption to each would cost. The BIA drives the rest of availability planning: what to protect, how fast it must come back, and how much to spend.

The steps are:

1. **Identify critical business functions** and the systems they depend on.
2. **Assess the impact of disruption** on each function: financial, operational, legal, and reputational, and how that impact grows over time.
3. **Set recovery objectives** for each function, including how long it can be down and how much data it can afford to lose.
4. **Identify the resources** (technology, people, facilities) needed to recover within those objectives.
5. **Prioritize recovery** so the most critical functions come back first.

Three metrics come out of the BIA:

| Metric | Definition | Example |
|---|---|---|
| **Recovery time objective (RTO)** | The longest acceptable time to restore a function after a disruption | Bear Co.'s payroll system has an RTO of 24 hours |
| **Recovery point objective (RPO)** | The largest acceptable amount of data loss, measured in time | Bear Co.'s financial database has an RPO of 1 hour, so it must be backed up or replicated at least hourly |
| **Maximum tolerable downtime (MTD)** | The total time a function can be unavailable before the damage becomes severe or irreversible | Bear Co.'s online sales system has an MTD of 72 hours |

The RTO must be shorter than the MTD, since recovery has to finish before the damage becomes intolerable.

:::tip[Exam Tip]

Recovery objectives drive the backup and recovery design. With an RPO of 1 hour, a nightly backup is not enough. With an RTO of 4 hours, the recovery process must be able to restore the system within 4 hours. A mismatch between the stated objectives and the actual practice is the most common availability deficiency on the exam.

:::

---

## Measures of System Availability

Availability is usually measured against a **service level agreement (SLA)** between the organization and its IT provider, internal or external. Two measures named in the blueprint are the building blocks:

- **Agreed service time** is the period during which the system is supposed to be available, such as 24 hours a day or business hours only.
- **Downtime** is the time the system is unavailable during the agreed service time.

From these, availability is expressed as a percentage:

$$
\text{Availability} = \frac{\text{Agreed service time} - \text{Downtime}}{\text{Agreed service time}} \times 100\%
$$

**Example:** **Bear Co.**'s SLA with its cloud provider promises 99.9% availability, around the clock. A 30-day month has 720 hours, so the provider may be down for no more than 720 × 0.1% = 0.72 hours, about 43 minutes. If the system is down for 2 hours during month-end close, the provider has missed its commitment: actual availability is (720 - 2) ÷ 720 = 99.72%.

Two related measures describe reliability. **Mean time between failures (MTBF)** is the average time a system runs between failures (higher is better). **Mean time to repair (MTTR)** is the average time to restore it after a failure (lower is better).

---

## Data Backup Types

A **backup** is a copy of data kept so it can be restored after loss or corruption. The type of backup determines how long the backup takes, how much storage it uses, and how long a restore takes.

| Backup Type | What It Copies | Backup Time | Restore Process | Storage |
|---|---|---|---|---|
| **Full** | All data | Longest | Fastest: restore one backup set | Most |
| **Incremental** | Data changed since the **last backup of any type** | Shortest | Slowest: restore the last full backup, then every incremental since, in order | Least |
| **Differential** | Data changed since the **last full backup** | Moderate, and grows each day | Moderate: restore the last full backup, then only the latest differential | Moderate |

The difference is easiest to see over a week. Suppose **Polar Inc.** takes a full backup on Sunday night and a partial backup every other night:

| Night | If the Partial Backups Are Incremental | If the Partial Backups Are Differential |
|---|---|---|
| Sunday | Full backup of everything | Full backup of everything |
| Monday | Changes since Sunday | Changes since Sunday |
| Tuesday | Changes since Monday | Changes since Sunday |
| Wednesday | Changes since Tuesday | Changes since Sunday |

If the system fails on Thursday morning, the incremental approach requires restoring Sunday's full backup and then Monday's, Tuesday's, and Wednesday's incrementals, in order. The differential approach requires only Sunday's full backup and Wednesday's differential.

### Recovery Considerations

Choosing a backup type is only part of the design. When evaluating a backup strategy, ask:

- **Does the backup frequency meet the RPO?** With a 4-hour RPO, nightly backups leave a gap.
- **Are backups stored in a separate location?** A backup on the same server, or in the same building, does not survive a site-level disaster. Keeping at least one copy offline or unchangeable also protects it from ransomware.
- **Are restores tested?** An untested backup may be incomplete, corrupted, or impossible to restore.
- **Are backups encrypted?** Backup media holding sensitive data need the same protection as the original.
- **Is the restore procedure documented?** Staff must know how to recover, and the procedure itself should be tested.

**Example:** **Illini Security** states an RPO of 1 hour for its billing system but backs it up once a day. The backup strategy is not designed to meet the objective, so this is a design deficiency, however reliably the daily backup runs.

---

## Availability Controls in a SOC 2® Engagement

When a SOC 2® engagement includes the availability category, the service auditor evaluates the service organization's controls over its **availability service commitments and system requirements**: in the Trust Services Criteria's words, whether information and systems are available for operation and use to meet the entity's objectives. Three criteria apply in addition to the common criteria:

| Criterion | In Plain English |
|---|---|
| **A1.1** | The entity monitors and manages processing capacity so it can meet demand, adding capacity when needed |
| **A1.2** | The entity puts in place and maintains environmental protections, software, data backup processes, and recovery infrastructure |
| **A1.3** | The entity tests its recovery plan procedures |

As elsewhere in SOC 2®, the auditor distinguishes design deficiencies from operating deviations:

| Finding | Classification |
|---|---|
| The DRP does not address the failure of the organization's primary cloud provider | Design deficiency |
| Backups are stored in the same physical location as the production systems | Design deficiency |
| The DRP requires a recovery test every quarter, but no test was performed in the last 12 months | Operating deviation |
| Policy requires every availability incident to be investigated within one day, but several outages during the period were never investigated | Operating deviation |

---

## Summary

| Topic | Key Takeaway |
|---|---|
| Business resiliency | The broad goal; the BCP keeps the business running and the DRP restores the technology |
| Mirroring and replication | Keep live copies for fast failover; they copy errors too, so they do not replace backups |
| Business impact analysis | Identifies critical functions and sets RTOs and RPOs; the RTO must be shorter than the MTD |
| Availability measures | Agreed service time and downtime give the availability percentage; MTBF and MTTR describe reliability |
| Backup types | Full, incremental, and differential trade backup time and storage against restore time |
| SOC 2® availability | Criteria A1.1-A1.3 cover capacity, backup and recovery infrastructure, and recovery testing |

---

## Practice Questions

1. **Bear Co.** takes a full backup every Sunday and differential backups Monday through Saturday. The system crashes on Friday morning. Which backups are needed to restore it?

2. **Bear Co.**'s financial reporting system has an RPO of 2 hours and an RTO of 8 hours. IT takes a full backup every night at midnight and stores it on a separate server in the same building. The DRP has not been tested in two years. Identify **two** deficiencies.

3. **Illini Entertainment** receives a SOC 2® Type 2 report from its cloud hosting provider. The provider's DRP requires a recovery test every quarter, but the report shows that only one test was performed during the 12-month period. Is this a design deficiency or an operating deviation?

:::tip[Answers]

1. Sunday's **full backup** and Thursday's **differential backup**. Each differential captures everything changed since the last full backup, so only the most recent one is needed.

2. Any two of these: **(1)** Backups run once a day, so up to 24 hours of data could be lost, far beyond the 2-hour RPO. **(2)** The DRP has not been tested in two years, so there is no evidence the system can be restored within the 8-hour RTO. **(3)** The backups are kept in the same building, so a fire or flood could destroy both the system and its backups.

3. An **operating deviation**. The control (quarterly recovery testing) is suitably designed, but it was performed only once instead of four times. If the plan had never required testing at all, that would be a design deficiency.

:::
