import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { ArrowRight, CalendarDays, ExternalLink, FileText } from "lucide-react";
import styles from "./blueprint.module.css";

/* Data: Uniform CPA Examination Blueprints effective January 1, 2027
   (approved by the AICPA Board of Examiners on September 16, 2026). */

type Range = [number, number];

interface Section {
  id: "aud" | "far" | "reg" | "bar" | "isc" | "tcp";
  code: string;
  name: string;
  kind: "Core" | "Discipline";
  mcqs: number;
  tbs: number;
  testlets: number[]; // question count per testlet: two MCQ testlets, then three TBS testlets
  mcqWeight: number; // percent of the score from MCQs
  areas: { name: string; range: Range }[];
  skills: { remembering: Range; application: Range; analysis: Range; evaluation?: Range };
  change2027: string;
}

const SECTIONS: Section[] = [
  {
    id: "aud",
    code: "AUD",
    name: "Auditing and Attestation",
    kind: "Core",
    mcqs: 78,
    tbs: 7,
    testlets: [39, 39, 2, 3, 2],
    mcqWeight: 50,
    areas: [
      { name: "Ethics, Professional Responsibilities and General Principles", range: [15, 25] },
      { name: "Assessing Risk and Developing a Planned Response", range: [25, 35] },
      { name: "Performing Further Procedures and Obtaining Evidence", range: [30, 40] },
      { name: "Forming Conclusions and Reporting", range: [10, 20] },
    ],
    skills: { remembering: [30, 40], application: [30, 40], analysis: [15, 25], evaluation: [5, 15] },
    change2027:
      "Clarifies examples in the evidence and sampling tasks, including data and evidence generated with technologies such as artificial intelligence, and focuses the investments task on audit considerations.",
  },
  {
    id: "far",
    code: "FAR",
    name: "Financial Accounting and Reporting",
    kind: "Core",
    mcqs: 50,
    tbs: 7,
    testlets: [25, 25, 2, 3, 2],
    mcqWeight: 50,
    areas: [
      { name: "Financial Reporting", range: [30, 40] },
      { name: "Select Balance Sheet Accounts", range: [30, 40] },
      { name: "Select Transactions", range: [25, 35] },
    ],
    skills: { remembering: [5, 15], application: [45, 55], analysis: [35, 45] },
    change2027:
      "Adds NCGA Statements and Interpretations to the state and local government references. No change to what is tested.",
  },
  {
    id: "reg",
    code: "REG",
    name: "Taxation and Regulation",
    kind: "Core",
    mcqs: 72,
    tbs: 8,
    testlets: [36, 36, 2, 3, 3],
    mcqWeight: 50,
    areas: [
      { name: "Ethics, Professional Responsibilities and Federal Tax Procedures", range: [10, 20] },
      { name: "Business Law", range: [15, 25] },
      { name: "Federal Taxation of Property Transactions", range: [5, 15] },
      { name: "Federal Taxation of Individuals", range: [22, 32] },
      { name: "Federal Taxation of Entities (including tax preparation)", range: [23, 33] },
    ],
    skills: { remembering: [25, 35], application: [35, 45], analysis: [25, 35] },
    change2027:
      "Names digital assets explicitly in the capital gains task. The bigger REG change is the tax law itself: H.R. 1 (the One Big Beautiful Bill Act) has been testable since July 1, 2026.",
  },
  {
    id: "bar",
    code: "BAR",
    name: "Business Analysis and Reporting",
    kind: "Discipline",
    mcqs: 50,
    tbs: 7,
    testlets: [25, 25, 2, 3, 2],
    mcqWeight: 50,
    areas: [
      { name: "Business Analysis", range: [40, 50] },
      { name: "Technical Accounting and Reporting", range: [35, 45] },
      { name: "State and Local Governments", range: [10, 20] },
    ],
    skills: { remembering: [10, 20], application: [45, 55], analysis: [30, 40] },
    change2027:
      "Clarifies that the OPEB liability task covers plans administered through a trust and plans that are not.",
  },
  {
    id: "isc",
    code: "ISC",
    name: "Information Systems and Controls",
    kind: "Discipline",
    mcqs: 82,
    tbs: 6,
    testlets: [41, 41, 1, 3, 2],
    mcqWeight: 60,
    areas: [
      { name: "Information Systems and Data Management", range: [35, 45] },
      { name: "Security, Confidentiality and Privacy", range: [35, 45] },
      { name: "Considerations for System and Organization Controls (SOC) Engagements", range: [15, 25] },
    ],
    skills: { remembering: [55, 65], application: [20, 30], analysis: [10, 20] },
    change2027:
      "Narrows blockchain: candidates recognize it as a system that interacts with ERP and accounting systems. The task on using COSO to evaluate blockchain risks is removed.",
  },
  {
    id: "tcp",
    code: "TCP",
    name: "Tax Compliance and Planning",
    kind: "Discipline",
    mcqs: 68,
    tbs: 7,
    testlets: [34, 34, 2, 3, 2],
    mcqWeight: 50,
    areas: [
      { name: "Tax Compliance and Planning for Individuals and Personal Financial Planning", range: [30, 40] },
      { name: "Entity Tax Compliance", range: [30, 40] },
      { name: "Entity Tax Planning", range: [10, 20] },
      { name: "Property Transactions (disposition of assets)", range: [10, 20] },
    ],
    skills: { remembering: [5, 15], application: [55, 65], analysis: [25, 35] },
    change2027:
      "No blueprint changes. Like REG, TCP has tested the H.R. 1 tax law changes since July 1, 2026.",
  },
];

