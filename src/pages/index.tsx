import type { CSSProperties } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLatestVersion } from "@docusaurus/plugin-content-docs/client";
import JournalEntry from "@site/src/components/JournalEntry";
import { ArrowRight, ArrowUpRight, GitPullRequest } from "lucide-react";
import styles from "./index.module.css";

interface Section {
  id: "far" | "aud" | "reg" | "bar" | "isc" | "tcp";
  code: string;
  name: string;
  description: string;
}

const CORE: Section[] = [
  {
    id: "far",
    code: "FAR",
    name: "Financial Accounting and Reporting",
    description: "U.S. GAAP for businesses, not-for-profits, and governments, from the conceptual framework to leases and income taxes.",
  },
  {
    id: "aud",
    code: "AUD",
    name: "Auditing and Attestation",
    description: "Ethics, risk assessment, evidence, and the reports an auditor signs at the end of an engagement.",
  },
  {
    id: "reg",
    code: "REG",
    name: "Taxation and Regulation",
    description: "Federal taxation of individuals and entities, business law, and the rules for tax practice.",
  },
];

const DISCIPLINES: Section[] = [
  {
    id: "bar",
    code: "BAR",
    name: "Business Analysis and Reporting",
    description: "Financial analysis, planning and forecasting, technical accounting, and state and local governments.",
  },
  {
    id: "isc",
    code: "ISC",
    name: "Information Systems and Controls",
    description: "Information systems, data management, security and privacy, and SOC engagements.",
  },
  {
    id: "tcp",
    code: "TCP",
    name: "Tax Compliance and Planning",
    description: "Tax compliance and planning for individuals and entities, and property transactions.",
  },
];

const STEPS = [
  {
    title: "The idea in plain English",
    body: "Each topic opens with what it is, why it matters, and how it fits with what you already know.",
  },
  {
    title: "The precise rule",
    body: "Next, the rule itself, stated as precisely as the standard states it.",
  },
  {
    title: "A worked example",
    body: "Last, a short example with round numbers and journal entries, using companies such as Bear Co. and Polar Inc.",
  },
];

/** Counts the chapters in each section's sidebar, leaving out the section's intro page. */
function useChapterCounts(): Record<string, number> {
  const { docs } = useLatestVersion(undefined);
  const counts: Record<string, number> = {};
  for (const doc of docs) {
    if (!doc.sidebar || doc.id.endsWith("/index")) continue;
    const section = doc.sidebar.replace(/Sidebar$/, "");
    counts[section] = (counts[section] ?? 0) + 1;
  }
  return counts;
}

function SectionRow({ section, chapters }: { section: Section; chapters?: number }) {
  return (
    <li>
      <Link
        to={`/${section.id}`}
        className={styles.tocRow}
        style={{ "--sec": `var(--sec-${section.id})` } as CSSProperties}
      >
        <span className={styles.tocArt} aria-hidden="true">
          <img src={useBaseUrl(`/img/illustrations/spot-${section.id}.webp`)} alt="" loading="lazy" />
        </span>
        <span className={styles.tocText}>
          <span className={styles.tocCode}>{section.code}</span>
          <span className={styles.tocName}>{section.name}</span>
          <span className={styles.tocDesc}>{section.description}</span>
        </span>
        <span className={styles.tocMeta}>
          {chapters ? <span className={styles.tocCount}>{chapters} chapters</span> : null}
          <ArrowRight className={styles.tocArrow} size={18} aria-hidden="true" />
        </span>
      </Link>
    </li>
  );
}

