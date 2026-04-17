import { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./blueprint.module.css";
/* ────────────────────── Data ────────────────────── */
const sections = [
    {
        id: "aud",
        code: "AUD",
        name: "Auditing and Attestation",
        type: "Core",
        hours: 4,
        mcqs: 78,
        tbs: 7,
        mcqWeight: "50%",
        tbsWeight: "50%",
        testlets: [
            { label: "Testlet 1", count: 39, type: "MCQ" },
            { label: "Testlet 2", count: 39, type: "MCQ" },
            { label: "Testlet 3", count: 2, type: "TBS" },
            { label: "Testlet 4", count: 3, type: "TBS" },
            { label: "Testlet 5", count: 2, type: "TBS" },
        ],
        skills: {
            remembering: "30–40%",
            application: "30–40%",
            analysis: "15–25%",
            evaluation: "5–15%",
        },
        areas: [
            {
                name: "Ethics, Professional Responsibilities and General Principles",
                weight: "15–25%",
            },
            {
                name: "Assessing Risk and Developing a Planned Response",
                weight: "25–35%",
            },
            {
                name: "Performing Further Procedures and Obtaining Evidence",
                weight: "30–40%",
            },
            { name: "Forming Conclusions and Reporting", weight: "10–20%" },
        ],
    },
    {
        id: "far",
        code: "FAR",
        name: "Financial Accounting and Reporting",
        type: "Core",
        hours: 4,
        mcqs: 50,
        tbs: 7,
        mcqWeight: "50%",
        tbsWeight: "50%",
        testlets: [
            { label: "Testlet 1", count: 25, type: "MCQ" },
            { label: "Testlet 2", count: 25, type: "MCQ" },
            { label: "Testlet 3", count: 2, type: "TBS" },
            { label: "Testlet 4", count: 3, type: "TBS" },
            { label: "Testlet 5", count: 2, type: "TBS" },
        ],
        skills: {
            remembering: "5–15%",
            application: "45–55%",
            analysis: "35–45%",
            evaluation: "–",
        },
        areas: [
            { name: "Financial Reporting", weight: "30–40%" },
            { name: "Select Balance Sheet Accounts", weight: "30–40%" },
            { name: "Select Transactions", weight: "25–35%" },
        ],
    },
    {
        id: "reg",
        code: "REG",
        name: "Taxation and Regulation",
        type: "Core",
        hours: 4,
        mcqs: 72,
        tbs: 8,
        mcqWeight: "50%",
        tbsWeight: "50%",
        testlets: [
            { label: "Testlet 1", count: 36, type: "MCQ" },
            { label: "Testlet 2", count: 36, type: "MCQ" },
            { label: "Testlet 3", count: 2, type: "TBS" },
            { label: "Testlet 4", count: 3, type: "TBS" },
            { label: "Testlet 5", count: 3, type: "TBS" },
        ],
        skills: {
            remembering: "25–35%",
            application: "35–45%",
            analysis: "25–35%",
            evaluation: "–",
        },
        areas: [
            {
                name: "Ethics, Professional Responsibilities and Federal Tax Procedures",
                weight: "10–20%",
            },
            { name: "Business Law", weight: "15–25%" },
            {
                name: "Federal Taxation of Property Transactions",
                weight: "5–15%",
            },
            { name: "Federal Taxation of Individuals", weight: "22–32%" },
            {
                name: "Federal Taxation of Entities (including tax preparation)",
                weight: "23–33%",
            },
        ],
    },
    {
        id: "bar",
        code: "BAR",
        name: "Business Analysis and Reporting",
        type: "Discipline",
        hours: 4,
        mcqs: 50,
        tbs: 7,
        mcqWeight: "50%",
        tbsWeight: "50%",
        testlets: [
            { label: "Testlet 1", count: 25, type: "MCQ" },
            { label: "Testlet 2", count: 25, type: "MCQ" },
            { label: "Testlet 3", count: 2, type: "TBS" },
            { label: "Testlet 4", count: 3, type: "TBS" },
            { label: "Testlet 5", count: 2, type: "TBS" },
        ],
        skills: {
            remembering: "10–20%",
            application: "45–55%",
            analysis: "30–40%",
            evaluation: "–",
        },
        areas: [
            { name: "Business Analysis", weight: "40–50%" },
            { name: "Technical Accounting and Reporting", weight: "35–45%" },
            { name: "State and Local Governments", weight: "10–20%" },
        ],
    },
    {
        id: "isc",
        code: "ISC",
        name: "Information Systems and Controls",
        type: "Discipline",
        hours: 4,
        mcqs: 82,
        tbs: 6,
        mcqWeight: "60%",
        tbsWeight: "40%",
        testlets: [
            { label: "Testlet 1", count: 41, type: "MCQ" },
            { label: "Testlet 2", count: 41, type: "MCQ" },
            { label: "Testlet 3", count: 1, type: "TBS" },
            { label: "Testlet 4", count: 3, type: "TBS" },
            { label: "Testlet 5", count: 2, type: "TBS" },
        ],
        skills: {
            remembering: "55–65%",
            application: "20–30%",
            analysis: "10–20%",
            evaluation: "–",
        },
        areas: [
            {
                name: "Information Systems and Data Management",
                weight: "35–45%",
            },
            { name: "Security, Confidentiality and Privacy", weight: "35–45%" },
            {
                name: "Considerations for System and Organization Controls (SOC) Engagements",
                weight: "15–25%",
            },
        ],
    },
    {
        id: "tcp",
        code: "TCP",
        name: "Tax Compliance and Planning",
        type: "Discipline",
        hours: 4,
        mcqs: 68,
        tbs: 7,
        mcqWeight: "50%",
        tbsWeight: "50%",
        testlets: [
            { label: "Testlet 1", count: 34, type: "MCQ" },
            { label: "Testlet 2", count: 34, type: "MCQ" },
            { label: "Testlet 3", count: 2, type: "TBS" },
            { label: "Testlet 4", count: 3, type: "TBS" },
            { label: "Testlet 5", count: 2, type: "TBS" },
        ],
        skills: {
            remembering: "5–15%",
            application: "55–65%",
            analysis: "25–35%",
            evaluation: "–",
        },
        areas: [
            {
                name: "Tax Compliance and Planning for Individuals and Personal Financial Planning",
                weight: "30–40%",
            },
            { name: "Entity Tax Compliance", weight: "30–40%" },
            { name: "Entity Tax Planning", weight: "10–20%" },
            {
                name: "Property Transactions (disposition of assets)",
                weight: "10–20%",
            },
        ],
    },
];
const skillLevels = [
    {
        name: "Evaluation",
        description: "The examination or assessment of problems, and use of judgment to draw conclusions.",
        color: "#7c3aed",
    },
    {
        name: "Analysis",
        description: "The examination and study of the interrelationships of separate areas in order to identify causes and find evidence to support inferences.",
        color: "#2563eb",
    },
    {
        name: "Application",
        description: "The use or demonstration of knowledge, concepts or techniques.",
        color: "#059669",
    },
    {
        name: "Remembering & Understanding",
        description: "The perception and comprehension of the significance of an area utilizing knowledge gained.",
        color: "#ea580c",
    },
];
const ROMAN = ["I", "II", "III", "IV", "V"];
const colorMap = {
    aud: styles.bgAud,
    far: styles.bgFar,
    reg: styles.bgReg,
    bar: styles.bgBar,
    isc: styles.bgIsc,
    tcp: styles.bgTcp,
};
const dotMap = {
    aud: styles.dotAud,
    far: styles.dotFar,
    reg: styles.dotReg,
    bar: styles.dotBar,
    isc: styles.dotIsc,
    tcp: styles.dotTcp,
};
/* ── Helpers ── */
/** Parse "30–40%" to its midpoint as a number */
function midpoint(range) {
    const match = range.match(/(\d+)[–-](\d+)/);
    if (!match)
        return 0;
    return (parseInt(match[1]) + parseInt(match[2])) / 2;
}
/* ── Components ── */
function BarChart({ rows, colorClass, }) {
    return (<div>
      {rows.map((row) => {
            const mid = midpoint(row.value);
            return (<div className={styles.barRow} key={row.label}>
            <span className={styles.barLabel}>{row.label}</span>
            <div className={styles.barTrack}>
              <div className={`${styles.barFill} ${colorClass}`} style={{ width: `${mid}%` }}/>
            </div>
            <span className={styles.barValue}>{row.value}</span>
          </div>);
        })}
    </div>);
}
function SectionDetailPanel({ section, }) {
    const bgClass = colorMap[section.id];
    return (<div className={styles.detailPanel}>
      <div className={styles.detailPanelHeader}>
        <div className={styles.detailPanelTitle}>
          <span className={styles.sectionBadge}>
            <span className={`${styles.sectionDot} ${dotMap[section.id]}`}/>
            {section.code}
          </span>{" "}
          — {section.name}
        </div>
        <div className={styles.detailPanelSubtitle}>
          {section.type} Section &middot; {section.hours} hours &middot;{" "}
          {section.mcqs} MCQs &middot; {section.tbs} TBSs
        </div>
      </div>

      {/* Quick stats */}
      <div className={styles.detailStats}>
        <div className={styles.detailStat}>
          <div className={styles.detailStatValue}>{section.mcqWeight}</div>
          <div className={styles.detailStatLabel}>MCQ Weight</div>
        </div>
        <div className={styles.detailStat}>
          <div className={styles.detailStatValue}>{section.tbsWeight}</div>
          <div className={styles.detailStatLabel}>TBS Weight</div>
        </div>
        <div className={styles.detailStat}>
          <div className={styles.detailStatValue}>{section.mcqs}</div>
          <div className={styles.detailStatLabel}>MCQs</div>
        </div>
        <div className={styles.detailStat}>
          <div className={styles.detailStatValue}>{section.tbs}</div>
          <div className={styles.detailStatLabel}>TBSs</div>
        </div>
      </div>

      {/* Testlet breakdown */}
      <div style={{ padding: "0 1.5rem 1rem" }}>
        <div className={styles.barChartTitle}>Testlet Breakdown</div>
        <div className={styles.testletGrid}>
          {section.testlets.map((t) => (<div className={styles.testletCard} key={t.label}>
              <div className={styles.testletLabel}>{t.label}</div>
              <div className={styles.testletValue}>{t.count}</div>
              <div className={styles.testletType}>{t.type}</div>
            </div>))}
        </div>
      </div>

      {/* Content area allocation */}
      <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
        <div className={styles.barChartTitle}>Content Area Allocation</div>
        <BarChart colorClass={bgClass} rows={section.areas.map((a, i) => ({
            label: `Area ${ROMAN[i]}`,
            value: a.weight,
        }))}/>
      </div>

      {/* Area list */}
      <ul className={styles.areaList}>
        {section.areas.map((area, i) => (<li className={styles.areaItem} key={i}>
            <span className={styles.areaName}>
              <strong>Area {ROMAN[i]}:</strong>{" "}
              {area.name}
            </span>
            <span className={styles.areaWeight}>{area.weight}</span>
          </li>))}
      </ul>

      {/* Skill allocation */}
      <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
        <div className={styles.barChartTitle}>Skill Level Allocation</div>
        <BarChart colorClass={bgClass} rows={[
            {
                label: "Remembering & Understanding",
                value: section.skills.remembering,
            },
            { label: "Application", value: section.skills.application },
            { label: "Analysis", value: section.skills.analysis },
            {
                label: "Evaluation",
                value: section.skills.evaluation === "–"
                    ? "0–0%"
                    : section.skills.evaluation,
            },
        ]}/>
      </div>
    </div>);
}
/* ── Main Page ── */
export default function Blueprint2026() {
    const [activeSection, setActiveSection] = useState("aud");
    const current = sections.find((s) => s.id === activeSection) ?? sections[0];
    return (<Layout title="CPA Exam Blueprint 2026" description="Comprehensive guide to the 2026 Uniform CPA Examination Blueprint — exam structure, content areas, skill allocations, and detailed section breakdowns.">
      <div className={styles.page}>
        {/* ── Hero ── */}
        <div className={styles.hero}>
          <div className={styles.heroEyebrow}>
            <span>●</span> Effective January 2026
          </div>
          <h1 className={styles.heroTitle}>
            Uniform CPA Examination Blueprints
          </h1>
          <p className={styles.heroSubtitle}>
            A comprehensive visual guide to the 2026 CPA Exam structure,
            covering all six sections — three Core and three Discipline — with
            content areas, skill allocations, and question breakdowns.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}/> 3 Core Sections
            </span>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}/> 3 Discipline Sections
            </span>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}/> 4 Hours Each
            </span>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}/> Bloom&apos;s Taxonomy
              Skills
            </span>
          </div>
        </div>

        <div className={styles.container}>
          {/* ── Overview Stats ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Overview</div>
              <h2 className={styles.sectionTitle}>Exam at a Glance</h2>
              <p className={styles.sectionDescription}>
                The CPA licensure model requires all candidates to pass three
                Core exam sections and one Discipline section of their choosing.
                Each section is four hours long and consists of five testlets.
              </p>
            </div>
            <div className={styles.cardGrid}>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Total Sections</div>
                <div className={styles.statCardValue}>6</div>
                <div className={styles.statCardMeta}>
                  3 Core + 3 Discipline
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Section Duration</div>
                <div className={styles.statCardValue}>4 hrs</div>
                <div className={styles.statCardMeta}>
                  Uniform across all sections
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardLabel}>Testlets per Section</div>
                <div className={styles.statCardValue}>5</div>
                <div className={styles.statCardMeta}>2 MCQ + 3 TBS</div>
              </div>
            </div>
          </section>

          {/* ── Exam Structure Table ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Structure</div>
              <h2 className={styles.sectionTitle}>
                Exam Sections &amp; Question Counts
              </h2>
              <p className={styles.sectionDescription}>
                Each section consists of multiple-choice questions (MCQs) and
                task-based simulations (TBSs) distributed across five testlets.
              </p>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Type</th>
                    <th className={styles.thRight}>Duration</th>
                    <th className={styles.thRight}>MCQs</th>
                    <th className={styles.thRight}>TBSs</th>
                    <th className={styles.thRight}>MCQ Weight</th>
                    <th className={styles.thRight}>TBS Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((s) => (<tr key={s.id}>
                      <td>
                        <span className={styles.sectionBadge}>
                          <span className={`${styles.sectionDot} ${dotMap[s.id]}`}/>
                          {s.code}
                        </span>
                      </td>
                      <td>
                        <span className={`${styles.typeBadge} ${s.type === "Core"
                ? styles.coreType
                : styles.disciplineType}`}>
                          {s.type}
                        </span>
                      </td>
                      <td className={styles.tdRight}>{s.hours} hrs</td>
                      <td className={styles.tdRight}>{s.mcqs}</td>
                      <td className={styles.tdRight}>{s.tbs}</td>
                      <td className={styles.tdRight}>{s.mcqWeight}</td>
                      <td className={styles.tdRight}>{s.tbsWeight}</td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Bloom's Taxonomy Skill Levels ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Skill Framework</div>
              <h2 className={styles.sectionTitle}>
                Bloom&apos;s Taxonomy Skill Levels
              </h2>
              <p className={styles.sectionDescription}>
                The AICPA adopted a skill framework based on the revised
                Bloom&apos;s Taxonomy of Educational Objectives. Each task on
                the exam is assigned one of four skill levels.
              </p>
            </div>
            <div className={styles.skillGrid}>
              {skillLevels.map((skill) => (<div className={styles.skillCard} key={skill.name}>
                  <div className={styles.skillCardIcon} style={{ background: skill.color }}>
                    {skill.name === "Evaluation" && "★"}
                    {skill.name === "Analysis" && "◆"}
                    {skill.name === "Application" && "▲"}
                    {skill.name === "Remembering & Understanding" && "●"}
                  </div>
                  <div className={styles.skillCardTitle}>{skill.name}</div>
                  <p className={styles.skillCardDescription}>
                    {skill.description}
                  </p>
                </div>))}
            </div>
          </section>

          {/* ── Skill Allocation by Section ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Skills</div>
              <h2 className={styles.sectionTitle}>
                Skill Allocation by Section
              </h2>
              <p className={styles.sectionDescription}>
                The weight of each skill level varies across exam sections.
                Compare the skill emphasis for each section at a glance.
              </p>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th className={styles.thRight}>
                      Remembering &amp; Understanding
                    </th>
                    <th className={styles.thRight}>Application</th>
                    <th className={styles.thRight}>Analysis</th>
                    <th className={styles.thRight}>Evaluation</th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((s) => (<tr key={s.id}>
                      <td>
                        <span className={styles.sectionBadge}>
                          <span className={`${styles.sectionDot} ${dotMap[s.id]}`}/>
                          {s.code}
                        </span>
                      </td>
                      <td className={styles.tdRight}>
                        {s.skills.remembering}
                      </td>
                      <td className={styles.tdRight}>
                        {s.skills.application}
                      </td>
                      <td className={styles.tdRight}>{s.skills.analysis}</td>
                      <td className={styles.tdRight}>{s.skills.evaluation}</td>
                    </tr>))}
                </tbody>
              </table>
            </div>

            {/* Visual bar chart comparison */}
            <div className={styles.barChartGroup}>
              {sections.map((s) => (<div className={styles.barChartCard} key={s.id}>
                  <div className={styles.barChartTitle}>
                    <span className={styles.sectionBadge}>
                      <span className={`${styles.sectionDot} ${dotMap[s.id]}`}/>
                      {s.code}
                    </span>{" "}
                    — {s.name}
                  </div>
                  <BarChart colorClass={colorMap[s.id]} rows={[
                {
                    label: "Remembering & Understanding",
                    value: s.skills.remembering,
                },
                {
                    label: "Application",
                    value: s.skills.application,
                },
                { label: "Analysis", value: s.skills.analysis },
                {
                    label: "Evaluation",
                    value: s.skills.evaluation === "–"
                        ? "0–0%"
                        : s.skills.evaluation,
                },
            ]}/>
                </div>))}
            </div>
          </section>

          {/* ── Section Deep Dives ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Deep Dive</div>
              <h2 className={styles.sectionTitle}>Section Blueprints</h2>
              <p className={styles.sectionDescription}>
                Select a section below to explore its content areas, testlet
                breakdown, and skill allocations in detail.
              </p>
            </div>

            {/* Tabs */}
            <div className={styles.sectionTabs}>
              {sections.map((s) => (<button key={s.id} className={`${styles.sectionTab} ${activeSection === s.id ? styles.sectionTabActive : ""}`} onClick={() => setActiveSection(s.id)}>
                  {s.code}
                </button>))}
            </div>

            <SectionDetailPanel section={current}/>
          </section>

          {/* ── Content Area Summary ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Content Areas</div>
              <h2 className={styles.sectionTitle}>
                Content Area Allocations — All Sections
              </h2>
              <p className={styles.sectionDescription}>
                A consolidated view of every content area and its weight across
                all six exam sections.
              </p>
            </div>
            <div className={styles.twoCol}>
              {/* Core sections */}
              <div>
                <h3 style={{
            fontSize: "1.125rem",
            marginBottom: "1rem",
            fontWeight: 600,
        }}>
                  Core Sections
                </h3>
                {sections
            .filter((s) => s.type === "Core")
            .map((s) => (<div className={styles.barChartCard} key={s.id} style={{ marginBottom: "1rem" }}>
                      <div className={styles.barChartTitle}>
                        <span className={styles.sectionBadge}>
                          <span className={`${styles.sectionDot} ${dotMap[s.id]}`}/>
                          {s.code}
                        </span>{" "}
                        — {s.name}
                      </div>
                      <BarChart colorClass={colorMap[s.id]} rows={s.areas.map((a, i) => ({
                label: `Area ${ROMAN[i]}`,
                value: a.weight,
            }))}/>
                      <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "0.75rem 0 0",
                fontSize: "0.8125rem",
                color: "var(--ifm-color-emphasis-600)",
            }}>
                        {s.areas.map((a, i) => (<li key={i} style={{
                    padding: "0.25rem 0",
                    borderTop: i > 0
                        ? "1px solid var(--ifm-toc-border-color)"
                        : undefined,
                }}>
                            <strong>
                              Area {ROMAN[i]}:
                            </strong>{" "}
                            {a.name}
                          </li>))}
                      </ul>
                    </div>))}
              </div>

              {/* Discipline sections */}
              <div>
                <h3 style={{
            fontSize: "1.125rem",
            marginBottom: "1rem",
            fontWeight: 600,
        }}>
                  Discipline Sections
                </h3>
                {sections
            .filter((s) => s.type === "Discipline")
            .map((s) => (<div className={styles.barChartCard} key={s.id} style={{ marginBottom: "1rem" }}>
                      <div className={styles.barChartTitle}>
                        <span className={styles.sectionBadge}>
                          <span className={`${styles.sectionDot} ${dotMap[s.id]}`}/>
                          {s.code}
                        </span>{" "}
                        — {s.name}
                      </div>
                      <BarChart colorClass={colorMap[s.id]} rows={s.areas.map((a, i) => ({
                label: `Area ${ROMAN[i]}`,
                value: a.weight,
            }))}/>
                      <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "0.75rem 0 0",
                fontSize: "0.8125rem",
                color: "var(--ifm-color-emphasis-600)",
            }}>
                        {s.areas.map((a, i) => (<li key={i} style={{
                    padding: "0.25rem 0",
                    borderTop: i > 0
                        ? "1px solid var(--ifm-toc-border-color)"
                        : undefined,
                }}>
                            <strong>
                              Area {ROMAN[i]}:
                            </strong>{" "}
                            {a.name}
                          </li>))}
                      </ul>
                    </div>))}
              </div>
            </div>
          </section>

          {/* ── Testlet Structure Table ── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Testlets</div>
              <h2 className={styles.sectionTitle}>
                Testlet Structure by Section
              </h2>
              <p className={styles.sectionDescription}>
                Each section consists of five testlets. The first two are MCQs
                and the remaining three contain TBSs.
              </p>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th className={styles.tdCenter}>Testlet 1 (MCQ)</th>
                    <th className={styles.tdCenter}>Testlet 2 (MCQ)</th>
                    <th className={styles.tdCenter}>Testlet 3 (TBS)</th>
                    <th className={styles.tdCenter}>Testlet 4 (TBS)</th>
                    <th className={styles.tdCenter}>Testlet 5 (TBS)</th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((s) => (<tr key={s.id}>
                      <td>
                        <span className={styles.sectionBadge}>
                          <span className={`${styles.sectionDot} ${dotMap[s.id]}`}/>
                          {s.code}
                        </span>
                      </td>
                      {s.testlets.map((t) => (<td className={styles.tdCenter} key={t.label}>
                          {t.count}
                        </td>))}
                    </tr>))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Source attribution ── */}
          <div className={styles.footer}>
            Source:{" "}
            <a href="https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
              AICPA Uniform CPA Examination Blueprints
            </a>{" "}
            — Approved by the Board of Examiners, Aug. 18, 2025. Effective
            January 2026.
          </div>
        </div>
      </div>
    </Layout>);
}