const SKILLS = [
  {
    key: "remembering" as const,
    name: "Remembering and Understanding",
    description: "Recall a rule or concept and explain what it means.",
  },
  {
    key: "application" as const,
    name: "Application",
    description: "Use a rule to work through a familiar situation or calculation.",
  },
  {
    key: "analysis" as const,
    name: "Analysis",
    description: "Break a problem into parts, spot relationships, and find what is wrong or missing.",
  },
  {
    key: "evaluation" as const,
    name: "Evaluation",
    description: "Use professional judgment to reach a conclusion. Tested only in AUD.",
  },
];

const KEY_DATES = [
  {
    date: "July 1, 2026",
    title: "H.R. 1 tax changes become testable",
    body: "One Big Beautiful Bill Act provisions with 2024 and 2025 effective dates are eligible in REG and TCP. Later provisions become eligible in the calendar quarter that begins six months after they take effect.",
  },
  {
    date: "September 16, 2026",
    title: "2027 blueprints approved",
    body: "The AICPA Board of Examiners approves the revisions. None changes the format, weights, or skill levels.",
  },
  {
    date: "January 1, 2027",
    title: "2027 blueprints take effect",
    body: "QC 1000, the PCAOB's quality control standard, also becomes eligible in AUD. Its September 2026 amendments become eligible in the first quarter that begins six months after the SEC approves them.",
  },
  {
    date: "July 1 to 11, 2027",
    title: "No testing",
    body: "Testing pauses while the exam moves to a new delivery platform.",
  },
  {
    date: "July 12, 2027",
    title: "New delivery platform",
    body: "Testing resumes with an updated interface. For the first 12 months, scores are released on an adjusted, roughly quarterly schedule.",
  },
];