export default function Home(): React.JSX.Element {
  const counts = useChapterCounts();
  const totalChapters = Object.values(counts).reduce((sum, n) => sum + n, 0);

  return (
    <Layout
      title="Free CPA Exam Textbook"
      description="A free, open-source textbook for all six sections of the CPA Exam, written in plain English and kept current with the 2027 CPA Exam Blueprints."
    >
      <div className={clsx("landing", styles.page)}>
        <header className={styles.hero}>
          <div className={clsx(styles.container, styles.heroGrid)}>
            <div className={styles.heroCopy}>
              <p className={styles.heroKicker}>Updated for the 2027 CPA Exam Blueprints</p>
              <h1 className={styles.heroTitle}>
                A free, <span className={styles.nowrap}>open-source</span> textbook for the{" "}
                <span className={styles.heroHighlight}>CPA Exam</span>
              </h1>
              <p className={styles.heroLede}>
                Chapters for all six sections of the CPA Exam. Each topic explains the
                idea in plain English, states the rule, and works through a short
                example.
              </p>
              <div className={styles.heroActions}>
                <a href="#contents" className={styles.btnHoney}>
                  Start reading <ArrowRight size={18} aria-hidden="true" />
                </a>
                <Link to="/blueprint/2027" className={styles.btnGhost}>
                  What&apos;s tested in 2027
                </Link>
              </div>
              <dl className={styles.heroStats}>
                <div>
                  <dt>Exam sections</dt>
                  <dd>6</dd>
                </div>
                <div>
                  <dt>Chapters</dt>
                  <dd>{totalChapters || "100+"}</dd>
                </div>
                <div>
                  <dt>Blueprints</dt>
                  <dd>2027</dd>
                </div>
              </dl>
            </div>

            <div className={styles.heroArt}>
              <span className={styles.heroDisc} aria-hidden="true" />
              <img
                className={styles.heroBear}
                src={useBaseUrl("/img/illustrations/bear-reading.webp")}
                alt="A brown bear sitting on a stack of textbooks, reading an open book, with a pencil tucked behind one ear"
                width={790}
                height={1000}
                fetchPriority="high"
              />
              <figure className={styles.ledgerCard} aria-label="A playful journal entry">
                <figcaption>Today&apos;s entry</figcaption>
                <div className={styles.ledgerRow}>
                  <span>Dr. Knowledge</span>
                  <span>300</span>
                </div>
                <div className={clsx(styles.ledgerRow, styles.ledgerCredit)}>
                  <span>Cr. Study hours</span>
                  <span>300</span>
                </div>
              </figure>
            </div>
          </div>
        </header>

        <section id="contents" className={styles.contents} aria-labelledby="contents-title">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Contents</p>
              <h2 id="contents-title" className={styles.sectionTitle}>
                The six exam sections
              </h2>
              <p className={styles.sectionLede}>
                Every candidate takes the three Core sections and one Discipline of
                their choice. Each section opens with an overview of its blueprint.
              </p>
            </div>

            <div className={styles.parts}>
              <div>
                <div className={styles.partHead}>
                  <span className={styles.partLabel}>Part I</span>
                  <h3 className={styles.partTitle}>Core sections</h3>
                  <span className={styles.partNote}>Take all three</span>
                </div>
                <ol className={styles.toc}>
                  {CORE.map((s) => (
                    <SectionRow key={s.id} section={s} chapters={counts[s.id]} />
                  ))}
                </ol>
              </div>
              <div>
                <div className={styles.partHead}>
                  <span className={styles.partLabel}>Part II</span>
                  <h3 className={styles.partTitle}>Disciplines</h3>
                  <span className={styles.partNote}>Choose one</span>
                </div>
                <ol className={styles.toc}>
                  {DISCIPLINES.map((s) => (
                    <SectionRow key={s.id} section={s} chapters={counts[s.id]} />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.method} aria-labelledby="method-title">
          <div className={clsx(styles.container, styles.methodGrid)}>
            <div>
              <p className={styles.kicker}>How chapters are organized</p>
              <h2 id="method-title" className={styles.sectionTitle}>
                The idea, the rule, then an example
              </h2>
              <ol className={styles.steps}>
                {STEPS.map((step, i) => (
                  <li key={step.title} className={styles.step}>
                    <span className={styles.stepNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepBody}>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.sampleWrap}>
              <figure className={styles.samplePage}>
                <div className={styles.sampleBar}>
                  <span className={styles.sampleSection}>FAR</span>
                  <span>Revenue Recognition (ASC 606)</span>
                </div>
                <div className={styles.sampleBody}>
                  <h3 className={styles.sampleHeading}>Contract liabilities</h3>
                  <p>
                    When a customer pays before you deliver, you owe them the goods or
                    services. That obligation is a <strong>contract liability</strong>,
                    and it becomes revenue as you perform.
                  </p>
                  <p>Cub Entertainment receives $30,000 upfront for a 12-month subscription:</p>
                  <div className={styles.sampleEntry}>
                    <JournalEntry code={"Dr. Cash[a] 30,000\nCr. Contract liability[l] 30,000"} />
                  </div>
                  <p className={styles.sampleNote}>
                    Each month it earns $2,500 ($30,000 ÷ 12) and moves that amount from
                    the liability to revenue.
                  </p>
                </div>
                <figcaption className={styles.sampleCaption}>
                  From the FAR chapter on revenue recognition.{" "}
                  <Link to="/far/special-topics-and-transactions/revenue-recognition">
                    Read it
                  </Link>
                </figcaption>
              </figure>
              <img
                className={styles.sampleBear}
                src={useBaseUrl("/img/illustrations/bear-writing.webp")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={701}
                height={760}
              />
            </div>
          </div>
        </section>

        <section className={styles.blueprint} aria-labelledby="blueprint-title">
          <div className={clsx(styles.container, styles.blueprintGrid)}>
            <img
              className={styles.blueprintArt}
              src={useBaseUrl("/img/illustrations/bear-blueprint-scroll.webp")}
              alt="A bear kneeling to unroll a long blueprint"
              loading="lazy"
              width={1100}
              height={762}
            />
            <div>
              <p className={styles.kickerOnDark}>2027 CPA Exam Blueprints</p>
              <h2 id="blueprint-title" className={styles.bandTitle}>
                What the 2027 blueprints change
              </h2>
              <p className={styles.bandLede}>
                The 2027 blueprints take effect January 1, 2027. They clarify a handful
                of tasks without changing the format, weights, or skill levels, so this
                book applies whether you test in 2026 or 2027.
              </p>
              <Link to="/blueprint/2027" className={styles.btnHoney}>
                Read the blueprint guide <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.openSource} aria-labelledby="open-title">
          <div className={clsx(styles.container, styles.openGrid)}>
            <div>
              <p className={styles.kicker}>Open source</p>
              <h2 id="open-title" className={styles.sectionTitle}>
                Corrections and contributions
              </h2>
              <p className={styles.sectionLede}>
                The book&apos;s source is on GitHub. If you find an error or a rule that
                has changed, you can open an issue or send a pull request.
              </p>
              <div className={styles.openActions}>
                <a
                  href="https://github.com/subwaymatch/cpabear-book"
                  className={styles.btnInk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitPullRequest size={18} aria-hidden="true" /> View on GitHub
                </a>
                <a
                  href="https://github.com/subwaymatch/cpabear-book/issues"
                  className={styles.textLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report an issue <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <img
              className={styles.openArt}
              src={useBaseUrl("/img/illustrations/bears-building-book.webp")}
              alt="A brown bear and a polar bear working together on a giant open book"
              loading="lazy"
              width={1100}
              height={742}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