const SOURCES = [
  {
    label: "Uniform CPA Examination Blueprints (effective January 1, 2027)",
    href: "https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam",
  },
  {
    label: "Summary of changes to the blueprints effective January 1, 2027",
    href: "https://assets.ctfassets.net/rb9cdnjh59cm/5CsrSRU2mFGsmWEo9FqwLy/83e5ec97beab5daff376dba518589e75/Summary_of_Changes_to_the_Exam_Blueprints_effective_01012027.pdf",
  },
  {
    label: "Testing of H.R. 1 (One Big Beautiful Bill Act) on the CPA Exam",
    href: "https://assets.ctfassets.net/rb9cdnjh59cm/7E8iJ3Bqw2n90Ckm3RJokr/be209fa92afc4b6abaed980c3186757f/Testing_of_H.R._1_on_the_CPA_Exam.pdf",
  },
  {
    label: "Testing of QC 1000 on the CPA Exam",
    href: "https://assets.ctfassets.net/rb9cdnjh59cm/1niPPEpfNfWwknXYA1Sa8w/3a50dec5ee6bfc711b1451acf9d2acfd/QC_1000_Announcement.pdf",
  },
  {
    label: "CPA Exam user interface changes coming in 2027",
    href: "https://www.aicpa-cima.com/professional-insights/article/cpa-exam-user-interface-changes-coming-in-2027",
  },
  {
    label: "When you will get your CPA Exam score",
    href: "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score",
  },
];

/* Shared scale for every range bar, so bars compare across sections. */
const SCALE_MAX = 70;

const AXIS_TICKS = [0, 10, 20, 30, 40, 50, 60, 70];

const ON_THIS_PAGE = [
  { id: "testing-in-2026", label: "Testing in 2026" },
  { id: "structure", label: "How the exam is built" },
  { id: "sections", label: "Section by section" },
  { id: "changes", label: "What changed" },
  { id: "dates", label: "Key dates" },
  { id: "compare", label: "Side by side" },
  { id: "skills", label: "Skill levels" },
  { id: "sources", label: "Sources" },
];

/* Components */

function secStyle(id: Section["id"]): CSSProperties {
  return { "--sec": `var(--sec-${id})` } as CSSProperties;
}

function Spot({ id, className }: { id: Section["id"]; className?: string }) {
  return (
    <img
      className={className}
      src={useBaseUrl(`/img/illustrations/spot-${id}.webp`)}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
}

function RangeBar({ label, range }: { label: string; range: Range }) {
  const [low, high] = range;
  return (
    <div className={styles.rangeRow}>
      <div className={styles.rangeLabel}>{label}</div>
      <div className={styles.rangeValue}>
        {low}-{high}%
      </div>
      <div
        className={styles.rangeTrack}
        role="img"
        aria-label={`${label}: ${low} to ${high} percent`}
      >
        <span
          className={styles.rangeBand}
          style={{
            left: `${(low / SCALE_MAX) * 100}%`,
            width: `${((high - low) / SCALE_MAX) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

function Axis() {
  return (
    <div className={styles.axis} aria-hidden="true">
      {AXIS_TICKS.map((t) => (
        <span key={t} style={{ left: `${(t / SCALE_MAX) * 100}%` }}>
          {t}%
        </span>
      ))}
    </div>
  );
}

function TestletStrip({ section }: { section: Section }) {
  return (
    <ol className={styles.testlets} aria-label="Testlets in order">
      {section.testlets.map((count, i) => {
        const isMcq = i < 2;
        return (
          <li
            key={i}
            className={clsx(styles.testlet, isMcq ? styles.testletMcq : styles.testletTbs)}
          >
            <span className={styles.testletNumber}>Testlet {i + 1}</span>
            <span className={styles.testletCount}>
              {count} {isMcq ? "MCQs" : count === 1 ? "TBS" : "TBSs"}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function SectionPanel({ section }: { section: Section }) {
  const skills = SKILLS.filter((s) => section.skills[s.key]);
  return (
    <div style={secStyle(section.id)}>
      <div className={styles.panelHeader}>
        <div>
          <p className={styles.panelEyebrow}>{section.kind} section</p>
          <h3 className={styles.panelTitle}>
            {section.code}: {section.name}
          </h3>
        </div>
        <Link to={`/${section.id}`} className={styles.panelLink}>
          Study {section.code} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <dl className={styles.factGrid}>
        <div className={styles.fact}>
          <dt>Time</dt>
          <dd>4 hours</dd>
        </div>
        <div className={styles.fact}>
          <dt>Multiple-choice questions</dt>
          <dd>{section.mcqs}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Task-based simulations</dt>
          <dd>{section.tbs}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Score weight (MCQ / TBS)</dt>
          <dd>
            {section.mcqWeight}% / {100 - section.mcqWeight}%
          </dd>
        </div>
      </dl>

      <TestletStrip section={section} />

      <div className={styles.panelColumns}>
        <div>
          <h4 className={styles.panelSubhead}>Content areas</h4>
          {section.areas.map((area) => (
            <RangeBar key={area.name} label={area.name} range={area.range} />
          ))}
          <Axis />
        </div>
        <div>
          <h4 className={styles.panelSubhead}>Skill levels</h4>
          {skills.map((skill) => (
            <RangeBar
              key={skill.key}
              label={skill.name}
              range={section.skills[skill.key] as Range}
            />
          ))}
          <Axis />
        </div>
      </div>

      <p className={styles.panelChange}>
        <strong>What changed for 2027: </strong>
        {section.change2027}
      </p>
    </div>
  );
}

function SectionExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + SECTIONS.length) % SECTIONS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const section = SECTIONS[active];
  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="Exam sections" onKeyDown={onKeyDown}>
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${s.id}`}
            tabIndex={i === active ? 0 : -1}
            className={clsx(styles.tab, i === active && styles.tabActive)}
            style={secStyle(s.id)}
            onClick={() => setActive(i)}
          >
            <Spot id={s.id} className={styles.tabArt} />
            <span className={styles.tabCode}>{s.code}</span>
            <span className={styles.tabKind}>{s.kind}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${section.id}`} aria-labelledby={`tab-${section.id}`}>
        <SectionPanel section={section} />
      </div>
    </div>
  );
}

function fmt(range?: Range) {
  return range ? `${range[0]}-${range[1]}%` : "Not tested";
}

/** Tracks which page section is under the top of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function BlockHeader({ id, kicker, title, children }: {
  id: string;
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.blockHeader}>
      <p className={styles.kicker}>{kicker}</p>
      <h2 id={id} className={styles.blockTitle}>
        {title}
      </h2>
      {children ? <p className={styles.blockLead}>{children}</p> : null}
    </div>
  );
}

/* Page */

const TOC_IDS = ON_THIS_PAGE.map((item) => item.id);

export default function Blueprint2027(): React.JSX.Element {
  const activeId = useActiveSection(TOC_IDS);
  const core = SECTIONS.filter((s) => s.kind === "Core");
  const disciplines = SECTIONS.filter((s) => s.kind === "Discipline");

  return (
    <Layout
      title="CPA Exam Blueprints 2027"
      description="A plain-English guide to the 2027 Uniform CPA Examination Blueprints: exam format, what each section covers, what changed for 2027, and what it means if you test in 2026."
    >
      <div className={clsx("landing", styles.page)}>
        <header className={styles.hero}>
          <div className={clsx(styles.container, styles.heroGrid)}>
            <div>
              <p className={styles.eyebrow}>
                <CalendarDays size={15} aria-hidden="true" />
                Effective January 1, 2027
              </p>
              <h1 className={styles.heroTitle}>
                What the CPA Exam tests <span className={styles.heroAccent}>in 2027</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A plain-English guide to the AICPA&apos;s Uniform CPA Examination
                Blueprints: how the exam is built, what each section covers, and
                what changed this year. This book follows the 2027 blueprints.
              </p>
              <div className={styles.heroActions}>
                <a href="#sections" className={styles.primaryCta}>
                  Explore the sections <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href={SOURCES[0].href}
                  className={styles.secondaryCta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official blueprints <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className={styles.heroArt}>
              <img
                src={useBaseUrl("/img/illustrations/bear-drafting.webp")}
                alt="A bear pointing a pencil at a blueprint pinned to a drafting easel"
                width={1000}
                height={939}
                fetchPriority="high"
              />
            </div>
          </div>

          <div className={styles.container}>
            <dl className={styles.titleBlock}>
              <div>
                <dt>Sections to pass</dt>
                <dd>3 Core + 1 Discipline</dd>
              </div>
              <div>
                <dt>Time per section</dt>
                <dd>4 hours</dd>
              </div>
              <div>
                <dt>Testlets</dt>
                <dd>5: 2 MCQ, then 3 TBS</dd>
              </div>
              <div>
                <dt>Approved</dt>
                <dd>September 16, 2026</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className={clsx(styles.container, styles.layout)}>
          <nav className={styles.toc} aria-label="On this page">
            <p className={styles.tocTitle}>On this page</p>
            <ol>
              {ON_THIS_PAGE.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={clsx(styles.tocLink, activeId === item.id && styles.tocActive)}
                    aria-current={activeId === item.id ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <main className={styles.main}>
            <section id="testing-in-2026" className={styles.callout} aria-labelledby="testing-2026-title">
              <img
                className={styles.calloutArt}
                src={useBaseUrl("/img/illustrations/bear-thumbs-up.webp")}
                alt=""
                aria-hidden="true"
                width={388}
                height={520}
              />
              <div className={styles.calloutBody}>
                <p className={styles.kicker}>Testing in 2026</p>
                <h2 id="testing-2026-title" className={styles.calloutTitle}>
                  Testing before January 1, 2027? Yes, this book still works for you.
                </h2>
                <p>
                  The 2027 revisions are clarifications. The exam format, content
                  areas, weights, and skill levels are exactly the same as in the
                  2026 blueprints, so what you study here is what you will be tested on.
                </p>
                <ul className={styles.calloutList}>
                  <li>
                    <strong>Tax law is the same for you.</strong> The H.R. 1 (One Big
                    Beautiful Bill Act) changes this book teaches have been testable in
                    REG and TCP since July 1, 2026.
                  </li>
                  <li>
                    <strong>Two topics differ.</strong> QC 1000 in AUD is not tested
                    until January 1, 2027, and the 2026 ISC blueprint still includes a
                    task on using COSO to evaluate blockchain risks. The AUD and ISC
                    chapters point out both.
                  </li>
                </ul>
              </div>
            </section>

            <section id="structure" aria-labelledby="structure-title">
              <BlockHeader
                id="structure-title"
                kicker="How the exam is built"
                title="Three Core sections, then one Discipline of your choice"
              >
                Every candidate passes AUD, FAR, and REG, plus one Discipline: BAR,
                ISC, or TCP. Each section is four hours and five testlets. The first
                two testlets are multiple-choice questions (MCQs). The last three are
                task-based simulations (TBSs). MCQs and TBSs each count for half of
                your score in every section except ISC, where MCQs count for 60%.
              </BlockHeader>
              <div className={styles.path}>
                <div>
                  <p className={styles.pathLabel}>Core: take all three</p>
                  <ul className={styles.pathList}>
                    {core.map((s) => (
                      <li key={s.id}>
                        <Link to={`/${s.id}`} className={styles.pathItem} style={secStyle(s.id)}>
                          <Spot id={s.id} className={styles.pathArt} />
                          <span>
                            <strong>{s.code}</strong>
                            <span>{s.name}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.pathJoin} aria-hidden="true">
                  +
                </div>
                <div>
                  <p className={styles.pathLabel}>Discipline: choose one</p>
                  <ul className={styles.pathList}>
                    {disciplines.map((s) => (
                      <li key={s.id}>
                        <Link to={`/${s.id}`} className={styles.pathItem} style={secStyle(s.id)}>
                          <Spot id={s.id} className={styles.pathArt} />
                          <span>
                            <strong>{s.code}</strong>
                            <span>{s.name}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="sections" aria-labelledby="sections-title">
              <BlockHeader id="sections-title" kicker="Section by section" title="What each section covers">
                The blueprints give each content area and skill level a range of the
                exam. All bars share one scale (0 to {SCALE_MAX}%), so you can compare
                sections.
              </BlockHeader>
              <SectionExplorer />
            </section>

            <section id="changes" aria-labelledby="changes-title">
              <BlockHeader id="changes-title" kicker="New for 2027" title="What changed, in one line each">
                The AICPA says none of the 2027 revisions significantly changes the
                nature or scope of what is tested.
              </BlockHeader>
              <div>
                <div className={styles.revisionsHead} aria-hidden="true">
                  <span>Section</span>
                  <span>Revision</span>
                </div>
                <ul className={styles.revisionList}>
                  {SECTIONS.map((s) => (
                    <li key={s.id} className={styles.revision} style={secStyle(s.id)}>
                      <span className={styles.revisionCode}>{s.code}</span>
                      <p>{s.change2027}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="dates" aria-labelledby="dates-title">
              <BlockHeader id="dates-title" kicker="Plan ahead" title="Key dates for 2026 and 2027" />
              <div className={styles.datesGrid}>
                <ol className={styles.timeline}>
                  {KEY_DATES.map((d) => (
                    <li key={d.date} className={styles.timelineItem}>
                      <time className={styles.timelineDate}>{d.date}</time>
                      <h3 className={styles.timelineTitle}>{d.title}</h3>
                      <p>{d.body}</p>
                    </li>
                  ))}
                </ol>
                <img
                  className={styles.datesArt}
                  src={useBaseUrl("/img/illustrations/bear-calendar.webp")}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={546}
                  height={640}
                />
              </div>
              <p className={styles.note}>
                Your credit window for passed sections is set by your board of
                accountancy (often 30 months), and it keeps running while you wait for
                scores. Check your board&apos;s rules before you schedule around the
                July 2027 pause.
              </p>
            </section>

            <section id="compare" aria-labelledby="compare-title">
              <BlockHeader id="compare-title" kicker="At a glance" title="All six sections side by side" />
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Section</th>
                      <th scope="col">MCQs</th>
                      <th scope="col">TBSs</th>
                      <th scope="col">MCQ / TBS weight</th>
                      {SKILLS.map((s) => (
                        <th key={s.key} scope="col">
                          {s.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SECTIONS.map((s) => (
                      <tr key={s.id} style={secStyle(s.id)}>
                        <th scope="row">
                          <span className={styles.tableCode}>{s.code}</span>
                          <span className={styles.tableKind}>{s.kind}</span>
                        </th>
                        <td>{s.mcqs}</td>
                        <td>{s.tbs}</td>
                        <td>
                          {s.mcqWeight}% / {100 - s.mcqWeight}%
                        </td>
                        {SKILLS.map((k) => (
                          <td key={k.key} className={s.skills[k.key] ? undefined : styles.muted}>
                            {fmt(s.skills[k.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="skills" aria-labelledby="skills-title">
              <BlockHeader id="skills-title" kicker="Skill levels" title="How deeply each question asks you to think">
                The blueprints tag every task with a skill level based on Bloom&apos;s
                Taxonomy. Higher levels lean on judgment rather than recall.
              </BlockHeader>
              <ol className={styles.stairs}>
                {SKILLS.map((s, i) => (
                  <li
                    key={s.key}
                    className={styles.stair}
                    style={{ "--level": i } as CSSProperties}
                  >
                    <span className={styles.stairLevel}>Level {i + 1}</span>
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <footer id="sources" className={styles.sources}>
              <h2 className={styles.sourcesTitle}>
                <FileText size={18} aria-hidden="true" /> Sources
              </h2>
              <ul>
                {SOURCES.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p>
                Last checked October 21, 2026. This page summarizes the AICPA
                blueprints and announcements; the official documents govern.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </Layout>
  );
}
